---
title: types
hide_title: false
hide_table_of_contents: false
keywords:
  - types
  - cassandra
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

Creates, updates, deletes or gets a <code>type</code> resource or lists <code>types</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>types</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::Cassandra::Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cassandra.types" /></td></tr>
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
    "name": "keyspace_name",
    "type": "string",
    "description": "Name of the Keyspace which contains the User-Defined Type."
  },
  {
    "name": "type_name",
    "type": "string",
    "description": "Name of the User-Defined Type."
  },
  {
    "name": "fields",
    "type": "array",
    "description": "Field definitions of the User-Defined Type",
    "children": [
      {
        "name": "field_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "field_type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "direct_referring_tables",
    "type": "array",
    "description": "List of Tables that directly reference the User-Defined Type in their columns."
  },
  {
    "name": "direct_parent_types",
    "type": "array",
    "description": "List of parent User-Defined Types that directly reference the User-Defined Type in their fields."
  },
  {
    "name": "max_nesting_depth",
    "type": "integer",
    "description": "Maximum nesting depth of the User-Defined Type across the field types."
  },
  {
    "name": "last_modified_timestamp",
    "type": "number",
    "description": "Timestamp of the last time the User-Defined Type's meta data was modified."
  },
  {
    "name": "keyspace_arn",
    "type": "string",
    "description": "ARN of the Keyspace which contains the User-Defined Type."
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
    "name": "keyspace_name",
    "type": "string",
    "description": "Name of the Keyspace which contains the User-Defined Type."
  },
  {
    "name": "type_name",
    "type": "string",
    "description": "Name of the User-Defined Type."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-type.html"><code>AWS::Cassandra::Type</code></a>.

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
    <td><code>types</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="KeyspaceName, TypeName, Fields, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>types</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>types_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>types</code></td>
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

Gets all properties from an individual <code>type</code>.
```sql
SELECT
region,
keyspace_name,
type_name,
fields,
direct_referring_tables,
direct_parent_types,
max_nesting_depth,
last_modified_timestamp,
keyspace_arn
FROM awscc.cassandra.types
WHERE region = 'us-east-1' AND Identifier = '<KeyspaceName>|<TypeName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>types</code> in a region.
```sql
SELECT
region,
keyspace_name,
type_name
FROM awscc.cassandra.types_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>type</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cassandra.types (
 KeyspaceName,
 TypeName,
 Fields,
 region
)
SELECT 
'{{ KeyspaceName }}',
 '{{ TypeName }}',
 '{{ Fields }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cassandra.types (
 KeyspaceName,
 TypeName,
 Fields,
 region
)
SELECT 
 '{{ KeyspaceName }}',
 '{{ TypeName }}',
 '{{ Fields }}',
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
  - name: type
    props:
      - name: KeyspaceName
        value: '{{ KeyspaceName }}'
      - name: TypeName
        value: '{{ TypeName }}'
      - name: Fields
        value:
          - FieldName: '{{ FieldName }}'
            FieldType: '{{ FieldType }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cassandra.types
WHERE Identifier = '<KeyspaceName|TypeName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>types</code> resource, the following permissions are required:

### Create
```json
cassandra:Create,
cassandra:Select
```

### Read
```json
cassandra:Select
```

### Delete
```json
cassandra:Drop,
cassandra:Select
```

### List
```json
cassandra:Select
```
