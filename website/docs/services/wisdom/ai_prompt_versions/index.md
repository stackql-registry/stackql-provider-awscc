---
title: ai_prompt_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - ai_prompt_versions
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

Creates, updates, deletes or gets an <code>ai_prompt_version</code> resource or lists <code>ai_prompt_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>ai_prompt_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Wisdom::AIPromptVersion Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.wisdom.ai_prompt_versions" /></td></tr>
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
    "name": "a_iprompt_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "assistant_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "a_iprompt_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "assistant_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "a_iprompt_version_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "version_number",
    "type": "number",
    "description": ""
  },
  {
    "name": "modified_time_seconds",
    "type": "number",
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
    "name": "a_iprompt_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "assistant_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "version_number",
    "type": "number",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aipromptversion.html"><code>AWS::Wisdom::AIPromptVersion</code></a>.

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
    <td><code>ai_prompt_versions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AssistantId, AIPromptId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>ai_prompt_versions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>ai_prompt_versions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>ai_prompt_versions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>ai_prompt_versions</code></td>
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

Gets all properties from an individual <code>ai_prompt_version</code>.
```sql
SELECT
region,
a_iprompt_arn,
assistant_arn,
a_iprompt_id,
assistant_id,
a_iprompt_version_id,
version_number,
modified_time_seconds
FROM awscc.wisdom.ai_prompt_versions
WHERE region = 'us-east-1' AND Identifier = '<AssistantId>|<AIPromptId>|<VersionNumber>';
```
</TabItem>
<TabItem value="list">

Lists all <code>ai_prompt_versions</code> in a region.
```sql
SELECT
region,
assistant_id,
a_iprompt_id,
version_number
FROM awscc.wisdom.ai_prompt_versions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>ai_prompt_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.wisdom.ai_prompt_versions (
 AIPromptId,
 AssistantId,
 region
)
SELECT 
'{{ AIPromptId }}',
 '{{ AssistantId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.wisdom.ai_prompt_versions (
 AIPromptId,
 AssistantId,
 ModifiedTimeSeconds,
 region
)
SELECT 
 '{{ AIPromptId }}',
 '{{ AssistantId }}',
 '{{ ModifiedTimeSeconds }}',
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
  - name: ai_prompt_version
    props:
      - name: AIPromptId
        value: '{{ AIPromptId }}'
      - name: AssistantId
        value: '{{ AssistantId }}'
      - name: ModifiedTimeSeconds
        value: null

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.wisdom.ai_prompt_versions
WHERE Identifier = '<AssistantId|AIPromptId|VersionNumber>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>ai_prompt_versions</code> resource, the following permissions are required:

### Create
```json
wisdom:CreateAIPromptVersion
```

### Read
```json
wisdom:GetAIPrompt,
wisdom:GetAIPromptVersion
```

### Update
```json
wisdom:GetAIPrompt,
wisdom:GetAIPromptVersion
```

### Delete
```json
wisdom:DeleteAIPromptVersion
```

### List
```json
wisdom:ListAIPromptVersions
```
