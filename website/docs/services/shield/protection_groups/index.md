---
title: protection_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - protection_groups
  - shield
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

Creates, updates, deletes or gets a <code>protection_group</code> resource or lists <code>protection_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>protection_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.shield.protection_groups" /></td></tr>
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
    "name": "protection_group_id",
    "type": "string",
    "description": "The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it."
  },
  {
    "name": "protection_group_arn",
    "type": "string",
    "description": "The ARN (Amazon Resource Name) of the protection group."
  },
  {
    "name": "aggregation",
    "type": "string",
    "description": "Defines how AWS Shield combines resource data for the group in order to detect, mitigate, and report events.<br />&#42; Sum - Use the total traffic across the group. This is a good choice for most cases. Examples include Elastic IP addresses for EC2 instances that scale manually or automatically.<br />&#42; Mean - Use the average of the traffic across the group. This is a good choice for resources that share traffic uniformly. Examples include accelerators and load balancers.<br />&#42; Max - Use the highest traffic from each resource. This is useful for resources that don't share traffic and for resources that share that traffic in a non-uniform way. Examples include Amazon CloudFront and origin resources for CloudFront distributions."
  },
  {
    "name": "pattern",
    "type": "string",
    "description": "The criteria to use to choose the protected resources for inclusion in the group. You can include all resources that have protections, provide a list of resource Amazon Resource Names (ARNs), or include all resources of a specified resource type."
  },
  {
    "name": "members",
    "type": "array",
    "description": "The Amazon Resource Names (ARNs) of the resources to include in the protection group. You must set this when you set &#96;Pattern&#96; to &#96;ARBITRARY&#96; and you must not set it for any other &#96;Pattern&#96; setting."
  },
  {
    "name": "resource_type",
    "type": "string",
    "description": "The resource type to include in the protection group. All protected resources of this type are included in the protection group. Newly protected resources of this type are automatically added to the group. You must set this when you set &#96;Pattern&#96; to &#96;BY&#95;RESOURCE&#95;TYPE&#96; and you must not set it for any other &#96;Pattern&#96; setting."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "One or more tag key-value pairs for the Protection object.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as \"customer.\" Tag keys are case-sensitive."
      },
      {
        "name": "value",
        "type": "string",
        "description": "Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as \"companyA\" or \"companyB.\" Tag values are case-sensitive."
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
    "name": "protection_group_arn",
    "type": "string",
    "description": "The ARN (Amazon Resource Name) of the protection group."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-protectiongroup.html"><code>AWS::Shield::ProtectionGroup</code></a>.

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
    <td><code>protection_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Aggregation, Pattern, ProtectionGroupId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>protection_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>protection_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>protection_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>protection_groups</code></td>
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

Gets all properties from an individual <code>protection_group</code>.
```sql
SELECT
region,
protection_group_id,
protection_group_arn,
aggregation,
pattern,
members,
resource_type,
tags
FROM awscc.shield.protection_groups
WHERE region = 'us-east-1' AND Identifier = '{{ protection_group_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>protection_groups</code> in a region.
```sql
SELECT
region,
protection_group_arn
FROM awscc.shield.protection_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>protection_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.shield.protection_groups (
 ProtectionGroupId,
 Aggregation,
 Pattern,
 region
)
SELECT
'{{ protection_group_id }}',
 '{{ aggregation }}',
 '{{ pattern }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.shield.protection_groups (
 ProtectionGroupId,
 Aggregation,
 Pattern,
 Members,
 ResourceType,
 Tags,
 region
)
SELECT
 '{{ protection_group_id }}',
 '{{ aggregation }}',
 '{{ pattern }}',
 '{{ members }}',
 '{{ resource_type }}',
 '{{ tags }}',
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
  - name: protection_group
    props:
      - name: protection_group_id
        value: '{{ protection_group_id }}'
      - name: aggregation
        value: '{{ aggregation }}'
      - name: pattern
        value: '{{ pattern }}'
      - name: members
        value:
          - '{{ members[0] }}'
      - name: resource_type
        value: '{{ resource_type }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>protection_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.shield.protection_groups
SET PatchDocument = string('{{ {
    "Aggregation": aggregation,
    "Pattern": pattern,
    "Members": members,
    "ResourceType": resource_type,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ protection_group_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.shield.protection_groups
WHERE Identifier = '{{ protection_group_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>protection_groups</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
shield:CreateProtectionGroup,
shield:TagResource
```

</TabItem>
<TabItem value="delete">

```json
shield:DeleteProtectionGroup,
shield:UntagResource
```

</TabItem>
<TabItem value="read">

```json
shield:DescribeProtectionGroup,
shield:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
shield:UpdateProtectionGroup,
shield:ListTagsForResource,
shield:TagResource,
shield:UntagResource
```

</TabItem>
<TabItem value="list">

```json
shield:ListProtectionGroups
```

</TabItem>
</Tabs>