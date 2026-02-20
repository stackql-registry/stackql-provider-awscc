---
title: influxdb_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - influxdb_instances
  - timestream
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

Creates, updates, deletes or gets an <code>influxdb_instance</code> resource or lists <code>influxdb_instances</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>influxdb_instances</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::Timestream::InfluxDBInstance resource creates an InfluxDB instance.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.timestream.influxdb_instances" /></td></tr>
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
    "name": "username",
    "type": "string",
    "description": "The username for the InfluxDB instance."
  },
  {
    "name": "password",
    "type": "string",
    "description": "The password for the InfluxDB instance."
  },
  {
    "name": "organization",
    "type": "string",
    "description": "The organization for the InfluxDB instance."
  },
  {
    "name": "bucket",
    "type": "string",
    "description": "The bucket for the InfluxDB instance."
  },
  {
    "name": "db_instance_type",
    "type": "string",
    "description": "The compute instance of the InfluxDB instance."
  },
  {
    "name": "vpc_subnet_ids",
    "type": "array",
    "description": "A list of EC2 subnet IDs for this InfluxDB instance."
  },
  {
    "name": "vpc_security_group_ids",
    "type": "array",
    "description": "A list of Amazon EC2 VPC security groups to associate with this InfluxDB instance."
  },
  {
    "name": "publicly_accessible",
    "type": "boolean",
    "description": "Attach a public IP to the customer ENI."
  },
  {
    "name": "db_storage_type",
    "type": "string",
    "description": "The storage type of the InfluxDB instance."
  },
  {
    "name": "allocated_storage",
    "type": "integer",
    "description": "The allocated storage for the InfluxDB instance."
  },
  {
    "name": "db_parameter_group_identifier",
    "type": "string",
    "description": "The name of an existing InfluxDB parameter group."
  },
  {
    "name": "port",
    "type": "integer",
    "description": "The port number on which InfluxDB accepts connections."
  },
  {
    "name": "network_type",
    "type": "string",
    "description": "Network type of the InfluxDB Instance."
  },
  {
    "name": "log_delivery_configuration",
    "type": "object",
    "description": "Configuration for sending logs to customer account from the InfluxDB instance.",
    "children": [
      {
        "name": "s3_configuration",
        "type": "object",
        "description": "S3 configuration for sending logs to customer account from the InfluxDB instance.",
        "children": [
          {
            "name": "bucket_name",
            "type": "string",
            "description": "The bucket name for logs to be sent from the InfluxDB instance"
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": "Specifies whether logging to customer specified bucket is enabled."
          }
        ]
      }
    ]
  },
  {
    "name": "status",
    "type": "string",
    "description": "Status of the InfluxDB Instance."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) that is associated with the InfluxDB instance."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The unique name that is associated with the InfluxDB instance."
  },
  {
    "name": "availability_zone",
    "type": "string",
    "description": "The Availability Zone (AZ) where the InfluxDB instance is created."
  },
  {
    "name": "secondary_availability_zone",
    "type": "string",
    "description": "The Secondary Availability Zone (AZ) where the InfluxDB instance is created, if DeploymentType is set as WITH&#95;MULTIAZ&#95;STANDBY."
  },
  {
    "name": "endpoint",
    "type": "string",
    "description": "The connection endpoint for the InfluxDB instance."
  },
  {
    "name": "influx_auth_parameters_secret_arn",
    "type": "string",
    "description": "The Auth parameters secret Amazon Resource name (ARN) that is associated with the InfluxDB instance."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The service generated unique identifier for InfluxDB instance."
  },
  {
    "name": "deployment_type",
    "type": "string",
    "description": "Deployment type of the InfluxDB Instance."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An arbitrary set of tags (key-value pairs) for this DB instance.",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "id",
    "type": "string",
    "description": "The service generated unique identifier for InfluxDB instance."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-influxdbinstance.html"><code>AWS::Timestream::InfluxDBInstance</code></a>.

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
    <td><code>influxdb_instances</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>influxdb_instances</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>influxdb_instances</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>influxdb_instances_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>influxdb_instances</code></td>
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

Gets all properties from an individual <code>influxdb_instance</code>.
```sql
SELECT
region,
username,
password,
organization,
bucket,
db_instance_type,
vpc_subnet_ids,
vpc_security_group_ids,
publicly_accessible,
db_storage_type,
allocated_storage,
db_parameter_group_identifier,
port,
network_type,
log_delivery_configuration,
status,
arn,
name,
availability_zone,
secondary_availability_zone,
endpoint,
influx_auth_parameters_secret_arn,
id,
deployment_type,
tags
FROM awscc.timestream.influxdb_instances
WHERE region = 'us-east-1' AND Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>influxdb_instances</code> in a region.
```sql
SELECT
region,
id
FROM awscc.timestream.influxdb_instances_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>influxdb_instance</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.timestream.influxdb_instances (
 Username,
 Password,
 Organization,
 Bucket,
 DbInstanceType,
 VpcSubnetIds,
 VpcSecurityGroupIds,
 PubliclyAccessible,
 DbStorageType,
 AllocatedStorage,
 DbParameterGroupIdentifier,
 Port,
 NetworkType,
 LogDeliveryConfiguration,
 Name,
 DeploymentType,
 Tags,
 region
)
SELECT 
'{{ Username }}',
 '{{ Password }}',
 '{{ Organization }}',
 '{{ Bucket }}',
 '{{ DbInstanceType }}',
 '{{ VpcSubnetIds }}',
 '{{ VpcSecurityGroupIds }}',
 '{{ PubliclyAccessible }}',
 '{{ DbStorageType }}',
 '{{ AllocatedStorage }}',
 '{{ DbParameterGroupIdentifier }}',
 '{{ Port }}',
 '{{ NetworkType }}',
 '{{ LogDeliveryConfiguration }}',
 '{{ Name }}',
 '{{ DeploymentType }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.timestream.influxdb_instances (
 Username,
 Password,
 Organization,
 Bucket,
 DbInstanceType,
 VpcSubnetIds,
 VpcSecurityGroupIds,
 PubliclyAccessible,
 DbStorageType,
 AllocatedStorage,
 DbParameterGroupIdentifier,
 Port,
 NetworkType,
 LogDeliveryConfiguration,
 Name,
 DeploymentType,
 Tags,
 region
)
SELECT 
 '{{ Username }}',
 '{{ Password }}',
 '{{ Organization }}',
 '{{ Bucket }}',
 '{{ DbInstanceType }}',
 '{{ VpcSubnetIds }}',
 '{{ VpcSecurityGroupIds }}',
 '{{ PubliclyAccessible }}',
 '{{ DbStorageType }}',
 '{{ AllocatedStorage }}',
 '{{ DbParameterGroupIdentifier }}',
 '{{ Port }}',
 '{{ NetworkType }}',
 '{{ LogDeliveryConfiguration }}',
 '{{ Name }}',
 '{{ DeploymentType }}',
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
  - name: influxdb_instance
    props:
      - name: Username
        value: '{{ Username }}'
      - name: Password
        value: '{{ Password }}'
      - name: Organization
        value: '{{ Organization }}'
      - name: Bucket
        value: '{{ Bucket }}'
      - name: DbInstanceType
        value: '{{ DbInstanceType }}'
      - name: VpcSubnetIds
        value:
          - '{{ VpcSubnetIds[0] }}'
      - name: VpcSecurityGroupIds
        value:
          - '{{ VpcSecurityGroupIds[0] }}'
      - name: PubliclyAccessible
        value: '{{ PubliclyAccessible }}'
      - name: DbStorageType
        value: '{{ DbStorageType }}'
      - name: AllocatedStorage
        value: '{{ AllocatedStorage }}'
      - name: DbParameterGroupIdentifier
        value: '{{ DbParameterGroupIdentifier }}'
      - name: Port
        value: '{{ Port }}'
      - name: NetworkType
        value: '{{ NetworkType }}'
      - name: LogDeliveryConfiguration
        value:
          S3Configuration:
            BucketName: '{{ BucketName }}'
            Enabled: '{{ Enabled }}'
      - name: Name
        value: '{{ Name }}'
      - name: DeploymentType
        value: '{{ DeploymentType }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>influxdb_instance</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.timestream.influxdb_instances
