---
title: streams
hide_title: false
hide_table_of_contents: false
keywords:
  - streams
  - qldb
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
<tr><td><b>Description</b></td><td>Resource schema for AWS::QLDB::Stream.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.qldb.streams" /></td></tr>
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
    "name": "ledger_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "stream_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "inclusive_start_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "exclusive_end_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "kinesis_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "aggregation_enabled",
        "type": "boolean",
        "description": ""
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
        "description": "The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "id",
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
    "name": "ledger_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qldb-stream.html"><code>AWS::QLDB::Stream</code></a>.

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
    <td><CopyableCode code="LedgerName, StreamName, RoleArn, KinesisConfiguration, InclusiveStartTime, region" /></td>
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
ledger_name,
stream_name,
role_arn,
inclusive_start_time,
exclusive_end_time,
kinesis_configuration,
tags,
arn,
id
FROM awscc.qldb.streams
WHERE region = 'us-east-1' AND Identifier = '<LedgerName>|<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>streams</code> in a region.
```sql
SELECT
region,
ledger_name,
id
FROM awscc.qldb.streams_list_only
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
INSERT INTO awscc.qldb.streams (
 LedgerName,
 StreamName,
 RoleArn,
 InclusiveStartTime,
 KinesisConfiguration,
 region
)
SELECT 
'{{ LedgerName }}',
 '{{ StreamName }}',
 '{{ RoleArn }}',
 '{{ InclusiveStartTime }}',
 '{{ KinesisConfiguration }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.qldb.streams (
 LedgerName,
 StreamName,
 RoleArn,
 InclusiveStartTime,
 ExclusiveEndTime,
 KinesisConfiguration,
 Tags,
 region
)
SELECT 
 '{{ LedgerName }}',
 '{{ StreamName }}',
 '{{ RoleArn }}',
 '{{ InclusiveStartTime }}',
 '{{ ExclusiveEndTime }}',
 '{{ KinesisConfiguration }}',
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
      - name: LedgerName
        value: '{{ LedgerName }}'
      - name: StreamName
        value: '{{ StreamName }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: InclusiveStartTime
        value: '{{ InclusiveStartTime }}'
      - name: ExclusiveEndTime
        value: '{{ ExclusiveEndTime }}'
      - name: KinesisConfiguration
        value:
          StreamArn: null
          AggregationEnabled: '{{ AggregationEnabled }}'
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
UPDATE awscc.qldb.streams
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<LedgerName>|<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.qldb.streams
WHERE Identifier = '<LedgerName|Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>streams</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
iam:PassRole,
qldb:StreamJournalToKinesis,
qldb:DescribeJournalKinesisStream
```

</TabItem>
<TabItem value="delete">

```json
qldb:CancelJournalKinesisStream,
qldb:DescribeJournalKinesisStream
```

</TabItem>
<TabItem value="read">

```json
qldb:DescribeJournalKinesisStream,
qldb:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
qldb:DescribeJournalKinesisStream,
qldb:UntagResource,
qldb:TagResource
```

</TabItem>
<TabItem value="list">

```json
qldb:listJournalKinesisStreamsForLedger
```

</TabItem>
</Tabs>