---
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
  - lightsail
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

Creates, updates, deletes or gets an <code>instance</code> resource or lists <code>instances</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>instances</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Lightsail::Instance</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lightsail.instances" /></td></tr>
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
    "name": "support_code",
    "type": "string",
    "description": "Support code to help identify any issues"
  },
  {
    "name": "resource_type",
    "type": "string",
    "description": "Resource type of Lightsail instance."
  },
  {
    "name": "is_static_ip",
    "type": "boolean",
    "description": "Is the IP Address of the Instance is the static IP"
  },
  {
    "name": "private_ip_address",
    "type": "string",
    "description": "Private IP Address of the Instance"
  },
  {
    "name": "public_ip_address",
    "type": "string",
    "description": "Public IP Address of the Instance"
  },
  {
    "name": "ipv6_addresses",
    "type": "array",
    "description": "IPv6 addresses of the instance"
  },
  {
    "name": "location",
    "type": "object",
    "description": "The region name and Availability Zone where you created the snapshot.",
    "children": [
      {
        "name": "availability_zone",
        "type": "string",
        "description": "The Availability Zone. Follows the format us-east-2a (case-sensitive)."
      },
      {
        "name": "region_name",
        "type": "string",
        "description": "The AWS Region name."
      }
    ]
  },
  {
    "name": "hardware",
    "type": "object",
    "description": "Hardware of the Instance.",
    "children": [
      {
        "name": "cpu_count",
        "type": "integer",
        "description": "CPU count of the Instance."
      },
      {
        "name": "ram_size_in_gb",
        "type": "integer",
        "description": "RAM Size of the Instance."
      },
      {
        "name": "disks",
        "type": "array",
        "description": "Disks attached to the Instance.",
        "children": [
          {
            "name": "disk_name",
            "type": "string",
            "description": "The names to use for your new Lightsail disk."
          },
          {
            "name": "size_in_gb",
            "type": "string",
            "description": "Size of the disk attached to the Instance."
          },
          {
            "name": "is_system_disk",
            "type": "boolean",
            "description": "Is the Attached disk is the system disk of the Instance."
          },
          {
            "name": "i_op_s",
            "type": "integer",
            "description": "IOPS of disk."
          },
          {
            "name": "path",
            "type": "string",
            "description": "Path of the disk attached to the instance."
          },
          {
            "name": "attached_to",
            "type": "string",
            "description": "Instance attached to the disk."
          },
          {
            "name": "attachment_state",
            "type": "string",
            "description": "Attachment state of the disk."
          }
        ]
      }
    ]
  },
  {
    "name": "state",
    "type": "object",
    "description": "Current State of the Instance.",
    "children": [
      {
        "name": "code",
        "type": "integer",
        "description": "Status code of the Instance."
      },
      {
        "name": "name",
        "type": "string",
        "description": "Status code of the Instance."
      }
    ]
  },
  {
    "name": "networking",
    "type": "object",
    "description": "Networking of the Instance.",
    "children": [
      {
        "name": "ports",
        "type": "array",
        "description": "Ports to the Instance.",
        "children": [
          {
            "name": "from_port",
            "type": "integer",
            "description": "From Port of the Instance."
          },
          {
            "name": "to_port",
            "type": "integer",
            "description": "To Port of the Instance."
          },
          {
            "name": "protocol",
            "type": "string",
            "description": "Port Protocol of the Instance."
          },
          {
            "name": "access_from",
            "type": "string",
            "description": "Access From Protocol of the Instance."
          },
          {
            "name": "access_type",
            "type": "string",
            "description": "Access Type Protocol of the Instance."
          },
          {
            "name": "common_name",
            "type": "string",
            "description": "CommonName for Protocol of the Instance."
          },
          {
            "name": "access_direction",
            "type": "string",
            "description": "Access Direction for Protocol of the Instance(inbound/outbound)."
          },
          {
            "name": "ipv6_cidrs",
            "type": "array",
            "description": "IPv6 Cidrs"
          },
          {
            "name": "cidr_list_aliases",
            "type": "array",
            "description": "cidr List Aliases"
          },
          {
            "name": "cidrs",
            "type": "array",
            "description": "cidrs"
          }
        ]
      },
      {
        "name": "monthly_transfer",
        "type": "object",
        "description": "Monthly Transfer of the Instance.",
        "children": [
          {
            "name": "gb_per_month_allocated",
            "type": "string",
            "description": "GbPerMonthAllocated of the Instance."
          }
        ]
      }
    ]
  },
  {
    "name": "user_name",
    "type": "string",
    "description": "Username of the Lightsail instance."
  },
  {
    "name": "ssh_key_name",
    "type": "string",
    "description": "SSH Key Name of the Lightsail instance."
  },
  {
    "name": "instance_name",
    "type": "string",
    "description": "The names to use for your new Lightsail instance."
  },
  {
    "name": "availability_zone",
    "type": "string",
    "description": "The Availability Zone in which to create your instance. Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request."
  },
  {
    "name": "bundle_id",
    "type": "string",
    "description": "The bundle of specification information for your virtual private server (or instance ), including the pricing plan (e.g., micro&#95;1&#95;0 )."
  },
  {
    "name": "blueprint_id",
    "type": "string",
    "description": "The ID for a virtual private server image (e.g., app&#95;wordpress&#95;4&#95;4 or app&#95;lamp&#95;7&#95;0 ). Use the get blueprints operation to return a list of available images (or blueprints )."
  },
  {
    "name": "add_ons",
    "type": "array",
    "description": "An array of objects representing the add-ons to enable for the new instance.",
    "children": [
      {
        "name": "add_on_type",
        "type": "string",
        "description": "The add-on type"
      },
      {
        "name": "status",
        "type": "string",
        "description": "Status of the Addon"
      },
      {
        "name": "auto_snapshot_add_on_request",
        "type": "object",
        "description": "An object that represents additional parameters when enabling or modifying the automatic snapshot add-on",
        "children": [
          {
            "name": "snapshot_time_of_day",
            "type": "string",
            "description": "The daily time when an automatic snapshot will be created."
          }
        ]
      }
    ]
  },
  {
    "name": "user_data",
    "type": "string",
    "description": "A launch script you can create that configures a server with additional user data. For example, you might want to run apt-get -y update."
  },
  {
    "name": "key_pair_name",
    "type": "string",
    "description": "The name of your key pair."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "instance_arn",
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
    "name": "instance_name",
    "type": "string",
    "description": "The names to use for your new Lightsail instance."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html"><code>AWS::Lightsail::Instance</code></a>.

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
    <td><code>instances</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="InstanceName, BlueprintId, BundleId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>instances</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>instances</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>instances_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>instances</code></td>
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

Gets all properties from an individual <code>instance</code>.
```sql
SELECT
region,
support_code,
resource_type,
is_static_ip,
private_ip_address,
public_ip_address,
ipv6_addresses,
location,
hardware,
state,
networking,
user_name,
ssh_key_name,
instance_name,
availability_zone,
bundle_id,
blueprint_id,
add_ons,
user_data,
key_pair_name,
tags,
instance_arn
FROM awscc.lightsail.instances
WHERE region = 'us-east-1' AND Identifier = '<InstanceName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>instances</code> in a region.
```sql
SELECT
region,
instance_name
FROM awscc.lightsail.instances_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>instance</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.lightsail.instances (
 InstanceName,
 BundleId,
 BlueprintId,
 region
)
SELECT 
'{{ InstanceName }}',
 '{{ BundleId }}',
 '{{ BlueprintId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.lightsail.instances (
 Location,
 Hardware,
 State,
 Networking,
 InstanceName,
 AvailabilityZone,
 BundleId,
 BlueprintId,
 AddOns,
 UserData,
 KeyPairName,
 Tags,
 region
)
SELECT 
 '{{ Location }}',
 '{{ Hardware }}',
 '{{ State }}',
 '{{ Networking }}',
 '{{ InstanceName }}',
 '{{ AvailabilityZone }}',
 '{{ BundleId }}',
 '{{ BlueprintId }}',
 '{{ AddOns }}',
 '{{ UserData }}',
 '{{ KeyPairName }}',
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
  - name: instance
    props:
      - name: Location
        value:
          AvailabilityZone: '{{ AvailabilityZone }}'
          RegionName: '{{ RegionName }}'
      - name: Hardware
        value:
          CpuCount: '{{ CpuCount }}'
          RamSizeInGb: '{{ RamSizeInGb }}'
          Disks:
            - DiskName: '{{ DiskName }}'
              SizeInGb: '{{ SizeInGb }}'
              IsSystemDisk: '{{ IsSystemDisk }}'
              IOPS: '{{ IOPS }}'
              Path: '{{ Path }}'
              AttachedTo: '{{ AttachedTo }}'
              AttachmentState: '{{ AttachmentState }}'
      - name: State
        value:
          Code: '{{ Code }}'
          Name: '{{ Name }}'
      - name: Networking
        value:
          Ports:
            - FromPort: '{{ FromPort }}'
              ToPort: '{{ ToPort }}'
              Protocol: '{{ Protocol }}'
              AccessFrom: '{{ AccessFrom }}'
              AccessType: '{{ AccessType }}'
              CommonName: '{{ CommonName }}'
              AccessDirection: '{{ AccessDirection }}'
              Ipv6Cidrs:
                - '{{ Ipv6Cidrs[0] }}'
              CidrListAliases:
                - '{{ CidrListAliases[0] }}'
              Cidrs:
                - '{{ Cidrs[0] }}'
          MonthlyTransfer:
            GbPerMonthAllocated: '{{ GbPerMonthAllocated }}'
      - name: InstanceName
        value: '{{ InstanceName }}'
      - name: AvailabilityZone
        value: '{{ AvailabilityZone }}'
      - name: BundleId
        value: '{{ BundleId }}'
      - name: BlueprintId
        value: '{{ BlueprintId }}'
      - name: AddOns
        value:
          - AddOnType: '{{ AddOnType }}'
            Status: '{{ Status }}'
            AutoSnapshotAddOnRequest:
              SnapshotTimeOfDay: '{{ SnapshotTimeOfDay }}'
      - name: UserData
        value: '{{ UserData }}'
      - name: KeyPairName
        value: '{{ KeyPairName }}'
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
UPDATE awscc.lightsail.instances
SET PatchDocument = string('{{ {
    "AddOns": add_ons,
    "UserData": user_data,
    "KeyPairName": key_pair_name,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<InstanceName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lightsail.instances
WHERE Identifier = '<InstanceName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>instances</code> resource, the following permissions are required:

### Create
```json
lightsail:CreateInstances,
lightsail:GetInstances,
lightsail:EnableAddOn,
lightsail:GetInstance,
lightsail:DisableAddOn,
lightsail:PutInstancePublicPorts,
lightsail:AttachDisk,
lightsail:DetachDisk,
lightsail:StartInstance,
lightsail:StopInstance,
lightsail:GetDisk,
lightsail:GetRegions,
lightsail:TagResource,
lightsail:UntagResource
```

### Read
```json
lightsail:GetInstances,
lightsail:GetInstance
```

### Delete
```json
lightsail:GetInstances,
lightsail:GetInstance,
lightsail:DeleteInstance
```

### List
```json
lightsail:GetInstances
```

### Update
```json
lightsail:GetInstances,
lightsail:GetInstance,
lightsail:DeleteInstance,
lightsail:EnableAddOn,
lightsail:DisableAddOn,
lightsail:PutInstancePublicPorts,
lightsail:AttachDisk,
lightsail:DetachDisk,
lightsail:StartInstance,
lightsail:StopInstance,
lightsail:GetDisk,
lightsail:TagResource,
lightsail:UntagResource
```
