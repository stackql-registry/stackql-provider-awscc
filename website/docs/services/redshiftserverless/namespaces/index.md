---
title: namespaces
hide_title: false
hide_table_of_contents: false
keywords:
  - namespaces
  - redshiftserverless
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

Creates, updates, deletes or gets a <code>namespace</code> resource or lists <code>namespaces</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>namespaces</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::RedshiftServerless::Namespace Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.redshiftserverless.namespaces" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "admin_password_secret_kms_key_id",
    "type": "string",
    "description": "The ID of the AWS Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret. You can only use this parameter if manageAdminPassword is true."
  },
  {
    "name": "admin_user_password",
    "type": "string",
    "description": "The password associated with the admin user for the namespace that is being created. Password must be at least 8 characters in length, should be any printable ASCII character. Must contain at least one lowercase letter, one uppercase letter and one decimal digit. You can't use adminUserPassword if manageAdminPassword is true."
  },
  {
    "name": "admin_username",
    "type": "string",
    "description": "The user name associated with the admin user for the namespace that is being created. Only alphanumeric characters and underscores are allowed. It should start with an alphabet."
  },
  {
    "name": "db_name",
    "type": "string",
    "description": "The database name associated for the namespace that is being created. Only alphanumeric characters and underscores are allowed. It should start with an alphabet."
  },
  {
    "name": "default_iam_role_arn",
    "type": "string",
    "description": "The default IAM role ARN for the namespace that is being created."
  },
  {
    "name": "iam_roles",
    "type": "array",
    "description": "A list of AWS Identity and Access Management (IAM) roles that can be used by the namespace to access other AWS services. You must supply the IAM roles in their Amazon Resource Name (ARN) format. The Default role limit for each request is 10."
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the namespace."
  },
  {
    "name": "log_exports",
    "type": "array",
    "description": "The collection of log types to be exported provided by the customer. Should only be one of the three supported log types: userlog, useractivitylog and connectionlog"
  },
  {
    "name": "manage_admin_password",
    "type": "boolean",
    "description": "If true, Amazon Redshift uses AWS Secrets Manager to manage the namespace's admin credentials. You can't use adminUserPassword if manageAdminPassword is true. If manageAdminPassword is false or not set, Amazon Redshift uses adminUserPassword for the admin user account's password."
  },
  {
    "name": "namespace",
    "type": "object",
    "description": "Definition of Namespace resource.",
    "children": [
      {
        "name": "admin_password_secret_kms_key_id",
        "type": "string",
        "description": "The ID of the AWS Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret. You can only use this parameter if manageAdminPassword is true."
      },
      {
        "name": "admin_user_password",
        "type": "string",
        "description": "The password associated with the admin user for the namespace that is being created. Password must be at least 8 characters in length, should be any printable ASCII character. Must contain at least one lowercase letter, one uppercase letter and one decimal digit. You can't use adminUserPassword if manageAdminPassword is true."
      },
      {
        "name": "admin_username",
        "type": "string",
        "description": "The user name associated with the admin user for the namespace that is being created. Only alphanumeric characters and underscores are allowed. It should start with an alphabet."
      },
      {
        "name": "db_name",
        "type": "string",
        "description": "The database name associated for the namespace that is being created. Only alphanumeric characters and underscores are allowed. It should start with an alphabet."
      },
      {
        "name": "default_iam_role_arn",
        "type": "string",
        "description": "The default IAM role ARN for the namespace that is being created."
      },
      {
        "name": "iam_roles",
        "type": "array",
        "description": "A list of AWS Identity and Access Management (IAM) roles that can be used by the namespace to access other AWS services. You must supply the IAM roles in their Amazon Resource Name (ARN) format. The Default role limit for each request is 10."
      },
      {
        "name": "kms_key_id",
        "type": "string",
        "description": "The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the namespace."
      },
      {
        "name": "log_exports",
        "type": "array",
        "description": "The collection of log types to be exported provided by the customer. Should only be one of the three supported log types: userlog, useractivitylog and connectionlog"
      },
      {
        "name": "manage_admin_password",
        "type": "boolean",
        "description": "If true, Amazon Redshift uses AWS Secrets Manager to manage the namespace's admin credentials. You can't use adminUserPassword if manageAdminPassword is true. If manageAdminPassword is false or not set, Amazon Redshift uses adminUserPassword for the admin user account's password."
      },
      {
        "name": "namespace_name",
        "type": "string",
        "description": "A unique identifier for the namespace. You use this identifier to refer to the namespace for any subsequent namespace operations such as deleting or modifying. All alphabetical characters must be lower case. Namespace name should be unique for all namespaces within an AWS account."
      },
      {
        "name": "tags",
        "type": "array",
        "description": "The list of tags for the namespace.",
        "children": [
          {
            "name": "key",
            "type": "string",
            "description": ""
          },
          {
            "name": "value",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "final_snapshot_name",
        "type": "string",
        "description": "The name of the namespace the source snapshot was created from. Please specify the name if needed before deleting namespace"
      },
      {
        "name": "final_snapshot_retention_period",
        "type": "integer",
        "description": "The number of days to retain automated snapshot in the destination region after they are copied from the source region. If the value is -1, the manual snapshot is retained indefinitely. The value must be either -1 or an integer between 1 and 3,653."
      },
      {
        "name": "namespace_resource_policy",
        "type": "object",
        "description": "The resource policy document that will be attached to the namespace."
      },
      {
        "name": "redshift_idc_application_arn",
        "type": "string",
        "description": "The ARN for the Redshift application that integrates with IAM Identity Center."
      },
      {
        "name": "snapshot_copy_configurations",
        "type": "array",
        "description": "The snapshot copy configurations for the namespace.",
        "children": [
          {
            "name": "destination_region",
            "type": "string",
            "description": ""
          },
          {
            "name": "destination_kms_key_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "snapshot_retention_period",
            "type": "integer",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "namespace_name",
    "type": "string",
    "description": "A unique identifier for the namespace. You use this identifier to refer to the namespace for any subsequent namespace operations such as deleting or modifying. All alphabetical characters must be lower case. Namespace name should be unique for all namespaces within an AWS account."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The list of tags for the namespace.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "final_snapshot_name",
    "type": "string",
    "description": "The name of the namespace the source snapshot was created from. Please specify the name if needed before deleting namespace"
  },
  {
    "name": "final_snapshot_retention_period",
    "type": "integer",
    "description": "The number of days to retain automated snapshot in the destination region after they are copied from the source region. If the value is -1, the manual snapshot is retained indefinitely. The value must be either -1 or an integer between 1 and 3,653."
  },
  {
    "name": "namespace_resource_policy",
    "type": "object",
    "description": "The resource policy document that will be attached to the namespace."
  },
  {
    "name": "redshift_idc_application_arn",
    "type": "string",
    "description": "The ARN for the Redshift application that integrates with IAM Identity Center."
  },
  {
    "name": "snapshot_copy_configurations",
    "type": "array",
    "description": "The snapshot copy configurations for the namespace.",
    "children": [
      {
        "name": "destination_region",
        "type": "string",
        "description": ""
      },
      {
        "name": "destination_kms_key_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "snapshot_retention_period",
        "type": "integer",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-namespace.html"><code>AWS::RedshiftServerless::Namespace</code></a>.

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
    <td><CopyableCode code="NamespaceName, region" /></td>
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

Gets all properties from an individual <code>namespace</code>.
```sql
SELECT
region,
admin_password_secret_kms_key_id,
admin_user_password,
admin_username,
db_name,
default_iam_role_arn,
iam_roles,
kms_key_id,
log_exports,
manage_admin_password,
namespace,
namespace_name,
tags,
final_snapshot_name,
final_snapshot_retention_period,
namespace_resource_policy,
redshift_idc_application_arn,
snapshot_copy_configurations
FROM awscc.redshiftserverless.namespaces
WHERE region = 'us-east-1' AND data__Identifier = '<NamespaceName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>namespace</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.redshiftserverless.namespaces (
 NamespaceName,
 region
)
SELECT 
'{{ NamespaceName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.redshiftserverless.namespaces (
 AdminPasswordSecretKmsKeyId,
 AdminUserPassword,
 AdminUsername,
 DbName,
 DefaultIamRoleArn,
 IamRoles,
 KmsKeyId,
 LogExports,
 ManageAdminPassword,
 NamespaceName,
 Tags,
 FinalSnapshotName,
 FinalSnapshotRetentionPeriod,
 NamespaceResourcePolicy,
 RedshiftIdcApplicationArn,
 SnapshotCopyConfigurations,
 region
)
SELECT 
 '{{ AdminPasswordSecretKmsKeyId }}',
 '{{ AdminUserPassword }}',
 '{{ AdminUsername }}',
 '{{ DbName }}',
 '{{ DefaultIamRoleArn }}',
 '{{ IamRoles }}',
 '{{ KmsKeyId }}',
 '{{ LogExports }}',
 '{{ ManageAdminPassword }}',
 '{{ NamespaceName }}',
 '{{ Tags }}',
 '{{ FinalSnapshotName }}',
 '{{ FinalSnapshotRetentionPeriod }}',
 '{{ NamespaceResourcePolicy }}',
 '{{ RedshiftIdcApplicationArn }}',
 '{{ SnapshotCopyConfigurations }}',
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
  - name: namespace
    props:
      - name: AdminPasswordSecretKmsKeyId
        value: '{{ AdminPasswordSecretKmsKeyId }}'
      - name: AdminUserPassword
        value: '{{ AdminUserPassword }}'
      - name: AdminUsername
        value: '{{ AdminUsername }}'
      - name: DbName
        value: '{{ DbName }}'
      - name: DefaultIamRoleArn
        value: '{{ DefaultIamRoleArn }}'
      - name: IamRoles
        value:
          - '{{ IamRoles[0] }}'
      - name: KmsKeyId
        value: '{{ KmsKeyId }}'
      - name: LogExports
        value:
          - '{{ LogExports[0] }}'
      - name: ManageAdminPassword
        value: '{{ ManageAdminPassword }}'
      - name: NamespaceName
        value: '{{ NamespaceName }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: FinalSnapshotName
        value: '{{ FinalSnapshotName }}'
      - name: FinalSnapshotRetentionPeriod
        value: '{{ FinalSnapshotRetentionPeriod }}'
      - name: NamespaceResourcePolicy
        value: {}
      - name: RedshiftIdcApplicationArn
        value: '{{ RedshiftIdcApplicationArn }}'
      - name: SnapshotCopyConfigurations
        value:
          - DestinationRegion: '{{ DestinationRegion }}'
            DestinationKmsKeyId: '{{ DestinationKmsKeyId }}'
            SnapshotRetentionPeriod: '{{ SnapshotRetentionPeriod }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.redshiftserverless.namespaces
WHERE data__Identifier = '<NamespaceName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>namespaces</code> resource, the following permissions are required:

### Create
```json
iam:CreateServiceLinkedRole,
iam:PassRole,
kms:TagResource,
kms:UntagResource,
kms:ScheduleKeyDeletion,
kms:CancelKeyDeletion,
kms:Encrypt,
kms:Decrypt,
kms:DescribeKey,
kms:GenerateDataKeyPair,
kms:GenerateDataKey,
kms:CreateGrant,
kms:ListGrants,
kms:RevokeGrant,
kms:RetireGrant,
redshift-serverless:CreateNamespace,
redshift-serverless:GetNamespace,
redshift-serverless:ListSnapshotCopyConfigurations,
redshift-serverless:CreateSnapshotCopyConfiguration,
redshift-serverless:ListTagsForResource,
redshift-serverless:TagResource,
redshift:GetResourcePolicy,
redshift:PutResourcePolicy,
secretsmanager:CreateSecret,
secretsmanager:TagResource,
secretsmanager:RotateSecret,
secretsmanager:DescribeSecret
```

### Read
```json
iam:PassRole,
redshift-serverless:GetNamespace,
redshift-serverless:ListTagsForResource,
redshift:GetResourcePolicy,
redshift-serverless:ListSnapshotCopyConfigurations
```

### Update
```json
iam:PassRole,
kms:TagResource,
kms:UntagResource,
kms:ScheduleKeyDeletion,
kms:CancelKeyDeletion,
kms:Encrypt,
kms:Decrypt,
kms:DescribeKey,
kms:CreateGrant,
kms:ListGrants,
kms:RevokeGrant,
kms:RetireGrant,
kms:GenerateDataKeyPair,
kms:GenerateDataKey,
redshift-serverless:UpdateNamespace,
redshift-serverless:GetNamespace,
redshift-serverless:ListSnapshotCopyConfigurations,
redshift-serverless:CreateSnapshotCopyConfiguration,
redshift-serverless:UpdateSnapshotCopyConfiguration,
redshift-serverless:DeleteSnapshotCopyConfiguration,
redshift-serverless:ListTagsForResource,
redshift-serverless:TagResource,
redshift-serverless:UntagResource,
redshift:GetResourcePolicy,
redshift:PutResourcePolicy,
redshift:DeleteResourcePolicy,
secretsmanager:CreateSecret,
secretsmanager:TagResource,
secretsmanager:RotateSecret,
secretsmanager:DescribeSecret,
secretsmanager:UpdateSecret,
secretsmanager:DeleteSecret
```

### Delete
```json
iam:PassRole,
redshift-serverless:DeleteNamespace,
redshift-serverless:GetNamespace,
redshift-serverless:ListTagsForResource,
redshift-serverless:UntagResource,
kms:RetireGrant,
secretsmanager:DescribeSecret,
secretsmanager:DeleteSecret,
redshift:DeleteResourcePolicy
```

### List
```json
iam:PassRole,
redshift-serverless:ListNamespaces,
redshift-serverless:ListTagsForResource
```
