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
<tr><td><b>Description</b></td><td>Creates a new secret. A &#42;secret&#42; can be a password, a set of credentials such as a user name and password, an OAuth token, or other secret information that you store in an encrypted form in Secrets Manager.<br />For RDS master user credentials, see &#91;AWS::RDS::DBCluster MasterUserSecret&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-masterusersecret.html).<br />For RS admin user credentials, see &#91;AWS::Redshift::Cluster&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html).<br />To retrieve a secret in a CFNshort template, use a &#42;dynamic reference&#42;. For more information, see &#91;Retrieve a secret in an resource&#93;(https://docs.aws.amazon.com/secretsmanager/latest/userguide/cfn-example&#95;reference-secret.html).<br />For information about creating a secret in the console, see &#91;Create a secret&#93;(https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage&#95;create-basic-secret.html). For information about creating a secret using the CLI or SDK, see &#91;CreateSecret&#93;(https://docs.aws.amazon.com/secretsmanager/latest/apireference/API&#95;CreateSecret.html).<br />For information about retrieving a secret in code, see &#91;Retrieve secrets from Secrets Manager&#93;(https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets.html).</td></tr>
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
    "description": "The ARN, key ID, or alias of the KMS key that Secrets Manager uses to encrypt the secret value in the secret. An alias is always prefixed by &#96;&#96;alias/&#96;&#96;, for example &#96;&#96;alias/aws/secretsmanager&#96;&#96;. For more information, see &#91;About aliases&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/alias-about.html).<br />To use a KMS key in a different account, use the key ARN or the alias ARN.<br />If you don't specify this value, then Secrets Manager uses the key &#96;&#96;aws/secretsmanager&#96;&#96;. If that key doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value.<br />If the secret is in a different AWS account from the credentials calling the API, then you can't use &#96;&#96;aws/secretsmanager&#96;&#96; to encrypt the secret, and you must create and use a customer managed KMS key."
  },
  {
    "name": "secret_string",
    "type": "string",
    "description": "The text to encrypt and store in the secret. We recommend you use a JSON structure of key/value pairs for your secret value. To generate a random password, use &#96;&#96;GenerateSecretString&#96;&#96; instead. If you omit both &#96;&#96;GenerateSecretString&#96;&#96; and &#96;&#96;SecretString&#96;&#96;, you create an empty secret. When you make a change to this property, a new secret version is created."
  },
  {
    "name": "generate_secret_string",
    "type": "object",
    "description": "A structure that specifies how to generate a password to encrypt and store in the secret. To include a specific string in the secret, use &#96;&#96;SecretString&#96;&#96; instead. If you omit both &#96;&#96;GenerateSecretString&#96;&#96; and &#96;&#96;SecretString&#96;&#96;, you create an empty secret. When you make a change to this property, a new secret version is created.<br />We recommend that you specify the maximum length and include every character type that the system you are generating a password for can support.",
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
        "description": "The JSON key name for the key/value pair, where the value is the generated password. This pair is added to the JSON structure specified by the &#96;&#96;SecretStringTemplate&#96;&#96; parameter. If you specify this parameter, then you must also specify &#96;&#96;SecretStringTemplate&#96;&#96;."
      },
      {
        "name": "password_length",
        "type": "integer",
        "description": "The length of the password. If you don't include this parameter, the default length is 32 characters."
      },
      {
        "name": "exclude_punctuation",
        "type": "boolean",
        "description": "Specifies whether to exclude the following punctuation characters from the password: &#96;&#96;! \" # $ % & ' ( ) &#42; + , - . / : ; &lt; = &gt; ? @ &#91; \\ &#93; ^ &#95; &#96; &#123; &#124; &#125; &#126;&#96;&#96;. If you don't include this switch, the password can contain punctuation."
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
    "description": "A custom type that specifies a &#96;&#96;Region&#96;&#96; and the &#96;&#96;KmsKeyId&#96;&#96; for a replica secret.",
    "children": [
      {
        "name": "kms_key_id",
        "type": "string",
        "description": "The ARN, key ID, or alias of the KMS key to encrypt the secret. If you don't include this field, Secrets Manager uses &#96;&#96;aws/secretsmanager&#96;&#96;."
      },
      {
        "name": "region",
        "type": "string",
        "description": "A string that represents a &#96;&#96;Region&#96;&#96;, for example \"us-east-1\"."
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
    "description": "A list of tags to attach to the secret. Each tag is a key and value pair of strings in a JSON text string, for example:<br />&#96;&#96;&#91;&#123;\"Key\":\"CostCenter\",\"Value\":\"12345\"&#125;,&#123;\"Key\":\"environment\",\"Value\":\"production\"&#125;&#93;&#96;&#96; <br />Secrets Manager tag key names are case sensitive. A tag with the key \"ABC\" is a different tag from one with key \"abc\".<br />Stack-level tags, tags you apply to the CloudFormation stack, are also attached to the secret. <br />If you check tags in permissions policies as part of your security strategy, then adding or removing a tag can change permissions. If the completion of this operation would result in you losing your permissions for this secret, then Secrets Manager blocks the operation and returns an &#96;&#96;Access Denied&#96;&#96; error. For more information, see &#91;Control access to secrets using tags&#93;(https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access&#95;examples.html#tag-secrets-abac) and &#91;Limit access to identities with tags that match secrets' tags&#93;(https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access&#95;examples.html#auth-and-access&#95;tags2).<br />For information about how to format a JSON parameter for the various command line tool environments, see &#91;Using JSON for Parameters&#93;(https://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#cli-using-param-json). If your command-line tool or SDK requires quotation marks around the parameter, you should use single quotes to avoid confusion with the double quotes required in the JSON text.<br />The following restrictions apply to tags:<br />+ Maximum number of tags per secret: 50<br />+ Maximum key length: 127 Unicode characters in UTF-8<br />+ Maximum value length: 255 Unicode characters in UTF-8<br />+ Tag keys and values are case sensitive.<br />+ Do not use the &#96;&#96;aws:&#96;&#96; prefix in your tag names or values because AWS reserves it for AWS use. You can't edit or delete tag names or values with this prefix. Tags with this prefix do not count against your tags per secret limit.<br />+ If you use your tagging schema across multiple services and resources, other services might have restrictions on allowed characters. Generally allowed characters: letters, spaces, and numbers representable in UTF-8, plus the following special characters: + - = . &#95; : / @.",
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
    "description": "The name of the new secret.<br />The secret name can contain ASCII letters, numbers, and the following characters: /&#95;+=.@-<br />Do not end your secret name with a hyphen followed by six characters. If you do so, you risk confusion and unexpected results when searching for a secret by partial ARN. Secrets Manager automatically adds a hyphen and six random characters after the secret name at the end of the ARN."
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
WHERE region = 'us-east-1' AND Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>secrets</code> in a region.
```sql
SELECT
region,
id
FROM awscc.secretsmanager.secrets_list_only
WHERE region = 'us-east-1';
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
'{{ Description }}',
 '{{ KmsKeyId }}',
 '{{ SecretString }}',
 '{{ GenerateSecretString }}',
 '{{ ReplicaRegions }}',
 '{{ Tags }}',
 '{{ Name }}',
'{{ region }}';
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
 '{{ Description }}',
 '{{ KmsKeyId }}',
 '{{ SecretString }}',
 '{{ GenerateSecretString }}',
 '{{ ReplicaRegions }}',
 '{{ Tags }}',
 '{{ Name }}',
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
  - name: secret
    props:
      - name: Description
        value: '{{ Description }}'
      - name: KmsKeyId
        value: '{{ KmsKeyId }}'
      - name: SecretString
        value: '{{ SecretString }}'
      - name: GenerateSecretString
        value:
          ExcludeUppercase: '{{ ExcludeUppercase }}'
          RequireEachIncludedType: '{{ RequireEachIncludedType }}'
          IncludeSpace: '{{ IncludeSpace }}'
          ExcludeCharacters: '{{ ExcludeCharacters }}'
          GenerateStringKey: '{{ GenerateStringKey }}'
          PasswordLength: '{{ PasswordLength }}'
          ExcludePunctuation: '{{ ExcludePunctuation }}'
          ExcludeLowercase: '{{ ExcludeLowercase }}'
          SecretStringTemplate: '{{ SecretStringTemplate }}'
          ExcludeNumbers: '{{ ExcludeNumbers }}'
      - name: ReplicaRegions
        value:
          - KmsKeyId: '{{ KmsKeyId }}'
            Region: '{{ Region }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: Name
        value: '{{ Name }}'

```
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
WHERE region = '{{ region }}'
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.secretsmanager.secrets
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

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