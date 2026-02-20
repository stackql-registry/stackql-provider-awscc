---
title: profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - profiles
  - b2bi
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

Creates, updates, deletes or gets a <code>profile</code> resource or lists <code>profiles</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::B2BI::Profile Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.b2bi.profiles" /></td></tr>
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
    "name": "business_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "created_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "email",
    "type": "string",
    "description": ""
  },
  {
    "name": "log_group_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "logging",
    "type": "string",
    "description": ""
  },
  {
    "name": "modified_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "phone",
    "type": "string",
    "description": ""
  },
  {
    "name": "profile_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "profile_id",
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
    "name": "profile_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html"><code>AWS::B2BI::Profile</code></a>.

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
    <td><code>profiles</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="BusinessName, Logging, Name, Phone, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>profiles</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>profiles</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>profiles_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>profiles</code></td>
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

Gets all properties from an individual <code>profile</code>.
```sql
SELECT
region,
business_name,
created_at,
email,
log_group_name,
logging,
modified_at,
name,
phone,
profile_arn,
profile_id,
tags
FROM awscc.b2bi.profiles
WHERE region = 'us-east-1' AND Identifier = '<ProfileId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>profiles</code> in a region.
```sql
SELECT
region,
profile_id
FROM awscc.b2bi.profiles_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.b2bi.profiles (
 BusinessName,
 Logging,
 Name,
 Phone,
 region
)
SELECT 
'{{ BusinessName }}',
 '{{ Logging }}',
 '{{ Name }}',
 '{{ Phone }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.b2bi.profiles (
 BusinessName,
 Email,
 Logging,
 Name,
 Phone,
 Tags,
 region
)
SELECT 
 '{{ BusinessName }}',
 '{{ Email }}',
 '{{ Logging }}',
 '{{ Name }}',
 '{{ Phone }}',
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
  - name: profile
    props:
      - name: BusinessName
        value: '{{ BusinessName }}'
      - name: Email
        value: '{{ Email }}'
      - name: Logging
        value: '{{ Logging }}'
      - name: Name
        value: '{{ Name }}'
      - name: Phone
        value: '{{ Phone }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.b2bi.profiles
SET PatchDocument = string('{{ {
    "BusinessName": business_name,
    "Email": email,
    "Name": name,
    "Phone": phone,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ProfileId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.b2bi.profiles
WHERE Identifier = '<ProfileId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>profiles</code> resource, the following permissions are required:

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
b2bi:CreateProfile,
b2bi:TagResource,
logs:CreateLogDelivery,
logs:CreateLogGroup,
logs:CreateLogStream,
logs:DescribeLogGroups,
logs:DescribeLogStreams,
logs:DescribeResourcePolicies,
logs:ListLogDeliveries,
logs:PutLogEvents,
logs:PutResourcePolicy
```

</TabItem>
<TabItem value="read">

```json
b2bi:GetProfile,
b2bi:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
b2bi:TagResource,
b2bi:UntagResource,
b2bi:UpdateProfile
```

</TabItem>
<TabItem value="delete">

```json
b2bi:DeleteProfile,
logs:DeleteLogDelivery,
logs:ListLogDeliveries
```

</TabItem>
<TabItem value="list">

```json
b2bi:ListProfiles
```

</TabItem>
</Tabs>