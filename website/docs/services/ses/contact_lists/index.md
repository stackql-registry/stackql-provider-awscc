---
title: contact_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - contact_lists
  - ses
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

Creates, updates, deletes or gets a <code>contact_list</code> resource or lists <code>contact_lists</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>contact_lists</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::SES::ContactList.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ses.contact_lists" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "contact_list_name",
    "type": "string",
    "description": "The name of the contact list."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the contact list."
  },
  {
    "name": "topics",
    "type": "array",
    "description": "The topics associated with the contact list.",
    "children": [
      {
        "name": "topic_name",
        "type": "string",
        "description": "The name of the topic."
      },
      {
        "name": "display_name",
        "type": "string",
        "description": "The display name of the topic."
      },
      {
        "name": "description",
        "type": "string",
        "description": "The description of the topic."
      },
      {
        "name": "default_subscription_status",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags (keys and values) associated with the contact list.",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-contactlist.html"><code>AWS::SES::ContactList</code></a>.

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

Gets all properties from an individual <code>contact_list</code>.
```sql
SELECT
region,
contact_list_name,
description,
topics,
tags
FROM awscc.ses.contact_lists
WHERE region = 'us-east-1' AND data__Identifier = '<ContactListName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>contact_list</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ses.contact_lists (
 ContactListName,
 Description,
 Topics,
 Tags,
 region
)
SELECT 
'{{ ContactListName }}',
 '{{ Description }}',
 '{{ Topics }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ses.contact_lists (
 ContactListName,
 Description,
 Topics,
 Tags,
 region
)
SELECT 
 '{{ ContactListName }}',
 '{{ Description }}',
 '{{ Topics }}',
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
  - name: contact_list
    props:
      - name: ContactListName
        value: '{{ ContactListName }}'
      - name: Description
        value: '{{ Description }}'
      - name: Topics
        value:
          - TopicName: '{{ TopicName }}'
            DisplayName: '{{ DisplayName }}'
            Description: '{{ Description }}'
            DefaultSubscriptionStatus: '{{ DefaultSubscriptionStatus }}'
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
DELETE FROM awscc.ses.contact_lists
WHERE data__Identifier = '<ContactListName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>contact_lists</code> resource, the following permissions are required:

### Create
```json
ses:CreateContactList,
ses:UntagResource,
ses:TagResource,
ses:GetContactList
```

### Read
```json
ses:GetContactList,
ses:ListTagsForResource
```

### Update
```json
ses:UpdateContactList,
ses:UntagResource,
ses:TagResource,
ses:GetContactList
```

### Delete
```json
ses:DeleteContactList,
ses:GetContactList
```

### List
```json
ses:ListContactLists
```
