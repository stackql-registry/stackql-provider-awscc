---
title: channel_placement_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - channel_placement_groups
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

Creates, updates, deletes or gets a <code>channel_placement_group</code> resource or lists <code>channel_placement_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>channel_placement_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::MediaLive::ChannelPlacementGroup Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.medialive.channel_placement_groups" /></td></tr>
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
    "description": "The ARN of the channel placement group."
  },
  {
    "name": "channels",
    "type": "array",
    "description": "List of channel IDs added to the channel placement group."
  },
  {
    "name": "cluster_id",
    "type": "string",
    "description": "The ID of the cluster the node is on."
  },
  {
    "name": "id",
    "type": "string",
    "description": "Unique internal identifier."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the channel placement group."
  },
  {
    "name": "nodes",
    "type": "array",
    "description": "List of nodes added to the channel placement group"
  },
  {
    "name": "state",
    "type": "string",
    "description": "The current state of the ChannelPlacementGroupState"
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
    "name": "cluster_id",
    "type": "string",
    "description": "The ID of the cluster the node is on."
  },
  {
    "name": "id",
    "type": "string",
    "description": "Unique internal identifier."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channelplacementgroup.html"><code>AWS::MediaLive::ChannelPlacementGroup</code></a>.

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
    <td><code>channel_placement_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>channel_placement_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>channel_placement_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>channel_placement_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>channel_placement_groups</code></td>
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

Gets all properties from an individual <code>channel_placement_group</code>.
```sql
SELECT
region,
arn,
channels,
cluster_id,
id,
name,
nodes,
state,
tags
FROM awscc.medialive.channel_placement_groups
WHERE region = 'us-east-1' AND Identifier = '<Id>|<ClusterId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>channel_placement_groups</code> in a region.
```sql
SELECT
region,
id,
cluster_id
FROM awscc.medialive.channel_placement_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>channel_placement_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.medialive.channel_placement_groups (
 ClusterId,
 Name,
 Nodes,
 Tags,
 region
)
SELECT 
'{{ ClusterId }}',
 '{{ Name }}',
 '{{ Nodes }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.medialive.channel_placement_groups (
 ClusterId,
 Name,
 Nodes,
 Tags,
 region
)
SELECT 
 '{{ ClusterId }}',
 '{{ Name }}',
 '{{ Nodes }}',
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
  - name: channel_placement_group
    props:
      - name: ClusterId
        value: '{{ ClusterId }}'
      - name: Name
        value: '{{ Name }}'
      - name: Nodes
        value:
          - '{{ Nodes[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.medialive.channel_placement_groups
SET PatchDocument = string('{{ {
    "Name": name,
    "Nodes": nodes,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Id>|<ClusterId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.medialive.channel_placement_groups
WHERE Identifier = '<Id|ClusterId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>channel_placement_groups</code> resource, the following permissions are required:

### Create
```json
medialive:CreateChannelPlacementGroup,
medialive:DescribeChannelPlacementGroup,
medialive:CreateTags,
medialive:ListTagsForResource
```

### Read
```json
medialive:DescribeChannelPlacementGroup,
medialive:ListTagsForResource
```

### Update
```json
medialive:UpdateChannelPlacementGroup,
medialive:DescribeChannelPlacementGroup,
medialive:CreateTags,
medialive:DeleteTags,
medialive:ListTagsForResource
```

### Delete
```json
medialive:DeleteChannelPlacementGroup,
medialive:DescribeChannelPlacementGroup
```

### List
```json
medialive:ListChannelPlacementGroups
```
