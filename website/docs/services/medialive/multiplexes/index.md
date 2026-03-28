---
title: multiplexes
hide_title: false
hide_table_of_contents: false
keywords:
  - multiplexes
  - medialive
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>multiplex</code> resource or lists <code>multiplexes</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>multiplexes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::MediaLive::Multiplex</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.medialive.multiplexes" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": "The unique arn of the multiplex."
  },
  {
    "name": "availability_zones",
    "type": "array",
    "description": "A list of availability zones for the multiplex."
  },
  {
    "name": "destinations",
    "type": "array",
    "description": "A list of the multiplex output destinations.",
    "children": [
      {
        "name": "multiplex_media_connect_output_destination_settings",
        "type": "object",
        "description": "Multiplex MediaConnect output destination settings."
      }
    ]
  },
  {
    "name": "id",
    "type": "string",
    "description": "The unique id of the multiplex."
  },
  {
    "name": "multiplex_settings",
    "type": "object",
    "description": "Configuration for a multiplex event.",
    "children": [
      {
        "name": "maximum_video_buffer_delay_milliseconds",
        "type": "integer",
        "description": "Maximum video buffer delay in milliseconds."
      },
      {
        "name": "transport_stream_bitrate",
        "type": "integer",
        "description": "Transport stream bit rate."
      },
      {
        "name": "transport_stream_id",
        "type": "integer",
        "description": "Transport stream ID."
      },
      {
        "name": "transport_stream_reserved_bitrate",
        "type": "integer",
        "description": "Transport stream reserved bit rate."
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": "Name of multiplex."
  },
  {
    "name": "pipelines_running_count",
    "type": "integer",
    "description": "The number of currently healthy pipelines."
  },
  {
    "name": "program_count",
    "type": "integer",
    "description": "The number of programs in the multiplex."
  },
  {
    "name": "state",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A collection of key-value pairs.",
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
    "name": "id",
    "type": "string",
    "description": "The unique id of the multiplex."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html"><code>AWS::MediaLive::Multiplex</code></a>.

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
    <td><code>multiplexes</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AvailabilityZones, MultiplexSettings, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>multiplexes</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>multiplexes</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>multiplexes_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>multiplexes</code></td>
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

Gets all properties from an individual <code>multiplex</code>.
```sql
SELECT
  region,
  arn,
  availability_zones,
  destinations,
  id,
  multiplex_settings,
  name,
  pipelines_running_count,
  program_count,
  state,
  tags
FROM awscc.medialive.multiplexes
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>multiplexes</code> in a region.
```sql
SELECT
  region,
  id
FROM awscc.medialive.multiplexes_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>multiplex</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.medialive.multiplexes (
  AvailabilityZones,
  MultiplexSettings,
  Name,
  region
)
SELECT
  '{{ availability_zones }}',
  '{{ multiplex_settings }}',
  '{{ name }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.medialive.multiplexes (
  AvailabilityZones,
  Destinations,
  MultiplexSettings,
  Name,
  Tags,
  region
)
SELECT
  '{{ availability_zones }}',
  '{{ destinations }}',
  '{{ multiplex_settings }}',
  '{{ name }}',
  '{{ tags }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: multiplex
    props:
      - name: availability_zones
        value:
          - '{{ availability_zones[0] }}'
      - name: destinations
        value:
          - multiplex_media_connect_output_destination_settings: null
      - name: multiplex_settings
        value:
          maximum_video_buffer_delay_milliseconds: '{{ maximum_video_buffer_delay_milliseconds }}'
          transport_stream_bitrate: '{{ transport_stream_bitrate }}'
          transport_stream_id: '{{ transport_stream_id }}'
          transport_stream_reserved_bitrate: '{{ transport_stream_reserved_bitrate }}'
      - name: name
        value: '{{ name }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>multiplex</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.medialive.multiplexes
SET PatchDocument = string('{{ {
    "Destinations": destinations,
    "MultiplexSettings": multiplex_settings,
    "Name": name,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.medialive.multiplexes
WHERE
  Identifier = '{{ id }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>multiplexes</code> resource, the following permissions are required:

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
medialive:CreateMultiplex,
medialive:DescribeMultiplex,
medialive:CreateTags
```

</TabItem>
<TabItem value="read">

```json
medialive:DescribeMultiplex
```

</TabItem>
<TabItem value="update">

```json
medialive:UpdateMultiplex,
medialive:DescribeMultiplex,
medialive:CreateTags,
medialive:DeleteTags
```

</TabItem>
<TabItem value="delete">

```json
medialive:DeleteMultiplex,
medialive:DescribeMultiplex
```

</TabItem>
<TabItem value="list">

```json
medialive:ListMultiplexes
```

</TabItem>
</Tabs>