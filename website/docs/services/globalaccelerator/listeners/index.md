---
title: listeners
hide_title: false
hide_table_of_contents: false
keywords:
  - listeners
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

Creates, updates, deletes or gets a <code>listener</code> resource or lists <code>listeners</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>listeners</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::GlobalAccelerator::Listener</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.globalaccelerator.listeners" /></td></tr>
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
    "name": "listener_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the listener."
  },
  {
    "name": "accelerator_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the accelerator."
  },
  {
    "name": "port_ranges",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "from_port",
        "type": "integer",
        "description": "A network port number"
      }
    ]
  },
  {
    "name": "protocol",
    "type": "string",
    "description": "The protocol for the listener."
  },
  {
    "name": "client_affinity",
    "type": "string",
    "description": "Client affinity lets you direct all requests from a user to the same endpoint."
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
    "name": "listener_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the listener."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html"><code>AWS::GlobalAccelerator::Listener</code></a>.

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
    <td><code>listeners</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AcceleratorArn, PortRanges, Protocol, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>listeners</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>listeners</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>listeners_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>listeners</code></td>
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

Gets all properties from an individual <code>listener</code>.
```sql
SELECT
region,
listener_arn,
accelerator_arn,
port_ranges,
protocol,
client_affinity
FROM awscc.globalaccelerator.listeners
WHERE Identifier = '<ListenerArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>listeners</code> in a region.
```sql
SELECT
region,
listener_arn
FROM awscc.globalaccelerator.listeners_list_only
;
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>listener</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.globalaccelerator.listeners (
 AcceleratorArn,
 PortRanges,
 Protocol,
 region
)
SELECT 
'{{ AcceleratorArn }}',
 '{{ PortRanges }}',
 '{{ Protocol }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.globalaccelerator.listeners (
 AcceleratorArn,
 PortRanges,
 Protocol,
 ClientAffinity,
 region
)
SELECT 
 '{{ AcceleratorArn }}',
 '{{ PortRanges }}',
 '{{ Protocol }}',
 '{{ ClientAffinity }}',
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
  - name: listener
    props:
      - name: AcceleratorArn
        value: '{{ AcceleratorArn }}'
      - name: PortRanges
        value:
          - FromPort: '{{ FromPort }}'
            ToPort: null
      - name: Protocol
        value: '{{ Protocol }}'
      - name: ClientAffinity
        value: '{{ ClientAffinity }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.globalaccelerator.listeners
SET PatchDocument = string('{{ {
    "PortRanges": port_ranges,
    "Protocol": protocol,
    "ClientAffinity": client_affinity
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ListenerArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.globalaccelerator.listeners
WHERE Identifier = '<ListenerArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>listeners</code> resource, the following permissions are required:

### Create
```json
globalaccelerator:CreateListener,
globalaccelerator:DescribeListener,
globalaccelerator:DescribeAccelerator
```

### Read
```json
globalaccelerator:DescribeListener
```

### Update
```json
globalaccelerator:UpdateListener,
globalaccelerator:DescribeListener,
globalaccelerator:DescribeAccelerator
```

### Delete
```json
globalaccelerator:DescribeListener,
globalaccelerator:DeleteListener,
globalaccelerator:DescribeAccelerator
```

### List
```json
globalaccelerator:ListListeners
```
