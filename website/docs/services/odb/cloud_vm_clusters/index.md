---
title: cloud_vm_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_vm_clusters
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

Creates, updates, deletes or gets a <code>cloud_vm_cluster</code> resource or lists <code>cloud_vm_clusters</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>cloud_vm_clusters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::ODB::CloudVmCluster resource creates a Cloud VM Cluster</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.odb.cloud_vm_clusters" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="cloud_exadata_infrastructure_id" /></td><td><code>string</code></td><td>The unique identifier of the Exadata infrastructure that this VM cluster belongs to.</td></tr>
<tr><td><CopyableCode code="cloud_vm_cluster_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the VM cluster.</td></tr>
<tr><td><CopyableCode code="cloud_vm_cluster_id" /></td><td><code>string</code></td><td>The unique identifier of the VM cluster.</td></tr>
<tr><td><CopyableCode code="cluster_name" /></td><td><code>string</code></td><td>The name of the Grid Infrastructure (GI) cluster.</td></tr>
<tr><td><CopyableCode code="compute_model" /></td><td><code>string</code></td><td>The OCI model compute model used when you create or clone an instance: ECPU or OCPU. An ECPU is an abstracted measure of compute resources. ECPUs are based on the number of cores elastically allocated from a pool of compute and storage servers. An OCPU is a legacy physical measure of compute resources. OCPUs are based on the physical core of a processor with hyper-threading enabled.</td></tr>
<tr><td><CopyableCode code="cpu_core_count" /></td><td><code>integer</code></td><td>The number of CPU cores enabled on the VM cluster.</td></tr>
<tr><td><CopyableCode code="data_collection_options" /></td><td><code>object</code></td><td>The set of diagnostic collection options enabled for the VM cluster.</td></tr>
<tr><td><CopyableCode code="data_storage_size_in_tbs" /></td><td><code>number</code></td><td>The size of the data disk group, in terabytes (TB), that's allocated for the VM cluster.</td></tr>
<tr><td><CopyableCode code="db_node_storage_size_in_gbs" /></td><td><code>integer</code></td><td>The amount of local node storage, in gigabytes (GB), that's allocated for the VM cluster.</td></tr>
<tr><td><CopyableCode code="db_servers" /></td><td><code>array</code></td><td>The list of database servers for the VM cluster.</td></tr>
<tr><td><CopyableCode code="display_name" /></td><td><code>string</code></td><td>The user-friendly name for the VM cluster.</td></tr>
<tr><td><CopyableCode code="disk_redundancy" /></td><td><code>string</code></td><td>The type of redundancy configured for the VM cluster. NORMAL is 2-way redundancy. HIGH is 3-way redundancy.</td></tr>
<tr><td><CopyableCode code="domain" /></td><td><code>string</code></td><td>The domain of the VM cluster.</td></tr>
<tr><td><CopyableCode code="gi_version" /></td><td><code>string</code></td><td>The software version of the Oracle Grid Infrastructure (GI) for the VM cluster.</td></tr>
<tr><td><CopyableCode code="hostname" /></td><td><code>string</code></td><td>The host name for the VM cluster.</td></tr>
<tr><td><CopyableCode code="is_local_backup_enabled" /></td><td><code>boolean</code></td><td>Indicates whether database backups to local Exadata storage is enabled for the VM cluster.</td></tr>
<tr><td><CopyableCode code="is_sparse_diskgroup_enabled" /></td><td><code>boolean</code></td><td>Indicates whether the VM cluster is configured with a sparse disk group.</td></tr>
<tr><td><CopyableCode code="license_model" /></td><td><code>string</code></td><td>The Oracle license model applied to the VM cluster.</td></tr>
<tr><td><CopyableCode code="listener_port" /></td><td><code>integer</code></td><td>The port number configured for the listener on the VM cluster.</td></tr>
<tr><td><CopyableCode code="memory_size_in_gbs" /></td><td><code>integer</code></td><td>The amount of memory, in gigabytes (GB), that's allocated for the VM cluster.</td></tr>
<tr><td><CopyableCode code="node_count" /></td><td><code>integer</code></td><td>The number of nodes in the VM cluster.</td></tr>
<tr><td><CopyableCode code="odb_network_id" /></td><td><code>string</code></td><td>The unique identifier of the ODB network for the VM cluster.</td></tr>
<tr><td><CopyableCode code="ocid" /></td><td><code>string</code></td><td>The OCID of the VM cluster.</td></tr>
<tr><td><CopyableCode code="oci_resource_anchor_name" /></td><td><code>string</code></td><td>The name of the OCI resource anchor for the VM cluster.</td></tr>
<tr><td><CopyableCode code="oci_url" /></td><td><code>string</code></td><td>The HTTPS link to the VM cluster in OCI.</td></tr>
<tr><td><CopyableCode code="scan_dns_name" /></td><td><code>string</code></td><td>The FQDN of the DNS record for the Single Client Access Name (SCAN) IP addresses that are associated with the VM cluster.</td></tr>
<tr><td><CopyableCode code="scan_ip_ids" /></td><td><code>array</code></td><td>The OCID of the SCAN IP addresses that are associated with the VM cluster.</td></tr>
<tr><td><CopyableCode code="scan_listener_port_tcp" /></td><td><code>integer</code></td><td>Property description not available.</td></tr>
<tr><td><CopyableCode code="shape" /></td><td><code>string</code></td><td>The hardware model name of the Exadata infrastructure that's running the VM cluster.</td></tr>
<tr><td><CopyableCode code="ssh_public_keys" /></td><td><code>array</code></td><td>The public key portion of one or more key pairs used for SSH access to the VM cluster.</td></tr>
<tr><td><CopyableCode code="storage_size_in_gbs" /></td><td><code>integer</code></td><td>The amount of local node storage, in gigabytes (GB), that's allocated to the VM cluster.</td></tr>
<tr><td><CopyableCode code="system_version" /></td><td><code>string</code></td><td>The operating system version of the image chosen for the VM cluster.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>Tags to assign to the Vm Cluster.</td></tr>
<tr><td><CopyableCode code="time_zone" /></td><td><code>string</code></td><td>The time zone of the VM cluster.</td></tr>
<tr><td><CopyableCode code="vip_ids" /></td><td><code>array</code></td><td>The virtual IP (VIP) addresses that are associated with the VM cluster. Oracle's Cluster Ready Services (CRS) creates and maintains one VIP address for each node in the VM cluster to enable failover. If one node fails, the VIP is reassigned to another active node in the cluster.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-odb-cloudvmcluster.html"><code>AWS::ODB::CloudVmCluster</code></a>.

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
Gets all <code>cloud_vm_clusters</code> in a region.
```sql
SELECT
region,
cloud_exadata_infrastructure_id,
cloud_vm_cluster_arn,
cloud_vm_cluster_id,
cluster_name,
compute_model,
cpu_core_count,
data_collection_options,
data_storage_size_in_tbs,
db_node_storage_size_in_gbs,
db_servers,
display_name,
disk_redundancy,
domain,
gi_version,
hostname,
is_local_backup_enabled,
is_sparse_diskgroup_enabled,
license_model,
listener_port,
memory_size_in_gbs,
node_count,
odb_network_id,
ocid,
oci_resource_anchor_name,
oci_url,
scan_dns_name,
scan_ip_ids,
scan_listener_port_tcp,
shape,
ssh_public_keys,
storage_size_in_gbs,
system_version,
tags,
time_zone,
vip_ids
FROM awscc.odb.cloud_vm_clusters
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>cloud_vm_cluster</code>.
```sql
SELECT
region,
cloud_exadata_infrastructure_id,
cloud_vm_cluster_arn,
cloud_vm_cluster_id,
cluster_name,
compute_model,
cpu_core_count,
data_collection_options,
data_storage_size_in_tbs,
db_node_storage_size_in_gbs,
db_servers,
display_name,
disk_redundancy,
domain,
gi_version,
hostname,
is_local_backup_enabled,
is_sparse_diskgroup_enabled,
license_model,
listener_port,
memory_size_in_gbs,
node_count,
odb_network_id,
ocid,
oci_resource_anchor_name,
oci_url,
scan_dns_name,
scan_ip_ids,
scan_listener_port_tcp,
shape,
ssh_public_keys,
storage_size_in_gbs,
system_version,
tags,
time_zone,
vip_ids
FROM awscc.odb.cloud_vm_clusters
WHERE region = 'us-east-1' AND data__Identifier = '<CloudVmClusterArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>cloud_vm_cluster</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.odb.cloud_vm_clusters (
 CloudExadataInfrastructureId,
 ClusterName,
 CpuCoreCount,
 DataCollectionOptions,
 DataStorageSizeInTBs,
 DbNodeStorageSizeInGBs,
 DbServers,
 DisplayName,
 GiVersion,
 Hostname,
 IsLocalBackupEnabled,
 IsSparseDiskgroupEnabled,
 LicenseModel,
 MemorySizeInGBs,
 OdbNetworkId,
 ScanListenerPortTcp,
 SshPublicKeys,
 SystemVersion,
 Tags,
 TimeZone,
 region
)
SELECT 
'{{ CloudExadataInfrastructureId }}',
 '{{ ClusterName }}',
 '{{ CpuCoreCount }}',
 '{{ DataCollectionOptions }}',
 '{{ DataStorageSizeInTBs }}',
 '{{ DbNodeStorageSizeInGBs }}',
 '{{ DbServers }}',
 '{{ DisplayName }}',
 '{{ GiVersion }}',
 '{{ Hostname }}',
 '{{ IsLocalBackupEnabled }}',
 '{{ IsSparseDiskgroupEnabled }}',
 '{{ LicenseModel }}',
 '{{ MemorySizeInGBs }}',
 '{{ OdbNetworkId }}',
 '{{ ScanListenerPortTcp }}',
 '{{ SshPublicKeys }}',
 '{{ SystemVersion }}',
 '{{ Tags }}',
 '{{ TimeZone }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.odb.cloud_vm_clusters (
 CloudExadataInfrastructureId,
 ClusterName,
 CpuCoreCount,
 DataCollectionOptions,
 DataStorageSizeInTBs,
 DbNodeStorageSizeInGBs,
 DbServers,
 DisplayName,
 GiVersion,
 Hostname,
 IsLocalBackupEnabled,
 IsSparseDiskgroupEnabled,
 LicenseModel,
 MemorySizeInGBs,
 OdbNetworkId,
 ScanListenerPortTcp,
 SshPublicKeys,
 SystemVersion,
 Tags,
 TimeZone,
 region
)
SELECT 
 '{{ CloudExadataInfrastructureId }}',
 '{{ ClusterName }}',
 '{{ CpuCoreCount }}',
 '{{ DataCollectionOptions }}',
 '{{ DataStorageSizeInTBs }}',
 '{{ DbNodeStorageSizeInGBs }}',
 '{{ DbServers }}',
 '{{ DisplayName }}',
 '{{ GiVersion }}',
 '{{ Hostname }}',
 '{{ IsLocalBackupEnabled }}',
 '{{ IsSparseDiskgroupEnabled }}',
 '{{ LicenseModel }}',
 '{{ MemorySizeInGBs }}',
 '{{ OdbNetworkId }}',
 '{{ ScanListenerPortTcp }}',
 '{{ SshPublicKeys }}',
 '{{ SystemVersion }}',
 '{{ Tags }}',
 '{{ TimeZone }}',
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
  - name: cloud_vm_cluster
    props:
      - name: CloudExadataInfrastructureId
        value: '{{ CloudExadataInfrastructureId }}'
      - name: ClusterName
        value: '{{ ClusterName }}'
      - name: CpuCoreCount
        value: '{{ CpuCoreCount }}'
      - name: DataCollectionOptions
        value:
          IsDiagnosticsEventsEnabled: '{{ IsDiagnosticsEventsEnabled }}'
          IsHealthMonitoringEnabled: '{{ IsHealthMonitoringEnabled }}'
          IsIncidentLogsEnabled: '{{ IsIncidentLogsEnabled }}'
      - name: DataStorageSizeInTBs
        value: null
      - name: DbNodeStorageSizeInGBs
        value: '{{ DbNodeStorageSizeInGBs }}'
      - name: DbServers
        value:
          - '{{ DbServers[0] }}'
      - name: DisplayName
        value: '{{ DisplayName }}'
      - name: GiVersion
        value: '{{ GiVersion }}'
      - name: Hostname
        value: '{{ Hostname }}'
      - name: IsLocalBackupEnabled
        value: '{{ IsLocalBackupEnabled }}'
      - name: IsSparseDiskgroupEnabled
        value: '{{ IsSparseDiskgroupEnabled }}'
      - name: LicenseModel
        value: '{{ LicenseModel }}'
      - name: MemorySizeInGBs
        value: '{{ MemorySizeInGBs }}'
      - name: OdbNetworkId
        value: '{{ OdbNetworkId }}'
      - name: ScanListenerPortTcp
        value: '{{ ScanListenerPortTcp }}'
      - name: SshPublicKeys
        value:
          - '{{ SshPublicKeys[0] }}'
      - name: SystemVersion
        value: '{{ SystemVersion }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: TimeZone
        value: '{{ TimeZone }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.odb.cloud_vm_clusters
WHERE data__Identifier = '<CloudVmClusterArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>cloud_vm_clusters</code> resource, the following permissions are required:

### Create
```json
odb:CreateCloudVmCluster,
odb:TagResource,
odb:GetCloudVmCluster,
odb:ListCloudVmClusters,
odb:ListTagsForResource,
sts:GetCallerIdentity,
ec2:DescribeAvailabilityZones,
odb:CreateDbNode
```

### Read
```json
odb:GetCloudVmCluster,
odb:ListTagsForResource,
sts:GetCallerIdentity
```

### Update
```json
odb:TagResource,
odb:UntagResource,
odb:GetCloudVmCluster,
odb:ListCloudVmClusters,
odb:ListTagsForResource,
sts:GetCallerIdentity
```

### Delete
```json
odb:DeleteCloudVmCluster,
odb:GetCloudVmCluster,
odb:ListCloudVmClusters,
odb:ListTagsForResource,
sts:GetCallerIdentity,
odb:DeleteDbNode
```

### List
```json
odb:ListCloudVmClusters,
odb:ListTagsForResource,
sts:GetCallerIdentity
```