SET PatchDocument = string('{{ {
    "DbInstanceType": db_instance_type,
    "DbStorageType": db_storage_type,
    "AllocatedStorage": allocated_storage,
    "DbParameterGroupIdentifier": db_parameter_group_identifier,
    "Port": port,
    "LogDeliveryConfiguration": log_delivery_configuration,
    "DeploymentType": deployment_type,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.timestream.influxdb_instances
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>influxdb_instances</code> resource, the following permissions are required:

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
s3:ListBucket,
s3:GetBucketPolicy,
timestream-influxdb:GetDbInstance,
timestream-influxdb:ListDbInstances,
timestream-influxdb:CreateDbInstance,
timestream-influxdb:TagResource,
timestream-influxdb:ListTagsForResource,
ec2:DescribeSubnets,
ec2:DescribeVpcs,
ec2:DescribeNetworkInterfaces,
ec2:DescribeSecurityGroups,
ec2:CreateNetworkInterface,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="read">

```json
timestream-influxdb:GetDbInstance,
timestream-influxdb:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
s3:ListBucket,
s3:GetBucketPolicy,
timestream-influxdb:GetDbInstance,
timestream-influxdb:ListDbInstances,
timestream-influxdb:UpdateDbInstance,
timestream-influxdb:TagResource,
timestream-influxdb:UntagResource,
timestream-influxdb:ListTagsForResource,
ec2:DescribeSubnets,
ec2:DescribeVpcs
```

</TabItem>
<TabItem value="delete">

```json
timestream-influxdb:GetDbInstance,
timestream-influxdb:ListDbInstances,
timestream-influxdb:DeleteDbInstance
```

</TabItem>
<TabItem value="list">

```json
timestream-influxdb:ListDbInstances
```

</TabItem>
</Tabs>