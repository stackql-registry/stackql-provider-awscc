---
title: workflows
hide_title: false
hide_table_of_contents: false
keywords:
  - workflows
  - omics
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

Creates, updates, deletes or gets a <code>workflow</code> resource or lists <code>workflows</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>workflows</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Omics::Workflow Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.omics.workflows" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="creation_time" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="definition_uri" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="engine" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="main" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="parameter_template" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="accelerators" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="storage_capacity" /></td><td><code>number</code></td><td></td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>object</code></td><td>A map of resource tags</td></tr>
<tr><td><CopyableCode code="type" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="storage_type" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="uuid" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="workflow_bucket_owner_id" /></td><td><code>string</code></td><td>Optional workflow bucket owner ID to verify the workflow bucket</td></tr>
<tr><td><CopyableCode code="definition_repository" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="parameter_template_path" /></td><td><code>string</code></td><td>Path to the primary workflow parameter template JSON file inside the repository</td></tr>
<tr><td><CopyableCode code="readme_path" /></td><td><code>string</code></td><td>The path to the workflow README markdown file within the repository. This file provides documentation and usage information for the workflow. If not specified, the README.md file from the root directory of the repository will be used.</td></tr>
<tr><td><CopyableCode code="readme_uri" /></td><td><code>string</code></td><td>The S3 URI of the README file for the workflow. This file provides documentation and usage information for the workflow. The S3 URI must begin with s3://USER-OWNED-BUCKET/. The requester must have access to the S3 bucket and object. The max README content length is 500 KiB.</td></tr>
<tr><td><CopyableCode code="readme_markdown" /></td><td><code>string</code></td><td>The markdown content for the workflow's README file. This provides documentation and usage information for users of the workflow.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflow.html"><code>AWS::Omics::Workflow</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples
Gets all <code>workflows</code> in a region.
```sql
SELECT
region,
arn,
creation_time,
definition_uri,
description,
engine,
id,
main,
name,
parameter_template,
status,
accelerators,
storage_capacity,
tags,
type,
storage_type,
uuid,
workflow_bucket_owner_id,
definition_repository,
parameter_template_path,
readme_path,
readme_uri,
readme_markdown
FROM awscc.omics.workflows
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>workflow</code>.
```sql
SELECT
region,
arn,
creation_time,
definition_uri,
description,
engine,
id,
main,
name,
parameter_template,
status,
accelerators,
storage_capacity,
tags,
type,
storage_type,
uuid,
workflow_bucket_owner_id,
definition_repository,
parameter_template_path,
readme_path,
readme_uri,
readme_markdown
FROM awscc.omics.workflows
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>workflow</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.omics.workflows (
 DefinitionUri,
 Description,
 Engine,
 Main,
 Name,
 ParameterTemplate,
 Accelerators,
 StorageCapacity,
 Tags,
 StorageType,
 WorkflowBucketOwnerId,
 DefinitionRepository,
 ParameterTemplatePath,
 readmePath,
 readmeUri,
 readmeMarkdown,
 region
)
SELECT 
'{{ DefinitionUri }}',
 '{{ Description }}',
 '{{ Engine }}',
 '{{ Main }}',
 '{{ Name }}',
 '{{ ParameterTemplate }}',
 '{{ Accelerators }}',
 '{{ StorageCapacity }}',
 '{{ Tags }}',
 '{{ StorageType }}',
 '{{ WorkflowBucketOwnerId }}',
 '{{ DefinitionRepository }}',
 '{{ ParameterTemplatePath }}',
 '{{ readmePath }}',
 '{{ readmeUri }}',
 '{{ readmeMarkdown }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.omics.workflows (
 DefinitionUri,
 Description,
 Engine,
 Main,
 Name,
 ParameterTemplate,
 Accelerators,
 StorageCapacity,
 Tags,
 StorageType,
 WorkflowBucketOwnerId,
 DefinitionRepository,
 ParameterTemplatePath,
 readmePath,
 readmeUri,
 readmeMarkdown,
 region
)
SELECT 
 '{{ DefinitionUri }}',
 '{{ Description }}',
 '{{ Engine }}',
 '{{ Main }}',
 '{{ Name }}',
 '{{ ParameterTemplate }}',
 '{{ Accelerators }}',
 '{{ StorageCapacity }}',
 '{{ Tags }}',
 '{{ StorageType }}',
 '{{ WorkflowBucketOwnerId }}',
 '{{ DefinitionRepository }}',
 '{{ ParameterTemplatePath }}',
 '{{ readmePath }}',
 '{{ readmeUri }}',
 '{{ readmeMarkdown }}',
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
  - name: workflow
    props:
      - name: DefinitionUri
        value: '{{ DefinitionUri }}'
      - name: Description
        value: '{{ Description }}'
      - name: Engine
        value: '{{ Engine }}'
      - name: Main
        value: '{{ Main }}'
      - name: Name
        value: '{{ Name }}'
      - name: ParameterTemplate
        value: {}
      - name: Accelerators
        value: '{{ Accelerators }}'
      - name: StorageCapacity
        value: null
      - name: Tags
        value: {}
      - name: StorageType
        value: '{{ StorageType }}'
      - name: WorkflowBucketOwnerId
        value: '{{ WorkflowBucketOwnerId }}'
      - name: DefinitionRepository
        value:
          connectionArn: '{{ connectionArn }}'
          fullRepositoryId: '{{ fullRepositoryId }}'
          sourceReference:
            type: '{{ type }}'
            value: '{{ value }}'
          excludeFilePatterns:
            - '{{ excludeFilePatterns[0] }}'
      - name: ParameterTemplatePath
        value: '{{ ParameterTemplatePath }}'
      - name: readmePath
        value: '{{ readmePath }}'
      - name: readmeUri
        value: '{{ readmeUri }}'
      - name: readmeMarkdown
        value: '{{ readmeMarkdown }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.omics.workflows
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>workflows</code> resource, the following permissions are required:

### Create
```json
omics:CreateWorkflow,
omics:GetWorkflow,
omics:TagResource,
s3:PutObject,
s3:GetObject,
s3:GetObjectAttributes,
s3:HeadObject,
s3:GetEncryptionConfiguration,
kms:Decrypt,
kms:GenerateDataKey,
kms:GenerateDataKeyPair,
kms:GenerateDataKeyPairWithoutPlaintext,
kms:GenerateDataKeyWithoutPlaintext,
codeconnections:UseConnection,
codeconnections:GetConnection,
codeconnections:GetHost
```

### Read
```json
omics:GetWorkflow
```

### Update
```json
omics:UpdateWorkflow,
omics:GetWorkflow,
omics:TagResource,
omics:ListTagsForResource,
omics:UntagResource
```

### Delete
```json
omics:DeleteWorkflow,
omics:GetWorkflow
```

### List
```json
omics:ListWorkflows
```
