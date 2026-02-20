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
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

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
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "definition_uri",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "engine",
    "type": "string",
    "description": ""
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "main",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "parameter_template",
    "type": "object",
    "description": ""
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "accelerators",
    "type": "string",
    "description": ""
  },
  {
    "name": "storage_capacity",
    "type": "number",
    "description": ""
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A map of resource tags"
  },
  {
    "name": "type",
    "type": "string",
    "description": ""
  },
  {
    "name": "storage_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "uuid",
    "type": "string",
    "description": ""
  },
  {
    "name": "workflow_bucket_owner_id",
    "type": "string",
    "description": "Optional workflow bucket owner ID to verify the workflow bucket"
  },
  {
    "name": "definition_repository",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "connection_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "full_repository_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "source_reference",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "type",
            "type": "string",
            "description": ""
          },
          {
            "name": "value",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "exclude_file_patterns",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "parameter_template_path",
    "type": "string",
    "description": "Path to the primary workflow parameter template JSON file inside the repository"
  },
  {
    "name": "readme_path",
    "type": "string",
    "description": "The path to the workflow README markdown file within the repository. This file provides documentation and usage information for the workflow. If not specified, the README.md file from the root directory of the repository will be used."
  },
  {
    "name": "readme_uri",
    "type": "string",
    "description": "The S3 URI of the README file for the workflow. This file provides documentation and usage information for the workflow. The S3 URI must begin with s3://USER-OWNED-BUCKET/. The requester must have access to the S3 bucket and object. The max README content length is 500 KiB."
  },
  {
    "name": "readme_markdown",
    "type": "string",
    "description": "The markdown content for the workflow's README file. This provides documentation and usage information for users of the workflow."
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
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflow.html"><code>AWS::Omics::Workflow</code></a>.

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
    <td><code>workflows</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>workflows</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>workflows</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>workflows_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>workflows</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
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
WHERE region = 'us-east-1' AND Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>workflows</code> in a region.
```sql
SELECT
region,
id
FROM awscc.omics.workflows_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>workflow</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.omics.workflows
SET PatchDocument = string('{{ {
    "Description": description,
    "Name": name,
    "Tags": tags,
    "StorageType": storage_type,
    "readmeMarkdown": readme_markdown
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.omics.workflows
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>workflows</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

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

</TabItem>
<TabItem value="read">

```json
omics:GetWorkflow
```

</TabItem>
<TabItem value="update">

```json
omics:UpdateWorkflow,
omics:GetWorkflow,
omics:TagResource,
omics:ListTagsForResource,
omics:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
omics:DeleteWorkflow,
omics:GetWorkflow
```

</TabItem>
<TabItem value="list">

```json
omics:ListWorkflows
```

</TabItem>
</Tabs>