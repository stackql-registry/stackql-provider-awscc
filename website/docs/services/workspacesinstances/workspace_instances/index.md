---
title: workspace_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - workspace_instances
  - workspacesinstances
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

Creates, updates, deletes or gets a <code>workspace_instance</code> resource or lists <code>workspace_instances</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>workspace_instances</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::WorkspacesInstances::WorkspaceInstance</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.workspacesinstances.workspace_instances" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="managed_instance" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="workspace_instance_id" /></td><td><code>string</code></td><td>Unique identifier for the workspace instance</td></tr>
<tr><td><CopyableCode code="provision_state" /></td><td><code>string</code></td><td>The current state of the workspace instance</td></tr>
<tr><td><CopyableCode code="e_c2_managed_instance" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesinstances-workspaceinstance.html"><code>AWS::WorkspacesInstances::WorkspaceInstance</code></a>.

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
    <td><CopyableCode code=", region" /></td>
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
Gets all <code>workspace_instances</code> in a region.
```sql
SELECT
region,
managed_instance,
tags,
workspace_instance_id,
provision_state,
e_c2_managed_instance
FROM awscc.workspacesinstances.workspace_instances
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>workspace_instance</code>.
```sql
SELECT
region,
managed_instance,
tags,
workspace_instance_id,
provision_state,
e_c2_managed_instance
FROM awscc.workspacesinstances.workspace_instances
WHERE region = 'us-east-1' AND data__Identifier = '<WorkspaceInstanceId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>workspace_instance</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.workspacesinstances.workspace_instances (
 ,
 region
)
SELECT 
'{{  }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.workspacesinstances.workspace_instances (
 ManagedInstance,
 Tags,
 region
)
SELECT 
 '{{ ManagedInstance }}',
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
  - name: workspace_instance
    props:
      - name: ManagedInstance
        value:
          BlockDeviceMappings:
            - DeviceName: '{{ DeviceName }}'
              Ebs:
                VolumeType: '{{ VolumeType }}'
                Encrypted: '{{ Encrypted }}'
                KmsKeyId: '{{ KmsKeyId }}'
                Iops: '{{ Iops }}'
                Throughput: '{{ Throughput }}'
                VolumeSize: '{{ VolumeSize }}'
              NoDevice: '{{ NoDevice }}'
              VirtualName: '{{ VirtualName }}'
          CapacityReservationSpecification:
            CapacityReservationPreference: '{{ CapacityReservationPreference }}'
            CapacityReservationTarget:
              CapacityReservationId: '{{ CapacityReservationId }}'
              CapacityReservationResourceGroupArn: '{{ CapacityReservationResourceGroupArn }}'
          CpuOptions:
            CoreCount: '{{ CoreCount }}'
            ThreadsPerCore: '{{ ThreadsPerCore }}'
          CreditSpecification:
            CpuCredits: '{{ CpuCredits }}'
          DisableApiStop: '{{ DisableApiStop }}'
          EbsOptimized: '{{ EbsOptimized }}'
          EnablePrimaryIpv6: '{{ EnablePrimaryIpv6 }}'
          EnclaveOptions:
            Enabled: '{{ Enabled }}'
          HibernationOptions:
            Configured: '{{ Configured }}'
          IamInstanceProfile:
            Arn: '{{ Arn }}'
            Name: '{{ Name }}'
          ImageId: '{{ ImageId }}'
          InstanceMarketOptions:
            MarketType: '{{ MarketType }}'
            SpotOptions:
              InstanceInterruptionBehavior: '{{ InstanceInterruptionBehavior }}'
              MaxPrice: '{{ MaxPrice }}'
              SpotInstanceType: '{{ SpotInstanceType }}'
              ValidUntilUtc: '{{ ValidUntilUtc }}'
          InstanceType: '{{ InstanceType }}'
          Ipv6AddressCount: '{{ Ipv6AddressCount }}'
          KeyName: '{{ KeyName }}'
          LicenseSpecifications:
            - LicenseConfigurationArn: '{{ LicenseConfigurationArn }}'
          MaintenanceOptions:
            AutoRecovery: '{{ AutoRecovery }}'
          MetadataOptions:
            HttpEndpoint: '{{ HttpEndpoint }}'
            HttpProtocolIpv6: '{{ HttpProtocolIpv6 }}'
            HttpPutResponseHopLimit: '{{ HttpPutResponseHopLimit }}'
            HttpTokens: '{{ HttpTokens }}'
            InstanceMetadataTags: '{{ InstanceMetadataTags }}'
          Monitoring:
            Enabled: '{{ Enabled }}'
          NetworkInterfaces:
            - Description: '{{ Description }}'
              DeviceIndex: '{{ DeviceIndex }}'
              Groups:
                - '{{ Groups[0] }}'
              SubnetId: '{{ SubnetId }}'
          NetworkPerformanceOptions:
            BandwidthWeighting: '{{ BandwidthWeighting }}'
          Placement:
            AvailabilityZone: '{{ AvailabilityZone }}'
            GroupId: '{{ GroupId }}'
            GroupName: '{{ GroupName }}'
            PartitionNumber: '{{ PartitionNumber }}'
            Tenancy: '{{ Tenancy }}'
          PrivateDnsNameOptions:
            HostnameType: '{{ HostnameType }}'
            EnableResourceNameDnsARecord: '{{ EnableResourceNameDnsARecord }}'
            EnableResourceNameDnsAAAARecord: '{{ EnableResourceNameDnsAAAARecord }}'
          SubnetId: '{{ SubnetId }}'
          TagSpecifications:
            - ResourceType: '{{ ResourceType }}'
              Tags:
                - Key: '{{ Key }}'
                  Value: '{{ Value }}'
          UserData: '{{ UserData }}'
      - name: Tags
        value:
          - null

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.workspacesinstances.workspace_instances
WHERE data__Identifier = '<WorkspaceInstanceId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>workspace_instances</code> resource, the following permissions are required:

### Create
```json
workspaces-instances:CreateWorkspaceInstance,
workspaces-instances:GetWorkspaceInstance,
workspaces-instances:TagResource,
ec2:RunInstances,
ec2:DescribeInstances,
ec2:DescribeInstanceStatus,
ec2:CreateTags,
iam:PassRole
```

### Read
```json
workspaces-instances:GetWorkspaceInstance,
workspaces-instances:ListTagsForResource
```

### Update
```json
workspaces-instances:TagResource,
workspaces-instances:UntagResource,
workspaces-instances:ListTagsForResource,
workspaces-instances:GetWorkspaceInstance
```

### Delete
```json
workspaces-instances:DeleteWorkspaceInstance,
workspaces-instances:GetWorkspaceInstance,
ec2:TerminateInstances,
ec2:DescribeInstances,
ec2:DescribeInstanceStatus
```

### List
```json
workspaces-instances:ListWorkspaceInstances
```
