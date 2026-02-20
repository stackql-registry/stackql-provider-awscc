---
title: microsoft_teams_channel_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - microsoft_teams_channel_configurations
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

Creates, updates, deletes or gets a <code>microsoft_teams_channel_configuration</code> resource or lists <code>microsoft_teams_channel_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>microsoft_teams_channel_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::Chatbot::MicrosoftTeamsChannelConfiguration.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.chatbot.microsoft_teams_channel_configurations" /></td></tr>
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
    "description": "The id of the Microsoft Teams team"
  },
  {
    "name": "teams_channel_id",
    "type": "string",
    "description": "The id of the Microsoft Teams channel"
  },
  {
    "name": "teams_channel_name",
    "type": "string",
    "description": "The name of the Microsoft Teams channel"
  },
  {
    "name": "teams_tenant_id",
    "type": "string",
    "description": "The id of the Microsoft Teams tenant"
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
    "name": "user_role_required",
    "type": "boolean",
    "description": "Enables use of a user role requirement in your chat configuration"
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-microsoftteamschannelconfiguration.html"><code>AWS::Chatbot::MicrosoftTeamsChannelConfiguration</code></a>.

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
    <td><code>microsoft_teams_channel_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TeamId, TeamsChannelId, TeamsTenantId, ConfigurationName, IamRoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>microsoft_teams_channel_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>microsoft_teams_channel_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>microsoft_teams_channel_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>microsoft_teams_channel_configurations</code></td>
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

Gets all properties from an individual <code>microsoft_teams_channel_configuration</code>.
```sql
SELECT
region,
team_id,
teams_channel_id,
teams_channel_name,
teams_tenant_id,
configuration_name,
iam_role_arn,
sns_topic_arns,
logging_level,
arn,
guardrail_policies,
user_role_required,
tags,
customization_resource_arns
FROM awscc.chatbot.microsoft_teams_channel_configurations
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>microsoft_teams_channel_configurations</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.chatbot.microsoft_teams_channel_configurations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>microsoft_teams_channel_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.chatbot.microsoft_teams_channel_configurations (
 TeamId,
 TeamsChannelId,
 TeamsTenantId,
 ConfigurationName,
 IamRoleArn,
 region
)
SELECT 
'{{ TeamId }}',
 '{{ TeamsChannelId }}',
 '{{ TeamsTenantId }}',
 '{{ ConfigurationName }}',
 '{{ IamRoleArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.chatbot.microsoft_teams_channel_configurations (
 TeamId,
 TeamsChannelId,
 TeamsChannelName,
 TeamsTenantId,
 ConfigurationName,
 IamRoleArn,
 SnsTopicArns,
 LoggingLevel,
 GuardrailPolicies,
 UserRoleRequired,
 Tags,
 CustomizationResourceArns,
 region
)
SELECT 
 '{{ TeamId }}',
 '{{ TeamsChannelId }}',
 '{{ TeamsChannelName }}',
 '{{ TeamsTenantId }}',
 '{{ ConfigurationName }}',
 '{{ IamRoleArn }}',
 '{{ SnsTopicArns }}',
 '{{ LoggingLevel }}',
 '{{ GuardrailPolicies }}',
 '{{ UserRoleRequired }}',
 '{{ Tags }}',
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
  - name: microsoft_teams_channel_configuration
    props:
      - name: TeamId
        value: '{{ TeamId }}'
      - name: TeamsChannelId
        value: '{{ TeamsChannelId }}'
      - name: TeamsChannelName
        value: '{{ TeamsChannelName }}'
      - name: TeamsTenantId
        value: '{{ TeamsTenantId }}'
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
      - name: UserRoleRequired
        value: '{{ UserRoleRequired }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: CustomizationResourceArns
        value:
          - '{{ CustomizationResourceArns[0] }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.chatbot.microsoft_teams_channel_configurations
SET data__PatchDocument = string('{{ {
    "TeamsChannelId": teams_channel_id,
    "TeamsChannelName": teams_channel_name,
    "IamRoleArn": iam_role_arn,
    "SnsTopicArns": sns_topic_arns,
    "LoggingLevel": logging_level,
    "GuardrailPolicies": guardrail_policies,
    "UserRoleRequired": user_role_required,
    "Tags": tags,
    "CustomizationResourceArns": customization_resource_arns
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.chatbot.microsoft_teams_channel_configurations
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>microsoft_teams_channel_configurations</code> resource, the following permissions are required:

### Create
```json
chatbot:CreateMicrosoftTeamsChannelConfiguration,
chatbot:TagResource,
chatbot:AssociateToConfiguration,
chatbot:ListAssociations,
iam:PassRole,
iam:CreateServiceLinkedRole
```

### Read
```json
chatbot:GetMicrosoftTeamsChannelConfiguration,
chatbot:ListAssociations
```

### Update
```json
chatbot:UpdateMicrosoftTeamsChannelConfiguration,
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
chatbot:GetMicrosoftTeamsChannelConfiguration,
chatbot:DeleteMicrosoftTeamsChannelConfiguration,
chatbot:DisassociateFromConfiguration,
chatbot:ListAssociations
```

### List
```json
chatbot:ListMicrosoftTeamsChannelConfigurations,
chatbot:ListAssociations
```
