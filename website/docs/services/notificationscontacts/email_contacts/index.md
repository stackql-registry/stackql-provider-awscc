---
title: email_contacts
hide_title: false
hide_table_of_contents: false
keywords:
  - email_contacts
  - notificationscontacts
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

Creates, updates, deletes or gets an <code>email_contact</code> resource or lists <code>email_contacts</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>email_contacts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::NotificationsContacts::EmailContact Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.notificationscontacts.email_contacts" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "email_address",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "email_contact",
    "type": "object",
    "description": "Definition of AWS::NotificationsContacts::EmailContact Resource Type",
    "children": [
      {
        "name": "arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "email_address",
        "type": "string",
        "description": ""
      },
      {
        "name": "name",
        "type": "string",
        "description": ""
      },
      {
        "name": "tags",
        "type": "array",
        "description": "A list of tags that are attached to the role.",
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
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of tags that are attached to the role.",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notificationscontacts-emailcontact.html"><code>AWS::NotificationsContacts::EmailContact</code></a>.

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
    <td><CopyableCode code="EmailAddress, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>email_contact</code>.
```sql
SELECT
region,
arn,
email_address,
name,
email_contact,
tags
FROM awscc.notificationscontacts.email_contacts
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>email_contact</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.notificationscontacts.email_contacts (
 EmailAddress,
 Name,
 region
)
SELECT 
'{{ EmailAddress }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.notificationscontacts.email_contacts (
 EmailAddress,
 Name,
 Tags,
 region
)
SELECT 
 '{{ EmailAddress }}',
 '{{ Name }}',
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
  - name: email_contact
    props:
      - name: EmailAddress
        value: '{{ EmailAddress }}'
      - name: Name
        value: '{{ Name }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.notificationscontacts.email_contacts
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>email_contacts</code> resource, the following permissions are required:

### Create
```json
notifications-contacts:CreateEmailContact,
notifications-contacts:GetEmailContact,
notifications-contacts:SendActivationCode,
notifications-contacts:ListEmailContacts,
notifications-contacts:TagResource,
notifications-contacts:UntagResource,
notifications-contacts:ListTagsForResource
```

### Read
```json
notifications-contacts:GetEmailContact,
notifications-contacts:ListTagsForResource,
notifications-contacts:TagResource
```

### Delete
```json
notifications-contacts:DeleteEmailContact,
notifications-contacts:GetEmailContact
```

### List
```json
notifications-contacts:ListEmailContacts
```
