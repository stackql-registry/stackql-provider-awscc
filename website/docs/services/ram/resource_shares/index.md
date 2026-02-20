---
title: resource_shares
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_shares
  - ram
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

Creates, updates, deletes or gets a <code>resource_share</code> resource or lists <code>resource_shares</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>resource_shares</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource type definition for AWS::RAM::ResourceShare</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ram.resource_shares" /></td></tr>
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
    "name": "allow_external_principals",
    "type": "boolean",
    "description": "Specifies whether principals outside your organization in AWS Organizations can be associated with a resource share. A value of &#96;true&#96; lets you share with individual AWS accounts that are not in your organization. A value of &#96;false&#96; only has meaning if your account is a member of an AWS Organization. The default value is &#96;true&#96;."
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": "Specifies the name of the resource share."
  },
  {
    "name": "permission_arns",
    "type": "array",
    "description": "Specifies the &#91;Amazon Resource Names (ARNs)&#93;(https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the AWS RAM permission to associate with the resource share. If you do not specify an ARN for the permission, AWS RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share."
  },
  {
    "name": "principals",
    "type": "array",
    "description": "Specifies the principals to associate with the resource share. The possible values are:<br />- An AWS account ID<br />- An Amazon Resource Name (ARN) of an organization in AWS Organizations<br />- An ARN of an organizational unit (OU) in AWS Organizations<br />- An ARN of an IAM role<br />- An ARN of an IAM user"
  },
  {
    "name": "resource_arns",
    "type": "array",
    "description": "Specifies a list of one or more ARNs of the resources to associate with the resource share."
  },
  {
    "name": "sources",
    "type": "array",
    "description": "Specifies from which source accounts the service principal has access to the resources in this resource share."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Specifies one or more tags to attach to the resource share itself. It doesn't attach the tags to the resources associated with the resource share.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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
    "name": "arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-resourceshare.html"><code>AWS::RAM::ResourceShare</code></a>.

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
    <td><code>resource_shares</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>resource_shares</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>resource_shares</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>resource_shares_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>resource_shares</code></td>
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

Gets all properties from an individual <code>resource_share</code>.
```sql
SELECT
region,
allow_external_principals,
arn,
name,
permission_arns,
principals,
resource_arns,
sources,
tags
FROM awscc.ram.resource_shares
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>resource_shares</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.ram.resource_shares_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>resource_share</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ram.resource_shares (
 Name,
 region
)
SELECT 
'{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ram.resource_shares (
 AllowExternalPrincipals,
 Name,
 PermissionArns,
 Principals,
 ResourceArns,
 Sources,
 Tags,
 region
)
SELECT 
 '{{ AllowExternalPrincipals }}',
 '{{ Name }}',
 '{{ PermissionArns }}',
 '{{ Principals }}',
 '{{ ResourceArns }}',
 '{{ Sources }}',
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
  - name: resource_share
    props:
      - name: AllowExternalPrincipals
        value: '{{ AllowExternalPrincipals }}'
      - name: Name
        value: '{{ Name }}'
      - name: PermissionArns
        value:
          - '{{ PermissionArns[0] }}'
      - name: Principals
        value:
          - '{{ Principals[0] }}'
      - name: ResourceArns
        value:
          - '{{ ResourceArns[0] }}'
      - name: Sources
        value:
          - '{{ Sources[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>resource_share</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ram.resource_shares
SET PatchDocument = string('{{ {
    "AllowExternalPrincipals": allow_external_principals,
    "Name": name,
    "PermissionArns": permission_arns,
    "Principals": principals,
    "ResourceArns": resource_arns,
    "Sources": sources,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ram.resource_shares
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>resource_shares</code> resource, the following permissions are required:

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
ram:CreateResourceShare,
ram:TagResource
```

</TabItem>
<TabItem value="read">

```json
ram:GetResourceShares
```

</TabItem>
<TabItem value="update">

```json
ram:GetPermission,
ram:GetResourceShares,
ram:GetResourceShareAssociations,
ram:ListResourceSharePermissions,
ram:UpdateResourceShare,
ram:AssociateResourceSharePermission,
ram:AssociateResourceShare,
ram:DisassociateResourceShare,
ram:UntagResource,
ram:TagResource
```

</TabItem>
<TabItem value="delete">

```json
ram:DeleteResourceShare,
ram:GetResourceShares
```

</TabItem>
<TabItem value="list">

```json
ram:GetResourceShares
```

</TabItem>
</Tabs>