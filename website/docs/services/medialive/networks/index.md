---
title: networks
hide_title: false
hide_table_of_contents: false
keywords:
  - networks
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

Creates, updates, deletes or gets a <code>network</code> resource or lists <code>networks</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>networks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::MediaLive::Network.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.medialive.networks" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": "The ARN of the Network."
  },
  {
    "name": "associated_cluster_ids",
    "type": "array",
    "description": ""
  },
  {
    "name": "id",
    "type": "string",
    "description": "The unique ID of the Network."
  },
  {
    "name": "ip_pools",
    "type": "array",
    "description": "The list of IP address cidr pools for the network",
    "children": [
      {
        "name": "cidr",
        "type": "string",
        "description": "IP address cidr pool"
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": "The user-specified name of the Network to be created."
  },
  {
    "name": "routes",
    "type": "array",
    "description": "The routes for the network",
    "children": [
      {
        "name": "cidr",
        "type": "string",
        "description": "Ip address cidr"
      },
      {
        "name": "gateway",
        "type": "string",
        "description": "IP address for the route packet paths"
      }
    ]
  },
  {
    "name": "state",
    "type": "string",
    "description": "The current state of the Network."
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-network.html"><code>AWS::MediaLive::Network</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, IpPools, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>network</code>.
```sql
SELECT
region,
arn,
associated_cluster_ids,
id,
ip_pools,
name,
routes,
state,
tags
FROM awscc.medialive.networks
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>network</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.medialive.networks (
 IpPools,
 Name,
 region
)
SELECT 
'{{ IpPools }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.medialive.networks (
 IpPools,
 Name,
 Routes,
 Tags,
 region
)
SELECT 
 '{{ IpPools }}',
 '{{ Name }}',
 '{{ Routes }}',
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
  - name: network
    props:
      - name: IpPools
        value:
          - Cidr: '{{ Cidr }}'
      - name: Name
        value: '{{ Name }}'
      - name: Routes
        value:
          - Cidr: '{{ Cidr }}'
            Gateway: '{{ Gateway }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.medialive.networks
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>networks</code> resource, the following permissions are required:

### Create
```json
medialive:CreateNetwork,
medialive:CreateTags,
medialive:DescribeNetwork,
medialive:ListTagsForResource
```

### Read
```json
medialive:DescribeNetwork,
medialive:ListTagsForResource
```

### Update
```json
medialive:UpdateNetwork,
medialive:CreateTags,
medialive:DeleteTags,
medialive:DescribeNetwork,
medialive:ListTagsForResource
```

### Delete
```json
medialive:DeleteNetwork,
medialive:DescribeNetwork
```

### List
```json
medialive:ListNetworks
```
