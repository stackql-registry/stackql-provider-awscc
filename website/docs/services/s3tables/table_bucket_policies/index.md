---
title: table_bucket_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - table_bucket_policies
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

Creates, updates, deletes or gets a <code>table_bucket_policy</code> resource or lists <code>table_bucket_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>table_bucket_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Applies an IAM resource policy to a table bucket.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3tables.table_bucket_policies" /></td></tr>
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
    "name": "resource_policy",
    "type": "object",
    "description": "A policy document containing permissions to add to the specified table. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM."
  },
  {
    "name": "table_bucket_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the specified table bucket."
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
    "name": "table_bucket_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the specified table bucket."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-tablebucketpolicy.html"><code>AWS::S3Tables::TableBucketPolicy</code></a>.

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
    <td><code>table_bucket_policies</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ResourcePolicy, TableBucketARN, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>table_bucket_policies</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>table_bucket_policies</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>table_bucket_policies_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>table_bucket_policies</code></td>
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

Gets all properties from an individual <code>table_bucket_policy</code>.
```sql
SELECT
region,
resource_policy,
table_bucket_arn
FROM awscc.s3tables.table_bucket_policies
WHERE region = 'us-east-1' AND Identifier = '{{ table_bucket_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>table_bucket_policies</code> in a region.
```sql
SELECT
region,
table_bucket_arn
FROM awscc.s3tables.table_bucket_policies_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>table_bucket_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.s3tables.table_bucket_policies (
 ResourcePolicy,
 TableBucketARN,
 region
)
SELECT
'{{ resource_policy }}',
 '{{ table_bucket_arn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.s3tables.table_bucket_policies (
 ResourcePolicy,
 TableBucketARN,
 region
)
SELECT
 '{{ resource_policy }}',
 '{{ table_bucket_arn }}',
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
  - name: table_bucket_policy
    props:
      - name: resource_policy
        value: {}
      - name: table_bucket_arn
        value: '{{ table_bucket_arn }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>table_bucket_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.s3tables.table_bucket_policies
SET PatchDocument = string('{{ {
    "ResourcePolicy": resource_policy
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ table_bucket_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.s3tables.table_bucket_policies
WHERE Identifier = '{{ table_bucket_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>table_bucket_policies</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
s3tables:GetTableBucket,
s3tables:GetTableBucketPolicy,
s3tables:PutTableBucketPolicy
```

</TabItem>
<TabItem value="read">

```json
s3tables:GetTableBucketPolicy
```

</TabItem>
<TabItem value="update">

```json
s3tables:GetTableBucketPolicy,
s3tables:PutTableBucketPolicy
```

</TabItem>
<TabItem value="delete">

```json
s3tables:GetTableBucketPolicy,
s3tables:DeleteTableBucketPolicy
```

</TabItem>
<TabItem value="list">

```json
s3tables:GetTableBucketPolicy,
s3tables:ListTableBuckets
```

</TabItem>
</Tabs>