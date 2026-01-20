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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-portal.html"><code>AWS::WorkSpacesWeb::Portal</code></a>.

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
    <td><CopyableCode code="region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<PortalArn>';
```

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
'{{ AdditionalEncryptionContext }}',
 '{{ AuthenticationType }}',
 '{{ BrowserSettingsArn }}',
 '{{ CustomerManagedKey }}',
 '{{ DataProtectionSettingsArn }}',
 '{{ DisplayName }}',
 '{{ InstanceType }}',
 '{{ IpAccessSettingsArn }}',
 '{{ MaxConcurrentSessions }}',
 '{{ NetworkSettingsArn }}',
 '{{ SessionLoggerArn }}',
 '{{ Tags }}',
 '{{ TrustStoreArn }}',
 '{{ UserAccessLoggingSettingsArn }}',
 '{{ UserSettingsArn }}',
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
 '{{ AdditionalEncryptionContext }}',
 '{{ AuthenticationType }}',
 '{{ BrowserSettingsArn }}',
 '{{ CustomerManagedKey }}',
 '{{ DataProtectionSettingsArn }}',
 '{{ DisplayName }}',
 '{{ InstanceType }}',
 '{{ IpAccessSettingsArn }}',
 '{{ MaxConcurrentSessions }}',
 '{{ NetworkSettingsArn }}',
 '{{ SessionLoggerArn }}',
 '{{ Tags }}',
 '{{ TrustStoreArn }}',
 '{{ UserAccessLoggingSettingsArn }}',
 '{{ UserSettingsArn }}',
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
      - name: AdditionalEncryptionContext
        value: {}
      - name: AuthenticationType
        value: '{{ AuthenticationType }}'
      - name: BrowserSettingsArn
        value: '{{ BrowserSettingsArn }}'
      - name: CustomerManagedKey
        value: '{{ CustomerManagedKey }}'
      - name: DataProtectionSettingsArn
        value: '{{ DataProtectionSettingsArn }}'
      - name: DisplayName
        value: '{{ DisplayName }}'
      - name: InstanceType
        value: '{{ InstanceType }}'
      - name: IpAccessSettingsArn
        value: '{{ IpAccessSettingsArn }}'
      - name: MaxConcurrentSessions
        value: null
      - name: NetworkSettingsArn
        value: '{{ NetworkSettingsArn }}'
      - name: SessionLoggerArn
        value: '{{ SessionLoggerArn }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: TrustStoreArn
        value: '{{ TrustStoreArn }}'
      - name: UserAccessLoggingSettingsArn
        value: '{{ UserAccessLoggingSettingsArn }}'
      - name: UserSettingsArn
        value: '{{ UserSettingsArn }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.workspacesweb.portals
WHERE data__Identifier = '<PortalArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>portals</code> resource, the following permissions are required:

### Create
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

### Read
```json
workspaces-web:GetPortal*,
workspaces-web:List*,
kms:Decrypt,
kms:DescribeKey
```

### Update
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

### Delete
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

### List
```json
workspaces-web:List*,
kms:Decrypt,
kms:DescribeKey
```
