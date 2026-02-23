---
title: rule_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - rule_groups
  - networkfirewall
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

Creates, updates, deletes or gets a <code>rule_group</code> resource or lists <code>rule_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>rule_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource type definition for AWS::NetworkFirewall::RuleGroup</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.networkfirewall.rule_groups" /></td></tr>
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
    "name": "rule_group_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "rule_group_arn",
    "type": "string",
    "description": "A resource ARN."
  },
  {
    "name": "rule_group_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "rule_group",
    "type": "object",
    "description": "Resource type definition for AWS::NetworkFirewall::RuleGroup",
    "children": [
      {
        "name": "rule_group_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "rule_group_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "capacity",
        "type": "integer",
        "description": ""
      },
      {
        "name": "summary_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "rule_options",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "description",
        "type": "string",
        "description": ""
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
      }
    ]
  },
  {
    "name": "type",
    "type": "string",
    "description": ""
  },
  {
    "name": "capacity",
    "type": "integer",
    "description": ""
  },
  {
    "name": "summary_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "rule_options",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "rule_group_arn",
    "type": "string",
    "description": "A resource ARN."
  },
  {
    "name": "rule_group",
    "type": "object",
    "description": "Resource type definition for AWS::NetworkFirewall::RuleGroup",
    "children": [
      {
        "name": "rule_group_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "rule_group_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "capacity",
        "type": "integer",
        "description": ""
      },
      {
        "name": "summary_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "rule_options",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "description",
        "type": "string",
        "description": ""
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
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html"><code>AWS::NetworkFirewall::RuleGroup</code></a>.

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
    <td><code>rule_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Type, Capacity, RuleGroupName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>rule_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>rule_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>rule_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>rule_groups</code></td>
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

Gets all properties from an individual <code>rule_group</code>.
```sql
SELECT
region,
rule_group_name,
rule_group_arn,
rule_group_id,
rule_group,
type,
capacity,
summary_configuration,
description,
tags
FROM awscc.networkfirewall.rule_groups
WHERE region = 'us-east-1' AND Identifier = '{{ rule_group_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>rule_groups</code> in a region.
```sql
SELECT
region,
rule_group_arn
FROM awscc.networkfirewall.rule_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>rule_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.networkfirewall.rule_groups (
 RuleGroupName,
 Type,
 Capacity,
 region
)
SELECT
'{{ rule_group_name }}',
 '{{ type }}',
 '{{ capacity }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.networkfirewall.rule_groups (
 RuleGroupName,
 RuleGroup,
 Type,
 Capacity,
 SummaryConfiguration,
 Description,
 Tags,
 region
)
SELECT
 '{{ rule_group_name }}',
 '{{ rule_group }}',
 '{{ type }}',
 '{{ capacity }}',
 '{{ summary_configuration }}',
 '{{ description }}',
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
  - name: rule_group
    props:
      - name: rule_group_name
        value: '{{ rule_group_name }}'
      - name: rule_group
        value:
          rule_group_name: '{{ rule_group_name }}'
          rule_group: null
          type: '{{ type }}'
          capacity: '{{ capacity }}'
          summary_configuration:
            rule_options:
              - '{{ rule_options[0] }}'
          description: '{{ description }}'
          tags:
            - key: '{{ key }}'
              value: '{{ value }}'
      - name: type
        value: '{{ type }}'
      - name: capacity
        value: '{{ capacity }}'
      - name: summary_configuration
        value:
          rule_options:
            - null
      - name: description
        value: '{{ description }}'
      - name: tags
        value:
          - null
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>rule_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.networkfirewall.rule_groups
SET PatchDocument = string('{{ {
    "RuleGroup": rule_group,
    "SummaryConfiguration": summary_configuration,
    "Description": description,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ rule_group_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.networkfirewall.rule_groups
WHERE Identifier = '{{ rule_group_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>rule_groups</code> resource, the following permissions are required:

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
network-firewall:CreateRuleGroup,
network-firewall:DescribeRuleGroup,
network-firewall:TagResource,
network-firewall:ListRuleGroups,
iam:CreateServiceLinkedRole,
ec2:GetManagedPrefixListEntries,
ec2:DescribeManagedPrefixLists
```

</TabItem>
<TabItem value="read">

```json
network-firewall:DescribeRuleGroup,
network-firewall:ListTagsForResources
```

</TabItem>
<TabItem value="update">

```json
network-firewall:UpdateRuleGroup,
network-firewall:DescribeRuleGroup,
network-firewall:TagResource,
network-firewall:UntagResource,
iam:CreateServiceLinkedRole,
ec2:GetManagedPrefixListEntries,
ec2:DescribeManagedPrefixLists
```

</TabItem>
<TabItem value="delete">

```json
network-firewall:DeleteRuleGroup,
network-firewall:DescribeRuleGroup,
network-firewall:UntagResource
```

</TabItem>
<TabItem value="list">

```json
network-firewall:ListRuleGroups
```

</TabItem>
</Tabs>