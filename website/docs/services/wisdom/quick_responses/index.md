---
title: quick_responses
hide_title: false
hide_table_of_contents: false
keywords:
  - quick_responses
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

Creates, updates, deletes or gets a <code>quick_response</code> resource or lists <code>quick_responses</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>quick_responses</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Wisdom::QuickResponse Resource Type.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.wisdom.quick_responses" /></td></tr>
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
    "name": "content_type",
    "type": "string",
    "description": "The media type of the quick response content.<br />- Use application/x.quickresponse;format=plain for quick response written in plain text.<br />- Use application/x.quickresponse;format=markdown for quick response written in richtext."
  },
  {
    "name": "knowledge_base_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the knowledge base."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the quick response."
  },
  {
    "name": "quick_response_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the quick response."
  },
  {
    "name": "quick_response_id",
    "type": "string",
    "description": "The identifier of the quick response."
  },
  {
    "name": "channels",
    "type": "array",
    "description": "The Amazon Connect contact channels this quick response applies to."
  },
  {
    "name": "content",
    "type": "object",
    "description": "The container of quick response content.",
    "children": [
      {
        "name": "content",
        "type": "string",
        "description": "The content of the quick response."
      }
    ]
  },
  {
    "name": "contents",
    "type": "object",
    "description": "The content of the quick response stored in different media types."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the quick response."
  },
  {
    "name": "grouping_configuration",
    "type": "object",
    "description": "The configuration information of the user groups that the quick response is accessible to.",
    "children": [
      {
        "name": "criteria",
        "type": "string",
        "description": "The criteria used for grouping Amazon Q in Connect users."
      },
      {
        "name": "values",
        "type": "array",
        "description": "The list of values that define different groups of Amazon Q in Connect users."
      }
    ]
  },
  {
    "name": "is_active",
    "type": "boolean",
    "description": "Whether the quick response is active."
  },
  {
    "name": "language",
    "type": "string",
    "description": "The language code value for the language in which the quick response is written. The supported language codes include de&#95;DE, en&#95;US, es&#95;ES, fr&#95;FR, id&#95;ID, it&#95;IT, ja&#95;JP, ko&#95;KR, pt&#95;BR, zh&#95;CN, zh&#95;TW"
  },
  {
    "name": "shortcut_key",
    "type": "string",
    "description": "The shortcut key of the quick response. The value should be unique across the knowledge base."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the quick response data."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -"
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -"
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
    "name": "quick_response_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the quick response."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-quickresponse.html"><code>AWS::Wisdom::QuickResponse</code></a>.

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
    <td><code>quick_responses</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="KnowledgeBaseArn, Content, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>quick_responses</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>quick_responses</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>quick_responses_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>quick_responses</code></td>
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

Gets all properties from an individual <code>quick_response</code>.
```sql
SELECT
region,
content_type,
knowledge_base_arn,
name,
quick_response_arn,
quick_response_id,
channels,
content,
contents,
description,
grouping_configuration,
is_active,
language,
shortcut_key,
status,
tags
FROM awscc.wisdom.quick_responses
WHERE region = 'us-east-1' AND Identifier = '{{ quick_response_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>quick_responses</code> in a region.
```sql
SELECT
region,
quick_response_arn
FROM awscc.wisdom.quick_responses_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>quick_response</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.wisdom.quick_responses (
 KnowledgeBaseArn,
 Name,
 Content,
 region
)
SELECT
'{{ knowledge_base_arn }}',
 '{{ name }}',
 '{{ content }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.wisdom.quick_responses (
 ContentType,
 KnowledgeBaseArn,
 Name,
 Channels,
 Content,
 Description,
 GroupingConfiguration,
 IsActive,
 Language,
 ShortcutKey,
 Tags,
 region
)
SELECT
 '{{ content_type }}',
 '{{ knowledge_base_arn }}',
 '{{ name }}',
 '{{ channels }}',
 '{{ content }}',
 '{{ description }}',
 '{{ grouping_configuration }}',
 '{{ is_active }}',
 '{{ language }}',
 '{{ shortcut_key }}',
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
  - name: quick_response
    props:
      - name: content_type
        value: '{{ content_type }}'
      - name: knowledge_base_arn
        value: '{{ knowledge_base_arn }}'
      - name: name
        value: '{{ name }}'
      - name: channels
        value:
          - '{{ channels[0] }}'
      - name: content
        value:
          content: '{{ content }}'
      - name: description
        value: '{{ description }}'
      - name: grouping_configuration
        value:
          criteria: '{{ criteria }}'
          values:
            - '{{ values[0] }}'
      - name: is_active
        value: '{{ is_active }}'
      - name: language
        value: '{{ language }}'
      - name: shortcut_key
        value: '{{ shortcut_key }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>quick_response</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.wisdom.quick_responses
SET PatchDocument = string('{{ {
    "ContentType": content_type,
    "Name": name,
    "Channels": channels,
    "Content": content,
    "Description": description,
    "GroupingConfiguration": grouping_configuration,
    "IsActive": is_active,
    "Language": language,
    "ShortcutKey": shortcut_key,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ quick_response_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.wisdom.quick_responses
WHERE Identifier = '{{ quick_response_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>quick_responses</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Read', value: 'read', },
    ]
}>
<TabItem value="create">

```json
wisdom:CreateQuickResponse,
wisdom:GetQuickResponse,
wisdom:TagResource,
connect:SearchRoutingProfiles,
connect:DescribeRoutingProfile
```

</TabItem>
<TabItem value="update">

```json
wisdom:UpdateQuickResponse,
wisdom:GetQuickResponse,
wisdom:TagResource,
wisdom:UntagResource,
connect:SearchRoutingProfiles,
connect:DescribeRoutingProfile
```

</TabItem>
<TabItem value="delete">

```json
wisdom:DeleteQuickResponse,
wisdom:UntagResource
```

</TabItem>
<TabItem value="list">

```json
wisdom:ListQuickResponses
```

</TabItem>
<TabItem value="read">

```json
wisdom:GetQuickResponse
```

</TabItem>
</Tabs>