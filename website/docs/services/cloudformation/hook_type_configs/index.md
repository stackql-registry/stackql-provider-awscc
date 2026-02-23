---
title: hook_type_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - hook_type_configs
  - cloudformation
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

Creates, updates, deletes or gets a <code>hook_type_config</code> resource or lists <code>hook_type_configs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>hook_type_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Specifies the configuration data for a registered hook in CloudFormation Registry.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudformation.hook_type_configs" /></td></tr>
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
    "name": "type_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the type without version number."
  },
  {
    "name": "type_name",
    "type": "string",
    "description": "The name of the type being registered.<br />We recommend that type names adhere to the following pattern: company&#95;or&#95;organization::service::type."
  },
  {
    "name": "configuration_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the configuration data, in this account and region."
  },
  {
    "name": "configuration",
    "type": "string",
    "description": "The configuration data for the extension, in this account and region."
  },
  {
    "name": "configuration_alias",
    "type": "string",
    "description": "An alias by which to refer to this extension configuration data."
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
    "name": "configuration_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the configuration data, in this account and region."
  },
  {
    "name": "configuration",
    "type": "string",
    "description": "The configuration data for the extension, in this account and region."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hooktypeconfig.html"><code>AWS::CloudFormation::HookTypeConfig</code></a>.

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
    <td><code>hook_type_configs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>hook_type_configs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>hook_type_configs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>hook_type_configs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>hook_type_configs</code></td>
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

Gets all properties from an individual <code>hook_type_config</code>.
```sql
SELECT
region,
type_arn,
type_name,
configuration_arn,
configuration,
configuration_alias
FROM awscc.cloudformation.hook_type_configs
WHERE region = 'us-east-1' AND Identifier = '{{ configuration_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>hook_type_configs</code> in a region.
```sql
SELECT
region,
configuration_arn
FROM awscc.cloudformation.hook_type_configs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>hook_type_config</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudformation.hook_type_configs (
 TypeArn,
 TypeName,
 Configuration,
 ConfigurationAlias,
 region
)
SELECT
'{{ type_arn }}',
 '{{ type_name }}',
 '{{ configuration }}',
 '{{ configuration_alias }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudformation.hook_type_configs (
 TypeArn,
 TypeName,
 Configuration,
 ConfigurationAlias,
 region
)
SELECT
 '{{ type_arn }}',
 '{{ type_name }}',
 '{{ configuration }}',
 '{{ configuration_alias }}',
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
  - name: hook_type_config
    props:
      - name: type_arn
        value: '{{ type_arn }}'
      - name: type_name
        value: '{{ type_name }}'
      - name: configuration
        value: '{{ configuration }}'
      - name: configuration_alias
        value: '{{ configuration_alias }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>hook_type_config</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cloudformation.hook_type_configs
SET PatchDocument = string('{{ {
    "TypeArn": type_arn,
    "TypeName": type_name,
    "Configuration": configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ configuration_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudformation.hook_type_configs
WHERE Identifier = '{{ configuration_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>hook_type_configs</code> resource, the following permissions are required:

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
cloudformation:SetTypeConfiguration
```

</TabItem>
<TabItem value="read">

```json
cloudformation:BatchDescribeTypeConfigurations
```

</TabItem>
<TabItem value="update">

```json
cloudformation:SetTypeConfiguration
```

</TabItem>
<TabItem value="delete">

```json
cloudformation:SetTypeConfiguration
```

</TabItem>
<TabItem value="list">

```json
cloudformation:ListTypes,
cloudformation:BatchDescribeTypeConfigurations
```

</TabItem>
</Tabs>