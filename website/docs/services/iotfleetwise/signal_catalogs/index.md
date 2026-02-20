---
title: signal_catalogs
hide_title: false
hide_table_of_contents: false
keywords:
  - signal_catalogs
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

Creates, updates, deletes or gets a <code>signal_catalog</code> resource or lists <code>signal_catalogs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>signal_catalogs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::IoTFleetWise::SignalCatalog Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotfleetwise.signal_catalogs" /></td></tr>
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
    "name": "node_counts",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "total_nodes",
        "type": "number",
        "description": ""
      },
      {
        "name": "total_branches",
        "type": "number",
        "description": ""
      },
      {
        "name": "total_sensors",
        "type": "number",
        "description": ""
      },
      {
        "name": "total_attributes",
        "type": "number",
        "description": ""
      },
      {
        "name": "total_actuators",
        "type": "number",
        "description": ""
      }
    ]
  },
  {
    "name": "nodes",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-signalcatalog.html"><code>AWS::IoTFleetWise::SignalCatalog</code></a>.

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
    <td><code>signal_catalogs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>signal_catalogs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>signal_catalogs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>signal_catalogs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>signal_catalogs</code></td>
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

Gets all properties from an individual <code>signal_catalog</code>.
```sql
SELECT
region,
arn,
creation_time,
description,
last_modification_time,
name,
node_counts,
nodes,
tags
FROM awscc.iotfleetwise.signal_catalogs
WHERE region = 'us-east-1' AND Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>signal_catalogs</code> in a region.
```sql
SELECT
region,
name
FROM awscc.iotfleetwise.signal_catalogs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>signal_catalog</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotfleetwise.signal_catalogs (
 Description,
 Name,
 NodeCounts,
 Nodes,
 Tags,
 region
)
SELECT 
'{{ Description }}',
 '{{ Name }}',
 '{{ NodeCounts }}',
 '{{ Nodes }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotfleetwise.signal_catalogs (
 Description,
 Name,
 NodeCounts,
 Nodes,
 Tags,
 region
)
SELECT 
 '{{ Description }}',
 '{{ Name }}',
 '{{ NodeCounts }}',
 '{{ Nodes }}',
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
  - name: signal_catalog
    props:
      - name: Description
        value: '{{ Description }}'
      - name: Name
        value: '{{ Name }}'
      - name: NodeCounts
        value:
          TotalNodes: null
          TotalBranches: null
          TotalSensors: null
          TotalAttributes: null
          TotalActuators: null
      - name: Nodes
        value:
          - null
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>signal_catalog</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iotfleetwise.signal_catalogs
SET PatchDocument = string('{{ {
    "Description": description,
    "Nodes": nodes,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotfleetwise.signal_catalogs
WHERE Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>signal_catalogs</code> resource, the following permissions are required:

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
iotfleetwise:GetSignalCatalog,
iotfleetwise:CreateSignalCatalog,
iotfleetwise:ListSignalCatalogNodes,
iotfleetwise:ListTagsForResource,
iotfleetwise:TagResource
```

</TabItem>
<TabItem value="read">

```json
iotfleetwise:GetSignalCatalog,
iotfleetwise:ListSignalCatalogNodes,
iotfleetwise:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
iotfleetwise:GetSignalCatalog,
iotfleetwise:UpdateSignalCatalog,
iotfleetwise:ListSignalCatalogNodes,
iotfleetwise:ListTagsForResource,
iotfleetwise:TagResource,
iotfleetwise:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
iotfleetwise:GetSignalCatalog,
iotfleetwise:DeleteSignalCatalog
```

</TabItem>
<TabItem value="list">

```json
iotfleetwise:ListSignalCatalogs
```

</TabItem>
</Tabs>