---
title: queues
hide_title: false
hide_table_of_contents: false
keywords:
  - queues
  - connect
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

Creates, updates, deletes or gets a <code>queue</code> resource or lists <code>queues</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>queues</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Connect::Queue</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.queues" /></td></tr>
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
    "name": "instance_arn",
    "type": "string",
    "description": "The identifier of the Amazon Connect instance."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the queue."
  },
  {
    "name": "hours_of_operation_arn",
    "type": "string",
    "description": "The identifier for the hours of operation."
  },
  {
    "name": "max_contacts",
    "type": "integer",
    "description": "The maximum number of contacts that can be in the queue before it is considered full."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the queue."
  },
  {
    "name": "outbound_caller_config",
    "type": "object",
    "description": "The outbound caller ID name, number, and outbound whisper flow.",
    "children": [
      {
        "name": "outbound_caller_id_name",
        "type": "string",
        "description": "The caller ID name."
      },
      {
        "name": "outbound_caller_id_number_arn",
        "type": "string",
        "description": "The caller ID number."
      },
      {
        "name": "outbound_flow_arn",
        "type": "string",
        "description": "The outbound whisper flow to be used during an outbound call."
      }
    ]
  },
  {
    "name": "outbound_email_config",
    "type": "object",
    "description": "The outbound email address ID.",
    "children": [
      {
        "name": "outbound_email_address_id",
        "type": "string",
        "description": "The email address connect resource ID."
      }
    ]
  },
  {
    "name": "queue_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the queue."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the queue."
  },
  {
    "name": "quick_connect_arns",
    "type": "array",
    "description": "The quick connects available to agents who are working the queue."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters"
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. . You can specify a value that is maximum of 256 Unicode characters"
      }
    ]
  },
  {
    "name": "type",
    "type": "string",
    "description": "The type of queue."
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
    "name": "queue_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the queue."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-queue.html"><code>AWS::Connect::Queue</code></a>.

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
    <td><code>queues</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="InstanceArn, HoursOfOperationArn, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>queues</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>queues</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>queues_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>queues</code></td>
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

Gets all properties from an individual <code>queue</code>.
```sql
SELECT
region,
instance_arn,
description,
hours_of_operation_arn,
max_contacts,
name,
outbound_caller_config,
outbound_email_config,
queue_arn,
status,
quick_connect_arns,
tags,
type
FROM awscc.connect.queues
WHERE region = 'us-east-1' AND Identifier = '{{ queue_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>queues</code> in a region.
```sql
SELECT
region,
queue_arn
FROM awscc.connect.queues_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>queue</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.connect.queues (
 InstanceArn,
 HoursOfOperationArn,
 Name,
 region
)
SELECT
'{{ instance_arn }}',
 '{{ hours_of_operation_arn }}',
 '{{ name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.connect.queues (
 InstanceArn,
 Description,
 HoursOfOperationArn,
 MaxContacts,
 Name,
 OutboundCallerConfig,
 OutboundEmailConfig,
 Status,
 QuickConnectArns,
 Tags,
 region
)
SELECT
 '{{ instance_arn }}',
 '{{ description }}',
 '{{ hours_of_operation_arn }}',
 '{{ max_contacts }}',
 '{{ name }}',
 '{{ outbound_caller_config }}',
 '{{ outbound_email_config }}',
 '{{ status }}',
 '{{ quick_connect_arns }}',
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
  - name: queue
    props:
      - name: instance_arn
        value: '{{ instance_arn }}'
      - name: description
        value: '{{ description }}'
      - name: hours_of_operation_arn
        value: '{{ hours_of_operation_arn }}'
      - name: max_contacts
        value: '{{ max_contacts }}'
      - name: name
        value: '{{ name }}'
      - name: outbound_caller_config
        value:
          outbound_caller_id_name: '{{ outbound_caller_id_name }}'
          outbound_caller_id_number_arn: '{{ outbound_caller_id_number_arn }}'
          outbound_flow_arn: '{{ outbound_flow_arn }}'
      - name: outbound_email_config
        value:
          outbound_email_address_id: '{{ outbound_email_address_id }}'
      - name: status
        value: '{{ status }}'
      - name: quick_connect_arns
        value:
          - '{{ quick_connect_arns[0] }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>queue</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.connect.queues
SET PatchDocument = string('{{ {
    "InstanceArn": instance_arn,
    "Description": description,
    "HoursOfOperationArn": hours_of_operation_arn,
    "MaxContacts": max_contacts,
    "Name": name,
    "OutboundCallerConfig": outbound_caller_config,
    "OutboundEmailConfig": outbound_email_config,
    "Status": status,
    "QuickConnectArns": quick_connect_arns,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ queue_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connect.queues
WHERE Identifier = '{{ queue_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>queues</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
connect:CreateQueue,
connect:TagResource
```

</TabItem>
<TabItem value="read">

```json
connect:DescribeQueue,
connect:ListQueueQuickConnects
```

</TabItem>
<TabItem value="delete">

```json
connect:DeleteQueue,
connect:UntagResource
```

</TabItem>
<TabItem value="update">

```json
connect:UpdateQueueHoursOfOperation,
connect:UpdateQueueMaxContacts,
connect:UpdateQueueName,
connect:UpdateQueueOutboundCallerConfig,
connect:UpdateQueueOutboundEmailConfig,
connect:UpdateQueueStatus,
connect:AssociateQueueQuickConnects,
connect:DisassociateQueueQuickConnects,
connect:TagResource,
connect:UntagResource
```

</TabItem>
<TabItem value="list">

```json
connect:ListQueues,
connect:ListQueueQuickConnects
```

</TabItem>
</Tabs>