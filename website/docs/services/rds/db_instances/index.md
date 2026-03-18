---
title: db_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - db_instances
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

Creates, updates, deletes or gets a <code>db_instance</code> resource or lists <code>db_instances</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>db_instances</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>The <code>AWS::RDS::DBInstance</code> resource creates an Amazon DB instance. The new DB instance can be an RDS DB instance, or it can be a DB instance in an Aurora DB cluster.</summary>For more information about creating an RDS DB instance, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateDBInstance.html">Creating an Amazon RDS DB instance</a> in the <i>Amazon RDS User Guide</i>.<br />For more information about creating a DB instance in an Aurora DB cluster, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.CreateInstance.html">Creating an Amazon Aurora DB cluster</a> in the <i>Amazon Aurora User Guide</i>.<br />If you import an existing DB instance, and the template configuration doesn't match the actual configuration of the DB instance, AWS CloudFormation applies the changes in the template during the import operation.<br />If a DB instance is deleted or replaced during an update, AWS CloudFormation deletes all automated snapshots. However, it retains manual DB snapshots. During an update that requires replacement, you can apply a stack policy to prevent DB instances from being replaced. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html">Prevent Updates to Stack Resources</a>.<br /><i>Updating DB instances</i><br />When properties labeled "<i>Update requires:</i><a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement">Replacement</a>" are updated, AWS CloudFormation first creates a replacement DB instance, then changes references from other dependent resources to point to the replacement DB instance, and finally deletes the old DB instance.<br />We highly recommend that you take a snapshot of the database before updating the stack. If you don't, you lose the data when AWS CloudFormation replaces your DB instance. To preserve your data, perform the following procedure:<ul><li>Deactivate any applications that are using the DB instance so that there's no activity on the DB instance.</li><li>Create a snapshot of the DB instance. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateSnapshot.html">Creating a DB Snapshot</a>.</li><li>If you want to restore your instance using a DB snapshot, modify the updated template with your DB instance changes and add the <code>DBSnapshotIdentifier</code> property with the ID of the DB snapshot that you want to use.</li></ul>After you restore a DB instance with a <code>DBSnapshotIdentifier</code> property, you can delete the <code>DBSnapshotIdentifier</code> property. When you specify this property for an update, the DB instance is not restored from the DB snapshot again, and the data in the database is not changed. However, if you don't specify the <code>DBSnapshotIdentifier</code> property, an empty DB instance is created, and the original DB instance is deleted. If you specify a property that is different from the previous snapshot restore property, a new DB instance is restored from the specified <code>DBSnapshotIdentifier</code> property, and the original DB instance is deleted.<ul><li>Update the stack.</li></ul>For more information about updating other properties of this resource, see <code>ModifyDBInstance</code>. For more information about updating stacks, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html">CloudFormation Stacks Updates</a>.<br /><i>Deleting DB instances</i><br />For DB instances that are part of an Aurora DB cluster, you can set a deletion policy for your DB instance to control how AWS CloudFormation handles the DB instance when the stack is deleted. For Amazon RDS DB instances, you can choose to <i>retain</i> the DB instance, to <i>delete</i> the DB instance, or to <i>create a snapshot</i> of the DB instance. The default AWS CloudFormation behavior depends on the <code>DBClusterIdentifier</code> property:<ul><li>For <code>AWS::RDS::DBInstance</code> resources that don't specify the <code>DBClusterIdentifier</code> property, AWS CloudFormation saves a snapshot of the DB instance.</li><li>For <code>AWS::RDS::DBInstance</code> resources that do specify the <code>DBClusterIdentifier</code> property, AWS CloudFormation deletes the DB instance.</li></ul>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html">DeletionPolicy Attribute</a>.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rds.db_instances" /></td></tr>
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
    "name": "allocated_storage",
    "type": "string",
    "description": "<details><summary>The amount of storage in gibibytes (GiB) to be initially allocated for the database instance.</summary>If any value is set in the <code>Iops</code> parameter, <code>AllocatedStorage</code> must be at least 100 GiB, which corresponds to the minimum Iops value of 1,000. If you increase the <code>Iops</code> value (in 1,000 IOPS increments), then you must also increase the <code>AllocatedStorage</code> value (in 100-GiB increments).<br /><i>Amazon Aurora</i><br />Not applicable. Aurora cluster volumes automatically grow as the amount of data in your database increases, though you are only charged for the space that you use in an Aurora cluster volume.<br /><i>Db2</i><br />Constraints to the amount of storage for each storage type are the following:<br />+  General Purpose (SSD) storage (gp3): Must be an integer from 20 to 64000.<br />+  Provisioned IOPS storage (io1): Must be an integer from 100 to 64000.<br /><i>MySQL</i><br />Constraints to the amount of storage for each storage type are the following:<br />+  General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.<br />+  Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.<br />+  Magnetic storage (standard): Must be an integer from 5 to 3072.<br /><i>MariaDB</i><br />Constraints to the amount of storage for each storage type are the following:<br />+  General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.<br />+  Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.<br />+  Magnetic storage (standard): Must be an integer from 5 to 3072.<br /><i>PostgreSQL</i><br />Constraints to the amount of storage for each storage type are the following:<br />+  General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.<br />+  Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.<br />+  Magnetic storage (standard): Must be an integer from 5 to 3072.<br /><i>Oracle</i><br />Constraints to the amount of storage for each storage type are the following:<br />+  General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.<br />+  Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.<br />+  Magnetic storage (standard): Must be an integer from 10 to 3072.<br /><i>SQL Server</i><br />Constraints to the amount of storage for each storage type are the following:<br />+  General Purpose (SSD) storage (gp2):<br />+  Enterprise and Standard editions: Must be an integer from 20 to 16384.<br />+  Web and Express editions: Must be an integer from 20 to 16384.<br />+  Provisioned IOPS storage (io1):<br />+  Enterprise and Standard editions: Must be an integer from 20 to 16384.<br />+  Web and Express editions: Must be an integer from 20 to 16384.<br />+  Magnetic storage (standard):<br />+  Enterprise and Standard editions: Must be an integer from 20 to 1024.<br />+  Web and Express editions: Must be an integer from 20 to 1024.</details>"
  },
  {
    "name": "allow_major_version_upgrade",
    "type": "boolean",
    "description": "<details><summary>A value that indicates whether major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.</summary>Constraints: Major version upgrades must be allowed when specifying a value for the <code>EngineVersion</code> parameter that is a different major version than the DB instance's current version.</details>"
  },
  {
    "name": "associated_roles",
    "type": "array",
    "description": "<details><summary>The IAMlong (IAM) roles associated with the DB instance.</summary><i>Amazon Aurora</i><br />Not applicable. The associated roles are managed by the DB cluster.</details>",
    "children": [
      {
        "name": "feature_name",
        "type": "string",
        "description": "The name of the feature associated with the AWS Identity and Access Management (IAM) role. IAM roles that are associated with a DB instance grant permission for the DB instance to access other AWS services on your behalf. For the list of supported feature names, see the <code>SupportedFeatureNames</code> description in <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DBEngineVersion.html\">DBEngineVersion</a> in the <i>Amazon RDS API Reference</i>."
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the IAM role that is associated with the DB instance."
      }
    ]
  },
  {
    "name": "auto_minor_version_upgrade",
    "type": "boolean",
    "description": "A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. By default, minor engine upgrades are applied automatically."
  },
  {
    "name": "automatic_backup_replication_region",
    "type": "string",
    "description": "The AWS-Region associated with the automated backup."
  },
  {
    "name": "automatic_backup_replication_kms_key_id",
    "type": "string",
    "description": "The AWS KMS key identifier for encryption of the replicated automated backups. The KMS key ID is the Amazon Resource Name (ARN) for the KMS encryption key in the destination AWS-Region, for example, <code>arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE</code>."
  },
  {
    "name": "automatic_backup_replication_retention_period",
    "type": "integer",
    "description": "<details><summary>The retention period for automated backups in a different AWS Region. Use this parameter to set a unique retention period that only applies to cross-Region automated backups. To enable automated backups in a different Region, specify a positive value for the <code>AutomaticBackupReplicationRegion</code> parameter.</summary>If not specified, this parameter defaults to the value of the <code>BackupRetentionPeriod</code> parameter. The maximum allowed value is 35.</details>"
  },
  {
    "name": "automatic_restart_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "availability_zone",
    "type": "string",
    "description": "<details><summary>The Availability Zone (AZ) where the database will be created. For information on AWS-Regions and Availability Zones, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html\">Regions and Availability Zones</a>.</summary>For Amazon Aurora, each Aurora DB cluster hosts copies of its storage in three separate Availability Zones. Specify one of these Availability Zones. Aurora automatically chooses an appropriate Availability Zone if you don't specify one.<br />Default: A random, system-chosen Availability Zone in the endpoint's AWS-Region.<br />Constraints:<br />+  The <code>AvailabilityZone</code> parameter can't be specified if the DB instance is a Multi-AZ deployment.<br />+  The specified Availability Zone must be in the same AWS-Region as the current endpoint.<br />Example: <code>us-east-1d</code></details>"
  },
  {
    "name": "backup_retention_period",
    "type": "integer",
    "description": "<details><summary>The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.</summary><i>Amazon Aurora</i><br />Not applicable. The retention period for automated backups is managed by the DB cluster.<br />Default: 1<br />Constraints:<br />+  Must be a value from 0 to 35<br />+  Can't be set to 0 if the DB instance is a source to read replicas</details>"
  },
  {
    "name": "backup_target",
    "type": "string",
    "description": "<details><summary>The location for storing automated backups and manual snapshots.</summary>Valid Values:<br />+  <code>local</code> (Dedicated Local Zone)<br />+  <code>outposts</code> (AWS Outposts)<br />+  <code>region</code> (AWS-Region)<br />Default: <code>region</code><br />For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html\">Working with Amazon RDS on Outposts</a> in the <i>Amazon RDS User Guide</i>.</details>"
  },
  {
    "name": "ca_certificate_identifier",
    "type": "string",
    "description": "<details><summary>The identifier of the CA certificate for this DB instance.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html\">Using SSL/TLS to encrypt a connection to a DB instance</a> in the <i>Amazon RDS User Guide</i> and <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html\">Using SSL/TLS to encrypt a connection to a DB cluster</a> in the <i>Amazon Aurora User Guide</i>.</details>"
  },
  {
    "name": "certificate_details",
    "type": "object",
    "description": "<details><summary>The details of the DB instance’s server certificate.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html\">Using SSL/TLS to encrypt a connection to a DB instance</a> in the <i>Amazon RDS User Guide</i> and <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html\">Using SSL/TLS to encrypt a connection to a DB cluster</a> in the <i>Amazon Aurora User Guide</i>.</details>",
    "children": [
      {
        "name": "ca_identifier",
        "type": "string",
        "description": "The CA identifier of the CA certificate used for the DB instance's server certificate."
      },
      {
        "name": "valid_till",
        "type": "string",
        "description": "The expiration date of the DB instance’s server certificate."
      }
    ]
  },
  {
    "name": "certificate_rotation_restart",
    "type": "boolean",
    "description": "<details><summary>Specifies whether the DB instance is restarted when you rotate your SSL/TLS certificate.</summary>By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate is not updated until the DB instance is restarted.<br />Set this parameter only if you are <i>not</i> using SSL/TLS to connect to the DB instance.<br />If you are using SSL/TLS to connect to the DB instance, follow the appropriate instructions for your DB engine to rotate your SSL/TLS certificate:<br />+  For more information about rotating your SSL/TLS certificate for RDS DB engines, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html\">Rotating Your SSL/TLS Certificate.</a> in the <i>Amazon RDS User Guide.</i><br />+  For more information about rotating your SSL/TLS certificate for Aurora DB engines, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html\">Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide</i>.<br />This setting doesn't apply to RDS Custom DB instances.</details>"
  },
  {
    "name": "character_set_name",
    "type": "string",
    "description": "<details><summary>For supported engines, indicates that the DB instance should be associated with the specified character set.</summary><i>Amazon Aurora</i><br />Not applicable. The character set is managed by the DB cluster. For more information, see <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html\">AWS::RDS::DBCluster</a>.</details>"
  },
  {
    "name": "copy_tags_to_snapshot",
    "type": "boolean",
    "description": "<details><summary>Specifies whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.</summary>This setting doesn't apply to Amazon Aurora DB instances. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting.</details>"
  },
  {
    "name": "custom_iam_instance_profile",
    "type": "string",
    "description": "<details><summary>The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance.</summary>This setting is required for RDS Custom.<br />Constraints:<br />+  The profile must exist in your account.<br />+  The profile must have an IAM role that Amazon EC2 has permissions to assume.<br />+  The instance profile name and the associated IAM role name must start with the prefix <code>AWSRDSCustom</code>.<br />For the list of permissions required for the IAM role, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-setup-orcl.html#custom-setup-orcl.iam-vpc\">Configure IAM and your VPC</a> in the <i>Amazon RDS User Guide</i>.</details>"
  },
  {
    "name": "database_insights_mode",
    "type": "string",
    "description": "<details><summary>The mode of Database Insights to enable for the DB instance.</summary>Aurora DB instances inherit this value from the DB cluster, so you can't change this value.</details>"
  },
  {
    "name": "db_cluster_identifier",
    "type": "string",
    "description": "<details><summary>The identifier of the DB cluster that this DB instance will belong to.</summary>This setting doesn't apply to RDS Custom DB instances.</details>"
  },
  {
    "name": "db_cluster_snapshot_identifier",
    "type": "string",
    "description": "<details><summary>The identifier for the Multi-AZ DB cluster snapshot to restore from.</summary>For more information on Multi-AZ DB clusters, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html\">Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.<br />Constraints:<br />+  Must match the identifier of an existing Multi-AZ DB cluster snapshot.<br />+  Can't be specified when <code>DBSnapshotIdentifier</code> is specified.<br />+  Must be specified when <code>DBSnapshotIdentifier</code> isn't specified.<br />+  If you are restoring from a shared manual Multi-AZ DB cluster snapshot, the <code>DBClusterSnapshotIdentifier</code> must be the ARN of the shared snapshot.<br />+  Can't be the identifier of an Aurora DB cluster snapshot.</details>"
  },
  {
    "name": "db_instance_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "db_instance_class",
    "type": "string",
    "description": "The compute and memory capacity of the DB instance, for example <code>db.m5.large</code>. Not all DB instance classes are available in all AWS-Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html\">DB instance classes</a> in the <i>Amazon RDS User Guide</i> or <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.DBInstanceClass.html\">Aurora DB instance classes</a> in the <i>Amazon Aurora User Guide</i>."
  },
  {
    "name": "db_instance_identifier",
    "type": "string",
    "description": "<details><summary>A name for the DB instance. If you specify a name, AWS CloudFormation converts it to lowercase. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the DB instance. For more information, see <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html\">Name Type</a>.</summary>For information about constraints that apply to DB instance identifiers, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints\">Naming constraints in Amazon RDS</a> in the <i>Amazon RDS User Guide</i>.<br />If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.</details>"
  },
  {
    "name": "db_instance_status",
    "type": "string",
    "description": ""
  },
  {
    "name": "dbi_resource_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "db_name",
    "type": "string",
    "description": "<details><summary>The meaning of this parameter differs according to the database engine you use.</summary>If you specify the <code>DBSnapshotIdentifier</code> property, this property only applies to RDS for Oracle.<br /><i>Amazon Aurora</i><br />Not applicable. The database name is managed by the DB cluster.<br /><i>Db2</i><br />The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance.<br />Constraints:<br />+  Must contain 1 to 64 letters or numbers.<br />+  Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).<br />+  Can't be a word reserved by the specified database engine.<br /><i>MySQL</i><br />The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance.<br />Constraints:<br />+  Must contain 1 to 64 letters or numbers.<br />+  Can't be a word reserved by the specified database engine<br /><i>MariaDB</i><br />The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance.<br />Constraints:<br />+  Must contain 1 to 64 letters or numbers.<br />+  Can't be a word reserved by the specified database engine<br /><i>PostgreSQL</i><br />The name of the database to create when the DB instance is created. If this parameter is not specified, the default <code>postgres</code> database is created in the DB instance.<br />Constraints:<br />+  Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).<br />+  Must contain 1 to 63 characters.<br />+  Can't be a word reserved by the specified database engine<br /><i>Oracle</i><br />The Oracle System ID (SID) of the created DB instance. If you specify <code>null</code>, the default value <code>ORCL</code> is used. You can't specify the string NULL, or any other reserved word, for <code>DBName</code>.<br />Default: <code>ORCL</code><br />Constraints:<br />+  Can't be longer than 8 characters<br /><i>SQL Server</i><br />Not applicable. Must be null.</details>"
  },
  {
    "name": "db_parameter_group_name",
    "type": "string",
    "description": "<details><summary>The name of an existing DB parameter group or a reference to an <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html\">AWS::RDS::DBParameterGroup</a> resource created in the template.</summary>To list all of the available DB parameter group names, use the following command:<br /><code>aws rds describe-db-parameter-groups --query \"DBParameterGroups[].DBParameterGroupName\" --output text</code><br />If any of the data members of the referenced parameter group are changed during an update, the DB instance might need to be restarted, which causes some interruption. If the parameter group contains static parameters, whether they were changed or not, an update triggers a reboot.<br />If you don't specify a value for <code>DBParameterGroupName</code> property, the default DB parameter group for the specified engine and engine version is used.</details>"
  },
  {
    "name": "db_security_groups",
    "type": "array",
    "description": "<details><summary>A list of the DB security groups to assign to the DB instance. The list can include both the name of existing DB security groups or references to AWS::RDS::DBSecurityGroup resources created in the template.</summary>If you set DBSecurityGroups, you must not set VPCSecurityGroups, and vice versa. Also, note that the DBSecurityGroups property exists only for backwards compatibility with older regions and is no longer recommended for providing security information to an RDS DB instance. Instead, use VPCSecurityGroups.<br />If you specify this property, AWS CloudFormation sends only the following properties (if specified) to Amazon RDS during create operations:<br />+   <code>AllocatedStorage</code><br />+   <code>AutoMinorVersionUpgrade</code><br />+   <code>AvailabilityZone</code><br />+   <code>BackupRetentionPeriod</code><br />+   <code>CharacterSetName</code><br />+   <code>DBInstanceClass</code><br />+   <code>DBName</code><br />+   <code>DBParameterGroupName</code><br />+   <code>DBSecurityGroups</code><br />+   <code>DBSubnetGroupName</code><br />+   <code>Engine</code><br />+   <code>EngineVersion</code><br />+   <code>Iops</code><br />+   <code>LicenseModel</code><br />+   <code>MasterUsername</code><br />+   <code>MasterUserPassword</code><br />+   <code>MultiAZ</code><br />+   <code>OptionGroupName</code><br />+   <code>PreferredBackupWindow</code><br />+   <code>PreferredMaintenanceWindow</code><br />All other properties are ignored. Specify a virtual private cloud (VPC) security group if you want to submit other properties, such as <code>StorageType</code>, <code>StorageEncrypted</code>, or <code>KmsKeyId</code>. If you're already using the <code>DBSecurityGroups</code> property, you can't use these other properties by updating your DB instance to use a VPC security group. You must recreate the DB instance.</details>"
  },
  {
    "name": "db_snapshot_identifier",
    "type": "string",
    "description": "<details><summary>The name or Amazon Resource Name (ARN) of the DB snapshot that's used to restore the DB instance. If you're restoring from a shared manual DB snapshot, you must specify the ARN of the snapshot.</summary>By specifying this property, you can create a DB instance from the specified DB snapshot. If the <code>DBSnapshotIdentifier</code> property is an empty string or the <code>AWS::RDS::DBInstance</code> declaration has no <code>DBSnapshotIdentifier</code> property, AWS CloudFormation creates a new database. If the property contains a value (other than an empty string), AWS CloudFormation creates a database from the specified snapshot. If a snapshot with the specified name doesn't exist, AWS CloudFormation can't create the database and it rolls back the stack.<br />Some DB instance properties aren't valid when you restore from a snapshot, such as the <code>MasterUsername</code> and <code>MasterUserPassword</code> properties, and the point-in-time recovery properties <code>RestoreTime</code> and <code>UseLatestRestorableTime</code>. For information about the properties that you can specify, see the <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBInstanceFromDBSnapshot.html\">RestoreDBInstanceFromDBSnapshot</a> action in the <i>Amazon RDS API Reference</i>.<br />After you restore a DB instance with a <code>DBSnapshotIdentifier</code> property, you must specify the same <code>DBSnapshotIdentifier</code> property for any future updates to the DB instance. When you specify this property for an update, the DB instance is not restored from the DB snapshot again, and the data in the database is not changed. However, if you don't specify the <code>DBSnapshotIdentifier</code> property, an empty DB instance is created, and the original DB instance is deleted. If you specify a property that is different from the previous snapshot restore property, a new DB instance is restored from the specified <code>DBSnapshotIdentifier</code> property, and the original DB instance is deleted.<br />If you specify the <code>DBSnapshotIdentifier</code> property to restore a DB instance (as opposed to specifying it for DB instance updates), then don't specify the following properties:<br />+   <code>CharacterSetName</code><br />+   <code>DBClusterIdentifier</code><br />+   <code>DBName</code><br />+   <code>KmsKeyId</code><br />+   <code>MasterUsername</code><br />+   <code>MasterUserPassword</code><br />+   <code>PromotionTier</code><br />+   <code>SourceDBInstanceIdentifier</code><br />+   <code>SourceRegion</code><br />+  <code>StorageEncrypted</code> (for an unencrypted snapshot)<br />+   <code>Timezone</code><br /><i>Amazon Aurora</i><br />Not applicable. Snapshot restore is managed by the DB cluster.</details>"
  },
  {
    "name": "db_subnet_group_name",
    "type": "string",
    "description": "<details><summary>A DB subnet group to associate with the DB instance. If you update this value, the new subnet group must be a subnet group in a new VPC.</summary>If you don't specify a DB subnet group, RDS uses the default DB subnet group if one exists. If a default DB subnet group does not exist, and you don't specify a <code>DBSubnetGroupName</code>, the DB instance fails to launch.<br />For more information about using Amazon RDS in a VPC, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html\">Amazon VPC and Amazon RDS</a> in the <i>Amazon RDS User Guide</i>.<br />This setting doesn't apply to Amazon Aurora DB instances. The DB subnet group is managed by the DB cluster. If specified, the setting must match the DB cluster setting.</details>"
  },
  {
    "name": "db_system_id",
    "type": "string",
    "description": "The Oracle system identifier (SID), which is the name of the Oracle database instance that manages your database files. In this context, the term \"Oracle database instance\" refers exclusively to the system global area (SGA) and Oracle background processes. If you don't specify a SID, the value defaults to <code>RDSCDB</code>. The Oracle SID is also the name of your CDB."
  },
  {
    "name": "dedicated_log_volume",
    "type": "boolean",
    "description": "Indicates whether the DB instance has a dedicated log volume (DLV) enabled."
  },
  {
    "name": "delete_automated_backups",
    "type": "boolean",
    "description": "<details><summary>A value that indicates whether to remove automated backups immediately after the DB instance is deleted. This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB instance is deleted.</summary><i>Amazon Aurora</i><br />Not applicable. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the DB cluster are not deleted.</details>"
  },
  {
    "name": "deletion_protection",
    "type": "boolean",
    "description": "<details><summary>Specifies whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html\">Deleting a DB Instance</a>.</summary>This setting doesn't apply to Amazon Aurora DB instances. You can enable or disable deletion protection for the DB cluster. For more information, see <code>CreateDBCluster</code>. DB instances in a DB cluster can be deleted even when deletion protection is enabled for the DB cluster.</details>"
  },
  {
    "name": "domain",
    "type": "string",
    "description": "<details><summary>The Active Directory directory ID to create the DB instance in. Currently, only Db2, MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html\">Kerberos Authentication</a> in the <i>Amazon RDS User Guide</i>.</details>"
  },
  {
    "name": "domain_auth_secret_arn",
    "type": "string",
    "description": "<details><summary>The ARN for the Secrets Manager secret with the credentials for the user joining the domain.</summary>Example: <code>arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456</code></details>"
  },
  {
    "name": "domain_dns_ips",
    "type": "array",
    "description": "<details><summary>The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers.</summary>Constraints:<br />+  Two IP addresses must be provided. If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list.<br />Example: <code>123.124.125.126,234.235.236.237</code></details>"
  },
  {
    "name": "domain_fqdn",
    "type": "string",
    "description": "<details><summary>The fully qualified domain name (FQDN) of an Active Directory domain.</summary>Constraints:<br />+  Can't be longer than 64 characters.<br />Example: <code>mymanagedADtest.mymanagedAD.mydomain</code></details>"
  },
  {
    "name": "domain_iam_role_name",
    "type": "string",
    "description": "<details><summary>The name of the IAM role to use when making API calls to the Directory Service.</summary>This setting doesn't apply to the following DB instances:<br />+  Amazon Aurora (The domain is managed by the DB cluster.)<br />+  RDS Custom</details>"
  },
  {
    "name": "domain_ou",
    "type": "string",
    "description": "<details><summary>The Active Directory organizational unit for your DB instance to join.</summary>Constraints:<br />+  Must be in the distinguished name format.<br />+  Can't be longer than 64 characters.<br />Example: <code>OU=mymanagedADtestOU,DC=mymanagedADtest,DC=mymanagedAD,DC=mydomain</code></details>"
  },
  {
    "name": "enable_cloudwatch_logs_exports",
    "type": "array",
    "description": "<details><summary>The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch\">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Relational Database Service User Guide</i>.</summary><i>Amazon Aurora</i><br />Not applicable. CloudWatch Logs exports are managed by the DB cluster.<br /><i>Db2</i><br />Valid values: <code>diag.log</code>, <code>notify.log</code><br /><i>MariaDB</i><br />Valid values: <code>audit</code>, <code>error</code>, <code>general</code>, <code>slowquery</code><br /><i>Microsoft SQL Server</i><br />Valid values: <code>agent</code>, <code>error</code><br /><i>MySQL</i><br />Valid values: <code>audit</code>, <code>error</code>, <code>general</code>, <code>slowquery</code><br /><i>Oracle</i><br />Valid values: <code>alert</code>, <code>audit</code>, <code>listener</code>, <code>trace</code>, <code>oemagent</code><br /><i>PostgreSQL</i><br />Valid values: <code>postgresql</code>, <code>upgrade</code></details>"
  },
  {
    "name": "enable_iam_database_authentication",
    "type": "boolean",
    "description": "<details><summary>A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.</summary>This property is supported for RDS for MariaDB, RDS for MySQL, and RDS for PostgreSQL. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html\">IAM Database Authentication for MariaDB, MySQL, and PostgreSQL</a> in the <i>Amazon RDS User Guide.</i><br /><i>Amazon Aurora</i><br />Not applicable. Mapping AWS IAM accounts to database accounts is managed by the DB cluster.</details>"
  },
  {
    "name": "enable_performance_insights",
    "type": "boolean",
    "description": "<details><summary>Specifies whether to enable Performance Insights for the DB instance. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html\">Using Amazon Performance Insights</a> in the <i>Amazon RDS User Guide</i>.</summary>This setting doesn't apply to RDS Custom DB instances.</details>"
  },
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
    "name": "engine",
    "type": "string",
    "description": "<details><summary>The name of the database engine to use for this DB instance. Not every database engine is available in every AWS Region.</summary>This property is required when creating a DB instance.<br />You can convert an Oracle database from the non-CDB architecture to the container database (CDB) architecture by updating the <code>Engine</code> value in your templates from <code>oracle-ee</code> to <code>oracle-ee-cdb</code> or from <code>oracle-se2</code> to <code>oracle-se2-cdb</code>. Converting to the CDB architecture requires an interruption.<br />Valid Values:<br />+  <code>aurora-mysql</code> (for Aurora MySQL DB instances)<br />+  <code>aurora-postgresql</code> (for Aurora PostgreSQL DB instances)<br />+  <code>custom-oracle-ee</code> (for RDS Custom for Oracle DB instances)<br />+  <code>custom-oracle-ee-cdb</code> (for RDS Custom for Oracle DB instances)<br />+  <code>custom-sqlserver-ee</code> (for RDS Custom for SQL Server DB instances)<br />+  <code>custom-sqlserver-se</code> (for RDS Custom for SQL Server DB instances)<br />+  <code>custom-sqlserver-web</code> (for RDS Custom for SQL Server DB instances)<br />+   <code>db2-ae</code><br />+   <code>db2-se</code><br />+   <code>mariadb</code><br />+   <code>mysql</code><br />+   <code>oracle-ee</code><br />+   <code>oracle-ee-cdb</code><br />+   <code>oracle-se2</code><br />+   <code>oracle-se2-cdb</code><br />+   <code>postgres</code><br />+   <code>sqlserver-ee</code><br />+   <code>sqlserver-se</code><br />+   <code>sqlserver-ex</code><br />+   <code>sqlserver-web</code></details>"
  },
  {
    "name": "engine_lifecycle_support",
    "type": "string",
    "description": "<details><summary>The life cycle type for this DB instance.</summary>By default, this value is set to <code>open-source-rds-extended-support</code>, which enrolls your DB instance into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to <code>open-source-rds-extended-support-disabled</code>. In this case, creating the DB instance will fail if the DB major version is past its end of standard support date.<br />This setting applies only to RDS for MySQL and RDS for PostgreSQL. For Amazon Aurora DB instances, the life cycle type is managed by the DB cluster.<br />You can use this setting to enroll your DB instance into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB instance past the end of standard support for that engine version. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html\">Amazon RDS Extended Support with Amazon RDS</a> in the <i>Amazon RDS User Guide</i>.<br />Valid Values: <code>open-source-rds-extended-support | open-source-rds-extended-support-disabled</code><br />Default: <code>open-source-rds-extended-support</code></details>"
  },
  {
    "name": "engine_version",
    "type": "string",
    "description": "<details><summary>The version number of the database engine to use.</summary>For a list of valid engine versions, use the <code>DescribeDBEngineVersions</code> action.<br />The following are the database engines and links to information about the major and minor versions that are available with Amazon RDS. Not every database engine is available for every AWS Region.<br /><i>Amazon Aurora</i><br />Not applicable. The version number of the database engine to be used by the DB instance is managed by the DB cluster.<br /><i>Db2</i><br />See <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Db2.html#Db2.Concepts.VersionMgmt\">Amazon RDS for Db2</a> in the <i>Amazon RDS User Guide.</i><br /><i>MariaDB</i><br />See <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MariaDB.html#MariaDB.Concepts.VersionMgmt\">MariaDB on Amazon RDS Versions</a> in the <i>Amazon RDS User Guide.</i><br /><i>Microsoft SQL Server</i><br />See <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.VersionSupport\">Microsoft SQL Server Versions on Amazon RDS</a> in the <i>Amazon RDS User Guide.</i><br /><i>MySQL</i><br />See <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt\">MySQL on Amazon RDS Versions</a> in the <i>Amazon RDS User Guide.</i><br /><i>Oracle</i><br />See <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.PatchComposition.html\">Oracle Database Engine Release Notes</a> in the <i>Amazon RDS User Guide.</i><br /><i>PostgreSQL</i><br />See <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts.General.DBVersions\">Supported PostgreSQL Database Versions</a> in the <i>Amazon RDS User Guide.</i></details>"
  },
  {
    "name": "manage_master_user_password",
    "type": "boolean",
    "description": "<details><summary>Specifies whether to manage the master user password with AWS Secrets Manager.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html\">Password management with Secrets Manager</a> in the <i>Amazon RDS User Guide.</i><br />Constraints:<br />+  Can't manage the master user password with AWS Secrets Manager if <code>MasterUserPassword</code> is specified.</details>"
  },
  {
    "name": "instance_create_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "iops",
    "type": "integer",
    "description": "<details><summary>The number of I/O operations per second (IOPS) that the database provisions. The value must be equal to or greater than 1000.</summary>If you specify this property, you must follow the range of allowed ratios of your requested IOPS rate to the amount of storage that you allocate (IOPS to allocated storage). For example, you can provision an Oracle database instance with 1000 IOPS and 200 GiB of storage (a ratio of 5:1), or specify 2000 IOPS with 200 GiB of storage (a ratio of 10:1). For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/DeveloperGuide/CHAP_Storage.html#USER_PIOPS\">Amazon RDS Provisioned IOPS Storage to Improve Performance</a> in the <i>Amazon RDS User Guide</i>.<br />If you specify <code>io1</code> for the <code>StorageType</code> property, then you must also specify the <code>Iops</code> property.<br />Constraints:<br />+  For RDS for Db2, MariaDB, MySQL, Oracle, and PostgreSQL - Must be a multiple between .5 and 50 of the storage amount for the DB instance.<br />+  For RDS for SQL Server - Must be a multiple between 1 and 50 of the storage amount for the DB instance.</details>"
  },
  {
    "name": "is_storage_config_upgrade_available",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "<details><summary>The ARN of the AWS KMS key that's used to encrypt the DB instance, such as <code>arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef</code>. If you enable the StorageEncrypted property but don't specify this property, AWS CloudFormation uses the default KMS key. If you specify this property, you must set the StorageEncrypted property to true.</summary>If you specify the <code>SourceDBInstanceIdentifier</code> or <code>SourceDbiResourceId</code> property, don't specify this property. The value is inherited from the source DB instance, and if the DB instance is encrypted, the specified <code>KmsKeyId</code> property is used. However, if the source DB instance is in a different AWS Region, you must specify a KMS key ID.<br />If you specify the <code>SourceDBInstanceAutomatedBackupsArn</code> property, don't specify this property. The value is inherited from the source DB instance automated backup, and if the automated backup is encrypted, the specified <code>KmsKeyId</code> property is used.<br />If you create an encrypted read replica in a different AWS Region, then you must specify a KMS key for the destination AWS Region. KMS encryption keys are specific to the region that they're created in, and you can't use encryption keys from one region in another region.<br />If you specify the <code>DBSnapshotIdentifier</code> property, don't specify this property. The <code>StorageEncrypted</code> property value is inherited from the snapshot. If the DB instance is encrypted, the specified <code>KmsKeyId</code> property is also inherited from the snapshot.<br />If you specify <code>DBSecurityGroups</code>, AWS CloudFormation ignores this property. To specify both a security group and this property, you must use a VPC security group. For more information about Amazon RDS and VPC, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html\">Using Amazon RDS with Amazon VPC</a> in the <i>Amazon RDS User Guide</i>.<br /><i>Amazon Aurora</i><br />Not applicable. The KMS key identifier is managed by the DB cluster.</details>"
  },
  {
    "name": "latest_restorable_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "license_model",
    "type": "string",
    "description": "<details><summary>License model information for this DB instance.</summary>Valid Values:<br />+  Aurora MySQL - <code>general-public-license</code><br />+  Aurora PostgreSQL - <code>postgresql-license</code><br />+  RDS for Db2 - <code>bring-your-own-license</code>. For more information about RDS for Db2 licensing, see [](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-licensing.html) in the <i>Amazon RDS User Guide.</i><br />+  RDS for MariaDB - <code>general-public-license</code><br />+  RDS for Microsoft SQL Server - <code>license-included</code><br />+  RDS for MySQL - <code>general-public-license</code><br />+  RDS for Oracle - <code>bring-your-own-license</code> or <code>license-included</code><br />+  RDS for PostgreSQL - <code>postgresql-license</code><br />If you've specified <code>DBSecurityGroups</code> and then you update the license model, AWS CloudFormation replaces the underlying DB instance. This will incur some interruptions to database availability.</details>"
  },
  {
    "name": "master_username",
    "type": "string",
    "description": "<details><summary>The master user name for the DB instance.</summary>If you specify the <code>SourceDBInstanceIdentifier</code> or <code>DBSnapshotIdentifier</code> property, don't specify this property. The value is inherited from the source DB instance or snapshot.<br />When migrating a self-managed Db2 database, we recommend that you use the same master username as your self-managed Db2 instance name.<br /><i>Amazon Aurora</i><br />Not applicable. The name for the master user is managed by the DB cluster.<br /><i>RDS for Db2</i><br />Constraints:<br />+  Must be 1 to 16 letters or numbers.<br />+  First character must be a letter.<br />+  Can't be a reserved word for the chosen database engine.<br /><i>RDS for MariaDB</i><br />Constraints:<br />+  Must be 1 to 16 letters or numbers.<br />+  Can't be a reserved word for the chosen database engine.<br /><i>RDS for Microsoft SQL Server</i><br />Constraints:<br />+  Must be 1 to 128 letters or numbers.<br />+  First character must be a letter.<br />+  Can't be a reserved word for the chosen database engine.<br /><i>RDS for MySQL</i><br />Constraints:<br />+  Must be 1 to 16 letters or numbers.<br />+  First character must be a letter.<br />+  Can't be a reserved word for the chosen database engine.<br /><i>RDS for Oracle</i><br />Constraints:<br />+  Must be 1 to 30 letters or numbers.<br />+  First character must be a letter.<br />+  Can't be a reserved word for the chosen database engine.<br /><i>RDS for PostgreSQL</i><br />Constraints:<br />+  Must be 1 to 63 letters or numbers.<br />+  First character must be a letter.<br />+  Can't be a reserved word for the chosen database engine.</details>"
  },
  {
    "name": "master_user_password",
    "type": "string",
    "description": "<details><summary>The password for the master user. The password can include any printable ASCII character except \"/\", \"\"\", or \"@\".</summary><i>Amazon Aurora</i><br />Not applicable. The password for the master user is managed by the DB cluster.<br /><i>RDS for Db2</i><br />Must contain from 8 to 255 characters.<br /><i>RDS for MariaDB</i><br />Constraints: Must contain from 8 to 41 characters.<br /><i>RDS for Microsoft SQL Server</i><br />Constraints: Must contain from 8 to 128 characters.<br /><i>RDS for MySQL</i><br />Constraints: Must contain from 8 to 41 characters.<br /><i>RDS for Oracle</i><br />Constraints: Must contain from 8 to 30 characters.<br /><i>RDS for PostgreSQL</i><br />Constraints: Must contain from 8 to 128 characters.</details>"
  },
  {
    "name": "master_user_secret",
    "type": "object",
    "description": "<details><summary>The secret managed by RDS in AWS Secrets Manager for the master user password.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html\">Password management with Secrets Manager</a> in the <i>Amazon RDS User Guide.</i></details>",
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
    "name": "max_allocated_storage",
    "type": "integer",
    "description": "<details><summary>The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.</summary>For more information about this setting, including limitations that apply to it, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling\">Managing capacity automatically with Amazon RDS storage autoscaling</a> in the <i>Amazon RDS User Guide</i>.<br />This setting doesn't apply to the following DB instances:<br />+  Amazon Aurora (Storage is managed by the DB cluster.)<br />+  RDS Custom</details>"
  },
  {
    "name": "monitoring_interval",
    "type": "integer",
    "description": "<details><summary>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collection of Enhanced Monitoring metrics, specify <code>0</code>.</summary>If <code>MonitoringRoleArn</code> is specified, then you must set <code>MonitoringInterval</code> to a value other than <code>0</code>.<br />This setting doesn't apply to RDS Custom DB instances.<br />Valid Values: <code>0 | 1 | 5 | 10 | 15 | 30 | 60</code><br />Default: <code>0</code></details>"
  },
  {
    "name": "monitoring_role_arn",
    "type": "string",
    "description": "<details><summary>The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling\">Setting Up and Enabling Enhanced Monitoring</a> in the <i>Amazon RDS User Guide</i>.</summary>If <code>MonitoringInterval</code> is set to a value other than <code>0</code>, then you must supply a <code>MonitoringRoleArn</code> value.<br />This setting doesn't apply to RDS Custom DB instances.</details>"
  },
  {
    "name": "multi_az",
    "type": "boolean",
    "description": "<details><summary>Specifies whether the DB instance is a Multi-AZ deployment. You can't set the <code>AvailabilityZone</code> parameter if the DB instance is a Multi-AZ deployment.</summary>This setting doesn't apply to Amazon Aurora because the DB instance Availability Zones (AZs) are managed by the DB cluster.</details>"
  },
  {
    "name": "nchar_character_set_name",
    "type": "string",
    "description": "<details><summary>The name of the NCHAR character set for the Oracle DB instance.</summary>This setting doesn't apply to RDS Custom DB instances.</details>"
  },
  {
    "name": "network_type",
    "type": "string",
    "description": "<details><summary>The network type of the DB instance.</summary>Valid values:<br />+   <code>IPV4</code><br />+   <code>DUAL</code><br />The network type is determined by the <code>DBSubnetGroup</code> specified for the DB instance. A <code>DBSubnetGroup</code> can support only the IPv4 protocol or the IPv4 and IPv6 protocols (<code>DUAL</code>).<br />For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html\">Working with a DB instance in a VPC</a> in the <i>Amazon RDS User Guide.</i></details>"
  },
  {
    "name": "option_group_name",
    "type": "string",
    "description": "<details><summary>Indicates that the DB instance should be associated with the specified option group.</summary>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group. Also, that option group can't be removed from a DB instance once it is associated with a DB instance.</details>"
  },
  {
    "name": "percent_progress",
    "type": "string",
    "description": ""
  },
  {
    "name": "performance_insights_kms_key_id",
    "type": "string",
    "description": "<details><summary>The AWS KMS key identifier for encryption of Performance Insights data.</summary>The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.<br />If you do not specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS uses your default KMS key. There is a default KMS key for your AWS account. Your AWS account has a different default KMS key for each AWS Region.<br />For information about enabling Performance Insights, see <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-enableperformanceinsights\">EnablePerformanceInsights</a>.</details>"
  },
  {
    "name": "performance_insights_retention_period",
    "type": "integer",
    "description": "<details><summary>The number of days to retain Performance Insights data. When creating a DB instance without enabling Performance Insights, you can't specify the parameter <code>PerformanceInsightsRetentionPeriod</code>.</summary>This setting doesn't apply to RDS Custom DB instances.<br />Valid Values:<br />+   <code>7</code><br />+  <i>month</i> <i> 31, where </i>month<i> is a number of months from 1-23. Examples: <code>93</code> (3 months </i> 31), <code>341</code> (11 months <i> 31), <code>589</code> (19 months </i> 31)<br />+   <code>731</code><br />Default: <code>7</code> days<br />If you specify a retention period that isn't valid, such as <code>94</code>, Amazon RDS returns an error.</details>"
  },
  {
    "name": "port",
    "type": "string",
    "description": "<details><summary>The port number on which the database accepts connections.</summary>This setting doesn't apply to Aurora DB instances. The port number is managed by the cluster.<br />Valid Values: <code>1150-65535</code><br />Default:<br />+  RDS for Db2 - <code>50000</code><br />+  RDS for MariaDB - <code>3306</code><br />+  RDS for Microsoft SQL Server - <code>1433</code><br />+  RDS for MySQL - <code>3306</code><br />+  RDS for Oracle - <code>1521</code><br />+  RDS for PostgreSQL - <code>5432</code><br />Constraints:<br />+  For RDS for Microsoft SQL Server, the value can't be <code>1234</code>, <code>1434</code>, <code>3260</code>, <code>3343</code>, <code>3389</code>, <code>47001</code>, or <code>49152-49156</code>.</details>"
  },
  {
    "name": "preferred_backup_window",
    "type": "string",
    "description": "<details><summary>The daily time range during which automated backups are created if automated backups are enabled, using the <code>BackupRetentionPeriod</code> parameter. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow\">Backup Window</a> in the <i>Amazon RDS User Guide.</i></summary>Constraints:<br />+  Must be in the format <code>hh24:mi-hh24:mi</code>.<br />+  Must be in Universal Coordinated Time (UTC).<br />+  Must not conflict with the preferred maintenance window.<br />+  Must be at least 30 minutes.<br /><i>Amazon Aurora</i><br />Not applicable. The daily time range for creating automated backups is managed by the DB cluster.</details>"
  },
  {
    "name": "preferred_maintenance_window",
    "type": "string",
    "description": "<details><summary>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</summary>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code><br />The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow\">Maintaining a DB instance</a> in the <i>Amazon RDS User Guide.</i><br />This property applies when AWS CloudFormation initially creates the DB instance. If you use AWS CloudFormation to update the DB instance, those updates are applied immediately.<br />Constraints: Minimum 30-minute window.</details>"
  },
  {
    "name": "processor_features",
    "type": "array",
    "description": "<details><summary>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</summary>This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.</details>",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": "The name of the processor feature. Valid names are <code>coreCount</code> and <code>threadsPerCore</code>."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value of a processor feature."
      }
    ]
  },
  {
    "name": "promotion_tier",
    "type": "integer",
    "description": "<details><summary>The order of priority in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html#Aurora.Managing.FaultTolerance\">Fault Tolerance for an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.</summary>This setting doesn't apply to RDS Custom DB instances.<br />Default: <code>1</code><br />Valid Values: <code>0 - 15</code></details>"
  },
  {
    "name": "publicly_accessible",
    "type": "boolean",
    "description": "<details><summary>Indicates whether the DB instance is an internet-facing instance. If you specify true, AWS CloudFormation creates an instance with a publicly resolvable DNS name, which resolves to a public IP address. If you specify false, AWS CloudFormation creates an internal instance with a DNS name that resolves to a private IP address.</summary>The default behavior value depends on your VPC setup and the database subnet group. For more information, see the <code>PubliclyAccessible</code> parameter in the <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html\">CreateDBInstance</a> in the <i>Amazon RDS API Reference</i>.</details>"
  },
  {
    "name": "read_replica_db_cluster_identifiers",
    "type": "array",
    "description": ""
  },
  {
    "name": "read_replica_db_instance_identifiers",
    "type": "array",
    "description": ""
  },
  {
    "name": "replica_mode",
    "type": "string",
    "description": "<details><summary>The open mode of an Oracle read replica. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html\">Working with Oracle Read Replicas for Amazon RDS</a> in the <i>Amazon RDS User Guide</i>.</summary>This setting is only supported in RDS for Oracle.<br />Default: <code>open-read-only</code><br />Valid Values: <code>open-read-only</code> or <code>mounted</code></details>"
  },
  {
    "name": "restore_time",
    "type": "string",
    "description": "<details><summary>The date and time to restore from. This parameter applies to point-in-time recovery. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html\">Restoring a DB instance to a specified time</a> in the in the <i>Amazon RDS User Guide</i>.</summary>Constraints:<br />+  Must be a time in Universal Coordinated Time (UTC) format.<br />+  Must be before the latest restorable time for the DB instance.<br />+  Can't be specified if the <code>UseLatestRestorableTime</code> parameter is enabled.<br />Example: <code>2009-09-07T23:45:00Z</code></details>"
  },
  {
    "name": "resume_full_automation_mode_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "secondary_availability_zone",
    "type": "string",
    "description": ""
  },
  {
    "name": "source_db_cluster_identifier",
    "type": "string",
    "description": "<details><summary>The identifier of the Multi-AZ DB cluster that will act as the source for the read replica. Each DB cluster can have up to 15 read replicas.</summary>Constraints:<br />+  Must be the identifier of an existing Multi-AZ DB cluster.<br />+  Can't be specified if the <code>SourceDBInstanceIdentifier</code> parameter is also specified.<br />+  The specified DB cluster must have automatic backups enabled, that is, its backup retention period must be greater than 0.<br />+  The source DB cluster must be in the same AWS-Region as the read replica. Cross-Region replication isn't supported.</details>"
  },
  {
    "name": "source_dbi_resource_id",
    "type": "string",
    "description": "The resource ID of the source DB instance from which to restore."
  },
  {
    "name": "source_db_instance_automated_backups_arn",
    "type": "string",
    "description": "<details><summary>The Amazon Resource Name (ARN) of the replicated automated backups from which to restore, for example, <code>arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE</code>.</summary>This setting doesn't apply to RDS Custom.</details>"
  },
  {
    "name": "source_db_instance_identifier",
    "type": "string",
    "description": "<details><summary>If you want to create a read replica DB instance, specify the ID of the source DB instance. Each DB instance can have a limited number of read replicas. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/DeveloperGuide/USER_ReadRepl.html\">Working with Read Replicas</a> in the <i>Amazon RDS User Guide</i>.</summary>For information about constraints that apply to DB instance identifiers, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints\">Naming constraints in Amazon RDS</a> in the <i>Amazon RDS User Guide</i>.<br />The <code>SourceDBInstanceIdentifier</code> property determines whether a DB instance is a read replica. If you remove the <code>SourceDBInstanceIdentifier</code> property from your template and then update your stack, AWS CloudFormation promotes the read replica to a standalone DB instance.<br />If you specify the <code>UseLatestRestorableTime</code> or <code>RestoreTime</code> properties in conjunction with the <code>SourceDBInstanceIdentifier</code> property, RDS restores the DB instance to the requested point in time, thereby creating a new DB instance.<br />+  If you specify a source DB instance that uses VPC security groups, we recommend that you specify the <code>VPCSecurityGroups</code> property. If you don't specify the property, the read replica inherits the value of the <code>VPCSecurityGroups</code> property from the source DB when you create the replica. However, if you update the stack, AWS CloudFormation reverts the replica's <code>VPCSecurityGroups</code> property to the default value because it's not defined in the stack's template. This change might cause unexpected issues.<br />+  Read replicas don't support deletion policies. AWS CloudFormation ignores any deletion policy that's associated with a read replica.<br />+  If you specify <code>SourceDBInstanceIdentifier</code>, don't specify the <code>DBSnapshotIdentifier</code> property. You can't create a read replica from a snapshot.<br />+  Don't set the <code>BackupRetentionPeriod</code>, <code>DBName</code>, <code>MasterUsername</code>, <code>MasterUserPassword</code>, and <code>PreferredBackupWindow</code> properties. The database attributes are inherited from the source DB instance, and backups are disabled for read replicas.<br />+  If the source DB instance is in a different region than the read replica, specify the source region in <code>SourceRegion</code>, and specify an ARN for a valid DB instance in <code>SourceDBInstanceIdentifier</code>. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html#USER_Tagging.ARN\">Constructing a Amazon RDS Amazon Resource Name (ARN)</a> in the <i>Amazon RDS User Guide</i>.<br />+  For DB instances in Amazon Aurora clusters, don't specify this property. Amazon RDS automatically assigns writer and reader DB instances.</details>"
  },
  {
    "name": "source_region",
    "type": "string",
    "description": "The ID of the region that contains the source DB instance for the read replica."
  },
  {
    "name": "status_infos",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "message",
        "type": "string",
        "description": "Details of the error if there is an error for the instance. If the instance isn't in an error state, this value is blank."
      },
      {
        "name": "normal",
        "type": "boolean",
        "description": "Indicates whether the instance is operating normally (TRUE) or is in an error state (FALSE)."
      },
      {
        "name": "status",
        "type": "string",
        "description": "The status of the DB instance. For a StatusType of read replica, the values can be replicating, replication stop point set, replication stop point reached, error, stopped, or terminated."
      },
      {
        "name": "status_type",
        "type": "string",
        "description": "This value is currently \"read replication.\""
      }
    ]
  },
  {
    "name": "storage_encrypted",
    "type": "boolean",
    "description": "<details><summary>A value that indicates whether the DB instance is encrypted. By default, it isn't encrypted.</summary>If you specify the <code>KmsKeyId</code> property, then you must enable encryption.<br />If you specify the <code>SourceDBInstanceIdentifier</code> or <code>SourceDbiResourceId</code> property, don't specify this property. The value is inherited from the source DB instance, and if the DB instance is encrypted, the specified <code>KmsKeyId</code> property is used.<br />If you specify the <code>SourceDBInstanceAutomatedBackupsArn</code> property, don't specify this property. The value is inherited from the source DB instance automated backup.<br />If you specify <code>DBSnapshotIdentifier</code> property, don't specify this property. The value is inherited from the snapshot.<br /><i>Amazon Aurora</i><br />Not applicable. The encryption for DB instances is managed by the DB cluster.</details>"
  },
  {
    "name": "storage_type",
    "type": "string",
    "description": "<details><summary>The storage type to associate with the DB instance.</summary>If you specify <code>io1</code>, <code>io2</code>, or <code>gp3</code>, you must also include a value for the <code>Iops</code> parameter.<br />This setting doesn't apply to Amazon Aurora DB instances. Storage is managed by the DB cluster.<br />Valid Values: <code>gp2 | gp3 | io1 | io2 | standard</code><br />Default: <code>io1</code>, if the <code>Iops</code> parameter is specified. Otherwise, <code>gp3</code>.</details>"
  },
  {
    "name": "storage_throughput",
    "type": "integer",
    "description": "<details><summary>Specifies the storage throughput value, in mebibyte per second (MiBps), for the DB instance. This setting applies only to the <code>gp3</code> storage type.</summary>This setting doesn't apply to RDS Custom or Amazon Aurora.</details>"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags to assign to the DB instance.",
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
    "name": "tde_credential_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "tde_credential_password",
    "type": "string",
    "description": ""
  },
  {
    "name": "timezone",
    "type": "string",
    "description": "The time zone of the DB instance. The time zone parameter is currently supported only by <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-time-zone\">RDS for Db2</a> and <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.TimeZone\">RDS for SQL Server</a>."
  },
  {
    "name": "use_default_processor_features",
    "type": "boolean",
    "description": "<details><summary>Specifies whether the DB instance class of the DB instance uses its default processor features.</summary>This setting doesn't apply to RDS Custom DB instances.</details>"
  },
  {
    "name": "use_latest_restorable_time",
    "type": "boolean",
    "description": "<details><summary>Specifies whether the DB instance is restored from the latest backup time. By default, the DB instance isn't restored from the latest backup time. This parameter applies to point-in-time recovery. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html\">Restoring a DB instance to a specified time</a> in the in the <i>Amazon RDS User Guide</i>.</summary>Constraints:<br />+  Can't be specified if the <code>RestoreTime</code> parameter is provided.</details>"
  },
  {
    "name": "vpc_security_groups",
    "type": "array",
    "description": "<details><summary>A list of the VPC security group IDs to assign to the DB instance. The list can include both the physical IDs of existing VPC security groups and references to <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group.html\">AWS::EC2::SecurityGroup</a> resources created in the template.</summary>If you plan to update the resource, don't specify VPC security groups in a shared VPC.<br />If you set <code>VPCSecurityGroups</code>, you must not set <a href=\"https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-dbsecuritygroups\">DBSecurityGroups</a>, and vice versa.<br />You can migrate a DB instance in your stack from an RDS DB security group to a VPC security group, but keep the following in mind:<br />+  You can't revert to using an RDS security group after you establish a VPC security group membership.<br />+  When you migrate your DB instance to VPC security groups, if your stack update rolls back because the DB instance update fails or because an update fails in another AWS CloudFormation resource, the rollback fails because it can't revert to an RDS security group.<br />+  To use the properties that are available when you use a VPC security group, you must recreate the DB instance. If you don't, AWS CloudFormation submits only the property values that are listed in the <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-dbsecuritygroups\">DBSecurityGroups</a> property.<br />To avoid this situation, migrate your DB instance to using VPC security groups only when that is the only change in your stack template.<br /><i>Amazon Aurora</i><br />Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. If specified, the setting must match the DB cluster setting.</details>"
  },
  {
    "name": "apply_immediately",
    "type": "boolean",
    "description": "<details><summary>Specifies whether changes to the DB instance and any pending modifications are applied immediately, regardless of the <code>PreferredMaintenanceWindow</code> setting. If set to <code>false</code>, changes are applied during the next maintenance window. Until RDS applies the changes, the DB instance remains in a drift state. As a result, the configuration doesn't fully reflect the requested modifications and temporarily diverges from the intended state.</summary>In addition to the settings described in <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html\">Modifying a DB instance</a>, this property also determines whether the DB instance reboots when a static parameter is modified in the associated DB parameter group.<br />Default: <code>true</code></details>"
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
    "name": "db_instance_identifier",
    "type": "string",
    "description": "<details><summary>A name for the DB instance. If you specify a name, AWS CloudFormation converts it to lowercase. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the DB instance. For more information, see <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html\">Name Type</a>.</summary>For information about constraints that apply to DB instance identifiers, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints\">Naming constraints in Amazon RDS</a> in the <i>Amazon RDS User Guide</i>.<br />If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.</details>"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html"><code>AWS::RDS::DBInstance</code></a>.

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
    <td><code>db_instances</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>db_instances</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>db_instances</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>db_instances_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>db_instances</code></td>
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

Gets all properties from an individual <code>db_instance</code>.
```sql
SELECT
  region,
  allocated_storage,
  allow_major_version_upgrade,
  associated_roles,
  auto_minor_version_upgrade,
  automatic_backup_replication_region,
  automatic_backup_replication_kms_key_id,
  automatic_backup_replication_retention_period,
  automatic_restart_time,
  availability_zone,
  backup_retention_period,
  backup_target,
  ca_certificate_identifier,
  certificate_details,
  certificate_rotation_restart,
  character_set_name,
  copy_tags_to_snapshot,
  custom_iam_instance_profile,
  database_insights_mode,
  db_cluster_identifier,
  db_cluster_snapshot_identifier,
  db_instance_arn,
  db_instance_class,
  db_instance_identifier,
  db_instance_status,
  dbi_resource_id,
  db_name,
  db_parameter_group_name,
  db_security_groups,
  db_snapshot_identifier,
  db_subnet_group_name,
  db_system_id,
  dedicated_log_volume,
  delete_automated_backups,
  deletion_protection,
  domain,
  domain_auth_secret_arn,
  domain_dns_ips,
  domain_fqdn,
  domain_iam_role_name,
  domain_ou,
  enable_cloudwatch_logs_exports,
  enable_iam_database_authentication,
  enable_performance_insights,
  endpoint,
  engine,
  engine_lifecycle_support,
  engine_version,
  manage_master_user_password,
  instance_create_time,
  iops,
  is_storage_config_upgrade_available,
  kms_key_id,
  latest_restorable_time,
  license_model,
  listener_endpoint,
  master_username,
  master_user_password,
  master_user_secret,
  max_allocated_storage,
  monitoring_interval,
  monitoring_role_arn,
  multi_az,
  nchar_character_set_name,
  network_type,
  option_group_name,
  percent_progress,
  performance_insights_kms_key_id,
  performance_insights_retention_period,
  port,
  preferred_backup_window,
  preferred_maintenance_window,
  processor_features,
  promotion_tier,
  publicly_accessible,
  read_replica_db_cluster_identifiers,
  read_replica_db_instance_identifiers,
  replica_mode,
  restore_time,
  resume_full_automation_mode_time,
  secondary_availability_zone,
  source_db_cluster_identifier,
  source_dbi_resource_id,
  source_db_instance_automated_backups_arn,
  source_db_instance_identifier,
  source_region,
  status_infos,
  storage_encrypted,
  storage_type,
  storage_throughput,
  tags,
  tde_credential_arn,
  tde_credential_password,
  timezone,
  use_default_processor_features,
  use_latest_restorable_time,
  vpc_security_groups,
  apply_immediately
FROM awscc.rds.db_instances
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ db_instance_identifier }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>db_instances</code> in a region.
```sql
SELECT
  region,
  db_instance_identifier
FROM awscc.rds.db_instances_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>db_instance</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.rds.db_instances (
  AllocatedStorage,
  AllowMajorVersionUpgrade,
  AssociatedRoles,
  AutoMinorVersionUpgrade,
  AutomaticBackupReplicationRegion,
  AutomaticBackupReplicationKmsKeyId,
  AutomaticBackupReplicationRetentionPeriod,
  AvailabilityZone,
  BackupRetentionPeriod,
  BackupTarget,
  CACertificateIdentifier,
  CertificateRotationRestart,
  CharacterSetName,
  CopyTagsToSnapshot,
  CustomIAMInstanceProfile,
  DatabaseInsightsMode,
  DBClusterIdentifier,
  DBClusterSnapshotIdentifier,
  DBInstanceClass,
  DBInstanceIdentifier,
  DBName,
  DBParameterGroupName,
  DBSecurityGroups,
  DBSnapshotIdentifier,
  DBSubnetGroupName,
  DBSystemId,
  DedicatedLogVolume,
  DeleteAutomatedBackups,
  DeletionProtection,
  Domain,
  DomainAuthSecretArn,
  DomainDnsIps,
  DomainFqdn,
  DomainIAMRoleName,
  DomainOu,
  EnableCloudwatchLogsExports,
  EnableIAMDatabaseAuthentication,
  EnablePerformanceInsights,
  Engine,
  EngineLifecycleSupport,
  EngineVersion,
  ManageMasterUserPassword,
  Iops,
  KmsKeyId,
  LicenseModel,
  MasterUsername,
  MasterUserPassword,
  MasterUserSecret,
  MaxAllocatedStorage,
  MonitoringInterval,
  MonitoringRoleArn,
  MultiAZ,
  NcharCharacterSetName,
  NetworkType,
  OptionGroupName,
  PerformanceInsightsKMSKeyId,
  PerformanceInsightsRetentionPeriod,
  Port,
  PreferredBackupWindow,
  PreferredMaintenanceWindow,
  ProcessorFeatures,
  PromotionTier,
  PubliclyAccessible,
  ReplicaMode,
  RestoreTime,
  SourceDBClusterIdentifier,
  SourceDbiResourceId,
  SourceDBInstanceAutomatedBackupsArn,
  SourceDBInstanceIdentifier,
  SourceRegion,
  StorageEncrypted,
  StorageType,
  StorageThroughput,
  Tags,
  TdeCredentialArn,
  TdeCredentialPassword,
  Timezone,
  UseDefaultProcessorFeatures,
  UseLatestRestorableTime,
  VPCSecurityGroups,
  ApplyImmediately,
  region
)
SELECT
  '{{ allocated_storage }}',
  '{{ allow_major_version_upgrade }}',
  '{{ associated_roles }}',
  '{{ auto_minor_version_upgrade }}',
  '{{ automatic_backup_replication_region }}',
  '{{ automatic_backup_replication_kms_key_id }}',
  '{{ automatic_backup_replication_retention_period }}',
  '{{ availability_zone }}',
  '{{ backup_retention_period }}',
  '{{ backup_target }}',
  '{{ ca_certificate_identifier }}',
  '{{ certificate_rotation_restart }}',
  '{{ character_set_name }}',
  '{{ copy_tags_to_snapshot }}',
  '{{ custom_iam_instance_profile }}',
  '{{ database_insights_mode }}',
  '{{ db_cluster_identifier }}',
  '{{ db_cluster_snapshot_identifier }}',
  '{{ db_instance_class }}',
  '{{ db_instance_identifier }}',
  '{{ db_name }}',
  '{{ db_parameter_group_name }}',
  '{{ db_security_groups }}',
  '{{ db_snapshot_identifier }}',
  '{{ db_subnet_group_name }}',
  '{{ db_system_id }}',
  '{{ dedicated_log_volume }}',
  '{{ delete_automated_backups }}',
  '{{ deletion_protection }}',
  '{{ domain }}',
  '{{ domain_auth_secret_arn }}',
  '{{ domain_dns_ips }}',
  '{{ domain_fqdn }}',
  '{{ domain_iam_role_name }}',
  '{{ domain_ou }}',
  '{{ enable_cloudwatch_logs_exports }}',
  '{{ enable_iam_database_authentication }}',
  '{{ enable_performance_insights }}',
  '{{ engine }}',
  '{{ engine_lifecycle_support }}',
  '{{ engine_version }}',
  '{{ manage_master_user_password }}',
  '{{ iops }}',
  '{{ kms_key_id }}',
  '{{ license_model }}',
  '{{ master_username }}',
  '{{ master_user_password }}',
  '{{ master_user_secret }}',
  '{{ max_allocated_storage }}',
  '{{ monitoring_interval }}',
  '{{ monitoring_role_arn }}',
  '{{ multi_az }}',
  '{{ nchar_character_set_name }}',
  '{{ network_type }}',
  '{{ option_group_name }}',
  '{{ performance_insights_kms_key_id }}',
  '{{ performance_insights_retention_period }}',
  '{{ port }}',
  '{{ preferred_backup_window }}',
  '{{ preferred_maintenance_window }}',
  '{{ processor_features }}',
  '{{ promotion_tier }}',
  '{{ publicly_accessible }}',
  '{{ replica_mode }}',
  '{{ restore_time }}',
  '{{ source_db_cluster_identifier }}',
  '{{ source_dbi_resource_id }}',
  '{{ source_db_instance_automated_backups_arn }}',
  '{{ source_db_instance_identifier }}',
  '{{ source_region }}',
  '{{ storage_encrypted }}',
  '{{ storage_type }}',
  '{{ storage_throughput }}',
  '{{ tags }}',
  '{{ tde_credential_arn }}',
  '{{ tde_credential_password }}',
  '{{ timezone }}',
  '{{ use_default_processor_features }}',
  '{{ use_latest_restorable_time }}',
  '{{ vpc_security_groups }}',
  '{{ apply_immediately }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.rds.db_instances (
  AllocatedStorage,
  AllowMajorVersionUpgrade,
  AssociatedRoles,
  AutoMinorVersionUpgrade,
  AutomaticBackupReplicationRegion,
  AutomaticBackupReplicationKmsKeyId,
  AutomaticBackupReplicationRetentionPeriod,
  AvailabilityZone,
  BackupRetentionPeriod,
  BackupTarget,
  CACertificateIdentifier,
  CertificateRotationRestart,
  CharacterSetName,
  CopyTagsToSnapshot,
  CustomIAMInstanceProfile,
  DatabaseInsightsMode,
  DBClusterIdentifier,
  DBClusterSnapshotIdentifier,
  DBInstanceClass,
  DBInstanceIdentifier,
  DBName,
  DBParameterGroupName,
  DBSecurityGroups,
  DBSnapshotIdentifier,
  DBSubnetGroupName,
  DBSystemId,
  DedicatedLogVolume,
  DeleteAutomatedBackups,
  DeletionProtection,
  Domain,
  DomainAuthSecretArn,
  DomainDnsIps,
  DomainFqdn,
  DomainIAMRoleName,
  DomainOu,
  EnableCloudwatchLogsExports,
  EnableIAMDatabaseAuthentication,
  EnablePerformanceInsights,
  Engine,
  EngineLifecycleSupport,
  EngineVersion,
  ManageMasterUserPassword,
  Iops,
  KmsKeyId,
  LicenseModel,
  MasterUsername,
  MasterUserPassword,
  MasterUserSecret,
  MaxAllocatedStorage,
  MonitoringInterval,
  MonitoringRoleArn,
  MultiAZ,
  NcharCharacterSetName,
  NetworkType,
  OptionGroupName,
  PerformanceInsightsKMSKeyId,
  PerformanceInsightsRetentionPeriod,
  Port,
  PreferredBackupWindow,
  PreferredMaintenanceWindow,
  ProcessorFeatures,
  PromotionTier,
  PubliclyAccessible,
  ReplicaMode,
  RestoreTime,
  SourceDBClusterIdentifier,
  SourceDbiResourceId,
  SourceDBInstanceAutomatedBackupsArn,
  SourceDBInstanceIdentifier,
  SourceRegion,
  StorageEncrypted,
  StorageType,
  StorageThroughput,
  Tags,
  TdeCredentialArn,
  TdeCredentialPassword,
  Timezone,
  UseDefaultProcessorFeatures,
  UseLatestRestorableTime,
  VPCSecurityGroups,
  ApplyImmediately,
  region
)
SELECT
  '{{ allocated_storage }}',
  '{{ allow_major_version_upgrade }}',
  '{{ associated_roles }}',
  '{{ auto_minor_version_upgrade }}',
  '{{ automatic_backup_replication_region }}',
  '{{ automatic_backup_replication_kms_key_id }}',
  '{{ automatic_backup_replication_retention_period }}',
  '{{ availability_zone }}',
  '{{ backup_retention_period }}',
  '{{ backup_target }}',
  '{{ ca_certificate_identifier }}',
  '{{ certificate_rotation_restart }}',
  '{{ character_set_name }}',
  '{{ copy_tags_to_snapshot }}',
  '{{ custom_iam_instance_profile }}',
  '{{ database_insights_mode }}',
  '{{ db_cluster_identifier }}',
  '{{ db_cluster_snapshot_identifier }}',
  '{{ db_instance_class }}',
  '{{ db_instance_identifier }}',
  '{{ db_name }}',
  '{{ db_parameter_group_name }}',
  '{{ db_security_groups }}',
  '{{ db_snapshot_identifier }}',
  '{{ db_subnet_group_name }}',
  '{{ db_system_id }}',
  '{{ dedicated_log_volume }}',
  '{{ delete_automated_backups }}',
  '{{ deletion_protection }}',
  '{{ domain }}',
  '{{ domain_auth_secret_arn }}',
  '{{ domain_dns_ips }}',
  '{{ domain_fqdn }}',
  '{{ domain_iam_role_name }}',
  '{{ domain_ou }}',
  '{{ enable_cloudwatch_logs_exports }}',
  '{{ enable_iam_database_authentication }}',
  '{{ enable_performance_insights }}',
  '{{ engine }}',
  '{{ engine_lifecycle_support }}',
  '{{ engine_version }}',
  '{{ manage_master_user_password }}',
  '{{ iops }}',
  '{{ kms_key_id }}',
  '{{ license_model }}',
  '{{ master_username }}',
  '{{ master_user_password }}',
  '{{ master_user_secret }}',
  '{{ max_allocated_storage }}',
  '{{ monitoring_interval }}',
  '{{ monitoring_role_arn }}',
  '{{ multi_az }}',
  '{{ nchar_character_set_name }}',
  '{{ network_type }}',
  '{{ option_group_name }}',
  '{{ performance_insights_kms_key_id }}',
  '{{ performance_insights_retention_period }}',
  '{{ port }}',
  '{{ preferred_backup_window }}',
  '{{ preferred_maintenance_window }}',
  '{{ processor_features }}',
  '{{ promotion_tier }}',
  '{{ publicly_accessible }}',
  '{{ replica_mode }}',
  '{{ restore_time }}',
  '{{ source_db_cluster_identifier }}',
  '{{ source_dbi_resource_id }}',
  '{{ source_db_instance_automated_backups_arn }}',
  '{{ source_db_instance_identifier }}',
  '{{ source_region }}',
  '{{ storage_encrypted }}',
  '{{ storage_type }}',
  '{{ storage_throughput }}',
  '{{ tags }}',
  '{{ tde_credential_arn }}',
  '{{ tde_credential_password }}',
  '{{ timezone }}',
  '{{ use_default_processor_features }}',
  '{{ use_latest_restorable_time }}',
  '{{ vpc_security_groups }}',
  '{{ apply_immediately }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
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
  - name: db_instance
    props:
      - name: allocated_storage
        value: '{{ allocated_storage }}'
      - name: allow_major_version_upgrade
        value: '{{ allow_major_version_upgrade }}'
      - name: associated_roles
        value:
          - feature_name: '{{ feature_name }}'
            role_arn: '{{ role_arn }}'
      - name: auto_minor_version_upgrade
        value: '{{ auto_minor_version_upgrade }}'
      - name: automatic_backup_replication_region
        value: '{{ automatic_backup_replication_region }}'
      - name: automatic_backup_replication_kms_key_id
        value: '{{ automatic_backup_replication_kms_key_id }}'
      - name: automatic_backup_replication_retention_period
        value: '{{ automatic_backup_replication_retention_period }}'
      - name: availability_zone
        value: '{{ availability_zone }}'
      - name: backup_retention_period
        value: '{{ backup_retention_period }}'
      - name: backup_target
        value: '{{ backup_target }}'
      - name: ca_certificate_identifier
        value: '{{ ca_certificate_identifier }}'
      - name: certificate_rotation_restart
        value: '{{ certificate_rotation_restart }}'
      - name: character_set_name
        value: '{{ character_set_name }}'
      - name: copy_tags_to_snapshot
        value: '{{ copy_tags_to_snapshot }}'
      - name: custom_iam_instance_profile
        value: '{{ custom_iam_instance_profile }}'
      - name: database_insights_mode
        value: '{{ database_insights_mode }}'
      - name: db_cluster_identifier
        value: '{{ db_cluster_identifier }}'
      - name: db_cluster_snapshot_identifier
        value: '{{ db_cluster_snapshot_identifier }}'
      - name: db_instance_class
        value: '{{ db_instance_class }}'
      - name: db_instance_identifier
        value: '{{ db_instance_identifier }}'
      - name: db_name
        value: '{{ db_name }}'
      - name: db_parameter_group_name
        value: '{{ db_parameter_group_name }}'
      - name: db_security_groups
        value:
          - '{{ db_security_groups[0] }}'
      - name: db_snapshot_identifier
        value: '{{ db_snapshot_identifier }}'
      - name: db_subnet_group_name
        value: '{{ db_subnet_group_name }}'
      - name: db_system_id
        value: '{{ db_system_id }}'
      - name: dedicated_log_volume
        value: '{{ dedicated_log_volume }}'
      - name: delete_automated_backups
        value: '{{ delete_automated_backups }}'
      - name: deletion_protection
        value: '{{ deletion_protection }}'
      - name: domain
        value: '{{ domain }}'
      - name: domain_auth_secret_arn
        value: '{{ domain_auth_secret_arn }}'
      - name: domain_dns_ips
        value:
          - '{{ domain_dns_ips[0] }}'
      - name: domain_fqdn
        value: '{{ domain_fqdn }}'
      - name: domain_iam_role_name
        value: '{{ domain_iam_role_name }}'
      - name: domain_ou
        value: '{{ domain_ou }}'
      - name: enable_cloudwatch_logs_exports
        value:
          - '{{ enable_cloudwatch_logs_exports[0] }}'
      - name: enable_iam_database_authentication
        value: '{{ enable_iam_database_authentication }}'
      - name: enable_performance_insights
        value: '{{ enable_performance_insights }}'
      - name: engine
        value: '{{ engine }}'
      - name: engine_lifecycle_support
        value: '{{ engine_lifecycle_support }}'
      - name: engine_version
        value: '{{ engine_version }}'
      - name: manage_master_user_password
        value: '{{ manage_master_user_password }}'
      - name: iops
        value: '{{ iops }}'
      - name: kms_key_id
        value: '{{ kms_key_id }}'
      - name: license_model
        value: '{{ license_model }}'
      - name: master_username
        value: '{{ master_username }}'
      - name: master_user_password
        value: '{{ master_user_password }}'
      - name: master_user_secret
        value:
          secret_arn: '{{ secret_arn }}'
          kms_key_id: '{{ kms_key_id }}'
      - name: max_allocated_storage
        value: '{{ max_allocated_storage }}'
      - name: monitoring_interval
        value: '{{ monitoring_interval }}'
      - name: monitoring_role_arn
        value: '{{ monitoring_role_arn }}'
      - name: multi_az
        value: '{{ multi_az }}'
      - name: nchar_character_set_name
        value: '{{ nchar_character_set_name }}'
      - name: network_type
        value: '{{ network_type }}'
      - name: option_group_name
        value: '{{ option_group_name }}'
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
      - name: processor_features
        value:
          - name: '{{ name }}'
            value: '{{ value }}'
      - name: promotion_tier
        value: '{{ promotion_tier }}'
      - name: publicly_accessible
        value: '{{ publicly_accessible }}'
      - name: replica_mode
        value: '{{ replica_mode }}'
      - name: restore_time
        value: '{{ restore_time }}'
      - name: source_db_cluster_identifier
        value: '{{ source_db_cluster_identifier }}'
      - name: source_dbi_resource_id
        value: '{{ source_dbi_resource_id }}'
      - name: source_db_instance_automated_backups_arn
        value: '{{ source_db_instance_automated_backups_arn }}'
      - name: source_db_instance_identifier
        value: '{{ source_db_instance_identifier }}'
      - name: source_region
        value: '{{ source_region }}'
      - name: storage_encrypted
        value: '{{ storage_encrypted }}'
      - name: storage_type
        value: '{{ storage_type }}'
      - name: storage_throughput
        value: '{{ storage_throughput }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: tde_credential_arn
        value: '{{ tde_credential_arn }}'
      - name: tde_credential_password
        value: '{{ tde_credential_password }}'
      - name: timezone
        value: '{{ timezone }}'
      - name: use_default_processor_features
        value: '{{ use_default_processor_features }}'
      - name: use_latest_restorable_time
        value: '{{ use_latest_restorable_time }}'
      - name: vpc_security_groups
        value:
          - '{{ vpc_security_groups[0] }}'
      - name: apply_immediately
        value: '{{ apply_immediately }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>db_instance</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.rds.db_instances
