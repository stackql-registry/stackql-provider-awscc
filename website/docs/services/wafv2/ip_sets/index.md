---
title: ip_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_sets
  - wafv2
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

Creates, updates, deletes or gets an <code>ip_set</code> resource or lists <code>ip_sets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>ip_sets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Contains a list of IP addresses. This can be either IPV4 or IPV6. The list will be mutually</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.wafv2.ip_sets" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": "Description of the entity."
  },
  {
    "name": "name",
    "type": "string",
    "description": "Name of the WebACL."
  },
  {
    "name": "id",
    "type": "string",
    "description": "Id of the WebACL"
  },
  {
    "name": "scope",
    "type": "string",
    "description": "Use CLOUDFRONT for CloudFront WebACL, use REGIONAL for Application Load Balancer and API Gateway."
  },
  {
    "name": "ip_address_version",
    "type": "string",
    "description": "Type of addresses in the IPSet, use IPV4 for IPV4 IP addresses, IPV6 for IPV6 address."
  },
  {
    "name": "addresses",
    "type": "array",
    "description": "List of IPAddresses."
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
    "name": "name",
    "type": "string",
    "description": "Name of the WebACL."
  },
  {
    "name": "id",
    "type": "string",
    "description": "Id of the WebACL"
  },
  {
    "name": "scope",
    "type": "string",
    "description": "Use CLOUDFRONT for CloudFront WebACL, use REGIONAL for Application Load Balancer and API Gateway."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-ipset.html"><code>AWS::WAFv2::IPSet</code></a>.

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
    <td><code>ip_sets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Addresses, IPAddressVersion, Scope, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>ip_sets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>ip_sets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>ip_sets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>ip_sets</code></td>
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

Gets all properties from an individual <code>ip_set</code>.
```sql
SELECT
region,
arn,
description,
name,
id,
scope,
ip_address_version,
addresses,
tags
FROM awscc.wafv2.ip_sets
WHERE data__Identifier = '<Name>|<Id>|<Scope>';
```
</TabItem>
<TabItem value="list">

Lists all <code>ip_sets</code> in a region.
```sql
SELECT
region,
name,
id,
scope
FROM awscc.wafv2.ip_sets_list_only
;
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>ip_set</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.wafv2.ip_sets (
 Scope,
 IPAddressVersion,
 Addresses,
 region
)
SELECT 
'{{ Scope }}',
 '{{ IPAddressVersion }}',
 '{{ Addresses }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.wafv2.ip_sets (
 Description,
 Name,
 Scope,
 IPAddressVersion,
 Addresses,
 Tags,
 region
)
SELECT 
 '{{ Description }}',
 '{{ Name }}',
 '{{ Scope }}',
 '{{ IPAddressVersion }}',
 '{{ Addresses }}',
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
  - name: ip_set
    props:
      - name: Description
        value: '{{ Description }}'
      - name: Name
        value: '{{ Name }}'
      - name: Scope
        value: '{{ Scope }}'
      - name: IPAddressVersion
        value: '{{ IPAddressVersion }}'
      - name: Addresses
        value:
          - '{{ Addresses[0] }}'
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
UPDATE awscc.wafv2.ip_sets
SET data__PatchDocument = string('{{ {
    "Description": description,
    "IPAddressVersion": ip_address_version,
    "Addresses": addresses,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Name>|<Id>|<Scope>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.wafv2.ip_sets
WHERE data__Identifier = '<Name|Id|Scope>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>ip_sets</code> resource, the following permissions are required:

### Create
```json
wafv2:CreateIPSet,
wafv2:GetIPSet,
wafv2:ListTagsForResource,
wafv2:TagResource,
wafv2:UntagResource
```

### Delete
```json
wafv2:DeleteIPSet,
wafv2:GetIPSet
```

### Read
```json
wafv2:GetIPSet,
wafv2:ListTagsForResource
```

### Update
```json
wafv2:UpdateIPSet,
wafv2:GetIPSet,
wafv2:ListTagsForResource,
wafv2:TagResource,
wafv2:UntagResource
```

### List
```json
wafv2:listIPSets
```
