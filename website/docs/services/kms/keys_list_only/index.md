---
title: keys_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - keys_list_only
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

Lists <code>keys</code> in a region or regions, for all properties use <a href="/services/kms/keys/"><code>keys</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>keys_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::KMS::Key&#96;&#96; resource specifies an &#91;KMS key&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms&#95;keys) in KMSlong. You can use this resource to create symmetric encryption KMS keys, asymmetric KMS keys for encryption or signing, and symmetric HMAC KMS keys. You can use &#96;&#96;AWS::KMS::Key&#96;&#96; to create &#91;multi-Region primary keys&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html#mrk-primary-key) of all supported types. To replicate a multi-Region key, use the &#96;&#96;AWS::KMS::ReplicaKey&#96;&#96; resource.<br />If you change the value of the &#96;&#96;KeySpec&#96;&#96;, &#96;&#96;KeyUsage&#96;&#96;, &#96;&#96;Origin&#96;&#96;, or &#96;&#96;MultiRegion&#96;&#96; properties of an existing KMS key, the update request fails, regardless of the value of the &#91;UpdateReplacePolicy attribute&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html). This prevents you from accidentally deleting a KMS key by changing any of its immutable property values.<br />KMS replaced the term &#42;customer master key (CMK)&#42; with &#42;&#42; and &#42;KMS key&#42;. The concept has not changed. To prevent breaking changes, KMS is keeping some variations of this term.<br />You can use symmetric encryption KMS keys to encrypt and decrypt small amounts of data, but they are more commonly used to generate data keys and data key pairs. You can also use a symmetric encryption KMS key to encrypt data stored in AWS services that are &#91;integrated with&#93;(https://docs.aws.amazon.com//kms/features/#AWS&#95;Service&#95;Integration). For more information, see &#91;Symmetric encryption KMS keys&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#symmetric-cmks) in the &#42;Developer Guide&#42;.<br />You can use asymmetric KMS keys to encrypt and decrypt data or sign messages and verify signatures. To create an asymmetric key, you must specify an asymmetric &#96;&#96;KeySpec&#96;&#96; value and a &#96;&#96;KeyUsage&#96;&#96; value. For details, see &#91;Asymmetric keys in&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html) in the &#42;Developer Guide&#42;.<br />You can use HMAC KMS keys (which are also symmetric keys) to generate and verify hash-based message authentication codes. To create an HMAC key, you must specify an HMAC &#96;&#96;KeySpec&#96;&#96; value and a &#96;&#96;KeyUsage&#96;&#96; value of &#96;&#96;GENERATE&#95;VERIFY&#95;MAC&#96;&#96;. For details, see &#91;HMAC keys in&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html) in the &#42;Developer Guide&#42;.<br />You can also create symmetric encryption, asymmetric, and HMAC multi-Region primary keys. To create a multi-Region primary key, set the &#96;&#96;MultiRegion&#96;&#96; property to &#96;&#96;true&#96;&#96;. For information about multi-Region keys, see &#91;Multi-Region keys in&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the &#42;Developer Guide&#42;.<br />You cannot use the &#96;&#96;AWS::KMS::Key&#96;&#96; resource to specify a KMS key with &#91;imported key material&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html) or a KMS key in a &#91;custom key store&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html).<br />&#42;Regions&#42; <br />KMS CloudFormation resources are available in all Regions in which KMS and CFN are supported. You can use the &#96;&#96;AWS::KMS::Key&#96;&#96; resource to create and manage all KMS key types that are supported in a Region.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.kms.keys_list_only" /></td></tr>
</tbody>
</table>

## Fields
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

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples
Lists all <code>keys</code> in a region.
```sql
SELECT
region,
key_id
FROM awscc.kms.keys_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>keys_list_only</code> resource, see <a href="/services/kms/keys/#permissions"><code>keys</code></a>

