---
title: compute_node_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - compute_node_groups
  - pcs
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

Creates, updates, deletes or gets a <code>compute_node_group</code> resource or lists <code>compute_node_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>compute_node_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>AWS::PCS::ComputeNodeGroup resource creates an AWS PCS compute node group.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.pcs.compute_node_groups" /></td></tr>
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
    "name": "status",
    "type": "string",
    "description": "The provisioning status of the compute node group. The provisioning status doesn't indicate the overall health of the compute node group."
  },
  {
    "name": "cluster_id",
    "type": "string",
    "description": "The ID of the cluster of the compute node group."
  },
  {
    "name": "error_info",
    "type": "array",
    "description": "The list of errors that occurred during compute node group provisioning.",
    "children": [
      {
        "name": "code",
        "type": "string",
        "description": "The short-form error code."
      },
      {
        "name": "message",
        "type": "string",
        "description": "The detailed error information."
      }
    ]
  },
  {
    "name": "spot_options",
    "type": "object",
    "description": "Additional configuration when you specify SPOT as the purchase option.",
    "children": [
      {
        "name": "allocation_strategy",
        "type": "string",
        "description": "The Amazon EC2 allocation strategy AWS PCS uses to provision EC2 instances. AWS PCS supports lowest price, capacity optimized, and price capacity optimized. If you don't provide this option, it defaults to price capacity optimized."
      }
    ]
  },
  {
    "name": "slurm_configuration",
    "type": "object",
    "description": "Additional options related to the Slurm scheduler.",
    "children": [
      {
        "name": "slurm_custom_settings",
        "type": "array",
        "description": "Additional Slurm-specific configuration that directly maps to Slurm settings.",
        "children": [
          {
            "name": "parameter_value",
            "type": "string",
            "description": "The value for the configured Slurm setting."
          },
          {
            "name": "parameter_name",
            "type": "string",
            "description": "AWS PCS supports configuration of the following Slurm parameters for compute node groups: Weight and RealMemory."
          }
        ]
      }
    ]
  },
  {
    "name": "subnet_ids",
    "type": "array",
    "description": "The list of subnet IDs where instances are provisioned by the compute node group. The subnets must be in the same VPC as the cluster."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name that identifies the compute node group."
  },
  {
    "name": "scaling_configuration",
    "type": "object",
    "description": "Specifies the boundaries of the compute node group auto scaling.",
    "children": [
      {
        "name": "max_instance_count",
        "type": "integer",
        "description": "The upper bound of the number of instances allowed in the compute fleet."
      },
      {
        "name": "min_instance_count",
        "type": "integer",
        "description": "The lower bound of the number of instances allowed in the compute fleet."
      }
    ]
  },
  {
    "name": "instance_configs",
    "type": "array",
    "description": "A list of EC2 instance configurations that AWS PCS can provision in the compute node group.",
    "children": [
      {
        "name": "instance_type",
        "type": "string",
        "description": "The EC2 instance type that AWS PCS can provision in the compute node group."
      }
    ]
  },
  {
    "name": "id",
    "type": "string",
    "description": "The generated unique ID of the compute node group."
  },
  {
    "name": "purchase_option",
    "type": "string",
    "description": "Specifies how EC2 instances are purchased on your behalf. AWS PCS supports On-Demand and Spot instances. For more information, see Instance purchasing options in the Amazon Elastic Compute Cloud User Guide. If you don't provide this option, it defaults to On-Demand."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The unique Amazon Resource Name (ARN) of the compute node group."
  },
  {
    "name": "custom_launch_template",
    "type": "object",
    "description": "An Amazon EC2 launch template AWS PCS uses to launch compute nodes.",
    "children": [
      {
        "name": "version",
        "type": "string",
        "description": "The version of the EC2 launch template to use to provision instances."
      },
      {
        "name": "template_id",
        "type": "string",
        "description": "The ID of the EC2 launch template to use to provision instances."
      }
    ]
  },
  {
    "name": "tags",
    "type": "object",
    "description": "1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string."
  },
  {
    "name": "ami_id",
    "type": "string",
    "description": "The ID of the Amazon Machine Image (AMI) that AWS PCS uses to launch instances. If not provided, AWS PCS uses the AMI ID specified in the custom launch template."
  },
  {
    "name": "iam_instance_profile_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the IAM instance profile used to pass an IAM role when launching EC2 instances. The role contained in your instance profile must have pcs:RegisterComputeNodeGroupInstance permissions attached to provision instances correctly."
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
    "description": "The unique Amazon Resource Name (ARN) of the compute node group."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-computenodegroup.html"><code>AWS::PCS::ComputeNodeGroup</code></a>.

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
    <td><code>compute_node_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ClusterId, CustomLaunchTemplate, IamInstanceProfileArn, InstanceConfigs, ScalingConfiguration, SubnetIds, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>compute_node_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>compute_node_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>compute_node_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>compute_node_groups</code></td>
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

Gets all properties from an individual <code>compute_node_group</code>.
```sql
SELECT
region,
status,
cluster_id,
error_info,
spot_options,
slurm_configuration,
subnet_ids,
name,
scaling_configuration,
instance_configs,
id,
purchase_option,
arn,
custom_launch_template,
tags,
ami_id,
iam_instance_profile_arn
FROM awscc.pcs.compute_node_groups
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>compute_node_groups</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.pcs.compute_node_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>compute_node_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.pcs.compute_node_groups (
 ClusterId,
 SubnetIds,
 ScalingConfiguration,
 InstanceConfigs,
 CustomLaunchTemplate,
 IamInstanceProfileArn,
 region
)
SELECT 
'{{ ClusterId }}',
 '{{ SubnetIds }}',
 '{{ ScalingConfiguration }}',
 '{{ InstanceConfigs }}',
 '{{ CustomLaunchTemplate }}',
 '{{ IamInstanceProfileArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.pcs.compute_node_groups (
 ClusterId,
 SpotOptions,
 SlurmConfiguration,
 SubnetIds,
 Name,
 ScalingConfiguration,
 InstanceConfigs,
 PurchaseOption,
 CustomLaunchTemplate,
 Tags,
 AmiId,
 IamInstanceProfileArn,
 region
)
SELECT 
 '{{ ClusterId }}',
 '{{ SpotOptions }}',
 '{{ SlurmConfiguration }}',
 '{{ SubnetIds }}',
 '{{ Name }}',
 '{{ ScalingConfiguration }}',
 '{{ InstanceConfigs }}',
 '{{ PurchaseOption }}',
 '{{ CustomLaunchTemplate }}',
 '{{ Tags }}',
 '{{ AmiId }}',
 '{{ IamInstanceProfileArn }}',
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
  - name: compute_node_group
    props:
      - name: ClusterId
        value: '{{ ClusterId }}'
      - name: SpotOptions
        value:
          AllocationStrategy: '{{ AllocationStrategy }}'
      - name: SlurmConfiguration
        value:
          SlurmCustomSettings:
            - ParameterValue: '{{ ParameterValue }}'
              ParameterName: '{{ ParameterName }}'
      - name: SubnetIds
        value:
          - '{{ SubnetIds[0] }}'
      - name: Name
        value: '{{ Name }}'
      - name: ScalingConfiguration
        value:
          MaxInstanceCount: '{{ MaxInstanceCount }}'
          MinInstanceCount: '{{ MinInstanceCount }}'
      - name: InstanceConfigs
        value:
          - InstanceType: '{{ InstanceType }}'
      - name: PurchaseOption
        value: '{{ PurchaseOption }}'
      - name: CustomLaunchTemplate
        value:
          Version: '{{ Version }}'
          TemplateId: '{{ TemplateId }}'
      - name: Tags
        value: null
      - name: AmiId
        value: '{{ AmiId }}'
      - name: IamInstanceProfileArn
        value: '{{ IamInstanceProfileArn }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>compute_node_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.pcs.compute_node_groups
SET PatchDocument = string('{{ {
    "SpotOptions": spot_options,
    "SlurmConfiguration": slurm_configuration,
    "SubnetIds": subnet_ids,
    "ScalingConfiguration": scaling_configuration,
    "PurchaseOption": purchase_option,
    "CustomLaunchTemplate": custom_launch_template,
    "Tags": tags,
    "AmiId": ami_id,
    "IamInstanceProfileArn": iam_instance_profile_arn
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.pcs.compute_node_groups
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>compute_node_groups</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
pcs:GetComputeNodeGroup,
pcs:ListTagsForResource
```

</TabItem>
<TabItem value="create">

```json
ec2:DescribeImages,
ec2:DescribeVpcs,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups,
ec2:DescribeLaunchTemplates,
ec2:DescribeLaunchTemplateVersions,
ec2:DescribeInstanceTypes,
ec2:DescribeInstanceTypeOfferings,
ec2:RunInstances,
ec2:CreateFleet,
ec2:CreateTags,
iam:PassRole,
iam:GetInstanceProfile,
pcs:CreateComputeNodeGroup,
pcs:GetComputeNodeGroup,
pcs:ListTagsForResource,
pcs:TagResource
```

</TabItem>
<TabItem value="update">

```json
ec2:DescribeImages,
ec2:DescribeVpcs,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups,
ec2:DescribeLaunchTemplates,
ec2:DescribeLaunchTemplateVersions,
ec2:DescribeInstanceTypes,
ec2:DescribeInstanceTypeOfferings,
ec2:RunInstances,
ec2:CreateFleet,
ec2:CreateTags,
iam:PassRole,
iam:GetInstanceProfile,
pcs:GetComputeNodeGroup,
pcs:UpdateComputeNodeGroup,
pcs:ListTagsForResource,
pcs:TagResource,
pcs:UntagResource
```

</TabItem>
<TabItem value="list">

```json
pcs:ListClusters,
pcs:ListComputeNodeGroups
```

</TabItem>
<TabItem value="delete">

```json
ec2:DescribeImages,
ec2:DescribeVpcs,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups,
ec2:DescribeLaunchTemplates,
ec2:DescribeLaunchTemplateVersions,
ec2:DescribeInstanceTypes,
ec2:DescribeInstanceTypeOfferings,
ec2:TerminateInstances,
ec2:CreateFleet,
ec2:CreateTags,
iam:PassRole,
iam:GetInstanceProfile,
pcs:GetComputeNodeGroup,
pcs:DeleteComputeNodeGroup,
pcs:ListTagsForResource,
pcs:TagResource,
pcs:UntagResource
```

</TabItem>
</Tabs>