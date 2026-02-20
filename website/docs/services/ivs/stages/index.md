---
title: stages
hide_title: false
hide_table_of_contents: false
keywords:
  - stages
  - ivs
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

Creates, updates, deletes or gets a <code>stage</code> resource or lists <code>stages</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>stages</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::IVS::Stage.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ivs.stages" /></td></tr>
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
    "description": "Stage ARN is automatically generated on creation and assigned as the unique identifier."
  },
  {
    "name": "name",
    "type": "string",
    "description": "Stage name"
  },
  {
    "name": "auto_participant_recording_configuration",
    "type": "object",
    "description": "Configuration object for individual participant recording, to attach to the new stage.",
    "children": [
      {
        "name": "storage_configuration_arn",
        "type": "string",
        "description": "ARN of the StorageConfiguration resource to use for individual participant recording."
      },
      {
        "name": "media_types",
        "type": "array",
        "description": "Types of media to be recorded. Default: AUDIO&#95;VIDEO."
      },
      {
        "name": "hls_configuration",
        "type": "object",
        "description": "HLS configuration object for individual participant recording.",
        "children": [
          {
            "name": "participant_recording_hls_configuration",
            "type": "object",
            "description": "An object representing a configuration of participant HLS recordings for individual participant recording.",
            "children": [
              {
                "name": "target_segment_duration_seconds",
                "type": "integer",
                "description": "Defines the target duration for recorded segments generated when recording a stage participant. Segments may have durations longer than the specified value when needed to ensure each segment begins with a keyframe. Default: 6."
              }
            ]
          }
        ]
      },
      {
        "name": "recording_reconnect_window_seconds",
        "type": "integer",
        "description": "If a stage publisher disconnects and then reconnects within the specified interval, the multiple recordings will be considered a single recording and merged together. The default value is 0, which disables merging."
      },
      {
        "name": "thumbnail_configuration",
        "type": "object",
        "description": "A complex type that allows you to enable/disable the recording of thumbnails for individual participant recording and modify the interval at which thumbnails are generated for the live session.",
        "children": [
          {
            "name": "participant_thumbnail_configuration",
            "type": "object",
            "description": "An object representing a configuration of thumbnails for recorded video from an individual participant.",
            "children": [
              {
                "name": "recording_mode",
                "type": "string",
                "description": "Thumbnail recording mode. Default: DISABLED."
              },
              {
                "name": "storage",
                "type": "array",
                "description": "Indicates the format in which thumbnails are recorded. SEQUENTIAL records all generated thumbnails in a serial manner, to the media/thumbnails/high directory. LATEST saves the latest thumbnail in media/latest&#95;thumbnail/high/thumb.jpg and overwrites it at the interval specified by targetIntervalSeconds. You can enable both SEQUENTIAL and LATEST. Default: SEQUENTIAL."
              },
              {
                "name": "target_interval_seconds",
                "type": "integer",
                "description": "The targeted thumbnail-generation interval in seconds. This is configurable only if recordingMode is INTERVAL. Default: 60."
              }
            ]
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
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "active_session_id",
    "type": "string",
    "description": "ID of the active session within the stage."
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
    "description": "Stage ARN is automatically generated on creation and assigned as the unique identifier."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-stage.html"><code>AWS::IVS::Stage</code></a>.

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
    <td><code>stages</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>stages</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>stages</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>stages_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>stages</code></td>
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

Gets all properties from an individual <code>stage</code>.
```sql
SELECT
region,
arn,
name,
auto_participant_recording_configuration,
tags,
active_session_id
FROM awscc.ivs.stages
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>stages</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.ivs.stages_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>stage</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ivs.stages (
 Name,
 AutoParticipantRecordingConfiguration,
 Tags,
 region
)
SELECT 
'{{ Name }}',
 '{{ AutoParticipantRecordingConfiguration }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ivs.stages (
 Name,
 AutoParticipantRecordingConfiguration,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ AutoParticipantRecordingConfiguration }}',
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
  - name: stage
    props:
      - name: Name
        value: '{{ Name }}'
      - name: AutoParticipantRecordingConfiguration
        value:
          StorageConfigurationArn: '{{ StorageConfigurationArn }}'
          MediaTypes:
            - '{{ MediaTypes[0] }}'
          HlsConfiguration:
            ParticipantRecordingHlsConfiguration:
              TargetSegmentDurationSeconds: '{{ TargetSegmentDurationSeconds }}'
          RecordingReconnectWindowSeconds: '{{ RecordingReconnectWindowSeconds }}'
          ThumbnailConfiguration:
            ParticipantThumbnailConfiguration:
              RecordingMode: '{{ RecordingMode }}'
              Storage:
                - '{{ Storage[0] }}'
              TargetIntervalSeconds: '{{ TargetIntervalSeconds }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>stage</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ivs.stages
SET PatchDocument = string('{{ {
    "Name": name,
    "AutoParticipantRecordingConfiguration": auto_participant_recording_configuration,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ivs.stages
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>stages</code> resource, the following permissions are required:

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
ivs:CreateStage,
ivs:GetStage,
ivs:TagResource,
ivs:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
ivs:GetStage,
ivs:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
ivs:GetStage,
ivs:UpdateStage,
ivs:TagResource,
ivs:UntagResource,
ivs:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
ivs:DeleteStage,
ivs:UntagResource
```

</TabItem>
<TabItem value="list">

```json
ivs:ListStages,
ivs:ListTagsForResource
```

</TabItem>
</Tabs>