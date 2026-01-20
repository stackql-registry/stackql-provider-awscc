---
title: plans
hide_title: false
hide_table_of_contents: false
keywords:
  - plans
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

Creates, updates, deletes or gets a <code>plan</code> resource or lists <code>plans</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>plans</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Engagement Plan for a SSM Incident Manager Contact.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ssmcontacts.plans" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "contact_id",
    "type": "string",
    "description": "Contact ID for the AWS SSM Incident Manager Contact to associate the plan."
  },
  {
    "name": "stages",
    "type": "array",
    "description": "The stages that an escalation plan or engagement plan engages contacts and contact methods in.",
    "children": [
      {
        "name": "duration_in_minutes",
        "type": "integer",
        "description": "The time to wait until beginning the next stage."
      },
      {
        "name": "targets",
        "type": "array",
        "description": "The contacts or contact methods that the escalation plan or engagement plan is engaging.",
        "children": [
          {
            "name": "contact_target_info",
            "type": "object",
            "description": "The contact that SSM Incident Manager is engaging during an incident.",
            "children": [
              {
                "name": "contact_id",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the contact."
              },
              {
                "name": "is_essential",
                "type": "boolean",
                "description": "A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan."
              }
            ]
          },
          {
            "name": "channel_target_info",
            "type": "object",
            "description": "Information about the contact channel that SSM Incident Manager uses to engage the contact.",
            "children": [
              {
                "name": "channel_id",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the contact channel."
              },
              {
                "name": "retry_interval_in_minutes",
                "type": "integer",
                "description": "The number of minutes to wait to retry sending engagement in the case the engagement initially fails."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "rotation_ids",
    "type": "array",
    "description": "Rotation Ids to associate with Oncall Contact for engagement."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the contact."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html"><code>AWS::SSMContacts::Plan</code></a>.

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
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>plan</code>.
```sql
SELECT
region,
contact_id,
stages,
rotation_ids,
arn
FROM awscc.ssmcontacts.plans
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>plan</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ssmcontacts.plans (
 ContactId,
 Stages,
 RotationIds,
 region
)
SELECT 
'{{ ContactId }}',
 '{{ Stages }}',
 '{{ RotationIds }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ssmcontacts.plans (
 ContactId,
 Stages,
 RotationIds,
 region
)
SELECT 
 '{{ ContactId }}',
 '{{ Stages }}',
 '{{ RotationIds }}',
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
  - name: plan
    props:
      - name: ContactId
        value: '{{ ContactId }}'
      - name: Stages
        value:
          - DurationInMinutes: '{{ DurationInMinutes }}'
            Targets:
              - ContactTargetInfo:
                  ContactId: '{{ ContactId }}'
                  IsEssential: '{{ IsEssential }}'
                ChannelTargetInfo:
                  ChannelId: '{{ ChannelId }}'
                  RetryIntervalInMinutes: '{{ RetryIntervalInMinutes }}'
      - name: RotationIds
        value:
          - '{{ RotationIds[0] }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ssmcontacts.plans
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>plans</code> resource, the following permissions are required:

### Create
```json
ssm-contacts:UpdateContact,
ssm-contacts:GetContact,
ssm-contacts:AssociateContact
```

### Read
```json
ssm-contacts:GetContact
```

### Update
```json
ssm-contacts:UpdateContact,
ssm-contacts:GetContact,
ssm-contacts:AssociateContact
```

### Delete
```json
ssm-contacts:UpdateContact,
ssm-contacts:GetContact,
ssm-contacts:AssociateContact
```
