---
title: instance_connect_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_connect_endpoints
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

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets an <code>instance_connect_endpoint</code> resource or lists <code>instance_connect_endpoints</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>instance_connect_endpoints</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EC2::InstanceConnectEndpoint</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.instance_connect_endpoints" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "id",
    "type": "string",
    "description": "The id of the instance connect endpoint"
  },
  {
    "name": "subnet_id",
    "type": "string",
    "description": "The subnet id of the instance connect endpoint"
  },
  {
    "name": "client_token",
    "type": "string",
    "description": "The client token of the instance connect endpoint."
  },
  {
    "name": "preserve_client_ip",
    "type": "boolean",
    "description": "If true, the address of the instance connect endpoint client is preserved when connecting to the end resource"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags of the instance connect endpoint.",
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
    "name": "security_group_ids",
    "type": "array",
    "description": "The security group IDs of the instance connect endpoint."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instanceconnectendpoint.html"><code>AWS::EC2::InstanceConnectEndpoint</code></a>.

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
    <td><CopyableCode code="SubnetId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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

Gets all properties from an individual <code>instance_connect_endpoint</code>.
```sql
SELECT
region,
id,
subnet_id,
client_token,
preserve_client_ip,
tags,
security_group_ids
FROM awscc.ec2.instance_connect_endpoints
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>instance_connect_endpoint</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.instance_connect_endpoints (
 SubnetId,
 region
)
SELECT 
'{{ SubnetId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.instance_connect_endpoints (
 SubnetId,
 ClientToken,
 PreserveClientIp,
 Tags,
 SecurityGroupIds,
 region
)
SELECT 
 '{{ SubnetId }}',
 '{{ ClientToken }}',
 '{{ PreserveClientIp }}',
 '{{ Tags }}',
 '{{ SecurityGroupIds }}',
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
  - name: instance_connect_endpoint
    props:
      - name: SubnetId
        value: '{{ SubnetId }}'
      - name: ClientToken
        value: '{{ ClientToken }}'
      - name: PreserveClientIp
        value: '{{ PreserveClientIp }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: SecurityGroupIds
        value:
          - '{{ SecurityGroupIds[0] }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.instance_connect_endpoints
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>instance_connect_endpoints</code> resource, the following permissions are required:

### Create
```json
ec2:CreateInstanceConnectEndpoint,
ec2:DescribeInstanceConnectEndpoints,
ec2:CreateTags,
ec2:CreateNetworkInterface,
iam:CreateServiceLinkedRole
```

### Read
```json
ec2:DescribeInstanceConnectEndpoints
```

### Update
```json
ec2:DescribeInstanceConnectEndpoints,
ec2:CreateTags,
ec2:DeleteTags
```

### Delete
```json
ec2:DeleteInstanceConnectEndpoint,
ec2:DescribeInstanceConnectEndpoints
```

### List
```json
ec2:DescribeInstanceConnectEndpoints
```
