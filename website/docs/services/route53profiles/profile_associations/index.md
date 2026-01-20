---
title: profile_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - profile_associations
  - route53profiles
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

Creates, updates, deletes or gets a <code>profile_association</code> resource or lists <code>profile_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>profile_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Route53Profiles::ProfileAssociation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53profiles.profile_associations" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "resource_id",
    "type": "string",
    "description": "The resource that you associated the profile with."
  },
  {
    "name": "profile_id",
    "type": "string",
    "description": "The ID of the profile that you associated with the resource that is specified by ResourceId."
  },
  {
    "name": "id",
    "type": "string",
    "description": "Primary Identifier for Profile Association"
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of an association between a Profile and a VPC."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the profile association."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileassociation.html"><code>AWS::Route53Profiles::ProfileAssociation</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ResourceId, ProfileId, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>profile_association</code>.
```sql
SELECT
region,
resource_id,
profile_id,
id,
name,
tags,
arn
FROM awscc.route53profiles.profile_associations
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>profile_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.route53profiles.profile_associations (
 ResourceId,
 ProfileId,
 Name,
 region
)
SELECT 
'{{ ResourceId }}',
 '{{ ProfileId }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.route53profiles.profile_associations (
 ResourceId,
 ProfileId,
 Name,
 Tags,
 Arn,
 region
)
SELECT 
 '{{ ResourceId }}',
 '{{ ProfileId }}',
 '{{ Name }}',
 '{{ Tags }}',
 '{{ Arn }}',
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
  - name: profile_association
    props:
      - name: ResourceId
        value: '{{ ResourceId }}'
      - name: ProfileId
        value: '{{ ProfileId }}'
      - name: Name
        value: '{{ Name }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Arn
        value: '{{ Arn }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.route53profiles.profile_associations
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>profile_associations</code> resource, the following permissions are required:

### Create
```json
route53profiles:AssociateProfile,
route53profiles:GetProfileAssociation,
route53profiles:ListProfileAssociations,
ec2:DescribeVpcs,
route53profiles:TagResource,
route53profiles:ListTagsForResource
```

### Update
```json
route53profiles:GetProfileAssociation,
route53profiles:TagResource,
route53profiles:UntagResource,
route53profiles:ListTagsForResource
```

### Read
```json
route53profiles:GetProfileAssociation,
route53profiles:ListTagsForResource
```

### Delete
```json
route53profiles:DisassociateProfile,
route53profiles:GetProfileAssociation,
route53profiles:UntagResource,
route53profiles:ListTagsForResource
```

### List
```json
route53profiles:ListProfileAssociations,
route53profiles:ListTagsForResource
```
