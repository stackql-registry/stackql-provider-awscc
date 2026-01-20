---
title: logically_air_gapped_backup_vaults
hide_title: false
hide_table_of_contents: false
keywords:
  - logically_air_gapped_backup_vaults
  - backup
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

Creates, updates, deletes or gets a <code>logically_air_gapped_backup_vault</code> resource or lists <code>logically_air_gapped_backup_vaults</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>logically_air_gapped_backup_vaults</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Backup::LogicallyAirGappedBackupVault</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.backup.logically_air_gapped_backup_vaults" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "vault_state",
    "type": "string",
    "description": ""
  },
  {
    "name": "backup_vault_tags",
    "type": "object",
    "description": ""
  },
  {
    "name": "vault_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "backup_vault_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "backup_vault_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "encryption_key_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "max_retention_days",
    "type": "integer",
    "description": ""
  },
  {
    "name": "min_retention_days",
    "type": "integer",
    "description": ""
  },
  {
    "name": "notifications",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "sns_topic_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "backup_vault_events",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "access_policy",
    "type": "object",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-logicallyairgappedbackupvault.html"><code>AWS::Backup::LogicallyAirGappedBackupVault</code></a>.

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
    <td><CopyableCode code="BackupVaultName, MinRetentionDays, MaxRetentionDays, region" /></td>
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

Gets all properties from an individual <code>logically_air_gapped_backup_vault</code>.
```sql
SELECT
region,
vault_state,
backup_vault_tags,
vault_type,
backup_vault_name,
backup_vault_arn,
encryption_key_arn,
max_retention_days,
min_retention_days,
notifications,
access_policy
FROM awscc.backup.logically_air_gapped_backup_vaults
WHERE region = 'us-east-1' AND data__Identifier = '<BackupVaultName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>logically_air_gapped_backup_vault</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.backup.logically_air_gapped_backup_vaults (
 BackupVaultName,
 MaxRetentionDays,
 MinRetentionDays,
 region
)
SELECT 
'{{ BackupVaultName }}',
 '{{ MaxRetentionDays }}',
 '{{ MinRetentionDays }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.backup.logically_air_gapped_backup_vaults (
 BackupVaultTags,
 BackupVaultName,
 MaxRetentionDays,
 MinRetentionDays,
 Notifications,
 AccessPolicy,
 region
)
SELECT 
 '{{ BackupVaultTags }}',
 '{{ BackupVaultName }}',
 '{{ MaxRetentionDays }}',
 '{{ MinRetentionDays }}',
 '{{ Notifications }}',
 '{{ AccessPolicy }}',
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
  - name: logically_air_gapped_backup_vault
    props:
      - name: BackupVaultTags
        value: {}
      - name: BackupVaultName
        value: '{{ BackupVaultName }}'
      - name: MaxRetentionDays
        value: '{{ MaxRetentionDays }}'
      - name: MinRetentionDays
        value: '{{ MinRetentionDays }}'
      - name: Notifications
        value:
          SNSTopicArn: '{{ SNSTopicArn }}'
          BackupVaultEvents:
            - '{{ BackupVaultEvents[0] }}'
      - name: AccessPolicy
        value: {}

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.backup.logically_air_gapped_backup_vaults
WHERE data__Identifier = '<BackupVaultName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>logically_air_gapped_backup_vaults</code> resource, the following permissions are required:

### Read
```json
backup:DescribeBackupVault,
backup:GetBackupVaultNotifications,
backup:GetBackupVaultAccessPolicy,
backup:ListTags
```

### Create
```json
backup:TagResource,
backup:CreateLogicallyAirGappedBackupVault,
backup:PutBackupVaultAccessPolicy,
backup:PutBackupVaultNotifications,
backup-storage:Mount,
backup-storage:MountCapsule,
backup:DescribeBackupVault
```

### Update
```json
backup:DescribeBackupVault,
backup:DeleteBackupVaultAccessPolicy,
backup:DeleteBackupVaultNotifications,
backup:DeleteBackupVaultLockConfiguration,
backup:GetBackupVaultAccessPolicy,
backup:ListTags,
backup:TagResource,
backup:UntagResource,
backup:PutBackupVaultAccessPolicy,
backup:PutBackupVaultNotifications,
backup:PutBackupVaultLockConfiguration
```

### List
```json
backup:ListBackupVaults
```

### Delete
```json
backup:DeleteBackupVault
```
