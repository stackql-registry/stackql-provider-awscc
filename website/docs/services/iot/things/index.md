---
title: things
hide_title: false
hide_table_of_contents: false
keywords:
  - things
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

Creates, updates, deletes or gets a <code>thing</code> resource or lists <code>things</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>things</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::IoT::Thing</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iot.things" /></td></tr>
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
    "name": "thing_name",
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
    "name": "thing_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thing.html"><code>AWS::IoT::Thing</code></a>.

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
    <td><code>things</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>things</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>things</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>things_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>things</code></td>
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

Gets all properties from an individual <code>thing</code>.
```sql
SELECT
region,
id,
arn,
attribute_payload,
thing_name
FROM awscc.iot.things
WHERE region = 'us-east-1' AND Identifier = '<ThingName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>things</code> in a region.
```sql
SELECT
region,
thing_name
FROM awscc.iot.things_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>thing</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iot.things (
 AttributePayload,
 ThingName,
 region
)
SELECT 
'{{ AttributePayload }}',
 '{{ ThingName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iot.things (
 AttributePayload,
 ThingName,
 region
)
SELECT 
 '{{ AttributePayload }}',
 '{{ ThingName }}',
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
  - name: thing
    props:
      - name: AttributePayload
        value:
          Attributes: {}
      - name: ThingName
        value: '{{ ThingName }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>thing</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iot.things
SET PatchDocument = string('{{ {
    "AttributePayload": attribute_payload
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ThingName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.things
WHERE Identifier = '<ThingName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>things</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
iot:CreateThing,
iot:DescribeThing
```

</TabItem>
<TabItem value="delete">

```json
iot:DeleteThing,
iot:DescribeThing
```

</TabItem>
<TabItem value="list">

```json
iot:ListThings
```

</TabItem>
<TabItem value="read">

```json
iot:DescribeThing
```

</TabItem>
<TabItem value="update">

```json
iot:UpdateThing,
iot:DescribeThing
```

</TabItem>
</Tabs>