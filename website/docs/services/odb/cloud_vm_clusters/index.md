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
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

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
    "name": "cloud_exadata_infrastructure_id",
    "type": "string",
    "description": "The unique identifier of the Exadata infrastructure that this VM cluster belongs to."
  },
  {
    "name": "cloud_vm_cluster_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the VM cluster."
  },
  {
    "name": "cloud_vm_cluster_id",
    "type": "string",
    "description": "The unique identifier of the VM cluster."
  },
  {
    "name": "cluster_name",
    "type": "string",
    "description": "The name of the Grid Infrastructure (GI) cluster."
  },
  {
    "name": "compute_model",
    "type": "string",
    "description": "The OCI model compute model used when you create or clone an instance: ECPU or OCPU. An ECPU is an abstracted measure of compute resources. ECPUs are based on the number of cores elastically allocated from a pool of compute and storage servers. An OCPU is a legacy physical measure of compute resources. OCPUs are based on the physical core of a processor with hyper-threading enabled."
  },
  {
    "name": "cpu_core_count",
    "type": "integer",
    "description": "The number of CPU cores enabled on the VM cluster."
  },
  {
    "name": "data_collection_options",
    "type": "object",
    "description": "The set of diagnostic collection options enabled for the VM cluster.",
    "children": [
      {
        "name": "is_diagnostics_events_enabled",
        "type": "boolean",
        "description": "Indicates whether diagnostic collection is enabled for the VM cluster."
      },
      {
        "name": "is_health_monitoring_enabled",
        "type": "boolean",
        "description": "Indicates whether health monitoring is enabled for the VM cluster."
      },
      {
        "name": "is_incident_logs_enabled",
        "type": "boolean",
        "description": "Indicates whether incident logs are enabled for the cloud VM cluster."
      }
    ]
  },
  {
    "name": "data_storage_size_in_tbs",
    "type": "number",
    "description": "The size of the data disk group, in terabytes (TB), that's allocated for the VM cluster."
  },
  {
    "name": "db_node_storage_size_in_gbs",
    "type": "integer",
    "description": "The amount of local node storage, in gigabytes (GB), that's allocated for the VM cluster."
  },
  {
    "name": "db_servers",
    "type": "array",
    "description": "The list of database servers for the VM cluster."
  },
  {
    "name": "display_name",
    "type": "string",
    "description": "The user-friendly name for the VM cluster."
  },
  {
    "name": "disk_redundancy",
    "type": "string",
    "description": "The type of redundancy configured for the VM cluster. NORMAL is 2-way redundancy. HIGH is 3-way redundancy."
  },
  {
    "name": "domain",
    "type": "string",
    "description": "The domain of the VM cluster."
  },
  {
    "name": "gi_version",
    "type": "string",
    "description": "The software version of the Oracle Grid Infrastructure (GI) for the VM cluster."
  },
  {
    "name": "hostname",
    "type": "string",
    "description": "The host name for the VM cluster."
  },
  {
    "name": "is_local_backup_enabled",
    "type": "boolean",
    "description": "Indicates whether database backups to local Exadata storage is enabled for the VM cluster."
  },
  {
    "name": "is_sparse_diskgroup_enabled",
    "type": "boolean",
    "description": "Indicates whether the VM cluster is configured with a sparse disk group."
  },
  {
    "name": "license_model",
    "type": "string",
    "description": "The Oracle license model applied to the VM cluster."
  },
  {
    "name": "listener_port",
    "type": "integer",
    "description": "The port number configured for the listener on the VM cluster."
  },
  {
    "name": "memory_size_in_gbs",
    "type": "integer",
    "description": "The amount of memory, in gigabytes (GB), that's allocated for the VM cluster."
  },
  {
    "name": "node_count",
    "type": "integer",
    "description": "The number of nodes in the VM cluster."
  },
  {
    "name": "odb_network_id",
    "type": "string",
    "description": "The unique identifier of the ODB network for the VM cluster."
  },
  {
    "name": "ocid",
    "type": "string",
    "description": "The OCID of the VM cluster."
  },
  {
    "name": "oci_resource_anchor_name",
    "type": "string",
    "description": "The name of the OCI resource anchor for the VM cluster."
  },
  {
    "name": "oci_url",
    "type": "string",
    "description": "The HTTPS link to the VM cluster in OCI."
  },
  {
    "name": "scan_dns_name",
    "type": "string",
    "description": "The FQDN of the DNS record for the Single Client Access Name (SCAN) IP addresses that are associated with the VM cluster."
  },
  {
    "name": "scan_ip_ids",
    "type": "array",
    "description": "The OCID of the SCAN IP addresses that are associated with the VM cluster."
  },
  {
    "name": "scan_listener_port_tcp",
    "type": "integer",
    "description": "Property description not available."
  },
  {
    "name": "shape",
    "type": "string",
    "description": "The hardware model name of the Exadata infrastructure that's running the VM cluster."
  },
  {
    "name": "ssh_public_keys",
    "type": "array",
    "description": "The public key portion of one or more key pairs used for SSH access to the VM cluster."
  },
  {
    "name": "storage_size_in_gbs",
    "type": "integer",
    "description": "The amount of local node storage, in gigabytes (GB), that's allocated to the VM cluster."
  },
  {
    "name": "system_version",
    "type": "string",
    "description": "The operating system version of the image chosen for the VM cluster."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags to assign to the Vm Cluster.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., :, /, =, +, @, -, and \"."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "time_zone",
    "type": "string",
    "description": "The time zone of the VM cluster."
  },
  {
    "name": "vip_ids",
    "type": "array",
    "description": "The virtual IP (VIP) addresses that are associated with the VM cluster. Oracle's Cluster Ready Services (CRS) creates and maintains one VIP address for each node in the VM cluster to enable failover. If one node fails, the VIP is reassigned to another active node in the cluster."
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
    "name": "cloud_vm_cluster_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the VM cluster."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-odb-cloudvmcluster.html"><code>AWS::ODB::CloudVmCluster</code></a>.

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
    <td><code>cloud_vm_clusters</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>cloud_vm_clusters</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>cloud_vm_clusters</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>cloud_vm_clusters_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>cloud_vm_clusters</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '<CloudVmClusterArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>cloud_vm_clusters</code> in a region.
```sql
SELECT
region,
cloud_vm_cluster_arn
FROM awscc.odb.cloud_vm_clusters_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>cloud_vm_cluster</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.odb.cloud_vm_clusters
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<CloudVmClusterArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.odb.cloud_vm_clusters
WHERE Identifier = '<CloudVmClusterArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>cloud_vm_clusters</code> resource, the following permissions are required:

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
odb:CreateCloudVmCluster,
odb:TagResource,
odb:GetCloudVmCluster,
odb:ListCloudVmClusters,
odb:ListTagsForResource,
sts:GetCallerIdentity,
ec2:DescribeAvailabilityZones,
odb:CreateDbNode
```

</TabItem>
<TabItem value="read">

```json
odb:GetCloudVmCluster,
odb:ListTagsForResource,
sts:GetCallerIdentity
```

</TabItem>
<TabItem value="update">

```json
odb:TagResource,
odb:UntagResource,
odb:GetCloudVmCluster,
odb:ListCloudVmClusters,
odb:ListTagsForResource,
sts:GetCallerIdentity
```

</TabItem>
<TabItem value="delete">

```json
odb:DeleteCloudVmCluster,
odb:GetCloudVmCluster,
odb:ListCloudVmClusters,
odb:ListTagsForResource,
sts:GetCallerIdentity,
odb:DeleteDbNode
```

</TabItem>
<TabItem value="list">

```json
odb:ListCloudVmClusters,
odb:ListTagsForResource,
sts:GetCallerIdentity
```

</TabItem>
</Tabs>