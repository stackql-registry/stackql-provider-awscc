---
title: resolver_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - resolver_rules
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

Creates, updates, deletes or gets a <code>resolver_rule</code> resource or lists <code>resolver_rules</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>resolver_rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Route53Resolver::ResolverRule</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53resolver.resolver_rules" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "resolver_endpoint_id",
    "type": "string",
    "description": "The ID of the endpoint that the rule is associated with."
  },
  {
    "name": "domain_name",
    "type": "string",
    "description": "DNS queries for this domain name are forwarded to the IP addresses that are specified in TargetIps"
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name for the Resolver rule"
  },
  {
    "name": "rule_type",
    "type": "string",
    "description": "When you want to forward DNS queries for specified domain name to resolvers on your network, specify FORWARD. When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for a subdomain of that domain, specify SYSTEM."
  },
  {
    "name": "delegation_record",
    "type": "string",
    "description": "The name server domain for queries to be delegated to if a query matches the delegation record."
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
    "name": "target_ips",
    "type": "array",
    "description": "An array that contains the IP addresses and ports that an outbound endpoint forwards DNS queries to. Typically, these are the IP addresses of DNS resolvers on your network. Specify IPv4 addresses. IPv6 is not supported.",
    "children": [
      {
        "name": "ip",
        "type": "string",
        "description": "One IP address that you want to forward DNS queries to. You can specify only IPv4 addresses."
      },
      {
        "name": "ipv6",
        "type": "string",
        "description": "One IPv6 address that you want to forward DNS queries to. You can specify only IPv6 addresses."
      },
      {
        "name": "port",
        "type": "string",
        "description": "The port at Ip that you want to forward DNS queries to."
      },
      {
        "name": "protocol",
        "type": "string",
        "description": "The protocol that you want to use to forward DNS queries."
      },
      {
        "name": "server_name_indication",
        "type": "string",
        "description": "The SNI of the target name servers for DoH/DoH-FIPS outbound endpoints"
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the resolver rule."
  },
  {
    "name": "resolver_rule_id",
    "type": "string",
    "description": "The ID of the endpoint that the rule is associated with."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverrule.html"><code>AWS::Route53Resolver::ResolverRule</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RuleType, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>resolver_rule</code>.
```sql
SELECT
region,
resolver_endpoint_id,
domain_name,
name,
rule_type,
delegation_record,
tags,
target_ips,
arn,
resolver_rule_id
FROM awscc.route53resolver.resolver_rules
WHERE region = 'us-east-1' AND data__Identifier = '<ResolverRuleId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>resolver_rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.route53resolver.resolver_rules (
 RuleType,
 region
)
SELECT 
'{{ RuleType }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.route53resolver.resolver_rules (
 ResolverEndpointId,
 DomainName,
 Name,
 RuleType,
 DelegationRecord,
 Tags,
 TargetIps,
 region
)
SELECT 
 '{{ ResolverEndpointId }}',
 '{{ DomainName }}',
 '{{ Name }}',
 '{{ RuleType }}',
 '{{ DelegationRecord }}',
 '{{ Tags }}',
 '{{ TargetIps }}',
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
  - name: resolver_rule
    props:
      - name: ResolverEndpointId
        value: '{{ ResolverEndpointId }}'
      - name: DomainName
        value: '{{ DomainName }}'
      - name: Name
        value: '{{ Name }}'
      - name: RuleType
        value: '{{ RuleType }}'
      - name: DelegationRecord
        value: '{{ DelegationRecord }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: TargetIps
        value:
          - Ip: '{{ Ip }}'
            Ipv6: '{{ Ipv6 }}'
            Port: '{{ Port }}'
            Protocol: '{{ Protocol }}'
            ServerNameIndication: '{{ ServerNameIndication }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.route53resolver.resolver_rules
WHERE data__Identifier = '<ResolverRuleId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>resolver_rules</code> resource, the following permissions are required:

### Create
```json
route53resolver:CreateResolverRule,
route53resolver:GetResolverRule,
route53resolver:ListTagsForResource,
route53resolver:TagResource
```

### Read
```json
route53resolver:GetResolverRule,
route53resolver:ListTagsForResource
```

### Update
```json
route53resolver:UpdateResolverRule,
route53resolver:GetResolverRule,
route53resolver:ListTagsForResource,
route53resolver:TagResource,
route53resolver:UntagResource
```

### Delete
```json
route53resolver:DeleteResolverRule,
route53resolver:GetResolverRule
```

### List
```json
route53resolver:ListResolverRules
```
