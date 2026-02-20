---
title: databases
hide_title: false
hide_table_of_contents: false
keywords:
  - databases
  - timestream
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

Creates, updates, deletes or gets a <code>database</code> resource or lists <code>databases</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>databases</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::Timestream::Database resource creates a Timestream database.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.timestream.databases" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "database_name",
    "type": "string",
    "description": "The name for the database. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the database name."
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "The KMS key for the database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
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
    "name": "database_name",
    "type": "string",
    "description": "The name for the database. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the database name."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-database.html"><code>AWS::Timestream::Database</code></a>.

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
    <td><code>databases</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>databases</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>databases</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>databases_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>databases</code></td>
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

Gets all properties from an individual <code>database</code>.
```sql
SELECT
region,
arn,
database_name,
kms_key_id,
tags
FROM awscc.timestream.databases
WHERE region = 'us-east-1' AND data__Identifier = '<DatabaseName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>databases</code> in a region.
```sql
SELECT
region,
database_name
FROM awscc.timestream.databases_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>database</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.timestream.databases (
 DatabaseName,
 KmsKeyId,
 Tags,
 region
)
SELECT 
'{{ DatabaseName }}',
 '{{ KmsKeyId }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.timestream.databases (
 DatabaseName,
 KmsKeyId,
 Tags,
 region
)
SELECT 
 '{{ DatabaseName }}',
 '{{ KmsKeyId }}',
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
  - name: database
    props:
      - name: DatabaseName
        value: '{{ DatabaseName }}'
      - name: KmsKeyId
        value: '{{ KmsKeyId }}'
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
UPDATE awscc.timestream.databases
SET data__PatchDocument = string('{{ {
    "KmsKeyId": kms_key_id,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<DatabaseName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.timestream.databases
WHERE data__Identifier = '<DatabaseName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>databases</code> resource, the following permissions are required:

### Create
```json
timestream:CreateDatabase,
timestream:DescribeEndpoints,
timestream:TagResource,
kms:CreateGrant,
kms:DescribeKey,
kms:Decrypt
```

### Read
```json
timestream:DescribeDatabase,
timestream:DescribeEndpoints,
timestream:ListTagsForResource
```

### Update
```json
timestream:UpdateDatabase,
timestream:DescribeDatabase,
timestream:DescribeEndpoints,
timestream:TagResource,
timestream:UntagResource
```

### Delete
```json
timestream:DeleteDatabase,
timestream:DescribeEndpoints
```

### List
```json
timestream:ListDatabases,
timestream:DescribeEndpoints
```
