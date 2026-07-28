---
title: global_tables
hide_title: false
hide_table_of_contents: false
keywords:
  - global_tables
  - dynamodb
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>global_table</code> resource or lists <code>global_tables</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>global_tables</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Version: None. Resource Type definition for AWS::DynamoDB::GlobalTable</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.dynamodb.global_tables" /></td></tr>
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
    "name": "multi_region_consistency",
    "type": "string",
    "description": ""
  },
  {
    "name": "table_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "sse_specification",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "sse_enabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "sse_type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "stream_specification",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "stream_view_type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "warm_throughput",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "read_units_per_second",
        "type": "integer",
        "description": ""
      },
      {
        "name": "write_units_per_second",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "replicas",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "sse_specification",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "kms_master_key_id",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "kinesis_stream_specification",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "approximate_creation_date_time_precision",
            "type": "string",
            "description": ""
          },
          {
            "name": "stream_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "contributor_insights_specification",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "mode",
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
        "name": "point_in_time_recovery_specification",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "point_in_time_recovery_enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "recovery_period_in_days",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "replica_stream_specification",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "resource_policy",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "policy_document",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "global_secondary_indexes",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "index_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "read_provisioned_throughput_settings",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "read_capacity_units",
                "type": "integer",
                "description": ""
              },
              {
                "name": "read_capacity_auto_scaling_settings",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "read_on_demand_throughput_settings",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "max_read_request_units",
                "type": "integer",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "region",
        "type": "string",
        "description": ""
      },
      {
        "name": "resource_policy",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "policy_document",
            "type": "object",
            "description": ""
          }
        ]
      },
      {
        "name": "read_provisioned_throughput_settings",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "read_capacity_units",
            "type": "integer",
            "description": ""
          },
          {
            "name": "read_capacity_auto_scaling_settings",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "min_capacity",
                "type": "integer",
                "description": ""
              },
              {
                "name": "seed_capacity",
                "type": "integer",
                "description": ""
              },
              {
                "name": "target_tracking_scaling_policy_configuration",
                "type": "object",
                "description": ""
              },
              {
                "name": "max_capacity",
                "type": "integer",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "table_class",
        "type": "string",
        "description": ""
      },
      {
        "name": "deletion_protection_enabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "tags",
        "type": "array",
        "description": "",
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
        "name": "read_on_demand_throughput_settings",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "max_read_request_units",
            "type": "integer",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "write_provisioned_throughput_settings",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "write_capacity_auto_scaling_settings",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "min_capacity",
            "type": "integer",
            "description": ""
          },
          {
            "name": "seed_capacity",
            "type": "integer",
            "description": ""
          },
          {
            "name": "target_tracking_scaling_policy_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "scale_out_cooldown",
                "type": "integer",
                "description": ""
              },
              {
                "name": "target_value",
                "type": "number",
                "description": ""
              },
              {
                "name": "disable_scale_in",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "scale_in_cooldown",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "max_capacity",
            "type": "integer",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "write_on_demand_throughput_settings",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "max_write_request_units",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "global_table_witnesses",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "region",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "table_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "attribute_definitions",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "attribute_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "attribute_name",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "billing_mode",
    "type": "string",
    "description": ""
  },
  {
    "name": "global_secondary_indexes",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "index_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "projection",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "non_key_attributes",
            "type": "array",
            "description": ""
          },
          {
            "name": "projection_type",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "key_schema",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "key_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "attribute_name",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "key_schema",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "attribute_name",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "local_secondary_indexes",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "index_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "projection",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "non_key_attributes",
            "type": "array",
            "description": ""
          },
          {
            "name": "projection_type",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "key_schema",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "stream_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "time_to_live_specification",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "enabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "attribute_name",
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
    "name": "table_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html"><code>AWS::DynamoDB::GlobalTable</code></a>.

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
    <td><code>global_tables</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="KeySchema, AttributeDefinitions, Replicas, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>global_tables</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>global_tables</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>global_tables_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>global_tables</code></td>
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

Gets all properties from an individual <code>global_table</code>.
```sql
SELECT
  region,
  multi_region_consistency,
  table_id,
  sse_specification,
  stream_specification,
  warm_throughput,
  replicas,
  write_provisioned_throughput_settings,
  write_on_demand_throughput_settings,
  global_table_witnesses,
  table_name,
  attribute_definitions,
  billing_mode,
  global_secondary_indexes,
  key_schema,
  local_secondary_indexes,
  arn,
  stream_arn,
  time_to_live_specification
FROM awscc.dynamodb.global_tables
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ table_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>global_tables</code> in a region.
```sql
SELECT
  region,
  table_name
FROM awscc.dynamodb.global_tables_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>global_table</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.dynamodb.global_tables (
  Replicas,
  AttributeDefinitions,
  KeySchema,
  region
)
SELECT
  '{{ replicas }}',
  '{{ attribute_definitions }}',
  '{{ key_schema }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.dynamodb.global_tables (
  MultiRegionConsistency,
  SSESpecification,
  StreamSpecification,
  WarmThroughput,
  Replicas,
  WriteProvisionedThroughputSettings,
  WriteOnDemandThroughputSettings,
  GlobalTableWitnesses,
  TableName,
  AttributeDefinitions,
  BillingMode,
  GlobalSecondaryIndexes,
  KeySchema,
  LocalSecondaryIndexes,
  TimeToLiveSpecification,
  region
)
SELECT
  '{{ multi_region_consistency }}',
  '{{ sse_specification }}',
  '{{ stream_specification }}',
  '{{ warm_throughput }}',
  '{{ replicas }}',
  '{{ write_provisioned_throughput_settings }}',
  '{{ write_on_demand_throughput_settings }}',
  '{{ global_table_witnesses }}',
  '{{ table_name }}',
  '{{ attribute_definitions }}',
  '{{ billing_mode }}',
  '{{ global_secondary_indexes }}',
  '{{ key_schema }}',
  '{{ local_secondary_indexes }}',
  '{{ time_to_live_specification }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: global_table
    props:
      - name: multi_region_consistency
        value: '{{ multi_region_consistency }}'
      - name: sse_specification
        value:
          sse_enabled: '{{ sse_enabled }}'
          sse_type: '{{ sse_type }}'
      - name: stream_specification
        value:
          stream_view_type: '{{ stream_view_type }}'
      - name: warm_throughput
        value:
          read_units_per_second: '{{ read_units_per_second }}'
          write_units_per_second: '{{ write_units_per_second }}'
      - name: replicas
        value:
          - sse_specification:
              kms_master_key_id: '{{ kms_master_key_id }}'
            kinesis_stream_specification:
              approximate_creation_date_time_precision: '{{ approximate_creation_date_time_precision }}'
              stream_arn: '{{ stream_arn }}'
            contributor_insights_specification:
              mode: '{{ mode }}'
              enabled: '{{ enabled }}'
            point_in_time_recovery_specification:
              point_in_time_recovery_enabled: '{{ point_in_time_recovery_enabled }}'
              recovery_period_in_days: '{{ recovery_period_in_days }}'
            replica_stream_specification:
              resource_policy:
                policy_document: {}
            global_secondary_indexes:
              - index_name: '{{ index_name }}'
                contributor_insights_specification: null
                read_provisioned_throughput_settings:
                  read_capacity_units: '{{ read_capacity_units }}'
                  read_capacity_auto_scaling_settings:
                    min_capacity: '{{ min_capacity }}'
                    seed_capacity: '{{ seed_capacity }}'
                    target_tracking_scaling_policy_configuration:
                      scale_out_cooldown: '{{ scale_out_cooldown }}'
                      target_value: null
                      disable_scale_in: '{{ disable_scale_in }}'
                      scale_in_cooldown: '{{ scale_in_cooldown }}'
                    max_capacity: '{{ max_capacity }}'
                read_on_demand_throughput_settings:
                  max_read_request_units: '{{ max_read_request_units }}'
            region: '{{ region }}'
            resource_policy: null
            read_provisioned_throughput_settings: null
            table_class: '{{ table_class }}'
            deletion_protection_enabled: '{{ deletion_protection_enabled }}'
            tags:
              - value: '{{ value }}'
                key: '{{ key }}'
            read_on_demand_throughput_settings: null
      - name: write_provisioned_throughput_settings
        value:
          write_capacity_auto_scaling_settings: null
      - name: write_on_demand_throughput_settings
        value:
          max_write_request_units: '{{ max_write_request_units }}'
      - name: global_table_witnesses
        value:
          - region: '{{ region }}'
      - name: table_name
        value: '{{ table_name }}'
      - name: attribute_definitions
        value:
          - attribute_type: '{{ attribute_type }}'
            attribute_name: '{{ attribute_name }}'
      - name: billing_mode
        value: '{{ billing_mode }}'
      - name: global_secondary_indexes
        value:
          - index_name: '{{ index_name }}'
            projection:
              non_key_attributes:
                - '{{ non_key_attributes[0] }}'
              projection_type: '{{ projection_type }}'
            key_schema:
              - key_type: '{{ key_type }}'
                attribute_name: '{{ attribute_name }}'
            warm_throughput: null
            write_provisioned_throughput_settings: null
            write_on_demand_throughput_settings: null
      - name: key_schema
        value:
          - null
      - name: local_secondary_indexes
        value:
          - index_name: '{{ index_name }}'
            projection: null
            key_schema:
              - null
      - name: time_to_live_specification
        value:
          enabled: '{{ enabled }}'
          attribute_name: '{{ attribute_name }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>global_table</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.dynamodb.global_tables
