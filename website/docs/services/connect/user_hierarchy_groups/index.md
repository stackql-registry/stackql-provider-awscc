---
title: user_hierarchy_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - user_hierarchy_groups
  - connect
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

Creates, updates, deletes or gets an <code>user_hierarchy_group</code> resource or lists <code>user_hierarchy_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>user_hierarchy_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Connect::UserHierarchyGroup</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.user_hierarchy_groups" /></td></tr>
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
    "description": "The identifier of the Amazon Connect instance."
  },
  {
    "name": "user_hierarchy_group_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the user hierarchy group."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the user hierarchy group."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "One or more tags.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters"
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. . You can specify a value that is maximum of 256 Unicode characters"
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
    "name": "user_hierarchy_group_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the user hierarchy group."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchygroup.html"><code>AWS::Connect::UserHierarchyGroup</code></a>.

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
    <td><code>user_hierarchy_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, InstanceArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>user_hierarchy_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>user_hierarchy_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>user_hierarchy_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>user_hierarchy_groups</code></td>
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

Gets all properties from an individual <code>user_hierarchy_group</code>.
```sql
SELECT
region,
instance_arn,
user_hierarchy_group_arn,
parent_group_arn,
name,
tags
FROM awscc.connect.user_hierarchy_groups
WHERE region = 'us-east-1' AND Identifier = '<UserHierarchyGroupArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>user_hierarchy_groups</code> in a region.
```sql
SELECT
region,
user_hierarchy_group_arn
FROM awscc.connect.user_hierarchy_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>user_hierarchy_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.connect.user_hierarchy_groups (
 InstanceArn,
 Name,
 region
)
SELECT 
'{{ InstanceArn }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.connect.user_hierarchy_groups (
 InstanceArn,
 ParentGroupArn,
 Name,
 Tags,
 region
)
SELECT 
 '{{ InstanceArn }}',
 '{{ ParentGroupArn }}',
 '{{ Name }}',
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
  - name: user_hierarchy_group
    props:
      - name: InstanceArn
        value: '{{ InstanceArn }}'
      - name: ParentGroupArn
        value: '{{ ParentGroupArn }}'
      - name: Name
        value: '{{ Name }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>user_hierarchy_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.connect.user_hierarchy_groups
SET PatchDocument = string('{{ {
    "InstanceArn": instance_arn,
    "Name": name,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<UserHierarchyGroupArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connect.user_hierarchy_groups
WHERE Identifier = '<UserHierarchyGroupArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>user_hierarchy_groups</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
connect:CreateUserHierarchyGroup,
connect:TagResource
```

</TabItem>
<TabItem value="read">

```json
connect:DescribeUserHierarchyGroup
```

</TabItem>
<TabItem value="delete">

```json
connect:DeleteUserHierarchyGroup,
connect:UntagResource
```

</TabItem>
<TabItem value="update">

```json
connect:UpdateUserHierarchyGroupName,
connect:TagResource,
connect:UntagResource
```

</TabItem>
<TabItem value="list">

```json
connect:ListUserHierarchyGroups
```

</TabItem>
</Tabs>