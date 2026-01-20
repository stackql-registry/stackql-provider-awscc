---
title: key_pairs_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - key_pairs_list_only
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

Lists <code>key_pairs</code> in a region or regions, for all properties use <a href="/services/ec2/key_pairs/"><code>key_pairs</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>key_pairs_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Specifies a key pair for use with an EC2long instance as follows:<br />+ To import an existing key pair, include the &#96;&#96;PublicKeyMaterial&#96;&#96; property.<br />+ To create a new key pair, omit the &#96;&#96;PublicKeyMaterial&#96;&#96; property.<br /><br />When you import an existing key pair, you specify the public key material for the key. We assume that you have the private key material for the key. CFNlong does not create or return the private key material when you import a key pair.<br />When you create a new key pair, the private key is saved to SYSlong Parameter Store, using a parameter with the following name: &#96;&#96;/ec2/keypair/&#123;key&#95;pair&#95;id&#125;&#96;&#96;. For more information about retrieving private key, and the required permissions, see &#91;Create a key pair using&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-key-pairs.html#create-key-pair-cloudformation) in the &#42;User Guide&#42;.<br />When CFN deletes a key pair that was created or imported by a stack, it also deletes the parameter that was used to store the private key material in Parameter Store.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.key_pairs_list_only" /></td></tr>
</tbody>
</table>

## Fields
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
Lists all <code>key_pairs</code> in a region.
```sql
SELECT
region,
key_name
FROM awscc.ec2.key_pairs_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>key_pairs_list_only</code> resource, see <a href="/services/ec2/key_pairs/#permissions"><code>key_pairs</code></a>

