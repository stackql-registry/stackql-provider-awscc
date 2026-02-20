---
title: approved_origins
hide_title: false
hide_table_of_contents: false
keywords:
  - approved_origins
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

Creates, updates, deletes or gets an <code>approved_origin</code> resource or lists <code>approved_origins</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>approved_origins</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Connect::ApprovedOrigin</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.approved_origins" /></td></tr>
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
    "name": "origin",
    "type": "string",
    "description": "Domain name to be added to the allowlist of instance"
  },
  {
    "name": "instance_id",
    "type": "string",
    "description": "Amazon Connect instance identifier"
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
    "name": "origin",
    "type": "string",
    "description": "Domain name to be added to the allowlist of instance"
  },
  {
    "name": "instance_id",
    "type": "string",
    "description": "Amazon Connect instance identifier"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-approvedorigin.html"><code>AWS::Connect::ApprovedOrigin</code></a>.

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
    <td><code>approved_origins</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Origin, InstanceId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>approved_origins</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>approved_origins_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>approved_origins</code></td>
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

Gets all properties from an individual <code>approved_origin</code>.
```sql
SELECT
region,
origin,
instance_id
FROM awscc.connect.approved_origins
WHERE region = 'us-east-1' AND data__Identifier = '<InstanceId>|<Origin>';
```
</TabItem>
<TabItem value="list">

Lists all <code>approved_origins</code> in a region.
```sql
SELECT
region,
instance_id,
origin
FROM awscc.connect.approved_origins_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>approved_origin</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.connect.approved_origins (
 Origin,
 InstanceId,
 region
)
SELECT 
'{{ Origin }}',
 '{{ InstanceId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.connect.approved_origins (
 Origin,
 InstanceId,
 region
)
SELECT 
 '{{ Origin }}',
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
  - name: approved_origin
    props:
      - name: Origin
        value: '{{ Origin }}'
      - name: InstanceId
        value: '{{ InstanceId }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connect.approved_origins
WHERE data__Identifier = '<InstanceId|Origin>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>approved_origins</code> resource, the following permissions are required:

### Create
```json
connect:AssociateApprovedOrigin,
connect:ListApprovedOrigins
```

### Read
```json
connect:ListApprovedOrigins
```

### Delete
```json
connect:DisassociateApprovedOrigin,
connect:ListApprovedOrigins
```

### List
```json
connect:ListApprovedOrigins
```
