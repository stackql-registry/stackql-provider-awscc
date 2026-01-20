---
title: scalable_targets_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - scalable_targets_list_only
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

Lists <code>scalable_targets</code> in a region or regions, for all properties use <a href="/services/applicationautoscaling/scalable_targets/"><code>scalable_targets</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>scalable_targets_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApplicationAutoScaling::ScalableTarget&#96;&#96; resource specifies a resource that Application Auto Scaling can scale, such as an AWS::DynamoDB::Table or AWS::ECS::Service resource.<br />For more information, see &#91;Getting started&#93;(https://docs.aws.amazon.com/autoscaling/application/userguide/getting-started.html) in the &#42;Application Auto Scaling User Guide&#42;.<br />If the resource that you want Application Auto Scaling to scale is not yet created in your account, add a dependency on the resource when registering it as a scalable target using the &#91;DependsOn&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) attribute.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.applicationautoscaling.scalable_targets_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "resource_id",
    "type": "string",
    "description": "The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.<br />+ ECS service - The resource type is &#96;&#96;service&#96;&#96; and the unique identifier is the cluster name and service name. Example: &#96;&#96;service/my-cluster/my-service&#96;&#96;.<br />+ Spot Fleet - The resource type is &#96;&#96;spot-fleet-request&#96;&#96; and the unique identifier is the Spot Fleet request ID. Example: &#96;&#96;spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE&#96;&#96;.<br />+ EMR cluster - The resource type is &#96;&#96;instancegroup&#96;&#96; and the unique identifier is the cluster ID and instance group ID. Example: &#96;&#96;instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0&#96;&#96;.<br />+ AppStream 2.0 fleet - The resource type is &#96;&#96;fleet&#96;&#96; and the unique identifier is the fleet name. Example: &#96;&#96;fleet/sample-fleet&#96;&#96;.<br />+ DynamoDB table - The resource type is &#96;&#96;table&#96;&#96; and the unique identifier is the table name. Example: &#96;&#96;table/my-table&#96;&#96;.<br />+ DynamoDB global secondary index - The resource type is &#96;&#96;index&#96;&#96; and the unique identifier is the index name. Example: &#96;&#96;table/my-table/index/my-table-index&#96;&#96;.<br />+ Aurora DB cluster - The resource type is &#96;&#96;cluster&#96;&#96; and the unique identifier is the cluster name. Example: &#96;&#96;cluster:my-db-cluster&#96;&#96;.<br />+ SageMaker endpoint variant - The resource type is &#96;&#96;variant&#96;&#96; and the unique identifier is the resource ID. Example: &#96;&#96;endpoint/my-end-point/variant/KMeansClustering&#96;&#96;.<br />+ Custom resources are not supported with a resource type. This parameter must specify the &#96;&#96;OutputValue&#96;&#96; from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our &#91;GitHub repository&#93;(https://docs.aws.amazon.com/https://github.com/aws/aws-auto-scaling-custom-resource).<br />+ Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: &#96;&#96;arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE&#96;&#96;.<br />+ Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: &#96;&#96;arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE&#96;&#96;.<br />+ Lambda provisioned concurrency - The resource type is &#96;&#96;function&#96;&#96; and the unique identifier is the function name with a function version or alias name suffix that is not &#96;&#96;$LATEST&#96;&#96;. Example: &#96;&#96;function:my-function:prod&#96;&#96; or &#96;&#96;function:my-function:1&#96;&#96;.<br />+ Amazon Keyspaces table - The resource type is &#96;&#96;table&#96;&#96; and the unique identifier is the table name. Example: &#96;&#96;keyspace/mykeyspace/table/mytable&#96;&#96;.<br />+ Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: &#96;&#96;arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5&#96;&#96;.<br />+ Amazon ElastiCache replication group - The resource type is &#96;&#96;replication-group&#96;&#96; and the unique identifier is the replication group name. Example: &#96;&#96;replication-group/mycluster&#96;&#96;.<br />+ Amazon ElastiCache cache cluster - The resource type is &#96;&#96;cache-cluster&#96;&#96; and the unique identifier is the cache cluster name. Example: &#96;&#96;cache-cluster/mycluster&#96;&#96;.<br />+ Neptune cluster - The resource type is &#96;&#96;cluster&#96;&#96; and the unique identifier is the cluster name. Example: &#96;&#96;cluster:mycluster&#96;&#96;.<br />+ SageMaker serverless endpoint - The resource type is &#96;&#96;variant&#96;&#96; and the unique identifier is the resource ID. Example: &#96;&#96;endpoint/my-end-point/variant/KMeansClustering&#96;&#96;.<br />+ SageMaker inference component - The resource type is &#96;&#96;inference-component&#96;&#96; and the unique identifier is the resource ID. Example: &#96;&#96;inference-component/my-inference-component&#96;&#96;.<br />+ Pool of WorkSpaces - The resource type is &#96;&#96;workspacespool&#96;&#96; and the unique identifier is the pool ID. Example: &#96;&#96;workspacespool/wspool-123456&#96;&#96;."
  },
  {
    "name": "service_namespace",
    "type": "string",
    "description": "The namespace of the AWS service that provides the resource, or a &#96;&#96;custom-resource&#96;&#96;."
  },
  {
    "name": "scalable_dimension",
    "type": "string",
    "description": "The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property.<br />+ &#96;&#96;ecs:service:DesiredCount&#96;&#96; - The task count of an ECS service.<br />+ &#96;&#96;elasticmapreduce:instancegroup:InstanceCount&#96;&#96; - The instance count of an EMR Instance Group.<br />+ &#96;&#96;ec2:spot-fleet-request:TargetCapacity&#96;&#96; - The target capacity of a Spot Fleet.<br />+ &#96;&#96;appstream:fleet:DesiredCapacity&#96;&#96; - The capacity of an AppStream 2.0 fleet.<br />+ &#96;&#96;dynamodb:table:ReadCapacityUnits&#96;&#96; - The provisioned read capacity for a DynamoDB table.<br />+ &#96;&#96;dynamodb:table:WriteCapacityUnits&#96;&#96; - The provisioned write capacity for a DynamoDB table.<br />+ &#96;&#96;dynamodb:index:ReadCapacityUnits&#96;&#96; - The provisioned read capacity for a DynamoDB global secondary index.<br />+ &#96;&#96;dynamodb:index:WriteCapacityUnits&#96;&#96; - The provisioned write capacity for a DynamoDB global secondary index.<br />+ &#96;&#96;rds:cluster:ReadReplicaCount&#96;&#96; - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.<br />+ &#96;&#96;sagemaker:variant:DesiredInstanceCount&#96;&#96; - The number of EC2 instances for a SageMaker model endpoint variant.<br />+ &#96;&#96;custom-resource:ResourceType:Property&#96;&#96; - The scalable dimension for a custom resource provided by your own application or service.<br />+ &#96;&#96;comprehend:document-classifier-endpoint:DesiredInferenceUnits&#96;&#96; - The number of inference units for an Amazon Comprehend document classification endpoint.<br />+ &#96;&#96;comprehend:entity-recognizer-endpoint:DesiredInferenceUnits&#96;&#96; - The number of inference units for an Amazon Comprehend entity recognizer endpoint.<br />+ &#96;&#96;lambda:function:ProvisionedConcurrency&#96;&#96; - The provisioned concurrency for a Lambda function.<br />+ &#96;&#96;cassandra:table:ReadCapacityUnits&#96;&#96; - The provisioned read capacity for an Amazon Keyspaces table.<br />+ &#96;&#96;cassandra:table:WriteCapacityUnits&#96;&#96; - The provisioned write capacity for an Amazon Keyspaces table.<br />+ &#96;&#96;kafka:broker-storage:VolumeSize&#96;&#96; - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.<br />+ &#96;&#96;elasticache:cache-cluster:Nodes&#96;&#96; - The number of nodes for an Amazon ElastiCache cache cluster.<br />+ &#96;&#96;elasticache:replication-group:NodeGroups&#96;&#96; - The number of node groups for an Amazon ElastiCache replication group.<br />+ &#96;&#96;elasticache:replication-group:Replicas&#96;&#96; - The number of replicas per node group for an Amazon ElastiCache replication group.<br />+ &#96;&#96;neptune:cluster:ReadReplicaCount&#96;&#96; - The count of read replicas in an Amazon Neptune DB cluster.<br />+ &#96;&#96;sagemaker:variant:DesiredProvisionedConcurrency&#96;&#96; - The provisioned concurrency for a SageMaker serverless endpoint.<br />+ &#96;&#96;sagemaker:inference-component:DesiredCopyCount&#96;&#96; - The number of copies across an endpoint for a SageMaker inference component.<br />+ &#96;&#96;workspaces:workspacespool:DesiredUserSessions&#96;&#96; - The number of user sessions for the WorkSpaces in the pool."
  },
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
Lists all <code>scalable_targets</code> in a region.
```sql
SELECT
region,
resource_id,
scalable_dimension,
service_namespace
FROM awscc.applicationautoscaling.scalable_targets_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>scalable_targets_list_only</code> resource, see <a href="/services/applicationautoscaling/scalable_targets/#permissions"><code>scalable_targets</code></a>

