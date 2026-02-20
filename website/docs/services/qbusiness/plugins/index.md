---
title: plugins
hide_title: false
hide_table_of_contents: false
keywords:
  - plugins
  - qbusiness
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

Creates, updates, deletes or gets a <code>plugin</code> resource or lists <code>plugins</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>plugins</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::QBusiness::Plugin Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.qbusiness.plugins" /></td></tr>
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
    "name": "application_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "auth_configuration",
    "type": "object",
    "description": ""
  },
  {
    "name": "build_status",
    "type": "string",
    "description": ""
  },
  {
    "name": "created_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "custom_plugin_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "description",
        "type": "string",
        "description": ""
      },
      {
        "name": "api_schema_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "api_schema",
        "type": "object",
        "description": ""
      }
    ]
  },
  {
    "name": "display_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "plugin_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "plugin_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "server_url",
    "type": "string",
    "description": ""
  },
  {
    "name": "state",
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
    "name": "type",
    "type": "string",
    "description": ""
  },
  {
    "name": "updated_at",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "application_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "plugin_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-plugin.html"><code>AWS::QBusiness::Plugin</code></a>.

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
    <td><code>plugins</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AuthConfiguration, DisplayName, Type, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>plugins</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>plugins</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>plugins_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>plugins</code></td>
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

Gets all properties from an individual <code>plugin</code>.
```sql
SELECT
region,
application_id,
auth_configuration,
build_status,
created_at,
custom_plugin_configuration,
display_name,
plugin_arn,
plugin_id,
server_url,
state,
tags,
type,
updated_at
FROM awscc.qbusiness.plugins
WHERE region = 'us-east-1' AND data__Identifier = '<ApplicationId>|<PluginId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>plugins</code> in a region.
```sql
SELECT
region,
application_id,
plugin_id
FROM awscc.qbusiness.plugins_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>plugin</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.qbusiness.plugins (
 AuthConfiguration,
 DisplayName,
 Type,
 region
)
SELECT 
'{{ AuthConfiguration }}',
 '{{ DisplayName }}',
 '{{ Type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.qbusiness.plugins (
 ApplicationId,
 AuthConfiguration,
 CustomPluginConfiguration,
 DisplayName,
 ServerUrl,
 State,
 Tags,
 Type,
 region
)
SELECT 
 '{{ ApplicationId }}',
 '{{ AuthConfiguration }}',
 '{{ CustomPluginConfiguration }}',
 '{{ DisplayName }}',
 '{{ ServerUrl }}',
 '{{ State }}',
 '{{ Tags }}',
 '{{ Type }}',
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
  - name: plugin
    props:
      - name: ApplicationId
        value: '{{ ApplicationId }}'
      - name: AuthConfiguration
        value: null
      - name: CustomPluginConfiguration
        value:
          Description: '{{ Description }}'
          ApiSchemaType: '{{ ApiSchemaType }}'
          ApiSchema: null
      - name: DisplayName
        value: '{{ DisplayName }}'
      - name: ServerUrl
        value: '{{ ServerUrl }}'
      - name: State
        value: '{{ State }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Type
        value: '{{ Type }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.qbusiness.plugins
SET data__PatchDocument = string('{{ {
    "AuthConfiguration": auth_configuration,
    "CustomPluginConfiguration": custom_plugin_configuration,
    "DisplayName": display_name,
    "ServerUrl": server_url,
    "State": state,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ApplicationId>|<PluginId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.qbusiness.plugins
WHERE data__Identifier = '<ApplicationId|PluginId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>plugins</code> resource, the following permissions are required:

### Create
```json
iam:PassRole,
qbusiness:CreatePlugin,
qbusiness:GetPlugin,
qbusiness:ListTagsForResource,
qbusiness:TagResource
```

### Read
```json
qbusiness:GetPlugin,
qbusiness:ListTagsForResource
```

### Update
```json
iam:PassRole,
qbusiness:GetPlugin,
qbusiness:ListTagsForResource,
qbusiness:TagResource,
qbusiness:UntagResource,
qbusiness:UpdatePlugin
```

### Delete
```json
qbusiness:DeletePlugin,
qbusiness:GetPlugin
```

### List
```json
qbusiness:ListPlugins
```
