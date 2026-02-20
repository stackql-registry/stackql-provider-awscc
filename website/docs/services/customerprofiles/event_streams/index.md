---
title: event_streams
hide_title: false
hide_table_of_contents: false
keywords:
  - event_streams
  - customerprofiles
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

Creates, updates, deletes or gets an <code>event_stream</code> resource or lists <code>event_streams</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>event_streams</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An Event Stream resource of Amazon Connect Customer Profiles</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.customerprofiles.event_streams" /></td></tr>
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
    "name": "domain_name",
    "type": "string",
    "description": "The unique name of the domain."
  },
  {
    "name": "event_stream_name",
    "type": "string",
    "description": "The name of the event stream."
  },
  {
    "name": "uri",
    "type": "string",
    "description": "The StreamARN of the destination to deliver profile events to. For example, arn:aws:kinesis:region:account-id:stream/stream-name"
  },
  {
    "name": "event_stream_arn",
    "type": "string",
    "description": "A unique identifier for the event stream."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags used to organize, track, or control access for this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The timestamp of when the export was created."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The operational state of destination stream for export."
  },
  {
    "name": "destination_details",
    "type": "object",
    "description": "Details regarding the Kinesis stream.",
    "children": [
      {
        "name": "status",
        "type": "string",
        "description": "The status of enabling the Kinesis stream as a destination for export."
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
    "name": "domain_name",
    "type": "string",
    "description": "The unique name of the domain."
  },
  {
    "name": "event_stream_name",
    "type": "string",
    "description": "The name of the event stream."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventstream.html"><code>AWS::CustomerProfiles::EventStream</code></a>.

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
    <td><code>event_streams</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DomainName, EventStreamName, Uri, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>event_streams</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>event_streams</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>event_streams_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>event_streams</code></td>
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

Gets all properties from an individual <code>event_stream</code>.
```sql
SELECT
region,
domain_name,
event_stream_name,
uri,
event_stream_arn,
tags,
created_at,
state,
destination_details
FROM awscc.customerprofiles.event_streams
WHERE region = 'us-east-1' AND Identifier = '<DomainName>|<EventStreamName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>event_streams</code> in a region.
```sql
SELECT
region,
domain_name,
event_stream_name
FROM awscc.customerprofiles.event_streams_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>event_stream</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.customerprofiles.event_streams (
 DomainName,
 EventStreamName,
 Uri,
 region
)
SELECT 
'{{ DomainName }}',
 '{{ EventStreamName }}',
 '{{ Uri }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.customerprofiles.event_streams (
 DomainName,
 EventStreamName,
 Uri,
 Tags,
 region
)
SELECT 
 '{{ DomainName }}',
 '{{ EventStreamName }}',
 '{{ Uri }}',
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
  - name: event_stream
    props:
      - name: DomainName
        value: '{{ DomainName }}'
      - name: EventStreamName
        value: '{{ EventStreamName }}'
      - name: Uri
        value: '{{ Uri }}'
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
UPDATE awscc.customerprofiles.event_streams
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<DomainName>|<EventStreamName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.customerprofiles.event_streams
WHERE Identifier = '<DomainName|EventStreamName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>event_streams</code> resource, the following permissions are required:

### Create
```json
profile:CreateEventStream,
iam:PutRolePolicy,
kinesis:DescribeStreamSummary,
profile:TagResource
```

### Read
```json
profile:GetEventStream,
kinesis:DescribeStreamSummary
```

### Update
```json
kinesis:DescribeStreamSummary,
profile:GetEventStream,
profile:UntagResource,
profile:TagResource
```

### Delete
```json
profile:DeleteEventStream,
iam:DeleteRolePolicy
```

### List
```json
profile:ListEventStreams
```
