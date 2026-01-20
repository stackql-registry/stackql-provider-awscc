---
title: table_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - table_policies
  - s3tables
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

Creates, updates, deletes or gets a <code>table_policy</code> resource or lists <code>table_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>table_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::S3Tables::TablePolicy</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3tables.table_policies" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "resource_policy",
    "type": "object",
    "description": "A policy document containing permissions to add to the specified table. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM."
  },
  {
    "name": "table_name",
    "type": "string",
    "description": "The name for the table."
  },
  {
    "name": "table_bucket_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the specified table bucket."
  },
  {
    "name": "table_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the specified table."
  },
  {
    "name": "namespace",
    "type": "string",
    "description": "The namespace that the table belongs to."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-tablepolicy.html"><code>AWS::S3Tables::TablePolicy</code></a>.

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
    <td><CopyableCode code="TableARN, ResourcePolicy, region" /></td>
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

Gets all properties from an individual <code>table_policy</code>.
```sql
SELECT
region,
resource_policy,
table_name,
table_bucket_arn,
table_arn,
namespace
FROM awscc.s3tables.table_policies
WHERE region = 'us-east-1' AND data__Identifier = '<TableARN>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>table_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.s3tables.table_policies (
 ResourcePolicy,
 TableARN,
 region
)
SELECT 
'{{ ResourcePolicy }}',
 '{{ TableARN }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.s3tables.table_policies (
 ResourcePolicy,
 TableARN,
 region
)
SELECT 
 '{{ ResourcePolicy }}',
 '{{ TableARN }}',
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
  - name: table_policy
    props:
      - name: ResourcePolicy
        value: {}
      - name: TableARN
        value: '{{ TableARN }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.s3tables.table_policies
WHERE data__Identifier = '<TableARN>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>table_policies</code> resource, the following permissions are required:

### Create
```json
s3tables:GetTablePolicy,
s3tables:PutTablePolicy,
s3tables:GetTable
```

### Read
```json
s3tables:GetTable,
s3tables:GetTablePolicy
```

### Update
```json
s3tables:GetTablePolicy,
s3tables:PutTablePolicy,
s3tables:GetTable
```

### Delete
```json
s3tables:GetTablePolicy,
s3tables:DeleteTablePolicy,
s3tables:GetTable
```

### List
```json
s3tables:ListTables,
s3tables:GetTablePolicy
```
