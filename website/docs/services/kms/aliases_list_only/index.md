---
title: aliases_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - aliases_list_only
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

Lists <code>aliases</code> in a region or regions, for all properties use <a href="/services/kms/aliases/"><code>aliases</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>aliases_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::KMS::Alias&#96;&#96; resource specifies a display name for a &#91;KMS key&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms&#95;keys). You can use an alias to identify a KMS key in the KMS console, in the &#91;DescribeKey&#93;(https://docs.aws.amazon.com/kms/latest/APIReference/API&#95;DescribeKey.html) operation, and in &#91;cryptographic operations&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations), such as &#91;Decrypt&#93;(https://docs.aws.amazon.com/kms/latest/APIReference/API&#95;Decrypt.html) and &#91;GenerateDataKey&#93;(https://docs.aws.amazon.com/kms/latest/APIReference/API&#95;GenerateDataKey.html).<br />Adding, deleting, or updating an alias can allow or deny permission to the KMS key. For details, see &#91;ABAC for&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/abac.html) in the &#42;Developer Guide&#42;.<br />Using an alias to refer to a KMS key can help you simplify key management. For example, an alias in your code can be associated with different KMS keys in different AWS-Regions. For more information, see &#91;Using aliases&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html) in the &#42;Developer Guide&#42;.<br />When specifying an alias, observe the following rules.<br />+ Each alias is associated with one KMS key, but multiple aliases can be associated with the same KMS key.<br />+ The alias and its associated KMS key must be in the same AWS-account and Region.<br />+ The alias name must be unique in the AWS-account and Region. However, you can create aliases with the same name in different AWS-Regions. For example, you can have an &#96;&#96;alias/projectKey&#96;&#96; in multiple Regions, each of which is associated with a KMS key in its Region.<br />+ Each alias name must begin with &#96;&#96;alias/&#96;&#96; followed by a name, such as &#96;&#96;alias/exampleKey&#96;&#96;. The alias name can contain only alphanumeric characters, forward slashes (/), underscores (&#95;), and dashes (-). Alias names cannot begin with &#96;&#96;alias/aws/&#96;&#96;. That alias name prefix is reserved for &#91;&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk).<br /><br />&#42;Regions&#42; <br />KMS CloudFormation resources are available in all AWS-Regions in which KMS and CFN are supported.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.kms.aliases_list_only" /></td></tr>
</tbody>
</table>

## Fields
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
Lists all <code>aliases</code> in a region.
```sql
SELECT
region,
alias_name
FROM awscc.kms.aliases_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>aliases_list_only</code> resource, see <a href="/services/kms/aliases/#permissions"><code>aliases</code></a>

