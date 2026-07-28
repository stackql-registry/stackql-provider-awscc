---
title: datastores
hide_title: false
hide_table_of_contents: false
keywords:
  - datastores
  - iotanalytics
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

Creates, updates, deletes or gets a <code>datastore</code> resource or lists <code>datastores</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>datastores</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::IoTAnalytics::Datastore</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotanalytics.datastores" /></td></tr>
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
    "name": "datastore_storage",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "service_managed_s3",
        "type": "object",
        "description": ""
      },
      {
        "name": "customer_managed_s3",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "bucket",
            "type": "string",
            "description": ""
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "key_prefix",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "iot_site_wise_multi_layer_storage",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "customer_managed_s3_storage",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "bucket",
                "type": "string",
                "description": ""
              },
              {
                "name": "key_prefix",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "datastore_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "datastore_partitions",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "partitions",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "partition",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "attribute_name",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "timestamp_partition",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "attribute_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "timestamp_format",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "file_format_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "json_configuration",
        "type": "object",
        "description": ""
      },
      {
        "name": "parquet_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "schema_definition",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "columns",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "retention_period",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "number_of_days",
        "type": "integer",
        "description": ""
      },
      {
        "name": "unlimited",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "datastore_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html"><code>AWS::IoTAnalytics::Datastore</code></a>.

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
    <td><code>datastores</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>datastores</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>datastores</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>datastores_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>datastores</code></td>
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

Gets all properties from an individual <code>datastore</code>.
```sql
SELECT
  region,
  datastore_storage,
  datastore_name,
  datastore_partitions,
  id,
  file_format_configuration,
  retention_period,
  tags
FROM awscc.iotanalytics.datastores
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ datastore_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>datastores</code> in a region.
```sql
SELECT
  region,
  datastore_name
FROM awscc.iotanalytics.datastores_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>datastore</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotanalytics.datastores (
  DatastoreStorage,
  DatastoreName,
  DatastorePartitions,
  FileFormatConfiguration,
  RetentionPeriod,
  Tags,
  region
)
SELECT
  '{{ datastore_storage }}',
  '{{ datastore_name }}',
  '{{ datastore_partitions }}',
  '{{ file_format_configuration }}',
  '{{ retention_period }}',
  '{{ tags }}',
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
INSERT INTO awscc.iotanalytics.datastores (
  DatastoreStorage,
  DatastoreName,
  DatastorePartitions,
  FileFormatConfiguration,
  RetentionPeriod,
  Tags,
  region
)
SELECT
  '{{ datastore_storage }}',
  '{{ datastore_name }}',
  '{{ datastore_partitions }}',
  '{{ file_format_configuration }}',
  '{{ retention_period }}',
  '{{ tags }}',
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
  - name: datastore
    props:
      - name: datastore_storage
        value:
          service_managed_s3: {}
          customer_managed_s3:
            bucket: '{{ bucket }}'
            role_arn: '{{ role_arn }}'
            key_prefix: '{{ key_prefix }}'
          iot_site_wise_multi_layer_storage:
            customer_managed_s3_storage:
              bucket: '{{ bucket }}'
              key_prefix: '{{ key_prefix }}'
      - name: datastore_name
        value: '{{ datastore_name }}'
      - name: datastore_partitions
        value:
          partitions:
            - partition:
                attribute_name: '{{ attribute_name }}'
              timestamp_partition:
                attribute_name: '{{ attribute_name }}'
                timestamp_format: '{{ timestamp_format }}'
      - name: file_format_configuration
        value:
          json_configuration: {}
          parquet_configuration:
            schema_definition:
              columns:
                - type: '{{ type }}'
                  name: '{{ name }}'
      - name: retention_period
        value:
          number_of_days: '{{ number_of_days }}'
          unlimited: '{{ unlimited }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>datastore</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iotanalytics.datastores
SET PatchDocument = string('{{ {
    "DatastoreStorage": datastore_storage,
    "DatastorePartitions": datastore_partitions,
    "FileFormatConfiguration": file_format_configuration,
    "RetentionPeriod": retention_period,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ datastore_name }}'
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
DELETE FROM awscc.iotanalytics.datastores
WHERE
  Identifier = '{{ datastore_name }}' AND
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

To operate on the <code>datastores</code> resource, the following permissions are required:

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
iotanalytics:CreateDatastore
```

</TabItem>
<TabItem value="read">

```json
iotanalytics:DescribeDatastore,
iotanalytics:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
iotanalytics:UpdateDatastore,
iotanalytics:TagResource,
iotanalytics:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
iotanalytics:DeleteDatastore
```

</TabItem>
<TabItem value="list">

```json
iotanalytics:ListDatastores
```

</TabItem>
</Tabs>