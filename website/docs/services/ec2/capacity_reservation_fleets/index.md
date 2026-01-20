---
title: capacity_reservation_fleets
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_reservation_fleets
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

Creates, updates, deletes or gets a <code>capacity_reservation_fleet</code> resource or lists <code>capacity_reservation_fleets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>capacity_reservation_fleets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EC2::CapacityReservationFleet</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.capacity_reservation_fleets" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "allocation_strategy",
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
    "name": "instance_type_specifications",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "instance_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "instance_platform",
        "type": "string",
        "description": ""
      },
      {
        "name": "weight",
        "type": "number",
        "description": ""
      },
      {
        "name": "availability_zone",
        "type": "string",
        "description": ""
      },
      {
        "name": "availability_zone_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "ebs_optimized",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "priority",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "total_target_capacity",
    "type": "integer",
    "description": ""
  },
  {
    "name": "end_date",
    "type": "string",
    "description": ""
  },
  {
    "name": "instance_match_criteria",
    "type": "string",
    "description": ""
  },
  {
    "name": "capacity_reservation_fleet_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "tenancy",
    "type": "string",
    "description": ""
  },
  {
    "name": "remove_end_date",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "no_remove_end_date",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-capacityreservationfleet.html"><code>AWS::EC2::CapacityReservationFleet</code></a>.

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
    <td><CopyableCode code="region" /></td>
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

Gets all properties from an individual <code>capacity_reservation_fleet</code>.
```sql
SELECT
region,
allocation_strategy,
tag_specifications,
instance_type_specifications,
total_target_capacity,
end_date,
instance_match_criteria,
capacity_reservation_fleet_id,
tenancy,
remove_end_date,
no_remove_end_date
FROM awscc.ec2.capacity_reservation_fleets
WHERE region = 'us-east-1' AND data__Identifier = '<CapacityReservationFleetId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>capacity_reservation_fleet</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.capacity_reservation_fleets (
 AllocationStrategy,
 TagSpecifications,
 InstanceTypeSpecifications,
 TotalTargetCapacity,
 EndDate,
 InstanceMatchCriteria,
 Tenancy,
 RemoveEndDate,
 NoRemoveEndDate,
 region
)
SELECT 
'{{ AllocationStrategy }}',
 '{{ TagSpecifications }}',
 '{{ InstanceTypeSpecifications }}',
 '{{ TotalTargetCapacity }}',
 '{{ EndDate }}',
 '{{ InstanceMatchCriteria }}',
 '{{ Tenancy }}',
 '{{ RemoveEndDate }}',
 '{{ NoRemoveEndDate }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.capacity_reservation_fleets (
 AllocationStrategy,
 TagSpecifications,
 InstanceTypeSpecifications,
 TotalTargetCapacity,
 EndDate,
 InstanceMatchCriteria,
 Tenancy,
 RemoveEndDate,
 NoRemoveEndDate,
 region
)
SELECT 
 '{{ AllocationStrategy }}',
 '{{ TagSpecifications }}',
 '{{ InstanceTypeSpecifications }}',
 '{{ TotalTargetCapacity }}',
 '{{ EndDate }}',
 '{{ InstanceMatchCriteria }}',
 '{{ Tenancy }}',
 '{{ RemoveEndDate }}',
 '{{ NoRemoveEndDate }}',
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
  - name: capacity_reservation_fleet
    props:
      - name: AllocationStrategy
        value: '{{ AllocationStrategy }}'
      - name: TagSpecifications
        value:
          - ResourceType: '{{ ResourceType }}'
            Tags:
              - Key: '{{ Key }}'
                Value: '{{ Value }}'
      - name: InstanceTypeSpecifications
        value:
          - InstanceType: '{{ InstanceType }}'
            InstancePlatform: '{{ InstancePlatform }}'
            Weight: null
            AvailabilityZone: '{{ AvailabilityZone }}'
            AvailabilityZoneId: '{{ AvailabilityZoneId }}'
            EbsOptimized: '{{ EbsOptimized }}'
            Priority: '{{ Priority }}'
      - name: TotalTargetCapacity
        value: '{{ TotalTargetCapacity }}'
      - name: EndDate
        value: '{{ EndDate }}'
      - name: InstanceMatchCriteria
        value: '{{ InstanceMatchCriteria }}'
      - name: Tenancy
        value: '{{ Tenancy }}'
      - name: RemoveEndDate
        value: '{{ RemoveEndDate }}'
      - name: NoRemoveEndDate
        value: '{{ NoRemoveEndDate }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.capacity_reservation_fleets
WHERE data__Identifier = '<CapacityReservationFleetId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>capacity_reservation_fleets</code> resource, the following permissions are required:

### Create
```json
ec2:CreateCapacityReservationFleet,
ec2:ModifyCapacityReservationFleet,
ec2:DescribeCapacityReservationFleets,
ec2:CancelCapacityReservationFleets,
ec2:CreateCapacityReservation,
ec2:DescribeCapacityReservations,
ec2:CancelCapacityReservation,
ec2:DescribeInstances,
ec2:CreateTags,
iam:CreateServiceLinkedRole
```

### Delete
```json
ec2:CreateCapacityReservationFleet,
ec2:ModifyCapacityReservationFleet,
ec2:DescribeCapacityReservationFleets,
ec2:CancelCapacityReservationFleets,
ec2:CreateCapacityReservation,
ec2:DescribeCapacityReservations,
ec2:CancelCapacityReservation,
ec2:DeleteTags
```

### List
```json
ec2:DescribeCapacityReservationFleets,
ec2:DescribeCapacityReservations,
ec2:DescribeInstances
```

### Read
```json
ec2:DescribeCapacityReservationFleets,
ec2:DescribeInstances,
ec2:DescribeCapacityReservations
```

### Update
```json
ec2:CreateCapacityReservationFleet,
ec2:ModifyCapacityReservationFleet,
ec2:DescribeCapacityReservationFleets,
ec2:CancelCapacityReservationFleets,
ec2:CreateCapacityReservation,
ec2:ModifyCapacityReservation,
ec2:DescribeCapacityReservations,
ec2:CancelCapacityReservation,
ec2:DescribeInstances,
ec2:DeleteTags
```
