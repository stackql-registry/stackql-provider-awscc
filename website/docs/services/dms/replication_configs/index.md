---
title: replication_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - replication_configs
  - dms
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

Creates, updates, deletes or gets a <code>replication_config</code> resource or lists <code>replication_configs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>replication_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A replication configuration that you later provide to configure and start a AWS DMS Serverless replication</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.dms.replication_configs" /></td></tr>
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
    "name": "replication_config_identifier",
    "type": "string",
    "description": "A unique identifier of replication configuration"
  },
  {
    "name": "replication_config_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the Replication Config"
  },
  {
    "name": "source_endpoint_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the source endpoint for this AWS DMS Serverless replication configuration"
  },
  {
    "name": "target_endpoint_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the target endpoint for this AWS DMS Serverless replication configuration"
  },
  {
    "name": "replication_type",
    "type": "string",
    "description": "The type of AWS DMS Serverless replication to provision using this replication configuration"
  },
  {
    "name": "compute_config",
    "type": "object",
    "description": "Configuration parameters for provisioning a AWS DMS Serverless replication",
    "children": [
      {
        "name": "availability_zone",
        "type": "string",
        "description": ""
      },
      {
        "name": "dns_name_servers",
        "type": "string",
        "description": ""
      },
      {
        "name": "kms_key_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "max_capacity_units",
        "type": "integer",
        "description": ""
      },
      {
        "name": "min_capacity_units",
        "type": "integer",
        "description": ""
      },
      {
        "name": "multi_az",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "preferred_maintenance_window",
        "type": "string",
        "description": ""
      },
      {
        "name": "replication_subnet_group_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "vpc_security_group_ids",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "replication_settings",
    "type": "object",
    "description": "JSON settings for Servereless replications that are provisioned using this replication configuration"
  },
  {
    "name": "supplemental_settings",
    "type": "object",
    "description": "JSON settings for specifying supplemental data"
  },
  {
    "name": "resource_identifier",
    "type": "string",
    "description": "A unique value or name that you get set for a given resource that can be used to construct an Amazon Resource Name (ARN) for that resource"
  },
  {
    "name": "table_mappings",
    "type": "object",
    "description": "JSON table mappings for AWS DMS Serverless replications that are provisioned using this replication configuration"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "<p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "<p>Tag key.</p>"
      },
      {
        "name": "value",
        "type": "string",
        "description": "<p>Tag value.</p>"
      }
    ]
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
    "name": "replication_config_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the Replication Config"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationconfig.html"><code>AWS::DMS::ReplicationConfig</code></a>.

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
    <td><code>replication_configs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ReplicationConfigIdentifier, SourceEndpointArn, TargetEndpointArn, ReplicationType, ComputeConfig, TableMappings, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>replication_configs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>replication_configs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>replication_configs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>replication_configs</code></td>
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

Gets all properties from an individual <code>replication_config</code>.
```sql
SELECT
region,
replication_config_identifier,
replication_config_arn,
source_endpoint_arn,
target_endpoint_arn,
replication_type,
compute_config,
replication_settings,
supplemental_settings,
resource_identifier,
table_mappings,
tags
FROM awscc.dms.replication_configs
WHERE region = 'us-east-1' AND Identifier = '<ReplicationConfigArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>replication_configs</code> in a region.
```sql
SELECT
region,
replication_config_arn
FROM awscc.dms.replication_configs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>replication_config</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.dms.replication_configs (
 ReplicationConfigIdentifier,
 SourceEndpointArn,
 TargetEndpointArn,
 ReplicationType,
 ComputeConfig,
 TableMappings,
 region
)
SELECT 
'{{ ReplicationConfigIdentifier }}',
 '{{ SourceEndpointArn }}',
 '{{ TargetEndpointArn }}',
 '{{ ReplicationType }}',
 '{{ ComputeConfig }}',
 '{{ TableMappings }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.dms.replication_configs (
 ReplicationConfigIdentifier,
 SourceEndpointArn,
 TargetEndpointArn,
 ReplicationType,
 ComputeConfig,
 ReplicationSettings,
 SupplementalSettings,
 ResourceIdentifier,
 TableMappings,
 Tags,
 region
)
SELECT 
 '{{ ReplicationConfigIdentifier }}',
 '{{ SourceEndpointArn }}',
 '{{ TargetEndpointArn }}',
 '{{ ReplicationType }}',
 '{{ ComputeConfig }}',
 '{{ ReplicationSettings }}',
 '{{ SupplementalSettings }}',
 '{{ ResourceIdentifier }}',
 '{{ TableMappings }}',
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
  - name: replication_config
    props:
      - name: ReplicationConfigIdentifier
        value: '{{ ReplicationConfigIdentifier }}'
      - name: SourceEndpointArn
        value: '{{ SourceEndpointArn }}'
      - name: TargetEndpointArn
        value: '{{ TargetEndpointArn }}'
      - name: ReplicationType
        value: '{{ ReplicationType }}'
      - name: ComputeConfig
        value:
          AvailabilityZone: '{{ AvailabilityZone }}'
          DnsNameServers: '{{ DnsNameServers }}'
          KmsKeyId: '{{ KmsKeyId }}'
          MaxCapacityUnits: '{{ MaxCapacityUnits }}'
          MinCapacityUnits: '{{ MinCapacityUnits }}'
          MultiAZ: '{{ MultiAZ }}'
          PreferredMaintenanceWindow: '{{ PreferredMaintenanceWindow }}'
          ReplicationSubnetGroupId: '{{ ReplicationSubnetGroupId }}'
          VpcSecurityGroupIds:
            - '{{ VpcSecurityGroupIds[0] }}'
      - name: ReplicationSettings
        value: {}
      - name: SupplementalSettings
        value: {}
      - name: ResourceIdentifier
        value: '{{ ResourceIdentifier }}'
      - name: TableMappings
        value: {}
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
UPDATE awscc.dms.replication_configs
SET PatchDocument = string('{{ {
    "ReplicationConfigIdentifier": replication_config_identifier,
    "SourceEndpointArn": source_endpoint_arn,
    "TargetEndpointArn": target_endpoint_arn,
    "ReplicationType": replication_type,
    "ComputeConfig": compute_config,
    "ReplicationSettings": replication_settings,
    "SupplementalSettings": supplemental_settings,
    "TableMappings": table_mappings,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ReplicationConfigArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.dms.replication_configs
WHERE Identifier = '<ReplicationConfigArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>replication_configs</code> resource, the following permissions are required:

### Create
```json
dms:CreateReplicationConfig,
dms:AddTagsToResource,
dms:ListTagsForResource,
iam:CreateServiceLinkedRole,
iam:AttachRolePolicy,
iam:PutRolePolicy,
iam:UpdateRoleDescription
```

### Read
```json
dms:DescribeReplicationConfigs,
dms:ListTagsForResource
```

### Update
```json
dms:ModifyReplicationConfig,
dms:AddTagsToResource,
dms:RemoveTagsFromResource,
dms:ListTagsForResource,
iam:CreateServiceLinkedRole,
iam:AttachRolePolicy,
iam:PutRolePolicy,
iam:UpdateRoleDescription
```

### List
```json
dms:DescribeReplicationConfigs,
dms:ListTagsForResource
```

### Delete
```json
dms:DescribeReplicationConfigs,
dms:DeleteReplicationConfig,
dms:ListTagsForResource,
iam:DeleteServiceLinkedRole,
iam:GetServiceLinkedRoleDeletionStatus
```
