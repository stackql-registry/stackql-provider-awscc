---
title: event_buses
hide_title: false
hide_table_of_contents: false
keywords:
  - event_buses
  - events
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

Creates, updates, deletes or gets an <code>event_bus</code> resource or lists <code>event_buses</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>event_buses</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource type definition for AWS::Events::EventBus</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.events.event_buses" /></td></tr>
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
    "name": "event_source_name",
    "type": "string",
    "description": "If you are creating a partner event bus, this specifies the partner event source that the new event bus will be matched with."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the event bus."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Any tags assigned to the event bus.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the event bus."
  },
  {
    "name": "kms_key_identifier",
    "type": "string",
    "description": "Kms Key Identifier used to encrypt events at rest in the event bus."
  },
  {
    "name": "policy",
    "type": "object",
    "description": "A JSON string that describes the permission policy statement for the event bus."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the event bus."
  },
  {
    "name": "dead_letter_config",
    "type": "object",
    "description": "Dead Letter Queue for the event bus.",
    "children": [
      {
        "name": "arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "log_config",
    "type": "object",
    "description": "The logging configuration settings for vended logs.",
    "children": [
      {
        "name": "include_detail",
        "type": "string",
        "description": "Configures whether or not to include event detail, input transformer details, target properties, and target input in the applicable log messages."
      },
      {
        "name": "level",
        "type": "string",
        "description": "Configures the log level of the EventBus and determines which log messages are sent to Ingestion Hub for delivery."
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
    "description": "The name of the event bus."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbus.html"><code>AWS::Events::EventBus</code></a>.

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
    <td><code>event_buses</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>event_buses</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>event_buses</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>event_buses_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>event_buses</code></td>
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

Gets all properties from an individual <code>event_bus</code>.
```sql
SELECT
region,
event_source_name,
name,
tags,
description,
kms_key_identifier,
policy,
arn,
dead_letter_config,
log_config
FROM awscc.events.event_buses
WHERE region = 'us-east-1' AND Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>event_buses</code> in a region.
```sql
SELECT
region,
name
FROM awscc.events.event_buses_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>event_bus</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.events.event_buses (
 Name,
 region
)
SELECT 
'{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.events.event_buses (
 EventSourceName,
 Name,
 Tags,
 Description,
 KmsKeyIdentifier,
 Policy,
 DeadLetterConfig,
 LogConfig,
 region
)
SELECT 
 '{{ EventSourceName }}',
 '{{ Name }}',
 '{{ Tags }}',
 '{{ Description }}',
 '{{ KmsKeyIdentifier }}',
 '{{ Policy }}',
 '{{ DeadLetterConfig }}',
 '{{ LogConfig }}',
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
  - name: event_bus
    props:
      - name: EventSourceName
        value: '{{ EventSourceName }}'
      - name: Name
        value: '{{ Name }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: Description
        value: '{{ Description }}'
      - name: KmsKeyIdentifier
        value: '{{ KmsKeyIdentifier }}'
      - name: Policy
        value: {}
      - name: DeadLetterConfig
        value:
          Arn: '{{ Arn }}'
      - name: LogConfig
        value:
          IncludeDetail: '{{ IncludeDetail }}'
          Level: '{{ Level }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.events.event_buses
SET PatchDocument = string('{{ {
    "EventSourceName": event_source_name,
    "Tags": tags,
    "Description": description,
    "KmsKeyIdentifier": kms_key_identifier,
    "Policy": policy,
    "DeadLetterConfig": dead_letter_config,
    "LogConfig": log_config
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.events.event_buses
WHERE Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>event_buses</code> resource, the following permissions are required:

### Create
```json
events:CreateEventBus,
events:DescribeEventBus,
events:PutPermission,
events:ListTagsForResource,
events:TagResource,
kms:DescribeKey,
kms:GenerateDataKey,
kms:Decrypt
```

### Read
```json
events:DescribeEventBus,
events:ListTagsForResource
```

### Update
```json
events:TagResource,
events:UntagResource,
events:PutPermission,
events:DescribeEventBus,
events:UpdateEventBus,
kms:DescribeKey,
kms:GenerateDataKey,
kms:Decrypt
```

### Delete
```json
events:DescribeEventBus,
events:UpdateEventBus,
events:ListTagsForResource,
events:UntagResource,
events:RemovePermission,
events:DeleteEventBus
```

### List
```json
events:ListEventBuses,
events:ListTagsForResource
```
