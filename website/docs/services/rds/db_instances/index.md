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
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::RDS::DBInstance&#96;&#96; resource creates an Amazon DB instance. The new DB instance can be an RDS DB instance, or it can be a DB instance in an Aurora DB cluster.<br />For more information about creating an RDS DB instance, see &#91;Creating an Amazon RDS DB instance&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;CreateDBInstance.html) in the &#42;Amazon RDS User Guide&#42;.<br />For more information about creating a DB instance in an Aurora DB cluster, see &#91;Creating an Amazon Aurora DB cluster&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.CreateInstance.html) in the &#42;Amazon Aurora User Guide&#42;.<br />If you import an existing DB instance, and the template configuration doesn't match the actual configuration of the DB instance, AWS CloudFormation applies the changes in the template during the import operation.<br />If a DB instance is deleted or replaced during an update, AWS CloudFormation deletes all automated snapshots. However, it retains manual DB snapshots. During an update that requires replacement, you can apply a stack policy to prevent DB instances from being replaced. For more information, see &#91;Prevent Updates to Stack Resources&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html).<br />&#42;Updating DB instances&#42; <br />When properties labeled "&#42;Update requires:&#42;&#91;Replacement&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)" are updated, AWS CloudFormation first creates a replacement DB instance, then changes references from other dependent resources to point to the replacement DB instance, and finally deletes the old DB instance.<br />We highly recommend that you take a snapshot of the database before updating the stack. If you don't, you lose the data when AWS CloudFormation replaces your DB instance. To preserve your data, perform the following procedure:<br />1. Deactivate any applications that are using the DB instance so that there's no activity on the DB instance.<br />1. Create a snapshot of the DB instance. For more information, see &#91;Creating a DB Snapshot&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;CreateSnapshot.html).<br />1. If you want to restore your instance using a DB snapshot, modify the updated template with your DB instance changes and add the &#96;&#96;DBSnapshotIdentifier&#96;&#96; property with the ID of the DB snapshot that you want to use.<br />After you restore a DB instance with a &#96;&#96;DBSnapshotIdentifier&#96;&#96; property, you can delete the &#96;&#96;DBSnapshotIdentifier&#96;&#96; property. When you specify this property for an update, the DB instance is not restored from the DB snapshot again, and the data in the database is not changed. However, if you don't specify the &#96;&#96;DBSnapshotIdentifier&#96;&#96; property, an empty DB instance is created, and the original DB instance is deleted. If you specify a property that is different from the previous snapshot restore property, a new DB instance is restored from the specified &#96;&#96;DBSnapshotIdentifier&#96;&#96; property, and the original DB instance is deleted.<br />1. Update the stack.<br /><br />For more information about updating other properties of this resource, see &#96;&#96;ModifyDBInstance&#96;&#96;. For more information about updating stacks, see &#91;CloudFormation Stacks Updates&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html).<br />&#42;Deleting DB instances&#42; <br />For DB instances that are part of an Aurora DB cluster, you can set a deletion policy for your DB instance to control how AWS CloudFormation handles the DB instance when the stack is deleted. For Amazon RDS DB instances, you can choose to &#42;retain&#42; the DB instance, to &#42;delete&#42; the DB instance, or to &#42;create a snapshot&#42; of the DB instance. The default AWS CloudFormation behavior depends on the &#96;&#96;DBClusterIdentifier&#96;&#96; property:<br />1. For &#96;&#96;AWS::RDS::DBInstance&#96;&#96; resources that don't specify the &#96;&#96;DBClusterIdentifier&#96;&#96; property, AWS CloudFormation saves a snapshot of the DB instance.<br />1. For &#96;&#96;AWS::RDS::DBInstance&#96;&#96; resources that do specify the &#96;&#96;DBClusterIdentifier&#96;&#96; property, AWS CloudFormation deletes the DB instance.<br /><br />For more information, see &#91;DeletionPolicy Attribute&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html).</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rds.db_instances" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "allocated_storage",
    "type": "string",
    "description": "The amount of storage in gibibytes (GiB) to be initially allocated for the database instance.<br />If any value is set in the &#96;&#96;Iops&#96;&#96; parameter, &#96;&#96;AllocatedStorage&#96;&#96; must be at least 100 GiB, which corresponds to the minimum Iops value of 1,000. If you increase the &#96;&#96;Iops&#96;&#96; value (in 1,000 IOPS increments), then you must also increase the &#96;&#96;AllocatedStorage&#96;&#96; value (in 100-GiB increments). <br />&#42;Amazon Aurora&#42; <br />Not applicable. Aurora cluster volumes automatically grow as the amount of data in your database increases, though you are only charged for the space that you use in an Aurora cluster volume.<br />&#42;Db2&#42; <br />Constraints to the amount of storage for each storage type are the following:<br />+ General Purpose (SSD) storage (gp3): Must be an integer from 20 to 64000.<br />+ Provisioned IOPS storage (io1): Must be an integer from 100 to 64000.<br /><br />&#42;MySQL&#42; <br />Constraints to the amount of storage for each storage type are the following: <br />+ General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.<br />+ Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.<br />+ Magnetic storage (standard): Must be an integer from 5 to 3072.<br /><br />&#42;MariaDB&#42; <br />Constraints to the amount of storage for each storage type are the following: <br />+ General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.<br />+ Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.<br />+ Magnetic storage (standard): Must be an integer from 5 to 3072.<br /><br />&#42;PostgreSQL&#42; <br />Constraints to the amount of storage for each storage type are the following: <br />+ General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.<br />+ Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.<br />+ Magnetic storage (standard): Must be an integer from 5 to 3072.<br /><br />&#42;Oracle&#42; <br />Constraints to the amount of storage for each storage type are the following: <br />+ General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.<br />+ Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.<br />+ Magnetic storage (standard): Must be an integer from 10 to 3072.<br /><br />&#42;SQL Server&#42; <br />Constraints to the amount of storage for each storage type are the following: <br />+ General Purpose (SSD) storage (gp2):<br />+ Enterprise and Standard editions: Must be an integer from 20 to 16384.<br />+ Web and Express editions: Must be an integer from 20 to 16384.<br /><br />+ Provisioned IOPS storage (io1):<br />+ Enterprise and Standard editions: Must be an integer from 20 to 16384.<br />+ Web and Express editions: Must be an integer from 20 to 16384.<br /><br />+ Magnetic storage (standard):<br />+ Enterprise and Standard editions: Must be an integer from 20 to 1024.<br />+ Web and Express editions: Must be an integer from 20 to 1024."
  },
  {
    "name": "allow_major_version_upgrade",
    "type": "boolean",
    "description": "A value that indicates whether major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.<br />Constraints: Major version upgrades must be allowed when specifying a value for the &#96;&#96;EngineVersion&#96;&#96; parameter that is a different major version than the DB instance's current version."
  },
  {
    "name": "associated_roles",
    "type": "array",
    "description": "The IAMlong (IAM) roles associated with the DB instance. <br />&#42;Amazon Aurora&#42; <br />Not applicable. The associated roles are managed by the DB cluster.",
    "children": [
      {
        "name": "feature_name",
        "type": "string",
        "description": "The name of the feature associated with the AWS Identity and Access Management (IAM) role. IAM roles that are associated with a DB instance grant permission for the DB instance to access other AWS services on your behalf. For the list of supported feature names, see the &#96;&#96;SupportedFeatureNames&#96;&#96; description in &#91;DBEngineVersion&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API&#95;DBEngineVersion.html) in the &#42;Amazon RDS API Reference&#42;."
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
    "description": "The AWS KMS key identifier for encryption of the replicated automated backups. The KMS key ID is the Amazon Resource Name (ARN) for the KMS encryption key in the destination AWS-Region, for example, &#96;&#96;arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE&#96;&#96;."
  },
  {
    "name": "automatic_backup_replication_retention_period",
    "type": "integer",
    "description": "The retention period for automated backups in a different AWS Region. Use this parameter to set a unique retention period that only applies to cross-Region automated backups. To enable automated backups in a different Region, specify a positive value for the &#96;&#96;AutomaticBackupReplicationRegion&#96;&#96; parameter. <br />If not specified, this parameter defaults to the value of the &#96;&#96;BackupRetentionPeriod&#96;&#96; parameter. The maximum allowed value is 35."
  },
  {
    "name": "automatic_restart_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "availability_zone",
    "type": "string",
    "description": "The Availability Zone (AZ) where the database will be created. For information on AWS-Regions and Availability Zones, see &#91;Regions and Availability Zones&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html).<br />For Amazon Aurora, each Aurora DB cluster hosts copies of its storage in three separate Availability Zones. Specify one of these Availability Zones. Aurora automatically chooses an appropriate Availability Zone if you don't specify one.<br />Default: A random, system-chosen Availability Zone in the endpoint's AWS-Region.<br />Constraints:<br />+ The &#96;&#96;AvailabilityZone&#96;&#96; parameter can't be specified if the DB instance is a Multi-AZ deployment.<br />+ The specified Availability Zone must be in the same AWS-Region as the current endpoint.<br /><br />Example: &#96;&#96;us-east-1d&#96;&#96;"
  },
  {
    "name": "backup_retention_period",
    "type": "integer",
    "description": "The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.<br />&#42;Amazon Aurora&#42; <br />Not applicable. The retention period for automated backups is managed by the DB cluster.<br />Default: 1<br />Constraints:<br />+ Must be a value from 0 to 35<br />+ Can't be set to 0 if the DB instance is a source to read replicas"
  },
  {
    "name": "backup_target",
    "type": "string",
    "description": "The location for storing automated backups and manual snapshots.<br />Valid Values:<br />+ &#96;&#96;local&#96;&#96; (Dedicated Local Zone)<br />+ &#96;&#96;outposts&#96;&#96; (AWS Outposts)<br />+ &#96;&#96;region&#96;&#96; (AWS-Region)<br /><br />Default: &#96;&#96;region&#96;&#96;<br />For more information, see &#91;Working with Amazon RDS on Outposts&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) in the &#42;Amazon RDS User Guide&#42;."
  },
  {
    "name": "ca_certificate_identifier",
    "type": "string",
    "description": "The identifier of the CA certificate for this DB instance.<br />For more information, see &#91;Using SSL/TLS to encrypt a connection to a DB instance&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the &#42;Amazon RDS User Guide&#42; and &#91;Using SSL/TLS to encrypt a connection to a DB cluster&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the &#42;Amazon Aurora User Guide&#42;."
  },
  {
    "name": "certificate_details",
    "type": "object",
    "description": "The details of the DB instance’s server certificate.<br />For more information, see &#91;Using SSL/TLS to encrypt a connection to a DB instance&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the &#42;Amazon RDS User Guide&#42; and &#91;Using SSL/TLS to encrypt a connection to a DB cluster&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the &#42;Amazon Aurora User Guide&#42;.",
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
    "description": "Specifies whether the DB instance is restarted when you rotate your SSL/TLS certificate.<br />By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate is not updated until the DB instance is restarted.<br />Set this parameter only if you are &#42;not&#42; using SSL/TLS to connect to the DB instance.<br />If you are using SSL/TLS to connect to the DB instance, follow the appropriate instructions for your DB engine to rotate your SSL/TLS certificate:<br />+ For more information about rotating your SSL/TLS certificate for RDS DB engines, see &#91;Rotating Your SSL/TLS Certificate.&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html) in the &#42;Amazon RDS User Guide.&#42;<br />+ For more information about rotating your SSL/TLS certificate for Aurora DB engines, see &#91;Rotating Your SSL/TLS Certificate&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html) in the &#42;Amazon Aurora User Guide&#42;.<br /><br />This setting doesn't apply to RDS Custom DB instances."
  },
  {
    "name": "character_set_name",
    "type": "string",
    "description": "For supported engines, indicates that the DB instance should be associated with the specified character set.<br />&#42;Amazon Aurora&#42; <br />Not applicable. The character set is managed by the DB cluster. For more information, see &#91;AWS::RDS::DBCluster&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html)."
  },
  {
    "name": "copy_tags_to_snapshot",
    "type": "boolean",
    "description": "Specifies whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.<br />This setting doesn't apply to Amazon Aurora DB instances. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting."
  },
  {
    "name": "custom_iam_instance_profile",
    "type": "string",
    "description": "The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance.<br />This setting is required for RDS Custom.<br />Constraints:<br />+ The profile must exist in your account.<br />+ The profile must have an IAM role that Amazon EC2 has permissions to assume.<br />+ The instance profile name and the associated IAM role name must start with the prefix &#96;&#96;AWSRDSCustom&#96;&#96;.<br /><br />For the list of permissions required for the IAM role, see &#91;Configure IAM and your VPC&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-setup-orcl.html#custom-setup-orcl.iam-vpc) in the &#42;Amazon RDS User Guide&#42;."
  },
  {
    "name": "database_insights_mode",
    "type": "string",
    "description": "The mode of Database Insights to enable for the DB instance.<br />Aurora DB instances inherit this value from the DB cluster, so you can't change this value."
  },
  {
    "name": "db_cluster_identifier",
    "type": "string",
    "description": "The identifier of the DB cluster that this DB instance will belong to.<br />This setting doesn't apply to RDS Custom DB instances."
  },
  {
    "name": "db_cluster_snapshot_identifier",
    "type": "string",
    "description": "The identifier for the Multi-AZ DB cluster snapshot to restore from.<br />For more information on Multi-AZ DB clusters, see &#91;Multi-AZ DB cluster deployments&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the &#42;Amazon RDS User Guide&#42;.<br />Constraints:<br />+ Must match the identifier of an existing Multi-AZ DB cluster snapshot.<br />+ Can't be specified when &#96;&#96;DBSnapshotIdentifier&#96;&#96; is specified.<br />+ Must be specified when &#96;&#96;DBSnapshotIdentifier&#96;&#96; isn't specified.<br />+ If you are restoring from a shared manual Multi-AZ DB cluster snapshot, the &#96;&#96;DBClusterSnapshotIdentifier&#96;&#96; must be the ARN of the shared snapshot.<br />+ Can't be the identifier of an Aurora DB cluster snapshot."
  },
  {
    "name": "db_instance_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "db_instance_class",
    "type": "string",
    "description": "The compute and memory capacity of the DB instance, for example &#96;&#96;db.m5.large&#96;&#96;. Not all DB instance classes are available in all AWS-Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see &#91;DB instance classes&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the &#42;Amazon RDS User Guide&#42; or &#91;Aurora DB instance classes&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.DBInstanceClass.html) in the &#42;Amazon Aurora User Guide&#42;."
  },
  {
    "name": "db_instance_identifier",
    "type": "string",
    "description": "A name for the DB instance. If you specify a name, AWS CloudFormation converts it to lowercase. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the DB instance. For more information, see &#91;Name Type&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).<br />For information about constraints that apply to DB instance identifiers, see &#91;Naming constraints in Amazon RDS&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP&#95;Limits.html#RDS&#95;Limits.Constraints) in the &#42;Amazon RDS User Guide&#42;.<br />If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name."
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
    "description": "The meaning of this parameter differs according to the database engine you use.<br />If you specify the &#96;&#96;DBSnapshotIdentifier&#96;&#96; property, this property only applies to RDS for Oracle.<br />&#42;Amazon Aurora&#42; <br />Not applicable. The database name is managed by the DB cluster.<br />&#42;Db2&#42; <br />The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance.<br />Constraints:<br />+ Must contain 1 to 64 letters or numbers.<br />+ Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).<br />+ Can't be a word reserved by the specified database engine.<br /><br />&#42;MySQL&#42; <br />The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance.<br />Constraints:<br />+ Must contain 1 to 64 letters or numbers.<br />+ Can't be a word reserved by the specified database engine<br /><br />&#42;MariaDB&#42; <br />The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance.<br />Constraints:<br />+ Must contain 1 to 64 letters or numbers.<br />+ Can't be a word reserved by the specified database engine<br /><br />&#42;PostgreSQL&#42; <br />The name of the database to create when the DB instance is created. If this parameter is not specified, the default &#96;&#96;postgres&#96;&#96; database is created in the DB instance.<br />Constraints:<br />+ Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).<br />+ Must contain 1 to 63 characters.<br />+ Can't be a word reserved by the specified database engine<br /><br />&#42;Oracle&#42; <br />The Oracle System ID (SID) of the created DB instance. If you specify &#96;&#96;null&#96;&#96;, the default value &#96;&#96;ORCL&#96;&#96; is used. You can't specify the string NULL, or any other reserved word, for &#96;&#96;DBName&#96;&#96;. <br />Default: &#96;&#96;ORCL&#96;&#96;<br />Constraints:<br />+ Can't be longer than 8 characters<br /><br />&#42;SQL Server&#42; <br />Not applicable. Must be null."
  },
  {
    "name": "db_parameter_group_name",
    "type": "string",
    "description": "The name of an existing DB parameter group or a reference to an &#91;AWS::RDS::DBParameterGroup&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html) resource created in the template.<br />To list all of the available DB parameter group names, use the following command:<br />&#96;&#96;aws rds describe-db-parameter-groups --query \"DBParameterGroups&#91;&#93;.DBParameterGroupName\" --output text&#96;&#96; <br />If any of the data members of the referenced parameter group are changed during an update, the DB instance might need to be restarted, which causes some interruption. If the parameter group contains static parameters, whether they were changed or not, an update triggers a reboot.<br />If you don't specify a value for &#96;&#96;DBParameterGroupName&#96;&#96; property, the default DB parameter group for the specified engine and engine version is used."
  },
  {
    "name": "db_security_groups",
    "type": "array",
    "description": "A list of the DB security groups to assign to the DB instance. The list can include both the name of existing DB security groups or references to AWS::RDS::DBSecurityGroup resources created in the template.<br />If you set DBSecurityGroups, you must not set VPCSecurityGroups, and vice versa. Also, note that the DBSecurityGroups property exists only for backwards compatibility with older regions and is no longer recommended for providing security information to an RDS DB instance. Instead, use VPCSecurityGroups.<br />If you specify this property, AWS CloudFormation sends only the following properties (if specified) to Amazon RDS during create operations:<br />+ &#96;&#96;AllocatedStorage&#96;&#96; <br />+ &#96;&#96;AutoMinorVersionUpgrade&#96;&#96; <br />+ &#96;&#96;AvailabilityZone&#96;&#96; <br />+ &#96;&#96;BackupRetentionPeriod&#96;&#96; <br />+ &#96;&#96;CharacterSetName&#96;&#96; <br />+ &#96;&#96;DBInstanceClass&#96;&#96; <br />+ &#96;&#96;DBName&#96;&#96; <br />+ &#96;&#96;DBParameterGroupName&#96;&#96; <br />+ &#96;&#96;DBSecurityGroups&#96;&#96; <br />+ &#96;&#96;DBSubnetGroupName&#96;&#96; <br />+ &#96;&#96;Engine&#96;&#96; <br />+ &#96;&#96;EngineVersion&#96;&#96; <br />+ &#96;&#96;Iops&#96;&#96; <br />+ &#96;&#96;LicenseModel&#96;&#96; <br />+ &#96;&#96;MasterUsername&#96;&#96; <br />+ &#96;&#96;MasterUserPassword&#96;&#96; <br />+ &#96;&#96;MultiAZ&#96;&#96; <br />+ &#96;&#96;OptionGroupName&#96;&#96; <br />+ &#96;&#96;PreferredBackupWindow&#96;&#96; <br />+ &#96;&#96;PreferredMaintenanceWindow&#96;&#96; <br /><br />All other properties are ignored. Specify a virtual private cloud (VPC) security group if you want to submit other properties, such as &#96;&#96;StorageType&#96;&#96;, &#96;&#96;StorageEncrypted&#96;&#96;, or &#96;&#96;KmsKeyId&#96;&#96;. If you're already using the &#96;&#96;DBSecurityGroups&#96;&#96; property, you can't use these other properties by updating your DB instance to use a VPC security group. You must recreate the DB instance."
  },
  {
    "name": "db_snapshot_identifier",
    "type": "string",
    "description": "The name or Amazon Resource Name (ARN) of the DB snapshot that's used to restore the DB instance. If you're restoring from a shared manual DB snapshot, you must specify the ARN of the snapshot.<br />By specifying this property, you can create a DB instance from the specified DB snapshot. If the &#96;&#96;DBSnapshotIdentifier&#96;&#96; property is an empty string or the &#96;&#96;AWS::RDS::DBInstance&#96;&#96; declaration has no &#96;&#96;DBSnapshotIdentifier&#96;&#96; property, AWS CloudFormation creates a new database. If the property contains a value (other than an empty string), AWS CloudFormation creates a database from the specified snapshot. If a snapshot with the specified name doesn't exist, AWS CloudFormation can't create the database and it rolls back the stack.<br />Some DB instance properties aren't valid when you restore from a snapshot, such as the &#96;&#96;MasterUsername&#96;&#96; and &#96;&#96;MasterUserPassword&#96;&#96; properties, and the point-in-time recovery properties &#96;&#96;RestoreTime&#96;&#96; and &#96;&#96;UseLatestRestorableTime&#96;&#96;. For information about the properties that you can specify, see the &#91;RestoreDBInstanceFromDBSnapshot&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API&#95;RestoreDBInstanceFromDBSnapshot.html) action in the &#42;Amazon RDS API Reference&#42;.<br />After you restore a DB instance with a &#96;&#96;DBSnapshotIdentifier&#96;&#96; property, you must specify the same &#96;&#96;DBSnapshotIdentifier&#96;&#96; property for any future updates to the DB instance. When you specify this property for an update, the DB instance is not restored from the DB snapshot again, and the data in the database is not changed. However, if you don't specify the &#96;&#96;DBSnapshotIdentifier&#96;&#96; property, an empty DB instance is created, and the original DB instance is deleted. If you specify a property that is different from the previous snapshot restore property, a new DB instance is restored from the specified &#96;&#96;DBSnapshotIdentifier&#96;&#96; property, and the original DB instance is deleted.<br />If you specify the &#96;&#96;DBSnapshotIdentifier&#96;&#96; property to restore a DB instance (as opposed to specifying it for DB instance updates), then don't specify the following properties:<br />+ &#96;&#96;CharacterSetName&#96;&#96; <br />+ &#96;&#96;DBClusterIdentifier&#96;&#96; <br />+ &#96;&#96;DBName&#96;&#96; <br />+ &#96;&#96;KmsKeyId&#96;&#96; <br />+ &#96;&#96;MasterUsername&#96;&#96; <br />+ &#96;&#96;MasterUserPassword&#96;&#96; <br />+ &#96;&#96;PromotionTier&#96;&#96; <br />+ &#96;&#96;SourceDBInstanceIdentifier&#96;&#96; <br />+ &#96;&#96;SourceRegion&#96;&#96; <br />+ &#96;&#96;StorageEncrypted&#96;&#96; (for an unencrypted snapshot)<br />+ &#96;&#96;Timezone&#96;&#96; <br /><br />&#42;Amazon Aurora&#42; <br />Not applicable. Snapshot restore is managed by the DB cluster."
  },
  {
    "name": "db_subnet_group_name",
    "type": "string",
    "description": "A DB subnet group to associate with the DB instance. If you update this value, the new subnet group must be a subnet group in a new VPC. <br />If you don't specify a DB subnet group, RDS uses the default DB subnet group if one exists. If a default DB subnet group does not exist, and you don't specify a &#96;&#96;DBSubnetGroupName&#96;&#96;, the DB instance fails to launch. <br />For more information about using Amazon RDS in a VPC, see &#91;Amazon VPC and Amazon RDS&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;VPC.html) in the &#42;Amazon RDS User Guide&#42;. <br />This setting doesn't apply to Amazon Aurora DB instances. The DB subnet group is managed by the DB cluster. If specified, the setting must match the DB cluster setting."
  },
  {
    "name": "db_system_id",
    "type": "string",
    "description": "The Oracle system identifier (SID), which is the name of the Oracle database instance that manages your database files. In this context, the term \"Oracle database instance\" refers exclusively to the system global area (SGA) and Oracle background processes. If you don't specify a SID, the value defaults to &#96;&#96;RDSCDB&#96;&#96;. The Oracle SID is also the name of your CDB."
  },
  {
    "name": "dedicated_log_volume",
    "type": "boolean",
    "description": "Indicates whether the DB instance has a dedicated log volume (DLV) enabled."
  },
  {
    "name": "delete_automated_backups",
    "type": "boolean",
    "description": "A value that indicates whether to remove automated backups immediately after the DB instance is deleted. This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB instance is deleted.<br />&#42;Amazon Aurora&#42; <br />Not applicable. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the DB cluster are not deleted."
  },
  {
    "name": "deletion_protection",
    "type": "boolean",
    "description": "Specifies whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see &#91;Deleting a DB Instance&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;DeleteInstance.html).<br />This setting doesn't apply to Amazon Aurora DB instances. You can enable or disable deletion protection for the DB cluster. For more information, see &#96;&#96;CreateDBCluster&#96;&#96;. DB instances in a DB cluster can be deleted even when deletion protection is enabled for the DB cluster."
  },
  {
    "name": "domain",
    "type": "string",
    "description": "The Active Directory directory ID to create the DB instance in. Currently, only Db2, MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain.<br />For more information, see &#91;Kerberos Authentication&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html) in the &#42;Amazon RDS User Guide&#42;."
  },
  {
    "name": "domain_auth_secret_arn",
    "type": "string",
    "description": "The ARN for the Secrets Manager secret with the credentials for the user joining the domain.<br />Example: &#96;&#96;arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456&#96;&#96;"
  },
  {
    "name": "domain_dns_ips",
    "type": "array",
    "description": "The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers.<br />Constraints:<br />+ Two IP addresses must be provided. If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list.<br /><br />Example: &#96;&#96;123.124.125.126,234.235.236.237&#96;&#96;"
  },
  {
    "name": "domain_fqdn",
    "type": "string",
    "description": "The fully qualified domain name (FQDN) of an Active Directory domain.<br />Constraints:<br />+ Can't be longer than 64 characters.<br /><br />Example: &#96;&#96;mymanagedADtest.mymanagedAD.mydomain&#96;&#96;"
  },
  {
    "name": "domain_iam_role_name",
    "type": "string",
    "description": "The name of the IAM role to use when making API calls to the Directory Service.<br />This setting doesn't apply to the following DB instances:<br />+ Amazon Aurora (The domain is managed by the DB cluster.)<br />+ RDS Custom"
  },
  {
    "name": "domain_ou",
    "type": "string",
    "description": "The Active Directory organizational unit for your DB instance to join.<br />Constraints:<br />+ Must be in the distinguished name format.<br />+ Can't be longer than 64 characters.<br /><br />Example: &#96;&#96;OU=mymanagedADtestOU,DC=mymanagedADtest,DC=mymanagedAD,DC=mydomain&#96;&#96;"
  },
  {
    "name": "enable_cloudwatch_logs_exports",
    "type": "array",
    "description": "The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see &#91;Publishing Database Logs to Amazon CloudWatch Logs&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;LogAccess.html#USER&#95;LogAccess.Procedural.UploadtoCloudWatch) in the &#42;Amazon Relational Database Service User Guide&#42;.<br />&#42;Amazon Aurora&#42; <br />Not applicable. CloudWatch Logs exports are managed by the DB cluster. <br />&#42;Db2&#42; <br />Valid values: &#96;&#96;diag.log&#96;&#96;, &#96;&#96;notify.log&#96;&#96;<br />&#42;MariaDB&#42; <br />Valid values: &#96;&#96;audit&#96;&#96;, &#96;&#96;error&#96;&#96;, &#96;&#96;general&#96;&#96;, &#96;&#96;slowquery&#96;&#96;<br />&#42;Microsoft SQL Server&#42; <br />Valid values: &#96;&#96;agent&#96;&#96;, &#96;&#96;error&#96;&#96;<br />&#42;MySQL&#42; <br />Valid values: &#96;&#96;audit&#96;&#96;, &#96;&#96;error&#96;&#96;, &#96;&#96;general&#96;&#96;, &#96;&#96;slowquery&#96;&#96;<br />&#42;Oracle&#42; <br />Valid values: &#96;&#96;alert&#96;&#96;, &#96;&#96;audit&#96;&#96;, &#96;&#96;listener&#96;&#96;, &#96;&#96;trace&#96;&#96;, &#96;&#96;oemagent&#96;&#96;<br />&#42;PostgreSQL&#42; <br />Valid values: &#96;&#96;postgresql&#96;&#96;, &#96;&#96;upgrade&#96;&#96;"
  },
  {
    "name": "enable_iam_database_authentication",
    "type": "boolean",
    "description": "A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.<br />This property is supported for RDS for MariaDB, RDS for MySQL, and RDS for PostgreSQL. For more information, see &#91;IAM Database Authentication for MariaDB, MySQL, and PostgreSQL&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html) in the &#42;Amazon RDS User Guide.&#42;<br />&#42;Amazon Aurora&#42; <br />Not applicable. Mapping AWS IAM accounts to database accounts is managed by the DB cluster."
  },
  {
    "name": "enable_performance_insights",
    "type": "boolean",
    "description": "Specifies whether to enable Performance Insights for the DB instance. For more information, see &#91;Using Amazon Performance Insights&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;PerfInsights.html) in the &#42;Amazon RDS User Guide&#42;.<br />This setting doesn't apply to RDS Custom DB instances."
  },
  {
    "name": "endpoint",
    "type": "object",
    "description": "This data type represents the information you need to connect to an Amazon RDS DB instance. This data type is used as a response element in the following actions:<br />+ &#96;&#96;CreateDBInstance&#96;&#96; <br />+ &#96;&#96;DescribeDBInstances&#96;&#96; <br />+ &#96;&#96;DeleteDBInstance&#96;&#96; <br /><br />For the data structure that represents Amazon Aurora DB cluster endpoints, see &#96;&#96;DBClusterEndpoint&#96;&#96;.",
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
    "description": "The name of the database engine to use for this DB instance. Not every database engine is available in every AWS Region.<br />This property is required when creating a DB instance.<br />You can convert an Oracle database from the non-CDB architecture to the container database (CDB) architecture by updating the &#96;&#96;Engine&#96;&#96; value in your templates from &#96;&#96;oracle-ee&#96;&#96; to &#96;&#96;oracle-ee-cdb&#96;&#96; or from &#96;&#96;oracle-se2&#96;&#96; to &#96;&#96;oracle-se2-cdb&#96;&#96;. Converting to the CDB architecture requires an interruption.<br />Valid Values:<br />+ &#96;&#96;aurora-mysql&#96;&#96; (for Aurora MySQL DB instances)<br />+ &#96;&#96;aurora-postgresql&#96;&#96; (for Aurora PostgreSQL DB instances)<br />+ &#96;&#96;custom-oracle-ee&#96;&#96; (for RDS Custom for Oracle DB instances)<br />+ &#96;&#96;custom-oracle-ee-cdb&#96;&#96; (for RDS Custom for Oracle DB instances)<br />+ &#96;&#96;custom-sqlserver-ee&#96;&#96; (for RDS Custom for SQL Server DB instances)<br />+ &#96;&#96;custom-sqlserver-se&#96;&#96; (for RDS Custom for SQL Server DB instances)<br />+ &#96;&#96;custom-sqlserver-web&#96;&#96; (for RDS Custom for SQL Server DB instances)<br />+ &#96;&#96;db2-ae&#96;&#96; <br />+ &#96;&#96;db2-se&#96;&#96; <br />+ &#96;&#96;mariadb&#96;&#96; <br />+ &#96;&#96;mysql&#96;&#96; <br />+ &#96;&#96;oracle-ee&#96;&#96; <br />+ &#96;&#96;oracle-ee-cdb&#96;&#96; <br />+ &#96;&#96;oracle-se2&#96;&#96; <br />+ &#96;&#96;oracle-se2-cdb&#96;&#96; <br />+ &#96;&#96;postgres&#96;&#96; <br />+ &#96;&#96;sqlserver-ee&#96;&#96; <br />+ &#96;&#96;sqlserver-se&#96;&#96; <br />+ &#96;&#96;sqlserver-ex&#96;&#96; <br />+ &#96;&#96;sqlserver-web&#96;&#96;"
  },
  {
    "name": "engine_lifecycle_support",
    "type": "string",
    "description": "The life cycle type for this DB instance.<br />By default, this value is set to &#96;&#96;open-source-rds-extended-support&#96;&#96;, which enrolls your DB instance into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to &#96;&#96;open-source-rds-extended-support-disabled&#96;&#96;. In this case, creating the DB instance will fail if the DB major version is past its end of standard support date.<br />This setting applies only to RDS for MySQL and RDS for PostgreSQL. For Amazon Aurora DB instances, the life cycle type is managed by the DB cluster.<br />You can use this setting to enroll your DB instance into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB instance past the end of standard support for that engine version. For more information, see &#91;Amazon RDS Extended Support with Amazon RDS&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the &#42;Amazon RDS User Guide&#42;.<br />Valid Values: &#96;&#96;open-source-rds-extended-support &#124; open-source-rds-extended-support-disabled&#96;&#96;<br />Default: &#96;&#96;open-source-rds-extended-support&#96;&#96;"
  },
  {
    "name": "engine_version",
    "type": "string",
    "description": "The version number of the database engine to use.<br />For a list of valid engine versions, use the &#96;&#96;DescribeDBEngineVersions&#96;&#96; action.<br />The following are the database engines and links to information about the major and minor versions that are available with Amazon RDS. Not every database engine is available for every AWS Region.<br />&#42;Amazon Aurora&#42; <br />Not applicable. The version number of the database engine to be used by the DB instance is managed by the DB cluster.<br />&#42;Db2&#42; <br />See &#91;Amazon RDS for Db2&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP&#95;Db2.html#Db2.Concepts.VersionMgmt) in the &#42;Amazon RDS User Guide.&#42;<br />&#42;MariaDB&#42; <br />See &#91;MariaDB on Amazon RDS Versions&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP&#95;MariaDB.html#MariaDB.Concepts.VersionMgmt) in the &#42;Amazon RDS User Guide.&#42;<br />&#42;Microsoft SQL Server&#42; <br />See &#91;Microsoft SQL Server Versions on Amazon RDS&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP&#95;SQLServer.html#SQLServer.Concepts.General.VersionSupport) in the &#42;Amazon RDS User Guide.&#42;<br />&#42;MySQL&#42; <br />See &#91;MySQL on Amazon RDS Versions&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP&#95;MySQL.html#MySQL.Concepts.VersionMgmt) in the &#42;Amazon RDS User Guide.&#42;<br />&#42;Oracle&#42; <br />See &#91;Oracle Database Engine Release Notes&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.PatchComposition.html) in the &#42;Amazon RDS User Guide.&#42;<br />&#42;PostgreSQL&#42; <br />See &#91;Supported PostgreSQL Database Versions&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP&#95;PostgreSQL.html#PostgreSQL.Concepts.General.DBVersions) in the &#42;Amazon RDS User Guide.&#42;"
  },
  {
    "name": "manage_master_user_password",
    "type": "boolean",
    "description": "Specifies whether to manage the master user password with AWS Secrets Manager.<br />For more information, see &#91;Password management with Secrets Manager&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the &#42;Amazon RDS User Guide.&#42;<br />Constraints:<br />+ Can't manage the master user password with AWS Secrets Manager if &#96;&#96;MasterUserPassword&#96;&#96; is specified."
  },
  {
    "name": "instance_create_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "iops",
    "type": "integer",
    "description": "The number of I/O operations per second (IOPS) that the database provisions. The value must be equal to or greater than 1000. <br />If you specify this property, you must follow the range of allowed ratios of your requested IOPS rate to the amount of storage that you allocate (IOPS to allocated storage). For example, you can provision an Oracle database instance with 1000 IOPS and 200 GiB of storage (a ratio of 5:1), or specify 2000 IOPS with 200 GiB of storage (a ratio of 10:1). For more information, see &#91;Amazon RDS Provisioned IOPS Storage to Improve Performance&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/DeveloperGuide/CHAP&#95;Storage.html#USER&#95;PIOPS) in the &#42;Amazon RDS User Guide&#42;.<br />If you specify &#96;&#96;io1&#96;&#96; for the &#96;&#96;StorageType&#96;&#96; property, then you must also specify the &#96;&#96;Iops&#96;&#96; property.<br />Constraints:<br />+ For RDS for Db2, MariaDB, MySQL, Oracle, and PostgreSQL - Must be a multiple between .5 and 50 of the storage amount for the DB instance.<br />+ For RDS for SQL Server - Must be a multiple between 1 and 50 of the storage amount for the DB instance."
  },
  {
    "name": "is_storage_config_upgrade_available",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "The ARN of the AWS KMS key that's used to encrypt the DB instance, such as &#96;&#96;arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef&#96;&#96;. If you enable the StorageEncrypted property but don't specify this property, AWS CloudFormation uses the default KMS key. If you specify this property, you must set the StorageEncrypted property to true. <br />If you specify the &#96;&#96;SourceDBInstanceIdentifier&#96;&#96; or &#96;&#96;SourceDbiResourceId&#96;&#96; property, don't specify this property. The value is inherited from the source DB instance, and if the DB instance is encrypted, the specified &#96;&#96;KmsKeyId&#96;&#96; property is used. However, if the source DB instance is in a different AWS Region, you must specify a KMS key ID.<br />If you specify the &#96;&#96;SourceDBInstanceAutomatedBackupsArn&#96;&#96; property, don't specify this property. The value is inherited from the source DB instance automated backup, and if the automated backup is encrypted, the specified &#96;&#96;KmsKeyId&#96;&#96; property is used.<br />If you create an encrypted read replica in a different AWS Region, then you must specify a KMS key for the destination AWS Region. KMS encryption keys are specific to the region that they're created in, and you can't use encryption keys from one region in another region.<br />If you specify the &#96;&#96;DBSnapshotIdentifier&#96;&#96; property, don't specify this property. The &#96;&#96;StorageEncrypted&#96;&#96; property value is inherited from the snapshot. If the DB instance is encrypted, the specified &#96;&#96;KmsKeyId&#96;&#96; property is also inherited from the snapshot.<br />If you specify &#96;&#96;DBSecurityGroups&#96;&#96;, AWS CloudFormation ignores this property. To specify both a security group and this property, you must use a VPC security group. For more information about Amazon RDS and VPC, see &#91;Using Amazon RDS with Amazon VPC&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;VPC.html) in the &#42;Amazon RDS User Guide&#42;.<br />&#42;Amazon Aurora&#42; <br />Not applicable. The KMS key identifier is managed by the DB cluster."
  },
  {
    "name": "latest_restorable_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "license_model",
    "type": "string",
    "description": "License model information for this DB instance.<br />Valid Values:<br />+ Aurora MySQL - &#96;&#96;general-public-license&#96;&#96;<br />+ Aurora PostgreSQL - &#96;&#96;postgresql-license&#96;&#96;<br />+ RDS for Db2 - &#96;&#96;bring-your-own-license&#96;&#96;. For more information about RDS for Db2 licensing, see &#91;&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-licensing.html) in the &#42;Amazon RDS User Guide.&#42;<br />+ RDS for MariaDB - &#96;&#96;general-public-license&#96;&#96;<br />+ RDS for Microsoft SQL Server - &#96;&#96;license-included&#96;&#96;<br />+ RDS for MySQL - &#96;&#96;general-public-license&#96;&#96;<br />+ RDS for Oracle - &#96;&#96;bring-your-own-license&#96;&#96; or &#96;&#96;license-included&#96;&#96;<br />+ RDS for PostgreSQL - &#96;&#96;postgresql-license&#96;&#96;<br /><br />If you've specified &#96;&#96;DBSecurityGroups&#96;&#96; and then you update the license model, AWS CloudFormation replaces the underlying DB instance. This will incur some interruptions to database availability."
  },
  {
    "name": "master_username",
    "type": "string",
    "description": "The master user name for the DB instance.<br />If you specify the &#96;&#96;SourceDBInstanceIdentifier&#96;&#96; or &#96;&#96;DBSnapshotIdentifier&#96;&#96; property, don't specify this property. The value is inherited from the source DB instance or snapshot.<br />When migrating a self-managed Db2 database, we recommend that you use the same master username as your self-managed Db2 instance name.<br />&#42;Amazon Aurora&#42; <br />Not applicable. The name for the master user is managed by the DB cluster. <br />&#42;RDS for Db2&#42; <br />Constraints:<br />+ Must be 1 to 16 letters or numbers.<br />+ First character must be a letter.<br />+ Can't be a reserved word for the chosen database engine.<br /><br />&#42;RDS for MariaDB&#42; <br />Constraints:<br />+ Must be 1 to 16 letters or numbers.<br />+ Can't be a reserved word for the chosen database engine.<br /><br />&#42;RDS for Microsoft SQL Server&#42; <br />Constraints:<br />+ Must be 1 to 128 letters or numbers.<br />+ First character must be a letter.<br />+ Can't be a reserved word for the chosen database engine.<br /><br />&#42;RDS for MySQL&#42; <br />Constraints:<br />+ Must be 1 to 16 letters or numbers.<br />+ First character must be a letter.<br />+ Can't be a reserved word for the chosen database engine.<br /><br />&#42;RDS for Oracle&#42; <br />Constraints:<br />+ Must be 1 to 30 letters or numbers.<br />+ First character must be a letter.<br />+ Can't be a reserved word for the chosen database engine.<br /><br />&#42;RDS for PostgreSQL&#42; <br />Constraints:<br />+ Must be 1 to 63 letters or numbers.<br />+ First character must be a letter.<br />+ Can't be a reserved word for the chosen database engine."
  },
  {
    "name": "master_user_password",
    "type": "string",
    "description": "The password for the master user. The password can include any printable ASCII character except \"/\", \"\"\", or \"@\".<br />&#42;Amazon Aurora&#42; <br />Not applicable. The password for the master user is managed by the DB cluster.<br />&#42;RDS for Db2&#42; <br />Must contain from 8 to 255 characters.<br />&#42;RDS for MariaDB&#42; <br />Constraints: Must contain from 8 to 41 characters.<br />&#42;RDS for Microsoft SQL Server&#42; <br />Constraints: Must contain from 8 to 128 characters.<br />&#42;RDS for MySQL&#42; <br />Constraints: Must contain from 8 to 41 characters.<br />&#42;RDS for Oracle&#42; <br />Constraints: Must contain from 8 to 30 characters.<br />&#42;RDS for PostgreSQL&#42; <br />Constraints: Must contain from 8 to 128 characters."
  },
  {
    "name": "master_user_secret",
    "type": "object",
    "description": "The secret managed by RDS in AWS Secrets Manager for the master user password.<br />For more information, see &#91;Password management with Secrets Manager&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the &#42;Amazon RDS User Guide.&#42;",
    "children": [
      {
        "name": "secret_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the secret. This parameter is a return value that you can retrieve using the &#96;&#96;Fn::GetAtt&#96;&#96; intrinsic function. For more information, see &#91;Return values&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#aws-resource-rds-dbinstance-return-values)."
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
    "description": "The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.<br />For more information about this setting, including limitations that apply to it, see &#91;Managing capacity automatically with Amazon RDS storage autoscaling&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;PIOPS.StorageTypes.html#USER&#95;PIOPS.Autoscaling) in the &#42;Amazon RDS User Guide&#42;.<br />This setting doesn't apply to the following DB instances:<br />+ Amazon Aurora (Storage is managed by the DB cluster.)<br />+ RDS Custom"
  },
  {
    "name": "monitoring_interval",
    "type": "integer",
    "description": "The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collection of Enhanced Monitoring metrics, specify &#96;&#96;0&#96;&#96;.<br />If &#96;&#96;MonitoringRoleArn&#96;&#96; is specified, then you must set &#96;&#96;MonitoringInterval&#96;&#96; to a value other than &#96;&#96;0&#96;&#96;.<br />This setting doesn't apply to RDS Custom DB instances.<br />Valid Values: &#96;&#96;0 &#124; 1 &#124; 5 &#124; 10 &#124; 15 &#124; 30 &#124; 60&#96;&#96;<br />Default: &#96;&#96;0&#96;&#96;"
  },
  {
    "name": "monitoring_role_arn",
    "type": "string",
    "description": "The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, &#96;&#96;arn:aws:iam:123456789012:role/emaccess&#96;&#96;. For information on creating a monitoring role, see &#91;Setting Up and Enabling Enhanced Monitoring&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;Monitoring.OS.html#USER&#95;Monitoring.OS.Enabling) in the &#42;Amazon RDS User Guide&#42;.<br />If &#96;&#96;MonitoringInterval&#96;&#96; is set to a value other than &#96;&#96;0&#96;&#96;, then you must supply a &#96;&#96;MonitoringRoleArn&#96;&#96; value.<br />This setting doesn't apply to RDS Custom DB instances."
  },
  {
    "name": "multi_az",
    "type": "boolean",
    "description": "Specifies whether the DB instance is a Multi-AZ deployment. You can't set the &#96;&#96;AvailabilityZone&#96;&#96; parameter if the DB instance is a Multi-AZ deployment.<br />This setting doesn't apply to Amazon Aurora because the DB instance Availability Zones (AZs) are managed by the DB cluster."
  },
  {
    "name": "nchar_character_set_name",
    "type": "string",
    "description": "The name of the NCHAR character set for the Oracle DB instance.<br />This setting doesn't apply to RDS Custom DB instances."
  },
  {
    "name": "network_type",
    "type": "string",
    "description": "The network type of the DB instance.<br />Valid values:<br />+ &#96;&#96;IPV4&#96;&#96; <br />+ &#96;&#96;DUAL&#96;&#96; <br /><br />The network type is determined by the &#96;&#96;DBSubnetGroup&#96;&#96; specified for the DB instance. A &#96;&#96;DBSubnetGroup&#96;&#96; can support only the IPv4 protocol or the IPv4 and IPv6 protocols (&#96;&#96;DUAL&#96;&#96;).<br />For more information, see &#91;Working with a DB instance in a VPC&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;VPC.WorkingWithRDSInstanceinaVPC.html) in the &#42;Amazon RDS User Guide.&#42;"
  },
  {
    "name": "option_group_name",
    "type": "string",
    "description": "Indicates that the DB instance should be associated with the specified option group.<br />Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group. Also, that option group can't be removed from a DB instance once it is associated with a DB instance."
  },
  {
    "name": "percent_progress",
    "type": "string",
    "description": ""
  },
  {
    "name": "performance_insights_kms_key_id",
    "type": "string",
    "description": "The AWS KMS key identifier for encryption of Performance Insights data.<br />The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.<br />If you do not specify a value for &#96;&#96;PerformanceInsightsKMSKeyId&#96;&#96;, then Amazon RDS uses your default KMS key. There is a default KMS key for your AWS account. Your AWS account has a different default KMS key for each AWS Region.<br />For information about enabling Performance Insights, see &#91;EnablePerformanceInsights&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-enableperformanceinsights)."
  },
  {
    "name": "performance_insights_retention_period",
    "type": "integer",
    "description": "The number of days to retain Performance Insights data. When creating a DB instance without enabling Performance Insights, you can't specify the parameter &#96;&#96;PerformanceInsightsRetentionPeriod&#96;&#96;.<br />This setting doesn't apply to RDS Custom DB instances.<br />Valid Values:<br />+ &#96;&#96;7&#96;&#96; <br />+ &#42;month&#42; &#42; 31, where &#42;month&#42; is a number of months from 1-23. Examples: &#96;&#96;93&#96;&#96; (3 months &#42; 31), &#96;&#96;341&#96;&#96; (11 months &#42; 31), &#96;&#96;589&#96;&#96; (19 months &#42; 31)<br />+ &#96;&#96;731&#96;&#96; <br /><br />Default: &#96;&#96;7&#96;&#96; days<br />If you specify a retention period that isn't valid, such as &#96;&#96;94&#96;&#96;, Amazon RDS returns an error."
  },
  {
    "name": "port",
    "type": "string",
    "description": "The port number on which the database accepts connections.<br />This setting doesn't apply to Aurora DB instances. The port number is managed by the cluster.<br />Valid Values: &#96;&#96;1150-65535&#96;&#96;<br />Default:<br />+ RDS for Db2 - &#96;&#96;50000&#96;&#96;<br />+ RDS for MariaDB - &#96;&#96;3306&#96;&#96;<br />+ RDS for Microsoft SQL Server - &#96;&#96;1433&#96;&#96;<br />+ RDS for MySQL - &#96;&#96;3306&#96;&#96;<br />+ RDS for Oracle - &#96;&#96;1521&#96;&#96;<br />+ RDS for PostgreSQL - &#96;&#96;5432&#96;&#96;<br /><br />Constraints:<br />+ For RDS for Microsoft SQL Server, the value can't be &#96;&#96;1234&#96;&#96;, &#96;&#96;1434&#96;&#96;, &#96;&#96;3260&#96;&#96;, &#96;&#96;3343&#96;&#96;, &#96;&#96;3389&#96;&#96;, &#96;&#96;47001&#96;&#96;, or &#96;&#96;49152-49156&#96;&#96;."
  },
  {
    "name": "preferred_backup_window",
    "type": "string",
    "description": "The daily time range during which automated backups are created if automated backups are enabled, using the &#96;&#96;BackupRetentionPeriod&#96;&#96; parameter. For more information, see &#91;Backup Window&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;WorkingWithAutomatedBackups.html#USER&#95;WorkingWithAutomatedBackups.BackupWindow) in the &#42;Amazon RDS User Guide.&#42;<br />Constraints:<br />+ Must be in the format &#96;&#96;hh24:mi-hh24:mi&#96;&#96;.<br />+ Must be in Universal Coordinated Time (UTC).<br />+ Must not conflict with the preferred maintenance window.<br />+ Must be at least 30 minutes.<br /><br />&#42;Amazon Aurora&#42; <br />Not applicable. The daily time range for creating automated backups is managed by the DB cluster."
  },
  {
    "name": "preferred_maintenance_window",
    "type": "string",
    "description": "The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).<br />Format: &#96;&#96;ddd:hh24:mi-ddd:hh24:mi&#96;&#96;<br />The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see &#91;Maintaining a DB instance&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow) in the &#42;Amazon RDS User Guide.&#42;<br />This property applies when AWS CloudFormation initially creates the DB instance. If you use AWS CloudFormation to update the DB instance, those updates are applied immediately.<br />Constraints: Minimum 30-minute window."
  },
  {
    "name": "processor_features",
    "type": "array",
    "description": "The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.<br />This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": "The name of the processor feature. Valid names are &#96;&#96;coreCount&#96;&#96; and &#96;&#96;threadsPerCore&#96;&#96;."
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
    "description": "The order of priority in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see &#91;Fault Tolerance for an Aurora DB Cluster&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html#Aurora.Managing.FaultTolerance) in the &#42;Amazon Aurora User Guide&#42;.<br />This setting doesn't apply to RDS Custom DB instances.<br />Default: &#96;&#96;1&#96;&#96;<br />Valid Values: &#96;&#96;0 - 15&#96;&#96;"
  },
  {
    "name": "publicly_accessible",
    "type": "boolean",
    "description": "Indicates whether the DB instance is an internet-facing instance. If you specify true, AWS CloudFormation creates an instance with a publicly resolvable DNS name, which resolves to a public IP address. If you specify false, AWS CloudFormation creates an internal instance with a DNS name that resolves to a private IP address. <br />The default behavior value depends on your VPC setup and the database subnet group. For more information, see the &#96;&#96;PubliclyAccessible&#96;&#96; parameter in the &#91;CreateDBInstance&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API&#95;CreateDBInstance.html) in the &#42;Amazon RDS API Reference&#42;."
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
    "description": "The open mode of an Oracle read replica. For more information, see &#91;Working with Oracle Read Replicas for Amazon RDS&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html) in the &#42;Amazon RDS User Guide&#42;.<br />This setting is only supported in RDS for Oracle.<br />Default: &#96;&#96;open-read-only&#96;&#96;<br />Valid Values: &#96;&#96;open-read-only&#96;&#96; or &#96;&#96;mounted&#96;&#96;"
  },
  {
    "name": "restore_time",
    "type": "string",
    "description": "The date and time to restore from. This parameter applies to point-in-time recovery. For more information, see &#91;Restoring a DB instance to a specified time&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;PIT.html) in the in the &#42;Amazon RDS User Guide&#42;.<br />Constraints:<br />+ Must be a time in Universal Coordinated Time (UTC) format.<br />+ Must be before the latest restorable time for the DB instance.<br />+ Can't be specified if the &#96;&#96;UseLatestRestorableTime&#96;&#96; parameter is enabled.<br /><br />Example: &#96;&#96;2009-09-07T23:45:00Z&#96;&#96;"
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
    "description": "The identifier of the Multi-AZ DB cluster that will act as the source for the read replica. Each DB cluster can have up to 15 read replicas.<br />Constraints:<br />+ Must be the identifier of an existing Multi-AZ DB cluster.<br />+ Can't be specified if the &#96;&#96;SourceDBInstanceIdentifier&#96;&#96; parameter is also specified.<br />+ The specified DB cluster must have automatic backups enabled, that is, its backup retention period must be greater than 0.<br />+ The source DB cluster must be in the same AWS-Region as the read replica. Cross-Region replication isn't supported."
  },
  {
    "name": "source_dbi_resource_id",
    "type": "string",
    "description": "The resource ID of the source DB instance from which to restore."
  },
  {
    "name": "source_db_instance_automated_backups_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the replicated automated backups from which to restore, for example, &#96;&#96;arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE&#96;&#96;.<br />This setting doesn't apply to RDS Custom."
  },
  {
    "name": "source_db_instance_identifier",
    "type": "string",
    "description": "If you want to create a read replica DB instance, specify the ID of the source DB instance. Each DB instance can have a limited number of read replicas. For more information, see &#91;Working with Read Replicas&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/DeveloperGuide/USER&#95;ReadRepl.html) in the &#42;Amazon RDS User Guide&#42;.<br />For information about constraints that apply to DB instance identifiers, see &#91;Naming constraints in Amazon RDS&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP&#95;Limits.html#RDS&#95;Limits.Constraints) in the &#42;Amazon RDS User Guide&#42;.<br />The &#96;&#96;SourceDBInstanceIdentifier&#96;&#96; property determines whether a DB instance is a read replica. If you remove the &#96;&#96;SourceDBInstanceIdentifier&#96;&#96; property from your template and then update your stack, AWS CloudFormation promotes the read replica to a standalone DB instance.<br />If you specify the &#96;&#96;UseLatestRestorableTime&#96;&#96; or &#96;&#96;RestoreTime&#96;&#96; properties in conjunction with the &#96;&#96;SourceDBInstanceIdentifier&#96;&#96; property, RDS restores the DB instance to the requested point in time, thereby creating a new DB instance.<br />+ If you specify a source DB instance that uses VPC security groups, we recommend that you specify the &#96;&#96;VPCSecurityGroups&#96;&#96; property. If you don't specify the property, the read replica inherits the value of the &#96;&#96;VPCSecurityGroups&#96;&#96; property from the source DB when you create the replica. However, if you update the stack, AWS CloudFormation reverts the replica's &#96;&#96;VPCSecurityGroups&#96;&#96; property to the default value because it's not defined in the stack's template. This change might cause unexpected issues.<br />+ Read replicas don't support deletion policies. AWS CloudFormation ignores any deletion policy that's associated with a read replica.<br />+ If you specify &#96;&#96;SourceDBInstanceIdentifier&#96;&#96;, don't specify the &#96;&#96;DBSnapshotIdentifier&#96;&#96; property. You can't create a read replica from a snapshot.<br />+ Don't set the &#96;&#96;BackupRetentionPeriod&#96;&#96;, &#96;&#96;DBName&#96;&#96;, &#96;&#96;MasterUsername&#96;&#96;, &#96;&#96;MasterUserPassword&#96;&#96;, and &#96;&#96;PreferredBackupWindow&#96;&#96; properties. The database attributes are inherited from the source DB instance, and backups are disabled for read replicas.<br />+ If the source DB instance is in a different region than the read replica, specify the source region in &#96;&#96;SourceRegion&#96;&#96;, and specify an ARN for a valid DB instance in &#96;&#96;SourceDBInstanceIdentifier&#96;&#96;. For more information, see &#91;Constructing a Amazon RDS Amazon Resource Name (ARN)&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;Tagging.html#USER&#95;Tagging.ARN) in the &#42;Amazon RDS User Guide&#42;.<br />+ For DB instances in Amazon Aurora clusters, don't specify this property. Amazon RDS automatically assigns writer and reader DB instances."
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
    "description": "A value that indicates whether the DB instance is encrypted. By default, it isn't encrypted.<br />If you specify the &#96;&#96;KmsKeyId&#96;&#96; property, then you must enable encryption.<br />If you specify the &#96;&#96;SourceDBInstanceIdentifier&#96;&#96; or &#96;&#96;SourceDbiResourceId&#96;&#96; property, don't specify this property. The value is inherited from the source DB instance, and if the DB instance is encrypted, the specified &#96;&#96;KmsKeyId&#96;&#96; property is used.<br />If you specify the &#96;&#96;SourceDBInstanceAutomatedBackupsArn&#96;&#96; property, don't specify this property. The value is inherited from the source DB instance automated backup. <br />If you specify &#96;&#96;DBSnapshotIdentifier&#96;&#96; property, don't specify this property. The value is inherited from the snapshot.<br />&#42;Amazon Aurora&#42; <br />Not applicable. The encryption for DB instances is managed by the DB cluster."
  },
  {
    "name": "storage_type",
    "type": "string",
    "description": "The storage type to associate with the DB instance.<br />If you specify &#96;&#96;io1&#96;&#96;, &#96;&#96;io2&#96;&#96;, or &#96;&#96;gp3&#96;&#96;, you must also include a value for the &#96;&#96;Iops&#96;&#96; parameter.<br />This setting doesn't apply to Amazon Aurora DB instances. Storage is managed by the DB cluster.<br />Valid Values: &#96;&#96;gp2 &#124; gp3 &#124; io1 &#124; io2 &#124; standard&#96;&#96;<br />Default: &#96;&#96;io1&#96;&#96;, if the &#96;&#96;Iops&#96;&#96; parameter is specified. Otherwise, &#96;&#96;gp3&#96;&#96;."
  },
  {
    "name": "storage_throughput",
    "type": "integer",
    "description": "Specifies the storage throughput value, in mebibyte per second (MiBps), for the DB instance. This setting applies only to the &#96;&#96;gp3&#96;&#96; storage type. <br />This setting doesn't apply to RDS Custom or Amazon Aurora."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags to assign to the DB instance.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with &#96;&#96;aws:&#96;&#96; or &#96;&#96;rds:&#96;&#96;. The string can only contain only the set of Unicode letters, digits, white-space, '&#95;', '.', ':', '/', '=', '+', '-', '@' (Java regex: \"^(&#91;\\\\p&#123;L&#125;\\\\p&#123;Z&#125;\\\\p&#123;N&#125;&#95;.:/=+\\\\-@&#93;&#42;)$\")."
      },
      {
        "name": "value",
        "type": "string",
        "description": "A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with &#96;&#96;aws:&#96;&#96; or &#96;&#96;rds:&#96;&#96;. The string can only contain only the set of Unicode letters, digits, white-space, '&#95;', '.', ':', '/', '=', '+', '-', '@' (Java regex: \"^(&#91;\\\\p&#123;L&#125;\\\\p&#123;Z&#125;\\\\p&#123;N&#125;&#95;.:/=+\\\\-@&#93;&#42;)$\")."
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
    "description": "The time zone of the DB instance. The time zone parameter is currently supported only by &#91;RDS for Db2&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-time-zone) and &#91;RDS for SQL Server&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP&#95;SQLServer.html#SQLServer.Concepts.General.TimeZone)."
  },
  {
    "name": "use_default_processor_features",
    "type": "boolean",
    "description": "Specifies whether the DB instance class of the DB instance uses its default processor features.<br />This setting doesn't apply to RDS Custom DB instances."
  },
  {
    "name": "use_latest_restorable_time",
    "type": "boolean",
    "description": "Specifies whether the DB instance is restored from the latest backup time. By default, the DB instance isn't restored from the latest backup time. This parameter applies to point-in-time recovery. For more information, see &#91;Restoring a DB instance to a specified time&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;PIT.html) in the in the &#42;Amazon RDS User Guide&#42;.<br />Constraints:<br />+ Can't be specified if the &#96;&#96;RestoreTime&#96;&#96; parameter is provided."
  },
  {
    "name": "vpc_security_groups",
    "type": "array",
    "description": "A list of the VPC security group IDs to assign to the DB instance. The list can include both the physical IDs of existing VPC security groups and references to &#91;AWS::EC2::SecurityGroup&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group.html) resources created in the template.<br />If you plan to update the resource, don't specify VPC security groups in a shared VPC.<br />If you set &#96;&#96;VPCSecurityGroups&#96;&#96;, you must not set &#91;DBSecurityGroups&#93;(https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-dbsecuritygroups), and vice versa.<br />You can migrate a DB instance in your stack from an RDS DB security group to a VPC security group, but keep the following in mind:<br />+ You can't revert to using an RDS security group after you establish a VPC security group membership.<br />+ When you migrate your DB instance to VPC security groups, if your stack update rolls back because the DB instance update fails or because an update fails in another AWS CloudFormation resource, the rollback fails because it can't revert to an RDS security group.<br />+ To use the properties that are available when you use a VPC security group, you must recreate the DB instance. If you don't, AWS CloudFormation submits only the property values that are listed in the &#91;DBSecurityGroups&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-dbsecuritygroups) property.<br /><br />To avoid this situation, migrate your DB instance to using VPC security groups only when that is the only change in your stack template. <br />&#42;Amazon Aurora&#42; <br />Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. If specified, the setting must match the DB cluster setting."
  },
  {
    "name": "apply_immediately",
    "type": "boolean",
    "description": "Specifies whether changes to the DB instance and any pending modifications are applied immediately, regardless of the &#96;&#96;PreferredMaintenanceWindow&#96;&#96; setting. If set to &#96;&#96;false&#96;&#96;, changes are applied during the next maintenance window. Until RDS applies the changes, the DB instance remains in a drift state. As a result, the configuration doesn't fully reflect the requested modifications and temporarily diverges from the intended state.<br />In addition to the settings described in &#91;Modifying a DB instance&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html), this property also determines whether the DB instance reboots when a static parameter is modified in the associated DB parameter group.<br />Default: &#96;&#96;true&#96;&#96;"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html"><code>AWS::RDS::DBInstance</code></a>.

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
WHERE region = 'us-east-1' AND data__Identifier = '<DBInstanceIdentifier>';
```

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
'{{ AllocatedStorage }}',
 '{{ AllowMajorVersionUpgrade }}',
 '{{ AssociatedRoles }}',
 '{{ AutoMinorVersionUpgrade }}',
 '{{ AutomaticBackupReplicationRegion }}',
 '{{ AutomaticBackupReplicationKmsKeyId }}',
 '{{ AutomaticBackupReplicationRetentionPeriod }}',
 '{{ AvailabilityZone }}',
 '{{ BackupRetentionPeriod }}',
 '{{ BackupTarget }}',
 '{{ CACertificateIdentifier }}',
 '{{ CertificateRotationRestart }}',
 '{{ CharacterSetName }}',
 '{{ CopyTagsToSnapshot }}',
 '{{ CustomIAMInstanceProfile }}',
 '{{ DatabaseInsightsMode }}',
 '{{ DBClusterIdentifier }}',
 '{{ DBClusterSnapshotIdentifier }}',
 '{{ DBInstanceClass }}',
 '{{ DBInstanceIdentifier }}',
 '{{ DBName }}',
 '{{ DBParameterGroupName }}',
 '{{ DBSecurityGroups }}',
 '{{ DBSnapshotIdentifier }}',
 '{{ DBSubnetGroupName }}',
 '{{ DBSystemId }}',
 '{{ DedicatedLogVolume }}',
 '{{ DeleteAutomatedBackups }}',
 '{{ DeletionProtection }}',
 '{{ Domain }}',
 '{{ DomainAuthSecretArn }}',
 '{{ DomainDnsIps }}',
 '{{ DomainFqdn }}',
 '{{ DomainIAMRoleName }}',
 '{{ DomainOu }}',
 '{{ EnableCloudwatchLogsExports }}',
 '{{ EnableIAMDatabaseAuthentication }}',
 '{{ EnablePerformanceInsights }}',
 '{{ Engine }}',
 '{{ EngineLifecycleSupport }}',
 '{{ EngineVersion }}',
 '{{ ManageMasterUserPassword }}',
 '{{ Iops }}',
 '{{ KmsKeyId }}',
 '{{ LicenseModel }}',
 '{{ MasterUsername }}',
 '{{ MasterUserPassword }}',
 '{{ MasterUserSecret }}',
 '{{ MaxAllocatedStorage }}',
 '{{ MonitoringInterval }}',
 '{{ MonitoringRoleArn }}',
 '{{ MultiAZ }}',
 '{{ NcharCharacterSetName }}',
 '{{ NetworkType }}',
 '{{ OptionGroupName }}',
 '{{ PerformanceInsightsKMSKeyId }}',
 '{{ PerformanceInsightsRetentionPeriod }}',
 '{{ Port }}',
 '{{ PreferredBackupWindow }}',
 '{{ PreferredMaintenanceWindow }}',
 '{{ ProcessorFeatures }}',
 '{{ PromotionTier }}',
 '{{ PubliclyAccessible }}',
 '{{ ReplicaMode }}',
 '{{ RestoreTime }}',
 '{{ SourceDBClusterIdentifier }}',
 '{{ SourceDbiResourceId }}',
 '{{ SourceDBInstanceAutomatedBackupsArn }}',
 '{{ SourceDBInstanceIdentifier }}',
 '{{ SourceRegion }}',
 '{{ StorageEncrypted }}',
 '{{ StorageType }}',
 '{{ StorageThroughput }}',
 '{{ Tags }}',
 '{{ TdeCredentialArn }}',
 '{{ TdeCredentialPassword }}',
 '{{ Timezone }}',
 '{{ UseDefaultProcessorFeatures }}',
 '{{ UseLatestRestorableTime }}',
 '{{ VPCSecurityGroups }}',
 '{{ ApplyImmediately }}',
'{{ region }}';
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
 '{{ AllocatedStorage }}',
 '{{ AllowMajorVersionUpgrade }}',
 '{{ AssociatedRoles }}',
 '{{ AutoMinorVersionUpgrade }}',
 '{{ AutomaticBackupReplicationRegion }}',
 '{{ AutomaticBackupReplicationKmsKeyId }}',
 '{{ AutomaticBackupReplicationRetentionPeriod }}',
 '{{ AvailabilityZone }}',
 '{{ BackupRetentionPeriod }}',
 '{{ BackupTarget }}',
 '{{ CACertificateIdentifier }}',
 '{{ CertificateRotationRestart }}',
 '{{ CharacterSetName }}',
 '{{ CopyTagsToSnapshot }}',
 '{{ CustomIAMInstanceProfile }}',
 '{{ DatabaseInsightsMode }}',
 '{{ DBClusterIdentifier }}',
 '{{ DBClusterSnapshotIdentifier }}',
 '{{ DBInstanceClass }}',
 '{{ DBInstanceIdentifier }}',
 '{{ DBName }}',
 '{{ DBParameterGroupName }}',
 '{{ DBSecurityGroups }}',
 '{{ DBSnapshotIdentifier }}',
 '{{ DBSubnetGroupName }}',
 '{{ DBSystemId }}',
 '{{ DedicatedLogVolume }}',
 '{{ DeleteAutomatedBackups }}',
 '{{ DeletionProtection }}',
 '{{ Domain }}',
 '{{ DomainAuthSecretArn }}',
 '{{ DomainDnsIps }}',
 '{{ DomainFqdn }}',
 '{{ DomainIAMRoleName }}',
 '{{ DomainOu }}',
 '{{ EnableCloudwatchLogsExports }}',
 '{{ EnableIAMDatabaseAuthentication }}',
 '{{ EnablePerformanceInsights }}',
 '{{ Engine }}',
 '{{ EngineLifecycleSupport }}',
 '{{ EngineVersion }}',
 '{{ ManageMasterUserPassword }}',
 '{{ Iops }}',
 '{{ KmsKeyId }}',
 '{{ LicenseModel }}',
 '{{ MasterUsername }}',
 '{{ MasterUserPassword }}',
 '{{ MasterUserSecret }}',
 '{{ MaxAllocatedStorage }}',
 '{{ MonitoringInterval }}',
 '{{ MonitoringRoleArn }}',
 '{{ MultiAZ }}',
 '{{ NcharCharacterSetName }}',
 '{{ NetworkType }}',
 '{{ OptionGroupName }}',
 '{{ PerformanceInsightsKMSKeyId }}',
 '{{ PerformanceInsightsRetentionPeriod }}',
 '{{ Port }}',
 '{{ PreferredBackupWindow }}',
 '{{ PreferredMaintenanceWindow }}',
 '{{ ProcessorFeatures }}',
 '{{ PromotionTier }}',
 '{{ PubliclyAccessible }}',
 '{{ ReplicaMode }}',
 '{{ RestoreTime }}',
 '{{ SourceDBClusterIdentifier }}',
 '{{ SourceDbiResourceId }}',
 '{{ SourceDBInstanceAutomatedBackupsArn }}',
 '{{ SourceDBInstanceIdentifier }}',
 '{{ SourceRegion }}',
 '{{ StorageEncrypted }}',
 '{{ StorageType }}',
 '{{ StorageThroughput }}',
 '{{ Tags }}',
 '{{ TdeCredentialArn }}',
 '{{ TdeCredentialPassword }}',
 '{{ Timezone }}',
 '{{ UseDefaultProcessorFeatures }}',
 '{{ UseLatestRestorableTime }}',
 '{{ VPCSecurityGroups }}',
 '{{ ApplyImmediately }}',
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
  - name: db_instance
    props:
      - name: AllocatedStorage
        value: '{{ AllocatedStorage }}'
      - name: AllowMajorVersionUpgrade
        value: '{{ AllowMajorVersionUpgrade }}'
      - name: AssociatedRoles
        value:
          - FeatureName: '{{ FeatureName }}'
            RoleArn: '{{ RoleArn }}'
      - name: AutoMinorVersionUpgrade
        value: '{{ AutoMinorVersionUpgrade }}'
      - name: AutomaticBackupReplicationRegion
        value: '{{ AutomaticBackupReplicationRegion }}'
      - name: AutomaticBackupReplicationKmsKeyId
        value: '{{ AutomaticBackupReplicationKmsKeyId }}'
      - name: AutomaticBackupReplicationRetentionPeriod
        value: '{{ AutomaticBackupReplicationRetentionPeriod }}'
      - name: AvailabilityZone
        value: '{{ AvailabilityZone }}'
      - name: BackupRetentionPeriod
        value: '{{ BackupRetentionPeriod }}'
      - name: BackupTarget
        value: '{{ BackupTarget }}'
      - name: CACertificateIdentifier
        value: '{{ CACertificateIdentifier }}'
      - name: CertificateRotationRestart
        value: '{{ CertificateRotationRestart }}'
      - name: CharacterSetName
        value: '{{ CharacterSetName }}'
      - name: CopyTagsToSnapshot
        value: '{{ CopyTagsToSnapshot }}'
      - name: CustomIAMInstanceProfile
        value: '{{ CustomIAMInstanceProfile }}'
      - name: DatabaseInsightsMode
        value: '{{ DatabaseInsightsMode }}'
      - name: DBClusterIdentifier
        value: '{{ DBClusterIdentifier }}'
      - name: DBClusterSnapshotIdentifier
        value: '{{ DBClusterSnapshotIdentifier }}'
      - name: DBInstanceClass
        value: '{{ DBInstanceClass }}'
      - name: DBInstanceIdentifier
        value: '{{ DBInstanceIdentifier }}'
      - name: DBName
        value: '{{ DBName }}'
      - name: DBParameterGroupName
        value: '{{ DBParameterGroupName }}'
      - name: DBSecurityGroups
        value:
          - '{{ DBSecurityGroups[0] }}'
      - name: DBSnapshotIdentifier
        value: '{{ DBSnapshotIdentifier }}'
      - name: DBSubnetGroupName
        value: '{{ DBSubnetGroupName }}'
      - name: DBSystemId
        value: '{{ DBSystemId }}'
      - name: DedicatedLogVolume
        value: '{{ DedicatedLogVolume }}'
      - name: DeleteAutomatedBackups
        value: '{{ DeleteAutomatedBackups }}'
      - name: DeletionProtection
        value: '{{ DeletionProtection }}'
      - name: Domain
        value: '{{ Domain }}'
      - name: DomainAuthSecretArn
        value: '{{ DomainAuthSecretArn }}'
      - name: DomainDnsIps
        value:
          - '{{ DomainDnsIps[0] }}'
      - name: DomainFqdn
        value: '{{ DomainFqdn }}'
      - name: DomainIAMRoleName
        value: '{{ DomainIAMRoleName }}'
      - name: DomainOu
        value: '{{ DomainOu }}'
      - name: EnableCloudwatchLogsExports
        value:
          - '{{ EnableCloudwatchLogsExports[0] }}'
      - name: EnableIAMDatabaseAuthentication
        value: '{{ EnableIAMDatabaseAuthentication }}'
      - name: EnablePerformanceInsights
        value: '{{ EnablePerformanceInsights }}'
      - name: Engine
        value: '{{ Engine }}'
      - name: EngineLifecycleSupport
        value: '{{ EngineLifecycleSupport }}'
      - name: EngineVersion
        value: '{{ EngineVersion }}'
      - name: ManageMasterUserPassword
        value: '{{ ManageMasterUserPassword }}'
      - name: Iops
        value: '{{ Iops }}'
      - name: KmsKeyId
        value: '{{ KmsKeyId }}'
      - name: LicenseModel
        value: '{{ LicenseModel }}'
      - name: MasterUsername
        value: '{{ MasterUsername }}'
      - name: MasterUserPassword
        value: '{{ MasterUserPassword }}'
      - name: MasterUserSecret
        value:
          SecretArn: '{{ SecretArn }}'
          KmsKeyId: '{{ KmsKeyId }}'
      - name: MaxAllocatedStorage
        value: '{{ MaxAllocatedStorage }}'
      - name: MonitoringInterval
        value: '{{ MonitoringInterval }}'
      - name: MonitoringRoleArn
        value: '{{ MonitoringRoleArn }}'
      - name: MultiAZ
        value: '{{ MultiAZ }}'
      - name: NcharCharacterSetName
        value: '{{ NcharCharacterSetName }}'
      - name: NetworkType
        value: '{{ NetworkType }}'
      - name: OptionGroupName
        value: '{{ OptionGroupName }}'
      - name: PerformanceInsightsKMSKeyId
        value: '{{ PerformanceInsightsKMSKeyId }}'
      - name: PerformanceInsightsRetentionPeriod
        value: '{{ PerformanceInsightsRetentionPeriod }}'
      - name: Port
        value: '{{ Port }}'
      - name: PreferredBackupWindow
        value: '{{ PreferredBackupWindow }}'
      - name: PreferredMaintenanceWindow
        value: '{{ PreferredMaintenanceWindow }}'
      - name: ProcessorFeatures
        value:
          - Name: '{{ Name }}'
            Value: '{{ Value }}'
      - name: PromotionTier
        value: '{{ PromotionTier }}'
      - name: PubliclyAccessible
        value: '{{ PubliclyAccessible }}'
      - name: ReplicaMode
        value: '{{ ReplicaMode }}'
      - name: RestoreTime
        value: '{{ RestoreTime }}'
      - name: SourceDBClusterIdentifier
        value: '{{ SourceDBClusterIdentifier }}'
      - name: SourceDbiResourceId
        value: '{{ SourceDbiResourceId }}'
      - name: SourceDBInstanceAutomatedBackupsArn
        value: '{{ SourceDBInstanceAutomatedBackupsArn }}'
      - name: SourceDBInstanceIdentifier
        value: '{{ SourceDBInstanceIdentifier }}'
      - name: SourceRegion
        value: '{{ SourceRegion }}'
      - name: StorageEncrypted
        value: '{{ StorageEncrypted }}'
      - name: StorageType
        value: '{{ StorageType }}'
      - name: StorageThroughput
        value: '{{ StorageThroughput }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: TdeCredentialArn
        value: '{{ TdeCredentialArn }}'
      - name: TdeCredentialPassword
        value: '{{ TdeCredentialPassword }}'
      - name: Timezone
        value: '{{ Timezone }}'
      - name: UseDefaultProcessorFeatures
        value: '{{ UseDefaultProcessorFeatures }}'
      - name: UseLatestRestorableTime
        value: '{{ UseLatestRestorableTime }}'
      - name: VPCSecurityGroups
        value:
          - '{{ VPCSecurityGroups[0] }}'
      - name: ApplyImmediately
        value: '{{ ApplyImmediately }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.rds.db_instances
WHERE data__Identifier = '<DBInstanceIdentifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>db_instances</code> resource, the following permissions are required:

### Create
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

### Read
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

### Update
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

### Delete
```json
rds:AddTagsToResource,
rds:CreateDBSnapshot,
rds:DeleteDBInstance,
rds:DescribeDBInstances
```

### List
```json
rds:DescribeDBInstances
```
