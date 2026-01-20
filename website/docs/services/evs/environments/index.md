---
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
  - evs
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

Creates, updates, deletes or gets an <code>environment</code> resource or lists <code>environments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>environments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An environment created within the EVS service</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.evs.environments" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "environment_name",
    "type": "string",
    "description": "The name of an EVS environment"
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "service_access_subnet_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "vcf_version",
    "type": "string",
    "description": ""
  },
  {
    "name": "terms_accepted",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "license_info",
    "type": "object",
    "description": "The license information for an EVS environment",
    "children": [
      {
        "name": "solution_key",
        "type": "string",
        "description": ""
      },
      {
        "name": "vsan_key",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "initial_vlans",
    "type": "object",
    "description": "The initial Vlan configuration only required upon creation. Modification after creation will have no effect",
    "children": [
      {
        "name": "vmk_management",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "cidr",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "hosts",
    "type": "array",
    "description": "The initial hosts for environment only required upon creation. Modification after creation will have no effect",
    "children": [
      {
        "name": "host_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "key_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "instance_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "placement_group_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "dedicated_host_id",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "connectivity_info",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "private_route_server_peerings",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "vcf_hostnames",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "v_center",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "site_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "environment_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "environment_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "environment_state",
    "type": "string",
    "description": ""
  },
  {
    "name": "state_details",
    "type": "string",
    "description": ""
  },
  {
    "name": "checks",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "result",
        "type": "string",
        "description": ""
      },
      {
        "name": "impaired_since",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "credentials",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "secret_arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "service_access_security_groups",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "security_groups",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "created_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evs-environment.html"><code>AWS::EVS::Environment</code></a>.

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
    <td><CopyableCode code="VpcId, ServiceAccessSubnetId, VcfVersion, TermsAccepted, LicenseInfo, ConnectivityInfo, VcfHostnames, SiteId, region" /></td>
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

Gets all properties from an individual <code>environment</code>.
```sql
SELECT
region,
environment_name,
kms_key_id,
vpc_id,
service_access_subnet_id,
vcf_version,
terms_accepted,
license_info,
initial_vlans,
hosts,
connectivity_info,
vcf_hostnames,
site_id,
environment_id,
environment_arn,
environment_state,
state_details,
checks,
credentials,
service_access_security_groups,
tags,
created_at,
modified_at
FROM awscc.evs.environments
WHERE region = 'us-east-1' AND data__Identifier = '<EnvironmentId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>environment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.evs.environments (
 VpcId,
 ServiceAccessSubnetId,
 VcfVersion,
 TermsAccepted,
 LicenseInfo,
 ConnectivityInfo,
 VcfHostnames,
 SiteId,
 region
)
SELECT 
'{{ VpcId }}',
 '{{ ServiceAccessSubnetId }}',
 '{{ VcfVersion }}',
 '{{ TermsAccepted }}',
 '{{ LicenseInfo }}',
 '{{ ConnectivityInfo }}',
 '{{ VcfHostnames }}',
 '{{ SiteId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.evs.environments (
 EnvironmentName,
 KmsKeyId,
 VpcId,
 ServiceAccessSubnetId,
 VcfVersion,
 TermsAccepted,
 LicenseInfo,
 InitialVlans,
 Hosts,
 ConnectivityInfo,
 VcfHostnames,
 SiteId,
 ServiceAccessSecurityGroups,
 Tags,
 region
)
SELECT 
 '{{ EnvironmentName }}',
 '{{ KmsKeyId }}',
 '{{ VpcId }}',
 '{{ ServiceAccessSubnetId }}',
 '{{ VcfVersion }}',
 '{{ TermsAccepted }}',
 '{{ LicenseInfo }}',
 '{{ InitialVlans }}',
 '{{ Hosts }}',
 '{{ ConnectivityInfo }}',
 '{{ VcfHostnames }}',
 '{{ SiteId }}',
 '{{ ServiceAccessSecurityGroups }}',
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
  - name: environment
    props:
      - name: EnvironmentName
        value: '{{ EnvironmentName }}'
      - name: KmsKeyId
        value: '{{ KmsKeyId }}'
      - name: VpcId
        value: '{{ VpcId }}'
      - name: ServiceAccessSubnetId
        value: '{{ ServiceAccessSubnetId }}'
      - name: VcfVersion
        value: '{{ VcfVersion }}'
      - name: TermsAccepted
        value: '{{ TermsAccepted }}'
      - name: LicenseInfo
        value:
          SolutionKey: '{{ SolutionKey }}'
          VsanKey: '{{ VsanKey }}'
      - name: InitialVlans
        value:
          VmkManagement:
            Cidr: '{{ Cidr }}'
          VmManagement: null
          VMotion: null
          VSan: null
          VTep: null
          EdgeVTep: null
          NsxUpLink: null
          Hcx: null
          ExpansionVlan1: null
          ExpansionVlan2: null
      - name: Hosts
        value:
          - HostName: '{{ HostName }}'
            KeyName: '{{ KeyName }}'
            InstanceType: '{{ InstanceType }}'
            PlacementGroupId: '{{ PlacementGroupId }}'
            DedicatedHostId: '{{ DedicatedHostId }}'
      - name: ConnectivityInfo
        value:
          PrivateRouteServerPeerings:
            - '{{ PrivateRouteServerPeerings[0] }}'
      - name: VcfHostnames
        value:
          VCenter: null
          Nsx: null
          NsxManager1: null
          NsxManager2: null
          NsxManager3: null
          NsxEdge1: null
          NsxEdge2: null
          SddcManager: null
          CloudBuilder: null
      - name: SiteId
        value: '{{ SiteId }}'
      - name: ServiceAccessSecurityGroups
        value:
          SecurityGroups:
            - '{{ SecurityGroups[0] }}'
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
DELETE FROM awscc.evs.environments
WHERE data__Identifier = '<EnvironmentId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>environments</code> resource, the following permissions are required:

### Create
```json
evs:CreateEnvironment,
evs:GetEnvironment,
evs:TagResource,
evs:ListTagsForResource,
iam:CreateServiceLinkedRole,
support:DescribeServices,
support:DescribeSupportLevel,
servicequotas:GetServiceQuota,
servicequotas:ListServiceQuotas,
ec2:CreateNetworkInterface,
ec2:AllocateHosts,
ec2:ModifyNetworkInterfaceAttribute,
ec2:DeleteNetworkInterface,
ec2:RunInstances,
ec2:CreatePlacementGroup,
ec2:CreateSubnet,
ec2:CreateTags,
secretsmanager:GetRandomPassword,
secretsmanager:CreateSecret,
secretsmanager:GetSecretValue,
secretsmanager:BatchGetSecretValue,
secretsmanager:TagResource,
kms:ListKeysForService,
kms:DescribeKey,
secretsmanager:UpdateSecret,
ec2:DeleteVolume,
ec2:DetachVolume
```

### Read
```json
evs:GetEnvironment,
evs:ListTagsForResource
```

### Update
```json
evs:TagResource,
evs:UntagResource,
evs:ListTagsForResource,
evs:GetEnvironment
```

### Delete
```json
evs:DeleteEnvironment,
evs:GetEnvironment,
evs:UntagResource,
ec2:TerminateInstances,
ec2:ReleaseHosts,
ec2:DescribeHosts,
ec2:DeleteSubnet,
ec2:DetachNetworkInterface,
ec2:DeletePlacementGroup,
secretsmanager:DeleteSecret
```

### List
```json
evs:ListEnvironments
```
