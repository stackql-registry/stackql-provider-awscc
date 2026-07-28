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

import CodeBlock from '@theme/CodeBlock';
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
    "description": "CDN Authorization credentials",
    "children": [
      {
        "name": "secrets_role_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager."
      },
      {
        "name": "cdn_identifier_secret",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) for the secret in Secrets Manager that your Content Distribution Network (CDN) uses for authorization to access your endpoint."
      }
    ]
  },
  {
    "name": "hls_package",
    "type": "object",
    "description": "An HTTP Live Streaming (HLS) packaging configuration.",
    "children": [
      {
        "name": "segment_duration_seconds",
        "type": "integer",
        "description": "Duration (in seconds) of each fragment. Actual fragments will be rounded to the nearest multiple of the source fragment duration."
      },
      {
        "name": "playlist_window_seconds",
        "type": "integer",
        "description": "Time window (in seconds) contained in each parent manifest."
      },
      {
        "name": "playlist_type",
        "type": "string",
        "description": "The HTTP Live Streaming (HLS) playlist type. When either \"EVENT\" or \"VOD\" is specified, a corresponding EXT-X-PLAYLIST-TYPE entry will be included in the media playlist."
      },
      {
        "name": "ad_markers",
        "type": "string",
        "description": "This setting controls how ad markers are included in the packaged OriginEndpoint. \"NONE\" will omit all SCTE-35 ad markers from the output. \"PASSTHROUGH\" causes the manifest to contain a copy of the SCTE-35 ad markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest. \"SCTE35_ENHANCED\" generates ad markers and blackout tags based on SCTE-35 messages in the input source. \"DATERANGE\" inserts EXT-X-DATERANGE tags to signal ad and program transition events in HLS and CMAF manifests. For this option, you must set a programDateTimeIntervalSeconds value that is greater than 0."
      },
      {
        "name": "ad_triggers",
        "type": "array",
        "description": "A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no ad markers are output.  Specify multiple items to create ad markers for all of the included message types."
      },
      {
        "name": "ads_on_delivery_restrictions",
        "type": "string",
        "description": "This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to determine whether a message signals an ad.  Choosing \"NONE\" means no SCTE-35 messages become ads.  Choosing \"RESTRICTED\" means SCTE-35 messages of the types specified in AdTriggers that contain delivery restrictions will be treated as ads.  Choosing \"UNRESTRICTED\" means SCTE-35 messages of the types specified in AdTriggers that do not contain delivery restrictions will be treated as ads.  Choosing \"BOTH\" means all SCTE-35 messages of the types specified in AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags and are always treated as ads if specified in AdTriggers."
      },
      {
        "name": "program_date_time_interval_seconds",
        "type": "integer",
        "description": "The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests. Additionally, when an interval is specified ID3Timed Metadata messages will be generated every 5 seconds using the ingest time of the content. If the interval is not specified, or set to 0, then no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no ID3Timed Metadata messages will be generated. Note that irrespective of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input, it will be passed through to HLS output."
      },
      {
        "name": "include_iframe_only_stream",
        "type": "boolean",
        "description": "When enabled, an I-Frame only stream will be included in the output."
      },
      {
        "name": "use_audio_rendition_group",
        "type": "boolean",
        "description": "When enabled, audio streams will be placed in rendition groups in the output."
      },
      {
        "name": "include_dvb_subtitles",
        "type": "boolean",
        "description": "When enabled, MediaPackage passes through digital video broadcasting (DVB) subtitles into the output."
      },
      {
        "name": "encryption",
        "type": "object",
        "description": "An HTTP Live Streaming (HLS) encryption configuration.",
        "children": [
          {
            "name": "encryption_method",
            "type": "string",
            "description": "The encryption method to use."
          },
          {
            "name": "constant_initialization_vector",
            "type": "string",
            "description": "A constant initialization vector for encryption (optional). When not specified the initialization vector will be periodically rotated."
          },
          {
            "name": "key_rotation_interval_seconds",
            "type": "integer",
            "description": "Interval (in seconds) between each encryption key rotation."
          },
          {
            "name": "repeat_ext_xkey",
            "type": "boolean",
            "description": "When enabled, the EXT-X-KEY tag will be repeated in output manifests."
          },
          {
            "name": "speke_key_provider",
            "type": "object",
            "description": "A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.",
            "children": [
              {
                "name": "resource_id",
                "type": "string",
                "description": "The resource ID to include in key requests."
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
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": "An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service."
              },
              {
                "name": "certificate_arn",
                "type": "string",
                "description": "An Amazon Resource Name (ARN) of a Certificate Manager certificate that MediaPackage will use for enforcing secure end-to-end data transfer with the key provider service."
              },
              {
                "name": "encryption_contract_configuration",
                "type": "object",
                "description": "The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0."
              }
            ]
          }
        ]
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
    "name": "dash_package",
    "type": "object",
    "description": "A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.",
    "children": [
      {
        "name": "segment_duration_seconds",
        "type": "integer",
        "description": "Duration (in seconds) of each segment. Actual segments will be rounded to the nearest multiple of the source segment duration."
      },
      {
        "name": "manifest_window_seconds",
        "type": "integer",
        "description": "Time window (in seconds) contained in each manifest."
      },
      {
        "name": "profile",
        "type": "string",
        "description": "The Dynamic Adaptive Streaming over HTTP (DASH) profile type.  When set to \"HBBTV_1_5\", HbbTV 1.5 compliant output is enabled."
      },
      {
        "name": "min_update_period_seconds",
        "type": "integer",
        "description": "Minimum duration (in seconds) between potential changes to the Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD)."
      },
      {
        "name": "min_buffer_time_seconds",
        "type": "integer",
        "description": "Minimum duration (in seconds) that a player will buffer media before starting the presentation."
      },
      {
        "name": "suggested_presentation_delay_seconds",
        "type": "integer",
        "description": "Duration (in seconds) to delay live content before presentation."
      },
      {
        "name": "period_triggers",
        "type": "array",
        "description": "A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD) will be partitioned into multiple periods. If empty, the content will not be partitioned into more than one period. If the list contains \"ADS\", new periods will be created where the Channel source contains SCTE-35 ad markers."
      },
      {
        "name": "include_iframe_only_stream",
        "type": "boolean",
        "description": "When enabled, an I-Frame only stream will be included in the output."
      },
      {
        "name": "manifest_layout",
        "type": "string",
        "description": "Determines the position of some tags in the Media Presentation Description (MPD).  When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation.  When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level."
      },
      {
        "name": "segment_template_format",
        "type": "string",
        "description": "Determines the type of SegmentTemplate included in the Media Presentation Description (MPD).  When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs.  When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs."
      },
      {
        "name": "ad_triggers",
        "type": "array",
        "description": "A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no ad markers are output.  Specify multiple items to create ad markers for all of the included message types."
      },
      {
        "name": "ads_on_delivery_restrictions",
        "type": "string",
        "description": "This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to determine whether a message signals an ad.  Choosing \"NONE\" means no SCTE-35 messages become ads.  Choosing \"RESTRICTED\" means SCTE-35 messages of the types specified in AdTriggers that contain delivery restrictions will be treated as ads.  Choosing \"UNRESTRICTED\" means SCTE-35 messages of the types specified in AdTriggers that do not contain delivery restrictions will be treated as ads.  Choosing \"BOTH\" means all SCTE-35 messages of the types specified in AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags and are always treated as ads if specified in AdTriggers."
      },
      {
        "name": "encryption",
        "type": "object",
        "description": "A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.",
        "children": [
          {
            "name": "key_rotation_interval_seconds",
            "type": "integer",
            "description": "Time (in seconds) between each encryption key rotation."
          },
          {
            "name": "speke_key_provider",
            "type": "object",
            "description": "A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.",
            "children": [
              {
                "name": "resource_id",
                "type": "string",
                "description": "The resource ID to include in key requests."
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
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": "An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service."
              },
              {
                "name": "certificate_arn",
                "type": "string",
                "description": "An Amazon Resource Name (ARN) of a Certificate Manager certificate that MediaPackage will use for enforcing secure end-to-end data transfer with the key provider service."
              },
              {
                "name": "encryption_contract_configuration",
                "type": "object",
                "description": "The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0."
              }
            ]
          }
        ]
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
      },
      {
        "name": "utc_timing",
        "type": "string",
        "description": "Determines the type of UTCTiming included in the Media Presentation Description (MPD)"
      },
      {
        "name": "utc_timing_uri",
        "type": "string",
        "description": "Specifies the value attribute of the UTCTiming field when utcTiming is set to HTTP-ISO, HTTP-HEAD or HTTP-XSDATE"
      }
    ]
  },
  {
    "name": "mss_package",
    "type": "object",
    "description": "A Microsoft Smooth Streaming (MSS) packaging configuration.",
    "children": [
      {
        "name": "manifest_window_seconds",
        "type": "integer",
        "description": "The time window (in seconds) contained in each manifest."
      },
      {
        "name": "segment_duration_seconds",
        "type": "integer",
        "description": "The duration (in seconds) of each segment."
      },
      {
        "name": "encryption",
        "type": "object",
        "description": "A Microsoft Smooth Streaming (MSS) encryption configuration.",
        "children": [
          {
            "name": "speke_key_provider",
            "type": "object",
            "description": "A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.",
            "children": [
              {
                "name": "resource_id",
                "type": "string",
                "description": "The resource ID to include in key requests."
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
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": "An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service."
              },
              {
                "name": "certificate_arn",
                "type": "string",
                "description": "An Amazon Resource Name (ARN) of a Certificate Manager certificate that MediaPackage will use for enforcing secure end-to-end data transfer with the key provider service."
              },
              {
                "name": "encryption_contract_configuration",
                "type": "object",
                "description": "The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0."
              }
            ]
          }
        ]
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
    "name": "cmaf_package",
    "type": "object",
    "description": "A Common Media Application Format (CMAF) packaging configuration.",
    "children": [
      {
        "name": "segment_duration_seconds",
        "type": "integer",
        "description": "Duration (in seconds) of each segment. Actual segments will be rounded to the nearest multiple of the source segment duration."
      },
      {
        "name": "segment_prefix",
        "type": "string",
        "description": "An optional custom string that is prepended to the name of each segment. If not specified, it defaults to the ChannelId."
      },
      {
        "name": "encryption",
        "type": "object",
        "description": "A Common Media Application Format (CMAF) encryption configuration.",
        "children": [
          {
            "name": "key_rotation_interval_seconds",
            "type": "integer",
            "description": "Time (in seconds) between each encryption key rotation."
          },
          {
            "name": "speke_key_provider",
            "type": "object",
            "description": "A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.",
            "children": [
              {
                "name": "resource_id",
                "type": "string",
                "description": "The resource ID to include in key requests."
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
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": "An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service."
              },
              {
                "name": "certificate_arn",
                "type": "string",
                "description": "An Amazon Resource Name (ARN) of a Certificate Manager certificate that MediaPackage will use for enforcing secure end-to-end data transfer with the key provider service."
              },
              {
                "name": "encryption_contract_configuration",
                "type": "object",
                "description": "The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0."
              }
            ]
          },
          {
            "name": "constant_initialization_vector",
            "type": "string",
            "description": "An optional 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting blocks. If you don't specify a value, then MediaPackage creates the constant initialization vector (IV)."
          },
          {
            "name": "encryption_method",
            "type": "string",
            "description": "The encryption method used"
          }
        ]
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
      },
      {
        "name": "hls_manifests",
        "type": "array",
        "description": "A list of HLS manifest configurations",
        "children": [
          {
            "name": "id",
            "type": "string",
            "description": "The ID of the manifest. The ID must be unique within the OriginEndpoint and it cannot be changed after it is created."
          },
          {
            "name": "manifest_name",
            "type": "string",
            "description": "An optional short string appended to the end of the OriginEndpoint URL. If not specified, defaults to the manifestName for the OriginEndpoint."
          },
          {
            "name": "url",
            "type": "string",
            "description": "The URL of the packaged OriginEndpoint for consumption."
          },
          {
            "name": "playlist_window_seconds",
            "type": "integer",
            "description": "Time window (in seconds) contained in each parent manifest."
          },
          {
            "name": "playlist_type",
            "type": "string",
            "description": "The HTTP Live Streaming (HLS) playlist type. When either \"EVENT\" or \"VOD\" is specified, a corresponding EXT-X-PLAYLIST-TYPE entry will be included in the media playlist."
          },
          {
            "name": "ad_markers",
            "type": "string",
            "description": "This setting controls how ad markers are included in the packaged OriginEndpoint. \"NONE\" will omit all SCTE-35 ad markers from the output. \"PASSTHROUGH\" causes the manifest to contain a copy of the SCTE-35 ad markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest. \"SCTE35_ENHANCED\" generates ad markers and blackout tags based on SCTE-35 messages in the input source. \"DATERANGE\" inserts EXT-X-DATERANGE tags to signal ad and program transition events in HLS and CMAF manifests. For this option, you must set a programDateTimeIntervalSeconds value that is greater than 0."
          },
          {
            "name": "program_date_time_interval_seconds",
            "type": "integer",
            "description": "The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests. Additionally, when an interval is specified ID3Timed Metadata messages will be generated every 5 seconds using the ingest time of the content. If the interval is not specified, or set to 0, then no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no ID3Timed Metadata messages will be generated. Note that irrespective of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input, it will be passed through to HLS output."
          },
          {
            "name": "include_iframe_only_stream",
            "type": "boolean",
            "description": "When enabled, an I-Frame only stream will be included in the output."
          },
          {
            "name": "ad_triggers",
            "type": "array",
            "description": "A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no ad markers are output.  Specify multiple items to create ad markers for all of the included message types."
          },
          {
            "name": "ads_on_delivery_restrictions",
            "type": "string",
            "description": "This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to determine whether a message signals an ad.  Choosing \"NONE\" means no SCTE-35 messages become ads.  Choosing \"RESTRICTED\" means SCTE-35 messages of the types specified in AdTriggers that contain delivery restrictions will be treated as ads.  Choosing \"UNRESTRICTED\" means SCTE-35 messages of the types specified in AdTriggers that do not contain delivery restrictions will be treated as ads.  Choosing \"BOTH\" means all SCTE-35 messages of the types specified in AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags and are always treated as ads if specified in AdTriggers."
          }
        ]
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
    "description": "The ID of the OriginEndpoint."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html"><code>AWS::MediaPackage::OriginEndpoint</code></a>.

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
    <td><code>origin_endpoints</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Id, ChannelId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>origin_endpoints</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>origin_endpoints</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>origin_endpoints_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>origin_endpoints</code></td>
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>origin_endpoints</code> in a region.
```sql
SELECT
  region,
  id
FROM awscc.mediapackage.origin_endpoints_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

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
  '{{ id }}',
  '{{ channel_id }}',
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
  '{{ id }}',
  '{{ channel_id }}',
  '{{ description }}',
  '{{ whitelist }}',
  '{{ startover_window_seconds }}',
  '{{ time_delay_seconds }}',
  '{{ manifest_name }}',
  '{{ origination }}',
  '{{ authorization }}',
  '{{ hls_package }}',
  '{{ dash_package }}',
  '{{ mss_package }}',
  '{{ cmaf_package }}',
  '{{ tags }}',
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

<CodeBlock language="yaml">{`version: 1
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
      - name: id
        value: '{{ id }}'
      - name: channel_id
        value: '{{ channel_id }}'
      - name: description
        value: '{{ description }}'
      - name: whitelist
        value:
          - '{{ whitelist[0] }}'
      - name: startover_window_seconds
        value: '{{ startover_window_seconds }}'
      - name: time_delay_seconds
        value: '{{ time_delay_seconds }}'
      - name: manifest_name
        value: '{{ manifest_name }}'
      - name: origination
        value: '{{ origination }}'
      - name: authorization
        value:
          secrets_role_arn: '{{ secrets_role_arn }}'
          cdn_identifier_secret: '{{ cdn_identifier_secret }}'
      - name: hls_package
        value:
          segment_duration_seconds: '{{ segment_duration_seconds }}'
          playlist_window_seconds: '{{ playlist_window_seconds }}'
          playlist_type: '{{ playlist_type }}'
          ad_markers: '{{ ad_markers }}'
          ad_triggers:
            - '{{ ad_triggers[0] }}'
          ads_on_delivery_restrictions: '{{ ads_on_delivery_restrictions }}'
          program_date_time_interval_seconds: '{{ program_date_time_interval_seconds }}'
          include_iframe_only_stream: '{{ include_iframe_only_stream }}'
          use_audio_rendition_group: '{{ use_audio_rendition_group }}'
          include_dvb_subtitles: '{{ include_dvb_subtitles }}'
          encryption:
            encryption_method: '{{ encryption_method }}'
            constant_initialization_vector: '{{ constant_initialization_vector }}'
            key_rotation_interval_seconds: '{{ key_rotation_interval_seconds }}'
            repeat_ext_xkey: '{{ repeat_ext_xkey }}'
            speke_key_provider:
              resource_id: '{{ resource_id }}'
              system_ids:
                - '{{ system_ids[0] }}'
              url: '{{ url }}'
              role_arn: '{{ role_arn }}'
              certificate_arn: '{{ certificate_arn }}'
              encryption_contract_configuration:
                preset_speke20_audio: '{{ preset_speke20_audio }}'
                preset_speke20_video: '{{ preset_speke20_video }}'
          stream_selection:
            max_video_bits_per_second: '{{ max_video_bits_per_second }}'
            min_video_bits_per_second: '{{ min_video_bits_per_second }}'
            stream_order: '{{ stream_order }}'
      - name: dash_package
        value:
          segment_duration_seconds: '{{ segment_duration_seconds }}'
          manifest_window_seconds: '{{ manifest_window_seconds }}'
          profile: '{{ profile }}'
          min_update_period_seconds: '{{ min_update_period_seconds }}'
          min_buffer_time_seconds: '{{ min_buffer_time_seconds }}'
          suggested_presentation_delay_seconds: '{{ suggested_presentation_delay_seconds }}'
          period_triggers:
            - '{{ period_triggers[0] }}'
          include_iframe_only_stream: '{{ include_iframe_only_stream }}'
          manifest_layout: '{{ manifest_layout }}'
          segment_template_format: '{{ segment_template_format }}'
          ad_triggers:
            - '{{ ad_triggers[0] }}'
          ads_on_delivery_restrictions: null
          encryption:
            key_rotation_interval_seconds: '{{ key_rotation_interval_seconds }}'
            speke_key_provider: null
          stream_selection: null
          utc_timing: '{{ utc_timing }}'
          utc_timing_uri: '{{ utc_timing_uri }}'
      - name: mss_package
        value:
          manifest_window_seconds: '{{ manifest_window_seconds }}'
          segment_duration_seconds: '{{ segment_duration_seconds }}'
          encryption:
            speke_key_provider: null
          stream_selection: null
      - name: cmaf_package
        value:
          segment_duration_seconds: '{{ segment_duration_seconds }}'
          segment_prefix: '{{ segment_prefix }}'
          encryption:
            key_rotation_interval_seconds: '{{ key_rotation_interval_seconds }}'
            speke_key_provider: null
            constant_initialization_vector: '{{ constant_initialization_vector }}'
            encryption_method: '{{ encryption_method }}'
          stream_selection: null
          hls_manifests:
            - id: '{{ id }}'
              manifest_name: '{{ manifest_name }}'
              url: '{{ url }}'
              playlist_window_seconds: '{{ playlist_window_seconds }}'
              playlist_type: '{{ playlist_type }}'
              ad_markers: '{{ ad_markers }}'
              program_date_time_interval_seconds: '{{ program_date_time_interval_seconds }}'
              include_iframe_only_stream: '{{ include_iframe_only_stream }}'
              ad_triggers:
                - '{{ ad_triggers[0] }}'
              ads_on_delivery_restrictions: null
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>origin_endpoint</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.mediapackage.origin_endpoints
SET PatchDocument = string('{{ {
    "ChannelId": channel_id,
    "Description": description,
    "Whitelist": whitelist,
    "StartoverWindowSeconds": startover_window_seconds,
    "TimeDelaySeconds": time_delay_seconds,
    "ManifestName": manifest_name,
    "Origination": origination,
    "Authorization": authorization,
    "HlsPackage": hls_package,
    "DashPackage": dash_package,
    "MssPackage": mss_package,
    "CmafPackage": cmaf_package,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id }}'
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
DELETE FROM awscc.mediapackage.origin_endpoints
WHERE
  Identifier = '{{ id }}' AND
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

To operate on the <code>origin_endpoints</code> resource, the following permissions are required:

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
mediapackage:CreateOriginEndpoint,
mediapackage:DescribeOriginEndpoint,
mediapackage:DescribeChannel,
mediapackage:TagResource,
iam:PassRole,
acm:DescribeCertificate
```

</TabItem>
<TabItem value="read">

```json
mediapackage:DescribeOriginEndpoint
```

</TabItem>
<TabItem value="update">

```json
mediapackage:UpdateOriginEndpoint,
mediapackage:TagResource,
mediapackage:ListTagsForResource,
mediapackage:UntagResource,
mediapackage:DescribeOriginEndpoint,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
mediapackage:DeleteOriginEndpoint
```

</TabItem>
<TabItem value="list">

```json
mediapackage:ListOriginEndpoints
```

</TabItem>
</Tabs>