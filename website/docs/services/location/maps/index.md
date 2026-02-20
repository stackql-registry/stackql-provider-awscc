---
title: maps
hide_title: false
hide_table_of_contents: false
keywords:
  - maps
  - location
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

Creates, updates, deletes or gets a <code>map</code> resource or lists <code>maps</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>maps</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Location::Map Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.location.maps" /></td></tr>
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
    "name": "configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "style",
        "type": "string",
        "description": ""
      },
      {
        "name": "political_view",
        "type": "string",
        "description": ""
      },
      {
        "name": "custom_layers",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "create_time",
    "type": "string",
    "description": "The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ)"
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "map_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "map_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "pricing_plan",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
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
    "name": "arn",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "map_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html"><code>AWS::Location::Map</code></a>.

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
    <td><code>maps</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Configuration, MapName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>maps</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>maps</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>maps_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>maps</code></td>
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

Gets all properties from an individual <code>map</code>.
```sql
SELECT
region,
configuration,
create_time,
description,
map_arn,
map_name,
pricing_plan,
tags,
update_time,
arn
FROM awscc.location.maps
WHERE region = 'us-east-1' AND Identifier = '<MapName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>maps</code> in a region.
```sql
SELECT
region,
map_name
FROM awscc.location.maps_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>map</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.location.maps (
 Configuration,
 MapName,
 region
)
SELECT 
'{{ Configuration }}',
 '{{ MapName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.location.maps (
 Configuration,
 Description,
 MapName,
 PricingPlan,
 Tags,
 region
)
SELECT 
 '{{ Configuration }}',
 '{{ Description }}',
 '{{ MapName }}',
 '{{ PricingPlan }}',
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
  - name: map
    props:
      - name: Configuration
        value:
          Style: '{{ Style }}'
          PoliticalView: '{{ PoliticalView }}'
          CustomLayers:
            - '{{ CustomLayers[0] }}'
      - name: Description
        value: '{{ Description }}'
      - name: MapName
        value: '{{ MapName }}'
      - name: PricingPlan
        value: '{{ PricingPlan }}'
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
UPDATE awscc.location.maps
SET PatchDocument = string('{{ {
    "Description": description,
    "PricingPlan": pricing_plan,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<MapName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.location.maps
WHERE Identifier = '<MapName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>maps</code> resource, the following permissions are required:

### Create
```json
geo:CreateMap,
geo:DescribeMap,
geo:TagResource,
geo:UntagResource
```

### Read
```json
geo:DescribeMap
```

### Update
```json
geo:CreateMap,
geo:DescribeMap,
geo:TagResource,
geo:UntagResource,
geo:UpdateMap
```

### Delete
```json
geo:DeleteMap,
geo:DescribeMap
```

### List
```json
geo:ListMaps
```
