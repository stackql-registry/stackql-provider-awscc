---
title: phone_numbers
hide_title: false
hide_table_of_contents: false
keywords:
  - phone_numbers
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

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>phone_number</code> resource or lists <code>phone_numbers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>phone_numbers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Connect::PhoneNumber</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.phone_numbers" /></td></tr>
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
    "name": "target_arn",
    "type": "string",
    "description": "The ARN of the target the phone number is claimed to."
  },
  {
    "name": "phone_number_arn",
    "type": "string",
    "description": "The phone number ARN"
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the phone number."
  },
  {
    "name": "type",
    "type": "string",
    "description": "The phone number type"
  },
  {
    "name": "country_code",
    "type": "string",
    "description": "The phone number country code."
  },
  {
    "name": "prefix",
    "type": "string",
    "description": "The phone number prefix."
  },
  {
    "name": "address",
    "type": "string",
    "description": "The phone number e164 address."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "One or more tags.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "source_phone_number_arn",
    "type": "string",
    "description": "The source phone number arn."
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
    "name": "phone_number_arn",
    "type": "string",
    "description": "The phone number ARN"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-phonenumber.html"><code>AWS::Connect::PhoneNumber</code></a>.

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
    <td><code>phone_numbers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TargetArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>phone_numbers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>phone_numbers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>phone_numbers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>phone_numbers</code></td>
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

Gets all properties from an individual <code>phone_number</code>.
```sql
SELECT
  region,
  target_arn,
  phone_number_arn,
  description,
  type,
  country_code,
  prefix,
  address,
  tags,
  source_phone_number_arn
FROM awscc.connect.phone_numbers
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ phone_number_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>phone_numbers</code> in a region.
```sql
SELECT
  region,
  phone_number_arn
FROM awscc.connect.phone_numbers_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>phone_number</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.connect.phone_numbers (
  TargetArn,
  region
)
SELECT
  '{{ target_arn }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.connect.phone_numbers (
  TargetArn,
  Description,
  Type,
  CountryCode,
  Prefix,
  Tags,
  SourcePhoneNumberArn,
  region
)
SELECT
  '{{ target_arn }}',
  '{{ description }}',
  '{{ type }}',
  '{{ country_code }}',
  '{{ prefix }}',
  '{{ tags }}',
  '{{ source_phone_number_arn }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: phone_number
    props:
      - name: target_arn
        value: '{{ target_arn }}'
      - name: description
        value: '{{ description }}'
      - name: type
        value: '{{ type }}'
      - name: country_code
        value: '{{ country_code }}'
      - name: prefix
        value: '{{ prefix }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: source_phone_number_arn
        value: '{{ source_phone_number_arn }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>phone_number</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.connect.phone_numbers
SET PatchDocument = string('{{ {
    "TargetArn": target_arn,
    "Description": description,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ phone_number_arn }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connect.phone_numbers
WHERE
  Identifier = '{{ phone_number_arn }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>phone_numbers</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
connect:ClaimPhoneNumber,
connect:SearchAvailablePhoneNumbers,
connect:DescribePhoneNumber,
connect:TagResource,
connect:ImportPhoneNumber,
sms-voice:DescribePhoneNumbers,
social-messaging:GetLinkedWhatsAppBusinessAccountPhoneNumber,
social-messaging:TagResource
```

</TabItem>
<TabItem value="read">

```json
connect:DescribePhoneNumber
```

</TabItem>
<TabItem value="delete">

```json
connect:ReleasePhoneNumber,
connect:UntagResource
```

</TabItem>
<TabItem value="update">

```json
connect:UpdatePhoneNumber,
connect:UpdatePhoneNumberMetadata,
connect:DescribePhoneNumber,
connect:TagResource,
connect:UntagResource
```

</TabItem>
<TabItem value="list">

```json
connect:ListPhoneNumbersV2
```

</TabItem>
</Tabs>