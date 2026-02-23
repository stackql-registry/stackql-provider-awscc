---
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - redshift
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

Creates, updates, deletes or gets a <code>cluster</code> resource or lists <code>clusters</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>clusters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An example resource schema demonstrating some basic constructs and validation rules.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.redshift.clusters" /></td></tr>
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
    "name": "revision_target",
    "type": "string",
    "description": "The identifier of the database revision. You can retrieve this value from the response to the DescribeClusterDbRevisions request."
  },
  {
    "name": "automated_snapshot_retention_period",
    "type": "integer",
    "description": "The number of days that automated snapshots are retained. If the value is 0, automated snapshots are disabled. Default value is 1"
  },
  {
    "name": "encrypted",
    "type": "boolean",
    "description": "If true, the data in the cluster is encrypted at rest."
  },
  {
    "name": "port",
    "type": "integer",
    "description": "The port number on which the cluster accepts incoming connections. The cluster is accessible only via the JDBC and ODBC connection strings"
  },
  {
    "name": "number_of_nodes",
    "type": "integer",
    "description": "The number of compute nodes in the cluster. This parameter is required when the ClusterType parameter is specified as multi-node."
  },
  {
    "name": "destination_region",
    "type": "string",
    "description": "The destination AWS Region that you want to copy snapshots to. Constraints: Must be the name of a valid AWS Region. For more information, see Regions and Endpoints in the Amazon Web Services &#91;https://docs.aws.amazon.com/general/latest/gr/rande.html#redshift&#95;region&#93; General Reference"
  },
  {
    "name": "allow_version_upgrade",
    "type": "boolean",
    "description": "Major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster. Default value is True"
  },
  {
    "name": "endpoint",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "address",
        "type": "string",
        "description": ""
      },
      {
        "name": "port",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "namespace_resource_policy",
    "type": "object",
    "description": "The namespace resource policy document that will be attached to a Redshift cluster."
  },
  {
    "name": "maintenance_track_name",
    "type": "string",
    "description": "The name for the maintenance track that you want to assign for the cluster. This name change is asynchronous. The new track name stays in the PendingModifiedValues for the cluster until the next maintenance window. When the maintenance track changes, the cluster is switched to the latest cluster release available for the maintenance track. At this point, the maintenance track name is applied."
  },
  {
    "name": "owner_account",
    "type": "string",
    "description": ""
  },
  {
    "name": "multi_az",
    "type": "boolean",
    "description": "A boolean indicating if the redshift cluster is multi-az or not. If you don't provide this parameter or set the value to false, the redshift cluster will be single-az."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The list of tags for the cluster parameter group.",
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
    "name": "snapshot_cluster_identifier",
    "type": "string",
    "description": "The name of the cluster the source snapshot was created from. This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than &#42; for the cluster name."
  },
  {
    "name": "iam_roles",
    "type": "array",
    "description": "A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services. You must supply the IAM roles in their Amazon Resource Name (ARN) format. You can supply up to 50 IAM roles in a single request"
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster."
  },
  {
    "name": "snapshot_copy_manual",
    "type": "boolean",
    "description": "Indicates whether to apply the snapshot retention period to newly copied manual snapshots instead of automated snapshots."
  },
  {
    "name": "manage_master_password",
    "type": "boolean",
    "description": "A boolean indicating if the redshift cluster's admin user credentials is managed by Redshift or not. You can't use MasterUserPassword if ManageMasterPassword is true. If ManageMasterPassword is false or not set, Amazon Redshift uses MasterUserPassword for the admin user account's password."
  },
  {
    "name": "availability_zone",
    "type": "string",
    "description": "The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster. Default: A random, system-chosen Availability Zone in the region that is specified by the endpoint"
  },
  {
    "name": "cluster_security_groups",
    "type": "array",
    "description": "A list of security groups to be associated with this cluster."
  },
  {
    "name": "cluster_identifier",
    "type": "string",
    "description": "A unique identifier for the cluster. You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. All alphabetical characters must be lower case, no hypens at the end, no two consecutive hyphens. Cluster name should be unique for all clusters within an AWS account"
  },
  {
    "name": "master_user_password",
    "type": "string",
    "description": "The password associated with the master user account for the cluster that is being created. You can't use MasterUserPassword if ManageMasterPassword is true. Password must be between 8 and 64 characters in length, should have at least one uppercase letter.Must contain at least one lowercase letter.Must contain one number.Can be any printable ASCII character."
  },
  {
    "name": "cluster_subnet_group_name",
    "type": "string",
    "description": "The name of a cluster subnet group to be associated with this cluster."
  },
  {
    "name": "logging_properties",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "bucket_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "s3_key_prefix",
        "type": "string",
        "description": ""
      },
      {
        "name": "log_destination_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "log_exports",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "defer_maintenance",
    "type": "boolean",
    "description": "A boolean indicating whether to enable the deferred maintenance window."
  },
  {
    "name": "node_type",
    "type": "string",
    "description": "The node type to be provisioned for the cluster.Valid Values: ds2.xlarge &#124; ds2.8xlarge &#124; dc1.large &#124; dc1.8xlarge &#124; dc2.large &#124; dc2.8xlarge &#124; ra3.large &#124; ra3.4xlarge &#124; ra3.16xlarge"
  },
  {
    "name": "master_username",
    "type": "string",
    "description": "The user name associated with the master user account for the cluster that is being created. The user name can't be PUBLIC and first character must be a letter."
  },
  {
    "name": "publicly_accessible",
    "type": "boolean",
    "description": "If true, the cluster can be accessed from a public network."
  },
  {
    "name": "defer_maintenance_identifier",
    "type": "string",
    "description": "A unique identifier for the deferred maintenance window."
  },
  {
    "name": "manual_snapshot_retention_period",
    "type": "integer",
    "description": "The number of days to retain newly copied snapshots in the destination AWS Region after they are copied from the source AWS Region. If the value is -1, the manual snapshot is retained indefinitely.<br />The value must be either -1 or an integer between 1 and 3,653."
  },
  {
    "name": "resource_action",
    "type": "string",
    "description": "The Redshift operation to be performed. Resource Action supports pause-cluster, resume-cluster, failover-primary-compute APIs"
  },
  {
    "name": "hsm_client_certificate_identifier",
    "type": "string",
    "description": "Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM"
  },
  {
    "name": "elastic_ip",
    "type": "string",
    "description": "The Elastic IP (EIP) address for the cluster."
  },
  {
    "name": "availability_zone_relocation_status",
    "type": "string",
    "description": "The availability zone relocation status of the cluster"
  },
  {
    "name": "aqua_configuration_status",
    "type": "string",
    "description": "The value represents how the cluster is configured to use AQUA (Advanced Query Accelerator) after the cluster is restored. Possible values include the following.<br />enabled - Use AQUA if it is available for the current Region and Amazon Redshift node type.<br />disabled - Don't use AQUA.<br />auto - Amazon Redshift determines whether to use AQUA.<br />"
  },
  {
    "name": "snapshot_identifier",
    "type": "string",
    "description": "The name of the snapshot from which to create the new cluster. This parameter isn't case sensitive."
  },
  {
    "name": "availability_zone_relocation",
    "type": "boolean",
    "description": "The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster modification is complete."
  },
  {
    "name": "snapshot_copy_grant_name",
    "type": "string",
    "description": "The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region."
  },
  {
    "name": "enhanced_vpc_routing",
    "type": "boolean",
    "description": "An option that specifies whether to create the cluster with enhanced VPC routing enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see Enhanced VPC Routing in the Amazon Redshift Cluster Management Guide.<br />If this option is true , enhanced VPC routing is enabled.<br />Default: false"
  },
  {
    "name": "cluster_parameter_group_name",
    "type": "string",
    "description": "The name of the parameter group to be associated with this cluster."
  },
  {
    "name": "defer_maintenance_end_time",
    "type": "string",
    "description": "A timestamp indicating end time for the deferred maintenance window. If you specify an end time, you can't specify a duration."
  },
  {
    "name": "rotate_encryption_key",
    "type": "boolean",
    "description": "A boolean indicating if we want to rotate Encryption Keys."
  },
  {
    "name": "vpc_security_group_ids",
    "type": "array",
    "description": "A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster."
  },
  {
    "name": "cluster_namespace_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the cluster namespace."
  },
  {
    "name": "master_password_secret_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the cluster's admin user credentials secret."
  },
  {
    "name": "cluster_version",
    "type": "string",
    "description": "The version of the Amazon Redshift engine software that you want to deploy on the cluster.The version selected runs on all the nodes in the cluster."
  },
  {
    "name": "hsm_configuration_identifier",
    "type": "string",
    "description": "Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM."
  },
  {
    "name": "preferred_maintenance_window",
    "type": "string",
    "description": "The weekly time range (in UTC) during which automated cluster maintenance can occur."
  },
  {
    "name": "defer_maintenance_start_time",
    "type": "string",
    "description": "A timestamp indicating the start time for the deferred maintenance window."
  },
  {
    "name": "cluster_type",
    "type": "string",
    "description": "The type of the cluster. When cluster type is specified as single-node, the NumberOfNodes parameter is not required and if multi-node, the NumberOfNodes parameter is required"
  },
  {
    "name": "classic",
    "type": "boolean",
    "description": "A boolean value indicating whether the resize operation is using the classic resize process. If you don't provide this parameter or set the value to false , the resize type is elastic."
  },
  {
    "name": "master_password_secret_kms_key_id",
    "type": "string",
    "description": "The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin user credentials secret."
  },
  {
    "name": "defer_maintenance_duration",
    "type": "integer",
    "description": "An integer indicating the duration of the maintenance window in days. If you specify a duration, you can't specify an end time. The duration must be 45 days or less."
  },
  {
    "name": "db_name",
    "type": "string",
    "description": "The name of the first database to be created when the cluster is created. To create additional databases after the cluster is created, connect to the cluster with a SQL client and use SQL commands to create a database."
  },
  {
    "name": "snapshot_copy_retention_period",
    "type": "integer",
    "description": "The number of days to retain automated snapshots in the destination region after they are copied from the source region. <br />Default is 7. <br />Constraints: Must be at least 1 and no more than 35."
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
    "name": "cluster_identifier",
    "type": "string",
    "description": "A unique identifier for the cluster. You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. All alphabetical characters must be lower case, no hypens at the end, no two consecutive hyphens. Cluster name should be unique for all clusters within an AWS account"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html"><code>AWS::Redshift::Cluster</code></a>.

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
    <td><code>clusters</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="NodeType, MasterUsername, DBName, ClusterType, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>clusters</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>clusters</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>clusters_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>clusters</code></td>
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

Gets all properties from an individual <code>cluster</code>.
```sql
SELECT
region,
revision_target,
automated_snapshot_retention_period,
encrypted,
port,
number_of_nodes,
destination_region,
allow_version_upgrade,
endpoint,
namespace_resource_policy,
maintenance_track_name,
owner_account,
multi_az,
tags,
snapshot_cluster_identifier,
iam_roles,
kms_key_id,
snapshot_copy_manual,
manage_master_password,
availability_zone,
cluster_security_groups,
cluster_identifier,
master_user_password,
cluster_subnet_group_name,
logging_properties,
defer_maintenance,
node_type,
master_username,
publicly_accessible,
defer_maintenance_identifier,
manual_snapshot_retention_period,
resource_action,
hsm_client_certificate_identifier,
elastic_ip,
availability_zone_relocation_status,
aqua_configuration_status,
snapshot_identifier,
availability_zone_relocation,
snapshot_copy_grant_name,
enhanced_vpc_routing,
cluster_parameter_group_name,
defer_maintenance_end_time,
rotate_encryption_key,
vpc_security_group_ids,
cluster_namespace_arn,
master_password_secret_arn,
cluster_version,
hsm_configuration_identifier,
preferred_maintenance_window,
defer_maintenance_start_time,
cluster_type,
classic,
master_password_secret_kms_key_id,
defer_maintenance_duration,
db_name,
snapshot_copy_retention_period
FROM awscc.redshift.clusters
WHERE region = 'us-east-1' AND Identifier = '{{ cluster_identifier }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>clusters</code> in a region.
```sql
SELECT
region,
cluster_identifier
FROM awscc.redshift.clusters_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>cluster</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.redshift.clusters (
 NodeType,
 MasterUsername,
 ClusterType,
 DBName,
 region
)
SELECT
'{{ node_type }}',
 '{{ master_username }}',
 '{{ cluster_type }}',
 '{{ db_name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.redshift.clusters (
 RevisionTarget,
 AutomatedSnapshotRetentionPeriod,
 Encrypted,
 Port,
 NumberOfNodes,
 DestinationRegion,
 AllowVersionUpgrade,
 Endpoint,
 NamespaceResourcePolicy,
 MaintenanceTrackName,
 OwnerAccount,
 MultiAZ,
 Tags,
 SnapshotClusterIdentifier,
 IamRoles,
 KmsKeyId,
 SnapshotCopyManual,
 ManageMasterPassword,
 AvailabilityZone,
 ClusterSecurityGroups,
 ClusterIdentifier,
 MasterUserPassword,
 ClusterSubnetGroupName,
 LoggingProperties,
 DeferMaintenance,
 NodeType,
 MasterUsername,
 PubliclyAccessible,
 ManualSnapshotRetentionPeriod,
 ResourceAction,
 HsmClientCertificateIdentifier,
 ElasticIp,
 AvailabilityZoneRelocationStatus,
 AquaConfigurationStatus,
 SnapshotIdentifier,
 AvailabilityZoneRelocation,
 SnapshotCopyGrantName,
 EnhancedVpcRouting,
 ClusterParameterGroupName,
 DeferMaintenanceEndTime,
 RotateEncryptionKey,
 VpcSecurityGroupIds,
 ClusterVersion,
 HsmConfigurationIdentifier,
 PreferredMaintenanceWindow,
 DeferMaintenanceStartTime,
 ClusterType,
 Classic,
 MasterPasswordSecretKmsKeyId,
 DeferMaintenanceDuration,
 DBName,
 SnapshotCopyRetentionPeriod,
 region
)
SELECT
 '{{ revision_target }}',
 '{{ automated_snapshot_retention_period }}',
 '{{ encrypted }}',
 '{{ port }}',
 '{{ number_of_nodes }}',
 '{{ destination_region }}',
 '{{ allow_version_upgrade }}',
 '{{ endpoint }}',
 '{{ namespace_resource_policy }}',
 '{{ maintenance_track_name }}',
 '{{ owner_account }}',
 '{{ multi_az }}',
 '{{ tags }}',
 '{{ snapshot_cluster_identifier }}',
 '{{ iam_roles }}',
 '{{ kms_key_id }}',
 '{{ snapshot_copy_manual }}',
 '{{ manage_master_password }}',
 '{{ availability_zone }}',
 '{{ cluster_security_groups }}',
 '{{ cluster_identifier }}',
 '{{ master_user_password }}',
 '{{ cluster_subnet_group_name }}',
 '{{ logging_properties }}',
 '{{ defer_maintenance }}',
 '{{ node_type }}',
 '{{ master_username }}',
 '{{ publicly_accessible }}',
 '{{ manual_snapshot_retention_period }}',
 '{{ resource_action }}',
 '{{ hsm_client_certificate_identifier }}',
 '{{ elastic_ip }}',
 '{{ availability_zone_relocation_status }}',
 '{{ aqua_configuration_status }}',
 '{{ snapshot_identifier }}',
 '{{ availability_zone_relocation }}',
 '{{ snapshot_copy_grant_name }}',
 '{{ enhanced_vpc_routing }}',
 '{{ cluster_parameter_group_name }}',
 '{{ defer_maintenance_end_time }}',
 '{{ rotate_encryption_key }}',
 '{{ vpc_security_group_ids }}',
 '{{ cluster_version }}',
 '{{ hsm_configuration_identifier }}',
 '{{ preferred_maintenance_window }}',
 '{{ defer_maintenance_start_time }}',
 '{{ cluster_type }}',
 '{{ classic }}',
 '{{ master_password_secret_kms_key_id }}',
 '{{ defer_maintenance_duration }}',
 '{{ db_name }}',
 '{{ snapshot_copy_retention_period }}',
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
  - name: cluster
    props:
      - name: revision_target
        value: '{{ revision_target }}'
      - name: automated_snapshot_retention_period
        value: '{{ automated_snapshot_retention_period }}'
      - name: encrypted
        value: '{{ encrypted }}'
      - name: port
        value: '{{ port }}'
      - name: number_of_nodes
        value: '{{ number_of_nodes }}'
      - name: destination_region
        value: '{{ destination_region }}'
      - name: allow_version_upgrade
        value: '{{ allow_version_upgrade }}'
      - name: endpoint
        value:
          address: '{{ address }}'
          port: '{{ port }}'
      - name: namespace_resource_policy
        value: {}
      - name: maintenance_track_name
        value: '{{ maintenance_track_name }}'
      - name: owner_account
        value: '{{ owner_account }}'
      - name: multi_az
        value: '{{ multi_az }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: snapshot_cluster_identifier
        value: '{{ snapshot_cluster_identifier }}'
      - name: iam_roles
        value:
          - '{{ iam_roles[0] }}'
      - name: kms_key_id
        value: '{{ kms_key_id }}'
      - name: snapshot_copy_manual
        value: '{{ snapshot_copy_manual }}'
      - name: manage_master_password
        value: '{{ manage_master_password }}'
      - name: availability_zone
        value: '{{ availability_zone }}'
      - name: cluster_security_groups
        value:
          - '{{ cluster_security_groups[0] }}'
      - name: cluster_identifier
        value: '{{ cluster_identifier }}'
      - name: master_user_password
        value: '{{ master_user_password }}'
      - name: cluster_subnet_group_name
        value: '{{ cluster_subnet_group_name }}'
      - name: logging_properties
        value:
          bucket_name: '{{ bucket_name }}'
          s3_key_prefix: '{{ s3_key_prefix }}'
          log_destination_type: '{{ log_destination_type }}'
          log_exports:
            - '{{ log_exports[0] }}'
      - name: defer_maintenance
        value: '{{ defer_maintenance }}'
      - name: node_type
        value: '{{ node_type }}'
      - name: master_username
        value: '{{ master_username }}'
      - name: publicly_accessible
        value: '{{ publicly_accessible }}'
      - name: manual_snapshot_retention_period
        value: '{{ manual_snapshot_retention_period }}'
      - name: resource_action
        value: '{{ resource_action }}'
      - name: hsm_client_certificate_identifier
        value: '{{ hsm_client_certificate_identifier }}'
      - name: elastic_ip
        value: '{{ elastic_ip }}'
      - name: availability_zone_relocation_status
        value: '{{ availability_zone_relocation_status }}'
      - name: aqua_configuration_status
        value: '{{ aqua_configuration_status }}'
      - name: snapshot_identifier
        value: '{{ snapshot_identifier }}'
      - name: availability_zone_relocation
        value: '{{ availability_zone_relocation }}'
      - name: snapshot_copy_grant_name
        value: '{{ snapshot_copy_grant_name }}'
      - name: enhanced_vpc_routing
        value: '{{ enhanced_vpc_routing }}'
      - name: cluster_parameter_group_name
        value: '{{ cluster_parameter_group_name }}'
      - name: defer_maintenance_end_time
        value: '{{ defer_maintenance_end_time }}'
      - name: rotate_encryption_key
        value: '{{ rotate_encryption_key }}'
      - name: vpc_security_group_ids
        value:
          - '{{ vpc_security_group_ids[0] }}'
      - name: cluster_version
        value: '{{ cluster_version }}'
      - name: hsm_configuration_identifier
        value: '{{ hsm_configuration_identifier }}'
      - name: preferred_maintenance_window
        value: '{{ preferred_maintenance_window }}'
      - name: defer_maintenance_start_time
        value: '{{ defer_maintenance_start_time }}'
      - name: cluster_type
        value: '{{ cluster_type }}'
      - name: classic
        value: '{{ classic }}'
      - name: master_password_secret_kms_key_id
        value: '{{ master_password_secret_kms_key_id }}'
      - name: defer_maintenance_duration
        value: '{{ defer_maintenance_duration }}'
      - name: db_name
        value: '{{ db_name }}'
      - name: snapshot_copy_retention_period
        value: '{{ snapshot_copy_retention_period }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>cluster</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.redshift.clusters
