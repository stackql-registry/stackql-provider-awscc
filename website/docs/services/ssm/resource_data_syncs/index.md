---
title: resource_data_syncs
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_data_syncs
  - ssm
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

Creates, updates, deletes or gets a <code>resource_data_sync</code> resource or lists <code>resource_data_syncs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>resource_data_syncs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SSM::ResourceDataSync</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ssm.resource_data_syncs" /></td></tr>
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
    "name": "s3_destination",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "kms_key_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "bucket_prefix",
        "type": "string",
        "description": ""
      },
      {
        "name": "bucket_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "bucket_region",
        "type": "string",
        "description": ""
      },
      {
        "name": "sync_format",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "kms_key_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "sync_source",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "include_future_regions",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "source_regions",
        "type": "array",
        "description": ""
      },
      {
        "name": "source_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "aws_organizations_source",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "organizational_units",
            "type": "array",
            "description": ""
          },
          {
            "name": "organization_source_type",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "bucket_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "bucket_region",
    "type": "string",
    "description": ""
  },
  {
    "name": "sync_format",
    "type": "string",
    "description": ""
  },
  {
    "name": "sync_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "sync_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "bucket_prefix",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "sync_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcedatasync.html"><code>AWS::SSM::ResourceDataSync</code></a>.

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
    <td><code>resource_data_syncs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="SyncName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>resource_data_syncs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>resource_data_syncs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>resource_data_syncs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>resource_data_syncs</code></td>
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

Gets all properties from an individual <code>resource_data_sync</code>.
```sql
SELECT
region,
s3_destination,
kms_key_arn,
sync_source,
bucket_name,
bucket_region,
sync_format,
sync_name,
sync_type,
bucket_prefix
FROM awscc.ssm.resource_data_syncs
WHERE region = 'us-east-1' AND Identifier = '{{ sync_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>resource_data_syncs</code> in a region.
```sql
SELECT
region,
sync_name
FROM awscc.ssm.resource_data_syncs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>resource_data_sync</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ssm.resource_data_syncs (
 SyncName,
 region
)
SELECT
'{{ sync_name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ssm.resource_data_syncs (
 S3Destination,
 KMSKeyArn,
 SyncSource,
 BucketName,
 BucketRegion,
 SyncFormat,
 SyncName,
 SyncType,
 BucketPrefix,
 region
)
SELECT
 '{{ s3_destination }}',
 '{{ kms_key_arn }}',
 '{{ sync_source }}',
 '{{ bucket_name }}',
 '{{ bucket_region }}',
 '{{ sync_format }}',
 '{{ sync_name }}',
 '{{ sync_type }}',
 '{{ bucket_prefix }}',
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
  - name: resource_data_sync
    props:
      - name: s3_destination
        value:
          kms_key_arn: '{{ kms_key_arn }}'
          bucket_prefix: '{{ bucket_prefix }}'
          bucket_name: '{{ bucket_name }}'
          bucket_region: '{{ bucket_region }}'
          sync_format: '{{ sync_format }}'
      - name: kms_key_arn
        value: '{{ kms_key_arn }}'
      - name: sync_source
        value:
          include_future_regions: '{{ include_future_regions }}'
          source_regions:
            - '{{ source_regions[0] }}'
          source_type: '{{ source_type }}'
          aws_organizations_source:
            organizational_units:
              - '{{ organizational_units[0] }}'
            organization_source_type: '{{ organization_source_type }}'
      - name: bucket_name
        value: '{{ bucket_name }}'
      - name: bucket_region
        value: '{{ bucket_region }}'
      - name: sync_format
        value: '{{ sync_format }}'
      - name: sync_name
        value: '{{ sync_name }}'
      - name: sync_type
        value: '{{ sync_type }}'
      - name: bucket_prefix
        value: '{{ bucket_prefix }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>resource_data_sync</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ssm.resource_data_syncs
SET PatchDocument = string('{{ {
    "SyncSource": sync_source
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ sync_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ssm.resource_data_syncs
WHERE Identifier = '{{ sync_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>resource_data_syncs</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
      { label: 'Read', value: 'read', },
    ]
}>
<TabItem value="create">

```json
ssm:CreateResourceDataSync,
ssm:ListResourceDataSync
```

</TabItem>
<TabItem value="delete">

```json
ssm:ListResourceDataSync,
ssm:DeleteResourceDataSync
```

</TabItem>
<TabItem value="update">

```json
ssm:ListResourceDataSync,
ssm:UpdateResourceDataSync
```

</TabItem>
<TabItem value="list">

```json
ssm:ListResourceDataSync
```

</TabItem>
<TabItem value="read">

```json
ssm:ListResourceDataSync
```

</TabItem>
</Tabs>