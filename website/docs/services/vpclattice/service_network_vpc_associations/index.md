---
title: service_network_vpc_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - service_network_vpc_associations
  - vpclattice
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

Creates, updates, deletes or gets a <code>service_network_vpc_association</code> resource or lists <code>service_network_vpc_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>service_network_vpc_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Associates a VPC with a service network.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.vpclattice.service_network_vpc_associations" /></td></tr>
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
    "description": ""
  },
  {
    "name": "created_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "security_group_ids",
    "type": "array",
    "description": ""
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "service_network_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "service_network_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "service_network_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "service_network_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "vpc_identifier",
    "type": "string",
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
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
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
    "name": "arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-servicenetworkvpcassociation.html"><code>AWS::VpcLattice::ServiceNetworkVpcAssociation</code></a>.

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
    <td><code>service_network_vpc_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>service_network_vpc_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>service_network_vpc_associations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>service_network_vpc_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>service_network_vpc_associations</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>service_network_vpc_association</code>.
```sql
SELECT
region,
arn,
created_at,
security_group_ids,
id,
service_network_arn,
service_network_id,
service_network_identifier,
service_network_name,
status,
vpc_id,
vpc_identifier,
tags
FROM awscc.vpclattice.service_network_vpc_associations
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>service_network_vpc_associations</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.vpclattice.service_network_vpc_associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>service_network_vpc_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.vpclattice.service_network_vpc_associations (
 SecurityGroupIds,
 ServiceNetworkIdentifier,
 VpcIdentifier,
 Tags,
 region
)
SELECT 
'{{ SecurityGroupIds }}',
 '{{ ServiceNetworkIdentifier }}',
 '{{ VpcIdentifier }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.vpclattice.service_network_vpc_associations (
 SecurityGroupIds,
 ServiceNetworkIdentifier,
 VpcIdentifier,
 Tags,
 region
)
SELECT 
 '{{ SecurityGroupIds }}',
 '{{ ServiceNetworkIdentifier }}',
 '{{ VpcIdentifier }}',
 '{{ Tags }}',
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
  - name: service_network_vpc_association
    props:
      - name: SecurityGroupIds
        value:
          - '{{ SecurityGroupIds[0] }}'
      - name: ServiceNetworkIdentifier
        value: '{{ ServiceNetworkIdentifier }}'
      - name: VpcIdentifier
        value: '{{ VpcIdentifier }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.vpclattice.service_network_vpc_associations
SET data__PatchDocument = string('{{ {
    "SecurityGroupIds": security_group_ids,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.vpclattice.service_network_vpc_associations
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>service_network_vpc_associations</code> resource, the following permissions are required:

### Create
```json
vpc-lattice:CreateServiceNetworkVpcAssociation,
vpc-lattice:GetServiceNetworkVpcAssociation,
vpc-lattice:ListServiceNetworkVpcAssociations,
vpc-lattice:ListTagsForResource,
ec2:DescribeSecurityGroups,
ec2:DescribeVpcs,
vpc-lattice:TagResource
```

### Read
```json
vpc-lattice:GetServiceNetworkVpcAssociation,
vpc-lattice:ListTagsForResource
```

### Update
```json
vpc-lattice:TagResource,
vpc-lattice:UntagResource,
vpc-lattice:GetServiceNetworkVpcAssociation,
vpc-lattice:UpdateServiceNetworkVpcAssociation,
ec2:DescribeSecurityGroups,
vpc-lattice:ListTagsForResource
```

### Delete
```json
vpc-lattice:DeleteServiceNetworkVpcAssociation,
vpc-lattice:GetServiceNetworkVpcAssociation,
vpc-lattice:UntagResource
```

### List
```json
vpc-lattice:ListServiceNetworkVpcAssociations
```
