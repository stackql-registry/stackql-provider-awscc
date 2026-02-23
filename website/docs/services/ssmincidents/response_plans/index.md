---
title: response_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - response_plans
  - ssmincidents
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

Creates, updates, deletes or gets a <code>response_plan</code> resource or lists <code>response_plans</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>response_plans</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource type definition for AWS::SSMIncidents::ResponsePlan</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ssmincidents.response_plans" /></td></tr>
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
    "description": "The ARN of the response plan."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the response plan."
  },
  {
    "name": "display_name",
    "type": "string",
    "description": "The display name of the response plan."
  },
  {
    "name": "chat_channel",
    "type": "object",
    "description": "The chat channel configuration.",
    "children": [
      {
        "name": "chatbot_sns",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "engagements",
    "type": "array",
    "description": "The list of engagements to use."
  },
  {
    "name": "actions",
    "type": "array",
    "description": "The list of actions.",
    "children": [
      {
        "name": "ssm_automation",
        "type": "object",
        "description": "The configuration to use when starting the SSM automation document.",
        "children": [
          {
            "name": "role_arn",
            "type": "string",
            "description": "The role ARN to use when starting the SSM automation document."
          },
          {
            "name": "document_name",
            "type": "string",
            "description": "The document name to use when starting the SSM automation document."
          },
          {
            "name": "document_version",
            "type": "string",
            "description": "The version of the document to use when starting the SSM automation document."
          },
          {
            "name": "target_account",
            "type": "string",
            "description": "The account type to use when starting the SSM automation document."
          },
          {
            "name": "parameters",
            "type": "array",
            "description": "The parameters to set when starting the SSM automation document.",
            "children": [
              {
                "name": "key",
                "type": "string",
                "description": ""
              },
              {
                "name": "values",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "dynamic_parameters",
            "type": "array",
            "description": "The parameters with dynamic values to set when starting the SSM automation document.",
            "children": [
              {
                "name": "key",
                "type": "string",
                "description": ""
              },
              {
                "name": "value",
                "type": "object",
                "description": "Value of the dynamic parameter to set when starting the SSM automation document."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "integrations",
    "type": "array",
    "description": "The list of integrations.",
    "children": [
      {
        "name": "pager_duty_configuration",
        "type": "object",
        "description": "The pagerDuty configuration to use when starting the incident.",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "The name of the pagerDuty configuration."
          },
          {
            "name": "secret_id",
            "type": "string",
            "description": "The AWS secrets manager secretId storing the pagerDuty token."
          },
          {
            "name": "pager_duty_incident_configuration",
            "type": "object",
            "description": "The pagerDuty incident configuration.",
            "children": [
              {
                "name": "service_id",
                "type": "string",
                "description": "The pagerDuty serviceId."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags to apply to the response plan.",
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
    "name": "incident_template",
    "type": "object",
    "description": "The incident template configuration.",
    "children": [
      {
        "name": "dedupe_string",
        "type": "string",
        "description": "The deduplication string."
      },
      {
        "name": "impact",
        "type": "integer",
        "description": "The impact value."
      },
      {
        "name": "notification_targets",
        "type": "array",
        "description": "The list of notification targets.",
        "children": [
          {
            "name": "sns_topic_arn",
            "type": "string",
            "description": "The ARN of the Chatbot SNS topic."
          }
        ]
      },
      {
        "name": "summary",
        "type": "string",
        "description": "The summary string."
      },
      {
        "name": "title",
        "type": "string",
        "description": "The title string."
      },
      {
        "name": "incident_tags",
        "type": "array",
        "description": "Tags that get applied to incidents created by the StartIncident API action."
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
    "description": "The ARN of the response plan."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html"><code>AWS::SSMIncidents::ResponsePlan</code></a>.

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
    <td><code>response_plans</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, IncidentTemplate, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>response_plans</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>response_plans</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>response_plans_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>response_plans</code></td>
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

Gets all properties from an individual <code>response_plan</code>.
```sql
SELECT
region,
arn,
name,
display_name,
chat_channel,
engagements,
actions,
integrations,
tags,
incident_template
FROM awscc.ssmincidents.response_plans
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>response_plans</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.ssmincidents.response_plans_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>response_plan</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ssmincidents.response_plans (
 Name,
 IncidentTemplate,
 region
)
SELECT
'{{ name }}',
 '{{ incident_template }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ssmincidents.response_plans (
 Name,
 DisplayName,
 ChatChannel,
 Engagements,
 Actions,
 Integrations,
 Tags,
 IncidentTemplate,
 region
)
SELECT
 '{{ name }}',
 '{{ display_name }}',
 '{{ chat_channel }}',
 '{{ engagements }}',
 '{{ actions }}',
 '{{ integrations }}',
 '{{ tags }}',
 '{{ incident_template }}',
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
  - name: response_plan
    props:
      - name: name
        value: '{{ name }}'
      - name: display_name
        value: '{{ display_name }}'
      - name: chat_channel
        value:
          chatbot_sns:
            - '{{ chatbot_sns[0] }}'
      - name: engagements
        value:
          - '{{ engagements[0] }}'
      - name: actions
        value:
          - ssm_automation:
              role_arn: '{{ role_arn }}'
              document_name: '{{ document_name }}'
              document_version: '{{ document_version }}'
              target_account: '{{ target_account }}'
              parameters:
                - key: '{{ key }}'
                  values:
                    - '{{ values[0] }}'
              dynamic_parameters:
                - key: '{{ key }}'
                  value:
                    variable: '{{ variable }}'
      - name: integrations
        value:
          - pager_duty_configuration:
              name: '{{ name }}'
              secret_id: '{{ secret_id }}'
              pager_duty_incident_configuration:
                service_id: '{{ service_id }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: incident_template
        value:
          dedupe_string: '{{ dedupe_string }}'
          impact: '{{ impact }}'
          notification_targets:
            - sns_topic_arn: null
          summary: '{{ summary }}'
          title: '{{ title }}'
          incident_tags:
            - null
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>response_plan</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ssmincidents.response_plans
SET PatchDocument = string('{{ {
    "DisplayName": display_name,
    "ChatChannel": chat_channel,
    "Engagements": engagements,
    "Actions": actions,
    "Integrations": integrations,
    "Tags": tags,
    "IncidentTemplate": incident_template
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ssmincidents.response_plans
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>response_plans</code> resource, the following permissions are required:

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
ssm-incidents:CreateResponsePlan,
ssm-incidents:GetResponsePlan,
ssm-incidents:TagResource,
ssm-incidents:ListTagsForResource,
iam:PassRole,
secretsmanager:GetSecretValue,
kms:Decrypt,
kms:GenerateDataKey,
kms:GenerateDataKeyPair,
kms:GenerateDataKeyPairWithoutPlaintext,
kms:GenerateDataKeyWithoutPlaintext
```

</TabItem>
<TabItem value="read">

```json
ssm-incidents:GetResponsePlan,
ssm-incidents:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
ssm-incidents:UpdateResponsePlan,
ssm-incidents:GetResponsePlan,
ssm-incidents:TagResource,
ssm-incidents:UntagResource,
ssm-incidents:ListTagsForResource,
iam:PassRole,
secretsmanager:GetSecretValue,
kms:Decrypt,
kms:GenerateDataKey,
kms:GenerateDataKeyPair,
kms:GenerateDataKeyPairWithoutPlaintext,
kms:GenerateDataKeyWithoutPlaintext
```

</TabItem>
<TabItem value="delete">

```json
ssm-incidents:DeleteResponsePlan,
ssm-incidents:GetResponsePlan
```

</TabItem>
<TabItem value="list">

```json
ssm-incidents:ListResponsePlans
```

</TabItem>
</Tabs>