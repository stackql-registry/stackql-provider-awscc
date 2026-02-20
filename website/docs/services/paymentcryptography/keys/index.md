---
title: keys
hide_title: false
hide_table_of_contents: false
keywords:
  - keys
  - paymentcryptography
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

Creates, updates, deletes or gets a <code>key</code> resource or lists <code>keys</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>keys</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::PaymentCryptography::Key Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.paymentcryptography.keys" /></td></tr>
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
    "name": "derive_key_usage",
    "type": "string",
    "description": ""
  },
  {
    "name": "enabled",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "exportable",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "key_attributes",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "key_usage",
        "type": "string",
        "description": ""
      },
      {
        "name": "key_class",
        "type": "string",
        "description": ""
      },
      {
        "name": "key_algorithm",
        "type": "string",
        "description": ""
      },
      {
        "name": "key_modes_of_use",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "encrypt",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "decrypt",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "wrap",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "unwrap",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "generate",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "sign",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "verify",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "derive_key",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "no_restrictions",
            "type": "boolean",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "key_check_value_algorithm",
    "type": "string",
    "description": ""
  },
  {
    "name": "key_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "key_origin",
    "type": "string",
    "description": "Defines the source of a key"
  },
  {
    "name": "key_state",
    "type": "string",
    "description": "Defines the state of a key"
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
    "name": "key_identifier",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-paymentcryptography-key.html"><code>AWS::PaymentCryptography::Key</code></a>.

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
    <td><code>keys</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Exportable, KeyAttributes, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>keys</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>keys</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>keys_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>keys</code></td>
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

Gets all properties from an individual <code>key</code>.
```sql
SELECT
region,
derive_key_usage,
enabled,
exportable,
key_attributes,
key_check_value_algorithm,
key_identifier,
key_origin,
key_state,
tags
FROM awscc.paymentcryptography.keys
WHERE region = 'us-east-1' AND Identifier = '<KeyIdentifier>';
```
</TabItem>
<TabItem value="list">

Lists all <code>keys</code> in a region.
```sql
SELECT
region,
key_identifier
FROM awscc.paymentcryptography.keys_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>key</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.paymentcryptography.keys (
 Exportable,
 KeyAttributes,
 region
)
SELECT 
'{{ Exportable }}',
 '{{ KeyAttributes }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.paymentcryptography.keys (
 DeriveKeyUsage,
 Enabled,
 Exportable,
 KeyAttributes,
 KeyCheckValueAlgorithm,
 Tags,
 region
)
SELECT 
 '{{ DeriveKeyUsage }}',
 '{{ Enabled }}',
 '{{ Exportable }}',
 '{{ KeyAttributes }}',
 '{{ KeyCheckValueAlgorithm }}',
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
  - name: key
    props:
      - name: DeriveKeyUsage
        value: '{{ DeriveKeyUsage }}'
      - name: Enabled
        value: '{{ Enabled }}'
      - name: Exportable
        value: '{{ Exportable }}'
      - name: KeyAttributes
        value:
          KeyUsage: '{{ KeyUsage }}'
          KeyClass: '{{ KeyClass }}'
          KeyAlgorithm: '{{ KeyAlgorithm }}'
          KeyModesOfUse:
            Encrypt: '{{ Encrypt }}'
            Decrypt: '{{ Decrypt }}'
            Wrap: '{{ Wrap }}'
            Unwrap: '{{ Unwrap }}'
            Generate: '{{ Generate }}'
            Sign: '{{ Sign }}'
            Verify: '{{ Verify }}'
            DeriveKey: '{{ DeriveKey }}'
            NoRestrictions: '{{ NoRestrictions }}'
      - name: KeyCheckValueAlgorithm
        value: '{{ KeyCheckValueAlgorithm }}'
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
UPDATE awscc.paymentcryptography.keys
SET PatchDocument = string('{{ {
    "DeriveKeyUsage": derive_key_usage,
    "Enabled": enabled,
    "Exportable": exportable,
    "KeyAttributes": key_attributes,
    "KeyCheckValueAlgorithm": key_check_value_algorithm,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<KeyIdentifier>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.paymentcryptography.keys
WHERE Identifier = '<KeyIdentifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>keys</code> resource, the following permissions are required:

### Create
```json
payment-cryptography:GetKey,
payment-cryptography:CreateKey,
payment-cryptography:TagResource
```

### Read
```json
payment-cryptography:GetKey,
payment-cryptography:ListTagsForResource
```

### Update
```json
payment-cryptography:GetKey,
payment-cryptography:ListTagsForResource,
payment-cryptography:TagResource,
payment-cryptography:UntagResource,
payment-cryptography:StartKeyUsage,
payment-cryptography:StopKeyUsage
```

### Delete
```json
payment-cryptography:GetKey,
payment-cryptography:DeleteKey
```

### List
```json
payment-cryptography:ListKeys
```
