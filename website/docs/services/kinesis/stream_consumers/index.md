---
title: stream_consumers
hide_title: false
hide_table_of_contents: false
keywords:
  - stream_consumers
  - kinesis
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

Creates, updates, deletes or gets a <code>stream_consumer</code> resource or lists <code>stream_consumers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>stream_consumers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Kinesis::StreamConsumer</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.kinesis.stream_consumers" /></td></tr>
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
    "name": "consumer_creation_timestamp",
    "type": "string",
    "description": "Timestamp when the consumer was created."
  },
  {
    "name": "consumer_name",
    "type": "string",
    "description": "The name of the Kinesis Stream Consumer. For a given Kinesis data stream, each consumer must have a unique name. However, consumer names don't have to be unique across data streams."
  },
  {
    "name": "consumer_arn",
    "type": "string",
    "description": "The ARN returned by Kinesis Data Streams when you registered the consumer. If you don't know the ARN of the consumer that you want to deregister, you can use the ListStreamConsumers operation to get a list of the descriptions of all the consumers that are currently registered with a given data stream. The description of a consumer contains its ARN."
  },
  {
    "name": "consumer_status",
    "type": "string",
    "description": "A consumer can't read data while in the CREATING or DELETING states. Valid Values: CREATING &#124; DELETING &#124; ACTIVE"
  },
  {
    "name": "stream_arn",
    "type": "string",
    "description": "The Amazon resource name (ARN) of the Kinesis data stream that you want to register the consumer with."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An arbitrary set of tags (key–value pairs) to associate with the Kinesis consumer.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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
    "name": "consumer_arn",
    "type": "string",
    "description": "The ARN returned by Kinesis Data Streams when you registered the consumer. If you don't know the ARN of the consumer that you want to deregister, you can use the ListStreamConsumers operation to get a list of the descriptions of all the consumers that are currently registered with a given data stream. The description of a consumer contains its ARN."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-streamconsumer.html"><code>AWS::Kinesis::StreamConsumer</code></a>.

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
    <td><code>stream_consumers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ConsumerName, StreamARN, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>stream_consumers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>stream_consumers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>stream_consumers</code></td>
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

Gets all properties from an individual <code>stream_consumer</code>.
```sql
SELECT
region,
consumer_creation_timestamp,
consumer_name,
consumer_arn,
consumer_status,
stream_arn,
tags
FROM awscc.kinesis.stream_consumers
WHERE region = 'us-east-1' AND data__Identifier = '<ConsumerARN>';
```
</TabItem>
<TabItem value="list">

Lists all <code>stream_consumers</code> in a region.
```sql
SELECT
region,
consumer_arn
FROM awscc.kinesis.stream_consumers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>stream_consumer</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.kinesis.stream_consumers (
 ConsumerName,
 StreamARN,
 region
)
SELECT 
'{{ ConsumerName }}',
 '{{ StreamARN }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.kinesis.stream_consumers (
 ConsumerName,
 StreamARN,
 Tags,
 region
)
SELECT 
 '{{ ConsumerName }}',
 '{{ StreamARN }}',
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
  - name: stream_consumer
    props:
      - name: ConsumerName
        value: '{{ ConsumerName }}'
      - name: StreamARN
        value: '{{ StreamARN }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.kinesis.stream_consumers
WHERE data__Identifier = '<ConsumerARN>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>stream_consumers</code> resource, the following permissions are required:

### Read
```json
kinesis:DescribeStreamConsumer,
kinesis:ListTagsForResource
```

### Create
```json
kinesis:RegisterStreamConsumer,
kinesis:DescribeStreamConsumer,
kinesis:TagResource
```

### List
```json
kinesis:ListStreamConsumers
```

### Delete
```json
kinesis:DeregisterStreamConsumer,
kinesis:DescribeStreamConsumer,
kinesis:UntagResource
```
