---
title: blueprints
hide_title: false
hide_table_of_contents: false
keywords:
  - blueprints
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

Creates, updates, deletes or gets a <code>blueprint</code> resource or lists <code>blueprints</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>blueprints</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Bedrock::Blueprint Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.bedrock.blueprints" /></td></tr>
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
    "name": "blueprint_arn",
    "type": "string",
    "description": "ARN of a Blueprint"
  },
  {
    "name": "blueprint_name",
    "type": "string",
    "description": "Name of the Blueprint"
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "Creation timestamp"
  },
  {
    "name": "last_modified_time",
    "type": "string",
    "description": "Last modified timestamp"
  },
  {
    "name": "schema",
    "type": "object",
    "description": "Schema of the blueprint"
  },
  {
    "name": "type",
    "type": "string",
    "description": "Modality Type"
  },
  {
    "name": "blueprint_stage",
    "type": "string",
    "description": "Stage of the Blueprint"
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "KMS key identifier"
  },
  {
    "name": "kms_encryption_context",
    "type": "object",
    "description": "KMS encryption context"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "List of Tags",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "Tag Key"
      },
      {
        "name": "value",
        "type": "string",
        "description": "Tag Value"
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
    "name": "blueprint_arn",
    "type": "string",
    "description": "ARN of a Blueprint"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-blueprint.html"><code>AWS::Bedrock::Blueprint</code></a>.

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
    <td><code>blueprints</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="BlueprintName, Schema, Type, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>blueprints</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>blueprints</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>blueprints_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>blueprints</code></td>
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

Gets all properties from an individual <code>blueprint</code>.
```sql
SELECT
region,
blueprint_arn,
blueprint_name,
creation_time,
last_modified_time,
schema,
type,
blueprint_stage,
kms_key_id,
kms_encryption_context,
tags
FROM awscc.bedrock.blueprints
WHERE region = 'us-east-1' AND data__Identifier = '<BlueprintArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>blueprints</code> in a region.
```sql
SELECT
region,
blueprint_arn
FROM awscc.bedrock.blueprints_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>blueprint</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.bedrock.blueprints (
 BlueprintName,
 Schema,
 Type,
 region
)
SELECT 
'{{ BlueprintName }}',
 '{{ Schema }}',
 '{{ Type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.bedrock.blueprints (
 BlueprintName,
 Schema,
 Type,
 KmsKeyId,
 KmsEncryptionContext,
 Tags,
 region
)
SELECT 
 '{{ BlueprintName }}',
 '{{ Schema }}',
 '{{ Type }}',
 '{{ KmsKeyId }}',
 '{{ KmsEncryptionContext }}',
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
  - name: blueprint
    props:
      - name: BlueprintName
        value: '{{ BlueprintName }}'
      - name: Schema
        value: {}
      - name: Type
        value: '{{ Type }}'
      - name: KmsKeyId
        value: '{{ KmsKeyId }}'
      - name: KmsEncryptionContext
        value: {}
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
UPDATE awscc.bedrock.blueprints
SET data__PatchDocument = string('{{ {
    "Schema": schema,
    "KmsKeyId": kms_key_id,
    "KmsEncryptionContext": kms_encryption_context,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<BlueprintArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.bedrock.blueprints
WHERE data__Identifier = '<BlueprintArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>blueprints</code> resource, the following permissions are required:

### Create
```json
bedrock:CreateBlueprint,
bedrock:GetBlueprint,
bedrock:TagResource,
bedrock:ListTagsForResource,
kms:DescribeKey,
kms:Decrypt,
kms:GenerateDataKey
```

### Read
```json
bedrock:GetBlueprint,
bedrock:ListTagsForResource,
kms:DescribeKey,
kms:Decrypt
```

### Update
```json
bedrock:UpdateBlueprint,
bedrock:GetBlueprint,
bedrock:TagResource,
bedrock:UntagResource,
bedrock:ListTagsForResource,
kms:DescribeKey,
kms:Decrypt,
kms:GenerateDataKey
```

### Delete
```json
bedrock:DeleteBlueprint,
bedrock:GetBlueprint,
kms:DescribeKey,
kms:Decrypt
```

### List
```json
bedrock:ListBlueprints
```
