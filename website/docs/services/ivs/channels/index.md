---
title: channels
hide_title: false
hide_table_of_contents: false
keywords:
  - channels
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

Creates, updates, deletes or gets a <code>channel</code> resource or lists <code>channels</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>channels</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::IVS::Channel</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ivs.channels" /></td></tr>
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
    "description": "Channel ARN is automatically generated on creation and assigned as the unique identifier."
  },
  {
    "name": "name",
    "type": "string",
    "description": "Channel"
  },
  {
    "name": "authorized",
    "type": "boolean",
    "description": "Whether the channel is authorized."
  },
  {
    "name": "insecure_ingest",
    "type": "boolean",
    "description": "Whether the channel allows insecure ingest."
  },
  {
    "name": "latency_mode",
    "type": "string",
    "description": "Channel latency mode."
  },
  {
    "name": "type",
    "type": "string",
    "description": "Channel type, which determines the allowable resolution and bitrate. If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of key-value pairs that contain metadata for the asset model.",
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
    "name": "playback_url",
    "type": "string",
    "description": "Channel Playback URL."
  },
  {
    "name": "ingest_endpoint",
    "type": "string",
    "description": "Channel ingest endpoint, part of the definition of an ingest server, used when you set up streaming software."
  },
  {
    "name": "recording_configuration_arn",
    "type": "string",
    "description": "Recording Configuration ARN. A value other than an empty string indicates that recording is enabled. Default: \"\" (recording is disabled)."
  },
  {
    "name": "preset",
    "type": "string",
    "description": "Optional transcode preset for the channel. This is selectable only for ADVANCED&#95;HD and ADVANCED&#95;SD channel types. For those channel types, the default preset is HIGHER&#95;BANDWIDTH&#95;DELIVERY. For other channel types (BASIC and STANDARD), preset is the empty string (\"\")."
  },
  {
    "name": "multitrack_input_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "enabled",
        "type": "boolean",
        "description": "Indicates whether multitrack input is enabled. Can be set to true only if channel type is STANDARD. Setting enabled to true with any other channel type will cause an exception. If true, then policy, maximumResolution, and containerFormat are required, and containerFormat must be set to FRAGMENTED&#95;MP4. Default: false."
      },
      {
        "name": "maximum_resolution",
        "type": "string",
        "description": "Maximum resolution for multitrack input. Required if enabled is true."
      },
      {
        "name": "policy",
        "type": "string",
        "description": "Indicates whether multitrack input is allowed or required. Required if enabled is true."
      }
    ]
  },
  {
    "name": "container_format",
    "type": "string",
    "description": "Indicates which content-packaging format is used (MPEG-TS or fMP4). If multitrackInputConfiguration is specified and enabled is true, then containerFormat is required and must be set to FRAGMENTED&#95;MP4. Otherwise, containerFormat may be set to TS or FRAGMENTED&#95;MP4. Default: TS."
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
    "description": "Channel ARN is automatically generated on creation and assigned as the unique identifier."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html"><code>AWS::IVS::Channel</code></a>.

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
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>channels</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>channels</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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

Gets all properties from an individual <code>channel</code>.
```sql
SELECT
region,
arn,
name,
authorized,
insecure_ingest,
latency_mode,
type,
tags,
playback_url,
ingest_endpoint,
recording_configuration_arn,
preset,
multitrack_input_configuration,
container_format
FROM awscc.ivs.channels
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>channels</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.ivs.channels_list_only
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
INSERT INTO awscc.ivs.channels (
 ,
 region
)
SELECT 
'{{  }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ivs.channels (
 Name,
 Authorized,
 InsecureIngest,
 LatencyMode,
 Type,
 Tags,
 RecordingConfigurationArn,
 Preset,
 MultitrackInputConfiguration,
 ContainerFormat,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Authorized }}',
 '{{ InsecureIngest }}',
 '{{ LatencyMode }}',
 '{{ Type }}',
 '{{ Tags }}',
 '{{ RecordingConfigurationArn }}',
 '{{ Preset }}',
 '{{ MultitrackInputConfiguration }}',
 '{{ ContainerFormat }}',
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
      - name: Name
        value: '{{ Name }}'
      - name: Authorized
        value: '{{ Authorized }}'
      - name: InsecureIngest
        value: '{{ InsecureIngest }}'
      - name: LatencyMode
        value: '{{ LatencyMode }}'
      - name: Type
        value: '{{ Type }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: RecordingConfigurationArn
        value: '{{ RecordingConfigurationArn }}'
      - name: Preset
        value: '{{ Preset }}'
      - name: MultitrackInputConfiguration
        value:
          Enabled: '{{ Enabled }}'
          MaximumResolution: '{{ MaximumResolution }}'
          Policy: '{{ Policy }}'
      - name: ContainerFormat
        value: '{{ ContainerFormat }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ivs.channels
SET data__PatchDocument = string('{{ {
    "Name": name,
    "Authorized": authorized,
    "InsecureIngest": insecure_ingest,
    "LatencyMode": latency_mode,
    "Type": type,
    "Tags": tags,
    "RecordingConfigurationArn": recording_configuration_arn,
    "Preset": preset,
    "MultitrackInputConfiguration": multitrack_input_configuration,
    "ContainerFormat": container_format
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ivs.channels
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>channels</code> resource, the following permissions are required:

### Create
```json
ivs:CreateChannel,
ivs:TagResource
```

### Read
```json
ivs:GetChannel,
ivs:ListTagsForResource
```

### Update
```json
ivs:GetChannel,
ivs:UpdateChannel,
ivs:TagResource,
ivs:UntagResource,
ivs:ListTagsForResource
```

### Delete
```json
ivs:DeleteChannel,
ivs:UntagResource
```

### List
```json
ivs:ListChannels,
ivs:ListTagsForResource
```
