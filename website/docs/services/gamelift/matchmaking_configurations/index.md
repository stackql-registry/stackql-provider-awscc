---
title: matchmaking_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - matchmaking_configurations
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

Creates, updates, deletes or gets a <code>matchmaking_configuration</code> resource or lists <code>matchmaking_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>matchmaking_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::GameLift::MatchmakingConfiguration resource creates an Amazon GameLift (GameLift) matchmaking configuration.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.gamelift.matchmaking_configurations" /></td></tr>
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
    "name": "acceptance_required",
    "type": "boolean",
    "description": "A flag that indicates whether a match that was created with this configuration must be accepted by the matched players"
  },
  {
    "name": "acceptance_timeout_seconds",
    "type": "integer",
    "description": "The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required."
  },
  {
    "name": "additional_player_count",
    "type": "integer",
    "description": "The number of player slots in a match to keep open for future players."
  },
  {
    "name": "backfill_mode",
    "type": "string",
    "description": "The method used to backfill game sessions created with this matchmaking configuration."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift matchmaking configuration resource and uniquely identifies it."
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "A time stamp indicating when this data object was created."
  },
  {
    "name": "custom_event_data",
    "type": "string",
    "description": "Information to attach to all events related to the matchmaking configuration."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A descriptive label that is associated with matchmaking configuration."
  },
  {
    "name": "flex_match_mode",
    "type": "string",
    "description": "Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or as a standalone matchmaking solution."
  },
  {
    "name": "game_properties",
    "type": "array",
    "description": "A set of custom properties for a game session, formatted as key:value pairs.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The game property identifier."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The game property value."
      }
    ]
  },
  {
    "name": "game_session_data",
    "type": "string",
    "description": "A set of custom game session properties, formatted as a single string value."
  },
  {
    "name": "game_session_queue_arns",
    "type": "array",
    "description": "The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it."
  },
  {
    "name": "name",
    "type": "string",
    "description": "A unique identifier for the matchmaking configuration."
  },
  {
    "name": "notification_target",
    "type": "string",
    "description": "An SNS topic ARN that is set up to receive matchmaking notifications."
  },
  {
    "name": "request_timeout_seconds",
    "type": "integer",
    "description": "The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out."
  },
  {
    "name": "rule_set_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) associated with the GameLift matchmaking rule set resource that this configuration uses."
  },
  {
    "name": "rule_set_name",
    "type": "string",
    "description": "A unique identifier for the matchmaking rule set to use with this configuration."
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
    "description": "A unique identifier for the matchmaking configuration."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingconfiguration.html"><code>AWS::GameLift::MatchmakingConfiguration</code></a>.

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
    <td><code>matchmaking_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AcceptanceRequired, Name, RequestTimeoutSeconds, RuleSetName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>matchmaking_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>matchmaking_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>matchmaking_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>matchmaking_configurations</code></td>
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

Gets all properties from an individual <code>matchmaking_configuration</code>.
```sql
SELECT
region,
acceptance_required,
acceptance_timeout_seconds,
additional_player_count,
backfill_mode,
arn,
creation_time,
custom_event_data,
description,
flex_match_mode,
game_properties,
game_session_data,
game_session_queue_arns,
name,
notification_target,
request_timeout_seconds,
rule_set_arn,
rule_set_name,
tags
FROM awscc.gamelift.matchmaking_configurations
WHERE region = 'us-east-1' AND Identifier = '{{ name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>matchmaking_configurations</code> in a region.
```sql
SELECT
region,
name
FROM awscc.gamelift.matchmaking_configurations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>matchmaking_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.gamelift.matchmaking_configurations (
 AcceptanceRequired,
 Name,
 RequestTimeoutSeconds,
 RuleSetName,
 region
)
SELECT
'{{ acceptance_required }}',
 '{{ name }}',
 '{{ request_timeout_seconds }}',
 '{{ rule_set_name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.gamelift.matchmaking_configurations (
 AcceptanceRequired,
 AcceptanceTimeoutSeconds,
 AdditionalPlayerCount,
 BackfillMode,
 CreationTime,
 CustomEventData,
 Description,
 FlexMatchMode,
 GameProperties,
 GameSessionData,
 GameSessionQueueArns,
 Name,
 NotificationTarget,
 RequestTimeoutSeconds,
 RuleSetArn,
 RuleSetName,
 Tags,
 region
)
SELECT
 '{{ acceptance_required }}',
 '{{ acceptance_timeout_seconds }}',
 '{{ additional_player_count }}',
 '{{ backfill_mode }}',
 '{{ creation_time }}',
 '{{ custom_event_data }}',
 '{{ description }}',
 '{{ flex_match_mode }}',
 '{{ game_properties }}',
 '{{ game_session_data }}',
 '{{ game_session_queue_arns }}',
 '{{ name }}',
 '{{ notification_target }}',
 '{{ request_timeout_seconds }}',
 '{{ rule_set_arn }}',
 '{{ rule_set_name }}',
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
  - name: matchmaking_configuration
    props:
      - name: acceptance_required
        value: '{{ acceptance_required }}'
      - name: acceptance_timeout_seconds
        value: '{{ acceptance_timeout_seconds }}'
      - name: additional_player_count
        value: '{{ additional_player_count }}'
      - name: backfill_mode
        value: '{{ backfill_mode }}'
      - name: creation_time
        value: '{{ creation_time }}'
      - name: custom_event_data
        value: '{{ custom_event_data }}'
      - name: description
        value: '{{ description }}'
      - name: flex_match_mode
        value: '{{ flex_match_mode }}'
      - name: game_properties
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: game_session_data
        value: '{{ game_session_data }}'
      - name: game_session_queue_arns
        value:
          - '{{ game_session_queue_arns[0] }}'
      - name: name
        value: '{{ name }}'
      - name: notification_target
        value: '{{ notification_target }}'
      - name: request_timeout_seconds
        value: '{{ request_timeout_seconds }}'
      - name: rule_set_arn
        value: '{{ rule_set_arn }}'
      - name: rule_set_name
        value: '{{ rule_set_name }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>matchmaking_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.gamelift.matchmaking_configurations
