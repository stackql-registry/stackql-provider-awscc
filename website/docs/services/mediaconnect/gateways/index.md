---
title: gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - gateways
  - mediaconnect
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

Creates, updates, deletes or gets a <code>gateway</code> resource or lists <code>gateways</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>gateways</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::MediaConnect::Gateway</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.mediaconnect.gateways" /></td></tr>
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
    "description": "The name of the gateway. This name can not be modified after the gateway is created."
  },
  {
    "name": "gateway_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the gateway."
  },
  {
    "name": "gateway_state",
    "type": "string",
    "description": "The current status of the gateway."
  },
  {
    "name": "egress_cidr_blocks",
    "type": "array",
    "description": "The range of IP addresses that contribute content or initiate output requests for flows communicating with this gateway. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16."
  },
  {
    "name": "networks",
    "type": "array",
    "description": "The list of networks in the gateway.",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": "The name of the network. This name is used to reference the network and must be unique among networks in this gateway."
      },
      {
        "name": "cidr_block",
        "type": "string",
        "description": "A unique IP address range to use for this network. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16."
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
    "name": "gateway_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the gateway."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-gateway.html"><code>AWS::MediaConnect::Gateway</code></a>.

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
    <td><code>gateways</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, EgressCidrBlocks, Networks, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>gateways</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>gateways_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>gateways</code></td>
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

Gets all properties from an individual <code>gateway</code>.
```sql
SELECT
region,
name,
gateway_arn,
gateway_state,
egress_cidr_blocks,
networks
FROM awscc.mediaconnect.gateways
WHERE region = 'us-east-1' AND Identifier = '<GatewayArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>gateways</code> in a region.
```sql
SELECT
region,
gateway_arn
FROM awscc.mediaconnect.gateways_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>gateway</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.mediaconnect.gateways (
 Name,
 EgressCidrBlocks,
 Networks,
 region
)
SELECT 
'{{ Name }}',
 '{{ EgressCidrBlocks }}',
 '{{ Networks }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.mediaconnect.gateways (
 Name,
 EgressCidrBlocks,
 Networks,
 region
)
SELECT 
 '{{ Name }}',
 '{{ EgressCidrBlocks }}',
 '{{ Networks }}',
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
  - name: gateway
    props:
      - name: Name
        value: '{{ Name }}'
      - name: EgressCidrBlocks
        value:
          - '{{ EgressCidrBlocks[0] }}'
      - name: Networks
        value:
          - Name: '{{ Name }}'
            CidrBlock: '{{ CidrBlock }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.mediaconnect.gateways
WHERE Identifier = '<GatewayArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>gateways</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
iam:CreateServiceLinkedRole,
mediaconnect:CreateGateway,
mediaconnect:DescribeGateway
```

</TabItem>
<TabItem value="read">

```json
mediaconnect:DescribeGateway
```

</TabItem>
<TabItem value="delete">

```json
iam:CreateServiceLinkedRole,
mediaconnect:DescribeGateway,
mediaconnect:DeleteGateway
```

</TabItem>
<TabItem value="list">

```json
mediaconnect:ListGateways
```

</TabItem>
</Tabs>