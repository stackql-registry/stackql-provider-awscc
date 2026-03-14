---
title: vpn_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - vpn_connections
  - ec2
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

Creates, updates, deletes or gets a <code>vpn_connection</code> resource or lists <code>vpn_connections</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vpn_connections</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>Specifies a VPN connection between a virtual private gateway and a VPN customer gateway or a transit gateway and a VPN customer gateway.</summary>To specify a VPN connection between a transit gateway and customer gateway, use the <code>TransitGatewayId</code> and <code>CustomerGatewayId</code> properties.<br />To specify a VPN connection between a virtual private gateway and customer gateway, use the <code>VpnGatewayId</code> and <code>CustomerGatewayId</code> properties.<br />For more information, see [](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html) in the <i>User Guide</i>.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.vpn_connections" /></td></tr>
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
    "name": "remote_ipv6_network_cidr",
    "type": "string",
    "description": "<details><summary>The IPv6 CIDR on the AWS side of the VPN connection.</summary>Default: <code>::/0</code></details>"
  },
  {
    "name": "remote_ipv4_network_cidr",
    "type": "string",
    "description": "<details><summary>The IPv4 CIDR on the AWS side of the VPN connection.</summary>Default: <code>0.0.0.0/0</code></details>"
  },
  {
    "name": "vpn_tunnel_options_specifications",
    "type": "array",
    "description": "The tunnel options for the VPN connection.",
    "children": [
      {
        "name": "phase2_encryption_algorithms",
        "type": "array",
        "description": "<details><summary>One or more encryption algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.</summary>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> | <code>AES256-GCM-16</code></details>",
        "children": [
          {
            "name": "value",
            "type": "string",
            "description": "The encryption algorithm."
          }
        ]
      },
      {
        "name": "phase2_dh_group_numbers",
        "type": "array",
        "description": "<details><summary>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 2 IKE negotiations.</summary>Valid values: <code>2</code> | <code>5</code> | <code>14</code> | <code>15</code> | <code>16</code> | <code>17</code> | <code>18</code> | <code>19</code> | <code>20</code> | <code>21</code> | <code>22</code> | <code>23</code> | <code>24</code></details>",
        "children": [
          {
            "name": "value",
            "type": "integer",
            "description": "The Diffie-Hellmann group number."
          }
        ]
      },
      {
        "name": "tunnel_inside_ipv6_cidr",
        "type": "string",
        "description": "<details><summary>The range of inside IPv6 addresses for the tunnel. Any specified CIDR blocks must be unique across all VPN connections that use the same transit gateway.</summary>Constraints: A size /126 CIDR block from the local <code>fd00::/8</code> range.</details>"
      },
      {
        "name": "startup_action",
        "type": "string",
        "description": "<details><summary>The action to take when the establishing the tunnel for the VPN connection. By default, your customer gateway device must initiate the IKE negotiation and bring up the tunnel. Specify <code>start</code> for AWS to initiate the IKE negotiation.</summary>Valid Values: <code>add</code> | <code>start</code><br />Default: <code>add</code></details>"
      },
      {
        "name": "tunnel_inside_cidr",
        "type": "string",
        "description": "<details><summary>The range of inside IP addresses for the tunnel. Any specified CIDR blocks must be unique across all VPN connections that use the same virtual private gateway.</summary>Constraints: A size /30 CIDR block from the <code>169.254.0.0/16</code> range. The following CIDR blocks are reserved and cannot be used:<br />+   <code>169.254.0.0/30</code><br />+   <code>169.254.1.0/30</code><br />+   <code>169.254.2.0/30</code><br />+   <code>169.254.3.0/30</code><br />+   <code>169.254.4.0/30</code><br />+   <code>169.254.5.0/30</code><br />+   <code>169.254.169.252/30</code></details>"
      },
      {
        "name": "i_ke_versions",
        "type": "array",
        "description": "<details><summary>The IKE versions that are permitted for the VPN tunnel.</summary>Valid values: <code>ikev1</code> | <code>ikev2</code></details>",
        "children": [
          {
            "name": "value",
            "type": "string",
            "description": "The IKE version."
          }
        ]
      },
      {
        "name": "log_options",
        "type": "object",
        "description": "Options for logging VPN tunnel activity.",
        "children": [
          {
            "name": "cloudwatch_log_options",
            "type": "object",
            "description": "Options for sending VPN tunnel logs to CloudWatch.",
            "children": [
              {
                "name": "log_enabled",
                "type": "boolean",
                "description": "<details><summary>Enable or disable VPN tunnel logging feature. Default value is <code>False</code>.</summary>Valid values: <code>True</code> | <code>False</code></details>"
              },
              {
                "name": "log_output_format",
                "type": "string",
                "description": "<details><summary>Set log format. Default format is <code>json</code>.</summary>Valid values: <code>json</code> | <code>text</code></details>"
              },
              {
                "name": "log_group_arn",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the CloudWatch log group to send logs to."
              }
            ]
          }
        ]
      },
      {
        "name": "phase1_dh_group_numbers",
        "type": "array",
        "description": "<details><summary>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 1 IKE negotiations.</summary>Valid values: <code>2</code> | <code>14</code> | <code>15</code> | <code>16</code> | <code>17</code> | <code>18</code> | <code>19</code> | <code>20</code> | <code>21</code> | <code>22</code> | <code>23</code> | <code>24</code></details>",
        "children": [
          {
            "name": "value",
            "type": "integer",
            "description": "The Diffie-Hellmann group number."
          }
        ]
      },
      {
        "name": "replay_window_size",
        "type": "integer",
        "description": "<details><summary>The number of packets in an IKE replay window.</summary>Constraints: A value between 64 and 2048.<br />Default: <code>1024</code></details>"
      },
      {
        "name": "enable_tunnel_lifecycle_control",
        "type": "boolean",
        "description": "Turn on or off tunnel endpoint lifecycle control feature."
      },
      {
        "name": "rekey_margin_time_seconds",
        "type": "integer",
        "description": "<details><summary>The margin time, in seconds, before the phase 2 lifetime expires, during which the AWS side of the VPN connection performs an IKE rekey. The exact time of the rekey is randomly selected based on the value for <code>RekeyFuzzPercentage</code>.</summary>Constraints: A value between 60 and half of <code>Phase2LifetimeSeconds</code>.<br />Default: <code>270</code></details>"
      },
      {
        "name": "d_pd_timeout_action",
        "type": "string",
        "description": "<details><summary>The action to take after DPD timeout occurs. Specify <code>restart</code> to restart the IKE initiation. Specify <code>clear</code> to end the IKE session.</summary>Valid Values: <code>clear</code> | <code>none</code> | <code>restart</code><br />Default: <code>clear</code></details>"
      },
      {
        "name": "phase2_lifetime_seconds",
        "type": "integer",
        "description": "<details><summary>The lifetime for phase 2 of the IKE negotiation, in seconds.</summary>Constraints: A value between 900 and 3,600. The value must be less than the value for <code>Phase1LifetimeSeconds</code>.<br />Default: <code>3600</code></details>"
      },
      {
        "name": "phase2_integrity_algorithms",
        "type": "array",
        "description": "<details><summary>One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.</summary>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> | <code>SHA2-512</code></details>",
        "children": [
          {
            "name": "value",
            "type": "string",
            "description": "The integrity algorithm."
          }
        ]
      },
      {
        "name": "phase1_integrity_algorithms",
        "type": "array",
        "description": "<details><summary>One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.</summary>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> | <code>SHA2-512</code></details>",
        "children": [
          {
            "name": "value",
            "type": "string",
            "description": "The value for the integrity algorithm."
          }
        ]
      },
      {
        "name": "pre_shared_key",
        "type": "string",
        "description": "<details><summary>The pre-shared key (PSK) to establish initial authentication between the virtual private gateway and customer gateway.</summary>Constraints: Allowed characters are alphanumeric characters, periods (.), and underscores (_). Must be between 8 and 64 characters in length and cannot start with zero (0).</details>"
      },
      {
        "name": "phase1_lifetime_seconds",
        "type": "integer",
        "description": "<details><summary>The lifetime for phase 1 of the IKE negotiation, in seconds.</summary>Constraints: A value between 900 and 28,800.<br />Default: <code>28800</code></details>"
      },
      {
        "name": "rekey_fuzz_percentage",
        "type": "integer",
        "description": "<details><summary>The percentage of the rekey window (determined by <code>RekeyMarginTimeSeconds</code>) during which the rekey time is randomly selected.</summary>Constraints: A value between 0 and 100.<br />Default: <code>100</code></details>"
      },
      {
        "name": "phase1_encryption_algorithms",
        "type": "array",
        "description": "<details><summary>One or more encryption algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.</summary>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> | <code>AES256-GCM-16</code></details>",
        "children": [
          {
            "name": "value",
            "type": "string",
            "description": "The value for the encryption algorithm."
          }
        ]
      },
      {
        "name": "d_pd_timeout_seconds",
        "type": "integer",
        "description": "<details><summary>The number of seconds after which a DPD timeout occurs.</summary>Constraints: A value greater than or equal to 30.<br />Default: <code>30</code></details>"
      }
    ]
  },
  {
    "name": "customer_gateway_id",
    "type": "string",
    "description": "The ID of the customer gateway at your end of the VPN connection."
  },
  {
    "name": "outside_ip_address_type",
    "type": "string",
    "description": "<details><summary>The type of IP address assigned to the outside interface of the customer gateway device.</summary>Valid values: <code>PrivateIpv4</code> | <code>PublicIpv4</code> | <code>Ipv6</code><br />Default: <code>PublicIpv4</code></details>"
  },
  {
    "name": "static_routes_only",
    "type": "boolean",
    "description": "<details><summary>Indicates whether the VPN connection uses static routes only. Static routes must be used for devices that don't support BGP.</summary>If you are creating a VPN connection for a device that does not support Border Gateway Protocol (BGP), you must specify <code>true</code>.</details>"
  },
  {
    "name": "enable_acceleration",
    "type": "boolean",
    "description": "<details><summary>Indicate whether to enable acceleration for the VPN connection.</summary>Default: <code>false</code></details>"
  },
  {
    "name": "transit_gateway_id",
    "type": "string",
    "description": "<details><summary>The ID of the transit gateway associated with the VPN connection.</summary>You must specify either <code>TransitGatewayId</code> or <code>VpnGatewayId</code>, but not both.</details>"
  },
  {
    "name": "type",
    "type": "string",
    "description": "The type of VPN connection."
  },
  {
    "name": "local_ipv4_network_cidr",
    "type": "string",
    "description": "<details><summary>The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.</summary>Default: <code>0.0.0.0/0</code></details>"
  },
  {
    "name": "vpn_gateway_id",
    "type": "string",
    "description": "<details><summary>The ID of the virtual private gateway at the AWS side of the VPN connection.</summary>You must specify either <code>TransitGatewayId</code> or <code>VpnGatewayId</code>, but not both.</details>"
  },
  {
    "name": "pre_shared_key_storage",
    "type": "string",
    "description": "Describes the storage location for an instance store-backed AMI."
  },
  {
    "name": "transport_transit_gateway_attachment_id",
    "type": "string",
    "description": "<details><summary>The transit gateway attachment ID to use for the VPN tunnel.</summary>Required if <code>OutsideIpAddressType</code> is set to <code>PrivateIpv4</code>.</details>"
  },
  {
    "name": "local_ipv6_network_cidr",
    "type": "string",
    "description": "<details><summary>The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.</summary>Default: <code>::/0</code></details>"
  },
  {
    "name": "vpn_connection_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "tunnel_inside_ip_version",
    "type": "string",
    "description": "<details><summary>Indicate whether the VPN tunnels process IPv4 or IPv6 traffic.</summary>Default: <code>ipv4</code></details>"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Any tags assigned to the VPN connection.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The tag key."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The tag value."
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
    "name": "vpn_connection_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html"><code>AWS::EC2::VPNConnection</code></a>.

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
    <td><code>vpn_connections</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Type, CustomerGatewayId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>vpn_connections</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>vpn_connections</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>vpn_connections_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>vpn_connections</code></td>
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

Gets all properties from an individual <code>vpn_connection</code>.
```sql
SELECT
  region,
  remote_ipv6_network_cidr,
  remote_ipv4_network_cidr,
  vpn_tunnel_options_specifications,
  customer_gateway_id,
  outside_ip_address_type,
  static_routes_only,
  enable_acceleration,
  transit_gateway_id,
  type,
  local_ipv4_network_cidr,
  vpn_gateway_id,
  pre_shared_key_storage,
  transport_transit_gateway_attachment_id,
  local_ipv6_network_cidr,
  vpn_connection_id,
  tunnel_inside_ip_version,
  tags
FROM awscc.ec2.vpn_connections
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ vpn_connection_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>vpn_connections</code> in a region.
```sql
SELECT
  region,
  vpn_connection_id
FROM awscc.ec2.vpn_connections_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>vpn_connection</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.vpn_connections (
  CustomerGatewayId,
  Type,
  region
)
SELECT
  '{{ customer_gateway_id }}',
  '{{ type }}',
  '{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.vpn_connections (
  RemoteIpv6NetworkCidr,
  RemoteIpv4NetworkCidr,
  VpnTunnelOptionsSpecifications,
  CustomerGatewayId,
  OutsideIpAddressType,
  StaticRoutesOnly,
  EnableAcceleration,
  TransitGatewayId,
  Type,
  LocalIpv4NetworkCidr,
  VpnGatewayId,
  PreSharedKeyStorage,
  TransportTransitGatewayAttachmentId,
  LocalIpv6NetworkCidr,
  TunnelInsideIpVersion,
  Tags,
  region
)
SELECT
  '{{ remote_ipv6_network_cidr }}',
  '{{ remote_ipv4_network_cidr }}',
  '{{ vpn_tunnel_options_specifications }}',
  '{{ customer_gateway_id }}',
  '{{ outside_ip_address_type }}',
  '{{ static_routes_only }}',
  '{{ enable_acceleration }}',
  '{{ transit_gateway_id }}',
  '{{ type }}',
  '{{ local_ipv4_network_cidr }}',
  '{{ vpn_gateway_id }}',
  '{{ pre_shared_key_storage }}',
  '{{ transport_transit_gateway_attachment_id }}',
  '{{ local_ipv6_network_cidr }}',
  '{{ tunnel_inside_ip_version }}',
  '{{ tags }}',
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
  - name: vpn_connection
    props:
      - name: remote_ipv6_network_cidr
        value: '{{ remote_ipv6_network_cidr }}'
      - name: remote_ipv4_network_cidr
        value: '{{ remote_ipv4_network_cidr }}'
      - name: vpn_tunnel_options_specifications
        value:
          - phase2_encryption_algorithms:
              - value: '{{ value }}'
            phase2_dh_group_numbers:
              - value: '{{ value }}'
            tunnel_inside_ipv6_cidr: '{{ tunnel_inside_ipv6_cidr }}'
            startup_action: '{{ startup_action }}'
            tunnel_inside_cidr: '{{ tunnel_inside_cidr }}'
            i_ke_versions:
              - value: '{{ value }}'
            log_options:
              cloudwatch_log_options:
                log_enabled: '{{ log_enabled }}'
                log_output_format: '{{ log_output_format }}'
                log_group_arn: '{{ log_group_arn }}'
            phase1_dh_group_numbers:
              - value: '{{ value }}'
            replay_window_size: '{{ replay_window_size }}'
            enable_tunnel_lifecycle_control: '{{ enable_tunnel_lifecycle_control }}'
            rekey_margin_time_seconds: '{{ rekey_margin_time_seconds }}'
            d_pd_timeout_action: '{{ d_pd_timeout_action }}'
            phase2_lifetime_seconds: '{{ phase2_lifetime_seconds }}'
            phase2_integrity_algorithms:
              - value: '{{ value }}'
            phase1_integrity_algorithms:
              - value: '{{ value }}'
            pre_shared_key: '{{ pre_shared_key }}'
            phase1_lifetime_seconds: '{{ phase1_lifetime_seconds }}'
            rekey_fuzz_percentage: '{{ rekey_fuzz_percentage }}'
            phase1_encryption_algorithms:
              - value: '{{ value }}'
            d_pd_timeout_seconds: '{{ d_pd_timeout_seconds }}'
      - name: customer_gateway_id
        value: '{{ customer_gateway_id }}'
      - name: outside_ip_address_type
        value: '{{ outside_ip_address_type }}'
      - name: static_routes_only
        value: '{{ static_routes_only }}'
      - name: enable_acceleration
        value: '{{ enable_acceleration }}'
      - name: transit_gateway_id
        value: '{{ transit_gateway_id }}'
      - name: type
        value: '{{ type }}'
      - name: local_ipv4_network_cidr
        value: '{{ local_ipv4_network_cidr }}'
      - name: vpn_gateway_id
        value: '{{ vpn_gateway_id }}'
      - name: pre_shared_key_storage
        value: '{{ pre_shared_key_storage }}'
      - name: transport_transit_gateway_attachment_id
        value: '{{ transport_transit_gateway_attachment_id }}'
      - name: local_ipv6_network_cidr
        value: '{{ local_ipv6_network_cidr }}'
      - name: tunnel_inside_ip_version
        value: '{{ tunnel_inside_ip_version }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>vpn_connection</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.vpn_connections
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ vpn_connection_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.vpn_connections
WHERE
  Identifier = '{{ vpn_connection_id }}' AND
  region = '{{ region }}';
```

## Permissions

To operate on the <code>vpn_connections</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
ec2:DescribeVpnConnections
```

</TabItem>
<TabItem value="create">

```json
ec2:DescribeVpnConnections,
ec2:CreateVpnConnection,
ec2:CreateTags
```

</TabItem>
<TabItem value="update">

```json
ec2:DescribeVpnConnections,
ec2:CreateTags,
ec2:DeleteTags
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeVpnConnections
```

</TabItem>
<TabItem value="delete">

```json
ec2:DescribeVpnConnections,
ec2:DeleteVpnConnection
```

</TabItem>
</Tabs>