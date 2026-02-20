---
title: replicators
hide_title: false
hide_table_of_contents: false
keywords:
  - replicators
  - msk
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

Creates, updates, deletes or gets a <code>replicator</code> resource or lists <code>replicators</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>replicators</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::MSK::Replicator</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.msk.replicators" /></td></tr>
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
    "name": "replicator_arn",
    "type": "string",
    "description": "Amazon Resource Name for the created replicator."
  },
  {
    "name": "replicator_name",
    "type": "string",
    "description": "The name of the replicator."
  },
  {
    "name": "current_version",
    "type": "string",
    "description": "The current version of the MSK replicator."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A summary description of the replicator."
  },
  {
    "name": "kafka_clusters",
    "type": "array",
    "description": "Specifies a list of Kafka clusters which are targets of the replicator.",
    "children": [
      {
        "name": "amazon_msk_cluster",
        "type": "object",
        "description": "Details of an Amazon MSK cluster. Exactly one of AmazonMskCluster is required.",
        "children": [
          {
            "name": "msk_cluster_arn",
            "type": "string",
            "description": "The ARN of an Amazon MSK cluster."
          }
        ]
      },
      {
        "name": "vpc_config",
        "type": "object",
        "description": "Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.",
        "children": [
          {
            "name": "security_group_ids",
            "type": "array",
            "description": "The AWS security groups to associate with the elastic network interfaces in order to specify what the replicator has access to. If a security group is not specified, the default security group associated with the VPC is used."
          },
          {
            "name": "subnet_ids",
            "type": "array",
            "description": "The list of subnets to connect to in the virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets."
          }
        ]
      }
    ]
  },
  {
    "name": "replication_info_list",
    "type": "array",
    "description": "A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow.",
    "children": [
      {
        "name": "source_kafka_cluster_arn",
        "type": "string",
        "description": "Amazon Resource Name of the source Kafka cluster."
      },
      {
        "name": "target_kafka_cluster_arn",
        "type": "string",
        "description": "Amazon Resource Name of the target Kafka cluster."
      },
      {
        "name": "target_compression_type",
        "type": "string",
        "description": "The type of compression to use writing records to target Kafka cluster."
      },
      {
        "name": "topic_replication",
        "type": "object",
        "description": "Configuration relating to topic replication.",
        "children": [
          {
            "name": "topics_to_replicate",
            "type": "array",
            "description": "List of regular expression patterns indicating the topics to copy."
          },
          {
            "name": "topics_to_exclude",
            "type": "array",
            "description": "List of regular expression patterns indicating the topics that should not be replicated."
          },
          {
            "name": "copy_topic_configurations",
            "type": "boolean",
            "description": "Whether to periodically configure remote topics to match their corresponding upstream topics."
          },
          {
            "name": "copy_access_control_lists_for_topics",
            "type": "boolean",
            "description": "Whether to periodically configure remote topic ACLs to match their corresponding upstream topics."
          },
          {
            "name": "detect_and_copy_new_topics",
            "type": "boolean",
            "description": "Whether to periodically check for new topics and partitions."
          },
          {
            "name": "starting_position",
            "type": "object",
            "description": "Configuration for specifying the position in the topics to start replicating from.",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": "The type of replication starting position."
              }
            ]
          },
          {
            "name": "topic_name_configuration",
            "type": "object",
            "description": "Configuration for specifying replicated topic names should be the same as their corresponding upstream topics or prefixed with source cluster alias.",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": "The type of replicated topic name."
              }
            ]
          }
        ]
      },
      {
        "name": "consumer_group_replication",
        "type": "object",
        "description": "Configuration relating to consumer group replication.",
        "children": [
          {
            "name": "consumer_groups_to_replicate",
            "type": "array",
            "description": "List of regular expression patterns indicating the consumer groups to copy."
          },
          {
            "name": "consumer_groups_to_exclude",
            "type": "array",
            "description": "List of regular expression patterns indicating the consumer groups that should not be replicated."
          },
          {
            "name": "synchronise_consumer_group_offsets",
            "type": "boolean",
            "description": "Whether to periodically write the translated offsets to &#95;&#95;consumer&#95;offsets topic in target cluster."
          },
          {
            "name": "detect_and_copy_new_consumer_groups",
            "type": "boolean",
            "description": "Whether to periodically check for new consumer groups."
          }
        ]
      }
    ]
  },
  {
    "name": "service_execution_role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the IAM role used by the replicator to access external resources."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A collection of tags associated with a resource",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "replicator_arn",
    "type": "string",
    "description": "Amazon Resource Name for the created replicator."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html"><code>AWS::MSK::Replicator</code></a>.

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
    <td><code>replicators</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ReplicatorName, ReplicationInfoList, KafkaClusters, ServiceExecutionRoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>replicators</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>replicators</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>replicators_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>replicators</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>replicator</code>.
```sql
SELECT
region,
replicator_arn,
replicator_name,
current_version,
description,
kafka_clusters,
replication_info_list,
service_execution_role_arn,
tags
FROM awscc.msk.replicators
WHERE region = 'us-east-1' AND data__Identifier = '<ReplicatorArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>replicators</code> in a region.
```sql
SELECT
region,
replicator_arn
FROM awscc.msk.replicators_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>replicator</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.msk.replicators (
 ReplicatorName,
 KafkaClusters,
 ReplicationInfoList,
 ServiceExecutionRoleArn,
 region
)
SELECT 
'{{ ReplicatorName }}',
 '{{ KafkaClusters }}',
 '{{ ReplicationInfoList }}',
 '{{ ServiceExecutionRoleArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.msk.replicators (
 ReplicatorName,
 Description,
 KafkaClusters,
 ReplicationInfoList,
 ServiceExecutionRoleArn,
 Tags,
 region
)
SELECT 
 '{{ ReplicatorName }}',
 '{{ Description }}',
 '{{ KafkaClusters }}',
 '{{ ReplicationInfoList }}',
 '{{ ServiceExecutionRoleArn }}',
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
  - name: replicator
    props:
      - name: ReplicatorName
        value: '{{ ReplicatorName }}'
      - name: Description
        value: '{{ Description }}'
      - name: KafkaClusters
        value:
          - AmazonMskCluster:
              MskClusterArn: '{{ MskClusterArn }}'
            VpcConfig:
              SecurityGroupIds:
                - '{{ SecurityGroupIds[0] }}'
              SubnetIds:
                - '{{ SubnetIds[0] }}'
      - name: ReplicationInfoList
        value:
          - SourceKafkaClusterArn: '{{ SourceKafkaClusterArn }}'
            TargetKafkaClusterArn: '{{ TargetKafkaClusterArn }}'
            TargetCompressionType: '{{ TargetCompressionType }}'
            TopicReplication:
              TopicsToReplicate:
                - '{{ TopicsToReplicate[0] }}'
              TopicsToExclude:
                - '{{ TopicsToExclude[0] }}'
              CopyTopicConfigurations: '{{ CopyTopicConfigurations }}'
              CopyAccessControlListsForTopics: '{{ CopyAccessControlListsForTopics }}'
              DetectAndCopyNewTopics: '{{ DetectAndCopyNewTopics }}'
              StartingPosition:
                Type: '{{ Type }}'
              TopicNameConfiguration:
                Type: '{{ Type }}'
            ConsumerGroupReplication:
              ConsumerGroupsToReplicate:
                - '{{ ConsumerGroupsToReplicate[0] }}'
              ConsumerGroupsToExclude:
                - '{{ ConsumerGroupsToExclude[0] }}'
              SynchroniseConsumerGroupOffsets: '{{ SynchroniseConsumerGroupOffsets }}'
              DetectAndCopyNewConsumerGroups: '{{ DetectAndCopyNewConsumerGroups }}'
      - name: ServiceExecutionRoleArn
        value: '{{ ServiceExecutionRoleArn }}'
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
UPDATE awscc.msk.replicators
SET data__PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ReplicatorArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.msk.replicators
WHERE data__Identifier = '<ReplicatorArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>replicators</code> resource, the following permissions are required:

### Create
```json
ec2:CreateNetworkInterface,
ec2:DescribeSecurityGroups,
ec2:DescribeSubnets,
ec2:DescribeVpcs,
iam:CreateServiceLinkedRole,
iam:PassRole,
kafka:CreateReplicator,
kafka:CreateReplicatorReference,
kafka:DescribeClusterV2,
kafka:DescribeReplicator,
kafka:GetBootstrapBrokers,
kafka:ListTagsForResource,
kafka:TagResource
```

### Read
```json
kafka:DescribeReplicator,
kafka:ListTagsForResource
```

### Update
```json
kafka:DescribeReplicator,
kafka:ListTagsForResource,
kafka:TagResource,
kafka:UntagResource,
kafka:UpdateReplicationInfo
```

### Delete
```json
kafka:DeleteReplicator,
kafka:DescribeReplicator,
kafka:ListTagsForResource,
kafka:UntagResource
```

### List
```json
kafka:ListReplicators
```
