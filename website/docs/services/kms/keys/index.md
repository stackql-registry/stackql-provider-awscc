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
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::KMS::Key&#96;&#96; resource specifies an &#91;KMS key&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms&#95;keys) in KMSlong. You can use this resource to create symmetric encryption KMS keys, asymmetric KMS keys for encryption or signing, and symmetric HMAC KMS keys. You can use &#96;&#96;AWS::KMS::Key&#96;&#96; to create &#91;multi-Region primary keys&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html#mrk-primary-key) of all supported types. To replicate a multi-Region key, use the &#96;&#96;AWS::KMS::ReplicaKey&#96;&#96; resource.<br />If you change the value of the &#96;&#96;KeySpec&#96;&#96;, &#96;&#96;KeyUsage&#96;&#96;, &#96;&#96;Origin&#96;&#96;, or &#96;&#96;MultiRegion&#96;&#96; properties of an existing KMS key, the update request fails, regardless of the value of the &#91;UpdateReplacePolicy attribute&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html). This prevents you from accidentally deleting a KMS key by changing any of its immutable property values.<br />KMS replaced the term &#42;customer master key (CMK)&#42; with &#42;&#42; and &#42;KMS key&#42;. The concept has not changed. To prevent breaking changes, KMS is keeping some variations of this term.<br />You can use symmetric encryption KMS keys to encrypt and decrypt small amounts of data, but they are more commonly used to generate data keys and data key pairs. You can also use a symmetric encryption KMS key to encrypt data stored in AWS services that are &#91;integrated with&#93;(https://docs.aws.amazon.com//kms/features/#AWS&#95;Service&#95;Integration). For more information, see &#91;Symmetric encryption KMS keys&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#symmetric-cmks) in the &#42;Developer Guide&#42;.<br />You can use asymmetric KMS keys to encrypt and decrypt data or sign messages and verify signatures. To create an asymmetric key, you must specify an asymmetric &#96;&#96;KeySpec&#96;&#96; value and a &#96;&#96;KeyUsage&#96;&#96; value. For details, see &#91;Asymmetric keys in&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html) in the &#42;Developer Guide&#42;.<br />You can use HMAC KMS keys (which are also symmetric keys) to generate and verify hash-based message authentication codes. To create an HMAC key, you must specify an HMAC &#96;&#96;KeySpec&#96;&#96; value and a &#96;&#96;KeyUsage&#96;&#96; value of &#96;&#96;GENERATE&#95;VERIFY&#95;MAC&#96;&#96;. For details, see &#91;HMAC keys in&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html) in the &#42;Developer Guide&#42;.<br />You can also create symmetric encryption, asymmetric, and HMAC multi-Region primary keys. To create a multi-Region primary key, set the &#96;&#96;MultiRegion&#96;&#96; property to &#96;&#96;true&#96;&#96;. For information about multi-Region keys, see &#91;Multi-Region keys in&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the &#42;Developer Guide&#42;.<br />You cannot use the &#96;&#96;AWS::KMS::Key&#96;&#96; resource to specify a KMS key with &#91;imported key material&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html) or a KMS key in a &#91;custom key store&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html).<br />&#42;Regions&#42; <br />KMS CloudFormation resources are available in all Regions in which KMS and CFN are supported. You can use the &#96;&#96;AWS::KMS::Key&#96;&#96; resource to create and manage all KMS key types that are supported in a Region.</td></tr>
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
    "description": "Specifies whether the KMS key is enabled. Disabled KMS keys cannot be used in cryptographic operations.<br />When &#96;&#96;Enabled&#96;&#96; is &#96;&#96;true&#96;&#96;, the &#42;key state&#42; of the KMS key is &#96;&#96;Enabled&#96;&#96;. When &#96;&#96;Enabled&#96;&#96; is &#96;&#96;false&#96;&#96;, the key state of the KMS key is &#96;&#96;Disabled&#96;&#96;. The default value is &#96;&#96;true&#96;&#96;.<br />The actual key state of the KMS key might be affected by actions taken outside of CloudFormation, such as running the &#91;EnableKey&#93;(https://docs.aws.amazon.com/kms/latest/APIReference/API&#95;EnableKey.html), &#91;DisableKey&#93;(https://docs.aws.amazon.com/kms/latest/APIReference/API&#95;DisableKey.html), or &#91;ScheduleKeyDeletion&#93;(https://docs.aws.amazon.com/kms/latest/APIReference/API&#95;ScheduleKeyDeletion.html) operations.<br />For information about the key states of a KMS key, see &#91;Key state: Effect on your KMS key&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the &#42;Developer Guide&#42;."
  },
  {
    "name": "enable_key_rotation",
    "type": "boolean",
    "description": "Enables automatic rotation of the key material for the specified KMS key. By default, automatic key rotation is not enabled.<br />KMS supports automatic rotation only for symmetric encryption KMS keys (&#96;&#96;KeySpec&#96;&#96; = &#96;&#96;SYMMETRIC&#95;DEFAULT&#96;&#96;). For asymmetric KMS keys, HMAC KMS keys, and KMS keys with Origin &#96;&#96;EXTERNAL&#96;&#96;, omit the &#96;&#96;EnableKeyRotation&#96;&#96; property or set it to &#96;&#96;false&#96;&#96;.<br />To enable automatic key rotation of the key material for a multi-Region KMS key, set &#96;&#96;EnableKeyRotation&#96;&#96; to &#96;&#96;true&#96;&#96; on the primary key (created by using &#96;&#96;AWS::KMS::Key&#96;&#96;). KMS copies the rotation status to all replica keys. For details, see &#91;Rotating multi-Region keys&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-manage.html#multi-region-rotate) in the &#42;Developer Guide&#42;.<br />When you enable automatic rotation, KMS automatically creates new key material for the KMS key one year after the enable date and every year thereafter. KMS retains all key material until you delete the KMS key. For detailed information about automatic key rotation, see &#91;Rotating KMS keys&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html) in the &#42;Developer Guide&#42;."
  },
  {
    "name": "key_policy",
    "type": "object",
    "description": "The key policy to attach to the KMS key.<br />If you provide a key policy, it must meet the following criteria:<br />+ The key policy must allow the caller to make a subsequent &#91;PutKeyPolicy&#93;(https://docs.aws.amazon.com/kms/latest/APIReference/API&#95;PutKeyPolicy.html) request on the KMS key. This reduces the risk that the KMS key becomes unmanageable. For more information, see &#91;Default key policy&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam) in the &#42;Developer Guide&#42;. (To omit this condition, set &#96;&#96;BypassPolicyLockoutSafetyCheck&#96;&#96; to true.)<br />+ Each statement in the key policy must contain one or more principals. The principals in the key policy must exist and be visible to KMS. When you create a new AWS principal (for example, an IAM user or role), you might need to enforce a delay before including the new principal in a key policy because the new principal might not be immediately visible to KMS. For more information, see &#91;Changes that I make are not always immediately visible&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot&#95;general.html#troubleshoot&#95;general&#95;eventual-consistency) in the &#42;User Guide&#42;.<br /><br />If you do not provide a key policy, KMS attaches a default key policy to the KMS key. For more information, see &#91;Default key policy&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default) in the &#42;Developer Guide&#42;.<br />A key policy document can include only the following characters:<br />+ Printable ASCII characters<br />+ Printable characters in the Basic Latin and Latin-1 Supplement character set<br />+ The tab (&#96;&#96;\\u0009&#96;&#96;), line feed (&#96;&#96;\\u000A&#96;&#96;), and carriage return (&#96;&#96;\\u000D&#96;&#96;) special characters<br /><br />&#42;Minimum&#42;: &#96;&#96;1&#96;&#96;<br />&#42;Maximum&#42;: &#96;&#96;32768&#96;&#96;"
  },
  {
    "name": "key_usage",
    "type": "string",
    "description": "Determines the &#91;cryptographic operations&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations) for which you can use the KMS key. The default value is &#96;&#96;ENCRYPT&#95;DECRYPT&#96;&#96;. This property is required for asymmetric KMS keys and HMAC KMS keys. You can't change the &#96;&#96;KeyUsage&#96;&#96; value after the KMS key is created.<br />If you change the value of the &#96;&#96;KeyUsage&#96;&#96; property on an existing KMS key, the update request fails, regardless of the value of the &#91;UpdateReplacePolicy attribute&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html). This prevents you from accidentally deleting a KMS key by changing an immutable property value.<br />Select only one valid value.<br />+ For symmetric encryption KMS keys, omit the parameter or specify &#96;&#96;ENCRYPT&#95;DECRYPT&#96;&#96;.<br />+ For HMAC KMS keys (symmetric), specify &#96;&#96;GENERATE&#95;VERIFY&#95;MAC&#96;&#96;.<br />+ For asymmetric KMS keys with RSA key pairs, specify &#96;&#96;ENCRYPT&#95;DECRYPT&#96;&#96; or &#96;&#96;SIGN&#95;VERIFY&#96;&#96;.<br />+ For asymmetric KMS keys with NIST-recommended elliptic curve key pairs, specify &#96;&#96;SIGN&#95;VERIFY&#96;&#96; or &#96;&#96;KEY&#95;AGREEMENT&#96;&#96;.<br />+ For asymmetric KMS keys with &#96;&#96;ECC&#95;SECG&#95;P256K1&#96;&#96; key pairs, specify &#96;&#96;SIGN&#95;VERIFY&#96;&#96;.<br />+ For asymmetric KMS keys with ML-DSA key pairs, specify &#96;&#96;SIGN&#95;VERIFY&#96;&#96;.<br />+ For asymmetric KMS keys with SM2 key pairs (China Regions only), specify &#96;&#96;ENCRYPT&#95;DECRYPT&#96;&#96;, &#96;&#96;SIGN&#95;VERIFY&#96;&#96;, or &#96;&#96;KEY&#95;AGREEMENT&#96;&#96;."
  },
  {
    "name": "origin",
    "type": "string",
    "description": "The source of the key material for the KMS key. You cannot change the origin after you create the KMS key. The default is &#96;&#96;AWS&#95;KMS&#96;&#96;, which means that KMS creates the key material.<br />To &#91;create a KMS key with no key material&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-create-cmk.html) (for imported key material), set this value to &#96;&#96;EXTERNAL&#96;&#96;. For more information about importing key material into KMS, see &#91;Importing Key Material&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html) in the &#42;Developer Guide&#42;.<br />You can ignore &#96;&#96;ENABLED&#96;&#96; when Origin is &#96;&#96;EXTERNAL&#96;&#96;. When a KMS key with Origin &#96;&#96;EXTERNAL&#96;&#96; is created, the key state is &#96;&#96;PENDING&#95;IMPORT&#96;&#96; and &#96;&#96;ENABLED&#96;&#96; is &#96;&#96;false&#96;&#96;. After you import the key material, &#96;&#96;ENABLED&#96;&#96; updated to &#96;&#96;true&#96;&#96;. The KMS key can then be used for Cryptographic Operations. <br />+ CFN doesn't support creating an &#96;&#96;Origin&#96;&#96; parameter of the &#96;&#96;AWS&#95;CLOUDHSM&#96;&#96; or &#96;&#96;EXTERNAL&#95;KEY&#95;STORE&#96;&#96; values.<br />+ &#96;&#96;EXTERNAL&#96;&#96; is not supported for ML-DSA keys."
  },
  {
    "name": "key_spec",
    "type": "string",
    "description": "Specifies the type of KMS key to create. The default value, &#96;&#96;SYMMETRIC&#95;DEFAULT&#96;&#96;, creates a KMS key with a 256-bit symmetric key for encryption and decryption. In China Regions, &#96;&#96;SYMMETRIC&#95;DEFAULT&#96;&#96; creates a 128-bit symmetric key that uses SM4 encryption. You can't change the &#96;&#96;KeySpec&#96;&#96; value after the KMS key is created. For help choosing a key spec for your KMS key, see &#91;Choosing a KMS key type&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-choose.html) in the &#42;Developer Guide&#42;.<br />The &#96;&#96;KeySpec&#96;&#96; property determines the type of key material in the KMS key and the algorithms that the KMS key supports. To further restrict the algorithms that can be used with the KMS key, use a condition key in its key policy or IAM policy. For more information, see &#91;condition keys&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms) in the &#42;Developer Guide&#42;.<br />If you change the value of the &#96;&#96;KeySpec&#96;&#96; property on an existing KMS key, the update request fails, regardless of the value of the &#91;UpdateReplacePolicy attribute&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html). This prevents you from accidentally deleting a KMS key by changing an immutable property value.<br />&#91;services that are integrated with&#93;(https://docs.aws.amazon.com/kms/features/#AWS&#95;Service&#95;Integration) use symmetric encryption KMS keys to protect your data. These services do not support encryption with asymmetric KMS keys. For help determining whether a KMS key is asymmetric, see &#91;Identifying asymmetric KMS keys&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/find-symm-asymm.html) in the &#42;Developer Guide&#42;.<br />KMS supports the following key specs for KMS keys:<br />+ Symmetric encryption key (default)<br />+ &#96;&#96;SYMMETRIC&#95;DEFAULT&#96;&#96; (AES-256-GCM)<br /><br />+ HMAC keys (symmetric)<br />+ &#96;&#96;HMAC&#95;224&#96;&#96; <br />+ &#96;&#96;HMAC&#95;256&#96;&#96; <br />+ &#96;&#96;HMAC&#95;384&#96;&#96; <br />+ &#96;&#96;HMAC&#95;512&#96;&#96; <br /><br />+ Asymmetric RSA key pairs (encryption and decryption &#42;or&#42; signing and verification)<br />+ &#96;&#96;RSA&#95;2048&#96;&#96; <br />+ &#96;&#96;RSA&#95;3072&#96;&#96; <br />+ &#96;&#96;RSA&#95;4096&#96;&#96; <br /><br />+ Asymmetric NIST-recommended elliptic curve key pairs (signing and verification &#42;or&#42; deriving shared secrets)<br />+ &#96;&#96;ECC&#95;NIST&#95;P256&#96;&#96; (secp256r1)<br />+ &#96;&#96;ECC&#95;NIST&#95;P384&#96;&#96; (secp384r1)<br />+ &#96;&#96;ECC&#95;NIST&#95;P521&#96;&#96; (secp521r1)<br /><br />+ Other asymmetric elliptic curve key pairs (signing and verification)<br />+ &#96;&#96;ECC&#95;SECG&#95;P256K1&#96;&#96; (secp256k1), commonly used for cryptocurrencies.<br /><br />+ Asymmetric ML-DSA key pairs (signing and verification)<br />+ &#96;&#96;ML&#95;DSA&#95;44&#96;&#96; <br />+ &#96;&#96;ML&#95;DSA&#95;65&#96;&#96; <br />+ &#96;&#96;ML&#95;DSA&#95;87&#96;&#96; <br /><br />+ SM2 key pairs (encryption and decryption &#42;or&#42; signing and verification &#42;or&#42; deriving shared secrets)<br />+ &#96;&#96;SM2&#96;&#96; (China Regions only)"
  },
  {
    "name": "multi_region",
    "type": "boolean",
    "description": "Creates a multi-Region primary key that you can replicate in other AWS-Regions. You can't change the &#96;&#96;MultiRegion&#96;&#96; value after the KMS key is created.<br />For a list of AWS-Regions in which multi-Region keys are supported, see &#91;Multi-Region keys in&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the &#42;&#42;.<br />If you change the value of the &#96;&#96;MultiRegion&#96;&#96; property on an existing KMS key, the update request fails, regardless of the value of the &#91;UpdateReplacePolicy attribute&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html). This prevents you from accidentally deleting a KMS key by changing an immutable property value.<br />For a multi-Region key, set to this property to &#96;&#96;true&#96;&#96;. For a single-Region key, omit this property or set it to &#96;&#96;false&#96;&#96;. The default value is &#96;&#96;false&#96;&#96;.<br />&#42;Multi-Region keys&#42; are an KMS feature that lets you create multiple interoperable KMS keys in different AWS-Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them to encrypt data in one AWS-Region and decrypt it in a different AWS-Region without making a cross-Region call or exposing the plaintext data. For more information, see &#91;Multi-Region keys&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the &#42;Developer Guide&#42;.<br />You can create a symmetric encryption, HMAC, or asymmetric multi-Region KMS key, and you can create a multi-Region key with imported key material. However, you cannot create a multi-Region key in a custom key store.<br />To create a replica of this primary key in a different AWS-Region , create an &#91;AWS::KMS::ReplicaKey&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html) resource in a CloudFormation stack in the replica Region. Specify the key ARN of this primary key."
  },
  {
    "name": "pending_window_in_days",
    "type": "integer",
    "description": "Specifies the number of days in the waiting period before KMS deletes a KMS key that has been removed from a CloudFormation stack. Enter a value between 7 and 30 days. The default value is 30 days.<br />When you remove a KMS key from a CloudFormation stack, KMS schedules the KMS key for deletion and starts the mandatory waiting period. The &#96;&#96;PendingWindowInDays&#96;&#96; property determines the length of waiting period. During the waiting period, the key state of KMS key is &#96;&#96;Pending Deletion&#96;&#96; or &#96;&#96;Pending Replica Deletion&#96;&#96;, which prevents the KMS key from being used in cryptographic operations. When the waiting period expires, KMS permanently deletes the KMS key.<br />KMS will not delete a &#91;multi-Region primary key&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) that has replica keys. If you remove a multi-Region primary key from a CloudFormation stack, its key state changes to &#96;&#96;PendingReplicaDeletion&#96;&#96; so it cannot be replicated or used in cryptographic operations. This state can persist indefinitely. When the last of its replica keys is deleted, the key state of the primary key changes to &#96;&#96;PendingDeletion&#96;&#96; and the waiting period specified by &#96;&#96;PendingWindowInDays&#96;&#96; begins. When this waiting period expires, KMS deletes the primary key. For details, see &#91;Deleting multi-Region keys&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-delete.html) in the &#42;Developer Guide&#42;.<br />You cannot use a CloudFormation template to cancel deletion of the KMS key after you remove it from the stack, regardless of the waiting period. If you specify a KMS key in your template, even one with the same name, CloudFormation creates a new KMS key. To cancel deletion of a KMS key, use the KMS console or the &#91;CancelKeyDeletion&#93;(https://docs.aws.amazon.com/kms/latest/APIReference/API&#95;CancelKeyDeletion.html) operation.<br />For information about the &#96;&#96;Pending Deletion&#96;&#96; and &#96;&#96;Pending Replica Deletion&#96;&#96; key states, see &#91;Key state: Effect on your KMS key&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the &#42;Developer Guide&#42;. For more information about deleting KMS keys, see the &#91;ScheduleKeyDeletion&#93;(https://docs.aws.amazon.com/kms/latest/APIReference/API&#95;ScheduleKeyDeletion.html) operation in the &#42;API Reference&#42; and &#91;Deleting KMS keys&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html) in the &#42;Developer Guide&#42;."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Assigns one or more tags to the replica key.<br />Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see &#91;ABAC for&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/abac.html) in the &#42;Developer Guide&#42;.<br />For information about tags in KMS, see &#91;Tagging keys&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html) in the &#42;Developer Guide&#42;. For information about tags in CloudFormation, see &#91;Tag&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).",
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
    "description": "Skips (\"bypasses\") the key policy lockout safety check. The default value is false.<br />Setting this value to true increases the risk that the KMS key becomes unmanageable. Do not set this value to true indiscriminately.<br />For more information, see &#91;Default key policy&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-default.html#prevent-unmanageable-key) in the &#42;Developer Guide&#42;.<br />Use this parameter only when you intend to prevent the principal that is making the request from making a subsequent &#91;PutKeyPolicy&#93;(https://docs.aws.amazon.com/kms/latest/APIReference/API&#95;PutKeyPolicy.html) request on the KMS key."
  },
  {
    "name": "rotation_period_in_days",
    "type": "integer",
    "description": "Specifies a custom period of time between each rotation date. If no value is specified, the default value is 365 days.<br />The rotation period defines the number of days after you enable automatic key rotation that KMS will rotate your key material, and the number of days between each automatic rotation thereafter.<br />You can use the &#91;kms:RotationPeriodInDays&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/conditions-kms.html#conditions-kms-rotation-period-in-days) condition key to further constrain the values that principals can specify in the &#96;&#96;RotationPeriodInDays&#96;&#96; parameter.<br />For more information about rotating KMS keys and automatic rotation, see &#91;Rotating keys&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html) in the &#42;Developer Guide&#42;."
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
WHERE region = 'us-east-1' AND Identifier = '{{ key_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>keys</code> in a region.
```sql
SELECT
region,
key_id
FROM awscc.kms.keys_list_only
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
'{{ region }}';
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
        value: '{{ rotation_period_in_days }}'
```
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
WHERE region = '{{ region }}'
AND Identifier = '{{ key_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.kms.keys
WHERE Identifier = '{{ key_id }}'
AND region = 'us-east-1';
```

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