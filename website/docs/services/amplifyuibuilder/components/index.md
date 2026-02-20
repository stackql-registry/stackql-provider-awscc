---
title: components
hide_title: false
hide_table_of_contents: false
keywords:
  - components
  - amplifyuibuilder
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

Creates, updates, deletes or gets a <code>component</code> resource or lists <code>components</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>components</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::AmplifyUIBuilder::Component Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.amplifyuibuilder.components" /></td></tr>
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
    "name": "app_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "binding_properties",
    "type": "object",
    "description": ""
  },
  {
    "name": "children",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "component_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "name",
        "type": "string",
        "description": ""
      },
      {
        "name": "properties",
        "type": "object",
        "description": ""
      },
      {
        "name": "children",
        "type": "array",
        "description": ""
      },
      {
        "name": "events",
        "type": "object",
        "description": ""
      },
      {
        "name": "source_id",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "collection_properties",
    "type": "object",
    "description": ""
  },
  {
    "name": "component_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "created_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "environment_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "events",
    "type": "object",
    "description": ""
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "modified_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "overrides",
    "type": "object",
    "description": ""
  },
  {
    "name": "properties",
    "type": "object",
    "description": ""
  },
  {
    "name": "schema_version",
    "type": "string",
    "description": ""
  },
  {
    "name": "source_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "object",
    "description": ""
  },
  {
    "name": "variants",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "variant_values",
        "type": "object",
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
    "name": "app_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "environment_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-component.html"><code>AWS::AmplifyUIBuilder::Component</code></a>.

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
    <td><code>components</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>components</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>components</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>components_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>components</code></td>
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

Gets all properties from an individual <code>component</code>.
```sql
SELECT
region,
app_id,
binding_properties,
children,
collection_properties,
component_type,
created_at,
environment_name,
events,
id,
modified_at,
name,
overrides,
properties,
schema_version,
source_id,
tags,
variants
FROM awscc.amplifyuibuilder.components
WHERE region = 'us-east-1' AND data__Identifier = '<AppId>|<EnvironmentName>|<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>components</code> in a region.
```sql
SELECT
region,
app_id,
environment_name,
id
FROM awscc.amplifyuibuilder.components_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>component</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.amplifyuibuilder.components (
 AppId,
 BindingProperties,
 Children,
 CollectionProperties,
 ComponentType,
 EnvironmentName,
 Events,
 Name,
 Overrides,
 Properties,
 SchemaVersion,
 SourceId,
 Tags,
 Variants,
 region
)
SELECT 
'{{ AppId }}',
 '{{ BindingProperties }}',
 '{{ Children }}',
 '{{ CollectionProperties }}',
 '{{ ComponentType }}',
 '{{ EnvironmentName }}',
 '{{ Events }}',
 '{{ Name }}',
 '{{ Overrides }}',
 '{{ Properties }}',
 '{{ SchemaVersion }}',
 '{{ SourceId }}',
 '{{ Tags }}',
 '{{ Variants }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.amplifyuibuilder.components (
 AppId,
 BindingProperties,
 Children,
 CollectionProperties,
 ComponentType,
 EnvironmentName,
 Events,
 Name,
 Overrides,
 Properties,
 SchemaVersion,
 SourceId,
 Tags,
 Variants,
 region
)
SELECT 
 '{{ AppId }}',
 '{{ BindingProperties }}',
 '{{ Children }}',
 '{{ CollectionProperties }}',
 '{{ ComponentType }}',
 '{{ EnvironmentName }}',
 '{{ Events }}',
 '{{ Name }}',
 '{{ Overrides }}',
 '{{ Properties }}',
 '{{ SchemaVersion }}',
 '{{ SourceId }}',
 '{{ Tags }}',
 '{{ Variants }}',
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
  - name: component
    props:
      - name: AppId
        value: '{{ AppId }}'
      - name: BindingProperties
        value: {}
      - name: Children
        value:
          - ComponentType: '{{ ComponentType }}'
            Name: '{{ Name }}'
            Properties: {}
            Children:
              - null
            Events: {}
            SourceId: '{{ SourceId }}'
      - name: CollectionProperties
        value: {}
      - name: ComponentType
        value: '{{ ComponentType }}'
      - name: EnvironmentName
        value: '{{ EnvironmentName }}'
      - name: Events
        value: null
      - name: Name
        value: '{{ Name }}'
      - name: Overrides
        value: {}
      - name: Properties
        value: null
      - name: SchemaVersion
        value: '{{ SchemaVersion }}'
      - name: SourceId
        value: '{{ SourceId }}'
      - name: Tags
        value: {}
      - name: Variants
        value:
          - VariantValues: {}
            Overrides: null

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.amplifyuibuilder.components
SET data__PatchDocument = string('{{ {
    "BindingProperties": binding_properties,
    "Children": children,
    "CollectionProperties": collection_properties,
    "ComponentType": component_type,
    "Events": events,
    "Name": name,
    "Overrides": overrides,
    "Properties": properties,
    "SchemaVersion": schema_version,
    "SourceId": source_id,
    "Tags": tags,
    "Variants": variants
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<AppId>|<EnvironmentName>|<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.amplifyuibuilder.components
WHERE data__Identifier = '<AppId|EnvironmentName|Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>components</code> resource, the following permissions are required:

### Create
```json
amplify:GetApp,
amplifyuibuilder:CreateComponent,
amplifyuibuilder:GetComponent,
amplifyuibuilder:TagResource
```

### Read
```json
amplify:GetApp,
amplifyuibuilder:GetComponent
```

### Update
```json
amplify:GetApp,
amplifyuibuilder:GetComponent,
amplifyuibuilder:TagResource,
amplifyuibuilder:UntagResource,
amplifyuibuilder:UpdateComponent
```

### Delete
```json
amplify:GetApp,
amplifyuibuilder:DeleteComponent,
amplifyuibuilder:GetComponent,
amplifyuibuilder:UntagResource
```

### List
```json
amplify:GetApp,
amplifyuibuilder:ListComponents
```
