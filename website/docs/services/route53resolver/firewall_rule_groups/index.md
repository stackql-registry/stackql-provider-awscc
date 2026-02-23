---
title: firewall_rule_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_rule_groups
  - route53resolver
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

Creates, updates, deletes or gets a <code>firewall_rule_group</code> resource or lists <code>firewall_rule_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>firewall_rule_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::Route53Resolver::FirewallRuleGroup.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53resolver.firewall_rule_groups" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": "ResourceId"
  },
  {
    "name": "arn",
    "type": "string",
    "description": "Arn"
  },
  {
    "name": "name",
    "type": "string",
    "description": "FirewallRuleGroupName"
  },
  {
    "name": "rule_count",
    "type": "integer",
    "description": "Count"
  },
  {
    "name": "status",
    "type": "string",
    "description": "ResolverFirewallRuleGroupAssociation, possible values are COMPLETE, DELETING, UPDATING, and INACTIVE&#95;OWNER&#95;ACCOUNT&#95;CLOSED."
  },
  {
    "name": "status_message",
    "type": "string",
    "description": "FirewallRuleGroupStatus"
  },
  {
    "name": "owner_id",
    "type": "string",
    "description": "AccountId"
  },
  {
    "name": "share_status",
    "type": "string",
    "description": "ShareStatus, possible values are NOT&#95;SHARED, SHARED&#95;WITH&#95;ME, SHARED&#95;BY&#95;ME."
  },
  {
    "name": "creator_request_id",
    "type": "string",
    "description": "The id of the creator request."
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "Rfc3339TimeString"
  },
  {
    "name": "modification_time",
    "type": "string",
    "description": "Rfc3339TimeString"
  },
  {
    "name": "firewall_rules",
    "type": "array",
    "description": "FirewallRules",
    "children": [
      {
        "name": "firewall_domain_list_id",
        "type": "string",
        "description": "ResourceId"
      },
      {
        "name": "firewall_threat_protection_id",
        "type": "string",
        "description": "ResourceId"
      },
      {
        "name": "priority",
        "type": "integer",
        "description": "Rule Priority"
      },
      {
        "name": "action",
        "type": "string",
        "description": "Rule Action"
      },
      {
        "name": "block_response",
        "type": "string",
        "description": "BlockResponse"
      },
      {
        "name": "block_override_domain",
        "type": "string",
        "description": "BlockOverrideDomain"
      },
      {
        "name": "block_override_dns_type",
        "type": "string",
        "description": "BlockOverrideDnsType"
      },
      {
        "name": "block_override_ttl",
        "type": "integer",
        "description": "BlockOverrideTtl"
      },
      {
        "name": "qtype",
        "type": "string",
        "description": "Qtype"
      },
      {
        "name": "confidence_threshold",
        "type": "string",
        "description": "FirewallDomainRedirectionAction"
      },
      {
        "name": "dns_threat_protection",
        "type": "string",
        "description": "FirewallDomainRedirectionAction"
      },
      {
        "name": "firewall_domain_redirection_action",
        "type": "string",
        "description": "FirewallDomainRedirectionAction"
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags",
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
    "name": "id",
    "type": "string",
    "description": "ResourceId"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroup.html"><code>AWS::Route53Resolver::FirewallRuleGroup</code></a>.

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
    <td><code>firewall_rule_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>firewall_rule_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>firewall_rule_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>firewall_rule_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>firewall_rule_groups</code></td>
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

Gets all properties from an individual <code>firewall_rule_group</code>.
```sql
SELECT
region,
id,
arn,
name,
rule_count,
status,
status_message,
owner_id,
share_status,
creator_request_id,
creation_time,
modification_time,
firewall_rules,
tags
FROM awscc.route53resolver.firewall_rule_groups
WHERE region = 'us-east-1' AND Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>firewall_rule_groups</code> in a region.
```sql
SELECT
region,
id
FROM awscc.route53resolver.firewall_rule_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>firewall_rule_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.route53resolver.firewall_rule_groups (
 Name,
 FirewallRules,
 Tags,
 region
)
SELECT
'{{ name }}',
 '{{ firewall_rules }}',
 '{{ tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.route53resolver.firewall_rule_groups (
 Name,
 FirewallRules,
 Tags,
 region
)
SELECT
 '{{ name }}',
 '{{ firewall_rules }}',
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
  - name: firewall_rule_group
    props:
      - name: name
        value: '{{ name }}'
      - name: firewall_rules
        value:
          - firewall_domain_list_id: '{{ firewall_domain_list_id }}'
            firewall_threat_protection_id: '{{ firewall_threat_protection_id }}'
            priority: '{{ priority }}'
            action: '{{ action }}'
            block_response: '{{ block_response }}'
            block_override_domain: '{{ block_override_domain }}'
            block_override_dns_type: '{{ block_override_dns_type }}'
            block_override_ttl: '{{ block_override_ttl }}'
            qtype: '{{ qtype }}'
            confidence_threshold: '{{ confidence_threshold }}'
            dns_threat_protection: '{{ dns_threat_protection }}'
            firewall_domain_redirection_action: '{{ firewall_domain_redirection_action }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>firewall_rule_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.route53resolver.firewall_rule_groups
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.route53resolver.firewall_rule_groups
WHERE Identifier = '{{ id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>firewall_rule_groups</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
route53resolver:CreateFirewallRuleGroup,
route53resolver:GetFirewallRuleGroup,
route53resolver:ListFirewallRules,
route53resolver:CreateFirewallRule,
route53resolver:DeleteFirewallRule,
route53resolver:TagResource,
route53resolver:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
route53resolver:GetFirewallRuleGroup,
route53resolver:ListFirewallRules,
route53resolver:ListTagsForResource
```

</TabItem>
<TabItem value="list">

```json
route53resolver:ListFirewallRuleGroups,
route53resolver:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
route53resolver:GetFirewallRuleGroup,
route53resolver:DeleteFirewallRuleGroup,
route53resolver:ListFirewallRules,
route53resolver:DeleteFirewallRule,
route53resolver:UntagResource,
route53resolver:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
route53resolver:GetFirewallRuleGroup,
route53resolver:ListFirewallRules,
route53resolver:CreateFirewallRule,
route53resolver:UpdateFirewallRule,
route53resolver:DeleteFirewallRule,
route53resolver:TagResource,
route53resolver:UntagResource,
route53resolver:ListTagsForResource
```

</TabItem>
</Tabs>