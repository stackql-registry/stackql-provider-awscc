---
title: db_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - db_clusters
  - neptune
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

Creates, updates, deletes or gets a <code>db_cluster</code> resource or lists <code>db_clusters</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>db_clusters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::Neptune::DBCluster resource creates an Amazon Neptune DB cluster.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.neptune.db_clusters" /></td></tr>
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
    "name": "endpoint",
    "type": "string",
    "description": "The connection endpoint for the DB cluster. For example: &#96;mystack-mydbcluster-1apw1j4phylrk.cg034hpkmmjt.us-east-2.rds.amazonaws.com&#96;"
  },
  {
    "name": "read_endpoint",
    "type": "string",
    "description": "The reader endpoint for the DB cluster. For example: &#96;mystack-mydbcluster-ro-1apw1j4phylrk.cg034hpkmmjt.us-east-2.rds.amazonaws.com&#96;"
  },
  {
    "name": "cluster_resource_id",
    "type": "string",
    "description": "The resource id for the DB cluster. For example: &#96;cluster-ABCD1234EFGH5678IJKL90MNOP&#96;. The cluster ID uniquely identifies the cluster and is used in things like IAM authentication policies."
  },
  {
    "name": "associated_roles",
    "type": "array",
    "description": "Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster. IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services on your behalf.",
    "children": [
      {
        "name": "feature_name",
        "type": "string",
        "description": "The name of the feature associated with the AWS Identity and Access Management (IAM) role. For the list of supported feature names, see DBEngineVersion in the Amazon Neptune API Reference."
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster."
      }
    ]
  },
  {
    "name": "availability_zones",
    "type": "array",
    "description": "Provides the list of EC2 Availability Zones that instances in the DB cluster can be created in."
  },
  {
    "name": "backup_retention_period",
    "type": "integer",
    "description": "Specifies the number of days for which automatic DB snapshots are retained."
  },
  {
    "name": "copy_tags_to_snapshot",
    "type": "boolean",
    "description": "A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default behaviour is not to copy them."
  },
  {
    "name": "db_cluster_identifier",
    "type": "string",
    "description": "The DB cluster identifier. Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster stored as a lowercase string."
  },
  {
    "name": "db_cluster_parameter_group_name",
    "type": "string",
    "description": "Provides the name of the DB cluster parameter group."
  },
  {
    "name": "db_instance_parameter_group_name",
    "type": "string",
    "description": "The name of the DB parameter group to apply to all instances of the DB cluster. Used only in case of a major EngineVersion upgrade request."
  },
  {
    "name": "db_port",
    "type": "integer",
    "description": "The port number on which the DB instances in the DB cluster accept connections. <br />If not specified, the default port used is &#96;8182&#96;. <br />Note: &#96;Port&#96; property will soon be deprecated from this resource. Please update existing templates to rename it with new property &#96;DBPort&#96; having same functionalities."
  },
  {
    "name": "db_subnet_group_name",
    "type": "string",
    "description": "Specifies information on the subnet group associated with the DB cluster, including the name, description, and subnets in the subnet group."
  },
  {
    "name": "deletion_protection",
    "type": "boolean",
    "description": "Indicates whether or not the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled."
  },
  {
    "name": "enable_cloudwatch_logs_exports",
    "type": "array",
    "description": "Specifies a list of log types that are enabled for export to CloudWatch Logs."
  },
  {
    "name": "engine_version",
    "type": "string",
    "description": "Indicates the database engine version."
  },
  {
    "name": "iam_auth_enabled",
    "type": "boolean",
    "description": "True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false."
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef. If you enable the StorageEncrypted property but don't specify this property, the default KMS key is used. If you specify this property, you must set the StorageEncrypted property to true."
  },
  {
    "name": "port",
    "type": "string",
    "description": "The port number on which the DB cluster accepts connections. For example: &#96;8182&#96;."
  },
  {
    "name": "preferred_backup_window",
    "type": "string",
    "description": "Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod."
  },
  {
    "name": "preferred_maintenance_window",
    "type": "string",
    "description": "Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC)."
  },
  {
    "name": "restore_to_time",
    "type": "string",
    "description": "Creates a new DB cluster from a DB snapshot or DB cluster snapshot.<br />If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.<br />If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group."
  },
  {
    "name": "restore_type",
    "type": "string",
    "description": "Creates a new DB cluster from a DB snapshot or DB cluster snapshot.<br />If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.<br />If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group."
  },
  {
    "name": "serverless_scaling_configuration",
    "type": "object",
    "description": "Contains the scaling configuration used by the Neptune Serverless Instances within this DB cluster.",
    "children": [
      {
        "name": "min_capacity",
        "type": "number",
        "description": "The minimum number of Neptune capacity units (NCUs) for a DB instance in an Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 8, 8.5, 9, and so on. The smallest value you can use is 1, whereas the largest is 128."
      },
      {
        "name": "max_capacity",
        "type": "number",
        "description": "The maximum number of Neptune capacity units (NCUs) for a DB instance in an Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 40, 40.5, 41, and so on. The smallest value you can use is 2.5, whereas the largest is 128."
      }
    ]
  },
  {
    "name": "snapshot_identifier",
    "type": "string",
    "description": "Specifies the identifier for a DB cluster snapshot. Must match the identifier of an existing snapshot.<br />After you restore a DB cluster using a SnapshotIdentifier, you must specify the same SnapshotIdentifier for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed.<br />However, if you don't specify the SnapshotIdentifier, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, the DB cluster is restored from the snapshot specified by the SnapshotIdentifier, and the original DB cluster is deleted."
  },
  {
    "name": "source_db_cluster_identifier",
    "type": "string",
    "description": "Creates a new DB cluster from a DB snapshot or DB cluster snapshot.<br />If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.<br />If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group."
  },
  {
    "name": "storage_encrypted",
    "type": "boolean",
    "description": "Indicates whether the DB cluster is encrypted.<br />If you specify the KmsKeyId property, then you must enable encryption and set this property to true.<br />If you enable the StorageEncrypted property but don't specify KmsKeyId property, then the default KMS key is used. If you specify KmsKeyId property, then that KMS Key is used to encrypt the database instances in the DB cluster.<br />If you specify the SourceDBClusterIdentifier property and don't specify this property or disable it. The value is inherited from the source DB cluster, and if the DB cluster is encrypted, the KmsKeyId property from the source cluster is used.<br />If you specify the DBSnapshotIdentifier and don't specify this property or disable it. The value is inherited from the snapshot, and the specified KmsKeyId property from the snapshot is used."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags assigned to this cluster.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "use_latest_restorable_time",
    "type": "boolean",
    "description": "Creates a new DB cluster from a DB snapshot or DB cluster snapshot.<br />If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.<br />If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group."
  },
  {
    "name": "vpc_security_group_ids",
    "type": "array",
    "description": "Provides a list of VPC security groups that the DB cluster belongs to."
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
    "name": "db_cluster_identifier",
    "type": "string",
    "description": "The DB cluster identifier. Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster stored as a lowercase string."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html"><code>AWS::Neptune::DBCluster</code></a>.

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
    <td><code>db_clusters</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>db_clusters</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>db_clusters</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>db_clusters_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>db_clusters</code></td>
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

Gets all properties from an individual <code>db_cluster</code>.
```sql
SELECT
region,
endpoint,
read_endpoint,
cluster_resource_id,
associated_roles,
availability_zones,
backup_retention_period,
copy_tags_to_snapshot,
db_cluster_identifier,
db_cluster_parameter_group_name,
db_instance_parameter_group_name,
db_port,
db_subnet_group_name,
deletion_protection,
enable_cloudwatch_logs_exports,
engine_version,
iam_auth_enabled,
kms_key_id,
port,
preferred_backup_window,
preferred_maintenance_window,
restore_to_time,
restore_type,
serverless_scaling_configuration,
snapshot_identifier,
source_db_cluster_identifier,
storage_encrypted,
tags,
use_latest_restorable_time,
vpc_security_group_ids
FROM awscc.neptune.db_clusters
WHERE region = 'us-east-1' AND Identifier = '<DBClusterIdentifier>';
```
</TabItem>
<TabItem value="list">

Lists all <code>db_clusters</code> in a region.
```sql
SELECT
region,
db_cluster_identifier
FROM awscc.neptune.db_clusters_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>db_cluster</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.neptune.db_clusters (
 AssociatedRoles,
 AvailabilityZones,
 BackupRetentionPeriod,
 CopyTagsToSnapshot,
 DBClusterIdentifier,
 DBClusterParameterGroupName,
 DBInstanceParameterGroupName,
 DBPort,
 DBSubnetGroupName,
 DeletionProtection,
 EnableCloudwatchLogsExports,
 EngineVersion,
 IamAuthEnabled,
 KmsKeyId,
 PreferredBackupWindow,
 PreferredMaintenanceWindow,
 RestoreToTime,
 RestoreType,
 ServerlessScalingConfiguration,
 SnapshotIdentifier,
 SourceDBClusterIdentifier,
 StorageEncrypted,
 Tags,
 UseLatestRestorableTime,
 VpcSecurityGroupIds,
 region
)
SELECT 
'{{ AssociatedRoles }}',
 '{{ AvailabilityZones }}',
 '{{ BackupRetentionPeriod }}',
 '{{ CopyTagsToSnapshot }}',
 '{{ DBClusterIdentifier }}',
 '{{ DBClusterParameterGroupName }}',
 '{{ DBInstanceParameterGroupName }}',
 '{{ DBPort }}',
 '{{ DBSubnetGroupName }}',
 '{{ DeletionProtection }}',
 '{{ EnableCloudwatchLogsExports }}',
 '{{ EngineVersion }}',
 '{{ IamAuthEnabled }}',
 '{{ KmsKeyId }}',
 '{{ PreferredBackupWindow }}',
 '{{ PreferredMaintenanceWindow }}',
 '{{ RestoreToTime }}',
 '{{ RestoreType }}',
 '{{ ServerlessScalingConfiguration }}',
 '{{ SnapshotIdentifier }}',
 '{{ SourceDBClusterIdentifier }}',
 '{{ StorageEncrypted }}',
 '{{ Tags }}',
 '{{ UseLatestRestorableTime }}',
 '{{ VpcSecurityGroupIds }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.neptune.db_clusters (
 AssociatedRoles,
 AvailabilityZones,
 BackupRetentionPeriod,
 CopyTagsToSnapshot,
 DBClusterIdentifier,
 DBClusterParameterGroupName,
 DBInstanceParameterGroupName,
 DBPort,
 DBSubnetGroupName,
 DeletionProtection,
 EnableCloudwatchLogsExports,
 EngineVersion,
 IamAuthEnabled,
 KmsKeyId,
 PreferredBackupWindow,
 PreferredMaintenanceWindow,
 RestoreToTime,
 RestoreType,
 ServerlessScalingConfiguration,
 SnapshotIdentifier,
 SourceDBClusterIdentifier,
 StorageEncrypted,
 Tags,
 UseLatestRestorableTime,
 VpcSecurityGroupIds,
 region
)
SELECT 
 '{{ AssociatedRoles }}',
 '{{ AvailabilityZones }}',
 '{{ BackupRetentionPeriod }}',
 '{{ CopyTagsToSnapshot }}',
 '{{ DBClusterIdentifier }}',
 '{{ DBClusterParameterGroupName }}',
 '{{ DBInstanceParameterGroupName }}',
 '{{ DBPort }}',
 '{{ DBSubnetGroupName }}',
 '{{ DeletionProtection }}',
 '{{ EnableCloudwatchLogsExports }}',
 '{{ EngineVersion }}',
 '{{ IamAuthEnabled }}',
 '{{ KmsKeyId }}',
 '{{ PreferredBackupWindow }}',
 '{{ PreferredMaintenanceWindow }}',
 '{{ RestoreToTime }}',
 '{{ RestoreType }}',
 '{{ ServerlessScalingConfiguration }}',
 '{{ SnapshotIdentifier }}',
 '{{ SourceDBClusterIdentifier }}',
 '{{ StorageEncrypted }}',
 '{{ Tags }}',
 '{{ UseLatestRestorableTime }}',
 '{{ VpcSecurityGroupIds }}',
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
  - name: db_cluster
    props:
      - name: AssociatedRoles
        value:
          - FeatureName: '{{ FeatureName }}'
            RoleArn: '{{ RoleArn }}'
      - name: AvailabilityZones
        value:
          - '{{ AvailabilityZones[0] }}'
      - name: BackupRetentionPeriod
        value: '{{ BackupRetentionPeriod }}'
      - name: CopyTagsToSnapshot
        value: '{{ CopyTagsToSnapshot }}'
      - name: DBClusterIdentifier
        value: '{{ DBClusterIdentifier }}'
      - name: DBClusterParameterGroupName
        value: '{{ DBClusterParameterGroupName }}'
      - name: DBInstanceParameterGroupName
        value: '{{ DBInstanceParameterGroupName }}'
      - name: DBPort
        value: '{{ DBPort }}'
      - name: DBSubnetGroupName
        value: '{{ DBSubnetGroupName }}'
      - name: DeletionProtection
        value: '{{ DeletionProtection }}'
      - name: EnableCloudwatchLogsExports
        value:
          - '{{ EnableCloudwatchLogsExports[0] }}'
      - name: EngineVersion
        value: '{{ EngineVersion }}'
      - name: IamAuthEnabled
        value: '{{ IamAuthEnabled }}'
      - name: KmsKeyId
        value: '{{ KmsKeyId }}'
      - name: PreferredBackupWindow
        value: '{{ PreferredBackupWindow }}'
      - name: PreferredMaintenanceWindow
        value: '{{ PreferredMaintenanceWindow }}'
      - name: RestoreToTime
        value: '{{ RestoreToTime }}'
      - name: RestoreType
        value: '{{ RestoreType }}'
      - name: ServerlessScalingConfiguration
        value:
          MinCapacity: null
          MaxCapacity: null
      - name: SnapshotIdentifier
        value: '{{ SnapshotIdentifier }}'
      - name: SourceDBClusterIdentifier
        value: '{{ SourceDBClusterIdentifier }}'
      - name: StorageEncrypted
        value: '{{ StorageEncrypted }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: UseLatestRestorableTime
        value: '{{ UseLatestRestorableTime }}'
      - name: VpcSecurityGroupIds
        value:
          - '{{ VpcSecurityGroupIds[0] }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>db_cluster</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.neptune.db_clusters
SET PatchDocument = string('{{ {
    "AssociatedRoles": associated_roles,
    "BackupRetentionPeriod": backup_retention_period,
    "CopyTagsToSnapshot": copy_tags_to_snapshot,
    "DBClusterParameterGroupName": db_cluster_parameter_group_name,
    "DBInstanceParameterGroupName": db_instance_parameter_group_name,
    "DBPort": db_port,
    "DeletionProtection": deletion_protection,
    "EnableCloudwatchLogsExports": enable_cloudwatch_logs_exports,
    "EngineVersion": engine_version,
    "IamAuthEnabled": iam_auth_enabled,
    "PreferredBackupWindow": preferred_backup_window,
    "PreferredMaintenanceWindow": preferred_maintenance_window,
    "ServerlessScalingConfiguration": serverless_scaling_configuration,
    "Tags": tags,
    "VpcSecurityGroupIds": vpc_security_group_ids
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<DBClusterIdentifier>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.neptune.db_clusters
WHERE Identifier = '<DBClusterIdentifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>db_clusters</code> resource, the following permissions are required:

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
iam:PassRole,
iam:CreateServiceLinkedRole,
rds:AddRoleToDBCluster,
rds:AddTagsToResource,
rds:CreateDBCluster,
rds:CreateDBInstance,
rds:DescribeDBClusters,
rds:ListTagsForResource,
rds:ModifyDBCluster,
rds:RestoreDBClusterFromSnapshot,
rds:RestoreDBClusterToPointInTime,
kms:CreateGrant,
kms:DescribeKey
```

</TabItem>
<TabItem value="read">

```json
rds:DescribeDBClusters,
rds:ListTagsForResource,
kms:CreateGrant,
kms:DescribeKey
```

</TabItem>
<TabItem value="update">

```json
ec2:DescribeSecurityGroups,
iam:PassRole,
rds:AddRoleToDBCluster,
rds:AddTagsToResource,
rds:DescribeDBClusters,
rds:DescribeDBInstances,
rds:DescribeDBSubnetGroups,
rds:DescribeGlobalClusters,
rds:ListTagsForResource,
rds:ModifyDBCluster,
rds:ModifyDBInstance,
rds:RemoveFromGlobalCluster,
rds:RemoveRoleFromDBCluster,
rds:RemoveTagsFromResource,
kms:CreateGrant,
kms:DescribeKey
```

</TabItem>
<TabItem value="delete">

```json
rds:DeleteDBCluster,
rds:DeleteDBInstance,
rds:DescribeDBClusters,
rds:DescribeGlobalClusters,
rds:ListTagsForResource,
rds:RemoveFromGlobalCluster,
rds:CreateDBClusterSnapshot,
kms:CreateGrant,
kms:DescribeKey
```

</TabItem>
<TabItem value="list">

```json
rds:DescribeDBClusters,
rds:ListTagsForResource,
kms:CreateGrant,
kms:DescribeKey
```

</TabItem>
</Tabs>