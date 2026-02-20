---
title: analyzers
hide_title: false
hide_table_of_contents: false
keywords:
  - analyzers
  - accessanalyzer
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets an <code>analyzer</code> resource or lists <code>analyzers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>analyzers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::AccessAnalyzer::Analyzer type specifies an analyzer of the user's account</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.accessanalyzer.analyzers" /></td></tr>
</tbody>
</table>

## Fields
<Tabs
    defaultValue="get"
    values={[
        { label: 'get (all properties)', value: 'get' },
        { label: 'list (identifiers only)', value: 'list' }
    ]}
>
<TabItem value="get">

<SchemaTable fields={[
  {
    "name": "analyzer_name",
    "type": "string",
    "description": "Analyzer name"
  },
  {
    "name": "archive_rules",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "filter",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "contains",
            "type": "array",
            "description": ""
          },
          {
            "name": "eq",
            "type": "array",
            "description": ""
          },
          {
            "name": "exists",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "property",
            "type": "string",
            "description": ""
          },
          {
            "name": "neq",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "rule_name",
        "type": "string",
        "description": "The archive rule name"
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "Amazon Resource Name (ARN) of the analyzer"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "type",
    "type": "string",
    "description": "The type of the analyzer, must be one of ACCOUNT, ORGANIZATION, ACCOUNT&#95;INTERNAL&#95;ACCESS, ORGANIZATION&#95;INTERNAL&#95;ACCESS, ACCOUNT&#95;UNUSED&#95;ACCESS and ORGANIZATION&#95;UNUSED&#95;ACCESS"
  },
  {
    "name": "analyzer_configuration",
    "type": "object",
    "description": "The configuration for the analyzer",
    "children": [
      {
        "name": "unused_access_configuration",
        "type": "object",
        "description": "The Configuration for Unused Access Analyzer",
        "children": [
          {
            "name": "unused_access_age",
            "type": "integer",
            "description": "The specified access age in days for which to generate findings for unused access. For example, if you specify 90 days, the analyzer will generate findings for IAM entities within the accounts of the selected organization for any access that hasn't been used in 90 or more days since the analyzer's last scan. You can choose a value between 1 and 365 days."
          },
          {
            "name": "analysis_rule",
            "type": "object",
            "description": "Contains information about rules for the analyzer.",
            "children": [
              {
                "name": "exclusions",
                "type": "array",
                "description": "A list of rules for the analyzer containing criteria to exclude from analysis. Entities that meet the rule criteria will not generate findings."
              }
            ]
          }
        ]
      },
      {
        "name": "internal_access_configuration",
        "type": "object",
        "description": "Specifies the configuration of an internal access analyzer for an AWS organization or account. This configuration determines how the analyzer evaluates internal access within your AWS environment.",
        "children": [
          {
            "name": "internal_access_analysis_rule",
            "type": "object",
            "description": "Contains information about analysis rules for the internal access analyzer. Analysis rules determine which entities will generate findings based on the criteria you define when you create the rule.",
            "children": [
              {
                "name": "inclusions",
                "type": "array",
                "description": "A list of rules for the internal access analyzer containing criteria to include in analysis. Only resources that meet the rule criteria will generate findings."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": "Amazon Resource Name (ARN) of the analyzer"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html"><code>AWS::AccessAnalyzer::Analyzer</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Resource</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>analyzers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Type, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>analyzers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>analyzers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>analyzers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>analyzers</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get (all properties)', value: 'get' },
        { label: 'list (identifiers only)', value: 'list' }
    ]}
>
<TabItem value="get">

Gets all properties from an individual <code>analyzer</code>.
```sql
SELECT
region,
analyzer_name,
archive_rules,
arn,
tags,
type,
analyzer_configuration
FROM awscc.accessanalyzer.analyzers
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>analyzers</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.accessanalyzer.analyzers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>analyzer</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

<Tabs
    defaultValue="required"
    values={[
      { label: 'Required Properties', value: 'required', },
      { label: 'All Properties', value: 'all', },
      { label: 'Manifest', value: 'manifest', },
    ]
}>
<TabItem value="required">

```sql
/*+ create */
INSERT INTO awscc.accessanalyzer.analyzers (
 Type,
 region
)
SELECT 
'{{ Type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.accessanalyzer.analyzers (
 AnalyzerName,
 ArchiveRules,
 Tags,
 Type,
 AnalyzerConfiguration,
 region
)
SELECT 
 '{{ AnalyzerName }}',
 '{{ ArchiveRules }}',
 '{{ Tags }}',
 '{{ Type }}',
 '{{ AnalyzerConfiguration }}',
 '{{ region }}';
```
</TabItem>
<TabItem value="manifest">

```yaml
version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: analyzer
    props:
      - name: AnalyzerName
        value: '{{ AnalyzerName }}'
      - name: ArchiveRules
        value:
          - Filter:
              - Contains:
                  - '{{ Contains[0] }}'
                Eq:
                  - '{{ Eq[0] }}'
                Exists: '{{ Exists }}'
                Property: '{{ Property }}'
                Neq:
                  - '{{ Neq[0] }}'
            RuleName: '{{ RuleName }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Type
        value: '{{ Type }}'
      - name: AnalyzerConfiguration
        value:
          UnusedAccessConfiguration:
            UnusedAccessAge: '{{ UnusedAccessAge }}'
            AnalysisRule:
              Exclusions:
                - AccountIds:
                    - '{{ AccountIds[0] }}'
                  ResourceTags:
                    - - null
          InternalAccessConfiguration:
            InternalAccessAnalysisRule:
              Inclusions:
                - AccountIds:
                    - '{{ AccountIds[0] }}'
                  ResourceArns:
                    - '{{ ResourceArns[0] }}'
                  ResourceTypes:
                    - '{{ ResourceTypes[0] }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.accessanalyzer.analyzers
SET data__PatchDocument = string('{{ {
    "ArchiveRules": archive_rules,
    "Tags": tags,
    "AnalyzerConfiguration": analyzer_configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.accessanalyzer.analyzers
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>analyzers</code> resource, the following permissions are required:

### Create
```json
access-analyzer:CreateAnalyzer,
access-analyzer:TagResource,
iam:CreateServiceLinkedRole,
organizations:ListAWSServiceAccessForOrganization,
organizations:ListDelegatedAdministrators
```

### Read
```json
access-analyzer:ListAnalyzers,
access-analyzer:GetAnalyzer,
access-analyzer:ListArchiveRules
```

### Update
```json
access-analyzer:CreateArchiveRule,
access-analyzer:DeleteArchiveRule,
access-analyzer:ListAnalyzers,
access-analyzer:TagResource,
access-analyzer:UntagResource,
access-analyzer:UpdateAnalyzer,
access-analyzer:UpdateArchiveRule
```

### Delete
```json
access-analyzer:DeleteAnalyzer
```

### List
```json
access-analyzer:ListAnalyzers
```
