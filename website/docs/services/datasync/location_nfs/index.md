---
title: location_nfs
hide_title: false
hide_table_of_contents: false
keywords:
  - location_nfs
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

Creates, updates, deletes or gets a <code>location_nf</code> resource or lists <code>location_nfs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>location_nfs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::DataSync::LocationNFS</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datasync.location_nfs" /></td></tr>
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
  },
  {
    "name": "on_prem_config",
    "type": "object",
    "description": "Contains a list of Amazon Resource Names (ARNs) of agents that are used to connect an NFS server.",
    "children": [
      {
        "name": "agent_arns",
        "type": "array",
        "description": "ARN(s) of the agent(s) to use for an NFS location."
      }
    ]
  },
  {
    "name": "server_hostname",
    "type": "string",
    "description": "The name of the NFS server. This value is the IP address or DNS name of the NFS server."
  },
  {
    "name": "subdirectory",
    "type": "string",
    "description": "The subdirectory in the NFS file system that is used to read data from the NFS source location or write data to the NFS destination."
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
    "description": "The Amazon Resource Name (ARN) of the NFS location."
  },
  {
    "name": "location_uri",
    "type": "string",
    "description": "The URL of the NFS location that was described."
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
    "description": "The Amazon Resource Name (ARN) of the NFS location."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationnf.html"><code>AWS::DataSync::LocationNFS</code></a>.

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
    <td><code>location_nfs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="OnPremConfig, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>location_nfs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>location_nfs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>location_nfs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>location_nfs</code></td>
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

Gets all properties from an individual <code>location_nf</code>.
```sql
SELECT
region,
mount_options,
on_prem_config,
server_hostname,
subdirectory,
tags,
location_arn,
location_uri
FROM awscc.datasync.location_nfs
WHERE region = 'us-east-1' AND Identifier = '{{ location_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>location_nfs</code> in a region.
```sql
SELECT
region,
location_arn
FROM awscc.datasync.location_nfs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>location_nf</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datasync.location_nfs (
 OnPremConfig,
 region
)
SELECT
'{{ on_prem_config }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.datasync.location_nfs (
 MountOptions,
 OnPremConfig,
 ServerHostname,
 Subdirectory,
 Tags,
 region
)
SELECT
 '{{ mount_options }}',
 '{{ on_prem_config }}',
 '{{ server_hostname }}',
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
  - name: location_nf
    props:
      - name: mount_options
        value:
          version: '{{ version }}'
      - name: on_prem_config
        value:
          agent_arns:
            - '{{ agent_arns[0] }}'
      - name: server_hostname
        value: '{{ server_hostname }}'
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

Use the following StackQL query and manifest file to update a <code>location_nf</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.datasync.location_nfs
SET PatchDocument = string('{{ {
    "MountOptions": mount_options,
    "OnPremConfig": on_prem_config,
    "ServerHostname": server_hostname,
    "Subdirectory": subdirectory,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ location_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datasync.location_nfs
WHERE Identifier = '{{ location_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>location_nfs</code> resource, the following permissions are required:

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
datasync:CreateLocationNfs,
datasync:DescribeLocationNfs,
datasync:ListTagsForResource,
datasync:TagResource
```

</TabItem>
<TabItem value="read">

```json
datasync:DescribeLocationNfs,
datasync:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
datasync:DescribeLocationNfs,
datasync:ListTagsForResource,
datasync:TagResource,
datasync:UntagResource,
datasync:UpdateLocationNfs
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