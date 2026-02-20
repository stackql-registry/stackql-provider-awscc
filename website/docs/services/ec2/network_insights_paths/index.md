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
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>network_insights_paths</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<NetworkInsightsPathId>';
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
'{{ Source }}',
 '{{ Protocol }}',
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
 '{{ SourceIp }}',
 '{{ FilterAtSource }}',
 '{{ FilterAtDestination }}',
 '{{ DestinationIp }}',
 '{{ Source }}',
 '{{ Destination }}',
 '{{ Protocol }}',
 '{{ DestinationPort }}',
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
  - name: network_insights_path
    props:
      - name: SourceIp
        value: '{{ SourceIp }}'
      - name: FilterAtSource
        value:
          SourceAddress: null
          SourcePortRange:
            FromPort: '{{ FromPort }}'
            ToPort: '{{ ToPort }}'
          DestinationAddress: null
          DestinationPortRange: null
      - name: FilterAtDestination
        value: null
      - name: DestinationIp
        value: null
      - name: Source
        value: '{{ Source }}'
      - name: Destination
        value: '{{ Destination }}'
      - name: Protocol
        value: '{{ Protocol }}'
      - name: DestinationPort
        value: '{{ DestinationPort }}'
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
UPDATE awscc.ec2.network_insights_paths
SET data__PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<NetworkInsightsPathId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.network_insights_paths
WHERE data__Identifier = '<NetworkInsightsPathId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>network_insights_paths</code> resource, the following permissions are required:

### Create
```json
ec2:CreateNetworkInsightsPath,
ec2:CreateTags
```

### Delete
```json
ec2:DeleteNetworkInsightsPath,
ec2:DeleteTags
```

### Read
```json
ec2:DescribeNetworkInsightsPaths
```

### List
```json
ec2:DescribeNetworkInsightsPaths
```

### Update
```json
ec2:DescribeNetworkInsightsPaths,
ec2:CreateTags,
ec2:DeleteTags
```