SET PatchDocument = string('{{ {
    "RevisionTarget": revision_target,
    "AutomatedSnapshotRetentionPeriod": automated_snapshot_retention_period,
    "Encrypted": encrypted,
    "Port": port,
    "NumberOfNodes": number_of_nodes,
    "DestinationRegion": destination_region,
    "AllowVersionUpgrade": allow_version_upgrade,
    "NamespaceResourcePolicy": namespace_resource_policy,
    "MaintenanceTrackName": maintenance_track_name,
    "MultiAZ": multi_az,
    "Tags": tags,
    "IamRoles": iam_roles,
    "KmsKeyId": kms_key_id,
    "SnapshotCopyManual": snapshot_copy_manual,
    "ManageMasterPassword": manage_master_password,
    "AvailabilityZone": availability_zone,
    "ClusterSecurityGroups": cluster_security_groups,
    "MasterUserPassword": master_user_password,
    "LoggingProperties": logging_properties,
    "DeferMaintenance": defer_maintenance,
    "NodeType": node_type,
    "PubliclyAccessible": publicly_accessible,
    "ManualSnapshotRetentionPeriod": manual_snapshot_retention_period,
    "ResourceAction": resource_action,
    "HsmClientCertificateIdentifier": hsm_client_certificate_identifier,
    "ElasticIp": elastic_ip,
    "AvailabilityZoneRelocationStatus": availability_zone_relocation_status,
    "AquaConfigurationStatus": aqua_configuration_status,
    "AvailabilityZoneRelocation": availability_zone_relocation,
    "SnapshotCopyGrantName": snapshot_copy_grant_name,
    "EnhancedVpcRouting": enhanced_vpc_routing,
    "ClusterParameterGroupName": cluster_parameter_group_name,
    "DeferMaintenanceEndTime": defer_maintenance_end_time,
    "RotateEncryptionKey": rotate_encryption_key,
    "VpcSecurityGroupIds": vpc_security_group_ids,
    "ClusterVersion": cluster_version,
    "HsmConfigurationIdentifier": hsm_configuration_identifier,
    "PreferredMaintenanceWindow": preferred_maintenance_window,
    "DeferMaintenanceStartTime": defer_maintenance_start_time,
    "ClusterType": cluster_type,
    "Classic": classic,
    "MasterPasswordSecretKmsKeyId": master_password_secret_kms_key_id,
    "DeferMaintenanceDuration": defer_maintenance_duration,
    "SnapshotCopyRetentionPeriod": snapshot_copy_retention_period
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ cluster_identifier }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.redshift.clusters
WHERE Identifier = '{{ cluster_identifier }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>clusters</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
redshift:DescribeClusters,
redshift:DescribeLoggingStatus,
redshift:DescribeSnapshotCopyGrant,
redshift:DescribeClusterDbRevisions,
redshift:DescribeTags,
redshift:GetResourcePolicy
```

</TabItem>
<TabItem value="create">

```json
iam:PassRole,
iam:CreateServiceLinkedRole,
redshift:DescribeClusters,
redshift:CreateCluster,
redshift:RestoreFromClusterSnapshot,
redshift:EnableLogging,
redshift:DescribeLoggingStatus,
redshift:CreateTags,
redshift:DescribeTags,
redshift:GetResourcePolicy,
redshift:PutResourcePolicy,
redshift:ModifyClusterMaintenance,
ec2:Describe*,
ec2:AssociateAddress,
ec2:CreateNetworkInterface,
ec2:ModifyNetworkInterfaceAttribute,
ec2:CreateVpcEndpoint,
ec2:ModifyVpcEndpoint,
ec2:AllocateAddress,
ec2:CreateSecurityGroup,
cloudwatch:PutMetricData,
kms:GenerateDataKey,
kms:CreateGrant,
kms:DescribeKey,
kms:Encrypt,
kms:Decrypt,
secretsmanager:CreateSecret,
secretsmanager:TagResource
```

</TabItem>
<TabItem value="update">

```json
iam:PassRole,
redshift:DescribeClusters,
redshift:ModifyCluster,
redshift:ModifyClusterIamRoles,
redshift:EnableLogging,
redshift:CreateTags,
redshift:DeleteTags,
redshift:DescribeTags,
redshift:DisableLogging,
redshift:DescribeLoggingStatus,
redshift:RebootCluster,
redshift:EnableSnapshotCopy,
redshift:DisableSnapshotCopy,
redshift:ModifySnapshotCopyRetentionPeriod,
redshift:ModifyAquaConfiguration,
redshift:ResizeCluster,
redshift:ModifyClusterMaintenance,
redshift:DescribeClusterDbRevisions,
redshift:ModifyClusterDbRevisions,
redshift:PauseCluster,
redshift:ResumeCluster,
redshift:RotateEncryptionKey,
redshift:FailoverPrimaryCompute,
redshift:PutResourcePolicy,
redshift:GetResourcePolicy,
redshift:DeleteResourcePolicy,
cloudwatch:PutMetricData,
kms:GenerateDataKey,
kms:CreateGrant,
kms:DescribeKey,
kms:Encrypt,
kms:Decrypt,
secretsmanager:CreateSecret,
secretsmanager:TagResource
```

</TabItem>
<TabItem value="list">

```json
redshift:DescribeTags,
redshift:DescribeClusters
```

</TabItem>
<TabItem value="delete">

```json
redshift:DescribeTags,
redshift:DescribeClusters,
redshift:DeleteCluster
```

</TabItem>
</Tabs>