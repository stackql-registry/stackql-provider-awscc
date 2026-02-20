---
title: channel_namespaces
hide_title: false
hide_table_of_contents: false
keywords:
  - channel_namespaces
  - appsync
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

Creates, updates, deletes or gets a <code>channel_namespace</code> resource or lists <code>channel_namespaces</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>channel_namespaces</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AppSync ChannelNamespace</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.appsync.channel_namespaces" /></td></tr>
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
    "name": "api_id",
    "type": "string",
    "description": "AppSync Api Id that this Channel Namespace belongs to."
  },
  {
    "name": "name",
    "type": "string",
    "description": "Namespace indentifier."
  },
  {
    "name": "subscribe_auth_modes",
    "type": "array",
    "description": "List of AuthModes supported for Subscribe operations.",
    "children": [
      {
        "name": "auth_type",
        "type": "string",
        "description": "Security configuration for your AppSync API."
      }
    ]
  },
  {
    "name": "code_handlers",
    "type": "string",
    "description": "String of APPSYNC&#95;JS code to be used by the handlers."
  },
  {
    "name": "code_s3_location",
    "type": "string",
    "description": "The Amazon S3 endpoint where the code is located."
  },
  {
    "name": "channel_namespace_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the Channel Namespace."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An arbitrary set of tags (key-value pairs) for this Domain Name.",
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
    "name": "handler_configs",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "on_publish",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "behavior",
            "type": "string",
            "description": "Integration behavior for a handler configuration."
          },
          {
            "name": "integration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "data_source_name",
                "type": "string",
                "description": "Data source to invoke for this integration."
              },
              {
                "name": "lambda_config",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "Namespace indentifier."
  },
  {
    "name": "channel_namespace_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the Channel Namespace."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html"><code>AWS::AppSync::ChannelNamespace</code></a>.

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
    <td><code>channel_namespaces</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ApiId, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>channel_namespaces</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>channel_namespaces</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>channel_namespaces_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>channel_namespaces</code></td>
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

Gets all properties from an individual <code>channel_namespace</code>.
```sql
SELECT
region,
api_id,
name,
subscribe_auth_modes,
publish_auth_modes,
code_handlers,
code_s3_location,
channel_namespace_arn,
tags,
handler_configs
FROM awscc.appsync.channel_namespaces
WHERE region = 'us-east-1' AND Identifier = '<ChannelNamespaceArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>channel_namespaces</code> in a region.
```sql
SELECT
region,
channel_namespace_arn
FROM awscc.appsync.channel_namespaces_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>channel_namespace</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.appsync.channel_namespaces (
 ApiId,
 Name,
 region
)
SELECT 
'{{ ApiId }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.appsync.channel_namespaces (
 ApiId,
 Name,
 SubscribeAuthModes,
 PublishAuthModes,
 CodeHandlers,
 CodeS3Location,
 Tags,
 HandlerConfigs,
 region
)
SELECT 
 '{{ ApiId }}',
 '{{ Name }}',
 '{{ SubscribeAuthModes }}',
 '{{ PublishAuthModes }}',
 '{{ CodeHandlers }}',
 '{{ CodeS3Location }}',
 '{{ Tags }}',
 '{{ HandlerConfigs }}',
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
  - name: channel_namespace
    props:
      - name: ApiId
        value: '{{ ApiId }}'
      - name: Name
        value: '{{ Name }}'
      - name: SubscribeAuthModes
        value:
          - AuthType: '{{ AuthType }}'
      - name: PublishAuthModes
        value: null
      - name: CodeHandlers
        value: '{{ CodeHandlers }}'
      - name: CodeS3Location
        value: '{{ CodeS3Location }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: HandlerConfigs
        value:
          OnPublish:
            Behavior: '{{ Behavior }}'
            Integration:
              DataSourceName: '{{ DataSourceName }}'
              LambdaConfig:
                LambdaFunctionArn: '{{ LambdaFunctionArn }}'
          OnSubscribe: null

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.appsync.channel_namespaces
SET PatchDocument = string('{{ {
    "SubscribeAuthModes": subscribe_auth_modes,
    "PublishAuthModes": publish_auth_modes,
    "CodeHandlers": code_handlers,
    "CodeS3Location": code_s3_location,
    "Tags": tags,
    "HandlerConfigs": handler_configs
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ChannelNamespaceArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.appsync.channel_namespaces
WHERE Identifier = '<ChannelNamespaceArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>channel_namespaces</code> resource, the following permissions are required:

### Create
```json
appsync:CreateChannelNamespace,
appsync:TagResource,
appsync:GetChannelNamespace,
s3:GetObject
```

### Read
```json
appsync:GetChannelNamespace,
appsync:ListTagsForResource
```

### Update
```json
appsync:UpdateChannelNamespace,
appsync:TagResource,
appsync:UntagResource,
appsync:GetChannelNamespace,
s3:GetObject
```

### Delete
```json
appsync:DeleteChannelNamespace,
appsync:UntagResource
```

### List
```json
appsync:ListChannelNamespaces
```
