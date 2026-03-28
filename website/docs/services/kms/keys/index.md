---
title: keys
hide_title: false
hide_table_of_contents: false
keywords:
  - keys
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

import CodeBlock from '@theme/CodeBlock';
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
<tr><td><b>Description</b></td><td><details><summary>The <code>AWS::KMS::Key</code> resource specifies an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms_keys">KMS key</a> in KMSlong. You can use this resource to create symmetric encryption KMS keys, asymmetric KMS keys for encryption or signing, and symmetric HMAC KMS keys. You can use <code>AWS::KMS::Key</code> to create <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html#mrk-primary-key">multi-Region primary keys</a> of all supported types. To replicate a multi-Region key, use the <code>AWS::KMS::ReplicaKey</code> resource.</summary>If you change the value of the <code>KeySpec</code>, <code>KeyUsage</code>, <code>Origin</code>, or <code>MultiRegion</code> properties of an existing KMS key, the update request fails, regardless of the value of the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html">UpdateReplacePolicy attribute</a>. This prevents you from accidentally deleting a KMS key by changing any of its immutable property values.<br />KMS replaced the term <i>customer master key (CMK)</i> with *<i> and </i>KMS key*. The concept has not changed. To prevent breaking changes, KMS is keeping some variations of this term.<br />You can use symmetric encryption KMS keys to encrypt and decrypt small amounts of data, but they are more commonly used to generate data keys and data key pairs. You can also use a symmetric encryption KMS key to encrypt data stored in AWS services that are <a href="https://docs.aws.amazon.com//kms/features/#AWS_Service_Integration">integrated with</a>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#symmetric-cmks">Symmetric encryption KMS keys</a> in the <i>Developer Guide</i>.<br />You can use asymmetric KMS keys to encrypt and decrypt data or sign messages and verify signatures. To create an asymmetric key, you must specify an asymmetric <code>KeySpec</code> value and a <code>KeyUsage</code> value. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Asymmetric keys in</a> in the <i>Developer Guide</i>.<br />You can use HMAC KMS keys (which are also symmetric keys) to generate and verify hash-based message authentication codes. To create an HMAC key, you must specify an HMAC <code>KeySpec</code> value and a <code>KeyUsage</code> value of <code>GENERATE_VERIFY_MAC</code>. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html">HMAC keys in</a> in the <i>Developer Guide</i>.<br />You can also create symmetric encryption, asymmetric, and HMAC multi-Region primary keys. To create a multi-Region primary key, set the <code>MultiRegion</code> property to <code>true</code>. For information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Multi-Region keys in</a> in the <i>Developer Guide</i>.<br />You cannot use the <code>AWS::KMS::Key</code> resource to specify a KMS key with <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">imported key material</a> or a KMS key in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>.<br /><i>Regions</i><br />KMS CloudFormation resources are available in all Regions in which KMS and CFN are supported. You can use the <code>AWS::KMS::Key</code> resource to create and manage all KMS key types that are supported in a Region.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.kms.keys" /></td></tr>
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
    "description": "A description of the KMS key. Use a description that helps you to distinguish this KMS key from others in the account, such as its intended use."
  },
  {
    "name": "enabled",
    "type": "boolean",
    "description": "<details><summary>Specifies whether the KMS key is enabled. Disabled KMS keys cannot be used in cryptographic operations.</summary>When <code>Enabled</code> is <code>true</code>, the <i>key state</i> of the KMS key is <code>Enabled</code>. When <code>Enabled</code> is <code>false</code>, the key state of the KMS key is <code>Disabled</code>. The default value is <code>true</code>.<br />The actual key state of the KMS key might be affected by actions taken outside of CloudFormation, such as running the <a href=\"https://docs.aws.amazon.com/kms/latest/APIReference/API_EnableKey.html\">EnableKey</a>, <a href=\"https://docs.aws.amazon.com/kms/latest/APIReference/API_DisableKey.html\">DisableKey</a>, or <a href=\"https://docs.aws.amazon.com/kms/latest/APIReference/API_ScheduleKeyDeletion.html\">ScheduleKeyDeletion</a> operations.<br />For information about the key states of a KMS key, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html\">Key state: Effect on your KMS key</a> in the <i>Developer Guide</i>.</details>"
  },
  {
    "name": "enable_key_rotation",
    "type": "boolean",
    "description": "<details><summary>Enables automatic rotation of the key material for the specified KMS key. By default, automatic key rotation is not enabled.</summary>KMS supports automatic rotation only for symmetric encryption KMS keys (<code>KeySpec</code> = <code>SYMMETRIC_DEFAULT</code>). For asymmetric KMS keys, HMAC KMS keys, and KMS keys with Origin <code>EXTERNAL</code>, omit the <code>EnableKeyRotation</code> property or set it to <code>false</code>.<br />To enable automatic key rotation of the key material for a multi-Region KMS key, set <code>EnableKeyRotation</code> to <code>true</code> on the primary key (created by using <code>AWS::KMS::Key</code>). KMS copies the rotation status to all replica keys. For details, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-manage.html#multi-region-rotate\">Rotating multi-Region keys</a> in the <i>Developer Guide</i>.<br />When you enable automatic rotation, KMS automatically creates new key material for the KMS key one year after the enable date and every year thereafter. KMS retains all key material until you delete the KMS key. For detailed information about automatic key rotation, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html\">Rotating KMS keys</a> in the <i>Developer Guide</i>.</details>"
  },
  {
    "name": "key_policy",
    "type": "object",
    "description": "<details><summary>The key policy to attach to the KMS key.</summary>If you provide a key policy, it must meet the following criteria:<br />+  The key policy must allow the caller to make a subsequent <a href=\"https://docs.aws.amazon.com/kms/latest/APIReference/API_PutKeyPolicy.html\">PutKeyPolicy</a> request on the KMS key. This reduces the risk that the KMS key becomes unmanageable. For more information, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam\">Default key policy</a> in the <i>Developer Guide</i>. (To omit this condition, set <code>BypassPolicyLockoutSafetyCheck</code> to true.)<br />+  Each statement in the key policy must contain one or more principals. The principals in the key policy must exist and be visible to KMS. When you create a new AWS principal (for example, an IAM user or role), you might need to enforce a delay before including the new principal in a key policy because the new principal might not be immediately visible to KMS. For more information, see <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_eventual-consistency\">Changes that I make are not always immediately visible</a> in the <i>User Guide</i>.<br />If you do not provide a key policy, KMS attaches a default key policy to the KMS key. For more information, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default\">Default key policy</a> in the <i>Developer Guide</i>.<br />A key policy document can include only the following characters:<br />+  Printable ASCII characters<br />+  Printable characters in the Basic Latin and Latin-1 Supplement character set<br />+  The tab (<code>\\u0009</code>), line feed (<code>\\u000A</code>), and carriage return (<code>\\u000D</code>) special characters<br /><i>Minimum</i>: <code>1</code><br /><i>Maximum</i>: <code>32768</code></details>"
  },
  {
    "name": "key_usage",
    "type": "string",
    "description": "<details><summary>Determines the <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations\">cryptographic operations</a> for which you can use the KMS key. The default value is <code>ENCRYPT_DECRYPT</code>. This property is required for asymmetric KMS keys and HMAC KMS keys. You can't change the <code>KeyUsage</code> value after the KMS key is created.</summary>If you change the value of the <code>KeyUsage</code> property on an existing KMS key, the update request fails, regardless of the value of the <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html\">UpdateReplacePolicy attribute</a>. This prevents you from accidentally deleting a KMS key by changing an immutable property value.<br />Select only one valid value.<br />+  For symmetric encryption KMS keys, omit the parameter or specify <code>ENCRYPT_DECRYPT</code>.<br />+  For HMAC KMS keys (symmetric), specify <code>GENERATE_VERIFY_MAC</code>.<br />+  For asymmetric KMS keys with RSA key pairs, specify <code>ENCRYPT_DECRYPT</code> or <code>SIGN_VERIFY</code>.<br />+  For asymmetric KMS keys with NIST-recommended elliptic curve key pairs, specify <code>SIGN_VERIFY</code> or <code>KEY_AGREEMENT</code>.<br />+  For asymmetric KMS keys with <code>ECC_SECG_P256K1</code> key pairs, specify <code>SIGN_VERIFY</code>.<br />+  For asymmetric KMS keys with ML-DSA key pairs, specify <code>SIGN_VERIFY</code>.<br />+  For asymmetric KMS keys with SM2 key pairs (China Regions only), specify <code>ENCRYPT_DECRYPT</code>, <code>SIGN_VERIFY</code>, or <code>KEY_AGREEMENT</code>.</details>"
  },
  {
    "name": "origin",
    "type": "string",
    "description": "<details><summary>The source of the key material for the KMS key. You cannot change the origin after you create the KMS key. The default is <code>AWS_KMS</code>, which means that KMS creates the key material.</summary>To <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-create-cmk.html\">create a KMS key with no key material</a> (for imported key material), set this value to <code>EXTERNAL</code>. For more information about importing key material into KMS, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html\">Importing Key Material</a> in the <i>Developer Guide</i>.<br />You can ignore <code>ENABLED</code> when Origin is <code>EXTERNAL</code>. When a KMS key with Origin <code>EXTERNAL</code> is created, the key state is <code>PENDING_IMPORT</code> and <code>ENABLED</code> is <code>false</code>. After you import the key material, <code>ENABLED</code> updated to <code>true</code>. The KMS key can then be used for Cryptographic Operations.<br />+  CFN doesn't support creating an <code>Origin</code> parameter of the <code>AWS_CLOUDHSM</code> or <code>EXTERNAL_KEY_STORE</code> values.<br />+  <code>EXTERNAL</code> is not supported for ML-DSA keys.</details>"
  },
  {
    "name": "key_spec",
    "type": "string",
    "description": "<details><summary>Specifies the type of KMS key to create. The default value, <code>SYMMETRIC_DEFAULT</code>, creates a KMS key with a 256-bit symmetric key for encryption and decryption. In China Regions, <code>SYMMETRIC_DEFAULT</code> creates a 128-bit symmetric key that uses SM4 encryption. You can't change the <code>KeySpec</code> value after the KMS key is created. For help choosing a key spec for your KMS key, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-choose.html\">Choosing a KMS key type</a> in the <i>Developer Guide</i>.</summary>The <code>KeySpec</code> property determines the type of key material in the KMS key and the algorithms that the KMS key supports. To further restrict the algorithms that can be used with the KMS key, use a condition key in its key policy or IAM policy. For more information, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms\">condition keys</a> in the <i>Developer Guide</i>.<br />If you change the value of the <code>KeySpec</code> property on an existing KMS key, the update request fails, regardless of the value of the <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html\">UpdateReplacePolicy attribute</a>. This prevents you from accidentally deleting a KMS key by changing an immutable property value.<br /><a href=\"https://docs.aws.amazon.com/kms/features/#AWS_Service_Integration\">services that are integrated with</a> use symmetric encryption KMS keys to protect your data. These services do not support encryption with asymmetric KMS keys. For help determining whether a KMS key is asymmetric, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/find-symm-asymm.html\">Identifying asymmetric KMS keys</a> in the <i>Developer Guide</i>.<br />KMS supports the following key specs for KMS keys:<br />+  Symmetric encryption key (default)<br />+  <code>SYMMETRIC_DEFAULT</code> (AES-256-GCM)<br />+  HMAC keys (symmetric)<br />+   <code>HMAC_224</code><br />+   <code>HMAC_256</code><br />+   <code>HMAC_384</code><br />+   <code>HMAC_512</code><br />+  Asymmetric RSA key pairs (encryption and decryption <i>or</i> signing and verification)<br />+   <code>RSA_2048</code><br />+   <code>RSA_3072</code><br />+   <code>RSA_4096</code><br />+  Asymmetric NIST-recommended elliptic curve key pairs (signing and verification <i>or</i> deriving shared secrets)<br />+  <code>ECC_NIST_P256</code> (secp256r1)<br />+  <code>ECC_NIST_P384</code> (secp384r1)<br />+  <code>ECC_NIST_P521</code> (secp521r1)<br />+  Other asymmetric elliptic curve key pairs (signing and verification)<br />+  <code>ECC_SECG_P256K1</code> (secp256k1), commonly used for cryptocurrencies.<br />+  Asymmetric ML-DSA key pairs (signing and verification)<br />+   <code>ML_DSA_44</code><br />+   <code>ML_DSA_65</code><br />+   <code>ML_DSA_87</code><br />+  SM2 key pairs (encryption and decryption <i>or</i> signing and verification <i>or</i> deriving shared secrets)<br />+  <code>SM2</code> (China Regions only)</details>"
  },
  {
    "name": "multi_region",
    "type": "boolean",
    "description": "<details><summary>Creates a multi-Region primary key that you can replicate in other AWS-Regions. You can't change the <code>MultiRegion</code> value after the KMS key is created.</summary>For a list of AWS-Regions in which multi-Region keys are supported, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html\">Multi-Region keys in</a> in the **.<br />If you change the value of the <code>MultiRegion</code> property on an existing KMS key, the update request fails, regardless of the value of the <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html\">UpdateReplacePolicy attribute</a>. This prevents you from accidentally deleting a KMS key by changing an immutable property value.<br />For a multi-Region key, set to this property to <code>true</code>. For a single-Region key, omit this property or set it to <code>false</code>. The default value is <code>false</code>.<br /><i>Multi-Region keys</i> are an KMS feature that lets you create multiple interoperable KMS keys in different AWS-Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them to encrypt data in one AWS-Region and decrypt it in a different AWS-Region without making a cross-Region call or exposing the plaintext data. For more information, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html\">Multi-Region keys</a> in the <i>Developer Guide</i>.<br />You can create a symmetric encryption, HMAC, or asymmetric multi-Region KMS key, and you can create a multi-Region key with imported key material. However, you cannot create a multi-Region key in a custom key store.<br />To create a replica of this primary key in a different AWS-Region , create an <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html\">AWS::KMS::ReplicaKey</a> resource in a CloudFormation stack in the replica Region. Specify the key ARN of this primary key.</details>"
  },
  {
    "name": "pending_window_in_days",
    "type": "integer",
    "description": "<details><summary>Specifies the number of days in the waiting period before KMS deletes a KMS key that has been removed from a CloudFormation stack. Enter a value between 7 and 30 days. The default value is 30 days.</summary>When you remove a KMS key from a CloudFormation stack, KMS schedules the KMS key for deletion and starts the mandatory waiting period. The <code>PendingWindowInDays</code> property determines the length of waiting period. During the waiting period, the key state of KMS key is <code>Pending Deletion</code> or <code>Pending Replica Deletion</code>, which prevents the KMS key from being used in cryptographic operations. When the waiting period expires, KMS permanently deletes the KMS key.<br />KMS will not delete a <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html\">multi-Region primary key</a> that has replica keys. If you remove a multi-Region primary key from a CloudFormation stack, its key state changes to <code>PendingReplicaDeletion</code> so it cannot be replicated or used in cryptographic operations. This state can persist indefinitely. When the last of its replica keys is deleted, the key state of the primary key changes to <code>PendingDeletion</code> and the waiting period specified by <code>PendingWindowInDays</code> begins. When this waiting period expires, KMS deletes the primary key. For details, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-delete.html\">Deleting multi-Region keys</a> in the <i>Developer Guide</i>.<br />You cannot use a CloudFormation template to cancel deletion of the KMS key after you remove it from the stack, regardless of the waiting period. If you specify a KMS key in your template, even one with the same name, CloudFormation creates a new KMS key. To cancel deletion of a KMS key, use the KMS console or the <a href=\"https://docs.aws.amazon.com/kms/latest/APIReference/API_CancelKeyDeletion.html\">CancelKeyDeletion</a> operation.<br />For information about the <code>Pending Deletion</code> and <code>Pending Replica Deletion</code> key states, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html\">Key state: Effect on your KMS key</a> in the <i>Developer Guide</i>. For more information about deleting KMS keys, see the <a href=\"https://docs.aws.amazon.com/kms/latest/APIReference/API_ScheduleKeyDeletion.html\">ScheduleKeyDeletion</a> operation in the <i>API Reference</i> and <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html\">Deleting KMS keys</a> in the <i>Developer Guide</i>.</details>"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "<details><summary>Assigns one or more tags to the replica key.</summary>Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/abac.html\">ABAC for</a> in the <i>Developer Guide</i>.<br />For information about tags in KMS, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html\">Tagging keys</a> in the <i>Developer Guide</i>. For information about tags in CloudFormation, see <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html\">Tag</a>.</details>",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "key_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "bypass_policy_lockout_safety_check",
    "type": "boolean",
    "description": "<details><summary>Skips (\"bypasses\") the key policy lockout safety check. The default value is false.</summary>Setting this value to true increases the risk that the KMS key becomes unmanageable. Do not set this value to true indiscriminately.<br />For more information, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-default.html#prevent-unmanageable-key\">Default key policy</a> in the <i>Developer Guide</i>.<br />Use this parameter only when you intend to prevent the principal that is making the request from making a subsequent <a href=\"https://docs.aws.amazon.com/kms/latest/APIReference/API_PutKeyPolicy.html\">PutKeyPolicy</a> request on the KMS key.</details>"
  },
  {
    "name": "rotation_period_in_days",
    "type": "integer",
    "description": "<details><summary>Specifies a custom period of time between each rotation date. If no value is specified, the default value is 365 days.</summary>The rotation period defines the number of days after you enable automatic key rotation that KMS will rotate your key material, and the number of days between each automatic rotation thereafter.<br />You can use the <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/conditions-kms.html#conditions-kms-rotation-period-in-days\">kms:RotationPeriodInDays</a> condition key to further constrain the values that principals can specify in the <code>RotationPeriodInDays</code> parameter.<br />For more information about rotating KMS keys and automatic rotation, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html\">Rotating keys</a> in the <i>Developer Guide</i>.</details>"
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
    "name": "key_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html"><code>AWS::KMS::Key</code></a>.

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
    <td><CopyableCode code="region" /></td>
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
  description,
  enabled,
  enable_key_rotation,
  key_policy,
  key_usage,
  origin,
  key_spec,
  multi_region,
  pending_window_in_days,
  tags,
  arn,
  key_id,
  bypass_policy_lockout_safety_check,
  rotation_period_in_days
FROM awscc.kms.keys
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ key_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>keys</code> in a region.
```sql
SELECT
  region,
  key_id
FROM awscc.kms.keys_list_only
WHERE
  region = '{{ region }}';
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
INSERT INTO awscc.kms.keys (
  Description,
  Enabled,
  EnableKeyRotation,
  KeyPolicy,
  KeyUsage,
  Origin,
  KeySpec,
  MultiRegion,
  PendingWindowInDays,
  Tags,
  BypassPolicyLockoutSafetyCheck,
  RotationPeriodInDays,
  region
)
SELECT
  '{{ description }}',
  '{{ enabled }}',
  '{{ enable_key_rotation }}',
  '{{ key_policy }}',
  '{{ key_usage }}',
  '{{ origin }}',
  '{{ key_spec }}',
  '{{ multi_region }}',
  '{{ pending_window_in_days }}',
  '{{ tags }}',
  '{{ bypass_policy_lockout_safety_check }}',
  '{{ rotation_period_in_days }}',
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
INSERT INTO awscc.kms.keys (
  Description,
  Enabled,
  EnableKeyRotation,
  KeyPolicy,
  KeyUsage,
  Origin,
  KeySpec,
  MultiRegion,
  PendingWindowInDays,
  Tags,
  BypassPolicyLockoutSafetyCheck,
  RotationPeriodInDays,
  region
)
SELECT
  '{{ description }}',
  '{{ enabled }}',
  '{{ enable_key_rotation }}',
  '{{ key_policy }}',
  '{{ key_usage }}',
  '{{ origin }}',
  '{{ key_spec }}',
  '{{ multi_region }}',
  '{{ pending_window_in_days }}',
  '{{ tags }}',
  '{{ bypass_policy_lockout_safety_check }}',
  '{{ rotation_period_in_days }}',
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
  - name: key
    props:
      - name: description
        value: '{{ description }}'
      - name: enabled
        value: '{{ enabled }}'
      - name: enable_key_rotation
        value: '{{ enable_key_rotation }}'
      - name: key_policy
        value: {}
      - name: key_usage
        value: '{{ key_usage }}'
      - name: origin
        value: '{{ origin }}'
      - name: key_spec
        value: '{{ key_spec }}'
      - name: multi_region
        value: '{{ multi_region }}'
      - name: pending_window_in_days
        value: '{{ pending_window_in_days }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
      - name: bypass_policy_lockout_safety_check
        value: '{{ bypass_policy_lockout_safety_check }}'
      - name: rotation_period_in_days
        value: '{{ rotation_period_in_days }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>key</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.kms.keys
SET PatchDocument = string('{{ {
    "Description": description,
    "Enabled": enabled,
    "EnableKeyRotation": enable_key_rotation,
    "KeyPolicy": key_policy,
    "KeyUsage": key_usage,
    "Origin": origin,
    "KeySpec": key_spec,
    "MultiRegion": multi_region,
    "PendingWindowInDays": pending_window_in_days,
    "Tags": tags,
    "BypassPolicyLockoutSafetyCheck": bypass_policy_lockout_safety_check,
    "RotationPeriodInDays": rotation_period_in_days
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ key_id }}'
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
DELETE FROM awscc.kms.keys
WHERE
  Identifier = '{{ key_id }}' AND
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

To operate on the <code>keys</code> resource, the following permissions are required:

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
kms:CreateKey,
kms:EnableKeyRotation,
kms:DisableKey,
kms:TagResource,
kms:PutKeyPolicy
```

</TabItem>
<TabItem value="read">

```json
kms:DescribeKey,
kms:GetKeyPolicy,
kms:GetKeyRotationStatus,
kms:ListResourceTags
```

</TabItem>
<TabItem value="update">

```json
kms:DescribeKey,
kms:DisableKey,
kms:DisableKeyRotation,
kms:EnableKey,
kms:EnableKeyRotation,
kms:PutKeyPolicy,
kms:TagResource,
kms:UntagResource,
kms:UpdateKeyDescription,
kms:ListResourceTags
```

</TabItem>
<TabItem value="delete">

```json
kms:DescribeKey,
kms:ScheduleKeyDeletion
```

</TabItem>
<TabItem value="list">

```json
kms:ListKeys,
kms:DescribeKey
```

</TabItem>
</Tabs>