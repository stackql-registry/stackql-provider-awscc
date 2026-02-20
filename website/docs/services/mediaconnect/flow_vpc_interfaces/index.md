---
title: flow_vpc_interfaces
hide_title: false
hide_table_of_contents: false
keywords:
  - flow_vpc_interfaces
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

Creates, updates, deletes or gets a <code>flow_vpc_interface</code> resource or lists <code>flow_vpc_interfaces</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>flow_vpc_interfaces</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::MediaConnect::FlowVpcInterface</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.mediaconnect.flow_vpc_interfaces" /></td></tr>
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
    "name": "flow_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow."
  },
  {
    "name": "name",
    "type": "string",
    "description": "Immutable and has to be a unique against other VpcInterfaces in this Flow."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "Role Arn MediaConnect can assume to create ENIs in customer's account."
  },
  {
    "name": "security_group_ids",
    "type": "array",
    "description": "Security Group IDs to be used on ENI."
  },
  {
    "name": "subnet_id",
    "type": "string",
    "description": "Subnet must be in the AZ of the Flow"
  },
  {
    "name": "network_interface_ids",
    "type": "array",
    "description": "IDs of the network interfaces created in customer's account by MediaConnect."
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
    "name": "flow_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow."
  },
  {
    "name": "name",
    "type": "string",
    "description": "Immutable and has to be a unique against other VpcInterfaces in this Flow."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html"><code>AWS::MediaConnect::FlowVpcInterface</code></a>.

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
    <td><code>flow_vpc_interfaces</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="FlowArn, Name, RoleArn, SubnetId, SecurityGroupIds, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>flow_vpc_interfaces</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>flow_vpc_interfaces</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>flow_vpc_interfaces_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>flow_vpc_interfaces</code></td>
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

Gets all properties from an individual <code>flow_vpc_interface</code>.
```sql
SELECT
region,
flow_arn,
name,
role_arn,
security_group_ids,
subnet_id,
network_interface_ids
FROM awscc.mediaconnect.flow_vpc_interfaces
WHERE region = 'us-east-1' AND Identifier = '<FlowArn>|<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>flow_vpc_interfaces</code> in a region.
```sql
SELECT
region,
flow_arn,
name
FROM awscc.mediaconnect.flow_vpc_interfaces_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>flow_vpc_interface</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.mediaconnect.flow_vpc_interfaces (
 FlowArn,
 Name,
 RoleArn,
 SecurityGroupIds,
 SubnetId,
 region
)
SELECT 
'{{ FlowArn }}',
 '{{ Name }}',
 '{{ RoleArn }}',
 '{{ SecurityGroupIds }}',
 '{{ SubnetId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.mediaconnect.flow_vpc_interfaces (
 FlowArn,
 Name,
 RoleArn,
 SecurityGroupIds,
 SubnetId,
 region
)
SELECT 
 '{{ FlowArn }}',
 '{{ Name }}',
 '{{ RoleArn }}',
 '{{ SecurityGroupIds }}',
 '{{ SubnetId }}',
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
  - name: flow_vpc_interface
    props:
      - name: FlowArn
        value: '{{ FlowArn }}'
      - name: Name
        value: '{{ Name }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: SecurityGroupIds
        value:
          - '{{ SecurityGroupIds[0] }}'
      - name: SubnetId
        value: '{{ SubnetId }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.mediaconnect.flow_vpc_interfaces
SET PatchDocument = string('{{ {
    "RoleArn": role_arn,
    "SecurityGroupIds": security_group_ids,
    "SubnetId": subnet_id
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<FlowArn>|<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.mediaconnect.flow_vpc_interfaces
WHERE Identifier = '<FlowArn|Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>flow_vpc_interfaces</code> resource, the following permissions are required:

### Create
```json
iam:PassRole,
mediaconnect:DescribeFlow,
mediaconnect:AddFlowVpcInterfaces
```

### Read
```json
mediaconnect:DescribeFlow
```

### Update
```json
mediaconnect:DescribeFlow,
mediaconnect:AddFlowVpcInterfaces,
mediaconnect:RemoveFlowVpcInterface
```

### Delete
```json
mediaconnect:DescribeFlow,
mediaconnect:RemoveFlowVpcInterface
```

### List
```json
mediaconnect:DescribeFlow
```
