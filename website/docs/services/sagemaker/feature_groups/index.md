---
title: feature_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - feature_groups
  - sagemaker
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

Creates, updates, deletes or gets a <code>feature_group</code> resource or lists <code>feature_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>feature_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SageMaker::FeatureGroup</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sagemaker.feature_groups" /></td></tr>
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
    "name": "feature_group_name",
    "type": "string",
    "description": "The Name of the FeatureGroup."
  },
  {
    "name": "record_identifier_feature_name",
    "type": "string",
    "description": "The Record Identifier Feature Name."
  },
  {
    "name": "event_time_feature_name",
    "type": "string",
    "description": "The Event Time Feature Name."
  },
  {
    "name": "feature_definitions",
    "type": "array",
    "description": "An Array of Feature Definition",
    "children": [
      {
        "name": "feature_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "feature_type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "online_store_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "security_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "kms_key_id",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "enable_online_store",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "storage_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "ttl_duration",
        "type": "object",
        "description": "TTL configuration of the feature group",
        "children": [
          {
            "name": "unit",
            "type": "string",
            "description": "Unit of ttl configuration"
          },
          {
            "name": "value",
            "type": "integer",
            "description": "Value of ttl configuration"
          }
        ]
      }
    ]
  },
  {
    "name": "offline_store_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "s3_storage_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "s3_uri",
            "type": "string",
            "description": ""
          },
          {
            "name": "kms_key_id",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "disable_glue_table_creation",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "data_catalog_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "table_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "catalog",
            "type": "string",
            "description": ""
          },
          {
            "name": "database",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "table_format",
        "type": "string",
        "description": "Format for the offline store feature group. Iceberg is the optimal format for feature groups shared between offline and online stores."
      }
    ]
  },
  {
    "name": "throughput_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "throughput_mode",
        "type": "string",
        "description": "Throughput mode configuration of the feature group"
      },
      {
        "name": "provisioned_read_capacity_units",
        "type": "integer",
        "description": "For provisioned feature groups with online store enabled, this indicates the read throughput you are billed for and can consume without throttling."
      },
      {
        "name": "provisioned_write_capacity_units",
        "type": "integer",
        "description": "For provisioned feature groups, this indicates the write throughput you are billed for and can consume without throttling."
      }
    ]
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "Role Arn"
  },
  {
    "name": "description",
    "type": "string",
    "description": "Description about the FeatureGroup."
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "A timestamp of FeatureGroup creation time."
  },
  {
    "name": "feature_group_status",
    "type": "string",
    "description": "The status of the feature group."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pair to apply to this resource.",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "feature_group_name",
    "type": "string",
    "description": "The Name of the FeatureGroup."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html"><code>AWS::SageMaker::FeatureGroup</code></a>.

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
    <td><code>feature_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="FeatureGroupName, RecordIdentifierFeatureName, EventTimeFeatureName, FeatureDefinitions, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>feature_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>feature_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>feature_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>feature_groups</code></td>
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

Gets all properties from an individual <code>feature_group</code>.
```sql
SELECT
region,
feature_group_name,
record_identifier_feature_name,
event_time_feature_name,
feature_definitions,
online_store_config,
offline_store_config,
throughput_config,
role_arn,
description,
creation_time,
feature_group_status,
tags
FROM awscc.sagemaker.feature_groups
WHERE region = 'us-east-1' AND Identifier = '{{ feature_group_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>feature_groups</code> in a region.
```sql
SELECT
region,
feature_group_name
FROM awscc.sagemaker.feature_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>feature_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sagemaker.feature_groups (
 FeatureGroupName,
 RecordIdentifierFeatureName,
 EventTimeFeatureName,
 FeatureDefinitions,
 region
)
SELECT
'{{ feature_group_name }}',
 '{{ record_identifier_feature_name }}',
 '{{ event_time_feature_name }}',
 '{{ feature_definitions }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.sagemaker.feature_groups (
 FeatureGroupName,
 RecordIdentifierFeatureName,
 EventTimeFeatureName,
 FeatureDefinitions,
 OnlineStoreConfig,
 OfflineStoreConfig,
 ThroughputConfig,
 RoleArn,
 Description,
 Tags,
 region
)
SELECT
 '{{ feature_group_name }}',
 '{{ record_identifier_feature_name }}',
 '{{ event_time_feature_name }}',
 '{{ feature_definitions }}',
 '{{ online_store_config }}',
 '{{ offline_store_config }}',
 '{{ throughput_config }}',
 '{{ role_arn }}',
 '{{ description }}',
 '{{ tags }}',
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
  - name: feature_group
    props:
      - name: feature_group_name
        value: '{{ feature_group_name }}'
      - name: record_identifier_feature_name
        value: '{{ record_identifier_feature_name }}'
      - name: event_time_feature_name
        value: '{{ event_time_feature_name }}'
      - name: feature_definitions
        value:
          - feature_name: '{{ feature_name }}'
            feature_type: '{{ feature_type }}'
      - name: online_store_config
        value:
          security_config:
            kms_key_id: '{{ kms_key_id }}'
          enable_online_store: '{{ enable_online_store }}'
          storage_type: '{{ storage_type }}'
          ttl_duration:
            unit: '{{ unit }}'
            value: '{{ value }}'
      - name: offline_store_config
        value:
          s3_storage_config:
            s3_uri: '{{ s3_uri }}'
            kms_key_id: null
          disable_glue_table_creation: '{{ disable_glue_table_creation }}'
          data_catalog_config:
            table_name: '{{ table_name }}'
            catalog: '{{ catalog }}'
            database: '{{ database }}'
          table_format: '{{ table_format }}'
      - name: throughput_config
        value:
          throughput_mode: '{{ throughput_mode }}'
          provisioned_read_capacity_units: '{{ provisioned_read_capacity_units }}'
          provisioned_write_capacity_units: '{{ provisioned_write_capacity_units }}'
      - name: role_arn
        value: '{{ role_arn }}'
      - name: description
        value: '{{ description }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>feature_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.sagemaker.feature_groups
SET PatchDocument = string('{{ {
    "FeatureDefinitions": feature_definitions,
    "ThroughputConfig": throughput_config
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ feature_group_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sagemaker.feature_groups
WHERE Identifier = '{{ feature_group_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>feature_groups</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
iam:PassRole,
kms:CreateGrant,
kms:DescribeKey,
glue:CreateTable,
glue:GetTable,
glue:CreateDatabase,
glue:GetDatabase,
sagemaker:CreateFeatureGroup,
sagemaker:DescribeFeatureGroup,
sagemaker:AddTags,
sagemaker:ListTags
```

</TabItem>
<TabItem value="update">

```json
sagemaker:UpdateFeatureGroup,
sagemaker:DescribeFeatureGroup,
sagemaker:AddTags,
sagemaker:ListTags,
sagemaker:DeleteTags
```

</TabItem>
<TabItem value="read">

```json
sagemaker:DescribeFeatureGroup,
sagemaker:ListTags
```

</TabItem>
<TabItem value="delete">

```json
sagemaker:DeleteFeatureGroup,
sagemaker:DescribeFeatureGroup
```

</TabItem>
<TabItem value="list">

```json
sagemaker:ListFeatureGroups
```

</TabItem>
</Tabs>