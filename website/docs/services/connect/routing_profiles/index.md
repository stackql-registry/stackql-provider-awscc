---
title: routing_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - routing_profiles
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

Creates, updates, deletes or gets a <code>routing_profile</code> resource or lists <code>routing_profiles</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>routing_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Connect::RoutingProfile</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.routing_profiles" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "The name of the routing profile."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the routing profile."
  },
  {
    "name": "media_concurrencies",
    "type": "array",
    "description": "The channels agents can handle in the Contact Control Panel (CCP) for this routing profile.",
    "children": [
      {
        "name": "channel",
        "type": "string",
        "description": "The channels that agents can handle in the Contact Control Panel (CCP)."
      },
      {
        "name": "concurrency",
        "type": "integer",
        "description": "The number of contacts an agent can have on a channel simultaneously."
      },
      {
        "name": "cross_channel_behavior",
        "type": "object",
        "description": "Defines the cross-channel routing behavior that allows an agent working on a contact in one channel to be offered a contact from a different channel.",
        "children": [
          {
            "name": "behavior_type",
            "type": "string",
            "description": "Specifies the other channels that can be routed to an agent handling their current channel."
          }
        ]
      }
    ]
  },
  {
    "name": "default_outbound_queue_arn",
    "type": "string",
    "description": "The identifier of the default outbound queue for this routing profile."
  },
  {
    "name": "routing_profile_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the routing profile."
  },
  {
    "name": "queue_configs",
    "type": "array",
    "description": "The queues to associate with this routing profile.",
    "children": [
      {
        "name": "delay",
        "type": "integer",
        "description": "The delay, in seconds, a contact should wait in the queue before they are routed to an available agent."
      },
      {
        "name": "priority",
        "type": "integer",
        "description": "The order in which contacts are to be handled for the queue."
      },
      {
        "name": "queue_reference",
        "type": "object",
        "description": "Contains the channel and queue identifier for a routing profile.",
        "children": [
          {
            "name": "channel",
            "type": "string",
            "description": "The channels that agents can handle in the Contact Control Panel (CCP)."
          },
          {
            "name": "queue_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) for the queue."
          }
        ]
      }
    ]
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
    "name": "agent_availability_timer",
    "type": "string",
    "description": "Whether agents with this routing profile will have their routing order calculated based on longest idle time or time since their last inbound contact."
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
    "name": "routing_profile_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the routing profile."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-routingprofile.html"><code>AWS::Connect::RoutingProfile</code></a>.

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
    <td><code>routing_profiles</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="InstanceArn, Name, Description, MediaConcurrencies, DefaultOutboundQueueArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>routing_profiles</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>routing_profiles</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>routing_profiles_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>routing_profiles</code></td>
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

Gets all properties from an individual <code>routing_profile</code>.
```sql
SELECT
region,
instance_arn,
name,
description,
media_concurrencies,
default_outbound_queue_arn,
routing_profile_arn,
queue_configs,
tags,
agent_availability_timer
FROM awscc.connect.routing_profiles
WHERE region = 'us-east-1' AND Identifier = '<RoutingProfileArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>routing_profiles</code> in a region.
```sql
SELECT
region,
routing_profile_arn
FROM awscc.connect.routing_profiles_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>routing_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.connect.routing_profiles (
 InstanceArn,
 Name,
 Description,
 MediaConcurrencies,
 DefaultOutboundQueueArn,
 region
)
SELECT 
'{{ InstanceArn }}',
 '{{ Name }}',
 '{{ Description }}',
 '{{ MediaConcurrencies }}',
 '{{ DefaultOutboundQueueArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.connect.routing_profiles (
 InstanceArn,
 Name,
 Description,
 MediaConcurrencies,
 DefaultOutboundQueueArn,
 QueueConfigs,
 Tags,
 AgentAvailabilityTimer,
 region
)
SELECT 
 '{{ InstanceArn }}',
 '{{ Name }}',
 '{{ Description }}',
 '{{ MediaConcurrencies }}',
 '{{ DefaultOutboundQueueArn }}',
 '{{ QueueConfigs }}',
 '{{ Tags }}',
 '{{ AgentAvailabilityTimer }}',
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
  - name: routing_profile
    props:
      - name: InstanceArn
        value: '{{ InstanceArn }}'
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: MediaConcurrencies
        value:
          - Channel: '{{ Channel }}'
            Concurrency: '{{ Concurrency }}'
            CrossChannelBehavior:
              BehaviorType: '{{ BehaviorType }}'
      - name: DefaultOutboundQueueArn
        value: '{{ DefaultOutboundQueueArn }}'
      - name: QueueConfigs
        value:
          - Delay: '{{ Delay }}'
            Priority: '{{ Priority }}'
            QueueReference:
              Channel: null
              QueueArn: '{{ QueueArn }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: AgentAvailabilityTimer
        value: '{{ AgentAvailabilityTimer }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>routing_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.connect.routing_profiles
SET PatchDocument = string('{{ {
    "InstanceArn": instance_arn,
    "Name": name,
    "Description": description,
    "MediaConcurrencies": media_concurrencies,
    "DefaultOutboundQueueArn": default_outbound_queue_arn,
    "QueueConfigs": queue_configs,
    "Tags": tags,
    "AgentAvailabilityTimer": agent_availability_timer
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<RoutingProfileArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connect.routing_profiles
WHERE Identifier = '<RoutingProfileArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>routing_profiles</code> resource, the following permissions are required:

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
connect:CreateRoutingProfile,
connect:TagResource
```

</TabItem>
<TabItem value="read">

```json
connect:DescribeRoutingProfile,
connect:ListRoutingProfileQueues
```

</TabItem>
<TabItem value="delete">

```json
connect:DeleteRoutingProfile,
connect:UntagResource
```

</TabItem>
<TabItem value="update">

```json
connect:AssociateRoutingProfileQueues,
connect:DisassociateRoutingProfileQueues,
connect:UpdateRoutingProfileConcurrency,
connect:UpdateRoutingProfileName,
connect:UpdateRoutingProfileDefaultOutboundQueue,
connect:UpdateRoutingProfileQueues,
connect:TagResource,
connect:UntagResource,
connect:ListRoutingProfileQueues,
connect:UpdateRoutingProfileAgentAvailabilityTimer
```

</TabItem>
<TabItem value="list">

```json
connect:ListRoutingProfiles,
connect:ListRoutingProfileQueues
```

</TabItem>
</Tabs>