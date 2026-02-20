---
title: schemata
hide_title: false
hide_table_of_contents: false
keywords:
  - schemata
  - eventschemas
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

Creates, updates, deletes or gets a <code>schema</code> resource or lists <code>schemata</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>schemata</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EventSchemas::Schema</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.eventschemas.schemata" /></td></tr>
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
    "name": "type",
    "type": "string",
    "description": "The type of schema. Valid types include OpenApi3 and JSONSchemaDraft4."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description of the schema."
  },
  {
    "name": "schema_version",
    "type": "string",
    "description": "The version number of the schema."
  },
  {
    "name": "content",
    "type": "string",
    "description": "The source of the schema definition."
  },
  {
    "name": "registry_name",
    "type": "string",
    "description": "The name of the schema registry."
  },
  {
    "name": "schema_arn",
    "type": "string",
    "description": "The ARN of the schema."
  },
  {
    "name": "schema_name",
    "type": "string",
    "description": "The name of the schema."
  },
  {
    "name": "last_modified",
    "type": "string",
    "description": "The last modified time of the schema."
  },
  {
    "name": "version_created_date",
    "type": "string",
    "description": "The date the schema version was created."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags associated with the resource.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
        "type": "string",
        "description": ""
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
    "name": "schema_arn",
    "type": "string",
    "description": "The ARN of the schema."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-schema.html"><code>AWS::EventSchemas::Schema</code></a>.

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
    <td><code>schemata</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Type, Content, RegistryName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>schemata</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>schemata</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>schemata_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>schemata</code></td>
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

Gets all properties from an individual <code>schema</code>.
```sql
SELECT
region,
type,
description,
schema_version,
content,
registry_name,
schema_arn,
schema_name,
last_modified,
version_created_date,
tags
FROM awscc.eventschemas.schemata
WHERE region = 'us-east-1' AND Identifier = '<SchemaArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>schemata</code> in a region.
```sql
SELECT
region,
schema_arn
FROM awscc.eventschemas.schemata_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>schema</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.eventschemas.schemata (
 Type,
 Content,
 RegistryName,
 region
)
SELECT 
'{{ Type }}',
 '{{ Content }}',
 '{{ RegistryName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.eventschemas.schemata (
 Type,
 Description,
 Content,
 RegistryName,
 SchemaName,
 Tags,
 region
)
SELECT 
 '{{ Type }}',
 '{{ Description }}',
 '{{ Content }}',
 '{{ RegistryName }}',
 '{{ SchemaName }}',
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
  - name: schema
    props:
      - name: Type
        value: '{{ Type }}'
      - name: Description
        value: '{{ Description }}'
      - name: Content
        value: '{{ Content }}'
      - name: RegistryName
        value: '{{ RegistryName }}'
      - name: SchemaName
        value: '{{ SchemaName }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.eventschemas.schemata
SET PatchDocument = string('{{ {
    "Type": type,
    "Description": description,
    "Content": content,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<SchemaArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.eventschemas.schemata
WHERE Identifier = '<SchemaArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>schemata</code> resource, the following permissions are required:

### Create
```json
schemas:DescribeSchema,
schemas:CreateSchema,
schemas:TagResource
```

### Read
```json
schemas:DescribeSchema
```

### Update
```json
schemas:DescribeSchema,
schemas:UpdateSchema,
schemas:TagResource,
schemas:UntagResource,
schemas:ListTagsForResource
```

### Delete
```json
schemas:DescribeSchema,
schemas:DeleteSchema,
schemas:DeleteSchemaVersion
```

### List
```json
schemas:ListSchemas,
schemas:ListSchemaVersions
```
