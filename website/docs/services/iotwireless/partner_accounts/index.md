---
title: partner_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - partner_accounts
  - iotwireless
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

Creates, updates, deletes or gets a <code>partner_account</code> resource or lists <code>partner_accounts</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>partner_accounts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Create and manage partner account</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotwireless.partner_accounts" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "sidewalk",
    "type": "object",
    "description": "The Sidewalk account credentials.",
    "children": [
      {
        "name": "app_server_private_key",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "partner_account_id",
    "type": "string",
    "description": "The partner account ID to disassociate from the AWS account"
  },
  {
    "name": "partner_type",
    "type": "string",
    "description": "The partner type"
  },
  {
    "name": "sidewalk_response",
    "type": "object",
    "description": "The Sidewalk account credentials.",
    "children": [
      {
        "name": "amazon_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "fingerprint",
        "type": "string",
        "description": ""
      },
      {
        "name": "arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "account_linked",
    "type": "boolean",
    "description": "Whether the partner account is linked to the AWS account."
  },
  {
    "name": "sidewalk_update",
    "type": "object",
    "description": "The Sidewalk account credentials.",
    "children": [
      {
        "name": "app_server_private_key",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "fingerprint",
    "type": "string",
    "description": "The fingerprint of the Sidewalk application server private key."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "PartnerAccount arn. Returned after successful create."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of key-value pairs that contain metadata for the destination.",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html"><code>AWS::IoTWireless::PartnerAccount</code></a>.

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

Gets all properties from an individual <code>partner_account</code>.
```sql
SELECT
region,
sidewalk,
partner_account_id,
partner_type,
sidewalk_response,
account_linked,
sidewalk_update,
fingerprint,
arn,
tags
FROM awscc.iotwireless.partner_accounts
WHERE region = 'us-east-1' AND data__Identifier = '<PartnerAccountId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>partner_account</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotwireless.partner_accounts (
 Sidewalk,
 PartnerAccountId,
 PartnerType,
 SidewalkResponse,
 AccountLinked,
 SidewalkUpdate,
 Tags,
 region
)
SELECT 
'{{ Sidewalk }}',
 '{{ PartnerAccountId }}',
 '{{ PartnerType }}',
 '{{ SidewalkResponse }}',
 '{{ AccountLinked }}',
 '{{ SidewalkUpdate }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotwireless.partner_accounts (
 Sidewalk,
 PartnerAccountId,
 PartnerType,
 SidewalkResponse,
 AccountLinked,
 SidewalkUpdate,
 Tags,
 region
)
SELECT 
 '{{ Sidewalk }}',
 '{{ PartnerAccountId }}',
 '{{ PartnerType }}',
 '{{ SidewalkResponse }}',
 '{{ AccountLinked }}',
 '{{ SidewalkUpdate }}',
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
  - name: partner_account
    props:
      - name: Sidewalk
        value:
          AppServerPrivateKey: '{{ AppServerPrivateKey }}'
      - name: PartnerAccountId
        value: '{{ PartnerAccountId }}'
      - name: PartnerType
        value: '{{ PartnerType }}'
      - name: SidewalkResponse
        value:
          AmazonId: '{{ AmazonId }}'
          Fingerprint: '{{ Fingerprint }}'
          Arn: '{{ Arn }}'
      - name: AccountLinked
        value: '{{ AccountLinked }}'
      - name: SidewalkUpdate
        value:
          AppServerPrivateKey: '{{ AppServerPrivateKey }}'
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
DELETE FROM awscc.iotwireless.partner_accounts
WHERE data__Identifier = '<PartnerAccountId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>partner_accounts</code> resource, the following permissions are required:

### Create
```json
iotwireless:AssociateAwsAccountWithPartnerAccount,
iotwireless:TagResource,
iotwireless:GetPartnerAccount
```

### Read
```json
iotwireless:GetPartnerAccount,
iotwireless:ListTagsForResource
```

### List
```json
iotwireless:ListPartnerAccounts,
iotwireless:ListTagsForResource
```

### Update
```json
iotwireless:GetPartnerAccount,
iotwireless:AssociateAwsAccountWithPartnerAccount,
iotwireless:UpdatePartnerAccount,
iotwireless:ListTagsForResource,
iotwireless:TagResource,
iotwireless:UntagResource
```

### Delete
```json
iotwireless:DisassociateAwsAccountFromPartnerAccount
```