SET PatchDocument = string('{{ {
    "AllocatedStorage": allocated_storage,
    "AllowMajorVersionUpgrade": allow_major_version_upgrade,
    "AssociatedRoles": associated_roles,
    "AutoMinorVersionUpgrade": auto_minor_version_upgrade,
    "AutomaticBackupReplicationRegion": automatic_backup_replication_region,
    "AutomaticBackupReplicationKmsKeyId": automatic_backup_replication_kms_key_id,
    "AutomaticBackupReplicationRetentionPeriod": automatic_backup_replication_retention_period,
    "AvailabilityZone": availability_zone,
    "BackupRetentionPeriod": backup_retention_period,
    "CACertificateIdentifier": ca_certificate_identifier,
    "CertificateRotationRestart": certificate_rotation_restart,
    "CopyTagsToSnapshot": copy_tags_to_snapshot,
    "DatabaseInsightsMode": database_insights_mode,
    "DBClusterSnapshotIdentifier": db_cluster_snapshot_identifier,
    "DBInstanceClass": db_instance_class,
    "DBParameterGroupName": db_parameter_group_name,
    "DBSecurityGroups": db_security_groups,
    "DBSnapshotIdentifier": db_snapshot_identifier,
    "DedicatedLogVolume": dedicated_log_volume,
    "DeleteAutomatedBackups": delete_automated_backups,
    "DeletionProtection": deletion_protection,
    "Domain": domain,
    "DomainAuthSecretArn": domain_auth_secret_arn,
    "DomainDnsIps": domain_dns_ips,
    "DomainFqdn": domain_fqdn,
    "DomainIAMRoleName": domain_iam_role_name,
    "DomainOu": domain_ou,
    "EnableCloudwatchLogsExports": enable_cloudwatch_logs_exports,
    "EnableIAMDatabaseAuthentication": enable_iam_database_authentication,
    "EnablePerformanceInsights": enable_performance_insights,
    "Engine": engine,
    "EngineLifecycleSupport": engine_lifecycle_support,
    "EngineVersion": engine_version,
    "ManageMasterUserPassword": manage_master_user_password,
    "Iops": iops,
    "LicenseModel": license_model,
    "MasterUserPassword": master_user_password,
    "MaxAllocatedStorage": max_allocated_storage,
    "MonitoringInterval": monitoring_interval,
    "MonitoringRoleArn": monitoring_role_arn,
    "MultiAZ": multi_az,
    "NetworkType": network_type,
    "OptionGroupName": option_group_name,
    "PerformanceInsightsKMSKeyId": performance_insights_kms_key_id,
    "PerformanceInsightsRetentionPeriod": performance_insights_retention_period,
    "Port": port,
    "PreferredBackupWindow": preferred_backup_window,
    "PreferredMaintenanceWindow": preferred_maintenance_window,
    "ProcessorFeatures": processor_features,
    "PromotionTier": promotion_tier,
    "PubliclyAccessible": publicly_accessible,
    "ReplicaMode": replica_mode,
    "RestoreTime": restore_time,
    "SourceDBClusterIdentifier": source_db_cluster_identifier,
    "SourceDbiResourceId": source_dbi_resource_id,
    "SourceDBInstanceAutomatedBackupsArn": source_db_instance_automated_backups_arn,
    "SourceDBInstanceIdentifier": source_db_instance_identifier,
    "StorageType": storage_type,
    "StorageThroughput": storage_throughput,
    "Tags": tags,
    "TdeCredentialArn": tde_credential_arn,
    "TdeCredentialPassword": tde_credential_password,
    "UseDefaultProcessorFeatures": use_default_processor_features,
    "UseLatestRestorableTime": use_latest_restorable_time,
    "VPCSecurityGroups": vpc_security_groups,
    "ApplyImmediately": apply_immediately
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ db_instance_identifier }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.rds.db_instances
WHERE
  Identifier = '{{ db_instance_identifier }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>db_instances</code> resource, the following permissions are required:

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
ec2:DescribeAccountAttributes,
ec2:DescribeAvailabilityZones,
ec2:DescribeInternetGateways,
ec2:DescribeSecurityGroups,
ec2:DescribeSubnets,
ec2:DescribeVpcAttribute,
ec2:DescribeVpcs,
iam:CreateServiceLinkedRole,
iam:GetRole,
iam:ListRoles,
iam:PassRole,
kms:CreateGrant,
kms:DescribeKey,
rds:AddRoleToDBInstance,
rds:AddTagsToResource,
rds:CreateDBInstance,
rds:CreateDBInstanceReadReplica,
rds:DescribeDBInstances,
rds:DescribeDBClusters,
rds:DescribeDBClusterSnapshots,
rds:DescribeDBInstanceAutomatedBackups,
rds:DescribeDBSnapshots,
rds:DescribeEvents,
rds:ModifyDBInstance,
rds:RebootDBInstance,
rds:RestoreDBInstanceFromDBSnapshot,
rds:RestoreDBInstanceToPointInTime,
rds:StartDBInstanceAutomatedBackupsReplication,
secretsmanager:CreateSecret,
secretsmanager:TagResource
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeAccountAttributes,
ec2:DescribeAvailabilityZones,
ec2:DescribeInternetGateways,
ec2:DescribeSecurityGroups,
ec2:DescribeSubnets,
ec2:DescribeVpcAttribute,
ec2:DescribeVpcs,
rds:DescribeDBInstances
```

</TabItem>
<TabItem value="update">

```json
ec2:DescribeAccountAttributes,
ec2:DescribeAvailabilityZones,
ec2:DescribeInternetGateways,
ec2:DescribeSecurityGroups,
ec2:DescribeSubnets,
ec2:DescribeVpcAttribute,
ec2:DescribeVpcs,
iam:CreateServiceLinkedRole,
iam:GetRole,
iam:ListRoles,
iam:PassRole,
kms:CreateGrant,
kms:DescribeKey,
rds:AddRoleToDBInstance,
rds:AddTagsToResource,
rds:DescribeDBClusters,
rds:DescribeDBEngineVersions,
rds:DescribeDBInstances,
rds:DescribeDBParameterGroups,
rds:DescribeDBInstanceAutomatedBackups,
rds:DescribeEvents,
rds:ModifyDBInstance,
rds:PromoteReadReplica,
rds:RebootDBInstance,
rds:RemoveRoleFromDBInstance,
rds:RemoveTagsFromResource,
rds:StartDBInstanceAutomatedBackupsReplication,
rds:StopDBInstanceAutomatedBackupsReplication,
secretsmanager:CreateSecret,
secretsmanager:TagResource
```

</TabItem>
<TabItem value="delete">

```json
rds:AddTagsToResource,
rds:CreateDBSnapshot,
rds:DeleteDBInstance,
rds:DescribeDBInstances
```

</TabItem>
<TabItem value="list">

```json
rds:DescribeDBInstances
```

</TabItem>
</Tabs>