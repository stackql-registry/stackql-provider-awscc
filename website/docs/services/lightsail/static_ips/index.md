---
title: static_ips
hide_title: false
hide_table_of_contents: false
keywords:
  - static_ips
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

Creates, updates, deletes or gets a <code>static_ip</code> resource or lists <code>static_ips</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>static_ips</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Lightsail::StaticIp</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lightsail.static_ips" /></td></tr>
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
    "name": "static_ip_name",
    "type": "string",
    "description": "The name of the static IP address."
  },
  {
    "name": "attached_to",
    "type": "string",
    "description": "The instance where the static IP is attached."
  },
  {
    "name": "is_attached",
    "type": "boolean",
    "description": "A Boolean value indicating whether the static IP is attached."
  },
  {
    "name": "ip_address",
    "type": "string",
    "description": "The static IP address."
  },
  {
    "name": "static_ip_arn",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "static_ip_name",
    "type": "string",
    "description": "The name of the static IP address."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-staticip.html"><code>AWS::Lightsail::StaticIp</code></a>.

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
    <td><code>static_ips</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="StaticIpName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>static_ips</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>static_ips</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>static_ips_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>static_ips</code></td>
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

Gets all properties from an individual <code>static_ip</code>.
```sql
SELECT
region,
static_ip_name,
attached_to,
is_attached,
ip_address,
static_ip_arn
FROM awscc.lightsail.static_ips
WHERE region = 'us-east-1' AND Identifier = '<StaticIpName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>static_ips</code> in a region.
```sql
SELECT
region,
static_ip_name
FROM awscc.lightsail.static_ips_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>static_ip</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.lightsail.static_ips (
 StaticIpName,
 region
)
SELECT 
'{{ StaticIpName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.lightsail.static_ips (
 StaticIpName,
 AttachedTo,
 region
)
SELECT 
 '{{ StaticIpName }}',
 '{{ AttachedTo }}',
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
  - name: static_ip
    props:
      - name: StaticIpName
        value: '{{ StaticIpName }}'
      - name: AttachedTo
        value: '{{ AttachedTo }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>static_ip</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.lightsail.static_ips
SET PatchDocument = string('{{ {
    "AttachedTo": attached_to
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<StaticIpName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lightsail.static_ips
WHERE Identifier = '<StaticIpName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>static_ips</code> resource, the following permissions are required:

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
lightsail:AllocateStaticIp,
lightsail:AttachStaticIp,
lightsail:DetachStaticIp,
lightsail:GetInstance,
lightsail:GetStaticIp,
lightsail:GetStaticIps
```

</TabItem>
<TabItem value="read">

```json
lightsail:GetStaticIp,
lightsail:GetStaticIps
```

</TabItem>
<TabItem value="update">

```json
lightsail:AttachStaticIp,
lightsail:DetachStaticIp,
lightsail:GetInstance,
lightsail:GetStaticIp,
lightsail:GetStaticIps
```

</TabItem>
<TabItem value="delete">

```json
lightsail:GetStaticIp,
lightsail:GetStaticIps,
lightsail:ReleaseStaticIp
```

</TabItem>
<TabItem value="list">

```json
lightsail:GetStaticIps
```

</TabItem>
</Tabs>