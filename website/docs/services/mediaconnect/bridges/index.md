---
title: bridges
hide_title: false
hide_table_of_contents: false
keywords:
  - bridges
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

Creates, updates, deletes or gets a <code>bridge</code> resource or lists <code>bridges</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>bridges</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::MediaConnect::Bridge</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.mediaconnect.bridges" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "The name of the bridge."
  },
  {
    "name": "bridge_arn",
    "type": "string",
    "description": "The Amazon Resource Number (ARN) of the bridge."
  },
  {
    "name": "placement_arn",
    "type": "string",
    "description": "The placement Amazon Resource Number (ARN) of the bridge."
  },
  {
    "name": "bridge_state",
    "type": "string",
    "description": ""
  },
  {
    "name": "source_failover_config",
    "type": "object",
    "description": "The settings for source failover",
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
    "name": "outputs",
    "type": "array",
    "description": "The outputs on this bridge.",
    "children": [
      {
        "name": "bridge_arn",
        "type": "string",
        "description": "The Amazon Resource Number (ARN) of the bridge."
      },
      {
        "name": "network_output",
        "type": "object",
        "description": "The output of the bridge.",
        "children": [
          {
            "name": "protocol",
            "type": "string",
            "description": "The network output protocol."
          },
          {
            "name": "ip_address",
            "type": "string",
            "description": "The network output IP Address."
          },
          {
            "name": "port",
            "type": "integer",
            "description": "The network output port."
          },
          {
            "name": "network_name",
            "type": "string",
            "description": "The network output's gateway network name."
          },
          {
            "name": "ttl",
            "type": "integer",
            "description": "The network output TTL."
          }
        ]
      },
      {
        "name": "name",
        "type": "string",
        "description": "The network output name."
      }
    ]
  },
  {
    "name": "sources",
    "type": "array",
    "description": "The sources on this bridge.",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": "The name of the source."
      },
      {
        "name": "bridge_arn",
        "type": "string",
        "description": "The Amazon Resource Number (ARN) of the bridge."
      },
      {
        "name": "flow_source",
        "type": "object",
        "description": "The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow.",
        "children": [
          {
            "name": "flow_arn",
            "type": "string",
            "description": "The ARN of the cloud flow used as a source of this bridge."
          },
          {
            "name": "flow_vpc_interface_attachment",
            "type": "object",
            "description": "The name of the VPC interface attachment to use for this source.",
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
        "name": "network_source",
        "type": "object",
        "description": "The source of the bridge. A network source originates at your premises.",
        "children": [
          {
            "name": "protocol",
            "type": "string",
            "description": "The network source protocol."
          },
          {
            "name": "multicast_ip",
            "type": "string",
            "description": "The network source multicast IP."
          },
          {
            "name": "multicast_source_settings",
            "type": "object",
            "description": "The settings related to the multicast source.",
            "children": [
              {
                "name": "multicast_source_ip",
                "type": "string",
                "description": "The IP address of the source for source-specific multicast (SSM)."
              }
            ]
          },
          {
            "name": "port",
            "type": "integer",
            "description": "The network source port."
          },
          {
            "name": "network_name",
            "type": "string",
            "description": "The network source's gateway network name."
          }
        ]
      }
    ]
  },
  {
    "name": "ingress_gateway_bridge",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "max_bitrate",
        "type": "integer",
        "description": "The maximum expected bitrate of the ingress bridge."
      },
      {
        "name": "max_outputs",
        "type": "integer",
        "description": "The maximum number of outputs on the ingress bridge."
      }
    ]
  },
  {
    "name": "egress_gateway_bridge",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "max_bitrate",
        "type": "integer",
        "description": "The maximum expected bitrate of the egress bridge."
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
    "name": "bridge_arn",
    "type": "string",
    "description": "The Amazon Resource Number (ARN) of the bridge."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridge.html"><code>AWS::MediaConnect::Bridge</code></a>.

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
    <td><code>bridges</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, PlacementArn, Sources, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>bridges</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>bridges</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>bridges_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>bridges</code></td>
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

Gets all properties from an individual <code>bridge</code>.
```sql
SELECT
region,
name,
bridge_arn,
placement_arn,
bridge_state,
source_failover_config,
outputs,
sources,
ingress_gateway_bridge,
egress_gateway_bridge
FROM awscc.mediaconnect.bridges
WHERE region = 'us-east-1' AND data__Identifier = '<BridgeArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>bridges</code> in a region.
```sql
SELECT
region,
bridge_arn
FROM awscc.mediaconnect.bridges_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>bridge</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.mediaconnect.bridges (
 Name,
 PlacementArn,
 Sources,
 region
)
SELECT 
'{{ Name }}',
 '{{ PlacementArn }}',
 '{{ Sources }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.mediaconnect.bridges (
 Name,
 PlacementArn,
 SourceFailoverConfig,
 Outputs,
 Sources,
 IngressGatewayBridge,
 EgressGatewayBridge,
 region
)
SELECT 
 '{{ Name }}',
 '{{ PlacementArn }}',
 '{{ SourceFailoverConfig }}',
 '{{ Outputs }}',
 '{{ Sources }}',
 '{{ IngressGatewayBridge }}',
 '{{ EgressGatewayBridge }}',
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
  - name: bridge
    props:
      - name: Name
        value: '{{ Name }}'
      - name: PlacementArn
        value: '{{ PlacementArn }}'
      - name: SourceFailoverConfig
        value:
          State: '{{ State }}'
          RecoveryWindow: '{{ RecoveryWindow }}'
          FailoverMode: '{{ FailoverMode }}'
          SourcePriority:
            PrimarySource: '{{ PrimarySource }}'
      - name: Outputs
        value:
          - BridgeArn: '{{ BridgeArn }}'
            NetworkOutput:
              Protocol: '{{ Protocol }}'
              IpAddress: '{{ IpAddress }}'
              Port: '{{ Port }}'
              NetworkName: '{{ NetworkName }}'
              Ttl: '{{ Ttl }}'
            Name: '{{ Name }}'
      - name: Sources
        value:
          - Name: '{{ Name }}'
            BridgeArn: '{{ BridgeArn }}'
            FlowSource:
              FlowArn: '{{ FlowArn }}'
              FlowVpcInterfaceAttachment:
                VpcInterfaceName: '{{ VpcInterfaceName }}'
            NetworkSource:
              Protocol: '{{ Protocol }}'
              MulticastIp: '{{ MulticastIp }}'
              MulticastSourceSettings:
                MulticastSourceIp: '{{ MulticastSourceIp }}'
              Port: '{{ Port }}'
              NetworkName: '{{ NetworkName }}'
      - name: IngressGatewayBridge
        value:
          MaxBitrate: '{{ MaxBitrate }}'
          MaxOutputs: '{{ MaxOutputs }}'
      - name: EgressGatewayBridge
        value:
          MaxBitrate: '{{ MaxBitrate }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.mediaconnect.bridges
SET data__PatchDocument = string('{{ {
    "Name": name,
    "PlacementArn": placement_arn,
    "SourceFailoverConfig": source_failover_config,
    "Outputs": outputs,
    "Sources": sources,
    "IngressGatewayBridge": ingress_gateway_bridge,
    "EgressGatewayBridge": egress_gateway_bridge
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<BridgeArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.mediaconnect.bridges
WHERE data__Identifier = '<BridgeArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>bridges</code> resource, the following permissions are required:

### Create
```json
mediaconnect:CreateBridge,
mediaconnect:DescribeBridge,
mediaconnect:AddBridgeOutputs,
mediaconnect:AddBridgeSources
```

### Read
```json
mediaconnect:DescribeBridge
```

### Update
```json
mediaconnect:DescribeBridge,
mediaconnect:UpdateBridge
```

### Delete
```json
mediaconnect:DescribeBridge,
mediaconnect:DeleteBridge,
mediaconnect:RemoveBridgeOutput,
mediaconnect:RemoveBridgeSource
```

### List
```json
mediaconnect:ListBridges
```
