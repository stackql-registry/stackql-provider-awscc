---
title: scaling_policies_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - scaling_policies_list_only
  - applicationautoscaling
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

Lists <code>scaling_policies</code> in a region or regions, for all properties use <a href="/services/applicationautoscaling/scaling_policies/"><code>scaling_policies</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>scaling_policies_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApplicationAutoScaling::ScalingPolicy&#96;&#96; resource defines a scaling policy that Application Auto Scaling uses to adjust the capacity of a scalable target. <br />For more information, see &#91;Target tracking scaling policies&#93;(https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html) and &#91;Step scaling policies&#93;(https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html) in the &#42;Application Auto Scaling User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.applicationautoscaling.scaling_policies_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "scalable_dimension",
    "type": "string",
    "description": "The scalable dimension. This string consists of the service namespace, resource type, and scaling property.<br />+ &#96;&#96;ecs:service:DesiredCount&#96;&#96; - The task count of an ECS service.<br />+ &#96;&#96;elasticmapreduce:instancegroup:InstanceCount&#96;&#96; - The instance count of an EMR Instance Group.<br />+ &#96;&#96;ec2:spot-fleet-request:TargetCapacity&#96;&#96; - The target capacity of a Spot Fleet.<br />+ &#96;&#96;appstream:fleet:DesiredCapacity&#96;&#96; - The capacity of an AppStream 2.0 fleet.<br />+ &#96;&#96;dynamodb:table:ReadCapacityUnits&#96;&#96; - The provisioned read capacity for a DynamoDB table.<br />+ &#96;&#96;dynamodb:table:WriteCapacityUnits&#96;&#96; - The provisioned write capacity for a DynamoDB table.<br />+ &#96;&#96;dynamodb:index:ReadCapacityUnits&#96;&#96; - The provisioned read capacity for a DynamoDB global secondary index.<br />+ &#96;&#96;dynamodb:index:WriteCapacityUnits&#96;&#96; - The provisioned write capacity for a DynamoDB global secondary index.<br />+ &#96;&#96;rds:cluster:ReadReplicaCount&#96;&#96; - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.<br />+ &#96;&#96;sagemaker:variant:DesiredInstanceCount&#96;&#96; - The number of EC2 instances for a SageMaker model endpoint variant.<br />+ &#96;&#96;custom-resource:ResourceType:Property&#96;&#96; - The scalable dimension for a custom resource provided by your own application or service.<br />+ &#96;&#96;comprehend:document-classifier-endpoint:DesiredInferenceUnits&#96;&#96; - The number of inference units for an Amazon Comprehend document classification endpoint.<br />+ &#96;&#96;comprehend:entity-recognizer-endpoint:DesiredInferenceUnits&#96;&#96; - The number of inference units for an Amazon Comprehend entity recognizer endpoint.<br />+ &#96;&#96;lambda:function:ProvisionedConcurrency&#96;&#96; - The provisioned concurrency for a Lambda function.<br />+ &#96;&#96;cassandra:table:ReadCapacityUnits&#96;&#96; - The provisioned read capacity for an Amazon Keyspaces table.<br />+ &#96;&#96;cassandra:table:WriteCapacityUnits&#96;&#96; - The provisioned write capacity for an Amazon Keyspaces table.<br />+ &#96;&#96;kafka:broker-storage:VolumeSize&#96;&#96; - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.<br />+ &#96;&#96;elasticache:cache-cluster:Nodes&#96;&#96; - The number of nodes for an Amazon ElastiCache cache cluster.<br />+ &#96;&#96;elasticache:replication-group:NodeGroups&#96;&#96; - The number of node groups for an Amazon ElastiCache replication group.<br />+ &#96;&#96;elasticache:replication-group:Replicas&#96;&#96; - The number of replicas per node group for an Amazon ElastiCache replication group.<br />+ &#96;&#96;neptune:cluster:ReadReplicaCount&#96;&#96; - The count of read replicas in an Amazon Neptune DB cluster.<br />+ &#96;&#96;sagemaker:variant:DesiredProvisionedConcurrency&#96;&#96; - The provisioned concurrency for a SageMaker serverless endpoint.<br />+ &#96;&#96;sagemaker:inference-component:DesiredCopyCount&#96;&#96; - The number of copies across an endpoint for a SageMaker inference component.<br />+ &#96;&#96;workspaces:workspacespool:DesiredUserSessions&#96;&#96; - The number of user sessions for the WorkSpaces in the pool."
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

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples
Lists all <code>scaling_policies</code> in a region.
```sql
SELECT
region,
arn,
scalable_dimension
FROM awscc.applicationautoscaling.scaling_policies_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>scaling_policies_list_only</code> resource, see <a href="/services/applicationautoscaling/scaling_policies/#permissions"><code>scaling_policies</code></a>

