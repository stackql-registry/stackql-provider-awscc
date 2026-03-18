---
title: realtime_log_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - realtime_log_configs
  - cloudfront
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

Creates, updates, deletes or gets a <code>realtime_log_config</code> resource or lists <code>realtime_log_configs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>realtime_log_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A real-time log configuration.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudfront.realtime_log_configs" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "end_points",
    "type": "array",
    "description": "Contains information about the Amazon Kinesis data stream where you are sending real-time log data for this real-time log configuration.",
    "children": [
      {
        "name": "kinesis_stream_config",
        "type": "object",
        "description": "Contains information about the Amazon Kinesis data stream where you are sending real-time log data in a real-time log configuration.",
        "children": [
          {
            "name": "role_arn",
            "type": "string",
            "description": "<details><summary>The Amazon Resource Name (ARN) of an IAMlong (IAM) role that CloudFront can use to send real-time log data to your Kinesis data stream.</summary>For more information the IAM role, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-iam-role\">Real-time log configuration IAM role</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
          },
          {
            "name": "stream_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the Kinesis data stream where you are sending real-time log data."
          }
        ]
      },
      {
        "name": "stream_type",
        "type": "string",
        "description": "The type of data stream where you are sending real-time log data. The only valid value is <code>Kinesis</code>."
      }
    ]
  },
  {
    "name": "fields",
    "type": "array",
    "description": "<details><summary>A list of fields that are included in each real-time log record. In an API response, the fields are provided in the same order in which they are sent to the Amazon Kinesis data stream.</summary>For more information about fields, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields\">Real-time log configuration fields</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
  },
  {
    "name": "name",
    "type": "string",
    "description": "The unique name of this real-time log configuration."
  },
  {
    "name": "sampling_rate",
    "type": "number",
    "description": "The sampling rate for this real-time log configuration. The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. The sampling rate is an integer between 1 and 100, inclusive."
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
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-realtimelogconfig.html"><code>AWS::CloudFront::RealtimeLogConfig</code></a>.

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
    <td><code>realtime_log_configs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, EndPoints, Fields, SamplingRate, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>realtime_log_configs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>realtime_log_configs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>realtime_log_configs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>realtime_log_configs</code></td>
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

Gets all properties from an individual <code>realtime_log_config</code>.
```sql
SELECT
  region,
  arn,
  end_points,
  fields,
  name,
  sampling_rate
FROM awscc.cloudfront.realtime_log_configs
WHERE
  region = 'us-east-1' AND
  Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>realtime_log_configs</code> in a region.
```sql
SELECT
  region,
  arn
FROM awscc.cloudfront.realtime_log_configs_list_only
WHERE
  region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>realtime_log_config</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudfront.realtime_log_configs (
  EndPoints,
  Fields,
  Name,
  SamplingRate,
  region
)
SELECT
  '{{ end_points }}',
  '{{ fields }}',
  '{{ name }}',
  '{{ sampling_rate }}',
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
INSERT INTO awscc.cloudfront.realtime_log_configs (
  EndPoints,
  Fields,
  Name,
  SamplingRate,
  region
)
SELECT
  '{{ end_points }}',
  '{{ fields }}',
  '{{ name }}',
  '{{ sampling_rate }}',
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
  - name: realtime_log_config
    props:
      - name: end_points
        value:
          - kinesis_stream_config:
              role_arn: '{{ role_arn }}'
              stream_arn: '{{ stream_arn }}'
            stream_type: '{{ stream_type }}'
      - name: fields
        value:
          - '{{ fields[0] }}'
      - name: name
        value: '{{ name }}'
      - name: sampling_rate
        value: null
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>realtime_log_config</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cloudfront.realtime_log_configs
SET PatchDocument = string('{{ {
    "EndPoints": end_points,
    "Fields": fields,
    "SamplingRate": sampling_rate
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ arn }}'
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
DELETE FROM awscc.cloudfront.realtime_log_configs
WHERE
  Identifier = '{{ arn }}' AND
  region = 'us-east-1'
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

To operate on the <code>realtime_log_configs</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
cloudfront:CreateRealtimeLogConfig,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
cloudfront:DeleteRealtimeLogConfig,
cloudfront:GetRealtimeLogConfig
```

</TabItem>
<TabItem value="list">

```json
cloudfront:ListRealtimeLogConfigs
```

</TabItem>
<TabItem value="read">

```json
cloudfront:GetRealtimeLogConfig
```

</TabItem>
<TabItem value="update">

```json
cloudfront:UpdateRealtimeLogConfig,
cloudfront:GetRealtimeLogConfig,
iam:PassRole
```

</TabItem>
</Tabs>