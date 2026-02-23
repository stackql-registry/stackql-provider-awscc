---
title: schemata
hide_title: false
hide_table_of_contents: false
keywords:
  - schemata
  - personalize
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
<tr><td><b>Description</b></td><td>Resource schema for AWS::Personalize::Schema.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.personalize.schemata" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "Name for the schema."
  },
  {
    "name": "schema_arn",
    "type": "string",
    "description": "Arn for the schema."
  },
  {
    "name": "schema",
    "type": "string",
    "description": "A schema in Avro JSON format."
  },
  {
    "name": "domain",
    "type": "string",
    "description": "The domain of a Domain dataset group."
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
    "description": "Arn for the schema."
  },
  {
    "name": "schema",
    "type": "string",
    "description": "A schema in Avro JSON format."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-schema.html"><code>AWS::Personalize::Schema</code></a>.

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
    <td><CopyableCode code="Name, Schema, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>schemata</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
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
name,
schema_arn,
schema,
domain
FROM awscc.personalize.schemata
WHERE region = 'us-east-1' AND Identifier = '{{ schema_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>schemata</code> in a region.
```sql
SELECT
region,
schema_arn
FROM awscc.personalize.schemata_list_only
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
INSERT INTO awscc.personalize.schemata (
 Name,
 Schema,
 region
)
SELECT
'{{ name }}',
 '{{ schema }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.personalize.schemata (
 Name,
 Schema,
 Domain,
 region
)
SELECT
 '{{ name }}',
 '{{ schema }}',
 '{{ domain }}',
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
      - name: name
        value: '{{ name }}'
      - name: schema
        value: '{{ schema }}'
      - name: domain
        value: '{{ domain }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.personalize.schemata
WHERE Identifier = '{{ schema_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>schemata</code> resource, the following permissions are required:

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
personalize:CreateSchema,
personalize:DescribeSchema
```

</TabItem>
<TabItem value="read">

```json
personalize:DescribeSchema
```

</TabItem>
<TabItem value="delete">

```json
personalize:DeleteSchema,
personalize:DescribeSchema
```

</TabItem>
<TabItem value="list">

```json
personalize:ListSchemas
```

</TabItem>
</Tabs>