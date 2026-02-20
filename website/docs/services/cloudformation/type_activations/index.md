---
title: type_activations
hide_title: false
hide_table_of_contents: false
keywords:
  - type_activations
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

Creates, updates, deletes or gets a <code>type_activation</code> resource or lists <code>type_activations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>type_activations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Enable a resource that has been published in the CloudFormation Registry.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudformation.type_activations" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the extension."
  },
  {
    "name": "execution_role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials."
  },
  {
    "name": "publisher_id",
    "type": "string",
    "description": "The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region."
  },
  {
    "name": "logging_config",
    "type": "object",
    "description": "Specifies logging configuration information for a type.",
    "children": [
      {
        "name": "log_group_name",
        "type": "string",
        "description": "The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers."
      },
      {
        "name": "log_role_arn",
        "type": "string",
        "description": "The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs."
      }
    ]
  },
  {
    "name": "public_type_arn",
    "type": "string",
    "description": "The Amazon Resource Number (ARN) assigned to the public extension upon publication"
  },
  {
    "name": "auto_update",
    "type": "boolean",
    "description": "Whether to automatically update the extension in this account and region when a new minor version is published by the extension publisher. Major versions released by the publisher must be manually updated."
  },
  {
    "name": "type_name_alias",
    "type": "string",
    "description": "An alias to assign to the public extension in this account and region. If you specify an alias for the extension, you must then use the alias to refer to the extension in your templates."
  },
  {
    "name": "version_bump",
    "type": "string",
    "description": "Manually updates a previously-enabled type to a new major or minor version, if available. You can also use this parameter to update the value of AutoUpdateEnabled"
  },
  {
    "name": "major_version",
    "type": "string",
    "description": "The Major Version of the type you want to enable"
  },
  {
    "name": "type_name",
    "type": "string",
    "description": "The name of the type being registered.<br />We recommend that type names adhere to the following pattern: company&#95;or&#95;organization::service::type."
  },
  {
    "name": "type",
    "type": "string",
    "description": "The kind of extension"
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
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the extension."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html"><code>AWS::CloudFormation::TypeActivation</code></a>.

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
    <td><code>type_activations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>type_activations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>type_activations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>type_activations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>type_activations</code></td>
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

Gets all properties from an individual <code>type_activation</code>.
```sql
SELECT
region,
arn,
execution_role_arn,
publisher_id,
logging_config,
public_type_arn,
auto_update,
type_name_alias,
version_bump,
major_version,
type_name,
type
FROM awscc.cloudformation.type_activations
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>type_activations</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.cloudformation.type_activations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>type_activation</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudformation.type_activations (
 ExecutionRoleArn,
 PublisherId,
 LoggingConfig,
 PublicTypeArn,
 AutoUpdate,
 TypeNameAlias,
 VersionBump,
 MajorVersion,
 TypeName,
 Type,
 region
)
SELECT 
'{{ ExecutionRoleArn }}',
 '{{ PublisherId }}',
 '{{ LoggingConfig }}',
 '{{ PublicTypeArn }}',
 '{{ AutoUpdate }}',
 '{{ TypeNameAlias }}',
 '{{ VersionBump }}',
 '{{ MajorVersion }}',
 '{{ TypeName }}',
 '{{ Type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudformation.type_activations (
 ExecutionRoleArn,
 PublisherId,
 LoggingConfig,
 PublicTypeArn,
 AutoUpdate,
 TypeNameAlias,
 VersionBump,
 MajorVersion,
 TypeName,
 Type,
 region
)
SELECT 
 '{{ ExecutionRoleArn }}',
 '{{ PublisherId }}',
 '{{ LoggingConfig }}',
 '{{ PublicTypeArn }}',
 '{{ AutoUpdate }}',
 '{{ TypeNameAlias }}',
 '{{ VersionBump }}',
 '{{ MajorVersion }}',
 '{{ TypeName }}',
 '{{ Type }}',
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
  - name: type_activation
    props:
      - name: ExecutionRoleArn
        value: '{{ ExecutionRoleArn }}'
      - name: PublisherId
        value: '{{ PublisherId }}'
      - name: LoggingConfig
        value:
          LogGroupName: '{{ LogGroupName }}'
          LogRoleArn: '{{ LogRoleArn }}'
      - name: PublicTypeArn
        value: '{{ PublicTypeArn }}'
      - name: AutoUpdate
        value: '{{ AutoUpdate }}'
      - name: TypeNameAlias
        value: '{{ TypeNameAlias }}'
      - name: VersionBump
        value: '{{ VersionBump }}'
      - name: MajorVersion
        value: '{{ MajorVersion }}'
      - name: TypeName
        value: '{{ TypeName }}'
      - name: Type
        value: '{{ Type }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>type_activation</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cloudformation.type_activations
SET PatchDocument = string('{{ {
    "ExecutionRoleArn": execution_role_arn,
    "PublisherId": publisher_id,
    "PublicTypeArn": public_type_arn,
    "AutoUpdate": auto_update,
    "TypeNameAlias": type_name_alias,
    "VersionBump": version_bump,
    "MajorVersion": major_version,
    "TypeName": type_name,
    "Type": type
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudformation.type_activations
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>type_activations</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
cloudformation:ActivateType,
cloudformation:DescribeType,
iam:PassRole
```

</TabItem>
<TabItem value="update">

```json
cloudformation:ActivateType,
cloudformation:DescribeType,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
cloudformation:DescribeType
```

</TabItem>
<TabItem value="delete">

```json
cloudformation:DeactivateType,
cloudformation:DescribeType
```

</TabItem>
<TabItem value="list">

```json
cloudformation:ListTypes
```

</TabItem>
</Tabs>