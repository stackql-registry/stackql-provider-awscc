---
title: access_grants_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - access_grants_instances
  - s3
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

Creates, updates, deletes or gets an <code>access_grants_instance</code> resource or lists <code>access_grants_instances</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>access_grants_instances</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::S3::AccessGrantsInstance resource is an Amazon S3 resource type that hosts Access Grants and their associated locations</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3.access_grants_instances" /></td></tr>
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
    "name": "access_grants_instance_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the specified Access Grants instance."
  },
  {
    "name": "identity_center_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the specified AWS Identity Center."
  },
  {
    "name": "access_grants_instance_id",
    "type": "string",
    "description": "A unique identifier for the specified access grants instance."
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
    "name": "access_grants_instance_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the specified Access Grants instance."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrantsinstance.html"><code>AWS::S3::AccessGrantsInstance</code></a>.

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
    <td><code>access_grants_instances</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>access_grants_instances</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>access_grants_instances</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>access_grants_instances_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>access_grants_instances</code></td>
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

Gets all properties from an individual <code>access_grants_instance</code>.
```sql
SELECT
region,
access_grants_instance_arn,
identity_center_arn,
access_grants_instance_id,
tags
FROM awscc.s3.access_grants_instances
WHERE region = 'us-east-1' AND Identifier = '{{ access_grants_instance_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>access_grants_instances</code> in a region.
```sql
SELECT
region,
access_grants_instance_arn
FROM awscc.s3.access_grants_instances_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>access_grants_instance</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.s3.access_grants_instances (
 ,
 region
)
SELECT
'{{  }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.s3.access_grants_instances (
 IdentityCenterArn,
 Tags,
 region
)
SELECT
 '{{ identity_center_arn }}',
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
  - name: access_grants_instance
    props:
      - name: identity_center_arn
        value: '{{ identity_center_arn }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>access_grants_instance</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.s3.access_grants_instances
SET PatchDocument = string('{{ {
    "IdentityCenterArn": identity_center_arn
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ access_grants_instance_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.s3.access_grants_instances
WHERE Identifier = '{{ access_grants_instance_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>access_grants_instances</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
s3:CreateAccessGrantsInstance,
s3:AssociateAccessGrantsIdentityCenter,
s3:TagResource
```

</TabItem>
<TabItem value="read">

```json
s3:GetAccessGrantsInstance,
s3:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
s3:GetAccessGrantsInstance,
s3:DeleteAccessGrantsInstance,
s3:DissociateAccessGrantsIdentityCenter
```

</TabItem>
<TabItem value="update">

```json
s3:TagResource,
s3:UntagResource
```

</TabItem>
<TabItem value="list">

```json
s3:ListAccessGrantsInstances
```

</TabItem>
</Tabs>