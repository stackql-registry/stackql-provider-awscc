---
title: flows
hide_title: false
hide_table_of_contents: false
keywords:
  - flows
  - mediaconnect
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

Creates, updates, deletes or gets a <code>flow</code> resource or lists <code>flows</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>flows</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::MediaConnect::Flow</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.mediaconnect.flows" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "flow_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow."
  },
  {
    "name": "egress_ip",
    "type": "string",
    "description": "The IP address from which video will be sent to output destinations."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the flow."
  },
  {
    "name": "availability_zone",
    "type": "string",
    "description": "The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS."
  },
  {
    "name": "flow_availability_zone",
    "type": "string",
    "description": "The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS.(ReadOnly)"
  },
  {
    "name": "source",
    "type": "object",
    "description": "The source of the flow.",
    "children": [
      {
        "name": "source_arn",
        "type": "string",
        "description": "The ARN of the source."
      },
      {
        "name": "decryption",
        "type": "object",
        "description": "The type of decryption that is used on the content ingested from this source.",
        "children": [
          {
            "name": "algorithm",
            "type": "string",
            "description": "The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256)."
          },
          {
            "name": "constant_initialization_vector",
            "type": "string",
            "description": "A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption."
          },
          {
            "name": "device_id",
            "type": "string",
            "description": "The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption."
          },
          {
            "name": "key_type",
            "type": "string",
            "description": "The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key)."
          },
          {
            "name": "region",
            "type": "string",
            "description": "The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption."
          },
          {
            "name": "resource_id",
            "type": "string",
            "description": "An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption."
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": "The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity)."
          },
          {
            "name": "secret_arn",
            "type": "string",
            "description": "The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption."
          },
          {
            "name": "url",
            "type": "string",
            "description": "The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption."
          }
        ]
      },
      {
        "name": "description",
        "type": "string",
        "description": "A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account."
      },
      {
        "name": "entitlement_arn",
        "type": "string",
        "description": "The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. The entitlement is set by the content originator and the ARN is generated as part of the originator's flow."
      },
      {
        "name": "gateway_bridge_source",
        "type": "object",
        "description": "The source configuration for cloud flows receiving a stream from a bridge.",
        "children": [
          {
            "name": "bridge_arn",
            "type": "string",
            "description": "The ARN of the bridge feeding this flow."
          },
          {
            "name": "vpc_interface_attachment",
            "type": "object",
            "description": "The name of the VPC interface attachment to use for this bridge source.",
            "children": [
              {
                "name": "vpc_interface_name",
                "type": "string",
                "description": "The name of the VPC interface to use for this resource."
              }
            ]
          }
        ]
      },
      {
        "name": "ingest_ip",
        "type": "string",
        "description": "The IP address that the flow will be listening on for incoming content."
      },
      {
        "name": "ingest_port",
        "type": "integer",
        "description": "The port that the flow will be listening on for incoming content."
      },
      {
        "name": "max_bitrate",
        "type": "integer",
        "description": "The smoothing max bitrate for RIST, RTP, and RTP-FEC streams."
      },
      {
        "name": "max_latency",
        "type": "integer",
        "description": "The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams."
      },
      {
        "name": "min_latency",
        "type": "integer",
        "description": "The minimum latency in milliseconds."
      },
      {
        "name": "name",
        "type": "string",
        "description": "The name of the source."
      },
      {
        "name": "protocol",
        "type": "string",
        "description": "The protocol that is used by the source."
      },
      {
        "name": "sender_ip_address",
        "type": "string",
        "description": "The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol."
      },
      {
        "name": "sender_control_port",
        "type": "integer",
        "description": "The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol."
      },
      {
        "name": "stream_id",
        "type": "string",
        "description": "The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams."
      },
      {
        "name": "source_ingest_port",
        "type": "string",
        "description": "The port that the flow will be listening on for incoming content.(ReadOnly)"
      },
      {
        "name": "source_listener_address",
        "type": "string",
        "description": "Source IP or domain name for SRT-caller protocol."
      },
      {
        "name": "source_listener_port",
        "type": "integer",
        "description": "Source port for SRT-caller protocol."
      },
      {
        "name": "vpc_interface_name",
        "type": "string",
        "description": "The name of the VPC Interface this Source is configured with."
      },
      {
        "name": "whitelist_cidr",
        "type": "string",
        "description": "The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16."
      },
      {
        "name": "max_sync_buffer",
        "type": "integer",
        "description": "The size of the buffer (in milliseconds) to use to sync incoming source data."
      },
      {
        "name": "media_stream_source_configurations",
        "type": "array",
        "description": "The media stream that is associated with the source, and the parameters for that association.",
        "children": [
          {
            "name": "encoding_name",
            "type": "string",
            "description": "The format that was used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv."
          },
          {
            "name": "input_configurations",
            "type": "array",
            "description": "The media streams that you want to associate with the source.",
            "children": [
              {
                "name": "input_port",
                "type": "integer",
                "description": "The port that the flow listens on for an incoming media stream."
              },
              {
                "name": "interface",
                "type": "object",
                "description": "The VPC interface where the media stream comes in from."
              }
            ]
          },
          {
            "name": "media_stream_name",
            "type": "string",
            "description": "A name that helps you distinguish one media stream from another."
          }
        ]
      }
    ]
  },
  {
    "name": "source_failover_config",
    "type": "object",
    "description": "The source failover config of the flow.",
    "children": [
      {
        "name": "state",
        "type": "string",
        "description": ""
      },
      {
        "name": "recovery_window",
        "type": "integer",
        "description": "Search window time to look for dash-7 packets"
      },
      {
        "name": "failover_mode",
        "type": "string",
        "description": "The type of failover you choose for this flow. MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams."
      },
      {
        "name": "source_priority",
        "type": "object",
        "description": "The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.",
        "children": [
          {
            "name": "primary_source",
            "type": "string",
            "description": "The name of the source you choose as the primary source for this flow."
          }
        ]
      }
    ]
  },
  {
    "name": "vpc_interfaces",
    "type": "array",
    "description": "The VPC interfaces that you added to this flow.",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": "Immutable and has to be a unique against other VpcInterfaces in this Flow."
      },
      {
        "name": "network_interface_type",
        "type": "string",
        "description": "The type of network adapter that you want MediaConnect to use on this interface. If you don't set this value, it defaults to ENA."
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": "Role Arn MediaConnect can assume to create ENIs in customer's account."
      },
      {
        "name": "security_group_ids",
        "type": "array",
        "description": "Security Group IDs to be used on ENI."
      },
      {
        "name": "subnet_id",
        "type": "string",
        "description": "Subnet must be in the AZ of the Flow"
      },
      {
        "name": "network_interface_ids",
        "type": "array",
        "description": "IDs of the network interfaces created in customer's account by MediaConnect."
      }
    ]
  },
  {
    "name": "media_streams",
    "type": "array",
    "description": "The media streams associated with the flow. You can associate any of these media streams with sources and outputs on the flow.",
    "children": [
      {
        "name": "media_stream_id",
        "type": "integer",
        "description": "A unique identifier for the media stream."
      },
      {
        "name": "media_stream_type",
        "type": "string",
        "description": "The type of media stream."
      },
      {
        "name": "video_format",
        "type": "string",
        "description": "The resolution of the video."
      },
      {
        "name": "media_stream_name",
        "type": "string",
        "description": "A name that helps you distinguish one media stream from another."
      },
      {
        "name": "description",
        "type": "string",
        "description": "A description that can help you quickly identify what your media stream is used for."
      },
      {
        "name": "attributes",
        "type": "object",
        "description": "Attributes that are related to the media stream.",
        "children": [
          {
            "name": "fmtp",
            "type": "object",
            "description": "A set of parameters that define the media stream.",
            "children": [
              {
                "name": "exact_framerate",
                "type": "string",
                "description": "The frame rate for the video stream, in frames/second. For example: 60000/1001."
              },
              {
                "name": "colorimetry",
                "type": "string",
                "description": "The format used for the representation of color."
              },
              {
                "name": "scan_mode",
                "type": "string",
                "description": "The type of compression that was used to smooth the video's appearance."
              },
              {
                "name": "tcs",
                "type": "string",
                "description": "The transfer characteristic system (TCS) that is used in the video."
              },
              {
                "name": "range",
                "type": "string",
                "description": "The encoding range of the video."
              },
              {
                "name": "par",
                "type": "string",
                "description": "The pixel aspect ratio (PAR) of the video."
              },
              {
                "name": "channel_order",
                "type": "string",
                "description": "The format of the audio channel."
              }
            ]
          },
          {
            "name": "lang",
            "type": "string",
            "description": "The audio language, in a format that is recognized by the receiver."
          }
        ]
      },
      {
        "name": "clock_rate",
        "type": "integer",
        "description": "The sample rate for the stream. This value in measured in kHz."
      },
      {
        "name": "fmt",
        "type": "integer",
        "description": "The format type number (sometimes referred to as RTP payload type) of the media stream. MediaConnect assigns this value to the media stream. For ST 2110 JPEG XS outputs, you need to provide this value to the receiver."
      }
    ]
  },
  {
    "name": "maintenance",
    "type": "object",
    "description": "The maintenance settings you want to use for the flow.",
    "children": [
      {
        "name": "maintenance_day",
        "type": "string",
        "description": "A day of a week when the maintenance will happen. Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday."
      },
      {
        "name": "maintenance_start_hour",
        "type": "string",
        "description": "UTC time when the maintenance will happen. Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00."
      }
    ]
  },
  {
    "name": "source_monitoring_config",
    "type": "object",
    "description": "The source monitoring config of the flow.",
    "children": [
      {
        "name": "thumbnail_state",
        "type": "string",
        "description": "The state of thumbnail monitoring."
      },
      {
        "name": "content_quality_analysis_state",
        "type": "string",
        "description": "Indicates whether content quality analysis is enabled or disabled."
      },
      {
        "name": "audio_monitoring_settings",
        "type": "array",
        "description": "Contains the settings for audio stream metrics monitoring.",
        "children": [
          {
            "name": "silent_audio",
            "type": "object",
            "description": "Configures settings for the SilentAudio metric.",
            "children": [
              {
                "name": "state",
                "type": "string",
                "description": "Indicates whether the SilentAudio metric is enabled or disabled."
              },
              {
                "name": "threshold_seconds",
                "type": "integer",
                "description": "Specifies the number of consecutive seconds of silence that triggers an event or alert."
              }
            ]
          }
        ]
      },
      {
        "name": "video_monitoring_settings",
        "type": "array",
        "description": "Contains the settings for video stream metrics monitoring.",
        "children": [
          {
            "name": "black_frames",
            "type": "object",
            "description": "Configures settings for the BlackFrames metric.",
            "children": [
              {
                "name": "state",
                "type": "string",
                "description": "Indicates whether the BlackFrames metric is enabled or disabled."
              },
              {
                "name": "threshold_seconds",
                "type": "integer",
                "description": "Specifies the number of consecutive seconds of black frames that triggers an event or alert."
              }
            ]
          },
          {
            "name": "frozen_frames",
            "type": "object",
            "description": "Configures settings for the FrozenFrames metric.",
            "children": [
              {
                "name": "state",
                "type": "string",
                "description": "Indicates whether the FrozenFrames metric is enabled or disabled."
              },
              {
                "name": "threshold_seconds",
                "type": "integer",
                "description": "Specifies the number of consecutive seconds of a static image that triggers an event or alert."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "flow_size",
    "type": "string",
    "description": "Determines the processing capacity and feature set of the flow. Set this optional parameter to LARGE if you want to enable NDI outputs on the flow."
  },
  {
    "name": "ndi_config",
    "type": "object",
    "description": "Specifies the configuration settings for NDI outputs. Required when the flow includes NDI outputs.",
    "children": [
      {
        "name": "ndi_discovery_servers",
        "type": "array",
        "description": "A list of up to three NDI discovery server configurations. While not required by the API, this configuration is necessary for NDI functionality to work properly.",
        "children": [
          {
            "name": "vpc_interface_adapter",
            "type": "string",
            "description": "The identifier for the Virtual Private Cloud (VPC) network interface used by the flow."
          },
          {
            "name": "discovery_server_address",
            "type": "string",
            "description": "The unique network address of the NDI discovery server."
          },
          {
            "name": "discovery_server_port",
            "type": "integer",
            "description": "The port for the NDI discovery server. Defaults to 5959 if a custom port isn't specified."
          }
        ]
      },
      {
        "name": "ndi_state",
        "type": "string",
        "description": "A setting that controls whether NDI outputs can be used in the flow. Must be ENABLED to add NDI outputs. Default is DISABLED."
      },
      {
        "name": "machine_name",
        "type": "string",
        "description": "A prefix for the names of the NDI sources that the flow creates. If a custom name isn't specified, MediaConnect generates a unique 12-character ID as the prefix."
      }
    ]
  },
  {
    "name": "flow_ndi_machine_name",
    "type": "string",
    "description": "A prefix for the names of the NDI sources that the flow creates.(ReadOnly)"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html"><code>AWS::MediaConnect::Flow</code></a>.

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
    <td><CopyableCode code="Name, Source, region" /></td>
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

Gets all properties from an individual <code>flow</code>.
```sql
SELECT
region,
flow_arn,
egress_ip,
name,
availability_zone,
flow_availability_zone,
source,
source_failover_config,
vpc_interfaces,
media_streams,
maintenance,
source_monitoring_config,
flow_size,
ndi_config,
flow_ndi_machine_name
FROM awscc.mediaconnect.flows
WHERE region = 'us-east-1' AND data__Identifier = '<FlowArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>flow</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.mediaconnect.flows (
 Name,
 Source,
 region
)
SELECT 
'{{ Name }}',
 '{{ Source }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.mediaconnect.flows (
 Name,
 AvailabilityZone,
 Source,
 SourceFailoverConfig,
 VpcInterfaces,
 MediaStreams,
 Maintenance,
 SourceMonitoringConfig,
 FlowSize,
 NdiConfig,
 region
)
SELECT 
 '{{ Name }}',
 '{{ AvailabilityZone }}',
 '{{ Source }}',
 '{{ SourceFailoverConfig }}',
 '{{ VpcInterfaces }}',
 '{{ MediaStreams }}',
 '{{ Maintenance }}',
 '{{ SourceMonitoringConfig }}',
 '{{ FlowSize }}',
 '{{ NdiConfig }}',
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
  - name: flow
    props:
      - name: Name
        value: '{{ Name }}'
      - name: AvailabilityZone
        value: '{{ AvailabilityZone }}'
      - name: Source
        value:
          SourceArn: '{{ SourceArn }}'
          Decryption:
            Algorithm: '{{ Algorithm }}'
            ConstantInitializationVector: '{{ ConstantInitializationVector }}'
            DeviceId: '{{ DeviceId }}'
            KeyType: '{{ KeyType }}'
            Region: '{{ Region }}'
            ResourceId: '{{ ResourceId }}'
            RoleArn: '{{ RoleArn }}'
            SecretArn: '{{ SecretArn }}'
            Url: '{{ Url }}'
          Description: '{{ Description }}'
          EntitlementArn: '{{ EntitlementArn }}'
          GatewayBridgeSource:
            BridgeArn: '{{ BridgeArn }}'
            VpcInterfaceAttachment:
              VpcInterfaceName: '{{ VpcInterfaceName }}'
          IngestIp: '{{ IngestIp }}'
          IngestPort: '{{ IngestPort }}'
          MaxBitrate: '{{ MaxBitrate }}'
          MaxLatency: '{{ MaxLatency }}'
          MinLatency: '{{ MinLatency }}'
          Name: '{{ Name }}'
          Protocol: '{{ Protocol }}'
          SenderIpAddress: '{{ SenderIpAddress }}'
          SenderControlPort: '{{ SenderControlPort }}'
          StreamId: '{{ StreamId }}'
          SourceIngestPort: '{{ SourceIngestPort }}'
          SourceListenerAddress: '{{ SourceListenerAddress }}'
          SourceListenerPort: '{{ SourceListenerPort }}'
          VpcInterfaceName: '{{ VpcInterfaceName }}'
          WhitelistCidr: '{{ WhitelistCidr }}'
          MaxSyncBuffer: '{{ MaxSyncBuffer }}'
          MediaStreamSourceConfigurations:
            - EncodingName: '{{ EncodingName }}'
              InputConfigurations:
                - InputPort: '{{ InputPort }}'
                  Interface:
                    Name: '{{ Name }}'
              MediaStreamName: '{{ MediaStreamName }}'
      - name: SourceFailoverConfig
        value:
          State: '{{ State }}'
          RecoveryWindow: '{{ RecoveryWindow }}'
          FailoverMode: '{{ FailoverMode }}'
          SourcePriority:
            PrimarySource: '{{ PrimarySource }}'
      - name: VpcInterfaces
        value:
          - Name: '{{ Name }}'
            NetworkInterfaceType: '{{ NetworkInterfaceType }}'
            RoleArn: '{{ RoleArn }}'
            SecurityGroupIds:
              - '{{ SecurityGroupIds[0] }}'
            SubnetId: '{{ SubnetId }}'
            NetworkInterfaceIds:
              - '{{ NetworkInterfaceIds[0] }}'
      - name: MediaStreams
        value:
          - MediaStreamId: '{{ MediaStreamId }}'
            MediaStreamType: '{{ MediaStreamType }}'
            VideoFormat: '{{ VideoFormat }}'
            MediaStreamName: '{{ MediaStreamName }}'
            Description: '{{ Description }}'
            Attributes:
              Fmtp:
                ExactFramerate: '{{ ExactFramerate }}'
                Colorimetry: '{{ Colorimetry }}'
                ScanMode: '{{ ScanMode }}'
                Tcs: '{{ Tcs }}'
                Range: '{{ Range }}'
                Par: '{{ Par }}'
                ChannelOrder: '{{ ChannelOrder }}'
              Lang: '{{ Lang }}'
            ClockRate: '{{ ClockRate }}'
            Fmt: '{{ Fmt }}'
      - name: Maintenance
        value:
          MaintenanceDay: '{{ MaintenanceDay }}'
          MaintenanceStartHour: '{{ MaintenanceStartHour }}'
      - name: SourceMonitoringConfig
        value:
          ThumbnailState: '{{ ThumbnailState }}'
          ContentQualityAnalysisState: '{{ ContentQualityAnalysisState }}'
          AudioMonitoringSettings:
            - SilentAudio:
                State: '{{ State }}'
                ThresholdSeconds: '{{ ThresholdSeconds }}'
          VideoMonitoringSettings:
            - BlackFrames:
                State: '{{ State }}'
                ThresholdSeconds: '{{ ThresholdSeconds }}'
              FrozenFrames:
                State: '{{ State }}'
                ThresholdSeconds: '{{ ThresholdSeconds }}'
      - name: FlowSize
        value: '{{ FlowSize }}'
      - name: NdiConfig
        value:
          NdiDiscoveryServers:
            - VpcInterfaceAdapter: '{{ VpcInterfaceAdapter }}'
              DiscoveryServerAddress: '{{ DiscoveryServerAddress }}'
              DiscoveryServerPort: '{{ DiscoveryServerPort }}'
          NdiState: '{{ NdiState }}'
          MachineName: '{{ MachineName }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.mediaconnect.flows
WHERE data__Identifier = '<FlowArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>flows</code> resource, the following permissions are required:

### Create
```json
mediaconnect:CreateFlow,
mediaconnect:AddFlowMediaStreams,
mediaconnect:AddFlowSources,
mediaconnect:AddFlowVpcInterfaces,
iam:PassRole
```

### Read
```json
mediaconnect:DescribeFlow
```

### Update
```json
mediaconnect:DescribeFlow,
mediaconnect:UpdateFlow,
mediaconnect:UpdateFlowSource,
mediaconnect:UpdateFlowMediaStream,
mediaconnect:AddFlowMediaStreams,
mediaconnect:RemoveFlowMediaStream,
mediaconnect:AddFlowVpcInterfaces,
mediaconnect:RemoveFlowVpcInterface
```

### Delete
```json
mediaconnect:DescribeFlow,
mediaconnect:DeleteFlow,
mediaconnect:RemoveFlowMediaStream,
mediaconnect:RemoveFlowOutput,
mediaconnect:RemoveFlowSource,
mediaconnect:RemoveFlowVpcInterface,
mediaconnect:RevokeFlowEntitlement
```

### List
```json
mediaconnect:ListFlows
```
