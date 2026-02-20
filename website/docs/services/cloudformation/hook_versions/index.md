---
title: hook_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - hook_versions
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

Creates, updates, deletes or gets a <code>hook_version</code> resource or lists <code>hook_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>hook_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Publishes new or first hook version to AWS CloudFormation Registry.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudformation.hook_versions" /></td></tr>
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
    "description": "The Amazon Resource Name (ARN) of the type, here the HookVersion. This is used to uniquely identify a HookVersion resource"
  },
  {
    "name": "type_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the type without the versionID."
  },
  {
    "name": "execution_role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials."
  },
  {
    "name": "is_default_version",
    "type": "boolean",
    "description": "Indicates if this type version is the current default version"
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
    "name": "schema_handler_package",
    "type": "string",
    "description": "A url to the S3 bucket containing the schema handler package that contains the schema, event handlers, and associated files for the type you want to register.<br />For information on generating a schema handler package for the type you want to register, see submit in the CloudFormation CLI User Guide."
  },
  {
    "name": "type_name",
    "type": "string",
    "description": "The name of the type being registered.<br />We recommend that type names adhere to the following pattern: company&#95;or&#95;organization::service::type."
  },
  {
    "name": "version_id",
    "type": "string",
    "description": "The ID of the version of the type represented by this hook instance."
  },
  {
    "name": "visibility",
    "type": "string",
    "description": "The scope at which the type is visible and usable in CloudFormation operations.<br />Valid values include:<br />PRIVATE: The type is only visible and usable within the account in which it is registered. Currently, AWS CloudFormation marks any types you register as PRIVATE.<br />PUBLIC: The type is publically visible and usable within any Amazon account."
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
    "description": "The Amazon Resource Name (ARN) of the type, here the HookVersion. This is used to uniquely identify a HookVersion resource"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html"><code>AWS::CloudFormation::HookVersion</code></a>.

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
    <td><code>hook_versions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="SchemaHandlerPackage, TypeName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>hook_versions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>hook_versions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>hook_versions</code></td>
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

Gets all properties from an individual <code>hook_version</code>.
```sql
SELECT
region,
arn,
type_arn,
execution_role_arn,
is_default_version,
logging_config,
schema_handler_package,
type_name,
version_id,
visibility
FROM awscc.cloudformation.hook_versions
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>hook_versions</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.cloudformation.hook_versions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>hook_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudformation.hook_versions (
 SchemaHandlerPackage,
 TypeName,
 region
)
SELECT 
'{{ SchemaHandlerPackage }}',
 '{{ TypeName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudformation.hook_versions (
 ExecutionRoleArn,
 LoggingConfig,
 SchemaHandlerPackage,
 TypeName,
 region
)
SELECT 
 '{{ ExecutionRoleArn }}',
 '{{ LoggingConfig }}',
 '{{ SchemaHandlerPackage }}',
 '{{ TypeName }}',
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
  - name: hook_version
    props:
      - name: ExecutionRoleArn
        value: '{{ ExecutionRoleArn }}'
      - name: LoggingConfig
        value:
          LogGroupName: '{{ LogGroupName }}'
          LogRoleArn: '{{ LogRoleArn }}'
      - name: SchemaHandlerPackage
        value: '{{ SchemaHandlerPackage }}'
      - name: TypeName
        value: '{{ TypeName }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudformation.hook_versions
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>hook_versions</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
cloudformation:DescribeType,
cloudformation:DescribeTypeRegistration,
cloudformation:RegisterType,
iam:PassRole,
s3:GetObject,
s3:ListBucket,
kms:Decrypt
```

</TabItem>
<TabItem value="read">

```json
cloudformation:DescribeType
```

</TabItem>
<TabItem value="delete">

```json
cloudformation:DeregisterType,
cloudformation:DescribeType
```

</TabItem>
<TabItem value="list">

```json
cloudformation:ListTypes,
cloudformation:ListTypeVersions
```

</TabItem>
</Tabs>