---
title: flow_outputs
hide_title: false
hide_table_of_contents: false
keywords:
  - flow_outputs
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

Creates, updates, deletes or gets a <code>flow_output</code> resource or lists <code>flow_outputs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>flow_outputs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::MediaConnect::FlowOutput</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.mediaconnect.flow_outputs" /></td></tr>
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
    "name": "flow_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow."
  },
  {
    "name": "output_arn",
    "type": "string",
    "description": "The ARN of the output."
  },
  {
    "name": "cidr_allow_list",
    "type": "array",
    "description": "The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16."
  },
  {
    "name": "encryption",
    "type": "object",
    "description": "The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).",
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
    "description": "A description of the output."
  },
  {
    "name": "destination",
    "type": "string",
    "description": "The address where you want to send the output."
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
    "description": "The name of the output. This value must be unique within the current flow."
  },
  {
    "name": "port",
    "type": "integer",
    "description": "The port to use when content is distributed to this output."
  },
  {
    "name": "protocol",
    "type": "string",
    "description": "The protocol that is used by the source or output."
  },
  {
    "name": "remote_id",
    "type": "string",
    "description": "The remote ID for the Zixi-pull stream."
  },
  {
    "name": "smoothing_latency",
    "type": "integer",
    "description": "The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams."
  },
  {
    "name": "stream_id",
    "type": "string",
    "description": "The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams."
  },
  {
    "name": "vpc_interface_attachment",
    "type": "object",
    "description": "The name of the VPC interface attachment to use for this output.",
    "children": [
      {
        "name": "vpc_interface_name",
        "type": "string",
        "description": "The name of the VPC interface to use for this resource."
      }
    ]
  },
  {
    "name": "media_stream_output_configurations",
    "type": "array",
    "description": "The definition for each media stream that is associated with the output.",
    "children": [
      {
        "name": "encoding_name",
        "type": "string",
        "description": "The format that will be used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video streams on sources or outputs that use the CDI protocol, set the encoding name to raw. For video streams on sources or outputs that use the ST 2110 JPEG XS protocol, set the encoding name to jxsv."
      },
      {
        "name": "destination_configurations",
        "type": "array",
        "description": "The media streams that you want to associate with the output.",
        "children": [
          {
            "name": "destination_ip",
            "type": "string",
            "description": "The IP address where contents of the media stream will be sent."
          },
          {
            "name": "destination_port",
            "type": "integer",
            "description": "The port to use when the content of the media stream is distributed to the output."
          },
          {
            "name": "interface",
            "type": "object",
            "description": "The VPC interface that is used for the media stream associated with the output.",
            "children": [
              {
                "name": "name",
                "type": "string",
                "description": "The name of the VPC interface that you want to use for the media stream associated with the output."
              }
            ]
          }
        ]
      },
      {
        "name": "media_stream_name",
        "type": "string",
        "description": "A name that helps you distinguish one media stream from another."
      },
      {
        "name": "encoding_parameters",
        "type": "object",
        "description": "A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.",
        "children": [
          {
            "name": "compression_factor",
            "type": "number",
            "description": "A value that is used to calculate compression for an output. The bitrate of the output is calculated as follows: Output bitrate = (1 / compressionFactor) &#42; (source bitrate) This property only applies to outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol. Valid values are in the range of 3.0 to 10.0, inclusive."
          },
          {
            "name": "encoder_profile",
            "type": "string",
            "description": "A setting on the encoder that drives compression settings. This property only applies to video media streams associated with outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol."
          }
        ]
      }
    ]
  },
  {
    "name": "output_status",
    "type": "string",
    "description": "An indication of whether the output should transmit data or not."
  },
  {
    "name": "ndi_program_name",
    "type": "string",
    "description": "A suffix for the names of the NDI sources that the flow creates. If a custom name isn't specified, MediaConnect uses the output name."
  },
  {
    "name": "ndi_speed_hq_quality",
    "type": "integer",
    "description": "A quality setting for the NDI Speed HQ encoder."
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
    "name": "output_arn",
    "type": "string",
    "description": "The ARN of the output."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html"><code>AWS::MediaConnect::FlowOutput</code></a>.

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
    <td><code>flow_outputs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="FlowArn, Protocol, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>flow_outputs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>flow_outputs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>flow_outputs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>flow_outputs</code></td>
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

Gets all properties from an individual <code>flow_output</code>.
```sql
SELECT
region,
flow_arn,
output_arn,
cidr_allow_list,
encryption,
description,
destination,
max_latency,
min_latency,
name,
port,
protocol,
remote_id,
smoothing_latency,
stream_id,
vpc_interface_attachment,
media_stream_output_configurations,
output_status,
ndi_program_name,
ndi_speed_hq_quality
FROM awscc.mediaconnect.flow_outputs
WHERE region = 'us-east-1' AND Identifier = '{{ output_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>flow_outputs</code> in a region.
```sql
SELECT
region,
output_arn
FROM awscc.mediaconnect.flow_outputs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>flow_output</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.mediaconnect.flow_outputs (
 FlowArn,
 Protocol,
 region
)
SELECT
'{{ flow_arn }}',
 '{{ protocol }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.mediaconnect.flow_outputs (
 FlowArn,
 CidrAllowList,
 Encryption,
 Description,
 Destination,
 MaxLatency,
 MinLatency,
 Name,
 Port,
 Protocol,
 RemoteId,
 SmoothingLatency,
 StreamId,
 VpcInterfaceAttachment,
 MediaStreamOutputConfigurations,
 OutputStatus,
 NdiProgramName,
 NdiSpeedHqQuality,
 region
)
SELECT
 '{{ flow_arn }}',
 '{{ cidr_allow_list }}',
 '{{ encryption }}',
 '{{ description }}',
 '{{ destination }}',
 '{{ max_latency }}',
 '{{ min_latency }}',
 '{{ name }}',
 '{{ port }}',
 '{{ protocol }}',
 '{{ remote_id }}',
 '{{ smoothing_latency }}',
 '{{ stream_id }}',
 '{{ vpc_interface_attachment }}',
 '{{ media_stream_output_configurations }}',
 '{{ output_status }}',
 '{{ ndi_program_name }}',
 '{{ ndi_speed_hq_quality }}',
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
  - name: flow_output
    props:
      - name: flow_arn
        value: '{{ flow_arn }}'
      - name: cidr_allow_list
        value:
          - '{{ cidr_allow_list[0] }}'
      - name: encryption
        value:
          algorithm: '{{ algorithm }}'
          constant_initialization_vector: '{{ constant_initialization_vector }}'
          device_id: '{{ device_id }}'
          key_type: '{{ key_type }}'
          region: '{{ region }}'
          resource_id: '{{ resource_id }}'
          role_arn: '{{ role_arn }}'
          secret_arn: '{{ secret_arn }}'
          url: '{{ url }}'
      - name: description
        value: '{{ description }}'
      - name: destination
        value: '{{ destination }}'
      - name: max_latency
        value: '{{ max_latency }}'
      - name: min_latency
        value: '{{ min_latency }}'
      - name: name
        value: '{{ name }}'
      - name: port
        value: '{{ port }}'
      - name: protocol
        value: '{{ protocol }}'
      - name: remote_id
        value: '{{ remote_id }}'
      - name: smoothing_latency
        value: '{{ smoothing_latency }}'
      - name: stream_id
        value: '{{ stream_id }}'
      - name: vpc_interface_attachment
        value:
          vpc_interface_name: '{{ vpc_interface_name }}'
      - name: media_stream_output_configurations
        value:
          - encoding_name: '{{ encoding_name }}'
            destination_configurations:
              - destination_ip: '{{ destination_ip }}'
                destination_port: '{{ destination_port }}'
                interface:
                  name: '{{ name }}'
            media_stream_name: '{{ media_stream_name }}'
            encoding_parameters:
              compression_factor: null
              encoder_profile: '{{ encoder_profile }}'
      - name: output_status
        value: '{{ output_status }}'
      - name: ndi_program_name
        value: '{{ ndi_program_name }}'
      - name: ndi_speed_hq_quality
        value: '{{ ndi_speed_hq_quality }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>flow_output</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.mediaconnect.flow_outputs
