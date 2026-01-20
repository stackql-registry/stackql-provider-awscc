---
title: db_cluster_parameter_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - db_cluster_parameter_groups
  - neptune
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

Creates, updates, deletes or gets a <code>db_cluster_parameter_group</code> resource or lists <code>db_cluster_parameter_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>db_cluster_parameter_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::Neptune::DBClusterParameterGroup resource creates a new Amazon Neptune DB cluster parameter group</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.neptune.db_cluster_parameter_groups" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "description",
    "type": "string",
    "description": "Provides the customer-specified description for this DB cluster parameter group."
  },
  {
    "name": "family",
    "type": "string",
    "description": "Must be neptune1 for engine versions prior to 1.2.0.0, or neptune1.2 for engine version 1.2.0.0 and higher."
  },
  {
    "name": "parameters",
    "type": "object",
    "description": "An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request."
  },
  {
    "name": "name",
    "type": "string",
    "description": "Provides the name of the DB cluster parameter group."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The list of tags for the cluster parameter group.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html"><code>AWS::Neptune::DBClusterParameterGroup</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Description, Family, Parameters, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>db_cluster_parameter_group</code>.
```sql
SELECT
region,
description,
family,
parameters,
name,
tags
FROM awscc.neptune.db_cluster_parameter_groups
WHERE region = 'us-east-1' AND data__Identifier = '<Name>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>db_cluster_parameter_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.neptune.db_cluster_parameter_groups (
 Description,
 Family,
 Parameters,
 region
)
SELECT 
'{{ Description }}',
 '{{ Family }}',
 '{{ Parameters }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.neptune.db_cluster_parameter_groups (
 Description,
 Family,
 Parameters,
 Name,
 Tags,
 region
)
SELECT 
 '{{ Description }}',
 '{{ Family }}',
 '{{ Parameters }}',
 '{{ Name }}',
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
  - name: db_cluster_parameter_group
    props:
      - name: Description
        value: '{{ Description }}'
      - name: Family
        value: '{{ Family }}'
      - name: Parameters
        value: {}
      - name: Name
        value: '{{ Name }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.neptune.db_cluster_parameter_groups
WHERE data__Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>db_cluster_parameter_groups</code> resource, the following permissions are required:

### Create
```json
rds:AddTagsToResource,
rds:CreateDBClusterParameterGroup,
rds:DescribeDBClusterParameterGroups,
rds:DescribeDBClusterParameters,
rds:DescribeEngineDefaultClusterParameters,
rds:ListTagsForResource,
rds:ModifyDBClusterParameterGroup,
iam:CreateServiceLinkedRole
```

### Read
```json
rds:DescribeDBClusterParameterGroups,
rds:ListTagsForResource,
rds:DescribeDBClusterParameters
```

### Update
```json
rds:AddTagsToResource,
rds:DescribeDBClusterParameterGroups,
rds:DescribeDBClusterParameters,
rds:DescribeDBClusters,
rds:DescribeEngineDefaultClusterParameters,
rds:ListTagsForResource,
rds:ModifyDBClusterParameterGroup,
rds:RemoveTagsFromResource,
rds:ResetDBClusterParameterGroup
```

### Delete
```json
rds:DeleteDBClusterParameterGroup,
rds:ListTagsForResource,
rds:RemoveTagsFromResource
```

### List
```json
rds:DescribeDBClusterParameterGroups,
rds:ListTagsForResource
```
