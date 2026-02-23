---
title: environment_account_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - environment_account_connections
  - proton
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

Creates, updates, deletes or gets an <code>environment_account_connection</code> resource or lists <code>environment_account_connections</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>environment_account_connections</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Schema describing various properties for AWS Proton Environment Account Connections resources.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.proton.environment_account_connections" /></td></tr>
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
    "description": "The Amazon Resource Name (ARN) of the environment account connection."
  },
  {
    "name": "codebuild_role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of an IAM service role in the environment account. AWS Proton uses this role to provision infrastructure resources using CodeBuild-based provisioning in the associated environment account."
  },
  {
    "name": "component_role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the IAM service role that AWS Proton uses when provisioning directly defined components in the associated environment account. It determines the scope of infrastructure that a component can provision in the account."
  },
  {
    "name": "environment_account_id",
    "type": "string",
    "description": "The environment account that's connected to the environment account connection."
  },
  {
    "name": "environment_name",
    "type": "string",
    "description": "The name of the AWS Proton environment that's created in the associated management account."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the environment account connection."
  },
  {
    "name": "management_account_id",
    "type": "string",
    "description": "The ID of the management account that accepts or rejects the environment account connection. You create an manage the AWS Proton environment in this account. If the management account accepts the environment account connection, AWS Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the IAM service role that's created in the environment account. AWS Proton uses this role to provision infrastructure resources in the associated environment account."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the environment account connection."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "<p>An optional list of metadata items that you can associate with the Proton environment account connection. A tag is a key-value pair.</p><br /><p>For more information, see <a href=\"https://docs.aws.amazon.com/proton/latest/userguide/resources.html\">Proton resources and tagging</a> in the<br /><i>Proton User Guide</i>.</p>",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "<p>The key of the resource tag.</p>"
      },
      {
        "name": "value",
        "type": "string",
        "description": "<p>The value of the resource tag.</p>"
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
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the environment account connection."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmentaccountconnection.html"><code>AWS::Proton::EnvironmentAccountConnection</code></a>.

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
    <td><code>environment_account_connections</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>environment_account_connections</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>environment_account_connections</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>environment_account_connections_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>environment_account_connections</code></td>
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

Gets all properties from an individual <code>environment_account_connection</code>.
```sql
SELECT
region,
arn,
codebuild_role_arn,
component_role_arn,
environment_account_id,
environment_name,
id,
management_account_id,
role_arn,
status,
tags
FROM awscc.proton.environment_account_connections
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>environment_account_connections</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.proton.environment_account_connections_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>environment_account_connection</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.proton.environment_account_connections (
 CodebuildRoleArn,
 ComponentRoleArn,
 EnvironmentAccountId,
 EnvironmentName,
 ManagementAccountId,
 RoleArn,
 Tags,
 region
)
SELECT
'{{ codebuild_role_arn }}',
 '{{ component_role_arn }}',
 '{{ environment_account_id }}',
 '{{ environment_name }}',
 '{{ management_account_id }}',
 '{{ role_arn }}',
 '{{ tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.proton.environment_account_connections (
 CodebuildRoleArn,
 ComponentRoleArn,
 EnvironmentAccountId,
 EnvironmentName,
 ManagementAccountId,
 RoleArn,
 Tags,
 region
)
SELECT
 '{{ codebuild_role_arn }}',
 '{{ component_role_arn }}',
 '{{ environment_account_id }}',
 '{{ environment_name }}',
 '{{ management_account_id }}',
 '{{ role_arn }}',
 '{{ tags }}',
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
  - name: environment_account_connection
    props:
      - name: codebuild_role_arn
        value: '{{ codebuild_role_arn }}'
      - name: component_role_arn
        value: '{{ component_role_arn }}'
      - name: environment_account_id
        value: '{{ environment_account_id }}'
      - name: environment_name
        value: '{{ environment_name }}'
      - name: management_account_id
        value: '{{ management_account_id }}'
      - name: role_arn
        value: '{{ role_arn }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>environment_account_connection</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.proton.environment_account_connections
SET PatchDocument = string('{{ {
    "CodebuildRoleArn": codebuild_role_arn,
    "ComponentRoleArn": component_role_arn,
    "EnvironmentAccountId": environment_account_id,
    "EnvironmentName": environment_name,
    "ManagementAccountId": management_account_id,
    "RoleArn": role_arn,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.proton.environment_account_connections
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>environment_account_connections</code> resource, the following permissions are required:

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
proton:CreateEnvironmentAccountConnection,
proton:TagResource,
iam:PassRole,
proton:ListTagsForResource,
proton:GetEnvironmentAccountConnection
```

</TabItem>
<TabItem value="read">

```json
proton:GetEnvironmentAccountConnection,
proton:ListTagsForResource,
iam:PassRole,
proton:GetEnvironmentAccountConnection
```

</TabItem>
<TabItem value="update">

```json
proton:CreateEnvironmentAccountConnection,
proton:ListTagsForResource,
proton:TagResource,
proton:UntagResource,
proton:UpdateEnvironmentAccountConnection,
iam:PassRole,
proton:GetEnvironmentAccountConnection
```

</TabItem>
<TabItem value="delete">

```json
proton:DeleteEnvironmentAccountConnection,
proton:UntagResource,
iam:PassRole,
proton:ListTagsForResource,
proton:GetEnvironmentAccountConnection
```

</TabItem>
<TabItem value="list">

```json
proton:ListEnvironmentAccountConnections
```

</TabItem>
</Tabs>