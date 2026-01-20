---
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
  - sso
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

Creates, updates, deletes or gets an <code>instance</code> resource or lists <code>instances</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>instances</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for Identity Center (SSO) Instance</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sso.instances" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "The name you want to assign to this Identity Center (SSO) Instance"
  },
  {
    "name": "instance_arn",
    "type": "string",
    "description": "The SSO Instance ARN that is returned upon creation of the Identity Center (SSO) Instance"
  },
  {
    "name": "owner_account_id",
    "type": "string",
    "description": "The AWS accountId of the owner of the Identity Center (SSO) Instance"
  },
  {
    "name": "identity_store_id",
    "type": "string",
    "description": "The ID of the identity store associated with the created Identity Center (SSO) Instance"
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the Identity Center (SSO) Instance, create&#95;in&#95;progress/delete&#95;in&#95;progress/active"
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instance.html"><code>AWS::SSO::Instance</code></a>.

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
    <td><CopyableCode code="region" /></td>
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

Gets all properties from an individual <code>instance</code>.
```sql
SELECT
region,
name,
instance_arn,
owner_account_id,
identity_store_id,
status,
tags
FROM awscc.sso.instances
WHERE region = 'us-east-1' AND data__Identifier = '<InstanceArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>instance</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sso.instances (
 Name,
 Tags,
 region
)
SELECT 
'{{ Name }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.sso.instances (
 Name,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
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
  - name: instance
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sso.instances
WHERE data__Identifier = '<InstanceArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>instances</code> resource, the following permissions are required:

### Create
```json
sso:CreateInstance,
sso:DescribeInstance,
sso:TagResource,
iam:CreateServiceLinkedRole,
sso:TagInstance,
sso:ListTagsForResource
```

### Read
```json
sso:DescribeInstance,
sso:ListTagsForResource
```

### Update
```json
sso:UpdateInstance,
sso:TagResource,
sso:UntagResource,
sso:ListTagsForResource,
sso:TagInstance,
sso:DescribeInstance
```

### Delete
```json
sso:DeleteInstance
```

### List
```json
sso:ListInstances
```
