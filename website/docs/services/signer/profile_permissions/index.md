---
title: profile_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - profile_permissions
  - signer
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

Creates, updates, deletes or gets a <code>profile_permission</code> resource or lists <code>profile_permissions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>profile_permissions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An example resource schema demonstrating some basic constructs and validation rules.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.signer.profile_permissions" /></td></tr>
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
    "name": "profile_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "profile_version",
    "type": "string",
    "description": ""
  },
  {
    "name": "action",
    "type": "string",
    "description": ""
  },
  {
    "name": "principal",
    "type": "string",
    "description": ""
  },
  {
    "name": "statement_id",
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
    "name": "profile_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "statement_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-profilepermission.html"><code>AWS::Signer::ProfilePermission</code></a>.

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
    <td><code>profile_permissions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ProfileName, Action, Principal, StatementId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>profile_permissions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>profile_permissions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>profile_permissions</code></td>
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

Gets all properties from an individual <code>profile_permission</code>.
```sql
SELECT
region,
profile_name,
profile_version,
action,
principal,
statement_id
FROM awscc.signer.profile_permissions
WHERE region = 'us-east-1' AND Identifier = '<StatementId>|<ProfileName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>profile_permissions</code> in a region.
```sql
SELECT
region,
statement_id,
profile_name
FROM awscc.signer.profile_permissions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>profile_permission</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.signer.profile_permissions (
 ProfileName,
 Action,
 Principal,
 StatementId,
 region
)
SELECT 
'{{ ProfileName }}',
 '{{ Action }}',
 '{{ Principal }}',
 '{{ StatementId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.signer.profile_permissions (
 ProfileName,
 ProfileVersion,
 Action,
 Principal,
 StatementId,
 region
)
SELECT 
 '{{ ProfileName }}',
 '{{ ProfileVersion }}',
 '{{ Action }}',
 '{{ Principal }}',
 '{{ StatementId }}',
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
  - name: profile_permission
    props:
      - name: ProfileName
        value: '{{ ProfileName }}'
      - name: ProfileVersion
        value: '{{ ProfileVersion }}'
      - name: Action
        value: '{{ Action }}'
      - name: Principal
        value: '{{ Principal }}'
      - name: StatementId
        value: '{{ StatementId }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.signer.profile_permissions
WHERE Identifier = '<StatementId|ProfileName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>profile_permissions</code> resource, the following permissions are required:

### Create
```json
signer:AddProfilePermission,
signer:ListProfilePermissions
```

### Read
```json
signer:ListProfilePermissions
```

### Delete
```json
signer:RemoveProfilePermission,
signer:ListProfilePermissions
```

### List
```json
signer:ListProfilePermissions,
signer:GetSigningProfile
```
