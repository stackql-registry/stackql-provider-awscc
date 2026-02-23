---
title: message_template_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - message_template_versions
  - wisdom
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

Creates, updates, deletes or gets a <code>message_template_version</code> resource or lists <code>message_template_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>message_template_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A version for the specified customer-managed message template within the specified knowledge base.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.wisdom.message_template_versions" /></td></tr>
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
    "name": "message_template_arn",
    "type": "string",
    "description": "The unqualified Amazon Resource Name (ARN) of the message template."
  },
  {
    "name": "message_template_version_arn",
    "type": "string",
    "description": "The unqualified Amazon Resource Name (ARN) of the message template version."
  },
  {
    "name": "message_template_content_sha256",
    "type": "string",
    "description": "The content SHA256 of the message template."
  },
  {
    "name": "message_template_version_number",
    "type": "number",
    "description": "Current version number of the message template."
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
    "name": "message_template_version_arn",
    "type": "string",
    "description": "The unqualified Amazon Resource Name (ARN) of the message template version."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplateversion.html"><code>AWS::Wisdom::MessageTemplateVersion</code></a>.

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
    <td><code>message_template_versions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="MessageTemplateArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>message_template_versions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>message_template_versions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>message_template_versions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>message_template_versions</code></td>
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

Gets all properties from an individual <code>message_template_version</code>.
```sql
SELECT
region,
message_template_arn,
message_template_version_arn,
message_template_content_sha256,
message_template_version_number
FROM awscc.wisdom.message_template_versions
WHERE region = 'us-east-1' AND Identifier = '{{ message_template_version_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>message_template_versions</code> in a region.
```sql
SELECT
region,
message_template_version_arn
FROM awscc.wisdom.message_template_versions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>message_template_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.wisdom.message_template_versions (
 MessageTemplateArn,
 region
)
SELECT
'{{ message_template_arn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.wisdom.message_template_versions (
 MessageTemplateArn,
 MessageTemplateContentSha256,
 region
)
SELECT
 '{{ message_template_arn }}',
 '{{ message_template_content_sha256 }}',
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
  - name: message_template_version
    props:
      - name: message_template_arn
        value: '{{ message_template_arn }}'
      - name: message_template_content_sha256
        value: '{{ message_template_content_sha256 }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>message_template_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.wisdom.message_template_versions
SET PatchDocument = string('{{ {
    "MessageTemplateContentSha256": message_template_content_sha256
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ message_template_version_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.wisdom.message_template_versions
WHERE Identifier = '{{ message_template_version_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>message_template_versions</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
      { label: 'Read', value: 'read', },
    ]
}>
<TabItem value="create">

```json
wisdom:CreateMessageTemplateVersion,
wisdom:ListMessageTemplateVersions
```

</TabItem>
<TabItem value="delete">

```json
wisdom:DeleteMessageTemplate
```

</TabItem>
<TabItem value="update">

```json
wisdom:CreateMessageTemplateVersion
```

</TabItem>
<TabItem value="list">

```json
wisdom:ListMessageTemplateVersions
```

</TabItem>
<TabItem value="read">

```json
wisdom:GetMessageTemplate
```

</TabItem>
</Tabs>