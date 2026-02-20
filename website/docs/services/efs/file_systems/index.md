---
title: file_systems
hide_title: false
hide_table_of_contents: false
keywords:
  - file_systems
  - efs
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

Creates, updates, deletes or gets a <code>file_system</code> resource or lists <code>file_systems</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>file_systems</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::EFS::FileSystem&#96;&#96; resource creates a new, empty file system in EFSlong (EFS). You must create a mount target (&#91;AWS::EFS::MountTarget&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html)) to mount your EFS file system on an EC2 or other AWS cloud compute resource.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.efs.file_systems" /></td></tr>
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
    "name": "file_system_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "encrypted",
    "type": "boolean",
    "description": "A Boolean value that, if true, creates an encrypted file system. When creating an encrypted file system, you have the option of specifying a KmsKeyId for an existing kms-key-long. If you don't specify a kms-key, then the default kms-key for EFS, &#96;&#96;/aws/elasticfilesystem&#96;&#96;, is used to protect the encrypted file system."
  },
  {
    "name": "file_system_tags",
    "type": "array",
    "description": "Use to create one or more tags associated with the file system. Each tag is a user-defined key-value pair. Name your file system on creation by including a &#96;&#96;\"Key\":\"Name\",\"Value\":\"&#123;value&#125;\"&#96;&#96; key-value pair. Each key must be unique. For more information, see &#91;Tagging resources&#93;(https://docs.aws.amazon.com/general/latest/gr/aws&#95;tagging.html) in the &#42;General Reference Guide&#42;.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The tag key (String). The key can't start with &#96;&#96;aws:&#96;&#96;."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value of the tag key."
      }
    ]
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "The ID of the kms-key-long to be used to protect the encrypted file system. This parameter is only required if you want to use a nondefault kms-key. If this parameter is not specified, the default kms-key for EFS is used. This ID can be in one of the following formats:<br />+ Key ID - A unique identifier of the key, for example &#96;&#96;1234abcd-12ab-34cd-56ef-1234567890ab&#96;&#96;.<br />+ ARN - An Amazon Resource Name (ARN) for the key, for example &#96;&#96;arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab&#96;&#96;.<br />+ Key alias - A previously created display name for a key, for example &#96;&#96;alias/projectKey1&#96;&#96;.<br />+ Key alias ARN - An ARN for a key alias, for example &#96;&#96;arn:aws:kms:us-west-2:444455556666:alias/projectKey1&#96;&#96;.<br /><br />If &#96;&#96;KmsKeyId&#96;&#96; is specified, the &#96;&#96;Encrypted&#96;&#96; parameter must be set to true."
  },
  {
    "name": "lifecycle_policies",
    "type": "array",
    "description": "An array of &#96;&#96;LifecyclePolicy&#96;&#96; objects that define the file system's &#96;&#96;LifecycleConfiguration&#96;&#96; object. A &#96;&#96;LifecycleConfiguration&#96;&#96; object informs Lifecycle management of the following:<br />+ When to move files in the file system from primary storage to IA storage.<br />+ When to move files in the file system from primary storage or IA storage to Archive storage.<br />+ When to move files that are in IA or Archive storage to primary storage.<br /><br />EFS requires that each &#96;&#96;LifecyclePolicy&#96;&#96; object have only a single transition. This means that in a request body, &#96;&#96;LifecyclePolicies&#96;&#96; needs to be structured as an array of &#96;&#96;LifecyclePolicy&#96;&#96; objects, one object for each transition, &#96;&#96;TransitionToIA&#96;&#96;, &#96;&#96;TransitionToArchive&#96;&#96;&#96;&#96;TransitionToPrimaryStorageClass&#96;&#96;. See the example requests in the following section for more information.",
    "children": [
      {
        "name": "transition_to_ia",
        "type": "string",
        "description": "The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Infrequent Access (IA) storage. Metadata operations such as listing the contents of a directory don't count as file access events."
      },
      {
        "name": "transition_to_primary_storage_class",
        "type": "string",
        "description": "Whether to move files back to primary (Standard) storage after they are accessed in IA or Archive storage. Metadata operations such as listing the contents of a directory don't count as file access events."
      },
      {
        "name": "transition_to_archive",
        "type": "string",
        "description": "The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Archive storage. Metadata operations such as listing the contents of a directory don't count as file access events."
      }
    ]
  },
  {
    "name": "file_system_protection",
    "type": "object",
    "description": "Describes the protection on the file system.",
    "children": [
      {
        "name": "replication_overwrite_protection",
        "type": "string",
        "description": "The status of the file system's replication overwrite protection.<br />+ &#96;&#96;ENABLED&#96;&#96; – The file system cannot be used as the destination file system in a replication configuration. The file system is writeable. Replication overwrite protection is &#96;&#96;ENABLED&#96;&#96; by default. <br />+ &#96;&#96;DISABLED&#96;&#96; – The file system can be used as the destination file system in a replication configuration. The file system is read-only and can only be modified by EFS replication.<br />+ &#96;&#96;REPLICATING&#96;&#96; – The file system is being used as the destination file system in a replication configuration. The file system is read-only and is modified only by EFS replication.<br /><br />If the replication configuration is deleted, the file system's replication overwrite protection is re-enabled, the file system becomes writeable."
      }
    ]
  },
  {
    "name": "performance_mode",
    "type": "string",
    "description": "The performance mode of the file system. We recommend &#96;&#96;generalPurpose&#96;&#96; performance mode for all file systems. File systems using the &#96;&#96;maxIO&#96;&#96; performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. The &#96;&#96;maxIO&#96;&#96; mode is not supported on One Zone file systems.<br />Due to the higher per-operation latencies with Max I/O, we recommend using General Purpose performance mode for all file systems.<br />Default is &#96;&#96;generalPurpose&#96;&#96;."
  },
  {
    "name": "provisioned_throughput_in_mibps",
    "type": "number",
    "description": "The throughput, measured in mebibytes per second (MiBps), that you want to provision for a file system that you're creating. Required if &#96;&#96;ThroughputMode&#96;&#96; is set to &#96;&#96;provisioned&#96;&#96;. Valid values are 1-3414 MiBps, with the upper limit depending on Region. To increase this limit, contact SUP. For more information, see &#91;Amazon EFS quotas that you can increase&#93;(https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits) in the &#42;Amazon EFS User Guide&#42;."
  },
  {
    "name": "throughput_mode",
    "type": "string",
    "description": "Specifies the throughput mode for the file system. The mode can be &#96;&#96;bursting&#96;&#96;, &#96;&#96;provisioned&#96;&#96;, or &#96;&#96;elastic&#96;&#96;. If you set &#96;&#96;ThroughputMode&#96;&#96; to &#96;&#96;provisioned&#96;&#96;, you must also set a value for &#96;&#96;ProvisionedThroughputInMibps&#96;&#96;. After you create the file system, you can decrease your file system's Provisioned throughput or change between the throughput modes, with certain time restrictions. For more information, see &#91;Specifying throughput with provisioned mode&#93;(https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput) in the &#42;Amazon EFS User Guide&#42;. <br />Default is &#96;&#96;bursting&#96;&#96;."
  },
  {
    "name": "file_system_policy",
    "type": "object",
    "description": "The &#96;&#96;FileSystemPolicy&#96;&#96; for the EFS file system. A file system policy is an IAM resource policy used to control NFS access to an EFS file system. For more information, see &#91;Using to control NFS access to Amazon EFS&#93;(https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html) in the &#42;Amazon EFS User Guide&#42;."
  },
  {
    "name": "bypass_policy_lockout_safety_check",
    "type": "boolean",
    "description": "(Optional) A boolean that specifies whether or not to bypass the &#96;&#96;FileSystemPolicy&#96;&#96; lockout safety check. The lockout safety check determines whether the policy in the request will lock out, or prevent, the IAM principal that is making the request from making future &#96;&#96;PutFileSystemPolicy&#96;&#96; requests on this file system. Set &#96;&#96;BypassPolicyLockoutSafetyCheck&#96;&#96; to &#96;&#96;True&#96;&#96; only when you intend to prevent the IAM principal that is making the request from making subsequent &#96;&#96;PutFileSystemPolicy&#96;&#96; requests on this file system. The default value is &#96;&#96;False&#96;&#96;."
  },
  {
    "name": "backup_policy",
    "type": "object",
    "description": "Use the &#96;&#96;BackupPolicy&#96;&#96; to turn automatic backups on or off for the file system.",
    "children": [
      {
        "name": "status",
        "type": "string",
        "description": "Set the backup policy status for the file system.<br />+ &#42;ENABLED&#42; - Turns automatic backups on for the file system. <br />+ &#42;DISABLED&#42; - Turns automatic backups off for the file system."
      }
    ]
  },
  {
    "name": "availability_zone_name",
    "type": "string",
    "description": "For One Zone file systems, specify the AWS Availability Zone in which to create the file system. Use the format &#96;&#96;us-east-1a&#96;&#96; to specify the Availability Zone. For more information about One Zone file systems, see &#91;EFS file system types&#93;(https://docs.aws.amazon.com/efs/latest/ug/availability-durability.html#file-system-type) in the &#42;Amazon EFS User Guide&#42;.<br />One Zone file systems are not available in all Availability Zones in AWS-Regions where Amazon EFS is available."
  },
  {
    "name": "replication_configuration",
    "type": "object",
    "description": "Describes the replication configuration for a specific file system.",
    "children": [
      {
        "name": "destinations",
        "type": "array",
        "description": "An array of destination objects. Only one destination object is supported.",
        "children": [
          {
            "name": "status",
            "type": "string",
            "description": "Describes the status of the replication configuration. For more information about replication status, see &#91;Viewing replication details&#93;(https://docs.aws.amazon.com//efs/latest/ug/awsbackup.html#restoring-backup-efsmonitoring-replication-status.html) in the &#42;Amazon EFS User Guide&#42;."
          },
          {
            "name": "status_message",
            "type": "string",
            "description": "Message that provides details about the &#96;&#96;PAUSED&#96;&#96; or &#96;&#96;ERRROR&#96;&#96; state of the replication destination configuration. For more information about replication status messages, see &#91;Viewing replication details&#93;(https://docs.aws.amazon.com//efs/latest/ug/awsbackup.html#restoring-backup-efsmonitoring-replication-status.html) in the &#42;Amazon EFS User Guide&#42;."
          },
          {
            "name": "file_system_id",
            "type": "string",
            "description": "The ID of the destination Amazon EFS file system."
          },
          {
            "name": "region",
            "type": "string",
            "description": "The AWS-Region in which the destination file system is located.<br />For One Zone file systems, the replication configuration must specify the AWS-Region in which the destination file system is located."
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the current source file system in the replication configuration."
          },
          {
            "name": "availability_zone_name",
            "type": "string",
            "description": "For One Zone file systems, the replication configuration must specify the Availability Zone in which the destination file system is located. <br />Use the format &#96;&#96;us-east-1a&#96;&#96; to specify the Availability Zone. For more information about One Zone file systems, see &#91;EFS file system types&#93;(https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html) in the &#42;Amazon EFS User Guide&#42;.<br />One Zone file system type is not available in all Availability Zones in AWS-Regions where Amazon EFS is available."
          },
          {
            "name": "kms_key_id",
            "type": "string",
            "description": "The ID of an kms-key-long used to protect the encrypted file system."
          }
        ]
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
    "name": "file_system_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html"><code>AWS::EFS::FileSystem</code></a>.

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
    <td><code>file_systems</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>file_systems</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>file_systems</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>file_systems_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>file_systems</code></td>
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

Gets all properties from an individual <code>file_system</code>.
```sql
SELECT
region,
file_system_id,
arn,
encrypted,
file_system_tags,
kms_key_id,
lifecycle_policies,
file_system_protection,
performance_mode,
provisioned_throughput_in_mibps,
throughput_mode,
file_system_policy,
bypass_policy_lockout_safety_check,
backup_policy,
availability_zone_name,
replication_configuration
FROM awscc.efs.file_systems
WHERE region = 'us-east-1' AND Identifier = '<FileSystemId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>file_systems</code> in a region.
```sql
SELECT
region,
file_system_id
FROM awscc.efs.file_systems_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>file_system</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.efs.file_systems (
 Encrypted,
 FileSystemTags,
 KmsKeyId,
 LifecyclePolicies,
 FileSystemProtection,
 PerformanceMode,
 ProvisionedThroughputInMibps,
 ThroughputMode,
 FileSystemPolicy,
 BypassPolicyLockoutSafetyCheck,
 BackupPolicy,
 AvailabilityZoneName,
 ReplicationConfiguration,
 region
)
SELECT 
'{{ Encrypted }}',
 '{{ FileSystemTags }}',
 '{{ KmsKeyId }}',
 '{{ LifecyclePolicies }}',
 '{{ FileSystemProtection }}',
 '{{ PerformanceMode }}',
 '{{ ProvisionedThroughputInMibps }}',
 '{{ ThroughputMode }}',
 '{{ FileSystemPolicy }}',
 '{{ BypassPolicyLockoutSafetyCheck }}',
 '{{ BackupPolicy }}',
 '{{ AvailabilityZoneName }}',
 '{{ ReplicationConfiguration }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.efs.file_systems (
 Encrypted,
 FileSystemTags,
 KmsKeyId,
 LifecyclePolicies,
 FileSystemProtection,
 PerformanceMode,
 ProvisionedThroughputInMibps,
 ThroughputMode,
 FileSystemPolicy,
 BypassPolicyLockoutSafetyCheck,
 BackupPolicy,
 AvailabilityZoneName,
 ReplicationConfiguration,
 region
)
SELECT 
 '{{ Encrypted }}',
 '{{ FileSystemTags }}',
 '{{ KmsKeyId }}',
 '{{ LifecyclePolicies }}',
 '{{ FileSystemProtection }}',
 '{{ PerformanceMode }}',
 '{{ ProvisionedThroughputInMibps }}',
 '{{ ThroughputMode }}',
 '{{ FileSystemPolicy }}',
 '{{ BypassPolicyLockoutSafetyCheck }}',
 '{{ BackupPolicy }}',
 '{{ AvailabilityZoneName }}',
 '{{ ReplicationConfiguration }}',
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
  - name: file_system
    props:
      - name: Encrypted
        value: '{{ Encrypted }}'
      - name: FileSystemTags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: KmsKeyId
        value: '{{ KmsKeyId }}'
      - name: LifecyclePolicies
        value:
          - TransitionToIA: '{{ TransitionToIA }}'
            TransitionToPrimaryStorageClass: '{{ TransitionToPrimaryStorageClass }}'
            TransitionToArchive: '{{ TransitionToArchive }}'
      - name: FileSystemProtection
        value:
          ReplicationOverwriteProtection: '{{ ReplicationOverwriteProtection }}'
      - name: PerformanceMode
        value: '{{ PerformanceMode }}'
      - name: ProvisionedThroughputInMibps
        value: null
      - name: ThroughputMode
        value: '{{ ThroughputMode }}'
      - name: FileSystemPolicy
        value: {}
      - name: BypassPolicyLockoutSafetyCheck
        value: '{{ BypassPolicyLockoutSafetyCheck }}'
      - name: BackupPolicy
        value:
          Status: '{{ Status }}'
      - name: AvailabilityZoneName
        value: '{{ AvailabilityZoneName }}'
      - name: ReplicationConfiguration
        value:
          Destinations:
            - Status: '{{ Status }}'
              StatusMessage: '{{ StatusMessage }}'
              FileSystemId: '{{ FileSystemId }}'
              Region: '{{ Region }}'
              RoleArn: '{{ RoleArn }}'
              AvailabilityZoneName: '{{ AvailabilityZoneName }}'
              KmsKeyId: '{{ KmsKeyId }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.efs.file_systems
SET PatchDocument = string('{{ {
    "FileSystemTags": file_system_tags,
    "LifecyclePolicies": lifecycle_policies,
    "FileSystemProtection": file_system_protection,
    "ProvisionedThroughputInMibps": provisioned_throughput_in_mibps,
    "ThroughputMode": throughput_mode,
    "FileSystemPolicy": file_system_policy,
    "BypassPolicyLockoutSafetyCheck": bypass_policy_lockout_safety_check,
    "BackupPolicy": backup_policy
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<FileSystemId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.efs.file_systems
WHERE Identifier = '<FileSystemId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>file_systems</code> resource, the following permissions are required:

### Create
```json
elasticfilesystem:CreateFileSystem,
elasticfilesystem:DescribeReplicationConfigurations,
elasticfilesystem:TagResource,
elasticfilesystem:CreateReplicationConfiguration,
elasticfilesystem:DescribeFileSystems,
elasticfilesystem:PutBackupPolicy,
elasticfilesystem:PutFileSystemPolicy,
elasticfilesystem:PutLifecycleConfiguration,
elasticfilesystem:UpdateFileSystemProtection,
kms:DescribeKey,
kms:GenerateDataKeyWithoutPlaintext,
kms:CreateGrant,
iam:PassRole,
iam:CreateServiceLinkedRole
```

### Read
```json
elasticfilesystem:DescribeBackupPolicy,
elasticfilesystem:DescribeFileSystemPolicy,
elasticfilesystem:DescribeFileSystems,
elasticfilesystem:DescribeLifecycleConfiguration,
elasticfilesystem:DescribeReplicationConfigurations
```

### Update
```json
elasticfilesystem:CreateReplicationConfiguration,
elasticfilesystem:DeleteFileSystemPolicy,
elasticfilesystem:DescribeBackupPolicy,
elasticfilesystem:DescribeFileSystemPolicy,
elasticfilesystem:DescribeFileSystems,
elasticfilesystem:DescribeLifecycleConfiguration,
elasticfilesystem:DescribeReplicationConfigurations,
elasticfilesystem:DeleteTags,
elasticfilesystem:DeleteReplicationConfiguration,
elasticfilesystem:ListTagsForResource,
elasticfilesystem:PutBackupPolicy,
elasticfilesystem:PutFileSystemPolicy,
elasticfilesystem:PutLifecycleConfiguration,
elasticfilesystem:TagResource,
elasticfilesystem:UntagResource,
elasticfilesystem:UpdateFileSystem,
elasticfilesystem:UpdateFileSystemProtection,
kms:DescribeKey,
kms:GenerateDataKeyWithoutPlaintext,
kms:CreateGrant,
iam:PassRole,
iam:CreateServiceLinkedRole
```

### Delete
```json
elasticfilesystem:DescribeFileSystems,
elasticfilesystem:DeleteFileSystem,
elasticfilesystem:DeleteReplicationConfiguration,
elasticfilesystem:DescribeReplicationConfigurations
```

### List
```json
elasticfilesystem:DescribeBackupPolicy,
elasticfilesystem:DescribeFileSystemPolicy,
elasticfilesystem:DescribeFileSystems,
elasticfilesystem:DescribeLifecycleConfiguration,
elasticfilesystem:DescribeReplicationConfigurations
```
