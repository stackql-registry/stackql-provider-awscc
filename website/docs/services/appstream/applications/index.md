---
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - appstream
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
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::AppStream::Application</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.appstream.applications" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "display_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "launch_path",
    "type": "string",
    "description": ""
  },
  {
    "name": "launch_parameters",
    "type": "string",
    "description": ""
  },
  {
    "name": "working_directory",
    "type": "string",
    "description": ""
  },
  {
    "name": "instance_families",
    "type": "array",
    "description": ""
  },
  {
    "name": "icon_s3_location",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "s3_bucket",
        "type": "string",
        "description": ""
      },
      {
        "name": "s3_key",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "platforms",
    "type": "array",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "attributes_to_delete",
    "type": "array",
    "description": ""
  },
  {
    "name": "created_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-application.html"><code>AWS::AppStream::Application</code></a>.

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
    <td><CopyableCode code="Name, IconS3Location, LaunchPath, Platforms, InstanceFamilies, AppBlockArn, region" /></td>
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

Gets all properties from an individual <code>application</code>.
```sql
SELECT
region,
name,
display_name,
description,
launch_path,
launch_parameters,
working_directory,
instance_families,
icon_s3_location,
arn,
app_block_arn,
platforms,
tags,
attributes_to_delete,
created_time
FROM awscc.appstream.applications
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```

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
INSERT INTO awscc.appstream.applications (
 Name,
 LaunchPath,
 InstanceFamilies,
 IconS3Location,
 AppBlockArn,
 Platforms,
 region
)
SELECT
'{{ name }}',
 '{{ launch_path }}',
 '{{ instance_families }}',
 '{{ icon_s3_location }}',
 '{{ app_block_arn }}',
 '{{ platforms }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.appstream.applications (
 Name,
 DisplayName,
 Description,
 LaunchPath,
 LaunchParameters,
 WorkingDirectory,
 InstanceFamilies,
 IconS3Location,
 AppBlockArn,
 Platforms,
 Tags,
 AttributesToDelete,
 region
)
SELECT
 '{{ name }}',
 '{{ display_name }}',
 '{{ description }}',
 '{{ launch_path }}',
 '{{ launch_parameters }}',
 '{{ working_directory }}',
 '{{ instance_families }}',
 '{{ icon_s3_location }}',
 '{{ app_block_arn }}',
 '{{ platforms }}',
 '{{ tags }}',
 '{{ attributes_to_delete }}',
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
      - name: name
        value: '{{ name }}'
      - name: display_name
        value: '{{ display_name }}'
      - name: description
        value: '{{ description }}'
      - name: launch_path
        value: '{{ launch_path }}'
      - name: launch_parameters
        value: '{{ launch_parameters }}'
      - name: working_directory
        value: '{{ working_directory }}'
      - name: instance_families
        value:
          - '{{ instance_families[0] }}'
      - name: icon_s3_location
        value:
          s3_bucket: '{{ s3_bucket }}'
          s3_key: '{{ s3_key }}'
      - name: app_block_arn
        value: '{{ app_block_arn }}'
      - name: platforms
        value:
          - '{{ platforms[0] }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
      - name: attributes_to_delete
        value:
          - '{{ attributes_to_delete[0] }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>application</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.appstream.applications
SET PatchDocument = string('{{ {
    "DisplayName": display_name,
    "Description": description,
    "LaunchPath": launch_path,
    "LaunchParameters": launch_parameters,
    "WorkingDirectory": working_directory,
    "IconS3Location": icon_s3_location,
    "AppBlockArn": app_block_arn,
    "Tags": tags,
    "AttributesToDelete": attributes_to_delete
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.appstream.applications
WHERE Identifier = '{{ arn }}'
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
    ]
}>
<TabItem value="create">

```json
s3:GetObject,
appstream:CreateApplication,
appstream:TagResource
```

</TabItem>
<TabItem value="read">

```json
appstream:DescribeApplications,
appstream:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
appstream:UpdateApplication,
appstream:DescribeApplications,
appstream:TagResource,
appstream:UntagResource,
s3:GetObject
```

</TabItem>
<TabItem value="delete">

```json
appstream:DeleteApplication,
appstream:DescribeApplications
```

</TabItem>
</Tabs>