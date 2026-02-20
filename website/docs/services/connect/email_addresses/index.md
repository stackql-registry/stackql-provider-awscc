---
title: email_addresses
hide_title: false
hide_table_of_contents: false
keywords:
  - email_addresses
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

Creates, updates, deletes or gets an <code>email_address</code> resource or lists <code>email_addresses</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>email_addresses</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Connect::EmailAddress</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.email_addresses" /></td></tr>
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
    "name": "instance_arn",
    "type": "string",
    "description": "The identifier of the Amazon Connect instance."
  },
  {
    "name": "email_address_arn",
    "type": "string",
    "description": "The identifier of the email address."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description for the email address."
  },
  {
    "name": "email_address",
    "type": "string",
    "description": "Email address to be created for this instance"
  },
  {
    "name": "display_name",
    "type": "string",
    "description": "The display name for the email address."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "One or more tags.",
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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "email_address_arn",
    "type": "string",
    "description": "The identifier of the email address."
  },
  {
    "name": "email_address",
    "type": "string",
    "description": "Email address to be created for this instance"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-emailaddress.html"><code>AWS::Connect::EmailAddress</code></a>.

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
    <td><code>email_addresses</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="InstanceArn, EmailAddress, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>email_addresses</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>email_addresses</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>email_addresses_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>email_addresses</code></td>
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

Gets all properties from an individual <code>email_address</code>.
```sql
SELECT
region,
instance_arn,
email_address_arn,
description,
email_address,
display_name,
tags
FROM awscc.connect.email_addresses
WHERE region = 'us-east-1' AND Identifier = '<EmailAddressArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>email_addresses</code> in a region.
```sql
SELECT
region,
email_address_arn
FROM awscc.connect.email_addresses_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>email_address</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.connect.email_addresses (
 InstanceArn,
 EmailAddress,
 region
)
SELECT 
'{{ InstanceArn }}',
 '{{ EmailAddress }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.connect.email_addresses (
 InstanceArn,
 Description,
 EmailAddress,
 DisplayName,
 Tags,
 region
)
SELECT 
 '{{ InstanceArn }}',
 '{{ Description }}',
 '{{ EmailAddress }}',
 '{{ DisplayName }}',
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
  - name: email_address
    props:
      - name: InstanceArn
        value: '{{ InstanceArn }}'
      - name: Description
        value: '{{ Description }}'
      - name: EmailAddress
        value: '{{ EmailAddress }}'
      - name: DisplayName
        value: '{{ DisplayName }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>email_address</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.connect.email_addresses
SET PatchDocument = string('{{ {
    "InstanceArn": instance_arn,
    "Description": description,
    "DisplayName": display_name,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<EmailAddressArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connect.email_addresses
WHERE Identifier = '<EmailAddressArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>email_addresses</code> resource, the following permissions are required:

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
connect:CreateEmailAddress,
connect:TagResource,
connect:ListIntegrationAssociations,
ses:GetEmailIdentity,
ses:DescribeReceiptRule,
ses:UpdateReceiptRule,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
connect:DescribeEmailAddress
```

</TabItem>
<TabItem value="update">

```json
connect:UpdateEmailAddressMetadata,
connect:TagResource,
connect:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
connect:DeleteEmailAddress,
connect:UntagResource,
iam:PassRole,
ses:DescribeReceiptRule,
ses:UpdateReceiptRule
```

</TabItem>
<TabItem value="list">

```json
connect:DescribeEmailAddress,
connect:SearchEmailAddresses
```

</TabItem>
</Tabs>