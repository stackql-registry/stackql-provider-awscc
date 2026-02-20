---
title: application_inference_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - application_inference_profiles
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

Creates, updates, deletes or gets an <code>application_inference_profile</code> resource or lists <code>application_inference_profiles</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>application_inference_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Bedrock::ApplicationInferenceProfile Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.bedrock.application_inference_profiles" /></td></tr>
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
    "name": "created_at",
    "type": "string",
    "description": "Time Stamp"
  },
  {
    "name": "description",
    "type": "string",
    "description": "Description of the inference profile"
  },
  {
    "name": "inference_profile_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "inference_profile_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "inference_profile_identifier",
    "type": "string",
    "description": "Inference profile identifier. Supports both system-defined inference profile ids, and inference profile ARNs."
  },
  {
    "name": "inference_profile_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "model_source",
    "type": "object",
    "description": "Various ways to encode a list of models in a CreateInferenceProfile request"
  },
  {
    "name": "models",
    "type": "array",
    "description": "List of model configuration",
    "children": [
      {
        "name": "model_arn",
        "type": "string",
        "description": "ARN for Foundation Models in Bedrock. These models can be used as base models for model customization jobs"
      }
    ]
  },
  {
    "name": "status",
    "type": "string",
    "description": "Status of the Inference Profile"
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
    "name": "type",
    "type": "string",
    "description": "Type of the Inference Profile"
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": "Time Stamp"
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
    "name": "inference_profile_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "inference_profile_identifier",
    "type": "string",
    "description": "Inference profile identifier. Supports both system-defined inference profile ids, and inference profile ARNs."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-applicationinferenceprofile.html"><code>AWS::Bedrock::ApplicationInferenceProfile</code></a>.

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
    <td><code>application_inference_profiles</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="InferenceProfileName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>application_inference_profiles</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>application_inference_profiles</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>application_inference_profiles_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>application_inference_profiles</code></td>
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

Gets all properties from an individual <code>application_inference_profile</code>.
```sql
SELECT
region,
created_at,
description,
inference_profile_arn,
inference_profile_id,
inference_profile_identifier,
inference_profile_name,
model_source,
models,
status,
tags,
type,
updated_at
FROM awscc.bedrock.application_inference_profiles
WHERE region = 'us-east-1' AND Identifier = '<InferenceProfileIdentifier>';
```
</TabItem>
<TabItem value="list">

Lists all <code>application_inference_profiles</code> in a region.
```sql
SELECT
region,
inference_profile_identifier
FROM awscc.bedrock.application_inference_profiles_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>application_inference_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.bedrock.application_inference_profiles (
 InferenceProfileName,
 region
)
SELECT 
'{{ InferenceProfileName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.bedrock.application_inference_profiles (
 Description,
 InferenceProfileName,
 ModelSource,
 Tags,
 region
)
SELECT 
 '{{ Description }}',
 '{{ InferenceProfileName }}',
 '{{ ModelSource }}',
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
  - name: application_inference_profile
    props:
      - name: Description
        value: '{{ Description }}'
      - name: InferenceProfileName
        value: '{{ InferenceProfileName }}'
      - name: ModelSource
        value: null
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
UPDATE awscc.bedrock.application_inference_profiles
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<InferenceProfileIdentifier>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.bedrock.application_inference_profiles
WHERE Identifier = '<InferenceProfileIdentifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>application_inference_profiles</code> resource, the following permissions are required:

### Create
```json
bedrock:CreateInferenceProfile,
bedrock:GetInferenceProfile,
bedrock:TagResource,
bedrock:ListTagsForResource
```

### Read
```json
bedrock:GetInferenceProfile,
bedrock:ListTagsForResource
```

### Update
```json
bedrock:GetInferenceProfile,
bedrock:ListTagsForResource,
bedrock:TagResource,
bedrock:UntagResource
```

### Delete
```json
bedrock:DeleteInferenceProfile,
bedrock:GetInferenceProfile
```

### List
```json
bedrock:ListInferenceProfiles
```
