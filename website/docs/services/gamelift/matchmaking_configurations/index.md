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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingconfiguration.html"><code>AWS::GameLift::MatchmakingConfiguration</code></a>.

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
    <td><CopyableCode code="AcceptanceRequired, Name, RequestTimeoutSeconds, RuleSetName, region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<Name>';
```

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
'{{ AcceptanceRequired }}',
 '{{ Name }}',
 '{{ RequestTimeoutSeconds }}',
 '{{ RuleSetName }}',
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
 '{{ AcceptanceRequired }}',
 '{{ AcceptanceTimeoutSeconds }}',
 '{{ AdditionalPlayerCount }}',
 '{{ BackfillMode }}',
 '{{ CreationTime }}',
 '{{ CustomEventData }}',
 '{{ Description }}',
 '{{ FlexMatchMode }}',
 '{{ GameProperties }}',
 '{{ GameSessionData }}',
 '{{ GameSessionQueueArns }}',
 '{{ Name }}',
 '{{ NotificationTarget }}',
 '{{ RequestTimeoutSeconds }}',
 '{{ RuleSetArn }}',
 '{{ RuleSetName }}',
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
  - name: matchmaking_configuration
    props:
      - name: AcceptanceRequired
        value: '{{ AcceptanceRequired }}'
      - name: AcceptanceTimeoutSeconds
        value: '{{ AcceptanceTimeoutSeconds }}'
      - name: AdditionalPlayerCount
        value: '{{ AdditionalPlayerCount }}'
      - name: BackfillMode
        value: '{{ BackfillMode }}'
      - name: CreationTime
        value: '{{ CreationTime }}'
      - name: CustomEventData
        value: '{{ CustomEventData }}'
      - name: Description
        value: '{{ Description }}'
      - name: FlexMatchMode
        value: '{{ FlexMatchMode }}'
      - name: GameProperties
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: GameSessionData
        value: '{{ GameSessionData }}'
      - name: GameSessionQueueArns
        value:
          - '{{ GameSessionQueueArns[0] }}'
      - name: Name
        value: '{{ Name }}'
      - name: NotificationTarget
        value: '{{ NotificationTarget }}'
      - name: RequestTimeoutSeconds
        value: '{{ RequestTimeoutSeconds }}'
      - name: RuleSetArn
        value: '{{ RuleSetArn }}'
      - name: RuleSetName
        value: '{{ RuleSetName }}'
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
DELETE FROM awscc.gamelift.matchmaking_configurations
WHERE data__Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>matchmaking_configurations</code> resource, the following permissions are required:

### Create
```json
gamelift:CreateMatchmakingConfiguration,
gamelift:ListTagsForResource,
gamelift:TagResource,
gamelift:DescribeMatchmakingConfigurations
```

### Read
```json
gamelift:DescribeMatchmakingConfigurations,
gamelift:ListTagsForResource
```

### Delete
```json
gamelift:DescribeMatchmakingConfigurations,
gamelift:DeleteMatchmakingConfiguration
```

### List
```json
gamelift:DescribeMatchmakingConfigurations
```

### Update
```json
gamelift:DescribeMatchmakingConfigurations,
gamelift:UpdateMatchmakingConfiguration,
gamelift:ListTagsForResource,
gamelift:TagResource,
gamelift:UntagResource
```
