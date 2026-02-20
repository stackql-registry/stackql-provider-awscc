---
title: user_access_logging_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - user_access_logging_settings
  - workspacesweb
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

Creates, updates, deletes or gets an <code>user_access_logging_setting</code> resource or lists <code>user_access_logging_settings</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>user_access_logging_settings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::WorkSpacesWeb::UserAccessLoggingSettings Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.workspacesweb.user_access_logging_settings" /></td></tr>
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
    "name": "associated_portal_arns",
    "type": "array",
    "description": ""
  },
  {
    "name": "kinesis_stream_arn",
    "type": "string",
    "description": "Kinesis stream ARN to which log events are published."
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
    "name": "user_access_logging_settings_arn",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "user_access_logging_settings_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-useraccessloggingsetting.html"><code>AWS::WorkSpacesWeb::UserAccessLoggingSettings</code></a>.

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
    <td><code>user_access_logging_settings</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="KinesisStreamArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>user_access_logging_settings</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>user_access_logging_settings</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>user_access_logging_settings_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>user_access_logging_settings</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>user_access_logging_setting</code>.
```sql
SELECT
region,
associated_portal_arns,
kinesis_stream_arn,
tags,
user_access_logging_settings_arn
FROM awscc.workspacesweb.user_access_logging_settings
WHERE region = 'us-east-1' AND data__Identifier = '<UserAccessLoggingSettingsArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>user_access_logging_settings</code> in a region.
```sql
SELECT
region,
user_access_logging_settings_arn
FROM awscc.workspacesweb.user_access_logging_settings_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>user_access_logging_setting</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.workspacesweb.user_access_logging_settings (
 KinesisStreamArn,
 region
)
SELECT 
'{{ KinesisStreamArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.workspacesweb.user_access_logging_settings (
 KinesisStreamArn,
 Tags,
 region
)
SELECT 
 '{{ KinesisStreamArn }}',
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
  - name: user_access_logging_setting
    props:
      - name: KinesisStreamArn
        value: '{{ KinesisStreamArn }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.workspacesweb.user_access_logging_settings
SET data__PatchDocument = string('{{ {
    "KinesisStreamArn": kinesis_stream_arn,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<UserAccessLoggingSettingsArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.workspacesweb.user_access_logging_settings
WHERE data__Identifier = '<UserAccessLoggingSettingsArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>user_access_logging_settings</code> resource, the following permissions are required:

### Create
```json
workspaces-web:CreateUserAccessLoggingSettings,
workspaces-web:GetUserAccessLoggingSettings,
workspaces-web:ListTagsForResource,
workspaces-web:TagResource
```

### Read
```json
workspaces-web:GetUserAccessLoggingSettings,
workspaces-web:ListTagsForResource
```

### Update
```json
workspaces-web:UpdateUserAccessLoggingSettings,
workspaces-web:TagResource,
workspaces-web:UntagResource,
workspaces-web:GetUserAccessLoggingSettings,
workspaces-web:ListTagsForResource,
kinesis:PutRecord,
kinesis:PutRecords
```

### Delete
```json
workspaces-web:GetUserAccessLoggingSettings,
workspaces-web:DeleteUserAccessLoggingSettings
```

### List
```json
workspaces-web:ListUserAccessLoggingSettings
```
