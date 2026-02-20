---
title: graphs
hide_title: false
hide_table_of_contents: false
keywords:
  - graphs
  - neptunegraph
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

Creates, updates, deletes or gets a <code>graph</code> resource or lists <code>graphs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>graphs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::NeptuneGraph::Graph resource creates an Amazon NeptuneGraph Graph.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.neptunegraph.graphs" /></td></tr>
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
    "name": "deletion_protection",
    "type": "boolean",
    "description": "Value that indicates whether the Graph has deletion protection enabled. The graph can't be deleted when deletion protection is enabled.<br />&#95;Default&#95;: If not specified, the default value is true."
  },
  {
    "name": "graph_name",
    "type": "string",
    "description": "Contains a user-supplied name for the Graph. <br />If you don't specify a name, we generate a unique Graph Name using a combination of Stack Name and a UUID comprising of 4 characters.<br />&#95;Important&#95;: If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name."
  },
  {
    "name": "provisioned_memory",
    "type": "integer",
    "description": "Memory for the Graph."
  },
  {
    "name": "public_connectivity",
    "type": "boolean",
    "description": "Specifies whether the Graph can be reached over the internet. Access to all graphs requires IAM authentication.<br />When the Graph is publicly reachable, its Domain Name System (DNS) endpoint resolves to the public IP address from the internet.<br />When the Graph isn't publicly reachable, you need to create a PrivateGraphEndpoint in a given VPC to ensure the DNS name resolves to a private IP address that is reachable from the VPC.<br />&#95;Default&#95;: If not specified, the default value is false."
  },
  {
    "name": "replica_count",
    "type": "integer",
    "description": "Specifies the number of replicas you want when finished. All replicas will be provisioned in different availability zones.<br />Replica Count should always be less than or equal to 2.<br />&#95;Default&#95;: If not specified, the default value is 1."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags associated with this graph.",
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
    "name": "vector_search_configuration",
    "type": "object",
    "description": "Vector Search Configuration",
    "children": [
      {
        "name": "vector_search_dimension",
        "type": "integer",
        "description": "The vector search dimension"
      }
    ]
  },
  {
    "name": "endpoint",
    "type": "string",
    "description": "The connection endpoint for the graph. For example: &#96;g-12a3bcdef4.us-east-1.neptune-graph.amazonaws.com&#96;"
  },
  {
    "name": "graph_arn",
    "type": "string",
    "description": "Graph resource ARN"
  },
  {
    "name": "graph_id",
    "type": "string",
    "description": "The auto-generated id assigned by the service."
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
    "name": "graph_id",
    "type": "string",
    "description": "The auto-generated id assigned by the service."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-graph.html"><code>AWS::NeptuneGraph::Graph</code></a>.

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
    <td><code>graphs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ProvisionedMemory, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>graphs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>graphs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>graphs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>graphs</code></td>
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

Gets all properties from an individual <code>graph</code>.
```sql
SELECT
region,
deletion_protection,
graph_name,
provisioned_memory,
public_connectivity,
replica_count,
tags,
vector_search_configuration,
endpoint,
graph_arn,
graph_id
FROM awscc.neptunegraph.graphs
WHERE region = 'us-east-1' AND Identifier = '<GraphId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>graphs</code> in a region.
```sql
SELECT
region,
graph_id
FROM awscc.neptunegraph.graphs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>graph</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.neptunegraph.graphs (
 ProvisionedMemory,
 region
)
SELECT 
'{{ ProvisionedMemory }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.neptunegraph.graphs (
 DeletionProtection,
 GraphName,
 ProvisionedMemory,
 PublicConnectivity,
 ReplicaCount,
 Tags,
 VectorSearchConfiguration,
 region
)
SELECT 
 '{{ DeletionProtection }}',
 '{{ GraphName }}',
 '{{ ProvisionedMemory }}',
 '{{ PublicConnectivity }}',
 '{{ ReplicaCount }}',
 '{{ Tags }}',
 '{{ VectorSearchConfiguration }}',
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
  - name: graph
    props:
      - name: DeletionProtection
        value: '{{ DeletionProtection }}'
      - name: GraphName
        value: '{{ GraphName }}'
      - name: ProvisionedMemory
        value: '{{ ProvisionedMemory }}'
      - name: PublicConnectivity
        value: '{{ PublicConnectivity }}'
      - name: ReplicaCount
        value: '{{ ReplicaCount }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: VectorSearchConfiguration
        value:
          VectorSearchDimension: '{{ VectorSearchDimension }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.neptunegraph.graphs
SET PatchDocument = string('{{ {
    "DeletionProtection": deletion_protection,
    "ProvisionedMemory": provisioned_memory,
    "PublicConnectivity": public_connectivity,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<GraphId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.neptunegraph.graphs
WHERE Identifier = '<GraphId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>graphs</code> resource, the following permissions are required:

### Create
```json
iam:PassRole,
neptune-graph:CreateGraph,
neptune-graph:GetGraph,
neptune-graph:ListTagsForResource,
neptune-graph:TagResource,
kms:DescribeKey,
kms:CreateGrant,
kms:Decrypt,
iam:CreateServiceLinkedRole
```

### Read
```json
neptune-graph:GetGraph,
neptune-graph:ListTagsForResource,
kms:DescribeKey,
kms:CreateGrant,
kms:Decrypt
```

### Update
```json
iam:PassRole,
neptune-graph:GetGraph,
neptune-graph:ListTagsForResource,
neptune-graph:TagResource,
neptune-graph:UntagResource,
neptune-graph:UpdateGraph,
kms:DescribeKey,
kms:CreateGrant,
kms:Decrypt
```

### Delete
```json
neptune-graph:DeleteGraph,
neptune-graph:GetGraph,
kms:DescribeKey,
kms:CreateGrant,
kms:Decrypt
```

### List
```json
neptune-graph:GetGraph,
neptune-graph:ListGraphs,
kms:DescribeKey,
kms:CreateGrant,
kms:Decrypt
```
