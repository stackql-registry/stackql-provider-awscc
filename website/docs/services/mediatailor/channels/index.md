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
            "description": "<p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>"
          },
          {
            "name": "min_buffer_time_seconds",
            "type": "number",
            "description": "<p>Minimum amount of content (measured in seconds) that a player must keep available in the buffer. Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>"
          },
          {
            "name": "min_update_period_seconds",
            "type": "number",
            "description": "<p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest. Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>"
          },
          {
            "name": "suggested_presentation_delay_seconds",
            "type": "number",
            "description": "<p>Amount of time (in seconds) that the player should be from the live point at the end of the manifest. Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>"
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
            "description": "<p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>"
          },
          {
            "name": "ad_markup_type",
            "type": "array",
            "description": "<p>Determines the type of SCTE 35 tags to use in ad markup. Specify <code>DATERANGE</code> to use <code>DATERANGE</code> tags (for live or VOD content). Specify <code>SCTE35_ENHANCED</code> to use <code>EXT-X-CUE-OUT</code> and <code>EXT-X-CUE-IN</code> tags (for VOD content only).</p>"
          }
        ]
      },
      {
        "name": "manifest_name",
        "type": "string",
        "description": "<p>The name of the manifest for the channel. The name appears in the <code>PlaybackUrl</code>.</p>"
      },
      {
        "name": "source_group",
        "type": "string",
        "description": "<p>A string used to match which <code>HttpPackageConfiguration</code> is used for each <code>VodSource</code>.</p>"
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ channel_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>channels</code> in a region.
```sql
SELECT
  region,
  channel_name
FROM awscc.mediatailor.channels_list_only
WHERE
  region = '{{ region }}';
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
  '{{ channel_name }}',
  '{{ outputs }}',
  '{{ playback_mode }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
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
  '{{ audiences }}',
  '{{ channel_name }}',
  '{{ filler_slate }}',
  '{{ log_configuration }}',
  '{{ outputs }}',
  '{{ playback_mode }}',
  '{{ tags }}',
  '{{ tier }}',
  '{{ time_shift_configuration }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
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
      - name: audiences
        value:
          - '{{ audiences[0] }}'
      - name: channel_name
        value: '{{ channel_name }}'
      - name: filler_slate
        value:
          source_location_name: '{{ source_location_name }}'
          vod_source_name: '{{ vod_source_name }}'
      - name: log_configuration
        value:
          log_types:
            - '{{ log_types[0] }}'
      - name: outputs
        value:
          - dash_playlist_settings:
              manifest_window_seconds: null
              min_buffer_time_seconds: null
              min_update_period_seconds: null
              suggested_presentation_delay_seconds: null
            hls_playlist_settings:
              manifest_window_seconds: null
              ad_markup_type:
                - '{{ ad_markup_type[0] }}'
            manifest_name: '{{ manifest_name }}'
            source_group: '{{ source_group }}'
      - name: playback_mode
        value: '{{ playback_mode }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: tier
        value: '{{ tier }}'
      - name: time_shift_configuration
        value:
          max_time_delay_seconds: null
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>channel</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ channel_name }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.mediatailor.channels
WHERE
  Identifier = '{{ channel_name }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>channels</code> resource, the following permissions are required:

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
mediatailor:CreateChannel,
mediatailor:TagResource,
mediatailor:ConfigureLogsForChannel,
iam:CreateServiceLinkedRole,
mediatailor:DescribeChannel
```

</TabItem>
<TabItem value="read">

```json
mediatailor:DescribeChannel
```

</TabItem>
<TabItem value="update">

```json
mediatailor:UpdateChannel,
mediatailor:TagResource,
mediatailor:UntagResource,
iam:CreateServiceLinkedRole,
mediatailor:ConfigureLogsForChannel,
mediatailor:DescribeChannel
```

</TabItem>
<TabItem value="delete">

```json
mediatailor:DeleteChannel,
mediatailor:DescribeChannel
```

</TabItem>
<TabItem value="list">

```json
mediatailor:ListChannels
```

</TabItem>
</Tabs>