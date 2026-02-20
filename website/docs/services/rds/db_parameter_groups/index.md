---
title: db_parameter_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - db_parameter_groups
  - rds
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

Creates, updates, deletes or gets a <code>db_parameter_group</code> resource or lists <code>db_parameter_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>db_parameter_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::RDS::DBParameterGroup&#96;&#96; resource creates a custom parameter group for an RDS database family.<br />This type can be declared in a template and referenced in the &#96;&#96;DBParameterGroupName&#96;&#96; property of an &#96;&#96;AWS::RDS::DBInstance&#96;&#96; resource.<br />For information about configuring parameters for Amazon RDS DB instances, see &#91;Working with parameter groups&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;WorkingWithParamGroups.html) in the &#42;Amazon RDS User Guide&#42;.<br />For information about configuring parameters for Amazon Aurora DB instances, see &#91;Working with parameter groups&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER&#95;WorkingWithParamGroups.html) in the &#42;Amazon Aurora User Guide&#42;.<br />Applying a parameter group to a DB instance may require the DB instance to reboot, resulting in a database outage for the duration of the reboot.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rds.db_parameter_groups" /></td></tr>
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
    "name": "db_parameter_group_name",
    "type": "string",
    "description": "The name of the DB parameter group.<br />Constraints:<br />+ Must be 1 to 255 letters, numbers, or hyphens.<br />+ First character must be a letter<br />+ Can't end with a hyphen or contain two consecutive hyphens<br /><br />If you don't specify a value for &#96;&#96;DBParameterGroupName&#96;&#96; property, a name is automatically created for the DB parameter group.<br />This value is stored as a lowercase string."
  },
  {
    "name": "description",
    "type": "string",
    "description": "Provides the customer-specified description for this DB parameter group."
  },
  {
    "name": "family",
    "type": "string",
    "description": "The DB parameter group family name. A DB parameter group can be associated with one and only one DB parameter group family, and can be applied only to a DB instance running a database engine and engine version compatible with that DB parameter group family.<br />To list all of the available parameter group families for a DB engine, use the following command:<br />&#96;&#96;aws rds describe-db-engine-versions --query \"DBEngineVersions&#91;&#93;.DBParameterGroupFamily\" --engine &lt;engine&gt;&#96;&#96; <br />For example, to list all of the available parameter group families for the MySQL DB engine, use the following command:<br />&#96;&#96;aws rds describe-db-engine-versions --query \"DBEngineVersions&#91;&#93;.DBParameterGroupFamily\" --engine mysql&#96;&#96; <br />The output contains duplicates.<br />The following are the valid DB engine values:<br />+ &#96;&#96;aurora-mysql&#96;&#96; <br />+ &#96;&#96;aurora-postgresql&#96;&#96; <br />+ &#96;&#96;db2-ae&#96;&#96; <br />+ &#96;&#96;db2-se&#96;&#96; <br />+ &#96;&#96;mysql&#96;&#96; <br />+ &#96;&#96;oracle-ee&#96;&#96; <br />+ &#96;&#96;oracle-ee-cdb&#96;&#96; <br />+ &#96;&#96;oracle-se2&#96;&#96; <br />+ &#96;&#96;oracle-se2-cdb&#96;&#96; <br />+ &#96;&#96;postgres&#96;&#96; <br />+ &#96;&#96;sqlserver-ee&#96;&#96; <br />+ &#96;&#96;sqlserver-se&#96;&#96; <br />+ &#96;&#96;sqlserver-ex&#96;&#96; <br />+ &#96;&#96;sqlserver-web&#96;&#96;"
  },
  {
    "name": "parameters",
    "type": "object",
    "description": "A mapping of parameter names and values for the parameter update. You must specify at least one parameter name and value.<br />For more information about parameter groups, see &#91;Working with parameter groups&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;WorkingWithParamGroups.html) in the &#42;Amazon RDS User Guide&#42;, or &#91;Working with parameter groups&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER&#95;WorkingWithParamGroups.html) in the &#42;Amazon Aurora User Guide&#42;.<br />AWS CloudFormation doesn't support specifying an apply method for each individual parameter. The default apply method for each parameter is used."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags to assign to the DB parameter group.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with &#96;&#96;aws:&#96;&#96; or &#96;&#96;rds:&#96;&#96;. The string can only contain only the set of Unicode letters, digits, white-space, '&#95;', '.', ':', '/', '=', '+', '-', '@' (Java regex: \"^(&#91;\\\\p&#123;L&#125;\\\\p&#123;Z&#125;\\\\p&#123;N&#125;&#95;.:/=+\\\\-@&#93;&#42;)$\")."
      },
      {
        "name": "value",
        "type": "string",
        "description": "A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with &#96;&#96;aws:&#96;&#96; or &#96;&#96;rds:&#96;&#96;. The string can only contain only the set of Unicode letters, digits, white-space, '&#95;', '.', ':', '/', '=', '+', '-', '@' (Java regex: \"^(&#91;\\\\p&#123;L&#125;\\\\p&#123;Z&#125;\\\\p&#123;N&#125;&#95;.:/=+\\\\-@&#93;&#42;)$\")."
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
    "name": "db_parameter_group_name",
    "type": "string",
    "description": "The name of the DB parameter group.<br />Constraints:<br />+ Must be 1 to 255 letters, numbers, or hyphens.<br />+ First character must be a letter<br />+ Can't end with a hyphen or contain two consecutive hyphens<br /><br />If you don't specify a value for &#96;&#96;DBParameterGroupName&#96;&#96; property, a name is automatically created for the DB parameter group.<br />This value is stored as a lowercase string."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbparametergroup.html"><code>AWS::RDS::DBParameterGroup</code></a>.

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
    <td><code>db_parameter_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Family, Description, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>db_parameter_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>db_parameter_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>db_parameter_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>db_parameter_groups</code></td>
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

Gets all properties from an individual <code>db_parameter_group</code>.
```sql
SELECT
region,
db_parameter_group_name,
description,
family,
parameters,
tags
FROM awscc.rds.db_parameter_groups
WHERE region = 'us-east-1' AND data__Identifier = '<DBParameterGroupName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>db_parameter_groups</code> in a region.
```sql
SELECT
region,
db_parameter_group_name
FROM awscc.rds.db_parameter_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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
INSERT INTO awscc.rds.db_parameter_groups (
 Description,
 Family,
 region
)
SELECT 
'{{ Description }}',
 '{{ Family }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.rds.db_parameter_groups (
 DBParameterGroupName,
 Description,
 Family,
 Parameters,
 Tags,
 region
)
SELECT 
 '{{ DBParameterGroupName }}',
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
      - name: DBParameterGroupName
        value: '{{ DBParameterGroupName }}'
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

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.rds.db_parameter_groups
SET data__PatchDocument = string('{{ {
    "Parameters": parameters,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<DBParameterGroupName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.rds.db_parameter_groups
WHERE data__Identifier = '<DBParameterGroupName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>db_parameter_groups</code> resource, the following permissions are required:

### Create
```json
iam:CreateServiceLinkedRole,
rds:AddTagsToResource,
rds:CreateDBParameterGroup,
rds:DescribeDBParameterGroups,
rds:DescribeDBParameters,
rds:DescribeEngineDefaultParameters,
rds:ListTagsForResource,
rds:ModifyDBParameterGroup,
rds:RemoveTagsFromResource
```

### Read
```json
rds:DescribeDBParameterGroups,
rds:DescribeDBParameters,
rds:ListTagsForResource
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
rds:RemoveTagsFromResource
```

### Delete
```json
rds:DeleteDBParameterGroup
```

### List
```json
rds:DescribeDBParameterGroups
```
