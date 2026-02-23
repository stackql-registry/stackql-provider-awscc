---
title: variables
hide_title: false
hide_table_of_contents: false
keywords:
  - variables
  - frauddetector
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

Creates, updates, deletes or gets a <code>variable</code> resource or lists <code>variables</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>variables</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A resource schema for a Variable in Amazon Fraud Detector.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.frauddetector.variables" /></td></tr>
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
    "description": "The name of the variable."
  },
  {
    "name": "data_source",
    "type": "string",
    "description": "The source of the data."
  },
  {
    "name": "data_type",
    "type": "string",
    "description": "The data type."
  },
  {
    "name": "default_value",
    "type": "string",
    "description": "The default value for the variable when no value is received."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags associated with this variable.",
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
    "name": "variable_type",
    "type": "string",
    "description": "The variable type. For more information see https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types"
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The ARN of the variable."
  },
  {
    "name": "created_time",
    "type": "string",
    "description": "The time when the variable was created."
  },
  {
    "name": "last_updated_time",
    "type": "string",
    "description": "The time when the variable was last updated."
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
    "name": "arn",
    "type": "string",
    "description": "The ARN of the variable."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-variable.html"><code>AWS::FraudDetector::Variable</code></a>.

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
    <td><code>variables</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DataType, DataSource, DefaultValue, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>variables</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>variables</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>variables_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>variables</code></td>
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

Gets all properties from an individual <code>variable</code>.
```sql
SELECT
region,
name,
data_source,
data_type,
default_value,
description,
tags,
variable_type,
arn,
created_time,
last_updated_time
FROM awscc.frauddetector.variables
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>variables</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.frauddetector.variables_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>variable</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.frauddetector.variables (
 Name,
 DataSource,
 DataType,
 DefaultValue,
 region
)
SELECT
'{{ name }}',
 '{{ data_source }}',
 '{{ data_type }}',
 '{{ default_value }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.frauddetector.variables (
 Name,
 DataSource,
 DataType,
 DefaultValue,
 Description,
 Tags,
 VariableType,
 region
)
SELECT
 '{{ name }}',
 '{{ data_source }}',
 '{{ data_type }}',
 '{{ default_value }}',
 '{{ description }}',
 '{{ tags }}',
 '{{ variable_type }}',
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
  - name: variable
    props:
      - name: name
        value: '{{ name }}'
      - name: data_source
        value: '{{ data_source }}'
      - name: data_type
        value: '{{ data_type }}'
      - name: default_value
        value: '{{ default_value }}'
      - name: description
        value: '{{ description }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: variable_type
        value: '{{ variable_type }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>variable</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.frauddetector.variables
SET PatchDocument = string('{{ {
    "DataSource": data_source,
    "DataType": data_type,
    "DefaultValue": default_value,
    "Description": description,
    "Tags": tags,
    "VariableType": variable_type
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.frauddetector.variables
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>variables</code> resource, the following permissions are required:

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
frauddetector:GetVariables,
frauddetector:CreateVariable,
frauddetector:ListTagsForResource,
frauddetector:TagResource
```

</TabItem>
<TabItem value="read">

```json
frauddetector:GetVariables,
frauddetector:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
frauddetector:GetVariables,
frauddetector:UpdateVariable,
frauddetector:ListTagsForResource,
frauddetector:TagResource,
frauddetector:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
frauddetector:GetVariables,
frauddetector:DeleteVariable
```

</TabItem>
<TabItem value="list">

```json
frauddetector:GetVariables,
frauddetector:ListTagsForResource
```

</TabItem>
</Tabs>