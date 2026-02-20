---
title: core_networks
hide_title: false
hide_table_of_contents: false
keywords:
  - core_networks
  - networkmanager
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

Creates, updates, deletes or gets a <code>core_network</code> resource or lists <code>core_networks</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>core_networks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>AWS::NetworkManager::CoreNetwork Resource Type Definition.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.networkmanager.core_networks" /></td></tr>
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
    "name": "global_network_id",
    "type": "string",
    "description": "The ID of the global network that your core network is a part of."
  },
  {
    "name": "core_network_id",
    "type": "string",
    "description": "The Id of core network"
  },
  {
    "name": "core_network_arn",
    "type": "string",
    "description": "The ARN (Amazon resource name) of core network"
  },
  {
    "name": "policy_document",
    "type": "object",
    "description": "Live policy document for the core network, you must provide PolicyDocument in Json Format"
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of core network"
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The creation time of core network"
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of core network"
  },
  {
    "name": "segments",
    "type": "array",
    "description": "The segments within a core network.",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": "Name of segment"
      },
      {
        "name": "edge_locations",
        "type": "array",
        "description": ""
      },
      {
        "name": "shared_segments",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "network_function_groups",
    "type": "array",
    "description": "The network function groups within a core network.",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": "Name of network function group"
      },
      {
        "name": "edge_locations",
        "type": "array",
        "description": ""
      },
      {
        "name": "segments",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "send_to",
            "type": "array",
            "description": ""
          },
          {
            "name": "send_via",
            "type": "array",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "edges",
    "type": "array",
    "description": "The edges within a core network.",
    "children": [
      {
        "name": "edge_location",
        "type": "string",
        "description": "The Region where a core network edge is located."
      },
      {
        "name": "asn",
        "type": "number",
        "description": "The ASN of a core network edge."
      },
      {
        "name": "inside_cidr_blocks",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "owner_account",
    "type": "string",
    "description": "Owner of the core network"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags for the global network.",
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
    "name": "core_network_id",
    "type": "string",
    "description": "The Id of core network"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-corenetwork.html"><code>AWS::NetworkManager::CoreNetwork</code></a>.

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
    <td><code>core_networks</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="GlobalNetworkId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>core_networks</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>core_networks</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>core_networks_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>core_networks</code></td>
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

Gets all properties from an individual <code>core_network</code>.
```sql
SELECT
region,
global_network_id,
core_network_id,
core_network_arn,
policy_document,
description,
created_at,
state,
segments,
network_function_groups,
edges,
owner_account,
tags
FROM awscc.networkmanager.core_networks
WHERE region = 'us-east-1' AND Identifier = '<CoreNetworkId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>core_networks</code> in a region.
```sql
SELECT
region,
core_network_id
FROM awscc.networkmanager.core_networks_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>core_network</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.networkmanager.core_networks (
 GlobalNetworkId,
 region
)
SELECT 
'{{ GlobalNetworkId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.networkmanager.core_networks (
 GlobalNetworkId,
 PolicyDocument,
 Description,
 Tags,
 region
)
SELECT 
 '{{ GlobalNetworkId }}',
 '{{ PolicyDocument }}',
 '{{ Description }}',
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
  - name: core_network
    props:
      - name: GlobalNetworkId
        value: '{{ GlobalNetworkId }}'
      - name: PolicyDocument
        value: {}
      - name: Description
        value: '{{ Description }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>core_network</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.networkmanager.core_networks
SET PatchDocument = string('{{ {
    "PolicyDocument": policy_document,
    "Description": description,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<CoreNetworkId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.networkmanager.core_networks
WHERE Identifier = '<CoreNetworkId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>core_networks</code> resource, the following permissions are required:

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
networkmanager:CreateCoreNetwork,
networkmanager:GetCoreNetwork,
networkmanager:GetCoreNetworkPolicy,
networkmanager:TagResource,
ec2:DescribeRegions
```

</TabItem>
<TabItem value="read">

```json
networkmanager:GetCoreNetwork,
networkmanager:GetCoreNetworkPolicy
```

</TabItem>
<TabItem value="update">

```json
networkmanager:UpdateCoreNetwork,
networkmanager:GetCoreNetwork,
networkmanager:ListTagsForResource,
networkmanager:PutCoreNetworkPolicy,
networkmanager:GetCoreNetworkPolicy,
networkmanager:ExecuteCoreNetworkChangeSet,
networkmanager:TagResource,
networkmanager:UntagResource,
ec2:DescribeRegions
```

</TabItem>
<TabItem value="delete">

```json
networkmanager:DeleteCoreNetwork,
networkmanager:UntagResource,
networkmanager:GetCoreNetwork,
networkmanager:GetCoreNetworkPolicy,
ec2:DescribeRegions
```

</TabItem>
<TabItem value="list">

```json
networkmanager:ListCoreNetworks
```

</TabItem>
</Tabs>