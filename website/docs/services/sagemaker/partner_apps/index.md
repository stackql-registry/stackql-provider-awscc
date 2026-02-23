---
title: partner_apps
hide_title: false
hide_table_of_contents: false
keywords:
  - partner_apps
  - sagemaker
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

Creates, updates, deletes or gets a <code>partner_app</code> resource or lists <code>partner_apps</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>partner_apps</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SageMaker::PartnerApp</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sagemaker.partner_apps" /></td></tr>
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
    "description": "The Amazon Resource Name (ARN) of the created PartnerApp."
  },
  {
    "name": "name",
    "type": "string",
    "description": "A name for the PartnerApp."
  },
  {
    "name": "type",
    "type": "string",
    "description": "The type of PartnerApp."
  },
  {
    "name": "execution_role_arn",
    "type": "string",
    "description": "The execution role for the user."
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "The AWS KMS customer managed key used to encrypt the data associated with the PartnerApp."
  },
  {
    "name": "tier",
    "type": "string",
    "description": "The tier of the PartnerApp."
  },
  {
    "name": "enable_iam_session_based_identity",
    "type": "boolean",
    "description": "Enables IAM Session based Identity for PartnerApp."
  },
  {
    "name": "application_config",
    "type": "object",
    "description": "A collection of settings that specify the maintenance schedule for the PartnerApp.",
    "children": [
      {
        "name": "admin_users",
        "type": "array",
        "description": "A list of users with administrator privileges for the PartnerApp."
      },
      {
        "name": "arguments",
        "type": "object",
        "description": "A list of arguments to pass to the PartnerApp."
      }
    ]
  },
  {
    "name": "auth_type",
    "type": "string",
    "description": "The Auth type of PartnerApp."
  },
  {
    "name": "base_url",
    "type": "string",
    "description": "The AppServerUrl based on app and account-info."
  },
  {
    "name": "maintenance_config",
    "type": "object",
    "description": "A collection of settings that specify the maintenance schedule for the PartnerApp.",
    "children": [
      {
        "name": "maintenance_window_start",
        "type": "string",
        "description": "The maintenance window start day and time for the PartnerApp."
      }
    ]
  },
  {
    "name": "client_token",
    "type": "string",
    "description": "The client token for the PartnerApp."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of tags to apply to the PartnerApp.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
        "type": "string",
        "description": ""
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
    "description": "The Amazon Resource Name (ARN) of the created PartnerApp."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-partnerapp.html"><code>AWS::SageMaker::PartnerApp</code></a>.

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
    <td><code>partner_apps</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, Type, AuthType, ExecutionRoleArn, Tier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>partner_apps</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>partner_apps</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>partner_apps_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>partner_apps</code></td>
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

Gets all properties from an individual <code>partner_app</code>.
```sql
SELECT
region,
arn,
name,
type,
execution_role_arn,
kms_key_id,
tier,
enable_iam_session_based_identity,
application_config,
auth_type,
base_url,
maintenance_config,
client_token,
tags
FROM awscc.sagemaker.partner_apps
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>partner_apps</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.sagemaker.partner_apps_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>partner_app</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sagemaker.partner_apps (
 Name,
 Type,
 ExecutionRoleArn,
 Tier,
 AuthType,
 region
)
SELECT
'{{ name }}',
 '{{ type }}',
 '{{ execution_role_arn }}',
 '{{ tier }}',
 '{{ auth_type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.sagemaker.partner_apps (
 Name,
 Type,
 ExecutionRoleArn,
 KmsKeyId,
 Tier,
 EnableIamSessionBasedIdentity,
 ApplicationConfig,
 AuthType,
 MaintenanceConfig,
 ClientToken,
 Tags,
 region
)
SELECT
 '{{ name }}',
 '{{ type }}',
 '{{ execution_role_arn }}',
 '{{ kms_key_id }}',
 '{{ tier }}',
 '{{ enable_iam_session_based_identity }}',
 '{{ application_config }}',
 '{{ auth_type }}',
 '{{ maintenance_config }}',
 '{{ client_token }}',
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
  - name: partner_app
    props:
      - name: name
        value: '{{ name }}'
      - name: type
        value: '{{ type }}'
      - name: execution_role_arn
        value: '{{ execution_role_arn }}'
      - name: kms_key_id
        value: '{{ kms_key_id }}'
      - name: tier
        value: '{{ tier }}'
      - name: enable_iam_session_based_identity
        value: '{{ enable_iam_session_based_identity }}'
      - name: application_config
        value:
          admin_users:
            - '{{ admin_users[0] }}'
          arguments: {}
      - name: auth_type
        value: '{{ auth_type }}'
      - name: maintenance_config
        value:
          maintenance_window_start: '{{ maintenance_window_start }}'
      - name: client_token
        value: '{{ client_token }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>partner_app</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.sagemaker.partner_apps
SET PatchDocument = string('{{ {
    "Tier": tier,
    "EnableIamSessionBasedIdentity": enable_iam_session_based_identity,
    "ApplicationConfig": application_config,
    "MaintenanceConfig": maintenance_config,
    "ClientToken": client_token,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sagemaker.partner_apps
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>partner_apps</code> resource, the following permissions are required:

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
sagemaker:CreatePartnerApp,
sagemaker:DescribePartnerApp,
sagemaker:AddTags,
sagemaker:ListTags,
iam:PassRole,
kms:CreateGrant,
kms:DescribeKey
```

</TabItem>
<TabItem value="read">

```json
sagemaker:DescribePartnerApp,
sagemaker:ListTags
```

</TabItem>
<TabItem value="update">

```json
sagemaker:UpdatePartnerApp,
sagemaker:DescribePartnerApp,
sagemaker:AddTags,
sagemaker:ListTags,
sagemaker:DeleteTags,
kms:DescribeKey
```

</TabItem>
<TabItem value="delete">

```json
sagemaker:DeletePartnerApp,
sagemaker:DescribePartnerApp,
sagemaker:DeleteTags
```

</TabItem>
<TabItem value="list">

```json
sagemaker:ListPartnerApps,
sagemaker:DescribePartnerApp,
sagemaker:ListTags
```

</TabItem>
</Tabs>