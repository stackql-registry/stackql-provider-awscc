---
title: rooms
hide_title: false
hide_table_of_contents: false
keywords:
  - rooms
  - ivschat
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>room</code> resource or lists <code>rooms</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>rooms</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource type definition for AWS::IVSChat::Room.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ivschat.rooms" /></td></tr>
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
    "description": "Room ARN is automatically generated on creation and assigned as the unique identifier."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The system-generated ID of the room."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the room. The value does not need to be unique."
  },
  {
    "name": "logging_configuration_identifiers",
    "type": "array",
    "description": "Array of logging configuration identifiers attached to the room."
  },
  {
    "name": "maximum_message_length",
    "type": "integer",
    "description": "The maximum number of characters in a single message."
  },
  {
    "name": "maximum_message_rate_per_second",
    "type": "integer",
    "description": "The maximum number of messages per second that can be sent to the room."
  },
  {
    "name": "message_review_handler",
    "type": "object",
    "description": "Configuration information for optional review of messages.",
    "children": [
      {
        "name": "fallback_result",
        "type": "string",
        "description": "Specifies the fallback behavior if the handler does not return a valid response, encounters an error, or times out."
      },
      {
        "name": "uri",
        "type": "string",
        "description": "Identifier of the message review handler."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
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
    "description": "Room ARN is automatically generated on creation and assigned as the unique identifier."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html"><code>AWS::IVSChat::Room</code></a>.

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
    <td><code>rooms</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>rooms</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>rooms</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>rooms_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>rooms</code></td>
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

Gets all properties from an individual <code>room</code>.
```sql
SELECT
  region,
  arn,
  id,
  name,
  logging_configuration_identifiers,
  maximum_message_length,
  maximum_message_rate_per_second,
  message_review_handler,
  tags
FROM awscc.ivschat.rooms
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>rooms</code> in a region.
```sql
SELECT
  region,
  arn
FROM awscc.ivschat.rooms_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>room</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ivschat.rooms (
  ,
  region
)
SELECT
  '{{  }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ivschat.rooms (
  Name,
  LoggingConfigurationIdentifiers,
  MaximumMessageLength,
  MaximumMessageRatePerSecond,
  MessageReviewHandler,
  Tags,
  region
)
SELECT
  '{{ name }}',
  '{{ logging_configuration_identifiers }}',
  '{{ maximum_message_length }}',
  '{{ maximum_message_rate_per_second }}',
  '{{ message_review_handler }}',
  '{{ tags }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: room
    props:
      - name: name
        value: '{{ name }}'
      - name: logging_configuration_identifiers
        value:
          - '{{ logging_configuration_identifiers[0] }}'
      - name: maximum_message_length
        value: '{{ maximum_message_length }}'
      - name: maximum_message_rate_per_second
        value: '{{ maximum_message_rate_per_second }}'
      - name: message_review_handler
        value:
          fallback_result: '{{ fallback_result }}'
          uri: '{{ uri }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>room</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ivschat.rooms
SET PatchDocument = string('{{ {
    "Name": name,
    "LoggingConfigurationIdentifiers": logging_configuration_identifiers,
    "MaximumMessageLength": maximum_message_length,
    "MaximumMessageRatePerSecond": maximum_message_rate_per_second,
    "MessageReviewHandler": message_review_handler,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ arn }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ivschat.rooms
WHERE
  Identifier = '{{ arn }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>rooms</code> resource, the following permissions are required:

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
ivschat:CreateRoom,
ivschat:TagResource
```

</TabItem>
<TabItem value="read">

```json
ivschat:GetRoom,
ivschat:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
ivschat:UpdateRoom,
ivschat:TagResource,
ivschat:UntagResource,
ivschat:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
ivschat:DeleteRoom,
ivschat:UntagResource
```

</TabItem>
<TabItem value="list">

```json
ivschat:ListRooms,
ivschat:ListTagsForResource
```

</TabItem>
</Tabs>