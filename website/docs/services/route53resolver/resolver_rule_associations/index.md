---
title: resolver_rule_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - resolver_rule_associations
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

Creates, updates, deletes or gets a <code>resolver_rule_association</code> resource or lists <code>resolver_rule_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>resolver_rule_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>In the response to an &#91;AssociateResolverRule&#93;(https://docs.aws.amazon.com/Route53/latest/APIReference/API&#95;route53resolver&#95;AssociateResolverRule.html), &#91;DisassociateResolverRule&#93;(https://docs.aws.amazon.com/Route53/latest/APIReference/API&#95;route53resolver&#95;DisassociateResolverRule.html), or &#91;ListResolverRuleAssociations&#93;(https://docs.aws.amazon.com/Route53/latest/APIReference/API&#95;route53resolver&#95;ListResolverRuleAssociations.html) request, provides information about an association between a resolver rule and a VPC. The association determines which DNS queries that originate in the VPC are forwarded to your network.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53resolver.resolver_rule_associations" /></td></tr>
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
    "name": "vpc_id",
    "type": "string",
    "description": "The ID of the VPC that you associated the Resolver rule with."
  },
  {
    "name": "resolver_rule_id",
    "type": "string",
    "description": "The ID of the Resolver rule that you associated with the VPC that is specified by &#96;&#96;VPCId&#96;&#96;."
  },
  {
    "name": "resolver_rule_association_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of an association between a Resolver rule and a VPC."
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
    "name": "resolver_rule_association_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverruleassociation.html"><code>AWS::Route53Resolver::ResolverRuleAssociation</code></a>.

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
    <td><code>resolver_rule_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="VPCId, ResolverRuleId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>resolver_rule_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>resolver_rule_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>resolver_rule_associations</code></td>
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

Gets all properties from an individual <code>resolver_rule_association</code>.
```sql
SELECT
region,
vpc_id,
resolver_rule_id,
resolver_rule_association_id,
name
FROM awscc.route53resolver.resolver_rule_associations
WHERE region = 'us-east-1' AND Identifier = '<ResolverRuleAssociationId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>resolver_rule_associations</code> in a region.
```sql
SELECT
region,
resolver_rule_association_id
FROM awscc.route53resolver.resolver_rule_associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>resolver_rule_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.route53resolver.resolver_rule_associations (
 VPCId,
 ResolverRuleId,
 region
)
SELECT 
'{{ VPCId }}',
 '{{ ResolverRuleId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.route53resolver.resolver_rule_associations (
 VPCId,
 ResolverRuleId,
 Name,
 region
)
SELECT 
 '{{ VPCId }}',
 '{{ ResolverRuleId }}',
 '{{ Name }}',
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
  - name: resolver_rule_association
    props:
      - name: VPCId
        value: '{{ VPCId }}'
      - name: ResolverRuleId
        value: '{{ ResolverRuleId }}'
      - name: Name
        value: '{{ Name }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.route53resolver.resolver_rule_associations
WHERE Identifier = '<ResolverRuleAssociationId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>resolver_rule_associations</code> resource, the following permissions are required:

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
route53resolver:AssociateResolverRule,
route53resolver:GetResolverRuleAssociation,
ec2:DescribeVpcs
```

</TabItem>
<TabItem value="read">

```json
route53resolver:GetResolverRuleAssociation
```

</TabItem>
<TabItem value="delete">

```json
route53resolver:DisassociateResolverRule,
route53resolver:GetResolverRuleAssociation
```

</TabItem>
<TabItem value="list">

```json
route53resolver:ListResolverRuleAssociations,
ec2:DescribeVpcs
```

</TabItem>
</Tabs>