---
title: contacts
hide_title: false
hide_table_of_contents: false
keywords:
  - contacts
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

Creates, updates, deletes or gets a <code>contact</code> resource or lists <code>contacts</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>contacts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SSMContacts::Contact</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ssmcontacts.contacts" /></td></tr>
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
    "name": "alias",
    "type": "string",
    "description": "Alias of the contact. String value with 20 to 256 characters. Only alphabetical, numeric characters, dash, or underscore allowed."
  },
  {
    "name": "display_name",
    "type": "string",
    "description": "Name of the contact. String value with 3 to 256 characters. Only alphabetical, space, numeric characters, dash, or underscore allowed."
  },
  {
    "name": "type",
    "type": "string",
    "description": "Contact type, which specify type of contact. Currently supported values: “PERSONAL”, “SHARED”, “OTHER“."
  },
  {
    "name": "plan",
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
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag"
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag."
      }
    ]
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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
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
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html"><code>AWS::SSMContacts::Contact</code></a>.

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
    <td><code>contacts</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Alias, DisplayName, Type, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>contacts</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>contacts</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>contacts_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>contacts</code></td>
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

Gets all properties from an individual <code>contact</code>.
```sql
SELECT
region,
alias,
display_name,
type,
plan,
tags,
arn
FROM awscc.ssmcontacts.contacts
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>contacts</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.ssmcontacts.contacts_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>contact</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ssmcontacts.contacts (
 Alias,
 DisplayName,
 Type,
 region
)
SELECT 
'{{ Alias }}',
 '{{ DisplayName }}',
 '{{ Type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ssmcontacts.contacts (
 Alias,
 DisplayName,
 Type,
 Plan,
 Tags,
 region
)
SELECT 
 '{{ Alias }}',
 '{{ DisplayName }}',
 '{{ Type }}',
 '{{ Plan }}',
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
  - name: contact
    props:
      - name: Alias
        value: '{{ Alias }}'
      - name: DisplayName
        value: '{{ DisplayName }}'
      - name: Type
        value: '{{ Type }}'
      - name: Plan
        value:
          - DurationInMinutes: '{{ DurationInMinutes }}'
            Targets:
              - ContactTargetInfo:
                  ContactId: '{{ ContactId }}'
                  IsEssential: '{{ IsEssential }}'
                ChannelTargetInfo:
                  ChannelId: '{{ ChannelId }}'
                  RetryIntervalInMinutes: '{{ RetryIntervalInMinutes }}'
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
UPDATE awscc.ssmcontacts.contacts
SET PatchDocument = string('{{ {
    "DisplayName": display_name,
    "Plan": plan,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ssmcontacts.contacts
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>contacts</code> resource, the following permissions are required:

### Create
```json
ssm-contacts:CreateContact,
ssm-contacts:GetContact,
ssm-contacts:AssociateContact,
ssm-contacts:TagResource,
ssm-contacts:ListTagsForResource
```

### Read
```json
ssm-contacts:GetContact,
ssm-contacts:ListTagsForResource
```

### Update
```json
ssm-contacts:UpdateContact,
ssm-contacts:GetContact,
ssm-contacts:AssociateContact,
ssm-contacts:TagResource,
ssm-contacts:UntagResource,
ssm-contacts:ListTagsForResource
```

### Delete
```json
ssm-contacts:DeleteContact,
ssm-contacts:GetContact,
ssm-contacts:AssociateContact
```

### List
```json
ssm-contacts:ListContacts,
ssm-contacts:ListTagsForResource
```
