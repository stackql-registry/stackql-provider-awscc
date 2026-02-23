---
title: versions
hide_title: false
hide_table_of_contents: false
keywords:
  - versions
  - lambda
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

Creates, updates, deletes or gets a <code>version</code> resource or lists <code>versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Lambda::Version</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lambda.versions" /></td></tr>
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
    "name": "function_arn",
    "type": "string",
    "description": "The ARN of the version."
  },
  {
    "name": "version",
    "type": "string",
    "description": "The version number."
  },
  {
    "name": "code_sha256",
    "type": "string",
    "description": "Only publish a version if the hash value matches the value that's specified. Use this option to avoid publishing a version if the function code has changed since you last updated it. Updates are not supported for this property."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description for the version to override the description in the function configuration. Updates are not supported for this property."
  },
  {
    "name": "function_name",
    "type": "string",
    "description": "The name of the Lambda function."
  },
  {
    "name": "provisioned_concurrency_config",
    "type": "object",
    "description": "Specifies a provisioned concurrency configuration for a function's version. Updates are not supported for this property.",
    "children": [
      {
        "name": "provisioned_concurrent_executions",
        "type": "integer",
        "description": "The amount of provisioned concurrency to allocate for the version."
      }
    ]
  },
  {
    "name": "runtime_policy",
    "type": "object",
    "description": "Specifies the runtime management configuration of a function. Displays runtimeVersionArn only for Manual.",
    "children": [
      {
        "name": "runtime_version_arn",
        "type": "string",
        "description": "The ARN of the runtime the function is configured to use. If the runtime update mode is manual, the ARN is returned, otherwise null is returned."
      },
      {
        "name": "update_runtime_on",
        "type": "string",
        "description": "The runtime update mode."
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
    "name": "function_arn",
    "type": "string",
    "description": "The ARN of the version."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-version.html"><code>AWS::Lambda::Version</code></a>.

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
    <td><code>versions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="FunctionName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>versions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>versions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>versions</code></td>
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

Gets all properties from an individual <code>version</code>.
```sql
SELECT
region,
function_arn,
version,
code_sha256,
description,
function_name,
provisioned_concurrency_config,
runtime_policy
FROM awscc.lambda.versions
WHERE region = 'us-east-1' AND Identifier = '{{ function_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>versions</code> in a region.
```sql
SELECT
region,
function_arn
FROM awscc.lambda.versions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.lambda.versions (
 FunctionName,
 region
)
SELECT
'{{ function_name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.lambda.versions (
 CodeSha256,
 Description,
 FunctionName,
 ProvisionedConcurrencyConfig,
 RuntimePolicy,
 region
)
SELECT
 '{{ code_sha256 }}',
 '{{ description }}',
 '{{ function_name }}',
 '{{ provisioned_concurrency_config }}',
 '{{ runtime_policy }}',
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
  - name: version
    props:
      - name: code_sha256
        value: '{{ code_sha256 }}'
      - name: description
        value: '{{ description }}'
      - name: function_name
        value: '{{ function_name }}'
      - name: provisioned_concurrency_config
        value:
          provisioned_concurrent_executions: '{{ provisioned_concurrent_executions }}'
      - name: runtime_policy
        value:
          runtime_version_arn: '{{ runtime_version_arn }}'
          update_runtime_on: '{{ update_runtime_on }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lambda.versions
WHERE Identifier = '{{ function_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>versions</code> resource, the following permissions are required:

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
lambda:PublishVersion,
lambda:GetFunctionConfiguration,
lambda:PutProvisionedConcurrencyConfig,
lambda:GetProvisionedConcurrencyConfig,
lambda:PutRuntimeManagementConfig,
lambda:GetRuntimeManagementConfig
```

</TabItem>
<TabItem value="read">

```json
lambda:GetFunctionConfiguration,
lambda:GetProvisionedConcurrencyConfig,
lambda:GetRuntimeManagementConfig
```

</TabItem>
<TabItem value="delete">

```json
lambda:GetFunctionConfiguration,
lambda:DeleteFunction
```

</TabItem>
<TabItem value="list">

```json
lambda:ListVersionsByFunction
```

</TabItem>
</Tabs>