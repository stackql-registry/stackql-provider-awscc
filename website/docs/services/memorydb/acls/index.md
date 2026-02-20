---
title: acls
hide_title: false
hide_table_of_contents: false
keywords:
  - acls
  - memorydb
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

Creates, updates, deletes or gets an <code>acl</code> resource or lists <code>acls</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>acls</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::MemoryDB::ACL</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.memorydb.acls" /></td></tr>
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
    "name": "status",
    "type": "string",
    "description": "Indicates acl status. Can be \"creating\", \"active\", \"modifying\", \"deleting\"."
  },
  {
    "name": "acl_name",
    "type": "string",
    "description": "The name of the acl."
  },
  {
    "name": "user_names",
    "type": "array",
    "description": "List of users associated to this acl."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the acl."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this cluster.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with 'aws:'. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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
    "name": "acl_name",
    "type": "string",
    "description": "The name of the acl."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-acl.html"><code>AWS::MemoryDB::ACL</code></a>.

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
    <td><code>acls</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ACLName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>acls</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>acls</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>acls_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>acls</code></td>
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

Gets all properties from an individual <code>acl</code>.
```sql
SELECT
region,
status,
acl_name,
user_names,
arn,
tags
FROM awscc.memorydb.acls
WHERE region = 'us-east-1' AND Identifier = '<ACLName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>acls</code> in a region.
```sql
SELECT
region,
acl_name
FROM awscc.memorydb.acls_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>acl</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.memorydb.acls (
 ACLName,
 region
)
SELECT 
'{{ ACLName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.memorydb.acls (
 ACLName,
 UserNames,
 Tags,
 region
)
SELECT 
 '{{ ACLName }}',
 '{{ UserNames }}',
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
  - name: acl
    props:
      - name: ACLName
        value: '{{ ACLName }}'
      - name: UserNames
        value:
          - '{{ UserNames[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>acl</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.memorydb.acls
SET PatchDocument = string('{{ {
    "UserNames": user_names,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ACLName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.memorydb.acls
WHERE Identifier = '<ACLName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>acls</code> resource, the following permissions are required:

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
memorydb:CreateACL,
memorydb:DescribeACLs,
memorydb:TagResource,
memorydb:ListTags,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="read">

```json
memorydb:DescribeACLs,
memorydb:ListTags
```

</TabItem>
<TabItem value="update">

```json
memorydb:UpdateACL,
memorydb:DescribeACLs,
memorydb:ListTags,
memorydb:TagResource,
memorydb:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
memorydb:ModifyReplicationGroup,
memorydb:DeleteACL,
memorydb:DescribeACLs
```

</TabItem>
<TabItem value="list">

```json
memorydb:DescribeACLs,
memorydb:ListTags
```

</TabItem>
</Tabs>