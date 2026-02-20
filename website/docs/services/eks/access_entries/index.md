---
title: access_entries
hide_title: false
hide_table_of_contents: false
keywords:
  - access_entries
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

Creates, updates, deletes or gets an <code>access_entry</code> resource or lists <code>access_entries</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>access_entries</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An object representing an Amazon EKS AccessEntry.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.eks.access_entries" /></td></tr>
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
    "description": "The cluster that the access entry is created for."
  },
  {
    "name": "principal_arn",
    "type": "string",
    "description": "The principal ARN that the access entry is created for."
  },
  {
    "name": "username",
    "type": "string",
    "description": "The Kubernetes user that the access entry is associated with."
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
    "name": "access_entry_arn",
    "type": "string",
    "description": "The ARN of the access entry."
  },
  {
    "name": "kubernetes_groups",
    "type": "array",
    "description": "The Kubernetes groups that the access entry is associated with."
  },
  {
    "name": "access_policies",
    "type": "array",
    "description": "An array of access policies that are associated with the access entry.",
    "children": [
      {
        "name": "policy_arn",
        "type": "string",
        "description": "The ARN of the access policy to add to the access entry."
      },
      {
        "name": "access_scope",
        "type": "object",
        "description": "The access scope of the access policy.",
        "children": [
          {
            "name": "type",
            "type": "string",
            "description": "The type of the access scope."
          },
          {
            "name": "namespaces",
            "type": "array",
            "description": "The namespaces to associate with the access scope. Only specify if Type is set to 'namespace'."
          }
        ]
      }
    ]
  },
  {
    "name": "type",
    "type": "string",
    "description": "The node type to associate with the access entry."
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
    "description": "The cluster that the access entry is created for."
  },
  {
    "name": "principal_arn",
    "type": "string",
    "description": "The principal ARN that the access entry is created for."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html"><code>AWS::EKS::AccessEntry</code></a>.

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
    <td><code>access_entries</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="PrincipalArn, ClusterName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>access_entries</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>access_entries</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>access_entries_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>access_entries</code></td>
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

Gets all properties from an individual <code>access_entry</code>.
```sql
SELECT
region,
cluster_name,
principal_arn,
username,
tags,
access_entry_arn,
kubernetes_groups,
access_policies,
type
FROM awscc.eks.access_entries
WHERE region = 'us-east-1' AND data__Identifier = '<PrincipalArn>|<ClusterName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>access_entries</code> in a region.
```sql
SELECT
region,
principal_arn,
cluster_name
FROM awscc.eks.access_entries_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>access_entry</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.eks.access_entries (
 ClusterName,
 PrincipalArn,
 region
)
SELECT 
'{{ ClusterName }}',
 '{{ PrincipalArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.eks.access_entries (
 ClusterName,
 PrincipalArn,
 Username,
 Tags,
 KubernetesGroups,
 AccessPolicies,
 Type,
 region
)
SELECT 
 '{{ ClusterName }}',
 '{{ PrincipalArn }}',
 '{{ Username }}',
 '{{ Tags }}',
 '{{ KubernetesGroups }}',
 '{{ AccessPolicies }}',
 '{{ Type }}',
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
  - name: access_entry
    props:
      - name: ClusterName
        value: '{{ ClusterName }}'
      - name: PrincipalArn
        value: '{{ PrincipalArn }}'
      - name: Username
        value: '{{ Username }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: KubernetesGroups
        value:
          - '{{ KubernetesGroups[0] }}'
      - name: AccessPolicies
        value:
          - PolicyArn: '{{ PolicyArn }}'
            AccessScope:
              Type: '{{ Type }}'
              Namespaces:
                - '{{ Namespaces[0] }}'
      - name: Type
        value: '{{ Type }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.eks.access_entries
SET data__PatchDocument = string('{{ {
    "Username": username,
    "Tags": tags,
    "KubernetesGroups": kubernetes_groups,
    "AccessPolicies": access_policies
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<PrincipalArn>|<ClusterName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.eks.access_entries
WHERE data__Identifier = '<PrincipalArn|ClusterName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>access_entries</code> resource, the following permissions are required:

### Create
```json
eks:CreateAccessEntry,
eks:DescribeAccessEntry,
eks:AssociateAccessPolicy,
eks:TagResource,
eks:ListAssociatedAccessPolicies
```

### Read
```json
eks:DescribeAccessEntry,
eks:ListAssociatedAccessPolicies
```

### Update
```json
eks:DescribeAccessEntry,
eks:ListAssociatedAccessPolicies,
eks:UpdateAccessEntry,
eks:AssociateAccessPolicy,
eks:DisassociateAccessPolicy,
eks:TagResource,
eks:UntagResource
```

### Delete
```json
eks:DeleteAccessEntry,
eks:DescribeAccessEntry
```

### List
```json
eks:ListAccessEntries
```
