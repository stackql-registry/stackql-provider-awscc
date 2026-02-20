---
title: triggers
hide_title: false
hide_table_of_contents: false
keywords:
  - triggers
  - glue
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

Creates, updates, deletes or gets a <code>trigger</code> resource or lists <code>triggers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>triggers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Glue::Trigger</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.glue.triggers" /></td></tr>
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
    "name": "type",
    "type": "string",
    "description": "The type of trigger that this is."
  },
  {
    "name": "start_on_creation",
    "type": "boolean",
    "description": "Set to true to start SCHEDULED and CONDITIONAL triggers when created. True is not supported for ON&#95;DEMAND triggers."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description of this trigger."
  },
  {
    "name": "actions",
    "type": "array",
    "description": "The actions initiated by this trigger.",
    "children": [
      {
        "name": "notification_property",
        "type": "object",
        "description": "Specifies configuration properties of a job run notification.",
        "children": [
          {
            "name": "notify_delay_after",
            "type": "integer",
            "description": "After a job run starts, the number of minutes to wait before sending a job run delay notification"
          }
        ]
      },
      {
        "name": "crawler_name",
        "type": "string",
        "description": "The name of the crawler to be used with this action."
      },
      {
        "name": "timeout",
        "type": "integer",
        "description": "The JobRun timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job."
      },
      {
        "name": "job_name",
        "type": "string",
        "description": "The name of a job to be executed."
      },
      {
        "name": "arguments",
        "type": "object",
        "description": "The job arguments used when this trigger fires. For this job run, they replace the default arguments set in the job definition itself."
      },
      {
        "name": "security_configuration",
        "type": "string",
        "description": "The name of the SecurityConfiguration structure to be used with this action."
      }
    ]
  },
  {
    "name": "event_batching_condition",
    "type": "object",
    "description": "Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.",
    "children": [
      {
        "name": "batch_size",
        "type": "integer",
        "description": "Number of events that must be received from Amazon EventBridge before EventBridge event trigger fires."
      },
      {
        "name": "batch_window",
        "type": "integer",
        "description": "Window of time in seconds after which EventBridge event trigger fires. Window starts when first event is received."
      }
    ]
  },
  {
    "name": "workflow_name",
    "type": "string",
    "description": "The name of the workflow associated with the trigger."
  },
  {
    "name": "schedule",
    "type": "string",
    "description": "A cron expression used to specify the schedule."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "The tags to use with this trigger."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the trigger."
  },
  {
    "name": "predicate",
    "type": "object",
    "description": "The predicate of this trigger, which defines when it will fire.",
    "children": [
      {
        "name": "logical",
        "type": "string",
        "description": "An optional field if only one condition is listed. If multiple conditions are listed, then this field is required."
      },
      {
        "name": "conditions",
        "type": "array",
        "description": "A list of the conditions that determine when the trigger will fire.",
        "children": [
          {
            "name": "job_name",
            "type": "string",
            "description": "The name of the job whose JobRuns this condition applies to, and on which this trigger waits."
          },
          {
            "name": "crawler_name",
            "type": "string",
            "description": "The name of the crawler to which this condition applies."
          },
          {
            "name": "state",
            "type": "string",
            "description": "The condition state. Currently, the values supported are SUCCEEDED, STOPPED, TIMEOUT, and FAILED."
          },
          {
            "name": "crawl_state",
            "type": "string",
            "description": "The state of the crawler to which this condition applies."
          },
          {
            "name": "logical_operator",
            "type": "string",
            "description": "A logical operator."
          }
        ]
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
    "name": "name",
    "type": "string",
    "description": "The name of the trigger."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-trigger.html"><code>AWS::Glue::Trigger</code></a>.

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
    <td><code>triggers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Type, Actions, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>triggers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>triggers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>triggers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>triggers</code></td>
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

Gets all properties from an individual <code>trigger</code>.
```sql
SELECT
region,
type,
start_on_creation,
description,
actions,
event_batching_condition,
workflow_name,
schedule,
tags,
name,
predicate
FROM awscc.glue.triggers
WHERE region = 'us-east-1' AND Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>triggers</code> in a region.
```sql
SELECT
region,
name
FROM awscc.glue.triggers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>trigger</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.glue.triggers (
 Type,
 Actions,
 region
)
SELECT 
'{{ Type }}',
 '{{ Actions }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.glue.triggers (
 Type,
 StartOnCreation,
 Description,
 Actions,
 EventBatchingCondition,
 WorkflowName,
 Schedule,
 Tags,
 Name,
 Predicate,
 region
)
SELECT 
 '{{ Type }}',
 '{{ StartOnCreation }}',
 '{{ Description }}',
 '{{ Actions }}',
 '{{ EventBatchingCondition }}',
 '{{ WorkflowName }}',
 '{{ Schedule }}',
 '{{ Tags }}',
 '{{ Name }}',
 '{{ Predicate }}',
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
  - name: trigger
    props:
      - name: Type
        value: '{{ Type }}'
      - name: StartOnCreation
        value: '{{ StartOnCreation }}'
      - name: Description
        value: '{{ Description }}'
      - name: Actions
        value:
          - NotificationProperty:
              NotifyDelayAfter: '{{ NotifyDelayAfter }}'
            CrawlerName: '{{ CrawlerName }}'
            Timeout: '{{ Timeout }}'
            JobName: '{{ JobName }}'
            Arguments: {}
            SecurityConfiguration: '{{ SecurityConfiguration }}'
      - name: EventBatchingCondition
        value:
          BatchSize: '{{ BatchSize }}'
          BatchWindow: '{{ BatchWindow }}'
      - name: WorkflowName
        value: '{{ WorkflowName }}'
      - name: Schedule
        value: '{{ Schedule }}'
      - name: Tags
        value: {}
      - name: Name
        value: '{{ Name }}'
      - name: Predicate
        value:
          Logical: '{{ Logical }}'
          Conditions:
            - JobName: '{{ JobName }}'
              CrawlerName: '{{ CrawlerName }}'
              State: '{{ State }}'
              CrawlState: '{{ CrawlState }}'
              LogicalOperator: '{{ LogicalOperator }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.glue.triggers
SET PatchDocument = string('{{ {
    "StartOnCreation": start_on_creation,
    "Description": description,
    "Actions": actions,
    "EventBatchingCondition": event_batching_condition,
    "Schedule": schedule,
    "Tags": tags,
    "Predicate": predicate
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.glue.triggers
WHERE Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>triggers</code> resource, the following permissions are required:

### Create
```json
glue:CreateTrigger,
glue:GetTrigger,
glue:TagResource
```

### Read
```json
glue:GetTrigger,
glue:GetTags
```

### Update
```json
glue:UpdateTrigger,
glue:UntagResource,
glue:TagResource
```

### Delete
```json
glue:DeleteTrigger,
glue:GetTrigger
```

### List
```json
glue:ListTriggers
```
