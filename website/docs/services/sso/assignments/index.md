---
title: assignments
hide_title: false
hide_table_of_contents: false
keywords:
  - assignments
  - sso
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

Creates, updates, deletes or gets an <code>assignment</code> resource or lists <code>assignments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>assignments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for SSO assignmet</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sso.assignments" /></td></tr>
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
    "name": "instance_arn",
    "type": "string",
    "description": "The sso instance that the permission set is owned."
  },
  {
    "name": "target_id",
    "type": "string",
    "description": "The account id to be provisioned."
  },
  {
    "name": "target_type",
    "type": "string",
    "description": "The type of resource to be provsioned to, only aws account now"
  },
  {
    "name": "permission_set_arn",
    "type": "string",
    "description": "The permission set that the assignemt will be assigned"
  },
  {
    "name": "principal_type",
    "type": "string",
    "description": "The assignee's type, user/group"
  },
  {
    "name": "principal_id",
    "type": "string",
    "description": "The assignee's identifier, user id/group id"
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
    "name": "instance_arn",
    "type": "string",
    "description": "The sso instance that the permission set is owned."
  },
  {
    "name": "target_id",
    "type": "string",
    "description": "The account id to be provisioned."
  },
  {
    "name": "target_type",
    "type": "string",
    "description": "The type of resource to be provsioned to, only aws account now"
  },
  {
    "name": "permission_set_arn",
    "type": "string",
    "description": "The permission set that the assignemt will be assigned"
  },
  {
    "name": "principal_type",
    "type": "string",
    "description": "The assignee's type, user/group"
  },
  {
    "name": "principal_id",
    "type": "string",
    "description": "The assignee's identifier, user id/group id"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-assignment.html"><code>AWS::SSO::Assignment</code></a>.

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
    <td><code>assignments</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="InstanceArn, TargetId, TargetType, PermissionSetArn, PrincipalType, PrincipalId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>assignments</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>assignments_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>assignments</code></td>
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

Gets all properties from an individual <code>assignment</code>.
```sql
SELECT
region,
instance_arn,
target_id,
target_type,
permission_set_arn,
principal_type,
principal_id
FROM awscc.sso.assignments
WHERE region = 'us-east-1' AND Identifier = '<InstanceArn>|<TargetId>|<TargetType>|<PermissionSetArn>|<PrincipalType>|<PrincipalId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>assignments</code> in a region.
```sql
SELECT
region,
instance_arn,
target_id,
target_type,
permission_set_arn,
principal_type,
principal_id
FROM awscc.sso.assignments_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>assignment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sso.assignments (
 InstanceArn,
 TargetId,
 TargetType,
 PermissionSetArn,
 PrincipalType,
 PrincipalId,
 region
)
SELECT 
'{{ InstanceArn }}',
 '{{ TargetId }}',
 '{{ TargetType }}',
 '{{ PermissionSetArn }}',
 '{{ PrincipalType }}',
 '{{ PrincipalId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.sso.assignments (
 InstanceArn,
 TargetId,
 TargetType,
 PermissionSetArn,
 PrincipalType,
 PrincipalId,
 region
)
SELECT 
 '{{ InstanceArn }}',
 '{{ TargetId }}',
 '{{ TargetType }}',
 '{{ PermissionSetArn }}',
 '{{ PrincipalType }}',
 '{{ PrincipalId }}',
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
  - name: assignment
    props:
      - name: InstanceArn
        value: '{{ InstanceArn }}'
      - name: TargetId
        value: '{{ TargetId }}'
      - name: TargetType
        value: '{{ TargetType }}'
      - name: PermissionSetArn
        value: '{{ PermissionSetArn }}'
      - name: PrincipalType
        value: '{{ PrincipalType }}'
      - name: PrincipalId
        value: '{{ PrincipalId }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sso.assignments
WHERE Identifier = '<InstanceArn|TargetId|TargetType|PermissionSetArn|PrincipalType|PrincipalId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>assignments</code> resource, the following permissions are required:

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
sso:CreateAccountAssignment,
sso:DescribeAccountAssignmentCreationStatus,
sso:ListAccountAssignments,
iam:GetSAMLProvider,
iam:CreateSAMLProvider,
iam:AttachRolePolicy,
iam:PutRolePolicy,
iam:CreateRole,
iam:ListRolePolicies
```

</TabItem>
<TabItem value="read">

```json
sso:ListAccountAssignments,
iam:GetSAMLProvider,
iam:ListRolePolicies
```

</TabItem>
<TabItem value="delete">

```json
sso:ListAccountAssignments,
sso:DeleteAccountAssignment,
sso:DescribeAccountAssignmentDeletionStatus,
iam:GetSAMLProvider,
iam:ListRolePolicies
```

</TabItem>
<TabItem value="list">

```json
sso:ListAccountAssignments,
iam:ListRolePolicies
```

</TabItem>
</Tabs>