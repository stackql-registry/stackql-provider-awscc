---
title: sdi_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - sdi_sources
  - medialive
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

Creates, updates, deletes or gets a <code>sdi_source</code> resource or lists <code>sdi_sources</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>sdi_sources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::MediaLive::SdiSource Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.medialive.sdi_sources" /></td></tr>
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
    "description": "The unique arn of the SdiSource."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The unique identifier of the SdiSource."
  },
  {
    "name": "mode",
    "type": "string",
    "description": "The current state of the SdiSource."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the SdiSource."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The current state of the SdiSource."
  },
  {
    "name": "type",
    "type": "string",
    "description": "The interface mode of the SdiSource."
  },
  {
    "name": "inputs",
    "type": "array",
    "description": "The list of inputs currently using this SDI source."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A collection of key-value pairs.",
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
    "name": "id",
    "type": "string",
    "description": "The unique identifier of the SdiSource."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-sdisource.html"><code>AWS::MediaLive::SdiSource</code></a>.

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
    <td><code>sdi_sources</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, Type, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>sdi_sources</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>sdi_sources</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>sdi_sources_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>sdi_sources</code></td>
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

Gets all properties from an individual <code>sdi_source</code>.
```sql
SELECT
region,
arn,
id,
mode,
name,
state,
type,
inputs,
tags
FROM awscc.medialive.sdi_sources
WHERE region = 'us-east-1' AND Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>sdi_sources</code> in a region.
```sql
SELECT
region,
id
FROM awscc.medialive.sdi_sources_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>sdi_source</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.medialive.sdi_sources (
 Name,
 Type,
 region
)
SELECT
'{{ name }}',
 '{{ type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.medialive.sdi_sources (
 Mode,
 Name,
 Type,
 Tags,
 region
)
SELECT
 '{{ mode }}',
 '{{ name }}',
 '{{ type }}',
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
  - name: sdi_source
    props:
      - name: mode
        value: '{{ mode }}'
      - name: name
        value: '{{ name }}'
      - name: type
        value: '{{ type }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>sdi_source</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.medialive.sdi_sources
SET PatchDocument = string('{{ {
    "Mode": mode,
    "Name": name,
    "Type": type,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.medialive.sdi_sources
WHERE Identifier = '{{ id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>sdi_sources</code> resource, the following permissions are required:

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
medialive:CreateSdiSource,
medialive:CreateTags,
medialive:DescribeSdiSource,
medialive:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
medialive:DescribeSdiSource,
medialive:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
medialive:UpdateSdiSource,
medialive:DescribeSdiSource,
medialive:CreateTags,
medialive:DeleteTags,
medialive:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
medialive:DeleteSdiSource,
medialive:DescribeSdiSource
```

</TabItem>
<TabItem value="list">

```json
medialive:ListSdiSources
```

</TabItem>
</Tabs>