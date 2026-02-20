---
title: firewall_rule_group_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_rule_group_associations
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

Creates, updates, deletes or gets a <code>firewall_rule_group_association</code> resource or lists <code>firewall_rule_group_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>firewall_rule_group_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::Route53Resolver::FirewallRuleGroupAssociation.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53resolver.firewall_rule_group_associations" /></td></tr>
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
    "description": "Id"
  },
  {
    "name": "arn",
    "type": "string",
    "description": "Arn"
  },
  {
    "name": "firewall_rule_group_id",
    "type": "string",
    "description": "FirewallRuleGroupId"
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": "VpcId"
  },
  {
    "name": "name",
    "type": "string",
    "description": "FirewallRuleGroupAssociationName"
  },
  {
    "name": "priority",
    "type": "integer",
    "description": "Priority"
  },
  {
    "name": "mutation_protection",
    "type": "string",
    "description": "MutationProtectionStatus"
  },
  {
    "name": "managed_owner_name",
    "type": "string",
    "description": "ServicePrincipal"
  },
  {
    "name": "status",
    "type": "string",
    "description": "ResolverFirewallRuleGroupAssociation, possible values are COMPLETE, DELETING, UPDATING, and INACTIVE&#95;OWNER&#95;ACCOUNT&#95;CLOSED."
  },
  {
    "name": "status_message",
    "type": "string",
    "description": "FirewallDomainListAssociationStatus"
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
    "description": "Id"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html"><code>AWS::Route53Resolver::FirewallRuleGroupAssociation</code></a>.

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
    <td><code>firewall_rule_group_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="FirewallRuleGroupId, VpcId, Priority, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>firewall_rule_group_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>firewall_rule_group_associations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>firewall_rule_group_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>firewall_rule_group_associations</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>firewall_rule_group_association</code>.
```sql
SELECT
region,
id,
arn,
firewall_rule_group_id,
vpc_id,
name,
priority,
mutation_protection,
managed_owner_name,
status,
status_message,
creator_request_id,
creation_time,
modification_time,
tags
FROM awscc.route53resolver.firewall_rule_group_associations
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>firewall_rule_group_associations</code> in a region.
```sql
SELECT
region,
id
FROM awscc.route53resolver.firewall_rule_group_associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>firewall_rule_group_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.route53resolver.firewall_rule_group_associations (
 FirewallRuleGroupId,
 VpcId,
 Priority,
 region
)
SELECT 
'{{ FirewallRuleGroupId }}',
 '{{ VpcId }}',
 '{{ Priority }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.route53resolver.firewall_rule_group_associations (
 FirewallRuleGroupId,
 VpcId,
 Name,
 Priority,
 MutationProtection,
 Tags,
 region
)
SELECT 
 '{{ FirewallRuleGroupId }}',
 '{{ VpcId }}',
 '{{ Name }}',
 '{{ Priority }}',
 '{{ MutationProtection }}',
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
  - name: firewall_rule_group_association
    props:
      - name: FirewallRuleGroupId
        value: '{{ FirewallRuleGroupId }}'
      - name: VpcId
        value: '{{ VpcId }}'
      - name: Name
        value: '{{ Name }}'
      - name: Priority
        value: '{{ Priority }}'
      - name: MutationProtection
        value: '{{ MutationProtection }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.route53resolver.firewall_rule_group_associations
SET data__PatchDocument = string('{{ {
    "Name": name,
    "Priority": priority,
    "MutationProtection": mutation_protection,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.route53resolver.firewall_rule_group_associations
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>firewall_rule_group_associations</code> resource, the following permissions are required:

### Create
```json
route53resolver:AssociateFirewallRuleGroup,
route53resolver:GetFirewallRuleGroupAssociation,
route53resolver:TagResource,
route53resolver:ListTagsForResource,
ec2:DescribeVpcs
```

### Read
```json
route53resolver:GetFirewallRuleGroupAssociation,
route53resolver:ListTagsForResource
```

### List
```json
route53resolver:ListFirewallRuleGroupAssociations,
route53resolver:ListTagsForResource
```

### Delete
```json
route53resolver:DisassociateFirewallRuleGroup,
route53resolver:GetFirewallRuleGroupAssociation,
route53resolver:UntagResource,
route53resolver:ListTagsForResource
```

### Update
```json
route53resolver:UpdateFirewallRuleGroupAssociation,
route53resolver:GetFirewallRuleGroupAssociation,
route53resolver:TagResource,
route53resolver:UntagResource,
route53resolver:ListTagsForResource
```
