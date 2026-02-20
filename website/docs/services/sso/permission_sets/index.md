---
title: permission_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - permission_sets
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

Creates, updates, deletes or gets a <code>permission_set</code> resource or lists <code>permission_sets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>permission_sets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for SSO PermissionSet</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sso.permission_sets" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "The name you want to assign to this permission set."
  },
  {
    "name": "permission_set_arn",
    "type": "string",
    "description": "The permission set that the policy will be attached to"
  },
  {
    "name": "description",
    "type": "string",
    "description": "The permission set description."
  },
  {
    "name": "instance_arn",
    "type": "string",
    "description": "The sso instance arn that the permission set is owned."
  },
  {
    "name": "session_duration",
    "type": "string",
    "description": "The length of time that a user can be signed in to an AWS account."
  },
  {
    "name": "relay_state_type",
    "type": "string",
    "description": "The relay state URL that redirect links to any service in the AWS Management Console."
  },
  {
    "name": "managed_policies",
    "type": "array",
    "description": ""
  },
  {
    "name": "inline_policy",
    "type": "object",
    "description": "The inline policy to put in permission set."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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
    "name": "customer_managed_policy_references",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": ""
      },
      {
        "name": "path",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "permissions_boundary",
    "type": "object",
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
    "name": "permission_set_arn",
    "type": "string",
    "description": "The permission set that the policy will be attached to"
  },
  {
    "name": "instance_arn",
    "type": "string",
    "description": "The sso instance arn that the permission set is owned."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-permissionset.html"><code>AWS::SSO::PermissionSet</code></a>.

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
    <td><code>permission_sets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, InstanceArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>permission_sets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>permission_sets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>permission_sets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>permission_sets</code></td>
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

Gets all properties from an individual <code>permission_set</code>.
```sql
SELECT
region,
name,
permission_set_arn,
description,
instance_arn,
session_duration,
relay_state_type,
managed_policies,
inline_policy,
tags,
customer_managed_policy_references,
permissions_boundary
FROM awscc.sso.permission_sets
WHERE region = 'us-east-1' AND Identifier = '<InstanceArn>|<PermissionSetArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>permission_sets</code> in a region.
```sql
SELECT
region,
instance_arn,
permission_set_arn
FROM awscc.sso.permission_sets_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>permission_set</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sso.permission_sets (
 Name,
 InstanceArn,
 region
)
SELECT 
'{{ Name }}',
 '{{ InstanceArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.sso.permission_sets (
 Name,
 Description,
 InstanceArn,
 SessionDuration,
 RelayStateType,
 ManagedPolicies,
 InlinePolicy,
 Tags,
 CustomerManagedPolicyReferences,
 PermissionsBoundary,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ InstanceArn }}',
 '{{ SessionDuration }}',
 '{{ RelayStateType }}',
 '{{ ManagedPolicies }}',
 '{{ InlinePolicy }}',
 '{{ Tags }}',
 '{{ CustomerManagedPolicyReferences }}',
 '{{ PermissionsBoundary }}',
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
  - name: permission_set
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: InstanceArn
        value: '{{ InstanceArn }}'
      - name: SessionDuration
        value: '{{ SessionDuration }}'
      - name: RelayStateType
        value: '{{ RelayStateType }}'
      - name: ManagedPolicies
        value:
          - '{{ ManagedPolicies[0] }}'
      - name: InlinePolicy
        value: {}
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: CustomerManagedPolicyReferences
        value:
          - Name: '{{ Name }}'
            Path: '{{ Path }}'
      - name: PermissionsBoundary
        value:
          CustomerManagedPolicyReference: null
          ManagedPolicyArn: null

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>permission_set</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.sso.permission_sets
SET PatchDocument = string('{{ {
    "Description": description,
    "SessionDuration": session_duration,
    "RelayStateType": relay_state_type,
    "ManagedPolicies": managed_policies,
    "InlinePolicy": inline_policy,
    "Tags": tags,
    "CustomerManagedPolicyReferences": customer_managed_policy_references,
    "PermissionsBoundary": permissions_boundary
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<InstanceArn>|<PermissionSetArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sso.permission_sets
WHERE Identifier = '<InstanceArn|PermissionSetArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>permission_sets</code> resource, the following permissions are required:

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
sso:CreatePermissionSet,
sso:PutInlinePolicyToPermissionSet,
sso:AttachManagedPolicyToPermissionSet,
sso:AttachCustomerManagedPolicyReferenceToPermissionSet,
sso:PutPermissionsBoundaryToPermissionSet,
sso:TagResource,
sso:DescribePermissionSet,
sso:ListTagsForResource,
sso:ListManagedPoliciesInPermissionSet,
sso:ListCustomerManagedPolicyReferencesInPermissionSet,
sso:GetInlinePolicyForPermissionSet,
sso:GetPermissionsBoundaryForPermissionSet
```

</TabItem>
<TabItem value="read">

```json
sso:DescribePermissionSet,
sso:ListTagsForResource,
sso:ListManagedPoliciesInPermissionSet,
sso:ListCustomerManagedPolicyReferencesInPermissionSet,
sso:GetInlinePolicyForPermissionSet,
sso:GetPermissionsBoundaryForPermissionSet
```

</TabItem>
<TabItem value="update">

```json
sso:UpdatePermissionSet,
sso:TagResource,
sso:UntagResource,
sso:ListTagsForResource,
sso:AttachManagedPolicyToPermissionSet,
sso:AttachCustomerManagedPolicyReferenceToPermissionSet,
sso:DetachManagedPolicyFromPermissionSet,
sso:DetachCustomerManagedPolicyReferenceFromPermissionSet,
sso:ListManagedPoliciesInPermissionSet,
sso:ListCustomerManagedPolicyReferencesInPermissionSet,
sso:PutInlinePolicyToPermissionSet,
sso:GetPermissionsBoundaryForPermissionSet,
sso:DeletePermissionsBoundaryFromPermissionSet,
sso:PutPermissionsBoundaryToPermissionSet,
sso:DeleteInlinePolicyFromPermissionSet,
sso:ProvisionPermissionSet,
sso:DescribePermissionSet,
sso:GetInlinePolicyForPermissionSet,
sso:DescribePermissionSetProvisioningStatus
```

</TabItem>
<TabItem value="delete">

```json
sso:DeletePermissionSet
```

</TabItem>
<TabItem value="list">

```json
sso:DescribePermissionSet
```

</TabItem>
</Tabs>