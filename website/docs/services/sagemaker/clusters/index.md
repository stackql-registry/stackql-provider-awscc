---
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - sagemaker
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

Creates, updates, deletes or gets a <code>cluster</code> resource or lists <code>clusters</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>clusters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SageMaker::Cluster</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sagemaker.clusters" /></td></tr>
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
    "name": "cluster_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the HyperPod Cluster."
  },
  {
    "name": "vpc_config",
    "type": "object",
    "description": "Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html",
    "children": [
      {
        "name": "security_group_ids",
        "type": "array",
        "description": "The VPC security group IDs, in the form 'sg-xxxxxxxx'. Specify the security groups for the VPC that is specified in the 'Subnets' field."
      },
      {
        "name": "subnets",
        "type": "array",
        "description": "The ID of the subnets in the VPC to which you want to connect your training job or model. For information about the availability of specific instance types, see https://docs.aws.amazon.com/sagemaker/latest/dg/regions-quotas.html"
      }
    ]
  },
  {
    "name": "node_recovery",
    "type": "string",
    "description": "If node auto-recovery is set to true, faulty nodes will be replaced or rebooted when a failure is detected. If set to false, nodes will be labelled when a fault is detected."
  },
  {
    "name": "instance_groups",
    "type": "array",
    "description": "The instance groups of the SageMaker HyperPod cluster.",
    "children": [
      {
        "name": "instance_group_name",
        "type": "string",
        "description": "The name of the instance group of a SageMaker HyperPod cluster."
      },
      {
        "name": "instance_storage_configs",
        "type": "array",
        "description": "The instance storage configuration for the instance group."
      },
      {
        "name": "life_cycle_config",
        "type": "object",
        "description": "The lifecycle configuration for a SageMaker HyperPod cluster.",
        "children": [
          {
            "name": "source_s3_uri",
            "type": "string",
            "description": "An Amazon S3 bucket path where your lifecycle scripts are stored."
          },
          {
            "name": "on_create",
            "type": "string",
            "description": "The file name of the entrypoint script of lifecycle scripts under SourceS3Uri. This entrypoint script runs during cluster creation."
          }
        ]
      },
      {
        "name": "training_plan_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the training plan to use for this cluster instance group. For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see CreateTrainingPlan."
      },
      {
        "name": "threads_per_core",
        "type": "integer",
        "description": "The number you specified to TreadsPerCore in CreateCluster for enabling or disabling multithreading. For instance types that support multithreading, you can specify 1 for disabling multithreading and 2 for enabling multithreading."
      },
      {
        "name": "instance_count",
        "type": "integer",
        "description": "The number of instances you specified to add to the instance group of a SageMaker HyperPod cluster."
      },
      {
        "name": "on_start_deep_health_checks",
        "type": "array",
        "description": "Nodes will undergo advanced stress test to detect and replace faulty instances, based on the type of deep health check(s) passed in."
      },
      {
        "name": "image_id",
        "type": "string",
        "description": "AMI Id to be used for launching EC2 instances - HyperPodPublicAmiId or CustomAmiId"
      },
      {
        "name": "current_count",
        "type": "integer",
        "description": "The number of instances that are currently in the instance group of a SageMaker HyperPod cluster."
      },
      {
        "name": "scheduled_update_config",
        "type": "object",
        "description": "The configuration object of the schedule that SageMaker follows when updating the AMI.",
        "children": [
          {
            "name": "schedule_expression",
            "type": "string",
            "description": "A cron expression that specifies the schedule that SageMaker follows when updating the AMI."
          },
          {
            "name": "deployment_config",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "auto_rollback_configuration",
                "type": "object",
                "description": "Configuration for automatic rollback if an error occurs during deployment."
              },
              {
                "name": "blue_green_update_policy",
                "type": "object",
                "description": "Configuration for blue-green update deployment policies."
              },
              {
                "name": "rolling_update_policy",
                "type": "object",
                "description": "Configuration for rolling update deployment policies."
              }
            ]
          }
        ]
      },
      {
        "name": "instance_type",
        "type": "string",
        "description": "The instance type of the instance group of a SageMaker HyperPod cluster."
      },
      {
        "name": "execution_role",
        "type": "string",
        "description": "The execution role for the instance group to assume."
      }
    ]
  },
  {
    "name": "restricted_instance_groups",
    "type": "array",
    "description": "The restricted instance groups of the SageMaker HyperPod cluster.",
    "children": [
      {
        "name": "instance_count",
        "type": "integer",
        "description": "The number of instances you specified to add to the restricted instance group of a SageMaker HyperPod cluster."
      },
      {
        "name": "on_start_deep_health_checks",
        "type": "array",
        "description": "Nodes will undergo advanced stress test to detect and replace faulty instances, based on the type of deep health check(s) passed in."
      },
      {
        "name": "environment_config",
        "type": "object",
        "description": "The configuration for the restricted instance groups (RIG) environment.",
        "children": [
          {
            "name": "f_sx_lustre_config",
            "type": "object",
            "description": "Configuration settings for an Amazon FSx for Lustre file system to be used with the cluster.",
            "children": [
              {
                "name": "size_in_gi_b",
                "type": "integer",
                "description": "The storage capacity of the FSx for Lustre file system, specified in gibibytes (GiB)."
              },
              {
                "name": "per_unit_storage_throughput",
                "type": "integer",
                "description": "The throughput capacity of the FSx for Lustre file system, measured in MB/s per TiB of storage."
              }
            ]
          }
        ]
      },
      {
        "name": "instance_group_name",
        "type": "string",
        "description": "The name of the instance group of a SageMaker HyperPod cluster."
      },
      {
        "name": "instance_storage_configs",
        "type": "array",
        "description": "The instance storage configuration for the instance group."
      },
      {
        "name": "current_count",
        "type": "integer",
        "description": "The number of instances that are currently in the restricted instance group of a SageMaker HyperPod cluster."
      },
      {
        "name": "training_plan_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the training plan to use for this cluster restricted instance group. For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see CreateTrainingPlan."
      },
      {
        "name": "instance_type",
        "type": "string",
        "description": "The instance type of the instance group of a SageMaker HyperPod cluster."
      },
      {
        "name": "threads_per_core",
        "type": "integer",
        "description": "The number you specified to TreadsPerCore in CreateCluster for enabling or disabling multithreading. For instance types that support multithreading, you can specify 1 for disabling multithreading and 2 for enabling multithreading."
      },
      {
        "name": "execution_role",
        "type": "string",
        "description": "The execution role for the instance group to assume."
      }
    ]
  },
  {
    "name": "orchestrator",
    "type": "object",
    "description": "Specifies parameter(s) specific to the orchestrator, e.g. specify the EKS cluster.",
    "children": [
      {
        "name": "eks",
        "type": "object",
        "description": "Specifies parameter(s) related to EKS as orchestrator, e.g. the EKS cluster nodes will attach to,",
        "children": [
          {
            "name": "cluster_arn",
            "type": "string",
            "description": "The ARN of the EKS cluster, such as arn:aws:eks:us-west-2:123456789012:cluster/my-eks-cluster"
          }
        ]
      }
    ]
  },
  {
    "name": "cluster_role",
    "type": "string",
    "description": "The cluster role for the autoscaler to assume."
  },
  {
    "name": "node_provisioning_mode",
    "type": "string",
    "description": "Determines the scaling strategy for the SageMaker HyperPod cluster. When set to 'Continuous', enables continuous scaling which dynamically manages node provisioning. If the parameter is omitted, uses the standard scaling approach in previous release."
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "The time at which the HyperPod cluster was created."
  },
  {
    "name": "cluster_name",
    "type": "string",
    "description": "The name of the HyperPod Cluster."
  },
  {
    "name": "failure_message",
    "type": "string",
    "description": "The failure message of the HyperPod Cluster."
  },
  {
    "name": "auto_scaling",
    "type": "object",
    "description": "Configuration for cluster auto-scaling",
    "children": [
      {
        "name": "mode",
        "type": "string",
        "description": "The auto-scaling mode for the cluster"
      },
      {
        "name": "auto_scaler_type",
        "type": "string",
        "description": "The type of auto-scaler to use"
      }
    ]
  },
  {
    "name": "cluster_status",
    "type": "string",
    "description": "The status of the HyperPod Cluster."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Custom tags for managing the SageMaker HyperPod cluster as an AWS resource. You can add tags to your cluster in the same way you add them in other AWS services that support tagging.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
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
    "name": "cluster_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the HyperPod Cluster."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html"><code>AWS::SageMaker::Cluster</code></a>.

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
    <td><code>clusters</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>clusters</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>clusters</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>clusters_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>clusters</code></td>
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

Gets all properties from an individual <code>cluster</code>.
```sql
SELECT
region,
cluster_arn,
vpc_config,
node_recovery,
instance_groups,
restricted_instance_groups,
orchestrator,
cluster_role,
node_provisioning_mode,
creation_time,
cluster_name,
failure_message,
auto_scaling,
cluster_status,
tags
FROM awscc.sagemaker.clusters
WHERE region = 'us-east-1' AND Identifier = '{{ cluster_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>clusters</code> in a region.
```sql
SELECT
region,
cluster_arn
FROM awscc.sagemaker.clusters_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>cluster</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sagemaker.clusters (
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
INSERT INTO awscc.sagemaker.clusters (
 VpcConfig,
 NodeRecovery,
 InstanceGroups,
 RestrictedInstanceGroups,
 Orchestrator,
 ClusterRole,
 NodeProvisioningMode,
 ClusterName,
 AutoScaling,
 Tags,
 region
)
SELECT
 '{{ vpc_config }}',
 '{{ node_recovery }}',
 '{{ instance_groups }}',
 '{{ restricted_instance_groups }}',
 '{{ orchestrator }}',
 '{{ cluster_role }}',
 '{{ node_provisioning_mode }}',
 '{{ cluster_name }}',
 '{{ auto_scaling }}',
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
  - name: cluster
    props:
      - name: vpc_config
        value:
          security_group_ids:
            - '{{ security_group_ids[0] }}'
          subnets:
            - '{{ subnets[0] }}'
      - name: node_recovery
        value: '{{ node_recovery }}'
      - name: instance_groups
        value:
          - instance_group_name: '{{ instance_group_name }}'
            instance_storage_configs:
              - {}
            life_cycle_config:
              source_s3_uri: '{{ source_s3_uri }}'
              on_create: '{{ on_create }}'
            training_plan_arn: '{{ training_plan_arn }}'
            threads_per_core: '{{ threads_per_core }}'
            override_vpc_config: null
            instance_count: '{{ instance_count }}'
            on_start_deep_health_checks:
              - '{{ on_start_deep_health_checks[0] }}'
            image_id: '{{ image_id }}'
            current_count: '{{ current_count }}'
            scheduled_update_config:
              schedule_expression: '{{ schedule_expression }}'
              deployment_config:
                auto_rollback_configuration:
                  alarms:
                    - alarm_name: '{{ alarm_name }}'
                blue_green_update_policy:
                  maximum_execution_timeout_in_seconds: '{{ maximum_execution_timeout_in_seconds }}'
                  termination_wait_in_seconds: '{{ termination_wait_in_seconds }}'
                  traffic_routing_configuration:
                    canary_size:
                      type: '{{ type }}'
                      value: '{{ value }}'
                    linear_step_size: null
                    type: '{{ type }}'
                    wait_interval_in_seconds: '{{ wait_interval_in_seconds }}'
                rolling_update_policy:
                  maximum_batch_size: null
                  maximum_execution_timeout_in_seconds: '{{ maximum_execution_timeout_in_seconds }}'
                  rollback_maximum_batch_size: null
                  wait_interval_in_seconds: '{{ wait_interval_in_seconds }}'
            instance_type: '{{ instance_type }}'
            execution_role: '{{ execution_role }}'
      - name: restricted_instance_groups
        value:
          - override_vpc_config: null
            instance_count: '{{ instance_count }}'
            on_start_deep_health_checks: null
            environment_config:
              f_sx_lustre_config:
                size_in_gi_b: '{{ size_in_gi_b }}'
                per_unit_storage_throughput: '{{ per_unit_storage_throughput }}'
            instance_group_name: null
            instance_storage_configs: null
            current_count: '{{ current_count }}'
            training_plan_arn: '{{ training_plan_arn }}'
            instance_type: null
            threads_per_core: '{{ threads_per_core }}'
            execution_role: null
      - name: orchestrator
        value:
          eks:
            cluster_arn: '{{ cluster_arn }}'
      - name: cluster_role
        value: '{{ cluster_role }}'
      - name: node_provisioning_mode
        value: '{{ node_provisioning_mode }}'
      - name: cluster_name
        value: '{{ cluster_name }}'
      - name: auto_scaling
        value:
          mode: '{{ mode }}'
          auto_scaler_type: '{{ auto_scaler_type }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>cluster</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.sagemaker.clusters
SET PatchDocument = string('{{ {
    "NodeRecovery": node_recovery,
    "ClusterRole": cluster_role,
    "NodeProvisioningMode": node_provisioning_mode,
    "AutoScaling": auto_scaling,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ cluster_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sagemaker.clusters
WHERE Identifier = '{{ cluster_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>clusters</code> resource, the following permissions are required:

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
sagemaker:DescribeCluster,
sagemaker:ListTags
```

</TabItem>
<TabItem value="create">

```json
sagemaker:CreateCluster,
sagemaker:DescribeCluster,
sagemaker:UpdateClusterSoftware,
sagemaker:AddTags,
sagemaker:ListTags,
sagemaker:BatchAddClusterNodes,
sagemaker:BatchDeleteClusterNodes,
eks:DescribeAccessEntry,
eks:DescribeCluster,
eks:CreateAccessEntry,
eks:DeleteAccessEntry,
eks:AssociateAccessPolicy,
iam:CreateServiceLinkedRole,
iam:PassRole,
kms:DescribeKey,
kms:CreateGrant,
ec2:DescribeImages,
ec2:DescribeSnapshots,
ec2:ModifyImageAttribute,
ec2:ModifySnapshotAttribute
```

</TabItem>
<TabItem value="update">

```json
sagemaker:UpdateCluster,
sagemaker:UpdateClusterSoftware,
sagemaker:DescribeCluster,
sagemaker:ListTags,
sagemaker:AddTags,
sagemaker:DeleteTags,
sagemaker:BatchAddClusterNodes,
sagemaker:BatchDeleteClusterNodes,
eks:DescribeAccessEntry,
eks:DescribeCluster,
eks:CreateAccessEntry,
eks:DeleteAccessEntry,
eks:AssociateAccessPolicy,
iam:PassRole,
kms:DescribeKey,
kms:CreateGrant,
sagemaker:BatchAddClusterNodes,
sagemaker:BatchDeleteClusterNodes,
ec2:DescribeImages,
ec2:DescribeSnapshots,
ec2:ModifyImageAttribute,
ec2:ModifySnapshotAttribute
```

</TabItem>
<TabItem value="list">

```json
sagemaker:ListClusters
```

</TabItem>
<TabItem value="delete">

```json
sagemaker:DeleteCluster,
sagemaker:DescribeCluster,
eks:DescribeAccessEntry,
eks:DeleteAccessEntry
```

</TabItem>
</Tabs>