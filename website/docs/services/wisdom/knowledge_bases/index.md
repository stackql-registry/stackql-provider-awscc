---
title: knowledge_bases
hide_title: false
hide_table_of_contents: false
keywords:
  - knowledge_bases
  - wisdom
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

Creates, updates, deletes or gets a <code>knowledge_base</code> resource or lists <code>knowledge_bases</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>knowledge_bases</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Wisdom::KnowledgeBase Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.wisdom.knowledge_bases" /></td></tr>
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
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "knowledge_base_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "knowledge_base_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "knowledge_base_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "rendering_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "template_uri",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "server_side_encryption_configuration",
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
    "name": "source_configuration",
    "type": "object",
    "description": ""
  },
  {
    "name": "vector_ingestion_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "chunking_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "chunking_strategy",
            "type": "string",
            "description": ""
          },
          {
            "name": "fixed_size_chunking_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "max_tokens",
                "type": "number",
                "description": ""
              },
              {
                "name": "overlap_percentage",
                "type": "number",
                "description": ""
              }
            ]
          },
          {
            "name": "hierarchical_chunking_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "level_configurations",
                "type": "array",
                "description": ""
              },
              {
                "name": "overlap_tokens",
                "type": "number",
                "description": ""
              }
            ]
          },
          {
            "name": "semantic_chunking_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "max_tokens",
                "type": "number",
                "description": ""
              },
              {
                "name": "buffer_size",
                "type": "number",
                "description": ""
              },
              {
                "name": "breakpoint_percentile_threshold",
                "type": "number",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "parsing_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "parsing_strategy",
            "type": "string",
            "description": ""
          },
          {
            "name": "bedrock_foundation_model_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "model_arn",
                "type": "string",
                "description": ""
              },
              {
                "name": "parsing_prompt",
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
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -"
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -"
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
    "name": "knowledge_base_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html"><code>AWS::Wisdom::KnowledgeBase</code></a>.

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
    <td><code>knowledge_bases</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="KnowledgeBaseType, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>knowledge_bases</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>knowledge_bases</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>knowledge_bases_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>knowledge_bases</code></td>
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

Gets all properties from an individual <code>knowledge_base</code>.
```sql
SELECT
region,
description,
knowledge_base_arn,
knowledge_base_id,
knowledge_base_type,
name,
rendering_configuration,
server_side_encryption_configuration,
source_configuration,
vector_ingestion_configuration,
tags
FROM awscc.wisdom.knowledge_bases
WHERE region = 'us-east-1' AND data__Identifier = '<KnowledgeBaseId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>knowledge_bases</code> in a region.
```sql
SELECT
region,
knowledge_base_id
FROM awscc.wisdom.knowledge_bases_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>knowledge_base</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.wisdom.knowledge_bases (
 KnowledgeBaseType,
 Name,
 region
)
SELECT 
'{{ KnowledgeBaseType }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.wisdom.knowledge_bases (
 Description,
 KnowledgeBaseType,
 Name,
 RenderingConfiguration,
 ServerSideEncryptionConfiguration,
 SourceConfiguration,
 VectorIngestionConfiguration,
 Tags,
 region
)
SELECT 
 '{{ Description }}',
 '{{ KnowledgeBaseType }}',
 '{{ Name }}',
 '{{ RenderingConfiguration }}',
 '{{ ServerSideEncryptionConfiguration }}',
 '{{ SourceConfiguration }}',
 '{{ VectorIngestionConfiguration }}',
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
  - name: knowledge_base
    props:
      - name: Description
        value: '{{ Description }}'
      - name: KnowledgeBaseType
        value: '{{ KnowledgeBaseType }}'
      - name: Name
        value: '{{ Name }}'
      - name: RenderingConfiguration
        value:
          TemplateUri: '{{ TemplateUri }}'
      - name: ServerSideEncryptionConfiguration
        value:
          KmsKeyId: '{{ KmsKeyId }}'
      - name: SourceConfiguration
        value: null
      - name: VectorIngestionConfiguration
        value:
          ChunkingConfiguration:
            ChunkingStrategy: '{{ ChunkingStrategy }}'
            FixedSizeChunkingConfiguration:
              MaxTokens: null
              OverlapPercentage: null
            HierarchicalChunkingConfiguration:
              LevelConfigurations:
                - MaxTokens: null
              OverlapTokens: null
            SemanticChunkingConfiguration:
              MaxTokens: null
              BufferSize: null
              BreakpointPercentileThreshold: null
          ParsingConfiguration:
            ParsingStrategy: '{{ ParsingStrategy }}'
            BedrockFoundationModelConfiguration:
              ModelArn: '{{ ModelArn }}'
              ParsingPrompt:
                ParsingPromptText: '{{ ParsingPromptText }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.wisdom.knowledge_bases
SET data__PatchDocument = string('{{ {
    "RenderingConfiguration": rendering_configuration,
    "VectorIngestionConfiguration": vector_ingestion_configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<KnowledgeBaseId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.wisdom.knowledge_bases
WHERE data__Identifier = '<KnowledgeBaseId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>knowledge_bases</code> resource, the following permissions are required:

### Create
```json
appflow:CreateFlow,
appflow:DeleteFlow,
appflow:StartFlow,
appflow:TagResource,
appflow:UseConnectorProfile,
app-integrations:CreateDataIntegrationAssociation,
app-integrations:GetDataIntegration,
kms:DescribeKey,
kms:CreateGrant,
kms:ListGrants,
wisdom:CreateKnowledgeBase,
wisdom:TagResource
```

### Update
```json
wisdom:GetKnowledgeBase
```

### Delete
```json
appflow:DeleteFlow,
appflow:StopFlow,
app-integrations:DeleteDataIntegrationAssociation,
wisdom:DeleteKnowledgeBase
```

### List
```json
wisdom:ListKnowledgeBases
```

### Read
```json
wisdom:GetKnowledgeBase
```
