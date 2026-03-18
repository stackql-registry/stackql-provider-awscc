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
<tr><td><b>Description</b></td><td><details><summary>The <code>AWS::Lambda::Permission</code> resource grants an AWS service or another account permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function.</summary>To grant permission to another account, specify the account ID as the <code>Principal</code>. To grant permission to an organization defined in AOlong, specify the organization ID as the <code>PrincipalOrgID</code>. For AWS services, the principal is a domain-style identifier defined by the service, like <code>s3.amazonaws.com</code> or <code>sns.amazonaws.com</code>. For AWS services, you can also specify the ARN of the associated resource as the <code>SourceArn</code>. If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function.<br />If your function has a function URL, you can specify the <code>FunctionUrlAuthType</code> parameter. This adds a condition to your permission that only applies when your function URL's <code>AuthType</code> matches the specified <code>FunctionUrlAuthType</code>. For more information about the <code>AuthType</code> parameter, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for function URLs</a>.<br />This resource adds a statement to a resource-based permission policy for the function. For more information about function policies, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">Lambda Function Policies</a>.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lambda.permissions" /></td></tr>
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
    "name": "function_name",
    "type": "string",
    "description": "<details><summary>The name or ARN of the Lambda function, version, or alias.</summary><b>Name formats</b><br />+  <i>Function name</i> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).<br />+  <i>Function ARN</i> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.<br />+  <i>Partial ARN</i> – <code>123456789012:function:my-function</code>.<br />You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</details>"
  },
  {
    "name": "action",
    "type": "string",
    "description": "The action that the principal can use on the function. For example, <code>lambda:InvokeFunction</code> or <code>lambda:GetFunction</code>."
  },
  {
    "name": "event_source_token",
    "type": "string",
    "description": "For Alexa Smart Home functions, a token that the invoker must supply."
  },
  {
    "name": "function_url_auth_type",
    "type": "string",
    "description": "The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html\">Security and auth model for Lambda function URLs</a>."
  },
  {
    "name": "source_arn",
    "type": "string",
    "description": "<details><summary>For AWS-services, the ARN of the AWS resource that invokes the function. For example, an Amazon S3 bucket or Amazon SNS topic.</summary>Note that Lambda configures the comparison using the <code>StringLike</code> operator.</details>"
  },
  {
    "name": "source_account",
    "type": "string",
    "description": "For AWS-service, the ID of the AWS-account that owns the resource. Use this together with <code>SourceArn</code> to ensure that the specified account owns the resource. It is possible for an Amazon S3 bucket to be deleted by its owner and recreated by another account."
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
    "description": "The AWS-service, AWS-account, IAM user, or IAM role that invokes the function. If you specify a service, use <code>SourceArn</code> or <code>SourceAccount</code> to limit who can invoke the function through that service."
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
    "name": "function_name",
    "type": "string",
    "description": "<details><summary>The name or ARN of the Lambda function, version, or alias.</summary><b>Name formats</b><br />+  <i>Function name</i> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).<br />+  <i>Function ARN</i> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.<br />+  <i>Partial ARN</i> – <code>123456789012:function:my-function</code>.<br />You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</details>"
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
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html"><code>AWS::Lambda::Permission</code></a>.

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
    <td><code>permissions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="FunctionName, Action, Principal, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>permissions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>permissions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>permissions</code></td>
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ function_name }}|{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>permissions</code> in a region.
```sql
SELECT
  region,
  function_name,
  id
FROM awscc.lambda.permissions_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

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
  '{{ function_name }}',
  '{{ action }}',
  '{{ principal }}',
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
  '{{ function_name }}',
  '{{ action }}',
  '{{ event_source_token }}',
  '{{ function_url_auth_type }}',
  '{{ source_arn }}',
  '{{ source_account }}',
  '{{ principal_org_id }}',
  '{{ principal }}',
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
      - name: function_name
        value: '{{ function_name }}'
      - name: action
        value: '{{ action }}'
      - name: event_source_token
        value: '{{ event_source_token }}'
      - name: function_url_auth_type
        value: '{{ function_url_auth_type }}'
      - name: source_arn
        value: '{{ source_arn }}'
      - name: source_account
        value: '{{ source_account }}'
      - name: principal_org_id
        value: '{{ principal_org_id }}'
      - name: principal
        value: '{{ principal }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lambda.permissions
WHERE
  Identifier = '{{ function_name }}|{{ id }}' AND
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

To operate on the <code>permissions</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
lambda:GetPolicy
```

</TabItem>
<TabItem value="create">

```json
lambda:AddPermission
```

</TabItem>
<TabItem value="list">

```json
lambda:GetPolicy
```

</TabItem>
<TabItem value="delete">

```json
lambda:RemovePermission
```

</TabItem>
</Tabs>