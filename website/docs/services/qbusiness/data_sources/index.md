---
title: data_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - data_sources
  - qbusiness
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

Creates, updates, deletes or gets a <code>data_source</code> resource or lists <code>data_sources</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>data_sources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::QBusiness::DataSource Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.qbusiness.data_sources" /></td></tr>
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
    "name": "application_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "configuration",
    "type": "object",
    "description": ""
  },
  {
    "name": "created_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "data_source_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "data_source_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "display_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "document_enrichment_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "inline_configurations",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "condition",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "key",
                "type": "string",
                "description": ""
              },
              {
                "name": "operator",
                "type": "string",
                "description": ""
              },
              {
                "name": "value",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "target",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "key",
                "type": "string",
                "description": ""
              },
              {
                "name": "value",
                "type": "object",
                "description": ""
              },
              {
                "name": "attribute_value_operator",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "document_content_operator",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "pre_extraction_hook_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "invocation_condition",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "key",
                "type": "string",
                "description": ""
              },
              {
                "name": "operator",
                "type": "string",
                "description": ""
              },
              {
                "name": "value",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "lambda_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "s3_bucket_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "media_extraction_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "image_extraction_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "image_extraction_status",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "audio_extraction_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "audio_extraction_status",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "video_extraction_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "video_extraction_status",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "index_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "sync_schedule",
    "type": "string",
    "description": ""
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
    "name": "type",
    "type": "string",
    "description": ""
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "vpc_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "subnet_ids",
        "type": "array",
        "description": ""
      },
      {
        "name": "security_group_ids",
        "type": "array",
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
    "name": "application_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "data_source_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "index_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html"><code>AWS::QBusiness::DataSource</code></a>.

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
    <td><code>data_sources</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ApplicationId, IndexId, Configuration, DisplayName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>data_sources</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>data_sources</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>data_sources_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>data_sources</code></td>
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

Gets all properties from an individual <code>data_source</code>.
```sql
SELECT
region,
application_id,
configuration,
created_at,
data_source_arn,
data_source_id,
description,
display_name,
document_enrichment_configuration,
media_extraction_configuration,
index_id,
role_arn,
status,
sync_schedule,
tags,
type,
updated_at,
vpc_configuration
FROM awscc.qbusiness.data_sources
WHERE region = 'us-east-1' AND Identifier = '{{ application_id }}|{{ data_source_id }}|{{ index_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>data_sources</code> in a region.
```sql
SELECT
region,
application_id,
data_source_id,
index_id
FROM awscc.qbusiness.data_sources_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>data_source</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.qbusiness.data_sources (
 ApplicationId,
 Configuration,
 DisplayName,
 IndexId,
 region
)
SELECT
'{{ application_id }}',
 '{{ configuration }}',
 '{{ display_name }}',
 '{{ index_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.qbusiness.data_sources (
 ApplicationId,
 Configuration,
 Description,
 DisplayName,
 DocumentEnrichmentConfiguration,
 MediaExtractionConfiguration,
 IndexId,
 RoleArn,
 SyncSchedule,
 Tags,
 VpcConfiguration,
 region
)
SELECT
 '{{ application_id }}',
 '{{ configuration }}',
 '{{ description }}',
 '{{ display_name }}',
 '{{ document_enrichment_configuration }}',
 '{{ media_extraction_configuration }}',
 '{{ index_id }}',
 '{{ role_arn }}',
 '{{ sync_schedule }}',
 '{{ tags }}',
 '{{ vpc_configuration }}',
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
  - name: data_source
    props:
      - name: application_id
        value: '{{ application_id }}'
      - name: configuration
        value: null
      - name: description
        value: '{{ description }}'
      - name: display_name
        value: '{{ display_name }}'
      - name: document_enrichment_configuration
        value:
          inline_configurations:
            - condition:
                key: '{{ key }}'
                operator: '{{ operator }}'
                value: null
              target:
                key: '{{ key }}'
                value: null
                attribute_value_operator: '{{ attribute_value_operator }}'
              document_content_operator: '{{ document_content_operator }}'
          pre_extraction_hook_configuration:
            invocation_condition: null
            lambda_arn: '{{ lambda_arn }}'
            s3_bucket_name: '{{ s3_bucket_name }}'
            role_arn: '{{ role_arn }}'
          post_extraction_hook_configuration: null
      - name: media_extraction_configuration
        value:
          image_extraction_configuration:
            image_extraction_status: '{{ image_extraction_status }}'
          audio_extraction_configuration:
            audio_extraction_status: '{{ audio_extraction_status }}'
          video_extraction_configuration:
            video_extraction_status: '{{ video_extraction_status }}'
      - name: index_id
        value: '{{ index_id }}'
      - name: role_arn
        value: '{{ role_arn }}'
      - name: sync_schedule
        value: '{{ sync_schedule }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: vpc_configuration
        value:
          subnet_ids:
            - '{{ subnet_ids[0] }}'
          security_group_ids:
            - '{{ security_group_ids[0] }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>data_source</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.qbusiness.data_sources
SET PatchDocument = string('{{ {
    "Configuration": configuration,
    "Description": description,
    "DisplayName": display_name,
    "DocumentEnrichmentConfiguration": document_enrichment_configuration,
    "MediaExtractionConfiguration": media_extraction_configuration,
    "RoleArn": role_arn,
    "SyncSchedule": sync_schedule,
    "Tags": tags,
    "VpcConfiguration": vpc_configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ application_id }}|{{ data_source_id }}|{{ index_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.qbusiness.data_sources
WHERE Identifier = '{{ application_id }}|{{ data_source_id }}|{{ index_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>data_sources</code> resource, the following permissions are required:

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
iam:PassRole,
qbusiness:CreateDataSource,
qbusiness:GetDataSource,
qbusiness:ListTagsForResource,
qbusiness:TagResource
```

</TabItem>
<TabItem value="read">

```json
qbusiness:GetDataSource,
qbusiness:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
iam:PassRole,
qbusiness:GetDataSource,
qbusiness:ListTagsForResource,
qbusiness:TagResource,
qbusiness:UntagResource,
qbusiness:UpdateDataSource
```

</TabItem>
<TabItem value="delete">

```json
qbusiness:DeleteDataSource,
qbusiness:GetDataSource
```

</TabItem>
<TabItem value="list">

```json
qbusiness:ListDataSources
```

</TabItem>
</Tabs>