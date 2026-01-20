---
title: tables
hide_title: false
hide_table_of_contents: false
keywords:
  - tables
  - cassandra
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

Creates, updates, deletes or gets a <code>table</code> resource or lists <code>tables</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>tables</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::Cassandra::Table</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cassandra.tables" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "keyspace_name",
    "type": "string",
    "description": "Name for Cassandra keyspace"
  },
  {
    "name": "table_name",
    "type": "string",
    "description": "Name for Cassandra table"
  },
  {
    "name": "regular_columns",
    "type": "array",
    "description": "Non-key columns of the table",
    "children": [
      {
        "name": "column_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "column_type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "partition_key_columns",
    "type": "array",
    "description": "Partition key columns of the table"
  },
  {
    "name": "clustering_key_columns",
    "type": "array",
    "description": "Clustering key columns of the table",
    "children": [
      {
        "name": "order_by",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "billing_mode",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "mode",
        "type": "string",
        "description": "Capacity mode for the specified table"
      },
      {
        "name": "provisioned_throughput",
        "type": "object",
        "description": "Throughput for the specified table, which consists of values for ReadCapacityUnits and WriteCapacityUnits",
        "children": [
          {
            "name": "read_capacity_units",
            "type": "integer",
            "description": ""
          },
          {
            "name": "write_capacity_units",
            "type": "integer",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "point_in_time_recovery_enabled",
    "type": "boolean",
    "description": "Indicates whether point in time recovery is enabled (true) or disabled (false) on the table"
  },
  {
    "name": "client_side_timestamps_enabled",
    "type": "boolean",
    "description": "Indicates whether client side timestamps are enabled (true) or disabled (false) on the table. False by default, once it is enabled it cannot be disabled again."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource",
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
    "name": "default_time_to_live",
    "type": "integer",
    "description": "Default TTL (Time To Live) in seconds, where zero is disabled. If the value is greater than zero, TTL is enabled for the entire table and an expiration timestamp is added to each column."
  },
  {
    "name": "encryption_specification",
    "type": "object",
    "description": "Represents the settings used to enable server-side encryption",
    "children": [
      {
        "name": "encryption_type",
        "type": "string",
        "description": "Server-side encryption type"
      },
      {
        "name": "kms_key_identifier",
        "type": "string",
        "description": "The AWS KMS customer master key (CMK) that should be used for the AWS KMS encryption. To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN."
      }
    ]
  },
  {
    "name": "auto_scaling_specifications",
    "type": "object",
    "description": "Represents the read and write settings used for AutoScaling.",
    "children": [
      {
        "name": "write_capacity_auto_scaling",
        "type": "object",
        "description": "Represents configuration for auto scaling.",
        "children": [
          {
            "name": "auto_scaling_disabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "minimum_units",
            "type": "integer",
            "description": ""
          },
          {
            "name": "maximum_units",
            "type": "integer",
            "description": ""
          },
          {
            "name": "scaling_policy",
            "type": "object",
            "description": "Represents scaling policy.",
            "children": [
              {
                "name": "target_tracking_scaling_policy_configuration",
                "type": "object",
                "description": "Represents configuration for target tracking scaling policy."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "cdc_specification",
    "type": "object",
    "description": "Represents the CDC configuration for the table",
    "children": [
      {
        "name": "status",
        "type": "string",
        "description": "Indicates whether CDC is enabled or disabled for the table"
      },
      {
        "name": "view_type",
        "type": "string",
        "description": "Specifies what data should be captured in the change data stream"
      },
      {
        "name": "tags",
        "type": "array",
        "description": "An array of key-value pairs to apply to the CDC stream resource"
      }
    ]
  },
  {
    "name": "replica_specifications",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "region",
        "type": "string",
        "description": ""
      },
      {
        "name": "read_capacity_units",
        "type": "integer",
        "description": ""
      },
      {
        "name": "read_capacity_auto_scaling",
        "type": "object",
        "description": "Represents configuration for auto scaling.",
        "children": [
          {
            "name": "auto_scaling_disabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "minimum_units",
            "type": "integer",
            "description": ""
          },
          {
            "name": "maximum_units",
            "type": "integer",
            "description": ""
          },
          {
            "name": "scaling_policy",
            "type": "object",
            "description": "Represents scaling policy.",
            "children": [
              {
                "name": "target_tracking_scaling_policy_configuration",
                "type": "object",
                "description": "Represents configuration for target tracking scaling policy."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html"><code>AWS::Cassandra::Table</code></a>.

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
    <td><CopyableCode code="KeyspaceName, PartitionKeyColumns, region" /></td>
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

Gets all properties from an individual <code>table</code>.
```sql
SELECT
region,
keyspace_name,
table_name,
regular_columns,
partition_key_columns,
clustering_key_columns,
billing_mode,
point_in_time_recovery_enabled,
client_side_timestamps_enabled,
tags,
default_time_to_live,
encryption_specification,
auto_scaling_specifications,
cdc_specification,
replica_specifications
FROM awscc.cassandra.tables
WHERE region = 'us-east-1' AND data__Identifier = '<KeyspaceName>|<TableName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>table</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cassandra.tables (
 KeyspaceName,
 PartitionKeyColumns,
 region
)
SELECT 
'{{ KeyspaceName }}',
 '{{ PartitionKeyColumns }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cassandra.tables (
 KeyspaceName,
 TableName,
 RegularColumns,
 PartitionKeyColumns,
 ClusteringKeyColumns,
 BillingMode,
 PointInTimeRecoveryEnabled,
 ClientSideTimestampsEnabled,
 Tags,
 DefaultTimeToLive,
 EncryptionSpecification,
 AutoScalingSpecifications,
 CdcSpecification,
 ReplicaSpecifications,
 region
)
SELECT 
 '{{ KeyspaceName }}',
 '{{ TableName }}',
 '{{ RegularColumns }}',
 '{{ PartitionKeyColumns }}',
 '{{ ClusteringKeyColumns }}',
 '{{ BillingMode }}',
 '{{ PointInTimeRecoveryEnabled }}',
 '{{ ClientSideTimestampsEnabled }}',
 '{{ Tags }}',
 '{{ DefaultTimeToLive }}',
 '{{ EncryptionSpecification }}',
 '{{ AutoScalingSpecifications }}',
 '{{ CdcSpecification }}',
 '{{ ReplicaSpecifications }}',
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
  - name: table
    props:
      - name: KeyspaceName
        value: '{{ KeyspaceName }}'
      - name: TableName
        value: '{{ TableName }}'
      - name: RegularColumns
        value:
          - ColumnName: '{{ ColumnName }}'
            ColumnType: '{{ ColumnType }}'
      - name: PartitionKeyColumns
        value:
          - null
      - name: ClusteringKeyColumns
        value:
          - Column: null
            OrderBy: '{{ OrderBy }}'
      - name: BillingMode
        value:
          Mode: '{{ Mode }}'
          ProvisionedThroughput:
            ReadCapacityUnits: '{{ ReadCapacityUnits }}'
            WriteCapacityUnits: '{{ WriteCapacityUnits }}'
      - name: PointInTimeRecoveryEnabled
        value: '{{ PointInTimeRecoveryEnabled }}'
      - name: ClientSideTimestampsEnabled
        value: '{{ ClientSideTimestampsEnabled }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: DefaultTimeToLive
        value: '{{ DefaultTimeToLive }}'
      - name: EncryptionSpecification
        value:
          EncryptionType: '{{ EncryptionType }}'
          KmsKeyIdentifier: '{{ KmsKeyIdentifier }}'
      - name: AutoScalingSpecifications
        value:
          WriteCapacityAutoScaling:
            AutoScalingDisabled: '{{ AutoScalingDisabled }}'
            MinimumUnits: '{{ MinimumUnits }}'
            MaximumUnits: '{{ MaximumUnits }}'
            ScalingPolicy:
              TargetTrackingScalingPolicyConfiguration:
                DisableScaleIn: '{{ DisableScaleIn }}'
                ScaleInCooldown: '{{ ScaleInCooldown }}'
                ScaleOutCooldown: '{{ ScaleOutCooldown }}'
                TargetValue: '{{ TargetValue }}'
          ReadCapacityAutoScaling: null
      - name: CdcSpecification
        value:
          Status: '{{ Status }}'
          ViewType: '{{ ViewType }}'
          Tags:
            - null
      - name: ReplicaSpecifications
        value:
          - Region: '{{ Region }}'
            ReadCapacityUnits: '{{ ReadCapacityUnits }}'
            ReadCapacityAutoScaling: null

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cassandra.tables
WHERE data__Identifier = '<KeyspaceName|TableName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>tables</code> resource, the following permissions are required:

### Create
```json
cassandra:Create,
cassandra:CreateMultiRegionResource,
cassandra:Select,
cassandra:SelectMultiRegionResource,
cassandra:TagResource,
cassandra:TagMultiRegionResource,
kms:CreateGrant,
kms:DescribeKey,
kms:Encrypt,
kms:Decrypt,
application-autoscaling:DescribeScalableTargets,
application-autoscaling:DescribeScalingPolicies,
application-autoscaling:DeregisterScalableTarget,
application-autoscaling:RegisterScalableTarget,
application-autoscaling:PutScalingPolicy,
cloudwatch:DeleteAlarms,
cloudwatch:DescribeAlarms,
cloudwatch:GetMetricData,
cloudwatch:PutMetricAlarm,
iam:CreateServiceLinkedRole
```

### Read
```json
cassandra:Select,
cassandra:SelectMultiRegionResource,
application-autoscaling:DescribeScalableTargets,
application-autoscaling:DescribeScalingPolicies,
application-autoscaling:DeregisterScalableTarget,
application-autoscaling:RegisterScalableTarget,
application-autoscaling:PutScalingPolicy,
cloudwatch:DeleteAlarms,
cloudwatch:DescribeAlarms,
cloudwatch:GetMetricData,
cloudwatch:PutMetricAlarm
```

### Update
```json
cassandra:Alter,
cassandra:AlterMultiRegionResource,
cassandra:Select,
cassandra:SelectMultiRegionResource,
cassandra:TagResource,
cassandra:TagMultiRegionResource,
cassandra:UntagResource,
cassandra:UntagMultiRegionResource,
kms:CreateGrant,
kms:DescribeKey,
kms:Encrypt,
kms:Decrypt,
application-autoscaling:DescribeScalableTargets,
application-autoscaling:DescribeScalingPolicies,
application-autoscaling:DeregisterScalableTarget,
application-autoscaling:RegisterScalableTarget,
application-autoscaling:PutScalingPolicy,
cloudwatch:DeleteAlarms,
cloudwatch:DescribeAlarms,
cloudwatch:GetMetricData,
cloudwatch:PutMetricAlarm,
iam:CreateServiceLinkedRole
```

### Delete
```json
cassandra:Drop,
cassandra:DropMultiRegionResource,
cassandra:Select,
cassandra:SelectMultiRegionResource,
application-autoscaling:DescribeScalableTargets,
application-autoscaling:DescribeScalingPolicies,
application-autoscaling:DeregisterScalableTarget,
application-autoscaling:RegisterScalableTarget,
application-autoscaling:PutScalingPolicy,
cloudwatch:DeleteAlarms,
cloudwatch:DescribeAlarms,
cloudwatch:GetMetricData,
cloudwatch:PutMetricAlarm
```

### List
```json
cassandra:Select,
cassandra:SelectMultiRegionResource,
application-autoscaling:DescribeScalableTargets,
application-autoscaling:DescribeScalingPolicies,
application-autoscaling:DeregisterScalableTarget,
application-autoscaling:RegisterScalableTarget,
application-autoscaling:PutScalingPolicy,
cloudwatch:DeleteAlarms,
cloudwatch:DescribeAlarms,
cloudwatch:GetMetricData,
cloudwatch:PutMetricAlarm
```
