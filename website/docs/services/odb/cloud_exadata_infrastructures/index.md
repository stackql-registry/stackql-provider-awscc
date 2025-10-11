---
title: cloud_exadata_infrastructures
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_exadata_infrastructures
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

Creates, updates, deletes or gets a <code>cloud_exadata_infrastructure</code> resource or lists <code>cloud_exadata_infrastructures</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>cloud_exadata_infrastructures</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::ODB::CloudExadataInfrastructure resource creates an Exadata Infrastructure</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.odb.cloud_exadata_infrastructures" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="activated_storage_count" /></td><td><code>integer</code></td><td>The number of storage servers requested for the Exadata infrastructure.</td></tr>
<tr><td><CopyableCode code="additional_storage_count" /></td><td><code>integer</code></td><td>The number of storage servers requested for the Exadata infrastructure.</td></tr>
<tr><td><CopyableCode code="availability_zone" /></td><td><code>string</code></td><td>The name of the Availability Zone (AZ) where the Exadata infrastructure is located.</td></tr>
<tr><td><CopyableCode code="availability_zone_id" /></td><td><code>string</code></td><td>The AZ ID of the AZ where the Exadata infrastructure is located.</td></tr>
<tr><td><CopyableCode code="available_storage_size_in_gbs" /></td><td><code>integer</code></td><td>The amount of available storage, in gigabytes (GB), for the Exadata infrastructure.</td></tr>
<tr><td><CopyableCode code="cloud_exadata_infrastructure_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) for the Exadata infrastructure.</td></tr>
<tr><td><CopyableCode code="cloud_exadata_infrastructure_id" /></td><td><code>string</code></td><td>The unique identifier for the Exadata infrastructure.</td></tr>
<tr><td><CopyableCode code="compute_count" /></td><td><code>integer</code></td><td>The number of database servers for the Exadata infrastructure.</td></tr>
<tr><td><CopyableCode code="compute_model" /></td><td><code>string</code></td><td>The OCI model compute model used when you create or clone an instance: ECPU or OCPU. An ECPU is an abstracted measure of compute resources. ECPUs are based on the number of cores elastically allocated from a pool of compute and storage servers. An OCPU is a legacy physical measure of compute resources. OCPUs are based on the physical core of a processor with hyper-threading enabled.</td></tr>
<tr><td><CopyableCode code="cpu_count" /></td><td><code>integer</code></td><td>The total number of CPU cores that are allocated to the Exadata infrastructure.</td></tr>
<tr><td><CopyableCode code="customer_contacts_to_send_to_oc_i" /></td><td><code>array</code></td><td>The email addresses of contacts to receive notification from Oracle about maintenance updates for the Exadata infrastructure.</td></tr>
<tr><td><CopyableCode code="data_storage_size_in_tbs" /></td><td><code>number</code></td><td>The size of the Exadata infrastructure's data disk group, in terabytes (TB).</td></tr>
<tr><td><CopyableCode code="database_server_type" /></td><td><code>string</code></td><td>The database server model type of the Exadata infrastructure. For the list of valid model names, use the ListDbSystemShapes operation.</td></tr>
<tr><td><CopyableCode code="db_node_storage_size_in_gbs" /></td><td><code>integer</code></td><td>The size of the Exadata infrastructure's local node storage, in gigabytes (GB).</td></tr>
<tr><td><CopyableCode code="db_server_version" /></td><td><code>string</code></td><td>The software version of the database servers (dom0) in the Exadata infrastructure.</td></tr>
<tr><td><CopyableCode code="display_name" /></td><td><code>string</code></td><td>The user-friendly name for the Exadata infrastructure.</td></tr>
<tr><td><CopyableCode code="max_cpu_count" /></td><td><code>integer</code></td><td>The total number of CPU cores available on the Exadata infrastructure.</td></tr>
<tr><td><CopyableCode code="max_data_storage_in_tbs" /></td><td><code>number</code></td><td>The total amount of data disk group storage, in terabytes (TB), that's available on the Exadata infrastructure.</td></tr>
<tr><td><CopyableCode code="max_db_node_storage_size_in_gbs" /></td><td><code>integer</code></td><td>The total amount of local node storage, in gigabytes (GB), that's available on the Exadata infrastructure.</td></tr>
<tr><td><CopyableCode code="max_memory_in_gbs" /></td><td><code>integer</code></td><td>The total amount of memory, in gigabytes (GB), that's available on the Exadata infrastructure.</td></tr>
<tr><td><CopyableCode code="memory_size_in_gbs" /></td><td><code>integer</code></td><td>The amount of memory, in gigabytes (GB), that's allocated on the Exadata infrastructure.</td></tr>
<tr><td><CopyableCode code="oci_resource_anchor_name" /></td><td><code>string</code></td><td>The name of the OCI resource anchor for the Exadata infrastructure.</td></tr>
<tr><td><CopyableCode code="oci_url" /></td><td><code>string</code></td><td>The HTTPS link to the Exadata infrastructure in OCI.</td></tr>
<tr><td><CopyableCode code="ocid" /></td><td><code>string</code></td><td>The OCID of the Exadata infrastructure.</td></tr>
<tr><td><CopyableCode code="shape" /></td><td><code>string</code></td><td>The model name of the Exadata infrastructure.</td></tr>
<tr><td><CopyableCode code="storage_count" /></td><td><code>integer</code></td><td>The number of storage servers that are activated for the Exadata infrastructure.</td></tr>
<tr><td><CopyableCode code="storage_server_type" /></td><td><code>string</code></td><td>The storage server model type of the Exadata infrastructure. For the list of valid model names, use the ListDbSystemShapes operation.</td></tr>
<tr><td><CopyableCode code="storage_server_version" /></td><td><code>string</code></td><td>The software version of the storage servers on the Exadata infrastructure.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>Tags to assign to the Exadata Infrastructure.</td></tr>
<tr><td><CopyableCode code="total_storage_size_in_gbs" /></td><td><code>integer</code></td><td>The total amount of storage, in gigabytes (GB), on the the Exadata infrastructure.</td></tr>
<tr><td><CopyableCode code="db_server_ids" /></td><td><code>array</code></td><td>The list of database server identifiers for the Exadata infrastructure.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-odb-cloudexadatainfrastructure.html"><code>AWS::ODB::CloudExadataInfrastructure</code></a>.

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
Gets all <code>cloud_exadata_infrastructures</code> in a region.
```sql
SELECT
region,
activated_storage_count,
additional_storage_count,
availability_zone,
availability_zone_id,
available_storage_size_in_gbs,
cloud_exadata_infrastructure_arn,
cloud_exadata_infrastructure_id,
compute_count,
compute_model,
cpu_count,
customer_contacts_to_send_to_oc_i,
data_storage_size_in_tbs,
database_server_type,
db_node_storage_size_in_gbs,
db_server_version,
display_name,
max_cpu_count,
max_data_storage_in_tbs,
max_db_node_storage_size_in_gbs,
max_memory_in_gbs,
memory_size_in_gbs,
oci_resource_anchor_name,
oci_url,
ocid,
shape,
storage_count,
storage_server_type,
storage_server_version,
tags,
total_storage_size_in_gbs,
db_server_ids
FROM awscc.odb.cloud_exadata_infrastructures
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>cloud_exadata_infrastructure</code>.
```sql
SELECT
region,
activated_storage_count,
additional_storage_count,
availability_zone,
availability_zone_id,
available_storage_size_in_gbs,
cloud_exadata_infrastructure_arn,
cloud_exadata_infrastructure_id,
compute_count,
compute_model,
cpu_count,
customer_contacts_to_send_to_oc_i,
data_storage_size_in_tbs,
database_server_type,
db_node_storage_size_in_gbs,
db_server_version,
display_name,
max_cpu_count,
max_data_storage_in_tbs,
max_db_node_storage_size_in_gbs,
max_memory_in_gbs,
memory_size_in_gbs,
oci_resource_anchor_name,
oci_url,
ocid,
shape,
storage_count,
storage_server_type,
storage_server_version,
tags,
total_storage_size_in_gbs,
db_server_ids
FROM awscc.odb.cloud_exadata_infrastructures
WHERE region = 'us-east-1' AND data__Identifier = '<CloudExadataInfrastructureArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>cloud_exadata_infrastructure</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.odb.cloud_exadata_infrastructures (
 AvailabilityZone,
 AvailabilityZoneId,
 ComputeCount,
 CustomerContactsToSendToOCI,
 DatabaseServerType,
 DisplayName,
 Shape,
 StorageCount,
 StorageServerType,
 Tags,
 region
)
SELECT 
'{{ AvailabilityZone }}',
 '{{ AvailabilityZoneId }}',
 '{{ ComputeCount }}',
 '{{ CustomerContactsToSendToOCI }}',
 '{{ DatabaseServerType }}',
 '{{ DisplayName }}',
 '{{ Shape }}',
 '{{ StorageCount }}',
 '{{ StorageServerType }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.odb.cloud_exadata_infrastructures (
 AvailabilityZone,
 AvailabilityZoneId,
 ComputeCount,
 CustomerContactsToSendToOCI,
 DatabaseServerType,
 DisplayName,
 Shape,
 StorageCount,
 StorageServerType,
 Tags,
 region
)
SELECT 
 '{{ AvailabilityZone }}',
 '{{ AvailabilityZoneId }}',
 '{{ ComputeCount }}',
 '{{ CustomerContactsToSendToOCI }}',
 '{{ DatabaseServerType }}',
 '{{ DisplayName }}',
 '{{ Shape }}',
 '{{ StorageCount }}',
 '{{ StorageServerType }}',
 '{{ Tags }}',
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
  - name: cloud_exadata_infrastructure
    props:
      - name: AvailabilityZone
        value: '{{ AvailabilityZone }}'
      - name: AvailabilityZoneId
        value: '{{ AvailabilityZoneId }}'
      - name: ComputeCount
        value: '{{ ComputeCount }}'
      - name: CustomerContactsToSendToOCI
        value:
          - Email: '{{ Email }}'
      - name: DatabaseServerType
        value: '{{ DatabaseServerType }}'
      - name: DisplayName
        value: '{{ DisplayName }}'
      - name: Shape
        value: '{{ Shape }}'
      - name: StorageCount
        value: '{{ StorageCount }}'
      - name: StorageServerType
        value: '{{ StorageServerType }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.odb.cloud_exadata_infrastructures
