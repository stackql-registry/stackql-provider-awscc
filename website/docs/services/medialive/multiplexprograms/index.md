---
title: multiplexprograms
hide_title: false
hide_table_of_contents: false
keywords:
  - multiplexprograms
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

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>multiplexprogram</code> resource or lists <code>multiplexprograms</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>multiplexprograms</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::MediaLive::Multiplexprogram</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.medialive.multiplexprograms" /></td></tr>
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
    "name": "channel_id",
    "type": "string",
    "description": "The MediaLive channel associated with the program."
  },
  {
    "name": "multiplex_id",
    "type": "string",
    "description": "The ID of the multiplex that the program belongs to."
  },
  {
    "name": "multiplex_program_settings",
    "type": "object",
    "description": "The settings for this multiplex program.",
    "children": [
      {
        "name": "preferred_channel_pipeline",
        "type": "string",
        "description": "Indicates which pipeline is preferred by the multiplex for program ingest.<br />If set to \\\"PIPELINE&#95;0\\\" or \\\"PIPELINE&#95;1\\\" and an unhealthy ingest causes the multiplex to switch to the non-preferred pipeline,<br />it will switch back once that ingest is healthy again. If set to \\\"CURRENTLY&#95;ACTIVE\\\",<br />it will not switch back to the other pipeline based on it recovering to a healthy state,<br />it will only switch if the active pipeline becomes unhealthy.<br />"
      },
      {
        "name": "program_number",
        "type": "integer",
        "description": "Unique program number."
      },
      {
        "name": "service_descriptor",
        "type": "object",
        "description": "Transport stream service descriptor configuration for the Multiplex program.",
        "children": [
          {
            "name": "provider_name",
            "type": "string",
            "description": "Name of the provider."
          },
          {
            "name": "service_name",
            "type": "string",
            "description": "Name of the service."
          }
        ]
      },
      {
        "name": "video_settings",
        "type": "object",
        "description": "Program video settings configuration."
      }
    ]
  },
  {
    "name": "preferred_channel_pipeline",
    "type": "string",
    "description": "The settings for this multiplex program."
  },
  {
    "name": "packet_identifiers_map",
    "type": "object",
    "description": "The packet identifier map for this multiplex program.",
    "children": [
      {
        "name": "audio_pids",
        "type": "array",
        "description": ""
      },
      {
        "name": "dvb_sub_pids",
        "type": "array",
        "description": ""
      },
      {
        "name": "dvb_teletext_pid",
        "type": "integer",
        "description": ""
      },
      {
        "name": "etv_platform_pid",
        "type": "integer",
        "description": ""
      },
      {
        "name": "etv_signal_pid",
        "type": "integer",
        "description": ""
      },
      {
        "name": "klv_data_pids",
        "type": "array",
        "description": ""
      },
      {
        "name": "pcr_pid",
        "type": "integer",
        "description": ""
      },
      {
        "name": "pmt_pid",
        "type": "integer",
        "description": ""
      },
      {
        "name": "private_metadata_pid",
        "type": "integer",
        "description": ""
      },
      {
        "name": "scte27_pids",
        "type": "array",
        "description": ""
      },
      {
        "name": "scte35_pid",
        "type": "integer",
        "description": ""
      },
      {
        "name": "timed_metadata_pid",
        "type": "integer",
        "description": ""
      },
      {
        "name": "video_pid",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "pipeline_details",
    "type": "array",
    "description": "Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.",
    "children": [
      {
        "name": "active_channel_pipeline",
        "type": "string",
        "description": "Identifies the channel pipeline that is currently active for the pipeline (identified by PipelineId) in the multiplex."
      },
      {
        "name": "pipeline_id",
        "type": "string",
        "description": "Identifies a specific pipeline in the multiplex."
      }
    ]
  },
  {
    "name": "program_name",
    "type": "string",
    "description": "The name of the multiplex program."
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
    "name": "multiplex_id",
    "type": "string",
    "description": "The ID of the multiplex that the program belongs to."
  },
  {
    "name": "program_name",
    "type": "string",
    "description": "The name of the multiplex program."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html"><code>AWS::MediaLive::Multiplexprogram</code></a>.

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
    <td><code>multiplexprograms</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>multiplexprograms</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>multiplexprograms</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>multiplexprograms_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>multiplexprograms</code></td>
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

Gets all properties from an individual <code>multiplexprogram</code>.
```sql
SELECT
region,
channel_id,
multiplex_id,
multiplex_program_settings,
preferred_channel_pipeline,
packet_identifiers_map,
pipeline_details,
program_name
FROM awscc.medialive.multiplexprograms
WHERE region = 'us-east-1' AND Identifier = '{{ program_name }}|{{ multiplex_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>multiplexprograms</code> in a region.
```sql
SELECT
region,
program_name,
multiplex_id
FROM awscc.medialive.multiplexprograms_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>multiplexprogram</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.medialive.multiplexprograms (
 MultiplexId,
 MultiplexProgramSettings,
 PreferredChannelPipeline,
 PacketIdentifiersMap,
 PipelineDetails,
 ProgramName,
 region
)
SELECT
'{{ multiplex_id }}',
 '{{ multiplex_program_settings }}',
 '{{ preferred_channel_pipeline }}',
 '{{ packet_identifiers_map }}',
 '{{ pipeline_details }}',
 '{{ program_name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.medialive.multiplexprograms (
 MultiplexId,
 MultiplexProgramSettings,
 PreferredChannelPipeline,
 PacketIdentifiersMap,
 PipelineDetails,
 ProgramName,
 region
)
SELECT
 '{{ multiplex_id }}',
 '{{ multiplex_program_settings }}',
 '{{ preferred_channel_pipeline }}',
 '{{ packet_identifiers_map }}',
 '{{ pipeline_details }}',
 '{{ program_name }}',
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
  - name: multiplexprogram
    props:
      - name: multiplex_id
        value: '{{ multiplex_id }}'
      - name: multiplex_program_settings
        value:
          preferred_channel_pipeline: '{{ preferred_channel_pipeline }}'
          program_number: '{{ program_number }}'
          service_descriptor:
            provider_name: '{{ provider_name }}'
            service_name: '{{ service_name }}'
          video_settings: {}
      - name: preferred_channel_pipeline
        value: null
      - name: packet_identifiers_map
        value:
          audio_pids:
            - '{{ audio_pids[0] }}'
          dvb_sub_pids:
            - '{{ dvb_sub_pids[0] }}'
          dvb_teletext_pid: '{{ dvb_teletext_pid }}'
          etv_platform_pid: '{{ etv_platform_pid }}'
          etv_signal_pid: '{{ etv_signal_pid }}'
          klv_data_pids:
            - '{{ klv_data_pids[0] }}'
          pcr_pid: '{{ pcr_pid }}'
          pmt_pid: '{{ pmt_pid }}'
          private_metadata_pid: '{{ private_metadata_pid }}'
          scte27_pids:
            - '{{ scte27_pids[0] }}'
          scte35_pid: '{{ scte35_pid }}'
          timed_metadata_pid: '{{ timed_metadata_pid }}'
          video_pid: '{{ video_pid }}'
      - name: pipeline_details
        value:
          - active_channel_pipeline: '{{ active_channel_pipeline }}'
            pipeline_id: '{{ pipeline_id }}'
      - name: program_name
        value: '{{ program_name }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>multiplexprogram</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.medialive.multiplexprograms
SET PatchDocument = string('{{ {
    "MultiplexProgramSettings": multiplex_program_settings,
    "PreferredChannelPipeline": preferred_channel_pipeline,
    "PacketIdentifiersMap": packet_identifiers_map,
    "PipelineDetails": pipeline_details
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ program_name }}|{{ multiplex_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.medialive.multiplexprograms
WHERE Identifier = '{{ program_name }}|{{ multiplex_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>multiplexprograms</code> resource, the following permissions are required:

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
medialive:CreateMultiplexProgram,
medialive:DescribeMultiplexProgram
```

</TabItem>
<TabItem value="read">

```json
medialive:DescribeMultiplexProgram
```

</TabItem>
<TabItem value="update">

```json
medialive:UpdateMultiplexProgram,
medialive:DescribeMultiplexProgram
```

</TabItem>
<TabItem value="delete">

```json
medialive:DeleteMultiplexProgram,
medialive:DescribeMultiplexProgram
```

</TabItem>
<TabItem value="list">

```json
medialive:ListMultiplexPrograms
```

</TabItem>
</Tabs>