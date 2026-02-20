---
title: vpc_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_connections
  - quicksight
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

Creates, updates, deletes or gets a <code>vpc_connection</code> resource or lists <code>vpc_connections</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vpc_connections</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of the AWS::QuickSight::VPCConnection Resource Type.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.quicksight.vpc_connections" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": "<p>The Amazon Resource Name (ARN) of the VPC connection.</p>"
  },
  {
    "name": "availability_status",
    "type": "string",
    "description": ""
  },
  {
    "name": "aws_account_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "created_time",
    "type": "string",
    "description": "<p>The time that the VPC connection was created.</p>"
  },
  {
    "name": "dns_resolvers",
    "type": "array",
    "description": ""
  },
  {
    "name": "last_updated_time",
    "type": "string",
    "description": "<p>The time that the VPC connection was last updated.</p>"
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "network_interfaces",
    "type": "array",
    "description": "<p>A list of network interfaces.</p>",
    "children": [
      {
        "name": "subnet_id",
        "type": "string",
        "description": "<p>The subnet ID associated with the network interface.</p>"
      },
      {
        "name": "availability_zone",
        "type": "string",
        "description": "<p>The availability zone that the network interface resides in.</p>"
      },
      {
        "name": "error_message",
        "type": "string",
        "description": "<p>An error message.</p>"
      },
      {
        "name": "status",
        "type": "string",
        "description": ""
      },
      {
        "name": "network_interface_id",
        "type": "string",
        "description": "<p>The network interface ID.</p>"
      }
    ]
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "security_group_ids",
    "type": "array",
    "description": ""
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "subnet_ids",
    "type": "array",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "<p>Tag key.</p>"
      },
      {
        "name": "value",
        "type": "string",
        "description": "<p>Tag value.</p>"
      }
    ]
  },
  {
    "name": "vpc_connection_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": "<p>The Amazon EC2 VPC ID associated with the VPC connection.</p>"
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
    "name": "aws_account_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "vpc_connection_id",
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
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-vpcconnection.html"><code>AWS::QuickSight::VPCConnection</code></a>.

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
    <td><code>vpc_connections</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>vpc_connections</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>vpc_connections</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>vpc_connections_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>vpc_connections</code></td>
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

Gets all properties from an individual <code>vpc_connection</code>.
```sql
SELECT
region,
arn,
availability_status,
aws_account_id,
created_time,
dns_resolvers,
last_updated_time,
name,
network_interfaces,
role_arn,
security_group_ids,
status,
subnet_ids,
tags,
vpc_connection_id,
vpc_id
FROM awscc.quicksight.vpc_connections
WHERE region = 'us-east-1' AND Identifier = '<AwsAccountId>|<VPCConnectionId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>vpc_connections</code> in a region.
```sql
SELECT
region,
aws_account_id,
vpc_connection_id
FROM awscc.quicksight.vpc_connections_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>vpc_connection</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.quicksight.vpc_connections (
 AvailabilityStatus,
 AwsAccountId,
 DnsResolvers,
 Name,
 RoleArn,
 SecurityGroupIds,
 SubnetIds,
 Tags,
 VPCConnectionId,
 region
)
SELECT 
'{{ AvailabilityStatus }}',
 '{{ AwsAccountId }}',
 '{{ DnsResolvers }}',
 '{{ Name }}',
 '{{ RoleArn }}',
 '{{ SecurityGroupIds }}',
 '{{ SubnetIds }}',
 '{{ Tags }}',
 '{{ VPCConnectionId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.quicksight.vpc_connections (
 AvailabilityStatus,
 AwsAccountId,
 DnsResolvers,
 Name,
 RoleArn,
 SecurityGroupIds,
 SubnetIds,
 Tags,
 VPCConnectionId,
 region
)
SELECT 
 '{{ AvailabilityStatus }}',
 '{{ AwsAccountId }}',
 '{{ DnsResolvers }}',
 '{{ Name }}',
 '{{ RoleArn }}',
 '{{ SecurityGroupIds }}',
 '{{ SubnetIds }}',
 '{{ Tags }}',
 '{{ VPCConnectionId }}',
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
  - name: vpc_connection
    props:
      - name: AvailabilityStatus
        value: '{{ AvailabilityStatus }}'
      - name: AwsAccountId
        value: '{{ AwsAccountId }}'
      - name: DnsResolvers
        value:
          - '{{ DnsResolvers[0] }}'
      - name: Name
        value: '{{ Name }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: SecurityGroupIds
        value:
          - '{{ SecurityGroupIds[0] }}'
      - name: SubnetIds
        value:
          - '{{ SubnetIds[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: VPCConnectionId
        value: '{{ VPCConnectionId }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>vpc_connection</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.quicksight.vpc_connections
SET PatchDocument = string('{{ {
    "AvailabilityStatus": availability_status,
    "DnsResolvers": dns_resolvers,
    "Name": name,
    "RoleArn": role_arn,
    "SecurityGroupIds": security_group_ids,
    "SubnetIds": subnet_ids,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<AwsAccountId>|<VPCConnectionId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.quicksight.vpc_connections
WHERE Identifier = '<AwsAccountId|VPCConnectionId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>vpc_connections</code> resource, the following permissions are required:

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
quicksight:CreateVPCConnection,
quicksight:DescribeVPCConnection,
quicksight:ListTagsForResource,
quicksight:TagResource,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
quicksight:DescribeVPCConnection,
quicksight:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
quicksight:DescribeVPCConnection,
quicksight:UpdateVPCConnection,
quicksight:TagResource,
quicksight:UntagResource,
quicksight:ListTagsForResource,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
quicksight:DescribeVPCConnection,
quicksight:DeleteVPCConnection,
quicksight:ListTagsForResource,
iam:PassRole
```

</TabItem>
<TabItem value="list">

```json
quicksight:ListVPCConnections
```

</TabItem>
</Tabs>