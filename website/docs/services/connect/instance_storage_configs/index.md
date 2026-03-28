---
title: instance_storage_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_storage_configs
  - connect
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

Creates, updates, deletes or gets an <code>instance_storage_config</code> resource or lists <code>instance_storage_configs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>instance_storage_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Connect::InstanceStorageConfig</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.instance_storage_configs" /></td></tr>
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
    "name": "instance_arn",
    "type": "string",
    "description": "Connect Instance ID with which the storage config will be associated"
  },
  {
    "name": "resource_type",
    "type": "string",
    "description": "Specifies the type of storage resource available for the instance"
  },
  {
    "name": "association_id",
    "type": "string",
    "description": "An associationID is automatically generated when a storage config is associated with an instance"
  },
  {
    "name": "storage_type",
    "type": "string",
    "description": "Specifies the storage type to be associated with the instance"
  },
  {
    "name": "s3_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "bucket_name",
        "type": "string",
        "description": "A name for the S3 Bucket"
      },
      {
        "name": "bucket_prefix",
        "type": "string",
        "description": "Prefixes are used to infer logical hierarchy"
      },
      {
        "name": "encryption_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "encryption_type",
            "type": "string",
            "description": "Specifies default encryption using AWS KMS-Managed Keys"
          },
          {
            "name": "key_id",
            "type": "string",
            "description": "Specifies the encryption key id"
          }
        ]
      }
    ]
  },
  {
    "name": "kinesis_video_stream_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "prefix",
        "type": "string",
        "description": "Prefixes are used to infer logical hierarchy"
      },
      {
        "name": "retention_period_hours",
        "type": "number",
        "description": "Number of hours"
      },
      {
        "name": "encryption_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "encryption_type",
            "type": "string",
            "description": "Specifies default encryption using AWS KMS-Managed Keys"
          },
          {
            "name": "key_id",
            "type": "string",
            "description": "Specifies the encryption key id"
          }
        ]
      }
    ]
  },
  {
    "name": "kinesis_stream_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "stream_arn",
        "type": "string",
        "description": "An ARN is a unique AWS resource identifier."
      }
    ]
  },
  {
    "name": "kinesis_firehose_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "firehose_arn",
        "type": "string",
        "description": "An ARN is a unique AWS resource identifier."
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
    "name": "instance_arn",
    "type": "string",
    "description": "Connect Instance ID with which the storage config will be associated"
  },
  {
    "name": "resource_type",
    "type": "string",
    "description": "Specifies the type of storage resource available for the instance"
  },
  {
    "name": "association_id",
    "type": "string",
    "description": "An associationID is automatically generated when a storage config is associated with an instance"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html"><code>AWS::Connect::InstanceStorageConfig</code></a>.

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
    <td><code>instance_storage_configs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="InstanceArn, ResourceType, StorageType, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>instance_storage_configs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>instance_storage_configs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>instance_storage_configs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>instance_storage_configs</code></td>
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

Gets all properties from an individual <code>instance_storage_config</code>.
```sql
SELECT
  region,
  instance_arn,
  resource_type,
  association_id,
  storage_type,
  s3_config,
  kinesis_video_stream_config,
  kinesis_stream_config,
  kinesis_firehose_config
FROM awscc.connect.instance_storage_configs
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ instance_arn }}|{{ association_id }}|{{ resource_type }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>instance_storage_configs</code> in a region.
```sql
SELECT
  region,
  instance_arn,
  association_id,
  resource_type
FROM awscc.connect.instance_storage_configs_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>instance_storage_config</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.connect.instance_storage_configs (
  InstanceArn,
  ResourceType,
  StorageType,
  region
)
SELECT
  '{{ instance_arn }}',
  '{{ resource_type }}',
  '{{ storage_type }}',
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
INSERT INTO awscc.connect.instance_storage_configs (
  InstanceArn,
  ResourceType,
  StorageType,
  S3Config,
  KinesisVideoStreamConfig,
  KinesisStreamConfig,
  KinesisFirehoseConfig,
  region
)
SELECT
  '{{ instance_arn }}',
  '{{ resource_type }}',
  '{{ storage_type }}',
  '{{ s3_config }}',
  '{{ kinesis_video_stream_config }}',
  '{{ kinesis_stream_config }}',
  '{{ kinesis_firehose_config }}',
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
  - name: instance_storage_config
    props:
      - name: instance_arn
        value: '{{ instance_arn }}'
      - name: resource_type
        value: '{{ resource_type }}'
      - name: storage_type
        value: '{{ storage_type }}'
      - name: s3_config
        value:
          bucket_name: '{{ bucket_name }}'
          bucket_prefix: '{{ bucket_prefix }}'
          encryption_config:
            encryption_type: '{{ encryption_type }}'
            key_id: '{{ key_id }}'
      - name: kinesis_video_stream_config
        value:
          prefix: null
          retention_period_hours: null
          encryption_config: null
      - name: kinesis_stream_config
        value:
          stream_arn: '{{ stream_arn }}'
      - name: kinesis_firehose_config
        value:
          firehose_arn: '{{ firehose_arn }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>instance_storage_config</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.connect.instance_storage_configs
SET PatchDocument = string('{{ {
    "StorageType": storage_type,
    "S3Config": s3_config,
    "KinesisVideoStreamConfig": kinesis_video_stream_config,
    "KinesisStreamConfig": kinesis_stream_config,
    "KinesisFirehoseConfig": kinesis_firehose_config
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ instance_arn }}|{{ association_id }}|{{ resource_type }}'
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
DELETE FROM awscc.connect.instance_storage_configs
WHERE
  Identifier = '{{ instance_arn }}|{{ association_id }}|{{ resource_type }}' AND
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

To operate on the <code>instance_storage_configs</code> resource, the following permissions are required:

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
connect:AssociateInstanceStorageConfig,
connect:DescribeInstance,
ds:DescribeDirectories,
s3:GetBucketAcl,
s3:GetBucketLocation,
iam:PutRolePolicy,
kinesis:DescribeStream,
kms:DescribeKey,
kms:CreateGrant,
firehose:DescribeDeliveryStream
```

</TabItem>
<TabItem value="read">

```json
connect:DescribeInstanceStorageConfig,
connect:ListInstanceStorageConfigs,
connect:DescribeInstance,
ds:DescribeDirectories,
s3:GetBucketAcl,
s3:GetBucketLocation
```

</TabItem>
<TabItem value="update">

```json
connect:UpdateInstanceStorageConfig,
ds:DescribeDirectories,
s3:GetBucketAcl,
s3:GetBucketLocation,
kinesis:DescribeStream,
iam:PutRolePolicy,
kms:DescribeKey,
kms:CreateGrant,
kms:RetireGrant,
firehose:DescribeDeliveryStream
```

</TabItem>
<TabItem value="delete">

```json
connect:DisassociateInstanceStorageConfig,
connect:DescribeInstance,
s3:GetBucketAcl,
s3:GetBucketLocation,
kms:RetireGrant
```

</TabItem>
<TabItem value="list">

```json
connect:DescribeInstance,
connect:ListInstanceStorageConfigs,
ds:DescribeDirectories
```

</TabItem>
</Tabs>