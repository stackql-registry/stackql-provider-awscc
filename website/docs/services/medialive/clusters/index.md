---
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - medialive
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
<tr><td><b>Description</b></td><td>Definition of AWS::MediaLive::Cluster Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.medialive.clusters" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": "The ARN of the Cluster."
  },
  {
    "name": "channel_ids",
    "type": "array",
    "description": "The MediaLive Channels that are currently running on Nodes in this Cluster."
  },
  {
    "name": "cluster_type",
    "type": "string",
    "description": "The hardware type for the cluster."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The unique ID of the Cluster."
  },
  {
    "name": "instance_role_arn",
    "type": "string",
    "description": "The IAM role your nodes will use."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The user-specified name of the Cluster to be created."
  },
  {
    "name": "network_settings",
    "type": "object",
    "description": "On premises settings which will have the interface network mappings and default Output logical interface",
    "children": [
      {
        "name": "default_route",
        "type": "string",
        "description": "Default value if the customer does not define it in channel Output API"
      },
      {
        "name": "interface_mappings",
        "type": "array",
        "description": "Network mappings for the cluster",
        "children": [
          {
            "name": "logical_interface_name",
            "type": "string",
            "description": "logical interface name, unique in the list"
          },
          {
            "name": "network_id",
            "type": "string",
            "description": "Network Id to be associated with the logical interface name, can be duplicated in list"
          }
        ]
      }
    ]
  },
  {
    "name": "state",
    "type": "string",
    "description": "The current state of the Cluster."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A collection of key-value pairs.",
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
    "description": "The unique ID of the Cluster."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cluster.html"><code>AWS::MediaLive::Cluster</code></a>.

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
    <td><CopyableCode code="region" /></td>
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
arn,
channel_ids,
cluster_type,
id,
instance_role_arn,
name,
network_settings,
state,
tags
FROM awscc.medialive.clusters
WHERE region = 'us-east-1' AND Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>clusters</code> in a region.
```sql
SELECT
region,
id
FROM awscc.medialive.clusters_list_only
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
INSERT INTO awscc.medialive.clusters (
 ClusterType,
 InstanceRoleArn,
 Name,
 NetworkSettings,
 Tags,
 region
)
SELECT
'{{ cluster_type }}',
 '{{ instance_role_arn }}',
 '{{ name }}',
 '{{ network_settings }}',
 '{{ tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.medialive.clusters (
 ClusterType,
 InstanceRoleArn,
 Name,
 NetworkSettings,
 Tags,
 region
)
SELECT
 '{{ cluster_type }}',
 '{{ instance_role_arn }}',
 '{{ name }}',
 '{{ network_settings }}',
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
  - name: cluster
    props:
      - name: cluster_type
        value: '{{ cluster_type }}'
      - name: instance_role_arn
        value: '{{ instance_role_arn }}'
      - name: name
        value: '{{ name }}'
      - name: network_settings
        value:
          default_route: '{{ default_route }}'
          interface_mappings:
            - logical_interface_name: '{{ logical_interface_name }}'
              network_id: '{{ network_id }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>cluster</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.medialive.clusters
SET PatchDocument = string('{{ {
    "Name": name,
    "NetworkSettings": network_settings,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.medialive.clusters
WHERE Identifier = '{{ id }}'
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
medialive:CreateCluster,
medialive:DescribeCluster,
medialive:CreateTags,
ecs:CreateCluster,
ecs:RegisterTaskDefinition,
ecs:TagResource,
ecs:CreateService,
iam:PassRole,
medialive:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
medialive:DescribeCluster,
medialive:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
medialive:UpdateCluster,
medialive:DescribeCluster,
medialive:CreateTags,
medialive:DeleteTags,
medialive:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
medialive:DeleteCluster,
medialive:DescribeCluster,
ecs:DeleteService
```

</TabItem>
<TabItem value="list">

```json
medialive:ListClusters
```

</TabItem>
</Tabs>