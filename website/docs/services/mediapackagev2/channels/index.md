---
title: channels
hide_title: false
hide_table_of_contents: false
keywords:
  - channels
  - mediapackagev2
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

Creates, updates, deletes or gets a <code>channel</code> resource or lists <code>channels</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>channels</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><p>Represents an entry point into AWS Elemental MediaPackage for an ABR video content stream sent from an upstream encoder such as AWS Elemental MediaLive. The channel continuously analyzes the content that it receives and prepares it to be distributed to consumers via one or more origin endpoints.</p></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.mediapackagev2.channels" /></td></tr>
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
    "description": "<p>The Amazon Resource Name (ARN) associated with the resource.</p>"
  },
  {
    "name": "channel_group_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "channel_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "<p>The date and time the channel was created.</p>"
  },
  {
    "name": "description",
    "type": "string",
    "description": "<p>Enter any descriptive text that helps you to identify the channel.</p>"
  },
  {
    "name": "ingest_endpoints",
    "type": "array",
    "description": "<p>The list of ingest endpoints.</p>",
    "children": [
      {
        "name": "id",
        "type": "string",
        "description": "<p>The system-generated unique identifier for the IngestEndpoint.</p>"
      },
      {
        "name": "url",
        "type": "string",
        "description": "<p>The ingest domain URL where the source stream should be sent.</p>"
      }
    ]
  },
  {
    "name": "input_switch_configuration",
    "type": "object",
    "description": "<p>The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive.</p>",
    "children": [
      {
        "name": "m_qc_sinput_switching",
        "type": "boolean",
        "description": "<p>When true, AWS Elemental MediaPackage performs input switching based on the MQCS. Default is true. This setting is valid only when &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; is &#95;&#95;CODE&#95;BLOCK&#95;1&#95;&#95;.</p>"
      },
      {
        "name": "preferred_input",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "input_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "modified_at",
    "type": "string",
    "description": "<p>The date and time the channel was modified.</p>"
  },
  {
    "name": "output_header_configuration",
    "type": "object",
    "description": "<p>The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN.</p>",
    "children": [
      {
        "name": "publish_mq_cs",
        "type": "boolean",
        "description": "<p>When true, AWS Elemental MediaPackage includes the MQCS in responses to the CDN. This setting is valid only when &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; is &#95;&#95;CODE&#95;BLOCK&#95;1&#95;&#95;.</p>"
      }
    ]
  },
  {
    "name": "ingest_endpoint_urls",
    "type": "array",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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
    "name": "arn",
    "type": "string",
    "description": "<p>The Amazon Resource Name (ARN) associated with the resource.</p>"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channel.html"><code>AWS::MediaPackageV2::Channel</code></a>.

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
    <td><code>channels</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ChannelGroupName, ChannelName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>channels</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>channels</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>channels_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>channels</code></td>
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

Gets all properties from an individual <code>channel</code>.
```sql
SELECT
region,
arn,
channel_group_name,
channel_name,
created_at,
description,
ingest_endpoints,
input_switch_configuration,
input_type,
modified_at,
output_header_configuration,
ingest_endpoint_urls,
tags
FROM awscc.mediapackagev2.channels
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>channels</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.mediapackagev2.channels_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>channel</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.mediapackagev2.channels (
 ChannelGroupName,
 ChannelName,
 region
)
SELECT 
'{{ ChannelGroupName }}',
 '{{ ChannelName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.mediapackagev2.channels (
 ChannelGroupName,
 ChannelName,
 Description,
 InputSwitchConfiguration,
 InputType,
 OutputHeaderConfiguration,
 Tags,
 region
)
SELECT 
 '{{ ChannelGroupName }}',
 '{{ ChannelName }}',
 '{{ Description }}',
 '{{ InputSwitchConfiguration }}',
 '{{ InputType }}',
 '{{ OutputHeaderConfiguration }}',
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
  - name: channel
    props:
      - name: ChannelGroupName
        value: '{{ ChannelGroupName }}'
      - name: ChannelName
        value: '{{ ChannelName }}'
      - name: Description
        value: '{{ Description }}'
      - name: InputSwitchConfiguration
        value:
          MQCSInputSwitching: '{{ MQCSInputSwitching }}'
          PreferredInput: '{{ PreferredInput }}'
      - name: InputType
        value: '{{ InputType }}'
      - name: OutputHeaderConfiguration
        value:
          PublishMQCS: '{{ PublishMQCS }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>channel</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.mediapackagev2.channels
SET PatchDocument = string('{{ {
    "Description": description,
    "InputSwitchConfiguration": input_switch_configuration,
    "OutputHeaderConfiguration": output_header_configuration,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.mediapackagev2.channels
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>channels</code> resource, the following permissions are required:

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
mediapackagev2:TagResource,
mediapackagev2:CreateChannel
```

</TabItem>
<TabItem value="read">

```json
mediapackagev2:GetChannel
```

</TabItem>
<TabItem value="update">

```json
mediapackagev2:TagResource,
mediapackagev2:UntagResource,
mediapackagev2:ListTagsForResource,
mediapackagev2:UpdateChannel
```

</TabItem>
<TabItem value="delete">

```json
mediapackagev2:GetChannel,
mediapackagev2:DeleteChannel
```

</TabItem>
<TabItem value="list">

```json
mediapackagev2:ListChannels
```

</TabItem>
</Tabs>