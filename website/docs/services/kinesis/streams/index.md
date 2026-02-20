---
title: streams
hide_title: false
hide_table_of_contents: false
keywords:
  - streams
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

Creates, updates, deletes or gets a <code>stream</code> resource or lists <code>streams</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>streams</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Kinesis::Stream</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.kinesis.streams" /></td></tr>
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
    "description": "The Amazon resource name (ARN) of the Kinesis stream"
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the Kinesis stream."
  },
  {
    "name": "desired_shard_level_metrics",
    "type": "array",
    "description": "The final list of shard-level metrics"
  },
  {
    "name": "retention_period_hours",
    "type": "integer",
    "description": "The number of hours for the data records that are stored in shards to remain accessible."
  },
  {
    "name": "shard_count",
    "type": "integer",
    "description": "The number of shards that the stream uses. Required when StreamMode = PROVISIONED is passed."
  },
  {
    "name": "stream_mode_details",
    "type": "object",
    "description": "The mode in which the stream is running.",
    "children": [
      {
        "name": "stream_mode",
        "type": "string",
        "description": "The mode of the stream"
      }
    ]
  },
  {
    "name": "stream_encryption",
    "type": "object",
    "description": "When specified, enables or updates server-side encryption using an AWS KMS key for a specified stream.",
    "children": [
      {
        "name": "encryption_type",
        "type": "string",
        "description": "The encryption type to use. The only valid value is KMS."
      },
      {
        "name": "key_id",
        "type": "string",
        "description": "The GUID for the customer-managed AWS KMS key to use for encryption. This value can be a globally unique identifier, a fully specified Amazon Resource Name (ARN) to either an alias or a key, or an alias name prefixed by \"alias/\".You can also use a master key owned by Kinesis Data Streams by specifying the alias aws/kinesis."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An arbitrary set of tags (key–value pairs) to associate with the Kinesis stream.",
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
    "name": "name",
    "type": "string",
    "description": "The name of the Kinesis stream."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-stream.html"><code>AWS::Kinesis::Stream</code></a>.

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
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>streams</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>streams</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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

Gets all properties from an individual <code>stream</code>.
```sql
SELECT
region,
arn,
name,
desired_shard_level_metrics,
retention_period_hours,
shard_count,
stream_mode_details,
stream_encryption,
tags
FROM awscc.kinesis.streams
WHERE region = 'us-east-1' AND data__Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>streams</code> in a region.
```sql
SELECT
region,
name
FROM awscc.kinesis.streams_list_only
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
INSERT INTO awscc.kinesis.streams (
 Name,
 DesiredShardLevelMetrics,
 RetentionPeriodHours,
 ShardCount,
 StreamModeDetails,
 StreamEncryption,
 Tags,
 region
)
SELECT 
'{{ Name }}',
 '{{ DesiredShardLevelMetrics }}',
 '{{ RetentionPeriodHours }}',
 '{{ ShardCount }}',
 '{{ StreamModeDetails }}',
 '{{ StreamEncryption }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.kinesis.streams (
 Name,
 DesiredShardLevelMetrics,
 RetentionPeriodHours,
 ShardCount,
 StreamModeDetails,
 StreamEncryption,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ DesiredShardLevelMetrics }}',
 '{{ RetentionPeriodHours }}',
 '{{ ShardCount }}',
 '{{ StreamModeDetails }}',
 '{{ StreamEncryption }}',
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
      - name: DesiredShardLevelMetrics
        value:
          - '{{ DesiredShardLevelMetrics[0] }}'
      - name: RetentionPeriodHours
        value: '{{ RetentionPeriodHours }}'
      - name: ShardCount
        value: '{{ ShardCount }}'
      - name: StreamModeDetails
        value:
          StreamMode: '{{ StreamMode }}'
      - name: StreamEncryption
        value:
          EncryptionType: '{{ EncryptionType }}'
          KeyId: '{{ KeyId }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.kinesis.streams
SET data__PatchDocument = string('{{ {
    "DesiredShardLevelMetrics": desired_shard_level_metrics,
    "RetentionPeriodHours": retention_period_hours,
    "ShardCount": shard_count,
    "StreamModeDetails": stream_mode_details,
    "StreamEncryption": stream_encryption,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.kinesis.streams
WHERE data__Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>streams</code> resource, the following permissions are required:

### Create
```json
kinesis:EnableEnhancedMonitoring,
kinesis:DescribeStreamSummary,
kinesis:CreateStream,
kinesis:IncreaseStreamRetentionPeriod,
kinesis:StartStreamEncryption,
kinesis:AddTagsToStream,
kinesis:ListTagsForStream,
kinesis:ListTagsForResource
```

### Read
```json
kinesis:DescribeStreamSummary,
kinesis:ListTagsForStream,
kinesis:ListTagsForResource
```

### Update
```json
kinesis:EnableEnhancedMonitoring,
kinesis:DisableEnhancedMonitoring,
kinesis:DescribeStreamSummary,
kinesis:UpdateShardCount,
kinesis:UpdateStreamMode,
kinesis:IncreaseStreamRetentionPeriod,
kinesis:DecreaseStreamRetentionPeriod,
kinesis:StartStreamEncryption,
kinesis:StopStreamEncryption,
kinesis:AddTagsToStream,
kinesis:TagResource,
kinesis:RemoveTagsFromStream,
kinesis:UntagResource,
kinesis:ListTagsForStream,
kinesis:ListTagsForResource
```

### Delete
```json
kinesis:DescribeStreamSummary,
kinesis:DeleteStream,
kinesis:RemoveTagsFromStream,
kinesis:UntagResource
```

### List
```json
kinesis:ListStreams
```
