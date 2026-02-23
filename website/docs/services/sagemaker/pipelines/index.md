---
title: pipelines
hide_title: false
hide_table_of_contents: false
keywords:
  - pipelines
  - sagemaker
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

Creates, updates, deletes or gets a <code>pipeline</code> resource or lists <code>pipelines</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>pipelines</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SageMaker::Pipeline</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sagemaker.pipelines" /></td></tr>
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
    "name": "pipeline_name",
    "type": "string",
    "description": "The name of the Pipeline."
  },
  {
    "name": "pipeline_display_name",
    "type": "string",
    "description": "The display name of the Pipeline."
  },
  {
    "name": "pipeline_description",
    "type": "string",
    "description": "The description of the Pipeline."
  },
  {
    "name": "pipeline_definition",
    "type": "object",
    "description": ""
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "Role Arn"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "parallelism_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "max_parallel_execution_steps",
        "type": "integer",
        "description": "Maximum parallel execution steps"
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
    "name": "pipeline_name",
    "type": "string",
    "description": "The name of the Pipeline."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html"><code>AWS::SageMaker::Pipeline</code></a>.

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
    <td><code>pipelines</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="PipelineName, PipelineDefinition, RoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>pipelines</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>pipelines</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>pipelines_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>pipelines</code></td>
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

Gets all properties from an individual <code>pipeline</code>.
```sql
SELECT
region,
pipeline_name,
pipeline_display_name,
pipeline_description,
pipeline_definition,
role_arn,
tags,
parallelism_configuration
FROM awscc.sagemaker.pipelines
WHERE region = 'us-east-1' AND Identifier = '{{ pipeline_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>pipelines</code> in a region.
```sql
SELECT
region,
pipeline_name
FROM awscc.sagemaker.pipelines_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>pipeline</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sagemaker.pipelines (
 PipelineName,
 PipelineDefinition,
 RoleArn,
 region
)
SELECT
'{{ pipeline_name }}',
 '{{ pipeline_definition }}',
 '{{ role_arn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.sagemaker.pipelines (
 PipelineName,
 PipelineDisplayName,
 PipelineDescription,
 PipelineDefinition,
 RoleArn,
 Tags,
 ParallelismConfiguration,
 region
)
SELECT
 '{{ pipeline_name }}',
 '{{ pipeline_display_name }}',
 '{{ pipeline_description }}',
 '{{ pipeline_definition }}',
 '{{ role_arn }}',
 '{{ tags }}',
 '{{ parallelism_configuration }}',
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
  - name: pipeline
    props:
      - name: pipeline_name
        value: '{{ pipeline_name }}'
      - name: pipeline_display_name
        value: '{{ pipeline_display_name }}'
      - name: pipeline_description
        value: '{{ pipeline_description }}'
      - name: pipeline_definition
        value: {}
      - name: role_arn
        value: '{{ role_arn }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
      - name: parallelism_configuration
        value:
          max_parallel_execution_steps: '{{ max_parallel_execution_steps }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>pipeline</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.sagemaker.pipelines
SET PatchDocument = string('{{ {
    "PipelineDisplayName": pipeline_display_name,
    "PipelineDescription": pipeline_description,
    "PipelineDefinition": pipeline_definition,
    "RoleArn": role_arn,
    "Tags": tags,
    "ParallelismConfiguration": parallelism_configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ pipeline_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sagemaker.pipelines
WHERE Identifier = '{{ pipeline_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>pipelines</code> resource, the following permissions are required:

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
iam:PassRole,
s3:GetObject,
sagemaker:CreatePipeline,
sagemaker:DescribePipeline,
sagemaker:AddTags,
sagemaker:ListTags
```

</TabItem>
<TabItem value="read">

```json
sagemaker:DescribePipeline,
sagemaker:ListTags
```

</TabItem>
<TabItem value="update">

```json
iam:PassRole,
s3:GetObject,
sagemaker:UpdatePipeline,
sagemaker:DescribePipeline,
sagemaker:AddTags,
sagemaker:DeleteTags,
sagemaker:ListTags
```

</TabItem>
<TabItem value="delete">

```json
sagemaker:DeletePipeline
```

</TabItem>
<TabItem value="list">

```json
sagemaker:ListPipelines
```

</TabItem>
</Tabs>