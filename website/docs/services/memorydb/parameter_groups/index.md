---
title: parameter_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - parameter_groups
  - memorydb
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
<tr><td><b>Description</b></td><td>The AWS::MemoryDB::ParameterGroup resource creates an Amazon MemoryDB ParameterGroup.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.memorydb.parameter_groups" /></td></tr>
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
    "name": "parameter_group_name",
    "type": "string",
    "description": "The name of the parameter group."
  },
  {
    "name": "family",
    "type": "string",
    "description": "The name of the parameter group family that this parameter group is compatible with."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description of the parameter group."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this parameter group.",
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
    "name": "parameters",
    "type": "object",
    "description": "An map of parameter names and values for the parameter update. You must supply at least one parameter name and value; subsequent arguments are optional."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the parameter group."
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
    "name": "parameter_group_name",
    "type": "string",
    "description": "The name of the parameter group."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-parametergroup.html"><code>AWS::MemoryDB::ParameterGroup</code></a>.

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
    <td><CopyableCode code="ParameterGroupName, Family, region" /></td>
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
parameter_group_name,
family,
description,
tags,
parameters,
arn
FROM awscc.memorydb.parameter_groups
WHERE region = 'us-east-1' AND Identifier = '<ParameterGroupName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>parameter_groups</code> in a region.
```sql
SELECT
region,
parameter_group_name
FROM awscc.memorydb.parameter_groups_list_only
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
INSERT INTO awscc.memorydb.parameter_groups (
 ParameterGroupName,
 Family,
 region
)
SELECT 
'{{ ParameterGroupName }}',
 '{{ Family }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.memorydb.parameter_groups (
 ParameterGroupName,
 Family,
 Description,
 Tags,
 Parameters,
 region
)
SELECT 
 '{{ ParameterGroupName }}',
 '{{ Family }}',
 '{{ Description }}',
 '{{ Tags }}',
 '{{ Parameters }}',
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
      - name: ParameterGroupName
        value: '{{ ParameterGroupName }}'
      - name: Family
        value: '{{ Family }}'
      - name: Description
        value: '{{ Description }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Parameters
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.memorydb.parameter_groups
SET PatchDocument = string('{{ {
    "Tags": tags,
    "Parameters": parameters
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ParameterGroupName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.memorydb.parameter_groups
WHERE Identifier = '<ParameterGroupName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>parameter_groups</code> resource, the following permissions are required:

### Create
```json
memorydb:CreateParameterGroup,
memorydb:DescribeParameterGroups,
memorydb:TagResource,
memorydb:ListTags,
iam:CreateServiceLinkedRole
```

### Read
```json
memorydb:DescribeParameterGroups,
memorydb:ListTags
```

### Update
```json
memorydb:UpdateParameterGroup,
memorydb:DescribeParameterGroups,
memorydb:DescribeParameters,
memorydb:DescribeClusters,
memorydb:ListTags,
memorydb:TagResource,
memorydb:UntagResource
```

### Delete
```json
memorydb:DeleteParameterGroup
```

### List
```json
memorydb:DescribeParameterGroups
```
