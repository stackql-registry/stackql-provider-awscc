---
title: saml_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - saml_providers
  - iam
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

Creates, updates, deletes or gets a <code>saml_provider</code> resource or lists <code>saml_providers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>saml_providers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::IAM::SAMLProvider</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iam.saml_providers" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "saml_metadata_document",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": "Amazon Resource Name (ARN) of the SAML provider"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "assertion_encryption_mode",
    "type": "string",
    "description": "The encryption setting for the SAML provider"
  },
  {
    "name": "add_private_key",
    "type": "string",
    "description": "The private key from your external identity provider"
  },
  {
    "name": "remove_private_key",
    "type": "string",
    "description": "The Key ID of the private key to remove"
  },
  {
    "name": "private_key_list",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key_id",
        "type": "string",
        "description": "The unique identifier for the SAML private key."
      },
      {
        "name": "timestamp",
        "type": "string",
        "description": "The date and time, in &lt;a href=\\\"http://www.iso.org/iso/iso8601\\\"&gt;ISO 8601 date-time &lt;/a&gt; format, when the private key was uploaded."
      }
    ]
  },
  {
    "name": "saml_provider_uu_id",
    "type": "string",
    "description": "The unique identifier assigned to the SAML provider"
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
    "description": "Amazon Resource Name (ARN) of the SAML provider"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-samlprovider.html"><code>AWS::IAM::SAMLProvider</code></a>.

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
    <td><code>saml_providers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>saml_providers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>saml_providers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>saml_providers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>saml_providers</code></td>
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

Gets all properties from an individual <code>saml_provider</code>.
```sql
SELECT
region,
name,
saml_metadata_document,
arn,
tags,
assertion_encryption_mode,
add_private_key,
remove_private_key,
private_key_list,
saml_provider_uu_id
FROM awscc.iam.saml_providers
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>saml_providers</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.iam.saml_providers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>saml_provider</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iam.saml_providers (
 Name,
 SamlMetadataDocument,
 Tags,
 AssertionEncryptionMode,
 AddPrivateKey,
 RemovePrivateKey,
 PrivateKeyList,
 region
)
SELECT
'{{ name }}',
 '{{ saml_metadata_document }}',
 '{{ tags }}',
 '{{ assertion_encryption_mode }}',
 '{{ add_private_key }}',
 '{{ remove_private_key }}',
 '{{ private_key_list }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iam.saml_providers (
 Name,
 SamlMetadataDocument,
 Tags,
 AssertionEncryptionMode,
 AddPrivateKey,
 RemovePrivateKey,
 PrivateKeyList,
 region
)
SELECT
 '{{ name }}',
 '{{ saml_metadata_document }}',
 '{{ tags }}',
 '{{ assertion_encryption_mode }}',
 '{{ add_private_key }}',
 '{{ remove_private_key }}',
 '{{ private_key_list }}',
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
  - name: saml_provider
    props:
      - name: name
        value: '{{ name }}'
      - name: saml_metadata_document
        value: '{{ saml_metadata_document }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
      - name: assertion_encryption_mode
        value: '{{ assertion_encryption_mode }}'
      - name: add_private_key
        value: '{{ add_private_key }}'
      - name: remove_private_key
        value: '{{ remove_private_key }}'
      - name: private_key_list
        value:
          - key_id: '{{ key_id }}'
            timestamp: '{{ timestamp }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>saml_provider</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iam.saml_providers
SET PatchDocument = string('{{ {
    "SamlMetadataDocument": saml_metadata_document,
    "Tags": tags,
    "AssertionEncryptionMode": assertion_encryption_mode,
    "PrivateKeyList": private_key_list
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iam.saml_providers
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>saml_providers</code> resource, the following permissions are required:

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
iam:CreateSAMLProvider,
iam:GetSAMLProvider,
iam:TagSAMLProvider
```

</TabItem>
<TabItem value="read">

```json
iam:GetSAMLProvider
```

</TabItem>
<TabItem value="update">

```json
iam:UpdateSAMLProvider,
iam:GetSAMLProvider,
iam:TagSAMLProvider,
iam:ListSAMLProviderTags,
iam:UntagSAMLProvider
```

</TabItem>
<TabItem value="delete">

```json
iam:DeleteSAMLProvider
```

</TabItem>
<TabItem value="list">

```json
iam:ListSAMLProviders,
iam:GetSAMLProvider
```

</TabItem>
</Tabs>