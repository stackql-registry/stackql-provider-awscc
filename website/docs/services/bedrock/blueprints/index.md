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
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="blueprint_arn" /></td><td><code>string</code></td><td>ARN of a Blueprint</td></tr>
<tr><td><CopyableCode code="blueprint_name" /></td><td><code>string</code></td><td>Name of the Blueprint</td></tr>
<tr><td><CopyableCode code="creation_time" /></td><td><code>string</code></td><td>Creation timestamp</td></tr>
<tr><td><CopyableCode code="last_modified_time" /></td><td><code>string</code></td><td>Last modified timestamp</td></tr>
<tr><td><CopyableCode code="schema" /></td><td><code>object</code></td><td>Schema of the blueprint</td></tr>
<tr><td><CopyableCode code="type" /></td><td><code>string</code></td><td>Modality Type</td></tr>
<tr><td><CopyableCode code="blueprint_stage" /></td><td><code>string</code></td><td>Stage of the Blueprint</td></tr>
<tr><td><CopyableCode code="kms_key_id" /></td><td><code>string</code></td><td>KMS key identifier</td></tr>
<tr><td><CopyableCode code="kms_encryption_context" /></td><td><code>object</code></td><td>KMS encryption context</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>List of Tags</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-blueprint.html"><code>AWS::Bedrock::Blueprint</code></a>.

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
    <td><CopyableCode code="BlueprintName, Schema, Type, region" /></td>
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
Gets all <code>blueprints</code> in a region.
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
WHERE region = 'us-east-1';
```
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
