---
title: bot_aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - bot_aliases
  - lex
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

Creates, updates, deletes or gets a <code>bot_alias</code> resource or lists <code>bot_aliases</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>bot_aliases</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A Bot Alias enables you to change the version of a bot without updating applications that use the bot</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lex.bot_aliases" /></td></tr>
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
    "name": "bot_alias_id",
    "type": "string",
    "description": "Unique ID of resource"
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "bot_alias_status",
    "type": "string",
    "description": ""
  },
  {
    "name": "bot_alias_locale_settings",
    "type": "array",
    "description": "A list of bot alias locale settings to add to the bot alias.",
    "children": [
      {
        "name": "locale_id",
        "type": "string",
        "description": "A string used to identify the locale"
      },
      {
        "name": "bot_alias_locale_setting",
        "type": "object",
        "description": "You can use this parameter to specify a specific Lambda function to run different functions in different locales.",
        "children": [
          {
            "name": "code_hook_specification",
            "type": "object",
            "description": "Contains information about code hooks that Amazon Lex calls during a conversation.",
            "children": [
              {
                "name": "lambda_code_hook",
                "type": "object",
                "description": "Contains information about code hooks that Amazon Lex calls during a conversation."
              }
            ]
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": "Whether the Lambda code hook is enabled"
          }
        ]
      }
    ]
  },
  {
    "name": "bot_alias_name",
    "type": "string",
    "description": "A unique identifier for a resource."
  },
  {
    "name": "bot_version",
    "type": "object",
    "description": "A version is a numbered snapshot of your work that you can publish for use in different parts of your workflow, such as development, beta deployment, and production.",
    "children": [
      {
        "name": "description",
        "type": "string",
        "description": "A description of the version. Use the description to help identify the version in lists."
      },
      {
        "name": "bot_version_locale_specification",
        "type": "array",
        "description": "Specifies the locales that Amazon Lex adds to this version. You can choose the Draft version or any other previously published version for each locale.",
        "children": [
          {
            "name": "locale_id",
            "type": "string",
            "description": "The identifier of the language and locale that the bot will be used in."
          },
          {
            "name": "bot_version_locale_details",
            "type": "object",
            "description": "The version of a bot used for a bot locale."
          }
        ]
      }
    ]
  },
  {
    "name": "conversation_log_settings",
    "type": "object",
    "description": "Contains information about code hooks that Amazon Lex calls during a conversation.",
    "children": [
      {
        "name": "audio_log_settings",
        "type": "array",
        "description": "List of audio log settings",
        "children": [
          {
            "name": "destination",
            "type": "object",
            "description": "The location of audio log files collected when conversation logging is enabled for a bot.",
            "children": [
              {
                "name": "s3_bucket",
                "type": "object",
                "description": "Specifies an Amazon S3 bucket for logging audio conversations"
              }
            ]
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          }
        ]
      },
      {
        "name": "text_log_settings",
        "type": "array",
        "description": "List of text log settings",
        "children": [
          {
            "name": "destination",
            "type": "object",
            "description": "Defines the Amazon CloudWatch Logs destination log group for conversation text logs.",
            "children": [
              {
                "name": "cloud_watch",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description of the version. Use the description to help identify the version in lists."
  },
  {
    "name": "sentiment_analysis_settings",
    "type": "object",
    "description": "Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.",
    "children": [
      {
        "name": "detect_sentiment",
        "type": "boolean",
        "description": "Enable to call Amazon Comprehend for Sentiment natively within Lex"
      }
    ]
  },
  {
    "name": "bot_alias_tags",
    "type": "array",
    "description": "A list of tags to add to the bot alias.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A string used to identify this tag"
      },
      {
        "name": "value",
        "type": "string",
        "description": "A string containing the value for the tag"
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
    "name": "bot_alias_id",
    "type": "string",
    "description": "Unique ID of resource"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html"><code>AWS::Lex::BotAlias</code></a>.

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
    <td><code>bot_aliases</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="BotId, BotAliasName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>bot_aliases</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>bot_aliases</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>bot_aliases_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>bot_aliases</code></td>
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

Gets all properties from an individual <code>bot_alias</code>.
```sql
SELECT
region,
bot_alias_id,
bot_id,
arn,
bot_alias_status,
bot_alias_locale_settings,
bot_alias_name,
bot_version,
conversation_log_settings,
description,
sentiment_analysis_settings,
bot_alias_tags
FROM awscc.lex.bot_aliases
WHERE region = 'us-east-1' AND Identifier = '<BotAliasId>|<BotId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>bot_aliases</code> in a region.
```sql
SELECT
region,
bot_alias_id,
bot_id
FROM awscc.lex.bot_aliases_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>bot_alias</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.lex.bot_aliases (
 BotId,
 BotAliasName,
 region
)
SELECT 
'{{ BotId }}',
 '{{ BotAliasName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.lex.bot_aliases (
 BotId,
 BotAliasLocaleSettings,
 BotAliasName,
 BotVersion,
 ConversationLogSettings,
 Description,
 SentimentAnalysisSettings,
 BotAliasTags,
 region
)
SELECT 
 '{{ BotId }}',
 '{{ BotAliasLocaleSettings }}',
 '{{ BotAliasName }}',
 '{{ BotVersion }}',
 '{{ ConversationLogSettings }}',
 '{{ Description }}',
 '{{ SentimentAnalysisSettings }}',
 '{{ BotAliasTags }}',
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
  - name: bot_alias
    props:
      - name: BotId
        value: '{{ BotId }}'
      - name: BotAliasLocaleSettings
        value:
          - LocaleId: '{{ LocaleId }}'
            BotAliasLocaleSetting:
              CodeHookSpecification:
                LambdaCodeHook:
                  CodeHookInterfaceVersion: '{{ CodeHookInterfaceVersion }}'
                  LambdaArn: '{{ LambdaArn }}'
              Enabled: '{{ Enabled }}'
      - name: BotAliasName
        value: '{{ BotAliasName }}'
      - name: BotVersion
        value:
          BotId: null
          Description: '{{ Description }}'
          BotVersionLocaleSpecification:
            - LocaleId: '{{ LocaleId }}'
              BotVersionLocaleDetails:
                SourceBotVersion: null
      - name: ConversationLogSettings
        value:
          AudioLogSettings:
            - Destination:
                S3Bucket:
                  S3BucketArn: '{{ S3BucketArn }}'
                  LogPrefix: '{{ LogPrefix }}'
                  KmsKeyArn: '{{ KmsKeyArn }}'
              Enabled: '{{ Enabled }}'
          TextLogSettings:
            - Destination:
                CloudWatch:
                  CloudWatchLogGroupArn: '{{ CloudWatchLogGroupArn }}'
                  LogPrefix: '{{ LogPrefix }}'
              Enabled: '{{ Enabled }}'
      - name: Description
        value: null
      - name: SentimentAnalysisSettings
        value:
          DetectSentiment: '{{ DetectSentiment }}'
      - name: BotAliasTags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.lex.bot_aliases
SET PatchDocument = string('{{ {
    "BotAliasLocaleSettings": bot_alias_locale_settings,
    "BotAliasName": bot_alias_name,
    "BotVersion": bot_version,
    "ConversationLogSettings": conversation_log_settings,
    "Description": description,
    "SentimentAnalysisSettings": sentiment_analysis_settings,
    "BotAliasTags": bot_alias_tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<BotAliasId>|<BotId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lex.bot_aliases
WHERE Identifier = '<BotAliasId|BotId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>bot_aliases</code> resource, the following permissions are required:

### Create
```json
lex:CreateBotAlias,
lex:DescribeBot
```

### Update
```json
lex:UpdateBotAlias,
lex:DescribeBotAlias,
lex:ListTagsForResource,
lex:TagResource,
lex:UntagResource
```

### Read
```json
lex:DescribeBotAlias
```

### Delete
```json
lex:DeleteBotAlias
```

### List
```json
lex:ListBotAliases
```
