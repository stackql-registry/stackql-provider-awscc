---
title: rule_groups_namespaces
hide_title: false
hide_table_of_contents: false
keywords:
  - rule_groups_namespaces
  - aps
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

Creates, updates, deletes or gets a <code>rule_groups_namespace</code> resource or lists <code>rule_groups_namespaces</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>rule_groups_namespaces</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>RuleGroupsNamespace schema for cloudformation.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.aps.rule_groups_namespaces" /></td></tr>
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
    "name": "workspace",
    "type": "string",
    "description": "Required to identify a specific APS Workspace associated with this RuleGroupsNamespace."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The RuleGroupsNamespace name."
  },
  {
    "name": "data",
    "type": "string",
    "description": "The RuleGroupsNamespace data."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The RuleGroupsNamespace ARN."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
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
    "description": "The RuleGroupsNamespace ARN."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-rulegroupsnamespace.html"><code>AWS::APS::RuleGroupsNamespace</code></a>.

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
    <td><code>rule_groups_namespaces</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Workspace, Data, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>rule_groups_namespaces</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>rule_groups_namespaces</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>rule_groups_namespaces_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>rule_groups_namespaces</code></td>
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

Gets all properties from an individual <code>rule_groups_namespace</code>.
```sql
SELECT
region,
workspace,
name,
data,
arn,
tags
FROM awscc.aps.rule_groups_namespaces
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>rule_groups_namespaces</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.aps.rule_groups_namespaces_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>rule_groups_namespace</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.aps.rule_groups_namespaces (
 Workspace,
 Name,
 Data,
 region
)
SELECT 
'{{ Workspace }}',
 '{{ Name }}',
 '{{ Data }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.aps.rule_groups_namespaces (
 Workspace,
 Name,
 Data,
 Tags,
 region
)
SELECT 
 '{{ Workspace }}',
 '{{ Name }}',
 '{{ Data }}',
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
  - name: rule_groups_namespace
    props:
      - name: Workspace
        value: '{{ Workspace }}'
      - name: Name
        value: '{{ Name }}'
      - name: Data
        value: '{{ Data }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>rule_groups_namespace</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.aps.rule_groups_namespaces
SET PatchDocument = string('{{ {
    "Data": data,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.aps.rule_groups_namespaces
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>rule_groups_namespaces</code> resource, the following permissions are required:

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
aps:CreateRuleGroupsNamespace,
aps:DescribeRuleGroupsNamespace,
aps:TagResource
```

</TabItem>
<TabItem value="read">

```json
aps:DescribeRuleGroupsNamespace,
aps:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
aps:PutRuleGroupsNamespace,
aps:DescribeRuleGroupsNamespace,
aps:TagResource,
aps:UntagResource,
aps:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
aps:DeleteRuleGroupsNamespace,
aps:DescribeRuleGroupsNamespace
```

</TabItem>
<TabItem value="list">

```json
aps:ListRuleGroupsNamespaces,
aps:ListTagsForResource
```

</TabItem>
</Tabs>