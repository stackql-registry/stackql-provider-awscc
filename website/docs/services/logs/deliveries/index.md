---
title: deliveries
hide_title: false
hide_table_of_contents: false
keywords:
  - deliveries
  - logs
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

Creates, updates, deletes or gets a <code>delivery</code> resource or lists <code>deliveries</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>deliveries</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>This structure contains information about one delivery in your account.<br />A delivery is a connection between a logical delivery source and a logical delivery destination.<br />For more information, see &#91;CreateDelivery&#93;(https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API&#95;CreateDelivery.html).</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.logs.deliveries" /></td></tr>
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
    "name": "delivery_id",
    "type": "string",
    "description": "The unique ID that identifies this delivery in your account."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) that uniquely identifies this delivery."
  },
  {
    "name": "delivery_source_name",
    "type": "string",
    "description": "The name of the delivery source that is associated with this delivery."
  },
  {
    "name": "delivery_destination_type",
    "type": "string",
    "description": "Displays whether the delivery destination associated with this delivery is CloudWatch Logs, Amazon S3, or Kinesis Data Firehose."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags that have been assigned to this delivery.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value of this key-value pair."
      }
    ]
  },
  {
    "name": "record_fields",
    "type": "array",
    "description": "The list of record fields to be delivered to the destination, in order. If the delivery's log source has mandatory fields, they must be included in this list."
  },
  {
    "name": "field_delimiter",
    "type": "string",
    "description": "The field delimiter to use between record fields when the final output format of a delivery is in Plain , W3C , or Raw format."
  },
  {
    "name": "s3_suffix_path",
    "type": "string",
    "description": "This string allows re-configuring the S3 object prefix to contain either static or variable sections. The valid variables to use in the suffix path will vary by each log source. See ConfigurationTemplate$allowedSuffixPathFields for more info on what values are supported in the suffix path for each log source."
  },
  {
    "name": "s3_enable_hive_compatible_path",
    "type": "boolean",
    "description": "This parameter causes the S3 objects that contain delivered logs to use a prefix structure that allows for integration with Apache Hive."
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
    "name": "delivery_id",
    "type": "string",
    "description": "The unique ID that identifies this delivery in your account."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-delivery.html"><code>AWS::Logs::Delivery</code></a>.

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
    <td><code>deliveries</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DeliverySourceName, DeliveryDestinationArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>deliveries</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>deliveries</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>deliveries_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>deliveries</code></td>
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

Gets all properties from an individual <code>delivery</code>.
```sql
SELECT
region,
delivery_id,
arn,
delivery_source_name,
delivery_destination_arn,
delivery_destination_type,
tags,
record_fields,
field_delimiter,
s3_suffix_path,
s3_enable_hive_compatible_path
FROM awscc.logs.deliveries
WHERE region = 'us-east-1' AND Identifier = '<DeliveryId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>deliveries</code> in a region.
```sql
SELECT
region,
delivery_id
FROM awscc.logs.deliveries_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>delivery</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.logs.deliveries (
 DeliverySourceName,
 DeliveryDestinationArn,
 region
)
SELECT 
'{{ DeliverySourceName }}',
 '{{ DeliveryDestinationArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.logs.deliveries (
 DeliverySourceName,
 DeliveryDestinationArn,
 Tags,
 RecordFields,
 FieldDelimiter,
 S3SuffixPath,
 S3EnableHiveCompatiblePath,
 region
)
SELECT 
 '{{ DeliverySourceName }}',
 '{{ DeliveryDestinationArn }}',
 '{{ Tags }}',
 '{{ RecordFields }}',
 '{{ FieldDelimiter }}',
 '{{ S3SuffixPath }}',
 '{{ S3EnableHiveCompatiblePath }}',
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
  - name: delivery
    props:
      - name: DeliverySourceName
        value: '{{ DeliverySourceName }}'
      - name: DeliveryDestinationArn
        value: '{{ DeliveryDestinationArn }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: RecordFields
        value:
          - '{{ RecordFields[0] }}'
      - name: FieldDelimiter
        value: '{{ FieldDelimiter }}'
      - name: S3SuffixPath
        value: '{{ S3SuffixPath }}'
      - name: S3EnableHiveCompatiblePath
        value: '{{ S3EnableHiveCompatiblePath }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.logs.deliveries
SET PatchDocument = string('{{ {
    "Tags": tags,
    "RecordFields": record_fields,
    "FieldDelimiter": field_delimiter,
    "S3SuffixPath": s3_suffix_path,
    "S3EnableHiveCompatiblePath": s3_enable_hive_compatible_path
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<DeliveryId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.logs.deliveries
WHERE Identifier = '<DeliveryId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>deliveries</code> resource, the following permissions are required:

### Create
```json
logs:CreateDelivery,
logs:GetDelivery,
logs:DescribeDeliveries,
logs:ListTagsForResource,
logs:TagResource,
logs:GetDeliverySource,
logs:GetDeliveryDestination
```

### Read
```json
logs:GetDelivery,
logs:ListTagsForResource
```

### Update
```json
logs:GetDelivery,
logs:ListTagsForResource,
logs:TagResource,
logs:UntagResource,
logs:UpdateDeliveryConfiguration
```

### Delete
```json
logs:DeleteDelivery,
logs:ListTagsForResource,
logs:UntagResource
```

### List
```json
logs:DescribeDeliveries,
logs:ListTagsForResource
```
