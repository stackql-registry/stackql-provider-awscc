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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-schema.html"><code>AWS::Personalize::Schema</code></a>.

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
    <td><CopyableCode code="Name, Schema, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>schema</code>.
```sql
SELECT
region,
name,
schema_arn,
schema,
domain
FROM awscc.personalize.schemata
WHERE region = 'us-east-1' AND data__Identifier = '<SchemaArn>';
```

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
'{{ Name }}',
 '{{ Schema }}',
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
 '{{ Name }}',
 '{{ Schema }}',
 '{{ Domain }}',
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
      - name: Name
        value: '{{ Name }}'
      - name: Schema
        value: '{{ Schema }}'
      - name: Domain
        value: '{{ Domain }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.personalize.schemata
WHERE data__Identifier = '<SchemaArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>schemata</code> resource, the following permissions are required:

### Create
```json
personalize:CreateSchema,
personalize:DescribeSchema
```

### Read
```json
personalize:DescribeSchema
```

### Delete
```json
personalize:DeleteSchema,
personalize:DescribeSchema
```

### List
```json
personalize:ListSchemas
```
