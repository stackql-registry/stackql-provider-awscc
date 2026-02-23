---
title: aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - aliases
  - kms
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

Creates, updates, deletes or gets an <code>alias</code> resource or lists <code>aliases</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>aliases</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::KMS::Alias&#96;&#96; resource specifies a display name for a &#91;KMS key&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms&#95;keys). You can use an alias to identify a KMS key in the KMS console, in the &#91;DescribeKey&#93;(https://docs.aws.amazon.com/kms/latest/APIReference/API&#95;DescribeKey.html) operation, and in &#91;cryptographic operations&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations), such as &#91;Decrypt&#93;(https://docs.aws.amazon.com/kms/latest/APIReference/API&#95;Decrypt.html) and &#91;GenerateDataKey&#93;(https://docs.aws.amazon.com/kms/latest/APIReference/API&#95;GenerateDataKey.html).<br />Adding, deleting, or updating an alias can allow or deny permission to the KMS key. For details, see &#91;ABAC for&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/abac.html) in the &#42;Developer Guide&#42;.<br />Using an alias to refer to a KMS key can help you simplify key management. For example, an alias in your code can be associated with different KMS keys in different AWS-Regions. For more information, see &#91;Using aliases&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html) in the &#42;Developer Guide&#42;.<br />When specifying an alias, observe the following rules.<br />+ Each alias is associated with one KMS key, but multiple aliases can be associated with the same KMS key.<br />+ The alias and its associated KMS key must be in the same AWS-account and Region.<br />+ The alias name must be unique in the AWS-account and Region. However, you can create aliases with the same name in different AWS-Regions. For example, you can have an &#96;&#96;alias/projectKey&#96;&#96; in multiple Regions, each of which is associated with a KMS key in its Region.<br />+ Each alias name must begin with &#96;&#96;alias/&#96;&#96; followed by a name, such as &#96;&#96;alias/exampleKey&#96;&#96;. The alias name can contain only alphanumeric characters, forward slashes (/), underscores (&#95;), and dashes (-). Alias names cannot begin with &#96;&#96;alias/aws/&#96;&#96;. That alias name prefix is reserved for &#91;&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk).<br /><br />&#42;Regions&#42; <br />KMS CloudFormation resources are available in all AWS-Regions in which KMS and CFN are supported.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.kms.aliases" /></td></tr>
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
    "name": "target_key_id",
    "type": "string",
    "description": "Associates the alias with the specified &#91;&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk). The KMS key must be in the same AWS-account and Region.<br />A valid key ID is required. If you supply a null or empty string value, this operation returns an error.<br />For help finding the key ID and ARN, see &#91;Finding the key ID and ARN&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/viewing-keys.html#find-cmk-id-arn) in the &#42;Developer Guide&#42;.<br />Specify the key ID or the key ARN of the KMS key.<br />For example:<br />+ Key ID: &#96;&#96;1234abcd-12ab-34cd-56ef-1234567890ab&#96;&#96;<br />+ Key ARN: &#96;&#96;arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab&#96;&#96;<br /><br />To get the key ID and key ARN for a KMS key, use &#91;ListKeys&#93;(https://docs.aws.amazon.com/kms/latest/APIReference/API&#95;ListKeys.html) or &#91;DescribeKey&#93;(https://docs.aws.amazon.com/kms/latest/APIReference/API&#95;DescribeKey.html)."
  },
  {
    "name": "alias_name",
    "type": "string",
    "description": "Specifies the alias name. This value must begin with &#96;&#96;alias/&#96;&#96; followed by a name, such as &#96;&#96;alias/ExampleAlias&#96;&#96;. <br />If you change the value of the &#96;&#96;AliasName&#96;&#96; property, the existing alias is deleted and a new alias is created for the specified KMS key. This change can disrupt applications that use the alias. It can also allow or deny access to a KMS key affected by attribute-based access control (ABAC).<br />The alias must be string of 1-256 characters. It can contain only alphanumeric characters, forward slashes (/), underscores (&#95;), and dashes (-). The alias name cannot begin with &#96;&#96;alias/aws/&#96;&#96;. The &#96;&#96;alias/aws/&#96;&#96; prefix is reserved for &#91;&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk)."
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
    "name": "alias_name",
    "type": "string",
    "description": "Specifies the alias name. This value must begin with &#96;&#96;alias/&#96;&#96; followed by a name, such as &#96;&#96;alias/ExampleAlias&#96;&#96;. <br />If you change the value of the &#96;&#96;AliasName&#96;&#96; property, the existing alias is deleted and a new alias is created for the specified KMS key. This change can disrupt applications that use the alias. It can also allow or deny access to a KMS key affected by attribute-based access control (ABAC).<br />The alias must be string of 1-256 characters. It can contain only alphanumeric characters, forward slashes (/), underscores (&#95;), and dashes (-). The alias name cannot begin with &#96;&#96;alias/aws/&#96;&#96;. The &#96;&#96;alias/aws/&#96;&#96; prefix is reserved for &#91;&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk)."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-alias.html"><code>AWS::KMS::Alias</code></a>.

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
    <td><code>aliases</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AliasName, TargetKeyId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>aliases</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>aliases</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>aliases_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>aliases</code></td>
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

Gets all properties from an individual <code>alias</code>.
```sql
SELECT
region,
target_key_id,
alias_name
FROM awscc.kms.aliases
WHERE region = 'us-east-1' AND Identifier = '{{ alias_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>aliases</code> in a region.
```sql
SELECT
region,
alias_name
FROM awscc.kms.aliases_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>alias</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.kms.aliases (
 TargetKeyId,
 AliasName,
 region
)
SELECT
'{{ target_key_id }}',
 '{{ alias_name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.kms.aliases (
 TargetKeyId,
 AliasName,
 region
)
SELECT
 '{{ target_key_id }}',
 '{{ alias_name }}',
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
  - name: alias
    props:
      - name: target_key_id
        value: '{{ target_key_id }}'
      - name: alias_name
        value: '{{ alias_name }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>alias</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.kms.aliases
SET PatchDocument = string('{{ {
    "TargetKeyId": target_key_id
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ alias_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.kms.aliases
WHERE Identifier = '{{ alias_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>aliases</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
kms:ListAliases
```

</TabItem>
<TabItem value="create">

```json
kms:CreateAlias
```

</TabItem>
<TabItem value="update">

```json
kms:UpdateAlias
```

</TabItem>
<TabItem value="list">

```json
kms:ListAliases
```

</TabItem>
<TabItem value="delete">

```json
kms:DeleteAlias
```

</TabItem>
</Tabs>