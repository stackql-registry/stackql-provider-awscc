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
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

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
    "name": "activated_storage_count",
    "type": "integer",
    "description": "The number of storage servers requested for the Exadata infrastructure."
  },
  {
    "name": "additional_storage_count",
    "type": "integer",
    "description": "The number of storage servers requested for the Exadata infrastructure."
  },
  {
    "name": "availability_zone",
    "type": "string",
    "description": "The name of the Availability Zone (AZ) where the Exadata infrastructure is located."
  },
  {
    "name": "availability_zone_id",
    "type": "string",
    "description": "The AZ ID of the AZ where the Exadata infrastructure is located."
  },
  {
    "name": "available_storage_size_in_gbs",
    "type": "integer",
    "description": "The amount of available storage, in gigabytes (GB), for the Exadata infrastructure."
  },
  {
    "name": "cloud_exadata_infrastructure_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the Exadata infrastructure."
  },
  {
    "name": "cloud_exadata_infrastructure_id",
    "type": "string",
    "description": "The unique identifier for the Exadata infrastructure."
  },
  {
    "name": "compute_count",
    "type": "integer",
    "description": "The number of database servers for the Exadata infrastructure."
  },
  {
    "name": "compute_model",
    "type": "string",
    "description": "The OCI model compute model used when you create or clone an instance: ECPU or OCPU. An ECPU is an abstracted measure of compute resources. ECPUs are based on the number of cores elastically allocated from a pool of compute and storage servers. An OCPU is a legacy physical measure of compute resources. OCPUs are based on the physical core of a processor with hyper-threading enabled."
  },
  {
    "name": "cpu_count",
    "type": "integer",
    "description": "The total number of CPU cores that are allocated to the Exadata infrastructure."
  },
  {
    "name": "customer_contacts_to_send_to_oc_i",
    "type": "array",
    "description": "The email addresses of contacts to receive notification from Oracle about maintenance updates for the Exadata infrastructure.",
    "children": [
      {
        "name": "email",
        "type": "string",
        "description": "The email address of the contact."
      }
    ]
  },
  {
    "name": "data_storage_size_in_tbs",
    "type": "number",
    "description": "The size of the Exadata infrastructure's data disk group, in terabytes (TB)."
  },
  {
    "name": "database_server_type",
    "type": "string",
    "description": "The database server model type of the Exadata infrastructure. For the list of valid model names, use the ListDbSystemShapes operation."
  },
  {
    "name": "db_node_storage_size_in_gbs",
    "type": "integer",
    "description": "The size of the Exadata infrastructure's local node storage, in gigabytes (GB)."
  },
  {
    "name": "db_server_version",
    "type": "string",
    "description": "The software version of the database servers (dom0) in the Exadata infrastructure."
  },
  {
    "name": "display_name",
    "type": "string",
    "description": "The user-friendly name for the Exadata infrastructure."
  },
  {
    "name": "max_cpu_count",
    "type": "integer",
    "description": "The total number of CPU cores available on the Exadata infrastructure."
  },
  {
    "name": "max_data_storage_in_tbs",
    "type": "number",
    "description": "The total amount of data disk group storage, in terabytes (TB), that's available on the Exadata infrastructure."
  },
  {
    "name": "max_db_node_storage_size_in_gbs",
    "type": "integer",
    "description": "The total amount of local node storage, in gigabytes (GB), that's available on the Exadata infrastructure."
  },
  {
    "name": "max_memory_in_gbs",
    "type": "integer",
    "description": "The total amount of memory, in gigabytes (GB), that's available on the Exadata infrastructure."
  },
  {
    "name": "memory_size_in_gbs",
    "type": "integer",
    "description": "The amount of memory, in gigabytes (GB), that's allocated on the Exadata infrastructure."
  },
  {
    "name": "oci_resource_anchor_name",
    "type": "string",
    "description": "The name of the OCI resource anchor for the Exadata infrastructure."
  },
  {
    "name": "oci_url",
    "type": "string",
    "description": "The HTTPS link to the Exadata infrastructure in OCI."
  },
  {
    "name": "ocid",
    "type": "string",
    "description": "The OCID of the Exadata infrastructure."
  },
  {
    "name": "shape",
    "type": "string",
    "description": "The model name of the Exadata infrastructure."
  },
  {
    "name": "storage_count",
    "type": "integer",
    "description": "The number of storage servers that are activated for the Exadata infrastructure."
  },
  {
    "name": "storage_server_type",
    "type": "string",
    "description": "The storage server model type of the Exadata infrastructure. For the list of valid model names, use the ListDbSystemShapes operation."
  },
  {
    "name": "storage_server_version",
    "type": "string",
    "description": "The software version of the storage servers on the Exadata infrastructure."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags to assign to the Exadata Infrastructure.",
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
    "name": "total_storage_size_in_gbs",
    "type": "integer",
    "description": "The total amount of storage, in gigabytes (GB), on the the Exadata infrastructure."
  },
  {
    "name": "db_server_ids",
    "type": "array",
    "description": "The list of database server identifiers for the Exadata infrastructure."
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
    "name": "cloud_exadata_infrastructure_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the Exadata infrastructure."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-odb-cloudexadatainfrastructure.html"><code>AWS::ODB::CloudExadataInfrastructure</code></a>.

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
    <td><code>cloud_exadata_infrastructures</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>cloud_exadata_infrastructures</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>cloud_exadata_infrastructures</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>cloud_exadata_infrastructures_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>cloud_exadata_infrastructures</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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
</TabItem>
<TabItem value="list">

Lists all <code>cloud_exadata_infrastructures</code> in a region.
```sql
SELECT
region,
cloud_exadata_infrastructure_arn
FROM awscc.odb.cloud_exadata_infrastructures_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.odb.cloud_exadata_infrastructures
SET data__PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<CloudExadataInfrastructureArn>';
```


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
