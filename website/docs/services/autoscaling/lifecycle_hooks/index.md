---
title: lifecycle_hooks
hide_title: false
hide_table_of_contents: false
keywords:
  - lifecycle_hooks
  - autoscaling
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

Creates, updates, deletes or gets a <code>lifecycle_hook</code> resource or lists <code>lifecycle_hooks</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>lifecycle_hooks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::AutoScaling::LifecycleHook</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.autoscaling.lifecycle_hooks" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "auto_scaling_group_name",
    "type": "string",
    "description": "The name of the Auto Scaling group for the lifecycle hook."
  },
  {
    "name": "default_result",
    "type": "string",
    "description": "The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs. The valid values are CONTINUE and ABANDON (default)."
  },
  {
    "name": "heartbeat_timeout",
    "type": "integer",
    "description": "The maximum time, in seconds, that can elapse before the lifecycle hook times out. The range is from 30 to 7200 seconds. The default value is 3600 seconds (1 hour). If the lifecycle hook times out, Amazon EC2 Auto Scaling performs the action that you specified in the DefaultResult property."
  },
  {
    "name": "lifecycle_hook_name",
    "type": "string",
    "description": "The name of the lifecycle hook."
  },
  {
    "name": "lifecycle_transition",
    "type": "string",
    "description": "The instance state to which you want to attach the lifecycle hook."
  },
  {
    "name": "notification_metadata",
    "type": "string",
    "description": "Additional information that is included any time Amazon EC2 Auto Scaling sends a message to the notification target."
  },
  {
    "name": "notification_target_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the notification target that Amazon EC2 Auto Scaling uses to notify you when an instance is in the transition state for the lifecycle hook. You can specify an Amazon SQS queue or an Amazon SNS topic. The notification message includes the following information: lifecycle action token, user account ID, Auto Scaling group name, lifecycle hook name, instance ID, lifecycle transition, and notification metadata."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target, for example, an Amazon SNS topic or an Amazon SQS queue."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-lifecyclehook.html"><code>AWS::AutoScaling::LifecycleHook</code></a>.

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
    <td><CopyableCode code="LifecycleTransition, AutoScalingGroupName, region" /></td>
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

Gets all properties from an individual <code>lifecycle_hook</code>.
```sql
SELECT
region,
auto_scaling_group_name,
default_result,
heartbeat_timeout,
lifecycle_hook_name,
lifecycle_transition,
notification_metadata,
notification_target_arn,
role_arn
FROM awscc.autoscaling.lifecycle_hooks
WHERE region = 'us-east-1' AND data__Identifier = '<AutoScalingGroupName>|<LifecycleHookName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>lifecycle_hook</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.autoscaling.lifecycle_hooks (
 AutoScalingGroupName,
 LifecycleTransition,
 region
)
SELECT 
'{{ AutoScalingGroupName }}',
 '{{ LifecycleTransition }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.autoscaling.lifecycle_hooks (
 AutoScalingGroupName,
 DefaultResult,
 HeartbeatTimeout,
 LifecycleHookName,
 LifecycleTransition,
 NotificationMetadata,
 NotificationTargetARN,
 RoleARN,
 region
)
SELECT 
 '{{ AutoScalingGroupName }}',
 '{{ DefaultResult }}',
 '{{ HeartbeatTimeout }}',
 '{{ LifecycleHookName }}',
 '{{ LifecycleTransition }}',
 '{{ NotificationMetadata }}',
 '{{ NotificationTargetARN }}',
 '{{ RoleARN }}',
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
  - name: lifecycle_hook
    props:
      - name: AutoScalingGroupName
        value: '{{ AutoScalingGroupName }}'
      - name: DefaultResult
        value: '{{ DefaultResult }}'
      - name: HeartbeatTimeout
        value: '{{ HeartbeatTimeout }}'
      - name: LifecycleHookName
        value: '{{ LifecycleHookName }}'
      - name: LifecycleTransition
        value: '{{ LifecycleTransition }}'
      - name: NotificationMetadata
        value: '{{ NotificationMetadata }}'
      - name: NotificationTargetARN
        value: '{{ NotificationTargetARN }}'
      - name: RoleARN
        value: '{{ RoleARN }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.autoscaling.lifecycle_hooks
WHERE data__Identifier = '<AutoScalingGroupName|LifecycleHookName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>lifecycle_hooks</code> resource, the following permissions are required:

### Create
```json
autoscaling:PutLifecycleHook,
autoscaling:DescribeLifecycleHooks,
iam:PassRole
```

### Read
```json
autoscaling:DescribeLifecycleHooks
```

### Update
```json
autoscaling:PutLifecycleHook,
autoscaling:DescribeLifecycleHooks,
iam:PassRole
```

### Delete
```json
autoscaling:DeleteLifecycleHook,
autoscaling:DescribeLifecycleHooks
```

### List
```json
autoscaling:DescribeLifecycleHooks
```
