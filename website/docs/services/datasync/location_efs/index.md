---
title: location_efs
hide_title: false
hide_table_of_contents: false
keywords:
  - location_efs
  - datasync
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

Creates, updates, deletes or gets a <code>location_ef</code> resource or lists <code>location_efs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>location_efs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::DataSync::LocationEFS.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datasync.location_efs" /></td></tr>
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
    "name": "ec2_config",
    "type": "object",
    "description": "The subnet and security group that DataSync uses to access target EFS file system.",
    "children": [
      {
        "name": "security_group_arns",
        "type": "array",
        "description": "The Amazon Resource Names (ARNs) of the security groups that are configured for the Amazon EC2 resource."
      },
      {
        "name": "subnet_arn",
        "type": "string",
        "description": "The ARN of the subnet that DataSync uses to access the target EFS file system."
      }
    ]
  },
  {
    "name": "efs_filesystem_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the Amazon EFS file system."
  },
  {
    "name": "access_point_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the Amazon EFS Access point that DataSync uses when accessing the EFS file system."
  },
  {
    "name": "file_system_access_role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the AWS IAM role that the DataSync will assume when mounting the EFS file system."
  },
  {
    "name": "in_transit_encryption",
    "type": "string",
    "description": "Protocol that is used for encrypting the traffic exchanged between the DataSync Agent and the EFS file system."
  },
  {
    "name": "subdirectory",
    "type": "string",
    "description": "A subdirectory in the location's path. This subdirectory in the EFS file system is used to read data from the EFS source location or write data to the EFS destination."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key for an AWS resource tag."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for an AWS resource tag."
      }
    ]
  },
  {
    "name": "location_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the Amazon EFS file system location that is created."
  },
  {
    "name": "location_uri",
    "type": "string",
    "description": "The URL of the EFS location that was described."
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
    "name": "location_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the Amazon EFS file system location that is created."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationef.html"><code>AWS::DataSync::LocationEFS</code></a>.

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
    <td><code>location_efs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Ec2Config, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>location_efs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>location_efs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>location_efs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>location_efs</code></td>
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

Gets all properties from an individual <code>location_ef</code>.
```sql
SELECT
region,
ec2_config,
efs_filesystem_arn,
access_point_arn,
file_system_access_role_arn,
in_transit_encryption,
subdirectory,
tags,
location_arn,
location_uri
FROM awscc.datasync.location_efs
WHERE region = 'us-east-1' AND Identifier = '{{ location_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>location_efs</code> in a region.
```sql
SELECT
region,
location_arn
FROM awscc.datasync.location_efs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>location_ef</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datasync.location_efs (
 Ec2Config,
 region
)
SELECT
'{{ ec2_config }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.datasync.location_efs (
 Ec2Config,
 EfsFilesystemArn,
 AccessPointArn,
 FileSystemAccessRoleArn,
 InTransitEncryption,
 Subdirectory,
 Tags,
 region
)
SELECT
 '{{ ec2_config }}',
 '{{ efs_filesystem_arn }}',
 '{{ access_point_arn }}',
 '{{ file_system_access_role_arn }}',
 '{{ in_transit_encryption }}',
 '{{ subdirectory }}',
 '{{ tags }}',
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
  - name: location_ef
    props:
      - name: ec2_config
        value:
          security_group_arns:
            - '{{ security_group_arns[0] }}'
          subnet_arn: '{{ subnet_arn }}'
      - name: efs_filesystem_arn
        value: '{{ efs_filesystem_arn }}'
      - name: access_point_arn
        value: '{{ access_point_arn }}'
      - name: file_system_access_role_arn
        value: '{{ file_system_access_role_arn }}'
      - name: in_transit_encryption
        value: '{{ in_transit_encryption }}'
      - name: subdirectory
        value: '{{ subdirectory }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>location_ef</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.datasync.location_efs
SET PatchDocument = string('{{ {
    "AccessPointArn": access_point_arn,
    "FileSystemAccessRoleArn": file_system_access_role_arn,
    "InTransitEncryption": in_transit_encryption,
    "Subdirectory": subdirectory,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ location_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datasync.location_efs
WHERE Identifier = '{{ location_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>location_efs</code> resource, the following permissions are required:

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
datasync:CreateLocationEfs,
datasync:DescribeLocationEfs,
datasync:ListTagsForResource,
datasync:TagResource,
elasticfilesystem:DescribeFileSystems,
elasticfilesystem:DescribeMountTargets,
elasticfilesystem:DescribeAccessPoints,
iam:PassRole,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups
```

</TabItem>
<TabItem value="read">

```json
datasync:DescribeLocationEfs,
datasync:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
datasync:UpdateLocationEfs,
datasync:DescribeLocationEfs,
datasync:ListTagsForResource,
datasync:TagResource,
datasync:UntagResource,
elasticfilesystem:DescribeFileSystems,
elasticfilesystem:DescribeAccessPoints,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
datasync:DeleteLocation
```

</TabItem>
<TabItem value="list">

```json
datasync:ListLocations
```

</TabItem>
</Tabs>