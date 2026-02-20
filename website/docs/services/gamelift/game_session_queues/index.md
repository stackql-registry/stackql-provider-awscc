---
title: game_session_queues
hide_title: false
hide_table_of_contents: false
keywords:
  - game_session_queues
  - gamelift
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

Creates, updates, deletes or gets a <code>game_session_queue</code> resource or lists <code>game_session_queues</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>game_session_queues</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::GameLift::GameSessionQueue resource creates an Amazon GameLift (GameLift) game session queue.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.gamelift.game_session_queues" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "A descriptive label that is associated with game session queue. Queue names must be unique within each Region."
  },
  {
    "name": "timeout_in_seconds",
    "type": "integer",
    "description": "The maximum time, in seconds, that a new game session placement request remains in the queue."
  },
  {
    "name": "destinations",
    "type": "array",
    "description": "A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue.",
    "children": [
      {
        "name": "destination_arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "player_latency_policies",
    "type": "array",
    "description": "A set of policies that act as a sliding cap on player latency.",
    "children": [
      {
        "name": "maximum_individual_player_latency_milliseconds",
        "type": "integer",
        "description": "The maximum latency value that is allowed for any player, in milliseconds. All policies must have a value set for this property."
      },
      {
        "name": "policy_duration_seconds",
        "type": "integer",
        "description": "The length of time, in seconds, that the policy is enforced while placing a new game session."
      }
    ]
  },
  {
    "name": "custom_event_data",
    "type": "string",
    "description": "Information that is added to all events that are related to this game session queue."
  },
  {
    "name": "notification_target",
    "type": "string",
    "description": "An SNS topic ARN that is set up to receive game session placement notifications."
  },
  {
    "name": "filter_configuration",
    "type": "object",
    "description": "A list of locations where a queue is allowed to place new game sessions.",
    "children": [
      {
        "name": "allowed_locations",
        "type": "array",
        "description": "A list of locations to allow game session placement in, in the form of AWS Region codes such as us-west-2."
      }
    ]
  },
  {
    "name": "priority_configuration",
    "type": "object",
    "description": "Custom settings to use when prioritizing destinations and locations for game session placements.",
    "children": [
      {
        "name": "location_order",
        "type": "array",
        "description": "The prioritization order to use for fleet locations, when the PriorityOrder property includes LOCATION."
      },
      {
        "name": "priority_order",
        "type": "array",
        "description": "The recommended sequence to use when prioritizing where to place new game sessions."
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length."
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
    "name": "name",
    "type": "string",
    "description": "A descriptive label that is associated with game session queue. Queue names must be unique within each Region."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html"><code>AWS::GameLift::GameSessionQueue</code></a>.

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
    <td><code>game_session_queues</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>game_session_queues</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>game_session_queues</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>game_session_queues_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>game_session_queues</code></td>
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

Gets all properties from an individual <code>game_session_queue</code>.
```sql
SELECT
region,
name,
timeout_in_seconds,
destinations,
player_latency_policies,
custom_event_data,
notification_target,
filter_configuration,
priority_configuration,
arn,
tags
FROM awscc.gamelift.game_session_queues
WHERE region = 'us-east-1' AND Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>game_session_queues</code> in a region.
```sql
SELECT
region,
name
FROM awscc.gamelift.game_session_queues_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>game_session_queue</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.gamelift.game_session_queues (
 Name,
 region
)
SELECT 
'{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.gamelift.game_session_queues (
 Name,
 TimeoutInSeconds,
 Destinations,
 PlayerLatencyPolicies,
 CustomEventData,
 NotificationTarget,
 FilterConfiguration,
 PriorityConfiguration,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ TimeoutInSeconds }}',
 '{{ Destinations }}',
 '{{ PlayerLatencyPolicies }}',
 '{{ CustomEventData }}',
 '{{ NotificationTarget }}',
 '{{ FilterConfiguration }}',
 '{{ PriorityConfiguration }}',
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
  - name: game_session_queue
    props:
      - name: Name
        value: '{{ Name }}'
      - name: TimeoutInSeconds
        value: '{{ TimeoutInSeconds }}'
      - name: Destinations
        value:
          - DestinationArn: '{{ DestinationArn }}'
      - name: PlayerLatencyPolicies
        value:
          - MaximumIndividualPlayerLatencyMilliseconds: '{{ MaximumIndividualPlayerLatencyMilliseconds }}'
            PolicyDurationSeconds: '{{ PolicyDurationSeconds }}'
      - name: CustomEventData
        value: '{{ CustomEventData }}'
      - name: NotificationTarget
        value: '{{ NotificationTarget }}'
      - name: FilterConfiguration
        value:
          AllowedLocations:
            - '{{ AllowedLocations[0] }}'
      - name: PriorityConfiguration
        value:
          LocationOrder:
            - '{{ LocationOrder[0] }}'
          PriorityOrder:
            - '{{ PriorityOrder[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>game_session_queue</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.gamelift.game_session_queues
SET PatchDocument = string('{{ {
    "TimeoutInSeconds": timeout_in_seconds,
    "Destinations": destinations,
    "PlayerLatencyPolicies": player_latency_policies,
    "CustomEventData": custom_event_data,
    "NotificationTarget": notification_target,
    "FilterConfiguration": filter_configuration,
    "PriorityConfiguration": priority_configuration,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.gamelift.game_session_queues
WHERE Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>game_session_queues</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
gamelift:CreateGameSessionQueue,
gamelift:DescribeGameSessionQueues,
gamelift:ListTagsForResource,
gamelift:TagResource
```

</TabItem>
<TabItem value="read">

```json
gamelift:DescribeGameSessionQueues,
gamelift:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
gamelift:DescribeGameSessionQueues,
gamelift:DeleteGameSessionQueue
```

</TabItem>
<TabItem value="update">

```json
gamelift:UpdateGameSessionQueue,
gamelift:ListTagsForResource,
gamelift:TagResource,
gamelift:UntagResource,
gamelift:DescribeGameSessionQueues
```

</TabItem>
<TabItem value="list">

```json
gamelift:DescribeGameSessionQueues
```

</TabItem>
</Tabs>