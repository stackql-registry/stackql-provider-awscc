---
title: db_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - db_instances
  - neptune
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

Creates, updates, deletes or gets a <code>db_instance</code> resource or lists <code>db_instances</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>db_instances</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::Neptune::DBInstance resource creates an Amazon Neptune DB instance.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.neptune.db_instances" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="allow_major_version_upgrade" /></td><td><code>boolean</code></td><td>Indicates that major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible. This parameter must be set to true when specifying a value for the EngineVersion parameter that is a different major version than the DB instance's current version.</td></tr>
<tr><td><CopyableCode code="auto_minor_version_upgrade" /></td><td><code>boolean</code></td><td>Indicates that minor version patches are applied automatically.<br />When updating this property, some interruptions may occur.</td></tr>
<tr><td><CopyableCode code="availability_zone" /></td><td><code>string</code></td><td>Specifies the name of the Availability Zone the DB instance is located in.</td></tr>
<tr><td><CopyableCode code="db_cluster_identifier" /></td><td><code>string</code></td><td>If the DB instance is a member of a DB cluster, contains the name of the DB cluster that the DB instance is a member of.</td></tr>
<tr><td><CopyableCode code="db_instance_class" /></td><td><code>string</code></td><td>Contains the name of the compute and memory capacity class of the DB instance.<br />If you update this property, some interruptions may occur.</td></tr>
<tr><td><CopyableCode code="db_instance_identifier" /></td><td><code>string</code></td><td>Contains a user-supplied database identifier. This identifier is the unique key that identifies a DB instance.</td></tr>
<tr><td><CopyableCode code="db_parameter_group_name" /></td><td><code>string</code></td><td>The name of an existing DB parameter group or a reference to an AWS::Neptune::DBParameterGroup resource created in the template. If any of the data members of the referenced parameter group are changed during an update, the DB instance might need to be restarted, which causes some interruption. If the parameter group contains static parameters, whether they were changed or not, an update triggers a reboot.</td></tr>
<tr><td><CopyableCode code="db_snapshot_identifier" /></td><td><code>string</code></td><td>This parameter is not supported.<br />`AWS::Neptune::DBInstance` does not support restoring from snapshots.<br />`AWS::Neptune::DBCluster` does support restoring from snapshots.<br /></td></tr>
<tr><td><CopyableCode code="db_subnet_group_name" /></td><td><code>string</code></td><td>A DB subnet group to associate with the DB instance. If you update this value, the new subnet group must be a subnet group in a new virtual private cloud (VPC).</td></tr>
<tr><td><CopyableCode code="endpoint" /></td><td><code>string</code></td><td>The connection endpoint for the database. For example: `mystack-mydb-1apw1j4phylrk.cg034hpkmmjt.us-east-2.rds.amazonaws.com`.</td></tr>
<tr><td><CopyableCode code="preferred_maintenance_window" /></td><td><code>string</code></td><td>Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</td></tr>
<tr><td><CopyableCode code="port" /></td><td><code>string</code></td><td>The port number on which the database accepts connections. For example: `8182`.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>An arbitrary set of tags (key-value pairs) for this DB instance.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbinstance.html"><code>AWS::Neptune::DBInstance</code></a>.

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
    <td><CopyableCode code="DBInstanceClass, region" /></td>
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
Gets all <code>db_instances</code> in a region.
```sql
SELECT
region,
allow_major_version_upgrade,
auto_minor_version_upgrade,
availability_zone,
db_cluster_identifier,
db_instance_class,
db_instance_identifier,
db_parameter_group_name,
db_snapshot_identifier,
db_subnet_group_name,
endpoint,
preferred_maintenance_window,
port,
tags
FROM awscc.neptune.db_instances
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>db_instance</code>.
```sql
SELECT
region,
allow_major_version_upgrade,
auto_minor_version_upgrade,
availability_zone,
db_cluster_identifier,
db_instance_class,
db_instance_identifier,
db_parameter_group_name,
db_snapshot_identifier,
db_subnet_group_name,
endpoint,
preferred_maintenance_window,
port,
tags
FROM awscc.neptune.db_instances
WHERE region = 'us-east-1' AND data__Identifier = '<DBInstanceIdentifier>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>db_instance</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.neptune.db_instances (
 DBInstanceClass,
 region
)
SELECT 
'{{ DBInstanceClass }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.neptune.db_instances (
 AllowMajorVersionUpgrade,
 AutoMinorVersionUpgrade,
 AvailabilityZone,
 DBClusterIdentifier,
 DBInstanceClass,
 DBInstanceIdentifier,
 DBParameterGroupName,
 DBSnapshotIdentifier,
 DBSubnetGroupName,
 PreferredMaintenanceWindow,
 Tags,
 region
)
SELECT 
 '{{ AllowMajorVersionUpgrade }}',
 '{{ AutoMinorVersionUpgrade }}',
 '{{ AvailabilityZone }}',
 '{{ DBClusterIdentifier }}',
 '{{ DBInstanceClass }}',
 '{{ DBInstanceIdentifier }}',
 '{{ DBParameterGroupName }}',
 '{{ DBSnapshotIdentifier }}',
 '{{ DBSubnetGroupName }}',
 '{{ PreferredMaintenanceWindow }}',
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
  - name: db_instance
    props:
      - name: AllowMajorVersionUpgrade
        value: '{{ AllowMajorVersionUpgrade }}'
      - name: AutoMinorVersionUpgrade
        value: '{{ AutoMinorVersionUpgrade }}'
      - name: AvailabilityZone
        value: '{{ AvailabilityZone }}'
      - name: DBClusterIdentifier
        value: '{{ DBClusterIdentifier }}'
      - name: DBInstanceClass
        value: '{{ DBInstanceClass }}'
      - name: DBInstanceIdentifier
        value: '{{ DBInstanceIdentifier }}'
      - name: DBParameterGroupName
        value: '{{ DBParameterGroupName }}'
      - name: DBSnapshotIdentifier
        value: '{{ DBSnapshotIdentifier }}'
      - name: DBSubnetGroupName
        value: '{{ DBSubnetGroupName }}'
      - name: PreferredMaintenanceWindow
        value: '{{ PreferredMaintenanceWindow }}'
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
DELETE FROM awscc.neptune.db_instances
WHERE data__Identifier = '<DBInstanceIdentifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>db_instances</code> resource, the following permissions are required:

