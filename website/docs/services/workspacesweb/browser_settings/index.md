---
title: browser_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - browser_settings
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

Creates, updates, deletes or gets a <code>browser_setting</code> resource or lists <code>browser_settings</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>browser_settings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::WorkSpacesWeb::BrowserSettings Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.workspacesweb.browser_settings" /></td></tr>
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
    "name": "browser_policy",
    "type": "string",
    "description": ""
  },
  {
    "name": "browser_settings_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "customer_managed_key",
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
    "name": "browser_settings_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-browsersetting.html"><code>AWS::WorkSpacesWeb::BrowserSettings</code></a>.

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
    <td><code>browser_settings</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>browser_settings</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>browser_settings</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>browser_settings_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>browser_settings</code></td>
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

Gets all properties from an individual <code>browser_setting</code>.
```sql
SELECT
region,
additional_encryption_context,
associated_portal_arns,
browser_policy,
browser_settings_arn,
customer_managed_key,
tags
FROM awscc.workspacesweb.browser_settings
WHERE region = 'us-east-1' AND Identifier = '{{ browser_settings_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>browser_settings</code> in a region.
```sql
SELECT
region,
browser_settings_arn
FROM awscc.workspacesweb.browser_settings_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>browser_setting</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.workspacesweb.browser_settings (
 AdditionalEncryptionContext,
 BrowserPolicy,
 CustomerManagedKey,
 Tags,
 region
)
SELECT
'{{ additional_encryption_context }}',
 '{{ browser_policy }}',
 '{{ customer_managed_key }}',
 '{{ tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.workspacesweb.browser_settings (
 AdditionalEncryptionContext,
 BrowserPolicy,
 CustomerManagedKey,
 Tags,
 region
)
SELECT
 '{{ additional_encryption_context }}',
 '{{ browser_policy }}',
 '{{ customer_managed_key }}',
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
  - name: browser_setting
    props:
      - name: additional_encryption_context
        value: {}
      - name: browser_policy
        value: '{{ browser_policy }}'
      - name: customer_managed_key
        value: '{{ customer_managed_key }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>browser_setting</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.workspacesweb.browser_settings
SET PatchDocument = string('{{ {
    "BrowserPolicy": browser_policy,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ browser_settings_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.workspacesweb.browser_settings
WHERE Identifier = '{{ browser_settings_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>browser_settings</code> resource, the following permissions are required:

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
workspaces-web:CreateBrowserSettings,
workspaces-web:GetBrowserSettings,
workspaces-web:ListTagsForResource,
workspaces-web:TagResource,
kms:DescribeKey,
kms:GenerateDataKey,
kms:Decrypt,
kms:GenerateDataKeyWithoutPlaintext,
kms:ReEncryptTo,
kms:ReEncryptFrom
```

</TabItem>
<TabItem value="read">

```json
workspaces-web:GetBrowserSettings,
workspaces-web:ListBrowserSettings,
workspaces-web:ListTagsForResource,
kms:CreateGrant,
kms:DescribeKey,
kms:GenerateDataKey,
kms:Decrypt
```

</TabItem>
<TabItem value="update">

```json
workspaces-web:UpdateBrowserSettings,
workspaces-web:TagResource,
workspaces-web:UntagResource,
workspaces-web:GetBrowserSettings,
workspaces-web:ListBrowserSettings,
workspaces-web:ListTagsForResource,
kms:CreateGrant,
kms:DescribeKey,
kms:GenerateDataKey,
kms:Decrypt
```

</TabItem>
<TabItem value="delete">

```json
workspaces-web:GetBrowserSettings,
workspaces-web:DeleteBrowserSettings,
kms:CreateGrant,
kms:DescribeKey,
kms:GenerateDataKey,
kms:Decrypt
```

</TabItem>
<TabItem value="list">

```json
workspaces-web:ListBrowserSettings,
kms:Decrypt,
kms:DescribeKey
```

</TabItem>
</Tabs>