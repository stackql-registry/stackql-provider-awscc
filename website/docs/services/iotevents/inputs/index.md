---
title: inputs
hide_title: false
hide_table_of_contents: false
keywords:
  - inputs
  - iotevents
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

Creates, updates, deletes or gets an <code>input</code> resource or lists <code>inputs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>inputs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::IoTEvents::Input resource creates an input. To monitor your devices and processes, they must have a way to get telemetry data into ITE. This is done by sending messages as &#42;inputs&#42; to ITE. For more information, see &#91;How to Use&#93;(https://docs.aws.amazon.com/iotevents/latest/developerguide/how-to-use-iotevents.html) in the &#42;Developer Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotevents.inputs" /></td></tr>
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
    "name": "input_definition",
    "type": "object",
    "description": "The definition of the input.",
    "children": [
      {
        "name": "attributes",
        "type": "array",
        "description": "The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the ITE system using &#96;&#96;BatchPutMessage&#96;&#96;. Each such message contains a JSON payload, and those attributes (and their paired values) specified here are available for use in the &#96;&#96;condition&#96;&#96; expressions used by detectors that monitor this input.",
        "children": [
          {
            "name": "json_path",
            "type": "string",
            "description": "An expression that specifies an attribute-value pair in a JSON structure. Use this to specify an attribute from the JSON payload that is made available by the input. Inputs are derived from messages sent to ITE (&#96;&#96;BatchPutMessage&#96;&#96;). Each such message contains a JSON payload. The attribute (and its paired value) specified here are available for use in the &#96;&#96;condition&#96;&#96; expressions used by detectors. <br />Syntax: &#96;&#96;&lt;field-name&gt;.&lt;field-name&gt;...&#96;&#96;"
          }
        ]
      }
    ]
  },
  {
    "name": "input_description",
    "type": "string",
    "description": "A brief description of the input."
  },
  {
    "name": "input_name",
    "type": "string",
    "description": "The name of the input."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.<br />For more information, see &#91;Tag&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The tag's key."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The tag's value."
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
    "name": "input_name",
    "type": "string",
    "description": "The name of the input."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-input.html"><code>AWS::IoTEvents::Input</code></a>.

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
    <td><code>inputs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="InputDefinition, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>inputs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>inputs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>inputs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>inputs</code></td>
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

Gets all properties from an individual <code>input</code>.
```sql
SELECT
region,
input_definition,
input_description,
input_name,
tags
FROM awscc.iotevents.inputs
WHERE region = 'us-east-1' AND Identifier = '<InputName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>inputs</code> in a region.
```sql
SELECT
region,
input_name
FROM awscc.iotevents.inputs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>input</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotevents.inputs (
 InputDefinition,
 region
)
SELECT 
'{{ InputDefinition }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotevents.inputs (
 InputDefinition,
 InputDescription,
 InputName,
 Tags,
 region
)
SELECT 
 '{{ InputDefinition }}',
 '{{ InputDescription }}',
 '{{ InputName }}',
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
  - name: input
    props:
      - name: InputDefinition
        value:
          Attributes:
            - JsonPath: '{{ JsonPath }}'
      - name: InputDescription
        value: '{{ InputDescription }}'
      - name: InputName
        value: '{{ InputName }}'
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
UPDATE awscc.iotevents.inputs
SET PatchDocument = string('{{ {
    "InputDefinition": input_definition,
    "InputDescription": input_description,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<InputName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotevents.inputs
WHERE Identifier = '<InputName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>inputs</code> resource, the following permissions are required:

### Create
```json
iotevents:CreateInput,
iotevents:TagResource,
iotevents:DescribeInput,
iotevents:ListTagsForResource
```

### Read
```json
iotevents:DescribeInput,
iotevents:ListTagsForResource
```

### Update
```json
iotevents:UpdateInput,
iotevents:DescribeInput,
iotevents:ListTagsForResource,
iotevents:UntagResource,
iotevents:TagResource
```

### Delete
```json
iotevents:DeleteInput,
iotevents:DescribeInput
```

### List
```json
iotevents:ListInputs
```
