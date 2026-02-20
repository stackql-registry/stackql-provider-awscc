---
title: channels
hide_title: false
hide_table_of_contents: false
keywords:
  - channels
  - mediatailor
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

Creates, updates, deletes or gets a <code>channel</code> resource or lists <code>channels</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>channels</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::MediaTailor::Channel Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.mediatailor.channels" /></td></tr>
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
    "description": "<p>The ARN of the channel.</p>"
  },
  {
    "name": "audiences",
    "type": "array",
    "description": "<p>The list of audiences defined in channel.</p>"
  },
  {
    "name": "channel_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "filler_slate",
    "type": "object",
    "description": "<p>Slate VOD source configuration.</p>",
    "children": [
      {
        "name": "source_location_name",
        "type": "string",
        "description": "<p>The name of the source location where the slate VOD source is stored.</p>"
      },
      {
        "name": "vod_source_name",
        "type": "string",
        "description": "<p>The slate VOD source name. The VOD source must already exist in a source location before it can be used for slate.</p>"
      }
    ]
  },
  {
    "name": "log_configuration",
    "type": "object",
    "description": "<p>The log configuration for the channel.</p>",
    "children": [
      {
        "name": "log_types",
        "type": "array",
        "description": "<p>The log types.</p>"
      }
    ]
  },
  {
    "name": "outputs",
    "type": "array",
    "description": "<p>The channel's output properties.</p>",
    "children": [
      {
        "name": "dash_playlist_settings",
        "type": "object",
        "description": "<p>Dash manifest configuration parameters.</p>",
        "children": [
          {
            "name": "manifest_window_seconds",
            "type": "number",
            "description": "<p>The total duration (in seconds) of each manifest. Minimum value: &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; seconds. Maximum value: &#95;&#95;CODE&#95;BLOCK&#95;1&#95;&#95; seconds.</p>"
          },
          {
            "name": "min_buffer_time_seconds",
            "type": "number",
            "description": "<p>Minimum amount of content (measured in seconds) that a player must keep available in the buffer. Minimum value: &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; seconds. Maximum value: &#95;&#95;CODE&#95;BLOCK&#95;1&#95;&#95; seconds.</p>"
          },
          {
            "name": "min_update_period_seconds",
            "type": "number",
            "description": "<p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest. Minimum value: &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; seconds. Maximum value: &#95;&#95;CODE&#95;BLOCK&#95;1&#95;&#95; seconds.</p>"
          },
          {
            "name": "suggested_presentation_delay_seconds",
            "type": "number",
            "description": "<p>Amount of time (in seconds) that the player should be from the live point at the end of the manifest. Minimum value: &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; seconds. Maximum value: &#95;&#95;CODE&#95;BLOCK&#95;1&#95;&#95; seconds.</p>"
          }
        ]
      },
      {
        "name": "hls_playlist_settings",
        "type": "object",
        "description": "<p>HLS playlist configuration parameters.</p>",
        "children": [
          {
            "name": "manifest_window_seconds",
            "type": "number",
            "description": "<p>The total duration (in seconds) of each manifest. Minimum value: &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; seconds. Maximum value: &#95;&#95;CODE&#95;BLOCK&#95;1&#95;&#95; seconds.</p>"
          },
          {
            "name": "ad_markup_type",
            "type": "array",
            "description": "<p>Determines the type of SCTE 35 tags to use in ad markup. Specify &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; to use &#95;&#95;CODE&#95;BLOCK&#95;1&#95;&#95; tags (for live or VOD content). Specify &#95;&#95;CODE&#95;BLOCK&#95;2&#95;&#95; to use &#95;&#95;CODE&#95;BLOCK&#95;3&#95;&#95; and &#95;&#95;CODE&#95;BLOCK&#95;4&#95;&#95; tags (for VOD content only).</p>"
          }
        ]
      },
      {
        "name": "manifest_name",
        "type": "string",
        "description": "<p>The name of the manifest for the channel. The name appears in the &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95;.</p>"
      },
      {
        "name": "source_group",
        "type": "string",
        "description": "<p>A string used to match which &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; is used for each &#95;&#95;CODE&#95;BLOCK&#95;1&#95;&#95;.</p>"
      }
    ]
  },
  {
    "name": "playback_mode",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags to assign to the channel.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "tier",
    "type": "string",
    "description": ""
  },
  {
    "name": "time_shift_configuration",
    "type": "object",
    "description": "<p>The configuration for time-shifted viewing.</p>",
    "children": [
      {
        "name": "max_time_delay_seconds",
        "type": "number",
        "description": "<p>The maximum time delay for time-shifted viewing. The minimum allowed maximum time delay is 0 seconds, and the maximum allowed maximum time delay is 21600 seconds (6 hours).</p>"
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
    "name": "channel_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html"><code>AWS::MediaTailor::Channel</code></a>.

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
    <td><code>channels</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ChannelName, Outputs, PlaybackMode, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>channels</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>channels</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>channels_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>channels</code></td>
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

Gets all properties from an individual <code>channel</code>.
```sql
SELECT
region,
arn,
audiences,
channel_name,
filler_slate,
log_configuration,
outputs,
playback_mode,
tags,
tier,
time_shift_configuration
FROM awscc.mediatailor.channels
WHERE region = 'us-east-1' AND Identifier = '<ChannelName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>channels</code> in a region.
```sql
SELECT
region,
channel_name
FROM awscc.mediatailor.channels_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>channel</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.mediatailor.channels (
 ChannelName,
 Outputs,
 PlaybackMode,
 region
)
SELECT 
'{{ ChannelName }}',
 '{{ Outputs }}',
 '{{ PlaybackMode }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.mediatailor.channels (
 Audiences,
 ChannelName,
 FillerSlate,
 LogConfiguration,
 Outputs,
 PlaybackMode,
 Tags,
 Tier,
 TimeShiftConfiguration,
 region
)
SELECT 
 '{{ Audiences }}',
 '{{ ChannelName }}',
 '{{ FillerSlate }}',
 '{{ LogConfiguration }}',
 '{{ Outputs }}',
 '{{ PlaybackMode }}',
 '{{ Tags }}',
 '{{ Tier }}',
 '{{ TimeShiftConfiguration }}',
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
  - name: channel
    props:
      - name: Audiences
        value:
          - '{{ Audiences[0] }}'
      - name: ChannelName
        value: '{{ ChannelName }}'
      - name: FillerSlate
        value:
          SourceLocationName: '{{ SourceLocationName }}'
          VodSourceName: '{{ VodSourceName }}'
      - name: LogConfiguration
        value:
          LogTypes:
            - '{{ LogTypes[0] }}'
      - name: Outputs
        value:
          - DashPlaylistSettings:
              ManifestWindowSeconds: null
              MinBufferTimeSeconds: null
              MinUpdatePeriodSeconds: null
              SuggestedPresentationDelaySeconds: null
            HlsPlaylistSettings:
              ManifestWindowSeconds: null
              AdMarkupType:
                - '{{ AdMarkupType[0] }}'
            ManifestName: '{{ ManifestName }}'
            SourceGroup: '{{ SourceGroup }}'
      - name: PlaybackMode
        value: '{{ PlaybackMode }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Tier
        value: '{{ Tier }}'
      - name: TimeShiftConfiguration
        value:
          MaxTimeDelaySeconds: null

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.mediatailor.channels
SET PatchDocument = string('{{ {
    "Audiences": audiences,
    "FillerSlate": filler_slate,
    "LogConfiguration": log_configuration,
    "Outputs": outputs,
    "PlaybackMode": playback_mode,
    "Tags": tags,
    "TimeShiftConfiguration": time_shift_configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ChannelName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.mediatailor.channels
WHERE Identifier = '<ChannelName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>channels</code> resource, the following permissions are required:

### Create
```json
mediatailor:CreateChannel,
mediatailor:TagResource,
mediatailor:ConfigureLogsForChannel,
iam:CreateServiceLinkedRole,
mediatailor:DescribeChannel
```

### Read
```json
mediatailor:DescribeChannel
```

### Update
```json
mediatailor:UpdateChannel,
mediatailor:TagResource,
mediatailor:UntagResource,
iam:CreateServiceLinkedRole,
mediatailor:ConfigureLogsForChannel,
mediatailor:DescribeChannel
```

### Delete
```json
mediatailor:DeleteChannel,
mediatailor:DescribeChannel
```

### List
```json
mediatailor:ListChannels
```
