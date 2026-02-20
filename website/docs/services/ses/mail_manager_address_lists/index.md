---
title: mail_manager_address_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - mail_manager_address_lists
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

Creates, updates, deletes or gets a <code>mail_manager_address_list</code> resource or lists <code>mail_manager_address_lists</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>mail_manager_address_lists</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::SES::MailManagerAddressList Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ses.mail_manager_address_lists" /></td></tr>
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
    "name": "address_list_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "address_list_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "address_list_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "address_list_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageraddresslist.html"><code>AWS::SES::MailManagerAddressList</code></a>.

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
    <td><code>mail_manager_address_lists</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>mail_manager_address_lists</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>mail_manager_address_lists</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>mail_manager_address_lists_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>mail_manager_address_lists</code></td>
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

Gets all properties from an individual <code>mail_manager_address_list</code>.
```sql
SELECT
region,
address_list_arn,
address_list_id,
address_list_name,
tags
FROM awscc.ses.mail_manager_address_lists
WHERE region = 'us-east-1' AND data__Identifier = '<AddressListId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>mail_manager_address_lists</code> in a region.
```sql
SELECT
region,
address_list_id
FROM awscc.ses.mail_manager_address_lists_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>mail_manager_address_list</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ses.mail_manager_address_lists (
 AddressListName,
 Tags,
 region
)
SELECT 
'{{ AddressListName }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ses.mail_manager_address_lists (
 AddressListName,
 Tags,
 region
)
SELECT 
 '{{ AddressListName }}',
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
  - name: mail_manager_address_list
    props:
      - name: AddressListName
        value: '{{ AddressListName }}'
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
UPDATE awscc.ses.mail_manager_address_lists
SET data__PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<AddressListId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ses.mail_manager_address_lists
WHERE data__Identifier = '<AddressListId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>mail_manager_address_lists</code> resource, the following permissions are required:

### Create
```json
ses:TagResource,
ses:ListTagsForResource,
ses:GetAddressList,
ses:CreateAddressList
```

### Read
```json
ses:ListTagsForResource,
ses:GetAddressList
```

### Delete
```json
ses:GetAddressList,
ses:DeleteAddressList
```

### Update
```json
ses:TagResource,
ses:UntagResource,
ses:ListTagsForResource,
ses:GetAddressList
```

### List
```json
ses:ListAddressLists
```
