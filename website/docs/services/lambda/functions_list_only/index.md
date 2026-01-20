---
title: functions_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - functions_list_only
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

Lists <code>functions</code> in a region or regions, for all properties use <a href="/services/lambda/functions/"><code>functions</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>functions_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::Lambda::Function&#96;&#96; resource creates a Lambda function. To create a function, you need a &#91;deployment package&#93;(https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html) and an &#91;execution role&#93;(https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html). The deployment package is a .zip file archive or container image that contains your function code. The execution role grants the function permission to use AWS services, such as Amazon CloudWatch Logs for log streaming and AWS X-Ray for request tracing.<br />You set the package type to &#96;&#96;Image&#96;&#96; if the deployment package is a &#91;container image&#93;(https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html). For these functions, include the URI of the container image in the ECR registry in the &#91;ImageUri property of the Code property&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html#cfn-lambda-function-code-imageuri). You do not need to specify the handler and runtime properties. <br />You set the package type to &#96;&#96;Zip&#96;&#96; if the deployment package is a &#91;.zip file archive&#93;(https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip). For these functions, specify the S3 location of your .zip file in the &#96;&#96;Code&#96;&#96; property. Alternatively, for Node.js and Python functions, you can define your function inline in the &#91;ZipFile property of the Code property&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html#cfn-lambda-function-code-zipfile). In both cases, you must also specify the handler and runtime properties.<br />You can use &#91;code signing&#93;(https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html) if your deployment package is a .zip file archive. To enable code signing for this function, specify the ARN of a code-signing configuration. When a user attempts to deploy a code package with &#96;&#96;UpdateFunctionCode&#96;&#96;, Lambda checks that the code package has a valid signature from a trusted publisher. The code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.<br />When you update a &#96;&#96;AWS::Lambda::Function&#96;&#96; resource, CFNshort calls the &#91;UpdateFunctionConfiguration&#93;(https://docs.aws.amazon.com/lambda/latest/api/API&#95;UpdateFunctionConfiguration.html) and &#91;UpdateFunctionCode&#93;(https://docs.aws.amazon.com/lambda/latest/api/API&#95;UpdateFunctionCode.html)LAM APIs under the hood. Because these calls happen sequentially, and invocations can happen between these calls, your function may encounter errors in the time between the calls. For example, if you remove an environment variable, and the code that references that environment variable in the same CFNshort update, you may see invocation errors related to a missing environment variable. To work around this, you can invoke your function against a version or alias by default, rather than the &#96;&#96;$LATEST&#96;&#96; version.<br />Note that you configure &#91;provisioned concurrency&#93;(https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html) on a &#96;&#96;AWS::Lambda::Version&#96;&#96; or a &#96;&#96;AWS::Lambda::Alias&#96;&#96;.<br />For a complete introduction to Lambda functions, see &#91;What is Lambda?&#93;(https://docs.aws.amazon.com/lambda/latest/dg/lambda-welcome.html) in the &#42;Lambda developer guide.&#42;</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lambda.functions_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "function_name",
    "type": "string",
    "description": "The name of the Lambda function, up to 64 characters in length. If you don't specify a name, CFN generates one.<br />If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name."
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
Lists all <code>functions</code> in a region.
```sql
SELECT
region,
function_name
FROM awscc.lambda.functions_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>functions_list_only</code> resource, see <a href="/services/lambda/functions/#permissions"><code>functions</code></a>

