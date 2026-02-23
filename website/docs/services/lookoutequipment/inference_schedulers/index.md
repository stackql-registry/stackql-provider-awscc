---
title: inference_schedulers
hide_title: false
hide_table_of_contents: false
keywords:
  - inference_schedulers
  - lookoutequipment
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

Creates, updates, deletes or gets an <code>inference_scheduler</code> resource or lists <code>inference_schedulers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>inference_schedulers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for LookoutEquipment InferenceScheduler.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lookoutequipment.inference_schedulers" /></td></tr>
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
    "name": "data_delay_offset_in_minutes",
    "type": "integer",
    "description": "A period of time (in minutes) by which inference on the data is delayed after the data starts."
  },
  {
    "name": "data_input_configuration",
    "type": "object",
    "description": "Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location.",
    "children": [
      {
        "name": "input_time_zone_offset",
        "type": "string",
        "description": "Indicates the difference between your time zone and Greenwich Mean Time (GMT)."
      },
      {
        "name": "inference_input_name_configuration",
        "type": "object",
        "description": "Specifies configuration information for the input data for the inference, including timestamp format and delimiter.",
        "children": [
          {
            "name": "component_timestamp_delimiter",
            "type": "string",
            "description": "Indicates the delimiter character used between items in the data."
          },
          {
            "name": "timestamp_format",
            "type": "string",
            "description": "The format of the timestamp, whether Epoch time, or standard, with or without hyphens (-)."
          }
        ]
      },
      {
        "name": "s3_input_configuration",
        "type": "object",
        "description": "Specifies configuration information for the input data for the inference, including input data S3 location.",
        "children": [
          {
            "name": "bucket",
            "type": "string",
            "description": ""
          },
          {
            "name": "prefix",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "data_output_configuration",
    "type": "object",
    "description": "Specifies configuration information for the output results for the inference scheduler, including the S3 location for the output.",
    "children": [
      {
        "name": "kms_key_id",
        "type": "string",
        "description": "The ID number for the AWS KMS key used to encrypt the inference output."
      },
      {
        "name": "s3_output_configuration",
        "type": "object",
        "description": "Specifies configuration information for the output results from the inference, including output S3 location.",
        "children": [
          {
            "name": "bucket",
            "type": "string",
            "description": ""
          },
          {
            "name": "prefix",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "data_upload_frequency",
    "type": "string",
    "description": "How often data is uploaded to the source S3 bucket for the input data."
  },
  {
    "name": "inference_scheduler_name",
    "type": "string",
    "description": "The name of the inference scheduler being created."
  },
  {
    "name": "model_name",
    "type": "string",
    "description": "The name of the previously trained ML model being used to create the inference scheduler."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of a role with permission to access the data source being used for the inference."
  },
  {
    "name": "server_side_kms_key_id",
    "type": "string",
    "description": "Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt inference scheduler data by Amazon Lookout for Equipment."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Any tags associated with the inference scheduler.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key for the specified tag."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the specified tag."
      }
    ]
  },
  {
    "name": "inference_scheduler_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the inference scheduler being created."
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
    "name": "inference_scheduler_name",
    "type": "string",
    "description": "The name of the inference scheduler being created."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutequipment-inferencescheduler.html"><code>AWS::LookoutEquipment::InferenceScheduler</code></a>.

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
    <td><code>inference_schedulers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DataInputConfiguration, DataOutputConfiguration, DataUploadFrequency, ModelName, RoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>inference_schedulers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>inference_schedulers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>inference_schedulers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>inference_schedulers</code></td>
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

Gets all properties from an individual <code>inference_scheduler</code>.
```sql
SELECT
region,
data_delay_offset_in_minutes,
data_input_configuration,
data_output_configuration,
data_upload_frequency,
inference_scheduler_name,
model_name,
role_arn,
server_side_kms_key_id,
tags,
inference_scheduler_arn
FROM awscc.lookoutequipment.inference_schedulers
WHERE region = 'us-east-1' AND Identifier = '{{ inference_scheduler_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>inference_schedulers</code> in a region.
```sql
SELECT
region,
inference_scheduler_name
FROM awscc.lookoutequipment.inference_schedulers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>inference_scheduler</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.lookoutequipment.inference_schedulers (
 DataInputConfiguration,
 DataOutputConfiguration,
 DataUploadFrequency,
 ModelName,
 RoleArn,
 region
)
SELECT
'{{ data_input_configuration }}',
 '{{ data_output_configuration }}',
 '{{ data_upload_frequency }}',
 '{{ model_name }}',
 '{{ role_arn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.lookoutequipment.inference_schedulers (
 DataDelayOffsetInMinutes,
 DataInputConfiguration,
 DataOutputConfiguration,
 DataUploadFrequency,
 InferenceSchedulerName,
 ModelName,
 RoleArn,
 ServerSideKmsKeyId,
 Tags,
 region
)
SELECT
 '{{ data_delay_offset_in_minutes }}',
 '{{ data_input_configuration }}',
 '{{ data_output_configuration }}',
 '{{ data_upload_frequency }}',
 '{{ inference_scheduler_name }}',
 '{{ model_name }}',
 '{{ role_arn }}',
 '{{ server_side_kms_key_id }}',
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
  - name: inference_scheduler
    props:
      - name: data_delay_offset_in_minutes
        value: '{{ data_delay_offset_in_minutes }}'
      - name: data_input_configuration
        value:
          input_time_zone_offset: '{{ input_time_zone_offset }}'
          inference_input_name_configuration:
            component_timestamp_delimiter: '{{ component_timestamp_delimiter }}'
            timestamp_format: '{{ timestamp_format }}'
          s3_input_configuration:
            bucket: '{{ bucket }}'
            prefix: '{{ prefix }}'
      - name: data_output_configuration
        value:
          kms_key_id: '{{ kms_key_id }}'
          s3_output_configuration:
            bucket: null
            prefix: null
      - name: data_upload_frequency
        value: '{{ data_upload_frequency }}'
      - name: inference_scheduler_name
        value: '{{ inference_scheduler_name }}'
      - name: model_name
        value: '{{ model_name }}'
      - name: role_arn
        value: '{{ role_arn }}'
      - name: server_side_kms_key_id
        value: '{{ server_side_kms_key_id }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>inference_scheduler</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.lookoutequipment.inference_schedulers
SET PatchDocument = string('{{ {
    "DataDelayOffsetInMinutes": data_delay_offset_in_minutes,
    "DataInputConfiguration": data_input_configuration,
    "DataOutputConfiguration": data_output_configuration,
    "DataUploadFrequency": data_upload_frequency,
    "RoleArn": role_arn,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ inference_scheduler_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lookoutequipment.inference_schedulers
WHERE Identifier = '{{ inference_scheduler_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>inference_schedulers</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
iam:PassRole,
lookoutequipment:CreateInferenceScheduler,
lookoutequipment:DescribeInferenceScheduler
```

</TabItem>
<TabItem value="read">

```json
lookoutequipment:DescribeInferenceScheduler
```

</TabItem>
<TabItem value="delete">

```json
lookoutequipment:DeleteInferenceScheduler,
lookoutequipment:StopInferenceScheduler,
lookoutequipment:DescribeInferenceScheduler
```

</TabItem>
<TabItem value="update">

```json
lookoutequipment:UpdateInferenceScheduler,
lookoutequipment:DescribeInferenceScheduler,
lookoutequipment:StopInferenceScheduler,
lookoutequipment:StartInferenceScheduler
```

</TabItem>
<TabItem value="list">

```json
lookoutequipment:ListInferenceSchedulers
```

</TabItem>
</Tabs>