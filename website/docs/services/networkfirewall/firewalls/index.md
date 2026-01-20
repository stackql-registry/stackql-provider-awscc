---
title: firewalls
hide_title: false
hide_table_of_contents: false
keywords:
  - firewalls
  - networkfirewall
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

Creates, updates, deletes or gets a <code>firewall</code> resource or lists <code>firewalls</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>firewalls</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource type definition for AWS::NetworkFirewall::Firewall</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.networkfirewall.firewalls" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "firewall_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "firewall_arn",
    "type": "string",
    "description": "A resource ARN."
  },
  {
    "name": "firewall_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "subnet_mappings",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "subnet_id",
        "type": "string",
        "description": "A SubnetId."
      },
      {
        "name": "ip_address_type",
        "type": "string",
        "description": "A IPAddressType"
      }
    ]
  },
  {
    "name": "availability_zone_mappings",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "availability_zone",
        "type": "string",
        "description": "A AvailabilityZone"
      }
    ]
  },
  {
    "name": "delete_protection",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "subnet_change_protection",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "availability_zone_change_protection",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "firewall_policy_change_protection",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "transit_gateway_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "endpoint_ids",
    "type": "array",
    "description": ""
  },
  {
    "name": "enabled_analysis_types",
    "type": "array",
    "description": "The types of analysis to enable for the firewall. Can be TLS&#95;SNI, HTTP&#95;HOST, or both."
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewall.html"><code>AWS::NetworkFirewall::Firewall</code></a>.

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
    <td><CopyableCode code="FirewallName, FirewallPolicyArn, region" /></td>
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

Gets all properties from an individual <code>firewall</code>.
```sql
SELECT
region,
firewall_name,
firewall_arn,
firewall_id,
firewall_policy_arn,
vpc_id,
subnet_mappings,
availability_zone_mappings,
delete_protection,
subnet_change_protection,
availability_zone_change_protection,
firewall_policy_change_protection,
transit_gateway_id,
description,
endpoint_ids,
enabled_analysis_types,
tags
FROM awscc.networkfirewall.firewalls
WHERE region = 'us-east-1' AND data__Identifier = '<FirewallArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>firewall</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.networkfirewall.firewalls (
 FirewallName,
 FirewallPolicyArn,
 region
)
SELECT 
'{{ FirewallName }}',
 '{{ FirewallPolicyArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.networkfirewall.firewalls (
 FirewallName,
 FirewallPolicyArn,
 VpcId,
 SubnetMappings,
 AvailabilityZoneMappings,
 DeleteProtection,
 SubnetChangeProtection,
 AvailabilityZoneChangeProtection,
 FirewallPolicyChangeProtection,
 TransitGatewayId,
 Description,
 EnabledAnalysisTypes,
 Tags,
 region
)
SELECT 
 '{{ FirewallName }}',
 '{{ FirewallPolicyArn }}',
 '{{ VpcId }}',
 '{{ SubnetMappings }}',
 '{{ AvailabilityZoneMappings }}',
 '{{ DeleteProtection }}',
 '{{ SubnetChangeProtection }}',
 '{{ AvailabilityZoneChangeProtection }}',
 '{{ FirewallPolicyChangeProtection }}',
 '{{ TransitGatewayId }}',
 '{{ Description }}',
 '{{ EnabledAnalysisTypes }}',
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
  - name: firewall
    props:
      - name: FirewallName
        value: '{{ FirewallName }}'
      - name: FirewallPolicyArn
        value: '{{ FirewallPolicyArn }}'
      - name: VpcId
        value: '{{ VpcId }}'
      - name: SubnetMappings
        value:
          - SubnetId: '{{ SubnetId }}'
            IPAddressType: '{{ IPAddressType }}'
      - name: AvailabilityZoneMappings
        value:
          - AvailabilityZone: '{{ AvailabilityZone }}'
      - name: DeleteProtection
        value: '{{ DeleteProtection }}'
      - name: SubnetChangeProtection
        value: '{{ SubnetChangeProtection }}'
      - name: AvailabilityZoneChangeProtection
        value: '{{ AvailabilityZoneChangeProtection }}'
      - name: FirewallPolicyChangeProtection
        value: '{{ FirewallPolicyChangeProtection }}'
      - name: TransitGatewayId
        value: '{{ TransitGatewayId }}'
      - name: Description
        value: '{{ Description }}'
      - name: EnabledAnalysisTypes
        value:
          - '{{ EnabledAnalysisTypes[0] }}'
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
DELETE FROM awscc.networkfirewall.firewalls
WHERE data__Identifier = '<FirewallArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>firewalls</code> resource, the following permissions are required:

### Create
```json
ec2:CreateVpcEndpoint,
ec2:DescribeVpcEndpoints,
ec2:DescribeSubnets,
ec2:DescribeVpcs,
iam:CreateServiceLinkedRole,
network-firewall:CreateFirewall,
network-firewall:DescribeFirewallPolicy,
network-firewall:DescribeRuleGroup,
network-firewall:TagResource,
network-firewall:AssociateSubnets,
network-firewall:AssociateAvailabilityZones,
network-firewall:AssociateFirewallPolicy,
network-firewall:DescribeFirewall
```

### Read
```json
network-firewall:DescribeFirewall,
network-firewall:ListTagsForResource
```

### Update
```json
network-firewall:AssociateSubnets,
network-firewall:DisassociateSubnets,
network-firewall:UpdateFirewallDescription,
network-firewall:UpdateFirewallDeleteProtection,
network-firewall:UpdateSubnetChangeProtection,
network-firewall:UpdateFirewallPolicyChangeProtection,
network-firewall:AssociateFirewallPolicy,
network-firewall:TagResource,
network-firewall:UntagResource,
network-firewall:DescribeFirewall,
network-firewall:UpdateFirewallAnalysisSettings,
network-firewall:DisassociateAvailabilityZones,
network-firewall:AssociateAvailabilityZones,
network-firewall:UpdateAvailabilityZoneChangeProtection
```

### Delete
```json
ec2:DeleteVpcEndpoints,
ec2:DescribeRouteTables,
logs:DescribeLogGroups,
logs:DescribeResourcePolicies,
logs:GetLogDelivery,
logs:ListLogDeliveries,
network-firewall:DeleteFirewall,
network-firewall:UntagResource,
network-firewall:DescribeFirewall
```

### List
```json
network-firewall:ListFirewalls
```
