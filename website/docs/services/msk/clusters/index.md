---
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
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

Creates, updates, deletes or gets a <code>cluster</code> resource or lists <code>clusters</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>clusters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::MSK::Cluster</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.msk.clusters" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "broker_node_group_info",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "storage_info",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "ebs_storage_info",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "volume_size",
                "type": "integer",
                "description": ""
              },
              {
                "name": "provisioned_throughput",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "connectivity_info",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "public_access",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "vpc_connectivity",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "client_authentication",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "security_groups",
        "type": "array",
        "description": ""
      },
      {
        "name": "broker_az_distribution",
        "type": "string",
        "description": ""
      },
      {
        "name": "client_subnets",
        "type": "array",
        "description": ""
      },
      {
        "name": "instance_type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "enhanced_monitoring",
    "type": "string",
    "description": ""
  },
  {
    "name": "kafka_version",
    "type": "string",
    "description": ""
  },
  {
    "name": "number_of_broker_nodes",
    "type": "integer",
    "description": ""
  },
  {
    "name": "encryption_info",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "encryption_at_rest",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "data_volume_kms_key_id",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "encryption_in_transit",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "in_cluster",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "client_broker",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "open_monitoring",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "prometheus",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "jmx_exporter",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "enabled_in_broker",
                "type": "boolean",
                "description": ""
              }
            ]
          },
          {
            "name": "node_exporter",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "enabled_in_broker",
                "type": "boolean",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "cluster_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "current_version",
    "type": "string",
    "description": "The current version of the MSK cluster"
  },
  {
    "name": "client_authentication",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "sasl",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "iam",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "enabled",
                "type": "boolean",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "logging_info",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "broker_logs",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "s3",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "enabled",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "prefix",
                "type": "string",
                "description": ""
              },
              {
                "name": "bucket",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "cloud_watch_logs",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "log_group",
                "type": "string",
                "description": ""
              },
              {
                "name": "enabled",
                "type": "boolean",
                "description": ""
              }
            ]
          },
          {
            "name": "firehose",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "enabled",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "delivery_stream",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A key-value pair to associate with a resource."
  },
  {
    "name": "configuration_info",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "revision",
        "type": "integer",
        "description": ""
      },
      {
        "name": "arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "storage_mode",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html"><code>AWS::MSK::Cluster</code></a>.

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
    <td><CopyableCode code="BrokerNodeGroupInfo, KafkaVersion, NumberOfBrokerNodes, ClusterName, region" /></td>
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

Gets all properties from an individual <code>cluster</code>.
```sql
SELECT
region,
broker_node_group_info,
enhanced_monitoring,
kafka_version,
number_of_broker_nodes,
encryption_info,
open_monitoring,
cluster_name,
arn,
current_version,
client_authentication,
logging_info,
tags,
configuration_info,
storage_mode
FROM awscc.msk.clusters
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
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
INSERT INTO awscc.msk.clusters (
 BrokerNodeGroupInfo,
 KafkaVersion,
 NumberOfBrokerNodes,
 ClusterName,
 region
)
SELECT 
'{{ BrokerNodeGroupInfo }}',
 '{{ KafkaVersion }}',
 '{{ NumberOfBrokerNodes }}',
 '{{ ClusterName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.msk.clusters (
 BrokerNodeGroupInfo,
 EnhancedMonitoring,
 KafkaVersion,
 NumberOfBrokerNodes,
 EncryptionInfo,
 OpenMonitoring,
 ClusterName,
 CurrentVersion,
 ClientAuthentication,
 LoggingInfo,
 Tags,
 ConfigurationInfo,
 StorageMode,
 region
)
SELECT 
 '{{ BrokerNodeGroupInfo }}',
 '{{ EnhancedMonitoring }}',
 '{{ KafkaVersion }}',
 '{{ NumberOfBrokerNodes }}',
 '{{ EncryptionInfo }}',
 '{{ OpenMonitoring }}',
 '{{ ClusterName }}',
 '{{ CurrentVersion }}',
 '{{ ClientAuthentication }}',
 '{{ LoggingInfo }}',
 '{{ Tags }}',
 '{{ ConfigurationInfo }}',
 '{{ StorageMode }}',
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
      - name: BrokerNodeGroupInfo
        value:
          StorageInfo:
            EBSStorageInfo:
              VolumeSize: '{{ VolumeSize }}'
              ProvisionedThroughput:
                Enabled: '{{ Enabled }}'
                VolumeThroughput: '{{ VolumeThroughput }}'
          ConnectivityInfo:
            PublicAccess:
              Type: '{{ Type }}'
            VpcConnectivity:
              ClientAuthentication:
                Tls:
                  Enabled: '{{ Enabled }}'
                Sasl:
                  Scram:
                    Enabled: '{{ Enabled }}'
                  Iam:
                    Enabled: '{{ Enabled }}'
          SecurityGroups:
            - '{{ SecurityGroups[0] }}'
          BrokerAZDistribution: '{{ BrokerAZDistribution }}'
          ClientSubnets:
            - '{{ ClientSubnets[0] }}'
          InstanceType: '{{ InstanceType }}'
      - name: EnhancedMonitoring
        value: '{{ EnhancedMonitoring }}'
      - name: KafkaVersion
        value: '{{ KafkaVersion }}'
      - name: NumberOfBrokerNodes
        value: '{{ NumberOfBrokerNodes }}'
      - name: EncryptionInfo
        value:
          EncryptionAtRest:
            DataVolumeKMSKeyId: '{{ DataVolumeKMSKeyId }}'
          EncryptionInTransit:
            InCluster: '{{ InCluster }}'
            ClientBroker: '{{ ClientBroker }}'
      - name: OpenMonitoring
        value:
          Prometheus:
            JmxExporter:
              EnabledInBroker: '{{ EnabledInBroker }}'
            NodeExporter:
              EnabledInBroker: '{{ EnabledInBroker }}'
      - name: ClusterName
        value: '{{ ClusterName }}'
      - name: CurrentVersion
        value: '{{ CurrentVersion }}'
      - name: ClientAuthentication
        value:
          Sasl:
            Iam:
              Enabled: '{{ Enabled }}'
      - name: LoggingInfo
        value:
          BrokerLogs:
            S3:
              Enabled: '{{ Enabled }}'
              Prefix: '{{ Prefix }}'
              Bucket: '{{ Bucket }}'
            CloudWatchLogs:
              LogGroup: '{{ LogGroup }}'
              Enabled: '{{ Enabled }}'
            Firehose:
              Enabled: '{{ Enabled }}'
              DeliveryStream: '{{ DeliveryStream }}'
      - name: Tags
        value: {}
      - name: ConfigurationInfo
        value:
          Revision: '{{ Revision }}'
          Arn: '{{ Arn }}'
      - name: StorageMode
        value: '{{ StorageMode }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.msk.clusters
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>clusters</code> resource, the following permissions are required:

### Create
```json
ec2:DescribeSecurityGroups,
ec2:DescribeSubnets,
ec2:DescribeVpcs,
iam:AttachRolePolicy,
iam:CreateServiceLinkedRole,
iam:PutRolePolicy,
kms:CreateGrant,
kms:DescribeKey,
kafka:CreateCluster,
kafka:DescribeCluster,
kafka:TagResource,
logs:CreateLogDelivery,
logs:GetLogDelivery,
logs:UpdateLogDelivery,
logs:DeleteLogDelivery,
logs:ListLogDeliveries,
s3:GetBucketPolicy,
s3:PutBucketPolicy,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups,
firehose:TagDeliveryStream,
acm-pca:GetCertificateAuthorityCertificate
```

### Update
```json
kafka:UpdateMonitoring,
kafka:UpdateClusterKafkaVersion,
kafka:UpdateClusterConfiguration,
kafka:UpdateBrokerType,
kafka:UpdateBrokerCount,
kafka:UpdateBrokerStorage,
kafka:UpdateStorage,
kafka:UpdateSecurity,
kafka:UpdateConnectivity,
kafka:DescribeCluster,
kafka:DescribeClusterOperation,
kafka:TagResource,
kafka:UntagResource,
ec2:DescribeSubnets,
ec2:DescribeVpcs,
ec2:DescribeSecurityGroups,
iam:AttachRolePolicy,
iam:CreateServiceLinkedRole,
iam:PutRolePolicy,
kms:DescribeKey,
kms:CreateGrant,
logs:CreateLogDelivery,
logs:GetLogDelivery,
logs:UpdateLogDelivery,
logs:DeleteLogDelivery,
logs:ListLogDeliveries,
s3:GetBucketPolicy,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups,
firehose:TagDeliveryStream,
acm-pca:GetCertificateAuthorityCertificate
```

### Delete
```json
kafka:DeleteCluster,
kafka:DescribeCluster
```

### List
```json
kafka:ListClusters
```

### Read
```json
kafka:DescribeCluster
```
