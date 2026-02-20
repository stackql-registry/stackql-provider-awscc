---
title: cluster_capacity_provider_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_capacity_provider_associations
  - ecs
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

Creates, updates, deletes or gets a <code>cluster_capacity_provider_association</code> resource or lists <code>cluster_capacity_provider_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>cluster_capacity_provider_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Associate a set of ECS Capacity Providers with a specified ECS Cluster</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ecs.cluster_capacity_provider_associations" /></td></tr>
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
    "name": "default_capacity_provider_strategy",
    "type": "array",
    "description": "List of capacity providers to associate with the cluster",
    "children": [
      {
        "name": "capacity_provider",
        "type": "string",
        "description": "If using ec2 auto-scaling, the name of the associated capacity provider. Otherwise FARGATE, FARGATE&#95;SPOT."
      },
      {
        "name": "base",
        "type": "integer",
        "description": ""
      },
      {
        "name": "weight",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "capacity_providers",
    "type": "array",
    "description": "List of capacity providers to associate with the cluster"
  },
  {
    "name": "cluster",
    "type": "string",
    "description": "The name of the cluster"
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
    "name": "cluster",
    "type": "string",
    "description": "The name of the cluster"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-clustercapacityproviderassociation.html"><code>AWS::ECS::ClusterCapacityProviderAssociations</code></a>.

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
    <td><code>cluster_capacity_provider_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="CapacityProviders, Cluster, DefaultCapacityProviderStrategy, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>cluster_capacity_provider_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>cluster_capacity_provider_associations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>cluster_capacity_provider_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>cluster_capacity_provider_associations</code></td>
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

Gets all properties from an individual <code>cluster_capacity_provider_association</code>.
```sql
SELECT
region,
default_capacity_provider_strategy,
capacity_providers,
cluster
FROM awscc.ecs.cluster_capacity_provider_associations
WHERE region = 'us-east-1' AND Identifier = '<Cluster>';
```
</TabItem>
<TabItem value="list">

Lists all <code>cluster_capacity_provider_associations</code> in a region.
```sql
SELECT
region,
cluster
FROM awscc.ecs.cluster_capacity_provider_associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>cluster_capacity_provider_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ecs.cluster_capacity_provider_associations (
 DefaultCapacityProviderStrategy,
 CapacityProviders,
 Cluster,
 region
)
SELECT 
'{{ DefaultCapacityProviderStrategy }}',
 '{{ CapacityProviders }}',
 '{{ Cluster }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ecs.cluster_capacity_provider_associations (
 DefaultCapacityProviderStrategy,
 CapacityProviders,
 Cluster,
 region
)
SELECT 
 '{{ DefaultCapacityProviderStrategy }}',
 '{{ CapacityProviders }}',
 '{{ Cluster }}',
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
  - name: cluster_capacity_provider_association
    props:
      - name: DefaultCapacityProviderStrategy
        value:
          - CapacityProvider: '{{ CapacityProvider }}'
            Base: '{{ Base }}'
            Weight: '{{ Weight }}'
      - name: CapacityProviders
        value:
          - null
      - name: Cluster
        value: '{{ Cluster }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ecs.cluster_capacity_provider_associations
SET PatchDocument = string('{{ {
    "DefaultCapacityProviderStrategy": default_capacity_provider_strategy,
    "CapacityProviders": capacity_providers
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Cluster>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ecs.cluster_capacity_provider_associations
WHERE Identifier = '<Cluster>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>cluster_capacity_provider_associations</code> resource, the following permissions are required:

### Read
```json
ecs:DescribeClusters
```

### Create
```json
ecs:DescribeClusters,
ecs:PutClusterCapacityProviders,
ecs:DescribeCapacityProviders
```

### Update
```json
ecs:DescribeClusters,
ecs:PutClusterCapacityProviders
```

### List
```json
ecs:DescribeClusters,
ecs:ListClusters
```

### Delete
```json
ecs:PutClusterCapacityProviders,
ecs:DescribeClusters
```