SET PatchDocument = string('{{ {
    "MultiRegionConsistency": multi_region_consistency,
    "SSESpecification": sse_specification,
    "StreamSpecification": stream_specification,
    "WarmThroughput": warm_throughput,
    "Replicas": replicas,
    "WriteProvisionedThroughputSettings": write_provisioned_throughput_settings,
    "WriteOnDemandThroughputSettings": write_on_demand_throughput_settings,
    "GlobalTableWitnesses": global_table_witnesses,
    "AttributeDefinitions": attribute_definitions,
    "BillingMode": billing_mode,
    "GlobalSecondaryIndexes": global_secondary_indexes,
    "TimeToLiveSpecification": time_to_live_specification
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ table_name }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.dynamodb.global_tables
WHERE
  Identifier = '{{ table_name }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>global_tables</code> resource, the following permissions are required:

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
dynamodb:Describe*,
dynamodb:GetResourcePolicy,
application-autoscaling:Describe*,
cloudwatch:PutMetricData,
dynamodb:ListTagsOfResource,
kms:DescribeKey
```

</TabItem>
<TabItem value="create">

```json
dynamodb:CreateTable,
dynamodb:CreateTableReplica,
dynamodb:Describe*,
dynamodb:UpdateTimeToLive,
dynamodb:UpdateContributorInsights,
dynamodb:UpdateContinuousBackups,
dynamodb:ListTagsOfResource,
dynamodb:Query,
dynamodb:Scan,
dynamodb:UpdateItem,
dynamodb:PutItem,
dynamodb:GetItem,
dynamodb:DeleteItem,
dynamodb:BatchWriteItem,
dynamodb:TagResource,
dynamodb:EnableKinesisStreamingDestination,
dynamodb:DisableKinesisStreamingDestination,
dynamodb:UpdateTableReplicaAutoScaling,
dynamodb:TagResource,
dynamodb:GetResourcePolicy,
dynamodb:PutResourcePolicy,
application-autoscaling:DeleteScalingPolicy,
application-autoscaling:DeleteScheduledAction,
application-autoscaling:DeregisterScalableTarget,
application-autoscaling:Describe*,
application-autoscaling:PutScalingPolicy,
application-autoscaling:PutScheduledAction,
application-autoscaling:RegisterScalableTarget,
kinesis:ListStreams,
kinesis:DescribeStream,
kinesis:PutRecords,
kms:CreateGrant,
kms:DescribeKey,
kms:ListAliases,
kms:Decrypt,
kms:RevokeGrant,
cloudwatch:PutMetricData,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="update">

