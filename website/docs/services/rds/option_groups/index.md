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

import CodeBlock from '@theme/CodeBlock';
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
<tr><td><b>Description</b></td><td>The <code>AWS::RDS::OptionGroup</code> resource creates or updates an option group, to enable and configure features that are specific to a particular DB engine.</td></tr>
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
    "description": "<details><summary>The name of the option group to be created.</summary>Constraints:<br />+  Must be 1 to 255 letters, numbers, or hyphens<br />+  First character must be a letter<br />+  Can't end with a hyphen or contain two consecutive hyphens<br />Example: <code>myoptiongroup</code><br />If you don't specify a value for <code>OptionGroupName</code> property, a name is automatically created for the option group.<br />This value is stored as a lowercase string.</details>"
  },
  {
    "name": "option_group_description",
    "type": "string",
    "description": "The description of the option group."
  },
  {
    "name": "engine_name",
    "type": "string",
    "description": "<details><summary>Specifies the name of the engine that this option group should be associated with.</summary>Valid Values:<br />+   <code>mariadb</code><br />+   <code>mysql</code><br />+   <code>oracle-ee</code><br />+   <code>oracle-ee-cdb</code><br />+   <code>oracle-se2</code><br />+   <code>oracle-se2-cdb</code><br />+   <code>postgres</code><br />+   <code>sqlserver-ee</code><br />+   <code>sqlserver-se</code><br />+   <code>sqlserver-ex</code><br />+   <code>sqlserver-web</code></details>"
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
        "description": "A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with <code>aws:</code> or <code>rds:</code>. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: \"^([\\\\p&#123;L&#125;\\\\p&#123;Z&#125;\\\\p&#123;N&#125;_.:/=+\\\\-@]*)$\")."
      },
      {
        "name": "value",
        "type": "string",
        "description": "A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with <code>aws:</code> or <code>rds:</code>. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: \"^([\\\\p&#123;L&#125;\\\\p&#123;Z&#125;\\\\p&#123;N&#125;_.:/=+\\\\-@]*)$\")."
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
    "description": "<details><summary>The name of the option group to be created.</summary>Constraints:<br />+  Must be 1 to 255 letters, numbers, or hyphens<br />+  First character must be a letter<br />+  Can't end with a hyphen or contain two consecutive hyphens<br />Example: <code>myoptiongroup</code><br />If you don't specify a value for <code>OptionGroupName</code> property, a name is automatically created for the option group.<br />This value is stored as a lowercase string.</details>"
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ option_group_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>option_groups</code> in a region.
```sql
SELECT
  region,
  option_group_name
FROM awscc.rds.option_groups_list_only
WHERE
  region = '{{ region }}';
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
  '{{ option_group_description }}',
  '{{ engine_name }}',
  '{{ major_engine_version }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
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
  '{{ option_group_name }}',
  '{{ option_group_description }}',
  '{{ engine_name }}',
  '{{ major_engine_version }}',
  '{{ option_configurations }}',
  '{{ tags }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`version: 1
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
      - name: option_group_name
        value: '{{ option_group_name }}'
      - name: option_group_description
        value: '{{ option_group_description }}'
      - name: engine_name
        value: '{{ engine_name }}'
      - name: major_engine_version
        value: '{{ major_engine_version }}'
      - name: option_configurations
        value:
          - db_security_group_memberships:
              - '{{ db_security_group_memberships[0] }}'
            option_name: '{{ option_name }}'
            option_settings:
              - name: '{{ name }}'
                value: '{{ value }}'
            option_version: '{{ option_version }}'
            port: '{{ port }}'
            vpc_security_group_memberships:
              - '{{ vpc_security_group_memberships[0] }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>option_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.rds.option_groups
SET PatchDocument = string('{{ {
    "OptionConfigurations": option_configurations,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ option_group_name }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.rds.option_groups
WHERE
  Identifier = '{{ option_group_name }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>option_groups</code> resource, the following permissions are required:

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
iam:CreateServiceLinkedRole,
rds:AddTagsToResource,
rds:CreateOptionGroup,
rds:DescribeOptionGroups,
rds:ListTagsForResource,
rds:ModifyOptionGroup,
rds:RemoveTagsFromResource
```

</TabItem>
<TabItem value="read">

```json
rds:DescribeOptionGroups,
rds:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
rds:AddTagsToResource,
rds:DescribeOptionGroups,
rds:ListTagsForResource,
rds:ModifyOptionGroup,
rds:RemoveTagsFromResource
```

</TabItem>
<TabItem value="delete">

```json
rds:DeleteOptionGroup,
rds:DescribeOptionGroups,
rds:ListTagsForResource,
rds:RemoveTagsFromResource
```

</TabItem>
<TabItem value="list">

```json
rds:DescribeOptionGroups
```

</TabItem>
</Tabs>