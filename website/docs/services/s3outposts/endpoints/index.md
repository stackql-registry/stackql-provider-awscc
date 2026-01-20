---
title: endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoints
  - s3outposts
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

Creates, updates, deletes or gets an <code>endpoint</code> resource or lists <code>endpoints</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>endpoints</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type Definition for AWS::S3Outposts::Endpoint</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3outposts.endpoints" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the endpoint."
  },
  {
    "name": "cidr_block",
    "type": "string",
    "description": "The VPC CIDR committed by this endpoint."
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "The time the endpoint was created."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the endpoint."
  },
  {
    "name": "network_interfaces",
    "type": "array",
    "description": "The network interfaces of the endpoint.",
    "children": [
      {
        "name": "network_interface_id",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "outpost_id",
    "type": "string",
    "description": "The id of the customer outpost on which the bucket resides."
  },
  {
    "name": "security_group_id",
    "type": "string",
    "description": "The ID of the security group to use with the endpoint."
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "subnet_id",
    "type": "string",
    "description": "The ID of the subnet in the selected VPC. The subnet must belong to the Outpost."
  },
  {
    "name": "access_type",
    "type": "string",
    "description": "The type of access for the on-premise network connectivity for the Outpost endpoint. To access endpoint from an on-premises network, you must specify the access type and provide the customer owned Ipv4 pool."
  },
  {
    "name": "customer_owned_ipv4_pool",
    "type": "string",
    "description": "The ID of the customer-owned IPv4 pool for the Endpoint. IP addresses will be allocated from this pool for the endpoint."
  },
  {
    "name": "failed_reason",
    "type": "object",
    "description": "The failure reason, if any, for a create or delete endpoint operation.",
    "children": [
      {
        "name": "error_code",
        "type": "string",
        "description": "The failure code, if any, for a create or delete endpoint operation."
      },
      {
        "name": "message",
        "type": "string",
        "description": "Additional error details describing the endpoint failure and recommended action."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html"><code>AWS::S3Outposts::Endpoint</code></a>.

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
    <td><CopyableCode code="OutpostId, SecurityGroupId, SubnetId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>endpoint</code>.
```sql
SELECT
region,
arn,
cidr_block,
creation_time,
id,
network_interfaces,
outpost_id,
security_group_id,
status,
subnet_id,
access_type,
customer_owned_ipv4_pool,
failed_reason
FROM awscc.s3outposts.endpoints
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>endpoint</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.s3outposts.endpoints (
 OutpostId,
 SecurityGroupId,
 SubnetId,
 region
)
SELECT 
'{{ OutpostId }}',
 '{{ SecurityGroupId }}',
 '{{ SubnetId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.s3outposts.endpoints (
 OutpostId,
 SecurityGroupId,
 SubnetId,
 AccessType,
 CustomerOwnedIpv4Pool,
 FailedReason,
 region
)
SELECT 
 '{{ OutpostId }}',
 '{{ SecurityGroupId }}',
 '{{ SubnetId }}',
 '{{ AccessType }}',
 '{{ CustomerOwnedIpv4Pool }}',
 '{{ FailedReason }}',
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
  - name: endpoint
    props:
      - name: OutpostId
        value: '{{ OutpostId }}'
      - name: SecurityGroupId
        value: '{{ SecurityGroupId }}'
      - name: SubnetId
        value: '{{ SubnetId }}'
      - name: AccessType
        value: '{{ AccessType }}'
      - name: CustomerOwnedIpv4Pool
        value: '{{ CustomerOwnedIpv4Pool }}'
      - name: FailedReason
        value:
          ErrorCode: '{{ ErrorCode }}'
          Message: '{{ Message }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.s3outposts.endpoints
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>endpoints</code> resource, the following permissions are required:

### Create
```json
s3-outposts:CreateEndpoint
```

### Read
```json
s3-outposts:ListEndpoints
```

### Delete
```json
s3-outposts:DeleteEndpoint
```

### List
```json
s3-outposts:ListEndpoints
```
