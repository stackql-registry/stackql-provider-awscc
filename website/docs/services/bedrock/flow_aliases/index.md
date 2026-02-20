---
title: flow_aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - flow_aliases
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

Creates, updates, deletes or gets a <code>flow_alias</code> resource or lists <code>flow_aliases</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>flow_aliases</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Bedrock::FlowAlias Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.bedrock.flow_aliases" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": "Arn of the Flow Alias"
  },
  {
    "name": "flow_arn",
    "type": "string",
    "description": "Arn representation of the Flow"
  },
  {
    "name": "concurrency_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "max_concurrency",
        "type": "number",
        "description": "Number of nodes executed concurrently at a time"
      }
    ]
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
    "name": "flow_id",
    "type": "string",
    "description": "Identifier for a flow resource."
  },
  {
    "name": "id",
    "type": "string",
    "description": "Id for a Flow Alias generated at the server side."
  },
  {
    "name": "name",
    "type": "string",
    "description": "Name for a resource."
  },
  {
    "name": "routing_configuration",
    "type": "array",
    "description": "Routing configuration for a Flow alias.",
    "children": [
      {
        "name": "flow_version",
        "type": "string",
        "description": "Version."
      }
    ]
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": "Time Stamp."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A map of tag keys and values"
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
    "name": "arn",
    "type": "string",
    "description": "Arn of the Flow Alias"
  },
  {
    "name": "flow_arn",
    "type": "string",
    "description": "Arn representation of the Flow"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowalias.html"><code>AWS::Bedrock::FlowAlias</code></a>.

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
    <td><code>flow_aliases</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, FlowArn, RoutingConfiguration, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>flow_aliases</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>flow_aliases</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>flow_aliases_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>flow_aliases</code></td>
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

Gets all properties from an individual <code>flow_alias</code>.
```sql
SELECT
region,
arn,
flow_arn,
concurrency_configuration,
created_at,
description,
flow_id,
id,
name,
routing_configuration,
updated_at,
tags
FROM awscc.bedrock.flow_aliases
WHERE region = 'us-east-1' AND Identifier = '<Arn>|<FlowArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>flow_aliases</code> in a region.
```sql
SELECT
region,
arn,
flow_arn
FROM awscc.bedrock.flow_aliases_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>flow_alias</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.bedrock.flow_aliases (
 FlowArn,
 Name,
 RoutingConfiguration,
 region
)
SELECT 
'{{ FlowArn }}',
 '{{ Name }}',
 '{{ RoutingConfiguration }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.bedrock.flow_aliases (
 FlowArn,
 ConcurrencyConfiguration,
 Description,
 Name,
 RoutingConfiguration,
 Tags,
 region
)
SELECT 
 '{{ FlowArn }}',
 '{{ ConcurrencyConfiguration }}',
 '{{ Description }}',
 '{{ Name }}',
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
  - name: flow_alias
    props:
      - name: FlowArn
        value: '{{ FlowArn }}'
      - name: ConcurrencyConfiguration
        value:
          Type: '{{ Type }}'
          MaxConcurrency: null
      - name: Description
        value: '{{ Description }}'
      - name: Name
        value: '{{ Name }}'
      - name: RoutingConfiguration
        value:
          - FlowVersion: '{{ FlowVersion }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.bedrock.flow_aliases
SET PatchDocument = string('{{ {
    "ConcurrencyConfiguration": concurrency_configuration,
    "Description": description,
    "Name": name,
    "RoutingConfiguration": routing_configuration,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>|<FlowArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.bedrock.flow_aliases
WHERE Identifier = '<Arn|FlowArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>flow_aliases</code> resource, the following permissions are required:

### Create
```json
bedrock:CreateFlowAlias,
bedrock:GetFlowAlias,
bedrock:TagResource,
bedrock:ListTagsForResource
```

### Read
```json
bedrock:GetFlowAlias,
bedrock:ListTagsForResource
```

### Update
```json
bedrock:UpdateFlowAlias,
bedrock:GetFlowAlias,
bedrock:TagResource,
bedrock:UntagResource,
bedrock:ListTagsForResource
```

### Delete
```json
bedrock:DeleteFlowAlias
```

### List
```json
bedrock:ListFlowAliases
```
