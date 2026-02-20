---
title: streams
hide_title: false
hide_table_of_contents: false
keywords:
  - streams
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

Creates, updates, deletes or gets a <code>stream</code> resource or lists <code>streams</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>streams</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type Definition for AWS::KinesisVideo::Stream</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.kinesisvideo.streams" /></td></tr>
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
    "description": "The Amazon Resource Name (ARN) of the Kinesis Video stream."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the Kinesis Video stream."
  },
  {
    "name": "data_retention_in_hours",
    "type": "integer",
    "description": "The number of hours till which Kinesis Video will retain the data in the stream"
  },
  {
    "name": "device_name",
    "type": "string",
    "description": "The name of the device that is writing to the stream."
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "AWS KMS key ID that Kinesis Video Streams uses to encrypt stream data."
  },
  {
    "name": "media_type",
    "type": "string",
    "description": "The media type of the stream. Consumers of the stream can use this information when processing the stream."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs associated with the Kinesis Video Stream.",
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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "The name of the Kinesis Video stream."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisvideo-stream.html"><code>AWS::KinesisVideo::Stream</code></a>.

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
    <td><code>streams</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>streams</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>streams</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>streams_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>streams</code></td>
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

Gets all properties from an individual <code>stream</code>.
```sql
SELECT
region,
arn,
name,
data_retention_in_hours,
device_name,
kms_key_id,
media_type,
tags
FROM awscc.kinesisvideo.streams
WHERE region = 'us-east-1' AND Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>streams</code> in a region.
```sql
SELECT
region,
name
FROM awscc.kinesisvideo.streams_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>stream</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.kinesisvideo.streams (
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
INSERT INTO awscc.kinesisvideo.streams (
 Name,
 DataRetentionInHours,
 DeviceName,
 KmsKeyId,
 MediaType,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ DataRetentionInHours }}',
 '{{ DeviceName }}',
 '{{ KmsKeyId }}',
 '{{ MediaType }}',
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
  - name: stream
    props:
      - name: Name
        value: '{{ Name }}'
      - name: DataRetentionInHours
        value: '{{ DataRetentionInHours }}'
      - name: DeviceName
        value: '{{ DeviceName }}'
      - name: KmsKeyId
        value: '{{ KmsKeyId }}'
      - name: MediaType
        value: '{{ MediaType }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>stream</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.kinesisvideo.streams
SET PatchDocument = string('{{ {
    "DataRetentionInHours": data_retention_in_hours,
    "DeviceName": device_name,
    "KmsKeyId": kms_key_id,
    "MediaType": media_type,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.kinesisvideo.streams
WHERE Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>streams</code> resource, the following permissions are required:

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
kinesisvideo:DescribeStream,
kinesisvideo:CreateStream,
kinesisvideo:TagStream
```

</TabItem>
<TabItem value="read">

```json
kinesisvideo:DescribeStream,
kinesisvideo:ListTagsForStream
```

</TabItem>
<TabItem value="update">

```json
kinesisvideo:DescribeStream,
kinesisvideo:UpdateStream,
kinesisvideo:UpdateDataRetention,
kinesisvideo:TagStream,
kinesisvideo:UntagStream,
kinesisvideo:ListTagsForStream
```

</TabItem>
<TabItem value="delete">

```json
kinesisvideo:DescribeStream,
kinesisvideo:DeleteStream
```

</TabItem>
<TabItem value="list">

```json
kinesisvideo:ListStreams
```

</TabItem>
</Tabs>