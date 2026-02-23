---
title: portals
hide_title: false
hide_table_of_contents: false
keywords:
  - portals
  - workspacesweb
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

Creates, updates, deletes or gets a <code>portal</code> resource or lists <code>portals</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>portals</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::WorkSpacesWeb::Portal Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.workspacesweb.portals" /></td></tr>
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
    "name": "additional_encryption_context",
    "type": "object",
    "description": ""
  },
  {
    "name": "authentication_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "browser_settings_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "browser_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "creation_date",
    "type": "string",
    "description": ""
  },
  {
    "name": "customer_managed_key",
    "type": "string",
    "description": ""
  },
  {
    "name": "data_protection_settings_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "display_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "instance_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "ip_access_settings_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "max_concurrent_sessions",
    "type": "number",
    "description": ""
  },
  {
    "name": "network_settings_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "portal_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "portal_endpoint",
    "type": "string",
    "description": ""
  },
  {
    "name": "portal_status",
    "type": "string",
    "description": ""
  },
  {
    "name": "renderer_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "service_provider_saml_metadata",
    "type": "string",
    "description": ""
  },
  {
    "name": "session_logger_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "status_reason",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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
    "name": "trust_store_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "user_access_logging_settings_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "user_settings_arn",
    "type": "string",
    "description": ""
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
    "name": "portal_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-portal.html"><code>AWS::WorkSpacesWeb::Portal</code></a>.

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
    <td><code>portals</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>portals</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>portals</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>portals_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>portals</code></td>
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

Gets all properties from an individual <code>portal</code>.
```sql
SELECT
region,
additional_encryption_context,
authentication_type,
browser_settings_arn,
browser_type,
creation_date,
customer_managed_key,
data_protection_settings_arn,
display_name,
instance_type,
ip_access_settings_arn,
max_concurrent_sessions,
network_settings_arn,
portal_arn,
portal_endpoint,
portal_status,
renderer_type,
service_provider_saml_metadata,
session_logger_arn,
status_reason,
tags,
trust_store_arn,
user_access_logging_settings_arn,
user_settings_arn
FROM awscc.workspacesweb.portals
WHERE region = 'us-east-1' AND Identifier = '{{ portal_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>portals</code> in a region.
```sql
SELECT
region,
portal_arn
FROM awscc.workspacesweb.portals_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>portal</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.workspacesweb.portals (
 AdditionalEncryptionContext,
 AuthenticationType,
 BrowserSettingsArn,
 CustomerManagedKey,
 DataProtectionSettingsArn,
 DisplayName,
 InstanceType,
 IpAccessSettingsArn,
 MaxConcurrentSessions,
 NetworkSettingsArn,
 SessionLoggerArn,
 Tags,
 TrustStoreArn,
 UserAccessLoggingSettingsArn,
 UserSettingsArn,
 region
)
SELECT
'{{ additional_encryption_context }}',
 '{{ authentication_type }}',
 '{{ browser_settings_arn }}',
 '{{ customer_managed_key }}',
 '{{ data_protection_settings_arn }}',
 '{{ display_name }}',
 '{{ instance_type }}',
 '{{ ip_access_settings_arn }}',
 '{{ max_concurrent_sessions }}',
 '{{ network_settings_arn }}',
 '{{ session_logger_arn }}',
 '{{ tags }}',
 '{{ trust_store_arn }}',
 '{{ user_access_logging_settings_arn }}',
 '{{ user_settings_arn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.workspacesweb.portals (
 AdditionalEncryptionContext,
 AuthenticationType,
 BrowserSettingsArn,
 CustomerManagedKey,
 DataProtectionSettingsArn,
 DisplayName,
 InstanceType,
 IpAccessSettingsArn,
 MaxConcurrentSessions,
 NetworkSettingsArn,
 SessionLoggerArn,
 Tags,
 TrustStoreArn,
 UserAccessLoggingSettingsArn,
 UserSettingsArn,
 region
)
SELECT
 '{{ additional_encryption_context }}',
 '{{ authentication_type }}',
 '{{ browser_settings_arn }}',
 '{{ customer_managed_key }}',
 '{{ data_protection_settings_arn }}',
 '{{ display_name }}',
 '{{ instance_type }}',
 '{{ ip_access_settings_arn }}',
 '{{ max_concurrent_sessions }}',
 '{{ network_settings_arn }}',
 '{{ session_logger_arn }}',
 '{{ tags }}',
 '{{ trust_store_arn }}',
 '{{ user_access_logging_settings_arn }}',
 '{{ user_settings_arn }}',
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
  - name: portal
    props:
      - name: additional_encryption_context
        value: {}
      - name: authentication_type
        value: '{{ authentication_type }}'
      - name: browser_settings_arn
        value: '{{ browser_settings_arn }}'
      - name: customer_managed_key
        value: '{{ customer_managed_key }}'
      - name: data_protection_settings_arn
        value: '{{ data_protection_settings_arn }}'
      - name: display_name
        value: '{{ display_name }}'
      - name: instance_type
        value: '{{ instance_type }}'
      - name: ip_access_settings_arn
        value: '{{ ip_access_settings_arn }}'
      - name: max_concurrent_sessions
        value: null
      - name: network_settings_arn
        value: '{{ network_settings_arn }}'
      - name: session_logger_arn
        value: '{{ session_logger_arn }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: trust_store_arn
        value: '{{ trust_store_arn }}'
      - name: user_access_logging_settings_arn
        value: '{{ user_access_logging_settings_arn }}'
      - name: user_settings_arn
        value: '{{ user_settings_arn }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>portal</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.workspacesweb.portals
