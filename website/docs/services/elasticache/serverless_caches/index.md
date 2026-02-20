---
title: serverless_caches
hide_title: false
hide_table_of_contents: false
keywords:
  - serverless_caches
  - elasticache
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

Creates, updates, deletes or gets a <code>serverless_cach</code> resource or lists <code>serverless_caches</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>serverless_caches</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::ElastiCache::ServerlessCache resource creates an Amazon ElastiCache Serverless Cache.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.elasticache.serverless_caches" /></td></tr>
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
    "name": "serverless_cache_name",
    "type": "string",
    "description": "The name of the Serverless Cache. This value must be unique."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the Serverless Cache."
  },
  {
    "name": "engine",
    "type": "string",
    "description": "The engine name of the Serverless Cache."
  },
  {
    "name": "major_engine_version",
    "type": "string",
    "description": "The major engine version of the Serverless Cache."
  },
  {
    "name": "full_engine_version",
    "type": "string",
    "description": "The full engine version of the Serverless Cache."
  },
  {
    "name": "cache_usage_limits",
    "type": "object",
    "description": "The cache capacity limit of the Serverless Cache.",
    "children": [
      {
        "name": "data_storage",
        "type": "object",
        "description": "The cached data capacity of the Serverless Cache.",
        "children": [
          {
            "name": "minimum",
            "type": "integer",
            "description": "The minimum cached data capacity of the Serverless Cache."
          },
          {
            "name": "maximum",
            "type": "integer",
            "description": "The maximum cached data capacity of the Serverless Cache."
          },
          {
            "name": "unit",
            "type": "string",
            "description": "The unit of cached data capacity of the Serverless Cache."
          }
        ]
      },
      {
        "name": "e_cp_uper_second",
        "type": "object",
        "description": "The ECPU per second of the Serverless Cache.",
        "children": [
          {
            "name": "minimum",
            "type": "integer",
            "description": "The minimum ECPU per second of the Serverless Cache."
          },
          {
            "name": "maximum",
            "type": "integer",
            "description": "The maximum ECPU per second of the Serverless Cache."
          }
        ]
      }
    ]
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "The ID of the KMS key used to encrypt the cluster."
  },
  {
    "name": "security_group_ids",
    "type": "array",
    "description": "One or more Amazon VPC security groups associated with this Serverless Cache."
  },
  {
    "name": "snapshot_arns_to_restore",
    "type": "array",
    "description": "The ARN's of snapshot to restore Serverless Cache."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this Serverless Cache.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with 'aws:'. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "user_group_id",
    "type": "string",
    "description": "The ID of the user group."
  },
  {
    "name": "subnet_ids",
    "type": "array",
    "description": "The subnet id's of the Serverless Cache."
  },
  {
    "name": "snapshot_retention_limit",
    "type": "integer",
    "description": "The snapshot retention limit of the Serverless Cache."
  },
  {
    "name": "daily_snapshot_time",
    "type": "string",
    "description": "The daily time range (in UTC) during which the service takes automatic snapshot of the Serverless Cache."
  },
  {
    "name": "create_time",
    "type": "string",
    "description": "The creation time of the Serverless Cache."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the Serverless Cache."
  },
  {
    "name": "endpoint",
    "type": "object",
    "description": "The address and the port.",
    "children": [
      {
        "name": "address",
        "type": "string",
        "description": "Endpoint address."
      },
      {
        "name": "port",
        "type": "string",
        "description": "Endpoint port."
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The ARN of the Serverless Cache."
  },
  {
    "name": "final_snapshot_name",
    "type": "string",
    "description": "The final snapshot name which is taken before Serverless Cache is deleted."
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
    "name": "serverless_cache_name",
    "type": "string",
    "description": "The name of the Serverless Cache. This value must be unique."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-serverlesscach.html"><code>AWS::ElastiCache::ServerlessCache</code></a>.

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
    <td><code>serverless_caches</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ServerlessCacheName, Engine, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>serverless_caches</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>serverless_caches</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>serverless_caches_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>serverless_caches</code></td>
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

Gets all properties from an individual <code>serverless_cach</code>.
```sql
SELECT
region,
serverless_cache_name,
description,
engine,
major_engine_version,
full_engine_version,
cache_usage_limits,
kms_key_id,
security_group_ids,
snapshot_arns_to_restore,
tags,
user_group_id,
subnet_ids,
snapshot_retention_limit,
daily_snapshot_time,
create_time,
status,
endpoint,
reader_endpoint,
arn,
final_snapshot_name
FROM awscc.elasticache.serverless_caches
WHERE region = 'us-east-1' AND data__Identifier = '<ServerlessCacheName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>serverless_caches</code> in a region.
```sql
SELECT
region,
serverless_cache_name
FROM awscc.elasticache.serverless_caches_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>serverless_cach</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.elasticache.serverless_caches (
 ServerlessCacheName,
 Engine,
 region
)
SELECT 
'{{ ServerlessCacheName }}',
 '{{ Engine }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.elasticache.serverless_caches (
 ServerlessCacheName,
 Description,
 Engine,
 MajorEngineVersion,
 CacheUsageLimits,
 KmsKeyId,
 SecurityGroupIds,
 SnapshotArnsToRestore,
 Tags,
 UserGroupId,
 SubnetIds,
 SnapshotRetentionLimit,
 DailySnapshotTime,
 Endpoint,
 ReaderEndpoint,
 FinalSnapshotName,
 region
)
SELECT 
 '{{ ServerlessCacheName }}',
 '{{ Description }}',
 '{{ Engine }}',
 '{{ MajorEngineVersion }}',
 '{{ CacheUsageLimits }}',
 '{{ KmsKeyId }}',
 '{{ SecurityGroupIds }}',
 '{{ SnapshotArnsToRestore }}',
 '{{ Tags }}',
 '{{ UserGroupId }}',
 '{{ SubnetIds }}',
 '{{ SnapshotRetentionLimit }}',
 '{{ DailySnapshotTime }}',
 '{{ Endpoint }}',
 '{{ ReaderEndpoint }}',
 '{{ FinalSnapshotName }}',
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
  - name: serverless_cach
    props:
      - name: ServerlessCacheName
        value: '{{ ServerlessCacheName }}'
      - name: Description
        value: '{{ Description }}'
      - name: Engine
        value: '{{ Engine }}'
      - name: MajorEngineVersion
        value: '{{ MajorEngineVersion }}'
      - name: CacheUsageLimits
        value:
          DataStorage:
            Minimum: '{{ Minimum }}'
            Maximum: '{{ Maximum }}'
            Unit: '{{ Unit }}'
          ECPUPerSecond:
            Minimum: '{{ Minimum }}'
            Maximum: '{{ Maximum }}'
      - name: KmsKeyId
        value: '{{ KmsKeyId }}'
      - name: SecurityGroupIds
        value:
          - '{{ SecurityGroupIds[0] }}'
      - name: SnapshotArnsToRestore
        value:
          - '{{ SnapshotArnsToRestore[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: UserGroupId
        value: '{{ UserGroupId }}'
      - name: SubnetIds
        value:
          - '{{ SubnetIds[0] }}'
      - name: SnapshotRetentionLimit
        value: '{{ SnapshotRetentionLimit }}'
      - name: DailySnapshotTime
        value: '{{ DailySnapshotTime }}'
      - name: Endpoint
        value:
          Address: '{{ Address }}'
          Port: '{{ Port }}'
      - name: ReaderEndpoint
        value: null
      - name: FinalSnapshotName
        value: '{{ FinalSnapshotName }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.elasticache.serverless_caches
SET data__PatchDocument = string('{{ {
    "Description": description,
    "Engine": engine,
    "MajorEngineVersion": major_engine_version,
    "CacheUsageLimits": cache_usage_limits,
    "SecurityGroupIds": security_group_ids,
    "Tags": tags,
    "UserGroupId": user_group_id,
    "SnapshotRetentionLimit": snapshot_retention_limit,
    "DailySnapshotTime": daily_snapshot_time,
    "FinalSnapshotName": final_snapshot_name
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ServerlessCacheName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.elasticache.serverless_caches
WHERE data__Identifier = '<ServerlessCacheName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>serverless_caches</code> resource, the following permissions are required:

### Create
```json
elasticache:CreateServerlessCache,
elasticache:DescribeServerlessCaches,
elasticache:AddTagsToResource,
elasticache:ListTagsForResource,
ec2:CreateTags,
ec2:CreateVpcEndpoint,
kms:CreateGrant,
kms:DescribeKey
```

### Read
```json
elasticache:DescribeServerlessCaches,
elasticache:ListTagsForResource
```

### Update
```json
elasticache:ModifyServerlessCache,
elasticache:DescribeServerlessCaches,
elasticache:AddTagsToResource,
elasticache:ListTagsForResource,
elasticache:RemoveTagsFromResource
```

### Delete
```json
elasticache:DeleteServerlessCache,
elasticache:DescribeServerlessCaches,
elasticache:ListTagsForResource
```

### List
```json
elasticache:DescribeServerlessCaches,
elasticache:ListTagsForResource
```
