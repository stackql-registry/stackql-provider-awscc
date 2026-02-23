---
title: traffic_mirror_filters
hide_title: false
hide_table_of_contents: false
keywords:
  - traffic_mirror_filters
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

Creates, updates, deletes or gets a <code>traffic_mirror_filter</code> resource or lists <code>traffic_mirror_filters</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>traffic_mirror_filters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::EC2::TrafficMirrorFilter</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.traffic_mirror_filters" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": "The ID of a traffic mirror filter."
  },
  {
    "name": "network_services",
    "type": "array",
    "description": "The network service that is associated with the traffic mirror filter."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of a traffic mirror filter."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags for a traffic mirror filter.",
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
    "name": "id",
    "type": "string",
    "description": "The ID of a traffic mirror filter."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilter.html"><code>AWS::EC2::TrafficMirrorFilter</code></a>.

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
    <td><code>traffic_mirror_filters</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>traffic_mirror_filters</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>traffic_mirror_filters</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>traffic_mirror_filters_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>traffic_mirror_filters</code></td>
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

Gets all properties from an individual <code>traffic_mirror_filter</code>.
```sql
SELECT
region,
id,
network_services,
description,
tags
FROM awscc.ec2.traffic_mirror_filters
WHERE region = 'us-east-1' AND Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>traffic_mirror_filters</code> in a region.
```sql
SELECT
region,
id
FROM awscc.ec2.traffic_mirror_filters_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>traffic_mirror_filter</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.traffic_mirror_filters (
 NetworkServices,
 Description,
 Tags,
 region
)
SELECT
'{{ network_services }}',
 '{{ description }}',
 '{{ tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.traffic_mirror_filters (
 NetworkServices,
 Description,
 Tags,
 region
)
SELECT
 '{{ network_services }}',
 '{{ description }}',
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
  - name: traffic_mirror_filter
    props:
      - name: network_services
        value:
          - '{{ network_services[0] }}'
      - name: description
        value: '{{ description }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>traffic_mirror_filter</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.traffic_mirror_filters
SET PatchDocument = string('{{ {
    "NetworkServices": network_services,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.traffic_mirror_filters
WHERE Identifier = '{{ id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>traffic_mirror_filters</code> resource, the following permissions are required:

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
ec2:CreateTrafficMirrorFilter,
ec2:DescribeTrafficMirrorFilters,
ec2:CreateTags,
ec2:ModifyTrafficMirrorFilterNetworkServices,
ec2:DescribeTags
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeTrafficMirrorFilters,
ec2:DescribeTags
```

</TabItem>
<TabItem value="update">

```json
ec2:ModifyTrafficMirrorFilterNetworkServices,
ec2:DescribeTrafficMirrorFilters,
ec2:CreateTags,
ec2:DeleteTags,
ec2:DescribeTags
```

</TabItem>
<TabItem value="delete">

```json
ec2:DescribeTrafficMirrorFilters,
ec2:DeleteTrafficMirrorFilter,
ec2:DeleteTags,
ec2:DescribeTags
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeTrafficMirrorFilters,
ec2:DescribeTags
```

</TabItem>
</Tabs>