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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "firewall_arn",
    "type": "string",
    "description": "A resource ARN."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewall.html"><code>AWS::NetworkFirewall::Firewall</code></a>.

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
    <td><code>firewalls</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="FirewallName, FirewallPolicyArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>firewalls</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>firewalls</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>firewalls_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>firewalls</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '{{ firewall_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>firewalls</code> in a region.
```sql
SELECT
region,
firewall_arn
FROM awscc.networkfirewall.firewalls_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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
'{{ firewall_name }}',
 '{{ firewall_policy_arn }}',
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
 '{{ firewall_name }}',
 '{{ firewall_policy_arn }}',
 '{{ vpc_id }}',
 '{{ subnet_mappings }}',
 '{{ availability_zone_mappings }}',
 '{{ delete_protection }}',
 '{{ subnet_change_protection }}',
 '{{ availability_zone_change_protection }}',
 '{{ firewall_policy_change_protection }}',
 '{{ transit_gateway_id }}',
 '{{ description }}',
 '{{ enabled_analysis_types }}',
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
  - name: firewall
    props:
      - name: firewall_name
        value: '{{ firewall_name }}'
      - name: firewall_policy_arn
        value: '{{ firewall_policy_arn }}'
      - name: vpc_id
        value: '{{ vpc_id }}'
      - name: subnet_mappings
        value:
          - subnet_id: '{{ subnet_id }}'
            ip_address_type: '{{ ip_address_type }}'
      - name: availability_zone_mappings
        value:
          - availability_zone: '{{ availability_zone }}'
      - name: delete_protection
        value: '{{ delete_protection }}'
      - name: subnet_change_protection
        value: '{{ subnet_change_protection }}'
      - name: availability_zone_change_protection
        value: '{{ availability_zone_change_protection }}'
      - name: firewall_policy_change_protection
        value: '{{ firewall_policy_change_protection }}'
      - name: transit_gateway_id
        value: '{{ transit_gateway_id }}'
      - name: description
        value: '{{ description }}'
      - name: enabled_analysis_types
        value:
          - '{{ enabled_analysis_types[0] }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>firewall</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.networkfirewall.firewalls
SET PatchDocument = string('{{ {
    "FirewallPolicyArn": firewall_policy_arn,
    "SubnetMappings": subnet_mappings,
    "AvailabilityZoneMappings": availability_zone_mappings,
    "DeleteProtection": delete_protection,
    "SubnetChangeProtection": subnet_change_protection,
    "AvailabilityZoneChangeProtection": availability_zone_change_protection,
    "FirewallPolicyChangeProtection": firewall_policy_change_protection,
    "TransitGatewayId": transit_gateway_id,
    "Description": description,
    "EnabledAnalysisTypes": enabled_analysis_types,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ firewall_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.networkfirewall.firewalls
WHERE Identifier = '{{ firewall_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>firewalls</code> resource, the following permissions are required:

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

</TabItem>
<TabItem value="read">

```json
network-firewall:DescribeFirewall,
network-firewall:ListTagsForResource
```

</TabItem>
<TabItem value="update">

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

</TabItem>
<TabItem value="delete">

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

</TabItem>
<TabItem value="list">

```json
network-firewall:ListFirewalls
```

</TabItem>
</Tabs>