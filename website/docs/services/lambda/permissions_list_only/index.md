---
title: permissions_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - permissions_list_only
  - lambda
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

Lists <code>permissions</code> in a region or regions, for all properties use <a href="/services/lambda/permissions/"><code>permissions</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>permissions_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::Lambda::Permission&#96;&#96; resource grants an AWS service or another account permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function.<br />To grant permission to another account, specify the account ID as the &#96;&#96;Principal&#96;&#96;. To grant permission to an organization defined in AOlong, specify the organization ID as the &#96;&#96;PrincipalOrgID&#96;&#96;. For AWS services, the principal is a domain-style identifier defined by the service, like &#96;&#96;s3.amazonaws.com&#96;&#96; or &#96;&#96;sns.amazonaws.com&#96;&#96;. For AWS services, you can also specify the ARN of the associated resource as the &#96;&#96;SourceArn&#96;&#96;. If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function.<br />If your function has a function URL, you can specify the &#96;&#96;FunctionUrlAuthType&#96;&#96; parameter. This adds a condition to your permission that only applies when your function URL's &#96;&#96;AuthType&#96;&#96; matches the specified &#96;&#96;FunctionUrlAuthType&#96;&#96;. For more information about the &#96;&#96;AuthType&#96;&#96; parameter, see &#91;Security and auth model for function URLs&#93;(https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html).<br />This resource adds a statement to a resource-based permission policy for the function. For more information about function policies, see &#91;Lambda Function Policies&#93;(https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html).</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lambda.permissions_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "function_name",
    "type": "string",
    "description": "The name or ARN of the Lambda function, version, or alias.<br />&#42;&#42;Name formats&#42;&#42;<br />+ &#42;Function name&#42; – &#96;&#96;my-function&#96;&#96; (name-only), &#96;&#96;my-function:v1&#96;&#96; (with alias).<br />+ &#42;Function ARN&#42; – &#96;&#96;arn:aws:lambda:us-west-2:123456789012:function:my-function&#96;&#96;.<br />+ &#42;Partial ARN&#42; – &#96;&#96;123456789012:function:my-function&#96;&#96;.<br /><br />You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length."
  },
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
Lists all <code>permissions</code> in a region.
```sql
SELECT
region,
function_name,
id
FROM awscc.lambda.permissions_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>permissions_list_only</code> resource, see <a href="/services/lambda/permissions/#permissions"><code>permissions</code></a>

