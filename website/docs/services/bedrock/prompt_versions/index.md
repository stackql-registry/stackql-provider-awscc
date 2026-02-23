---
title: prompt_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - prompt_versions
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

Creates, updates, deletes or gets a <code>prompt_version</code> resource or lists <code>prompt_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>prompt_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Bedrock::PromptVersion Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.bedrock.prompt_versions" /></td></tr>
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
    "name": "prompt_arn",
    "type": "string",
    "description": "ARN of a prompt resource possibly with a version"
  },
  {
    "name": "arn",
    "type": "string",
    "description": "ARN of a prompt version resource"
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "Time Stamp."
  },
  {
    "name": "prompt_id",
    "type": "string",
    "description": "Identifier for a Prompt"
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": "Time Stamp."
  },
  {
    "name": "version",
    "type": "string",
    "description": "Version."
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
    "name": "default_variant",
    "type": "string",
    "description": "Name for a variant."
  },
  {
    "name": "description",
    "type": "string",
    "description": "Description for a prompt version resource."
  },
  {
    "name": "customer_encryption_key_arn",
    "type": "string",
    "description": "A KMS key ARN"
  },
  {
    "name": "name",
    "type": "string",
    "description": "Name for a prompt resource."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A map of tag keys and values"
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
    "description": "ARN of a prompt version resource"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-promptversion.html"><code>AWS::Bedrock::PromptVersion</code></a>.

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
    <td><code>prompt_versions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="PromptArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>prompt_versions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>prompt_versions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>prompt_versions</code></td>
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

Gets all properties from an individual <code>prompt_version</code>.
```sql
SELECT
region,
prompt_arn,
arn,
created_at,
prompt_id,
updated_at,
version,
variants,
default_variant,
description,
customer_encryption_key_arn,
name,
tags
FROM awscc.bedrock.prompt_versions
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>prompt_versions</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.bedrock.prompt_versions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>prompt_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.bedrock.prompt_versions (
 PromptArn,
 region
)
SELECT
'{{ prompt_arn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.bedrock.prompt_versions (
 PromptArn,
 Description,
 Tags,
 region
)
SELECT
 '{{ prompt_arn }}',
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
  - name: prompt_version
    props:
      - name: prompt_arn
        value: '{{ prompt_arn }}'
      - name: description
        value: '{{ description }}'
      - name: tags
        value: {}
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.bedrock.prompt_versions
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>prompt_versions</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
bedrock:CreatePromptVersion,
bedrock:GetPrompt,
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