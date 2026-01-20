---
title: permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - permissions
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

Creates, updates, deletes or gets a <code>permission</code> resource or lists <code>permissions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>permissions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::Lambda::Permission&#96;&#96; resource grants an AWS service or another account permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function.<br />To grant permission to another account, specify the account ID as the &#96;&#96;Principal&#96;&#96;. To grant permission to an organization defined in AOlong, specify the organization ID as the &#96;&#96;PrincipalOrgID&#96;&#96;. For AWS services, the principal is a domain-style identifier defined by the service, like &#96;&#96;s3.amazonaws.com&#96;&#96; or &#96;&#96;sns.amazonaws.com&#96;&#96;. For AWS services, you can also specify the ARN of the associated resource as the &#96;&#96;SourceArn&#96;&#96;. If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function.<br />If your function has a function URL, you can specify the &#96;&#96;FunctionUrlAuthType&#96;&#96; parameter. This adds a condition to your permission that only applies when your function URL's &#96;&#96;AuthType&#96;&#96; matches the specified &#96;&#96;FunctionUrlAuthType&#96;&#96;. For more information about the &#96;&#96;AuthType&#96;&#96; parameter, see &#91;Security and auth model for function URLs&#93;(https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html).<br />This resource adds a statement to a resource-based permission policy for the function. For more information about function policies, see &#91;Lambda Function Policies&#93;(https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html).</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lambda.permissions" /></td></tr>
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
    "name": "action",
    "type": "string",
    "description": "The action that the principal can use on the function. For example, &#96;&#96;lambda:InvokeFunction&#96;&#96; or &#96;&#96;lambda:GetFunction&#96;&#96;."
  },
  {
    "name": "event_source_token",
    "type": "string",
    "description": "For Alexa Smart Home functions, a token that the invoker must supply."
  },
  {
    "name": "function_url_auth_type",
    "type": "string",
    "description": "The type of authentication that your function URL uses. Set to &#96;&#96;AWS&#95;IAM&#96;&#96; if you want to restrict access to authenticated users only. Set to &#96;&#96;NONE&#96;&#96; if you want to bypass IAM authentication to create a public endpoint. For more information, see &#91;Security and auth model for Lambda function URLs&#93;(https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html)."
  },
  {
    "name": "source_arn",
    "type": "string",
    "description": "For AWS-services, the ARN of the AWS resource that invokes the function. For example, an Amazon S3 bucket or Amazon SNS topic.<br />Note that Lambda configures the comparison using the &#96;&#96;StringLike&#96;&#96; operator."
  },
  {
    "name": "source_account",
    "type": "string",
    "description": "For AWS-service, the ID of the AWS-account that owns the resource. Use this together with &#96;&#96;SourceArn&#96;&#96; to ensure that the specified account owns the resource. It is possible for an Amazon S3 bucket to be deleted by its owner and recreated by another account."
  },
  {
    "name": "principal_org_id",
    "type": "string",
    "description": "The identifier for your organization in AOlong. Use this to grant permissions to all the AWS-accounts under this organization."
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "principal",
    "type": "string",
    "description": "The AWS-service, AWS-account, IAM user, or IAM role that invokes the function. If you specify a service, use &#96;&#96;SourceArn&#96;&#96; or &#96;&#96;SourceAccount&#96;&#96; to limit who can invoke the function through that service."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html"><code>AWS::Lambda::Permission</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="FunctionName, Action, Principal, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>permission</code>.
```sql
SELECT
region,
function_name,
action,
event_source_token,
function_url_auth_type,
source_arn,
source_account,
principal_org_id,
id,
principal
FROM awscc.lambda.permissions
WHERE region = 'us-east-1' AND data__Identifier = '<FunctionName>|<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>permission</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.lambda.permissions (
 FunctionName,
 Action,
 Principal,
 region
)
SELECT 
'{{ FunctionName }}',
 '{{ Action }}',
 '{{ Principal }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.lambda.permissions (
 FunctionName,
 Action,
 EventSourceToken,
 FunctionUrlAuthType,
 SourceArn,
 SourceAccount,
 PrincipalOrgID,
 Principal,
 region
)
SELECT 
 '{{ FunctionName }}',
 '{{ Action }}',
 '{{ EventSourceToken }}',
 '{{ FunctionUrlAuthType }}',
 '{{ SourceArn }}',
 '{{ SourceAccount }}',
 '{{ PrincipalOrgID }}',
 '{{ Principal }}',
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
  - name: permission
    props:
      - name: FunctionName
        value: '{{ FunctionName }}'
      - name: Action
        value: '{{ Action }}'
      - name: EventSourceToken
        value: '{{ EventSourceToken }}'
      - name: FunctionUrlAuthType
        value: '{{ FunctionUrlAuthType }}'
      - name: SourceArn
        value: '{{ SourceArn }}'
      - name: SourceAccount
        value: '{{ SourceAccount }}'
      - name: PrincipalOrgID
        value: '{{ PrincipalOrgID }}'
      - name: Principal
        value: '{{ Principal }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lambda.permissions
WHERE data__Identifier = '<FunctionName|Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>permissions</code> resource, the following permissions are required:

### Read
```json
lambda:GetPolicy
```

### Create
```json
lambda:AddPermission
```

### List
```json
lambda:GetPolicy
```

### Delete
```json
lambda:RemovePermission
```
