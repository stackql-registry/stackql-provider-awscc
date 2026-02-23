---
title: user_pool_risk_configuration_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - user_pool_risk_configuration_attachments
  - cognito
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

Creates, updates, deletes or gets an <code>user_pool_risk_configuration_attachment</code> resource or lists <code>user_pool_risk_configuration_attachments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>user_pool_risk_configuration_attachments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Cognito::UserPoolRiskConfigurationAttachment</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cognito.user_pool_risk_configuration_attachments" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "user_pool_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "client_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "risk_exception_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "blocked_ip_range_list",
        "type": "array",
        "description": ""
      },
      {
        "name": "skipped_ip_range_list",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "compromised_credentials_risk_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "actions",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "event_action",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "event_filter",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "account_takeover_risk_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "actions",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "high_action",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "event_action",
                "type": "string",
                "description": ""
              },
              {
                "name": "notify",
                "type": "boolean",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "notify_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "block_email",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "html_body",
                "type": "string",
                "description": ""
              },
              {
                "name": "subject",
                "type": "string",
                "description": ""
              },
              {
                "name": "text_body",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "from",
            "type": "string",
            "description": ""
          },
          {
            "name": "reply_to",
            "type": "string",
            "description": ""
          },
          {
            "name": "source_arn",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html"><code>AWS::Cognito::UserPoolRiskConfigurationAttachment</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="UserPoolId, ClientId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>user_pool_risk_configuration_attachment</code>.
```sql
SELECT
region,
user_pool_id,
client_id,
risk_exception_configuration,
compromised_credentials_risk_configuration,
account_takeover_risk_configuration
FROM awscc.cognito.user_pool_risk_configuration_attachments
WHERE region = 'us-east-1' AND Identifier = '{{ user_pool_id }}|{{ client_id }}';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>user_pool_risk_configuration_attachment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cognito.user_pool_risk_configuration_attachments (
 UserPoolId,
 ClientId,
 region
)
SELECT
'{{ user_pool_id }}',
 '{{ client_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cognito.user_pool_risk_configuration_attachments (
 UserPoolId,
 ClientId,
 RiskExceptionConfiguration,
 CompromisedCredentialsRiskConfiguration,
 AccountTakeoverRiskConfiguration,
 region
)
SELECT
 '{{ user_pool_id }}',
 '{{ client_id }}',
 '{{ risk_exception_configuration }}',
 '{{ compromised_credentials_risk_configuration }}',
 '{{ account_takeover_risk_configuration }}',
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
  - name: user_pool_risk_configuration_attachment
    props:
      - name: user_pool_id
        value: '{{ user_pool_id }}'
      - name: client_id
        value: '{{ client_id }}'
      - name: risk_exception_configuration
        value:
          blocked_ip_range_list:
            - '{{ blocked_ip_range_list[0] }}'
          skipped_ip_range_list:
            - '{{ skipped_ip_range_list[0] }}'
      - name: compromised_credentials_risk_configuration
        value:
          actions:
            event_action: '{{ event_action }}'
          event_filter:
            - '{{ event_filter[0] }}'
      - name: account_takeover_risk_configuration
        value:
          actions:
            high_action:
              event_action: '{{ event_action }}'
              notify: '{{ notify }}'
            low_action: null
            medium_action: null
          notify_configuration:
            block_email:
              html_body: '{{ html_body }}'
              subject: '{{ subject }}'
              text_body: '{{ text_body }}'
            mfa_email: null
            no_action_email: null
            from: '{{ from }}'
            reply_to: '{{ reply_to }}'
            source_arn: '{{ source_arn }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>user_pool_risk_configuration_attachment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cognito.user_pool_risk_configuration_attachments
SET PatchDocument = string('{{ {
    "RiskExceptionConfiguration": risk_exception_configuration,
    "CompromisedCredentialsRiskConfiguration": compromised_credentials_risk_configuration,
    "AccountTakeoverRiskConfiguration": account_takeover_risk_configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ user_pool_id }}|{{ client_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cognito.user_pool_risk_configuration_attachments
WHERE Identifier = '{{ user_pool_id }}|{{ client_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>user_pool_risk_configuration_attachments</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="create">

```json
cognito-idp:SetRiskConfiguration,
cognito-idp:DescribeRiskConfiguration,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
cognito-idp:DescribeRiskConfiguration
```

</TabItem>
<TabItem value="update">

```json
cognito-idp:SetRiskConfiguration,
cognito-idp:DescribeRiskConfiguration,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
cognito-idp:SetRiskConfiguration,
cognito-idp:DescribeRiskConfiguration
```

</TabItem>
</Tabs>