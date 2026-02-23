---
title: pipelines
hide_title: false
hide_table_of_contents: false
keywords:
  - pipelines
  - osis
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

Creates, updates, deletes or gets a <code>pipeline</code> resource or lists <code>pipelines</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>pipelines</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An OpenSearch Ingestion Service Data Prepper pipeline running Data Prepper.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.osis.pipelines" /></td></tr>
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
    "name": "buffer_options",
    "type": "object",
    "description": "Key-value pairs to configure buffering.",
    "children": [
      {
        "name": "persistent_buffer_enabled",
        "type": "boolean",
        "description": "Whether persistent buffering should be enabled."
      }
    ]
  },
  {
    "name": "encryption_at_rest_options",
    "type": "object",
    "description": "Key-value pairs to configure encryption at rest.",
    "children": [
      {
        "name": "kms_key_arn",
        "type": "string",
        "description": "The KMS key to use for encrypting data. By default an AWS owned key is used"
      }
    ]
  },
  {
    "name": "log_publishing_options",
    "type": "object",
    "description": "Key-value pairs to configure log publishing.",
    "children": [
      {
        "name": "is_logging_enabled",
        "type": "boolean",
        "description": "Whether logs should be published."
      },
      {
        "name": "cloud_watch_log_destination",
        "type": "object",
        "description": "The destination for OpenSearch Ingestion Service logs sent to Amazon CloudWatch.",
        "children": [
          {
            "name": "log_group",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "max_units",
    "type": "integer",
    "description": "The maximum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs)."
  },
  {
    "name": "min_units",
    "type": "integer",
    "description": "The minimum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs)."
  },
  {
    "name": "pipeline_configuration_body",
    "type": "string",
    "description": "The Data Prepper pipeline configuration."
  },
  {
    "name": "pipeline_name",
    "type": "string",
    "description": "Name of the OpenSearch Ingestion Service pipeline to create. Pipeline names are unique across the pipelines owned by an account within an AWS Region."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "vpc_options",
    "type": "object",
    "description": "Container for the values required to configure VPC access for the pipeline. If you don't specify these values, OpenSearch Ingestion Service creates the pipeline with a public endpoint.",
    "children": [
      {
        "name": "security_group_ids",
        "type": "array",
        "description": "A list of security groups associated with the VPC endpoint."
      },
      {
        "name": "subnet_ids",
        "type": "array",
        "description": "A list of subnet IDs associated with the VPC endpoint."
      },
      {
        "name": "vpc_endpoint_management",
        "type": "string",
        "description": "Defines whether you or Amazon OpenSearch Ingestion service create and manage the VPC endpoint configured for the pipeline."
      },
      {
        "name": "vpc_attachment_options",
        "type": "object",
        "description": "Options for attaching a VPC to the pipeline.",
        "children": [
          {
            "name": "attach_to_vpc",
            "type": "boolean",
            "description": "Whether the pipeline should be attached to the provided VPC"
          },
          {
            "name": "cidr_block",
            "type": "string",
            "description": "The CIDR block to be reserved for OpenSearch Ingestion to create elastic network interfaces (ENIs)."
          }
        ]
      }
    ]
  },
  {
    "name": "vpc_endpoints",
    "type": "array",
    "description": "The VPC interface endpoints that have access to the pipeline.",
    "children": [
      {
        "name": "vpc_endpoint_id",
        "type": "string",
        "description": "The unique identifier of the endpoint."
      },
      {
        "name": "vpc_id",
        "type": "string",
        "description": "The ID for your VPC. AWS Privatelink generates this value when you create a VPC."
      }
    ]
  },
  {
    "name": "vpc_endpoint_service",
    "type": "string",
    "description": "The VPC endpoint service name for the pipeline."
  },
  {
    "name": "pipeline_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the pipeline."
  },
  {
    "name": "ingest_endpoint_urls",
    "type": "array",
    "description": "A list of endpoints that can be used for ingesting data into a pipeline"
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
    "name": "pipeline_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the pipeline."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html"><code>AWS::OSIS::Pipeline</code></a>.

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
    <td><code>pipelines</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="MaxUnits, MinUnits, PipelineConfigurationBody, PipelineName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>pipelines</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>pipelines</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>pipelines_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>pipelines</code></td>
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

Gets all properties from an individual <code>pipeline</code>.
```sql
SELECT
region,
buffer_options,
encryption_at_rest_options,
log_publishing_options,
max_units,
min_units,
pipeline_configuration_body,
pipeline_name,
tags,
vpc_options,
vpc_endpoints,
vpc_endpoint_service,
pipeline_arn,
ingest_endpoint_urls
FROM awscc.osis.pipelines
WHERE region = 'us-east-1' AND Identifier = '{{ pipeline_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>pipelines</code> in a region.
```sql
SELECT
region,
pipeline_arn
FROM awscc.osis.pipelines_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>pipeline</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.osis.pipelines (
 MaxUnits,
 MinUnits,
 PipelineConfigurationBody,
 PipelineName,
 region
)
SELECT
'{{ max_units }}',
 '{{ min_units }}',
 '{{ pipeline_configuration_body }}',
 '{{ pipeline_name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.osis.pipelines (
 BufferOptions,
 EncryptionAtRestOptions,
 LogPublishingOptions,
 MaxUnits,
 MinUnits,
 PipelineConfigurationBody,
 PipelineName,
 Tags,
 VpcOptions,
 region
)
SELECT
 '{{ buffer_options }}',
 '{{ encryption_at_rest_options }}',
 '{{ log_publishing_options }}',
 '{{ max_units }}',
 '{{ min_units }}',
 '{{ pipeline_configuration_body }}',
 '{{ pipeline_name }}',
 '{{ tags }}',
 '{{ vpc_options }}',
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
  - name: pipeline
    props:
      - name: buffer_options
        value:
          persistent_buffer_enabled: '{{ persistent_buffer_enabled }}'
      - name: encryption_at_rest_options
        value:
          kms_key_arn: '{{ kms_key_arn }}'
      - name: log_publishing_options
        value:
          is_logging_enabled: '{{ is_logging_enabled }}'
          cloud_watch_log_destination:
            log_group: '{{ log_group }}'
      - name: max_units
        value: '{{ max_units }}'
      - name: min_units
        value: '{{ min_units }}'
      - name: pipeline_configuration_body
        value: '{{ pipeline_configuration_body }}'
      - name: pipeline_name
        value: '{{ pipeline_name }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: vpc_options
        value:
          security_group_ids:
            - '{{ security_group_ids[0] }}'
          subnet_ids:
            - '{{ subnet_ids[0] }}'
          vpc_endpoint_management: '{{ vpc_endpoint_management }}'
          vpc_attachment_options:
            attach_to_vpc: '{{ attach_to_vpc }}'
            cidr_block: '{{ cidr_block }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>pipeline</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.osis.pipelines
SET PatchDocument = string('{{ {
    "BufferOptions": buffer_options,
    "EncryptionAtRestOptions": encryption_at_rest_options,
    "LogPublishingOptions": log_publishing_options,
    "MaxUnits": max_units,
    "MinUnits": min_units,
    "PipelineConfigurationBody": pipeline_configuration_body,
    "Tags": tags,
    "VpcOptions": vpc_options
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ pipeline_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.osis.pipelines
WHERE Identifier = '{{ pipeline_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>pipelines</code> resource, the following permissions are required:

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
osis:CreatePipeline,
osis:GetPipeline,
osis:TagResource,
osis:ListTagsForResource,
iam:PassRole,
iam:CreateServiceLinkedRole,
logs:CreateLogDelivery,
kms:DescribeKey
```

</TabItem>
<TabItem value="read">

```json
osis:GetPipeline,
osis:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
osis:UpdatePipeline,
osis:GetPipeline,
osis:ListTagsForResource,
osis:TagResource,
osis:UntagResource,
iam:PassRole,
logs:GetLogDelivery,
logs:UpdateLogDelivery,
logs:ListLogDeliveries,
kms:DescribeKey
```

</TabItem>
<TabItem value="delete">

```json
osis:DeletePipeline,
osis:GetPipeline,
logs:GetLogDelivery,
logs:DeleteLogDelivery,
logs:ListLogDeliveries
```

</TabItem>
<TabItem value="list">

```json
osis:ListPipelines
```

</TabItem>
</Tabs>