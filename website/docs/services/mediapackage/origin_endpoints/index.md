---
title: origin_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - origin_endpoints
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

Creates, updates, deletes or gets an <code>origin_endpoint</code> resource or lists <code>origin_endpoints</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>origin_endpoints</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::MediaPackage::OriginEndpoint</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.mediapackage.origin_endpoints" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) assigned to the OriginEndpoint."
  },
  {
    "name": "url",
    "type": "string",
    "description": "The URL of the packaged OriginEndpoint for consumption."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the OriginEndpoint."
  },
  {
    "name": "channel_id",
    "type": "string",
    "description": "The ID of the Channel the OriginEndpoint is associated with."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A short text description of the OriginEndpoint."
  },
  {
    "name": "whitelist",
    "type": "array",
    "description": "A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint."
  },
  {
    "name": "startover_window_seconds",
    "type": "integer",
    "description": "Maximum duration (seconds) of content to retain for startover playback. If not specified, startover playback will be disabled for the OriginEndpoint."
  },
  {
    "name": "time_delay_seconds",
    "type": "integer",
    "description": "Amount of delay (seconds) to enforce on the playback of live content. If not specified, there will be no time delay in effect for the OriginEndpoint."
  },
  {
    "name": "manifest_name",
    "type": "string",
    "description": "A short string appended to the end of the OriginEndpoint URL."
  },
  {
    "name": "origination",
    "type": "string",
    "description": "Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination"
  },
  {
    "name": "authorization",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "cdn_identifier_secret",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization."
      },
      {
        "name": "secrets_role_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager."
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html"><code>AWS::MediaPackage::OriginEndpoint</code></a>.

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
    <td><CopyableCode code="Id, ChannelId, region" /></td>
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

Gets all properties from an individual <code>origin_endpoint</code>.
```sql
SELECT
region,
arn,
url,
id,
channel_id,
description,
whitelist,
startover_window_seconds,
time_delay_seconds,
manifest_name,
origination,
authorization,
hls_package,
dash_package,
mss_package,
cmaf_package,
tags
FROM awscc.mediapackage.origin_endpoints
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>origin_endpoint</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.mediapackage.origin_endpoints (
 Id,
 ChannelId,
 region
)
SELECT 
'{{ Id }}',
 '{{ ChannelId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.mediapackage.origin_endpoints (
 Id,
 ChannelId,
 Description,
 Whitelist,
 StartoverWindowSeconds,
 TimeDelaySeconds,
 ManifestName,
 Origination,
 Authorization,
 HlsPackage,
 DashPackage,
 MssPackage,
 CmafPackage,
 Tags,
 region
)
SELECT 
 '{{ Id }}',
 '{{ ChannelId }}',
 '{{ Description }}',
 '{{ Whitelist }}',
 '{{ StartoverWindowSeconds }}',
 '{{ TimeDelaySeconds }}',
 '{{ ManifestName }}',
 '{{ Origination }}',
 '{{ Authorization }}',
 '{{ HlsPackage }}',
 '{{ DashPackage }}',
 '{{ MssPackage }}',
 '{{ CmafPackage }}',
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
  - name: origin_endpoint
    props:
      - name: Id
        value: '{{ Id }}'
      - name: ChannelId
        value: '{{ ChannelId }}'
      - name: Description
        value: '{{ Description }}'
      - name: Whitelist
        value:
          - '{{ Whitelist[0] }}'
      - name: StartoverWindowSeconds
        value: '{{ StartoverWindowSeconds }}'
      - name: TimeDelaySeconds
        value: '{{ TimeDelaySeconds }}'
      - name: ManifestName
        value: '{{ ManifestName }}'
      - name: Origination
        value: '{{ Origination }}'
      - name: Authorization
        value:
          CdnIdentifierSecret: '{{ CdnIdentifierSecret }}'
          SecretsRoleArn: '{{ SecretsRoleArn }}'
      - name: HlsPackage
        value:
          Encryption:
            ConstantInitializationVector: '{{ ConstantInitializationVector }}'
            EncryptionMethod: '{{ EncryptionMethod }}'
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
          IncludeDvbSubtitles: '{{ IncludeDvbSubtitles }}'
          SegmentDurationSeconds: '{{ SegmentDurationSeconds }}'
          UseAudioRenditionGroup: '{{ UseAudioRenditionGroup }}'
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
      - name: MssPackage
        value:
          Encryption:
            SpekeKeyProvider: null
          MssManifests:
            - ManifestName: null
              StreamSelection: null
          SegmentDurationSeconds: null
      - name: CmafPackage
        value:
          Encryption:
            SpekeKeyProvider: null
          HlsManifests:
            - null
          SegmentDurationSeconds: null
          IncludeEncoderConfigurationInSegments: '{{ IncludeEncoderConfigurationInSegments }}'
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
DELETE FROM awscc.mediapackage.origin_endpoints
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>origin_endpoints</code> resource, the following permissions are required:

### Create
```json
mediapackage:CreateOriginEndpoint,
mediapackage:DescribeOriginEndpoint,
mediapackage:DescribeChannel,
mediapackage:TagResource,
iam:PassRole,
acm:DescribeCertificate
```

### Read
```json
mediapackage:DescribeOriginEndpoint
```

### Update
```json
mediapackage:UpdateOriginEndpoint,
mediapackage:TagResource,
mediapackage:ListTagsForResource,
mediapackage:UntagResource,
mediapackage:DescribeOriginEndpoint,
iam:PassRole
```

### Delete
```json
mediapackage:DeleteOriginEndpoint
```

### List
```json
mediapackage:ListOriginEndpoints
```
