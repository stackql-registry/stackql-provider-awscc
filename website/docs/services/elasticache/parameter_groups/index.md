---
title: parameter_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - parameter_groups
  - elasticache
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

Creates, updates, deletes or gets a <code>parameter_group</code> resource or lists <code>parameter_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>parameter_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::ElastiCache::ParameterGroup</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.elasticache.parameter_groups" /></td></tr>
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
    "name": "description",
    "type": "string",
    "description": "The description for this cache parameter group."
  },
  {
    "name": "properties",
    "type": "object",
    "description": "A comma-delimited list of parameter name/value pairs. For more information see ModifyCacheParameterGroup in the Amazon ElastiCache API Reference Guide."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags are composed of a Key/Value pair. You can use tags to categorize and track each parameter group. The tag value null is permitted.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with 'aws:'. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "cache_parameter_group_name",
    "type": "string",
    "description": "The name of the Cache Parameter Group."
  },
  {
    "name": "cache_parameter_group_family",
    "type": "string",
    "description": "The name of the cache parameter group family that this cache parameter group is compatible with."
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
    "name": "cache_parameter_group_name",
    "type": "string",
    "description": "The name of the Cache Parameter Group."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-parametergroup.html"><code>AWS::ElastiCache::ParameterGroup</code></a>.

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
    <td><code>parameter_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Description, CacheParameterGroupFamily, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>parameter_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>parameter_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>parameter_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>parameter_groups</code></td>
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

Gets all properties from an individual <code>parameter_group</code>.
```sql
SELECT
region,
description,
properties,
tags,
cache_parameter_group_name,
cache_parameter_group_family
FROM awscc.elasticache.parameter_groups
WHERE region = 'us-east-1' AND Identifier = '<CacheParameterGroupName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>parameter_groups</code> in a region.
```sql
SELECT
region,
cache_parameter_group_name
FROM awscc.elasticache.parameter_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>parameter_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.elasticache.parameter_groups (
 Description,
 CacheParameterGroupFamily,
 region
)
SELECT 
'{{ Description }}',
 '{{ CacheParameterGroupFamily }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.elasticache.parameter_groups (
 Description,
 Properties,
 Tags,
 CacheParameterGroupFamily,
 region
)
SELECT 
 '{{ Description }}',
 '{{ Properties }}',
 '{{ Tags }}',
 '{{ CacheParameterGroupFamily }}',
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
  - name: parameter_group
    props:
      - name: Description
        value: '{{ Description }}'
      - name: Properties
        value: {}
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: CacheParameterGroupFamily
        value: '{{ CacheParameterGroupFamily }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>parameter_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.elasticache.parameter_groups
SET PatchDocument = string('{{ {
    "Description": description,
    "Properties": properties,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<CacheParameterGroupName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.elasticache.parameter_groups
WHERE Identifier = '<CacheParameterGroupName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>parameter_groups</code> resource, the following permissions are required:

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
elasticache:CreateCacheParameterGroup,
elasticache:DescribeCacheParameterGroups,
elasticache:AddTagsToResource,
elasticache:ModifyCacheParameterGroup,
iam:CreateServiceLinkedRole,
iam:PutRolePolicy
```

</TabItem>
<TabItem value="read">

```json
elasticache:DescribeCacheParameterGroups,
elasticache:DescribeCacheParameters,
elasticache:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
elasticache:ModifyCacheParameterGroup,
elasticache:DescribeCacheParameterGroups,
elasticache:DescribeCacheParameters,
elasticache:DescribeEngineDefaultParameters,
elasticache:AddTagsToResource,
elasticache:RemoveTagsFromResource
```

</TabItem>
<TabItem value="delete">

```json
elasticache:DescribeCacheParameterGroups,
elasticache:DeleteCacheParameterGroup
```

</TabItem>
<TabItem value="list">

```json
elasticache:DescribeCacheParameterGroups
```

</TabItem>
</Tabs>