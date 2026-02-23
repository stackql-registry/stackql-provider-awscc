---
title: connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - connectors
  - kafkaconnect
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

Creates, updates, deletes or gets a <code>connector</code> resource or lists <code>connectors</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>connectors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::KafkaConnect::Connector</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.kafkaconnect.connectors" /></td></tr>
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
    "name": "capacity",
    "type": "object",
    "description": "Information about the capacity allocated to the connector.",
    "children": [
      {
        "name": "auto_scaling",
        "type": "object",
        "description": "Details about auto scaling of a connector.",
        "children": [
          {
            "name": "max_worker_count",
            "type": "integer",
            "description": "The maximum number of workers for a connector."
          },
          {
            "name": "min_worker_count",
            "type": "integer",
            "description": "The minimum number of workers for a connector."
          },
          {
            "name": "scale_in_policy",
            "type": "object",
            "description": "Information about the scale in policy of the connector.",
            "children": [
              {
                "name": "cpu_utilization_percentage",
                "type": "integer",
                "description": "Specifies the CPU utilization percentage threshold at which connector scale in should trigger."
              }
            ]
          },
          {
            "name": "scale_out_policy",
            "type": "object",
            "description": "Information about the scale out policy of the connector.",
            "children": [
              {
                "name": "cpu_utilization_percentage",
                "type": "integer",
                "description": "Specifies the CPU utilization percentage threshold at which connector scale out should trigger."
              }
            ]
          },
          {
            "name": "mcu_count",
            "type": "integer",
            "description": "Specifies how many MSK Connect Units (MCU) as the minimum scaling unit."
          }
        ]
      },
      {
        "name": "provisioned_capacity",
        "type": "object",
        "description": "Details about a fixed capacity allocated to a connector.",
        "children": [
          {
            "name": "mcu_count",
            "type": "integer",
            "description": "Specifies how many MSK Connect Units (MCU) are allocated to the connector."
          },
          {
            "name": "worker_count",
            "type": "integer",
            "description": "Number of workers for a connector."
          }
        ]
      }
    ]
  },
  {
    "name": "connector_arn",
    "type": "string",
    "description": "Amazon Resource Name for the created Connector."
  },
  {
    "name": "connector_configuration",
    "type": "object",
    "description": "The configuration for the connector."
  },
  {
    "name": "connector_description",
    "type": "string",
    "description": "A summary description of the connector."
  },
  {
    "name": "connector_name",
    "type": "string",
    "description": "The name of the connector."
  },
  {
    "name": "kafka_cluster",
    "type": "object",
    "description": "Details of how to connect to the Kafka cluster.",
    "children": [
      {
        "name": "apache_kafka_cluster",
        "type": "object",
        "description": "Details of how to connect to an Apache Kafka cluster.",
        "children": [
          {
            "name": "bootstrap_servers",
            "type": "string",
            "description": "The bootstrap servers string of the Apache Kafka cluster."
          },
          {
            "name": "vpc",
            "type": "object",
            "description": "Information about a VPC used with the connector.",
            "children": [
              {
                "name": "security_groups",
                "type": "array",
                "description": "The AWS security groups to associate with the elastic network interfaces in order to specify what the connector has access to."
              },
              {
                "name": "subnets",
                "type": "array",
                "description": "The list of subnets to connect to in the virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "kafka_cluster_client_authentication",
    "type": "object",
    "description": "Details of the client authentication used by the Kafka cluster.",
    "children": [
      {
        "name": "authentication_type",
        "type": "string",
        "description": "The type of client authentication used to connect to the Kafka cluster. Value NONE means that no client authentication is used."
      }
    ]
  },
  {
    "name": "kafka_cluster_encryption_in_transit",
    "type": "object",
    "description": "Details of encryption in transit to the Kafka cluster.",
    "children": [
      {
        "name": "encryption_type",
        "type": "string",
        "description": "The type of encryption in transit to the Kafka cluster."
      }
    ]
  },
  {
    "name": "kafka_connect_version",
    "type": "string",
    "description": "The version of Kafka Connect. It has to be compatible with both the Kafka cluster's version and the plugins."
  },
  {
    "name": "log_delivery",
    "type": "object",
    "description": "Details of what logs are delivered and where they are delivered.",
    "children": [
      {
        "name": "worker_log_delivery",
        "type": "object",
        "description": "Specifies where worker logs are delivered.",
        "children": [
          {
            "name": "cloud_watch_logs",
            "type": "object",
            "description": "Details about delivering logs to Amazon CloudWatch Logs.",
            "children": [
              {
                "name": "enabled",
                "type": "boolean",
                "description": "Specifies whether the logs get sent to the specified CloudWatch Logs destination."
              },
              {
                "name": "log_group",
                "type": "string",
                "description": "The CloudWatch log group that is the destination for log delivery."
              }
            ]
          },
          {
            "name": "firehose",
            "type": "object",
            "description": "Details about delivering logs to Amazon Kinesis Data Firehose.",
            "children": [
              {
                "name": "delivery_stream",
                "type": "string",
                "description": "The Kinesis Data Firehose delivery stream that is the destination for log delivery."
              },
              {
                "name": "enabled",
                "type": "boolean",
                "description": "Specifies whether the logs get sent to the specified Kinesis Data Firehose delivery stream."
              }
            ]
          },
          {
            "name": "s3",
            "type": "object",
            "description": "Details about delivering logs to Amazon S3.",
            "children": [
              {
                "name": "bucket",
                "type": "string",
                "description": "The name of the S3 bucket that is the destination for log delivery."
              },
              {
                "name": "enabled",
                "type": "boolean",
                "description": "Specifies whether the logs get sent to the specified Amazon S3 destination."
              },
              {
                "name": "prefix",
                "type": "string",
                "description": "The S3 prefix that is the destination for log delivery."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "plugins",
    "type": "array",
    "description": "List of plugins to use with the connector.",
    "children": [
      {
        "name": "custom_plugin",
        "type": "object",
        "description": "An example resource schema demonstrating some basic constructs and validation rules.",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "The name of the custom plugin."
          },
          {
            "name": "description",
            "type": "string",
            "description": "A summary description of the custom plugin."
          },
          {
            "name": "custom_plugin_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the custom plugin to use."
          },
          {
            "name": "content_type",
            "type": "string",
            "description": "The type of the plugin file."
          },
          {
            "name": "file_description",
            "type": "object",
            "description": "Details about the custom plugin file.",
            "children": [
              {
                "name": "file_md5",
                "type": "string",
                "description": "The hex-encoded MD5 checksum of the custom plugin file. You can use it to validate the file."
              },
              {
                "name": "file_size",
                "type": "integer",
                "description": "The size in bytes of the custom plugin file. You can use it to validate the file."
              }
            ]
          },
          {
            "name": "location",
            "type": "object",
            "description": "Information about the location of a custom plugin.",
            "children": [
              {
                "name": "s3_location",
                "type": "object",
                "description": "The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin file stored in Amazon S3."
              }
            ]
          },
          {
            "name": "revision",
            "type": "integer",
            "description": "The revision of the custom plugin."
          },
          {
            "name": "tags",
            "type": "array",
            "description": "An array of key-value pairs to apply to this resource.",
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
          }
        ]
      }
    ]
  },
  {
    "name": "service_execution_role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon S3 objects and other external resources."
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
    "name": "worker_configuration",
    "type": "object",
    "description": "The configuration of the workers, which are the processes that run the connector logic.",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": "The name of the worker configuration."
      },
      {
        "name": "description",
        "type": "string",
        "description": "A summary description of the worker configuration."
      },
      {
        "name": "worker_configuration_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the custom configuration."
      },
      {
        "name": "properties_file_content",
        "type": "string",
        "description": "Base64 encoded contents of connect-distributed.properties file."
      },
      {
        "name": "revision",
        "type": "integer",
        "description": "The description of a revision of the worker configuration."
      },
      {
        "name": "tags",
        "type": "array",
        "description": "A collection of tags associated with a resource"
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
    "name": "connector_arn",
    "type": "string",
    "description": "Amazon Resource Name for the created Connector."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html"><code>AWS::KafkaConnect::Connector</code></a>.

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
    <td><code>connectors</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Capacity, ConnectorConfiguration, ConnectorName, KafkaConnectVersion, KafkaCluster, KafkaClusterClientAuthentication, KafkaClusterEncryptionInTransit, Plugins, ServiceExecutionRoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>connectors</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>connectors</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>connectors_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>connectors</code></td>
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

Gets all properties from an individual <code>connector</code>.
```sql
SELECT
region,
capacity,
connector_arn,
connector_configuration,
connector_description,
connector_name,
kafka_cluster,
kafka_cluster_client_authentication,
kafka_cluster_encryption_in_transit,
kafka_connect_version,
log_delivery,
plugins,
service_execution_role_arn,
tags,
worker_configuration
FROM awscc.kafkaconnect.connectors
WHERE region = 'us-east-1' AND Identifier = '{{ connector_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>connectors</code> in a region.
```sql
SELECT
region,
connector_arn
FROM awscc.kafkaconnect.connectors_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>connector</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.kafkaconnect.connectors (
 Capacity,
 ConnectorConfiguration,
 ConnectorName,
 KafkaCluster,
 KafkaClusterClientAuthentication,
 KafkaClusterEncryptionInTransit,
 KafkaConnectVersion,
 Plugins,
 ServiceExecutionRoleArn,
 region
)
SELECT
'{{ capacity }}',
 '{{ connector_configuration }}',
 '{{ connector_name }}',
 '{{ kafka_cluster }}',
 '{{ kafka_cluster_client_authentication }}',
 '{{ kafka_cluster_encryption_in_transit }}',
 '{{ kafka_connect_version }}',
 '{{ plugins }}',
 '{{ service_execution_role_arn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.kafkaconnect.connectors (
 Capacity,
 ConnectorConfiguration,
 ConnectorDescription,
 ConnectorName,
 KafkaCluster,
 KafkaClusterClientAuthentication,
 KafkaClusterEncryptionInTransit,
 KafkaConnectVersion,
 LogDelivery,
 Plugins,
 ServiceExecutionRoleArn,
 Tags,
 WorkerConfiguration,
 region
)
SELECT
 '{{ capacity }}',
 '{{ connector_configuration }}',
 '{{ connector_description }}',
 '{{ connector_name }}',
 '{{ kafka_cluster }}',
 '{{ kafka_cluster_client_authentication }}',
 '{{ kafka_cluster_encryption_in_transit }}',
 '{{ kafka_connect_version }}',
 '{{ log_delivery }}',
 '{{ plugins }}',
 '{{ service_execution_role_arn }}',
 '{{ tags }}',
 '{{ worker_configuration }}',
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
  - name: connector
    props:
      - name: capacity
        value:
          auto_scaling:
            max_worker_count: '{{ max_worker_count }}'
            min_worker_count: '{{ min_worker_count }}'
            scale_in_policy:
              cpu_utilization_percentage: '{{ cpu_utilization_percentage }}'
            scale_out_policy:
              cpu_utilization_percentage: '{{ cpu_utilization_percentage }}'
            mcu_count: '{{ mcu_count }}'
          provisioned_capacity:
            mcu_count: '{{ mcu_count }}'
            worker_count: '{{ worker_count }}'
      - name: connector_configuration
        value: {}
      - name: connector_description
        value: '{{ connector_description }}'
      - name: connector_name
        value: '{{ connector_name }}'
      - name: kafka_cluster
        value:
          apache_kafka_cluster:
            bootstrap_servers: '{{ bootstrap_servers }}'
            vpc:
              security_groups:
                - '{{ security_groups[0] }}'
              subnets:
                - '{{ subnets[0] }}'
      - name: kafka_cluster_client_authentication
        value:
          authentication_type: '{{ authentication_type }}'
      - name: kafka_cluster_encryption_in_transit
        value:
          encryption_type: '{{ encryption_type }}'
      - name: kafka_connect_version
        value: '{{ kafka_connect_version }}'
      - name: log_delivery
        value:
          worker_log_delivery:
            cloud_watch_logs:
              enabled: '{{ enabled }}'
              log_group: '{{ log_group }}'
            firehose:
              delivery_stream: '{{ delivery_stream }}'
              enabled: '{{ enabled }}'
            s3:
              bucket: '{{ bucket }}'
              enabled: '{{ enabled }}'
              prefix: '{{ prefix }}'
      - name: plugins
        value:
          - custom_plugin:
              name: '{{ name }}'
              description: '{{ description }}'
              content_type: '{{ content_type }}'
              location:
                s3_location:
                  bucket_arn: '{{ bucket_arn }}'
                  file_key: '{{ file_key }}'
                  object_version: '{{ object_version }}'
              tags:
                - key: '{{ key }}'
                  value: '{{ value }}'
      - name: service_execution_role_arn
        value: '{{ service_execution_role_arn }}'
      - name: tags
        value:
          - null
      - name: worker_configuration
        value:
          name: '{{ name }}'
          description: '{{ description }}'
          properties_file_content: '{{ properties_file_content }}'
          tags:
            - null
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>connector</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.kafkaconnect.connectors
SET PatchDocument = string('{{ {
    "Capacity": capacity,
    "ConnectorConfiguration": connector_configuration,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ connector_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.kafkaconnect.connectors
WHERE Identifier = '{{ connector_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>connectors</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
kafkaconnect:CreateConnector,
kafkaconnect:DescribeConnector,
kafkaconnect:TagResource,
kafkaconnect:ListTagsForResource,
iam:CreateServiceLinkedRole,
iam:PassRole,
ec2:CreateNetworkInterface,
ec2:DescribeSecurityGroups,
ec2:DescribeSubnets,
ec2:DescribeVpcs,
logs:CreateLogDelivery,
logs:GetLogDelivery,
logs:ListLogDeliveries,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups,
s3:GetBucketPolicy,
s3:PutBucketPolicy,
firehose:TagDeliveryStream
```

</TabItem>
<TabItem value="read">

```json
kafkaconnect:DescribeConnector,
kafkaconnect:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
kafkaconnect:DeleteConnector,
kafkaconnect:DescribeConnector,
logs:DeleteLogDelivery,
logs:GetLogDelivery,
logs:ListLogDeliveries
```

</TabItem>
<TabItem value="update">

```json
kafkaconnect:UpdateConnector,
kafkaconnect:DescribeConnector,
kafkaconnect:DescribeConnectorOperation,
kafkaconnect:TagResource,
kafkaconnect:ListTagsForResource,
kafkaconnect:UntagResource,
iam:CreateServiceLinkedRole,
logs:UpdateLogDelivery,
logs:GetLogDelivery,
logs:ListLogDeliveries,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups,
s3:GetBucketPolicy,
s3:PutBucketPolicy,
firehose:TagDeliveryStream
```

</TabItem>
<TabItem value="list">

```json
kafkaconnect:ListConnectors
```

</TabItem>
</Tabs>