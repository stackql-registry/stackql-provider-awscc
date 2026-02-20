---
title: locationf_sx_ontaps
hide_title: false
hide_table_of_contents: false
keywords:
  - locationf_sx_ontaps
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

Creates, updates, deletes or gets a <code>locationf_sx_ontap</code> resource or lists <code>locationf_sx_ontaps</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>locationf_sx_ontaps</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::DataSync::LocationFSxONTAP.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datasync.locationf_sx_ontaps" /></td></tr>
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
    "name": "storage_virtual_machine_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the FSx ONTAP SVM."
  },
  {
    "name": "fsx_filesystem_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the FSx ONAP file system."
  },
  {
    "name": "security_group_arns",
    "type": "array",
    "description": "The ARNs of the security groups that are to use to configure the FSx ONTAP file system."
  },
  {
    "name": "protocol",
    "type": "object",
    "description": "Configuration settings for an NFS or SMB protocol, currently only support NFS",
    "children": [
      {
        "name": "n_fs",
        "type": "object",
        "description": "FSx OpenZFS file system NFS protocol information",
        "children": [
          {
            "name": "mount_options",
            "type": "object",
            "description": "The mount options used by DataSync to access the SMB server.",
            "children": [
              {
                "name": "version",
                "type": "string",
                "description": "The specific SMB version that you want DataSync to use to mount your SMB share."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "subdirectory",
    "type": "string",
    "description": "A subdirectory in the location's path."
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
    "description": "The Amazon Resource Name (ARN) of the Amazon FSx ONTAP file system location that is created."
  },
  {
    "name": "location_uri",
    "type": "string",
    "description": "The URL of the FSx ONTAP file system that was described."
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
    "description": "The Amazon Resource Name (ARN) of the Amazon FSx ONTAP file system location that is created."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html"><code>AWS::DataSync::LocationFSxONTAP</code></a>.

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
    <td><code>locationf_sx_ontaps</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="SecurityGroupArns, StorageVirtualMachineArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>locationf_sx_ontaps</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>locationf_sx_ontaps</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>locationf_sx_ontaps_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>locationf_sx_ontaps</code></td>
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

Gets all properties from an individual <code>locationf_sx_ontap</code>.
```sql
SELECT
region,
storage_virtual_machine_arn,
fsx_filesystem_arn,
security_group_arns,
protocol,
subdirectory,
tags,
location_arn,
location_uri
FROM awscc.datasync.locationf_sx_ontaps
WHERE region = 'us-east-1' AND data__Identifier = '<LocationArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>locationf_sx_ontaps</code> in a region.
```sql
SELECT
region,
location_arn
FROM awscc.datasync.locationf_sx_ontaps_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>locationf_sx_ontap</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datasync.locationf_sx_ontaps (
 StorageVirtualMachineArn,
 SecurityGroupArns,
 region
)
SELECT 
'{{ StorageVirtualMachineArn }}',
 '{{ SecurityGroupArns }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.datasync.locationf_sx_ontaps (
 StorageVirtualMachineArn,
 SecurityGroupArns,
 Protocol,
 Subdirectory,
 Tags,
 region
)
SELECT 
 '{{ StorageVirtualMachineArn }}',
 '{{ SecurityGroupArns }}',
 '{{ Protocol }}',
 '{{ Subdirectory }}',
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
  - name: locationf_sx_ontap
    props:
      - name: StorageVirtualMachineArn
        value: '{{ StorageVirtualMachineArn }}'
      - name: SecurityGroupArns
        value:
          - '{{ SecurityGroupArns[0] }}'
      - name: Protocol
        value:
          NFS:
            MountOptions:
              Version: '{{ Version }}'
      - name: Subdirectory
        value: '{{ Subdirectory }}'
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
UPDATE awscc.datasync.locationf_sx_ontaps
SET data__PatchDocument = string('{{ {
    "Protocol": protocol,
    "Subdirectory": subdirectory,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<LocationArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datasync.locationf_sx_ontaps
WHERE data__Identifier = '<LocationArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>locationf_sx_ontaps</code> resource, the following permissions are required:

### Create
```json
datasync:CreateLocationFsxOntap,
datasync:DescribeLocationFsxOntap,
datasync:ListTagsForResource,
datasync:TagResource,
fsx:DescribeStorageVirtualMachines,
fsx:DescribeFileSystems,
ec2:DescribeNetworkInterfaces,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups
```

### Read
```json
datasync:DescribeLocationFsxOntap,
datasync:ListTagsForResource
```

### Update
```json
datasync:UpdateLocationFsxOntap,
datasync:DescribeLocationFsxOntap,
datasync:ListTagsForResource,
datasync:TagResource,
datasync:UntagResource,
fsx:DescribeFileSystems,
fsx:DescribeStorageVirtualMachines,
ec2:DescribeNetworkInterfaces
```

### Delete
```json
datasync:DeleteLocation
```

### List
```json
datasync:ListLocations
```
