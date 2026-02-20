---
title: option_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - option_groups
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

Creates, updates, deletes or gets an <code>option_group</code> resource or lists <code>option_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>option_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::RDS::OptionGroup&#96;&#96; resource creates or updates an option group, to enable and configure features that are specific to a particular DB engine.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rds.option_groups" /></td></tr>
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
    "name": "option_group_name",
    "type": "string",
    "description": "The name of the option group to be created.<br />Constraints:<br />+ Must be 1 to 255 letters, numbers, or hyphens<br />+ First character must be a letter<br />+ Can't end with a hyphen or contain two consecutive hyphens<br /><br />Example: &#96;&#96;myoptiongroup&#96;&#96;<br />If you don't specify a value for &#96;&#96;OptionGroupName&#96;&#96; property, a name is automatically created for the option group.<br />This value is stored as a lowercase string."
  },
  {
    "name": "option_group_description",
    "type": "string",
    "description": "The description of the option group."
  },
  {
    "name": "engine_name",
    "type": "string",
    "description": "Specifies the name of the engine that this option group should be associated with.<br />Valid Values: <br />+ &#96;&#96;mariadb&#96;&#96; <br />+ &#96;&#96;mysql&#96;&#96; <br />+ &#96;&#96;oracle-ee&#96;&#96; <br />+ &#96;&#96;oracle-ee-cdb&#96;&#96; <br />+ &#96;&#96;oracle-se2&#96;&#96; <br />+ &#96;&#96;oracle-se2-cdb&#96;&#96; <br />+ &#96;&#96;postgres&#96;&#96; <br />+ &#96;&#96;sqlserver-ee&#96;&#96; <br />+ &#96;&#96;sqlserver-se&#96;&#96; <br />+ &#96;&#96;sqlserver-ex&#96;&#96; <br />+ &#96;&#96;sqlserver-web&#96;&#96;"
  },
  {
    "name": "major_engine_version",
    "type": "string",
    "description": "Specifies the major version of the engine that this option group should be associated with."
  },
  {
    "name": "option_configurations",
    "type": "array",
    "description": "A list of all available options for an option group.",
    "children": [
      {
        "name": "db_security_group_memberships",
        "type": "array",
        "description": "A list of DB security groups used for this option."
      },
      {
        "name": "option_name",
        "type": "string",
        "description": "The configuration of options to include in a group."
      },
      {
        "name": "option_settings",
        "type": "array",
        "description": "The option settings to include in an option group.",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "The name of the option that has settings that you can set."
          },
          {
            "name": "value",
            "type": "string",
            "description": "The current value of the option setting."
          }
        ]
      },
      {
        "name": "option_version",
        "type": "string",
        "description": "The version for the option."
      },
      {
        "name": "port",
        "type": "integer",
        "description": "The optional port for the option."
      },
      {
        "name": "vpc_security_group_memberships",
        "type": "array",
        "description": "A list of VPC security group names used for this option."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags to assign to the option group.",
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
    "name": "option_group_name",
    "type": "string",
    "description": "The name of the option group to be created.<br />Constraints:<br />+ Must be 1 to 255 letters, numbers, or hyphens<br />+ First character must be a letter<br />+ Can't end with a hyphen or contain two consecutive hyphens<br /><br />Example: &#96;&#96;myoptiongroup&#96;&#96;<br />If you don't specify a value for &#96;&#96;OptionGroupName&#96;&#96; property, a name is automatically created for the option group.<br />This value is stored as a lowercase string."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-optiongroup.html"><code>AWS::RDS::OptionGroup</code></a>.

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
    <td><code>option_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="EngineName, MajorEngineVersion, OptionGroupDescription, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>option_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>option_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>option_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>option_groups</code></td>
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

Gets all properties from an individual <code>option_group</code>.
```sql
SELECT
region,
option_group_name,
option_group_description,
engine_name,
major_engine_version,
option_configurations,
tags
FROM awscc.rds.option_groups
WHERE region = 'us-east-1' AND Identifier = '<OptionGroupName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>option_groups</code> in a region.
```sql
SELECT
region,
option_group_name
FROM awscc.rds.option_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>option_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.rds.option_groups (
 OptionGroupDescription,
 EngineName,
 MajorEngineVersion,
 region
)
SELECT 
'{{ OptionGroupDescription }}',
 '{{ EngineName }}',
 '{{ MajorEngineVersion }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.rds.option_groups (
 OptionGroupName,
 OptionGroupDescription,
 EngineName,
 MajorEngineVersion,
 OptionConfigurations,
 Tags,
 region
)
SELECT 
 '{{ OptionGroupName }}',
 '{{ OptionGroupDescription }}',
 '{{ EngineName }}',
 '{{ MajorEngineVersion }}',
 '{{ OptionConfigurations }}',
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
  - name: option_group
    props:
      - name: OptionGroupName
        value: '{{ OptionGroupName }}'
      - name: OptionGroupDescription
        value: '{{ OptionGroupDescription }}'
      - name: EngineName
        value: '{{ EngineName }}'
      - name: MajorEngineVersion
        value: '{{ MajorEngineVersion }}'
      - name: OptionConfigurations
        value:
          - DBSecurityGroupMemberships:
              - '{{ DBSecurityGroupMemberships[0] }}'
            OptionName: '{{ OptionName }}'
            OptionSettings:
              - Name: '{{ Name }}'
                Value: '{{ Value }}'
            OptionVersion: '{{ OptionVersion }}'
            Port: '{{ Port }}'
            VpcSecurityGroupMemberships:
              - '{{ VpcSecurityGroupMemberships[0] }}'
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
UPDATE awscc.rds.option_groups
SET PatchDocument = string('{{ {
    "OptionConfigurations": option_configurations,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<OptionGroupName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.rds.option_groups
WHERE Identifier = '<OptionGroupName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>option_groups</code> resource, the following permissions are required:

### Create
```json
iam:CreateServiceLinkedRole,
rds:AddTagsToResource,
rds:CreateOptionGroup,
rds:DescribeOptionGroups,
rds:ListTagsForResource,
rds:ModifyOptionGroup,
rds:RemoveTagsFromResource
```

### Read
```json
rds:DescribeOptionGroups,
rds:ListTagsForResource
```

### Update
```json
rds:AddTagsToResource,
rds:DescribeOptionGroups,
rds:ListTagsForResource,
rds:ModifyOptionGroup,
rds:RemoveTagsFromResource
```

### Delete
```json
rds:DeleteOptionGroup,
rds:DescribeOptionGroups,
rds:ListTagsForResource,
rds:RemoveTagsFromResource
```

### List
```json
rds:DescribeOptionGroups
```
