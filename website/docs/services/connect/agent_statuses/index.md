---
title: agent_statuses
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_statuses
  - connect
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

Creates, updates, deletes or gets an <code>agent_status</code> resource or lists <code>agent_statuses</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>agent_statuses</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Connect::AgentStatus</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.agent_statuses" /></td></tr>
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
    "name": "instance_arn",
    "type": "string",
    "description": "The identifier of the Amazon Connect instance."
  },
  {
    "name": "agent_status_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the agent status."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the status."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the status."
  },
  {
    "name": "display_order",
    "type": "integer",
    "description": "The display order of the status."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of the status."
  },
  {
    "name": "type",
    "type": "string",
    "description": "The type of agent status."
  },
  {
    "name": "reset_order_number",
    "type": "boolean",
    "description": "A number indicating the reset order of the agent status."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters"
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. . You can specify a value that is maximum of 256 Unicode characters"
      }
    ]
  },
  {
    "name": "last_modified_region",
    "type": "string",
    "description": "Last modified region."
  },
  {
    "name": "last_modified_time",
    "type": "number",
    "description": "Last modified time."
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
    "name": "agent_status_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the agent status."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-agentstatus.html"><code>AWS::Connect::AgentStatus</code></a>.

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
    <td><code>agent_statuses</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="InstanceArn, Name, State, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>agent_statuses</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>agent_statuses_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>agent_statuses</code></td>
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

Gets all properties from an individual <code>agent_status</code>.
```sql
SELECT
region,
instance_arn,
agent_status_arn,
description,
name,
display_order,
state,
type,
reset_order_number,
tags,
last_modified_region,
last_modified_time
FROM awscc.connect.agent_statuses
WHERE region = 'us-east-1' AND Identifier = '<AgentStatusArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>agent_statuses</code> in a region.
```sql
SELECT
region,
agent_status_arn
FROM awscc.connect.agent_statuses_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>agent_status</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.connect.agent_statuses (
 InstanceArn,
 Name,
 State,
 region
)
SELECT 
'{{ InstanceArn }}',
 '{{ Name }}',
 '{{ State }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.connect.agent_statuses (
 InstanceArn,
 Description,
 Name,
 DisplayOrder,
 State,
 Type,
 ResetOrderNumber,
 Tags,
 region
)
SELECT 
 '{{ InstanceArn }}',
 '{{ Description }}',
 '{{ Name }}',
 '{{ DisplayOrder }}',
 '{{ State }}',
 '{{ Type }}',
 '{{ ResetOrderNumber }}',
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
  - name: agent_status
    props:
      - name: InstanceArn
        value: '{{ InstanceArn }}'
      - name: Description
        value: '{{ Description }}'
      - name: Name
        value: '{{ Name }}'
      - name: DisplayOrder
        value: '{{ DisplayOrder }}'
      - name: State
        value: '{{ State }}'
      - name: Type
        value: '{{ Type }}'
      - name: ResetOrderNumber
        value: '{{ ResetOrderNumber }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.connect.agent_statuses
SET PatchDocument = string('{{ {
    "InstanceArn": instance_arn,
    "Description": description,
    "Name": name,
    "DisplayOrder": display_order,
    "State": state,
    "Type": type,
    "ResetOrderNumber": reset_order_number,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<AgentStatusArn>';
```


## Permissions

To operate on the <code>agent_statuses</code> resource, the following permissions are required:

### Create
```json
connect:CreateAgentStatus,
connect:TagResource,
connect:ListAgentStatuses
```

### Read
```json
connect:DescribeAgentStatus
```

### Update
```json
connect:UpdateAgentStatus,
connect:UntagResource,
connect:TagResource
```

### List
```json
connect:ListAgentStatuses
```
