---
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - m2
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

Creates, updates, deletes or gets an <code>application</code> resource or lists <code>applications</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>applications</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Represents an application that runs on an AWS Mainframe Modernization Environment</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.m2.applications" /></td></tr>
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
    "name": "application_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "application_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "definition",
    "type": "object",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "engine_type",
    "type": "string",
    "description": "The target platform for the environment."
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "The ID or the Amazon Resource Name (ARN) of the customer managed KMS Key used for encrypting application-related resources."
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "object",
    "description": "Defines tags associated to an environment."
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
    "name": "application_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-application.html"><code>AWS::M2::Application</code></a>.

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
    <td><code>applications</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="EngineType, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>applications</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>applications</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>applications_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>applications</code></td>
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

Gets all properties from an individual <code>application</code>.
```sql
SELECT
region,
application_arn,
application_id,
definition,
description,
engine_type,
kms_key_id,
name,
role_arn,
tags
FROM awscc.m2.applications
WHERE region = 'us-east-1' AND Identifier = '<ApplicationArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>applications</code> in a region.
```sql
SELECT
region,
application_arn
FROM awscc.m2.applications_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>application</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.m2.applications (
 EngineType,
 Name,
 region
)
SELECT 
'{{ EngineType }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.m2.applications (
 Definition,
 Description,
 EngineType,
 KmsKeyId,
 Name,
 RoleArn,
 Tags,
 region
)
SELECT 
 '{{ Definition }}',
 '{{ Description }}',
 '{{ EngineType }}',
 '{{ KmsKeyId }}',
 '{{ Name }}',
 '{{ RoleArn }}',
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
  - name: application
    props:
      - name: Definition
        value: null
      - name: Description
        value: '{{ Description }}'
      - name: EngineType
        value: '{{ EngineType }}'
      - name: KmsKeyId
        value: '{{ KmsKeyId }}'
      - name: Name
        value: '{{ Name }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>application</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.m2.applications
SET PatchDocument = string('{{ {
    "Definition": definition,
    "Description": description,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ApplicationArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.m2.applications
WHERE Identifier = '<ApplicationArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>applications</code> resource, the following permissions are required:

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
m2:CreateApplication,
m2:GetApplication,
m2:ListTagsForResource,
m2:TagResource,
s3:GetObject,
s3:ListBucket,
kms:DescribeKey,
kms:CreateGrant,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
m2:GetApplication,
m2:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
m2:UpdateApplication,
m2:GetApplication,
m2:ListTagsForResource,
m2:TagResource,
m2:UntagResource,
s3:GetObject,
s3:ListBucket
```

</TabItem>
<TabItem value="delete">

```json
elasticloadbalancing:DeleteListener,
elasticloadbalancing:DeleteTargetGroup,
logs:DeleteLogDelivery,
m2:GetApplication,
m2:DeleteApplication
```

</TabItem>
<TabItem value="list">

```json
m2:ListApplications
```

</TabItem>
</Tabs>