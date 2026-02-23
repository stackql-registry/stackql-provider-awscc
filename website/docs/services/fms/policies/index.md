---
title: policies
hide_title: false
hide_table_of_contents: false
keywords:
  - policies
  - fms
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

Creates, updates, deletes or gets a <code>policy</code> resource or lists <code>policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates an AWS Firewall Manager policy.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.fms.policies" /></td></tr>
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
    "name": "exclude_map",
    "type": "object",
    "description": "An FMS includeMap or excludeMap.",
    "children": [
      {
        "name": "a_cc_ou_nt",
        "type": "array",
        "description": ""
      },
      {
        "name": "o_rg_un_it",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "exclude_resource_tags",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "policy_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "policy_description",
    "type": "string",
    "description": ""
  },
  {
    "name": "remediation_enabled",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "resource_tags",
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
    "name": "resource_tag_logical_operator",
    "type": "string",
    "description": ""
  },
  {
    "name": "resource_type",
    "type": "string",
    "description": "An AWS resource type"
  },
  {
    "name": "resource_type_list",
    "type": "array",
    "description": ""
  },
  {
    "name": "resource_set_ids",
    "type": "array",
    "description": ""
  },
  {
    "name": "security_service_policy_data",
    "type": "object",
    "description": "Firewall security service policy data.",
    "children": [
      {
        "name": "managed_service_data",
        "type": "string",
        "description": "Firewall managed service data."
      },
      {
        "name": "type",
        "type": "string",
        "description": "Firewall policy type."
      },
      {
        "name": "policy_option",
        "type": "object",
        "description": "Firewall policy option.",
        "children": [
          {
            "name": "network_firewall_policy",
            "type": "object",
            "description": "Network firewall policy.",
            "children": [
              {
                "name": "firewall_deployment_model",
                "type": "string",
                "description": "Firewall deployment mode."
              }
            ]
          },
          {
            "name": "third_party_firewall_policy",
            "type": "object",
            "description": "Third party firewall policy.",
            "children": [
              {
                "name": "firewall_deployment_model",
                "type": "string",
                "description": "Firewall deployment mode."
              }
            ]
          },
          {
            "name": "network_acl_common_policy",
            "type": "object",
            "description": "Network ACL common policy.",
            "children": [
              {
                "name": "network_acl_entry_set",
                "type": "object",
                "description": "Network ACL entry set."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "A resource ARN."
  },
  {
    "name": "delete_all_policy_resources",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "resources_clean_up",
    "type": "boolean",
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
    "name": "id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html"><code>AWS::FMS::Policy</code></a>.

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
    <td><code>policies</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ExcludeResourceTags, PolicyName, RemediationEnabled, SecurityServicePolicyData, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>policies</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>policies</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>policies_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>policies</code></td>
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

Gets all properties from an individual <code>policy</code>.
```sql
SELECT
region,
exclude_map,
exclude_resource_tags,
include_map,
id,
policy_name,
policy_description,
remediation_enabled,
resource_tags,
resource_tag_logical_operator,
resource_type,
resource_type_list,
resource_set_ids,
security_service_policy_data,
arn,
delete_all_policy_resources,
resources_clean_up,
tags
FROM awscc.fms.policies
WHERE region = 'us-east-1' AND Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>policies</code> in a region.
```sql
SELECT
region,
id
FROM awscc.fms.policies_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.fms.policies (
 ExcludeResourceTags,
 PolicyName,
 RemediationEnabled,
 SecurityServicePolicyData,
 region
)
SELECT
'{{ exclude_resource_tags }}',
 '{{ policy_name }}',
 '{{ remediation_enabled }}',
 '{{ security_service_policy_data }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.fms.policies (
 ExcludeMap,
 ExcludeResourceTags,
 IncludeMap,
 PolicyName,
 PolicyDescription,
 RemediationEnabled,
 ResourceTags,
 ResourceTagLogicalOperator,
 ResourceType,
 ResourceTypeList,
 ResourceSetIds,
 SecurityServicePolicyData,
 DeleteAllPolicyResources,
 ResourcesCleanUp,
 Tags,
 region
)
SELECT
 '{{ exclude_map }}',
 '{{ exclude_resource_tags }}',
 '{{ include_map }}',
 '{{ policy_name }}',
 '{{ policy_description }}',
 '{{ remediation_enabled }}',
 '{{ resource_tags }}',
 '{{ resource_tag_logical_operator }}',
 '{{ resource_type }}',
 '{{ resource_type_list }}',
 '{{ resource_set_ids }}',
 '{{ security_service_policy_data }}',
 '{{ delete_all_policy_resources }}',
 '{{ resources_clean_up }}',
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
  - name: policy
    props:
      - name: exclude_map
        value:
          a_cc_ou_nt:
            - '{{ a_cc_ou_nt[0] }}'
          o_rg_un_it:
            - '{{ o_rg_un_it[0] }}'
      - name: exclude_resource_tags
        value: '{{ exclude_resource_tags }}'
      - name: include_map
        value: null
      - name: policy_name
        value: '{{ policy_name }}'
      - name: policy_description
        value: '{{ policy_description }}'
      - name: remediation_enabled
        value: '{{ remediation_enabled }}'
      - name: resource_tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: resource_tag_logical_operator
        value: '{{ resource_tag_logical_operator }}'
      - name: resource_type
        value: '{{ resource_type }}'
      - name: resource_type_list
        value:
          - null
      - name: resource_set_ids
        value:
          - '{{ resource_set_ids[0] }}'
      - name: security_service_policy_data
        value:
          managed_service_data: '{{ managed_service_data }}'
          type: '{{ type }}'
          policy_option:
            network_firewall_policy:
              firewall_deployment_model: '{{ firewall_deployment_model }}'
            third_party_firewall_policy:
              firewall_deployment_model: null
            network_acl_common_policy:
              network_acl_entry_set:
                first_entries:
                  - cidr_block: '{{ cidr_block }}'
                    egress: '{{ egress }}'
                    icmp_type_code:
                      code: '{{ code }}'
                      type: '{{ type }}'
                    ipv6_cidr_block: '{{ ipv6_cidr_block }}'
                    port_range:
                      from: '{{ from }}'
                      to: '{{ to }}'
                    protocol: '{{ protocol }}'
                    rule_action: '{{ rule_action }}'
                force_remediate_for_first_entries: '{{ force_remediate_for_first_entries }}'
                last_entries: null
                force_remediate_for_last_entries: '{{ force_remediate_for_last_entries }}'
      - name: delete_all_policy_resources
        value: '{{ delete_all_policy_resources }}'
      - name: resources_clean_up
        value: '{{ resources_clean_up }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.fms.policies
SET PatchDocument = string('{{ {
    "ExcludeMap": exclude_map,
    "ExcludeResourceTags": exclude_resource_tags,
    "IncludeMap": include_map,
    "PolicyName": policy_name,
    "PolicyDescription": policy_description,
    "RemediationEnabled": remediation_enabled,
    "ResourceTags": resource_tags,
    "ResourceTagLogicalOperator": resource_tag_logical_operator,
    "ResourceType": resource_type,
    "ResourceTypeList": resource_type_list,
    "ResourceSetIds": resource_set_ids,
    "SecurityServicePolicyData": security_service_policy_data,
    "DeleteAllPolicyResources": delete_all_policy_resources,
    "ResourcesCleanUp": resources_clean_up,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.fms.policies
WHERE Identifier = '{{ id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>policies</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
fms:PutPolicy,
fms:TagResource,
waf-regional:ListRuleGroups,
wafv2:CheckCapacity,
wafv2:ListRuleGroups,
wafv2:ListAvailableManagedRuleGroups,
wafv2:ListAvailableManagedRuleGroupVersions,
network-firewall:DescribeRuleGroup,
network-firewall:DescribeRuleGroupMetadata,
route53resolver:ListFirewallRuleGroups,
ec2:DescribeAvailabilityZones,
s3:PutBucketPolicy,
s3:GetBucketPolicy
```

</TabItem>
<TabItem value="update">

```json
fms:PutPolicy,
fms:GetPolicy,
fms:TagResource,
fms:UntagResource,
fms:ListTagsForResource,
waf-regional:ListRuleGroups,
wafv2:CheckCapacity,
wafv2:ListRuleGroups,
wafv2:ListAvailableManagedRuleGroups,
wafv2:ListAvailableManagedRuleGroupVersions,
network-firewall:DescribeRuleGroup,
network-firewall:DescribeRuleGroupMetadata,
route53resolver:ListFirewallRuleGroups,
ec2:DescribeAvailabilityZones,
s3:PutBucketPolicy,
s3:GetBucketPolicy
```

</TabItem>
<TabItem value="read">

```json
fms:GetPolicy,
fms:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
fms:DeletePolicy
```

</TabItem>
<TabItem value="list">

```json
fms:ListPolicies,
fms:ListTagsForResource
```

</TabItem>
</Tabs>