---
title: access_points
hide_title: false
hide_table_of_contents: false
keywords:
  - access_points
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

Creates, updates, deletes or gets an <code>access_point</code> resource or lists <code>access_points</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>access_points</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type Definition for AWS::S3Outposts::AccessPoint</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3outposts.access_points" /></td></tr>
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
    "description": "The Amazon Resource Name (ARN) of the specified AccessPoint."
  },
  {
    "name": "bucket",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the bucket you want to associate this AccessPoint with."
  },
  {
    "name": "name",
    "type": "string",
    "description": "A name for the AccessPoint."
  },
  {
    "name": "vpc_configuration",
    "type": "object",
    "description": "Virtual Private Cloud (VPC) from which requests can be made to the AccessPoint.",
    "children": [
      {
        "name": "vpc_id",
        "type": "string",
        "description": "Virtual Private Cloud (VPC) Id from which AccessPoint will allow requests."
      }
    ]
  },
  {
    "name": "policy",
    "type": "object",
    "description": "The access point policy associated with this access point."
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
    "description": "The Amazon Resource Name (ARN) of the specified AccessPoint."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html"><code>AWS::S3Outposts::AccessPoint</code></a>.

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
    <td><code>access_points</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Bucket, Name, VpcConfiguration, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>access_points</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>access_points</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>access_points_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>access_points</code></td>
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

Gets all properties from an individual <code>access_point</code>.
```sql
SELECT
region,
arn,
bucket,
name,
vpc_configuration,
policy
FROM awscc.s3outposts.access_points
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>access_points</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.s3outposts.access_points_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>access_point</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.s3outposts.access_points (
 Bucket,
 Name,
 VpcConfiguration,
 region
)
SELECT
'{{ bucket }}',
 '{{ name }}',
 '{{ vpc_configuration }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.s3outposts.access_points (
 Bucket,
 Name,
 VpcConfiguration,
 Policy,
 region
)
SELECT
 '{{ bucket }}',
 '{{ name }}',
 '{{ vpc_configuration }}',
 '{{ policy }}',
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
  - name: access_point
    props:
      - name: bucket
        value: '{{ bucket }}'
      - name: name
        value: '{{ name }}'
      - name: vpc_configuration
        value:
          vpc_id: '{{ vpc_id }}'
      - name: policy
        value: {}
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>access_point</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.s3outposts.access_points
SET PatchDocument = string('{{ {
    "Policy": policy
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.s3outposts.access_points
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>access_points</code> resource, the following permissions are required:

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
s3-outposts:CreateAccessPoint,
s3-outposts:GetAccessPoint,
s3-outposts:PutAccessPointPolicy,
s3-outposts:GetAccessPointPolicy
```

</TabItem>
<TabItem value="read">

```json
s3-outposts:GetAccessPoint,
s3-outposts:GetAccessPointPolicy
```

</TabItem>
<TabItem value="update">

```json
s3-outposts:GetAccessPoint,
s3-outposts:PutAccessPointPolicy,
s3-outposts:GetAccessPointPolicy,
s3-outposts:DeleteAccessPointPolicy
```

</TabItem>
<TabItem value="delete">

```json
s3-outposts:DeleteAccessPoint,
s3-outposts:DeleteAccessPointPolicy
```

</TabItem>
<TabItem value="list">

```json
s3-outposts:ListAccessPoints
```

</TabItem>
</Tabs>