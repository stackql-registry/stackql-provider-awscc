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
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="cluster_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the HyperPod Cluster.</td></tr>
<tr><td><CopyableCode code="vpc_config" /></td><td><code>object</code></td><td>Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html</td></tr>
<tr><td><CopyableCode code="node_recovery" /></td><td><code>string</code></td><td>If node auto-recovery is set to true, faulty nodes will be replaced or rebooted when a failure is detected. If set to false, nodes will be labelled when a fault is detected.</td></tr>
<tr><td><CopyableCode code="instance_groups" /></td><td><code>array</code></td><td>The instance groups of the SageMaker HyperPod cluster.</td></tr>
<tr><td><CopyableCode code="restricted_instance_groups" /></td><td><code>array</code></td><td>The restricted instance groups of the SageMaker HyperPod cluster.</td></tr>
<tr><td><CopyableCode code="orchestrator" /></td><td><code>object</code></td><td>Specifies parameter(s) specific to the orchestrator, e.g. specify the EKS cluster.</td></tr>
<tr><td><CopyableCode code="cluster_role" /></td><td><code>string</code></td><td>The cluster role for the autoscaler to assume.</td></tr>
<tr><td><CopyableCode code="node_provisioning_mode" /></td><td><code>string</code></td><td>Determines the scaling strategy for the SageMaker HyperPod cluster. When set to 'Continuous', enables continuous scaling which dynamically manages node provisioning. If the parameter is omitted, uses the standard scaling approach in previous release.</td></tr>
<tr><td><CopyableCode code="creation_time" /></td><td><code>string</code></td><td>The time at which the HyperPod cluster was created.</td></tr>
<tr><td><CopyableCode code="cluster_name" /></td><td><code>string</code></td><td>The name of the HyperPod Cluster.</td></tr>
<tr><td><CopyableCode code="failure_message" /></td><td><code>string</code></td><td>The failure message of the HyperPod Cluster.</td></tr>
<tr><td><CopyableCode code="auto_scaling" /></td><td><code>object</code></td><td>Configuration for cluster auto-scaling</td></tr>
<tr><td><CopyableCode code="cluster_status" /></td><td><code>string</code></td><td>The status of the HyperPod Cluster.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>Custom tags for managing the SageMaker HyperPod cluster as an AWS resource. You can add tags to your cluster in the same way you add them in other AWS services that support tagging.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html"><code>AWS::SageMaker::Cluster</code></a>.

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
Gets all <code>clusters</code> in a region.
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
WHERE region = 'us-east-1';
```
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
WHERE region = 'us-east-1' AND data__Identifier = '<ClusterArn>';
```

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
 '{{ VpcConfig }}',
 '{{ NodeRecovery }}',
 '{{ InstanceGroups }}',
 '{{ RestrictedInstanceGroups }}',
 '{{ Orchestrator }}',
 '{{ ClusterRole }}',
 '{{ NodeProvisioningMode }}',
 '{{ ClusterName }}',
 '{{ AutoScaling }}',
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
  - name: cluster
    props:
      - name: VpcConfig
        value:
          SecurityGroupIds:
            - '{{ SecurityGroupIds[0] }}'
          Subnets:
            - '{{ Subnets[0] }}'
      - name: NodeRecovery
        value: '{{ NodeRecovery }}'
      - name: InstanceGroups
        value:
          - InstanceGroupName: '{{ InstanceGroupName }}'
            InstanceStorageConfigs:
              - {}
            LifeCycleConfig:
              SourceS3Uri: '{{ SourceS3Uri }}'
              OnCreate: '{{ OnCreate }}'
            TrainingPlanArn: '{{ TrainingPlanArn }}'
            ThreadsPerCore: '{{ ThreadsPerCore }}'
            OverrideVpcConfig: null
            InstanceCount: '{{ InstanceCount }}'
            OnStartDeepHealthChecks:
              - '{{ OnStartDeepHealthChecks[0] }}'
            ImageId: '{{ ImageId }}'
            CurrentCount: '{{ CurrentCount }}'
            ScheduledUpdateConfig:
              ScheduleExpression: '{{ ScheduleExpression }}'
              DeploymentConfig:
                AutoRollbackConfiguration:
                  Alarms:
                    - AlarmName: '{{ AlarmName }}'
                BlueGreenUpdatePolicy:
                  MaximumExecutionTimeoutInSeconds: '{{ MaximumExecutionTimeoutInSeconds }}'
                  TerminationWaitInSeconds: '{{ TerminationWaitInSeconds }}'
                  TrafficRoutingConfiguration:
                    CanarySize:
                      Type: '{{ Type }}'
                      Value: '{{ Value }}'
                    LinearStepSize: null
                    Type: '{{ Type }}'
                    WaitIntervalInSeconds: '{{ WaitIntervalInSeconds }}'
                RollingUpdatePolicy:
                  MaximumBatchSize: null
                  MaximumExecutionTimeoutInSeconds: '{{ MaximumExecutionTimeoutInSeconds }}'
                  RollbackMaximumBatchSize: null
                  WaitIntervalInSeconds: '{{ WaitIntervalInSeconds }}'
            InstanceType: '{{ InstanceType }}'
            ExecutionRole: '{{ ExecutionRole }}'
      - name: RestrictedInstanceGroups
        value:
          - OverrideVpcConfig: null
            InstanceCount: '{{ InstanceCount }}'
            OnStartDeepHealthChecks: null
            EnvironmentConfig:
              FSxLustreConfig:
                SizeInGiB: '{{ SizeInGiB }}'
                PerUnitStorageThroughput: '{{ PerUnitStorageThroughput }}'
            InstanceGroupName: null
            InstanceStorageConfigs: null
            CurrentCount: '{{ CurrentCount }}'
            TrainingPlanArn: '{{ TrainingPlanArn }}'
            InstanceType: null
            ThreadsPerCore: '{{ ThreadsPerCore }}'
            ExecutionRole: null
      - name: Orchestrator
        value:
          Eks:
            ClusterArn: '{{ ClusterArn }}'
      - name: ClusterRole
        value: '{{ ClusterRole }}'
      - name: NodeProvisioningMode
        value: '{{ NodeProvisioningMode }}'
      - name: ClusterName
        value: '{{ ClusterName }}'
      - name: AutoScaling
        value:
          Mode: '{{ Mode }}'
          AutoScalerType: '{{ AutoScalerType }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sagemaker.clusters
WHERE data__Identifier = '<ClusterArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>clusters</code> resource, the following permissions are required:

### Read
```json
sagemaker:DescribeCluster,
sagemaker:ListTags
```

### Create
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

### Update
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

### List
```json
sagemaker:ListClusters
```

### Delete
```json
sagemaker:DeleteCluster,
sagemaker:DescribeCluster,
eks:DescribeAccessEntry,
eks:DeleteAccessEntry
```
