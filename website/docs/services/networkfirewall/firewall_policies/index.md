---
title: firewall_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_policies
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

Creates, updates, deletes or gets a <code>firewall_policy</code> resource or lists <code>firewall_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>firewall_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource type definition for AWS::NetworkFirewall::FirewallPolicy</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.networkfirewall.firewall_policies" /></td></tr>
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
    "name": "firewall_policy_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "firewall_policy_arn",
    "type": "string",
    "description": "A resource ARN."
  },
  {
    "name": "firewall_policy",
    "type": "object",
    "description": "Resource type definition for AWS::NetworkFirewall::FirewallPolicy",
    "children": [
      {
        "name": "firewall_policy_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "firewall_policy_id",
        "type": "string",
        "description": ""
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
    "name": "firewall_policy_id",
    "type": "string",
    "description": ""
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
    "name": "firewall_policy_arn",
    "type": "string",
    "description": "A resource ARN."
  },
  {
    "name": "firewall_policy",
    "type": "object",
    "description": "Resource type definition for AWS::NetworkFirewall::FirewallPolicy",
    "children": [
      {
        "name": "firewall_policy_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "firewall_policy_id",
        "type": "string",
        "description": ""
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewallpolicy.html"><code>AWS::NetworkFirewall::FirewallPolicy</code></a>.

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
    <td><code>firewall_policies</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="FirewallPolicyName, FirewallPolicy, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>firewall_policies</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>firewall_policies</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>firewall_policies_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>firewall_policies</code></td>
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

Gets all properties from an individual <code>firewall_policy</code>.
```sql
SELECT
region,
firewall_policy_name,
firewall_policy_arn,
firewall_policy,
firewall_policy_id,
description,
tags
FROM awscc.networkfirewall.firewall_policies
WHERE region = 'us-east-1' AND Identifier = '{{ firewall_policy_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>firewall_policies</code> in a region.
```sql
SELECT
region,
firewall_policy_arn
FROM awscc.networkfirewall.firewall_policies_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>firewall_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.networkfirewall.firewall_policies (
 FirewallPolicyName,
 FirewallPolicy,
 region
)
SELECT
'{{ firewall_policy_name }}',
 '{{ firewall_policy }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.networkfirewall.firewall_policies (
 FirewallPolicyName,
 FirewallPolicy,
 Description,
 Tags,
 region
)
SELECT
 '{{ firewall_policy_name }}',
 '{{ firewall_policy }}',
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
  - name: firewall_policy
    props:
      - name: firewall_policy_name
        value: '{{ firewall_policy_name }}'
      - name: firewall_policy
        value:
          firewall_policy_name: '{{ firewall_policy_name }}'
          firewall_policy: null
          description: '{{ description }}'
          tags:
            - key: '{{ key }}'
              value: '{{ value }}'
      - name: description
        value: '{{ description }}'
      - name: tags
        value:
          - null
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>firewall_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.networkfirewall.firewall_policies
SET PatchDocument = string('{{ {
    "FirewallPolicy": firewall_policy,
    "Description": description,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ firewall_policy_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.networkfirewall.firewall_policies
WHERE Identifier = '{{ firewall_policy_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>firewall_policies</code> resource, the following permissions are required:

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
network-firewall:CreateFirewallPolicy,
network-firewall:DescribeFirewallPolicy,
network-firewall:ListTLSInspectionConfigurations,
network-firewall:TagResource,
network-firewall:ListRuleGroups
```

</TabItem>
<TabItem value="read">

```json
network-firewall:DescribeFirewallPolicy,
network-firewall:ListTagsForResources
```

</TabItem>
<TabItem value="update">

```json
network-firewall:UpdateFirewallPolicy,
network-firewall:DescribeFirewallPolicy,
network-firewall:TagResource,
network-firewall:UntagResource,
network-firewall:ListRuleGroups,
network-firewall:ListTLSInspectionConfigurations
```

</TabItem>
<TabItem value="delete">

```json
network-firewall:DeleteFirewallPolicy,
network-firewall:DescribeFirewallPolicy,
network-firewall:UntagResource
```

</TabItem>
<TabItem value="list">

```json
network-firewall:ListFirewallPolicies
```

</TabItem>
</Tabs>