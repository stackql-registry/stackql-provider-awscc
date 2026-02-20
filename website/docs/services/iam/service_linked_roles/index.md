---
title: service_linked_roles
hide_title: false
hide_table_of_contents: false
keywords:
  - service_linked_roles
  - iam
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

Creates, updates, deletes or gets a <code>service_linked_role</code> resource or lists <code>service_linked_roles</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>service_linked_roles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::IAM::ServiceLinkedRole</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iam.service_linked_roles" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "role_name",
    "type": "string",
    "description": "The name of the role."
  },
  {
    "name": "custom_suffix",
    "type": "string",
    "description": "A string that you provide, which is combined with the service-provided prefix to form the complete role name."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the role."
  },
  {
    "name": "aws_service_name",
    "type": "string",
    "description": "The service principal for the AWS service to which this role is attached."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servicelinkedrole.html"><code>AWS::IAM::ServiceLinkedRole</code></a>.

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
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>service_linked_role</code>.
```sql
SELECT
region,
role_name,
custom_suffix,
description,
aws_service_name
FROM awscc.iam.service_linked_roles
WHERE Identifier = '<RoleName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>service_linked_role</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iam.service_linked_roles (
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
INSERT INTO awscc.iam.service_linked_roles (
 CustomSuffix,
 Description,
 AWSServiceName,
 region
)
SELECT 
 '{{ CustomSuffix }}',
 '{{ Description }}',
 '{{ AWSServiceName }}',
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
  - name: service_linked_role
    props:
      - name: CustomSuffix
        value: '{{ CustomSuffix }}'
      - name: Description
        value: '{{ Description }}'
      - name: AWSServiceName
        value: '{{ AWSServiceName }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.iam.service_linked_roles
SET PatchDocument = string('{{ {
    "Description": description
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<RoleName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iam.service_linked_roles
WHERE Identifier = '<RoleName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>service_linked_roles</code> resource, the following permissions are required:

### Create
```json
iam:CreateServiceLinkedRole,
iam:GetRole
```

### Read
```json
iam:GetRole
```

### Update
```json
iam:UpdateRole,
iam:GetRole
```

### Delete
```json
iam:DeleteServiceLinkedRole,
iam:GetServiceLinkedRoleDeletionStatus,
iam:GetRole
```
