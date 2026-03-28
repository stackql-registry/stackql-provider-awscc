---
title: local_gateway_route_tables
hide_title: false
hide_table_of_contents: false
keywords:
  - local_gateway_route_tables
  - ec2
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>local_gateway_route_table</code> resource or lists <code>local_gateway_route_tables</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>local_gateway_route_tables</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for Local Gateway Route Table which describes a route table for a local gateway.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.local_gateway_route_tables" /></td></tr>
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
    "name": "local_gateway_route_table_id",
    "type": "string",
    "description": "The ID of the local gateway route table."
  },
  {
    "name": "local_gateway_route_table_arn",
    "type": "string",
    "description": "The ARN of the local gateway route table."
  },
  {
    "name": "local_gateway_id",
    "type": "string",
    "description": "The ID of the local gateway."
  },
  {
    "name": "outpost_arn",
    "type": "string",
    "description": "The ARN of the outpost."
  },
  {
    "name": "owner_id",
    "type": "string",
    "description": "The owner of the local gateway route table."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of the local gateway route table."
  },
  {
    "name": "mode",
    "type": "string",
    "description": "The mode of the local gateway route table."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags for the local gateway route table.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The tag key."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The tag value."
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
    "name": "local_gateway_route_table_id",
    "type": "string",
    "description": "The ID of the local gateway route table."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetable.html"><code>AWS::EC2::LocalGatewayRouteTable</code></a>.

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
    <td><code>local_gateway_route_tables</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="LocalGatewayId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>local_gateway_route_tables</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>local_gateway_route_tables</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>local_gateway_route_tables_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>local_gateway_route_tables</code></td>
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

Gets all properties from an individual <code>local_gateway_route_table</code>.
```sql
SELECT
  region,
  local_gateway_route_table_id,
  local_gateway_route_table_arn,
  local_gateway_id,
  outpost_arn,
  owner_id,
  state,
  mode,
  tags
FROM awscc.ec2.local_gateway_route_tables
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ local_gateway_route_table_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>local_gateway_route_tables</code> in a region.
```sql
SELECT
  region,
  local_gateway_route_table_id
FROM awscc.ec2.local_gateway_route_tables_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>local_gateway_route_table</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.local_gateway_route_tables (
  LocalGatewayId,
  region
)
SELECT
  '{{ local_gateway_id }}',
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
INSERT INTO awscc.ec2.local_gateway_route_tables (
  LocalGatewayId,
  Mode,
  Tags,
  region
)
SELECT
  '{{ local_gateway_id }}',
  '{{ mode }}',
  '{{ tags }}',
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

<CodeBlock language="yaml">{`version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: local_gateway_route_table
    props:
      - name: local_gateway_id
        value: '{{ local_gateway_id }}'
      - name: mode
        value: '{{ mode }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>local_gateway_route_table</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.local_gateway_route_tables
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ local_gateway_route_table_id }}'
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
DELETE FROM awscc.ec2.local_gateway_route_tables
WHERE
  Identifier = '{{ local_gateway_route_table_id }}' AND
  region = '{{ region }}'
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

To operate on the <code>local_gateway_route_tables</code> resource, the following permissions are required:

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
ec2:CreateLocalGatewayRouteTable,
ec2:DescribeLocalGatewayRouteTables,
ec2:CreateTags
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeLocalGatewayRouteTables,
ec2:DescribeTags
```

</TabItem>
<TabItem value="update">

```json
ec2:DescribeLocalGatewayRouteTables,
ec2:CreateTags,
ec2:DeleteTags,
ec2:DescribeTags
```

</TabItem>
<TabItem value="delete">

```json
ec2:DeleteLocalGatewayRouteTable,
ec2:DescribeLocalGatewayRouteTables,
ec2:DeleteTags
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeLocalGatewayRouteTables
```

</TabItem>
</Tabs>