SET PatchDocument = string('{{ {
    "AuthenticationType": authentication_type,
    "BrowserSettingsArn": browser_settings_arn,
    "DataProtectionSettingsArn": data_protection_settings_arn,
    "DisplayName": display_name,
    "InstanceType": instance_type,
    "IpAccessSettingsArn": ip_access_settings_arn,
    "MaxConcurrentSessions": max_concurrent_sessions,
    "NetworkSettingsArn": network_settings_arn,
    "SessionLoggerArn": session_logger_arn,
    "Tags": tags,
    "TrustStoreArn": trust_store_arn,
    "UserAccessLoggingSettingsArn": user_access_logging_settings_arn,
    "UserSettingsArn": user_settings_arn
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ portal_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.workspacesweb.portals
WHERE Identifier = '{{ portal_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>portals</code> resource, the following permissions are required:

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
workspaces-web:CreatePortal,
workspaces-web:GetPortal*,
workspaces-web:AssociateBrowserSettings,
workspaces-web:AssociateIpAccessSettings,
workspaces-web:AssociateNetworkSettings,
workspaces-web:AssociateTrustStore,
workspaces-web:AssociateUserAccessLoggingSettings,
workspaces-web:AssociateUserSettings,
workspaces-web:AssociateDataProtectionSettings,
workspaces-web:AssociateSessionLogger,
workspaces-web:List*,
workspaces-web:TagResource,
kms:DescribeKey,
kms:GenerateDataKey,
kms:Decrypt,
kms:GenerateDataKeyWithoutPlaintext,
kms:ReEncryptTo,
kms:ReEncryptFrom,
ec2:CreateNetworkInterface,
ec2:CreateNetworkInterfacePermission,
ec2:DeleteNetworkInterface,
ec2:DeleteNetworkInterfacePermission,
ec2:ModifyNetworkInterfaceAttribute,
kinesis:PutRecord,
kinesis:PutRecords,
kinesis:Describe*,
sso:CreateManagedApplicationInstance,
sso:Describe*,
s3:PutObject
```

</TabItem>
<TabItem value="read">

```json
workspaces-web:GetPortal*,
workspaces-web:List*,
kms:Decrypt,
kms:DescribeKey
```

</TabItem>
<TabItem value="update">

```json
workspaces-web:GetPortal*,
workspaces-web:UpdatePortal,
workspaces-web:AssociateBrowserSettings,
workspaces-web:AssociateIpAccessSettings,
workspaces-web:AssociateNetworkSettings,
workspaces-web:AssociateTrustStore,
workspaces-web:AssociateUserAccessLoggingSettings,
workspaces-web:AssociateUserSettings,
workspaces-web:AssociateDataProtectionSettings,
workspaces-web:AssociateSessionLogger,
workspaces-web:DisassociateBrowserSettings,
workspaces-web:DisassociateIpAccessSettings,
workspaces-web:DisassociateNetworkSettings,
workspaces-web:DisassociateTrustStore,
workspaces-web:DisassociateUserAccessLoggingSettings,
workspaces-web:DisassociateUserSettings,
workspaces-web:DisassociateDataProtectionSettings,
workspaces-web:DisassociateSessionLogger,
workspaces-web:List*,
workspaces-web:TagResource,
workspaces-web:UntagResource,
kms:CreateGrant,
kms:Encrypt,
kms:GenerateDataKey,
kms:Decrypt,
kms:DescribeKey,
ec2:CreateNetworkInterface,
ec2:CreateNetworkInterfacePermission,
ec2:DeleteNetworkInterface,
ec2:DeleteNetworkInterfacePermission,
ec2:ModifyNetworkInterfaceAttribute,
kinesis:PutRecord,
kinesis:PutRecords,
kinesis:Describe*,
sso:CreateManagedApplicationInstance,
sso:DeleteManagedApplicationInstance,
sso:Describe*,
sso:GetApplicationInstance,
sso:List*,
s3:PutObject
```

</TabItem>
<TabItem value="delete">

```json
workspaces-web:GetPortal*,
workspaces-web:DeletePortal,
workspaces-web:DisassociateBrowserSettings,
workspaces-web:DisassociateIpAccessSettings,
workspaces-web:DisassociateNetworkSettings,
workspaces-web:DisassociateTrustStore,
workspaces-web:DisassociateUserAccessLoggingSettings,
workspaces-web:DisassociateUserSettings,
workspaces-web:DisassociateDataProtectionSettings,
workspaces-web:DisassociateSessionLogger,
kms:Decrypt,
kms:DescribeKey,
sso:DeleteManagedApplicationInstance
```

</TabItem>
<TabItem value="list">

```json
workspaces-web:List*,
kms:Decrypt,
kms:DescribeKey
```

</TabItem>
</Tabs>