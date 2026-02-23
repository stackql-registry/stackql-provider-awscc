---
title: bot_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - bot_versions
  - lex
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

Creates, updates, deletes or gets a <code>bot_version</code> resource or lists <code>bot_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>bot_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A version is a numbered snapshot of your work that you can publish for use in different parts of your workflow, such as development, beta deployment, and production.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lex.bot_versions" /></td></tr>
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
    "name": "bot_id",
    "type": "string",
    "description": "Unique ID of resource"
  },
  {
    "name": "bot_version",
    "type": "object",
    "description": "A version is a numbered snapshot of your work that you can publish for use in different parts of your workflow, such as development, beta deployment, and production.",
    "children": [
      {
        "name": "description",
        "type": "string",
        "description": "A description of the version. Use the description to help identify the version in lists."
      },
      {
        "name": "bot_version_locale_specification",
        "type": "array",
        "description": "Specifies the locales that Amazon Lex adds to this version. You can choose the Draft version or any other previously published version for each locale.",
        "children": [
          {
            "name": "locale_id",
            "type": "string",
            "description": "The identifier of the language and locale that the bot will be used in."
          },
          {
            "name": "bot_version_locale_details",
            "type": "object",
            "description": "The version of a bot used for a bot locale."
          }
        ]
      }
    ]
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description of the version. Use the description to help identify the version in lists."
  },
  {
    "name": "bot_version_locale_specification",
    "type": "array",
    "description": "Specifies the locales that Amazon Lex adds to this version. You can choose the Draft version or any other previously published version for each locale.",
    "children": [
      {
        "name": "locale_id",
        "type": "string",
        "description": "The identifier of the language and locale that the bot will be used in."
      },
      {
        "name": "bot_version_locale_details",
        "type": "object",
        "description": "The version of a bot used for a bot locale."
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
    "name": "bot_id",
    "type": "string",
    "description": "Unique ID of resource"
  },
  {
    "name": "bot_version",
    "type": "object",
    "description": "A version is a numbered snapshot of your work that you can publish for use in different parts of your workflow, such as development, beta deployment, and production.",
    "children": [
      {
        "name": "description",
        "type": "string",
        "description": "A description of the version. Use the description to help identify the version in lists."
      },
      {
        "name": "bot_version_locale_specification",
        "type": "array",
        "description": "Specifies the locales that Amazon Lex adds to this version. You can choose the Draft version or any other previously published version for each locale.",
        "children": [
          {
            "name": "locale_id",
            "type": "string",
            "description": "The identifier of the language and locale that the bot will be used in."
          },
          {
            "name": "bot_version_locale_details",
            "type": "object",
            "description": "The version of a bot used for a bot locale."
          }
        ]
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
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botversion.html"><code>AWS::Lex::BotVersion</code></a>.

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
    <td><code>bot_versions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="BotId, BotVersionLocaleSpecification, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>bot_versions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>bot_versions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>bot_versions</code></td>
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

Gets all properties from an individual <code>bot_version</code>.
```sql
SELECT
region,
bot_id,
bot_version,
description,
bot_version_locale_specification
FROM awscc.lex.bot_versions
WHERE region = 'us-east-1' AND Identifier = '{{ bot_id }}|{{ bot_version }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>bot_versions</code> in a region.
```sql
SELECT
region,
bot_id,
bot_version
FROM awscc.lex.bot_versions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>bot_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.lex.bot_versions (
 BotId,
 BotVersionLocaleSpecification,
 region
)
SELECT
'{{ bot_id }}',
 '{{ bot_version_locale_specification }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.lex.bot_versions (
 BotId,
 Description,
 BotVersionLocaleSpecification,
 region
)
SELECT
 '{{ bot_id }}',
 '{{ description }}',
 '{{ bot_version_locale_specification }}',
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
  - name: bot_version
    props:
      - name: bot_id
        value: '{{ bot_id }}'
      - name: description
        value: '{{ description }}'
      - name: bot_version_locale_specification
        value:
          - locale_id: '{{ locale_id }}'
            bot_version_locale_details:
              source_bot_version:
                bot_id: null
                description: null
                bot_version_locale_specification: null
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lex.bot_versions
WHERE Identifier = '{{ bot_id }}|{{ bot_version }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>bot_versions</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
lex:CreateBotVersion,
lex:DescribeBotVersion,
lex:DescribeBot,
lex:DescribeBotLocale,
lex:BuildBotLocale
```

</TabItem>
<TabItem value="read">

```json
lex:DescribeBotVersion
```

</TabItem>
<TabItem value="delete">

```json
lex:DeleteBotVersion,
lex:DescribeBotVersion
```

</TabItem>
<TabItem value="list">

```json
lex:ListBotVersions
```

</TabItem>
</Tabs>