---
title: fargate_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - fargate_profiles
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

Creates, updates, deletes or gets a <code>fargate_profile</code> resource or lists <code>fargate_profiles</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>fargate_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Schema for AWS::EKS::FargateProfile</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.eks.fargate_profiles" /></td></tr>
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
    "description": "Name of the Cluster"
  },
  {
    "name": "fargate_profile_name",
    "type": "string",
    "description": "Name of FargateProfile"
  },
  {
    "name": "pod_execution_role_arn",
    "type": "string",
    "description": "The IAM policy arn for pods"
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "subnets",
    "type": "array",
    "description": ""
  },
  {
    "name": "selectors",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "namespace",
        "type": "string",
        "description": ""
      },
      {
        "name": "labels",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "key",
            "type": "string",
            "description": "The key name of the label."
          },
          {
            "name": "value",
            "type": "string",
            "description": "The value for the label."
          }
        ]
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
    "description": "Name of the Cluster"
  },
  {
    "name": "fargate_profile_name",
    "type": "string",
    "description": "Name of FargateProfile"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-fargateprofile.html"><code>AWS::EKS::FargateProfile</code></a>.

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
    <td><code>fargate_profiles</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ClusterName, PodExecutionRoleArn, Selectors, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>fargate_profiles</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>fargate_profiles</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>fargate_profiles_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>fargate_profiles</code></td>
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

Gets all properties from an individual <code>fargate_profile</code>.
```sql
SELECT
region,
cluster_name,
fargate_profile_name,
pod_execution_role_arn,
arn,
subnets,
selectors,
tags
FROM awscc.eks.fargate_profiles
WHERE region = 'us-east-1' AND Identifier = '{{ cluster_name }}|{{ fargate_profile_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>fargate_profiles</code> in a region.
```sql
SELECT
region,
cluster_name,
fargate_profile_name
FROM awscc.eks.fargate_profiles_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>fargate_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.eks.fargate_profiles (
 ClusterName,
 PodExecutionRoleArn,
 Selectors,
 region
)
SELECT
'{{ cluster_name }}',
 '{{ pod_execution_role_arn }}',
 '{{ selectors }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.eks.fargate_profiles (
 ClusterName,
 FargateProfileName,
 PodExecutionRoleArn,
 Subnets,
 Selectors,
 Tags,
 region
)
SELECT
 '{{ cluster_name }}',
 '{{ fargate_profile_name }}',
 '{{ pod_execution_role_arn }}',
 '{{ subnets }}',
 '{{ selectors }}',
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
  - name: fargate_profile
    props:
      - name: cluster_name
        value: '{{ cluster_name }}'
      - name: fargate_profile_name
        value: '{{ fargate_profile_name }}'
      - name: pod_execution_role_arn
        value: '{{ pod_execution_role_arn }}'
      - name: subnets
        value:
          - '{{ subnets[0] }}'
      - name: selectors
        value:
          - namespace: '{{ namespace }}'
            labels:
              - key: '{{ key }}'
                value: '{{ value }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>fargate_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.eks.fargate_profiles
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ cluster_name }}|{{ fargate_profile_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.eks.fargate_profiles
WHERE Identifier = '{{ cluster_name }}|{{ fargate_profile_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>fargate_profiles</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
eks:CreateFargateProfile,
eks:DescribeFargateProfile,
iam:GetRole,
iam:PassRole,
iam:CreateServiceLinkedRole,
eks:TagResource
```

</TabItem>
<TabItem value="read">

```json
eks:DescribeFargateProfile
```

</TabItem>
<TabItem value="delete">

```json
eks:DeleteFargateProfile,
eks:DescribeFargateProfile
```

</TabItem>
<TabItem value="list">

```json
eks:ListFargateProfiles
```

</TabItem>
<TabItem value="update">

```json
eks:DescribeFargateProfile,
eks:TagResource,
eks:UntagResource
```

</TabItem>
</Tabs>