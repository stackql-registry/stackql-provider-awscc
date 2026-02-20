---
title: schema_mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - schema_mappings
  - entityresolution
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

Creates, updates, deletes or gets a <code>schema_mapping</code> resource or lists <code>schema_mappings</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>schema_mappings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>SchemaMapping defined in AWS Entity Resolution service</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.entityresolution.schema_mappings" /></td></tr>
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
    "name": "schema_name",
    "type": "string",
    "description": "The name of the SchemaMapping"
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the SchemaMapping"
  },
  {
    "name": "mapped_input_fields",
    "type": "array",
    "description": "The SchemaMapping attributes input",
    "children": [
      {
        "name": "field_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "sub_type",
        "type": "string",
        "description": "The subtype of the Attribute. Would be required only when type is PROVIDER&#95;ID"
      },
      {
        "name": "hashed",
        "type": "boolean",
        "description": ""
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
    "name": "schema_arn",
    "type": "string",
    "description": "The SchemaMapping arn associated with the Schema"
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The time of this SchemaMapping got created"
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": "The time of this SchemaMapping got last updated at"
  },
  {
    "name": "has_workflows",
    "type": "boolean",
    "description": "The boolean value that indicates whether or not a SchemaMapping has MatchingWorkflows that are associated with"
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
    "name": "schema_name",
    "type": "string",
    "description": "The name of the SchemaMapping"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html"><code>AWS::EntityResolution::SchemaMapping</code></a>.

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
    <td><code>schema_mappings</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="SchemaName, MappedInputFields, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>schema_mappings</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>schema_mappings</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>schema_mappings_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>schema_mappings</code></td>
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

Gets all properties from an individual <code>schema_mapping</code>.
```sql
SELECT
region,
schema_name,
description,
mapped_input_fields,
tags,
schema_arn,
created_at,
updated_at,
has_workflows
FROM awscc.entityresolution.schema_mappings
WHERE region = 'us-east-1' AND Identifier = '<SchemaName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>schema_mappings</code> in a region.
```sql
SELECT
region,
schema_name
FROM awscc.entityresolution.schema_mappings_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>schema_mapping</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.entityresolution.schema_mappings (
 SchemaName,
 MappedInputFields,
 region
)
SELECT 
'{{ SchemaName }}',
 '{{ MappedInputFields }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.entityresolution.schema_mappings (
 SchemaName,
 Description,
 MappedInputFields,
 Tags,
 region
)
SELECT 
 '{{ SchemaName }}',
 '{{ Description }}',
 '{{ MappedInputFields }}',
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
  - name: schema_mapping
    props:
      - name: SchemaName
        value: '{{ SchemaName }}'
      - name: Description
        value: '{{ Description }}'
      - name: MappedInputFields
        value:
          - FieldName: '{{ FieldName }}'
            Type: '{{ Type }}'
            SubType: '{{ SubType }}'
            GroupName: null
            MatchKey: null
            Hashed: '{{ Hashed }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>schema_mapping</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.entityresolution.schema_mappings
SET PatchDocument = string('{{ {
    "Description": description,
    "MappedInputFields": mapped_input_fields,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<SchemaName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.entityresolution.schema_mappings
WHERE Identifier = '<SchemaName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>schema_mappings</code> resource, the following permissions are required:

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
entityresolution:CreateSchemaMapping,
entityresolution:GetSchemaMapping,
entityresolution:TagResource
```

</TabItem>
<TabItem value="read">

```json
entityresolution:GetSchemaMapping,
entityresolution:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
entityresolution:DeleteSchemaMapping,
entityresolution:GetSchemaMapping
```

</TabItem>
<TabItem value="update">

```json
entityresolution:GetSchemaMapping,
entityresolution:UpdateSchemaMapping,
entityresolution:ListTagsForResource,
entityresolution:TagResource,
entityresolution:UntagResource
```

</TabItem>
<TabItem value="list">

```json
entityresolution:ListSchemaMappings
```

</TabItem>
</Tabs>