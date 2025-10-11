---
title: cloud_autonomous_vm_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_autonomous_vm_clusters
  - odb
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

Creates, updates, deletes or gets a <code>cloud_autonomous_vm_cluster</code> resource or lists <code>cloud_autonomous_vm_clusters</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>cloud_autonomous_vm_clusters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::ODB::CloudAutonomousVmCluster resource creates a Cloud Autonomous VM Cluster</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.odb.cloud_autonomous_vm_clusters" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="cloud_autonomous_vm_cluster_id" /></td><td><code>string</code></td><td>The unique identifier of the Autonomous VM cluster.</td></tr>
<tr><td><CopyableCode code="cloud_autonomous_vm_cluster_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) for the Autonomous VM cluster.</td></tr>
<tr><td><CopyableCode code="odb_network_id" /></td><td><code>string</code></td><td>The unique identifier of the ODB network associated with this Autonomous VM cluster.</td></tr>
<tr><td><CopyableCode code="oci_resource_anchor_name" /></td><td><code>string</code></td><td>The name of the OCI resource anchor associated with this Autonomous VM cluster.</td></tr>
<tr><td><CopyableCode code="display_name" /></td><td><code>string</code></td><td>The display name of the Autonomous VM cluster.</td></tr>
<tr><td><CopyableCode code="cloud_exadata_infrastructure_id" /></td><td><code>string</code></td><td>The unique identifier of the Cloud Exadata Infrastructure containing this Autonomous VM cluster.</td></tr>
<tr><td><CopyableCode code="autonomous_data_storage_percentage" /></td><td><code>number</code></td><td>The percentage of data storage currently in use for Autonomous Databases in the Autonomous VM cluster.</td></tr>
<tr><td><CopyableCode code="autonomous_data_storage_size_in_tbs" /></td><td><code>number</code></td><td>The data storage size allocated for Autonomous Databases in the Autonomous VM cluster, in TB.</td></tr>
<tr><td><CopyableCode code="available_autonomous_data_storage_size_in_tbs" /></td><td><code>number</code></td><td>The available data storage space for Autonomous Databases in the Autonomous VM cluster, in TB.</td></tr>
<tr><td><CopyableCode code="available_container_databases" /></td><td><code>integer</code></td><td>The number of Autonomous CDBs that you can create with the currently available storage.</td></tr>
<tr><td><CopyableCode code="available_cpus" /></td><td><code>number</code></td><td>The number of CPU cores available for allocation to Autonomous Databases.</td></tr>
<tr><td><CopyableCode code="compute_model" /></td><td><code>string</code></td><td>The compute model of the Autonomous VM cluster: ECPU or OCPU.</td></tr>
<tr><td><CopyableCode code="cpu_core_count" /></td><td><code>integer</code></td><td>The total number of CPU cores in the Autonomous VM cluster.</td></tr>
<tr><td><CopyableCode code="cpu_core_count_per_node" /></td><td><code>integer</code></td><td>The number of CPU cores enabled per node in the Autonomous VM cluster.</td></tr>
<tr><td><CopyableCode code="cpu_percentage" /></td><td><code>number</code></td><td>The percentage of total CPU cores currently in use in the Autonomous VM cluster.</td></tr>
<tr><td><CopyableCode code="data_storage_size_in_gbs" /></td><td><code>number</code></td><td>The total data storage allocated to the Autonomous VM cluster, in GB.</td></tr>
<tr><td><CopyableCode code="data_storage_size_in_tbs" /></td><td><code>number</code></td><td>The total data storage allocated to the Autonomous VM cluster, in TB.</td></tr>
<tr><td><CopyableCode code="db_node_storage_size_in_gbs" /></td><td><code>integer</code></td><td>The local node storage allocated to the Autonomous VM cluster, in gigabytes (GB).</td></tr>
<tr><td><CopyableCode code="db_servers" /></td><td><code>array</code></td><td>The list of database servers associated with the Autonomous VM cluster.</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>The user-provided description of the Autonomous VM cluster.</td></tr>
<tr><td><CopyableCode code="domain" /></td><td><code>string</code></td><td>The domain name for the Autonomous VM cluster.</td></tr>
<tr><td><CopyableCode code="exadata_storage_in_tbs_lowest_scaled_value" /></td><td><code>number</code></td><td>The minimum value to which you can scale down the Exadata storage, in TB.</td></tr>
<tr><td><CopyableCode code="hostname" /></td><td><code>string</code></td><td>The hostname for the Autonomous VM cluster.</td></tr>
<tr><td><CopyableCode code="ocid" /></td><td><code>string</code></td><td>The Oracle Cloud Identifier (OCID) of the Autonomous VM cluster.</td></tr>
<tr><td><CopyableCode code="oci_url" /></td><td><code>string</code></td><td>The URL for accessing the OCI console page for this Autonomous VM cluster.</td></tr>
<tr><td><CopyableCode code="is_mtls_enabled_vm_cluster" /></td><td><code>boolean</code></td><td>Indicates whether mutual TLS (mTLS) authentication is enabled for the Autonomous VM cluster.</td></tr>
<tr><td><CopyableCode code="license_model" /></td><td><code>string</code></td><td>The Oracle license model that applies to the Autonomous VM cluster. Valid values are LICENSE_INCLUDED or BRING_YOUR_OWN_LICENSE.</td></tr>
<tr><td><CopyableCode code="maintenance_window" /></td><td><code>object</code></td><td>The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window.</td></tr>
<tr><td><CopyableCode code="max_acds_lowest_scaled_value" /></td><td><code>integer</code></td><td>The minimum value to which you can scale down the maximum number of Autonomous CDBs.</td></tr>
<tr><td><CopyableCode code="memory_per_oracle_compute_unit_in_gbs" /></td><td><code>integer</code></td><td>The amount of memory allocated per Oracle Compute Unit, in GB.</td></tr>
<tr><td><CopyableCode code="memory_size_in_gbs" /></td><td><code>integer</code></td><td>The total amount of memory allocated to the Autonomous VM cluster, in gigabytes (GB).</td></tr>
<tr><td><CopyableCode code="node_count" /></td><td><code>integer</code></td><td>The number of database server nodes in the Autonomous VM cluster.</td></tr>
<tr><td><CopyableCode code="non_provisionable_autonomous_container_databases" /></td><td><code>integer</code></td><td>The number of Autonomous CDBs that can't be provisioned because of resource constraints.</td></tr>
<tr><td><CopyableCode code="provisionable_autonomous_container_databases" /></td><td><code>integer</code></td><td>The number of Autonomous CDBs that can be provisioned in the Autonomous VM cluster.</td></tr>
<tr><td><CopyableCode code="provisioned_autonomous_container_databases" /></td><td><code>integer</code></td><td>The number of Autonomous CDBs currently provisioned in the Autonomous VM cluster.</td></tr>
<tr><td><CopyableCode code="provisioned_cpus" /></td><td><code>number</code></td><td>The number of CPU cores currently provisioned in the Autonomous VM cluster.</td></tr>
<tr><td><CopyableCode code="reclaimable_cpus" /></td><td><code>number</code></td><td>The number of CPU cores that can be reclaimed from terminated or scaled-down Autonomous Databases.</td></tr>
<tr><td><CopyableCode code="reserved_cpus" /></td><td><code>number</code></td><td>The number of CPU cores reserved for system operations and redundancy.</td></tr>
<tr><td><CopyableCode code="scan_listener_port_non_tls" /></td><td><code>integer</code></td><td>The SCAN listener port for non-TLS (TCP) protocol. The default is 1521.</td></tr>
<tr><td><CopyableCode code="scan_listener_port_tls" /></td><td><code>integer</code></td><td>The SCAN listener port for TLS (TCP) protocol. The default is 2484.</td></tr>
<tr><td><CopyableCode code="shape" /></td><td><code>string</code></td><td>The shape of the Exadata infrastructure for the Autonomous VM cluster.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>The tags associated with the Autonomous VM cluster.</td></tr>
<tr><td><CopyableCode code="time_zone" /></td><td><code>string</code></td><td>The time zone of the Autonomous VM cluster.</td></tr>
<tr><td><CopyableCode code="total_container_databases" /></td><td><code>integer</code></td><td>The total number of Autonomous Container Databases that can be created with the allocated local storage.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-odb-cloudautonomousvmcluster.html"><code>AWS::ODB::CloudAutonomousVmCluster</code></a>.

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
Gets all <code>cloud_autonomous_vm_clusters</code> in a region.
```sql
SELECT
region,
cloud_autonomous_vm_cluster_id,
cloud_autonomous_vm_cluster_arn,
odb_network_id,
oci_resource_anchor_name,
display_name,
cloud_exadata_infrastructure_id,
autonomous_data_storage_percentage,
autonomous_data_storage_size_in_tbs,
available_autonomous_data_storage_size_in_tbs,
available_container_databases,
available_cpus,
compute_model,
cpu_core_count,
cpu_core_count_per_node,
cpu_percentage,
data_storage_size_in_gbs,
data_storage_size_in_tbs,
db_node_storage_size_in_gbs,
db_servers,
description,
domain,
exadata_storage_in_tbs_lowest_scaled_value,
hostname,
ocid,
oci_url,
is_mtls_enabled_vm_cluster,
license_model,
maintenance_window,
max_acds_lowest_scaled_value,
memory_per_oracle_compute_unit_in_gbs,
memory_size_in_gbs,
node_count,
non_provisionable_autonomous_container_databases,
provisionable_autonomous_container_databases,
provisioned_autonomous_container_databases,
provisioned_cpus,
reclaimable_cpus,
reserved_cpus,
scan_listener_port_non_tls,
scan_listener_port_tls,
shape,
tags,
time_zone,
total_container_databases
FROM awscc.odb.cloud_autonomous_vm_clusters
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>cloud_autonomous_vm_cluster</code>.
```sql
SELECT
region,
cloud_autonomous_vm_cluster_id,
cloud_autonomous_vm_cluster_arn,
odb_network_id,
oci_resource_anchor_name,
display_name,
cloud_exadata_infrastructure_id,
autonomous_data_storage_percentage,
autonomous_data_storage_size_in_tbs,
available_autonomous_data_storage_size_in_tbs,
available_container_databases,
available_cpus,
compute_model,
cpu_core_count,
cpu_core_count_per_node,
cpu_percentage,
data_storage_size_in_gbs,
data_storage_size_in_tbs,
db_node_storage_size_in_gbs,
db_servers,
description,
domain,
exadata_storage_in_tbs_lowest_scaled_value,
hostname,
ocid,
oci_url,
is_mtls_enabled_vm_cluster,
license_model,
maintenance_window,
max_acds_lowest_scaled_value,
memory_per_oracle_compute_unit_in_gbs,
memory_size_in_gbs,
node_count,
non_provisionable_autonomous_container_databases,
provisionable_autonomous_container_databases,
provisioned_autonomous_container_databases,
provisioned_cpus,
reclaimable_cpus,
reserved_cpus,
scan_listener_port_non_tls,
scan_listener_port_tls,
shape,
tags,
time_zone,
total_container_databases
FROM awscc.odb.cloud_autonomous_vm_clusters
WHERE region = 'us-east-1' AND data__Identifier = '<CloudAutonomousVmClusterArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>cloud_autonomous_vm_cluster</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.odb.cloud_autonomous_vm_clusters (
 OdbNetworkId,
 DisplayName,
 CloudExadataInfrastructureId,
 AutonomousDataStorageSizeInTBs,
 CpuCoreCountPerNode,
 DbServers,
 Description,
 IsMtlsEnabledVmCluster,
 LicenseModel,
 MaintenanceWindow,
 MemoryPerOracleComputeUnitInGBs,
 ScanListenerPortNonTls,
 ScanListenerPortTls,
 Tags,
 TimeZone,
 TotalContainerDatabases,
 region
)
SELECT 
'{{ OdbNetworkId }}',
 '{{ DisplayName }}',
 '{{ CloudExadataInfrastructureId }}',
 '{{ AutonomousDataStorageSizeInTBs }}',
 '{{ CpuCoreCountPerNode }}',
 '{{ DbServers }}',
 '{{ Description }}',
 '{{ IsMtlsEnabledVmCluster }}',
 '{{ LicenseModel }}',
 '{{ MaintenanceWindow }}',
 '{{ MemoryPerOracleComputeUnitInGBs }}',
 '{{ ScanListenerPortNonTls }}',
 '{{ ScanListenerPortTls }}',
 '{{ Tags }}',
 '{{ TimeZone }}',
 '{{ TotalContainerDatabases }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.odb.cloud_autonomous_vm_clusters (
 OdbNetworkId,
 DisplayName,
 CloudExadataInfrastructureId,
 AutonomousDataStorageSizeInTBs,
 CpuCoreCountPerNode,
 DbServers,
 Description,
 IsMtlsEnabledVmCluster,
 LicenseModel,
 MaintenanceWindow,
 MemoryPerOracleComputeUnitInGBs,
 ScanListenerPortNonTls,
 ScanListenerPortTls,
 Tags,
 TimeZone,
 TotalContainerDatabases,
 region
)
SELECT 
 '{{ OdbNetworkId }}',
 '{{ DisplayName }}',
 '{{ CloudExadataInfrastructureId }}',
 '{{ AutonomousDataStorageSizeInTBs }}',
 '{{ CpuCoreCountPerNode }}',
 '{{ DbServers }}',
 '{{ Description }}',
 '{{ IsMtlsEnabledVmCluster }}',
 '{{ LicenseModel }}',
 '{{ MaintenanceWindow }}',
 '{{ MemoryPerOracleComputeUnitInGBs }}',
 '{{ ScanListenerPortNonTls }}',
 '{{ ScanListenerPortTls }}',
 '{{ Tags }}',
 '{{ TimeZone }}',
 '{{ TotalContainerDatabases }}',
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
  - name: cloud_autonomous_vm_cluster
    props:
      - name: OdbNetworkId
        value: '{{ OdbNetworkId }}'
      - name: DisplayName
        value: '{{ DisplayName }}'
      - name: CloudExadataInfrastructureId
        value: '{{ CloudExadataInfrastructureId }}'
      - name: AutonomousDataStorageSizeInTBs
        value: null
      - name: CpuCoreCountPerNode
        value: '{{ CpuCoreCountPerNode }}'
      - name: DbServers
        value:
          - '{{ DbServers[0] }}'
      - name: Description
        value: '{{ Description }}'
      - name: IsMtlsEnabledVmCluster
        value: '{{ IsMtlsEnabledVmCluster }}'
      - name: LicenseModel
        value: '{{ LicenseModel }}'
      - name: MaintenanceWindow
        value:
          DaysOfWeek:
            - '{{ DaysOfWeek[0] }}'
          HoursOfDay:
            - '{{ HoursOfDay[0] }}'
          LeadTimeInWeeks: '{{ LeadTimeInWeeks }}'
          Months:
            - '{{ Months[0] }}'
          Preference: '{{ Preference }}'
          WeeksOfMonth:
            - '{{ WeeksOfMonth[0] }}'
      - name: MemoryPerOracleComputeUnitInGBs
        value: '{{ MemoryPerOracleComputeUnitInGBs }}'
      - name: ScanListenerPortNonTls
        value: '{{ ScanListenerPortNonTls }}'
      - name: ScanListenerPortTls
        value: '{{ ScanListenerPortTls }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: TimeZone
        value: '{{ TimeZone }}'
      - name: TotalContainerDatabases
        value: '{{ TotalContainerDatabases }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.odb.cloud_autonomous_vm_clusters
WHERE data__Identifier = '<CloudAutonomousVmClusterArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>cloud_autonomous_vm_clusters</code> resource, the following permissions are required:

### Create
```json
ec2:DescribeAvailabilityZones,
iam:CreateServiceLinkedRole,
odb:CreateCloudAutonomousVmCluster,
odb:GetCloudAutonomousVmCluster,
odb:ListCloudAutonomousVmClusters,
odb:ListTagsForResource,
odb:TagResource,
sts:GetCallerIdentity
```

### Read
```json
odb:GetCloudAutonomousVmCluster,
odb:ListTagsForResource,
sts:GetCallerIdentity
```

### Update
```json
odb:TagResource,
odb:UntagResource,
odb:GetCloudAutonomousVmCluster,
odb:ListCloudAutonomousVmClusters,
odb:ListTagsForResource,
sts:GetCallerIdentity
```

### Delete
```json
odb:DeleteCloudAutonomousVmCluster,
odb:GetCloudAutonomousVmCluster,
odb:ListCloudAutonomousVmClusters,
odb:ListTagsForResource,
sts:GetCallerIdentity
```

### List
```json
odb:ListCloudAutonomousVmClusters,
odb:ListTagsForResource,
sts:GetCallerIdentity
```
