---
title: profiling_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - profiling_groups
  - codeguruprofiler
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

Creates, updates, deletes or gets a <code>profiling_group</code> resource or lists <code>profiling_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>profiling_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>This resource schema represents the Profiling Group resource in the Amazon CodeGuru Profiler service.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.codeguruprofiler.profiling_groups" /></td></tr>
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
    "name": "profiling_group_name",
    "type": "string",
    "description": "The name of the profiling group."
  },
  {
    "name": "compute_platform",
    "type": "string",
    "description": "The compute platform of the profiling group."
  },
  {
    "name": "agent_permissions",
    "type": "object",
    "description": "The agent permissions attached to this profiling group.",
    "children": [
      {
        "name": "principals",
        "type": "array",
        "description": "The principals for the agent permissions."
      }
    ]
  },
  {
    "name": "anomaly_detection_notification_configuration",
    "type": "array",
    "description": "Configuration for Notification Channels for Anomaly Detection feature in CodeGuru Profiler which enables customers to detect anomalies in the application profile for those methods that represent the highest proportion of CPU time or latency",
    "children": [
      {
        "name": "channel_id",
        "type": "string",
        "description": "Unique identifier for each Channel in the notification configuration of a Profiling Group"
      },
      {
        "name": "channel_uri",
        "type": "string",
        "description": "Unique arn of the resource to be used for notifications. We support a valid SNS topic arn as a channel uri."
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the specified profiling group."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags associated with a profiling group.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . &#95; : / @."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . &#95; : / @."
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
    "name": "profiling_group_name",
    "type": "string",
    "description": "The name of the profiling group."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeguruprofiler-profilinggroup.html"><code>AWS::CodeGuruProfiler::ProfilingGroup</code></a>.

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
    <td><code>profiling_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ProfilingGroupName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>profiling_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>profiling_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>profiling_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>profiling_groups</code></td>
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

Gets all properties from an individual <code>profiling_group</code>.
```sql
SELECT
region,
profiling_group_name,
compute_platform,
agent_permissions,
anomaly_detection_notification_configuration,
arn,
tags
FROM awscc.codeguruprofiler.profiling_groups
WHERE region = 'us-east-1' AND Identifier = '{{ profiling_group_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>profiling_groups</code> in a region.
```sql
SELECT
region,
profiling_group_name
FROM awscc.codeguruprofiler.profiling_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>profiling_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.codeguruprofiler.profiling_groups (
 ProfilingGroupName,
 region
)
SELECT
'{{ profiling_group_name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.codeguruprofiler.profiling_groups (
 ProfilingGroupName,
 ComputePlatform,
 AgentPermissions,
 AnomalyDetectionNotificationConfiguration,
 Tags,
 region
)
SELECT
 '{{ profiling_group_name }}',
 '{{ compute_platform }}',
 '{{ agent_permissions }}',
 '{{ anomaly_detection_notification_configuration }}',
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
  - name: profiling_group
    props:
      - name: profiling_group_name
        value: '{{ profiling_group_name }}'
      - name: compute_platform
        value: '{{ compute_platform }}'
      - name: agent_permissions
        value:
          principals:
            - '{{ principals[0] }}'
      - name: anomaly_detection_notification_configuration
        value:
          - channel_id: '{{ channel_id }}'
            channel_uri: '{{ channel_uri }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>profiling_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.codeguruprofiler.profiling_groups
SET PatchDocument = string('{{ {
    "AgentPermissions": agent_permissions,
    "AnomalyDetectionNotificationConfiguration": anomaly_detection_notification_configuration,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ profiling_group_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.codeguruprofiler.profiling_groups
WHERE Identifier = '{{ profiling_group_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>profiling_groups</code> resource, the following permissions are required:

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
sns:Publish,
codeguru-profiler:AddNotificationChannels,
codeguru-profiler:CreateProfilingGroup,
codeguru-profiler:PutPermission,
codeguru-profiler:TagResource
```

</TabItem>
<TabItem value="read">

```json
codeguru-profiler:DescribeProfilingGroup,
codeguru-profiler:ListTagsForResource,
codeguru-profiler:GetNotificationConfiguration,
codeguru-profiler:GetPolicy
```

</TabItem>
<TabItem value="update">

```json
sns:Publish,
codeguru-profiler:DescribeProfilingGroup,
codeguru-profiler:AddNotificationChannels,
codeguru-profiler:GetNotificationConfiguration,
codeguru-profiler:RemoveNotificationChannel,
codeguru-profiler:PutPermission,
codeguru-profiler:RemovePermission,
codeguru-profiler:GetPolicy,
codeguru-profiler:TagResource,
codeguru-profiler:UntagResource,
codeguru-profiler:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
codeguru-profiler:DeleteProfilingGroup
```

</TabItem>
<TabItem value="list">

```json
codeguru-profiler:ListProfilingGroups,
codeguru-profiler:ListTagsForResource,
codeguru-profiler:GetNotificationConfiguration,
codeguru-profiler:GetPolicy
```

</TabItem>
</Tabs>