---
title: backup_vaults
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_vaults
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

Creates, updates, deletes or gets a <code>backup_vault</code> resource or lists <code>backup_vaults</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>backup_vaults</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Backup::BackupVault</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.backup.backup_vaults" /></td></tr>
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
    "name": "access_policy",
    "type": "object",
    "description": ""
  },
  {
    "name": "backup_vault_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "backup_vault_tags",
    "type": "object",
    "description": ""
  },
  {
    "name": "encryption_key_arn",
    "type": "string",
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
    "name": "lock_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "min_retention_days",
        "type": "integer",
        "description": ""
      },
      {
        "name": "max_retention_days",
        "type": "integer",
        "description": ""
      },
      {
        "name": "changeable_for_days",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "backup_vault_arn",
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
    "name": "backup_vault_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html"><code>AWS::Backup::BackupVault</code></a>.

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
    <td><code>backup_vaults</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="BackupVaultName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>backup_vaults</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>backup_vaults</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>backup_vaults_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>backup_vaults</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>backup_vault</code>.
```sql
SELECT
region,
access_policy,
backup_vault_name,
backup_vault_tags,
encryption_key_arn,
notifications,
lock_configuration,
backup_vault_arn
FROM awscc.backup.backup_vaults
WHERE region = 'us-east-1' AND data__Identifier = '<BackupVaultName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>backup_vaults</code> in a region.
```sql
SELECT
region,
backup_vault_name
FROM awscc.backup.backup_vaults_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>backup_vault</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.backup.backup_vaults (
 BackupVaultName,
 region
)
SELECT 
'{{ BackupVaultName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.backup.backup_vaults (
 AccessPolicy,
 BackupVaultName,
 BackupVaultTags,
 EncryptionKeyArn,
 Notifications,
 LockConfiguration,
 region
)
SELECT 
 '{{ AccessPolicy }}',
 '{{ BackupVaultName }}',
 '{{ BackupVaultTags }}',
 '{{ EncryptionKeyArn }}',
 '{{ Notifications }}',
 '{{ LockConfiguration }}',
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
  - name: backup_vault
    props:
      - name: AccessPolicy
        value: {}
      - name: BackupVaultName
        value: '{{ BackupVaultName }}'
      - name: BackupVaultTags
        value: {}
      - name: EncryptionKeyArn
        value: '{{ EncryptionKeyArn }}'
      - name: Notifications
        value:
          SNSTopicArn: '{{ SNSTopicArn }}'
          BackupVaultEvents:
            - '{{ BackupVaultEvents[0] }}'
      - name: LockConfiguration
        value:
          MinRetentionDays: '{{ MinRetentionDays }}'
          MaxRetentionDays: '{{ MaxRetentionDays }}'
          ChangeableForDays: '{{ ChangeableForDays }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.backup.backup_vaults
SET data__PatchDocument = string('{{ {
    "AccessPolicy": access_policy,
    "BackupVaultTags": backup_vault_tags,
    "Notifications": notifications,
    "LockConfiguration": lock_configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<BackupVaultName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.backup.backup_vaults
WHERE data__Identifier = '<BackupVaultName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>backup_vaults</code> resource, the following permissions are required:

### Create
```json
backup:TagResource,
backup:CreateBackupVault,
backup:PutBackupVaultAccessPolicy,
backup:PutBackupVaultNotifications,
backup:PutBackupVaultLockConfiguration,
backup-storage:Mount,
backup-storage:MountCapsule,
kms:CreateGrant,
kms:GenerateDataKey,
kms:Decrypt,
kms:RetireGrant,
kms:DescribeKey
```

### Read
```json
backup:DescribeBackupVault,
backup:GetBackupVaultNotifications,
backup:GetBackupVaultAccessPolicy,
backup:ListTags
```

### Update
```json
backup:DescribeBackupVault,
backup:DeleteBackupVaultAccessPolicy,
backup:DeleteBackupVaultNotifications,
backup:DeleteBackupVaultLockConfiguration,
backup:ListTags,
backup:TagResource,
backup:UntagResource,
backup:PutBackupVaultAccessPolicy,
backup:PutBackupVaultNotifications,
backup:PutBackupVaultLockConfiguration
```

### Delete
```json
backup:DeleteBackupVault
```

### List
```json
backup:ListBackupVaults
```
