---
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
  - lightsail
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

Creates, updates, deletes or gets a <code>domain</code> resource or lists <code>domains</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>domains</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Lightsail::Domain</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lightsail.domains" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "domain_name",
    "type": "string",
    "description": "The name of the domain to manage in Lightsail."
  },
  {
    "name": "domain_entries",
    "type": "array",
    "description": "An array of key-value pairs containing information about the domain entries.",
    "children": [
      {
        "name": "id",
        "type": "string",
        "description": "The ID of the domain recordset entry."
      },
      {
        "name": "name",
        "type": "string",
        "description": "The name of the domain entry."
      },
      {
        "name": "target",
        "type": "string",
        "description": "The target AWS name server (e.g., ns-111.awsdns-11.com)."
      },
      {
        "name": "is_alias",
        "type": "boolean",
        "description": "When true, specifies whether the domain entry is an alias used by the Lightsail load balancer, Lightsail container service, Lightsail content delivery network (CDN) distribution, or another AWS resource. You can include an alias (A type) record in your request, which points to the DNS name of a load balancer, container service, CDN distribution, or other AWS resource and routes traffic to that resource."
      },
      {
        "name": "type",
        "type": "string",
        "description": "The type of domain entry (e.g., A, CNAME, MX, NS, SOA, SRV, TXT)."
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the domain (read-only)."
  },
  {
    "name": "support_code",
    "type": "string",
    "description": "The support code. Include this code in your email to support when you have questions (read-only)."
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The timestamp when the domain was created (read-only)."
  },
  {
    "name": "location",
    "type": "object",
    "description": "The AWS Region and Availability Zone where the domain was created (read-only).",
    "children": [
      {
        "name": "availability_zone",
        "type": "string",
        "description": "The Availability Zone."
      },
      {
        "name": "region_name",
        "type": "string",
        "description": "The AWS Region name."
      }
    ]
  },
  {
    "name": "resource_type",
    "type": "string",
    "description": "The Lightsail resource type (read-only)."
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-domain.html"><code>AWS::Lightsail::Domain</code></a>.

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
    <td><CopyableCode code="DomainName, region" /></td>
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

Gets all properties from an individual <code>domain</code>.
```sql
SELECT
region,
domain_name,
domain_entries,
arn,
support_code,
created_at,
location,
resource_type,
tags
FROM awscc.lightsail.domains
WHERE region = 'us-east-1' AND data__Identifier = '<DomainName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>domain</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.lightsail.domains (
 DomainName,
 region
)
SELECT 
'{{ DomainName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.lightsail.domains (
 DomainName,
 DomainEntries,
 Tags,
 region
)
SELECT 
 '{{ DomainName }}',
 '{{ DomainEntries }}',
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
  - name: domain
    props:
      - name: DomainName
        value: '{{ DomainName }}'
      - name: DomainEntries
        value:
          - Id: '{{ Id }}'
            Name: '{{ Name }}'
            Target: '{{ Target }}'
            IsAlias: '{{ IsAlias }}'
            Type: '{{ Type }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lightsail.domains
WHERE data__Identifier = '<DomainName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>domains</code> resource, the following permissions are required:

### Create
```json
lightsail:CreateDomain,
lightsail:GetDomain,
lightsail:CreateDomainEntry,
lightsail:TagResource
```

### Read
```json
lightsail:GetDomain
```

### Update
```json
lightsail:GetDomain,
lightsail:CreateDomainEntry,
lightsail:DeleteDomainEntry,
lightsail:TagResource,
lightsail:UntagResource
```

### Delete
```json
lightsail:DeleteDomain,
lightsail:GetDomain
```

### List
```json
lightsail:GetDomains
```
