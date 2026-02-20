---
title: cluster_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_policies
  - msk
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

Creates, updates, deletes or gets a <code>cluster_policy</code> resource or lists <code>cluster_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>cluster_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::MSK::ClusterPolicy</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.msk.cluster_policies" /></td></tr>
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
    "name": "policy",
    "type": "object",
    "description": "A policy document containing permissions to add to the specified cluster."
  },
  {
    "name": "cluster_arn",
    "type": "string",
    "description": "The arn of the cluster for the resource policy."
  },
  {
    "name": "current_version",
    "type": "string",
    "description": "The current version of the policy attached to the specified cluster"
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
    "name": "cluster_arn",
    "type": "string",
    "description": "The arn of the cluster for the resource policy."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-clusterpolicy.html"><code>AWS::MSK::ClusterPolicy</code></a>.

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
    <td><code>cluster_policies</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Policy, ClusterArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>cluster_policies</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>cluster_policies</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>cluster_policies_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>cluster_policies</code></td>
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

Gets all properties from an individual <code>cluster_policy</code>.
```sql
SELECT
region,
policy,
cluster_arn,
current_version
FROM awscc.msk.cluster_policies
WHERE region = 'us-east-1' AND data__Identifier = '<ClusterArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>cluster_policies</code> in a region.
```sql
SELECT
region,
cluster_arn
FROM awscc.msk.cluster_policies_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>cluster_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.msk.cluster_policies (
 Policy,
 ClusterArn,
 region
)
SELECT 
'{{ Policy }}',
 '{{ ClusterArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.msk.cluster_policies (
 Policy,
 ClusterArn,
 region
)
SELECT 
 '{{ Policy }}',
 '{{ ClusterArn }}',
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
  - name: cluster_policy
    props:
      - name: Policy
        value: {}
      - name: ClusterArn
        value: '{{ ClusterArn }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.msk.cluster_policies
SET data__PatchDocument = string('{{ {
    "Policy": policy
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ClusterArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.msk.cluster_policies
WHERE data__Identifier = '<ClusterArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>cluster_policies</code> resource, the following permissions are required:

### Create
```json
kafka:PutClusterPolicy,
kafka:GetClusterPolicy
```

### Read
```json
kafka:GetClusterPolicy
```

### List
```json
kafka:GetClusterPolicy
```

### Update
```json
kafka:PutClusterPolicy,
kafka:GetClusterPolicy
```

### Delete
```json
kafka:DeleteClusterPolicy,
kafka:GetClusterPolicy
```
