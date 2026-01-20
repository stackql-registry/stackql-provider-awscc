---
title: agent_aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_aliases
  - bedrock
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

Creates, updates, deletes or gets an <code>agent_alias</code> resource or lists <code>agent_aliases</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>agent_aliases</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Bedrock::AgentAlias Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.bedrock.agent_aliases" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "agent_alias_arn",
    "type": "string",
    "description": "Arn representation of the Agent Alias."
  },
  {
    "name": "agent_alias_history_events",
    "type": "array",
    "description": "The list of history events for an alias for an Agent.",
    "children": [
      {
        "name": "routing_configuration",
        "type": "array",
        "description": "Routing configuration for an Agent alias.",
        "children": [
          {
            "name": "agent_version",
            "type": "string",
            "description": "Agent Version."
          }
        ]
      },
      {
        "name": "end_date",
        "type": "string",
        "description": "Time Stamp."
      },
      {
        "name": "start_date",
        "type": "string",
        "description": "Time Stamp."
      }
    ]
  },
  {
    "name": "agent_alias_id",
    "type": "string",
    "description": "Id for an Agent Alias generated at the server side."
  },
  {
    "name": "agent_alias_name",
    "type": "string",
    "description": "Name for a resource."
  },
  {
    "name": "agent_alias_status",
    "type": "string",
    "description": "The statuses an Agent Alias can be in."
  },
  {
    "name": "agent_id",
    "type": "string",
    "description": "Identifier for a resource."
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "Time Stamp."
  },
  {
    "name": "description",
    "type": "string",
    "description": "Description of the Resource."
  },
  {
    "name": "routing_configuration",
    "type": "array",
    "description": "Routing configuration for an Agent alias.",
    "children": [
      {
        "name": "agent_version",
        "type": "string",
        "description": "Agent Version."
      }
    ]
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A map of tag keys and values"
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": "Time Stamp."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agentalias.html"><code>AWS::Bedrock::AgentAlias</code></a>.

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
    <td><CopyableCode code="AgentAliasName, AgentId, region" /></td>
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

Gets all properties from an individual <code>agent_alias</code>.
```sql
SELECT
region,
agent_alias_arn,
agent_alias_history_events,
agent_alias_id,
agent_alias_name,
agent_alias_status,
agent_id,
created_at,
description,
routing_configuration,
tags,
updated_at
FROM awscc.bedrock.agent_aliases
WHERE region = 'us-east-1' AND data__Identifier = '<AgentId>|<AgentAliasId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>agent_alias</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.bedrock.agent_aliases (
 AgentAliasName,
 AgentId,
 region
)
SELECT 
'{{ AgentAliasName }}',
 '{{ AgentId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.bedrock.agent_aliases (
 AgentAliasName,
 AgentId,
 Description,
 RoutingConfiguration,
 Tags,
 region
)
SELECT 
 '{{ AgentAliasName }}',
 '{{ AgentId }}',
 '{{ Description }}',
 '{{ RoutingConfiguration }}',
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
  - name: agent_alias
    props:
      - name: AgentAliasName
        value: '{{ AgentAliasName }}'
      - name: AgentId
        value: '{{ AgentId }}'
      - name: Description
        value: '{{ Description }}'
      - name: RoutingConfiguration
        value:
          - AgentVersion: '{{ AgentVersion }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.bedrock.agent_aliases
WHERE data__Identifier = '<AgentId|AgentAliasId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>agent_aliases</code> resource, the following permissions are required:

### Create
```json
bedrock:PrepareAgent,
bedrock:GetAgent,
bedrock:CreateAgentAlias,
bedrock:TagResource,
bedrock:GetAgentAlias,
bedrock:ListTagsForResource
```

### Read
```json
bedrock:GetAgentAlias,
bedrock:ListTagsForResource
```

### Update
```json
bedrock:PrepareAgent,
bedrock:GetAgent,
bedrock:UpdateAgentAlias,
bedrock:TagResource,
bedrock:UntagResource,
bedrock:GetAgentAlias,
bedrock:ListTagsForResource
```

### Delete
```json
bedrock:DeleteAgentAlias
```

### List
```json
bedrock:ListAgentAliases
```
