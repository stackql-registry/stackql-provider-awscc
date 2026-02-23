---
title: ipam_resource_discovery_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_resource_discovery_associations
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

Creates, updates, deletes or gets an <code>ipam_resource_discovery_association</code> resource or lists <code>ipam_resource_discovery_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>ipam_resource_discovery_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Schema of AWS::EC2::IPAMResourceDiscoveryAssociation Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.ipam_resource_discovery_associations" /></td></tr>
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
    "name": "ipam_arn",
    "type": "string",
    "description": "Arn of the IPAM."
  },
  {
    "name": "ipam_region",
    "type": "string",
    "description": "The home region of the IPAM."
  },
  {
    "name": "ipam_resource_discovery_association_id",
    "type": "string",
    "description": "Id of the IPAM Resource Discovery Association."
  },
  {
    "name": "ipam_resource_discovery_id",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the IPAM Resource Discovery Association."
  },
  {
    "name": "ipam_id",
    "type": "string",
    "description": "The Id of the IPAM this Resource Discovery is associated to."
  },
  {
    "name": "ipam_resource_discovery_association_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the resource discovery association is a part of."
  },
  {
    "name": "is_default",
    "type": "boolean",
    "description": "If the Resource Discovery Association exists due as part of CreateIpam."
  },
  {
    "name": "owner_id",
    "type": "string",
    "description": "The AWS Account ID for the account where the shared IPAM exists."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The operational state of the Resource Discovery Association. Related to Create/Delete activities."
  },
  {
    "name": "resource_discovery_status",
    "type": "string",
    "description": "The status of the resource discovery."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
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
    "name": "ipam_resource_discovery_association_id",
    "type": "string",
    "description": "Id of the IPAM Resource Discovery Association."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamresourcediscoveryassociation.html"><code>AWS::EC2::IPAMResourceDiscoveryAssociation</code></a>.

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
    <td><code>ipam_resource_discovery_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="IpamId, IpamResourceDiscoveryId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>ipam_resource_discovery_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>ipam_resource_discovery_associations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>ipam_resource_discovery_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>ipam_resource_discovery_associations</code></td>
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

Gets all properties from an individual <code>ipam_resource_discovery_association</code>.
```sql
SELECT
region,
ipam_arn,
ipam_region,
ipam_resource_discovery_association_id,
ipam_resource_discovery_id,
ipam_id,
ipam_resource_discovery_association_arn,
is_default,
owner_id,
state,
resource_discovery_status,
tags
FROM awscc.ec2.ipam_resource_discovery_associations
WHERE region = 'us-east-1' AND Identifier = '{{ ipam_resource_discovery_association_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>ipam_resource_discovery_associations</code> in a region.
```sql
SELECT
region,
ipam_resource_discovery_association_id
FROM awscc.ec2.ipam_resource_discovery_associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>ipam_resource_discovery_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.ipam_resource_discovery_associations (
 IpamResourceDiscoveryId,
 IpamId,
 region
)
SELECT
'{{ ipam_resource_discovery_id }}',
 '{{ ipam_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.ipam_resource_discovery_associations (
 IpamResourceDiscoveryId,
 IpamId,
 Tags,
 region
)
SELECT
 '{{ ipam_resource_discovery_id }}',
 '{{ ipam_id }}',
 '{{ tags }}',
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
  - name: ipam_resource_discovery_association
    props:
      - name: ipam_resource_discovery_id
        value: '{{ ipam_resource_discovery_id }}'
      - name: ipam_id
        value: '{{ ipam_id }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>ipam_resource_discovery_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.ipam_resource_discovery_associations
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ ipam_resource_discovery_association_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.ipam_resource_discovery_associations
WHERE Identifier = '{{ ipam_resource_discovery_association_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>ipam_resource_discovery_associations</code> resource, the following permissions are required:

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
ec2:AssociateIpamResourceDiscovery,
ec2:DescribeIpamResourceDiscoveryAssociations,
ec2:CreateTags
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeIpamResourceDiscoveryAssociations
```

</TabItem>
<TabItem value="update">

```json
ec2:DescribeIpamResourceDiscoveryAssociations,
ec2:CreateTags,
ec2:DeleteTags
```

</TabItem>
<TabItem value="delete">

```json
ec2:DisassociateIpamResourceDiscovery,
ec2:DescribeIpamResourceDiscoveryAssociations,
ec2:DeleteTags
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeIpamResourceDiscoveryAssociations
```

</TabItem>
</Tabs>