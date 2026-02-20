---
title: recording_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - recording_configurations
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

Creates, updates, deletes or gets a <code>recording_configuration</code> resource or lists <code>recording_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>recording_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::IVS::RecordingConfiguration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ivs.recording_configurations" /></td></tr>
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
    "description": "Recording Configuration ARN is automatically generated on creation and assigned as the unique identifier."
  },
  {
    "name": "name",
    "type": "string",
    "description": "Recording Configuration Name."
  },
  {
    "name": "state",
    "type": "string",
    "description": "Recording Configuration State."
  },
  {
    "name": "recording_reconnect_window_seconds",
    "type": "integer",
    "description": "Recording Reconnect Window Seconds. (0 means disabled)"
  },
  {
    "name": "destination_configuration",
    "type": "object",
    "description": "Recording Destination Configuration.",
    "children": [
      {
        "name": "s3",
        "type": "object",
        "description": "Recording S3 Destination Configuration.",
        "children": [
          {
            "name": "bucket_name",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
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
  },
  {
    "name": "rendition_configuration",
    "type": "object",
    "description": "Rendition Configuration describes which renditions should be recorded for a stream.",
    "children": [
      {
        "name": "rendition_selection",
        "type": "string",
        "description": "Resolution Selection indicates which set of renditions are recorded for a stream."
      },
      {
        "name": "renditions",
        "type": "array",
        "description": "Renditions indicates which renditions are recorded for a stream."
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
    "description": "Recording Configuration ARN is automatically generated on creation and assigned as the unique identifier."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html"><code>AWS::IVS::RecordingConfiguration</code></a>.

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
    <td><code>recording_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DestinationConfiguration, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>recording_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>recording_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>recording_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>recording_configurations</code></td>
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

Gets all properties from an individual <code>recording_configuration</code>.
```sql
SELECT
region,
arn,
name,
state,
recording_reconnect_window_seconds,
destination_configuration,
tags,
thumbnail_configuration,
rendition_configuration
FROM awscc.ivs.recording_configurations
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>recording_configurations</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.ivs.recording_configurations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>recording_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ivs.recording_configurations (
 DestinationConfiguration,
 region
)
SELECT 
'{{ DestinationConfiguration }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ivs.recording_configurations (
 Name,
 RecordingReconnectWindowSeconds,
 DestinationConfiguration,
 Tags,
 ThumbnailConfiguration,
 RenditionConfiguration,
 region
)
SELECT 
 '{{ Name }}',
 '{{ RecordingReconnectWindowSeconds }}',
 '{{ DestinationConfiguration }}',
 '{{ Tags }}',
 '{{ ThumbnailConfiguration }}',
 '{{ RenditionConfiguration }}',
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
  - name: recording_configuration
    props:
      - name: Name
        value: '{{ Name }}'
      - name: RecordingReconnectWindowSeconds
        value: '{{ RecordingReconnectWindowSeconds }}'
      - name: DestinationConfiguration
        value:
          S3:
            BucketName: '{{ BucketName }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: ThumbnailConfiguration
        value:
          ParticipantThumbnailConfiguration:
            RecordingMode: '{{ RecordingMode }}'
            Storage:
              - '{{ Storage[0] }}'
            TargetIntervalSeconds: '{{ TargetIntervalSeconds }}'
      - name: RenditionConfiguration
        value:
          RenditionSelection: '{{ RenditionSelection }}'
          Renditions:
            - '{{ Renditions[0] }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ivs.recording_configurations
SET data__PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ivs.recording_configurations
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>recording_configurations</code> resource, the following permissions are required:

### Create
```json
ivs:CreateRecordingConfiguration,
ivs:GetRecordingConfiguration,
ivs:TagResource,
iam:CreateServiceLinkedRole,
iam:PutRolePolicy,
iam:AttachRolePolicy,
s3:ListBucket,
s3:GetBucketLocation,
cloudformation:ListExports
```

### Read
```json
ivs:GetRecordingConfiguration,
s3:GetBucketLocation,
ivs:ListTagsForResource
```

### Update
```json
ivs:GetRecordingConfiguration,
sts:AssumeRole,
iam:CreateServiceLinkedRole,
iam:PutRolePolicy,
iam:AttachRolePolicy,
s3:ListBucket,
ivs:TagResource,
ivs:UntagResource,
ivs:ListTagsForResource
```

### Delete
```json
ivs:DeleteRecordingConfiguration,
ivs:UntagResource,
iam:CreateServiceLinkedRole
```

### List
```json
ivs:ListRecordingConfigurations,
s3:GetBucketLocation,
ivs:ListTagsForResource
```
