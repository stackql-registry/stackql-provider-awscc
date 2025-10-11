---
title: db_parameter_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - db_parameter_groups
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

Creates, updates, deletes or gets a <code>db_parameter_group</code> resource or lists <code>db_parameter_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>db_parameter_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>AWS::Neptune::DBParameterGroup creates a new DB parameter group. This type can be declared in a template and referenced in the DBParameterGroupName parameter of AWS::Neptune::DBInstance</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.neptune.db_parameter_groups" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>Provides the name of the DB parameter group.</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>Provides the customer-specified description for this DB parameter group.</td></tr>
<tr><td><CopyableCode code="family" /></td><td><code>string</code></td><td>Must be `neptune1` for engine versions prior to 1.2.0.0, or `neptune1.2` for engine version `1.2.0.0` and higher.</td></tr>
<tr><td><CopyableCode code="parameters" /></td><td><code>object</code></td><td>The parameters to set for this DB parameter group.<br />The parameters are expressed as a JSON object consisting of key-value pairs.<br />Changes to dynamic parameters are applied immediately. During an update, if you have static parameters (whether they were changed or not), it triggers AWS CloudFormation to reboot the associated DB instance without failover.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>An optional array of key-value pairs to apply to this DB parameter group.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html"><code>AWS::Neptune::DBParameterGroup</code></a>.

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
    <td><CopyableCode code="Family, Description, Parameters, region" /></td>
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
Gets all <code>db_parameter_groups</code> in a region.
```sql
SELECT
region,
name,
description,
family,
parameters,
tags
FROM awscc.neptune.db_parameter_groups
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>db_parameter_group</code>.
```sql
SELECT
region,
name,
description,
family,
parameters,
tags
FROM awscc.neptune.db_parameter_groups
WHERE region = 'us-east-1' AND data__Identifier = '<Name>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>db_parameter_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.neptune.db_parameter_groups (
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
INSERT INTO awscc.neptune.db_parameter_groups (
 Name,
 Description,
 Family,
 Parameters,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ Family }}',
 '{{ Parameters }}',
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
  - name: db_parameter_group
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: Family
        value: '{{ Family }}'
      - name: Parameters
        value: {}
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
DELETE FROM awscc.neptune.db_parameter_groups
WHERE data__Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>db_parameter_groups</code> resource, the following permissions are required:

### Create
```json
rds:AddTagsToResource,
rds:CreateDBParameterGroup,
rds:DescribeDBParameterGroups,
rds:DescribeDBParameters,
rds:DescribeEngineDefaultParameters,
rds:ModifyDBParameterGroup,
rds:ListTagsForResource,
iam:CreateServiceLinkedRole
```

### Read
```json
rds:DescribeDBParameterGroups,
rds:ListTagsForResource,
rds:DescribeDBParameters,
rds:DescribeEngineDefaultParameters
```

### Update
```json
rds:AddTagsToResource,
rds:DescribeDBParameterGroups,
rds:DescribeDBParameters,
rds:DescribeEngineDefaultParameters,
rds:ListTagsForResource,
rds:ModifyDBParameterGroup,
rds:ResetDBParameterGroup,
rds:RemoveTagsFromResource,
rds:DescribeDBInstances
```

### Delete
```json
rds:DeleteDBParameterGroup,
rds:RemoveTagsFromResource
```

### List
```json
rds:DescribeDBParameterGroups,
rds:ListTagsForResource
```
