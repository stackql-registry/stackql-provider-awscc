---
title: dimensions
hide_title: false
hide_table_of_contents: false
keywords:
  - dimensions
  - iot
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

Creates, updates, deletes or gets a <code>dimension</code> resource or lists <code>dimensions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>dimensions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A dimension can be used to limit the scope of a metric used in a security profile for AWS IoT Device Defender.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iot.dimensions" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "A unique identifier for the dimension."
  },
  {
    "name": "type",
    "type": "string",
    "description": "Specifies the type of the dimension."
  },
  {
    "name": "string_values",
    "type": "array",
    "description": "Specifies the value or list of values for the dimension."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Metadata that can be used to manage the dimension.",
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
    "name": "arn",
    "type": "string",
    "description": "The ARN (Amazon resource name) of the created dimension."
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
    "name": "name",
    "type": "string",
    "description": "A unique identifier for the dimension."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html"><code>AWS::IoT::Dimension</code></a>.

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
    <td><code>dimensions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Type, StringValues, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>dimensions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>dimensions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>dimensions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>dimensions</code></td>
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

Gets all properties from an individual <code>dimension</code>.
```sql
SELECT
region,
name,
type,
string_values,
tags,
arn
FROM awscc.iot.dimensions
WHERE region = 'us-east-1' AND data__Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>dimensions</code> in a region.
```sql
SELECT
region,
name
FROM awscc.iot.dimensions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>dimension</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iot.dimensions (
 Type,
 StringValues,
 region
)
SELECT 
'{{ Type }}',
 '{{ StringValues }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iot.dimensions (
 Name,
 Type,
 StringValues,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Type }}',
 '{{ StringValues }}',
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
  - name: dimension
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Type
        value: '{{ Type }}'
      - name: StringValues
        value:
          - '{{ StringValues[0] }}'
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
UPDATE awscc.iot.dimensions
SET data__PatchDocument = string('{{ {
    "StringValues": string_values,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.dimensions
WHERE data__Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>dimensions</code> resource, the following permissions are required:

### Create
```json
iot:CreateDimension,
iot:TagResource
```

### Read
```json
iot:DescribeDimension,
iot:ListTagsForResource
```

### Update
```json
iot:UpdateDimension,
iot:ListTagsForResource,
iot:UntagResource,
iot:TagResource
```

### Delete
```json
iot:DescribeDimension,
iot:DeleteDimension
```

### List
```json
iot:ListDimensions
```
