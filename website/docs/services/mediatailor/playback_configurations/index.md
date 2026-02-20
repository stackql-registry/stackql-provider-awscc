---
title: playback_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - playback_configurations
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

Creates, updates, deletes or gets a <code>playback_configuration</code> resource or lists <code>playback_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>playback_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::MediaTailor::PlaybackConfiguration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.mediatailor.playback_configurations" /></td></tr>
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
    "name": "ad_conditioning_configuration",
    "type": "object",
    "description": "<p>The setting that indicates what conditioning MediaTailor will perform on ads that the ad decision server (ADS) returns.</p>",
    "children": [
      {
        "name": "streaming_media_file_conditioning",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "ad_decision_server_url",
    "type": "string",
    "description": "The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters."
  },
  {
    "name": "avail_suppression",
    "type": "object",
    "description": "The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see Ad Suppression (https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html).",
    "children": [
      {
        "name": "mode",
        "type": "string",
        "description": "Sets the ad suppression mode. By default, ad suppression is off and all ad breaks are filled with ads or slate. When Mode is set to BEHIND&#95;LIVE&#95;EDGE, ad suppression is active and MediaTailor won't fill ad breaks on or behind the ad suppression Value time in the manifest lookback window. When Mode is set to AFTER&#95;LIVE&#95;EDGE, ad suppression is active and MediaTailor won't fill ad breaks that are within the live edge plus the avail suppression value."
      },
      {
        "name": "value",
        "type": "string",
        "description": "A live edge offset time in HH:MM:SS. MediaTailor won't fill ad breaks on or behind this time in the manifest lookback window. If Value is set to 00:00:00, it is in sync with the live edge, and MediaTailor won't fill any ad breaks on or behind the live edge. If you set a Value time, MediaTailor won't fill any ad breaks on or behind this time in the manifest lookback window. For example, if you set 00:45:00, then MediaTailor will fill ad breaks that occur within 45 minutes behind the live edge, but won't fill ad breaks on or behind 45 minutes behind the live edge."
      },
      {
        "name": "fill_policy",
        "type": "string",
        "description": "Defines the policy to apply to the avail suppression mode. BEHIND&#95;LIVE&#95;EDGE will always use the full avail suppression policy. AFTER&#95;LIVE&#95;EDGE mode can be used to invoke partial ad break fills when a session starts mid-break. Valid values are FULL&#95;AVAIL&#95;ONLY and PARTIAL&#95;AVAIL"
      }
    ]
  },
  {
    "name": "bumper",
    "type": "object",
    "description": "The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see Bumpers (https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html).",
    "children": [
      {
        "name": "start_url",
        "type": "string",
        "description": "The URL for the start bumper asset."
      },
      {
        "name": "end_url",
        "type": "string",
        "description": "The URL for the end bumper asset."
      }
    ]
  },
  {
    "name": "cdn_configuration",
    "type": "object",
    "description": "The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.",
    "children": [
      {
        "name": "ad_segment_url_prefix",
        "type": "string",
        "description": "A non-default content delivery network (CDN) to serve ad segments. By default, AWS Elemental MediaTailor uses Amazon CloudFront with default cache settings as its CDN for ad segments. To set up an alternate CDN, create a rule in your CDN for the origin ads.mediatailor.&lt;region&gt;.amazonaws.com. Then specify the rule's name in this AdSegmentUrlPrefix. When AWS Elemental MediaTailor serves a manifest, it reports your CDN as the source for ad segments."
      },
      {
        "name": "content_segment_url_prefix",
        "type": "string",
        "description": "A content delivery network (CDN) to cache content segments, so that content requests don't always have to go to the origin server. First, create a rule in your CDN for the content segment origin server. Then specify the rule's name in this ContentSegmentUrlPrefix. When AWS Elemental MediaTailor serves a manifest, it reports your CDN as the source for content segments."
      }
    ]
  },
  {
    "name": "configuration_aliases",
    "type": "object",
    "description": "The player parameters and aliases used as dynamic variables during session initialization. For more information, see Domain Variables."
  },
  {
    "name": "dash_configuration",
    "type": "object",
    "description": "The configuration for DASH content.",
    "children": [
      {
        "name": "mpd_location",
        "type": "string",
        "description": "The setting that controls whether MediaTailor includes the Location tag in DASH manifests. MediaTailor populates the Location tag with the URL for manifest update requests, to be used by players that don't support sticky redirects. Disable this if you have CDN routing rules set up for accessing MediaTailor manifests, and you are either using client-side reporting or your players support sticky HTTP redirects. Valid values are DISABLED and EMT&#95;DEFAULT. The EMT&#95;DEFAULT setting enables the inclusion of the tag and is the default value."
      },
      {
        "name": "origin_manifest_type",
        "type": "string",
        "description": "The setting that controls whether MediaTailor handles manifests from the origin server as multi-period manifests or single-period manifests. If your origin server produces single-period manifests, set this to SINGLE&#95;PERIOD. The default setting is MULTI&#95;PERIOD. For multi-period manifests, omit this setting or set it to MULTI&#95;PERIOD."
      },
      {
        "name": "manifest_endpoint_prefix",
        "type": "string",
        "description": "The URL generated by MediaTailor to initiate a DASH playback session. The session uses server-side reporting."
      }
    ]
  },
  {
    "name": "insertion_mode",
    "type": "string",
    "description": "The setting that controls whether players can use stitched or guided ad insertion. The default, STITCHED&#95;ONLY, forces all player sessions to use stitched (server-side) ad insertion. Choosing PLAYER&#95;SELECT allows players to select either stitched or guided ad insertion at session-initialization time. The default for players that do not specify an insertion mode is stitched."
  },
  {
    "name": "live_pre_roll_configuration",
    "type": "object",
    "description": "The configuration for pre-roll ad insertion.",
    "children": [
      {
        "name": "ad_decision_server_url",
        "type": "string",
        "description": "The URL for the ad decision server (ADS) for pre-roll ads. This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters."
      },
      {
        "name": "max_duration_seconds",
        "type": "integer",
        "description": "The maximum allowed duration for the pre-roll ad avail. AWS Elemental MediaTailor won't play pre-roll ads to exceed this duration, regardless of the total duration of ads that the ADS returns."
      }
    ]
  },
  {
    "name": "manifest_processing_rules",
    "type": "object",
    "description": "The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.",
    "children": [
      {
        "name": "ad_marker_passthrough",
        "type": "object",
        "description": "For HLS, when set to true, MediaTailor passes through EXT-X-CUE-IN, EXT-X-CUE-OUT, and EXT-X-SPLICEPOINT-SCTE35 ad markers from the origin manifest to the MediaTailor personalized manifest. No logic is applied to these ad markers. For example, if EXT-X-CUE-OUT has a value of 60, but no ads are filled for that ad break, MediaTailor will not set the value to 0.",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": "Enables ad marker passthrough for your configuration."
          }
        ]
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": "The identifier for the playback configuration."
  },
  {
    "name": "personalization_threshold_seconds",
    "type": "integer",
    "description": "Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to ad replacement in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see Ad Behavior in AWS Elemental MediaTailor (https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html)."
  },
  {
    "name": "session_initialization_endpoint_prefix",
    "type": "string",
    "description": "The URL that the player uses to initialize a session that uses client-side reporting."
  },
  {
    "name": "hls_configuration",
    "type": "object",
    "description": "The configuration for HLS content.",
    "children": [
      {
        "name": "manifest_endpoint_prefix",
        "type": "string",
        "description": "The URL that is used to initiate a playback session for devices that support Apple HLS. The session uses server-side reporting."
      }
    ]
  },
  {
    "name": "log_configuration",
    "type": "object",
    "description": "The configuration that defines where AWS Elemental MediaTailor sends logs for the playback configuration.",
    "children": [
      {
        "name": "ads_interaction_log",
        "type": "object",
        "description": "The event types that MediaTailor emits in logs for interactions with the ADS.",
        "children": [
          {
            "name": "exclude_event_types",
            "type": "array",
            "description": "Indicates that MediaTailor won't emit the selected events in the logs for playback sessions that are initialized with this configuration."
          },
          {
            "name": "publish_opt_in_event_types",
            "type": "array",
            "description": "Indicates that MediaTailor emits RAW&#95;ADS&#95;RESPONSE logs for playback sessions that are initialized with this configuration."
          }
        ]
      },
      {
        "name": "enabled_logging_strategies",
        "type": "array",
        "description": "The method used for collecting logs from AWS Elemental MediaTailor. To configure MediaTailor to send logs directly to Amazon CloudWatch Logs, choose LEGACY&#95;CLOUDWATCH. To configure MediaTailor to send logs to CloudWatch, which then vends the logs to your destination of choice, choose VENDED&#95;LOGS. Supported destinations are CloudWatch Logs log group, Amazon S3 bucket, and Amazon Data Firehose stream. To use vended logs, you must configure the delivery destination in Amazon CloudWatch"
      },
      {
        "name": "manifest_service_interaction_log",
        "type": "object",
        "description": "The event types that MediaTailor emits in logs for interactions with the origin server.",
        "children": [
          {
            "name": "exclude_event_types",
            "type": "array",
            "description": "Indicates that MediaTailor won't emit the selected events in the logs for playback sessions that are initialized with this configuration."
          }
        ]
      },
      {
        "name": "percent_enabled",
        "type": "integer",
        "description": "The percentage of session logs that MediaTailor sends to your CloudWatch Logs account. For example, if your playback configuration has 1000 sessions and percentEnabled is set to 60, MediaTailor sends logs for 600 of the sessions to CloudWatch Logs. MediaTailor decides at random which of the playback configuration sessions to send logs for. If you want to view logs for a specific session, you can use the debug log mode."
      }
    ]
  },
  {
    "name": "playback_configuration_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the playback configuration."
  },
  {
    "name": "playback_endpoint_prefix",
    "type": "string",
    "description": "The URL that the player accesses to get a manifest from MediaTailor. This session will use server-side reporting."
  },
  {
    "name": "slate_ad_url",
    "type": "string",
    "description": "The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because MediaTailor provides it in the slots that are designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags to assign to the playback configuration.",
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
    "name": "transcode_profile_name",
    "type": "string",
    "description": "The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support."
  },
  {
    "name": "video_content_source_url",
    "type": "string",
    "description": "The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters."
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
    "name": "name",
    "type": "string",
    "description": "The identifier for the playback configuration."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-playbackconfiguration.html"><code>AWS::MediaTailor::PlaybackConfiguration</code></a>.

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
    <td><code>playback_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, VideoContentSourceUrl, AdDecisionServerUrl, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>playback_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>playback_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>playback_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>playback_configurations</code></td>
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

Gets all properties from an individual <code>playback_configuration</code>.
```sql
SELECT
region,
ad_conditioning_configuration,
ad_decision_server_url,
avail_suppression,
bumper,
cdn_configuration,
configuration_aliases,
dash_configuration,
insertion_mode,
live_pre_roll_configuration,
manifest_processing_rules,
name,
personalization_threshold_seconds,
session_initialization_endpoint_prefix,
hls_configuration,
log_configuration,
playback_configuration_arn,
playback_endpoint_prefix,
slate_ad_url,
tags,
transcode_profile_name,
video_content_source_url
FROM awscc.mediatailor.playback_configurations
WHERE region = 'us-east-1' AND Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>playback_configurations</code> in a region.
```sql
SELECT
region,
name
FROM awscc.mediatailor.playback_configurations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>playback_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.mediatailor.playback_configurations (
 AdDecisionServerUrl,
 Name,
 VideoContentSourceUrl,
 region
)
SELECT 
'{{ AdDecisionServerUrl }}',
 '{{ Name }}',
 '{{ VideoContentSourceUrl }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.mediatailor.playback_configurations (
 AdConditioningConfiguration,
 AdDecisionServerUrl,
 AvailSuppression,
 Bumper,
 CdnConfiguration,
 ConfigurationAliases,
 DashConfiguration,
 InsertionMode,
 LivePreRollConfiguration,
 ManifestProcessingRules,
 Name,
 PersonalizationThresholdSeconds,
 HlsConfiguration,
 LogConfiguration,
 SlateAdUrl,
 Tags,
 TranscodeProfileName,
 VideoContentSourceUrl,
 region
)
SELECT 
 '{{ AdConditioningConfiguration }}',
 '{{ AdDecisionServerUrl }}',
 '{{ AvailSuppression }}',
 '{{ Bumper }}',
 '{{ CdnConfiguration }}',
 '{{ ConfigurationAliases }}',
 '{{ DashConfiguration }}',
 '{{ InsertionMode }}',
 '{{ LivePreRollConfiguration }}',
 '{{ ManifestProcessingRules }}',
 '{{ Name }}',
 '{{ PersonalizationThresholdSeconds }}',
 '{{ HlsConfiguration }}',
 '{{ LogConfiguration }}',
 '{{ SlateAdUrl }}',
 '{{ Tags }}',
 '{{ TranscodeProfileName }}',
 '{{ VideoContentSourceUrl }}',
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
  - name: playback_configuration
    props:
      - name: AdConditioningConfiguration
        value:
          StreamingMediaFileConditioning: '{{ StreamingMediaFileConditioning }}'
      - name: AdDecisionServerUrl
        value: '{{ AdDecisionServerUrl }}'
      - name: AvailSuppression
        value:
          Mode: '{{ Mode }}'
          Value: '{{ Value }}'
          FillPolicy: '{{ FillPolicy }}'
      - name: Bumper
        value:
          StartUrl: '{{ StartUrl }}'
          EndUrl: '{{ EndUrl }}'
      - name: CdnConfiguration
        value:
          AdSegmentUrlPrefix: '{{ AdSegmentUrlPrefix }}'
          ContentSegmentUrlPrefix: '{{ ContentSegmentUrlPrefix }}'
      - name: ConfigurationAliases
        value: null
      - name: DashConfiguration
        value:
          MpdLocation: '{{ MpdLocation }}'
          OriginManifestType: '{{ OriginManifestType }}'
          ManifestEndpointPrefix: '{{ ManifestEndpointPrefix }}'
      - name: InsertionMode
        value: '{{ InsertionMode }}'
      - name: LivePreRollConfiguration
        value:
          AdDecisionServerUrl: '{{ AdDecisionServerUrl }}'
          MaxDurationSeconds: '{{ MaxDurationSeconds }}'
      - name: ManifestProcessingRules
        value:
          AdMarkerPassthrough:
            Enabled: '{{ Enabled }}'
      - name: Name
        value: '{{ Name }}'
      - name: PersonalizationThresholdSeconds
        value: '{{ PersonalizationThresholdSeconds }}'
      - name: HlsConfiguration
        value:
          ManifestEndpointPrefix: '{{ ManifestEndpointPrefix }}'
      - name: LogConfiguration
        value:
          AdsInteractionLog:
            ExcludeEventTypes:
              - '{{ ExcludeEventTypes[0] }}'
            PublishOptInEventTypes:
              - '{{ PublishOptInEventTypes[0] }}'
          EnabledLoggingStrategies:
            - '{{ EnabledLoggingStrategies[0] }}'
          ManifestServiceInteractionLog:
            ExcludeEventTypes:
              - '{{ ExcludeEventTypes[0] }}'
          PercentEnabled: '{{ PercentEnabled }}'
      - name: SlateAdUrl
        value: '{{ SlateAdUrl }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: TranscodeProfileName
        value: '{{ TranscodeProfileName }}'
      - name: VideoContentSourceUrl
        value: '{{ VideoContentSourceUrl }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.mediatailor.playback_configurations
SET PatchDocument = string('{{ {
    "AdConditioningConfiguration": ad_conditioning_configuration,
    "AdDecisionServerUrl": ad_decision_server_url,
    "AvailSuppression": avail_suppression,
    "Bumper": bumper,
    "CdnConfiguration": cdn_configuration,
    "ConfigurationAliases": configuration_aliases,
    "InsertionMode": insertion_mode,
    "LivePreRollConfiguration": live_pre_roll_configuration,
    "ManifestProcessingRules": manifest_processing_rules,
    "PersonalizationThresholdSeconds": personalization_threshold_seconds,
    "LogConfiguration": log_configuration,
    "SlateAdUrl": slate_ad_url,
    "Tags": tags,
    "TranscodeProfileName": transcode_profile_name,
    "VideoContentSourceUrl": video_content_source_url
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.mediatailor.playback_configurations
WHERE Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>playback_configurations</code> resource, the following permissions are required:

### Create
```json
mediatailor:PutPlaybackConfiguration,
mediatailor:ConfigureLogsForPlaybackConfiguration,
iam:CreateServiceLinkedRole,
mediatailor:UntagResource,
mediatailor:TagResource
```

### Read
```json
mediatailor:GetPlaybackConfiguration
```

### Update
```json
mediatailor:PutPlaybackConfiguration,
mediatailor:ConfigureLogsForPlaybackConfiguration,
iam:CreateServiceLinkedRole,
mediatailor:UntagResource,
mediatailor:TagResource
```

### Delete
```json
mediatailor:DeletePlaybackConfiguration
```

### List
```json
mediatailor:ListPlaybackConfigurations
```
