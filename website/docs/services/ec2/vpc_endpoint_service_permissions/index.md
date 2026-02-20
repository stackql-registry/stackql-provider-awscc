---
title: vpc_endpoint_service_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_endpoint_service_permissions
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

Creates, updates, deletes or gets a <code>vpc_endpoint_service_permission</code> resource or lists <code>vpc_endpoint_service_permissions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vpc_endpoint_service_permissions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EC2::VPCEndpointServicePermissions</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.vpc_endpoint_service_permissions" /></td></tr>
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
    "name": "allowed_principals",
    "type": "array",
    "description": ""
  },
  {
    "name": "service_id",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "service_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservicepermission.html"><code>AWS::EC2::VPCEndpointServicePermissions</code></a>.

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
    <td><code>vpc_endpoint_service_permissions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ServiceId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>vpc_endpoint_service_permissions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>vpc_endpoint_service_permissions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>vpc_endpoint_service_permissions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>vpc_endpoint_service_permissions</code></td>
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

Gets all properties from an individual <code>vpc_endpoint_service_permission</code>.
```sql
SELECT
region,
allowed_principals,
service_id
FROM awscc.ec2.vpc_endpoint_service_permissions
WHERE region = 'us-east-1' AND Identifier = '<ServiceId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>vpc_endpoint_service_permissions</code> in a region.
```sql
SELECT
region,
service_id
FROM awscc.ec2.vpc_endpoint_service_permissions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>vpc_endpoint_service_permission</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.vpc_endpoint_service_permissions (
 ServiceId,
 region
)
SELECT 
'{{ ServiceId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.vpc_endpoint_service_permissions (
 AllowedPrincipals,
 ServiceId,
 region
)
SELECT 
 '{{ AllowedPrincipals }}',
 '{{ ServiceId }}',
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
  - name: vpc_endpoint_service_permission
    props:
      - name: AllowedPrincipals
        value:
          - '{{ AllowedPrincipals[0] }}'
      - name: ServiceId
        value: '{{ ServiceId }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>vpc_endpoint_service_permission</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.vpc_endpoint_service_permissions
SET PatchDocument = string('{{ {
    "AllowedPrincipals": allowed_principals
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ServiceId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.vpc_endpoint_service_permissions
WHERE Identifier = '<ServiceId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>vpc_endpoint_service_permissions</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
ec2:CreateVpcEndpointServicePermissions,
ec2:ModifyVpcEndpointServicePermissions,
ec2:DeleteVpcEndpointServicePermissions,
ec2:DescribeVpcEndpointServicePermissions
```

</TabItem>
<TabItem value="create">

```json
ec2:CreateVpcEndpointServicePermissions,
ec2:ModifyVpcEndpointServicePermissions,
ec2:DeleteVpcEndpointServicePermissions,
ec2:DescribeVpcEndpointServicePermissions
```

</TabItem>
<TabItem value="update">

```json
ec2:CreateVpcEndpointServicePermissions,
ec2:ModifyVpcEndpointServicePermissions,
ec2:DeleteVpcEndpointServicePermissions,
ec2:DescribeVpcEndpointServicePermissions
```

</TabItem>
<TabItem value="list">

```json
ec2:CreateVpcEndpointServicePermissions,
ec2:ModifyVpcEndpointServicePermissions,
ec2:DeleteVpcEndpointServicePermissions,
ec2:DescribeVpcEndpointServicePermissions
```

</TabItem>
<TabItem value="delete">

```json
ec2:CreateVpcEndpointServicePermissions,
ec2:ModifyVpcEndpointServicePermissions,
ec2:DeleteVpcEndpointServicePermissions,
ec2:DescribeVpcEndpointServicePermissions
```

</TabItem>
</Tabs>