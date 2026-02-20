---
title: thing_types
hide_title: false
hide_table_of_contents: false
keywords:
  - thing_types
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

Creates, updates, deletes or gets a <code>thing_type</code> resource or lists <code>thing_types</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>thing_types</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::IoT::ThingType</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iot.thing_types" /></td></tr>
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
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "thing_type_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "deprecate_thing_type",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "thing_type_properties",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "searchable_attributes",
        "type": "array",
        "description": ""
      },
      {
        "name": "thing_type_description",
        "type": "string",
        "description": ""
      },
      {
        "name": "mqtt5_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "propagating_attributes",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "user_property_key",
                "type": "string",
                "description": ""
              },
              {
                "name": "thing_attribute",
                "type": "string",
                "description": ""
              },
              {
                "name": "connection_attribute",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
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
    "name": "thing_type_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html"><code>AWS::IoT::ThingType</code></a>.

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
    <td><code>thing_types</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>thing_types</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>thing_types</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>thing_types_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>thing_types</code></td>
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

Gets all properties from an individual <code>thing_type</code>.
```sql
SELECT
region,
id,
arn,
thing_type_name,
deprecate_thing_type,
thing_type_properties,
tags
FROM awscc.iot.thing_types
WHERE region = 'us-east-1' AND Identifier = '<ThingTypeName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>thing_types</code> in a region.
```sql
SELECT
region,
thing_type_name
FROM awscc.iot.thing_types_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>thing_type</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iot.thing_types (
 ThingTypeName,
 DeprecateThingType,
 ThingTypeProperties,
 Tags,
 region
)
SELECT 
'{{ ThingTypeName }}',
 '{{ DeprecateThingType }}',
 '{{ ThingTypeProperties }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iot.thing_types (
 ThingTypeName,
 DeprecateThingType,
 ThingTypeProperties,
 Tags,
 region
)
SELECT 
 '{{ ThingTypeName }}',
 '{{ DeprecateThingType }}',
 '{{ ThingTypeProperties }}',
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
  - name: thing_type
    props:
      - name: ThingTypeName
        value: '{{ ThingTypeName }}'
      - name: DeprecateThingType
        value: '{{ DeprecateThingType }}'
      - name: ThingTypeProperties
        value:
          SearchableAttributes:
            - '{{ SearchableAttributes[0] }}'
          ThingTypeDescription: '{{ ThingTypeDescription }}'
          Mqtt5Configuration:
            PropagatingAttributes:
              - UserPropertyKey: '{{ UserPropertyKey }}'
                ThingAttribute: '{{ ThingAttribute }}'
                ConnectionAttribute: '{{ ConnectionAttribute }}'
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
UPDATE awscc.iot.thing_types
SET PatchDocument = string('{{ {
    "DeprecateThingType": deprecate_thing_type,
    "ThingTypeProperties": thing_type_properties,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ThingTypeName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.thing_types
WHERE Identifier = '<ThingTypeName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>thing_types</code> resource, the following permissions are required:

### Create
```json
iot:DescribeThingType,
iot:ListTagsForResource,
iot:CreateThingType,
iot:DeprecateThingType,
iot:TagResource
```

### Delete
```json
iot:DescribeThingType,
iot:DeleteThingType,
iot:DeprecateThingType
```

### List
```json
iot:ListThingTypes,
iot:ListTagsForResource
```

### Read
```json
iot:DescribeThingType,
iot:ListTagsForResource
```

### Update
```json
iot:DescribeThingType,
iot:UpdateThingType,
iot:ListTagsForResource,
iot:TagResource,
iot:UntagResource,
iot:DeprecateThingType
```
