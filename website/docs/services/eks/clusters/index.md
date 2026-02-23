---
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - eks
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

Creates, updates, deletes or gets a <code>cluster</code> resource or lists <code>clusters</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>clusters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An object representing an Amazon EKS cluster.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.eks.clusters" /></td></tr>
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
    "name": "encryption_config",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "provider",
        "type": "object",
        "description": "The encryption provider for the cluster.",
        "children": [
          {
            "name": "key_arn",
            "type": "string",
            "description": "Amazon Resource Name (ARN) or alias of the KMS key. The KMS key must be symmetric, created in the same region as the cluster, and if the KMS key was created in a different account, the user must have access to the KMS key."
          }
        ]
      },
      {
        "name": "resources",
        "type": "array",
        "description": "Specifies the resources to be encrypted. The only supported value is \"secrets\"."
      }
    ]
  },
  {
    "name": "kubernetes_network_config",
    "type": "object",
    "description": "The Kubernetes network configuration for the cluster.",
    "children": [
      {
        "name": "service_ipv4_cidr",
        "type": "string",
        "description": "The CIDR block to assign Kubernetes service IP addresses from. If you don't specify a block, Kubernetes assigns addresses from either the 10.100.0.0/16 or 172.20.0.0/16 CIDR blocks. We recommend that you specify a block that does not overlap with resources in other networks that are peered or connected to your VPC."
      },
      {
        "name": "service_ipv6_cidr",
        "type": "string",
        "description": "The CIDR block to assign Kubernetes service IP addresses from."
      },
      {
        "name": "ip_family",
        "type": "string",
        "description": "Ipv4 or Ipv6. You can only specify ipv6 for 1.21 and later clusters that use version 1.10.1 or later of the Amazon VPC CNI add-on"
      },
      {
        "name": "elastic_load_balancing",
        "type": "object",
        "description": "Todo: add description",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": "Todo: add description"
          }
        ]
      }
    ]
  },
  {
    "name": "logging",
    "type": "object",
    "description": "Enable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs based on log types. By default, cluster control plane logs aren't exported to CloudWatch Logs.",
    "children": [
      {
        "name": "cluster_logging",
        "type": "object",
        "description": "The cluster control plane logging configuration for your cluster.",
        "children": [
          {
            "name": "enabled_types",
            "type": "array",
            "description": "Enable control plane logs for your cluster, all log types will be disabled if the array is empty",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": "name of the log type"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": "The unique name to give to your cluster."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The unique ID given to your cluster."
  },
  {
    "name": "resources_vpc_config",
    "type": "object",
    "description": "An object representing the VPC configuration to use for an Amazon EKS cluster.",
    "children": [
      {
        "name": "endpoint_private_access",
        "type": "boolean",
        "description": "Set this value to true to enable private access for your cluster's Kubernetes API server endpoint. If you enable private access, Kubernetes API requests from within your cluster's VPC use the private VPC endpoint. The default value for this parameter is false, which disables private access for your Kubernetes API server. If you disable private access and you have nodes or AWS Fargate pods in the cluster, then ensure that publicAccessCidrs includes the necessary CIDR blocks for communication with the nodes or Fargate pods."
      },
      {
        "name": "endpoint_public_access",
        "type": "boolean",
        "description": "Set this value to false to disable public access to your cluster's Kubernetes API server endpoint. If you disable public access, your cluster's Kubernetes API server can only receive requests from within the cluster VPC. The default value for this parameter is true, which enables public access for your Kubernetes API server."
      },
      {
        "name": "public_access_cidrs",
        "type": "array",
        "description": "The CIDR blocks that are allowed access to your cluster's public Kubernetes API server endpoint. Communication to the endpoint from addresses outside of the CIDR blocks that you specify is denied. The default value is 0.0.0.0/0. If you've disabled private endpoint access and you have nodes or AWS Fargate pods in the cluster, then ensure that you specify the necessary CIDR blocks."
      },
      {
        "name": "security_group_ids",
        "type": "array",
        "description": "Specify one or more security groups for the cross-account elastic network interfaces that Amazon EKS creates to use to allow communication between your worker nodes and the Kubernetes control plane. If you don't specify a security group, the default security group for your VPC is used."
      },
      {
        "name": "subnet_ids",
        "type": "array",
        "description": "Specify subnets for your Amazon EKS nodes. Amazon EKS creates cross-account elastic network interfaces in these subnets to allow communication between your nodes and the Kubernetes control plane."
      }
    ]
  },
  {
    "name": "outpost_config",
    "type": "object",
    "description": "An object representing the Outpost configuration to use for AWS EKS outpost cluster.",
    "children": [
      {
        "name": "outpost_arns",
        "type": "array",
        "description": "Specify one or more Arn(s) of Outpost(s) on which you would like to create your cluster."
      },
      {
        "name": "control_plane_instance_type",
        "type": "string",
        "description": "Specify the Instance type of the machines that should be used to create your cluster."
      },
      {
        "name": "control_plane_placement",
        "type": "object",
        "description": "Specify the placement group of the control plane machines for your cluster.",
        "children": [
          {
            "name": "group_name",
            "type": "string",
            "description": "Specify the placement group name of the control place machines for your cluster."
          }
        ]
      }
    ]
  },
  {
    "name": "access_config",
    "type": "object",
    "description": "An object representing the Access Config to use for the cluster.",
    "children": [
      {
        "name": "bootstrap_cluster_creator_admin_permissions",
        "type": "boolean",
        "description": "Set this value to false to avoid creating a default cluster admin Access Entry using the IAM principal used to create the cluster."
      },
      {
        "name": "authentication_mode",
        "type": "string",
        "description": "Specify the authentication mode that should be used to create your cluster."
      }
    ]
  },
  {
    "name": "upgrade_policy",
    "type": "object",
    "description": "An object representing the Upgrade Policy to use for the cluster.",
    "children": [
      {
        "name": "support_type",
        "type": "string",
        "description": "Specify the support type for your cluster."
      }
    ]
  },
  {
    "name": "remote_network_config",
    "type": "object",
    "description": "Configuration fields for specifying on-premises node and pod CIDRs that are external to the VPC passed during cluster creation.",
    "children": [
      {
        "name": "remote_node_networks",
        "type": "array",
        "description": "Network configuration of nodes run on-premises with EKS Hybrid Nodes.",
        "children": [
          {
            "name": "cidrs",
            "type": "array",
            "description": "Specifies the list of remote node CIDRs."
          }
        ]
      },
      {
        "name": "remote_pod_networks",
        "type": "array",
        "description": "Network configuration of pods run on-premises with EKS Hybrid Nodes.",
        "children": [
          {
            "name": "cidrs",
            "type": "array",
            "description": "Specifies the list of remote pod CIDRs."
          }
        ]
      }
    ]
  },
  {
    "name": "compute_config",
    "type": "object",
    "description": "Todo: add description",
    "children": [
      {
        "name": "enabled",
        "type": "boolean",
        "description": "Todo: add description"
      },
      {
        "name": "node_role_arn",
        "type": "string",
        "description": "Todo: add description"
      },
      {
        "name": "node_pools",
        "type": "array",
        "description": "Todo: add description"
      }
    ]
  },
  {
    "name": "storage_config",
    "type": "object",
    "description": "Todo: add description",
    "children": [
      {
        "name": "block_storage",
        "type": "object",
        "description": "Todo: add description",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": "Todo: add description"
          }
        ]
      }
    ]
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf."
  },
  {
    "name": "version",
    "type": "string",
    "description": "The desired Kubernetes version for your cluster. If you don't specify a value here, the latest version available in Amazon EKS is used."
  },
  {
    "name": "force",
    "type": "boolean",
    "description": "Force cluster version update"
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
    "name": "arn",
    "type": "string",
    "description": "The ARN of the cluster, such as arn:aws:eks:us-west-2:666666666666:cluster/prod."
  },
  {
    "name": "endpoint",
    "type": "string",
    "description": "The endpoint for your Kubernetes API server, such as https://5E1D0CEXAMPLEA591B746AFC5AB30262.yl4.us-west-2.eks.amazonaws.com."
  },
  {
    "name": "certificate_authority_data",
    "type": "string",
    "description": "The certificate-authority-data for your cluster."
  },
  {
    "name": "cluster_security_group_id",
    "type": "string",
    "description": "The cluster security group that was created by Amazon EKS for the cluster. Managed node groups use this security group for control plane to data plane communication."
  },
  {
    "name": "encryption_config_key_arn",
    "type": "string",
    "description": "Amazon Resource Name (ARN) or alias of the customer master key (CMK)."
  },
  {
    "name": "open_id_connect_issuer_url",
    "type": "string",
    "description": "The issuer URL for the cluster's OIDC identity provider, such as https://oidc.eks.us-west-2.amazonaws.com/id/EXAMPLED539D4633E53DE1B716D3041E. If you need to remove https:// from this output value, you can include the following code in your template."
  },
  {
    "name": "bootstrap_self_managed_addons",
    "type": "boolean",
    "description": "Set this value to false to avoid creating the default networking add-ons when the cluster is created."
  },
  {
    "name": "deletion_protection",
    "type": "boolean",
    "description": "Set this value to true to enable deletion protection for the cluster."
  },
  {
    "name": "zonal_shift_config",
    "type": "object",
    "description": "The current zonal shift configuration to use for the cluster.",
    "children": [
      {
        "name": "enabled",
        "type": "boolean",
        "description": "Set this value to true to enable zonal shift for the cluster."
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
    "name": "name",
    "type": "string",
    "description": "The unique name to give to your cluster."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html"><code>AWS::EKS::Cluster</code></a>.

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
    <td><code>clusters</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RoleArn, ResourcesVpcConfig, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>clusters</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>clusters</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>clusters_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>clusters</code></td>
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

Gets all properties from an individual <code>cluster</code>.
```sql
SELECT
region,
encryption_config,
kubernetes_network_config,
logging,
name,
id,
resources_vpc_config,
outpost_config,
access_config,
upgrade_policy,
remote_network_config,
compute_config,
storage_config,
role_arn,
version,
force,
tags,
arn,
endpoint,
certificate_authority_data,
cluster_security_group_id,
encryption_config_key_arn,
open_id_connect_issuer_url,
bootstrap_self_managed_addons,
deletion_protection,
zonal_shift_config
FROM awscc.eks.clusters
WHERE region = 'us-east-1' AND Identifier = '{{ name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>clusters</code> in a region.
```sql
SELECT
region,
name
FROM awscc.eks.clusters_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>cluster</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.eks.clusters (
 ResourcesVpcConfig,
 RoleArn,
 region
)
SELECT
'{{ resources_vpc_config }}',
 '{{ role_arn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.eks.clusters (
 EncryptionConfig,
 KubernetesNetworkConfig,
 Logging,
 Name,
 ResourcesVpcConfig,
 OutpostConfig,
 AccessConfig,
 UpgradePolicy,
 RemoteNetworkConfig,
 ComputeConfig,
 StorageConfig,
 RoleArn,
 Version,
 Force,
 Tags,
 BootstrapSelfManagedAddons,
 DeletionProtection,
 ZonalShiftConfig,
 region
)
SELECT
 '{{ encryption_config }}',
 '{{ kubernetes_network_config }}',
 '{{ logging }}',
 '{{ name }}',
 '{{ resources_vpc_config }}',
 '{{ outpost_config }}',
 '{{ access_config }}',
 '{{ upgrade_policy }}',
 '{{ remote_network_config }}',
 '{{ compute_config }}',
 '{{ storage_config }}',
 '{{ role_arn }}',
 '{{ version }}',
 '{{ force }}',
 '{{ tags }}',
 '{{ bootstrap_self_managed_addons }}',
 '{{ deletion_protection }}',
 '{{ zonal_shift_config }}',
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
  - name: cluster
    props:
      - name: encryption_config
        value:
          - provider:
              key_arn: '{{ key_arn }}'
            resources:
              - '{{ resources[0] }}'
      - name: kubernetes_network_config
        value:
          service_ipv4_cidr: '{{ service_ipv4_cidr }}'
          service_ipv6_cidr: '{{ service_ipv6_cidr }}'
          ip_family: '{{ ip_family }}'
          elastic_load_balancing:
            enabled: '{{ enabled }}'
      - name: logging
        value:
          cluster_logging:
            enabled_types:
              - type: '{{ type }}'
      - name: name
        value: '{{ name }}'
      - name: resources_vpc_config
        value:
          endpoint_private_access: '{{ endpoint_private_access }}'
          endpoint_public_access: '{{ endpoint_public_access }}'
          public_access_cidrs:
            - '{{ public_access_cidrs[0] }}'
          security_group_ids:
            - '{{ security_group_ids[0] }}'
          subnet_ids:
            - '{{ subnet_ids[0] }}'
      - name: outpost_config
        value:
          outpost_arns:
            - '{{ outpost_arns[0] }}'
          control_plane_instance_type: '{{ control_plane_instance_type }}'
          control_plane_placement:
            group_name: '{{ group_name }}'
      - name: access_config
        value:
          bootstrap_cluster_creator_admin_permissions: '{{ bootstrap_cluster_creator_admin_permissions }}'
          authentication_mode: '{{ authentication_mode }}'
      - name: upgrade_policy
        value:
          support_type: '{{ support_type }}'
      - name: remote_network_config
        value:
          remote_node_networks:
            - cidrs:
                - '{{ cidrs[0] }}'
          remote_pod_networks:
            - cidrs:
                - '{{ cidrs[0] }}'
      - name: compute_config
        value:
          enabled: '{{ enabled }}'
          node_role_arn: '{{ node_role_arn }}'
          node_pools:
            - '{{ node_pools[0] }}'
      - name: storage_config
        value:
          block_storage:
            enabled: '{{ enabled }}'
      - name: role_arn
        value: '{{ role_arn }}'
      - name: version
        value: '{{ version }}'
      - name: force
        value: '{{ force }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: bootstrap_self_managed_addons
        value: '{{ bootstrap_self_managed_addons }}'
      - name: deletion_protection
        value: '{{ deletion_protection }}'
      - name: zonal_shift_config
        value:
          enabled: '{{ enabled }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>cluster</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.eks.clusters
SET PatchDocument = string('{{ {
    "Logging": logging,
    "ResourcesVpcConfig": resources_vpc_config,
    "UpgradePolicy": upgrade_policy,
    "RemoteNetworkConfig": remote_network_config,
    "ComputeConfig": compute_config,
    "StorageConfig": storage_config,
    "Version": version,
    "Force": force,
    "Tags": tags,
    "DeletionProtection": deletion_protection,
    "ZonalShiftConfig": zonal_shift_config
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.eks.clusters
WHERE Identifier = '{{ name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>clusters</code> resource, the following permissions are required:

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
eks:CreateCluster,
eks:DescribeCluster,
eks:TagResource,
eks:CreateAccessEntry,
iam:PassRole,
iam:GetRole,
iam:ListAttachedRolePolicies,
iam:CreateServiceLinkedRole,
iam:CreateInstanceProfile,
iam:TagInstanceProfile,
iam:AddRoleToInstanceProfile,
iam:GetInstanceProfile,
iam:DeleteInstanceProfile,
iam:RemoveRoleFromInstanceProfile,
ec2:DescribeSubnets,
ec2:DescribeVpcs,
kms:DescribeKey,
kms:CreateGrant
```

</TabItem>
<TabItem value="read">

```json
eks:DescribeCluster
```

</TabItem>
<TabItem value="update">

```json
iam:PassRole,
eks:UpdateClusterConfig,
eks:UpdateClusterVersion,
eks:DescribeCluster,
eks:DescribeUpdate,
eks:TagResource,
eks:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
eks:DeleteCluster,
eks:DescribeCluster
```

</TabItem>
<TabItem value="list">

```json
eks:ListClusters
```

</TabItem>
</Tabs>