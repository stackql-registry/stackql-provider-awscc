---
title: sync_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - sync_jobs
  - iottwinmaker
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

Creates, updates, deletes or gets a <code>sync_job</code> resource or lists <code>sync_jobs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>sync_jobs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::IoTTwinMaker::SyncJob</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iottwinmaker.sync_jobs" /></td></tr>
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
    "name": "workspace_id",
    "type": "string",
    "description": "The ID of the workspace."
  },
  {
    "name": "sync_source",
    "type": "string",
    "description": "The source of the SyncJob."
  },
  {
    "name": "sync_role",
    "type": "string",
    "description": "The IAM Role that execute SyncJob."
  },
  {
    "name": "creation_date_time",
    "type": "string",
    "description": "The date and time when the sync job was created."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The ARN of the SyncJob."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of SyncJob."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A key-value pair to associate with a resource."
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
    "name": "workspace_id",
    "type": "string",
    "description": "The ID of the workspace."
  },
  {
    "name": "sync_source",
    "type": "string",
    "description": "The source of the SyncJob."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-syncjob.html"><code>AWS::IoTTwinMaker::SyncJob</code></a>.

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
    <td><code>sync_jobs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="WorkspaceId, SyncSource, SyncRole, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>sync_jobs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>sync_jobs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>sync_jobs</code></td>
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

Gets all properties from an individual <code>sync_job</code>.
```sql
SELECT
region,
workspace_id,
sync_source,
sync_role,
creation_date_time,
update_date_time,
arn,
state,
tags
FROM awscc.iottwinmaker.sync_jobs
WHERE region = 'us-east-1' AND Identifier = '<WorkspaceId>|<SyncSource>';
```
</TabItem>
<TabItem value="list">

Lists all <code>sync_jobs</code> in a region.
```sql
SELECT
region,
workspace_id,
sync_source
FROM awscc.iottwinmaker.sync_jobs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>sync_job</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iottwinmaker.sync_jobs (
 WorkspaceId,
 SyncSource,
 SyncRole,
 region
)
SELECT 
'{{ WorkspaceId }}',
 '{{ SyncSource }}',
 '{{ SyncRole }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iottwinmaker.sync_jobs (
 WorkspaceId,
 SyncSource,
 SyncRole,
 Tags,
 region
)
SELECT 
 '{{ WorkspaceId }}',
 '{{ SyncSource }}',
 '{{ SyncRole }}',
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
  - name: sync_job
    props:
      - name: WorkspaceId
        value: '{{ WorkspaceId }}'
      - name: SyncSource
        value: '{{ SyncSource }}'
      - name: SyncRole
        value: '{{ SyncRole }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iottwinmaker.sync_jobs
WHERE Identifier = '<WorkspaceId|SyncSource>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>sync_jobs</code> resource, the following permissions are required:

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
iam:PassRole,
iottwinmaker:CreateSyncJob,
iottwinmaker:GetSyncJob,
iottwinmaker:GetWorkspace,
iottwinmaker:ListTagsForResource,
iottwinmaker:TagResource
```

</TabItem>
<TabItem value="read">

```json
iottwinmaker:GetSyncJob,
iottwinmaker:GetWorkspace,
iottwinmaker:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
iottwinmaker:DeleteSyncJob,
iottwinmaker:GetSyncJob,
iottwinmaker:GetWorkspace
```

</TabItem>
<TabItem value="list">

```json
iottwinmaker:GetWorkspace,
iottwinmaker:ListSyncJobs,
iottwinmaker:ListTagsForResource
```

</TabItem>
</Tabs>