WHERE data__Identifier = '<CloudExadataInfrastructureArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>cloud_exadata_infrastructures</code> resource, the following permissions are required:

### Create
```json
odb:CreateCloudExadataInfrastructure,
ec2:DescribeAvailabilityZones,
iam:CreateServiceLinkedRole,
odb:ListCloudExadataInfrastructures,
odb:GetCloudExadataInfrastructure,
odb:ListDbServers,
odb:TagResource,
sts:GetCallerIdentity,
odb:ListTagsForResource
```

### Read
```json
odb:GetCloudExadataInfrastructure,
odb:ListDbServers,
sts:GetCallerIdentity,
odb:ListTagsForResource
```

### Update
```json
odb:UpdateCloudExadataInfrastructure,
odb:TagResource,
odb:UntagResource,
odb:ListCloudExadataInfrastructures,
odb:GetCloudExadataInfrastructure,
odb:ListDbServers,
sts:GetCallerIdentity,
odb:ListTagsForResource
```

### Delete
```json
odb:DeleteCloudExadataInfrastructure,
odb:ListCloudExadataInfrastructures,
odb:GetCloudExadataInfrastructure,
odb:ListDbServers,
sts:GetCallerIdentity,
odb:ListTagsForResource
```

### List
```json
odb:ListCloudExadataInfrastructures,
sts:GetCallerIdentity,
odb:ListTagsForResource,
odb:ListDbServers
```
