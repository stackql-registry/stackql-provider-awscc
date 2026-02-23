---
title: network_insights_paths
hide_title: false
hide_table_of_contents: false
keywords:
  - network_insights_paths
  - ec2
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

Creates, updates, deletes or gets a <code>network_insights_path</code> resource or lists <code>network_insights_paths</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>network_insights_paths</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::EC2::NetworkInsightsPath</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.network_insights_paths" /></td></tr>
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
    "name": "network_insights_path_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "network_insights_path_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "created_date",
    "type": "string",
    "description": ""
  },
  {
    "name": "source_ip",
    "type": "string",
    "description": ""
  },
  {
    "name": "filter_at_source",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "source_port_range",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "from_port",
            "type": "integer",
            "description": ""
          },
          {
            "name": "to_port",
            "type": "integer",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "source",
    "type": "string",
    "description": ""
  },
  {
    "name": "destination",
    "type": "string",
    "description": ""
  },
  {
    "name": "source_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "destination_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "protocol",
    "type": "string",
    "description": ""
  },
  {
    "name": "destination_port",
    "type": "integer",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The tag key."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The tag value."
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
    "name": "network_insights_path_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html"><code>AWS::EC2::NetworkInsightsPath</code></a>.

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
    <td><code>network_insights_paths</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Protocol, Source, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>network_insights_paths</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>network_insights_paths</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>network_insights_paths_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>network_insights_paths</code></td>
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

Gets all properties from an individual <code>network_insights_path</code>.
```sql
SELECT
region,
network_insights_path_id,
network_insights_path_arn,
created_date,
source_ip,
filter_at_source,
filter_at_destination,
destination_ip,
source,
destination,
source_arn,
destination_arn,
protocol,
destination_port,
tags
FROM awscc.ec2.network_insights_paths
WHERE region = 'us-east-1' AND Identifier = '{{ network_insights_path_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>network_insights_paths</code> in a region.
```sql
SELECT
region,
network_insights_path_id
FROM awscc.ec2.network_insights_paths_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>network_insights_path</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.network_insights_paths (
 Source,
 Protocol,
 region
)
SELECT
'{{ source }}',
 '{{ protocol }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.network_insights_paths (
 SourceIp,
 FilterAtSource,
 FilterAtDestination,
 DestinationIp,
 Source,
 Destination,
 Protocol,
 DestinationPort,
 Tags,
 region
)
SELECT
 '{{ source_ip }}',
 '{{ filter_at_source }}',
 '{{ filter_at_destination }}',
 '{{ destination_ip }}',
 '{{ source }}',
 '{{ destination }}',
 '{{ protocol }}',
 '{{ destination_port }}',
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
  - name: network_insights_path
    props:
      - name: source_ip
        value: '{{ source_ip }}'
      - name: filter_at_source
        value:
          source_address: null
          source_port_range:
            from_port: '{{ from_port }}'
            to_port: '{{ to_port }}'
          destination_address: null
          destination_port_range: null
      - name: filter_at_destination
        value: null
      - name: destination_ip
        value: null
      - name: source
        value: '{{ source }}'
      - name: destination
        value: '{{ destination }}'
      - name: protocol
        value: '{{ protocol }}'
      - name: destination_port
        value: '{{ destination_port }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>network_insights_path</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.network_insights_paths
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ network_insights_path_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.network_insights_paths
WHERE Identifier = '{{ network_insights_path_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>network_insights_paths</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'Read', value: 'read', },
      { label: 'List', value: 'list', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
ec2:CreateNetworkInsightsPath,
ec2:CreateTags
```

</TabItem>
<TabItem value="delete">

```json
ec2:DeleteNetworkInsightsPath,
ec2:DeleteTags
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeNetworkInsightsPaths
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeNetworkInsightsPaths
```

</TabItem>
<TabItem value="update">

```json
ec2:DescribeNetworkInsightsPaths,
ec2:CreateTags,
ec2:DeleteTags
```

</TabItem>
</Tabs>