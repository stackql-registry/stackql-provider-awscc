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
WHERE
  region = 'us-east-1' AND
  Identifier = '{{ listener_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>listeners</code> in a region.
```sql
SELECT
  region,
  listener_arn
FROM awscc.globalaccelerator.listeners_list_only
WHERE
  region = 'us-east-1';
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
  '{{ accelerator_arn }}',
  '{{ port_ranges }}',
  '{{ protocol }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
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
  '{{ accelerator_arn }}',
  '{{ port_ranges }}',
  '{{ protocol }}',
  '{{ client_affinity }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
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
      - name: accelerator_arn
        value: '{{ accelerator_arn }}'
      - name: port_ranges
        value:
          - from_port: '{{ from_port }}'
            to_port: null
      - name: protocol
        value: '{{ protocol }}'
      - name: client_affinity
        value: '{{ client_affinity }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>listener</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.globalaccelerator.listeners
SET PatchDocument = string('{{ {
    "PortRanges": port_ranges,
    "Protocol": protocol,
    "ClientAffinity": client_affinity
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ listener_arn }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.globalaccelerator.listeners
WHERE
  Identifier = '{{ listener_arn }}' AND
  region = 'us-east-1'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>listeners</code> resource, the following permissions are required:

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
globalaccelerator:CreateListener,
globalaccelerator:DescribeListener,
globalaccelerator:DescribeAccelerator
```

</TabItem>
<TabItem value="read">

```json
globalaccelerator:DescribeListener
```

</TabItem>
<TabItem value="update">

```json
globalaccelerator:UpdateListener,
globalaccelerator:DescribeListener,
globalaccelerator:DescribeAccelerator
```

</TabItem>
<TabItem value="delete">

```json
globalaccelerator:DescribeListener,
globalaccelerator:DeleteListener,
globalaccelerator:DescribeAccelerator
```

</TabItem>
<TabItem value="list">

```json
globalaccelerator:ListListeners
```

</TabItem>
</Tabs>