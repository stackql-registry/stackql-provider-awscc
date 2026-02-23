---
title: delegated_admins
hide_title: false
hide_table_of_contents: false
keywords:
  - delegated_admins
  - securityhub
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

Creates, updates, deletes or gets a <code>delegated_admin</code> resource or lists <code>delegated_admins</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>delegated_admins</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::SecurityHub::DelegatedAdmin&#96;&#96; resource designates the delegated ASHlong administrator account for an organization. You must enable the integration between ASH and AOlong before you can designate a delegated ASH administrator. Only the management account for an organization can designate the delegated ASH administrator account. For more information, see &#91;Designating the delegated administrator&#93;(https://docs.aws.amazon.com/securityhub/latest/userguide/designate-orgs-admin-account.html#designate-admin-instructions) in the &#42;User Guide&#42;.<br />To change the delegated administrator account, remove the current delegated administrator account, and then designate the new account.<br />To designate multiple delegated administrators in different organizations and AWS-Regions, we recommend using &#91;mappings&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/mappings-section-structure.html).<br />Tags aren't supported for this resource.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.securityhub.delegated_admins" /></td></tr>
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
    "name": "delegated_admin_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "admin_account_id",
    "type": "string",
    "description": "The AWS-account identifier of the account to designate as the Security Hub administrator account."
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
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
    "name": "delegated_admin_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-delegatedadmin.html"><code>AWS::SecurityHub::DelegatedAdmin</code></a>.

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
    <td><code>delegated_admins</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AdminAccountId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>delegated_admins</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>delegated_admins_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>delegated_admins</code></td>
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

Gets all properties from an individual <code>delegated_admin</code>.
```sql
SELECT
region,
delegated_admin_identifier,
admin_account_id,
status
FROM awscc.securityhub.delegated_admins
WHERE region = 'us-east-1' AND Identifier = '{{ delegated_admin_identifier }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>delegated_admins</code> in a region.
```sql
SELECT
region,
delegated_admin_identifier
FROM awscc.securityhub.delegated_admins_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>delegated_admin</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.securityhub.delegated_admins (
 AdminAccountId,
 region
)
SELECT
'{{ admin_account_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.securityhub.delegated_admins (
 AdminAccountId,
 region
)
SELECT
 '{{ admin_account_id }}',
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
  - name: delegated_admin
    props:
      - name: admin_account_id
        value: '{{ admin_account_id }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.securityhub.delegated_admins
WHERE Identifier = '{{ delegated_admin_identifier }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>delegated_admins</code> resource, the following permissions are required:

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
securityhub:EnableOrganizationAdminAccount,
organizations:DescribeOrganization,
organizations:EnableAWSServiceAccess,
organizations:RegisterDelegatedAdministrator
```

</TabItem>
<TabItem value="read">

```json
securityhub:ListOrganizationAdminAccounts,
organizations:DescribeOrganization
```

</TabItem>
<TabItem value="delete">

```json
securityhub:DisableOrganizationAdminAccount,
organizations:DescribeOrganization
```

</TabItem>
<TabItem value="list">

```json
securityhub:ListOrganizationAdminAccounts,
organizations:DescribeOrganization
```

</TabItem>
</Tabs>