---
title: capacity_reservations
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_reservations
  - ec2
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

Creates, updates, deletes or gets a <code>capacity_reservation</code> resource or lists <code>capacity_reservations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>capacity_reservations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EC2::CapacityReservation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.capacity_reservations" /></td></tr>
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
    "name": "tenancy",
    "type": "string",
    "description": ""
  },
  {
    "name": "end_date_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "tag_specifications",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "resource_type",
        "type": "string",
        "description": "The type of resource to tag. You can specify tags for the following resource types only: &#96;&#96;instance&#96;&#96; &#124; &#96;&#96;volume&#96;&#96; &#124; &#96;&#96;network-interface&#96;&#96; &#124; &#96;&#96;spot-instances-request&#96;&#96;. If the instance does not include the resource type that you specify, the instance launch fails. For example, not all instance types include a volume.<br />To tag a resource after it has been created, see &#91;CreateTags&#93;(https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API&#95;CreateTags.html)."
      },
      {
        "name": "tags",
        "type": "array",
        "description": "The tags to apply to the resource.",
        "children": [
          {
            "name": "key",
            "type": "string",
            "description": "The tag key."
          },
          {
            "name": "value",
            "type": "string",
            "description": "The tag value."
          }
        ]
      }
    ]
  },
  {
    "name": "availability_zone",
    "type": "string",
    "description": ""
  },
  {
    "name": "total_instance_count",
    "type": "integer",
    "description": ""
  },
  {
    "name": "end_date",
    "type": "string",
    "description": ""
  },
  {
    "name": "ebs_optimized",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "out_post_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "instance_count",
    "type": "integer",
    "description": ""
  },
  {
    "name": "placement_group_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "available_instance_count",
    "type": "integer",
    "description": ""
  },
  {
    "name": "instance_platform",
    "type": "string",
    "description": ""
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "instance_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "ephemeral_storage",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "instance_match_criteria",
    "type": "string",
    "description": ""
  },
  {
    "name": "unused_reservation_billing_owner_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "availability_zone_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "start_date",
    "type": "string",
    "description": ""
  },
  {
    "name": "capacity_reservation_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "create_date",
    "type": "string",
    "description": ""
  },
  {
    "name": "state",
    "type": "string",
    "description": ""
  },
  {
    "name": "owner_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "delivery_preference",
    "type": "string",
    "description": ""
  },
  {
    "name": "capacity_reservation_fleet_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "reservation_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "capacity_allocation_set",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "allocation_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "count",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "commitment_info",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "commitment_end_date",
        "type": "string",
        "description": ""
      },
      {
        "name": "committed_instance_count",
        "type": "integer",
        "description": ""
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-capacityreservation.html"><code>AWS::EC2::CapacityReservation</code></a>.

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
    <td><code>capacity_reservations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="InstanceCount, InstancePlatform, InstanceType, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>capacity_reservations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>capacity_reservations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>capacity_reservations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>capacity_reservations</code></td>
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

Gets all properties from an individual <code>capacity_reservation</code>.
```sql
SELECT
region,
tenancy,
end_date_type,
tag_specifications,
availability_zone,
total_instance_count,
end_date,
ebs_optimized,
out_post_arn,
instance_count,
placement_group_arn,
available_instance_count,
instance_platform,
id,
instance_type,
ephemeral_storage,
instance_match_criteria,
unused_reservation_billing_owner_id,
availability_zone_id,
start_date,
capacity_reservation_arn,
create_date,
state,
owner_id,
delivery_preference,
capacity_reservation_fleet_id,
reservation_type,
capacity_allocation_set,
commitment_info
FROM awscc.ec2.capacity_reservations
WHERE region = 'us-east-1' AND Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>capacity_reservations</code> in a region.
```sql
SELECT
region,
id
FROM awscc.ec2.capacity_reservations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>capacity_reservation</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.capacity_reservations (
 InstanceCount,
 InstancePlatform,
 InstanceType,
 region
)
SELECT 
'{{ InstanceCount }}',
 '{{ InstancePlatform }}',
 '{{ InstanceType }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.capacity_reservations (
 Tenancy,
 EndDateType,
 TagSpecifications,
 AvailabilityZone,
 EndDate,
 EbsOptimized,
 OutPostArn,
 InstanceCount,
 PlacementGroupArn,
 InstancePlatform,
 InstanceType,
 EphemeralStorage,
 InstanceMatchCriteria,
 UnusedReservationBillingOwnerId,
 AvailabilityZoneId,
 region
)
SELECT 
 '{{ Tenancy }}',
 '{{ EndDateType }}',
 '{{ TagSpecifications }}',
 '{{ AvailabilityZone }}',
 '{{ EndDate }}',
 '{{ EbsOptimized }}',
 '{{ OutPostArn }}',
 '{{ InstanceCount }}',
 '{{ PlacementGroupArn }}',
 '{{ InstancePlatform }}',
 '{{ InstanceType }}',
 '{{ EphemeralStorage }}',
 '{{ InstanceMatchCriteria }}',
 '{{ UnusedReservationBillingOwnerId }}',
 '{{ AvailabilityZoneId }}',
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
  - name: capacity_reservation
    props:
      - name: Tenancy
        value: '{{ Tenancy }}'
      - name: EndDateType
        value: '{{ EndDateType }}'
      - name: TagSpecifications
        value:
          - ResourceType: '{{ ResourceType }}'
            Tags:
              - Key: '{{ Key }}'
                Value: '{{ Value }}'
      - name: AvailabilityZone
        value: '{{ AvailabilityZone }}'
      - name: EndDate
        value: '{{ EndDate }}'
      - name: EbsOptimized
        value: '{{ EbsOptimized }}'
      - name: OutPostArn
        value: '{{ OutPostArn }}'
      - name: InstanceCount
        value: '{{ InstanceCount }}'
      - name: PlacementGroupArn
        value: '{{ PlacementGroupArn }}'
      - name: InstancePlatform
        value: '{{ InstancePlatform }}'
      - name: InstanceType
        value: '{{ InstanceType }}'
      - name: EphemeralStorage
        value: '{{ EphemeralStorage }}'
      - name: InstanceMatchCriteria
        value: '{{ InstanceMatchCriteria }}'
      - name: UnusedReservationBillingOwnerId
        value: '{{ UnusedReservationBillingOwnerId }}'
      - name: AvailabilityZoneId
        value: '{{ AvailabilityZoneId }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>capacity_reservation</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.capacity_reservations
SET PatchDocument = string('{{ {
    "EndDateType": end_date_type,
    "EndDate": end_date,
    "InstanceCount": instance_count,
    "InstanceMatchCriteria": instance_match_criteria,
    "UnusedReservationBillingOwnerId": unused_reservation_billing_owner_id
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.capacity_reservations
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>capacity_reservations</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
ec2:CreateCapacityReservation,
ec2:DescribeCapacityReservations,
ec2:CancelCapacityReservation,
ec2:CreateTags
```

</TabItem>
<TabItem value="delete">

```json
ec2:CreateCapacityReservation,
ec2:DescribeCapacityReservations,
ec2:CancelCapacityReservation,
ec2:DeleteTags
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeCapacityReservations
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeCapacityReservations
```

</TabItem>
<TabItem value="update">

```json
ec2:ModifyCapacityReservation,
ec2:CreateCapacityReservation,
ec2:DescribeCapacityReservations,
ec2:CancelCapacityReservation,
ec2:AssociateCapacityReservationBillingOwner,
ec2:CreateTags,
ec2:DeleteTags
```

</TabItem>
</Tabs>