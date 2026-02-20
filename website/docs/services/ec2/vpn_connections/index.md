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
<tr><td><b>Description</b></td><td>Specifies a VPN connection between a virtual private gateway and a VPN customer gateway or a transit gateway and a VPN customer gateway.<br />To specify a VPN connection between a transit gateway and customer gateway, use the &#96;&#96;TransitGatewayId&#96;&#96; and &#96;&#96;CustomerGatewayId&#96;&#96; properties.<br />To specify a VPN connection between a virtual private gateway and customer gateway, use the &#96;&#96;VpnGatewayId&#96;&#96; and &#96;&#96;CustomerGatewayId&#96;&#96; properties.<br />For more information, see &#91;&#93;(https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC&#95;VPN.html) in the &#42;User Guide&#42;.</td></tr>
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
    "description": "The IPv6 CIDR on the AWS side of the VPN connection.<br />Default: &#96;&#96;::/0&#96;&#96;"
  },
  {
    "name": "remote_ipv4_network_cidr",
    "type": "string",
    "description": "The IPv4 CIDR on the AWS side of the VPN connection.<br />Default: &#96;&#96;0.0.0.0/0&#96;&#96;"
  },
  {
    "name": "vpn_tunnel_options_specifications",
    "type": "array",
    "description": "The tunnel options for the VPN connection.",
    "children": [
      {
        "name": "phase2_encryption_algorithms",
        "type": "array",
        "description": "One or more encryption algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.<br />Valid values: &#96;&#96;AES128&#96;&#96; &#124; &#96;&#96;AES256&#96;&#96; &#124; &#96;&#96;AES128-GCM-16&#96;&#96; &#124; &#96;&#96;AES256-GCM-16&#96;&#96;",
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
        "description": "One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 2 IKE negotiations.<br />Valid values: &#96;&#96;2&#96;&#96; &#124; &#96;&#96;5&#96;&#96; &#124; &#96;&#96;14&#96;&#96; &#124; &#96;&#96;15&#96;&#96; &#124; &#96;&#96;16&#96;&#96; &#124; &#96;&#96;17&#96;&#96; &#124; &#96;&#96;18&#96;&#96; &#124; &#96;&#96;19&#96;&#96; &#124; &#96;&#96;20&#96;&#96; &#124; &#96;&#96;21&#96;&#96; &#124; &#96;&#96;22&#96;&#96; &#124; &#96;&#96;23&#96;&#96; &#124; &#96;&#96;24&#96;&#96;",
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
        "description": "The range of inside IPv6 addresses for the tunnel. Any specified CIDR blocks must be unique across all VPN connections that use the same transit gateway.<br />Constraints: A size /126 CIDR block from the local &#96;&#96;fd00::/8&#96;&#96; range."
      },
      {
        "name": "startup_action",
        "type": "string",
        "description": "The action to take when the establishing the tunnel for the VPN connection. By default, your customer gateway device must initiate the IKE negotiation and bring up the tunnel. Specify &#96;&#96;start&#96;&#96; for AWS to initiate the IKE negotiation.<br />Valid Values: &#96;&#96;add&#96;&#96; &#124; &#96;&#96;start&#96;&#96;<br />Default: &#96;&#96;add&#96;&#96;"
      },
      {
        "name": "tunnel_inside_cidr",
        "type": "string",
        "description": "The range of inside IP addresses for the tunnel. Any specified CIDR blocks must be unique across all VPN connections that use the same virtual private gateway. <br />Constraints: A size /30 CIDR block from the &#96;&#96;169.254.0.0/16&#96;&#96; range. The following CIDR blocks are reserved and cannot be used:<br />+ &#96;&#96;169.254.0.0/30&#96;&#96; <br />+ &#96;&#96;169.254.1.0/30&#96;&#96; <br />+ &#96;&#96;169.254.2.0/30&#96;&#96; <br />+ &#96;&#96;169.254.3.0/30&#96;&#96; <br />+ &#96;&#96;169.254.4.0/30&#96;&#96; <br />+ &#96;&#96;169.254.5.0/30&#96;&#96; <br />+ &#96;&#96;169.254.169.252/30&#96;&#96;"
      },
      {
        "name": "i_ke_versions",
        "type": "array",
        "description": "The IKE versions that are permitted for the VPN tunnel.<br />Valid values: &#96;&#96;ikev1&#96;&#96; &#124; &#96;&#96;ikev2&#96;&#96;",
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
                "description": "Enable or disable VPN tunnel logging feature. Default value is &#96;&#96;False&#96;&#96;.<br />Valid values: &#96;&#96;True&#96;&#96; &#124; &#96;&#96;False&#96;&#96;"
              },
              {
                "name": "log_output_format",
                "type": "string",
                "description": "Set log format. Default format is &#96;&#96;json&#96;&#96;.<br />Valid values: &#96;&#96;json&#96;&#96; &#124; &#96;&#96;text&#96;&#96;"
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
        "description": "One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 1 IKE negotiations.<br />Valid values: &#96;&#96;2&#96;&#96; &#124; &#96;&#96;14&#96;&#96; &#124; &#96;&#96;15&#96;&#96; &#124; &#96;&#96;16&#96;&#96; &#124; &#96;&#96;17&#96;&#96; &#124; &#96;&#96;18&#96;&#96; &#124; &#96;&#96;19&#96;&#96; &#124; &#96;&#96;20&#96;&#96; &#124; &#96;&#96;21&#96;&#96; &#124; &#96;&#96;22&#96;&#96; &#124; &#96;&#96;23&#96;&#96; &#124; &#96;&#96;24&#96;&#96;",
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
        "description": "The number of packets in an IKE replay window.<br />Constraints: A value between 64 and 2048.<br />Default: &#96;&#96;1024&#96;&#96;"
      },
      {
        "name": "enable_tunnel_lifecycle_control",
        "type": "boolean",
        "description": "Turn on or off tunnel endpoint lifecycle control feature."
      },
      {
        "name": "rekey_margin_time_seconds",
        "type": "integer",
        "description": "The margin time, in seconds, before the phase 2 lifetime expires, during which the AWS side of the VPN connection performs an IKE rekey. The exact time of the rekey is randomly selected based on the value for &#96;&#96;RekeyFuzzPercentage&#96;&#96;.<br />Constraints: A value between 60 and half of &#96;&#96;Phase2LifetimeSeconds&#96;&#96;.<br />Default: &#96;&#96;270&#96;&#96;"
      },
      {
        "name": "d_pd_timeout_action",
        "type": "string",
        "description": "The action to take after DPD timeout occurs. Specify &#96;&#96;restart&#96;&#96; to restart the IKE initiation. Specify &#96;&#96;clear&#96;&#96; to end the IKE session.<br />Valid Values: &#96;&#96;clear&#96;&#96; &#124; &#96;&#96;none&#96;&#96; &#124; &#96;&#96;restart&#96;&#96;<br />Default: &#96;&#96;clear&#96;&#96;"
      },
      {
        "name": "phase2_lifetime_seconds",
        "type": "integer",
        "description": "The lifetime for phase 2 of the IKE negotiation, in seconds.<br />Constraints: A value between 900 and 3,600. The value must be less than the value for &#96;&#96;Phase1LifetimeSeconds&#96;&#96;.<br />Default: &#96;&#96;3600&#96;&#96;"
      },
      {
        "name": "phase2_integrity_algorithms",
        "type": "array",
        "description": "One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.<br />Valid values: &#96;&#96;SHA1&#96;&#96; &#124; &#96;&#96;SHA2-256&#96;&#96; &#124; &#96;&#96;SHA2-384&#96;&#96; &#124; &#96;&#96;SHA2-512&#96;&#96;",
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
        "description": "One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.<br />Valid values: &#96;&#96;SHA1&#96;&#96; &#124; &#96;&#96;SHA2-256&#96;&#96; &#124; &#96;&#96;SHA2-384&#96;&#96; &#124; &#96;&#96;SHA2-512&#96;&#96;",
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
        "description": "The pre-shared key (PSK) to establish initial authentication between the virtual private gateway and customer gateway.<br />Constraints: Allowed characters are alphanumeric characters, periods (.), and underscores (&#95;). Must be between 8 and 64 characters in length and cannot start with zero (0)."
      },
      {
        "name": "phase1_lifetime_seconds",
        "type": "integer",
        "description": "The lifetime for phase 1 of the IKE negotiation, in seconds.<br />Constraints: A value between 900 and 28,800.<br />Default: &#96;&#96;28800&#96;&#96;"
      },
      {
        "name": "rekey_fuzz_percentage",
        "type": "integer",
        "description": "The percentage of the rekey window (determined by &#96;&#96;RekeyMarginTimeSeconds&#96;&#96;) during which the rekey time is randomly selected.<br />Constraints: A value between 0 and 100.<br />Default: &#96;&#96;100&#96;&#96;"
      },
      {
        "name": "phase1_encryption_algorithms",
        "type": "array",
        "description": "One or more encryption algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.<br />Valid values: &#96;&#96;AES128&#96;&#96; &#124; &#96;&#96;AES256&#96;&#96; &#124; &#96;&#96;AES128-GCM-16&#96;&#96; &#124; &#96;&#96;AES256-GCM-16&#96;&#96;",
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
        "description": "The number of seconds after which a DPD timeout occurs.<br />Constraints: A value greater than or equal to 30.<br />Default: &#96;&#96;30&#96;&#96;"
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
    "description": "The type of IP address assigned to the outside interface of the customer gateway device.<br />Valid values: &#96;&#96;PrivateIpv4&#96;&#96; &#124; &#96;&#96;PublicIpv4&#96;&#96; &#124; &#96;&#96;Ipv6&#96;&#96;<br />Default: &#96;&#96;PublicIpv4&#96;&#96;"
  },
  {
    "name": "static_routes_only",
    "type": "boolean",
    "description": "Indicates whether the VPN connection uses static routes only. Static routes must be used for devices that don't support BGP.<br />If you are creating a VPN connection for a device that does not support Border Gateway Protocol (BGP), you must specify &#96;&#96;true&#96;&#96;."
  },
  {
    "name": "enable_acceleration",
    "type": "boolean",
    "description": "Indicate whether to enable acceleration for the VPN connection.<br />Default: &#96;&#96;false&#96;&#96;"
  },
  {
    "name": "transit_gateway_id",
    "type": "string",
    "description": "The ID of the transit gateway associated with the VPN connection.<br />You must specify either &#96;&#96;TransitGatewayId&#96;&#96; or &#96;&#96;VpnGatewayId&#96;&#96;, but not both."
  },
  {
    "name": "type",
    "type": "string",
    "description": "The type of VPN connection."
  },
  {
    "name": "local_ipv4_network_cidr",
    "type": "string",
    "description": "The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.<br />Default: &#96;&#96;0.0.0.0/0&#96;&#96;"
  },
  {
    "name": "vpn_gateway_id",
    "type": "string",
    "description": "The ID of the virtual private gateway at the AWS side of the VPN connection.<br />You must specify either &#96;&#96;TransitGatewayId&#96;&#96; or &#96;&#96;VpnGatewayId&#96;&#96;, but not both."
  },
  {
    "name": "pre_shared_key_storage",
    "type": "string",
    "description": "Describes the storage location for an instance store-backed AMI."
  },
  {
    "name": "transport_transit_gateway_attachment_id",
    "type": "string",
    "description": "The transit gateway attachment ID to use for the VPN tunnel.<br />Required if &#96;&#96;OutsideIpAddressType&#96;&#96; is set to &#96;&#96;PrivateIpv4&#96;&#96;."
  },
  {
    "name": "local_ipv6_network_cidr",
    "type": "string",
    "description": "The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.<br />Default: &#96;&#96;::/0&#96;&#96;"
  },
  {
    "name": "vpn_connection_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "tunnel_inside_ip_version",
    "type": "string",
    "description": "Indicate whether the VPN tunnels process IPv4 or IPv6 traffic.<br />Default: &#96;&#96;ipv4&#96;&#96;"
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
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>vpn_connections</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<VpnConnectionId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>vpn_connections</code> in a region.
```sql
SELECT
region,
vpn_connection_id
FROM awscc.ec2.vpn_connections_list_only
WHERE region = 'us-east-1';
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
'{{ CustomerGatewayId }}',
 '{{ Type }}',
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
 '{{ RemoteIpv6NetworkCidr }}',
 '{{ RemoteIpv4NetworkCidr }}',
 '{{ VpnTunnelOptionsSpecifications }}',
 '{{ CustomerGatewayId }}',
 '{{ OutsideIpAddressType }}',
 '{{ StaticRoutesOnly }}',
 '{{ EnableAcceleration }}',
 '{{ TransitGatewayId }}',
 '{{ Type }}',
 '{{ LocalIpv4NetworkCidr }}',
 '{{ VpnGatewayId }}',
 '{{ PreSharedKeyStorage }}',
 '{{ TransportTransitGatewayAttachmentId }}',
 '{{ LocalIpv6NetworkCidr }}',
 '{{ TunnelInsideIpVersion }}',
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
  - name: vpn_connection
    props:
      - name: RemoteIpv6NetworkCidr
        value: '{{ RemoteIpv6NetworkCidr }}'
      - name: RemoteIpv4NetworkCidr
        value: '{{ RemoteIpv4NetworkCidr }}'
      - name: VpnTunnelOptionsSpecifications
        value:
          - Phase2EncryptionAlgorithms:
              - Value: '{{ Value }}'
            Phase2DHGroupNumbers:
              - Value: '{{ Value }}'
            TunnelInsideIpv6Cidr: '{{ TunnelInsideIpv6Cidr }}'
            StartupAction: '{{ StartupAction }}'
            TunnelInsideCidr: '{{ TunnelInsideCidr }}'
            IKEVersions:
              - Value: '{{ Value }}'
            LogOptions:
              CloudwatchLogOptions:
                LogEnabled: '{{ LogEnabled }}'
                LogOutputFormat: '{{ LogOutputFormat }}'
                LogGroupArn: '{{ LogGroupArn }}'
            Phase1DHGroupNumbers:
              - Value: '{{ Value }}'
            ReplayWindowSize: '{{ ReplayWindowSize }}'
            EnableTunnelLifecycleControl: '{{ EnableTunnelLifecycleControl }}'
            RekeyMarginTimeSeconds: '{{ RekeyMarginTimeSeconds }}'
            DPDTimeoutAction: '{{ DPDTimeoutAction }}'
            Phase2LifetimeSeconds: '{{ Phase2LifetimeSeconds }}'
            Phase2IntegrityAlgorithms:
              - Value: '{{ Value }}'
            Phase1IntegrityAlgorithms:
              - Value: '{{ Value }}'
            PreSharedKey: '{{ PreSharedKey }}'
            Phase1LifetimeSeconds: '{{ Phase1LifetimeSeconds }}'
            RekeyFuzzPercentage: '{{ RekeyFuzzPercentage }}'
            Phase1EncryptionAlgorithms:
              - Value: '{{ Value }}'
            DPDTimeoutSeconds: '{{ DPDTimeoutSeconds }}'
      - name: CustomerGatewayId
        value: '{{ CustomerGatewayId }}'
      - name: OutsideIpAddressType
        value: '{{ OutsideIpAddressType }}'
      - name: StaticRoutesOnly
        value: '{{ StaticRoutesOnly }}'
      - name: EnableAcceleration
        value: '{{ EnableAcceleration }}'
      - name: TransitGatewayId
        value: '{{ TransitGatewayId }}'
      - name: Type
        value: '{{ Type }}'
      - name: LocalIpv4NetworkCidr
        value: '{{ LocalIpv4NetworkCidr }}'
      - name: VpnGatewayId
        value: '{{ VpnGatewayId }}'
      - name: PreSharedKeyStorage
        value: '{{ PreSharedKeyStorage }}'
      - name: TransportTransitGatewayAttachmentId
        value: '{{ TransportTransitGatewayAttachmentId }}'
      - name: LocalIpv6NetworkCidr
        value: '{{ LocalIpv6NetworkCidr }}'
      - name: TunnelInsideIpVersion
        value: '{{ TunnelInsideIpVersion }}'
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
UPDATE awscc.ec2.vpn_connections
SET data__PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<VpnConnectionId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.vpn_connections
WHERE data__Identifier = '<VpnConnectionId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>vpn_connections</code> resource, the following permissions are required:

### Read
```json
ec2:DescribeVpnConnections
```

### Create
```json
ec2:DescribeVpnConnections,
ec2:CreateVpnConnection,
ec2:CreateTags
```

### Update
```json
ec2:DescribeVpnConnections,
ec2:CreateTags,
ec2:DeleteTags
```

### List
```json
ec2:DescribeVpnConnections
```

### Delete
```json
ec2:DescribeVpnConnections,
ec2:DeleteVpnConnection
```
