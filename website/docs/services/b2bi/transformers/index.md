---
title: transformers
hide_title: false
hide_table_of_contents: false
keywords:
  - transformers
  - b2bi
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

Creates, updates, deletes or gets a <code>transformer</code> resource or lists <code>transformers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>transformers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::B2BI::Transformer Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.b2bi.transformers" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "created_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "edi_type",
    "type": "object",
    "description": ""
  },
  {
    "name": "file_format",
    "type": "string",
    "description": ""
  },
  {
    "name": "input_conversion",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "from_format",
        "type": "string",
        "description": ""
      },
      {
        "name": "format_options",
        "type": "object",
        "description": ""
      },
      {
        "name": "advanced_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "x12",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "split_options",
                "type": "object",
                "description": ""
              },
              {
                "name": "validation_options",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "mapping",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "template_language",
        "type": "string",
        "description": ""
      },
      {
        "name": "template",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "mapping_template",
    "type": "string",
    "description": "This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion."
  },
  {
    "name": "modified_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "output_conversion",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "to_format",
        "type": "string",
        "description": ""
      },
      {
        "name": "format_options",
        "type": "object",
        "description": ""
      },
      {
        "name": "advanced_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "x12",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "split_options",
                "type": "object",
                "description": ""
              },
              {
                "name": "validation_options",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "sample_document",
    "type": "string",
    "description": "This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion."
  },
  {
    "name": "sample_documents",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "bucket_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "keys",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "input",
            "type": "string",
            "description": ""
          },
          {
            "name": "output",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "status",
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
    "name": "transformer_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "transformer_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html"><code>AWS::B2BI::Transformer</code></a>.

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
    <td><CopyableCode code="Name, Status, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>transformer</code>.
```sql
SELECT
region,
created_at,
edi_type,
file_format,
input_conversion,
mapping,
mapping_template,
modified_at,
name,
output_conversion,
sample_document,
sample_documents,
status,
tags,
transformer_arn,
transformer_id
FROM awscc.b2bi.transformers
WHERE region = 'us-east-1' AND data__Identifier = '<TransformerId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>transformer</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.b2bi.transformers (
 Name,
 Status,
 region
)
SELECT 
'{{ Name }}',
 '{{ Status }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.b2bi.transformers (
 EdiType,
 FileFormat,
 InputConversion,
 Mapping,
 MappingTemplate,
 Name,
 OutputConversion,
 SampleDocument,
 SampleDocuments,
 Status,
 Tags,
 region
)
SELECT 
 '{{ EdiType }}',
 '{{ FileFormat }}',
 '{{ InputConversion }}',
 '{{ Mapping }}',
 '{{ MappingTemplate }}',
 '{{ Name }}',
 '{{ OutputConversion }}',
 '{{ SampleDocument }}',
 '{{ SampleDocuments }}',
 '{{ Status }}',
 '{{ Tags }}',
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
  - name: transformer
    props:
      - name: EdiType
        value: null
      - name: FileFormat
        value: '{{ FileFormat }}'
      - name: InputConversion
        value:
          FromFormat: '{{ FromFormat }}'
          FormatOptions: null
          AdvancedOptions:
            X12:
              SplitOptions:
                SplitBy: '{{ SplitBy }}'
              ValidationOptions:
                ValidationRules:
                  - null
      - name: Mapping
        value:
          TemplateLanguage: '{{ TemplateLanguage }}'
          Template: '{{ Template }}'
      - name: MappingTemplate
        value: '{{ MappingTemplate }}'
      - name: Name
        value: '{{ Name }}'
      - name: OutputConversion
        value:
          ToFormat: '{{ ToFormat }}'
          FormatOptions: null
          AdvancedOptions: null
      - name: SampleDocument
        value: '{{ SampleDocument }}'
      - name: SampleDocuments
        value:
          BucketName: '{{ BucketName }}'
          Keys:
            - Input: '{{ Input }}'
              Output: '{{ Output }}'
      - name: Status
        value: '{{ Status }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.b2bi.transformers
WHERE data__Identifier = '<TransformerId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>transformers</code> resource, the following permissions are required:

### Create
```json
b2bi:CreateTransformer,
b2bi:TagResource,
b2bi:UpdateTransformer,
logs:CreateLogDelivery,
logs:CreateLogGroup,
logs:CreateLogStream,
logs:DescribeLogGroups,
logs:DescribeLogStreams,
logs:DescribeResourcePolicies,
logs:ListLogDeliveries,
logs:PutLogEvents,
logs:PutResourcePolicy
```

### Read
```json
b2bi:GetTransformer,
b2bi:ListTagsForResource
```

### Update
```json
b2bi:TagResource,
b2bi:UntagResource,
b2bi:UpdateTransformer
```

### Delete
```json
b2bi:DeleteTransformer,
logs:DeleteLogDelivery,
logs:ListLogDeliveries
```

### List
```json
b2bi:ListTransformers
```
