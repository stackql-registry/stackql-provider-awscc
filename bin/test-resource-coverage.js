// bin/test-resource-coverage.js
//
// Verifies that every resource type in provider-dev/config/cc_supported_resources.js
// is present in the generated provider (openapi/src/awscc/.../services), with an
// exact accounting for types that cannot be generated:
//   - no schema file in provider-dev/downloaded
//   - schema has no handlers (no Cloud Control operations to generate)
// Fails if any supported type is missing for an unexplained reason, if the totals
// do not reconcile, or if the provider contains a type not in the supported list.

import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { load } from 'js-yaml';
import { resourceTypes } from '../provider-dev/config/cc_supported_resources.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const downloadedDir = path.join(__dirname, '../provider-dev/downloaded');
const servicesDir = path.join(__dirname, '../openapi/src/awscc/v00.00.00000/services');

const supported = new Set(resourceTypes);

// index downloaded schemas by typeName
const downloaded = {};
for (const file of fs.readdirSync(downloadedDir)) {
  if (!file.endsWith('.json')) continue;
  const doc = JSON.parse(fs.readFileSync(path.join(downloadedDir, file), 'utf8'));
  if (doc.typeName) {
    downloaded[doc.typeName] = {
      file,
      hasHandlers: !!(doc.handlers && Object.keys(doc.handlers).length > 0),
    };
  }
}

// collect distinct x-cfn-type-name values from generated resources
const generated = new Set();
for (const file of fs.readdirSync(servicesDir)) {
  if (!file.endsWith('.yaml')) continue;
  const doc = load(fs.readFileSync(path.join(servicesDir, file), 'utf8'));
  const resources = (doc.components && doc.components['x-stackQL-resources']) || {};
  for (const resourceDef of Object.values(resources)) {
    if (resourceDef && resourceDef['x-cfn-type-name']) {
      generated.add(resourceDef['x-cfn-type-name']);
    }
  }
}

const noSchema = [];
const noHandlers = [];
const unexplainedMissing = [];

for (const typeName of [...supported].sort()) {
  if (generated.has(typeName)) continue;
  if (!downloaded[typeName]) {
    noSchema.push(typeName);
  } else if (!downloaded[typeName].hasHandlers) {
    noHandlers.push(typeName);
  } else {
    unexplainedMissing.push(typeName);
  }
}

const notSupported = [...generated].filter(t => !supported.has(t)).sort();

console.log('Resource coverage summary');
console.log('-------------------------');
console.log(`supported resource types (cc_supported_resources.js): ${supported.size}`);
console.log(`resource types in generated provider:                 ${generated.size}`);
console.log(`excluded - no schema in provider-dev/downloaded:      ${noSchema.length}`);
console.log(`excluded - schema has no handlers:                    ${noHandlers.length}`);
console.log(`missing for an unexplained reason:                    ${unexplainedMissing.length}`);
console.log(`generated but not in supported list:                  ${notSupported.length}`);

if (noSchema.length > 0) {
  console.log('\ntypes with no downloaded schema:');
  noSchema.forEach(t => console.log(`  ${t}`));
}

if (noHandlers.length > 0) {
  console.log('\ntypes with no handlers in schema (nothing to generate):');
  noHandlers.forEach(t => console.log(`  ${t}`));
}

let failed = false;

if (unexplainedMissing.length > 0) {
  console.error('\nFAIL: supported types missing from the generated provider:');
  unexplainedMissing.forEach(t => console.error(`  ${t}`));
  failed = true;
}

if (notSupported.length > 0) {
  console.error('\nFAIL: generated types not present in the supported list:');
  notSupported.forEach(t => console.error(`  ${t}`));
  failed = true;
}

const reconciled = generated.size + noSchema.length + noHandlers.length + unexplainedMissing.length === supported.size;
if (!reconciled) {
  console.error(`\nFAIL: totals do not reconcile: ${generated.size} generated + ${noSchema.length} no schema + ${noHandlers.length} no handlers != ${supported.size} supported`);
  failed = true;
}

if (failed) {
  process.exit(1);
}

console.log('\nPASS: all supported resource types are accounted for in the generated provider');
