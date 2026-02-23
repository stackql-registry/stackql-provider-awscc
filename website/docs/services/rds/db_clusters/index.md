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
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::RDS::DBCluster&#96;&#96; resource creates an Amazon Aurora DB cluster or Multi-AZ DB cluster.<br />For more information about creating an Aurora DB cluster, see &#91;Creating an Amazon Aurora DB cluster&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.CreateInstance.html) in the &#42;Amazon Aurora User Guide&#42;.<br />For more information about creating a Multi-AZ DB cluster, see &#91;Creating a Multi-AZ DB cluster&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/create-multi-az-db-cluster.html) in the &#42;Amazon RDS User Guide&#42;.<br />You can only create this resource in AWS Regions where Amazon Aurora or Multi-AZ DB clusters are supported.<br />&#42;Updating DB clusters&#42; <br />When properties labeled "&#42;Update requires:&#42;&#91;Replacement&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)" are updated, AWS CloudFormation first creates a replacement DB cluster, then changes references from other dependent resources to point to the replacement DB cluster, and finally deletes the old DB cluster.<br />We highly recommend that you take a snapshot of the database before updating the stack. If you don't, you lose the data when AWS CloudFormation replaces your DB cluster. To preserve your data, perform the following procedure:<br />1. Deactivate any applications that are using the DB cluster so that there's no activity on the DB instance.<br />1. Create a snapshot of the DB cluster. For more information, see &#91;Creating a DB cluster snapshot&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER&#95;CreateSnapshotCluster.html).<br />1. If you want to restore your DB cluster using a DB cluster snapshot, modify the updated template with your DB cluster changes and add the &#96;&#96;SnapshotIdentifier&#96;&#96; property with the ID of the DB cluster snapshot that you want to use.<br />After you restore a DB cluster with a &#96;&#96;SnapshotIdentifier&#96;&#96; property, you must specify the same &#96;&#96;SnapshotIdentifier&#96;&#96; property for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the DB cluster snapshot again, and the data in the database is not changed. However, if you don't specify the &#96;&#96;SnapshotIdentifier&#96;&#96; property, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, a new DB cluster is restored from the specified &#96;&#96;SnapshotIdentifier&#96;&#96; property, and the original DB cluster is deleted.<br />1. Update the stack.<br /><br />Currently, when you are updating the stack for an Aurora Serverless DB cluster, you can't include changes to any other properties when you specify one of the following properties: &#96;&#96;PreferredBackupWindow&#96;&#96;, &#96;&#96;PreferredMaintenanceWindow&#96;&#96;, and &#96;&#96;Port&#96;&#96;. This limitation doesn't apply to provisioned DB clusters.<br />For more information about updating other properties of this resource, see &#96;&#96;ModifyDBCluster&#96;&#96;. For more information about updating stacks, see &#91;CloudFormation Stacks Updates&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html).<br />&#42;Deleting DB clusters&#42; <br />The default &#96;&#96;DeletionPolicy&#96;&#96; for &#96;&#96;AWS::RDS::DBCluster&#96;&#96; resources is &#96;&#96;Snapshot&#96;&#96;. For more information about how AWS CloudFormation deletes resources, see &#91;DeletionPolicy Attribute&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html).</td></tr>
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
    "name": "read_endpoint",
    "type": "object",
    "description": "The &#96;&#96;ReadEndpoint&#96;&#96; return value specifies the reader endpoint for the DB cluster.<br />The reader endpoint for a DB cluster load-balances connections across the Aurora Replicas that are available in a DB cluster. As clients request new connections to the reader endpoint, Aurora distributes the connection requests among the Aurora Replicas in the DB cluster. This functionality can help balance your read workload across multiple Aurora Replicas in your DB cluster.<br />If a failover occurs, and the Aurora Replica that you are connected to is promoted to be the primary instance, your connection is dropped. To continue sending your read workload to other Aurora Replicas in the cluster, you can then reconnect to the reader endpoint.<br />For more information about Aurora endpoints, see &#91;Amazon Aurora connection management&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.Endpoints.html) in the &#42;Amazon Aurora User Guide&#42;.",
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
    "description": "The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster.<br />Valid for Cluster Type: Multi-AZ DB clusters only<br />This setting is required to create a Multi-AZ DB cluster."
  },
  {
    "name": "associated_roles",
    "type": "array",
    "description": "Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster. IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other Amazon Web Services on your behalf.<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters",
    "children": [
      {
        "name": "feature_name",
        "type": "string",
        "description": "The name of the feature associated with the AWS Identity and Access Management (IAM) role. IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services on your behalf. For the list of supported feature names, see the &#96;&#96;SupportedFeatureNames&#96;&#96; description in &#91;DBEngineVersion&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API&#95;DBEngineVersion.html) in the &#42;Amazon RDS API Reference&#42;."
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
    "description": "A list of Availability Zones (AZs) where instances in the DB cluster can be created. For information on AWS Regions and Availability Zones, see &#91;Choosing the Regions and Availability Zones&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.RegionsAndAvailabilityZones.html) in the &#42;Amazon Aurora User Guide&#42;. <br />Valid for: Aurora DB clusters only"
  },
  {
    "name": "auto_minor_version_upgrade",
    "type": "boolean",
    "description": "Specifies whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window. By default, minor engine upgrades are applied automatically.<br />Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB cluster.<br />For more information about automatic minor version upgrades, see &#91;Automatically upgrading the minor engine version&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;UpgradeDBInstance.Upgrading.html#USER&#95;UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades)."
  },
  {
    "name": "backtrack_window",
    "type": "integer",
    "description": "The target backtrack window, in seconds. To disable backtracking, set this value to &#96;&#96;0&#96;&#96;.<br />Valid for Cluster Type: Aurora MySQL DB clusters only<br />Default: &#96;&#96;0&#96;&#96;<br />Constraints:<br />+ If specified, this value must be set to a number from 0 to 259,200 (72 hours)."
  },
  {
    "name": "backup_retention_period",
    "type": "integer",
    "description": "The number of days for which automated backups are retained.<br />Default: 1<br />Constraints:<br />+ Must be a value from 1 to 35<br /><br />Valid for: Aurora DB clusters and Multi-AZ DB clusters"
  },
  {
    "name": "cluster_scalability_type",
    "type": "string",
    "description": "Specifies the scalability mode of the Aurora DB cluster. When set to &#96;&#96;limitless&#96;&#96;, the cluster operates as an Aurora Limitless Database, allowing you to create a DB shard group for horizontal scaling (sharding) capabilities. When set to &#96;&#96;standard&#96;&#96; (the default), the cluster uses normal DB instance creation.<br />&#42;Important:&#42; Automated backup retention isn't supported with Aurora Limitless Database clusters. If you set this property to &#96;&#96;limitless&#96;&#96;, you cannot set &#96;&#96;DeleteAutomatedBackups&#96;&#96; to &#96;&#96;false&#96;&#96;. To create a backup, use manual snapshots instead."
  },
  {
    "name": "copy_tags_to_snapshot",
    "type": "boolean",
    "description": "A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them.<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters"
  },
  {
    "name": "database_insights_mode",
    "type": "string",
    "description": "The mode of Database Insights to enable for the DB cluster.<br />If you set this value to &#96;&#96;advanced&#96;&#96;, you must also set the &#96;&#96;PerformanceInsightsEnabled&#96;&#96; parameter to &#96;&#96;true&#96;&#96; and the &#96;&#96;PerformanceInsightsRetentionPeriod&#96;&#96; parameter to 465.<br />Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters"
  },
  {
    "name": "database_name",
    "type": "string",
    "description": "The name of your database. If you don't provide a name, then Amazon RDS won't create a database in this DB cluster. For naming constraints, see &#91;Naming Constraints&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP&#95;Limits.html#RDS&#95;Limits.Constraints) in the &#42;Amazon Aurora User Guide&#42;. <br />Valid for: Aurora DB clusters and Multi-AZ DB clusters"
  },
  {
    "name": "db_cluster_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "db_cluster_instance_class",
    "type": "string",
    "description": "The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example &#96;&#96;db.m6gd.xlarge&#96;&#96;. Not all DB instance classes are available in all AWS-Regions, or for all database engines.<br />For the full list of DB instance classes and availability for your engine, see &#91;DB instance class&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the &#42;Amazon RDS User Guide&#42;.<br />This setting is required to create a Multi-AZ DB cluster.<br />Valid for Cluster Type: Multi-AZ DB clusters only"
  },
  {
    "name": "db_cluster_resource_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "db_instance_parameter_group_name",
    "type": "string",
    "description": "The name of the DB parameter group to apply to all instances of the DB cluster.<br />When you apply a parameter group using the &#96;&#96;DBInstanceParameterGroupName&#96;&#96; parameter, the DB cluster isn't rebooted automatically. Also, parameter changes are applied immediately rather than during the next maintenance window.<br />Valid for Cluster Type: Aurora DB clusters only<br />Default: The existing name setting<br />Constraints:<br />+ The DB parameter group must be in the same DB parameter group family as this DB cluster.<br />+ The &#96;&#96;DBInstanceParameterGroupName&#96;&#96; parameter is valid in combination with the &#96;&#96;AllowMajorVersionUpgrade&#96;&#96; parameter for a major version upgrade only."
  },
  {
    "name": "db_system_id",
    "type": "string",
    "description": "Reserved for future use."
  },
  {
    "name": "global_cluster_identifier",
    "type": "string",
    "description": "If you are configuring an Aurora global database cluster and want your Aurora DB cluster to be a secondary member in the global database cluster, specify the global cluster ID of the global database cluster. To define the primary database cluster of the global cluster, use the &#91;AWS::RDS::GlobalCluster&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html) resource. <br />If you aren't configuring a global database cluster, don't specify this property. <br />To remove the DB cluster from a global database cluster, specify an empty value for the &#96;&#96;GlobalClusterIdentifier&#96;&#96; property.<br />For information about Aurora global databases, see &#91;Working with Amazon Aurora Global Databases&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html) in the &#42;Amazon Aurora User Guide&#42;.<br />Valid for: Aurora DB clusters only"
  },
  {
    "name": "db_cluster_identifier",
    "type": "string",
    "description": "The DB cluster identifier. This parameter is stored as a lowercase string.<br />Constraints:<br />+ Must contain from 1 to 63 letters, numbers, or hyphens.<br />+ First character must be a letter.<br />+ Can't end with a hyphen or contain two consecutive hyphens.<br /><br />Example: &#96;&#96;my-cluster1&#96;&#96;<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters"
  },
  {
    "name": "db_cluster_parameter_group_name",
    "type": "string",
    "description": "The name of the DB cluster parameter group to associate with this DB cluster.<br />If you apply a parameter group to an existing DB cluster, then its DB instances might need to reboot. This can result in an outage while the DB instances are rebooting.<br />If you apply a change to parameter group associated with a stopped DB cluster, then the update stack waits until the DB cluster is started.<br />To list all of the available DB cluster parameter group names, use the following command:<br />&#96;&#96;aws rds describe-db-cluster-parameter-groups --query \"DBClusterParameterGroups&#91;&#93;.DBClusterParameterGroupName\" --output text&#96;&#96; <br />Valid for: Aurora DB clusters and Multi-AZ DB clusters"
  },
  {
    "name": "db_subnet_group_name",
    "type": "string",
    "description": "A DB subnet group that you want to associate with this DB cluster. <br />If you are restoring a DB cluster to a point in time with &#96;&#96;RestoreType&#96;&#96; set to &#96;&#96;copy-on-write&#96;&#96;, and don't specify a DB subnet group name, then the DB cluster is restored with a default DB subnet group.<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters"
  },
  {
    "name": "delete_automated_backups",
    "type": "boolean",
    "description": "Specifies whether to remove automated backups immediately after the DB cluster is deleted. This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB cluster is deleted, unless the AWS Backup policy specifies a point-in-time restore rule."
  },
  {
    "name": "deletion_protection",
    "type": "boolean",
    "description": "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters"
  },
  {
    "name": "domain",
    "type": "string",
    "description": "Indicates the directory ID of the Active Directory to create the DB cluster.<br />For Amazon Aurora DB clusters, Amazon RDS can use Kerberos authentication to authenticate users that connect to the DB cluster.<br />For more information, see &#91;Kerberos authentication&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html) in the &#42;Amazon Aurora User Guide&#42;.<br />Valid for: Aurora DB clusters only"
  },
  {
    "name": "domain_iam_role_name",
    "type": "string",
    "description": "Specifies the name of the IAM role to use when making API calls to the Directory Service.<br />Valid for: Aurora DB clusters only"
  },
  {
    "name": "enable_cloudwatch_logs_exports",
    "type": "array",
    "description": "The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see &#91;Publishing Database Logs to Amazon CloudWatch Logs&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER&#95;LogAccess.html#USER&#95;LogAccess.Procedural.UploadtoCloudWatch) in the &#42;Amazon Aurora User Guide&#42;.<br />&#42;Aurora MySQL&#42; <br />Valid values: &#96;&#96;audit&#96;&#96;, &#96;&#96;error&#96;&#96;, &#96;&#96;general&#96;&#96;, &#96;&#96;slowquery&#96;&#96;<br />&#42;Aurora PostgreSQL&#42; <br />Valid values: &#96;&#96;postgresql&#96;&#96;<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters"
  },
  {
    "name": "enable_global_write_forwarding",
    "type": "boolean",
    "description": "Specifies whether to enable this DB cluster to forward write operations to the primary cluster of a global cluster (Aurora global database). By default, write operations are not allowed on Aurora DB clusters that are secondary clusters in an Aurora global database.<br />You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter enabled, a secondary cluster can forward writes to the current primary cluster, and the resulting changes are replicated back to this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the primary is demoted by a global cluster API operation, but it does nothing until then.<br />Valid for Cluster Type: Aurora DB clusters only"
  },
  {
    "name": "enable_http_endpoint",
    "type": "boolean",
    "description": "Specifies whether to enable the HTTP endpoint for the DB cluster. By default, the HTTP endpoint isn't enabled.<br />When enabled, the HTTP endpoint provides a connectionless web service API (RDS Data API) for running SQL queries on the DB cluster. You can also query your database from inside the RDS console with the RDS query editor.<br />For more information, see &#91;Using RDS Data API&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html) in the &#42;Amazon Aurora User Guide&#42;.<br />Valid for Cluster Type: Aurora DB clusters only"
  },
  {
    "name": "enable_iam_database_authentication",
    "type": "boolean",
    "description": "A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.<br />For more information, see &#91;IAM Database Authentication&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html) in the &#42;Amazon Aurora User Guide.&#42;<br />Valid for: Aurora DB clusters only"
  },
  {
    "name": "enable_local_write_forwarding",
    "type": "boolean",
    "description": "Specifies whether read replicas can forward write operations to the writer DB instance in the DB cluster. By default, write operations aren't allowed on reader DB instances.<br />Valid for: Aurora DB clusters only"
  },
  {
    "name": "engine",
    "type": "string",
    "description": "The name of the database engine to be used for this DB cluster.<br />Valid Values:<br />+ &#96;&#96;aurora-mysql&#96;&#96; <br />+ &#96;&#96;aurora-postgresql&#96;&#96; <br />+ &#96;&#96;mysql&#96;&#96; <br />+ &#96;&#96;postgres&#96;&#96; <br /><br />Valid for: Aurora DB clusters and Multi-AZ DB clusters"
  },
  {
    "name": "engine_lifecycle_support",
    "type": "string",
    "description": "The life cycle type for this DB cluster.<br />By default, this value is set to &#96;&#96;open-source-rds-extended-support&#96;&#96;, which enrolls your DB cluster into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to &#96;&#96;open-source-rds-extended-support-disabled&#96;&#96;. In this case, creating the DB cluster will fail if the DB major version is past its end of standard support date.<br />You can use this setting to enroll your DB cluster into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB cluster past the end of standard support for that engine version. For more information, see the following sections:<br />+ Amazon Aurora - &#91;Amazon RDS Extended Support with Amazon Aurora&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/extended-support.html) in the &#42;Amazon Aurora User Guide&#42;<br />+ Amazon RDS - &#91;Amazon RDS Extended Support with Amazon RDS&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the &#42;Amazon RDS User Guide&#42;<br /><br />Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters<br />Valid Values: &#96;&#96;open-source-rds-extended-support &#124; open-source-rds-extended-support-disabled&#96;&#96;<br />Default: &#96;&#96;open-source-rds-extended-support&#96;&#96;"
  },
  {
    "name": "engine_mode",
    "type": "string",
    "description": "The DB engine mode of the DB cluster, either &#96;&#96;provisioned&#96;&#96; or &#96;&#96;serverless&#96;&#96;.<br />The &#96;&#96;serverless&#96;&#96; engine mode only applies for Aurora Serverless v1 DB clusters. Aurora Serverless v2 DB clusters use the &#96;&#96;provisioned&#96;&#96; engine mode.<br />For information about limitations and requirements for Serverless DB clusters, see the following sections in the &#42;Amazon Aurora User Guide&#42;:<br />+ &#91;Limitations of Aurora Serverless v1&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html#aurora-serverless.limitations) <br />+ &#91;Requirements for Aurora Serverless v2&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.requirements.html) <br /><br />Valid for Cluster Type: Aurora DB clusters only"
  },
  {
    "name": "engine_version",
    "type": "string",
    "description": "The version number of the database engine to use.<br />To list all of the available engine versions for Aurora MySQL version 2 (5.7-compatible) and version 3 (8.0-compatible), use the following command:<br />&#96;&#96;aws rds describe-db-engine-versions --engine aurora-mysql --query \"DBEngineVersions&#91;&#93;.EngineVersion\"&#96;&#96; <br />You can supply either &#96;&#96;5.7&#96;&#96; or &#96;&#96;8.0&#96;&#96; to use the default engine version for Aurora MySQL version 2 or version 3, respectively.<br />To list all of the available engine versions for Aurora PostgreSQL, use the following command:<br />&#96;&#96;aws rds describe-db-engine-versions --engine aurora-postgresql --query \"DBEngineVersions&#91;&#93;.EngineVersion\"&#96;&#96; <br />To list all of the available engine versions for RDS for MySQL, use the following command:<br />&#96;&#96;aws rds describe-db-engine-versions --engine mysql --query \"DBEngineVersions&#91;&#93;.EngineVersion\"&#96;&#96; <br />To list all of the available engine versions for RDS for PostgreSQL, use the following command:<br />&#96;&#96;aws rds describe-db-engine-versions --engine postgres --query \"DBEngineVersions&#91;&#93;.EngineVersion\"&#96;&#96; <br />&#42;Aurora MySQL&#42; <br />For information, see &#91;Database engine updates for Amazon Aurora MySQL&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Updates.html) in the &#42;Amazon Aurora User Guide&#42;.<br />&#42;Aurora PostgreSQL&#42; <br />For information, see &#91;Amazon Aurora PostgreSQL releases and engine versions&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Updates.20180305.html) in the &#42;Amazon Aurora User Guide&#42;.<br />&#42;MySQL&#42; <br />For information, see &#91;Amazon RDS for MySQL&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP&#95;MySQL.html#MySQL.Concepts.VersionMgmt) in the &#42;Amazon RDS User Guide&#42;.<br />&#42;PostgreSQL&#42; <br />For information, see &#91;Amazon RDS for PostgreSQL&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP&#95;PostgreSQL.html#PostgreSQL.Concepts) in the &#42;Amazon RDS User Guide&#42;.<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters"
  },
  {
    "name": "manage_master_user_password",
    "type": "boolean",
    "description": "Specifies whether to manage the master user password with AWS Secrets Manager.<br />For more information, see &#91;Password management with Secrets Manager&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the &#42;Amazon RDS User Guide&#42; and &#91;Password management with Secrets Manager&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the &#42;Amazon Aurora User Guide.&#42;<br />Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters<br />Constraints:<br />+ Can't manage the master user password with AWS Secrets Manager if &#96;&#96;MasterUserPassword&#96;&#96; is specified."
  },
  {
    "name": "iops",
    "type": "integer",
    "description": "The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster.<br />For information about valid IOPS values, see &#91;Provisioned IOPS storage&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP&#95;Storage.html#USER&#95;PIOPS) in the &#42;Amazon RDS User Guide&#42;.<br />This setting is required to create a Multi-AZ DB cluster.<br />Valid for Cluster Type: Multi-AZ DB clusters only<br />Constraints:<br />+ Must be a multiple between .5 and 50 of the storage amount for the DB cluster."
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as &#96;&#96;arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef&#96;&#96;. If you enable the &#96;&#96;StorageEncrypted&#96;&#96; property but don't specify this property, the default KMS key is used. If you specify this property, you must set the &#96;&#96;StorageEncrypted&#96;&#96; property to &#96;&#96;true&#96;&#96;.<br />If you specify the &#96;&#96;SnapshotIdentifier&#96;&#96; property, the &#96;&#96;StorageEncrypted&#96;&#96; property value is inherited from the snapshot, and if the DB cluster is encrypted, the specified &#96;&#96;KmsKeyId&#96;&#96; property is used.<br />If you create a read replica of an encrypted DB cluster in another AWS Region, make sure to set &#96;&#96;KmsKeyId&#96;&#96; to a KMS key identifier that is valid in the destination AWS Region. This KMS key is used to encrypt the read replica in that AWS Region.<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters"
  },
  {
    "name": "master_username",
    "type": "string",
    "description": "The name of the master user for the DB cluster.<br />If you specify the &#96;&#96;SourceDBClusterIdentifier&#96;&#96;, &#96;&#96;SnapshotIdentifier&#96;&#96;, or &#96;&#96;GlobalClusterIdentifier&#96;&#96; property, don't specify this property. The value is inherited from the source DB cluster, the snapshot, or the primary DB cluster for the global database cluster, respectively.<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters"
  },
  {
    "name": "master_user_password",
    "type": "string",
    "description": "The master password for the DB instance.<br />If you specify the &#96;&#96;SourceDBClusterIdentifier&#96;&#96;, &#96;&#96;SnapshotIdentifier&#96;&#96;, or &#96;&#96;GlobalClusterIdentifier&#96;&#96; property, don't specify this property. The value is inherited from the source DB cluster, the snapshot, or the primary DB cluster for the global database cluster, respectively.<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters"
  },
  {
    "name": "master_user_secret",
    "type": "object",
    "description": "The secret managed by RDS in AWS Secrets Manager for the master user password.<br />When you restore a DB cluster from a snapshot, Amazon RDS generates a new secret instead of reusing the secret specified in the &#96;&#96;SecretArn&#96;&#96; property. This ensures that the restored DB cluster is securely managed with a dedicated secret. To maintain consistent integration with your application, you might need to update resource configurations to reference the newly created secret.<br />For more information, see &#91;Password management with Secrets Manager&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the &#42;Amazon RDS User Guide&#42; and &#91;Password management with Secrets Manager&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the &#42;Amazon Aurora User Guide.&#42;",
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
    "name": "monitoring_interval",
    "type": "integer",
    "description": "The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. To turn off collecting Enhanced Monitoring metrics, specify &#96;&#96;0&#96;&#96;.<br />If &#96;&#96;MonitoringRoleArn&#96;&#96; is specified, also set &#96;&#96;MonitoringInterval&#96;&#96; to a value other than &#96;&#96;0&#96;&#96;.<br />Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters<br />Valid Values: &#96;&#96;0 &#124; 1 &#124; 5 &#124; 10 &#124; 15 &#124; 30 &#124; 60&#96;&#96;<br />Default: &#96;&#96;0&#96;&#96;"
  },
  {
    "name": "monitoring_role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs. An example is &#96;&#96;arn:aws:iam:123456789012:role/emaccess&#96;&#96;. For information on creating a monitoring role, see &#91;Setting up and enabling Enhanced Monitoring&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;Monitoring.OS.html#USER&#95;Monitoring.OS.Enabling) in the &#42;Amazon RDS User Guide&#42;.<br />If &#96;&#96;MonitoringInterval&#96;&#96; is set to a value other than &#96;&#96;0&#96;&#96;, supply a &#96;&#96;MonitoringRoleArn&#96;&#96; value.<br />Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters"
  },
  {
    "name": "network_type",
    "type": "string",
    "description": "The network type of the DB cluster.<br />Valid values:<br />+ &#96;&#96;IPV4&#96;&#96; <br />+ &#96;&#96;DUAL&#96;&#96; <br /><br />The network type is determined by the &#96;&#96;DBSubnetGroup&#96;&#96; specified for the DB cluster. A &#96;&#96;DBSubnetGroup&#96;&#96; can support only the IPv4 protocol or the IPv4 and IPv6 protocols (&#96;&#96;DUAL&#96;&#96;).<br />For more information, see &#91;Working with a DB instance in a VPC&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER&#95;VPC.WorkingWithRDSInstanceinaVPC.html) in the &#42;Amazon Aurora User Guide.&#42;<br />Valid for: Aurora DB clusters only"
  },
  {
    "name": "performance_insights_enabled",
    "type": "boolean",
    "description": "Specifies whether to turn on Performance Insights for the DB cluster.<br />For more information, see &#91;Using Amazon Performance Insights&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;PerfInsights.html) in the &#42;Amazon RDS User Guide&#42;.<br />Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters"
  },
  {
    "name": "performance_insights_kms_key_id",
    "type": "string",
    "description": "The AWS KMS key identifier for encryption of Performance Insights data.<br />The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.<br />If you don't specify a value for &#96;&#96;PerformanceInsightsKMSKeyId&#96;&#96;, then Amazon RDS uses your default KMS key. There is a default KMS key for your AWS-account. Your AWS-account has a different default KMS key for each AWS-Region.<br />Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters"
  },
  {
    "name": "performance_insights_retention_period",
    "type": "integer",
    "description": "The number of days to retain Performance Insights data. When creating a DB cluster without enabling Performance Insights, you can't specify the parameter &#96;&#96;PerformanceInsightsRetentionPeriod&#96;&#96;.<br />Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters<br />Valid Values:<br />+ &#96;&#96;7&#96;&#96; <br />+ &#42;month&#42; &#42; 31, where &#42;month&#42; is a number of months from 1-23. Examples: &#96;&#96;93&#96;&#96; (3 months &#42; 31), &#96;&#96;341&#96;&#96; (11 months &#42; 31), &#96;&#96;589&#96;&#96; (19 months &#42; 31)<br />+ &#96;&#96;731&#96;&#96; <br /><br />Default: &#96;&#96;7&#96;&#96; days<br />If you specify a retention period that isn't valid, such as &#96;&#96;94&#96;&#96;, Amazon RDS issues an error."
  },
  {
    "name": "port",
    "type": "integer",
    "description": "The port number on which the DB instances in the DB cluster accept connections.<br />Default:<br />+ When &#96;&#96;EngineMode&#96;&#96; is &#96;&#96;provisioned&#96;&#96;, &#96;&#96;3306&#96;&#96; (for both Aurora MySQL and Aurora PostgreSQL)<br />+ When &#96;&#96;EngineMode&#96;&#96; is &#96;&#96;serverless&#96;&#96;:<br />+ &#96;&#96;3306&#96;&#96; when &#96;&#96;Engine&#96;&#96; is &#96;&#96;aurora&#96;&#96; or &#96;&#96;aurora-mysql&#96;&#96;<br />+ &#96;&#96;5432&#96;&#96; when &#96;&#96;Engine&#96;&#96; is &#96;&#96;aurora-postgresql&#96;&#96;<br /><br /><br />The &#96;&#96;No interruption&#96;&#96; on update behavior only applies to DB clusters. If you are updating a DB instance, see &#91;Port&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-port) for the AWS::RDS::DBInstance resource.<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters"
  },
  {
    "name": "preferred_backup_window",
    "type": "string",
    "description": "The daily time range during which automated backups are created. For more information, see &#91;Backup Window&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.Backups.BackupWindow) in the &#42;Amazon Aurora User Guide.&#42;<br />Constraints:<br />+ Must be in the format &#96;&#96;hh24:mi-hh24:mi&#96;&#96;.<br />+ Must be in Universal Coordinated Time (UTC).<br />+ Must not conflict with the preferred maintenance window.<br />+ Must be at least 30 minutes.<br /><br />Valid for: Aurora DB clusters and Multi-AZ DB clusters"
  },
  {
    "name": "preferred_maintenance_window",
    "type": "string",
    "description": "The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).<br />Format: &#96;&#96;ddd:hh24:mi-ddd:hh24:mi&#96;&#96;<br />The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see &#91;Maintaining an Amazon Aurora DB cluster&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER&#95;UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora) in the &#42;Amazon Aurora User Guide.&#42;<br />Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.<br />Constraints: Minimum 30-minute window.<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters"
  },
  {
    "name": "publicly_accessible",
    "type": "boolean",
    "description": "Specifies whether the DB cluster is publicly accessible.<br />When the DB cluster is publicly accessible and you connect from outside of the DB cluster's virtual private cloud (VPC), its Domain Name System (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB cluster, the endpoint resolves to the private IP address. Access to the DB cluster is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it.<br />When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address.<br />Valid for Cluster Type: Multi-AZ DB clusters only<br />Default: The default behavior varies depending on whether &#96;&#96;DBSubnetGroupName&#96;&#96; is specified.<br />If &#96;&#96;DBSubnetGroupName&#96;&#96; isn't specified, and &#96;&#96;PubliclyAccessible&#96;&#96; isn't specified, the following applies:<br />+ If the default VPC in the target Region doesn’t have an internet gateway attached to it, the DB cluster is private.<br />+ If the default VPC in the target Region has an internet gateway attached to it, the DB cluster is public.<br /><br />If &#96;&#96;DBSubnetGroupName&#96;&#96; is specified, and &#96;&#96;PubliclyAccessible&#96;&#96; isn't specified, the following applies:<br />+ If the subnets are part of a VPC that doesn’t have an internet gateway attached to it, the DB cluster is private.<br />+ If the subnets are part of a VPC that has an internet gateway attached to it, the DB cluster is public."
  },
  {
    "name": "replication_source_identifier",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a read replica.<br />Valid for: Aurora DB clusters only"
  },
  {
    "name": "restore_to_time",
    "type": "string",
    "description": "The date and time to restore the DB cluster to.<br />Valid Values: Value must be a time in Universal Coordinated Time (UTC) format<br />Constraints:<br />+ Must be before the latest restorable time for the DB instance<br />+ Must be specified if &#96;&#96;UseLatestRestorableTime&#96;&#96; parameter isn't provided<br />+ Can't be specified if the &#96;&#96;UseLatestRestorableTime&#96;&#96; parameter is enabled<br />+ Can't be specified if the &#96;&#96;RestoreType&#96;&#96; parameter is &#96;&#96;copy-on-write&#96;&#96;<br /><br />This property must be used with &#96;&#96;SourceDBClusterIdentifier&#96;&#96; property. The resulting cluster will have the identifier that matches the value of the &#96;&#96;DBclusterIdentifier&#96;&#96; property.<br />Example: &#96;&#96;2015-03-07T23:45:00Z&#96;&#96;<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters"
  },
  {
    "name": "restore_type",
    "type": "string",
    "description": "The type of restore to be performed. You can specify one of the following values:<br />+ &#96;&#96;full-copy&#96;&#96; - The new DB cluster is restored as a full copy of the source DB cluster.<br />+ &#96;&#96;copy-on-write&#96;&#96; - The new DB cluster is restored as a clone of the source DB cluster.<br /><br />If you don't specify a &#96;&#96;RestoreType&#96;&#96; value, then the new DB cluster is restored as a full copy of the source DB cluster.<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters"
  },
  {
    "name": "serverless_v2_scaling_configuration",
    "type": "object",
    "description": "The scaling configuration of an Aurora Serverless V2 DB cluster. <br />This property is only supported for Aurora Serverless v2. For Aurora Serverless v1, Use the &#96;&#96;ScalingConfiguration&#96;&#96; property.<br />Valid for: Aurora Serverless v2 DB clusters only",
    "children": [
      {
        "name": "min_capacity",
        "type": "number",
        "description": "The minimum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster. You can specify ACU values in half-step increments, such as 8, 8.5, 9, and so on. For Aurora versions that support the Aurora Serverless v2 auto-pause feature, the smallest value that you can use is 0. For versions that don't support Aurora Serverless v2 auto-pause, the smallest value that you can use is 0.5."
      },
      {
        "name": "max_capacity",
        "type": "number",
        "description": "The maximum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster. You can specify ACU values in half-step increments, such as 40, 40.5, 41, and so on. The largest value that you can use is 128.<br />The maximum capacity must be higher than 0.5 ACUs. For more information, see &#91;Choosing the maximum Aurora Serverless v2 capacity setting for a cluster&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.setting-capacity.html#aurora-serverless-v2.max&#95;capacity&#95;considerations) in the &#42;Amazon Aurora User Guide&#42;.<br />Aurora automatically sets certain parameters for Aurora Serverless V2 DB instances to values that depend on the maximum ACU value in the capacity range. When you update the maximum capacity value, the &#96;&#96;ParameterApplyStatus&#96;&#96; value for the DB instance changes to &#96;&#96;pending-reboot&#96;&#96;. You can update the parameter values by rebooting the DB instance after changing the capacity range."
      },
      {
        "name": "seconds_until_auto_pause",
        "type": "integer",
        "description": "Specifies the number of seconds an Aurora Serverless v2 DB instance must be idle before Aurora attempts to automatically pause it. <br />Specify a value between 300 seconds (five minutes) and 86,400 seconds (one day). The default is 300 seconds."
      }
    ]
  },
  {
    "name": "scaling_configuration",
    "type": "object",
    "description": "The scaling configuration of an Aurora Serverless v1 DB cluster.<br />This property is only supported for Aurora Serverless v1. For Aurora Serverless v2, Use the &#96;&#96;ServerlessV2ScalingConfiguration&#96;&#96; property.<br />Valid for: Aurora Serverless v1 DB clusters only",
    "children": [
      {
        "name": "auto_pause",
        "type": "boolean",
        "description": "Indicates whether to allow or disallow automatic pause for an Aurora DB cluster in &#96;&#96;serverless&#96;&#96; DB engine mode. A DB cluster can be paused only when it's idle (it has no connections).<br />If a DB cluster is paused for more than seven days, the DB cluster might be backed up with a snapshot. In this case, the DB cluster is restored when there is a request to connect to it."
      },
      {
        "name": "max_capacity",
        "type": "integer",
        "description": "The maximum capacity for an Aurora DB cluster in &#96;&#96;serverless&#96;&#96; DB engine mode.<br />For Aurora MySQL, valid capacity values are &#96;&#96;1&#96;&#96;, &#96;&#96;2&#96;&#96;, &#96;&#96;4&#96;&#96;, &#96;&#96;8&#96;&#96;, &#96;&#96;16&#96;&#96;, &#96;&#96;32&#96;&#96;, &#96;&#96;64&#96;&#96;, &#96;&#96;128&#96;&#96;, and &#96;&#96;256&#96;&#96;.<br />For Aurora PostgreSQL, valid capacity values are &#96;&#96;2&#96;&#96;, &#96;&#96;4&#96;&#96;, &#96;&#96;8&#96;&#96;, &#96;&#96;16&#96;&#96;, &#96;&#96;32&#96;&#96;, &#96;&#96;64&#96;&#96;, &#96;&#96;192&#96;&#96;, and &#96;&#96;384&#96;&#96;.<br />The maximum capacity must be greater than or equal to the minimum capacity."
      },
      {
        "name": "min_capacity",
        "type": "integer",
        "description": "The minimum capacity for an Aurora DB cluster in &#96;&#96;serverless&#96;&#96; DB engine mode.<br />For Aurora MySQL, valid capacity values are &#96;&#96;1&#96;&#96;, &#96;&#96;2&#96;&#96;, &#96;&#96;4&#96;&#96;, &#96;&#96;8&#96;&#96;, &#96;&#96;16&#96;&#96;, &#96;&#96;32&#96;&#96;, &#96;&#96;64&#96;&#96;, &#96;&#96;128&#96;&#96;, and &#96;&#96;256&#96;&#96;.<br />For Aurora PostgreSQL, valid capacity values are &#96;&#96;2&#96;&#96;, &#96;&#96;4&#96;&#96;, &#96;&#96;8&#96;&#96;, &#96;&#96;16&#96;&#96;, &#96;&#96;32&#96;&#96;, &#96;&#96;64&#96;&#96;, &#96;&#96;192&#96;&#96;, and &#96;&#96;384&#96;&#96;.<br />The minimum capacity must be less than or equal to the maximum capacity."
      },
      {
        "name": "seconds_before_timeout",
        "type": "integer",
        "description": "The amount of time, in seconds, that Aurora Serverless v1 tries to find a scaling point to perform seamless scaling before enforcing the timeout action. The default is 300.<br />Specify a value between 60 and 600 seconds."
      },
      {
        "name": "seconds_until_auto_pause",
        "type": "integer",
        "description": "The time, in seconds, before an Aurora DB cluster in &#96;&#96;serverless&#96;&#96; mode is paused.<br />Specify a value between 300 and 86,400 seconds."
      },
      {
        "name": "timeout_action",
        "type": "string",
        "description": "The action to take when the timeout is reached, either &#96;&#96;ForceApplyCapacityChange&#96;&#96; or &#96;&#96;RollbackCapacityChange&#96;&#96;.<br />&#96;&#96;ForceApplyCapacityChange&#96;&#96; sets the capacity to the specified value as soon as possible.<br />&#96;&#96;RollbackCapacityChange&#96;&#96;, the default, ignores the capacity change if a scaling point isn't found in the timeout period.<br />If you specify &#96;&#96;ForceApplyCapacityChange&#96;&#96;, connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped.<br />For more information, see &#91;Autoscaling for Aurora Serverless v1&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling) in the &#42;Amazon Aurora User Guide&#42;."
      }
    ]
  },
  {
    "name": "snapshot_identifier",
    "type": "string",
    "description": "The identifier for the DB snapshot or DB cluster snapshot to restore from.<br />You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot.<br />After you restore a DB cluster with a &#96;&#96;SnapshotIdentifier&#96;&#96; property, you must specify the same &#96;&#96;SnapshotIdentifier&#96;&#96; property for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed. However, if you don't specify the &#96;&#96;SnapshotIdentifier&#96;&#96; property, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, a new DB cluster is restored from the specified &#96;&#96;SnapshotIdentifier&#96;&#96; property, and the original DB cluster is deleted.<br />If you specify the &#96;&#96;SnapshotIdentifier&#96;&#96; property to restore a DB cluster (as opposed to specifying it for DB cluster updates), then don't specify the following properties:<br />+ &#96;&#96;GlobalClusterIdentifier&#96;&#96; <br />+ &#96;&#96;MasterUsername&#96;&#96; <br />+ &#96;&#96;MasterUserPassword&#96;&#96; <br />+ &#96;&#96;ReplicationSourceIdentifier&#96;&#96; <br />+ &#96;&#96;RestoreType&#96;&#96; <br />+ &#96;&#96;SourceDBClusterIdentifier&#96;&#96; <br />+ &#96;&#96;SourceRegion&#96;&#96; <br />+ &#96;&#96;StorageEncrypted&#96;&#96; (for an encrypted snapshot)<br />+ &#96;&#96;UseLatestRestorableTime&#96;&#96; <br /><br />Constraints:<br />+ Must match the identifier of an existing Snapshot.<br /><br />Valid for: Aurora DB clusters and Multi-AZ DB clusters"
  },
  {
    "name": "source_db_cluster_identifier",
    "type": "string",
    "description": "When restoring a DB cluster to a point in time, the identifier of the source DB cluster from which to restore.<br />Constraints:<br />+ Must match the identifier of an existing DBCluster.<br />+ Cannot be specified if &#96;&#96;SourceDbClusterResourceId&#96;&#96; is specified. You must specify either &#96;&#96;SourceDBClusterIdentifier&#96;&#96; or &#96;&#96;SourceDbClusterResourceId&#96;&#96;, but not both.<br /><br />Valid for: Aurora DB clusters and Multi-AZ DB clusters"
  },
  {
    "name": "source_db_cluster_resource_id",
    "type": "string",
    "description": "The resource ID of the source DB cluster from which to restore."
  },
  {
    "name": "source_region",
    "type": "string",
    "description": "The AWS Region which contains the source DB cluster when replicating a DB cluster. For example, &#96;&#96;us-east-1&#96;&#96;. <br />Valid for: Aurora DB clusters only"
  },
  {
    "name": "storage_encrypted",
    "type": "boolean",
    "description": "Indicates whether the DB cluster is encrypted.<br />If you specify the &#96;&#96;KmsKeyId&#96;&#96; property, then you must enable encryption.<br />If you specify the &#96;&#96;SourceDBClusterIdentifier&#96;&#96; property, don't specify this property. The value is inherited from the source DB cluster, and if the DB cluster is encrypted, the specified &#96;&#96;KmsKeyId&#96;&#96; property is used.<br />If you specify the &#96;&#96;SnapshotIdentifier&#96;&#96; and the specified snapshot is encrypted, don't specify this property. The value is inherited from the snapshot, and the specified &#96;&#96;KmsKeyId&#96;&#96; property is used.<br />If you specify the &#96;&#96;SnapshotIdentifier&#96;&#96; and the specified snapshot isn't encrypted, you can use this property to specify that the restored DB cluster is encrypted. Specify the &#96;&#96;KmsKeyId&#96;&#96; property for the KMS key to use for encryption. If you don't want the restored DB cluster to be encrypted, then don't set this property or set it to &#96;&#96;false&#96;&#96;.<br />If you specify both the &#96;&#96;StorageEncrypted&#96;&#96; and &#96;&#96;SnapshotIdentifier&#96;&#96; properties without specifying the &#96;&#96;KmsKeyId&#96;&#96; property, then the restored DB cluster inherits the encryption settings from the DB snapshot that provide.<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters"
  },
  {
    "name": "storage_throughput",
    "type": "integer",
    "description": ""
  },
  {
    "name": "storage_type",
    "type": "string",
    "description": "The storage type to associate with the DB cluster.<br />For information on storage types for Aurora DB clusters, see &#91;Storage configurations for Amazon Aurora DB clusters&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.StorageReliability.html#aurora-storage-type). For information on storage types for Multi-AZ DB clusters, see &#91;Settings for creating Multi-AZ DB clusters&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/create-multi-az-db-cluster.html#create-multi-az-db-cluster-settings).<br />This setting is required to create a Multi-AZ DB cluster.<br />When specified for a Multi-AZ DB cluster, a value for the &#96;&#96;Iops&#96;&#96; parameter is required.<br />Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters<br />Valid Values:<br />+ Aurora DB clusters - &#96;&#96;aurora &#124; aurora-iopt1&#96;&#96;<br />+ Multi-AZ DB clusters - &#96;&#96;io1 &#124; io2 &#124; gp3&#96;&#96;<br /><br />Default:<br />+ Aurora DB clusters - &#96;&#96;aurora&#96;&#96;<br />+ Multi-AZ DB clusters - &#96;&#96;io1&#96;&#96;<br /><br />When you create an Aurora DB cluster with the storage type set to &#96;&#96;aurora-iopt1&#96;&#96;, the storage type is returned in the response. The storage type isn't returned when you set it to &#96;&#96;aurora&#96;&#96;."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags to assign to the DB cluster.<br />Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters",
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
    "name": "use_latest_restorable_time",
    "type": "boolean",
    "description": "A value that indicates whether to restore the DB cluster to the latest restorable backup time. By default, the DB cluster is not restored to the latest restorable backup time. <br />Valid for: Aurora DB clusters and Multi-AZ DB clusters"
  },
  {
    "name": "vpc_security_group_ids",
    "type": "array",
    "description": "A list of EC2 VPC security groups to associate with this DB cluster.<br />If you plan to update the resource, don't specify VPC security groups in a shared VPC.<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters"
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
    "description": "The DB cluster identifier. This parameter is stored as a lowercase string.<br />Constraints:<br />+ Must contain from 1 to 63 letters, numbers, or hyphens.<br />+ First character must be a letter.<br />+ Can't end with a hyphen or contain two consecutive hyphens.<br /><br />Example: &#96;&#96;my-cluster1&#96;&#96;<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters"
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
WHERE region = 'us-east-1' AND Identifier = '{{ db_cluster_identifier }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>db_clusters</code> in a region.
```sql
SELECT
region,
db_cluster_identifier
FROM awscc.rds.db_clusters_list_only
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
WHERE region = '{{ region }}'
AND Identifier = '{{ db_cluster_identifier }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.rds.db_clusters
WHERE Identifier = '{{ db_cluster_identifier }}'
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