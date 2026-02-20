---
title: prompts
hide_title: false
hide_table_of_contents: false
keywords:
  - prompts
  - bedrock
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

Creates, updates, deletes or gets a <code>prompt</code> resource or lists <code>prompts</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>prompts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Bedrock::Prompt Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.bedrock.prompts" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": "ARN of a prompt resource possibly with a version"
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "Time Stamp."
  },
  {
    "name": "default_variant",
    "type": "string",
    "description": "Name for a variant."
  },
  {
    "name": "description",
    "type": "string",
    "description": "Name for a prompt resource."
  },
  {
    "name": "id",
    "type": "string",
    "description": "Identifier for a Prompt"
  },
  {
    "name": "name",
    "type": "string",
    "description": "Name for a prompt resource."
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": "Time Stamp."
  },
  {
    "name": "variants",
    "type": "array",
    "description": "List of prompt variants",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": "Name for a variant."
      },
      {
        "name": "template_type",
        "type": "string",
        "description": "Prompt template type"
      },
      {
        "name": "template_configuration",
        "type": "object",
        "description": "Prompt template configuration"
      },
      {
        "name": "model_id",
        "type": "string",
        "description": "ARN or Id of a Bedrock Foundational Model or Inference Profile, or the ARN of a imported model, or a provisioned throughput ARN for custom models."
      },
      {
        "name": "inference_configuration",
        "type": "object",
        "description": "Model inference configuration"
      },
      {
        "name": "gen_ai_resource",
        "type": "object",
        "description": "Target resource to invoke with Prompt"
      },
      {
        "name": "additional_model_request_fields",
        "type": "object",
        "description": "Contains model-specific configurations"
      },
      {
        "name": "metadata",
        "type": "array",
        "description": "List of metadata to associate with the prompt variant.",
        "children": [
          {
            "name": "key",
            "type": "string",
            "description": "The key of a metadata tag for a prompt variant."
          },
          {
            "name": "value",
            "type": "string",
            "description": "The value of a metadata tag for a prompt variant."
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A map of tag keys and values"
  },
  {
    "name": "customer_encryption_key_arn",
    "type": "string",
    "description": "A KMS key ARN"
  },
  {
    "name": "version",
    "type": "string",
    "description": "Draft Version."
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
    "name": "arn",
    "type": "string",
    "description": "ARN of a prompt resource possibly with a version"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html"><code>AWS::Bedrock::Prompt</code></a>.

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
    <td><code>prompts</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>prompts</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>prompts</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>prompts_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>prompts</code></td>
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

Gets all properties from an individual <code>prompt</code>.
```sql
SELECT
region,
arn,
created_at,
default_variant,
description,
id,
name,
updated_at,
variants,
tags,
customer_encryption_key_arn,
version
FROM awscc.bedrock.prompts
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>prompts</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.bedrock.prompts_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>prompt</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.bedrock.prompts (
 Name,
 region
)
SELECT 
'{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.bedrock.prompts (
 DefaultVariant,
 Description,
 Name,
 Variants,
 Tags,
 CustomerEncryptionKeyArn,
 region
)
SELECT 
 '{{ DefaultVariant }}',
 '{{ Description }}',
 '{{ Name }}',
 '{{ Variants }}',
 '{{ Tags }}',
 '{{ CustomerEncryptionKeyArn }}',
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
  - name: prompt
    props:
      - name: DefaultVariant
        value: '{{ DefaultVariant }}'
      - name: Description
        value: '{{ Description }}'
      - name: Name
        value: '{{ Name }}'
      - name: Variants
        value:
          - Name: '{{ Name }}'
            TemplateType: '{{ TemplateType }}'
            TemplateConfiguration: null
            ModelId: '{{ ModelId }}'
            InferenceConfiguration: null
            GenAiResource: null
            AdditionalModelRequestFields: {}
            Metadata:
              - Key: '{{ Key }}'
                Value: '{{ Value }}'
      - name: Tags
        value: {}
      - name: CustomerEncryptionKeyArn
        value: '{{ CustomerEncryptionKeyArn }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>prompt</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.bedrock.prompts
SET PatchDocument = string('{{ {
    "DefaultVariant": default_variant,
    "Description": description,
    "Name": name,
    "Variants": variants,
    "Tags": tags,
    "CustomerEncryptionKeyArn": customer_encryption_key_arn
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.bedrock.prompts
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>prompts</code> resource, the following permissions are required:

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
bedrock:CreatePrompt,
bedrock:GetPrompt,
s3:GetObject,
s3:GetObjectVersion,
bedrock:TagResource,
bedrock:ListTagsForResource,
kms:GenerateDataKey,
kms:Decrypt
```

</TabItem>
<TabItem value="read">

```json
bedrock:GetPrompt,
bedrock:ListTagsForResource,
kms:Decrypt
```

</TabItem>
<TabItem value="update">

```json
bedrock:UpdatePrompt,
bedrock:GetPrompt,
s3:GetObject,
s3:GetObjectVersion,
bedrock:TagResource,
bedrock:UntagResource,
bedrock:ListTagsForResource,
kms:GenerateDataKey,
kms:Decrypt
```

</TabItem>
<TabItem value="delete">

```json
bedrock:DeletePrompt,
bedrock:GetPrompt
```

</TabItem>
<TabItem value="list">

```json
bedrock:ListPrompts
```

</TabItem>
</Tabs>