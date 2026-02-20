---
title: addons
hide_title: false
hide_table_of_contents: false
keywords:
  - addons
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

Creates, updates, deletes or gets an <code>addon</code> resource or lists <code>addons</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>addons</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Schema for AWS::EKS::Addon</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.eks.addons" /></td></tr>
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
    "name": "cluster_name",
    "type": "string",
    "description": "Name of Cluster"
  },
  {
    "name": "addon_name",
    "type": "string",
    "description": "Name of Addon"
  },
  {
    "name": "addon_version",
    "type": "string",
    "description": "Version of Addon"
  },
  {
    "name": "preserve_on_delete",
    "type": "boolean",
    "description": "PreserveOnDelete parameter value"
  },
  {
    "name": "resolve_conflicts",
    "type": "string",
    "description": "Resolve parameter value conflicts"
  },
  {
    "name": "service_account_role_arn",
    "type": "string",
    "description": "IAM role to bind to the add-on's service account"
  },
  {
    "name": "pod_identity_associations",
    "type": "array",
    "description": "An array of pod identities to apply to this add-on.",
    "children": [
      {
        "name": "cluster_name",
        "type": "string",
        "description": "The cluster that the pod identity association is created for."
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": "The IAM role ARN that the pod identity association is created for."
      },
      {
        "name": "namespace",
        "type": "string",
        "description": "The Kubernetes namespace that the pod identity association is created for."
      },
      {
        "name": "service_account",
        "type": "string",
        "description": "The Kubernetes service account that the pod identity association is created for."
      },
      {
        "name": "association_arn",
        "type": "string",
        "description": "The ARN of the pod identity association."
      },
      {
        "name": "association_id",
        "type": "string",
        "description": "The ID of the pod identity association."
      },
      {
        "name": "target_role_arn",
        "type": "string",
        "description": "The Target Role Arn of the pod identity association."
      },
      {
        "name": "external_id",
        "type": "string",
        "description": "The External Id of the pod identity association."
      },
      {
        "name": "disable_session_tags",
        "type": "boolean",
        "description": "The Disable Session Tags of the pod identity association."
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
      }
    ]
  },
  {
    "name": "configuration_values",
    "type": "string",
    "description": "The configuration values to use with the add-on"
  },
  {
    "name": "arn",
    "type": "string",
    "description": "Amazon Resource Name (ARN) of the add-on"
  },
  {
    "name": "namespace_config",
    "type": "object",
    "description": "The custom namespace configuration to use with the add-on",
    "children": [
      {
        "name": "namespace",
        "type": "string",
        "description": "The custom namespace for creating the add-on"
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "cluster_name",
    "type": "string",
    "description": "Name of Cluster"
  },
  {
    "name": "addon_name",
    "type": "string",
    "description": "Name of Addon"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html"><code>AWS::EKS::Addon</code></a>.

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
    <td><code>addons</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ClusterName, AddonName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>addons</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>addons</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>addons_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>addons</code></td>
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

Gets all properties from an individual <code>addon</code>.
```sql
SELECT
region,
cluster_name,
addon_name,
addon_version,
preserve_on_delete,
resolve_conflicts,
service_account_role_arn,
pod_identity_associations,
configuration_values,
arn,
namespace_config,
tags
FROM awscc.eks.addons
WHERE region = 'us-east-1' AND data__Identifier = '<ClusterName>|<AddonName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>addons</code> in a region.
```sql
SELECT
region,
cluster_name,
addon_name
FROM awscc.eks.addons_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>addon</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.eks.addons (
 ClusterName,
 AddonName,
 region
)
SELECT 
'{{ ClusterName }}',
 '{{ AddonName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.eks.addons (
 ClusterName,
 AddonName,
 AddonVersion,
 PreserveOnDelete,
 ResolveConflicts,
 ServiceAccountRoleArn,
 PodIdentityAssociations,
 ConfigurationValues,
 NamespaceConfig,
 Tags,
 region
)
SELECT 
 '{{ ClusterName }}',
 '{{ AddonName }}',
 '{{ AddonVersion }}',
 '{{ PreserveOnDelete }}',
 '{{ ResolveConflicts }}',
 '{{ ServiceAccountRoleArn }}',
 '{{ PodIdentityAssociations }}',
 '{{ ConfigurationValues }}',
 '{{ NamespaceConfig }}',
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
  - name: addon
    props:
      - name: ClusterName
        value: '{{ ClusterName }}'
      - name: AddonName
        value: '{{ AddonName }}'
      - name: AddonVersion
        value: '{{ AddonVersion }}'
      - name: PreserveOnDelete
        value: '{{ PreserveOnDelete }}'
      - name: ResolveConflicts
        value: '{{ ResolveConflicts }}'
      - name: ServiceAccountRoleArn
        value: '{{ ServiceAccountRoleArn }}'
      - name: PodIdentityAssociations
        value:
          - ClusterName: '{{ ClusterName }}'
            RoleArn: '{{ RoleArn }}'
            Namespace: '{{ Namespace }}'
            ServiceAccount: '{{ ServiceAccount }}'
            TargetRoleArn: '{{ TargetRoleArn }}'
            DisableSessionTags: '{{ DisableSessionTags }}'
            Tags:
              - Key: '{{ Key }}'
                Value: '{{ Value }}'
      - name: ConfigurationValues
        value: '{{ ConfigurationValues }}'
      - name: NamespaceConfig
        value:
          Namespace: '{{ Namespace }}'
      - name: Tags
        value:
          - null

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.eks.addons
SET data__PatchDocument = string('{{ {
    "AddonVersion": addon_version,
    "PreserveOnDelete": preserve_on_delete,
    "ResolveConflicts": resolve_conflicts,
    "ServiceAccountRoleArn": service_account_role_arn,
    "PodIdentityAssociations": pod_identity_associations,
    "ConfigurationValues": configuration_values,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ClusterName>|<AddonName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.eks.addons
WHERE data__Identifier = '<ClusterName|AddonName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>addons</code> resource, the following permissions are required:

### Create
```json
eks:CreateAddon,
eks:DescribeAddon,
eks:TagResource,
iam:PassRole,
iam:GetRole,
eks:CreatePodIdentityAssociation
```

### Read
```json
eks:DescribeAddon
```

### Delete
```json
eks:DeleteAddon,
eks:DescribeAddon,
eks:DeletePodIdentityAssociation
```

### List
```json
eks:ListAddons
```

### Update
```json
iam:PassRole,
iam:GetRole,
eks:UpdateAddon,
eks:DescribeAddon,
eks:DescribeUpdate,
eks:TagResource,
eks:UntagResource,
eks:CreatePodIdentityAssociation,
eks:DeletePodIdentityAssociation,
eks:UpdatePodIdentityAssociation
```
