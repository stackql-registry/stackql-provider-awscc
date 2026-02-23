---
title: flow_logs
hide_title: false
hide_table_of_contents: false
keywords:
  - flow_logs
  - ec2
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

Creates, updates, deletes or gets a <code>flow_log</code> resource or lists <code>flow_logs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>flow_logs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Specifies a VPC flow log, which enables you to capture IP traffic for a specific network interface, subnet, or VPC.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.flow_logs" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": "The Flow Log ID"
  },
  {
    "name": "deliver_cross_account_role",
    "type": "string",
    "description": "The ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts."
  },
  {
    "name": "deliver_logs_permission_arn",
    "type": "string",
    "description": "The ARN for the IAM role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group in your account. If you specify LogDestinationType as s3 or kinesis-data-firehose, do not specify DeliverLogsPermissionArn or LogGroupName."
  },
  {
    "name": "log_destination",
    "type": "string",
    "description": "Specifies the destination to which the flow log data is to be published. Flow log data can be published to a CloudWatch Logs log group, an Amazon S3 bucket, or a Kinesis Firehose stream. The value specified for this parameter depends on the value specified for LogDestinationType."
  },
  {
    "name": "log_destination_type",
    "type": "string",
    "description": "Specifies the type of destination to which the flow log data is to be published. Flow log data can be published to CloudWatch Logs or Amazon S3."
  },
  {
    "name": "log_format",
    "type": "string",
    "description": "The fields to include in the flow log record, in the order in which they should appear."
  },
  {
    "name": "log_group_name",
    "type": "string",
    "description": "The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs. If you specify LogDestinationType as s3 or kinesis-data-firehose, do not specify DeliverLogsPermissionArn or LogGroupName."
  },
  {
    "name": "max_aggregation_interval",
    "type": "integer",
    "description": "The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record. You can specify 60 seconds (1 minute) or 600 seconds (10 minutes)."
  },
  {
    "name": "resource_id",
    "type": "string",
    "description": "The ID of the subnet, network interface, or VPC for which you want to create a flow log."
  },
  {
    "name": "resource_type",
    "type": "string",
    "description": "The type of resource for which to create the flow log. For example, if you specified a VPC ID for the ResourceId property, specify VPC for this property."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags to apply to the flow logs.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The tag key."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The tag value."
      }
    ]
  },
  {
    "name": "traffic_type",
    "type": "string",
    "description": "The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic."
  },
  {
    "name": "destination_options",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "file_format",
        "type": "string",
        "description": ""
      },
      {
        "name": "hive_compatible_partitions",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "per_hour_partition",
        "type": "boolean",
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
    "name": "id",
    "type": "string",
    "description": "The Flow Log ID"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html"><code>AWS::EC2::FlowLog</code></a>.

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
    <td><code>flow_logs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ResourceType, ResourceId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>flow_logs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>flow_logs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>flow_logs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>flow_logs</code></td>
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

Gets all properties from an individual <code>flow_log</code>.
```sql
SELECT
region,
id,
deliver_cross_account_role,
deliver_logs_permission_arn,
log_destination,
log_destination_type,
log_format,
log_group_name,
max_aggregation_interval,
resource_id,
resource_type,
tags,
traffic_type,
destination_options
FROM awscc.ec2.flow_logs
WHERE region = 'us-east-1' AND Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>flow_logs</code> in a region.
```sql
SELECT
region,
id
FROM awscc.ec2.flow_logs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>flow_log</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.flow_logs (
 ResourceId,
 ResourceType,
 region
)
SELECT
'{{ resource_id }}',
 '{{ resource_type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.flow_logs (
 DeliverCrossAccountRole,
 DeliverLogsPermissionArn,
 LogDestination,
 LogDestinationType,
 LogFormat,
 LogGroupName,
 MaxAggregationInterval,
 ResourceId,
 ResourceType,
 Tags,
 TrafficType,
 DestinationOptions,
 region
)
SELECT
 '{{ deliver_cross_account_role }}',
 '{{ deliver_logs_permission_arn }}',
 '{{ log_destination }}',
 '{{ log_destination_type }}',
 '{{ log_format }}',
 '{{ log_group_name }}',
 '{{ max_aggregation_interval }}',
 '{{ resource_id }}',
 '{{ resource_type }}',
 '{{ tags }}',
 '{{ traffic_type }}',
 '{{ destination_options }}',
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
  - name: flow_log
    props:
      - name: deliver_cross_account_role
        value: '{{ deliver_cross_account_role }}'
      - name: deliver_logs_permission_arn
        value: '{{ deliver_logs_permission_arn }}'
      - name: log_destination
        value: '{{ log_destination }}'
      - name: log_destination_type
        value: '{{ log_destination_type }}'
      - name: log_format
        value: '{{ log_format }}'
      - name: log_group_name
        value: '{{ log_group_name }}'
      - name: max_aggregation_interval
        value: '{{ max_aggregation_interval }}'
      - name: resource_id
        value: '{{ resource_id }}'
      - name: resource_type
        value: '{{ resource_type }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: traffic_type
        value: '{{ traffic_type }}'
      - name: destination_options
        value:
          file_format: '{{ file_format }}'
          hive_compatible_partitions: '{{ hive_compatible_partitions }}'
          per_hour_partition: '{{ per_hour_partition }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>flow_log</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.flow_logs
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.flow_logs
WHERE Identifier = '{{ id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>flow_logs</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
ec2:CreateFlowLogs,
ec2:DescribeFlowLogs,
ec2:CreateTags,
iam:PassRole,
logs:CreateLogDelivery,
s3:GetBucketPolicy,
s3:PutBucketPolicy
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeFlowLogs
```

</TabItem>
<TabItem value="update">

```json
ec2:CreateTags,
ec2:DeleteTags,
ec2:DescribeFlowLogs
```

</TabItem>
<TabItem value="delete">

```json
ec2:DeleteFlowLogs,
ec2:DescribeFlowLogs,
logs:DeleteLogDelivery
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeFlowLogs
```

</TabItem>
</Tabs>