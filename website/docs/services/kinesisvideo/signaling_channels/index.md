---
title: signaling_channels
hide_title: false
hide_table_of_contents: false
keywords:
  - signaling_channels
  - kinesisvideo
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

Creates, updates, deletes or gets a <code>signaling_channel</code> resource or lists <code>signaling_channels</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>signaling_channels</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type Definition for AWS::KinesisVideo::SignalingChannel</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.kinesisvideo.signaling_channels" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the Kinesis Video Signaling Channel."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the Kinesis Video Signaling Channel."
  },
  {
    "name": "type",
    "type": "string",
    "description": "The type of the Kinesis Video Signaling Channel to create. Currently, SINGLE&#95;MASTER is the only supported channel type."
  },
  {
    "name": "message_ttl_seconds",
    "type": "integer",
    "description": "The period of time a signaling channel retains undelivered messages before they are discarded."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. Specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The following characters can be used: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. Specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. The following characters can be used: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisvideo-signalingchannel.html"><code>AWS::KinesisVideo::SignalingChannel</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>signaling_channel</code>.
```sql
SELECT
region,
arn,
name,
type,
message_ttl_seconds,
tags
FROM awscc.kinesisvideo.signaling_channels
WHERE region = 'us-east-1' AND data__Identifier = '<Name>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>signaling_channel</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.kinesisvideo.signaling_channels (
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
INSERT INTO awscc.kinesisvideo.signaling_channels (
 Name,
 Type,
 MessageTtlSeconds,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Type }}',
 '{{ MessageTtlSeconds }}',
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
  - name: signaling_channel
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Type
        value: '{{ Type }}'
      - name: MessageTtlSeconds
        value: '{{ MessageTtlSeconds }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.kinesisvideo.signaling_channels
WHERE data__Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>signaling_channels</code> resource, the following permissions are required:

### Create
```json
kinesisvideo:CreateSignalingChannel,
kinesisvideo:DescribeSignalingChannel,
kinesisvideo:TagResource
```

### Read
```json
kinesisvideo:DescribeSignalingChannel,
kinesisvideo:ListTagsForResource
```

### Update
```json
kinesisvideo:UpdateSignalingChannel,
kinesisvideo:DescribeSignalingChannel,
kinesisvideo:TagResource,
kinesisvideo:UntagResource,
kinesisvideo:ListTagsForResource
```

### Delete
```json
kinesisvideo:DeleteSignalingChannel,
kinesisvideo:DescribeSignalingChannel
```

### List
```json
kinesisvideo:ListSignalingChannels
```
