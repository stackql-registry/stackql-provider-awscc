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
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>policies</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
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
'{{ ExcludeResourceTags }}',
 '{{ PolicyName }}',
 '{{ RemediationEnabled }}',
 '{{ SecurityServicePolicyData }}',
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
 '{{ ExcludeMap }}',
 '{{ ExcludeResourceTags }}',
 '{{ IncludeMap }}',
 '{{ PolicyName }}',
 '{{ PolicyDescription }}',
 '{{ RemediationEnabled }}',
 '{{ ResourceTags }}',
 '{{ ResourceTagLogicalOperator }}',
 '{{ ResourceType }}',
 '{{ ResourceTypeList }}',
 '{{ ResourceSetIds }}',
 '{{ SecurityServicePolicyData }}',
 '{{ DeleteAllPolicyResources }}',
 '{{ ResourcesCleanUp }}',
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
  - name: policy
    props:
      - name: ExcludeMap
        value:
          ACCOUNT:
            - '{{ ACCOUNT[0] }}'
          ORGUNIT:
            - '{{ ORGUNIT[0] }}'
      - name: ExcludeResourceTags
        value: '{{ ExcludeResourceTags }}'
      - name: IncludeMap
        value: null
      - name: PolicyName
        value: '{{ PolicyName }}'
      - name: PolicyDescription
        value: '{{ PolicyDescription }}'
      - name: RemediationEnabled
        value: '{{ RemediationEnabled }}'
      - name: ResourceTags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: ResourceTagLogicalOperator
        value: '{{ ResourceTagLogicalOperator }}'
      - name: ResourceType
        value: '{{ ResourceType }}'
      - name: ResourceTypeList
        value:
          - null
      - name: ResourceSetIds
        value:
          - '{{ ResourceSetIds[0] }}'
      - name: SecurityServicePolicyData
        value:
          ManagedServiceData: '{{ ManagedServiceData }}'
          Type: '{{ Type }}'
          PolicyOption:
            NetworkFirewallPolicy:
              FirewallDeploymentModel: '{{ FirewallDeploymentModel }}'
            ThirdPartyFirewallPolicy:
              FirewallDeploymentModel: null
            NetworkAclCommonPolicy:
              NetworkAclEntrySet:
                FirstEntries:
                  - CidrBlock: '{{ CidrBlock }}'
                    Egress: '{{ Egress }}'
                    IcmpTypeCode:
                      Code: '{{ Code }}'
                      Type: '{{ Type }}'
                    Ipv6CidrBlock: '{{ Ipv6CidrBlock }}'
                    PortRange:
                      From: '{{ From }}'
                      To: '{{ To }}'
                    Protocol: '{{ Protocol }}'
                    RuleAction: '{{ RuleAction }}'
                ForceRemediateForFirstEntries: '{{ ForceRemediateForFirstEntries }}'
                LastEntries: null
                ForceRemediateForLastEntries: '{{ ForceRemediateForLastEntries }}'
      - name: DeleteAllPolicyResources
        value: '{{ DeleteAllPolicyResources }}'
      - name: ResourcesCleanUp
        value: '{{ ResourcesCleanUp }}'
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
UPDATE awscc.fms.policies
SET data__PatchDocument = string('{{ {
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
AND data__Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.fms.policies
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>policies</code> resource, the following permissions are required:

### Create
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

### Update
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

### Read
```json
fms:GetPolicy,
fms:ListTagsForResource
```

### Delete
```json
fms:DeletePolicy
```

### List
```json
fms:ListPolicies,
fms:ListTagsForResource
```
