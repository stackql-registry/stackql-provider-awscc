---
title: log_delivery_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - log_delivery_configurations
  - cognito
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

Creates, updates, deletes or gets a <code>log_delivery_configuration</code> resource or lists <code>log_delivery_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>log_delivery_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Cognito::LogDeliveryConfiguration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cognito.log_delivery_configurations" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "user_pool_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "log_configurations",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "log_level",
        "type": "string",
        "description": ""
      },
      {
        "name": "event_source",
        "type": "string",
        "description": ""
      },
      {
        "name": "cloud_watch_logs_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "log_group_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "s3_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "bucket_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "firehose_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "stream_arn",
            "type": "string",
            "description": ""
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html"><code>AWS::Cognito::LogDeliveryConfiguration</code></a>.

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
    <td><CopyableCode code="UserPoolId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>log_delivery_configuration</code>.
```sql
SELECT
  region,
  id,
  user_pool_id,
  log_configurations
FROM awscc.cognito.log_delivery_configurations
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id }}';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>log_delivery_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cognito.log_delivery_configurations (
  UserPoolId,
  region
)
SELECT
  '{{ user_pool_id }}',
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
INSERT INTO awscc.cognito.log_delivery_configurations (
  UserPoolId,
  LogConfigurations,
  region
)
SELECT
  '{{ user_pool_id }}',
  '{{ log_configurations }}',
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
  - name: log_delivery_configuration
    props:
      - name: user_pool_id
        value: '{{ user_pool_id }}'
      - name: log_configurations
        value:
          - log_level: '{{ log_level }}'
            event_source: '{{ event_source }}'
            cloud_watch_logs_configuration:
              log_group_arn: '{{ log_group_arn }}'
            s3_configuration:
              bucket_arn: '{{ bucket_arn }}'
            firehose_configuration:
              stream_arn: '{{ stream_arn }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>log_delivery_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cognito.log_delivery_configurations
SET PatchDocument = string('{{ {
    "LogConfigurations": log_configurations
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id }}'
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
DELETE FROM awscc.cognito.log_delivery_configurations
WHERE
  Identifier = '{{ id }}' AND
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

To operate on the <code>log_delivery_configurations</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="create">

```json
cognito-idp:GetLogDeliveryConfiguration,
cognito-idp:SetLogDeliveryConfiguration,
logs:CreateLogDelivery,
logs:GetLogDelivery,
logs:UpdateLogDelivery,
logs:DeleteLogDelivery,
logs:ListLogDeliveries,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups,
s3:GetBucketPolicy,
s3:PutBucketPolicy,
s3:ListBucket,
s3:PutObject,
s3:GetBucketAcl,
firehose:TagDeliveryStream,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="read">

```json
cognito-idp:GetLogDeliveryConfiguration
```

</TabItem>
<TabItem value="update">

```json
cognito-idp:GetLogDeliveryConfiguration,
cognito-idp:SetLogDeliveryConfiguration,
logs:CreateLogDelivery,
logs:GetLogDelivery,
logs:UpdateLogDelivery,
logs:DeleteLogDelivery,
logs:ListLogDeliveries,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups,
s3:GetBucketPolicy,
s3:PutBucketPolicy,
s3:ListBucket,
s3:PutObject,
s3:GetBucketAcl,
firehose:TagDeliveryStream,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="delete">

```json
cognito-idp:GetLogDeliveryConfiguration,
cognito-idp:SetLogDeliveryConfiguration,
logs:CreateLogDelivery,
logs:GetLogDelivery,
logs:UpdateLogDelivery,
logs:DeleteLogDelivery,
logs:ListLogDeliveries,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups,
s3:GetBucketPolicy,
s3:PutBucketPolicy,
s3:ListBucket,
s3:PutObject,
s3:GetBucketAcl,
firehose:TagDeliveryStream,
iam:CreateServiceLinkedRole
```

</TabItem>
</Tabs>