---
title: packaging_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - packaging_configurations
  - mediapackage
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

Creates, updates, deletes or gets a <code>packaging_configuration</code> resource or lists <code>packaging_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>packaging_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::MediaPackage::PackagingConfiguration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.mediapackage.packaging_configurations" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": "The ID of the PackagingConfiguration."
  },
  {
    "name": "packaging_group_id",
    "type": "string",
    "description": "The ID of a PackagingGroup."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The ARN of the PackagingConfiguration."
  },
  {
    "name": "cmaf_package",
    "type": "object",
    "description": "A CMAF packaging configuration.",
    "children": [
      {
        "name": "encryption",
        "type": "object",
        "description": "A CMAF encryption configuration.",
        "children": [
          {
            "name": "speke_key_provider",
            "type": "object",
            "description": "A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.",
            "children": [
              {
                "name": "encryption_contract_configuration",
                "type": "object",
                "description": "The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0."
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": "An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service."
              },
              {
                "name": "system_ids",
                "type": "array",
                "description": "The system IDs to include in key requests."
              },
              {
                "name": "url",
                "type": "string",
                "description": "The URL of the external key provider service."
              }
            ]
          }
        ]
      },
      {
        "name": "hls_manifests",
        "type": "array",
        "description": "A list of HLS manifest configurations.",
        "children": [
          {
            "name": "ad_markers",
            "type": "string",
            "description": "This setting controls how ad markers are included in the packaged OriginEndpoint. \"NONE\" will omit all SCTE-35 ad markers from the output. \"PASSTHROUGH\" causes the manifest to contain a copy of the SCTE-35 ad markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest. \"SCTE35&#95;ENHANCED\" generates ad markers and blackout tags based on SCTE-35 messages in the input source."
          },
          {
            "name": "include_iframe_only_stream",
            "type": "boolean",
            "description": "When enabled, an I-Frame only stream will be included in the output."
          },
          {
            "name": "manifest_name",
            "type": "string",
            "description": "An optional string to include in the name of the manifest."
          },
          {
            "name": "program_date_time_interval_seconds",
            "type": "integer",
            "description": "The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests. Additionally, when an interval is specified ID3Timed Metadata messages will be generated every 5 seconds using the ingest time of the content. If the interval is not specified, or set to 0, then no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no ID3Timed Metadata messages will be generated. Note that irrespective of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input, it will be passed through to HLS output."
          },
          {
            "name": "repeat_ext_xkey",
            "type": "boolean",
            "description": "When enabled, the EXT-X-KEY tag will be repeated in output manifests."
          },
          {
            "name": "stream_selection",
            "type": "object",
            "description": "A StreamSelection configuration.",
            "children": [
              {
                "name": "max_video_bits_per_second",
                "type": "integer",
                "description": "The maximum video bitrate (bps) to include in output."
              },
              {
                "name": "min_video_bits_per_second",
                "type": "integer",
                "description": "The minimum video bitrate (bps) to include in output."
              },
              {
                "name": "stream_order",
                "type": "string",
                "description": "A directive that determines the order of streams in the output."
              }
            ]
          }
        ]
      },
      {
        "name": "segment_duration_seconds",
        "type": "integer",
        "description": "Duration (in seconds) of each fragment. Actual fragments will be rounded to the nearest multiple of the source fragment duration."
      },
      {
        "name": "include_encoder_configuration_in_segments",
        "type": "boolean",
        "description": "When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. This lets you use different SPS/PPS/VPS settings for your assets during content playback."
      }
    ]
  },
  {
    "name": "dash_package",
    "type": "object",
    "description": "A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.",
    "children": [
      {
        "name": "dash_manifests",
        "type": "array",
        "description": "A list of DASH manifest configurations.",
        "children": [
          {
            "name": "manifest_layout",
            "type": "string",
            "description": "Determines the position of some tags in the Media Presentation Description (MPD). When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation. When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level."
          },
          {
            "name": "manifest_name",
            "type": "string",
            "description": "An optional string to include in the name of the manifest."
          },
          {
            "name": "min_buffer_time_seconds",
            "type": "integer",
            "description": "Minimum duration (in seconds) that a player will buffer media before starting the presentation."
          },
          {
            "name": "profile",
            "type": "string",
            "description": "The Dynamic Adaptive Streaming over HTTP (DASH) profile type. When set to \"HBBTV&#95;1&#95;5\", HbbTV 1.5 compliant output is enabled."
          },
          {
            "name": "scte_markers_source",
            "type": "string",
            "description": "The source of scte markers used. When set to SEGMENTS, the scte markers are sourced from the segments of the ingested content. When set to MANIFEST, the scte markers are sourced from the manifest of the ingested content."
          },
          {
            "name": "stream_selection",
            "type": "object",
            "description": "A StreamSelection configuration.",
            "children": [
              {
                "name": "max_video_bits_per_second",
                "type": "integer",
                "description": "The maximum video bitrate (bps) to include in output."
              },
              {
                "name": "min_video_bits_per_second",
                "type": "integer",
                "description": "The minimum video bitrate (bps) to include in output."
              },
              {
                "name": "stream_order",
                "type": "string",
                "description": "A directive that determines the order of streams in the output."
              }
            ]
          }
        ]
      },
      {
        "name": "encryption",
        "type": "object",
        "description": "A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.",
        "children": [
          {
            "name": "speke_key_provider",
            "type": "object",
            "description": "A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.",
            "children": [
              {
                "name": "encryption_contract_configuration",
                "type": "object",
                "description": "The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0."
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": "An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service."
              },
              {
                "name": "system_ids",
                "type": "array",
                "description": "The system IDs to include in key requests."
              },
              {
                "name": "url",
                "type": "string",
                "description": "The URL of the external key provider service."
              }
            ]
          }
        ]
      },
      {
        "name": "period_triggers",
        "type": "array",
        "description": "A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD) will be partitioned into multiple periods. If empty, the content will not be partitioned into more than one period. If the list contains \"ADS\", new periods will be created where the Asset contains SCTE-35 ad markers."
      },
      {
        "name": "segment_duration_seconds",
        "type": "integer",
        "description": "Duration (in seconds) of each fragment. Actual fragments will be rounded to the nearest multiple of the source fragment duration."
      },
      {
        "name": "segment_template_format",
        "type": "string",
        "description": "Determines the type of SegmentTemplate included in the Media Presentation Description (MPD). When set to NUMBER&#95;WITH&#95;TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs. When set to TIME&#95;WITH&#95;TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER&#95;WITH&#95;DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs."
      },
      {
        "name": "include_encoder_configuration_in_segments",
        "type": "boolean",
        "description": "When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. This lets you use different SPS/PPS/VPS settings for your assets during content playback."
      },
      {
        "name": "include_iframe_only_stream",
        "type": "boolean",
        "description": "When enabled, an I-Frame only stream will be included in the output."
      }
    ]
  },
  {
    "name": "hls_package",
    "type": "object",
    "description": "An HTTP Live Streaming (HLS) packaging configuration.",
    "children": [
      {
        "name": "encryption",
        "type": "object",
        "description": "An HTTP Live Streaming (HLS) encryption configuration.",
        "children": [
          {
            "name": "constant_initialization_vector",
            "type": "string",
            "description": "An HTTP Live Streaming (HLS) encryption configuration."
          },
          {
            "name": "encryption_method",
            "type": "string",
            "description": "The encryption method to use."
          },
          {
            "name": "speke_key_provider",
            "type": "object",
            "description": "A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.",
            "children": [
              {
                "name": "encryption_contract_configuration",
                "type": "object",
                "description": "The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0."
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": "An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service."
              },
              {
                "name": "system_ids",
                "type": "array",
                "description": "The system IDs to include in key requests."
              },
              {
                "name": "url",
                "type": "string",
                "description": "The URL of the external key provider service."
              }
            ]
          }
        ]
      },
      {
        "name": "hls_manifests",
        "type": "array",
        "description": "A list of HLS manifest configurations.",
        "children": [
          {
            "name": "ad_markers",
            "type": "string",
            "description": "This setting controls how ad markers are included in the packaged OriginEndpoint. \"NONE\" will omit all SCTE-35 ad markers from the output. \"PASSTHROUGH\" causes the manifest to contain a copy of the SCTE-35 ad markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest. \"SCTE35&#95;ENHANCED\" generates ad markers and blackout tags based on SCTE-35 messages in the input source."
          },
          {
            "name": "include_iframe_only_stream",
            "type": "boolean",
            "description": "When enabled, an I-Frame only stream will be included in the output."
          },
          {
            "name": "manifest_name",
            "type": "string",
            "description": "An optional string to include in the name of the manifest."
          },
          {
            "name": "program_date_time_interval_seconds",
            "type": "integer",
            "description": "The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests. Additionally, when an interval is specified ID3Timed Metadata messages will be generated every 5 seconds using the ingest time of the content. If the interval is not specified, or set to 0, then no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no ID3Timed Metadata messages will be generated. Note that irrespective of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input, it will be passed through to HLS output."
          },
          {
            "name": "repeat_ext_xkey",
            "type": "boolean",
            "description": "When enabled, the EXT-X-KEY tag will be repeated in output manifests."
          },
          {
            "name": "stream_selection",
            "type": "object",
            "description": "A StreamSelection configuration.",
            "children": [
              {
                "name": "max_video_bits_per_second",
                "type": "integer",
                "description": "The maximum video bitrate (bps) to include in output."
              },
              {
                "name": "min_video_bits_per_second",
                "type": "integer",
                "description": "The minimum video bitrate (bps) to include in output."
              },
              {
                "name": "stream_order",
                "type": "string",
                "description": "A directive that determines the order of streams in the output."
              }
            ]
          }
        ]
      },
      {
        "name": "include_dvb_subtitles",
        "type": "boolean",
        "description": "When enabled, MediaPackage passes through digital video broadcasting (DVB) subtitles into the output."
      },
      {
        "name": "segment_duration_seconds",
        "type": "integer",
        "description": "Duration (in seconds) of each fragment. Actual fragments will be rounded to the nearest multiple of the source fragment duration."
      },
      {
        "name": "use_audio_rendition_group",
        "type": "boolean",
        "description": "When enabled, audio streams will be placed in rendition groups in the output."
      }
    ]
  },
  {
    "name": "mss_package",
    "type": "object",
    "description": "A Microsoft Smooth Streaming (MSS) PackagingConfiguration.",
    "children": [
      {
        "name": "encryption",
        "type": "object",
        "description": "A CMAF encryption configuration.",
        "children": [
          {
            "name": "speke_key_provider",
            "type": "object",
            "description": "A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.",
            "children": [
              {
                "name": "encryption_contract_configuration",
                "type": "object",
                "description": "The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0."
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": "An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service."
              },
              {
                "name": "system_ids",
                "type": "array",
                "description": "The system IDs to include in key requests."
              },
              {
                "name": "url",
                "type": "string",
                "description": "The URL of the external key provider service."
              }
            ]
          }
        ]
      },
      {
        "name": "mss_manifests",
        "type": "array",
        "description": "A list of MSS manifest configurations.",
        "children": [
          {
            "name": "manifest_name",
            "type": "string",
            "description": "An optional string to include in the name of the manifest."
          },
          {
            "name": "stream_selection",
            "type": "object",
            "description": "A StreamSelection configuration.",
            "children": [
              {
                "name": "max_video_bits_per_second",
                "type": "integer",
                "description": "The maximum video bitrate (bps) to include in output."
              },
              {
                "name": "min_video_bits_per_second",
                "type": "integer",
                "description": "The minimum video bitrate (bps) to include in output."
              },
              {
                "name": "stream_order",
                "type": "string",
                "description": "A directive that determines the order of streams in the output."
              }
            ]
          }
        ]
      },
      {
        "name": "segment_duration_seconds",
        "type": "integer",
        "description": "Duration (in seconds) of each fragment. Actual fragments will be rounded to the nearest multiple of the source fragment duration."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A collection of tags associated with a resource",
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
    "description": "The ID of the PackagingConfiguration."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html"><code>AWS::MediaPackage::PackagingConfiguration</code></a>.

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
    <td><code>packaging_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="PackagingGroupId, Id, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>packaging_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>packaging_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>packaging_configurations</code></td>
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

Gets all properties from an individual <code>packaging_configuration</code>.
```sql
SELECT
region,
id,
packaging_group_id,
arn,
cmaf_package,
dash_package,
hls_package,
mss_package,
tags
FROM awscc.mediapackage.packaging_configurations
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>packaging_configurations</code> in a region.
```sql
SELECT
region,
id
FROM awscc.mediapackage.packaging_configurations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>packaging_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.mediapackage.packaging_configurations (
 Id,
 PackagingGroupId,
 region
)
SELECT 
'{{ Id }}',
 '{{ PackagingGroupId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.mediapackage.packaging_configurations (
 Id,
 PackagingGroupId,
 CmafPackage,
 DashPackage,
 HlsPackage,
 MssPackage,
 Tags,
 region
)
SELECT 
 '{{ Id }}',
 '{{ PackagingGroupId }}',
 '{{ CmafPackage }}',
 '{{ DashPackage }}',
 '{{ HlsPackage }}',
 '{{ MssPackage }}',
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
  - name: packaging_configuration
    props:
      - name: Id
        value: '{{ Id }}'
      - name: PackagingGroupId
        value: '{{ PackagingGroupId }}'
      - name: CmafPackage
        value:
          Encryption:
            SpekeKeyProvider:
              EncryptionContractConfiguration:
                PresetSpeke20Audio: '{{ PresetSpeke20Audio }}'
                PresetSpeke20Video: '{{ PresetSpeke20Video }}'
              RoleArn: '{{ RoleArn }}'
              SystemIds:
                - '{{ SystemIds[0] }}'
              Url: '{{ Url }}'
          HlsManifests:
            - AdMarkers: '{{ AdMarkers }}'
              IncludeIframeOnlyStream: '{{ IncludeIframeOnlyStream }}'
              ManifestName: '{{ ManifestName }}'
              ProgramDateTimeIntervalSeconds: '{{ ProgramDateTimeIntervalSeconds }}'
              RepeatExtXKey: '{{ RepeatExtXKey }}'
              StreamSelection:
                MaxVideoBitsPerSecond: '{{ MaxVideoBitsPerSecond }}'
                MinVideoBitsPerSecond: '{{ MinVideoBitsPerSecond }}'
                StreamOrder: '{{ StreamOrder }}'
          SegmentDurationSeconds: '{{ SegmentDurationSeconds }}'
          IncludeEncoderConfigurationInSegments: '{{ IncludeEncoderConfigurationInSegments }}'
      - name: DashPackage
        value:
          DashManifests:
            - ManifestLayout: '{{ ManifestLayout }}'
              ManifestName: null
              MinBufferTimeSeconds: '{{ MinBufferTimeSeconds }}'
              Profile: '{{ Profile }}'
              ScteMarkersSource: '{{ ScteMarkersSource }}'
              StreamSelection: null
          Encryption:
            SpekeKeyProvider: null
          PeriodTriggers:
            - '{{ PeriodTriggers[0] }}'
          SegmentDurationSeconds: null
          SegmentTemplateFormat: '{{ SegmentTemplateFormat }}'
          IncludeEncoderConfigurationInSegments: '{{ IncludeEncoderConfigurationInSegments }}'
          IncludeIframeOnlyStream: '{{ IncludeIframeOnlyStream }}'
      - name: HlsPackage
        value:
          Encryption:
            ConstantInitializationVector: '{{ ConstantInitializationVector }}'
            EncryptionMethod: '{{ EncryptionMethod }}'
            SpekeKeyProvider: null
          HlsManifests:
            - null
          IncludeDvbSubtitles: '{{ IncludeDvbSubtitles }}'
          SegmentDurationSeconds: null
          UseAudioRenditionGroup: '{{ UseAudioRenditionGroup }}'
      - name: MssPackage
        value:
          Encryption:
            SpekeKeyProvider: null
          MssManifests:
            - ManifestName: null
              StreamSelection: null
          SegmentDurationSeconds: null
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
DELETE FROM awscc.mediapackage.packaging_configurations
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>packaging_configurations</code> resource, the following permissions are required:

### Create
```json
mediapackage-vod:CreatePackagingConfiguration,
mediapackage-vod:DescribePackagingConfiguration,
mediapackage-vod:TagResource,
iam:PassRole
```

### Read
```json
mediapackage-vod:DescribePackagingConfiguration
```

### Delete
```json
mediapackage-vod:DescribePackagingConfiguration,
mediapackage-vod:DeletePackagingConfiguration
```

### List
```json
mediapackage-vod:ListPackagingConfigurations,
mediapackage-vod:DescribePackagingGroup
```
