---
title: ai_agents
hide_title: false
hide_table_of_contents: false
keywords:
  - ai_agents
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

Creates, updates, deletes or gets an <code>ai_agent</code> resource or lists <code>ai_agents</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>ai_agents</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Wisdom::AIAgent Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.wisdom.ai_agents" /></td></tr>
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
    "name": "a_iagent_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "a_iagent_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "assistant_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "assistant_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "configuration",
    "type": "object",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "object",
    "description": ""
  },
  {
    "name": "type",
    "type": "string",
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
    "name": "a_iagent_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "assistant_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html"><code>AWS::Wisdom::AIAgent</code></a>.

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
    <td><code>ai_agents</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AssistantId, Configuration, Type, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>ai_agents</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>ai_agents</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>ai_agents_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>ai_agents</code></td>
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

Gets all properties from an individual <code>ai_agent</code>.
```sql
SELECT
region,
a_iagent_id,
a_iagent_arn,
assistant_id,
assistant_arn,
configuration,
description,
name,
tags,
type,
modified_time_seconds
FROM awscc.wisdom.ai_agents
WHERE region = 'us-east-1' AND Identifier = '<AIAgentId>|<AssistantId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>ai_agents</code> in a region.
```sql
SELECT
region,
a_iagent_id,
assistant_id
FROM awscc.wisdom.ai_agents_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>ai_agent</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.wisdom.ai_agents (
 AssistantId,
 Configuration,
 Type,
 region
)
SELECT 
'{{ AssistantId }}',
 '{{ Configuration }}',
 '{{ Type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.wisdom.ai_agents (
 AssistantId,
 Configuration,
 Description,
 Name,
 Tags,
 Type,
 region
)
SELECT 
 '{{ AssistantId }}',
 '{{ Configuration }}',
 '{{ Description }}',
 '{{ Name }}',
 '{{ Tags }}',
 '{{ Type }}',
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
  - name: ai_agent
    props:
      - name: AssistantId
        value: '{{ AssistantId }}'
      - name: Configuration
        value: null
      - name: Description
        value: '{{ Description }}'
      - name: Name
        value: '{{ Name }}'
      - name: Tags
        value: {}
      - name: Type
        value: '{{ Type }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.wisdom.ai_agents
SET PatchDocument = string('{{ {
    "Configuration": configuration,
    "Description": description
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<AIAgentId>|<AssistantId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.wisdom.ai_agents
WHERE Identifier = '<AIAgentId|AssistantId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>ai_agents</code> resource, the following permissions are required:

### Create
```json
wisdom:CreateAIAgent,
wisdom:TagResource
```

### Read
```json
wisdom:GetAIAgent
```

### Update
```json
wisdom:UpdateAIAgent
```

### Delete
```json
wisdom:DeleteAIAgent
```

### List
```json
wisdom:ListAIAgents
```
