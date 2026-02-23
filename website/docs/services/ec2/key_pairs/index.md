---
title: key_pairs
hide_title: false
hide_table_of_contents: false
keywords:
  - key_pairs
  - ec2
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

Creates, updates, deletes or gets a <code>key_pair</code> resource or lists <code>key_pairs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>key_pairs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Specifies a key pair for use with an EC2long instance as follows:<br />+ To import an existing key pair, include the &#96;&#96;PublicKeyMaterial&#96;&#96; property.<br />+ To create a new key pair, omit the &#96;&#96;PublicKeyMaterial&#96;&#96; property.<br /><br />When you import an existing key pair, you specify the public key material for the key. We assume that you have the private key material for the key. CFNlong does not create or return the private key material when you import a key pair.<br />When you create a new key pair, the private key is saved to SYSlong Parameter Store, using a parameter with the following name: &#96;&#96;/ec2/keypair/&#123;key&#95;pair&#95;id&#125;&#96;&#96;. For more information about retrieving private key, and the required permissions, see &#91;Create a key pair using&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-key-pairs.html#create-key-pair-cloudformation) in the &#42;User Guide&#42;.<br />When CFN deletes a key pair that was created or imported by a stack, it also deletes the parameter that was used to store the private key material in Parameter Store.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.key_pairs" /></td></tr>
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
    "name": "key_name",
    "type": "string",
    "description": "A unique name for the key pair.<br />Constraints: Up to 255 ASCII characters"
  },
  {
    "name": "key_type",
    "type": "string",
    "description": "The type of key pair. Note that ED25519 keys are not supported for Windows instances.<br />If the &#96;&#96;PublicKeyMaterial&#96;&#96; property is specified, the &#96;&#96;KeyType&#96;&#96; property is ignored, and the key type is inferred from the &#96;&#96;PublicKeyMaterial&#96;&#96; value.<br />Default: &#96;&#96;rsa&#96;&#96;"
  },
  {
    "name": "key_format",
    "type": "string",
    "description": "The format of the key pair.<br />Default: &#96;&#96;pem&#96;&#96;"
  },
  {
    "name": "public_key_material",
    "type": "string",
    "description": "The public key material. The &#96;&#96;PublicKeyMaterial&#96;&#96; property is used to import a key pair. If this property is not specified, then a new key pair will be created."
  },
  {
    "name": "key_fingerprint",
    "type": "string",
    "description": ""
  },
  {
    "name": "key_pair_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags to apply to the key pair.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The tag key."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The tag value."
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
    "name": "key_name",
    "type": "string",
    "description": "A unique name for the key pair.<br />Constraints: Up to 255 ASCII characters"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-keypair.html"><code>AWS::EC2::KeyPair</code></a>.

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
    <td><code>key_pairs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="KeyName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>key_pairs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>key_pairs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>key_pairs</code></td>
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

Gets all properties from an individual <code>key_pair</code>.
```sql
SELECT
region,
key_name,
key_type,
key_format,
public_key_material,
key_fingerprint,
key_pair_id,
tags
FROM awscc.ec2.key_pairs
WHERE region = 'us-east-1' AND Identifier = '{{ key_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>key_pairs</code> in a region.
```sql
SELECT
region,
key_name
FROM awscc.ec2.key_pairs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>key_pair</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.key_pairs (
 KeyName,
 region
)
SELECT
'{{ key_name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.key_pairs (
 KeyName,
 KeyType,
 KeyFormat,
 PublicKeyMaterial,
 Tags,
 region
)
SELECT
 '{{ key_name }}',
 '{{ key_type }}',
 '{{ key_format }}',
 '{{ public_key_material }}',
 '{{ tags }}',
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
  - name: key_pair
    props:
      - name: key_name
        value: '{{ key_name }}'
      - name: key_type
        value: '{{ key_type }}'
      - name: key_format
        value: '{{ key_format }}'
      - name: public_key_material
        value: '{{ public_key_material }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.key_pairs
WHERE Identifier = '{{ key_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>key_pairs</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="create">

```json
ec2:CreateKeyPair,
ec2:ImportKeyPair,
ec2:CreateTags,
ssm:PutParameter
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeKeyPairs
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeKeyPairs
```

</TabItem>
<TabItem value="delete">

```json
ec2:DeleteKeyPair,
ssm:DeleteParameter,
ec2:DescribeKeyPairs
```

</TabItem>
</Tabs>