---
title: hosts
hide_title: false
hide_table_of_contents: false
keywords:
  - hosts
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

Creates, updates, deletes or gets a <code>host</code> resource or lists <code>hosts</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>hosts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EC2::Host</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.hosts" /></td></tr>
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
    "name": "host_id",
    "type": "string",
    "description": "ID of the host created."
  },
  {
    "name": "auto_placement",
    "type": "string",
    "description": "Indicates whether the host accepts any untargeted instance launches that match its instance type configuration, or if it only accepts Host tenancy instance launches that specify its unique host ID."
  },
  {
    "name": "availability_zone",
    "type": "string",
    "description": "The Availability Zone in which to allocate the Dedicated Host."
  },
  {
    "name": "host_recovery",
    "type": "string",
    "description": "Indicates whether to enable or disable host recovery for the Dedicated Host. Host recovery is disabled by default."
  },
  {
    "name": "instance_type",
    "type": "string",
    "description": "Specifies the instance type to be supported by the Dedicated Hosts. If you specify an instance type, the Dedicated Hosts support instances of the specified instance type only."
  },
  {
    "name": "instance_family",
    "type": "string",
    "description": "Specifies the instance family to be supported by the Dedicated Hosts. If you specify an instance family, the Dedicated Hosts support multiple instance types within that instance family."
  },
  {
    "name": "outpost_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the Amazon Web Services Outpost on which to allocate the Dedicated Host."
  },
  {
    "name": "host_maintenance",
    "type": "string",
    "description": "Automatically allocates a new dedicated host and moves your instances on to it if a degradation is detected on your current host."
  },
  {
    "name": "asset_id",
    "type": "string",
    "description": "The ID of the Outpost hardware asset."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Any tags assigned to the Host.",
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
    "name": "host_id",
    "type": "string",
    "description": "ID of the host created."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-host.html"><code>AWS::EC2::Host</code></a>.

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
    <td><code>hosts</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AvailabilityZone, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>hosts</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>hosts</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>hosts_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>hosts</code></td>
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

Gets all properties from an individual <code>host</code>.
```sql
SELECT
region,
host_id,
auto_placement,
availability_zone,
host_recovery,
instance_type,
instance_family,
outpost_arn,
host_maintenance,
asset_id,
tags
FROM awscc.ec2.hosts
WHERE region = 'us-east-1' AND Identifier = '{{ host_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>hosts</code> in a region.
```sql
SELECT
region,
host_id
FROM awscc.ec2.hosts_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>host</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.hosts (
 AvailabilityZone,
 region
)
SELECT
'{{ availability_zone }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.hosts (
 AutoPlacement,
 AvailabilityZone,
 HostRecovery,
 InstanceType,
 InstanceFamily,
 OutpostArn,
 HostMaintenance,
 AssetId,
 Tags,
 region
)
SELECT
 '{{ auto_placement }}',
 '{{ availability_zone }}',
 '{{ host_recovery }}',
 '{{ instance_type }}',
 '{{ instance_family }}',
 '{{ outpost_arn }}',
 '{{ host_maintenance }}',
 '{{ asset_id }}',
 '{{ tags }}',
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
  - name: host
    props:
      - name: auto_placement
        value: '{{ auto_placement }}'
      - name: availability_zone
        value: '{{ availability_zone }}'
      - name: host_recovery
        value: '{{ host_recovery }}'
      - name: instance_type
        value: '{{ instance_type }}'
      - name: instance_family
        value: '{{ instance_family }}'
      - name: outpost_arn
        value: '{{ outpost_arn }}'
      - name: host_maintenance
        value: '{{ host_maintenance }}'
      - name: asset_id
        value: '{{ asset_id }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>host</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.hosts
SET PatchDocument = string('{{ {
    "AutoPlacement": auto_placement,
    "HostRecovery": host_recovery,
    "HostMaintenance": host_maintenance,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ host_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.hosts
WHERE Identifier = '{{ host_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>hosts</code> resource, the following permissions are required:

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
ec2:AllocateHosts,
ec2:DescribeHosts,
ec2:CreateTags
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeHosts
```

</TabItem>
<TabItem value="update">

```json
ec2:ModifyHosts,
ec2:DescribeHosts,
ec2:DeleteTags,
ec2:CreateTags
```

</TabItem>
<TabItem value="delete">

```json
ec2:ReleaseHosts,
ec2:DescribeHosts
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeHosts
```

</TabItem>
</Tabs>