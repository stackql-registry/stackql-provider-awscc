---
title: features
hide_title: false
hide_table_of_contents: false
keywords:
  - features
  - evidently
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

Creates, updates, deletes or gets a <code>feature</code> resource or lists <code>features</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>features</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Evidently::Feature.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.evidently.features" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "project",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "evaluation_strategy",
    "type": "string",
    "description": ""
  },
  {
    "name": "variations",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "variation_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "boolean_value",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "string_value",
        "type": "string",
        "description": ""
      },
      {
        "name": "long_value",
        "type": "number",
        "description": ""
      },
      {
        "name": "double_value",
        "type": "number",
        "description": ""
      }
    ]
  },
  {
    "name": "default_variation",
    "type": "string",
    "description": ""
  },
  {
    "name": "entity_overrides",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "entity_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "variation",
        "type": "string",
        "description": ""
      }
    ]
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-feature.html"><code>AWS::Evidently::Feature</code></a>.

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
    <td><CopyableCode code="Name, Project, Variations, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>feature</code>.
```sql
SELECT
region,
arn,
project,
name,
description,
evaluation_strategy,
variations,
default_variation,
entity_overrides,
tags
FROM awscc.evidently.features
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>feature</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.evidently.features (
 Project,
 Name,
 Variations,
 region
)
SELECT
'{{ project }}',
 '{{ name }}',
 '{{ variations }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.evidently.features (
 Project,
 Name,
 Description,
 EvaluationStrategy,
 Variations,
 DefaultVariation,
 EntityOverrides,
 Tags,
 region
)
SELECT
 '{{ project }}',
 '{{ name }}',
 '{{ description }}',
 '{{ evaluation_strategy }}',
 '{{ variations }}',
 '{{ default_variation }}',
 '{{ entity_overrides }}',
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
  - name: feature
    props:
      - name: project
        value: '{{ project }}'
      - name: name
        value: '{{ name }}'
      - name: description
        value: '{{ description }}'
      - name: evaluation_strategy
        value: '{{ evaluation_strategy }}'
      - name: variations
        value:
          - variation_name: '{{ variation_name }}'
            boolean_value: '{{ boolean_value }}'
            string_value: '{{ string_value }}'
            long_value: null
            double_value: null
      - name: default_variation
        value: '{{ default_variation }}'
      - name: entity_overrides
        value:
          - entity_id: '{{ entity_id }}'
            variation: '{{ variation }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>feature</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.evidently.features
SET PatchDocument = string('{{ {
    "Description": description,
    "EvaluationStrategy": evaluation_strategy,
    "Variations": variations,
    "DefaultVariation": default_variation,
    "EntityOverrides": entity_overrides,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.evidently.features
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>features</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="create">

```json
evidently:CreateFeature,
evidently:TagResource,
evidently:GetFeature
```

</TabItem>
<TabItem value="read">

```json
evidently:GetFeature,
evidently:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
evidently:UpdateFeature,
evidently:ListTagsForResource,
evidently:TagResource,
evidently:UntagResource,
evidently:GetFeature
```

</TabItem>
<TabItem value="delete">

```json
evidently:DeleteFeature,
evidently:UntagResource,
evidently:GetFeature
```

</TabItem>
</Tabs>