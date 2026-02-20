---
title: nodegroups
hide_title: false
hide_table_of_contents: false
keywords:
  - nodegroups
  - eks
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

Creates, updates, deletes or gets a <code>nodegroup</code> resource or lists <code>nodegroups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>nodegroups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::EKS::Nodegroup</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.eks.nodegroups" /></td></tr>
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
    "name": "ami_type",
    "type": "string",
    "description": "The AMI type for your node group."
  },
  {
    "name": "capacity_type",
    "type": "string",
    "description": "The capacity type of your managed node group."
  },
  {
    "name": "cluster_name",
    "type": "string",
    "description": "Name of the cluster to create the node group in."
  },
  {
    "name": "disk_size",
    "type": "integer",
    "description": "The root device disk size (in GiB) for your node group instances."
  },
  {
    "name": "force_update_enabled",
    "type": "boolean",
    "description": "Force the update if the existing node group's pods are unable to be drained due to a pod disruption budget issue."
  },
  {
    "name": "instance_types",
    "type": "array",
    "description": "Specify the instance types for a node group."
  },
  {
    "name": "labels",
    "type": "object",
    "description": "The Kubernetes labels to be applied to the nodes in the node group when they are created."
  },
  {
    "name": "launch_template",
    "type": "object",
    "description": "An object representing a node group's launch template specification.",
    "children": [
      {
        "name": "id",
        "type": "string",
        "description": ""
      },
      {
        "name": "version",
        "type": "string",
        "description": ""
      },
      {
        "name": "name",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "nodegroup_name",
    "type": "string",
    "description": "The unique name to give your node group."
  },
  {
    "name": "node_role",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the IAM role to associate with your node group."
  },
  {
    "name": "release_version",
    "type": "string",
    "description": "The AMI version of the Amazon EKS-optimized AMI to use with your node group."
  },
  {
    "name": "remote_access",
    "type": "object",
    "description": "The remote access (SSH) configuration to use with your node group.",
    "children": [
      {
        "name": "source_security_groups",
        "type": "array",
        "description": ""
      },
      {
        "name": "ec2_ssh_key",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "scaling_config",
    "type": "object",
    "description": "The scaling configuration details for the Auto Scaling group that is created for your node group.",
    "children": [
      {
        "name": "min_size",
        "type": "integer",
        "description": ""
      },
      {
        "name": "desired_size",
        "type": "integer",
        "description": ""
      },
      {
        "name": "max_size",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "subnets",
    "type": "array",
    "description": "The subnets to use for the Auto Scaling group that is created for your node group."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "The metadata, as key-value pairs, to apply to the node group to assist with categorization and organization. Follows same schema as Labels for consistency."
  },
  {
    "name": "taints",
    "type": "array",
    "description": "The Kubernetes taints to be applied to the nodes in the node group when they are created.",
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
      },
      {
        "name": "effect",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "update_config",
    "type": "object",
    "description": "The node group update configuration.",
    "children": [
      {
        "name": "max_unavailable",
        "type": "number",
        "description": "The maximum number of nodes unavailable at once during a version update. Nodes will be updated in parallel. This value or maxUnavailablePercentage is required to have a value.The maximum number is 100."
      },
      {
        "name": "max_unavailable_percentage",
        "type": "number",
        "description": "The maximum percentage of nodes unavailable during a version update. This percentage of nodes will be updated in parallel, up to 100 nodes at once. This value or maxUnavailable is required to have a value."
      },
      {
        "name": "update_strategy",
        "type": "string",
        "description": "The configuration for the behavior to follow during an node group version update of this managed node group. You choose between two possible strategies for replacing nodes during an UpdateNodegroupVersion action."
      }
    ]
  },
  {
    "name": "node_repair_config",
    "type": "object",
    "description": "The node auto repair configuration for node group.",
    "children": [
      {
        "name": "enabled",
        "type": "boolean",
        "description": "Set this value to true to enable node auto repair for the node group."
      }
    ]
  },
  {
    "name": "version",
    "type": "string",
    "description": "The Kubernetes version to use for your managed nodes."
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html"><code>AWS::EKS::Nodegroup</code></a>.

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
    <td><code>nodegroups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ClusterName, NodeRole, Subnets, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>nodegroups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>nodegroups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>nodegroups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>nodegroups</code></td>
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

Gets all properties from an individual <code>nodegroup</code>.
```sql
SELECT
region,
ami_type,
capacity_type,
cluster_name,
disk_size,
force_update_enabled,
instance_types,
labels,
launch_template,
nodegroup_name,
node_role,
release_version,
remote_access,
scaling_config,
subnets,
tags,
taints,
update_config,
node_repair_config,
version,
id,
arn
FROM awscc.eks.nodegroups
WHERE region = 'us-east-1' AND Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>nodegroups</code> in a region.
```sql
SELECT
region,
id
FROM awscc.eks.nodegroups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>nodegroup</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.eks.nodegroups (
 ClusterName,
 NodeRole,
 Subnets,
 region
)
SELECT 
'{{ ClusterName }}',
 '{{ NodeRole }}',
 '{{ Subnets }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.eks.nodegroups (
 AmiType,
 CapacityType,
 ClusterName,
 DiskSize,
 ForceUpdateEnabled,
 InstanceTypes,
 Labels,
 LaunchTemplate,
 NodegroupName,
 NodeRole,
 ReleaseVersion,
 RemoteAccess,
 ScalingConfig,
 Subnets,
 Tags,
 Taints,
 UpdateConfig,
 NodeRepairConfig,
 Version,
 region
)
SELECT 
 '{{ AmiType }}',
 '{{ CapacityType }}',
 '{{ ClusterName }}',
 '{{ DiskSize }}',
 '{{ ForceUpdateEnabled }}',
 '{{ InstanceTypes }}',
 '{{ Labels }}',
 '{{ LaunchTemplate }}',
 '{{ NodegroupName }}',
 '{{ NodeRole }}',
 '{{ ReleaseVersion }}',
 '{{ RemoteAccess }}',
 '{{ ScalingConfig }}',
 '{{ Subnets }}',
 '{{ Tags }}',
 '{{ Taints }}',
 '{{ UpdateConfig }}',
 '{{ NodeRepairConfig }}',
 '{{ Version }}',
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
  - name: nodegroup
    props:
      - name: AmiType
        value: '{{ AmiType }}'
      - name: CapacityType
        value: '{{ CapacityType }}'
      - name: ClusterName
        value: '{{ ClusterName }}'
      - name: DiskSize
        value: '{{ DiskSize }}'
      - name: ForceUpdateEnabled
        value: '{{ ForceUpdateEnabled }}'
      - name: InstanceTypes
        value:
          - '{{ InstanceTypes[0] }}'
      - name: Labels
        value: {}
      - name: LaunchTemplate
        value:
          Id: '{{ Id }}'
          Version: '{{ Version }}'
          Name: '{{ Name }}'
      - name: NodegroupName
        value: '{{ NodegroupName }}'
      - name: NodeRole
        value: '{{ NodeRole }}'
      - name: ReleaseVersion
        value: '{{ ReleaseVersion }}'
      - name: RemoteAccess
        value:
          SourceSecurityGroups:
            - '{{ SourceSecurityGroups[0] }}'
          Ec2SshKey: '{{ Ec2SshKey }}'
      - name: ScalingConfig
        value:
          MinSize: '{{ MinSize }}'
          DesiredSize: '{{ DesiredSize }}'
          MaxSize: '{{ MaxSize }}'
      - name: Subnets
        value:
          - '{{ Subnets[0] }}'
      - name: Tags
        value: {}
      - name: Taints
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
            Effect: '{{ Effect }}'
      - name: UpdateConfig
        value:
          MaxUnavailable: null
          MaxUnavailablePercentage: null
          UpdateStrategy: '{{ UpdateStrategy }}'
      - name: NodeRepairConfig
        value:
          Enabled: '{{ Enabled }}'
      - name: Version
        value: '{{ Version }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.eks.nodegroups
SET PatchDocument = string('{{ {
    "ForceUpdateEnabled": force_update_enabled,
    "Labels": labels,
    "LaunchTemplate": launch_template,
    "ReleaseVersion": release_version,
    "ScalingConfig": scaling_config,
    "Tags": tags,
    "Taints": taints,
    "UpdateConfig": update_config,
    "NodeRepairConfig": node_repair_config,
    "Version": version
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.eks.nodegroups
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>nodegroups</code> resource, the following permissions are required:

### Create
```json
eks:CreateNodegroup,
eks:DescribeNodegroup,
eks:TagResource,
ec2:DescribeSubnets,
ec2:DescribeVpcs,
ec2:DescribeSecurityGroups,
ec2:DescribeKeyPairs,
ec2:CreateTags,
ec2:DeleteTags,
ec2:DescribeRouteTables,
ec2:DescribeLaunchTemplates,
ec2:DescribeLaunchTemplateVersions,
ec2:RunInstances,
iam:CreateServiceLinkedRole,
iam:GetRole,
iam:PassRole,
iam:ListAttachedRolePolicies
```

### Read
```json
eks:DescribeNodegroup
```

### Delete
```json
eks:DeleteNodegroup,
eks:DescribeNodegroup
```

### List
```json
eks:ListNodegroups
```

### Update
```json
iam:GetRole,
iam:PassRole,
eks:DescribeNodegroup,
eks:DescribeUpdate,
eks:ListUpdates,
eks:TagResource,
eks:UntagResource,
eks:UpdateNodegroupConfig,
eks:UpdateNodegroupVersion,
ec2:DescribeLaunchTemplateVersions,
ec2:RunInstances
```
