---
title: component_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - component_versions
  - greengrassv2
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

Creates, updates, deletes or gets a <code>component_version</code> resource or lists <code>component_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>component_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource for Greengrass component version.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.greengrassv2.component_versions" /></td></tr>
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
    "name": "component_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "component_version",
    "type": "string",
    "description": ""
  },
  {
    "name": "inline_recipe",
    "type": "string",
    "description": ""
  },
  {
    "name": "lambda_function",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "lambda_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "component_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "component_version",
        "type": "string",
        "description": ""
      },
      {
        "name": "component_platforms",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": ""
          },
          {
            "name": "attributes",
            "type": "object",
            "description": ""
          }
        ]
      },
      {
        "name": "component_dependencies",
        "type": "object",
        "description": ""
      },
      {
        "name": "component_lambda_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "event_sources",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "topic",
                "type": "string",
                "description": ""
              },
              {
                "name": "type",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "max_queue_size",
            "type": "integer",
            "description": ""
          },
          {
            "name": "max_instances_count",
            "type": "integer",
            "description": ""
          },
          {
            "name": "max_idle_time_in_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "timeout_in_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "status_timeout_in_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "pinned",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "input_payload_encoding_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "exec_args",
            "type": "array",
            "description": ""
          },
          {
            "name": "environment_variables",
            "type": "object",
            "description": ""
          },
          {
            "name": "linux_process_params",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "isolation_mode",
                "type": "string",
                "description": ""
              },
              {
                "name": "container_params",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "object",
    "description": ""
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html"><code>AWS::GreengrassV2::ComponentVersion</code></a>.

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
    <td><code>component_versions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>component_versions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>component_versions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>component_versions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>component_versions</code></td>
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

Gets all properties from an individual <code>component_version</code>.
```sql
SELECT
region,
arn,
component_name,
component_version,
inline_recipe,
lambda_function,
tags
FROM awscc.greengrassv2.component_versions
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>component_versions</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.greengrassv2.component_versions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>component_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.greengrassv2.component_versions (
 InlineRecipe,
 LambdaFunction,
 Tags,
 region
)
SELECT 
'{{ InlineRecipe }}',
 '{{ LambdaFunction }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.greengrassv2.component_versions (
 InlineRecipe,
 LambdaFunction,
 Tags,
 region
)
SELECT 
 '{{ InlineRecipe }}',
 '{{ LambdaFunction }}',
 '{{ Tags }}',
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
  - name: component_version
    props:
      - name: InlineRecipe
        value: '{{ InlineRecipe }}'
      - name: LambdaFunction
        value:
          LambdaArn: '{{ LambdaArn }}'
          ComponentName: '{{ ComponentName }}'
          ComponentVersion: '{{ ComponentVersion }}'
          ComponentPlatforms:
            - Name: '{{ Name }}'
              Attributes: {}
          ComponentDependencies: {}
          ComponentLambdaParameters:
            EventSources:
              - Topic: '{{ Topic }}'
                Type: '{{ Type }}'
            MaxQueueSize: '{{ MaxQueueSize }}'
            MaxInstancesCount: '{{ MaxInstancesCount }}'
            MaxIdleTimeInSeconds: '{{ MaxIdleTimeInSeconds }}'
            TimeoutInSeconds: '{{ TimeoutInSeconds }}'
            StatusTimeoutInSeconds: '{{ StatusTimeoutInSeconds }}'
            Pinned: '{{ Pinned }}'
            InputPayloadEncodingType: '{{ InputPayloadEncodingType }}'
            ExecArgs:
              - '{{ ExecArgs[0] }}'
            EnvironmentVariables: {}
            LinuxProcessParams:
              IsolationMode: '{{ IsolationMode }}'
              ContainerParams:
                MemorySizeInKB: '{{ MemorySizeInKB }}'
                MountROSysfs: '{{ MountROSysfs }}'
                Volumes:
                  - SourcePath: '{{ SourcePath }}'
                    DestinationPath: null
                    Permission: '{{ Permission }}'
                    AddGroupOwner: '{{ AddGroupOwner }}'
                Devices:
                  - Path: null
                    Permission: null
                    AddGroupOwner: null
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.greengrassv2.component_versions
SET data__PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.greengrassv2.component_versions
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>component_versions</code> resource, the following permissions are required:

### Create
```json
greengrass:CreateComponentVersion,
greengrass:DescribeComponent,
greengrass:ListTagsForResource,
greengrass:TagResource,
lambda:GetFunction,
s3:GetObject
```

### Read
```json
greengrass:DescribeComponent,
greengrass:ListTagsForResource
```

### Update
```json
greengrass:DescribeComponent,
greengrass:ListTagsForResource,
greengrass:TagResource,
greengrass:UntagResource
```

### Delete
```json
greengrass:DeleteComponent
```

### List
```json
greengrass:ListComponentVersions
```
