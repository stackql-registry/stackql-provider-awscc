---
title: channels
hide_title: false
hide_table_of_contents: false
keywords:
  - channels
  - cloudtrail
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
<tr><td><b>Description</b></td><td>A channel receives events from a specific source (such as an on-premises storage solution or application, or a partner event data source), and delivers the events to one or more event data stores. You use channels to ingest events into CloudTrail from sources outside AWS.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudtrail.channels" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "The name of the channel."
  },
  {
    "name": "source",
    "type": "string",
    "description": "The ARN of an on-premises storage solution or application, or a partner event source."
  },
  {
    "name": "destinations",
    "type": "array",
    "description": "One or more resources to which events arriving through a channel are logged and stored.",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": "The type of destination for events arriving from a channel."
      },
      {
        "name": "location",
        "type": "string",
        "description": "The ARN of a resource that receives events from a channel."
      }
    ]
  },
  {
    "name": "channel_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of a channel."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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
    "name": "channel_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of a channel."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html"><code>AWS::CloudTrail::Channel</code></a>.

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
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>channels</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>channels</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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

Gets all properties from an individual <code>channel</code>.
```sql
SELECT
region,
name,
source,
destinations,
channel_arn,
tags
FROM awscc.cloudtrail.channels
WHERE region = 'us-east-1' AND data__Identifier = '<ChannelArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>channels</code> in a region.
```sql
SELECT
region,
channel_arn
FROM awscc.cloudtrail.channels_list_only
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
INSERT INTO awscc.cloudtrail.channels (
 ,
 region
)
SELECT 
'{{  }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudtrail.channels (
 Name,
 Source,
 Destinations,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Source }}',
 '{{ Destinations }}',
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
      - name: Name
        value: '{{ Name }}'
      - name: Source
        value: '{{ Source }}'
      - name: Destinations
        value:
          - Type: '{{ Type }}'
            Location: '{{ Location }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.cloudtrail.channels
SET data__PatchDocument = string('{{ {
    "Name": name,
    "Destinations": destinations,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ChannelArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudtrail.channels
WHERE data__Identifier = '<ChannelArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>channels</code> resource, the following permissions are required:

### Create
```json
CloudTrail:CreateChannel,
CloudTrail:AddTags
```

### Read
```json
CloudTrail:GetChannel,
CloudTrail:ListChannels,
CloudTrail:ListTags
```

### Update
```json
CloudTrail:UpdateChannel,
CloudTrail:GetChannel,
CloudTrail:AddTags,
CloudTrail:RemoveTags
```

### Delete
```json
CloudTrail:DeleteChannel
```

### List
```json
CloudTrail:ListChannels
```
