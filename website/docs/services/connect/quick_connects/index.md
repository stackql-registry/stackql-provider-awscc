---
title: quick_connects
hide_title: false
hide_table_of_contents: false
keywords:
  - quick_connects
  - connect
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

Creates, updates, deletes or gets a <code>quick_connect</code> resource or lists <code>quick_connects</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>quick_connects</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Connect::QuickConnect</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.quick_connects" /></td></tr>
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
    "name": "instance_arn",
    "type": "string",
    "description": "The identifier of the Amazon Connect instance."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the quick connect."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the quick connect."
  },
  {
    "name": "quick_connect_config",
    "type": "object",
    "description": "Configuration settings for the quick connect.",
    "children": [
      {
        "name": "quick_connect_type",
        "type": "string",
        "description": "The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE&#95;NUMBER), or Queue (QUEUE)."
      },
      {
        "name": "phone_config",
        "type": "object",
        "description": "The phone configuration. This is required only if QuickConnectType is PHONE&#95;NUMBER.",
        "children": [
          {
            "name": "phone_number",
            "type": "string",
            "description": "The phone number in E.164 format."
          }
        ]
      },
      {
        "name": "queue_config",
        "type": "object",
        "description": "The queue configuration. This is required only if QuickConnectType is QUEUE.",
        "children": [
          {
            "name": "contact_flow_arn",
            "type": "string",
            "description": "The identifier of the contact flow."
          },
          {
            "name": "queue_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) for the queue."
          }
        ]
      },
      {
        "name": "user_config",
        "type": "object",
        "description": "The user configuration. This is required only if QuickConnectType is USER.",
        "children": [
          {
            "name": "contact_flow_arn",
            "type": "string",
            "description": "The identifier of the contact flow."
          },
          {
            "name": "user_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the user or a dynamic recipient string starting with '$.'."
          }
        ]
      }
    ]
  },
  {
    "name": "quick_connect_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the quick connect."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "One or more tags.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters"
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. . You can specify a value that is maximum of 256 Unicode characters"
      }
    ]
  },
  {
    "name": "quick_connect_type",
    "type": "string",
    "description": "The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE&#95;NUMBER), or Queue (QUEUE)."
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
    "name": "quick_connect_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the quick connect."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-quickconnect.html"><code>AWS::Connect::QuickConnect</code></a>.

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
    <td><code>quick_connects</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, InstanceArn, QuickConnectConfig, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>quick_connects</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>quick_connects</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>quick_connects_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>quick_connects</code></td>
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

Gets all properties from an individual <code>quick_connect</code>.
```sql
SELECT
region,
instance_arn,
name,
description,
quick_connect_config,
quick_connect_arn,
tags,
quick_connect_type
FROM awscc.connect.quick_connects
WHERE region = 'us-east-1' AND Identifier = '{{ quick_connect_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>quick_connects</code> in a region.
```sql
SELECT
region,
quick_connect_arn
FROM awscc.connect.quick_connects_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>quick_connect</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.connect.quick_connects (
 InstanceArn,
 Name,
 QuickConnectConfig,
 region
)
SELECT
'{{ instance_arn }}',
 '{{ name }}',
 '{{ quick_connect_config }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.connect.quick_connects (
 InstanceArn,
 Name,
 Description,
 QuickConnectConfig,
 Tags,
 region
)
SELECT
 '{{ instance_arn }}',
 '{{ name }}',
 '{{ description }}',
 '{{ quick_connect_config }}',
 '{{ tags }}',
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
  - name: quick_connect
    props:
      - name: instance_arn
        value: '{{ instance_arn }}'
      - name: name
        value: '{{ name }}'
      - name: description
        value: '{{ description }}'
      - name: quick_connect_config
        value:
          quick_connect_type: '{{ quick_connect_type }}'
          phone_config:
            phone_number: '{{ phone_number }}'
          queue_config:
            contact_flow_arn: '{{ contact_flow_arn }}'
            queue_arn: '{{ queue_arn }}'
          user_config:
            contact_flow_arn: null
            user_arn: '{{ user_arn }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>quick_connect</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.connect.quick_connects
SET PatchDocument = string('{{ {
    "InstanceArn": instance_arn,
    "Name": name,
    "Description": description,
    "QuickConnectConfig": quick_connect_config,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ quick_connect_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connect.quick_connects
WHERE Identifier = '{{ quick_connect_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>quick_connects</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
connect:CreateQuickConnect,
connect:TagResource
```

</TabItem>
<TabItem value="read">

```json
connect:DescribeQuickConnect
```

</TabItem>
<TabItem value="delete">

```json
connect:DeleteQuickConnect,
connect:UntagResource
```

</TabItem>
<TabItem value="update">

```json
connect:UpdateQuickConnectName,
connect:UpdateQuickConnectConfig,
connect:TagResource,
connect:UntagResource
```

</TabItem>
<TabItem value="list">

```json
connect:ListQuickConnects
```

</TabItem>
</Tabs>