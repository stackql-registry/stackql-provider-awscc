---
title: parameters
hide_title: false
hide_table_of_contents: false
keywords:
  - parameters
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

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>parameter</code> resource or lists <code>parameters</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>parameters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>The <code>AWS::SSM::Parameter</code> resource creates an SSM parameter in SYSlong Parameter Store.</summary>To create an SSM parameter, you must have the IAMlong (IAM) permissions <code>ssm:PutParameter</code> and <code>ssm:AddTagsToResource</code>. On stack creation, CFNlong adds the following three tags to the parameter: <code>aws:cloudformation:stack-name</code>, <code>aws:cloudformation:logical-id</code>, and <code>aws:cloudformation:stack-id</code>, in addition to any custom tags you specify.<br />To add, update, or remove tags during stack update, you must have IAM permissions for both <code>ssm:AddTagsToResource</code> and <code>ssm:RemoveTagsFromResource</code>. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/security-iam.html#security_iam_access-manage">Managing access using policies</a> in the <i>User Guide</i>.<br />For information about valid values for parameters, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-su-create.html#sysman-parameter-name-constraints">About requirements and constraints for parameter names</a> in the <i>User Guide</i> and <a href="https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutParameter.html">PutParameter</a> in the <i>API Reference</i>.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ssm.parameters" /></td></tr>
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
    "name": "type",
    "type": "string",
    "description": "<details><summary>The type of parameter.</summary>Parameters of type <code>SecureString</code> are not supported by CFNlong.</details>"
  },
  {
    "name": "value",
    "type": "string",
    "description": "<details><summary>The parameter value.</summary>If type is <code>StringList</code>, the system returns a comma-separated string with no spaces between commas in the <code>Value</code> field.</details>"
  },
  {
    "name": "description",
    "type": "string",
    "description": "Information about the parameter."
  },
  {
    "name": "policies",
    "type": "string",
    "description": "<details><summary>Information about the policies assigned to a parameter.</summary><a href=\"https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-policies.html\">Assigning parameter policies</a> in the <i>User Guide</i>.</details>"
  },
  {
    "name": "allowed_pattern",
    "type": "string",
    "description": "A regular expression used to validate the parameter value. For example, for <code>String</code> types with values restricted to numbers, you can specify the following: <code>AllowedPattern=^\\d+$</code>"
  },
  {
    "name": "tier",
    "type": "string",
    "description": "The parameter tier."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "Optional metadata that you assign to a resource in the form of an arbitrary set of tags (key-value pairs). Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a SYS parameter to identify the type of resource to which it applies, the environment, or the type of configuration data referenced by the parameter."
  },
  {
    "name": "data_type",
    "type": "string",
    "description": "The data type of the parameter, such as <code>text</code> or <code>aws:ec2:image</code>. The default is <code>text</code>."
  },
  {
    "name": "name",
    "type": "string",
    "description": "<details><summary>The name of the parameter.</summary>The reported maximum length of 2048 characters for a parameter name includes 1037 characters that are reserved for internal use by SYS. The maximum length for a parameter name that you specify is 1011 characters.<br />This count of 1011 characters includes the characters in the ARN that precede the name you specify. This ARN length will vary depending on your partition and Region. For example, the following 45 characters count toward the 1011 character maximum for a parameter created in the US East (Ohio) Region: <code>arn:aws:ssm:us-east-2:111122223333:parameter/</code>.</details>"
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
    "name": "name",
    "type": "string",
    "description": "<details><summary>The name of the parameter.</summary>The reported maximum length of 2048 characters for a parameter name includes 1037 characters that are reserved for internal use by SYS. The maximum length for a parameter name that you specify is 1011 characters.<br />This count of 1011 characters includes the characters in the ARN that precede the name you specify. This ARN length will vary depending on your partition and Region. For example, the following 45 characters count toward the 1011 character maximum for a parameter created in the US East (Ohio) Region: <code>arn:aws:ssm:us-east-2:111122223333:parameter/</code>.</details>"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-parameter.html"><code>AWS::SSM::Parameter</code></a>.

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
    <td><code>parameters</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Value, Type, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>parameters</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>parameters</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>parameters_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>parameters</code></td>
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

Gets all properties from an individual <code>parameter</code>.
```sql
SELECT
  region,
  type,
  value,
  description,
  policies,
  allowed_pattern,
  tier,
  tags,
  data_type,
  name
FROM awscc.ssm.parameters
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>parameters</code> in a region.
```sql
SELECT
  region,
  name
FROM awscc.ssm.parameters_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>parameter</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ssm.parameters (
  Type,
  Value,
  region
)
SELECT
  '{{ type }}',
  '{{ value }}',
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
INSERT INTO awscc.ssm.parameters (
  Type,
  Value,
  Description,
  Policies,
  AllowedPattern,
  Tier,
  Tags,
  DataType,
  Name,
  region
)
SELECT
  '{{ type }}',
  '{{ value }}',
  '{{ description }}',
  '{{ policies }}',
  '{{ allowed_pattern }}',
  '{{ tier }}',
  '{{ tags }}',
  '{{ data_type }}',
  '{{ name }}',
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
  - name: parameter
    props:
      - name: type
        value: '{{ type }}'
      - name: value
        value: '{{ value }}'
      - name: description
        value: '{{ description }}'
      - name: policies
        value: '{{ policies }}'
      - name: allowed_pattern
        value: '{{ allowed_pattern }}'
      - name: tier
        value: '{{ tier }}'
      - name: tags
        value: {}
      - name: data_type
        value: '{{ data_type }}'
      - name: name
        value: '{{ name }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>parameter</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ssm.parameters
SET PatchDocument = string('{{ {
    "Type": type,
    "Value": value,
    "Description": description,
    "Policies": policies,
    "AllowedPattern": allowed_pattern,
    "Tier": tier,
    "Tags": tags,
    "DataType": data_type
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ name }}'
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
DELETE FROM awscc.ssm.parameters
WHERE
  Identifier = '{{ name }}' AND
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

To operate on the <code>parameters</code> resource, the following permissions are required:

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
ssm:PutParameter,
ssm:AddTagsToResource,
ssm:GetParameters
```

</TabItem>
<TabItem value="read">

```json
ssm:GetParameters,
ssm:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
ssm:PutParameter,
ssm:AddTagsToResource,
ssm:RemoveTagsFromResource,
ssm:GetParameters
```

</TabItem>
<TabItem value="delete">

```json
ssm:DeleteParameter
```

</TabItem>
<TabItem value="list">

```json
ssm:DescribeParameters
```

</TabItem>
</Tabs>