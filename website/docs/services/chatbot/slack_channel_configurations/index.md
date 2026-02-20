---
title: slack_channel_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - slack_channel_configurations
  - chatbot
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
<tr><td><b>Description</b></td><td>Resource schema for AWS::Chatbot::SlackChannelConfiguration.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.chatbot.slack_channel_configurations" /></td></tr>
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
    "name": "slack_workspace_id",
    "type": "string",
    "description": "The id of the Slack workspace"
  },
  {
    "name": "slack_channel_id",
    "type": "string",
    "description": "The id of the Slack channel"
  },
  {
    "name": "configuration_name",
    "type": "string",
    "description": "The name of the configuration"
  },
  {
    "name": "iam_role_arn",
    "type": "string",
    "description": "The ARN of the IAM role that defines the permissions for AWS Chatbot"
  },
  {
    "name": "sns_topic_arns",
    "type": "array",
    "description": "ARNs of SNS topics which delivers notifications to AWS Chatbot, for example CloudWatch alarm notifications."
  },
  {
    "name": "logging_level",
    "type": "string",
    "description": "Specifies the logging level for this configuration:ERROR,INFO or NONE. This property affects the log entries pushed to Amazon CloudWatch logs"
  },
  {
    "name": "arn",
    "type": "string",
    "description": "Amazon Resource Name (ARN) of the configuration"
  },
  {
    "name": "guardrail_policies",
    "type": "array",
    "description": "The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied as a default if this is not set."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags to add to the configuration",
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
    "name": "user_role_required",
    "type": "boolean",
    "description": "Enables use of a user role requirement in your chat configuration"
  },
  {
    "name": "customization_resource_arns",
    "type": "array",
    "description": "ARNs of Custom Actions to associate with notifications in the provided chat channel."
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
    "description": "Amazon Resource Name (ARN) of the configuration"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html"><code>AWS::Chatbot::SlackChannelConfiguration</code></a>.

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
    <td><CopyableCode code="SlackWorkspaceId, SlackChannelId, ConfigurationName, IamRoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>slack_channel_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>slack_channel_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
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

Gets all properties from an individual <code>slack_channel_configuration</code>.
```sql
SELECT
region,
slack_workspace_id,
slack_channel_id,
configuration_name,
iam_role_arn,
sns_topic_arns,
logging_level,
arn,
guardrail_policies,
tags,
user_role_required,
customization_resource_arns
FROM awscc.chatbot.slack_channel_configurations
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>slack_channel_configurations</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.chatbot.slack_channel_configurations_list_only
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
INSERT INTO awscc.chatbot.slack_channel_configurations (
 SlackWorkspaceId,
 SlackChannelId,
 ConfigurationName,
 IamRoleArn,
 region
)
SELECT 
'{{ SlackWorkspaceId }}',
 '{{ SlackChannelId }}',
 '{{ ConfigurationName }}',
 '{{ IamRoleArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.chatbot.slack_channel_configurations (
 SlackWorkspaceId,
 SlackChannelId,
 ConfigurationName,
 IamRoleArn,
 SnsTopicArns,
 LoggingLevel,
 GuardrailPolicies,
 Tags,
 UserRoleRequired,
 CustomizationResourceArns,
 region
)
SELECT 
 '{{ SlackWorkspaceId }}',
 '{{ SlackChannelId }}',
 '{{ ConfigurationName }}',
 '{{ IamRoleArn }}',
 '{{ SnsTopicArns }}',
 '{{ LoggingLevel }}',
 '{{ GuardrailPolicies }}',
 '{{ Tags }}',
 '{{ UserRoleRequired }}',
 '{{ CustomizationResourceArns }}',
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
      - name: SlackWorkspaceId
        value: '{{ SlackWorkspaceId }}'
      - name: SlackChannelId
        value: '{{ SlackChannelId }}'
      - name: ConfigurationName
        value: '{{ ConfigurationName }}'
      - name: IamRoleArn
        value: '{{ IamRoleArn }}'
      - name: SnsTopicArns
        value:
          - '{{ SnsTopicArns[0] }}'
      - name: LoggingLevel
        value: '{{ LoggingLevel }}'
      - name: GuardrailPolicies
        value:
          - '{{ GuardrailPolicies[0] }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: UserRoleRequired
        value: '{{ UserRoleRequired }}'
      - name: CustomizationResourceArns
        value:
          - '{{ CustomizationResourceArns[0] }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.chatbot.slack_channel_configurations
SET PatchDocument = string('{{ {
    "SlackChannelId": slack_channel_id,
    "IamRoleArn": iam_role_arn,
    "SnsTopicArns": sns_topic_arns,
    "LoggingLevel": logging_level,
    "GuardrailPolicies": guardrail_policies,
    "Tags": tags,
    "UserRoleRequired": user_role_required,
    "CustomizationResourceArns": customization_resource_arns
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.chatbot.slack_channel_configurations
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>slack_channel_configurations</code> resource, the following permissions are required:

### Create
```json
chatbot:CreateSlackChannelConfiguration,
chatbot:TagResource,
chatbot:AssociateToConfiguration,
chatbot:ListAssociations,
iam:PassRole,
iam:CreateServiceLinkedRole
```

### Read
```json
chatbot:DescribeSlackChannelConfigurations,
chatbot:ListAssociations
```

### Update
```json
chatbot:UpdateSlackChannelConfiguration,
chatbot:TagResource,
chatbot:UntagResource,
chatbot:ListTagsForResource,
chatbot:AssociateToConfiguration,
chatbot:DisassociateFromConfiguration,
chatbot:ListAssociations,
iam:PassRole
```

### Delete
```json
chatbot:DeleteSlackChannelConfiguration,
chatbot:DisassociateFromConfiguration,
chatbot:ListAssociations
```

### List
```json
chatbot:DescribeSlackChannelConfigurations,
chatbot:ListAssociations
```
