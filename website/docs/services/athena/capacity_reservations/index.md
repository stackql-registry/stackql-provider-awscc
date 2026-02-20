---
title: capacity_reservations
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_reservations
  - athena
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
<tr><td><b>Description</b></td><td>Resource schema for AWS::Athena::CapacityReservation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.athena.capacity_reservations" /></td></tr>
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
    "description": "The Amazon Resource Name (ARN) of the specified capacity reservation"
  },
  {
    "name": "name",
    "type": "string",
    "description": "The reservation name."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the reservation."
  },
  {
    "name": "target_dpus",
    "type": "integer",
    "description": "The number of DPUs to request to be allocated to the reservation."
  },
  {
    "name": "allocated_dpus",
    "type": "integer",
    "description": "The number of DPUs Athena has provisioned and allocated for the reservation"
  },
  {
    "name": "capacity_assignment_configuration",
    "type": "object",
    "description": "Assignment configuration to assign workgroups to a reservation",
    "children": [
      {
        "name": "capacity_assignments",
        "type": "array",
        "description": "List of capacity assignments",
        "children": [
          {
            "name": "workgroup_names",
            "type": "array",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "The date and time the reservation was created."
  },
  {
    "name": "last_successful_allocation_time",
    "type": "string",
    "description": "The timestamp when the last successful allocated was made"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
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
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the specified capacity reservation"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-capacityreservation.html"><code>AWS::Athena::CapacityReservation</code></a>.

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
    <td><CopyableCode code="Name, TargetDpus, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>capacity_reservations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>capacity_reservations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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

Gets all properties from an individual <code>capacity_reservation</code>.
```sql
SELECT
region,
arn,
name,
status,
target_dpus,
allocated_dpus,
capacity_assignment_configuration,
creation_time,
last_successful_allocation_time,
tags
FROM awscc.athena.capacity_reservations
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>capacity_reservations</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.athena.capacity_reservations_list_only
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
INSERT INTO awscc.athena.capacity_reservations (
 Name,
 TargetDpus,
 region
)
SELECT 
'{{ Name }}',
 '{{ TargetDpus }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.athena.capacity_reservations (
 Name,
 TargetDpus,
 CapacityAssignmentConfiguration,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ TargetDpus }}',
 '{{ CapacityAssignmentConfiguration }}',
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
  - name: capacity_reservation
    props:
      - name: Name
        value: '{{ Name }}'
      - name: TargetDpus
        value: '{{ TargetDpus }}'
      - name: CapacityAssignmentConfiguration
        value:
          CapacityAssignments:
            - WorkgroupNames:
                - '{{ WorkgroupNames[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.athena.capacity_reservations
SET data__PatchDocument = string('{{ {
    "TargetDpus": target_dpus,
    "CapacityAssignmentConfiguration": capacity_assignment_configuration,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.athena.capacity_reservations
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>capacity_reservations</code> resource, the following permissions are required:

### Create
```json
athena:CreateCapacityReservation,
athena:PutCapacityAssignmentConfiguration,
athena:GetCapacityReservation,
athena:TagResource
```

### Read
```json
athena:GetCapacityReservation,
athena:GetCapacityAssignmentConfiguration,
athena:ListTagsForResource
```

### Update
```json
athena:UpdateCapacityReservation,
athena:PutCapacityAssignmentConfiguration,
athena:GetCapacityReservation,
athena:TagResource,
athena:UntagResource
```

### Delete
```json
athena:CancelCapacityReservation,
athena:GetCapacityReservation,
athena:DeleteCapacityReservation
```

### List
```json
athena:ListCapacityReservations,
athena:GetCapacityReservation
```
