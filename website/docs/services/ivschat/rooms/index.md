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
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>rooms</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.ivschat.rooms_list_only
WHERE region = 'us-east-1';
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
'{{ region }}';
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
 '{{ Name }}',
 '{{ LoggingConfigurationIdentifiers }}',
 '{{ MaximumMessageLength }}',
 '{{ MaximumMessageRatePerSecond }}',
 '{{ MessageReviewHandler }}',
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
  - name: room
    props:
      - name: Name
        value: '{{ Name }}'
      - name: LoggingConfigurationIdentifiers
        value:
          - '{{ LoggingConfigurationIdentifiers[0] }}'
      - name: MaximumMessageLength
        value: '{{ MaximumMessageLength }}'
      - name: MaximumMessageRatePerSecond
        value: '{{ MaximumMessageRatePerSecond }}'
      - name: MessageReviewHandler
        value:
          FallbackResult: '{{ FallbackResult }}'
          Uri: '{{ Uri }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

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
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ivschat.rooms
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>rooms</code> resource, the following permissions are required:

### Create
```json
ivschat:CreateRoom,
ivschat:TagResource
```

### Read
```json
ivschat:GetRoom,
ivschat:ListTagsForResource
```

### Update
```json
ivschat:UpdateRoom,
ivschat:TagResource,
ivschat:UntagResource,
ivschat:ListTagsForResource
```

### Delete
```json
ivschat:DeleteRoom,
ivschat:UntagResource
```

### List
```json
ivschat:ListRooms,
ivschat:ListTagsForResource
```
