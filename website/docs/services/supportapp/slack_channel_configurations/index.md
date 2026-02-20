---
title: slack_channel_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - slack_channel_configurations
  - supportapp
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

Creates, updates, deletes or gets a <code>slack_channel_configuration</code> resource or lists <code>slack_channel_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>slack_channel_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An AWS Support App resource that creates, updates, lists and deletes Slack channel configurations.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.supportapp.slack_channel_configurations" /></td></tr>
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
    "name": "team_id",
    "type": "string",
    "description": "The team ID in Slack, which uniquely identifies a workspace."
  },
  {
    "name": "channel_id",
    "type": "string",
    "description": "The channel ID in Slack, which identifies a channel within a workspace."
  },
  {
    "name": "channel_name",
    "type": "string",
    "description": "The channel name in Slack."
  },
  {
    "name": "notify_on_create_or_reopen_case",
    "type": "boolean",
    "description": "Whether to notify when a case is created or reopened."
  },
  {
    "name": "notify_on_add_correspondence_to_case",
    "type": "boolean",
    "description": "Whether to notify when a correspondence is added to a case."
  },
  {
    "name": "notify_on_resolve_case",
    "type": "boolean",
    "description": "Whether to notify when a case is resolved."
  },
  {
    "name": "notify_on_case_severity",
    "type": "string",
    "description": "The severity level of a support case that a customer wants to get notified for."
  },
  {
    "name": "channel_role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of an IAM role that grants the AWS Support App access to perform operations for AWS services."
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
    "name": "team_id",
    "type": "string",
    "description": "The team ID in Slack, which uniquely identifies a workspace."
  },
  {
    "name": "channel_id",
    "type": "string",
    "description": "The channel ID in Slack, which identifies a channel within a workspace."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-slackchannelconfiguration.html"><code>AWS::SupportApp::SlackChannelConfiguration</code></a>.

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
    <td><code>slack_channel_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TeamId, ChannelId, NotifyOnCaseSeverity, ChannelRoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>slack_channel_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>slack_channel_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>slack_channel_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>slack_channel_configurations</code></td>
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

Gets all properties from an individual <code>slack_channel_configuration</code>.
```sql
SELECT
region,
team_id,
channel_id,
channel_name,
notify_on_create_or_reopen_case,
notify_on_add_correspondence_to_case,
notify_on_resolve_case,
notify_on_case_severity,
channel_role_arn
FROM awscc.supportapp.slack_channel_configurations
WHERE region = 'us-east-1' AND data__Identifier = '<TeamId>|<ChannelId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>slack_channel_configurations</code> in a region.
```sql
SELECT
region,
team_id,
channel_id
FROM awscc.supportapp.slack_channel_configurations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>slack_channel_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.supportapp.slack_channel_configurations (
 TeamId,
 ChannelId,
 NotifyOnCaseSeverity,
 ChannelRoleArn,
 region
)
SELECT 
'{{ TeamId }}',
 '{{ ChannelId }}',
 '{{ NotifyOnCaseSeverity }}',
 '{{ ChannelRoleArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.supportapp.slack_channel_configurations (
 TeamId,
 ChannelId,
 ChannelName,
 NotifyOnCreateOrReopenCase,
 NotifyOnAddCorrespondenceToCase,
 NotifyOnResolveCase,
 NotifyOnCaseSeverity,
 ChannelRoleArn,
 region
)
SELECT 
 '{{ TeamId }}',
 '{{ ChannelId }}',
 '{{ ChannelName }}',
 '{{ NotifyOnCreateOrReopenCase }}',
 '{{ NotifyOnAddCorrespondenceToCase }}',
 '{{ NotifyOnResolveCase }}',
 '{{ NotifyOnCaseSeverity }}',
 '{{ ChannelRoleArn }}',
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
  - name: slack_channel_configuration
    props:
      - name: TeamId
        value: '{{ TeamId }}'
      - name: ChannelId
        value: '{{ ChannelId }}'
      - name: ChannelName
        value: '{{ ChannelName }}'
      - name: NotifyOnCreateOrReopenCase
        value: '{{ NotifyOnCreateOrReopenCase }}'
      - name: NotifyOnAddCorrespondenceToCase
        value: '{{ NotifyOnAddCorrespondenceToCase }}'
      - name: NotifyOnResolveCase
        value: '{{ NotifyOnResolveCase }}'
      - name: NotifyOnCaseSeverity
        value: '{{ NotifyOnCaseSeverity }}'
      - name: ChannelRoleArn
        value: '{{ ChannelRoleArn }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.supportapp.slack_channel_configurations
SET data__PatchDocument = string('{{ {
    "ChannelName": channel_name,
    "NotifyOnCreateOrReopenCase": notify_on_create_or_reopen_case,
    "NotifyOnAddCorrespondenceToCase": notify_on_add_correspondence_to_case,
    "NotifyOnResolveCase": notify_on_resolve_case,
    "NotifyOnCaseSeverity": notify_on_case_severity,
    "ChannelRoleArn": channel_role_arn
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<TeamId>|<ChannelId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.supportapp.slack_channel_configurations
WHERE data__Identifier = '<TeamId|ChannelId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>slack_channel_configurations</code> resource, the following permissions are required:

### Create
```json
supportapp:CreateSlackChannelConfiguration,
supportapp:ListSlackChannelConfigurations
```

### Read
```json
supportapp:ListSlackChannelConfigurations
```

### Update
```json
supportapp:UpdateSlackChannelConfiguration,
supportapp:ListSlackChannelConfigurations
```

### Delete
```json
supportapp:DeleteSlackChannelConfiguration,
supportapp:ListSlackChannelConfigurations
```

### List
```json
supportapp:ListSlackChannelConfigurations
```
