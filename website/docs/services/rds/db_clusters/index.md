---
title: db_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - db_clusters
  - rds
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
<tr><td><b>Description</b></td><td><details><summary>The <code>AWS::RDS::DBCluster</code> resource creates an Amazon Aurora DB cluster or Multi-AZ DB cluster.</summary>For more information about creating an Aurora DB cluster, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.CreateInstance.html">Creating an Amazon Aurora DB cluster</a> in the <i>Amazon Aurora User Guide</i>.<br />For more information about creating a Multi-AZ DB cluster, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/create-multi-az-db-cluster.html">Creating a Multi-AZ DB cluster</a> in the <i>Amazon RDS User Guide</i>.<br />You can only create this resource in AWS Regions where Amazon Aurora or Multi-AZ DB clusters are supported.<br /><i>Updating DB clusters</i><br />When properties labeled "<i>Update requires:</i><a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement">Replacement</a>" are updated, AWS CloudFormation first creates a replacement DB cluster, then changes references from other dependent resources to point to the replacement DB cluster, and finally deletes the old DB cluster.<br />We highly recommend that you take a snapshot of the database before updating the stack. If you don't, you lose the data when AWS CloudFormation replaces your DB cluster. To preserve your data, perform the following procedure:<ul><li>Deactivate any applications that are using the DB cluster so that there's no activity on the DB instance.</li><li>Create a snapshot of the DB cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CreateSnapshotCluster.html">Creating a DB cluster snapshot</a>.</li><li>If you want to restore your DB cluster using a DB cluster snapshot, modify the updated template with your DB cluster changes and add the <code>SnapshotIdentifier</code> property with the ID of the DB cluster snapshot that you want to use.</li></ul>After you restore a DB cluster with a <code>SnapshotIdentifier</code> property, you must specify the same <code>SnapshotIdentifier</code> property for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the DB cluster snapshot again, and the data in the database is not changed. However, if you don't specify the <code>SnapshotIdentifier</code> property, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, a new DB cluster is restored from the specified <code>SnapshotIdentifier</code> property, and the original DB cluster is deleted.<ul><li>Update the stack.</li></ul>Currently, when you are updating the stack for an Aurora Serverless DB cluster, you can't include changes to any other properties when you specify one of the following properties: <code>PreferredBackupWindow</code>, <code>PreferredMaintenanceWindow</code>, and <code>Port</code>. This limitation doesn't apply to provisioned DB clusters.<br />For more information about updating other properties of this resource, see <code>ModifyDBCluster</code>. For more information about updating stacks, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html">CloudFormation Stacks Updates</a>.<br /><i>Deleting DB clusters</i><br />The default <code>DeletionPolicy</code> for <code>AWS::RDS::DBCluster</code> resources is <code>Snapshot</code>. For more information about how AWS CloudFormation deletes resources, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html">DeletionPolicy Attribute</a>.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rds.db_clusters" /></td></tr>
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
    "type": "object",
    "description": "<details><summary>This data type represents the information you need to connect to an Amazon RDS DB instance. This data type is used as a response element in the following actions:</summary>+   <code>CreateDBInstance</code><br />+   <code>DescribeDBInstances</code><br />+   <code>DeleteDBInstance</code><br />For the data structure that represents Amazon Aurora DB cluster endpoints, see <code>DBClusterEndpoint</code>.</details>",
    "children": [
      {
        "name": "address",
        "type": "string",
        "description": "Specifies the DNS address of the DB instance."
      },
      {
        "name": "port",
        "type": "string",
        "description": "Specifies the port that the database engine is listening on."
      },
      {
        "name": "hosted_zone_id",
        "type": "string",
        "description": "Specifies the ID that Amazon Route 53 assigns when you create a hosted zone."
      }
    ]
  },
  {
    "name": "read_endpoint",
    "type": "object",
    "description": "<details><summary>The <code>ReadEndpoint</code> return value specifies the reader endpoint for the DB cluster.</summary>The reader endpoint for a DB cluster load-balances connections across the Aurora Replicas that are available in a DB cluster. As clients request new connections to the reader endpoint, Aurora distributes the connection requests among the Aurora Replicas in the DB cluster. This functionality can help balance your read workload across multiple Aurora Replicas in your DB cluster.<br />If a failover occurs, and the Aurora Replica that you are connected to is promoted to be the primary instance, your connection is dropped. To continue sending your read workload to other Aurora Replicas in the cluster, you can then reconnect to the reader endpoint.<br />For more information about Aurora endpoints, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.Endpoints.html\">Amazon Aurora connection management</a> in the <i>Amazon Aurora User Guide</i>.</details>",
    "children": [
      {
        "name": "address",
        "type": "string",
        "description": "The host address of the reader endpoint."
      }
    ]
  },
  {
    "name": "allocated_storage",
    "type": "integer",
    "description": "<details><summary>The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster.</summary>Valid for Cluster Type: Multi-AZ DB clusters only<br />This setting is required to create a Multi-AZ DB cluster.</details>"
  },
  {
    "name": "associated_roles",
    "type": "array",
    "description": "<details><summary>Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster. IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other Amazon Web Services on your behalf.</summary>Valid for: Aurora DB clusters and Multi-AZ DB clusters</details>",
    "children": [
      {
        "name": "feature_name",
        "type": "string",
        "description": "The name of the feature associated with the AWS Identity and Access Management (IAM) role. IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services on your behalf. For the list of supported feature names, see the <code>SupportedFeatureNames</code> description in <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DBEngineVersion.html\">DBEngineVersion</a> in the <i>Amazon RDS API Reference</i>."
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
    "description": "<details><summary>A list of Availability Zones (AZs) where instances in the DB cluster can be created. For information on AWS Regions and Availability Zones, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.RegionsAndAvailabilityZones.html\">Choosing the Regions and Availability Zones</a> in the <i>Amazon Aurora User Guide</i>.</summary>Valid for: Aurora DB clusters only</details>"
  },
  {
    "name": "auto_minor_version_upgrade",
    "type": "boolean",
    "description": "<details><summary>Specifies whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window. By default, minor engine upgrades are applied automatically.</summary>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB cluster.<br />For more information about automatic minor version upgrades, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades\">Automatically upgrading the minor engine version</a>.</details>"
  },
  {
    "name": "backtrack_window",
    "type": "integer",
    "description": "<details><summary>The target backtrack window, in seconds. To disable backtracking, set this value to <code>0</code>.</summary>Valid for Cluster Type: Aurora MySQL DB clusters only<br />Default: <code>0</code><br />Constraints:<br />+  If specified, this value must be set to a number from 0 to 259,200 (72 hours).</details>"
  },
  {
    "name": "backup_retention_period",
    "type": "integer",
    "description": "<details><summary>The number of days for which automated backups are retained.</summary>Default: 1<br />Constraints:<br />+  Must be a value from 1 to 35<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "cluster_scalability_type",
    "type": "string",
    "description": "<details><summary>Specifies the scalability mode of the Aurora DB cluster. When set to <code>limitless</code>, the cluster operates as an Aurora Limitless Database, allowing you to create a DB shard group for horizontal scaling (sharding) capabilities. When set to <code>standard</code> (the default), the cluster uses normal DB instance creation.</summary><i>Important:</i> Automated backup retention isn't supported with Aurora Limitless Database clusters. If you set this property to <code>limitless</code>, you cannot set <code>DeleteAutomatedBackups</code> to <code>false</code>. To create a backup, use manual snapshots instead.</details>"
  },
  {
    "name": "copy_tags_to_snapshot",
    "type": "boolean",
    "description": "<details><summary>A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them.</summary>Valid for: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "database_insights_mode",
    "type": "string",
    "description": "<details><summary>The mode of Database Insights to enable for the DB cluster.</summary>If you set this value to <code>advanced</code>, you must also set the <code>PerformanceInsightsEnabled</code> parameter to <code>true</code> and the <code>PerformanceInsightsRetentionPeriod</code> parameter to 465.<br />Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "database_name",
    "type": "string",
    "description": "<details><summary>The name of your database. If you don't provide a name, then Amazon RDS won't create a database in this DB cluster. For naming constraints, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_Limits.html#RDS_Limits.Constraints\">Naming Constraints</a> in the <i>Amazon Aurora User Guide</i>.</summary>Valid for: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "db_cluster_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "db_cluster_instance_class",
    "type": "string",
    "description": "<details><summary>The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example <code>db.m6gd.xlarge</code>. Not all DB instance classes are available in all AWS-Regions, or for all database engines.</summary>For the full list of DB instance classes and availability for your engine, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html\">DB instance class</a> in the <i>Amazon RDS User Guide</i>.<br />This setting is required to create a Multi-AZ DB cluster.<br />Valid for Cluster Type: Multi-AZ DB clusters only</details>"
  },
  {
    "name": "db_cluster_resource_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "db_instance_parameter_group_name",
    "type": "string",
    "description": "<details><summary>The name of the DB parameter group to apply to all instances of the DB cluster.</summary>When you apply a parameter group using the <code>DBInstanceParameterGroupName</code> parameter, the DB cluster isn't rebooted automatically. Also, parameter changes are applied immediately rather than during the next maintenance window.<br />Valid for Cluster Type: Aurora DB clusters only<br />Default: The existing name setting<br />Constraints:<br />+  The DB parameter group must be in the same DB parameter group family as this DB cluster.<br />+  The <code>DBInstanceParameterGroupName</code> parameter is valid in combination with the <code>AllowMajorVersionUpgrade</code> parameter for a major version upgrade only.</details>"
  },
  {
    "name": "db_system_id",
    "type": "string",
    "description": "Reserved for future use."
  },
  {
    "name": "global_cluster_identifier",
    "type": "string",
    "description": "<details><summary>If you are configuring an Aurora global database cluster and want your Aurora DB cluster to be a secondary member in the global database cluster, specify the global cluster ID of the global database cluster. To define the primary database cluster of the global cluster, use the <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html\">AWS::RDS::GlobalCluster</a> resource.</summary>If you aren't configuring a global database cluster, don't specify this property.<br />To remove the DB cluster from a global database cluster, specify an empty value for the <code>GlobalClusterIdentifier</code> property.<br />For information about Aurora global databases, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html\">Working with Amazon Aurora Global Databases</a> in the <i>Amazon Aurora User Guide</i>.<br />Valid for: Aurora DB clusters only</details>"
  },
  {
    "name": "db_cluster_identifier",
    "type": "string",
    "description": "<details><summary>The DB cluster identifier. This parameter is stored as a lowercase string.</summary>Constraints:<br />+  Must contain from 1 to 63 letters, numbers, or hyphens.<br />+  First character must be a letter.<br />+  Can't end with a hyphen or contain two consecutive hyphens.<br />Example: <code>my-cluster1</code><br />Valid for: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "db_cluster_parameter_group_name",
    "type": "string",
    "description": "<details><summary>The name of the DB cluster parameter group to associate with this DB cluster.</summary>If you apply a parameter group to an existing DB cluster, then its DB instances might need to reboot. This can result in an outage while the DB instances are rebooting.<br />If you apply a change to parameter group associated with a stopped DB cluster, then the update stack waits until the DB cluster is started.<br />To list all of the available DB cluster parameter group names, use the following command:<br /><code>aws rds describe-db-cluster-parameter-groups --query \"DBClusterParameterGroups[].DBClusterParameterGroupName\" --output text</code><br />Valid for: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "db_subnet_group_name",
    "type": "string",
    "description": "<details><summary>A DB subnet group that you want to associate with this DB cluster.</summary>If you are restoring a DB cluster to a point in time with <code>RestoreType</code> set to <code>copy-on-write</code>, and don't specify a DB subnet group name, then the DB cluster is restored with a default DB subnet group.<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "delete_automated_backups",
    "type": "boolean",
    "description": "Specifies whether to remove automated backups immediately after the DB cluster is deleted. This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB cluster is deleted, unless the AWS Backup policy specifies a point-in-time restore rule."
  },
  {
    "name": "deletion_protection",
    "type": "boolean",
    "description": "<details><summary>A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.</summary>Valid for: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "domain",
    "type": "string",
    "description": "<details><summary>Indicates the directory ID of the Active Directory to create the DB cluster.</summary>For Amazon Aurora DB clusters, Amazon RDS can use Kerberos authentication to authenticate users that connect to the DB cluster.<br />For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html\">Kerberos authentication</a> in the <i>Amazon Aurora User Guide</i>.<br />Valid for: Aurora DB clusters only</details>"
  },
  {
    "name": "domain_iam_role_name",
    "type": "string",
    "description": "<details><summary>Specifies the name of the IAM role to use when making API calls to the Directory Service.</summary>Valid for: Aurora DB clusters only</details>"
  },
  {
    "name": "enable_cloudwatch_logs_exports",
    "type": "array",
    "description": "<details><summary>The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch\">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</summary><i>Aurora MySQL</i><br />Valid values: <code>audit</code>, <code>error</code>, <code>general</code>, <code>slowquery</code><br /><i>Aurora PostgreSQL</i><br />Valid values: <code>postgresql</code><br />Valid for: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "enable_global_write_forwarding",
    "type": "boolean",
    "description": "<details><summary>Specifies whether to enable this DB cluster to forward write operations to the primary cluster of a global cluster (Aurora global database). By default, write operations are not allowed on Aurora DB clusters that are secondary clusters in an Aurora global database.</summary>You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter enabled, a secondary cluster can forward writes to the current primary cluster, and the resulting changes are replicated back to this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the primary is demoted by a global cluster API operation, but it does nothing until then.<br />Valid for Cluster Type: Aurora DB clusters only</details>"
  },
  {
    "name": "enable_http_endpoint",
    "type": "boolean",
    "description": "<details><summary>Specifies whether to enable the HTTP endpoint for the DB cluster. By default, the HTTP endpoint isn't enabled.</summary>When enabled, the HTTP endpoint provides a connectionless web service API (RDS Data API) for running SQL queries on the DB cluster. You can also query your database from inside the RDS console with the RDS query editor.<br />For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html\">Using RDS Data API</a> in the <i>Amazon Aurora User Guide</i>.<br />Valid for Cluster Type: Aurora DB clusters only</details>"
  },
  {
    "name": "enable_iam_database_authentication",
    "type": "boolean",
    "description": "<details><summary>A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html\">IAM Database Authentication</a> in the <i>Amazon Aurora User Guide.</i><br />Valid for: Aurora DB clusters only</details>"
  },
  {
    "name": "enable_local_write_forwarding",
    "type": "boolean",
    "description": "<details><summary>Specifies whether read replicas can forward write operations to the writer DB instance in the DB cluster. By default, write operations aren't allowed on reader DB instances.</summary>Valid for: Aurora DB clusters only</details>"
  },
  {
    "name": "engine",
    "type": "string",
    "description": "<details><summary>The name of the database engine to be used for this DB cluster.</summary>Valid Values:<br />+   <code>aurora-mysql</code><br />+   <code>aurora-postgresql</code><br />+   <code>mysql</code><br />+   <code>postgres</code><br />Valid for: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "engine_lifecycle_support",
    "type": "string",
    "description": "<details><summary>The life cycle type for this DB cluster.</summary>By default, this value is set to <code>open-source-rds-extended-support</code>, which enrolls your DB cluster into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to <code>open-source-rds-extended-support-disabled</code>. In this case, creating the DB cluster will fail if the DB major version is past its end of standard support date.<br />You can use this setting to enroll your DB cluster into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB cluster past the end of standard support for that engine version. For more information, see the following sections:<br />+  Amazon Aurora - <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/extended-support.html\">Amazon RDS Extended Support with Amazon Aurora</a> in the <i>Amazon Aurora User Guide</i><br />+  Amazon RDS - <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html\">Amazon RDS Extended Support with Amazon RDS</a> in the <i>Amazon RDS User Guide</i><br />Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters<br />Valid Values: <code>open-source-rds-extended-support | open-source-rds-extended-support-disabled</code><br />Default: <code>open-source-rds-extended-support</code></details>"
  },
  {
    "name": "engine_mode",
    "type": "string",
    "description": "<details><summary>The DB engine mode of the DB cluster, either <code>provisioned</code> or <code>serverless</code>.</summary>The <code>serverless</code> engine mode only applies for Aurora Serverless v1 DB clusters. Aurora Serverless v2 DB clusters use the <code>provisioned</code> engine mode.<br />For information about limitations and requirements for Serverless DB clusters, see the following sections in the <i>Amazon Aurora User Guide</i>:<br />+   <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html#aurora-serverless.limitations\">Limitations of Aurora Serverless v1</a><br />+   <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.requirements.html\">Requirements for Aurora Serverless v2</a><br />Valid for Cluster Type: Aurora DB clusters only</details>"
  },
  {
    "name": "engine_version",
    "type": "string",
    "description": "<details><summary>The version number of the database engine to use.</summary>To list all of the available engine versions for Aurora MySQL version 2 (5.7-compatible) and version 3 (8.0-compatible), use the following command:<br /><code>aws rds describe-db-engine-versions --engine aurora-mysql --query \"DBEngineVersions[].EngineVersion\"</code><br />You can supply either <code>5.7</code> or <code>8.0</code> to use the default engine version for Aurora MySQL version 2 or version 3, respectively.<br />To list all of the available engine versions for Aurora PostgreSQL, use the following command:<br /><code>aws rds describe-db-engine-versions --engine aurora-postgresql --query \"DBEngineVersions[].EngineVersion\"</code><br />To list all of the available engine versions for RDS for MySQL, use the following command:<br /><code>aws rds describe-db-engine-versions --engine mysql --query \"DBEngineVersions[].EngineVersion\"</code><br />To list all of the available engine versions for RDS for PostgreSQL, use the following command:<br /><code>aws rds describe-db-engine-versions --engine postgres --query \"DBEngineVersions[].EngineVersion\"</code><br /><i>Aurora MySQL</i><br />For information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Updates.html\">Database engine updates for Amazon Aurora MySQL</a> in the <i>Amazon Aurora User Guide</i>.<br /><i>Aurora PostgreSQL</i><br />For information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Updates.20180305.html\">Amazon Aurora PostgreSQL releases and engine versions</a> in the <i>Amazon Aurora User Guide</i>.<br /><i>MySQL</i><br />For information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt\">Amazon RDS for MySQL</a> in the <i>Amazon RDS User Guide</i>.<br /><i>PostgreSQL</i><br />For information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts\">Amazon RDS for PostgreSQL</a> in the <i>Amazon RDS User Guide</i>.<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "manage_master_user_password",
    "type": "boolean",
    "description": "<details><summary>Specifies whether to manage the master user password with AWS Secrets Manager.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html\">Password management with Secrets Manager</a> in the <i>Amazon RDS User Guide</i> and <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html\">Password management with Secrets Manager</a> in the <i>Amazon Aurora User Guide.</i><br />Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters<br />Constraints:<br />+  Can't manage the master user password with AWS Secrets Manager if <code>MasterUserPassword</code> is specified.</details>"
  },
  {
    "name": "iops",
    "type": "integer",
    "description": "<details><summary>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster.</summary>For information about valid IOPS values, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS\">Provisioned IOPS storage</a> in the <i>Amazon RDS User Guide</i>.<br />This setting is required to create a Multi-AZ DB cluster.<br />Valid for Cluster Type: Multi-AZ DB clusters only<br />Constraints:<br />+  Must be a multiple between .5 and 50 of the storage amount for the DB cluster.</details>"
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "<details><summary>The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as <code>arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef</code>. If you enable the <code>StorageEncrypted</code> property but don't specify this property, the default KMS key is used. If you specify this property, you must set the <code>StorageEncrypted</code> property to <code>true</code>.</summary>If you specify the <code>SnapshotIdentifier</code> property, the <code>StorageEncrypted</code> property value is inherited from the snapshot, and if the DB cluster is encrypted, the specified <code>KmsKeyId</code> property is used.<br />If you create a read replica of an encrypted DB cluster in another AWS Region, make sure to set <code>KmsKeyId</code> to a KMS key identifier that is valid in the destination AWS Region. This KMS key is used to encrypt the read replica in that AWS Region.<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "master_username",
    "type": "string",
    "description": "<details><summary>The name of the master user for the DB cluster.</summary>If you specify the <code>SourceDBClusterIdentifier</code>, <code>SnapshotIdentifier</code>, or <code>GlobalClusterIdentifier</code> property, don't specify this property. The value is inherited from the source DB cluster, the snapshot, or the primary DB cluster for the global database cluster, respectively.<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "master_user_password",
    "type": "string",
    "description": "<details><summary>The master password for the DB instance.</summary>If you specify the <code>SourceDBClusterIdentifier</code>, <code>SnapshotIdentifier</code>, or <code>GlobalClusterIdentifier</code> property, don't specify this property. The value is inherited from the source DB cluster, the snapshot, or the primary DB cluster for the global database cluster, respectively.<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "master_user_secret",
    "type": "object",
    "description": "<details><summary>The secret managed by RDS in AWS Secrets Manager for the master user password.</summary>When you restore a DB cluster from a snapshot, Amazon RDS generates a new secret instead of reusing the secret specified in the <code>SecretArn</code> property. This ensures that the restored DB cluster is securely managed with a dedicated secret. To maintain consistent integration with your application, you might need to update resource configurations to reference the newly created secret.<br />For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html\">Password management with Secrets Manager</a> in the <i>Amazon RDS User Guide</i> and <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html\">Password management with Secrets Manager</a> in the <i>Amazon Aurora User Guide.</i></details>",
    "children": [
      {
        "name": "secret_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the secret. This parameter is a return value that you can retrieve using the <code>Fn::GetAtt</code> intrinsic function. For more information, see <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#aws-resource-rds-dbinstance-return-values\">Return values</a>."
      },
      {
        "name": "kms_key_id",
        "type": "string",
        "description": "The AWS KMS key identifier that is used to encrypt the secret."
      }
    ]
  },
  {
    "name": "monitoring_interval",
    "type": "integer",
    "description": "<details><summary>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. To turn off collecting Enhanced Monitoring metrics, specify <code>0</code>.</summary>If <code>MonitoringRoleArn</code> is specified, also set <code>MonitoringInterval</code> to a value other than <code>0</code>.<br />Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters<br />Valid Values: <code>0 | 1 | 5 | 10 | 15 | 30 | 60</code><br />Default: <code>0</code></details>"
  },
  {
    "name": "monitoring_role_arn",
    "type": "string",
    "description": "<details><summary>The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs. An example is <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling\">Setting up and enabling Enhanced Monitoring</a> in the <i>Amazon RDS User Guide</i>.</summary>If <code>MonitoringInterval</code> is set to a value other than <code>0</code>, supply a <code>MonitoringRoleArn</code> value.<br />Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "network_type",
    "type": "string",
    "description": "<details><summary>The network type of the DB cluster.</summary>Valid values:<br />+   <code>IPV4</code><br />+   <code>DUAL</code><br />The network type is determined by the <code>DBSubnetGroup</code> specified for the DB cluster. A <code>DBSubnetGroup</code> can support only the IPv4 protocol or the IPv4 and IPv6 protocols (<code>DUAL</code>).<br />For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html\">Working with a DB instance in a VPC</a> in the <i>Amazon Aurora User Guide.</i><br />Valid for: Aurora DB clusters only</details>"
  },
  {
    "name": "performance_insights_enabled",
    "type": "boolean",
    "description": "<details><summary>Specifies whether to turn on Performance Insights for the DB cluster.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html\">Using Amazon Performance Insights</a> in the <i>Amazon RDS User Guide</i>.<br />Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "performance_insights_kms_key_id",
    "type": "string",
    "description": "<details><summary>The AWS KMS key identifier for encryption of Performance Insights data.</summary>The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.<br />If you don't specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS uses your default KMS key. There is a default KMS key for your AWS-account. Your AWS-account has a different default KMS key for each AWS-Region.<br />Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "performance_insights_retention_period",
    "type": "integer",
    "description": "<details><summary>The number of days to retain Performance Insights data. When creating a DB cluster without enabling Performance Insights, you can't specify the parameter <code>PerformanceInsightsRetentionPeriod</code>.</summary>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters<br />Valid Values:<br />+   <code>7</code><br />+  <i>month</i> <i> 31, where </i>month<i> is a number of months from 1-23. Examples: <code>93</code> (3 months </i> 31), <code>341</code> (11 months <i> 31), <code>589</code> (19 months </i> 31)<br />+   <code>731</code><br />Default: <code>7</code> days<br />If you specify a retention period that isn't valid, such as <code>94</code>, Amazon RDS issues an error.</details>"
  },
  {
    "name": "port",
    "type": "integer",
    "description": "<details><summary>The port number on which the DB instances in the DB cluster accept connections.</summary>Default:<br />+  When <code>EngineMode</code> is <code>provisioned</code>, <code>3306</code> (for both Aurora MySQL and Aurora PostgreSQL)<br />+  When <code>EngineMode</code> is <code>serverless</code>:<br />+  <code>3306</code> when <code>Engine</code> is <code>aurora</code> or <code>aurora-mysql</code><br />+  <code>5432</code> when <code>Engine</code> is <code>aurora-postgresql</code><br />The <code>No interruption</code> on update behavior only applies to DB clusters. If you are updating a DB instance, see <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-port\">Port</a> for the AWS::RDS::DBInstance resource.<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "preferred_backup_window",
    "type": "string",
    "description": "<details><summary>The daily time range during which automated backups are created. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.Backups.BackupWindow\">Backup Window</a> in the <i>Amazon Aurora User Guide.</i></summary>Constraints:<br />+  Must be in the format <code>hh24:mi-hh24:mi</code>.<br />+  Must be in Universal Coordinated Time (UTC).<br />+  Must not conflict with the preferred maintenance window.<br />+  Must be at least 30 minutes.<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "preferred_maintenance_window",
    "type": "string",
    "description": "<details><summary>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</summary>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code><br />The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora\">Maintaining an Amazon Aurora DB cluster</a> in the <i>Amazon Aurora User Guide.</i><br />Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.<br />Constraints: Minimum 30-minute window.<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "publicly_accessible",
    "type": "boolean",
    "description": "<details><summary>Specifies whether the DB cluster is publicly accessible.</summary>When the DB cluster is publicly accessible and you connect from outside of the DB cluster's virtual private cloud (VPC), its Domain Name System (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB cluster, the endpoint resolves to the private IP address. Access to the DB cluster is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it.<br />When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address.<br />Valid for Cluster Type: Multi-AZ DB clusters only<br />Default: The default behavior varies depending on whether <code>DBSubnetGroupName</code> is specified.<br />If <code>DBSubnetGroupName</code> isn't specified, and <code>PubliclyAccessible</code> isn't specified, the following applies:<br />+  If the default VPC in the target Region doesn’t have an internet gateway attached to it, the DB cluster is private.<br />+  If the default VPC in the target Region has an internet gateway attached to it, the DB cluster is public.<br />If <code>DBSubnetGroupName</code> is specified, and <code>PubliclyAccessible</code> isn't specified, the following applies:<br />+  If the subnets are part of a VPC that doesn’t have an internet gateway attached to it, the DB cluster is private.<br />+  If the subnets are part of a VPC that has an internet gateway attached to it, the DB cluster is public.</details>"
  },
  {
    "name": "replication_source_identifier",
    "type": "string",
    "description": "<details><summary>The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a read replica.</summary>Valid for: Aurora DB clusters only</details>"
  },
  {
    "name": "restore_to_time",
    "type": "string",
    "description": "<details><summary>The date and time to restore the DB cluster to.</summary>Valid Values: Value must be a time in Universal Coordinated Time (UTC) format<br />Constraints:<br />+  Must be before the latest restorable time for the DB instance<br />+  Must be specified if <code>UseLatestRestorableTime</code> parameter isn't provided<br />+  Can't be specified if the <code>UseLatestRestorableTime</code> parameter is enabled<br />+  Can't be specified if the <code>RestoreType</code> parameter is <code>copy-on-write</code><br />This property must be used with <code>SourceDBClusterIdentifier</code> property. The resulting cluster will have the identifier that matches the value of the <code>DBclusterIdentifier</code> property.<br />Example: <code>2015-03-07T23:45:00Z</code><br />Valid for: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "restore_type",
    "type": "string",
    "description": "<details><summary>The type of restore to be performed. You can specify one of the following values:</summary>+  <code>full-copy</code> - The new DB cluster is restored as a full copy of the source DB cluster.<br />+  <code>copy-on-write</code> - The new DB cluster is restored as a clone of the source DB cluster.<br />If you don't specify a <code>RestoreType</code> value, then the new DB cluster is restored as a full copy of the source DB cluster.<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "serverless_v2_scaling_configuration",
    "type": "object",
    "description": "<details><summary>The scaling configuration of an Aurora Serverless V2 DB cluster.</summary>This property is only supported for Aurora Serverless v2. For Aurora Serverless v1, Use the <code>ScalingConfiguration</code> property.<br />Valid for: Aurora Serverless v2 DB clusters only</details>",
    "children": [
      {
        "name": "min_capacity",
        "type": "number",
        "description": "The minimum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster. You can specify ACU values in half-step increments, such as 8, 8.5, 9, and so on. For Aurora versions that support the Aurora Serverless v2 auto-pause feature, the smallest value that you can use is 0. For versions that don't support Aurora Serverless v2 auto-pause, the smallest value that you can use is 0.5."
      },
      {
        "name": "max_capacity",
        "type": "number",
        "description": "<details><summary>The maximum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster. You can specify ACU values in half-step increments, such as 40, 40.5, 41, and so on. The largest value that you can use is 128.</summary>The maximum capacity must be higher than 0.5 ACUs. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.setting-capacity.html#aurora-serverless-v2.max_capacity_considerations\">Choosing the maximum Aurora Serverless v2 capacity setting for a cluster</a> in the <i>Amazon Aurora User Guide</i>.<br />Aurora automatically sets certain parameters for Aurora Serverless V2 DB instances to values that depend on the maximum ACU value in the capacity range. When you update the maximum capacity value, the <code>ParameterApplyStatus</code> value for the DB instance changes to <code>pending-reboot</code>. You can update the parameter values by rebooting the DB instance after changing the capacity range.</details>"
      },
      {
        "name": "seconds_until_auto_pause",
        "type": "integer",
        "description": "<details><summary>Specifies the number of seconds an Aurora Serverless v2 DB instance must be idle before Aurora attempts to automatically pause it.</summary>Specify a value between 300 seconds (five minutes) and 86,400 seconds (one day). The default is 300 seconds.</details>"
      }
    ]
  },
  {
    "name": "scaling_configuration",
    "type": "object",
    "description": "<details><summary>The scaling configuration of an Aurora Serverless v1 DB cluster.</summary>This property is only supported for Aurora Serverless v1. For Aurora Serverless v2, Use the <code>ServerlessV2ScalingConfiguration</code> property.<br />Valid for: Aurora Serverless v1 DB clusters only</details>",
    "children": [
      {
        "name": "auto_pause",
        "type": "boolean",
        "description": "<details><summary>Indicates whether to allow or disallow automatic pause for an Aurora DB cluster in <code>serverless</code> DB engine mode. A DB cluster can be paused only when it's idle (it has no connections).</summary>If a DB cluster is paused for more than seven days, the DB cluster might be backed up with a snapshot. In this case, the DB cluster is restored when there is a request to connect to it.</details>"
      },
      {
        "name": "max_capacity",
        "type": "integer",
        "description": "<details><summary>The maximum capacity for an Aurora DB cluster in <code>serverless</code> DB engine mode.</summary>For Aurora MySQL, valid capacity values are <code>1</code>, <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.<br />For Aurora PostgreSQL, valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>192</code>, and <code>384</code>.<br />The maximum capacity must be greater than or equal to the minimum capacity.</details>"
      },
      {
        "name": "min_capacity",
        "type": "integer",
        "description": "<details><summary>The minimum capacity for an Aurora DB cluster in <code>serverless</code> DB engine mode.</summary>For Aurora MySQL, valid capacity values are <code>1</code>, <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.<br />For Aurora PostgreSQL, valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>192</code>, and <code>384</code>.<br />The minimum capacity must be less than or equal to the maximum capacity.</details>"
      },
      {
        "name": "seconds_before_timeout",
        "type": "integer",
        "description": "<details><summary>The amount of time, in seconds, that Aurora Serverless v1 tries to find a scaling point to perform seamless scaling before enforcing the timeout action. The default is 300.</summary>Specify a value between 60 and 600 seconds.</details>"
      },
      {
        "name": "seconds_until_auto_pause",
        "type": "integer",
        "description": "<details><summary>The time, in seconds, before an Aurora DB cluster in <code>serverless</code> mode is paused.</summary>Specify a value between 300 and 86,400 seconds.</details>"
      },
      {
        "name": "timeout_action",
        "type": "string",
        "description": "<details><summary>The action to take when the timeout is reached, either <code>ForceApplyCapacityChange</code> or <code>RollbackCapacityChange</code>.</summary><code>ForceApplyCapacityChange</code> sets the capacity to the specified value as soon as possible.<br /><code>RollbackCapacityChange</code>, the default, ignores the capacity change if a scaling point isn't found in the timeout period.<br />If you specify <code>ForceApplyCapacityChange</code>, connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped.<br />For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling\">Autoscaling for Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</details>"
      }
    ]
  },
  {
    "name": "snapshot_identifier",
    "type": "string",
    "description": "<details><summary>The identifier for the DB snapshot or DB cluster snapshot to restore from.</summary>You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot.<br />After you restore a DB cluster with a <code>SnapshotIdentifier</code> property, you must specify the same <code>SnapshotIdentifier</code> property for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed. However, if you don't specify the <code>SnapshotIdentifier</code> property, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, a new DB cluster is restored from the specified <code>SnapshotIdentifier</code> property, and the original DB cluster is deleted.<br />If you specify the <code>SnapshotIdentifier</code> property to restore a DB cluster (as opposed to specifying it for DB cluster updates), then don't specify the following properties:<br />+   <code>GlobalClusterIdentifier</code><br />+   <code>MasterUsername</code><br />+   <code>MasterUserPassword</code><br />+   <code>ReplicationSourceIdentifier</code><br />+   <code>RestoreType</code><br />+   <code>SourceDBClusterIdentifier</code><br />+   <code>SourceRegion</code><br />+  <code>StorageEncrypted</code> (for an encrypted snapshot)<br />+   <code>UseLatestRestorableTime</code><br />Constraints:<br />+  Must match the identifier of an existing Snapshot.<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "source_db_cluster_identifier",
    "type": "string",
    "description": "<details><summary>When restoring a DB cluster to a point in time, the identifier of the source DB cluster from which to restore.</summary>Constraints:<br />+  Must match the identifier of an existing DBCluster.<br />+  Cannot be specified if <code>SourceDbClusterResourceId</code> is specified. You must specify either <code>SourceDBClusterIdentifier</code> or <code>SourceDbClusterResourceId</code>, but not both.<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "source_db_cluster_resource_id",
    "type": "string",
    "description": "The resource ID of the source DB cluster from which to restore."
  },
  {
    "name": "source_region",
    "type": "string",
    "description": "<details><summary>The AWS Region which contains the source DB cluster when replicating a DB cluster. For example, <code>us-east-1</code>.</summary>Valid for: Aurora DB clusters only</details>"
  },
  {
    "name": "storage_encrypted",
    "type": "boolean",
    "description": "<details><summary>Indicates whether the DB cluster is encrypted.</summary>If you specify the <code>KmsKeyId</code> property, then you must enable encryption.<br />If you specify the <code>SourceDBClusterIdentifier</code> property, don't specify this property. The value is inherited from the source DB cluster, and if the DB cluster is encrypted, the specified <code>KmsKeyId</code> property is used.<br />If you specify the <code>SnapshotIdentifier</code> and the specified snapshot is encrypted, don't specify this property. The value is inherited from the snapshot, and the specified <code>KmsKeyId</code> property is used.<br />If you specify the <code>SnapshotIdentifier</code> and the specified snapshot isn't encrypted, you can use this property to specify that the restored DB cluster is encrypted. Specify the <code>KmsKeyId</code> property for the KMS key to use for encryption. If you don't want the restored DB cluster to be encrypted, then don't set this property or set it to <code>false</code>.<br />If you specify both the <code>StorageEncrypted</code> and <code>SnapshotIdentifier</code> properties without specifying the <code>KmsKeyId</code> property, then the restored DB cluster inherits the encryption settings from the DB snapshot that provide.<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "storage_throughput",
    "type": "integer",
    "description": ""
  },
  {
    "name": "storage_type",
    "type": "string",
    "description": "<details><summary>The storage type to associate with the DB cluster.</summary>For information on storage types for Aurora DB clusters, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.StorageReliability.html#aurora-storage-type\">Storage configurations for Amazon Aurora DB clusters</a>. For information on storage types for Multi-AZ DB clusters, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/create-multi-az-db-cluster.html#create-multi-az-db-cluster-settings\">Settings for creating Multi-AZ DB clusters</a>.<br />This setting is required to create a Multi-AZ DB cluster.<br />When specified for a Multi-AZ DB cluster, a value for the <code>Iops</code> parameter is required.<br />Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters<br />Valid Values:<br />+  Aurora DB clusters - <code>aurora | aurora-iopt1</code><br />+  Multi-AZ DB clusters - <code>io1 | io2 | gp3</code><br />Default:<br />+  Aurora DB clusters - <code>aurora</code><br />+  Multi-AZ DB clusters - <code>io1</code><br />When you create an Aurora DB cluster with the storage type set to <code>aurora-iopt1</code>, the storage type is returned in the response. The storage type isn't returned when you set it to <code>aurora</code>.</details>"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "<details><summary>Tags to assign to the DB cluster.</summary>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</details>",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with <code>aws:</code> or <code>rds:</code>. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: \"^([\\\\p&#123;L&#125;\\\\p&#123;Z&#125;\\\\p&#123;N&#125;_.:/=+\\\\-@]*)$\")."
      },
      {
        "name": "value",
        "type": "string",
        "description": "A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with <code>aws:</code> or <code>rds:</code>. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: \"^([\\\\p&#123;L&#125;\\\\p&#123;Z&#125;\\\\p&#123;N&#125;_.:/=+\\\\-@]*)$\")."
      }
    ]
  },
  {
    "name": "use_latest_restorable_time",
    "type": "boolean",
    "description": "<details><summary>A value that indicates whether to restore the DB cluster to the latest restorable backup time. By default, the DB cluster is not restored to the latest restorable backup time.</summary>Valid for: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "vpc_security_group_ids",
    "type": "array",
    "description": "<details><summary>A list of EC2 VPC security groups to associate with this DB cluster.</summary>If you plan to update the resource, don't specify VPC security groups in a shared VPC.<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters</details>"
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
    "description": "<details><summary>The DB cluster identifier. This parameter is stored as a lowercase string.</summary>Constraints:<br />+  Must contain from 1 to 63 letters, numbers, or hyphens.<br />+  First character must be a letter.<br />+  Can't end with a hyphen or contain two consecutive hyphens.<br />Example: <code>my-cluster1</code><br />Valid for: Aurora DB clusters and Multi-AZ DB clusters</details>"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html"><code>AWS::RDS::DBCluster</code></a>.

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
  allocated_storage,
  associated_roles,
  availability_zones,
  auto_minor_version_upgrade,
  backtrack_window,
  backup_retention_period,
  cluster_scalability_type,
  copy_tags_to_snapshot,
  database_insights_mode,
  database_name,
  db_cluster_arn,
  db_cluster_instance_class,
  db_cluster_resource_id,
  db_instance_parameter_group_name,
  db_system_id,
  global_cluster_identifier,
  db_cluster_identifier,
  db_cluster_parameter_group_name,
  db_subnet_group_name,
  delete_automated_backups,
  deletion_protection,
  domain,
  domain_iam_role_name,
  enable_cloudwatch_logs_exports,
  enable_global_write_forwarding,
  enable_http_endpoint,
  enable_iam_database_authentication,
  enable_local_write_forwarding,
  engine,
  engine_lifecycle_support,
  engine_mode,
  engine_version,
  manage_master_user_password,
  iops,
  kms_key_id,
  master_username,
  master_user_password,
  master_user_secret,
  monitoring_interval,
  monitoring_role_arn,
  network_type,
  performance_insights_enabled,
  performance_insights_kms_key_id,
  performance_insights_retention_period,
  port,
  preferred_backup_window,
  preferred_maintenance_window,
  publicly_accessible,
  replication_source_identifier,
  restore_to_time,
  restore_type,
  serverless_v2_scaling_configuration,
  scaling_configuration,
  snapshot_identifier,
  source_db_cluster_identifier,
  source_db_cluster_resource_id,
  source_region,
  storage_encrypted,
  storage_throughput,
  storage_type,
  tags,
  use_latest_restorable_time,
  vpc_security_group_ids
FROM awscc.rds.db_clusters
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ db_cluster_identifier }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>db_clusters</code> in a region.
```sql
SELECT
  region,
  db_cluster_identifier
FROM awscc.rds.db_clusters_list_only
WHERE
  region = '{{ region }}';
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
INSERT INTO awscc.rds.db_clusters (
  AllocatedStorage,
  AssociatedRoles,
  AvailabilityZones,
  AutoMinorVersionUpgrade,
  BacktrackWindow,
  BackupRetentionPeriod,
  ClusterScalabilityType,
  CopyTagsToSnapshot,
  DatabaseInsightsMode,
  DatabaseName,
  DBClusterInstanceClass,
  DBInstanceParameterGroupName,
  DBSystemId,
  GlobalClusterIdentifier,
  DBClusterIdentifier,
  DBClusterParameterGroupName,
  DBSubnetGroupName,
  DeleteAutomatedBackups,
  DeletionProtection,
  Domain,
  DomainIAMRoleName,
  EnableCloudwatchLogsExports,
  EnableGlobalWriteForwarding,
  EnableHttpEndpoint,
  EnableIAMDatabaseAuthentication,
  EnableLocalWriteForwarding,
  Engine,
  EngineLifecycleSupport,
  EngineMode,
  EngineVersion,
  ManageMasterUserPassword,
  Iops,
  KmsKeyId,
  MasterUsername,
  MasterUserPassword,
  MasterUserSecret,
  MonitoringInterval,
  MonitoringRoleArn,
  NetworkType,
  PerformanceInsightsEnabled,
  PerformanceInsightsKmsKeyId,
  PerformanceInsightsRetentionPeriod,
  Port,
  PreferredBackupWindow,
  PreferredMaintenanceWindow,
  PubliclyAccessible,
  ReplicationSourceIdentifier,
  RestoreToTime,
  RestoreType,
  ServerlessV2ScalingConfiguration,
  ScalingConfiguration,
  SnapshotIdentifier,
  SourceDBClusterIdentifier,
  SourceDbClusterResourceId,
  SourceRegion,
  StorageEncrypted,
  StorageType,
  Tags,
  UseLatestRestorableTime,
  VpcSecurityGroupIds,
  region
)
SELECT
  '{{ allocated_storage }}',
  '{{ associated_roles }}',
  '{{ availability_zones }}',
  '{{ auto_minor_version_upgrade }}',
  '{{ backtrack_window }}',
  '{{ backup_retention_period }}',
  '{{ cluster_scalability_type }}',
  '{{ copy_tags_to_snapshot }}',
  '{{ database_insights_mode }}',
  '{{ database_name }}',
  '{{ db_cluster_instance_class }}',
  '{{ db_instance_parameter_group_name }}',
  '{{ db_system_id }}',
  '{{ global_cluster_identifier }}',
  '{{ db_cluster_identifier }}',
  '{{ db_cluster_parameter_group_name }}',
  '{{ db_subnet_group_name }}',
  '{{ delete_automated_backups }}',
  '{{ deletion_protection }}',
  '{{ domain }}',
  '{{ domain_iam_role_name }}',
  '{{ enable_cloudwatch_logs_exports }}',
  '{{ enable_global_write_forwarding }}',
  '{{ enable_http_endpoint }}',
  '{{ enable_iam_database_authentication }}',
  '{{ enable_local_write_forwarding }}',
  '{{ engine }}',
  '{{ engine_lifecycle_support }}',
  '{{ engine_mode }}',
  '{{ engine_version }}',
  '{{ manage_master_user_password }}',
  '{{ iops }}',
  '{{ kms_key_id }}',
  '{{ master_username }}',
  '{{ master_user_password }}',
  '{{ master_user_secret }}',
  '{{ monitoring_interval }}',
  '{{ monitoring_role_arn }}',
  '{{ network_type }}',
  '{{ performance_insights_enabled }}',
  '{{ performance_insights_kms_key_id }}',
  '{{ performance_insights_retention_period }}',
  '{{ port }}',
  '{{ preferred_backup_window }}',
  '{{ preferred_maintenance_window }}',
  '{{ publicly_accessible }}',
  '{{ replication_source_identifier }}',
  '{{ restore_to_time }}',
  '{{ restore_type }}',
  '{{ serverless_v2_scaling_configuration }}',
  '{{ scaling_configuration }}',
  '{{ snapshot_identifier }}',
  '{{ source_db_cluster_identifier }}',
  '{{ source_db_cluster_resource_id }}',
  '{{ source_region }}',
  '{{ storage_encrypted }}',
  '{{ storage_type }}',
  '{{ tags }}',
  '{{ use_latest_restorable_time }}',
  '{{ vpc_security_group_ids }}',
  '{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.rds.db_clusters (
  AllocatedStorage,
  AssociatedRoles,
  AvailabilityZones,
  AutoMinorVersionUpgrade,
  BacktrackWindow,
  BackupRetentionPeriod,
  ClusterScalabilityType,
  CopyTagsToSnapshot,
  DatabaseInsightsMode,
  DatabaseName,
  DBClusterInstanceClass,
  DBInstanceParameterGroupName,
  DBSystemId,
  GlobalClusterIdentifier,
  DBClusterIdentifier,
  DBClusterParameterGroupName,
  DBSubnetGroupName,
  DeleteAutomatedBackups,
  DeletionProtection,
  Domain,
  DomainIAMRoleName,
  EnableCloudwatchLogsExports,
  EnableGlobalWriteForwarding,
  EnableHttpEndpoint,
  EnableIAMDatabaseAuthentication,
  EnableLocalWriteForwarding,
  Engine,
  EngineLifecycleSupport,
  EngineMode,
  EngineVersion,
  ManageMasterUserPassword,
  Iops,
  KmsKeyId,
  MasterUsername,
  MasterUserPassword,
  MasterUserSecret,
  MonitoringInterval,
  MonitoringRoleArn,
  NetworkType,
  PerformanceInsightsEnabled,
  PerformanceInsightsKmsKeyId,
  PerformanceInsightsRetentionPeriod,
  Port,
  PreferredBackupWindow,
  PreferredMaintenanceWindow,
  PubliclyAccessible,
  ReplicationSourceIdentifier,
  RestoreToTime,
  RestoreType,
  ServerlessV2ScalingConfiguration,
  ScalingConfiguration,
  SnapshotIdentifier,
  SourceDBClusterIdentifier,
  SourceDbClusterResourceId,
  SourceRegion,
  StorageEncrypted,
  StorageType,
  Tags,
  UseLatestRestorableTime,
  VpcSecurityGroupIds,
  region
)
SELECT
  '{{ allocated_storage }}',
  '{{ associated_roles }}',
  '{{ availability_zones }}',
  '{{ auto_minor_version_upgrade }}',
  '{{ backtrack_window }}',
  '{{ backup_retention_period }}',
  '{{ cluster_scalability_type }}',
  '{{ copy_tags_to_snapshot }}',
  '{{ database_insights_mode }}',
  '{{ database_name }}',
  '{{ db_cluster_instance_class }}',
  '{{ db_instance_parameter_group_name }}',
  '{{ db_system_id }}',
  '{{ global_cluster_identifier }}',
  '{{ db_cluster_identifier }}',
  '{{ db_cluster_parameter_group_name }}',
  '{{ db_subnet_group_name }}',
  '{{ delete_automated_backups }}',
  '{{ deletion_protection }}',
  '{{ domain }}',
  '{{ domain_iam_role_name }}',
  '{{ enable_cloudwatch_logs_exports }}',
  '{{ enable_global_write_forwarding }}',
  '{{ enable_http_endpoint }}',
  '{{ enable_iam_database_authentication }}',
  '{{ enable_local_write_forwarding }}',
  '{{ engine }}',
  '{{ engine_lifecycle_support }}',
  '{{ engine_mode }}',
  '{{ engine_version }}',
  '{{ manage_master_user_password }}',
  '{{ iops }}',
  '{{ kms_key_id }}',
  '{{ master_username }}',
  '{{ master_user_password }}',
  '{{ master_user_secret }}',
  '{{ monitoring_interval }}',
  '{{ monitoring_role_arn }}',
  '{{ network_type }}',
  '{{ performance_insights_enabled }}',
  '{{ performance_insights_kms_key_id }}',
  '{{ performance_insights_retention_period }}',
  '{{ port }}',
  '{{ preferred_backup_window }}',
  '{{ preferred_maintenance_window }}',
  '{{ publicly_accessible }}',
  '{{ replication_source_identifier }}',
  '{{ restore_to_time }}',
  '{{ restore_type }}',
  '{{ serverless_v2_scaling_configuration }}',
  '{{ scaling_configuration }}',
  '{{ snapshot_identifier }}',
  '{{ source_db_cluster_identifier }}',
  '{{ source_db_cluster_resource_id }}',
  '{{ source_region }}',
  '{{ storage_encrypted }}',
  '{{ storage_type }}',
  '{{ tags }}',
  '{{ use_latest_restorable_time }}',
  '{{ vpc_security_group_ids }}',
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
      - name: allocated_storage
        value: '{{ allocated_storage }}'
      - name: associated_roles
        value:
          - feature_name: '{{ feature_name }}'
            role_arn: '{{ role_arn }}'
      - name: availability_zones
        value:
          - '{{ availability_zones[0] }}'
      - name: auto_minor_version_upgrade
        value: '{{ auto_minor_version_upgrade }}'
      - name: backtrack_window
        value: '{{ backtrack_window }}'
      - name: backup_retention_period
        value: '{{ backup_retention_period }}'
      - name: cluster_scalability_type
        value: '{{ cluster_scalability_type }}'
      - name: copy_tags_to_snapshot
        value: '{{ copy_tags_to_snapshot }}'
      - name: database_insights_mode
        value: '{{ database_insights_mode }}'
      - name: database_name
        value: '{{ database_name }}'
      - name: db_cluster_instance_class
        value: '{{ db_cluster_instance_class }}'
      - name: db_instance_parameter_group_name
        value: '{{ db_instance_parameter_group_name }}'
      - name: db_system_id
        value: '{{ db_system_id }}'
      - name: global_cluster_identifier
        value: '{{ global_cluster_identifier }}'
      - name: db_cluster_identifier
        value: '{{ db_cluster_identifier }}'
      - name: db_cluster_parameter_group_name
        value: '{{ db_cluster_parameter_group_name }}'
      - name: db_subnet_group_name
        value: '{{ db_subnet_group_name }}'
      - name: delete_automated_backups
        value: '{{ delete_automated_backups }}'
      - name: deletion_protection
        value: '{{ deletion_protection }}'
      - name: domain
        value: '{{ domain }}'
      - name: domain_iam_role_name
        value: '{{ domain_iam_role_name }}'
      - name: enable_cloudwatch_logs_exports
        value:
          - '{{ enable_cloudwatch_logs_exports[0] }}'
      - name: enable_global_write_forwarding
        value: '{{ enable_global_write_forwarding }}'
      - name: enable_http_endpoint
        value: '{{ enable_http_endpoint }}'
      - name: enable_iam_database_authentication
        value: '{{ enable_iam_database_authentication }}'
      - name: enable_local_write_forwarding
        value: '{{ enable_local_write_forwarding }}'
      - name: engine
        value: '{{ engine }}'
      - name: engine_lifecycle_support
        value: '{{ engine_lifecycle_support }}'
      - name: engine_mode
        value: '{{ engine_mode }}'
      - name: engine_version
        value: '{{ engine_version }}'
      - name: manage_master_user_password
        value: '{{ manage_master_user_password }}'
      - name: iops
        value: '{{ iops }}'
      - name: kms_key_id
        value: '{{ kms_key_id }}'
      - name: master_username
        value: '{{ master_username }}'
      - name: master_user_password
        value: '{{ master_user_password }}'
      - name: master_user_secret
        value:
          secret_arn: '{{ secret_arn }}'
          kms_key_id: '{{ kms_key_id }}'
      - name: monitoring_interval
        value: '{{ monitoring_interval }}'
      - name: monitoring_role_arn
        value: '{{ monitoring_role_arn }}'
      - name: network_type
        value: '{{ network_type }}'
      - name: performance_insights_enabled
        value: '{{ performance_insights_enabled }}'
      - name: performance_insights_kms_key_id
        value: '{{ performance_insights_kms_key_id }}'
      - name: performance_insights_retention_period
        value: '{{ performance_insights_retention_period }}'
      - name: port
        value: '{{ port }}'
      - name: preferred_backup_window
        value: '{{ preferred_backup_window }}'
      - name: preferred_maintenance_window
        value: '{{ preferred_maintenance_window }}'
      - name: publicly_accessible
        value: '{{ publicly_accessible }}'
      - name: replication_source_identifier
        value: '{{ replication_source_identifier }}'
      - name: restore_to_time
        value: '{{ restore_to_time }}'
      - name: restore_type
        value: '{{ restore_type }}'
      - name: serverless_v2_scaling_configuration
        value:
          min_capacity: null
          max_capacity: null
          seconds_until_auto_pause: '{{ seconds_until_auto_pause }}'
      - name: scaling_configuration
        value:
          auto_pause: '{{ auto_pause }}'
          max_capacity: '{{ max_capacity }}'
          min_capacity: '{{ min_capacity }}'
          seconds_before_timeout: '{{ seconds_before_timeout }}'
          seconds_until_auto_pause: '{{ seconds_until_auto_pause }}'
          timeout_action: '{{ timeout_action }}'
      - name: snapshot_identifier
        value: '{{ snapshot_identifier }}'
      - name: source_db_cluster_identifier
        value: '{{ source_db_cluster_identifier }}'
      - name: source_db_cluster_resource_id
        value: '{{ source_db_cluster_resource_id }}'
      - name: source_region
        value: '{{ source_region }}'
      - name: storage_encrypted
        value: '{{ storage_encrypted }}'
      - name: storage_type
        value: '{{ storage_type }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: use_latest_restorable_time
        value: '{{ use_latest_restorable_time }}'
      - name: vpc_security_group_ids
        value:
          - '{{ vpc_security_group_ids[0] }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>db_cluster</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.rds.db_clusters
SET PatchDocument = string('{{ {
    "AllocatedStorage": allocated_storage,
    "AssociatedRoles": associated_roles,
    "AutoMinorVersionUpgrade": auto_minor_version_upgrade,
    "BacktrackWindow": backtrack_window,
    "BackupRetentionPeriod": backup_retention_period,
    "CopyTagsToSnapshot": copy_tags_to_snapshot,
    "DatabaseInsightsMode": database_insights_mode,
    "DBClusterInstanceClass": db_cluster_instance_class,
    "DBInstanceParameterGroupName": db_instance_parameter_group_name,
    "GlobalClusterIdentifier": global_cluster_identifier,
    "DBClusterParameterGroupName": db_cluster_parameter_group_name,
    "DeleteAutomatedBackups": delete_automated_backups,
    "DeletionProtection": deletion_protection,
    "Domain": domain,
    "DomainIAMRoleName": domain_iam_role_name,
    "EnableCloudwatchLogsExports": enable_cloudwatch_logs_exports,
    "EnableGlobalWriteForwarding": enable_global_write_forwarding,
    "EnableHttpEndpoint": enable_http_endpoint,
    "EnableIAMDatabaseAuthentication": enable_iam_database_authentication,
    "EnableLocalWriteForwarding": enable_local_write_forwarding,
    "Engine": engine,
    "EngineLifecycleSupport": engine_lifecycle_support,
    "EngineVersion": engine_version,
    "ManageMasterUserPassword": manage_master_user_password,
    "Iops": iops,
    "MasterUsername": master_username,
    "MasterUserPassword": master_user_password,
    "MonitoringInterval": monitoring_interval,
    "MonitoringRoleArn": monitoring_role_arn,
    "NetworkType": network_type,
    "PerformanceInsightsEnabled": performance_insights_enabled,
    "PerformanceInsightsKmsKeyId": performance_insights_kms_key_id,
    "PerformanceInsightsRetentionPeriod": performance_insights_retention_period,
    "Port": port,
    "PreferredBackupWindow": preferred_backup_window,
    "PreferredMaintenanceWindow": preferred_maintenance_window,
    "ReplicationSourceIdentifier": replication_source_identifier,
    "ServerlessV2ScalingConfiguration": serverless_v2_scaling_configuration,
    "ScalingConfiguration": scaling_configuration,
    "StorageType": storage_type,
    "Tags": tags,
    "VpcSecurityGroupIds": vpc_security_group_ids
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ db_cluster_identifier }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.rds.db_clusters
WHERE
  Identifier = '{{ db_cluster_identifier }}' AND
  region = '{{ region }}';
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
iam:CreateServiceLinkedRole,
iam:PassRole,
rds:AddRoleToDBCluster,
rds:AddTagsToResource,
rds:CreateDBCluster,
rds:CreateDBInstance,
rds:DescribeDBClusters,
rds:DescribeDBClusterAutomatedBackups,
rds:DescribeDBClusterSnapshots,
rds:DescribeDBSnapshots,
rds:DescribeEvents,
rds:EnableHttpEndpoint,
rds:ModifyDBCluster,
rds:RestoreDBClusterFromSnapshot,
rds:RestoreDBClusterToPointInTime,
rds:DescribeDBClusterSnapshots,
secretsmanager:CreateSecret,
secretsmanager:TagResource
```

</TabItem>
<TabItem value="read">

```json
rds:DescribeDBClusters
```

</TabItem>
<TabItem value="update">

```json
ec2:DescribeSecurityGroups,
iam:PassRole,
rds:AddRoleToDBCluster,
rds:AddTagsToResource,
rds:DescribeDBClusters,
rds:DescribeDBSubnetGroups,
rds:DescribeEvents,
rds:DescribeGlobalClusters,
rds:DisableHttpEndpoint,
rds:EnableHttpEndpoint,
rds:ModifyDBCluster,
rds:ModifyDBInstance,
rds:RemoveFromGlobalCluster,
rds:RemoveRoleFromDBCluster,
rds:RemoveTagsFromResource,
secretsmanager:CreateSecret,
secretsmanager:TagResource
```

</TabItem>
<TabItem value="delete">

```json
rds:AddTagsToResource,
rds:CreateDBClusterSnapshot,
rds:DeleteDBCluster,
rds:DeleteDBInstance,
rds:DescribeDBClusters,
rds:DescribeGlobalClusters,
rds:RemoveFromGlobalCluster
```

</TabItem>
<TabItem value="list">

```json
rds:DescribeDBClusters
```

</TabItem>
</Tabs>