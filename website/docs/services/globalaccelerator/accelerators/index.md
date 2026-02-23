---
title: accelerators
hide_title: false
hide_table_of_contents: false
keywords:
  - accelerators
  - globalaccelerator
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

Creates, updates, deletes or gets an <code>accelerator</code> resource or lists <code>accelerators</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>accelerators</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::GlobalAccelerator::Accelerator</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.globalaccelerator.accelerators" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "Name of accelerator."
  },
  {
    "name": "ip_address_type",
    "type": "string",
    "description": "IP Address type."
  },
  {
    "name": "ip_addresses",
    "type": "array",
    "description": "The IP addresses from BYOIP Prefix pool."
  },
  {
    "name": "enabled",
    "type": "boolean",
    "description": "Indicates whether an accelerator is enabled. The value is true or false."
  },
  {
    "name": "dns_name",
    "type": "string",
    "description": "The Domain Name System (DNS) name that Global Accelerator creates that points to your accelerator's static IPv4 addresses."
  },
  {
    "name": "ipv4_addresses",
    "type": "array",
    "description": "The IPv4 addresses assigned to the accelerator."
  },
  {
    "name": "ipv6_addresses",
    "type": "array",
    "description": "The IPv6 addresses assigned if the accelerator is dualstack"
  },
  {
    "name": "dual_stack_dns_name",
    "type": "string",
    "description": "The Domain Name System (DNS) name that Global Accelerator creates that points to your accelerator's static IPv4 and IPv6 addresses."
  },
  {
    "name": "accelerator_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the accelerator."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "Key of the tag. Value can be 1 to 127 characters."
      },
      {
        "name": "value",
        "type": "string",
        "description": "Value for the tag. Value can be 1 to 255 characters."
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
    "name": "accelerator_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the accelerator."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-accelerator.html"><code>AWS::GlobalAccelerator::Accelerator</code></a>.

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
    <td><code>accelerators</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>accelerators</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>accelerators</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>accelerators_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>accelerators</code></td>
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

Gets all properties from an individual <code>accelerator</code>.
```sql
SELECT
region,
name,
ip_address_type,
ip_addresses,
enabled,
dns_name,
ipv4_addresses,
ipv6_addresses,
dual_stack_dns_name,
accelerator_arn,
tags
FROM awscc.globalaccelerator.accelerators
WHERE region = 'us-east-1' AND Identifier = '{{ accelerator_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>accelerators</code> in a region.
```sql
SELECT
region,
accelerator_arn
FROM awscc.globalaccelerator.accelerators_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>accelerator</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.globalaccelerator.accelerators (
 Name,
 region
)
SELECT
'{{ name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.globalaccelerator.accelerators (
 Name,
 IpAddressType,
 IpAddresses,
 Enabled,
 Tags,
 region
)
SELECT
 '{{ name }}',
 '{{ ip_address_type }}',
 '{{ ip_addresses }}',
 '{{ enabled }}',
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
  - name: accelerator
    props:
      - name: name
        value: '{{ name }}'
      - name: ip_address_type
        value: '{{ ip_address_type }}'
      - name: ip_addresses
        value:
          - '{{ ip_addresses[0] }}'
      - name: enabled
        value: '{{ enabled }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>accelerator</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.globalaccelerator.accelerators
SET PatchDocument = string('{{ {
    "Name": name,
    "IpAddressType": ip_address_type,
    "IpAddresses": ip_addresses,
    "Enabled": enabled,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ accelerator_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.globalaccelerator.accelerators
WHERE Identifier = '{{ accelerator_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>accelerators</code> resource, the following permissions are required:

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
globalaccelerator:CreateAccelerator,
globalaccelerator:DescribeAccelerator,
globalaccelerator:TagResource
```

</TabItem>
<TabItem value="read">

```json
globalaccelerator:DescribeAccelerator
```

</TabItem>
<TabItem value="update">

```json
globalaccelerator:UpdateAccelerator,
globalaccelerator:TagResource,
globalaccelerator:UntagResource,
globalaccelerator:DescribeAccelerator
```

</TabItem>
<TabItem value="delete">

```json
globalaccelerator:UpdateAccelerator,
globalaccelerator:DeleteAccelerator,
globalaccelerator:DescribeAccelerator
```

</TabItem>
<TabItem value="list">

```json
globalaccelerator:ListAccelerators
```

</TabItem>
</Tabs>