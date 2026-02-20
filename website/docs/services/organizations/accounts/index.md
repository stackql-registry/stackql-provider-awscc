---
title: accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - accounts
  - organizations
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

Creates, updates, deletes or gets an <code>account</code> resource or lists <code>accounts</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>accounts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>You can use AWS::Organizations::Account to manage accounts in organization.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.organizations.accounts" /></td></tr>
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
    "name": "account_name",
    "type": "string",
    "description": "The friendly name of the member account."
  },
  {
    "name": "email",
    "type": "string",
    "description": "The email address of the owner to assign to the new member account."
  },
  {
    "name": "role_name",
    "type": "string",
    "description": "The name of an IAM role that AWS Organizations automatically preconfigures in the new member account. Default name is OrganizationAccountAccessRole if not specified."
  },
  {
    "name": "parent_ids",
    "type": "array",
    "description": "List of parent nodes for the member account. Currently only one parent at a time is supported. Default is root."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of tags that you want to attach to the newly created account. For each tag in the list, you must specify both a tag key and a value.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key identifier, or name, of the tag."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The string value that's associated with the key of the tag. You can set the value of a tag to an empty string, but you can't set the value of a tag to null."
      }
    ]
  },
  {
    "name": "account_id",
    "type": "string",
    "description": "If the account was created successfully, the unique identifier (ID) of the new account."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the account."
  },
  {
    "name": "joined_method",
    "type": "string",
    "description": "The method by which the account joined the organization."
  },
  {
    "name": "joined_timestamp",
    "type": "string",
    "description": "The date the account became a part of the organization."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the account in the organization."
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
    "name": "account_id",
    "type": "string",
    "description": "If the account was created successfully, the unique identifier (ID) of the new account."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-account.html"><code>AWS::Organizations::Account</code></a>.

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
    <td><code>accounts</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AccountName, Email, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>accounts</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>accounts</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>accounts_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>accounts</code></td>
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

Gets all properties from an individual <code>account</code>.
```sql
SELECT
region,
account_name,
email,
role_name,
parent_ids,
tags,
account_id,
arn,
joined_method,
joined_timestamp,
status
FROM awscc.organizations.accounts
WHERE region = 'us-east-1' AND Identifier = '<AccountId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>accounts</code> in a region.
```sql
SELECT
region,
account_id
FROM awscc.organizations.accounts_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>account</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.organizations.accounts (
 AccountName,
 Email,
 region
)
SELECT 
'{{ AccountName }}',
 '{{ Email }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.organizations.accounts (
 AccountName,
 Email,
 RoleName,
 ParentIds,
 Tags,
 region
)
SELECT 
 '{{ AccountName }}',
 '{{ Email }}',
 '{{ RoleName }}',
 '{{ ParentIds }}',
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
  - name: account
    props:
      - name: AccountName
        value: '{{ AccountName }}'
      - name: Email
        value: '{{ Email }}'
      - name: RoleName
        value: '{{ RoleName }}'
      - name: ParentIds
        value:
          - '{{ ParentIds[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>account</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.organizations.accounts
SET PatchDocument = string('{{ {
    "AccountName": account_name,
    "Email": email,
    "RoleName": role_name,
    "ParentIds": parent_ids,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<AccountId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.organizations.accounts
WHERE Identifier = '<AccountId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>accounts</code> resource, the following permissions are required:

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
organizations:CreateAccount,
organizations:DescribeCreateAccountStatus,
organizations:MoveAccount,
organizations:ListAccounts,
organizations:ListParents,
organizations:TagResource,
organizations:DescribeAccount,
organizations:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
organizations:DescribeAccount,
organizations:ListParents,
organizations:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
organizations:MoveAccount,
organizations:TagResource,
organizations:UntagResource,
organizations:ListRoots,
organizations:DescribeAccount,
organizations:ListParents,
organizations:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
organizations:CloseAccount
```

</TabItem>
<TabItem value="list">

```json
organizations:ListAccounts
```

</TabItem>
</Tabs>