```json
dynamodb:Describe*,
dynamodb:CreateTableReplica,
dynamodb:UpdateTable,
dynamodb:UpdateTimeToLive,
dynamodb:UpdateContinuousBackups,
dynamodb:UpdateContributorInsights,
dynamodb:ListTagsOfResource,
dynamodb:Query,
dynamodb:Scan,
dynamodb:UpdateItem,
dynamodb:PutItem,
dynamodb:GetItem,
dynamodb:DeleteItem,
dynamodb:BatchWriteItem,
dynamodb:DeleteTable,
dynamodb:DeleteTableReplica,
dynamodb:UpdateItem,
dynamodb:TagResource,
dynamodb:UntagResource,
dynamodb:EnableKinesisStreamingDestination,
dynamodb:DisableKinesisStreamingDestination,
dynamodb:UpdateTableReplicaAutoScaling,
dynamodb:UpdateKinesisStreamingDestination,
dynamodb:GetResourcePolicy,
dynamodb:PutResourcePolicy,
dynamodb:DeleteResourcePolicy,
application-autoscaling:DeleteScalingPolicy,
application-autoscaling:DeleteScheduledAction,
application-autoscaling:DeregisterScalableTarget,
application-autoscaling:Describe*,
application-autoscaling:PutScalingPolicy,
application-autoscaling:PutScheduledAction,
application-autoscaling:RegisterScalableTarget,
kinesis:ListStreams,
kinesis:DescribeStream,
kinesis:PutRecords,
kms:CreateGrant,
kms:DescribeKey,
kms:ListAliases,
kms:RevokeGrant,
cloudwatch:PutMetricData
```

</TabItem>
<TabItem value="list">

```json
dynamodb:ListTables,
cloudwatch:PutMetricData
```

</TabItem>
<TabItem value="delete">

```json
dynamodb:Describe*,
dynamodb:DeleteTable,
application-autoscaling:DeleteScalingPolicy,
application-autoscaling:DeleteScheduledAction,
application-autoscaling:DeregisterScalableTarget,
application-autoscaling:Describe*,
application-autoscaling:PutScalingPolicy,
application-autoscaling:PutScheduledAction,
application-autoscaling:RegisterScalableTarget
```

</TabItem>
</Tabs>