---
title: registries
hide_title: false
hide_table_of_contents: false
keywords:
  - registries
  - eventschemas
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

Creates, updates, deletes or gets a <code>registry</code> resource or lists <code>registries</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>registries</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EventSchemas::Registry</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.eventschemas.registries" /></td></tr>
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
    "name": "registry_name",
    "type": "string",
    "description": "The name of the schema registry."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description of the registry to be created."
  },
  {
    "name": "registry_arn",
    "type": "string",
    "description": "The ARN of the registry."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags associated with the resource.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
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
    "name": "registry_arn",
    "type": "string",
    "description": "The ARN of the registry."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registry.html"><code>AWS::EventSchemas::Registry</code></a>.

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
    <td><code>registries</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>registries</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>registries</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>registries_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>registries</code></td>
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

Gets all properties from an individual <code>registry</code>.
```sql
SELECT
region,
registry_name,
description,
registry_arn,
tags
FROM awscc.eventschemas.registries
WHERE region = 'us-east-1' AND Identifier = '<RegistryArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>registries</code> in a region.
```sql
SELECT
region,
registry_arn
FROM awscc.eventschemas.registries_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>registry</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.eventschemas.registries (
 RegistryName,
 Description,
 Tags,
 region
)
SELECT 
'{{ RegistryName }}',
 '{{ Description }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.eventschemas.registries (
 RegistryName,
 Description,
 Tags,
 region
)
SELECT 
 '{{ RegistryName }}',
 '{{ Description }}',
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
  - name: registry
    props:
      - name: RegistryName
        value: '{{ RegistryName }}'
      - name: Description
        value: '{{ Description }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>registry</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.eventschemas.registries
SET PatchDocument = string('{{ {
    "Description": description,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<RegistryArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.eventschemas.registries
WHERE Identifier = '<RegistryArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>registries</code> resource, the following permissions are required:

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
schemas:DescribeRegistry,
schemas:CreateRegistry,
schemas:TagResource
```

</TabItem>
<TabItem value="read">

```json
schemas:DescribeRegistry
```

</TabItem>
<TabItem value="update">

```json
schemas:DescribeRegistry,
schemas:UpdateRegistry,
schemas:TagResource,
schemas:UntagResource,
schemas:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
schemas:DescribeRegistry,
schemas:DeleteRegistry
```

</TabItem>
<TabItem value="list">

```json
schemas:ListRegistries
```

</TabItem>
</Tabs>