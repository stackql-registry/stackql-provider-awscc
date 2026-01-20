---
title: namespaces_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - namespaces_list_only
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

Lists <code>namespaces</code> in a region or regions, for all properties use <a href="/services/redshiftserverless/namespaces/"><code>namespaces</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>namespaces_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::RedshiftServerless::Namespace Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.redshiftserverless.namespaces_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples
Lists all <code>namespaces</code> in a region.
```sql
SELECT
region,
namespace_name
FROM awscc.redshiftserverless.namespaces_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>namespaces_list_only</code> resource, see <a href="/services/redshiftserverless/namespaces/#permissions"><code>namespaces</code></a>

