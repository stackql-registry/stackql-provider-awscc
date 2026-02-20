---
title: volume_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - volume_associations
  - workspacesinstances
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

Creates, updates, deletes or gets a <code>volume_association</code> resource or lists <code>volume_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>volume_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::WorkspacesInstances::VolumeAssociation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.workspacesinstances.volume_associations" /></td></tr>
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
    "name": "workspace_instance_id",
    "type": "string",
    "description": "ID of the workspace instance to associate with the volume"
  },
  {
    "name": "volume_id",
    "type": "string",
    "description": "ID of the volume to attach to the workspace instance"
  },
  {
    "name": "device",
    "type": "string",
    "description": "The device name for the volume attachment"
  },
  {
    "name": "disassociate_mode",
    "type": "string",
    "description": "Mode to use when disassociating the volume"
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
    "name": "workspace_instance_id",
    "type": "string",
    "description": "ID of the workspace instance to associate with the volume"
  },
  {
    "name": "volume_id",
    "type": "string",
    "description": "ID of the volume to attach to the workspace instance"
  },
  {
    "name": "device",
    "type": "string",
    "description": "The device name for the volume attachment"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesinstances-volumeassociation.html"><code>AWS::WorkspacesInstances::VolumeAssociation</code></a>.

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
    <td><code>volume_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="WorkspaceInstanceId, VolumeId, Device, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>volume_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>volume_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>volume_associations</code></td>
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

Gets all properties from an individual <code>volume_association</code>.
```sql
SELECT
region,
workspace_instance_id,
volume_id,
device,
disassociate_mode
FROM awscc.workspacesinstances.volume_associations
WHERE region = 'us-east-1' AND Identifier = '<WorkspaceInstanceId>|<VolumeId>|<Device>';
```
</TabItem>
<TabItem value="list">

Lists all <code>volume_associations</code> in a region.
```sql
SELECT
region,
workspace_instance_id,
volume_id,
device
FROM awscc.workspacesinstances.volume_associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>volume_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.workspacesinstances.volume_associations (
 WorkspaceInstanceId,
 VolumeId,
 Device,
 region
)
SELECT 
'{{ WorkspaceInstanceId }}',
 '{{ VolumeId }}',
 '{{ Device }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.workspacesinstances.volume_associations (
 WorkspaceInstanceId,
 VolumeId,
 Device,
 DisassociateMode,
 region
)
SELECT 
 '{{ WorkspaceInstanceId }}',
 '{{ VolumeId }}',
 '{{ Device }}',
 '{{ DisassociateMode }}',
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
  - name: volume_association
    props:
      - name: WorkspaceInstanceId
        value: '{{ WorkspaceInstanceId }}'
      - name: VolumeId
        value: '{{ VolumeId }}'
      - name: Device
        value: '{{ Device }}'
      - name: DisassociateMode
        value: '{{ DisassociateMode }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.workspacesinstances.volume_associations
WHERE Identifier = '<WorkspaceInstanceId|VolumeId|Device>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>volume_associations</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
ec2:DescribeVolumes,
ec2:AttachVolume,
workspaces-instances:GetWorkspaceInstance,
workspaces-instances:AssociateVolume
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeVolumes,
workspaces-instances:GetWorkspaceInstance
```

</TabItem>
<TabItem value="delete">

```json
ec2:DescribeVolumes,
ec2:DetachVolume,
workspaces-instances:GetWorkspaceInstance,
workspaces-instances:DisassociateVolume
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeVolumes,
workspaces-instances:ListWorkspaceInstances
```

</TabItem>
</Tabs>