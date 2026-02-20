---
title: pipelines
hide_title: false
hide_table_of_contents: false
keywords:
  - pipelines
  - iotanalytics
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
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::IoTAnalytics::Pipeline</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotanalytics.pipelines" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "pipeline_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
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
    "name": "pipeline_activities",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "select_attributes",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "next",
            "type": "string",
            "description": ""
          },
          {
            "name": "attributes",
            "type": "array",
            "description": ""
          },
          {
            "name": "name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "datastore",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "datastore_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "filter",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "filter",
            "type": "string",
            "description": ""
          },
          {
            "name": "next",
            "type": "string",
            "description": ""
          },
          {
            "name": "name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "add_attributes",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "next",
            "type": "string",
            "description": ""
          },
          {
            "name": "attributes",
            "type": "object",
            "description": ""
          },
          {
            "name": "name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "channel",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "channel_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "next",
            "type": "string",
            "description": ""
          },
          {
            "name": "name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "device_shadow_enrich",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "attribute",
            "type": "string",
            "description": ""
          },
          {
            "name": "next",
            "type": "string",
            "description": ""
          },
          {
            "name": "thing_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "math",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "attribute",
            "type": "string",
            "description": ""
          },
          {
            "name": "next",
            "type": "string",
            "description": ""
          },
          {
            "name": "math",
            "type": "string",
            "description": ""
          },
          {
            "name": "name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "lambda",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "batch_size",
            "type": "integer",
            "description": ""
          },
          {
            "name": "next",
            "type": "string",
            "description": ""
          },
          {
            "name": "lambda_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "device_registry_enrich",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "attribute",
            "type": "string",
            "description": ""
          },
          {
            "name": "next",
            "type": "string",
            "description": ""
          },
          {
            "name": "thing_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "remove_attributes",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "next",
            "type": "string",
            "description": ""
          },
          {
            "name": "attributes",
            "type": "array",
            "description": ""
          },
          {
            "name": "name",
            "type": "string",
            "description": ""
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
    "name": "pipeline_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-pipeline.html"><code>AWS::IoTAnalytics::Pipeline</code></a>.

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
    <td><CopyableCode code="PipelineActivities, region" /></td>
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
id,
pipeline_name,
tags,
pipeline_activities
FROM awscc.iotanalytics.pipelines
WHERE region = 'us-east-1' AND Identifier = '<PipelineName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>pipelines</code> in a region.
```sql
SELECT
region,
pipeline_name
FROM awscc.iotanalytics.pipelines_list_only
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
INSERT INTO awscc.iotanalytics.pipelines (
 PipelineActivities,
 region
)
SELECT 
'{{ PipelineActivities }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotanalytics.pipelines (
 PipelineName,
 Tags,
 PipelineActivities,
 region
)
SELECT 
 '{{ PipelineName }}',
 '{{ Tags }}',
 '{{ PipelineActivities }}',
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
      - name: PipelineName
        value: '{{ PipelineName }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: PipelineActivities
        value:
          - SelectAttributes:
              Next: '{{ Next }}'
              Attributes:
                - '{{ Attributes[0] }}'
              Name: '{{ Name }}'
            Datastore:
              DatastoreName: '{{ DatastoreName }}'
              Name: '{{ Name }}'
            Filter:
              Filter: '{{ Filter }}'
              Next: '{{ Next }}'
              Name: '{{ Name }}'
            AddAttributes:
              Next: '{{ Next }}'
              Attributes: {}
              Name: '{{ Name }}'
            Channel:
              ChannelName: '{{ ChannelName }}'
              Next: '{{ Next }}'
              Name: '{{ Name }}'
            DeviceShadowEnrich:
              Attribute: '{{ Attribute }}'
              Next: '{{ Next }}'
              ThingName: '{{ ThingName }}'
              RoleArn: '{{ RoleArn }}'
              Name: '{{ Name }}'
            Math:
              Attribute: '{{ Attribute }}'
              Next: '{{ Next }}'
              Math: '{{ Math }}'
              Name: '{{ Name }}'
            Lambda:
              BatchSize: '{{ BatchSize }}'
              Next: '{{ Next }}'
              LambdaName: '{{ LambdaName }}'
              Name: '{{ Name }}'
            DeviceRegistryEnrich:
              Attribute: '{{ Attribute }}'
              Next: '{{ Next }}'
              ThingName: '{{ ThingName }}'
              RoleArn: '{{ RoleArn }}'
              Name: '{{ Name }}'
            RemoveAttributes:
              Next: '{{ Next }}'
              Attributes:
                - '{{ Attributes[0] }}'
              Name: '{{ Name }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>pipeline</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iotanalytics.pipelines
SET PatchDocument = string('{{ {
    "Tags": tags,
    "PipelineActivities": pipeline_activities
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<PipelineName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotanalytics.pipelines
WHERE Identifier = '<PipelineName>'
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
iotanalytics:CreatePipeline
```

</TabItem>
<TabItem value="read">

```json
iotanalytics:DescribePipeline,
iotanalytics:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
iotanalytics:UpdatePipeline,
iotanalytics:TagResource,
iotanalytics:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
iotanalytics:DeletePipeline
```

</TabItem>
<TabItem value="list">

```json
iotanalytics:ListPipelines
```

</TabItem>
</Tabs>