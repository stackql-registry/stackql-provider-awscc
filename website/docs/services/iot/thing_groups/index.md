---
title: thing_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - thing_groups
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

Creates, updates, deletes or gets a <code>thing_group</code> resource or lists <code>thing_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>thing_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::IoT::ThingGroup</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iot.thing_groups" /></td></tr>
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
    "name": "thing_group_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "parent_group_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "query_string",
    "type": "string",
    "description": ""
  },
  {
    "name": "thing_group_properties",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "attribute_payload",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "attributes",
            "type": "object",
            "description": ""
          }
        ]
      },
      {
        "name": "thing_group_description",
        "type": "string",
        "description": ""
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
    "name": "thing_group_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html"><code>AWS::IoT::ThingGroup</code></a>.

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
    <td><code>thing_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>thing_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>thing_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>thing_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>thing_groups</code></td>
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

Gets all properties from an individual <code>thing_group</code>.
```sql
SELECT
region,
id,
arn,
thing_group_name,
parent_group_name,
query_string,
thing_group_properties,
tags
FROM awscc.iot.thing_groups
WHERE region = 'us-east-1' AND data__Identifier = '<ThingGroupName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>thing_groups</code> in a region.
```sql
SELECT
region,
thing_group_name
FROM awscc.iot.thing_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>thing_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iot.thing_groups (
 ThingGroupName,
 ParentGroupName,
 QueryString,
 ThingGroupProperties,
 Tags,
 region
)
SELECT 
'{{ ThingGroupName }}',
 '{{ ParentGroupName }}',
 '{{ QueryString }}',
 '{{ ThingGroupProperties }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iot.thing_groups (
 ThingGroupName,
 ParentGroupName,
 QueryString,
 ThingGroupProperties,
 Tags,
 region
)
SELECT 
 '{{ ThingGroupName }}',
 '{{ ParentGroupName }}',
 '{{ QueryString }}',
 '{{ ThingGroupProperties }}',
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
  - name: thing_group
    props:
      - name: ThingGroupName
        value: '{{ ThingGroupName }}'
      - name: ParentGroupName
        value: '{{ ParentGroupName }}'
      - name: QueryString
        value: '{{ QueryString }}'
      - name: ThingGroupProperties
        value:
          AttributePayload:
            Attributes: {}
          ThingGroupDescription: '{{ ThingGroupDescription }}'
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
UPDATE awscc.iot.thing_groups
SET data__PatchDocument = string('{{ {
    "QueryString": query_string,
    "ThingGroupProperties": thing_group_properties,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ThingGroupName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.thing_groups
WHERE data__Identifier = '<ThingGroupName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>thing_groups</code> resource, the following permissions are required:

### Create
```json
iot:DescribeThingGroup,
iot:ListTagsForResource,
iot:CreateThingGroup,
iot:CreateDynamicThingGroup,
iot:TagResource
```

### Delete
```json
iot:DescribeThingGroup,
iot:DeleteThingGroup,
iot:DeleteDynamicThingGroup
```

### List
```json
iot:ListThingGroups,
iot:ListTagsForResource
```

### Read
```json
iot:DescribeThingGroup,
iot:ListTagsForResource
```

### Update
```json
iot:ListTagsForResource,
iot:DescribeThingGroup,
iot:UpdateThingGroup,
iot:UpdateDynamicThingGroup,
iot:TagResource,
iot:UntagResource
```
