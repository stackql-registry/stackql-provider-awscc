---
title: signal_maps
hide_title: false
hide_table_of_contents: false
keywords:
  - signal_maps
  - medialive
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

Creates, updates, deletes or gets a <code>signal_map</code> resource or lists <code>signal_maps</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>signal_maps</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::MediaLive::SignalMap Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.medialive.signal_maps" /></td></tr>
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
    "description": "A signal map's ARN (Amazon Resource Name)"
  },
  {
    "name": "cloud_watch_alarm_template_group_identifiers",
    "type": "array",
    "description": ""
  },
  {
    "name": "cloud_watch_alarm_template_group_ids",
    "type": "array",
    "description": ""
  },
  {
    "name": "created_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": "A resource's optional description."
  },
  {
    "name": "discovery_entry_point_arn",
    "type": "string",
    "description": "A top-level supported AWS resource ARN to discovery a signal map from."
  },
  {
    "name": "error_message",
    "type": "string",
    "description": "Error message associated with a failed creation or failed update attempt of a signal map."
  },
  {
    "name": "event_bridge_rule_template_group_identifiers",
    "type": "array",
    "description": ""
  },
  {
    "name": "event_bridge_rule_template_group_ids",
    "type": "array",
    "description": ""
  },
  {
    "name": "failed_media_resource_map",
    "type": "object",
    "description": "A map representing an incomplete AWS media workflow as a graph."
  },
  {
    "name": "force_rediscovery",
    "type": "boolean",
    "description": "If true, will force a rediscovery of a signal map if an unchanged discoveryEntryPointArn is provided."
  },
  {
    "name": "id",
    "type": "string",
    "description": "A signal map's id."
  },
  {
    "name": "identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "last_discovered_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "last_successful_monitor_deployment",
    "type": "object",
    "description": "Represents the latest successful monitor deployment of a signal map.",
    "children": [
      {
        "name": "details_uri",
        "type": "string",
        "description": "URI associated with a signal map's monitor deployment."
      },
      {
        "name": "status",
        "type": "string",
        "description": "A signal map's monitor deployment status."
      }
    ]
  },
  {
    "name": "media_resource_map",
    "type": "object",
    "description": "A map representing an AWS media workflow as a graph."
  },
  {
    "name": "modified_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "monitor_changes_pending_deployment",
    "type": "boolean",
    "description": "If true, there are pending monitor changes for this signal map that can be deployed."
  },
  {
    "name": "monitor_deployment",
    "type": "object",
    "description": "Represents the latest monitor deployment of a signal map.",
    "children": [
      {
        "name": "details_uri",
        "type": "string",
        "description": "URI associated with a signal map's monitor deployment."
      },
      {
        "name": "error_message",
        "type": "string",
        "description": "Error message associated with a failed monitor deployment of a signal map."
      },
      {
        "name": "status",
        "type": "string",
        "description": "A signal map's monitor deployment status."
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": "A resource's name. Names must be unique within the scope of a resource type in a specific region."
  },
  {
    "name": "status",
    "type": "string",
    "description": "A signal map's current status which is dependent on its lifecycle actions or associated jobs."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "Represents the tags associated with a resource."
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
    "name": "id",
    "type": "string",
    "description": "A signal map's id."
  },
  {
    "name": "identifier",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-signalmap.html"><code>AWS::MediaLive::SignalMap</code></a>.

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
    <td><code>signal_maps</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DiscoveryEntryPointArn, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>signal_maps</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>signal_maps</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>signal_maps_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>signal_maps</code></td>
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

Gets all properties from an individual <code>signal_map</code>.
```sql
SELECT
region,
arn,
cloud_watch_alarm_template_group_identifiers,
cloud_watch_alarm_template_group_ids,
created_at,
description,
discovery_entry_point_arn,
error_message,
event_bridge_rule_template_group_identifiers,
event_bridge_rule_template_group_ids,
failed_media_resource_map,
force_rediscovery,
id,
identifier,
last_discovered_at,
last_successful_monitor_deployment,
media_resource_map,
modified_at,
monitor_changes_pending_deployment,
monitor_deployment,
name,
status,
tags
FROM awscc.medialive.signal_maps
WHERE region = 'us-east-1' AND Identifier = '<Identifier>';
```
</TabItem>
<TabItem value="list">

Lists all <code>signal_maps</code> in a region.
```sql
SELECT
region,
identifier
FROM awscc.medialive.signal_maps_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>signal_map</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.medialive.signal_maps (
 DiscoveryEntryPointArn,
 Name,
 region
)
SELECT 
'{{ DiscoveryEntryPointArn }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.medialive.signal_maps (
 CloudWatchAlarmTemplateGroupIdentifiers,
 Description,
 DiscoveryEntryPointArn,
 EventBridgeRuleTemplateGroupIdentifiers,
 ForceRediscovery,
 Name,
 Tags,
 region
)
SELECT 
 '{{ CloudWatchAlarmTemplateGroupIdentifiers }}',
 '{{ Description }}',
 '{{ DiscoveryEntryPointArn }}',
 '{{ EventBridgeRuleTemplateGroupIdentifiers }}',
 '{{ ForceRediscovery }}',
 '{{ Name }}',
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
  - name: signal_map
    props:
      - name: CloudWatchAlarmTemplateGroupIdentifiers
        value:
          - '{{ CloudWatchAlarmTemplateGroupIdentifiers[0] }}'
      - name: Description
        value: '{{ Description }}'
      - name: DiscoveryEntryPointArn
        value: '{{ DiscoveryEntryPointArn }}'
      - name: EventBridgeRuleTemplateGroupIdentifiers
        value:
          - '{{ EventBridgeRuleTemplateGroupIdentifiers[0] }}'
      - name: ForceRediscovery
        value: '{{ ForceRediscovery }}'
      - name: Name
        value: '{{ Name }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>signal_map</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.medialive.signal_maps
SET PatchDocument = string('{{ {
    "CloudWatchAlarmTemplateGroupIdentifiers": cloud_watch_alarm_template_group_identifiers,
    "Description": description,
    "DiscoveryEntryPointArn": discovery_entry_point_arn,
    "EventBridgeRuleTemplateGroupIdentifiers": event_bridge_rule_template_group_identifiers,
    "ForceRediscovery": force_rediscovery,
    "Name": name
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Identifier>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.medialive.signal_maps
WHERE Identifier = '<Identifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>signal_maps</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
medialive:CreateSignalMap,
medialive:GetSignalMap,
medialive:CreateTags,
medialive:DescribeChannel,
medialive:DescribeInput,
medialive:DescribeInputDevice,
medialive:DescribeInputSecurityGroup,
medialive:DescribeMultiplex,
medialive:DescribeMultiplexProgram,
medialive:ListChannels,
medialive:ListInputDevices,
medialive:ListInputSecurityGroups,
medialive:ListInputs,
medialive:ListMultiplexPrograms,
medialive:ListMultiplexes,
medialive:ListOfferings,
medialive:ListReservations,
medialive:ListTagsForResource,
cloudfront:ListDistributions,
cloudfront:GetDistribution,
ec2:DescribeNetworkInterfaces,
mediaconnect:ListEntitlements,
mediaconnect:ListFlows,
mediaconnect:ListOfferings,
mediaconnect:ListReservations,
mediaconnect:DescribeFlow,
mediapackage:ListChannels,
mediapackage:ListOriginEndpoints,
mediapackage:DescribeChannel,
mediapackage:DescribeOriginEndpoint,
mediapackagev2:ListChannelGroups,
mediapackagev2:ListChannels,
mediapackagev2:ListOriginEndpoints,
mediapackagev2:GetChannelGroup,
mediapackagev2:GetChannel,
mediapackagev2:GetOriginEndpoint,
tag:GetResources
```

</TabItem>
<TabItem value="read">

```json
medialive:GetSignalMap,
tag:GetResources
```

</TabItem>
<TabItem value="update">

```json
medialive:StartUpdateSignalMap,
medialive:GetSignalMap,
medialive:CreateTags,
medialive:DeleteTags,
medialive:DescribeChannel,
medialive:DescribeInput,
medialive:DescribeInputDevice,
medialive:DescribeInputSecurityGroup,
medialive:DescribeMultiplex,
medialive:DescribeMultiplexProgram,
medialive:ListChannels,
medialive:ListInputDevices,
medialive:ListInputSecurityGroups,
medialive:ListInputs,
medialive:ListMultiplexPrograms,
medialive:ListMultiplexes,
medialive:ListOfferings,
medialive:ListReservations,
medialive:ListTagsForResource,
cloudfront:ListDistributions,
cloudfront:GetDistribution,
ec2:DescribeNetworkInterfaces,
mediaconnect:ListEntitlements,
mediaconnect:ListFlows,
mediaconnect:ListOfferings,
mediaconnect:ListReservations,
mediaconnect:DescribeFlow,
mediapackage:ListChannels,
mediapackage:ListOriginEndpoints,
mediapackage:DescribeChannel,
mediapackage:DescribeOriginEndpoint,
mediapackagev2:ListChannelGroups,
mediapackagev2:ListChannels,
mediapackagev2:ListOriginEndpoints,
mediapackagev2:GetChannelGroup,
mediapackagev2:GetChannel,
mediapackagev2:GetOriginEndpoint,
tag:GetResources
```

</TabItem>
<TabItem value="delete">

```json
medialive:GetSignalMap,
medialive:DeleteSignalMap
```

</TabItem>
<TabItem value="list">

```json
medialive:ListSignalMaps
```

</TabItem>
</Tabs>