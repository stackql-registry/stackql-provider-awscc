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
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="content_type" /></td><td><code>string</code></td><td>The media type of the quick response content.<br />- Use application/x.quickresponse;format=plain for quick response written in plain text.<br />- Use application/x.quickresponse;format=markdown for quick response written in richtext.</td></tr>
<tr><td><CopyableCode code="knowledge_base_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the knowledge base.</td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>The name of the quick response.</td></tr>
<tr><td><CopyableCode code="quick_response_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the quick response.</td></tr>
<tr><td><CopyableCode code="quick_response_id" /></td><td><code>string</code></td><td>The identifier of the quick response.</td></tr>
<tr><td><CopyableCode code="channels" /></td><td><code>array</code></td><td>The Amazon Connect contact channels this quick response applies to.</td></tr>
<tr><td><CopyableCode code="content" /></td><td><code>object</code></td><td>The container of quick response content.</td></tr>
<tr><td><CopyableCode code="contents" /></td><td><code>object</code></td><td>The content of the quick response stored in different media types.</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>The description of the quick response.</td></tr>
<tr><td><CopyableCode code="grouping_configuration" /></td><td><code>object</code></td><td>The configuration information of the user groups that the quick response is accessible to.</td></tr>
<tr><td><CopyableCode code="is_active" /></td><td><code>boolean</code></td><td>Whether the quick response is active.</td></tr>
<tr><td><CopyableCode code="language" /></td><td><code>string</code></td><td>The language code value for the language in which the quick response is written. The supported language codes include de_DE, en_US, es_ES, fr_FR, id_ID, it_IT, ja_JP, ko_KR, pt_BR, zh_CN, zh_TW</td></tr>
<tr><td><CopyableCode code="shortcut_key" /></td><td><code>string</code></td><td>The shortcut key of the quick response. The value should be unique across the knowledge base.</td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td>The status of the quick response data.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-quickresponse.html"><code>AWS::Wisdom::QuickResponse</code></a>.

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
    <td><CopyableCode code="KnowledgeBaseArn, Content, Name, region" /></td>
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
Gets all <code>quick_responses</code> in a region.
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
WHERE region = 'us-east-1';
```
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
WHERE region = 'us-east-1' AND data__Identifier = '<QuickResponseArn>';
```

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
'{{ KnowledgeBaseArn }}',
 '{{ Name }}',
 '{{ Content }}',
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
 '{{ ContentType }}',
 '{{ KnowledgeBaseArn }}',
 '{{ Name }}',
 '{{ Channels }}',
 '{{ Content }}',
 '{{ Description }}',
 '{{ GroupingConfiguration }}',
 '{{ IsActive }}',
 '{{ Language }}',
 '{{ ShortcutKey }}',
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
  - name: quick_response
    props:
      - name: ContentType
        value: '{{ ContentType }}'
      - name: KnowledgeBaseArn
        value: '{{ KnowledgeBaseArn }}'
      - name: Name
        value: '{{ Name }}'
      - name: Channels
        value:
          - '{{ Channels[0] }}'
      - name: Content
        value:
          Content: '{{ Content }}'
      - name: Description
        value: '{{ Description }}'
      - name: GroupingConfiguration
        value:
          Criteria: '{{ Criteria }}'
          Values:
            - '{{ Values[0] }}'
      - name: IsActive
        value: '{{ IsActive }}'
      - name: Language
        value: '{{ Language }}'
      - name: ShortcutKey
        value: '{{ ShortcutKey }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.wisdom.quick_responses
WHERE data__Identifier = '<QuickResponseArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>quick_responses</code> resource, the following permissions are required:

### Create
```json
wisdom:CreateQuickResponse,
wisdom:GetQuickResponse,
wisdom:TagResource,
connect:SearchRoutingProfiles,
connect:DescribeRoutingProfile
```

### Update
```json
wisdom:UpdateQuickResponse,
wisdom:GetQuickResponse,
wisdom:TagResource,
wisdom:UntagResource,
connect:SearchRoutingProfiles,
connect:DescribeRoutingProfile
```

### Delete
```json
wisdom:DeleteQuickResponse,
wisdom:UntagResource
```

### List
```json
wisdom:ListQuickResponses
```

### Read
```json
wisdom:GetQuickResponse
```
