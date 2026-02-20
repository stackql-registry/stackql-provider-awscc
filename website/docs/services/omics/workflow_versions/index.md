---
title: workflow_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - workflow_versions
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

Creates, updates, deletes or gets a <code>workflow_version</code> resource or lists <code>workflow_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>workflow_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Omics::WorkflowVersion Resource Type.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.omics.workflow_versions" /></td></tr>
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
    "name": "workflow_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "version_name",
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
    "name": "main",
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
    "name": "storage_type",
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
    "name": "uuid",
    "type": "string",
    "description": ""
  },
  {
    "name": "workflow_bucket_owner_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "parameter_template_path",
    "type": "string",
    "description": "Path to the primary workflow parameter template JSON file inside the repository"
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
    "name": "arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflowversion.html"><code>AWS::Omics::WorkflowVersion</code></a>.

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
    <td><code>workflow_versions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="WorkflowId, VersionName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>workflow_versions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>workflow_versions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>workflow_versions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>workflow_versions</code></td>
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

Gets all properties from an individual <code>workflow_version</code>.
```sql
SELECT
region,
arn,
workflow_id,
version_name,
creation_time,
definition_uri,
description,
engine,
main,
parameter_template,
status,
accelerators,
storage_type,
storage_capacity,
tags,
type,
uuid,
workflow_bucket_owner_id,
parameter_template_path,
definition_repository,
readme_path,
readme_uri,
readme_markdown
FROM awscc.omics.workflow_versions
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>workflow_versions</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.omics.workflow_versions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>workflow_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.omics.workflow_versions (
 WorkflowId,
 VersionName,
 region
)
SELECT 
'{{ WorkflowId }}',
 '{{ VersionName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.omics.workflow_versions (
 WorkflowId,
 VersionName,
 DefinitionUri,
 Description,
 Engine,
 Main,
 ParameterTemplate,
 Accelerators,
 StorageType,
 StorageCapacity,
 Tags,
 WorkflowBucketOwnerId,
 ParameterTemplatePath,
 DefinitionRepository,
 readmePath,
 readmeUri,
 readmeMarkdown,
 region
)
SELECT 
 '{{ WorkflowId }}',
 '{{ VersionName }}',
 '{{ DefinitionUri }}',
 '{{ Description }}',
 '{{ Engine }}',
 '{{ Main }}',
 '{{ ParameterTemplate }}',
 '{{ Accelerators }}',
 '{{ StorageType }}',
 '{{ StorageCapacity }}',
 '{{ Tags }}',
 '{{ WorkflowBucketOwnerId }}',
 '{{ ParameterTemplatePath }}',
 '{{ DefinitionRepository }}',
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
  - name: workflow_version
    props:
      - name: WorkflowId
        value: '{{ WorkflowId }}'
      - name: VersionName
        value: '{{ VersionName }}'
      - name: DefinitionUri
        value: '{{ DefinitionUri }}'
      - name: Description
        value: '{{ Description }}'
      - name: Engine
        value: '{{ Engine }}'
      - name: Main
        value: '{{ Main }}'
      - name: ParameterTemplate
        value: {}
      - name: Accelerators
        value: '{{ Accelerators }}'
      - name: StorageType
        value: '{{ StorageType }}'
      - name: StorageCapacity
        value: null
      - name: Tags
        value: {}
      - name: WorkflowBucketOwnerId
        value: '{{ WorkflowBucketOwnerId }}'
      - name: ParameterTemplatePath
        value: '{{ ParameterTemplatePath }}'
      - name: DefinitionRepository
        value:
          connectionArn: '{{ connectionArn }}'
          fullRepositoryId: '{{ fullRepositoryId }}'
          sourceReference:
            type: '{{ type }}'
            value: '{{ value }}'
          excludeFilePatterns:
            - '{{ excludeFilePatterns[0] }}'
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

```sql
/*+ update */
UPDATE awscc.omics.workflow_versions
SET PatchDocument = string('{{ {
    "Description": description,
    "StorageType": storage_type,
    "StorageCapacity": storage_capacity,
    "Tags": tags,
    "readmeMarkdown": readme_markdown
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.omics.workflow_versions
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>workflow_versions</code> resource, the following permissions are required:

### Create
```json
omics:CreateWorkflow,
omics:GetWorkflow,
omics:CreateWorkflowVersion,
omics:GetWorkflowVersion,
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
omics:GetWorkflowVersion,
omics:ListTagsForResource
```

### Update
```json
omics:UpdateWorkflowVersion,
omics:GetWorkflowVersion,
omics:TagResource,
omics:ListTagsForResource,
omics:UntagResource
```

### Delete
```json
omics:DeleteWorkflowVersion,
omics:GetWorkflowVersion
```

### List
```json
omics:ListWorkflowVersions
```
