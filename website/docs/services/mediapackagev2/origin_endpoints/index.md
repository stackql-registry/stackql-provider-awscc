---
title: origin_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - origin_endpoints
  - mediapackagev2
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
<tr><td><b>Description</b></td><td><p>Represents an origin endpoint that is associated with a channel, offering a dynamically repackaged version of its content through various streaming media protocols. The content can be efficiently disseminated to end-users via a Content Delivery Network (CDN), like Amazon CloudFront.</p></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.mediapackagev2.origin_endpoints" /></td></tr>
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
    "description": "<p>The Amazon Resource Name (ARN) associated with the resource.</p>"
  },
  {
    "name": "channel_group_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "channel_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "container_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "<p>The date and time the origin endpoint was created.</p>"
  },
  {
    "name": "dash_manifests",
    "type": "array",
    "description": "<p>A DASH manifest configuration.</p>",
    "children": [
      {
        "name": "manifest_name",
        "type": "string",
        "description": "<p>A short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. </p>"
      },
      {
        "name": "manifest_window_seconds",
        "type": "integer",
        "description": "<p>The total duration (in seconds) of the manifest's content.</p>"
      },
      {
        "name": "filter_configuration",
        "type": "object",
        "description": "<p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. </p>",
        "children": [
          {
            "name": "manifest_filter",
            "type": "string",
            "description": "<p>Optionally specify one or more manifest filters for all of your manifest egress requests. When you include a manifest filter, note that you cannot use an identical manifest filter query parameter for this manifest's endpoint URL.</p>"
          },
          {
            "name": "start",
            "type": "string",
            "description": "<p>Optionally specify the start time for all of your manifest egress requests. When you include start time, note that you cannot use start time query parameters for this manifest's endpoint URL.</p>"
          },
          {
            "name": "end",
            "type": "string",
            "description": "<p>Optionally specify the end time for all of your manifest egress requests. When you include end time, note that you cannot use end time query parameters for this manifest's endpoint URL.</p>"
          },
          {
            "name": "time_delay_seconds",
            "type": "integer",
            "description": "<p>Optionally specify the time delay for all of your manifest egress requests. Enter a value that is smaller than your endpoint's startover window. When you include time delay, note that you cannot use time delay query parameters for this manifest's endpoint URL.</p>"
          },
          {
            "name": "clip_start_time",
            "type": "string",
            "description": "<p>Optionally specify the clip start time for all of your manifest egress requests. When you include clip start time, note that you cannot use clip start time query parameters for this manifest's endpoint URL.</p>"
          }
        ]
      },
      {
        "name": "min_update_period_seconds",
        "type": "integer",
        "description": "<p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest.</p>"
      },
      {
        "name": "min_buffer_time_seconds",
        "type": "integer",
        "description": "<p>Minimum amount of content (in seconds) that a player must keep available in the buffer.</p>"
      },
      {
        "name": "suggested_presentation_delay_seconds",
        "type": "integer",
        "description": "<p>The amount of time (in seconds) that the player should be from the end of the manifest.</p>"
      },
      {
        "name": "segment_template_format",
        "type": "string",
        "description": ""
      },
      {
        "name": "period_triggers",
        "type": "array",
        "description": "<p>A list of triggers that controls when AWS Elemental MediaPackage separates the MPEG-DASH manifest into multiple periods. Leave this value empty to indicate that the manifest is contained all in one period. For more information about periods in the DASH manifest, see <a href=\"https://docs.aws.amazon.com/mediapackage/latest/userguide/multi-period.html\">Multi-period DASH in AWS Elemental MediaPackage</a>.</p>"
      },
      {
        "name": "scte_dash",
        "type": "object",
        "description": "<p>The SCTE configuration.</p>",
        "children": [
          {
            "name": "ad_marker_dash",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "drm_signaling",
        "type": "string",
        "description": ""
      },
      {
        "name": "utc_timing",
        "type": "object",
        "description": "<p>Determines the type of UTC timing included in the DASH Media Presentation Description (MPD).</p>",
        "children": [
          {
            "name": "timing_mode",
            "type": "string",
            "description": ""
          },
          {
            "name": "timing_source",
            "type": "string",
            "description": "<p>The the method that the player uses to synchronize to coordinated universal time (UTC) wall clock time.</p>"
          }
        ]
      },
      {
        "name": "profiles",
        "type": "array",
        "description": "<p>The profile that the output is compliant with.</p>"
      },
      {
        "name": "base_urls",
        "type": "array",
        "description": "<p>The base URL to use for retrieving segments.</p>",
        "children": [
          {
            "name": "url",
            "type": "string",
            "description": "<p>A source location for segments.</p>"
          },
          {
            "name": "service_location",
            "type": "string",
            "description": "<p>The name of the source location.</p>"
          },
          {
            "name": "dvb_priority",
            "type": "integer",
            "description": "<p>For use with DVB-DASH profiles only. The priority of this location for servings segments. The lower the number, the higher the priority.</p>"
          },
          {
            "name": "dvb_weight",
            "type": "integer",
            "description": "<p>For use with DVB-DASH profiles only. The weighting for source locations that have the same priority. </p>"
          }
        ]
      },
      {
        "name": "program_information",
        "type": "object",
        "description": "<p>Details about the content that you want MediaPackage to pass through in the manifest to the playback device.</p>",
        "children": [
          {
            "name": "title",
            "type": "string",
            "description": "<p>The title for the manifest.</p>"
          },
          {
            "name": "source",
            "type": "string",
            "description": "<p>Information about the content provider.</p>"
          },
          {
            "name": "copyright",
            "type": "string",
            "description": "<p>A copyright statement about the content.</p>"
          },
          {
            "name": "language_code",
            "type": "string",
            "description": "<p>The language code for this manifest.</p>"
          },
          {
            "name": "more_information_url",
            "type": "string",
            "description": "<p>An absolute URL that contains more information about this content.</p>"
          }
        ]
      },
      {
        "name": "dvb_settings",
        "type": "object",
        "description": "<p>For endpoints that use the DVB-DASH profile only. The font download and error reporting information that you want MediaPackage to pass through to the manifest.</p>",
        "children": [
          {
            "name": "font_download",
            "type": "object",
            "description": "<p>For use with DVB-DASH profiles only. The settings for font downloads that you want Elemental MediaPackage to pass through to the manifest.</p>",
            "children": [
              {
                "name": "url",
                "type": "string",
                "description": "<p>The URL for downloading fonts for subtitles.</p>"
              },
              {
                "name": "mime_type",
                "type": "string",
                "description": "<p>The &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; of the resource that's at the font download URL.</p> <p>For information about font MIME types, see the <a href=\"https://dvb.org/wp-content/uploads/2021/06/A168r4&#95;MPEG-DASH-Profile-for-Transport-of-ISO-BMFF-Based-DVB-Services&#95;Draft-ts&#95;103-285-v140&#95;November&#95;2021.pdf\">MPEG-DASH Profile for Transport of ISO BMFF Based DVB Services over IP Based Networks</a> document. </p>"
              },
              {
                "name": "font_family",
                "type": "string",
                "description": "<p>The &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; name for subtitles, as described in <a href=\"https://tech.ebu.ch/publications/tech3380\">EBU-TT-D Subtitling Distribution Format</a>. </p>"
              }
            ]
          },
          {
            "name": "error_metrics",
            "type": "array",
            "description": "<p>Playback device error reporting settings.</p>",
            "children": [
              {
                "name": "reporting_url",
                "type": "string",
                "description": "<p>The URL where playback devices send error reports.</p>"
              },
              {
                "name": "probability",
                "type": "integer",
                "description": "<p>The number of playback devices per 1000 that will send error reports to the reporting URL. This represents the probability that a playback device will be a reporting player for this session.</p>"
              }
            ]
          }
        ]
      },
      {
        "name": "compactness",
        "type": "string",
        "description": ""
      },
      {
        "name": "subtitle_configuration",
        "type": "object",
        "description": "<p>The configuration for DASH subtitles.</p>",
        "children": [
          {
            "name": "ttml_configuration",
            "type": "object",
            "description": "<p>The settings for TTML subtitles.</p>",
            "children": [
              {
                "name": "ttml_profile",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "description",
    "type": "string",
    "description": "<p>Enter any descriptive text that helps you to identify the origin endpoint.</p>"
  },
  {
    "name": "force_endpoint_error_configuration",
    "type": "object",
    "description": "<p>The failover settings for the endpoint.</p>",
    "children": [
      {
        "name": "endpoint_error_conditions",
        "type": "array",
        "description": "<p>The failover conditions for the endpoint. The options are:</p> <ul> <li> <p> &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; - The manifest stalled and there are no new segments or parts.</p> </li> <li> <p> &#95;&#95;CODE&#95;BLOCK&#95;1&#95;&#95; - There is a gap in the manifest.</p> </li> <li> <p> &#95;&#95;CODE&#95;BLOCK&#95;2&#95;&#95; - Key rotation is enabled but we're unable to fetch the key for the current key period.</p> </li> <li> <p> &#95;&#95;CODE&#95;BLOCK&#95;3&#95;&#95; - The segments which contain slate content are considered to be missing content.</p> </li> </ul>"
      }
    ]
  },
  {
    "name": "hls_manifests",
    "type": "array",
    "description": "<p>An HTTP live streaming (HLS) manifest configuration.</p>",
    "children": [
      {
        "name": "manifest_name",
        "type": "string",
        "description": "<p>A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>"
      },
      {
        "name": "url",
        "type": "string",
        "description": "<p>The egress domain URL for stream delivery from MediaPackage.</p>"
      },
      {
        "name": "child_manifest_name",
        "type": "string",
        "description": "<p>A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index&#95;1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>"
      },
      {
        "name": "manifest_window_seconds",
        "type": "integer",
        "description": "<p>The total duration (in seconds) of the manifest's content.</p>"
      },
      {
        "name": "program_date_time_interval_seconds",
        "type": "integer",
        "description": "<p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. If you don't enter an interval, EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest. The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.</p> <p>Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.</p>"
      },
      {
        "name": "scte_hls",
        "type": "object",
        "description": "<p>The SCTE configuration.</p>",
        "children": [
          {
            "name": "ad_marker_hls",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "filter_configuration",
        "type": "object",
        "description": "<p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. </p>",
        "children": [
          {
            "name": "manifest_filter",
            "type": "string",
            "description": "<p>Optionally specify one or more manifest filters for all of your manifest egress requests. When you include a manifest filter, note that you cannot use an identical manifest filter query parameter for this manifest's endpoint URL.</p>"
          },
          {
            "name": "start",
            "type": "string",
            "description": "<p>Optionally specify the start time for all of your manifest egress requests. When you include start time, note that you cannot use start time query parameters for this manifest's endpoint URL.</p>"
          },
          {
            "name": "end",
            "type": "string",
            "description": "<p>Optionally specify the end time for all of your manifest egress requests. When you include end time, note that you cannot use end time query parameters for this manifest's endpoint URL.</p>"
          },
          {
            "name": "time_delay_seconds",
            "type": "integer",
            "description": "<p>Optionally specify the time delay for all of your manifest egress requests. Enter a value that is smaller than your endpoint's startover window. When you include time delay, note that you cannot use time delay query parameters for this manifest's endpoint URL.</p>"
          },
          {
            "name": "clip_start_time",
            "type": "string",
            "description": "<p>Optionally specify the clip start time for all of your manifest egress requests. When you include clip start time, note that you cannot use clip start time query parameters for this manifest's endpoint URL.</p>"
          }
        ]
      },
      {
        "name": "start_tag",
        "type": "object",
        "description": "<p>To insert an EXT-X-START tag in your HLS playlist, specify a StartTag configuration object with a valid TimeOffset. When you do, you can also optionally specify whether to include a PRECISE value in the EXT-X-START tag.</p>",
        "children": [
          {
            "name": "time_offset",
            "type": "number",
            "description": "<p>Specify the value for TIME-OFFSET within your EXT-X-START tag. Enter a signed floating point value which, if positive, must be less than the configured manifest duration minus three times the configured segment target duration. If negative, the absolute value must be larger than three times the configured segment target duration, and the absolute value must be smaller than the configured manifest duration.</p>"
          },
          {
            "name": "precise",
            "type": "boolean",
            "description": "<p>Specify the value for PRECISE within your EXT-X-START tag. Leave blank, or choose false, to use the default value NO. Choose yes to use the value YES.</p>"
          }
        ]
      },
      {
        "name": "url_encode_child_manifest",
        "type": "boolean",
        "description": "<p>When enabled, MediaPackage URL-encodes the query string for API requests for HLS child manifests to comply with Amazon Web Services Signature Version 4 (SigV4) signature signing protocol. For more information, see <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference&#95;sigv.html\">Amazon Web Services Signature Version 4 for API requests</a> in <i>Identity and Access Management User Guide</i>.</p>"
      }
    ]
  },
  {
    "name": "low_latency_hls_manifests",
    "type": "array",
    "description": "<p>A low-latency HLS manifest configuration.</p>",
    "children": [
      {
        "name": "manifest_name",
        "type": "string",
        "description": "<p>A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>"
      },
      {
        "name": "url",
        "type": "string",
        "description": "<p>The egress domain URL for stream delivery from MediaPackage.</p>"
      },
      {
        "name": "child_manifest_name",
        "type": "string",
        "description": "<p>A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index&#95;1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>"
      },
      {
        "name": "manifest_window_seconds",
        "type": "integer",
        "description": "<p>The total duration (in seconds) of the manifest's content.</p>"
      },
      {
        "name": "program_date_time_interval_seconds",
        "type": "integer",
        "description": "<p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. If you don't enter an interval, EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest. The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.</p> <p>Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.</p>"
      },
      {
        "name": "scte_hls",
        "type": "object",
        "description": "<p>The SCTE configuration.</p>",
        "children": [
          {
            "name": "ad_marker_hls",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "filter_configuration",
        "type": "object",
        "description": "<p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. </p>",
        "children": [
          {
            "name": "manifest_filter",
            "type": "string",
            "description": "<p>Optionally specify one or more manifest filters for all of your manifest egress requests. When you include a manifest filter, note that you cannot use an identical manifest filter query parameter for this manifest's endpoint URL.</p>"
          },
          {
            "name": "start",
            "type": "string",
            "description": "<p>Optionally specify the start time for all of your manifest egress requests. When you include start time, note that you cannot use start time query parameters for this manifest's endpoint URL.</p>"
          },
          {
            "name": "end",
            "type": "string",
            "description": "<p>Optionally specify the end time for all of your manifest egress requests. When you include end time, note that you cannot use end time query parameters for this manifest's endpoint URL.</p>"
          },
          {
            "name": "time_delay_seconds",
            "type": "integer",
            "description": "<p>Optionally specify the time delay for all of your manifest egress requests. Enter a value that is smaller than your endpoint's startover window. When you include time delay, note that you cannot use time delay query parameters for this manifest's endpoint URL.</p>"
          },
          {
            "name": "clip_start_time",
            "type": "string",
            "description": "<p>Optionally specify the clip start time for all of your manifest egress requests. When you include clip start time, note that you cannot use clip start time query parameters for this manifest's endpoint URL.</p>"
          }
        ]
      },
      {
        "name": "start_tag",
        "type": "object",
        "description": "<p>To insert an EXT-X-START tag in your HLS playlist, specify a StartTag configuration object with a valid TimeOffset. When you do, you can also optionally specify whether to include a PRECISE value in the EXT-X-START tag.</p>",
        "children": [
          {
            "name": "time_offset",
            "type": "number",
            "description": "<p>Specify the value for TIME-OFFSET within your EXT-X-START tag. Enter a signed floating point value which, if positive, must be less than the configured manifest duration minus three times the configured segment target duration. If negative, the absolute value must be larger than three times the configured segment target duration, and the absolute value must be smaller than the configured manifest duration.</p>"
          },
          {
            "name": "precise",
            "type": "boolean",
            "description": "<p>Specify the value for PRECISE within your EXT-X-START tag. Leave blank, or choose false, to use the default value NO. Choose yes to use the value YES.</p>"
          }
        ]
      },
      {
        "name": "url_encode_child_manifest",
        "type": "boolean",
        "description": "<p>When enabled, MediaPackage URL-encodes the query string for API requests for LL-HLS child manifests to comply with Amazon Web Services Signature Version 4 (SigV4) signature signing protocol. For more information, see <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference&#95;sigv.html\">Amazon Web Services Signature Version 4 for API requests</a> in <i>Identity and Access Management User Guide</i>.</p>"
      }
    ]
  },
  {
    "name": "modified_at",
    "type": "string",
    "description": "<p>The date and time the origin endpoint was modified.</p>"
  },
  {
    "name": "origin_endpoint_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "segment",
    "type": "object",
    "description": "<p>The segment configuration, including the segment name, duration, and other configuration values.</p>",
    "children": [
      {
        "name": "segment_duration_seconds",
        "type": "integer",
        "description": "<p>The duration (in seconds) of each segment. Enter a value equal to, or a multiple of, the input segment duration. If the value that you enter is different from the input segment duration, MediaPackage rounds segments to the nearest multiple of the input segment duration.</p>"
      },
      {
        "name": "segment_name",
        "type": "string",
        "description": "<p>The name that describes the segment. The name is the base name of the segment used in all content manifests inside of the endpoint. You can't use spaces in the name.</p>"
      },
      {
        "name": "ts_use_audio_rendition_group",
        "type": "boolean",
        "description": "<p>When selected, MediaPackage bundles all audio tracks in a rendition group. All other tracks in the stream can be used with any audio rendition from the group.</p>"
      },
      {
        "name": "include_iframe_only_streams",
        "type": "boolean",
        "description": "<p>When selected, the stream set includes an additional I-frame only stream, along with the other tracks. If false, this extra stream is not included. MediaPackage generates an I-frame only stream from the first rendition in the manifest. The service inserts EXT-I-FRAMES-ONLY tags in the output manifest, and then generates and includes an I-frames only playlist in the stream. This playlist permits player functionality like fast forward and rewind.</p>"
      },
      {
        "name": "ts_include_dvb_subtitles",
        "type": "boolean",
        "description": "<p>By default, MediaPackage excludes all digital video broadcasting (DVB) subtitles from the output. When selected, MediaPackage passes through DVB subtitles into the output.</p>"
      },
      {
        "name": "scte",
        "type": "object",
        "description": "<p>The SCTE configuration.</p>",
        "children": [
          {
            "name": "scte_filter",
            "type": "array",
            "description": "<p>The SCTE-35 message types that you want to be treated as ad markers in the output.</p>"
          }
        ]
      },
      {
        "name": "encryption",
        "type": "object",
        "description": "<p>The parameters for encrypting content.</p>",
        "children": [
          {
            "name": "constant_initialization_vector",
            "type": "string",
            "description": "<p>A 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting content. If you don't specify a value, then MediaPackage creates the constant initialization vector (IV).</p>"
          },
          {
            "name": "encryption_method",
            "type": "object",
            "description": "<p>The encryption type.</p>",
            "children": [
              {
                "name": "ts_encryption_method",
                "type": "string",
                "description": ""
              },
              {
                "name": "cmaf_encryption_method",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "key_rotation_interval_seconds",
            "type": "integer",
            "description": "<p>The frequency (in seconds) of key changes for live workflows, in which content is streamed real time. The service retrieves content keys before the live content begins streaming, and then retrieves them as needed over the lifetime of the workflow. By default, key rotation is set to 300 seconds (5 minutes), the minimum rotation interval, which is equivalent to setting it to 300. If you don't enter an interval, content keys aren't rotated.</p> <p>The following example setting causes the service to rotate keys every thirty minutes: &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; </p>"
          },
          {
            "name": "cmaf_exclude_segment_drm_metadata",
            "type": "boolean",
            "description": "<p>Excludes SEIG and SGPD boxes from segment metadata in CMAF containers.</p> <p>When set to &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95;, MediaPackage omits these DRM metadata boxes from CMAF segments, which can improve compatibility with certain devices and players that don't support these boxes.</p> <p>Important considerations:</p> <ul> <li> <p>This setting only affects CMAF container formats</p> </li> <li> <p>Key rotation can still be handled through media playlist signaling</p> </li> <li> <p>PSSH and TENC boxes remain unaffected</p> </li> <li> <p>Default behavior is preserved when this setting is disabled</p> </li> </ul> <p>Valid values: &#95;&#95;CODE&#95;BLOCK&#95;1&#95;&#95; &#124; &#95;&#95;CODE&#95;BLOCK&#95;2&#95;&#95; </p> <p>Default: &#95;&#95;CODE&#95;BLOCK&#95;3&#95;&#95; </p>"
          },
          {
            "name": "speke_key_provider",
            "type": "object",
            "description": "<p>The parameters for the SPEKE key provider.</p>",
            "children": [
              {
                "name": "encryption_contract_configuration",
                "type": "object",
                "description": "<p>Configure one or more content encryption keys for your endpoints that use SPEKE Version 2.0. The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream. To configure the encryption contract, specify which audio and video encryption presets to use.</p>"
              },
              {
                "name": "resource_id",
                "type": "string",
                "description": "<p>The unique identifier for the content. The service sends this to the key server to identify the current endpoint. How unique you make this depends on how fine-grained you want access controls to be. The service does not permit you to use the same ID for two simultaneous encryption processes. The resource ID is also known as the content ID.</p> <p>The following example shows a resource ID: &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; </p>"
              },
              {
                "name": "drm_systems",
                "type": "array",
                "description": "<p>The DRM solution provider you're using to protect your content during distribution.</p>"
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": "<p>The ARN for the IAM role granted by the key provider that provides access to the key provider API. This role must have a trust policy that allows MediaPackage to assume the role, and it must have a sufficient permissions policy to allow access to the specific key retrieval URL. Get this from your DRM solution provider.</p> <p>Valid format: &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95;. The following example shows a role ARN: &#95;&#95;CODE&#95;BLOCK&#95;1&#95;&#95; </p>"
              },
              {
                "name": "url",
                "type": "string",
                "description": "<p>The URL of the API Gateway proxy that you set up to talk to your key server. The API Gateway proxy must reside in the same AWS Region as MediaPackage and must start with https://.</p> <p>The following example shows a URL: &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; </p>"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "startover_window_seconds",
    "type": "integer",
    "description": "<p>The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window. The maximum startover window is 1,209,600 seconds (14 days).</p>"
  },
  {
    "name": "dash_manifest_urls",
    "type": "array",
    "description": ""
  },
  {
    "name": "hls_manifest_urls",
    "type": "array",
    "description": ""
  },
  {
    "name": "low_latency_hls_manifest_urls",
    "type": "array",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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
    "name": "arn",
    "type": "string",
    "description": "<p>The Amazon Resource Name (ARN) associated with the resource.</p>"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpoint.html"><code>AWS::MediaPackageV2::OriginEndpoint</code></a>.

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
    <td><CopyableCode code="ChannelGroupName, ChannelName, OriginEndpointName, ContainerType, region" /></td>
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
channel_group_name,
channel_name,
container_type,
created_at,
dash_manifests,
description,
force_endpoint_error_configuration,
hls_manifests,
low_latency_hls_manifests,
modified_at,
origin_endpoint_name,
segment,
startover_window_seconds,
dash_manifest_urls,
hls_manifest_urls,
low_latency_hls_manifest_urls,
tags
FROM awscc.mediapackagev2.origin_endpoints
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>origin_endpoints</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.mediapackagev2.origin_endpoints_list_only
WHERE region = 'us-east-1';
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
INSERT INTO awscc.mediapackagev2.origin_endpoints (
 ChannelGroupName,
 ChannelName,
 ContainerType,
 OriginEndpointName,
 region
)
SELECT 
'{{ ChannelGroupName }}',
 '{{ ChannelName }}',
 '{{ ContainerType }}',
 '{{ OriginEndpointName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.mediapackagev2.origin_endpoints (
 ChannelGroupName,
 ChannelName,
 ContainerType,
 DashManifests,
 Description,
 ForceEndpointErrorConfiguration,
 HlsManifests,
 LowLatencyHlsManifests,
 OriginEndpointName,
 Segment,
 StartoverWindowSeconds,
 Tags,
 region
)
SELECT 
 '{{ ChannelGroupName }}',
 '{{ ChannelName }}',
 '{{ ContainerType }}',
 '{{ DashManifests }}',
 '{{ Description }}',
 '{{ ForceEndpointErrorConfiguration }}',
 '{{ HlsManifests }}',
 '{{ LowLatencyHlsManifests }}',
 '{{ OriginEndpointName }}',
 '{{ Segment }}',
 '{{ StartoverWindowSeconds }}',
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
      - name: ChannelGroupName
        value: '{{ ChannelGroupName }}'
      - name: ChannelName
        value: '{{ ChannelName }}'
      - name: ContainerType
        value: '{{ ContainerType }}'
      - name: DashManifests
        value:
          - ManifestName: '{{ ManifestName }}'
            ManifestWindowSeconds: '{{ ManifestWindowSeconds }}'
            FilterConfiguration:
              ManifestFilter: '{{ ManifestFilter }}'
              Start: '{{ Start }}'
              End: '{{ End }}'
              TimeDelaySeconds: '{{ TimeDelaySeconds }}'
              ClipStartTime: '{{ ClipStartTime }}'
            MinUpdatePeriodSeconds: '{{ MinUpdatePeriodSeconds }}'
            MinBufferTimeSeconds: '{{ MinBufferTimeSeconds }}'
            SuggestedPresentationDelaySeconds: '{{ SuggestedPresentationDelaySeconds }}'
            SegmentTemplateFormat: '{{ SegmentTemplateFormat }}'
            PeriodTriggers:
              - '{{ PeriodTriggers[0] }}'
            ScteDash:
              AdMarkerDash: '{{ AdMarkerDash }}'
            DrmSignaling: '{{ DrmSignaling }}'
            UtcTiming:
              TimingMode: '{{ TimingMode }}'
              TimingSource: '{{ TimingSource }}'
            Profiles:
              - '{{ Profiles[0] }}'
            BaseUrls:
              - Url: '{{ Url }}'
                ServiceLocation: '{{ ServiceLocation }}'
                DvbPriority: '{{ DvbPriority }}'
                DvbWeight: '{{ DvbWeight }}'
            ProgramInformation:
              Title: '{{ Title }}'
              Source: '{{ Source }}'
              Copyright: '{{ Copyright }}'
              LanguageCode: '{{ LanguageCode }}'
              MoreInformationUrl: '{{ MoreInformationUrl }}'
            DvbSettings:
              FontDownload:
                Url: '{{ Url }}'
                MimeType: '{{ MimeType }}'
                FontFamily: '{{ FontFamily }}'
              ErrorMetrics:
                - ReportingUrl: '{{ ReportingUrl }}'
                  Probability: '{{ Probability }}'
            Compactness: '{{ Compactness }}'
            SubtitleConfiguration:
              TtmlConfiguration:
                TtmlProfile: '{{ TtmlProfile }}'
      - name: Description
        value: '{{ Description }}'
      - name: ForceEndpointErrorConfiguration
        value:
          EndpointErrorConditions:
            - '{{ EndpointErrorConditions[0] }}'
      - name: HlsManifests
        value:
          - ManifestName: '{{ ManifestName }}'
            Url: '{{ Url }}'
            ChildManifestName: '{{ ChildManifestName }}'
            ManifestWindowSeconds: '{{ ManifestWindowSeconds }}'
            ProgramDateTimeIntervalSeconds: '{{ ProgramDateTimeIntervalSeconds }}'
            ScteHls:
              AdMarkerHls: '{{ AdMarkerHls }}'
            FilterConfiguration: null
            StartTag:
              TimeOffset: null
              Precise: '{{ Precise }}'
            UrlEncodeChildManifest: '{{ UrlEncodeChildManifest }}'
      - name: LowLatencyHlsManifests
        value:
          - ManifestName: '{{ ManifestName }}'
            Url: '{{ Url }}'
            ChildManifestName: '{{ ChildManifestName }}'
            ManifestWindowSeconds: '{{ ManifestWindowSeconds }}'
            ProgramDateTimeIntervalSeconds: '{{ ProgramDateTimeIntervalSeconds }}'
            ScteHls: null
            FilterConfiguration: null
            StartTag: null
            UrlEncodeChildManifest: '{{ UrlEncodeChildManifest }}'
      - name: OriginEndpointName
        value: '{{ OriginEndpointName }}'
      - name: Segment
        value:
          SegmentDurationSeconds: '{{ SegmentDurationSeconds }}'
          SegmentName: '{{ SegmentName }}'
          TsUseAudioRenditionGroup: '{{ TsUseAudioRenditionGroup }}'
          IncludeIframeOnlyStreams: '{{ IncludeIframeOnlyStreams }}'
          TsIncludeDvbSubtitles: '{{ TsIncludeDvbSubtitles }}'
          Scte:
            ScteFilter:
              - '{{ ScteFilter[0] }}'
          Encryption:
            ConstantInitializationVector: '{{ ConstantInitializationVector }}'
            EncryptionMethod:
              TsEncryptionMethod: '{{ TsEncryptionMethod }}'
              CmafEncryptionMethod: '{{ CmafEncryptionMethod }}'
            KeyRotationIntervalSeconds: '{{ KeyRotationIntervalSeconds }}'
            CmafExcludeSegmentDrmMetadata: '{{ CmafExcludeSegmentDrmMetadata }}'
            SpekeKeyProvider:
              EncryptionContractConfiguration:
                PresetSpeke20Audio: '{{ PresetSpeke20Audio }}'
                PresetSpeke20Video: '{{ PresetSpeke20Video }}'
              ResourceId: '{{ ResourceId }}'
              DrmSystems:
                - '{{ DrmSystems[0] }}'
              RoleArn: '{{ RoleArn }}'
              Url: '{{ Url }}'
      - name: StartoverWindowSeconds
        value: '{{ StartoverWindowSeconds }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.mediapackagev2.origin_endpoints
SET PatchDocument = string('{{ {
    "ContainerType": container_type,
    "DashManifests": dash_manifests,
    "Description": description,
    "ForceEndpointErrorConfiguration": force_endpoint_error_configuration,
    "Segment": segment,
    "StartoverWindowSeconds": startover_window_seconds,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.mediapackagev2.origin_endpoints
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>origin_endpoints</code> resource, the following permissions are required:

### Create
```json
mediapackagev2:TagResource,
mediapackagev2:CreateOriginEndpoint,
iam:PassRole
```

### Read
```json
mediapackagev2:GetOriginEndpoint
```

### Update
```json
mediapackagev2:TagResource,
mediapackagev2:UntagResource,
mediapackagev2:ListTagsForResource,
mediapackagev2:UpdateOriginEndpoint,
iam:PassRole
```

### Delete
```json
mediapackagev2:GetOriginEndpoint,
mediapackagev2:DeleteOriginEndpoint
```

### List
```json
mediapackagev2:ListOriginEndpoints
```
