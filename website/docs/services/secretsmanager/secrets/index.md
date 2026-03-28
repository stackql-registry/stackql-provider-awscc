---
title: secrets
hide_title: false
hide_table_of_contents: false
keywords:
  - secrets
  - secretsmanager
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

Creates, updates, deletes or gets a <code>secret</code> resource or lists <code>secrets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>secrets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>Creates a new secret. A <i>secret</i> can be a password, a set of credentials such as a user name and password, an OAuth token, or other secret information that you store in an encrypted form in Secrets Manager.</summary>For RDS master user credentials, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-masterusersecret.html">AWS::RDS::DBCluster MasterUserSecret</a>.<br />For RS admin user credentials, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html">AWS::Redshift::Cluster</a>.<br />To retrieve a secret in a CFNshort template, use a <i>dynamic reference</i>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/cfn-example_reference-secret.html">Retrieve a secret in an resource</a>.<br />For information about creating a secret in the console, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_create-basic-secret.html">Create a secret</a>. For information about creating a secret using the CLI or SDK, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html">CreateSecret</a>.<br />For information about retrieving a secret in code, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets.html">Retrieve secrets from Secrets Manager</a>.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.secretsmanager.secrets" /></td></tr>
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
    "name": "description",
    "type": "string",
    "description": "The description of the secret."
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "<details><summary>The ARN, key ID, or alias of the KMS key that Secrets Manager uses to encrypt the secret value in the secret. An alias is always prefixed by <code>alias/</code>, for example <code>alias/aws/secretsmanager</code>. For more information, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/alias-about.html\">About aliases</a>.</summary>To use a KMS key in a different account, use the key ARN or the alias ARN.<br />If you don't specify this value, then Secrets Manager uses the key <code>aws/secretsmanager</code>. If that key doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value.<br />If the secret is in a different AWS account from the credentials calling the API, then you can't use <code>aws/secretsmanager</code> to encrypt the secret, and you must create and use a customer managed KMS key.</details>"
  },
  {
    "name": "secret_string",
    "type": "string",
    "description": "The text to encrypt and store in the secret. We recommend you use a JSON structure of key/value pairs for your secret value. To generate a random password, use <code>GenerateSecretString</code> instead. If you omit both <code>GenerateSecretString</code> and <code>SecretString</code>, you create an empty secret. When you make a change to this property, a new secret version is created."
  },
  {
    "name": "generate_secret_string",
    "type": "object",
    "description": "<details><summary>A structure that specifies how to generate a password to encrypt and store in the secret. To include a specific string in the secret, use <code>SecretString</code> instead. If you omit both <code>GenerateSecretString</code> and <code>SecretString</code>, you create an empty secret. When you make a change to this property, a new secret version is created.</summary>We recommend that you specify the maximum length and include every character type that the system you are generating a password for can support.</details>",
    "children": [
      {
        "name": "exclude_uppercase",
        "type": "boolean",
        "description": "Specifies whether to exclude uppercase letters from the password. If you don't include this switch, the password can contain uppercase letters."
      },
      {
        "name": "require_each_included_type",
        "type": "boolean",
        "description": "Specifies whether to include at least one upper and lowercase letter, one number, and one punctuation. If you don't include this switch, the password contains at least one of every character type."
      },
      {
        "name": "include_space",
        "type": "boolean",
        "description": "Specifies whether to include the space character. If you include this switch, the password can contain space characters."
      },
      {
        "name": "exclude_characters",
        "type": "string",
        "description": "A string of the characters that you don't want in the password."
      },
      {
        "name": "generate_string_key",
        "type": "string",
        "description": "The JSON key name for the key/value pair, where the value is the generated password. This pair is added to the JSON structure specified by the <code>SecretStringTemplate</code> parameter. If you specify this parameter, then you must also specify <code>SecretStringTemplate</code>."
      },
      {
        "name": "password_length",
        "type": "integer",
        "description": "The length of the password. If you don't include this parameter, the default length is 32 characters."
      },
      {
        "name": "exclude_punctuation",
        "type": "boolean",
        "description": "Specifies whether to exclude the following punctuation characters from the password: `<code>! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ </code> &#123; | &#125; ~``. If you don't include this switch, the password can contain punctuation."
      },
      {
        "name": "exclude_lowercase",
        "type": "boolean",
        "description": "Specifies whether to exclude lowercase letters from the password. If you don't include this switch, the password can contain lowercase letters."
      },
      {
        "name": "secret_string_template",
        "type": "string",
        "description": "A template that the generated string must match. When you make a change to this property, a new secret version is created."
      },
      {
        "name": "exclude_numbers",
        "type": "boolean",
        "description": "Specifies whether to exclude numbers from the password. If you don't include this switch, the password can contain numbers."
      }
    ]
  },
  {
    "name": "replica_regions",
    "type": "array",
    "description": "A custom type that specifies a <code>Region</code> and the <code>KmsKeyId</code> for a replica secret.",
    "children": [
      {
        "name": "kms_key_id",
        "type": "string",
        "description": "The ARN, key ID, or alias of the KMS key to encrypt the secret. If you don't include this field, Secrets Manager uses <code>aws/secretsmanager</code>."
      },
      {
        "name": "region",
        "type": "string",
        "description": "A string that represents a <code>Region</code>, for example \"us-east-1\"."
      }
    ]
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "<details><summary>A list of tags to attach to the secret. Each tag is a key and value pair of strings in a JSON text string, for example:</summary><code>[&#123;\"Key\":\"CostCenter\",\"Value\":\"12345\"&#125;,&#123;\"Key\":\"environment\",\"Value\":\"production\"&#125;]</code><br />Secrets Manager tag key names are case sensitive. A tag with the key \"ABC\" is a different tag from one with key \"abc\".<br />Stack-level tags, tags you apply to the CloudFormation stack, are also attached to the secret.<br />If you check tags in permissions policies as part of your security strategy, then adding or removing a tag can change permissions. If the completion of this operation would result in you losing your permissions for this secret, then Secrets Manager blocks the operation and returns an <code>Access Denied</code> error. For more information, see <a href=\"https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html#tag-secrets-abac\">Control access to secrets using tags</a> and <a href=\"https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html#auth-and-access_tags2\">Limit access to identities with tags that match secrets' tags</a>.<br />For information about how to format a JSON parameter for the various command line tool environments, see <a href=\"https://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#cli-using-param-json\">Using JSON for Parameters</a>. If your command-line tool or SDK requires quotation marks around the parameter, you should use single quotes to avoid confusion with the double quotes required in the JSON text.<br />The following restrictions apply to tags:<br />+  Maximum number of tags per secret: 50<br />+  Maximum key length: 127 Unicode characters in UTF-8<br />+  Maximum value length: 255 Unicode characters in UTF-8<br />+  Tag keys and values are case sensitive.<br />+  Do not use the <code>aws:</code> prefix in your tag names or values because AWS reserves it for AWS use. You can't edit or delete tag names or values with this prefix. Tags with this prefix do not count against your tags per secret limit.<br />+  If you use your tagging schema across multiple services and resources, other services might have restrictions on allowed characters. Generally allowed characters: letters, spaces, and numbers representable in UTF-8, plus the following special characters: + - = . _ : / @.</details>",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The string value associated with the key of the tag."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The key identifier, or name, of the tag."
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": "<details><summary>The name of the new secret.</summary>The secret name can contain ASCII letters, numbers, and the following characters: /_+=.@-<br />Do not end your secret name with a hyphen followed by six characters. If you do so, you risk confusion and unexpected results when searching for a secret by partial ARN. Secrets Manager automatically adds a hyphen and six random characters after the secret name at the end of the ARN.</details>"
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secret.html"><code>AWS::SecretsManager::Secret</code></a>.

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
    <td><code>secrets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>secrets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>secrets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>secrets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>secrets</code></td>
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

Gets all properties from an individual <code>secret</code>.
```sql
SELECT
  region,
  description,
  kms_key_id,
  secret_string,
  generate_secret_string,
  replica_regions,
  id,
  tags,
  name
FROM awscc.secretsmanager.secrets
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>secrets</code> in a region.
```sql
SELECT
  region,
  id
FROM awscc.secretsmanager.secrets_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>secret</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.secretsmanager.secrets (
  Description,
  KmsKeyId,
  SecretString,
  GenerateSecretString,
  ReplicaRegions,
  Tags,
  Name,
  region
)
SELECT
  '{{ description }}',
  '{{ kms_key_id }}',
  '{{ secret_string }}',
  '{{ generate_secret_string }}',
  '{{ replica_regions }}',
  '{{ tags }}',
  '{{ name }}',
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
INSERT INTO awscc.secretsmanager.secrets (
  Description,
  KmsKeyId,
  SecretString,
  GenerateSecretString,
  ReplicaRegions,
  Tags,
  Name,
  region
)
SELECT
  '{{ description }}',
  '{{ kms_key_id }}',
  '{{ secret_string }}',
  '{{ generate_secret_string }}',
  '{{ replica_regions }}',
  '{{ tags }}',
  '{{ name }}',
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
  - name: secret
    props:
      - name: description
        value: '{{ description }}'
      - name: kms_key_id
        value: '{{ kms_key_id }}'
      - name: secret_string
        value: '{{ secret_string }}'
      - name: generate_secret_string
        value:
          exclude_uppercase: '{{ exclude_uppercase }}'
          require_each_included_type: '{{ require_each_included_type }}'
          include_space: '{{ include_space }}'
          exclude_characters: '{{ exclude_characters }}'
          generate_string_key: '{{ generate_string_key }}'
          password_length: '{{ password_length }}'
          exclude_punctuation: '{{ exclude_punctuation }}'
          exclude_lowercase: '{{ exclude_lowercase }}'
          secret_string_template: '{{ secret_string_template }}'
          exclude_numbers: '{{ exclude_numbers }}'
      - name: replica_regions
        value:
          - kms_key_id: '{{ kms_key_id }}'
            region: '{{ region }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
      - name: name
        value: '{{ name }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>secret</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.secretsmanager.secrets
SET PatchDocument = string('{{ {
    "Description": description,
    "KmsKeyId": kms_key_id,
    "SecretString": secret_string,
    "GenerateSecretString": generate_secret_string,
    "ReplicaRegions": replica_regions,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id }}'
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
DELETE FROM awscc.secretsmanager.secrets
WHERE
  Identifier = '{{ id }}' AND
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

To operate on the <code>secrets</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
secretsmanager:DescribeSecret,
secretsmanager:GetRandomPassword,
secretsmanager:CreateSecret,
secretsmanager:TagResource,
secretsmanager:ReplicateSecretToRegions
```

</TabItem>
<TabItem value="delete">

```json
secretsmanager:DeleteSecret,
secretsmanager:DescribeSecret,
secretsmanager:RemoveRegionsFromReplication
```

</TabItem>
<TabItem value="list">

```json
secretsmanager:ListSecrets
```

</TabItem>
<TabItem value="read">

```json
secretsmanager:DescribeSecret,
secretsmanager:GetSecretValue
```

</TabItem>
<TabItem value="update">

```json
secretsmanager:UpdateSecret,
secretsmanager:TagResource,
secretsmanager:UntagResource,
secretsmanager:GetRandomPassword,
secretsmanager:GetSecretValue,
secretsmanager:ReplicateSecretToRegions,
secretsmanager:RemoveRegionsFromReplication
```

</TabItem>
</Tabs>