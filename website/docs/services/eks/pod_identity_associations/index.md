---
title: pod_identity_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - pod_identity_associations
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

Creates, updates, deletes or gets a <code>pod_identity_association</code> resource or lists <code>pod_identity_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>pod_identity_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An object representing an Amazon EKS PodIdentityAssociation.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.eks.pod_identity_associations" /></td></tr>
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
    "name": "association_arn",
    "type": "string",
    "description": "The ARN of the pod identity association."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-podidentityassociation.html"><code>AWS::EKS::PodIdentityAssociation</code></a>.

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
    <td><code>pod_identity_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ClusterName, RoleArn, Namespace, ServiceAccount, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>pod_identity_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>pod_identity_associations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>pod_identity_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>pod_identity_associations</code></td>
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

Gets all properties from an individual <code>pod_identity_association</code>.
```sql
SELECT
region,
cluster_name,
role_arn,
namespace,
service_account,
association_arn,
association_id,
target_role_arn,
external_id,
disable_session_tags,
tags
FROM awscc.eks.pod_identity_associations
WHERE region = 'us-east-1' AND Identifier = '{{ association_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>pod_identity_associations</code> in a region.
```sql
SELECT
region,
association_arn
FROM awscc.eks.pod_identity_associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>pod_identity_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.eks.pod_identity_associations (
 ClusterName,
 RoleArn,
 Namespace,
 ServiceAccount,
 region
)
SELECT
'{{ cluster_name }}',
 '{{ role_arn }}',
 '{{ namespace }}',
 '{{ service_account }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.eks.pod_identity_associations (
 ClusterName,
 RoleArn,
 Namespace,
 ServiceAccount,
 TargetRoleArn,
 DisableSessionTags,
 Tags,
 region
)
SELECT
 '{{ cluster_name }}',
 '{{ role_arn }}',
 '{{ namespace }}',
 '{{ service_account }}',
 '{{ target_role_arn }}',
 '{{ disable_session_tags }}',
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
  - name: pod_identity_association
    props:
      - name: cluster_name
        value: '{{ cluster_name }}'
      - name: role_arn
        value: '{{ role_arn }}'
      - name: namespace
        value: '{{ namespace }}'
      - name: service_account
        value: '{{ service_account }}'
      - name: target_role_arn
        value: '{{ target_role_arn }}'
      - name: disable_session_tags
        value: '{{ disable_session_tags }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>pod_identity_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.eks.pod_identity_associations
SET PatchDocument = string('{{ {
    "RoleArn": role_arn,
    "TargetRoleArn": target_role_arn,
    "DisableSessionTags": disable_session_tags,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ association_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.eks.pod_identity_associations
WHERE Identifier = '{{ association_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>pod_identity_associations</code> resource, the following permissions are required:

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
eks:CreatePodIdentityAssociation,
eks:DescribePodIdentityAssociation,
eks:TagResource,
iam:PassRole,
iam:GetRole
```

</TabItem>
<TabItem value="read">

```json
eks:DescribePodIdentityAssociation
```

</TabItem>
<TabItem value="update">

```json
eks:DescribePodIdentityAssociation,
eks:UpdatePodIdentityAssociation,
eks:TagResource,
eks:UntagResource,
iam:PassRole,
iam:GetRole
```

</TabItem>
<TabItem value="delete">

```json
eks:DeletePodIdentityAssociation,
eks:DescribePodIdentityAssociation
```

</TabItem>
<TabItem value="list">

```json
eks:ListPodIdentityAssociations
```

</TabItem>
</Tabs>