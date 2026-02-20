---
title: security_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - security_keys
  - connect
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

Creates, updates, deletes or gets a <code>security_key</code> resource or lists <code>security_keys</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>security_keys</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Connect::SecurityKey</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.security_keys" /></td></tr>
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
    "name": "key",
    "type": "string",
    "description": "A valid security key in PEM format."
  },
  {
    "name": "instance_id",
    "type": "string",
    "description": "Amazon Connect instance identifier"
  },
  {
    "name": "association_id",
    "type": "string",
    "description": "An associationID is automatically generated when a storage config is associated with an instance"
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
    "name": "instance_id",
    "type": "string",
    "description": "Amazon Connect instance identifier"
  },
  {
    "name": "association_id",
    "type": "string",
    "description": "An associationID is automatically generated when a storage config is associated with an instance"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securitykey.html"><code>AWS::Connect::SecurityKey</code></a>.

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
    <td><code>security_keys</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Key, InstanceId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>security_keys</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>security_keys_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>security_keys</code></td>
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

Gets all properties from an individual <code>security_key</code>.
```sql
SELECT
region,
key,
instance_id,
association_id
FROM awscc.connect.security_keys
WHERE region = 'us-east-1' AND data__Identifier = '<InstanceId>|<AssociationId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>security_keys</code> in a region.
```sql
SELECT
region,
instance_id,
association_id
FROM awscc.connect.security_keys_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>security_key</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.connect.security_keys (
 Key,
 InstanceId,
 region
)
SELECT 
'{{ Key }}',
 '{{ InstanceId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.connect.security_keys (
 Key,
 InstanceId,
 region
)
SELECT 
 '{{ Key }}',
 '{{ InstanceId }}',
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
  - name: security_key
    props:
      - name: Key
        value: '{{ Key }}'
      - name: InstanceId
        value: '{{ InstanceId }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connect.security_keys
WHERE data__Identifier = '<InstanceId|AssociationId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>security_keys</code> resource, the following permissions are required:

### Create
```json
connect:AssociateSecurityKey
```

### Read
```json
connect:ListSecurityKeys
```

### Delete
```json
connect:DisassociateSecurityKey
```

### List
```json
connect:ListSecurityKeys
```
