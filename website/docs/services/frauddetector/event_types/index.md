---
title: event_types
hide_title: false
hide_table_of_contents: false
keywords:
  - event_types
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

Creates, updates, deletes or gets an <code>event_type</code> resource or lists <code>event_types</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>event_types</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A resource schema for an EventType in Amazon Fraud Detector.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.frauddetector.event_types" /></td></tr>
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
    "description": "The name for the event type"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags associated with this event type.",
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
    "name": "description",
    "type": "string",
    "description": "The description of the event type."
  },
  {
    "name": "event_variables",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "inline",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "name",
        "type": "string",
        "description": ""
      },
      {
        "name": "data_source",
        "type": "string",
        "description": ""
      },
      {
        "name": "data_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "default_value",
        "type": "string",
        "description": ""
      },
      {
        "name": "variable_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "description",
        "type": "string",
        "description": "The description."
      },
      {
        "name": "tags",
        "type": "array",
        "description": "Tags associated with this event type."
      },
      {
        "name": "created_time",
        "type": "string",
        "description": "The time when the event type was created."
      },
      {
        "name": "last_updated_time",
        "type": "string",
        "description": "The time when the event type was last updated."
      }
    ]
  },
  {
    "name": "labels",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": "The name of the label."
      },
      {
        "name": "tags",
        "type": "array",
        "description": "Tags associated with this label."
      },
      {
        "name": "description",
        "type": "string",
        "description": "The label description."
      },
      {
        "name": "arn",
        "type": "string",
        "description": "The label ARN."
      },
      {
        "name": "created_time",
        "type": "string",
        "description": "The timestamp when the label was created."
      },
      {
        "name": "last_updated_time",
        "type": "string",
        "description": "The timestamp when the label was last updated."
      }
    ]
  },
  {
    "name": "entity_types",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "inline",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "name",
        "type": "string",
        "description": ""
      },
      {
        "name": "description",
        "type": "string",
        "description": "The description."
      },
      {
        "name": "tags",
        "type": "array",
        "description": "Tags associated with this event type."
      },
      {
        "name": "created_time",
        "type": "string",
        "description": "The time when the event type was created."
      },
      {
        "name": "last_updated_time",
        "type": "string",
        "description": "The time when the event type was last updated."
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The ARN of the event type."
  },
  {
    "name": "created_time",
    "type": "string",
    "description": "The time when the event type was created."
  },
  {
    "name": "last_updated_time",
    "type": "string",
    "description": "The time when the event type was last updated."
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
    "description": "The ARN of the event type."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-eventtype.html"><code>AWS::FraudDetector::EventType</code></a>.

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
    <td><code>event_types</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="EntityTypes, EventVariables, Labels, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>event_types</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>event_types</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>event_types_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>event_types</code></td>
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

Gets all properties from an individual <code>event_type</code>.
```sql
SELECT
region,
name,
tags,
description,
event_variables,
labels,
entity_types,
arn,
created_time,
last_updated_time
FROM awscc.frauddetector.event_types
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>event_types</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.frauddetector.event_types_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>event_type</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.frauddetector.event_types (
 Name,
 EventVariables,
 Labels,
 EntityTypes,
 region
)
SELECT
'{{ name }}',
 '{{ event_variables }}',
 '{{ labels }}',
 '{{ entity_types }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.frauddetector.event_types (
 Name,
 Tags,
 Description,
 EventVariables,
 Labels,
 EntityTypes,
 region
)
SELECT
 '{{ name }}',
 '{{ tags }}',
 '{{ description }}',
 '{{ event_variables }}',
 '{{ labels }}',
 '{{ entity_types }}',
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
  - name: event_type
    props:
      - name: name
        value: '{{ name }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: description
        value: '{{ description }}'
      - name: event_variables
        value:
          - arn: '{{ arn }}'
            inline: '{{ inline }}'
            name: '{{ name }}'
            data_source: '{{ data_source }}'
            data_type: '{{ data_type }}'
            default_value: '{{ default_value }}'
            variable_type: '{{ variable_type }}'
            description: '{{ description }}'
            tags:
              - null
            created_time: '{{ created_time }}'
            last_updated_time: '{{ last_updated_time }}'
      - name: labels
        value:
          - name: '{{ name }}'
            tags:
              - null
            description: '{{ description }}'
      - name: entity_types
        value:
          - arn: '{{ arn }}'
            inline: '{{ inline }}'
            name: '{{ name }}'
            description: '{{ description }}'
            tags:
              - null
            created_time: '{{ created_time }}'
            last_updated_time: '{{ last_updated_time }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>event_type</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.frauddetector.event_types
SET PatchDocument = string('{{ {
    "Tags": tags,
    "Description": description
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.frauddetector.event_types
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>event_types</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'Read', value: 'read', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
frauddetector:BatchCreateVariable,
frauddetector:BatchGetVariable,
frauddetector:CreateVariable,
frauddetector:GetVariables,
frauddetector:PutLabel,
frauddetector:PutEntityType,
frauddetector:PutEventType,
frauddetector:GetEventTypes,
frauddetector:GetLabels,
frauddetector:GetEntityTypes,
frauddetector:ListTagsForResource,
frauddetector:TagResource
```

</TabItem>
<TabItem value="update">

```json
frauddetector:BatchCreateVariable,
frauddetector:BatchGetVariable,
frauddetector:CreateVariable,
frauddetector:UpdateVariable,
frauddetector:GetVariables,
frauddetector:PutLabel,
frauddetector:PutEntityType,
frauddetector:PutEventType,
frauddetector:GetEventTypes,
frauddetector:GetLabels,
frauddetector:GetEntityTypes,
frauddetector:DeleteEventType,
frauddetector:DeleteVariable,
frauddetector:DeleteLabel,
frauddetector:DeleteEntityType,
frauddetector:ListTagsForResource,
frauddetector:TagResource,
frauddetector:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
frauddetector:BatchGetVariable,
frauddetector:GetVariables,
frauddetector:GetEventTypes,
frauddetector:GetLabels,
frauddetector:GetEntityTypes,
frauddetector:DeleteEventType,
frauddetector:DeleteVariable,
frauddetector:DeleteLabel,
frauddetector:DeleteEntityType,
frauddetector:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
frauddetector:BatchGetVariable,
frauddetector:GetVariables,
frauddetector:GetEventTypes,
frauddetector:GetLabels,
frauddetector:GetEntityTypes,
frauddetector:ListTagsForResource
```

</TabItem>
<TabItem value="list">

```json
frauddetector:BatchGetVariable,
frauddetector:GetVariables,
frauddetector:GetEventTypes,
frauddetector:GetLabels,
frauddetector:GetEntityTypes,
frauddetector:ListTagsForResource
```

</TabItem>
</Tabs>