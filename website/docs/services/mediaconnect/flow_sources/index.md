---
title: flow_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - flow_sources
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

Creates, updates, deletes or gets a <code>flow_source</code> resource or lists <code>flow_sources</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>flow_sources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::MediaConnect::FlowSource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.mediaconnect.flow_sources" /></td></tr>
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
    "description": "The ARN of the flow."
  },
  {
    "name": "source_arn",
    "type": "string",
    "description": "The ARN of the source."
  },
  {
    "name": "decryption",
    "type": "object",
    "description": "The type of encryption that is used on the content ingested from this source.",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "source_arn",
    "type": "string",
    "description": "The ARN of the source."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html"><code>AWS::MediaConnect::FlowSource</code></a>.

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
    <td><code>flow_sources</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, Description, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>flow_sources</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>flow_sources</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>flow_sources_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>flow_sources</code></td>
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

Gets all properties from an individual <code>flow_source</code>.
```sql
SELECT
region,
flow_arn,
source_arn,
decryption,
description,
entitlement_arn,
gateway_bridge_source,
ingest_ip,
ingest_port,
max_bitrate,
max_latency,
min_latency,
name,
protocol,
sender_ip_address,
sender_control_port,
stream_id,
source_ingest_port,
source_listener_address,
source_listener_port,
vpc_interface_name,
whitelist_cidr
FROM awscc.mediaconnect.flow_sources
WHERE region = 'us-east-1' AND Identifier = '<SourceArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>flow_sources</code> in a region.
```sql
SELECT
region,
source_arn
FROM awscc.mediaconnect.flow_sources_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>flow_source</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.mediaconnect.flow_sources (
 Description,
 Name,
 region
)
SELECT 
'{{ Description }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.mediaconnect.flow_sources (
 FlowArn,
 Decryption,
 Description,
 EntitlementArn,
 GatewayBridgeSource,
 IngestPort,
 MaxBitrate,
 MaxLatency,
 MinLatency,
 Name,
 Protocol,
 SenderIpAddress,
 SenderControlPort,
 StreamId,
 SourceListenerAddress,
 SourceListenerPort,
 VpcInterfaceName,
 WhitelistCidr,
 region
)
SELECT 
 '{{ FlowArn }}',
 '{{ Decryption }}',
 '{{ Description }}',
 '{{ EntitlementArn }}',
 '{{ GatewayBridgeSource }}',
 '{{ IngestPort }}',
 '{{ MaxBitrate }}',
 '{{ MaxLatency }}',
 '{{ MinLatency }}',
 '{{ Name }}',
 '{{ Protocol }}',
 '{{ SenderIpAddress }}',
 '{{ SenderControlPort }}',
 '{{ StreamId }}',
 '{{ SourceListenerAddress }}',
 '{{ SourceListenerPort }}',
 '{{ VpcInterfaceName }}',
 '{{ WhitelistCidr }}',
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
  - name: flow_source
    props:
      - name: FlowArn
        value: '{{ FlowArn }}'
      - name: Decryption
        value:
          Algorithm: '{{ Algorithm }}'
          ConstantInitializationVector: '{{ ConstantInitializationVector }}'
          DeviceId: '{{ DeviceId }}'
          KeyType: '{{ KeyType }}'
          Region: '{{ Region }}'
          ResourceId: '{{ ResourceId }}'
          RoleArn: '{{ RoleArn }}'
          SecretArn: '{{ SecretArn }}'
          Url: '{{ Url }}'
      - name: Description
        value: '{{ Description }}'
      - name: EntitlementArn
        value: '{{ EntitlementArn }}'
      - name: GatewayBridgeSource
        value:
          BridgeArn: '{{ BridgeArn }}'
          VpcInterfaceAttachment:
            VpcInterfaceName: '{{ VpcInterfaceName }}'
      - name: IngestPort
        value: '{{ IngestPort }}'
      - name: MaxBitrate
        value: '{{ MaxBitrate }}'
      - name: MaxLatency
        value: '{{ MaxLatency }}'
      - name: MinLatency
        value: '{{ MinLatency }}'
      - name: Name
        value: '{{ Name }}'
      - name: Protocol
        value: '{{ Protocol }}'
      - name: SenderIpAddress
        value: '{{ SenderIpAddress }}'
      - name: SenderControlPort
        value: '{{ SenderControlPort }}'
      - name: StreamId
        value: '{{ StreamId }}'
      - name: SourceListenerAddress
        value: '{{ SourceListenerAddress }}'
      - name: SourceListenerPort
        value: '{{ SourceListenerPort }}'
      - name: VpcInterfaceName
        value: '{{ VpcInterfaceName }}'
      - name: WhitelistCidr
        value: '{{ WhitelistCidr }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>flow_source</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.mediaconnect.flow_sources
SET PatchDocument = string('{{ {
    "FlowArn": flow_arn,
    "Decryption": decryption,
    "Description": description,
    "EntitlementArn": entitlement_arn,
    "GatewayBridgeSource": gateway_bridge_source,
    "IngestPort": ingest_port,
    "MaxBitrate": max_bitrate,
    "MaxLatency": max_latency,
    "MinLatency": min_latency,
    "Protocol": protocol,
    "SenderIpAddress": sender_ip_address,
    "SenderControlPort": sender_control_port,
    "StreamId": stream_id,
    "SourceListenerAddress": source_listener_address,
    "SourceListenerPort": source_listener_port,
    "VpcInterfaceName": vpc_interface_name,
    "WhitelistCidr": whitelist_cidr
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<SourceArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.mediaconnect.flow_sources
WHERE Identifier = '<SourceArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>flow_sources</code> resource, the following permissions are required:

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
mediaconnect:CreateFlow,
mediaconnect:DescribeFlow,
mediaconnect:AddFlowSources,
iam:PassRole
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
mediaconnect:UpdateFlowSource
```

</TabItem>
<TabItem value="delete">

```json
mediaconnect:DescribeFlow,
mediaconnect:RemoveFlowSource
```

</TabItem>
<TabItem value="list">

```json
mediaconnect:DescribeFlow,
mediaconnect:ListFlows
```

</TabItem>
</Tabs>