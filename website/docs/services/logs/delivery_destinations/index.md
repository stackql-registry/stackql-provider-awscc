---
title: delivery_destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - delivery_destinations
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

Creates, updates, deletes or gets a <code>delivery_destination</code> resource or lists <code>delivery_destinations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>delivery_destinations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>This structure contains information about one delivery destination in your account.<br />A delivery destination is an AWS resource that represents an AWS service that logs can be sent to CloudWatch Logs, Amazon S3, are supported as Kinesis Data Firehose delivery destinations.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.logs.delivery_destinations" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "The name of this delivery destination."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) that uniquely identifies this delivery destination."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags that have been assigned to this delivery destination.",
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
    "name": "delivery_destination_type",
    "type": "string",
    "description": "Displays whether this delivery destination is CloudWatch Logs, Amazon S3, or Kinesis Data Firehose."
  },
  {
    "name": "delivery_destination_policy",
    "type": "object",
    "description": "IAM policy that grants permissions to CloudWatch Logs to deliver logs cross-account to a specified destination in this account.<br />The policy must be in JSON string format.<br />Length Constraints: Maximum length of 51200",
    "children": [
      {
        "name": "delivery_destination_name",
        "type": "string",
        "description": "The name of the delivery destination to assign this policy to"
      },
      {
        "name": "delivery_destination_policy",
        "type": "object",
        "description": "The contents of the policy attached to the delivery destination"
      }
    ]
  },
  {
    "name": "output_format",
    "type": "string",
    "description": "The format of the logs that are sent to this delivery destination."
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
    "description": "The name of this delivery destination."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverydestination.html"><code>AWS::Logs::DeliveryDestination</code></a>.

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
    <td><code>delivery_destinations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>delivery_destinations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>delivery_destinations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>delivery_destinations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>delivery_destinations</code></td>
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

Gets all properties from an individual <code>delivery_destination</code>.
```sql
SELECT
region,
name,
arn,
destination_resource_arn,
tags,
delivery_destination_type,
delivery_destination_policy,
output_format
FROM awscc.logs.delivery_destinations
WHERE region = 'us-east-1' AND data__Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>delivery_destinations</code> in a region.
```sql
SELECT
region,
name
FROM awscc.logs.delivery_destinations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>delivery_destination</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.logs.delivery_destinations (
 Name,
 region
)
SELECT 
'{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.logs.delivery_destinations (
 Name,
 DestinationResourceArn,
 Tags,
 DeliveryDestinationPolicy,
 OutputFormat,
 region
)
SELECT 
 '{{ Name }}',
 '{{ DestinationResourceArn }}',
 '{{ Tags }}',
 '{{ DeliveryDestinationPolicy }}',
 '{{ OutputFormat }}',
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
  - name: delivery_destination
    props:
      - name: Name
        value: '{{ Name }}'
      - name: DestinationResourceArn
        value: '{{ DestinationResourceArn }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: DeliveryDestinationPolicy
        value:
          DeliveryDestinationName: '{{ DeliveryDestinationName }}'
          DeliveryDestinationPolicy: {}
      - name: OutputFormat
        value: '{{ OutputFormat }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.logs.delivery_destinations
SET data__PatchDocument = string('{{ {
    "Tags": tags,
    "DeliveryDestinationPolicy": delivery_destination_policy
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.logs.delivery_destinations
WHERE data__Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>delivery_destinations</code> resource, the following permissions are required:

### Create
```json
logs:PutDeliveryDestination,
logs:GetDeliveryDestination,
logs:ListTagsForResource,
logs:TagResource,
logs:UntagResource,
logs:PutDeliveryDestinationPolicy,
logs:GetDeliveryDestinationPolicy
```

### Read
```json
logs:GetDeliveryDestination,
logs:ListTagsForResource,
logs:GetDeliveryDestinationPolicy
```

### Update
```json
logs:PutDeliveryDestination,
logs:GetDeliveryDestination,
logs:ListTagsForResource,
logs:TagResource,
logs:UntagResource,
logs:DeleteDeliveryDestinationPolicy,
logs:PutDeliveryDestinationPolicy,
logs:GetDeliveryDestinationPolicy
```

### Delete
```json
logs:DeleteDeliveryDestination,
logs:DeleteDeliveryDestinationPolicy
```

### List
```json
logs:DescribeDeliveryDestinations,
logs:GetDeliveryDestinationPolicy
```
