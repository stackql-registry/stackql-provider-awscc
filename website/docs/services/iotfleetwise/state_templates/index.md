---
title: state_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - state_templates
  - iotfleetwise
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

Creates, updates, deletes or gets a <code>state_template</code> resource or lists <code>state_templates</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>state_templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::IoTFleetWise::StateTemplate Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotfleetwise.state_templates" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "last_modification_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "signal_catalog_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "state_template_properties",
    "type": "array",
    "description": ""
  },
  {
    "name": "data_extra_dimensions",
    "type": "array",
    "description": ""
  },
  {
    "name": "metadata_extra_dimensions",
    "type": "array",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-statetemplate.html"><code>AWS::IoTFleetWise::StateTemplate</code></a>.

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
    <td><code>state_templates</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, SignalCatalogArn, StateTemplateProperties, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>state_templates</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>state_templates</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>state_templates_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>state_templates</code></td>
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

Gets all properties from an individual <code>state_template</code>.
```sql
SELECT
region,
arn,
creation_time,
description,
last_modification_time,
name,
id,
signal_catalog_arn,
state_template_properties,
data_extra_dimensions,
metadata_extra_dimensions,
tags
FROM awscc.iotfleetwise.state_templates
WHERE region = 'us-east-1' AND Identifier = '{{ name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>state_templates</code> in a region.
```sql
SELECT
region,
name
FROM awscc.iotfleetwise.state_templates_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>state_template</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotfleetwise.state_templates (
 Name,
 SignalCatalogArn,
 StateTemplateProperties,
 region
)
SELECT
'{{ name }}',
 '{{ signal_catalog_arn }}',
 '{{ state_template_properties }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotfleetwise.state_templates (
 Description,
 Name,
 SignalCatalogArn,
 StateTemplateProperties,
 DataExtraDimensions,
 MetadataExtraDimensions,
 Tags,
 region
)
SELECT
 '{{ description }}',
 '{{ name }}',
 '{{ signal_catalog_arn }}',
 '{{ state_template_properties }}',
 '{{ data_extra_dimensions }}',
 '{{ metadata_extra_dimensions }}',
 '{{ tags }}',
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
  - name: state_template
    props:
      - name: description
        value: '{{ description }}'
      - name: name
        value: '{{ name }}'
      - name: signal_catalog_arn
        value: '{{ signal_catalog_arn }}'
      - name: state_template_properties
        value:
          - '{{ state_template_properties[0] }}'
      - name: data_extra_dimensions
        value:
          - '{{ data_extra_dimensions[0] }}'
      - name: metadata_extra_dimensions
        value:
          - '{{ metadata_extra_dimensions[0] }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>state_template</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iotfleetwise.state_templates
SET PatchDocument = string('{{ {
    "Description": description,
    "StateTemplateProperties": state_template_properties,
    "DataExtraDimensions": data_extra_dimensions,
    "MetadataExtraDimensions": metadata_extra_dimensions,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotfleetwise.state_templates
WHERE Identifier = '{{ name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>state_templates</code> resource, the following permissions are required:

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
iotfleetwise:GetStateTemplate,
iotfleetwise:CreateStateTemplate,
iotfleetwise:ListTagsForResource,
iotfleetwise:TagResource
```

</TabItem>
<TabItem value="read">

```json
iotfleetwise:GetStateTemplate,
iotfleetwise:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
iotfleetwise:UpdateStateTemplate,
iotfleetwise:GetStateTemplate,
iotfleetwise:ListTagsForResource,
iotfleetwise:TagResource,
iotfleetwise:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
iotfleetwise:DeleteStateTemplate,
iotfleetwise:GetStateTemplate
```

</TabItem>
<TabItem value="list">

```json
iotfleetwise:ListStateTemplates
```

</TabItem>
</Tabs>