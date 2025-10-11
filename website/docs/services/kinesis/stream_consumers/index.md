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
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="consumer_creation_timestamp" /></td><td><code>string</code></td><td>Timestamp when the consumer was created.</td></tr>
<tr><td><CopyableCode code="consumer_name" /></td><td><code>string</code></td><td>The name of the Kinesis Stream Consumer. For a given Kinesis data stream, each consumer must have a unique name. However, consumer names don't have to be unique across data streams.</td></tr>
<tr><td><CopyableCode code="consumer_arn" /></td><td><code>string</code></td><td>The ARN returned by Kinesis Data Streams when you registered the consumer. If you don't know the ARN of the consumer that you want to deregister, you can use the ListStreamConsumers operation to get a list of the descriptions of all the consumers that are currently registered with a given data stream. The description of a consumer contains its ARN.</td></tr>
<tr><td><CopyableCode code="consumer_status" /></td><td><code>string</code></td><td>A consumer can't read data while in the CREATING or DELETING states. Valid Values: CREATING | DELETING | ACTIVE</td></tr>
<tr><td><CopyableCode code="stream_arn" /></td><td><code>string</code></td><td>The Amazon resource name (ARN) of the Kinesis data stream that you want to register the consumer with.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>An arbitrary set of tags (key–value pairs) to associate with the Kinesis consumer.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-streamconsumer.html"><code>AWS::Kinesis::StreamConsumer</code></a>.

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
    <td><CopyableCode code="ConsumerName, StreamARN, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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
Gets all <code>stream_consumers</code> in a region.
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
WHERE region = 'us-east-1';
```
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
