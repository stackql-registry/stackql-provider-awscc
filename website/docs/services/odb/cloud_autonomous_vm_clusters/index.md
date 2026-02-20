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
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

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
    "name": "cloud_autonomous_vm_cluster_id",
    "type": "string",
    "description": "The unique identifier of the Autonomous VM cluster."
  },
  {
    "name": "cloud_autonomous_vm_cluster_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the Autonomous VM cluster."
  },
  {
    "name": "odb_network_id",
    "type": "string",
    "description": "The unique identifier of the ODB network associated with this Autonomous VM cluster."
  },
  {
    "name": "oci_resource_anchor_name",
    "type": "string",
    "description": "The name of the OCI resource anchor associated with this Autonomous VM cluster."
  },
  {
    "name": "display_name",
    "type": "string",
    "description": "The display name of the Autonomous VM cluster."
  },
  {
    "name": "cloud_exadata_infrastructure_id",
    "type": "string",
    "description": "The unique identifier of the Cloud Exadata Infrastructure containing this Autonomous VM cluster."
  },
  {
    "name": "autonomous_data_storage_percentage",
    "type": "number",
    "description": "The percentage of data storage currently in use for Autonomous Databases in the Autonomous VM cluster."
  },
  {
    "name": "autonomous_data_storage_size_in_tbs",
    "type": "number",
    "description": "The data storage size allocated for Autonomous Databases in the Autonomous VM cluster, in TB."
  },
  {
    "name": "available_autonomous_data_storage_size_in_tbs",
    "type": "number",
    "description": "The available data storage space for Autonomous Databases in the Autonomous VM cluster, in TB."
  },
  {
    "name": "available_container_databases",
    "type": "integer",
    "description": "The number of Autonomous CDBs that you can create with the currently available storage."
  },
  {
    "name": "available_cpus",
    "type": "number",
    "description": "The number of CPU cores available for allocation to Autonomous Databases."
  },
  {
    "name": "compute_model",
    "type": "string",
    "description": "The compute model of the Autonomous VM cluster: ECPU or OCPU."
  },
  {
    "name": "cpu_core_count",
    "type": "integer",
    "description": "The total number of CPU cores in the Autonomous VM cluster."
  },
  {
    "name": "cpu_core_count_per_node",
    "type": "integer",
    "description": "The number of CPU cores enabled per node in the Autonomous VM cluster."
  },
  {
    "name": "cpu_percentage",
    "type": "number",
    "description": "The percentage of total CPU cores currently in use in the Autonomous VM cluster."
  },
  {
    "name": "data_storage_size_in_gbs",
    "type": "number",
    "description": "The total data storage allocated to the Autonomous VM cluster, in GB."
  },
  {
    "name": "data_storage_size_in_tbs",
    "type": "number",
    "description": "The total data storage allocated to the Autonomous VM cluster, in TB."
  },
  {
    "name": "db_node_storage_size_in_gbs",
    "type": "integer",
    "description": "The local node storage allocated to the Autonomous VM cluster, in gigabytes (GB)."
  },
  {
    "name": "db_servers",
    "type": "array",
    "description": "The list of database servers associated with the Autonomous VM cluster."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The user-provided description of the Autonomous VM cluster."
  },
  {
    "name": "domain",
    "type": "string",
    "description": "The domain name for the Autonomous VM cluster."
  },
  {
    "name": "exadata_storage_in_tbs_lowest_scaled_value",
    "type": "number",
    "description": "The minimum value to which you can scale down the Exadata storage, in TB."
  },
  {
    "name": "hostname",
    "type": "string",
    "description": "The hostname for the Autonomous VM cluster."
  },
  {
    "name": "ocid",
    "type": "string",
    "description": "The Oracle Cloud Identifier (OCID) of the Autonomous VM cluster."
  },
  {
    "name": "oci_url",
    "type": "string",
    "description": "The URL for accessing the OCI console page for this Autonomous VM cluster."
  },
  {
    "name": "is_mtls_enabled_vm_cluster",
    "type": "boolean",
    "description": "Indicates whether mutual TLS (mTLS) authentication is enabled for the Autonomous VM cluster."
  },
  {
    "name": "license_model",
    "type": "string",
    "description": "The Oracle license model that applies to the Autonomous VM cluster. Valid values are LICENSE&#95;INCLUDED or BRING&#95;YOUR&#95;OWN&#95;LICENSE."
  },
  {
    "name": "maintenance_window",
    "type": "object",
    "description": "The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window.",
    "children": [
      {
        "name": "days_of_week",
        "type": "array",
        "description": "The days of the week when maintenance can be performed."
      },
      {
        "name": "hours_of_day",
        "type": "array",
        "description": "The hours of the day when maintenance can be performed."
      },
      {
        "name": "lead_time_in_weeks",
        "type": "integer",
        "description": "The lead time in weeks before the maintenance window."
      },
      {
        "name": "months",
        "type": "array",
        "description": "The months when maintenance can be performed."
      },
      {
        "name": "preference",
        "type": "string",
        "description": "The preference for the maintenance window scheduling."
      },
      {
        "name": "weeks_of_month",
        "type": "array",
        "description": "The weeks of the month when maintenance can be performed."
      }
    ]
  },
  {
    "name": "max_acds_lowest_scaled_value",
    "type": "integer",
    "description": "The minimum value to which you can scale down the maximum number of Autonomous CDBs."
  },
  {
    "name": "memory_per_oracle_compute_unit_in_gbs",
    "type": "integer",
    "description": "The amount of memory allocated per Oracle Compute Unit, in GB."
  },
  {
    "name": "memory_size_in_gbs",
    "type": "integer",
    "description": "The total amount of memory allocated to the Autonomous VM cluster, in gigabytes (GB)."
  },
  {
    "name": "node_count",
    "type": "integer",
    "description": "The number of database server nodes in the Autonomous VM cluster."
  },
  {
    "name": "non_provisionable_autonomous_container_databases",
    "type": "integer",
    "description": "The number of Autonomous CDBs that can't be provisioned because of resource constraints."
  },
  {
    "name": "provisionable_autonomous_container_databases",
    "type": "integer",
    "description": "The number of Autonomous CDBs that can be provisioned in the Autonomous VM cluster."
  },
  {
    "name": "provisioned_autonomous_container_databases",
    "type": "integer",
    "description": "The number of Autonomous CDBs currently provisioned in the Autonomous VM cluster."
  },
  {
    "name": "provisioned_cpus",
    "type": "number",
    "description": "The number of CPU cores currently provisioned in the Autonomous VM cluster."
  },
  {
    "name": "reclaimable_cpus",
    "type": "number",
    "description": "The number of CPU cores that can be reclaimed from terminated or scaled-down Autonomous Databases."
  },
  {
    "name": "reserved_cpus",
    "type": "number",
    "description": "The number of CPU cores reserved for system operations and redundancy."
  },
  {
    "name": "scan_listener_port_non_tls",
    "type": "integer",
    "description": "The SCAN listener port for non-TLS (TCP) protocol. The default is 1521."
  },
  {
    "name": "scan_listener_port_tls",
    "type": "integer",
    "description": "The SCAN listener port for TLS (TCP) protocol. The default is 2484."
  },
  {
    "name": "shape",
    "type": "string",
    "description": "The shape of the Exadata infrastructure for the Autonomous VM cluster."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags associated with the Autonomous VM cluster.",
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
    "description": "The time zone of the Autonomous VM cluster."
  },
  {
    "name": "total_container_databases",
    "type": "integer",
    "description": "The total number of Autonomous Container Databases that can be created with the allocated local storage."
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
    "name": "cloud_autonomous_vm_cluster_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the Autonomous VM cluster."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-odb-cloudautonomousvmcluster.html"><code>AWS::ODB::CloudAutonomousVmCluster</code></a>.

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
    <td><code>cloud_autonomous_vm_clusters</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>cloud_autonomous_vm_clusters</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>cloud_autonomous_vm_clusters</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>cloud_autonomous_vm_clusters_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>cloud_autonomous_vm_clusters</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '<CloudAutonomousVmClusterArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>cloud_autonomous_vm_clusters</code> in a region.
```sql
SELECT
region,
cloud_autonomous_vm_cluster_arn
FROM awscc.odb.cloud_autonomous_vm_clusters_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.odb.cloud_autonomous_vm_clusters
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<CloudAutonomousVmClusterArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.odb.cloud_autonomous_vm_clusters
WHERE Identifier = '<CloudAutonomousVmClusterArn>'
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
