---
title: job_queues
hide_title: false
hide_table_of_contents: false
keywords:
  - job_queues
  - batch
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

Creates, updates, deletes or gets a <code>job_queue</code> resource or lists <code>job_queues</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>job_queues</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Batch::JobQueue</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.batch.job_queues" /></td></tr>
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
    "name": "job_queue_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "job_queue_arn",
    "type": "string",
    "description": "ARN of the Scheduling Policy."
  },
  {
    "name": "job_queue_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "compute_environment_order",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "compute_environment",
        "type": "string",
        "description": ""
      },
      {
        "name": "order",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "service_environment_order",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "service_environment",
        "type": "string",
        "description": ""
      },
      {
        "name": "order",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "job_state_time_limit_actions",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "action",
        "type": "string",
        "description": ""
      },
      {
        "name": "max_time_seconds",
        "type": "integer",
        "description": ""
      },
      {
        "name": "reason",
        "type": "string",
        "description": ""
      },
      {
        "name": "state",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "priority",
    "type": "integer",
    "description": ""
  },
  {
    "name": "state",
    "type": "string",
    "description": ""
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
    "name": "job_queue_arn",
    "type": "string",
    "description": "ARN of the Scheduling Policy."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobqueue.html"><code>AWS::Batch::JobQueue</code></a>.

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
    <td><code>job_queues</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Priority, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>job_queues</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>job_queues</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>job_queues_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>job_queues</code></td>
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

Gets all properties from an individual <code>job_queue</code>.
```sql
SELECT
region,
job_queue_name,
job_queue_arn,
job_queue_type,
compute_environment_order,
service_environment_order,
job_state_time_limit_actions,
priority,
state,
scheduling_policy_arn,
tags
FROM awscc.batch.job_queues
WHERE region = 'us-east-1' AND data__Identifier = '<JobQueueArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>job_queues</code> in a region.
```sql
SELECT
region,
job_queue_arn
FROM awscc.batch.job_queues_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>job_queue</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.batch.job_queues (
 Priority,
 region
)
SELECT 
'{{ Priority }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.batch.job_queues (
 JobQueueName,
 JobQueueType,
 ComputeEnvironmentOrder,
 ServiceEnvironmentOrder,
 JobStateTimeLimitActions,
 Priority,
 State,
 SchedulingPolicyArn,
 Tags,
 region
)
SELECT 
 '{{ JobQueueName }}',
 '{{ JobQueueType }}',
 '{{ ComputeEnvironmentOrder }}',
 '{{ ServiceEnvironmentOrder }}',
 '{{ JobStateTimeLimitActions }}',
 '{{ Priority }}',
 '{{ State }}',
 '{{ SchedulingPolicyArn }}',
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
  - name: job_queue
    props:
      - name: JobQueueName
        value: '{{ JobQueueName }}'
      - name: JobQueueType
        value: '{{ JobQueueType }}'
      - name: ComputeEnvironmentOrder
        value:
          - ComputeEnvironment: '{{ ComputeEnvironment }}'
            Order: '{{ Order }}'
      - name: ServiceEnvironmentOrder
        value:
          - ServiceEnvironment: '{{ ServiceEnvironment }}'
            Order: '{{ Order }}'
      - name: JobStateTimeLimitActions
        value:
          - Action: '{{ Action }}'
            MaxTimeSeconds: '{{ MaxTimeSeconds }}'
            Reason: '{{ Reason }}'
            State: '{{ State }}'
      - name: Priority
        value: '{{ Priority }}'
      - name: State
        value: '{{ State }}'
      - name: SchedulingPolicyArn
        value: '{{ SchedulingPolicyArn }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.batch.job_queues
SET data__PatchDocument = string('{{ {
    "ComputeEnvironmentOrder": compute_environment_order,
    "ServiceEnvironmentOrder": service_environment_order,
    "JobStateTimeLimitActions": job_state_time_limit_actions,
    "Priority": priority,
    "State": state,
    "SchedulingPolicyArn": scheduling_policy_arn
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<JobQueueArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.batch.job_queues
WHERE data__Identifier = '<JobQueueArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>job_queues</code> resource, the following permissions are required:

### Create
```json
Batch:CreateJobQueue,
Batch:TagResource,
Batch:DescribeJobQueues
```

### Read
```json
Batch:DescribeJobQueues
```

### Update
```json
Batch:DescribeJobQueues,
Batch:UpdateJobQueue,
Batch:TagResource,
Batch:UnTagResource
```

### Delete
```json
Batch:UpdateJobQueue,
Batch:DescribeJobQueues,
Batch:DeleteJobQueue
```

### List
```json
Batch:DescribeJobQueues
```
