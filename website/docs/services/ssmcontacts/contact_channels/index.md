---
title: contact_channels
hide_title: false
hide_table_of_contents: false
keywords:
  - contact_channels
  - ssmcontacts
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

Creates, updates, deletes or gets a <code>contact_channel</code> resource or lists <code>contact_channels</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>contact_channels</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SSMContacts::ContactChannel</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ssmcontacts.contact_channels" /></td></tr>
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
    "name": "contact_id",
    "type": "string",
    "description": "ARN of the contact resource"
  },
  {
    "name": "channel_name",
    "type": "string",
    "description": "The device name. String of 6 to 50 alphabetical, numeric, dash, and underscore characters."
  },
  {
    "name": "channel_type",
    "type": "string",
    "description": "Device type, which specify notification channel. Currently supported values: “SMS”, “VOICE”, “EMAIL”, “CHATBOT."
  },
  {
    "name": "defer_activation",
    "type": "boolean",
    "description": "If you want to activate the channel at a later time, you can choose to defer activation. SSM Incident Manager can't engage your contact channel until it has been activated."
  },
  {
    "name": "channel_address",
    "type": "string",
    "description": "The details that SSM Incident Manager uses when trying to engage the contact channel."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the engagement to a contact channel."
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
    "description": "The Amazon Resource Name (ARN) of the engagement to a contact channel."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html"><code>AWS::SSMContacts::ContactChannel</code></a>.

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
    <td><code>contact_channels</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>contact_channels</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>contact_channels</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>contact_channels_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>contact_channels</code></td>
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

Gets all properties from an individual <code>contact_channel</code>.
```sql
SELECT
region,
contact_id,
channel_name,
channel_type,
defer_activation,
channel_address,
arn
FROM awscc.ssmcontacts.contact_channels
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>contact_channels</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.ssmcontacts.contact_channels_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>contact_channel</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ssmcontacts.contact_channels (
 ContactId,
 ChannelName,
 ChannelType,
 DeferActivation,
 ChannelAddress,
 region
)
SELECT 
'{{ ContactId }}',
 '{{ ChannelName }}',
 '{{ ChannelType }}',
 '{{ DeferActivation }}',
 '{{ ChannelAddress }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ssmcontacts.contact_channels (
 ContactId,
 ChannelName,
 ChannelType,
 DeferActivation,
 ChannelAddress,
 region
)
SELECT 
 '{{ ContactId }}',
 '{{ ChannelName }}',
 '{{ ChannelType }}',
 '{{ DeferActivation }}',
 '{{ ChannelAddress }}',
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
  - name: contact_channel
    props:
      - name: ContactId
        value: '{{ ContactId }}'
      - name: ChannelName
        value: '{{ ChannelName }}'
      - name: ChannelType
        value: '{{ ChannelType }}'
      - name: DeferActivation
        value: '{{ DeferActivation }}'
      - name: ChannelAddress
        value: '{{ ChannelAddress }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>contact_channel</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ssmcontacts.contact_channels
SET PatchDocument = string('{{ {
    "ChannelName": channel_name,
    "DeferActivation": defer_activation,
    "ChannelAddress": channel_address
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ssmcontacts.contact_channels
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>contact_channels</code> resource, the following permissions are required:

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
ssm-contacts:CreateContactChannel,
ssm-contacts:GetContactChannel
```

</TabItem>
<TabItem value="read">

```json
ssm-contacts:GetContactChannel
```

</TabItem>
<TabItem value="update">

```json
ssm-contacts:UpdateContactChannel,
ssm-contacts:GetContactChannel
```

</TabItem>
<TabItem value="delete">

```json
ssm-contacts:DeleteContactChannel,
ssm-contacts:GetContactChannel
```

</TabItem>
<TabItem value="list">

```json
ssm-contacts:ListContactChannels
```

</TabItem>
</Tabs>