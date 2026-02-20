---
title: workgroups
hide_title: false
hide_table_of_contents: false
keywords:
  - workgroups
  - redshiftserverless
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

Creates, updates, deletes or gets a <code>workgroup</code> resource or lists <code>workgroups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>workgroups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::RedshiftServerless::Workgroup Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.redshiftserverless.workgroups" /></td></tr>
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
    "name": "workgroup_name",
    "type": "string",
    "description": "The name of the workgroup."
  },
  {
    "name": "namespace_name",
    "type": "string",
    "description": "The namespace the workgroup is associated with."
  },
  {
    "name": "base_capacity",
    "type": "integer",
    "description": "The base compute capacity of the workgroup in Redshift Processing Units (RPUs)."
  },
  {
    "name": "max_capacity",
    "type": "integer",
    "description": "The max compute capacity of the workgroup in Redshift Processing Units (RPUs)."
  },
  {
    "name": "enhanced_vpc_routing",
    "type": "boolean",
    "description": "The value that specifies whether to enable enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC."
  },
  {
    "name": "config_parameters",
    "type": "array",
    "description": "A list of parameters to set for finer control over a database. Available options are datestyle, enable&#95;user&#95;activity&#95;logging, query&#95;group, search&#95;path, max&#95;query&#95;execution&#95;time, and require&#95;ssl.",
    "children": [
      {
        "name": "parameter_key",
        "type": "string",
        "description": ""
      },
      {
        "name": "parameter_value",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "security_group_ids",
    "type": "array",
    "description": "A list of security group IDs to associate with the workgroup."
  },
  {
    "name": "subnet_ids",
    "type": "array",
    "description": "A list of subnet IDs the workgroup is associated with."
  },
  {
    "name": "publicly_accessible",
    "type": "boolean",
    "description": "A value that specifies whether the workgroup can be accessible from a public network."
  },
  {
    "name": "port",
    "type": "integer",
    "description": "The custom port to use when connecting to a workgroup. Valid port ranges are 5431-5455 and 8191-8215. The default is 5439."
  },
  {
    "name": "price_performance_target",
    "type": "object",
    "description": "A property that represents the price performance target settings for the workgroup.",
    "children": [
      {
        "name": "status",
        "type": "string",
        "description": ""
      },
      {
        "name": "level",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "snapshot_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the snapshot to restore from."
  },
  {
    "name": "snapshot_name",
    "type": "string",
    "description": "The snapshot name to restore from."
  },
  {
    "name": "snapshot_owner_account",
    "type": "string",
    "description": "The Amazon Web Services account that owns the snapshot."
  },
  {
    "name": "recovery_point_id",
    "type": "string",
    "description": "The recovery point id to restore from."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The map of the key-value pairs used to tag the workgroup.",
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
    "name": "track_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "workgroup",
    "type": "object",
    "description": "Definition for workgroup resource",
    "children": [
      {
        "name": "workgroup_name",
        "type": "string",
        "description": "The name of the workgroup."
      },
      {
        "name": "namespace_name",
        "type": "string",
        "description": "The namespace the workgroup is associated with."
      },
      {
        "name": "base_capacity",
        "type": "integer",
        "description": "The base compute capacity of the workgroup in Redshift Processing Units (RPUs)."
      },
      {
        "name": "max_capacity",
        "type": "integer",
        "description": "The max compute capacity of the workgroup in Redshift Processing Units (RPUs)."
      },
      {
        "name": "enhanced_vpc_routing",
        "type": "boolean",
        "description": "The value that specifies whether to enable enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC."
      },
      {
        "name": "config_parameters",
        "type": "array",
        "description": "A list of parameters to set for finer control over a database. Available options are datestyle, enable&#95;user&#95;activity&#95;logging, query&#95;group, search&#95;path, max&#95;query&#95;execution&#95;time, and require&#95;ssl."
      },
      {
        "name": "security_group_ids",
        "type": "array",
        "description": "A list of security group IDs to associate with the workgroup."
      },
      {
        "name": "subnet_ids",
        "type": "array",
        "description": "A list of subnet IDs the workgroup is associated with."
      },
      {
        "name": "publicly_accessible",
        "type": "boolean",
        "description": "A value that specifies whether the workgroup can be accessible from a public network."
      },
      {
        "name": "port",
        "type": "integer",
        "description": "The custom port to use when connecting to a workgroup. Valid port ranges are 5431-5455 and 8191-8215. The default is 5439."
      },
      {
        "name": "snapshot_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the snapshot to restore from."
      },
      {
        "name": "snapshot_name",
        "type": "string",
        "description": "The snapshot name to restore from."
      },
      {
        "name": "snapshot_owner_account",
        "type": "string",
        "description": "The Amazon Web Services account that owns the snapshot."
      },
      {
        "name": "recovery_point_id",
        "type": "string",
        "description": "The recovery point id to restore from."
      },
      {
        "name": "tags",
        "type": "array",
        "description": "The map of the key-value pairs used to tag the workgroup."
      },
      {
        "name": "track_name",
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
    "name": "workgroup_name",
    "type": "string",
    "description": "The name of the workgroup."
  },
  {
    "name": "workgroup",
    "type": "object",
    "description": "Definition for workgroup resource",
    "children": [
      {
        "name": "workgroup_name",
        "type": "string",
        "description": "The name of the workgroup."
      },
      {
        "name": "namespace_name",
        "type": "string",
        "description": "The namespace the workgroup is associated with."
      },
      {
        "name": "base_capacity",
        "type": "integer",
        "description": "The base compute capacity of the workgroup in Redshift Processing Units (RPUs)."
      },
      {
        "name": "max_capacity",
        "type": "integer",
        "description": "The max compute capacity of the workgroup in Redshift Processing Units (RPUs)."
      },
      {
        "name": "enhanced_vpc_routing",
        "type": "boolean",
        "description": "The value that specifies whether to enable enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC."
      },
      {
        "name": "config_parameters",
        "type": "array",
        "description": "A list of parameters to set for finer control over a database. Available options are datestyle, enable&#95;user&#95;activity&#95;logging, query&#95;group, search&#95;path, max&#95;query&#95;execution&#95;time, and require&#95;ssl."
      },
      {
        "name": "security_group_ids",
        "type": "array",
        "description": "A list of security group IDs to associate with the workgroup."
      },
      {
        "name": "subnet_ids",
        "type": "array",
        "description": "A list of subnet IDs the workgroup is associated with."
      },
      {
        "name": "publicly_accessible",
        "type": "boolean",
        "description": "A value that specifies whether the workgroup can be accessible from a public network."
      },
      {
        "name": "port",
        "type": "integer",
        "description": "The custom port to use when connecting to a workgroup. Valid port ranges are 5431-5455 and 8191-8215. The default is 5439."
      },
      {
        "name": "snapshot_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the snapshot to restore from."
      },
      {
        "name": "snapshot_name",
        "type": "string",
        "description": "The snapshot name to restore from."
      },
      {
        "name": "snapshot_owner_account",
        "type": "string",
        "description": "The Amazon Web Services account that owns the snapshot."
      },
      {
        "name": "recovery_point_id",
        "type": "string",
        "description": "The recovery point id to restore from."
      },
      {
        "name": "tags",
        "type": "array",
        "description": "The map of the key-value pairs used to tag the workgroup."
      },
      {
        "name": "track_name",
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
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-workgroup.html"><code>AWS::RedshiftServerless::Workgroup</code></a>.

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
    <td><code>workgroups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="WorkgroupName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>workgroups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>workgroups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>workgroups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>workgroups</code></td>
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

Gets all properties from an individual <code>workgroup</code>.
```sql
SELECT
region,
workgroup_name,
namespace_name,
base_capacity,
max_capacity,
enhanced_vpc_routing,
config_parameters,
security_group_ids,
subnet_ids,
publicly_accessible,
port,
price_performance_target,
snapshot_arn,
snapshot_name,
snapshot_owner_account,
recovery_point_id,
tags,
track_name,
workgroup
FROM awscc.redshiftserverless.workgroups
WHERE region = 'us-east-1' AND Identifier = '<WorkgroupName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>workgroups</code> in a region.
```sql
SELECT
region,
workgroup_name
FROM awscc.redshiftserverless.workgroups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>workgroup</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.redshiftserverless.workgroups (
 WorkgroupName,
 region
)
SELECT 
'{{ WorkgroupName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.redshiftserverless.workgroups (
 WorkgroupName,
 NamespaceName,
 BaseCapacity,
 MaxCapacity,
 EnhancedVpcRouting,
 ConfigParameters,
 SecurityGroupIds,
 SubnetIds,
 PubliclyAccessible,
 Port,
 PricePerformanceTarget,
 SnapshotArn,
 SnapshotName,
 SnapshotOwnerAccount,
 RecoveryPointId,
 Tags,
 TrackName,
 Workgroup,
 region
)
SELECT 
 '{{ WorkgroupName }}',
 '{{ NamespaceName }}',
 '{{ BaseCapacity }}',
 '{{ MaxCapacity }}',
 '{{ EnhancedVpcRouting }}',
 '{{ ConfigParameters }}',
 '{{ SecurityGroupIds }}',
 '{{ SubnetIds }}',
 '{{ PubliclyAccessible }}',
 '{{ Port }}',
 '{{ PricePerformanceTarget }}',
 '{{ SnapshotArn }}',
 '{{ SnapshotName }}',
 '{{ SnapshotOwnerAccount }}',
 '{{ RecoveryPointId }}',
 '{{ Tags }}',
 '{{ TrackName }}',
 '{{ Workgroup }}',
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
  - name: workgroup
    props:
      - name: WorkgroupName
        value: '{{ WorkgroupName }}'
      - name: NamespaceName
        value: '{{ NamespaceName }}'
      - name: BaseCapacity
        value: '{{ BaseCapacity }}'
      - name: MaxCapacity
        value: '{{ MaxCapacity }}'
      - name: EnhancedVpcRouting
        value: '{{ EnhancedVpcRouting }}'
      - name: ConfigParameters
        value:
          - ParameterKey: '{{ ParameterKey }}'
            ParameterValue: '{{ ParameterValue }}'
      - name: SecurityGroupIds
        value:
          - '{{ SecurityGroupIds[0] }}'
      - name: SubnetIds
        value:
          - '{{ SubnetIds[0] }}'
      - name: PubliclyAccessible
        value: '{{ PubliclyAccessible }}'
      - name: Port
        value: '{{ Port }}'
      - name: PricePerformanceTarget
        value:
          Status: '{{ Status }}'
          Level: '{{ Level }}'
      - name: SnapshotArn
        value: '{{ SnapshotArn }}'
      - name: SnapshotName
        value: '{{ SnapshotName }}'
      - name: SnapshotOwnerAccount
        value: '{{ SnapshotOwnerAccount }}'
      - name: RecoveryPointId
        value: '{{ RecoveryPointId }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: TrackName
        value: '{{ TrackName }}'
      - name: Workgroup
        value:
          WorkgroupName: '{{ WorkgroupName }}'
          NamespaceName: '{{ NamespaceName }}'
          BaseCapacity: '{{ BaseCapacity }}'
          MaxCapacity: '{{ MaxCapacity }}'
          EnhancedVpcRouting: '{{ EnhancedVpcRouting }}'
          ConfigParameters:
            - null
          SecurityGroupIds:
            - '{{ SecurityGroupIds[0] }}'
          SubnetIds:
            - '{{ SubnetIds[0] }}'
          PubliclyAccessible: '{{ PubliclyAccessible }}'
          Port: '{{ Port }}'
          PricePerformanceTarget: null
          SnapshotArn: '{{ SnapshotArn }}'
          SnapshotName: '{{ SnapshotName }}'
          SnapshotOwnerAccount: '{{ SnapshotOwnerAccount }}'
          RecoveryPointId: '{{ RecoveryPointId }}'
          Tags:
            - null
          TrackName: '{{ TrackName }}'
          Workgroup: null

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>workgroup</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.redshiftserverless.workgroups
SET PatchDocument = string('{{ {
    "BaseCapacity": base_capacity,
    "MaxCapacity": max_capacity,
    "EnhancedVpcRouting": enhanced_vpc_routing,
    "ConfigParameters": config_parameters,
    "SecurityGroupIds": security_group_ids,
    "SubnetIds": subnet_ids,
    "PubliclyAccessible": publicly_accessible,
    "Port": port,
    "PricePerformanceTarget": price_performance_target,
    "SnapshotArn": snapshot_arn,
    "SnapshotName": snapshot_name,
    "SnapshotOwnerAccount": snapshot_owner_account,
    "RecoveryPointId": recovery_point_id,
    "Tags": tags,
    "TrackName": track_name
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<WorkgroupName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.redshiftserverless.workgroups
WHERE Identifier = '<WorkgroupName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>workgroups</code> resource, the following permissions are required:

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
ec2:DescribeVpcAttribute,
ec2:DescribeSecurityGroups,
ec2:DescribeAddresses,
ec2:DescribeInternetGateways,
ec2:DescribeSubnets,
ec2:DescribeAccountAttributes,
ec2:DescribeAvailabilityZones,
redshift-serverless:CreateNamespace,
redshift-serverless:CreateWorkgroup,
redshift-serverless:GetWorkgroup,
redshift-serverless:GetNamespace,
redshift-serverless:ListTagsForResource,
redshift-serverless:TagResource,
redshift-serverless:RestoreFromSnapshot,
redshift-serverless:RestoreFromRecoveryPoint
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeVpcAttribute,
ec2:DescribeSecurityGroups,
ec2:DescribeAddresses,
ec2:DescribeInternetGateways,
ec2:DescribeSubnets,
ec2:DescribeAccountAttributes,
ec2:DescribeAvailabilityZones,
redshift-serverless:GetWorkgroup,
redshift-serverless:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
ec2:DescribeVpcAttribute,
ec2:DescribeSecurityGroups,
ec2:DescribeAddresses,
ec2:DescribeInternetGateways,
ec2:DescribeSubnets,
ec2:DescribeAccountAttributes,
ec2:DescribeAvailabilityZones,
redshift-serverless:ListTagsForResource,
redshift-serverless:TagResource,
redshift-serverless:UntagResource,
redshift-serverless:GetWorkgroup,
redshift-serverless:UpdateWorkgroup,
redshift-serverless:ListTagsForResource,
redshift-serverless:TagResource,
redshift-serverless:UntagResource,
redshift-serverless:RestoreFromSnapshot,
redshift-serverless:RestoreFromRecoveryPoint
```

</TabItem>
<TabItem value="delete">

```json
ec2:DescribeVpcAttribute,
ec2:DescribeSecurityGroups,
ec2:DescribeAddresses,
ec2:DescribeInternetGateways,
ec2:DescribeSubnets,
ec2:DescribeAccountAttributes,
ec2:DescribeAvailabilityZones,
redshift-serverless:GetWorkgroup,
redshift-serverless:GetNamespace,
redshift-serverless:DeleteWorkgroup,
redshift-serverless:ListTagsForResource,
redshift-serverless:UntagResource
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeVpcAttribute,
ec2:DescribeSecurityGroups,
ec2:DescribeAddresses,
ec2:DescribeInternetGateways,
ec2:DescribeSubnets,
ec2:DescribeAccountAttributes,
ec2:DescribeAvailabilityZones,
redshift-serverless:ListWorkgroups,
redshift-serverless:ListTagsForResource
```

</TabItem>
</Tabs>