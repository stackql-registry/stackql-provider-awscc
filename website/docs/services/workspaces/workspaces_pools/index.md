---
title: workspaces_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - workspaces_pools
  - workspaces
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

Creates, updates, deletes or gets a <code>workspaces_pool</code> resource or lists <code>workspaces_pools</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>workspaces_pools</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::WorkSpaces::WorkspacesPool</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.workspaces.workspaces_pools" /></td></tr>
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
    "name": "pool_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "pool_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "capacity",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "desired_user_sessions",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "pool_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "created_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "bundle_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "directory_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "application_settings",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "status",
        "type": "string",
        "description": ""
      },
      {
        "name": "settings_group",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "timeout_settings",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "disconnect_timeout_in_seconds",
        "type": "integer",
        "description": ""
      },
      {
        "name": "idle_disconnect_timeout_in_seconds",
        "type": "integer",
        "description": ""
      },
      {
        "name": "max_user_duration_in_seconds",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "running_mode",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "pool_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html"><code>AWS::WorkSpaces::WorkspacesPool</code></a>.

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
    <td><code>workspaces_pools</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="PoolName, BundleId, DirectoryId, Capacity, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>workspaces_pools</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>workspaces_pools</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>workspaces_pools_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>workspaces_pools</code></td>
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

Gets all properties from an individual <code>workspaces_pool</code>.
```sql
SELECT
region,
pool_id,
pool_arn,
capacity,
pool_name,
description,
created_at,
bundle_id,
directory_id,
application_settings,
timeout_settings,
running_mode,
tags
FROM awscc.workspaces.workspaces_pools
WHERE region = 'us-east-1' AND Identifier = '<PoolId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>workspaces_pools</code> in a region.
```sql
SELECT
region,
pool_id
FROM awscc.workspaces.workspaces_pools_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>workspaces_pool</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.workspaces.workspaces_pools (
 Capacity,
 PoolName,
 BundleId,
 DirectoryId,
 region
)
SELECT 
'{{ Capacity }}',
 '{{ PoolName }}',
 '{{ BundleId }}',
 '{{ DirectoryId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.workspaces.workspaces_pools (
 Capacity,
 PoolName,
 Description,
 BundleId,
 DirectoryId,
 ApplicationSettings,
 TimeoutSettings,
 RunningMode,
 Tags,
 region
)
SELECT 
 '{{ Capacity }}',
 '{{ PoolName }}',
 '{{ Description }}',
 '{{ BundleId }}',
 '{{ DirectoryId }}',
 '{{ ApplicationSettings }}',
 '{{ TimeoutSettings }}',
 '{{ RunningMode }}',
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
  - name: workspaces_pool
    props:
      - name: Capacity
        value:
          DesiredUserSessions: '{{ DesiredUserSessions }}'
      - name: PoolName
        value: '{{ PoolName }}'
      - name: Description
        value: '{{ Description }}'
      - name: BundleId
        value: '{{ BundleId }}'
      - name: DirectoryId
        value: '{{ DirectoryId }}'
      - name: ApplicationSettings
        value:
          Status: '{{ Status }}'
          SettingsGroup: '{{ SettingsGroup }}'
      - name: TimeoutSettings
        value:
          DisconnectTimeoutInSeconds: '{{ DisconnectTimeoutInSeconds }}'
          IdleDisconnectTimeoutInSeconds: '{{ IdleDisconnectTimeoutInSeconds }}'
          MaxUserDurationInSeconds: '{{ MaxUserDurationInSeconds }}'
      - name: RunningMode
        value: '{{ RunningMode }}'
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
UPDATE awscc.workspaces.workspaces_pools
SET PatchDocument = string('{{ {
    "Capacity": capacity,
    "Description": description,
    "BundleId": bundle_id,
    "DirectoryId": directory_id,
    "ApplicationSettings": application_settings,
    "TimeoutSettings": timeout_settings,
    "RunningMode": running_mode,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<PoolId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.workspaces.workspaces_pools
WHERE Identifier = '<PoolId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>workspaces_pools</code> resource, the following permissions are required:

### Create
```json
workspaces:CreateWorkspacesPool,
workspaces:DescribeWorkspacesPools,
workspaces:CreateTags
```

### Read
```json
workspaces:DescribeWorkspacesPools,
workspaces:DescribeTags
```

### Update
```json
workspaces:UpdateWorkspacesPool,
workspaces:CreateTags,
workspaces:DeleteTags,
workspaces:DescribeWorkspacesPools,
workspaces:DescribeTags
```

### Delete
```json
workspaces:DescribeWorkspacesPools,
workspaces:TerminateWorkspacesPool,
workspaces:DeleteTags
```

### List
```json
workspaces:DescribeWorkspacesPools,
workspaces:DescribeTags
```
