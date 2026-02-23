---
title: queues
hide_title: false
hide_table_of_contents: false
keywords:
  - queues
  - deadline
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

Creates, updates, deletes or gets a <code>queue</code> resource or lists <code>queues</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>queues</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Deadline::Queue Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.deadline.queues" /></td></tr>
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
    "name": "allowed_storage_profile_ids",
    "type": "array",
    "description": ""
  },
  {
    "name": "default_budget_action",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "display_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "farm_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "job_attachment_settings",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "s3_bucket_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "root_prefix",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "job_run_as_user",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "posix",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "user",
            "type": "string",
            "description": ""
          },
          {
            "name": "group",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "windows",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "user",
            "type": "string",
            "description": ""
          },
          {
            "name": "password_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "run_as",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "queue_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "required_file_system_location_names",
    "type": "array",
    "description": ""
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html"><code>AWS::Deadline::Queue</code></a>.

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
    <td><code>queues</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DisplayName, FarmId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>queues</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>queues</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>queues_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>queues</code></td>
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

Gets all properties from an individual <code>queue</code>.
```sql
SELECT
region,
allowed_storage_profile_ids,
default_budget_action,
description,
display_name,
farm_id,
job_attachment_settings,
job_run_as_user,
queue_id,
required_file_system_location_names,
role_arn,
arn,
tags
FROM awscc.deadline.queues
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>queues</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.deadline.queues_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>queue</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.deadline.queues (
 DisplayName,
 FarmId,
 region
)
SELECT
'{{ display_name }}',
 '{{ farm_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.deadline.queues (
 AllowedStorageProfileIds,
 DefaultBudgetAction,
 Description,
 DisplayName,
 FarmId,
 JobAttachmentSettings,
 JobRunAsUser,
 RequiredFileSystemLocationNames,
 RoleArn,
 Tags,
 region
)
SELECT
 '{{ allowed_storage_profile_ids }}',
 '{{ default_budget_action }}',
 '{{ description }}',
 '{{ display_name }}',
 '{{ farm_id }}',
 '{{ job_attachment_settings }}',
 '{{ job_run_as_user }}',
 '{{ required_file_system_location_names }}',
 '{{ role_arn }}',
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
  - name: queue
    props:
      - name: allowed_storage_profile_ids
        value:
          - '{{ allowed_storage_profile_ids[0] }}'
      - name: default_budget_action
        value: '{{ default_budget_action }}'
      - name: description
        value: '{{ description }}'
      - name: display_name
        value: '{{ display_name }}'
      - name: farm_id
        value: '{{ farm_id }}'
      - name: job_attachment_settings
        value:
          s3_bucket_name: '{{ s3_bucket_name }}'
          root_prefix: '{{ root_prefix }}'
      - name: job_run_as_user
        value:
          posix:
            user: '{{ user }}'
            group: '{{ group }}'
          windows:
            user: '{{ user }}'
            password_arn: '{{ password_arn }}'
          run_as: '{{ run_as }}'
      - name: required_file_system_location_names
        value:
          - '{{ required_file_system_location_names[0] }}'
      - name: role_arn
        value: '{{ role_arn }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>queue</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.deadline.queues
SET PatchDocument = string('{{ {
    "AllowedStorageProfileIds": allowed_storage_profile_ids,
    "DefaultBudgetAction": default_budget_action,
    "Description": description,
    "DisplayName": display_name,
    "JobAttachmentSettings": job_attachment_settings,
    "JobRunAsUser": job_run_as_user,
    "RequiredFileSystemLocationNames": required_file_system_location_names,
    "RoleArn": role_arn,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.deadline.queues
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>queues</code> resource, the following permissions are required:

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
deadline:CreateQueue,
deadline:GetQueue,
iam:PassRole,
identitystore:ListGroupMembershipsForMember,
logs:CreateLogGroup,
s3:ListBucket,
deadline:TagResource,
deadline:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
deadline:GetQueue,
identitystore:ListGroupMembershipsForMember,
deadline:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
deadline:UpdateQueue,
deadline:GetQueue,
iam:PassRole,
identitystore:ListGroupMembershipsForMember,
logs:CreateLogGroup,
s3:ListBucket,
deadline:TagResource,
deadline:UntagResource,
deadline:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
deadline:DeleteQueue,
deadline:GetQueue,
identitystore:ListGroupMembershipsForMember
```

</TabItem>
<TabItem value="list">

```json
deadline:ListQueues,
identitystore:DescribeGroup,
identitystore:DescribeUser,
identitystore:ListGroupMembershipsForMember
```

</TabItem>
</Tabs>