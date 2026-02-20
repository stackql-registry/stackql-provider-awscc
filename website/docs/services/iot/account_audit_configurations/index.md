---
title: account_audit_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - account_audit_configurations
  - iot
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

Creates, updates, deletes or gets an <code>account_audit_configuration</code> resource or lists <code>account_audit_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>account_audit_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Configures the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iot.account_audit_configurations" /></td></tr>
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
    "name": "account_id",
    "type": "string",
    "description": "Your 12-digit account ID (used as the primary identifier for the CloudFormation resource)."
  },
  {
    "name": "audit_check_configurations",
    "type": "object",
    "description": "Specifies which audit checks are enabled and disabled for this account.",
    "children": [
      {
        "name": "authenticated_cognito_role_overly_permissive_check",
        "type": "object",
        "description": "The configuration for a specific audit check.",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": "True if the check is enabled."
          }
        ]
      },
      {
        "name": "device_certificate_expiring_check",
        "type": "object",
        "description": "A structure containing the configName and corresponding configValue for configuring DeviceCertExpirationCheck.",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": "True if the check is enabled."
          },
          {
            "name": "configuration",
            "type": "object",
            "description": "A structure containing the configName and corresponding configValue for configuring audit checks.",
            "children": [
              {
                "name": "cert_expiration_threshold_in_days",
                "type": "string",
                "description": "The configValue for configuring audit checks."
              }
            ]
          }
        ]
      },
      {
        "name": "device_certificate_age_check",
        "type": "object",
        "description": "A structure containing the configName and corresponding configValue for configuring DeviceCertAgeCheck.",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": "True if the check is enabled."
          },
          {
            "name": "configuration",
            "type": "object",
            "description": "A structure containing the configName and corresponding configValue for configuring audit checks.",
            "children": [
              {
                "name": "cert_age_threshold_in_days",
                "type": "string",
                "description": "The configValue for configuring audit checks."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "audit_notification_target_configurations",
    "type": "object",
    "description": "Information about the targets to which audit notifications are sent.",
    "children": [
      {
        "name": "sns",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "target_arn",
            "type": "string",
            "description": "The ARN of the target (SNS topic) to which audit notifications are sent."
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": "The ARN of the role that grants permission to send notifications to the target."
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": "True if notifications to the target are enabled."
          }
        ]
      }
    ]
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The ARN of the role that grants permission to AWS IoT to access information about your devices, policies, certificates and other items as required when performing an audit."
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
    "name": "account_id",
    "type": "string",
    "description": "Your 12-digit account ID (used as the primary identifier for the CloudFormation resource)."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html"><code>AWS::IoT::AccountAuditConfiguration</code></a>.

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
    <td><code>account_audit_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AccountId, AuditCheckConfigurations, RoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>account_audit_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>account_audit_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>account_audit_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>account_audit_configurations</code></td>
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

Gets all properties from an individual <code>account_audit_configuration</code>.
```sql
SELECT
region,
account_id,
audit_check_configurations,
audit_notification_target_configurations,
role_arn
FROM awscc.iot.account_audit_configurations
WHERE region = 'us-east-1' AND Identifier = '<AccountId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>account_audit_configurations</code> in a region.
```sql
SELECT
region,
account_id
FROM awscc.iot.account_audit_configurations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>account_audit_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iot.account_audit_configurations (
 AccountId,
 AuditCheckConfigurations,
 RoleArn,
 region
)
SELECT 
'{{ AccountId }}',
 '{{ AuditCheckConfigurations }}',
 '{{ RoleArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iot.account_audit_configurations (
 AccountId,
 AuditCheckConfigurations,
 AuditNotificationTargetConfigurations,
 RoleArn,
 region
)
SELECT 
 '{{ AccountId }}',
 '{{ AuditCheckConfigurations }}',
 '{{ AuditNotificationTargetConfigurations }}',
 '{{ RoleArn }}',
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
  - name: account_audit_configuration
    props:
      - name: AccountId
        value: '{{ AccountId }}'
      - name: AuditCheckConfigurations
        value:
          AuthenticatedCognitoRoleOverlyPermissiveCheck:
            Enabled: '{{ Enabled }}'
          CaCertificateExpiringCheck: null
          CaCertificateKeyQualityCheck: null
          ConflictingClientIdsCheck: null
          DeviceCertificateExpiringCheck:
            Enabled: '{{ Enabled }}'
            Configuration:
              CertExpirationThresholdInDays: '{{ CertExpirationThresholdInDays }}'
          DeviceCertificateKeyQualityCheck: null
          DeviceCertificateSharedCheck: null
          IotPolicyOverlyPermissiveCheck: null
          IotRoleAliasAllowsAccessToUnusedServicesCheck: null
          IotRoleAliasOverlyPermissiveCheck: null
          LoggingDisabledCheck: null
          RevokedCaCertificateStillActiveCheck: null
          RevokedDeviceCertificateStillActiveCheck: null
          UnauthenticatedCognitoRoleOverlyPermissiveCheck: null
          IntermediateCaRevokedForActiveDeviceCertificatesCheck: null
          IoTPolicyPotentialMisConfigurationCheck: null
          DeviceCertificateAgeCheck:
            Enabled: '{{ Enabled }}'
            Configuration:
              CertAgeThresholdInDays: null
      - name: AuditNotificationTargetConfigurations
        value:
          Sns:
            TargetArn: '{{ TargetArn }}'
            RoleArn: '{{ RoleArn }}'
            Enabled: '{{ Enabled }}'
      - name: RoleArn
        value: '{{ RoleArn }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.iot.account_audit_configurations
SET PatchDocument = string('{{ {
    "AuditCheckConfigurations": audit_check_configurations,
    "AuditNotificationTargetConfigurations": audit_notification_target_configurations,
    "RoleArn": role_arn
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<AccountId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.account_audit_configurations
WHERE Identifier = '<AccountId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>account_audit_configurations</code> resource, the following permissions are required:

### Create
```json
iot:UpdateAccountAuditConfiguration,
iot:DescribeAccountAuditConfiguration,
iam:PassRole
```

### Read
```json
iot:DescribeAccountAuditConfiguration
```

### Update
```json
iot:UpdateAccountAuditConfiguration,
iot:DescribeAccountAuditConfiguration,
iam:PassRole
```

### Delete
```json
iot:DescribeAccountAuditConfiguration,
iot:DeleteAccountAuditConfiguration
```

### List
```json
iot:DescribeAccountAuditConfiguration
```
