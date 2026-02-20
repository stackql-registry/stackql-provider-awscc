---
title: access_grants
hide_title: false
hide_table_of_contents: false
keywords:
  - access_grants
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

Creates, updates, deletes or gets an <code>access_grant</code> resource or lists <code>access_grants</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>access_grants</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::S3::AccessGrant resource is an Amazon S3 resource type representing permissions to a specific S3 bucket or prefix hosted in an S3 Access Grants instance.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3.access_grants" /></td></tr>
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
    "name": "access_grant_id",
    "type": "string",
    "description": "The ID assigned to this access grant."
  },
  {
    "name": "access_grants_location_id",
    "type": "string",
    "description": "The custom S3 location to be accessed by the grantee"
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
    "name": "permission",
    "type": "string",
    "description": "The level of access to be afforded to the grantee"
  },
  {
    "name": "application_arn",
    "type": "string",
    "description": "The ARN of the application grantees will use to access the location"
  },
  {
    "name": "s3_prefix_type",
    "type": "string",
    "description": "The type of S3SubPrefix."
  },
  {
    "name": "grant_scope",
    "type": "string",
    "description": "The S3 path of the data to which you are granting access. It is a combination of the S3 path of the registered location and the subprefix."
  },
  {
    "name": "access_grant_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the specified access grant."
  },
  {
    "name": "grantee",
    "type": "object",
    "description": "The principal who will be granted permission to access S3.",
    "children": [
      {
        "name": "grantee_type",
        "type": "string",
        "description": "Configures the transfer acceleration state for an Amazon S3 bucket."
      },
      {
        "name": "grantee_identifier",
        "type": "string",
        "description": "The unique identifier of the Grantee"
      }
    ]
  },
  {
    "name": "access_grants_location_configuration",
    "type": "object",
    "description": "The configuration options of the grant location, which is the S3 path to the data to which you are granting access.",
    "children": [
      {
        "name": "s3_sub_prefix",
        "type": "string",
        "description": "The S3 sub prefix of a registered location in your S3 Access Grants instance"
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
    "name": "access_grant_id",
    "type": "string",
    "description": "The ID assigned to this access grant."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrant.html"><code>AWS::S3::AccessGrant</code></a>.

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
    <td><code>access_grants</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Grantee, Permission, AccessGrantsLocationId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>access_grants</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>access_grants</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>access_grants_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>access_grants</code></td>
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

Gets all properties from an individual <code>access_grant</code>.
```sql
SELECT
region,
access_grant_id,
access_grants_location_id,
tags,
permission,
application_arn,
s3_prefix_type,
grant_scope,
access_grant_arn,
grantee,
access_grants_location_configuration
FROM awscc.s3.access_grants
WHERE region = 'us-east-1' AND Identifier = '<AccessGrantId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>access_grants</code> in a region.
```sql
SELECT
region,
access_grant_id
FROM awscc.s3.access_grants_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>access_grant</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.s3.access_grants (
 AccessGrantsLocationId,
 Permission,
 Grantee,
 region
)
SELECT 
'{{ AccessGrantsLocationId }}',
 '{{ Permission }}',
 '{{ Grantee }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.s3.access_grants (
 AccessGrantsLocationId,
 Tags,
 Permission,
 ApplicationArn,
 S3PrefixType,
 Grantee,
 AccessGrantsLocationConfiguration,
 region
)
SELECT 
 '{{ AccessGrantsLocationId }}',
 '{{ Tags }}',
 '{{ Permission }}',
 '{{ ApplicationArn }}',
 '{{ S3PrefixType }}',
 '{{ Grantee }}',
 '{{ AccessGrantsLocationConfiguration }}',
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
  - name: access_grant
    props:
      - name: AccessGrantsLocationId
        value: '{{ AccessGrantsLocationId }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Permission
        value: '{{ Permission }}'
      - name: ApplicationArn
        value: '{{ ApplicationArn }}'
      - name: S3PrefixType
        value: '{{ S3PrefixType }}'
      - name: Grantee
        value:
          GranteeType: '{{ GranteeType }}'
          GranteeIdentifier: '{{ GranteeIdentifier }}'
      - name: AccessGrantsLocationConfiguration
        value:
          S3SubPrefix: '{{ S3SubPrefix }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>access_grant</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.s3.access_grants
SET PatchDocument = string('{{ {
    "AccessGrantsLocationId": access_grants_location_id,
    "Permission": permission,
    "ApplicationArn": application_arn,
    "Grantee": grantee,
    "AccessGrantsLocationConfiguration": access_grants_location_configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<AccessGrantId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.s3.access_grants
WHERE Identifier = '<AccessGrantId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>access_grants</code> resource, the following permissions are required:

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
s3:CreateAccessGrant,
s3:TagResource
```

</TabItem>
<TabItem value="read">

```json
s3:GetAccessGrant,
s3:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
s3:DeleteAccessGrant
```

</TabItem>
<TabItem value="list">

```json
s3:ListAccessGrants
```

</TabItem>
<TabItem value="update">

```json
s3:TagResource,
s3:UntagResource
```

</TabItem>
</Tabs>