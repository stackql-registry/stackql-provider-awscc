---
title: rules
hide_title: false
hide_table_of_contents: false
keywords:
  - rules
  - connect
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

Creates, updates, deletes or gets a <code>rule</code> resource or lists <code>rules</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates a rule for the specified CON instance.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.rules" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "The name of the rule."
  },
  {
    "name": "rule_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "instance_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the instance."
  },
  {
    "name": "trigger_event_source",
    "type": "object",
    "description": "The event source to trigger the rule.",
    "children": [
      {
        "name": "event_source_name",
        "type": "string",
        "description": "The name of the event source."
      },
      {
        "name": "integration_association_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the integration association. &#96;&#96;IntegrationAssociationArn&#96;&#96; is required if &#96;&#96;TriggerEventSource&#96;&#96; is one of the following values: &#96;&#96;OnZendeskTicketCreate&#96;&#96; &#124; &#96;&#96;OnZendeskTicketStatusUpdate&#96;&#96; &#124; &#96;&#96;OnSalesforceCaseCreate&#96;&#96;"
      }
    ]
  },
  {
    "name": "function",
    "type": "string",
    "description": "The conditions of the rule."
  },
  {
    "name": "actions",
    "type": "object",
    "description": "A list of actions to be run when the rule is triggered.",
    "children": [
      {
        "name": "assign_contact_category_actions",
        "type": "array",
        "description": "Information about the contact category action. The syntax can be empty, for example, &#96;&#96;&#123;&#125;&#96;&#96;."
      },
      {
        "name": "event_bridge_actions",
        "type": "array",
        "description": "Information about the EV action.",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "The name."
          }
        ]
      },
      {
        "name": "task_actions",
        "type": "array",
        "description": "Information about the task action. This field is required if &#96;&#96;TriggerEventSource&#96;&#96; is one of the following values: &#96;&#96;OnZendeskTicketCreate&#96;&#96; &#124; &#96;&#96;OnZendeskTicketStatusUpdate&#96;&#96; &#124; &#96;&#96;OnSalesforceCaseCreate&#96;&#96;",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "The name. Supports variable injection. For more information, see &#91;JSONPath reference&#93;(https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html) in the &#42;Administrators Guide&#42;."
          },
          {
            "name": "description",
            "type": "string",
            "description": "The description. Supports variable injection. For more information, see &#91;JSONPath reference&#93;(https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html) in the &#42;Administrators Guide&#42;."
          },
          {
            "name": "contact_flow_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the flow."
          },
          {
            "name": "references",
            "type": "object",
            "description": "Information about the reference when the &#96;&#96;referenceType&#96;&#96; is &#96;&#96;URL&#96;&#96;. Otherwise, null. &#96;&#96;URL&#96;&#96; is the only accepted type. (Supports variable injection in the &#96;&#96;Value&#96;&#96; field.)"
          }
        ]
      },
      {
        "name": "send_notification_actions",
        "type": "array",
        "description": "Information about the send notification action.",
        "children": [
          {
            "name": "delivery_method",
            "type": "string",
            "description": "Notification delivery method.<br />&#42;Allowed value&#42;: &#96;&#96;EMAIL&#96;&#96;"
          },
          {
            "name": "subject",
            "type": "string",
            "description": "The subject of the email if the delivery method is &#96;&#96;EMAIL&#96;&#96;. Supports variable injection. For more information, see &#91;JSONPath reference&#93;(https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html) in the &#42;Administrators Guide&#42;."
          },
          {
            "name": "content",
            "type": "string",
            "description": "Notification content. Supports variable injection. For more information, see &#91;JSONPath reference&#93;(https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html) in the &#42;Administrators Guide&#42;."
          },
          {
            "name": "content_type",
            "type": "string",
            "description": "Content type format.<br />&#42;Allowed value&#42;: &#96;&#96;PLAIN&#95;TEXT&#96;&#96;"
          },
          {
            "name": "recipient",
            "type": "object",
            "description": "Notification recipient.",
            "children": [
              {
                "name": "user_tags",
                "type": "object",
                "description": "The tags used to organize, track, or control access for this resource. For example, &#123; \"tags\": &#123;\"key1\":\"value1\", \"key2\":\"value2\"&#125; &#125;. CON users with the specified tags will be notified."
              },
              {
                "name": "user_arns",
                "type": "array",
                "description": "The Amazon Resource Name (ARN) of the user account."
              }
            ]
          }
        ]
      },
      {
        "name": "create_case_actions",
        "type": "array",
        "description": "This action will create a case when a rule is triggered.",
        "children": [
          {
            "name": "fields",
            "type": "array",
            "description": "An array of case fields",
            "children": [
              {
                "name": "id",
                "type": "object",
                "description": "the identifier (name) for the task template field"
              },
              {
                "name": "description",
                "type": "string",
                "description": "The description of the task template's field"
              },
              {
                "name": "type",
                "type": "string",
                "description": "The type of the task template's field"
              },
              {
                "name": "single_select_options",
                "type": "array",
                "description": "list of field options to be used with single select"
              }
            ]
          },
          {
            "name": "template_id",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "update_case_actions",
        "type": "array",
        "description": "This action will update a case when a rule is triggered.",
        "children": [
          {
            "name": "fields",
            "type": "array",
            "description": "An array of case fields",
            "children": [
              {
                "name": "id",
                "type": "object",
                "description": "the identifier (name) for the task template field"
              },
              {
                "name": "description",
                "type": "string",
                "description": "The description of the task template's field"
              },
              {
                "name": "type",
                "type": "string",
                "description": "The type of the task template's field"
              },
              {
                "name": "single_select_options",
                "type": "array",
                "description": "list of field options to be used with single select"
              }
            ]
          }
        ]
      },
      {
        "name": "end_associated_tasks_actions",
        "type": "array",
        "description": "This action will end associated tasks when a rule is triggered."
      },
      {
        "name": "submit_auto_evaluation_actions",
        "type": "array",
        "description": "This action will submit an auto contact evaluation when a rule is triggered.",
        "children": [
          {
            "name": "evaluation_form_arn",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "publish_status",
    "type": "string",
    "description": "The publish status of the rule.<br />&#42;Allowed values&#42;: &#96;&#96;DRAFT&#96;&#96; &#124; &#96;&#96;PUBLISHED&#96;&#96;"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags used to organize, track, or control access for this resource. For example, &#123; \"tags\": &#123;\"key1\":\"value1\", \"key2\":\"value2\"&#125; &#125;.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters"
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. . You can specify a value that is maximum of 256 Unicode characters"
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-rule.html"><code>AWS::Connect::Rule</code></a>.

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
    <td><CopyableCode code="Name, InstanceArn, TriggerEventSource, Function, Actions, PublishStatus, region" /></td>
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

Gets all properties from an individual <code>rule</code>.
```sql
SELECT
region,
name,
rule_arn,
instance_arn,
trigger_event_source,
function,
actions,
publish_status,
tags
FROM awscc.connect.rules
WHERE region = 'us-east-1' AND Identifier = '<RuleArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.connect.rules (
 Name,
 InstanceArn,
 TriggerEventSource,
 Function,
 Actions,
 PublishStatus,
 region
)
SELECT 
'{{ Name }}',
 '{{ InstanceArn }}',
 '{{ TriggerEventSource }}',
 '{{ Function }}',
 '{{ Actions }}',
 '{{ PublishStatus }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.connect.rules (
 Name,
 InstanceArn,
 TriggerEventSource,
 Function,
 Actions,
 PublishStatus,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ InstanceArn }}',
 '{{ TriggerEventSource }}',
 '{{ Function }}',
 '{{ Actions }}',
 '{{ PublishStatus }}',
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
  - name: rule
    props:
      - name: Name
        value: '{{ Name }}'
      - name: InstanceArn
        value: '{{ InstanceArn }}'
      - name: TriggerEventSource
        value:
          EventSourceName: '{{ EventSourceName }}'
          IntegrationAssociationArn: '{{ IntegrationAssociationArn }}'
      - name: Function
        value: '{{ Function }}'
      - name: Actions
        value:
          AssignContactCategoryActions:
            - {}
          EventBridgeActions:
            - Name: '{{ Name }}'
          TaskActions:
            - Name: '{{ Name }}'
              Description: '{{ Description }}'
              ContactFlowArn: '{{ ContactFlowArn }}'
              References: null
          SendNotificationActions:
            - DeliveryMethod: '{{ DeliveryMethod }}'
              Subject: '{{ Subject }}'
              Content: '{{ Content }}'
              ContentType: '{{ ContentType }}'
              Recipient:
                UserTags: null
                UserArns:
                  - '{{ UserArns[0] }}'
          CreateCaseActions:
            - Fields:
                - Id:
                    Name: '{{ Name }}'
                  Description: '{{ Description }}'
                  Type: '{{ Type }}'
                  SingleSelectOptions:
                    - '{{ SingleSelectOptions[0] }}'
              TemplateId: '{{ TemplateId }}'
          UpdateCaseActions:
            - Fields: null
          EndAssociatedTasksActions:
            - {}
          SubmitAutoEvaluationActions:
            - EvaluationFormArn: '{{ EvaluationFormArn }}'
      - name: PublishStatus
        value: '{{ PublishStatus }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.connect.rules
SET PatchDocument = string('{{ {
    "Name": name,
    "Function": function,
    "Actions": actions,
    "PublishStatus": publish_status,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<RuleArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connect.rules
WHERE Identifier = '<RuleArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>rules</code> resource, the following permissions are required:

### Create
```json
connect:CreateRule,
cases:GetTemplate,
cases:ListFields,
cases:ListFieldOptions
```

### Read
```json
connect:DescribeRule
```

### Delete
```json
connect:DeleteRule,
connect:UntagResource
```

### Update
```json
connect:UpdateRule,
cases:GetTemplate,
cases:ListFields,
cases:ListFieldOptions,
connect:TagResource,
connect:UntagResource
```
