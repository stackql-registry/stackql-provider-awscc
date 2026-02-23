---
title: endpoint_authorizations
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoint_authorizations
  - redshift
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

Creates, updates, deletes or gets an <code>endpoint_authorization</code> resource or lists <code>endpoint_authorizations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>endpoint_authorizations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Describes an endpoint authorization for authorizing Redshift-managed VPC endpoint access to a cluster across AWS accounts.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.redshift.endpoint_authorizations" /></td></tr>
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
    "name": "status",
    "type": "string",
    "description": "The status of the authorization action."
  },
  {
    "name": "grantee",
    "type": "string",
    "description": "The AWS account ID of the grantee of the cluster."
  },
  {
    "name": "endpoint_count",
    "type": "integer",
    "description": "The number of Redshift-managed VPC endpoints created for the authorization."
  },
  {
    "name": "authorize_time",
    "type": "string",
    "description": "The time (UTC) when the authorization was created."
  },
  {
    "name": "allowed_vpcs",
    "type": "array",
    "description": "The VPCs allowed access to the cluster."
  },
  {
    "name": "force",
    "type": "boolean",
    "description": "Indicates whether to force the revoke action. If true, the Redshift-managed VPC endpoints associated with the endpoint authorization are also deleted."
  },
  {
    "name": "allowed_all_vpcs",
    "type": "boolean",
    "description": "Indicates whether all VPCs in the grantee account are allowed access to the cluster."
  },
  {
    "name": "vpc_ids",
    "type": "array",
    "description": "The virtual private cloud (VPC) identifiers to grant or revoke access to."
  },
  {
    "name": "cluster_identifier",
    "type": "string",
    "description": "The cluster identifier."
  },
  {
    "name": "cluster_status",
    "type": "string",
    "description": "The status of the cluster."
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
    "name": "cluster_identifier",
    "type": "string",
    "description": "The cluster identifier."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointauthorization.html"><code>AWS::Redshift::EndpointAuthorization</code></a>.

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
    <td><code>endpoint_authorizations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ClusterIdentifier, Account, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>endpoint_authorizations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>endpoint_authorizations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>endpoint_authorizations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>endpoint_authorizations</code></td>
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

Gets all properties from an individual <code>endpoint_authorization</code>.
```sql
SELECT
region,
status,
grantee,
account,
grantor,
endpoint_count,
authorize_time,
allowed_vpcs,
force,
allowed_all_vpcs,
vpc_ids,
cluster_identifier,
cluster_status
FROM awscc.redshift.endpoint_authorizations
WHERE region = 'us-east-1' AND Identifier = '{{ cluster_identifier }}|{{ account }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>endpoint_authorizations</code> in a region.
```sql
SELECT
region,
cluster_identifier,
account
FROM awscc.redshift.endpoint_authorizations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>endpoint_authorization</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.redshift.endpoint_authorizations (
 Account,
 ClusterIdentifier,
 region
)
SELECT
'{{ account }}',
 '{{ cluster_identifier }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.redshift.endpoint_authorizations (
 Account,
 Force,
 VpcIds,
 ClusterIdentifier,
 region
)
SELECT
 '{{ account }}',
 '{{ force }}',
 '{{ vpc_ids }}',
 '{{ cluster_identifier }}',
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
  - name: endpoint_authorization
    props:
      - name: account
        value: '{{ account }}'
      - name: force
        value: '{{ force }}'
      - name: vpc_ids
        value:
          - '{{ vpc_ids[0] }}'
      - name: cluster_identifier
        value: '{{ cluster_identifier }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>endpoint_authorization</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.redshift.endpoint_authorizations
SET PatchDocument = string('{{ {
    "Force": force,
    "VpcIds": vpc_ids
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ cluster_identifier }}|{{ account }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.redshift.endpoint_authorizations
WHERE Identifier = '{{ cluster_identifier }}|{{ account }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>endpoint_authorizations</code> resource, the following permissions are required:

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
redshift:DescribeEndpointAuthorization
```

</TabItem>
<TabItem value="create">

```json
redshift:AuthorizeEndpointAccess,
redshift:DescribeEndpointAuthorization
```

</TabItem>
<TabItem value="update">

```json
redshift:AuthorizeEndpointAccess,
redshift:DescribeEndpointAuthorization,
redshift:RevokeEndpointAccess
```

</TabItem>
<TabItem value="list">

```json
redshift:DescribeEndpointAuthorization
```

</TabItem>
<TabItem value="delete">

```json
redshift:RevokeEndpointAccess,
redshift:DeleteEndpointAccess,
redshift:DescribeEndpointAuthorization,
ec2:DeleteClientVpnEndpoint,
ec2:DescribeVpcAttribute,
ec2:DescribeSecurityGroups,
ec2:DescribeAddresses,
ec2:DescribeInternetGateways,
ec2:DescribeSubnets
```

</TabItem>
</Tabs>