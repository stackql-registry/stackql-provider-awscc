---
title: public_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - public_keys
  - cloudfront
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

Creates, updates, deletes or gets a <code>public_key</code> resource or lists <code>public_keys</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>public_keys</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A public key that you can use with &#91;signed URLs and signed cookies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html), or with &#91;field-level encryption&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html).</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudfront.public_keys" /></td></tr>
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
    "name": "created_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "public_key_config",
    "type": "object",
    "description": "Configuration information about a public key that you can use with &#91;signed URLs and signed cookies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html), or with &#91;field-level encryption&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html).",
    "children": [
      {
        "name": "caller_reference",
        "type": "string",
        "description": "A string included in the request to help make sure that the request can't be replayed."
      },
      {
        "name": "comment",
        "type": "string",
        "description": "A comment to describe the public key. The comment cannot be longer than 128 characters."
      },
      {
        "name": "encoded_key",
        "type": "string",
        "description": "The public key that you can use with &#91;signed URLs and signed cookies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html), or with &#91;field-level encryption&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html)."
      },
      {
        "name": "name",
        "type": "string",
        "description": "A name to help identify the public key."
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
    "name": "id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-publickey.html"><code>AWS::CloudFront::PublicKey</code></a>.

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
    <td><code>public_keys</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="PublicKeyConfig, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>public_keys</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>public_keys</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>public_keys_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>public_keys</code></td>
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

Gets all properties from an individual <code>public_key</code>.
```sql
SELECT
region,
created_time,
id,
public_key_config
FROM awscc.cloudfront.public_keys
WHERE data__Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>public_keys</code> in a region.
```sql
SELECT
region,
id
FROM awscc.cloudfront.public_keys_list_only
;
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>public_key</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudfront.public_keys (
 PublicKeyConfig,
 region
)
SELECT 
'{{ PublicKeyConfig }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudfront.public_keys (
 PublicKeyConfig,
 region
)
SELECT 
 '{{ PublicKeyConfig }}',
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
  - name: public_key
    props:
      - name: PublicKeyConfig
        value:
          CallerReference: '{{ CallerReference }}'
          Comment: '{{ Comment }}'
          EncodedKey: '{{ EncodedKey }}'
          Name: '{{ Name }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.cloudfront.public_keys
SET data__PatchDocument = string('{{ {
    "PublicKeyConfig": public_key_config
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudfront.public_keys
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>public_keys</code> resource, the following permissions are required:

### Create
```json
cloudfront:CreatePublicKey
```

### Delete
```json
cloudfront:DeletePublicKey,
cloudfront:GetPublicKey
```

### List
```json
cloudfront:ListPublicKeys
```

### Read
```json
cloudfront:GetPublicKey
```

### Update
```json
cloudfront:UpdatePublicKey,
cloudfront:GetPublicKey
```
