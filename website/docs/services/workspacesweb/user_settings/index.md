---
title: user_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - user_settings
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

Creates, updates, deletes or gets an <code>user_setting</code> resource or lists <code>user_settings</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>user_settings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::WorkSpacesWeb::UserSettings Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.workspacesweb.user_settings" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "additional_encryption_context",
    "type": "object",
    "description": ""
  },
  {
    "name": "associated_portal_arns",
    "type": "array",
    "description": ""
  },
  {
    "name": "cookie_synchronization_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "allowlist",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "domain",
            "type": "string",
            "description": ""
          },
          {
            "name": "name",
            "type": "string",
            "description": ""
          },
          {
            "name": "path",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "blocklist",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "copy_allowed",
    "type": "string",
    "description": ""
  },
  {
    "name": "customer_managed_key",
    "type": "string",
    "description": ""
  },
  {
    "name": "disconnect_timeout_in_minutes",
    "type": "number",
    "description": ""
  },
  {
    "name": "idle_disconnect_timeout_in_minutes",
    "type": "number",
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
    "name": "toolbar_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "toolbar_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "visual_mode",
        "type": "string",
        "description": ""
      },
      {
        "name": "hidden_toolbar_items",
        "type": "array",
        "description": ""
      },
      {
        "name": "max_display_resolution",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "user_settings_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-usersetting.html"><code>AWS::WorkSpacesWeb::UserSettings</code></a>.

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
    <td><CopyableCode code="CopyAllowed, DownloadAllowed, PasteAllowed, PrintAllowed, UploadAllowed, region" /></td>
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

Gets all properties from an individual <code>user_setting</code>.
```sql
SELECT
region,
additional_encryption_context,
associated_portal_arns,
cookie_synchronization_configuration,
copy_allowed,
customer_managed_key,
disconnect_timeout_in_minutes,
download_allowed,
idle_disconnect_timeout_in_minutes,
paste_allowed,
print_allowed,
tags,
toolbar_configuration,
upload_allowed,
user_settings_arn,
deep_link_allowed
FROM awscc.workspacesweb.user_settings
WHERE region = 'us-east-1' AND data__Identifier = '<UserSettingsArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>user_setting</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.workspacesweb.user_settings (
 CopyAllowed,
 DownloadAllowed,
 PasteAllowed,
 PrintAllowed,
 UploadAllowed,
 region
)
SELECT 
'{{ CopyAllowed }}',
 '{{ DownloadAllowed }}',
 '{{ PasteAllowed }}',
 '{{ PrintAllowed }}',
 '{{ UploadAllowed }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.workspacesweb.user_settings (
 AdditionalEncryptionContext,
 CookieSynchronizationConfiguration,
 CopyAllowed,
 CustomerManagedKey,
 DisconnectTimeoutInMinutes,
 DownloadAllowed,
 IdleDisconnectTimeoutInMinutes,
 PasteAllowed,
 PrintAllowed,
 Tags,
 ToolbarConfiguration,
 UploadAllowed,
 DeepLinkAllowed,
 region
)
SELECT 
 '{{ AdditionalEncryptionContext }}',
 '{{ CookieSynchronizationConfiguration }}',
 '{{ CopyAllowed }}',
 '{{ CustomerManagedKey }}',
 '{{ DisconnectTimeoutInMinutes }}',
 '{{ DownloadAllowed }}',
 '{{ IdleDisconnectTimeoutInMinutes }}',
 '{{ PasteAllowed }}',
 '{{ PrintAllowed }}',
 '{{ Tags }}',
 '{{ ToolbarConfiguration }}',
 '{{ UploadAllowed }}',
 '{{ DeepLinkAllowed }}',
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
  - name: user_setting
    props:
      - name: AdditionalEncryptionContext
        value: {}
      - name: CookieSynchronizationConfiguration
        value:
          Allowlist:
            - Domain: '{{ Domain }}'
              Name: '{{ Name }}'
              Path: '{{ Path }}'
          Blocklist:
            - null
      - name: CopyAllowed
        value: '{{ CopyAllowed }}'
      - name: CustomerManagedKey
        value: '{{ CustomerManagedKey }}'
      - name: DisconnectTimeoutInMinutes
        value: null
      - name: DownloadAllowed
        value: null
      - name: IdleDisconnectTimeoutInMinutes
        value: null
      - name: PasteAllowed
        value: null
      - name: PrintAllowed
        value: null
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: ToolbarConfiguration
        value:
          ToolbarType: '{{ ToolbarType }}'
          VisualMode: '{{ VisualMode }}'
          HiddenToolbarItems:
            - '{{ HiddenToolbarItems[0] }}'
          MaxDisplayResolution: '{{ MaxDisplayResolution }}'
      - name: UploadAllowed
        value: null
      - name: DeepLinkAllowed
        value: null

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.workspacesweb.user_settings
WHERE data__Identifier = '<UserSettingsArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>user_settings</code> resource, the following permissions are required:

### Create
```json
workspaces-web:CreateUserSettings,
workspaces-web:GetUserSettings,
workspaces-web:ListTagsForResource,
workspaces-web:TagResource,
kms:DescribeKey,
kms:GenerateDataKey,
kms:Decrypt,
kms:GenerateDataKeyWithoutPlaintext,
kms:ReEncryptTo,
kms:ReEncryptFrom
```

### Read
```json
workspaces-web:GetUserSettings,
workspaces-web:ListTagsForResource,
kms:CreateGrant,
kms:DescribeKey,
kms:GenerateDataKey,
kms:Decrypt
```

### Update
```json
workspaces-web:UpdateUserSettings,
workspaces-web:TagResource,
workspaces-web:UntagResource,
workspaces-web:GetUserSettings,
workspaces-web:ListTagsForResource,
kms:CreateGrant,
kms:DescribeKey,
kms:GenerateDataKey,
kms:Decrypt
```

### Delete
```json
workspaces-web:GetUserSettings,
workspaces-web:DeleteUserSettings,
kms:CreateGrant,
kms:DescribeKey,
kms:GenerateDataKey,
kms:Decrypt
```

### List
```json
workspaces-web:ListUserSettings,
kms:CreateGrant,
kms:DescribeKey,
kms:GenerateDataKey,
kms:Decrypt
```
