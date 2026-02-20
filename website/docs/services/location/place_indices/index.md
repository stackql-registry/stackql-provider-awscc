---
title: place_indices
hide_title: false
hide_table_of_contents: false
keywords:
  - place_indices
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

Creates, updates, deletes or gets a <code>place_index</code> resource or lists <code>place_indices</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>place_indices</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Location::PlaceIndex Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.location.place_indices" /></td></tr>
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
    "name": "create_time",
    "type": "string",
    "description": "The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ)"
  },
  {
    "name": "data_source",
    "type": "string",
    "description": ""
  },
  {
    "name": "data_source_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "intended_use",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "index_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "index_name",
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
    "name": "index_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-placeindex.html"><code>AWS::Location::PlaceIndex</code></a>.

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
    <td><code>place_indices</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DataSource, IndexName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>place_indices</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>place_indices</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>place_indices_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>place_indices</code></td>
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

Gets all properties from an individual <code>place_index</code>.
```sql
SELECT
region,
create_time,
data_source,
data_source_configuration,
description,
index_arn,
index_name,
pricing_plan,
tags,
update_time,
arn
FROM awscc.location.place_indices
WHERE region = 'us-east-1' AND data__Identifier = '<IndexName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>place_indices</code> in a region.
```sql
SELECT
region,
index_name
FROM awscc.location.place_indices_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>place_index</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.location.place_indices (
 DataSource,
 IndexName,
 region
)
SELECT 
'{{ DataSource }}',
 '{{ IndexName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.location.place_indices (
 DataSource,
 DataSourceConfiguration,
 Description,
 IndexName,
 PricingPlan,
 Tags,
 region
)
SELECT 
 '{{ DataSource }}',
 '{{ DataSourceConfiguration }}',
 '{{ Description }}',
 '{{ IndexName }}',
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
  - name: place_index
    props:
      - name: DataSource
        value: '{{ DataSource }}'
      - name: DataSourceConfiguration
        value:
          IntendedUse: '{{ IntendedUse }}'
      - name: Description
        value: '{{ Description }}'
      - name: IndexName
        value: '{{ IndexName }}'
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
UPDATE awscc.location.place_indices
SET data__PatchDocument = string('{{ {
    "DataSourceConfiguration": data_source_configuration,
    "Description": description,
    "PricingPlan": pricing_plan,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<IndexName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.location.place_indices
WHERE data__Identifier = '<IndexName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>place_indices</code> resource, the following permissions are required:

### Create
```json
geo:CreatePlaceIndex,
geo:DescribePlaceIndex,
geo:TagResource,
geo:UntagResource
```

### Read
```json
geo:DescribePlaceIndex
```

### Update
```json
geo:CreatePlaceIndex,
geo:DescribePlaceIndex,
geo:TagResource,
geo:UntagResource,
geo:UpdatePlaceIndex
```

### Delete
```json
geo:DeletePlaceIndex,
geo:DescribePlaceIndex
```

### List
```json
geo:ListPlaceIndexes
```