SET PatchDocument = string('{{ {
    "FlowArn": flow_arn,
    "CidrAllowList": cidr_allow_list,
    "Encryption": encryption,
    "Description": description,
    "Destination": destination,
    "MaxLatency": max_latency,
    "MinLatency": min_latency,
    "Port": port,
    "Protocol": protocol,
    "RemoteId": remote_id,
    "SmoothingLatency": smoothing_latency,
    "StreamId": stream_id,
    "VpcInterfaceAttachment": vpc_interface_attachment,
    "MediaStreamOutputConfigurations": media_stream_output_configurations,
    "OutputStatus": output_status,
    "NdiProgramName": ndi_program_name,
    "NdiSpeedHqQuality": ndi_speed_hq_quality
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ output_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.mediaconnect.flow_outputs
WHERE Identifier = '{{ output_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>flow_outputs</code> resource, the following permissions are required:

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
iam:PassRole,
mediaconnect:AddFlowOutputs
```

</TabItem>
<TabItem value="read">

```json
mediaconnect:DescribeFlow
```

</TabItem>
<TabItem value="update">

```json
mediaconnect:DescribeFlow,
mediaconnect:UpdateFlowOutput
```

</TabItem>
<TabItem value="delete">

```json
mediaconnect:DescribeFlow,
mediaconnect:RemoveFlowOutput
```

</TabItem>
<TabItem value="list">

```json
mediaconnect:DescribeFlow,
mediaconnect:ListFlows
```

</TabItem>
</Tabs>