---
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - docdbelastic
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
<tr><td><b>Description</b></td><td>The AWS::DocDBElastic::Cluster Amazon DocumentDB (with MongoDB compatibility) Elastic Scale resource describes a Cluster</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.docdbelastic.clusters" /></td></tr>
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
    "name": "cluster_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "cluster_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "cluster_endpoint",
    "type": "string",
    "description": ""
  },
  {
    "name": "admin_user_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "admin_user_password",
    "type": "string",
    "description": ""
  },
  {
    "name": "shard_capacity",
    "type": "integer",
    "description": ""
  },
  {
    "name": "shard_count",
    "type": "integer",
    "description": ""
  },
  {
    "name": "vpc_security_group_ids",
    "type": "array",
    "description": ""
  },
  {
    "name": "subnet_ids",
    "type": "array",
    "description": ""
  },
  {
    "name": "preferred_maintenance_window",
    "type": "string",
    "description": ""
  },
  {
    "name": "preferred_backup_window",
    "type": "string",
    "description": ""
  },
  {
    "name": "backup_retention_period",
    "type": "integer",
    "description": ""
  },
  {
    "name": "shard_instance_count",
    "type": "integer",
    "description": ""
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "auth_type",
    "type": "string",
    "description": ""
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
    "name": "cluster_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html"><code>AWS::DocDBElastic::Cluster</code></a>.

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
    <td><CopyableCode code="ClusterName, AdminUserName, ShardCapacity, ShardCount, AuthType, region" /></td>
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
cluster_name,
cluster_arn,
cluster_endpoint,
admin_user_name,
admin_user_password,
shard_capacity,
shard_count,
vpc_security_group_ids,
subnet_ids,
preferred_maintenance_window,
preferred_backup_window,
backup_retention_period,
shard_instance_count,
kms_key_id,
tags,
auth_type
FROM awscc.docdbelastic.clusters
WHERE region = 'us-east-1' AND Identifier = '<ClusterArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>clusters</code> in a region.
```sql
SELECT
region,
cluster_arn
FROM awscc.docdbelastic.clusters_list_only
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
INSERT INTO awscc.docdbelastic.clusters (
 ClusterName,
 AdminUserName,
 ShardCapacity,
 ShardCount,
 AuthType,
 region
)
SELECT 
'{{ ClusterName }}',
 '{{ AdminUserName }}',
 '{{ ShardCapacity }}',
 '{{ ShardCount }}',
 '{{ AuthType }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.docdbelastic.clusters (
 ClusterName,
 AdminUserName,
 AdminUserPassword,
 ShardCapacity,
 ShardCount,
 VpcSecurityGroupIds,
 SubnetIds,
 PreferredMaintenanceWindow,
 PreferredBackupWindow,
 BackupRetentionPeriod,
 ShardInstanceCount,
 KmsKeyId,
 Tags,
 AuthType,
 region
)
SELECT 
 '{{ ClusterName }}',
 '{{ AdminUserName }}',
 '{{ AdminUserPassword }}',
 '{{ ShardCapacity }}',
 '{{ ShardCount }}',
 '{{ VpcSecurityGroupIds }}',
 '{{ SubnetIds }}',
 '{{ PreferredMaintenanceWindow }}',
 '{{ PreferredBackupWindow }}',
 '{{ BackupRetentionPeriod }}',
 '{{ ShardInstanceCount }}',
 '{{ KmsKeyId }}',
 '{{ Tags }}',
 '{{ AuthType }}',
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
      - name: ClusterName
        value: '{{ ClusterName }}'
      - name: AdminUserName
        value: '{{ AdminUserName }}'
      - name: AdminUserPassword
        value: '{{ AdminUserPassword }}'
      - name: ShardCapacity
        value: '{{ ShardCapacity }}'
      - name: ShardCount
        value: '{{ ShardCount }}'
      - name: VpcSecurityGroupIds
        value:
          - '{{ VpcSecurityGroupIds[0] }}'
      - name: SubnetIds
        value:
          - '{{ SubnetIds[0] }}'
      - name: PreferredMaintenanceWindow
        value: '{{ PreferredMaintenanceWindow }}'
      - name: PreferredBackupWindow
        value: '{{ PreferredBackupWindow }}'
      - name: BackupRetentionPeriod
        value: '{{ BackupRetentionPeriod }}'
      - name: ShardInstanceCount
        value: '{{ ShardInstanceCount }}'
      - name: KmsKeyId
        value: '{{ KmsKeyId }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: AuthType
        value: '{{ AuthType }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>cluster</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.docdbelastic.clusters
SET PatchDocument = string('{{ {
    "AdminUserPassword": admin_user_password,
    "ShardCapacity": shard_capacity,
    "ShardCount": shard_count,
    "VpcSecurityGroupIds": vpc_security_group_ids,
    "SubnetIds": subnet_ids,
    "PreferredMaintenanceWindow": preferred_maintenance_window,
    "PreferredBackupWindow": preferred_backup_window,
    "BackupRetentionPeriod": backup_retention_period,
    "ShardInstanceCount": shard_instance_count,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ClusterArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.docdbelastic.clusters
WHERE Identifier = '<ClusterArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>clusters</code> resource, the following permissions are required:

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
docdb-elastic:CreateCluster,
docdb-elastic:TagResource,
docdb-elastic:GetCluster,
docdb-elastic:ListTagsForResource,
ec2:CreateVpcEndpoint,
ec2:DescribeVpcEndpoints,
ec2:DeleteVpcEndpoints,
ec2:ModifyVpcEndpoint,
ec2:DescribeSecurityGroups,
ec2:DescribeSubnets,
ec2:DescribeVpcAttribute,
ec2:DescribeVpcs,
ec2:DescribeAvailabilityZones,
secretsmanager:ListSecrets,
secretsmanager:ListSecretVersionIds,
secretsmanager:DescribeSecret,
secretsmanager:GetSecretValue,
secretsmanager:GetResourcePolicy,
kms:DescribeKey,
kms:CreateGrant,
kms:GenerateDataKey,
kms:Decrypt,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="read">

```json
docdb-elastic:GetCluster,
docdb-elastic:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
docdb-elastic:UpdateCluster,
docdb-elastic:TagResource,
docdb-elastic:UntagResource,
docdb-elastic:GetCluster,
docdb-elastic:ListTagsForResource,
ec2:CreateVpcEndpoint,
ec2:DescribeVpcEndpoints,
ec2:DeleteVpcEndpoints,
ec2:ModifyVpcEndpoint,
ec2:DescribeSecurityGroups,
ec2:DescribeSubnets,
ec2:DescribeVpcAttribute,
ec2:DescribeVpcs,
ec2:DescribeAvailabilityZones,
secretsmanager:ListSecrets,
secretsmanager:ListSecretVersionIds,
secretsmanager:DescribeSecret,
secretsmanager:GetSecretValue,
secretsmanager:GetResourcePolicy,
kms:DescribeKey,
kms:CreateGrant,
kms:GenerateDataKey,
kms:Decrypt
```

</TabItem>
<TabItem value="delete">

```json
docdb-elastic:DeleteCluster,
docdb-elastic:GetCluster,
ec2:DescribeVpcEndpoints,
ec2:DeleteVpcEndpoints,
ec2:ModifyVpcEndpoint,
ec2:DescribeSecurityGroups,
ec2:DescribeSubnets,
ec2:DescribeVpcAttribute,
ec2:DescribeVpcs,
ec2:DescribeAvailabilityZones
```

</TabItem>
<TabItem value="list">

```json
docdb-elastic:ListClusters
```

</TabItem>
</Tabs>