SET PatchDocument = string('{{ {
    "AcceptanceRequired": acceptance_required,
    "AcceptanceTimeoutSeconds": acceptance_timeout_seconds,
    "AdditionalPlayerCount": additional_player_count,
    "BackfillMode": backfill_mode,
    "CreationTime": creation_time,
    "CustomEventData": custom_event_data,
    "Description": description,
    "FlexMatchMode": flex_match_mode,
    "GameProperties": game_properties,
    "GameSessionData": game_session_data,
    "GameSessionQueueArns": game_session_queue_arns,
    "NotificationTarget": notification_target,
    "RequestTimeoutSeconds": request_timeout_seconds,
    "RuleSetArn": rule_set_arn,
    "RuleSetName": rule_set_name,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.gamelift.matchmaking_configurations
WHERE Identifier = '{{ name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>matchmaking_configurations</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
gamelift:CreateMatchmakingConfiguration,
gamelift:ListTagsForResource,
gamelift:TagResource,
gamelift:DescribeMatchmakingConfigurations
```

</TabItem>
<TabItem value="read">

```json
gamelift:DescribeMatchmakingConfigurations,
gamelift:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
gamelift:DescribeMatchmakingConfigurations,
gamelift:DeleteMatchmakingConfiguration
```

</TabItem>
<TabItem value="list">

```json
gamelift:DescribeMatchmakingConfigurations
```

</TabItem>
<TabItem value="update">

```json
gamelift:DescribeMatchmakingConfigurations,
gamelift:UpdateMatchmakingConfiguration,
gamelift:ListTagsForResource,
gamelift:TagResource,
gamelift:UntagResource
```

</TabItem>
</Tabs>