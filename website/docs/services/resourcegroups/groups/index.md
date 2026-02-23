---
title: groups
hide_title: false
hide_table_of_contents: false
keywords:
  - groups
  - resourcegroups
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

Creates, updates, deletes or gets a <code>group</code> resource or lists <code>groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Schema for ResourceGroups::Group</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.resourcegroups.groups" /></td></tr>
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
    "description": "The name of the resource group"
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the resource group"
  },
  {
    "name": "resource_query",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "query",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "resource_type_filters",
            "type": "array",
            "description": ""
          },
          {
            "name": "stack_identifier",
            "type": "string",
            "description": ""
          },
          {
            "name": "tag_filters",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "key",
                "type": "string",
                "description": ""
              },
              {
                "name": "values",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
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
    "name": "arn",
    "type": "string",
    "description": "The Resource Group ARN."
  },
  {
    "name": "configuration",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "parameters",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": ""
          },
          {
            "name": "values",
            "type": "array",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "resources",
    "type": "array",
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
    "name": "name",
    "type": "string",
    "description": "The name of the resource group"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html"><code>AWS::ResourceGroups::Group</code></a>.

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
    <td><code>groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>groups</code></td>
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

Gets all properties from an individual <code>group</code>.
```sql
SELECT
region,
name,
description,
resource_query,
tags,
arn,
configuration,
resources
FROM awscc.resourcegroups.groups
WHERE region = 'us-east-1' AND Identifier = '{{ name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>groups</code> in a region.
```sql
SELECT
region,
name
FROM awscc.resourcegroups.groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.resourcegroups.groups (
 Name,
 region
)
SELECT
'{{ name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.resourcegroups.groups (
 Name,
 Description,
 ResourceQuery,
 Tags,
 Configuration,
 Resources,
 region
)
SELECT
 '{{ name }}',
 '{{ description }}',
 '{{ resource_query }}',
 '{{ tags }}',
 '{{ configuration }}',
 '{{ resources }}',
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
  - name: group
    props:
      - name: name
        value: '{{ name }}'
      - name: description
        value: '{{ description }}'
      - name: resource_query
        value:
          type: '{{ type }}'
          query:
            resource_type_filters:
              - '{{ resource_type_filters[0] }}'
            stack_identifier: '{{ stack_identifier }}'
            tag_filters:
              - key: '{{ key }}'
                values:
                  - '{{ values[0] }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: configuration
        value:
          - type: '{{ type }}'
            parameters:
              - name: '{{ name }}'
                values:
                  - '{{ values[0] }}'
      - name: resources
        value:
          - '{{ resources[0] }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.resourcegroups.groups
SET PatchDocument = string('{{ {
    "Description": description,
    "ResourceQuery": resource_query,
    "Tags": tags,
    "Configuration": configuration,
    "Resources": resources
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.resourcegroups.groups
WHERE Identifier = '{{ name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>groups</code> resource, the following permissions are required:

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
resource-groups:CreateGroup,
resource-groups:Tag,
cloudformation:DescribeStacks,
cloudformation:ListStackResources,
resource-groups:ListGroupResources,
resource-groups:GroupResources
```

</TabItem>
<TabItem value="read">

```json
resource-groups:GetGroup,
resource-groups:GetGroupQuery,
resource-groups:GetTags,
resource-groups:GetGroupConfiguration,
resource-groups:ListGroupResources
```

</TabItem>
<TabItem value="update">

```json
resource-groups:UpdateGroup,
resource-groups:GetTags,
resource-groups:GetGroupQuery,
resource-groups:UpdateGroupQuery,
resource-groups:Tag,
resource-groups:Untag,
resource-groups:PutGroupConfiguration,
resource-groups:GetGroupConfiguration,
resource-groups:ListGroupResources,
resource-groups:GroupResources,
resource-groups:UnGroupResources
```

</TabItem>
<TabItem value="delete">

```json
resource-groups:DeleteGroup,
resource-groups:UnGroupResources
```

</TabItem>
<TabItem value="list">

```json
resource-groups:ListGroups
```

</TabItem>
</Tabs>