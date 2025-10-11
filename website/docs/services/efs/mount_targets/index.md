---
title: mount_targets
hide_title: false
hide_table_of_contents: false
keywords:
  - mount_targets
  - efs
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

Creates, updates, deletes or gets a <code>mount_target</code> resource or lists <code>mount_targets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>mount_targets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The <code>AWS::EFS::MountTarget</code> resource is an Amazon EFS resource that creates a mount target for an EFS file system. You can then mount the file system on Amazon EC2 instances or other resources by using the mount target.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.efs.mount_targets" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="ip_address" /></td><td><code>string</code></td><td>If the <code>IpAddressType</code> for the mount target is IPv4 ( <code>IPV4_ONLY</code> or <code>DUAL_STACK</code>), then specify the IPv4 address to use. If you do not specify an <code>IpAddress</code>, then Amazon EFS selects an unused IP address from the subnet specified for <code>SubnetId</code>.</td></tr>
<tr><td><CopyableCode code="ipv6_address" /></td><td><code>string</code></td><td>If the <code>IPAddressType</code> for the mount target is IPv6 (<code>IPV6_ONLY</code> or <code>DUAL_STACK</code>), then specify the IPv6 address to use. If you do not specify an <code>Ipv6Address</code>, then Amazon EFS selects an unused IP address from the subnet specified for <code>SubnetId</code>.</td></tr>
<tr><td><CopyableCode code="ip_address_type" /></td><td><code>string</code></td><td>The IP address type for the mount target. The possible values are <code>IPV4_ONLY</code> (only IPv4 addresses), <code>IPV6_ONLY</code> (only IPv6 addresses), and <code>DUAL_STACK</code> (dual-stack, both IPv4 and IPv6 addresses). If you don’t specify an <code>IpAddressType</code>, then <code>IPV4_ONLY</code> is used.<br />The <code>IPAddressType</code> must match the IP type of the subnet. Additionally, the <code>IPAddressType</code> parameter overrides the value set as the default IP address for the subnet in the VPC. For example, if the <code>IPAddressType</code> is <code>IPV4_ONLY</code> and <code>AssignIpv6AddressOnCreation</code> is <code>true</code>, then IPv4 is used for the mount target. For more information, see &#91;Modify the IP addressing attributes of your subnet&#93;(https://docs.aws.amazon.com/vpc/latest/userguide/subnet-public-ip.html).</td></tr>
<tr><td><CopyableCode code="file_system_id" /></td><td><code>string</code></td><td>The ID of the file system for which to create the mount target.</td></tr>
<tr><td><CopyableCode code="security_groups" /></td><td><code>array</code></td><td>VPC security group IDs, of the form <code>sg-xxxxxxxx</code>. These must be for the same VPC as the subnet specified. The maximum number of security groups depends on account quota. For more information, see &#91;Amazon VPC Quotas&#93;(https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html) in the ASTERIX;Amazon VPC User GuideASTERIX; (see the ASTERIX;Security GroupsASTERIX; table). If you don't specify a security group, then Amazon EFS uses the default security group for the subnet's VPC.</td></tr>
<tr><td><CopyableCode code="subnet_id" /></td><td><code>string</code></td><td>The ID of the subnet to add the mount target in. For One Zone file systems, use the subnet that is associated with the file system's Availability Zone. The subnet type must be the same type as the <code>IpAddressType</code>.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html"><code>AWS::EFS::MountTarget</code></a>.

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
    <td><CopyableCode code="FileSystemId, SecurityGroups, SubnetId, region" /></td>
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
Gets all <code>mount_targets</code> in a region.
```sql
SELECT
region,
id,
ip_address,
ipv6_address,
ip_address_type,
file_system_id,
security_groups,
subnet_id
FROM awscc.efs.mount_targets
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>mount_target</code>.
```sql
SELECT
region,
id,
ip_address,
ipv6_address,
ip_address_type,
file_system_id,
security_groups,
subnet_id
FROM awscc.efs.mount_targets
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>mount_target</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.efs.mount_targets (
 FileSystemId,
 SecurityGroups,
 SubnetId,
 region
)
SELECT 
'{{ FileSystemId }}',
 '{{ SecurityGroups }}',
 '{{ SubnetId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.efs.mount_targets (
 IpAddress,
 Ipv6Address,
 IpAddressType,
 FileSystemId,
 SecurityGroups,
 SubnetId,
 region
)
SELECT 
 '{{ IpAddress }}',
 '{{ Ipv6Address }}',
 '{{ IpAddressType }}',
 '{{ FileSystemId }}',
 '{{ SecurityGroups }}',
 '{{ SubnetId }}',
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
  - name: mount_target
    props:
      - name: IpAddress
        value: '{{ IpAddress }}'
      - name: Ipv6Address
        value: '{{ Ipv6Address }}'
      - name: IpAddressType
        value: '{{ IpAddressType }}'
      - name: FileSystemId
        value: '{{ FileSystemId }}'
      - name: SecurityGroups
        value:
          - '{{ SecurityGroups[0] }}'
      - name: SubnetId
        value: '{{ SubnetId }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.efs.mount_targets
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>mount_targets</code> resource, the following permissions are required:

### Create
```json
elasticfilesystem:CreateMountTarget,
elasticfilesystem:DescribeMountTargets
```

### Read
```json
elasticfilesystem:DescribeMountTargets,
elasticfilesystem:DescribeMountTargetSecurityGroups
```

### Update
```json
elasticfilesystem:DescribeMountTargets,
elasticfilesystem:DescribeMountTargetSecurityGroups,
elasticfilesystem:ModifyMountTargetSecurityGroups
```

### Delete
```json
elasticfilesystem:DescribeMountTargets,
elasticfilesystem:DeleteMountTarget
```

### List
```json
elasticfilesystem:DescribeMountTargets,
elasticfilesystem:DescribeMountTargetSecurityGroups
```
