---
title: state_machine_aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - state_machine_aliases
  - stepfunctions
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

Creates, updates, deletes or gets a <code>state_machine_alias</code> resource or lists <code>state_machine_aliases</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>state_machine_aliases</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for StateMachineAlias</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.stepfunctions.state_machine_aliases" /></td></tr>
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
    "description": "The ARN of the alias."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The alias name."
  },
  {
    "name": "description",
    "type": "string",
    "description": "An optional description of the alias."
  },
  {
    "name": "routing_configuration",
    "type": "array",
    "description": "The routing configuration of the alias. One or two versions can be mapped to an alias to split StartExecution requests of the same state machine.",
    "children": [
      {
        "name": "state_machine_version_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) that identifies one or two state machine versions defined in the routing configuration."
      },
      {
        "name": "weight",
        "type": "integer",
        "description": "The percentage of traffic you want to route to the state machine version. The sum of the weights in the routing configuration must be equal to 100."
      }
    ]
  },
  {
    "name": "deployment_preference",
    "type": "object",
    "description": "The settings to enable gradual state machine deployments.",
    "children": [
      {
        "name": "state_machine_version_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "type",
        "type": "string",
        "description": "The type of deployment to perform."
      },
      {
        "name": "percentage",
        "type": "integer",
        "description": "The percentage of traffic to shift to the new version in each increment."
      },
      {
        "name": "interval",
        "type": "integer",
        "description": "The time in minutes between each traffic shifting increment."
      },
      {
        "name": "alarms",
        "type": "array",
        "description": "A list of CloudWatch alarm names that will be monitored during the deployment. The deployment will fail and rollback if any alarms go into ALARM state."
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
    "name": "arn",
    "type": "string",
    "description": "The ARN of the alias."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachinealias.html"><code>AWS::StepFunctions::StateMachineAlias</code></a>.

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
    <td><code>state_machine_aliases</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>state_machine_aliases</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>state_machine_aliases</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>state_machine_aliases_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>state_machine_aliases</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>state_machine_alias</code>.
```sql
SELECT
region,
arn,
name,
description,
routing_configuration,
deployment_preference
FROM awscc.stepfunctions.state_machine_aliases
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>state_machine_aliases</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.stepfunctions.state_machine_aliases_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>state_machine_alias</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.stepfunctions.state_machine_aliases (
 Name,
 Description,
 RoutingConfiguration,
 DeploymentPreference,
 region
)
SELECT 
'{{ Name }}',
 '{{ Description }}',
 '{{ RoutingConfiguration }}',
 '{{ DeploymentPreference }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.stepfunctions.state_machine_aliases (
 Name,
 Description,
 RoutingConfiguration,
 DeploymentPreference,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ RoutingConfiguration }}',
 '{{ DeploymentPreference }}',
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
  - name: state_machine_alias
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: RoutingConfiguration
        value:
          - StateMachineVersionArn: '{{ StateMachineVersionArn }}'
            Weight: '{{ Weight }}'
      - name: DeploymentPreference
        value:
          StateMachineVersionArn: '{{ StateMachineVersionArn }}'
          Type: '{{ Type }}'
          Percentage: '{{ Percentage }}'
          Interval: '{{ Interval }}'
          Alarms:
            - '{{ Alarms[0] }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.stepfunctions.state_machine_aliases
SET data__PatchDocument = string('{{ {
    "Description": description,
    "RoutingConfiguration": routing_configuration,
    "DeploymentPreference": deployment_preference
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.stepfunctions.state_machine_aliases
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>state_machine_aliases</code> resource, the following permissions are required:

### Create
```json
states:CreateStateMachineAlias,
states:DescribeStateMachineAlias
```

### Read
```json
states:DescribeStateMachineAlias
```

### Update
```json
cloudwatch:DescribeAlarms,
states:UpdateStateMachineAlias,
states:DescribeStateMachineAlias
```

### Delete
```json
states:DescribeStateMachineAlias,
states:DeleteStateMachineAlias
```

### List
```json
states:ListStateMachineAliases
```
