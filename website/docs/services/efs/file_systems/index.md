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
<tr><td><b>Description</b></td><td>The <code>AWS::EFS::FileSystem</code> resource creates a new, empty file system in EFSlong (EFS). You must create a mount target (<a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html">AWS::EFS::MountTarget</a>) to mount your EFS file system on an EC2 or other AWS cloud compute resource.</td></tr>
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
    "description": "A Boolean value that, if true, creates an encrypted file system. When creating an encrypted file system, you have the option of specifying a KmsKeyId for an existing kms-key-long. If you don't specify a kms-key, then the default kms-key for EFS, <code>/aws/elasticfilesystem</code>, is used to protect the encrypted file system."
  },
  {
    "name": "file_system_tags",
    "type": "array",
    "description": "Use to create one or more tags associated with the file system. Each tag is a user-defined key-value pair. Name your file system on creation by including a <code>\"Key\":\"Name\",\"Value\":\"&#123;value&#125;\"</code> key-value pair. Each key must be unique. For more information, see <a href=\"https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html\">Tagging resources</a> in the <i>General Reference Guide</i>.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The tag key (String). The key can't start with <code>aws:</code>."
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
    "description": "<details><summary>The ID of the kms-key-long to be used to protect the encrypted file system. This parameter is only required if you want to use a nondefault kms-key. If this parameter is not specified, the default kms-key for EFS is used. This ID can be in one of the following formats:</summary>+  Key ID - A unique identifier of the key, for example <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>.<br />+  ARN - An Amazon Resource Name (ARN) for the key, for example <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.<br />+  Key alias - A previously created display name for a key, for example <code>alias/projectKey1</code>.<br />+  Key alias ARN - An ARN for a key alias, for example <code>arn:aws:kms:us-west-2:444455556666:alias/projectKey1</code>.<br />If <code>KmsKeyId</code> is specified, the <code>Encrypted</code> parameter must be set to true.</details>"
  },
  {
    "name": "lifecycle_policies",
    "type": "array",
    "description": "<details><summary>An array of <code>LifecyclePolicy</code> objects that define the file system's <code>LifecycleConfiguration</code> object. A <code>LifecycleConfiguration</code> object informs Lifecycle management of the following:</summary>+  When to move files in the file system from primary storage to IA storage.<br />+  When to move files in the file system from primary storage or IA storage to Archive storage.<br />+  When to move files that are in IA or Archive storage to primary storage.<br />EFS requires that each <code>LifecyclePolicy</code> object have only a single transition. This means that in a request body, <code>LifecyclePolicies</code> needs to be structured as an array of <code>LifecyclePolicy</code> objects, one object for each transition, <code>TransitionToIA</code>, <code>TransitionToArchive</code><code>TransitionToPrimaryStorageClass</code>. See the example requests in the following section for more information.</details>",
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
        "description": "<details><summary>The status of the file system's replication overwrite protection.</summary>+  <code>ENABLED</code> – The file system cannot be used as the destination file system in a replication configuration. The file system is writeable. Replication overwrite protection is <code>ENABLED</code> by default.<br />+  <code>DISABLED</code> – The file system can be used as the destination file system in a replication configuration. The file system is read-only and can only be modified by EFS replication.<br />+  <code>REPLICATING</code> – The file system is being used as the destination file system in a replication configuration. The file system is read-only and is modified only by EFS replication.<br />If the replication configuration is deleted, the file system's replication overwrite protection is re-enabled, the file system becomes writeable.</details>"
      }
    ]
  },
  {
    "name": "performance_mode",
    "type": "string",
    "description": "<details><summary>The performance mode of the file system. We recommend <code>generalPurpose</code> performance mode for all file systems. File systems using the <code>maxIO</code> performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. The <code>maxIO</code> mode is not supported on One Zone file systems.</summary>Due to the higher per-operation latencies with Max I/O, we recommend using General Purpose performance mode for all file systems.<br />Default is <code>generalPurpose</code>.</details>"
  },
  {
    "name": "provisioned_throughput_in_mibps",
    "type": "number",
    "description": "The throughput, measured in mebibytes per second (MiBps), that you want to provision for a file system that you're creating. Required if <code>ThroughputMode</code> is set to <code>provisioned</code>. Valid values are 1-3414 MiBps, with the upper limit depending on Region. To increase this limit, contact SUP. For more information, see <a href=\"https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits\">Amazon EFS quotas that you can increase</a> in the <i>Amazon EFS User Guide</i>."
  },
  {
    "name": "throughput_mode",
    "type": "string",
    "description": "<details><summary>Specifies the throughput mode for the file system. The mode can be <code>bursting</code>, <code>provisioned</code>, or <code>elastic</code>. If you set <code>ThroughputMode</code> to <code>provisioned</code>, you must also set a value for <code>ProvisionedThroughputInMibps</code>. After you create the file system, you can decrease your file system's Provisioned throughput or change between the throughput modes, with certain time restrictions. For more information, see <a href=\"https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput\">Specifying throughput with provisioned mode</a> in the <i>Amazon EFS User Guide</i>.</summary>Default is <code>bursting</code>.</details>"
  },
  {
    "name": "file_system_policy",
    "type": "object",
    "description": "The <code>FileSystemPolicy</code> for the EFS file system. A file system policy is an IAM resource policy used to control NFS access to an EFS file system. For more information, see <a href=\"https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html\">Using to control NFS access to Amazon EFS</a> in the <i>Amazon EFS User Guide</i>."
  },
  {
    "name": "bypass_policy_lockout_safety_check",
    "type": "boolean",
    "description": "(Optional) A boolean that specifies whether or not to bypass the <code>FileSystemPolicy</code> lockout safety check. The lockout safety check determines whether the policy in the request will lock out, or prevent, the IAM principal that is making the request from making future <code>PutFileSystemPolicy</code> requests on this file system. Set <code>BypassPolicyLockoutSafetyCheck</code> to <code>True</code> only when you intend to prevent the IAM principal that is making the request from making subsequent <code>PutFileSystemPolicy</code> requests on this file system. The default value is <code>False</code>."
  },
  {
    "name": "backup_policy",
    "type": "object",
    "description": "Use the <code>BackupPolicy</code> to turn automatic backups on or off for the file system.",
    "children": [
      {
        "name": "status",
        "type": "string",
        "description": "<details><summary>Set the backup policy status for the file system.</summary>+  <i>ENABLED</i> - Turns automatic backups on for the file system.<br />+  <i>DISABLED</i> - Turns automatic backups off for the file system.</details>"
      }
    ]
  },
  {
    "name": "availability_zone_name",
    "type": "string",
    "description": "<details><summary>For One Zone file systems, specify the AWS Availability Zone in which to create the file system. Use the format <code>us-east-1a</code> to specify the Availability Zone. For more information about One Zone file systems, see <a href=\"https://docs.aws.amazon.com/efs/latest/ug/availability-durability.html#file-system-type\">EFS file system types</a> in the <i>Amazon EFS User Guide</i>.</summary>One Zone file systems are not available in all Availability Zones in AWS-Regions where Amazon EFS is available.</details>"
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
            "description": "Describes the status of the replication configuration. For more information about replication status, see <a href=\"https://docs.aws.amazon.com//efs/latest/ug/awsbackup.html#restoring-backup-efsmonitoring-replication-status.html\">Viewing replication details</a> in the <i>Amazon EFS User Guide</i>."
          },
          {
            "name": "status_message",
            "type": "string",
            "description": "Message that provides details about the <code>PAUSED</code> or <code>ERRROR</code> state of the replication destination configuration. For more information about replication status messages, see <a href=\"https://docs.aws.amazon.com//efs/latest/ug/awsbackup.html#restoring-backup-efsmonitoring-replication-status.html\">Viewing replication details</a> in the <i>Amazon EFS User Guide</i>."
          },
          {
            "name": "file_system_id",
            "type": "string",
            "description": "The ID of the destination Amazon EFS file system."
          },
          {
            "name": "region",
            "type": "string",
            "description": "<details><summary>The AWS-Region in which the destination file system is located.</summary>For One Zone file systems, the replication configuration must specify the AWS-Region in which the destination file system is located.</details>"
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the current source file system in the replication configuration."
          },
          {
            "name": "availability_zone_name",
            "type": "string",
            "description": "<details><summary>For One Zone file systems, the replication configuration must specify the Availability Zone in which the destination file system is located.</summary>Use the format <code>us-east-1a</code> to specify the Availability Zone. For more information about One Zone file systems, see <a href=\"https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html\">EFS file system types</a> in the <i>Amazon EFS User Guide</i>.<br />One Zone file system type is not available in all Availability Zones in AWS-Regions where Amazon EFS is available.</details>"
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ file_system_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>file_systems</code> in a region.
```sql
SELECT
  region,
  file_system_id
FROM awscc.efs.file_systems_list_only
WHERE
  region = '{{ region }}';
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
  '{{ encrypted }}',
  '{{ file_system_tags }}',
  '{{ kms_key_id }}',
  '{{ lifecycle_policies }}',
  '{{ file_system_protection }}',
  '{{ performance_mode }}',
  '{{ provisioned_throughput_in_mibps }}',
  '{{ throughput_mode }}',
  '{{ file_system_policy }}',
  '{{ bypass_policy_lockout_safety_check }}',
  '{{ backup_policy }}',
  '{{ availability_zone_name }}',
  '{{ replication_configuration }}',
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
  '{{ encrypted }}',
  '{{ file_system_tags }}',
  '{{ kms_key_id }}',
  '{{ lifecycle_policies }}',
  '{{ file_system_protection }}',
  '{{ performance_mode }}',
  '{{ provisioned_throughput_in_mibps }}',
  '{{ throughput_mode }}',
  '{{ file_system_policy }}',
  '{{ bypass_policy_lockout_safety_check }}',
  '{{ backup_policy }}',
  '{{ availability_zone_name }}',
  '{{ replication_configuration }}',
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
      - name: encrypted
        value: '{{ encrypted }}'
      - name: file_system_tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: kms_key_id
        value: '{{ kms_key_id }}'
      - name: lifecycle_policies
        value:
          - transition_to_ia: '{{ transition_to_ia }}'
            transition_to_primary_storage_class: '{{ transition_to_primary_storage_class }}'
            transition_to_archive: '{{ transition_to_archive }}'
      - name: file_system_protection
        value:
          replication_overwrite_protection: '{{ replication_overwrite_protection }}'
      - name: performance_mode
        value: '{{ performance_mode }}'
      - name: provisioned_throughput_in_mibps
        value: null
      - name: throughput_mode
        value: '{{ throughput_mode }}'
      - name: file_system_policy
        value: {}
      - name: bypass_policy_lockout_safety_check
        value: '{{ bypass_policy_lockout_safety_check }}'
      - name: backup_policy
        value:
          status: '{{ status }}'
      - name: availability_zone_name
        value: '{{ availability_zone_name }}'
      - name: replication_configuration
        value:
          destinations:
            - status: '{{ status }}'
              status_message: '{{ status_message }}'
              file_system_id: '{{ file_system_id }}'
              region: '{{ region }}'
              role_arn: '{{ role_arn }}'
              availability_zone_name: '{{ availability_zone_name }}'
              kms_key_id: '{{ kms_key_id }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>file_system</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ file_system_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.efs.file_systems
WHERE
  Identifier = '{{ file_system_id }}' AND
  region = '{{ region }}';
```

## Permissions

To operate on the <code>file_systems</code> resource, the following permissions are required:

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

</TabItem>
<TabItem value="read">

```json
elasticfilesystem:DescribeBackupPolicy,
elasticfilesystem:DescribeFileSystemPolicy,
elasticfilesystem:DescribeFileSystems,
elasticfilesystem:DescribeLifecycleConfiguration,
elasticfilesystem:DescribeReplicationConfigurations
```

</TabItem>
<TabItem value="update">

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

</TabItem>
<TabItem value="delete">

```json
elasticfilesystem:DescribeFileSystems,
elasticfilesystem:DeleteFileSystem,
elasticfilesystem:DeleteReplicationConfiguration,
elasticfilesystem:DescribeReplicationConfigurations
```

</TabItem>
<TabItem value="list">

```json
elasticfilesystem:DescribeBackupPolicy,
elasticfilesystem:DescribeFileSystemPolicy,
elasticfilesystem:DescribeFileSystems,
elasticfilesystem:DescribeLifecycleConfiguration,
elasticfilesystem:DescribeReplicationConfigurations
```

</TabItem>
</Tabs>