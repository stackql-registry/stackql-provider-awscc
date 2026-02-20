---
title: access_grants_locations
hide_title: false
hide_table_of_contents: false
keywords:
  - access_grants_locations
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

Creates, updates, deletes or gets an <code>access_grants_location</code> resource or lists <code>access_grants_locations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>access_grants_locations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::S3::AccessGrantsLocation resource is an Amazon S3 resource type hosted in an access grants instance which can be the target of S3 access grants.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3.access_grants_locations" /></td></tr>
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
    "name": "access_grants_location_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the specified Access Grants location."
  },
  {
    "name": "access_grants_location_id",
    "type": "string",
    "description": "The unique identifier for the specified Access Grants location."
  },
  {
    "name": "iam_role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the access grant location's associated IAM role."
  },
  {
    "name": "location_scope",
    "type": "string",
    "description": "Descriptor for where the location actually points"
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
    "name": "access_grants_location_id",
    "type": "string",
    "description": "The unique identifier for the specified Access Grants location."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrantslocation.html"><code>AWS::S3::AccessGrantsLocation</code></a>.

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
    <td><code>access_grants_locations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>access_grants_locations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>access_grants_locations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>access_grants_locations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>access_grants_locations</code></td>
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

Gets all properties from an individual <code>access_grants_location</code>.
```sql
SELECT
region,
access_grants_location_arn,
access_grants_location_id,
iam_role_arn,
location_scope,
tags
FROM awscc.s3.access_grants_locations
WHERE region = 'us-east-1' AND Identifier = '<AccessGrantsLocationId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>access_grants_locations</code> in a region.
```sql
SELECT
region,
access_grants_location_id
FROM awscc.s3.access_grants_locations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>access_grants_location</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.s3.access_grants_locations (
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
INSERT INTO awscc.s3.access_grants_locations (
 IamRoleArn,
 LocationScope,
 Tags,
 region
)
SELECT 
 '{{ IamRoleArn }}',
 '{{ LocationScope }}',
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
  - name: access_grants_location
    props:
      - name: IamRoleArn
        value: '{{ IamRoleArn }}'
      - name: LocationScope
        value: '{{ LocationScope }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>access_grants_location</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.s3.access_grants_locations
SET PatchDocument = string('{{ {
    "IamRoleArn": iam_role_arn,
    "LocationScope": location_scope
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<AccessGrantsLocationId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.s3.access_grants_locations
WHERE Identifier = '<AccessGrantsLocationId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>access_grants_locations</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
s3:CreateAccessGrantsLocation,
iam:PassRole,
s3:TagResource
```

</TabItem>
<TabItem value="read">

```json
s3:GetAccessGrantsLocation,
s3:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
s3:DeleteAccessGrantsLocation
```

</TabItem>
<TabItem value="list">

```json
s3:ListAccessGrantsLocations
```

</TabItem>
<TabItem value="update">

```json
s3:UpdateAccessGrantsLocation,
s3:TagResource,
s3:UntagResource,
iam:PassRole
```

</TabItem>
</Tabs>