### Create
```json
ec2:DescribeAccountAttributes,
ec2:DescribeAvailabilityZones,
ec2:DescribeInternetGateways,
iam:GetRole,
iam:ListRoles,
iam:PassRole,
rds:AddTagsToResource,
rds:CreateDBInstance,
rds:DescribeDBInstances,
rds:DescribeEvents,
rds:ListTagsForResource,
rds:ModifyDBInstance,
rds:RebootDBInstance,
iam:CreateServiceLinkedRole
```

### Read
```json
ec2:DescribeAccountAttributes,
ec2:DescribeAvailabilityZones,
ec2:DescribeInternetGateways,
rds:DescribeDBInstances,
rds:ListTagsForResource
```

### Update
```json
ec2:DescribeAccountAttributes,
ec2:DescribeAvailabilityZones,
ec2:DescribeInternetGateways,
iam:GetRole,
iam:ListRoles,
iam:PassRole,
rds:AddTagsToResource,
rds:DescribeDBClusters,
rds:DescribeDBInstances,
rds:DescribeDBParameterGroups,
rds:DescribeEvents,
rds:ListTagsForResource,
rds:ModifyDBInstance,
rds:RebootDBInstance,
rds:RemoveTagsFromResource
```

### Delete
```json
rds:AddTagsToResource,
rds:CreateDBSnapshot,
rds:DeleteDBInstance,
rds:DescribeDBInstances
```

### List
```json
rds:DescribeDBInstances,
rds:ListTagsForResource
```
