---
title: firewall_domain_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_domain_lists
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

Creates, updates, deletes or gets a <code>firewall_domain_list</code> resource or lists <code>firewall_domain_lists</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>firewall_domain_lists</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::Route53Resolver::FirewallDomainList.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53resolver.firewall_domain_lists" /></td></tr>
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
    "description": "FirewallDomainListName"
  },
  {
    "name": "domain_count",
    "type": "integer",
    "description": "Count"
  },
  {
    "name": "status",
    "type": "string",
    "description": "ResolverFirewallDomainList, possible values are COMPLETE, DELETING, UPDATING, COMPLETE&#95;IMPORT&#95;FAILED, IMPORTING, and INACTIVE&#95;OWNER&#95;ACCOUNT&#95;CLOSED."
  },
  {
    "name": "status_message",
    "type": "string",
    "description": "FirewallDomainListAssociationStatus"
  },
  {
    "name": "managed_owner_name",
    "type": "string",
    "description": "ServicePrincipal"
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
    "name": "domains",
    "type": "array",
    "description": "An inline list of domains to use for this domain list."
  },
  {
    "name": "domain_file_url",
    "type": "string",
    "description": "S3 URL to import domains from."
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewalldomainlist.html"><code>AWS::Route53Resolver::FirewallDomainList</code></a>.

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
    <td><code>firewall_domain_lists</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>firewall_domain_lists</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>firewall_domain_lists</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>firewall_domain_lists_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>firewall_domain_lists</code></td>
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

Gets all properties from an individual <code>firewall_domain_list</code>.
```sql
SELECT
region,
id,
arn,
name,
domain_count,
status,
status_message,
managed_owner_name,
creator_request_id,
creation_time,
modification_time,
domains,
domain_file_url,
tags
FROM awscc.route53resolver.firewall_domain_lists
WHERE region = 'us-east-1' AND Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>firewall_domain_lists</code> in a region.
```sql
SELECT
region,
id
FROM awscc.route53resolver.firewall_domain_lists_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>firewall_domain_list</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.route53resolver.firewall_domain_lists (
 Name,
 Domains,
 DomainFileUrl,
 Tags,
 region
)
SELECT 
'{{ Name }}',
 '{{ Domains }}',
 '{{ DomainFileUrl }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.route53resolver.firewall_domain_lists (
 Name,
 Domains,
 DomainFileUrl,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Domains }}',
 '{{ DomainFileUrl }}',
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
  - name: firewall_domain_list
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Domains
        value:
          - '{{ Domains[0] }}'
      - name: DomainFileUrl
        value: '{{ DomainFileUrl }}'
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
UPDATE awscc.route53resolver.firewall_domain_lists
SET PatchDocument = string('{{ {
    "Domains": domains,
    "DomainFileUrl": domain_file_url,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.route53resolver.firewall_domain_lists
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>firewall_domain_lists</code> resource, the following permissions are required:

### Create
```json
route53resolver:CreateFirewallDomainList,
route53resolver:GetFirewallDomainList,
route53resolver:ImportFirewallDomains,
route53resolver:UpdateFirewallDomains,
route53resolver:TagResource,
route53resolver:ListTagsForResource
```

### List
```json
route53resolver:ListFirewallDomainLists,
route53resolver:ListTagsForResource
```

### Read
```json
route53resolver:GetFirewallDomainList,
route53resolver:ListTagsForResource
```

### Delete
```json
route53resolver:GetFirewallDomainList,
route53resolver:DeleteFirewallDomainList,
route53resolver:UntagResource,
route53resolver:ListTagsForResource
```

### Update
```json
route53resolver:GetFirewallDomainList,
route53resolver:ImportFirewallDomains,
route53resolver:UpdateFirewallDomains,
route53resolver:TagResource,
route53resolver:UntagResource,
route53resolver:ListTagsForResource
```
