---
title: parameters_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - parameters_list_only
  - ssm
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

Lists <code>parameters</code> in a region or regions, for all properties use <a href="/services/ssm/parameters/"><code>parameters</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>parameters_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::SSM::Parameter&#96;&#96; resource creates an SSM parameter in SYSlong Parameter Store.<br />To create an SSM parameter, you must have the IAMlong (IAM) permissions &#96;&#96;ssm:PutParameter&#96;&#96; and &#96;&#96;ssm:AddTagsToResource&#96;&#96;. On stack creation, CFNlong adds the following three tags to the parameter: &#96;&#96;aws:cloudformation:stack-name&#96;&#96;, &#96;&#96;aws:cloudformation:logical-id&#96;&#96;, and &#96;&#96;aws:cloudformation:stack-id&#96;&#96;, in addition to any custom tags you specify.<br />To add, update, or remove tags during stack update, you must have IAM permissions for both &#96;&#96;ssm:AddTagsToResource&#96;&#96; and &#96;&#96;ssm:RemoveTagsFromResource&#96;&#96;. For more information, see &#91;Managing access using policies&#93;(https://docs.aws.amazon.com/systems-manager/latest/userguide/security-iam.html#security&#95;iam&#95;access-manage) in the &#42;User Guide&#42;.<br />For information about valid values for parameters, see &#91;About requirements and constraints for parameter names&#93;(https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-su-create.html#sysman-parameter-name-constraints) in the &#42;User Guide&#42; and &#91;PutParameter&#93;(https://docs.aws.amazon.com/systems-manager/latest/APIReference/API&#95;PutParameter.html) in the &#42;API Reference&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ssm.parameters_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "The name of the parameter.<br />The reported maximum length of 2048 characters for a parameter name includes 1037 characters that are reserved for internal use by SYS. The maximum length for a parameter name that you specify is 1011 characters.<br />This count of 1011 characters includes the characters in the ARN that precede the name you specify. This ARN length will vary depending on your partition and Region. For example, the following 45 characters count toward the 1011 character maximum for a parameter created in the US East (Ohio) Region: &#96;&#96;arn:aws:ssm:us-east-2:111122223333:parameter/&#96;&#96;."
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
Lists all <code>parameters</code> in a region.
```sql
SELECT
region,
name
FROM awscc.ssm.parameters_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>parameters_list_only</code> resource, see <a href="/services/ssm/parameters/#permissions"><code>parameters</code></a>

