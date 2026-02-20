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
WHERE region = 'us-east-1' AND Identifier = '<InstanceArn>|<AssociationId>|<ResourceType>';
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
WHERE region = 'us-east-1';
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
'{{ InstanceArn }}',
 '{{ ResourceType }}',
 '{{ StorageType }}',
'{{ region }}';
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
 '{{ InstanceArn }}',
 '{{ ResourceType }}',
 '{{ StorageType }}',
 '{{ S3Config }}',
 '{{ KinesisVideoStreamConfig }}',
 '{{ KinesisStreamConfig }}',
 '{{ KinesisFirehoseConfig }}',
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
  - name: instance_storage_config
    props:
      - name: InstanceArn
        value: '{{ InstanceArn }}'
      - name: ResourceType
        value: '{{ ResourceType }}'
      - name: StorageType
        value: '{{ StorageType }}'
      - name: S3Config
        value:
          BucketName: '{{ BucketName }}'
          BucketPrefix: '{{ BucketPrefix }}'
          EncryptionConfig:
            EncryptionType: '{{ EncryptionType }}'
            KeyId: '{{ KeyId }}'
      - name: KinesisVideoStreamConfig
        value:
          Prefix: null
          RetentionPeriodHours: null
          EncryptionConfig: null
      - name: KinesisStreamConfig
        value:
          StreamArn: '{{ StreamArn }}'
      - name: KinesisFirehoseConfig
        value:
          FirehoseArn: '{{ FirehoseArn }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

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
WHERE region = '{{ region }}'
AND Identifier = '<InstanceArn>|<AssociationId>|<ResourceType>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connect.instance_storage_configs
WHERE Identifier = '<InstanceArn|AssociationId|ResourceType>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>instance_storage_configs</code> resource, the following permissions are required:

### Create
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

### Read
```json
connect:DescribeInstanceStorageConfig,
connect:ListInstanceStorageConfigs,
connect:DescribeInstance,
ds:DescribeDirectories,
s3:GetBucketAcl,
s3:GetBucketLocation
```

### Update
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

### Delete
```json
connect:DisassociateInstanceStorageConfig,
connect:DescribeInstance,
s3:GetBucketAcl,
s3:GetBucketLocation,
kms:RetireGrant
```

### List
```json
connect:DescribeInstance,
connect:ListInstanceStorageConfigs,
ds:DescribeDirectories
```
