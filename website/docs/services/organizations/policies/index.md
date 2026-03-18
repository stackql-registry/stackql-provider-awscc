---
title: policies
hide_title: false
hide_table_of_contents: false
keywords:
  - policies
  - organizations
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

Creates, updates, deletes or gets a <code>policy</code> resource or lists <code>policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Policies in AWS Organizations enable you to manage different features of the AWS accounts in your organization.  You can use policies when all features are enabled in your organization.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.organizations.policies" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "Name of the Policy"
  },
  {
    "name": "type",
    "type": "string",
    "description": "The type of policy to create. You can specify one of the following values: AISERVICES_OPT_OUT_POLICY, BACKUP_POLICY, SERVICE_CONTROL_POLICY, TAG_POLICY, CHATBOT_POLICY, RESOURCE_CONTROL_POLICY,DECLARATIVE_POLICY_EC2, SECURITYHUB_POLICY"
  },
  {
    "name": "content",
    "type": "object",
    "description": "The Policy text content. For AWS CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS CloudFormation always converts a YAML policy to JSON format before submitting it."
  },
  {
    "name": "description",
    "type": "string",
    "description": "Human readable description of the policy"
  },
  {
    "name": "target_ids",
    "type": "array",
    "description": "List of unique identifiers (IDs) of the root, OU, or account that you want to attach the policy to"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of tags that you want to attach to the newly created policy. For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can't set it to null.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key identifier, or name, of the tag."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The string value that's associated with the key of the tag. You can set the value of a tag to an empty string, but you can't set the value of a tag to null."
      }
    ]
  },
  {
    "name": "id",
    "type": "string",
    "description": "Id of the Policy"
  },
  {
    "name": "arn",
    "type": "string",
    "description": "ARN of the Policy"
  },
  {
    "name": "aws_managed",
    "type": "boolean",
    "description": "A boolean value that indicates whether the specified policy is an AWS managed policy. If true, then you can attach the policy to roots, OUs, or accounts, but you cannot edit it."
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
    "name": "id",
    "type": "string",
    "description": "Id of the Policy"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-policy.html"><code>AWS::Organizations::Policy</code></a>.

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
    <td><code>policies</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, Type, Content, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>policies</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>policies</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>policies_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>policies</code></td>
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

Gets all properties from an individual <code>policy</code>.
```sql
SELECT
  region,
  name,
  type,
  content,
  description,
  target_ids,
  tags,
  id,
  arn,
  aws_managed
FROM awscc.organizations.policies
WHERE
  region = 'us-east-1' AND
  Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>policies</code> in a region.
```sql
SELECT
  region,
  id
FROM awscc.organizations.policies_list_only
WHERE
  region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.organizations.policies (
  Name,
  Type,
  Content,
  region
)
SELECT
  '{{ name }}',
  '{{ type }}',
  '{{ content }}',
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
INSERT INTO awscc.organizations.policies (
  Name,
  Type,
  Content,
  Description,
  TargetIds,
  Tags,
  region
)
SELECT
  '{{ name }}',
  '{{ type }}',
  '{{ content }}',
  '{{ description }}',
  '{{ target_ids }}',
  '{{ tags }}',
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
  - name: policy
    props:
      - name: name
        value: '{{ name }}'
      - name: type
        value: '{{ type }}'
      - name: content
        value: {}
      - name: description
        value: '{{ description }}'
      - name: target_ids
        value:
          - '{{ target_ids[0] }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.organizations.policies
SET PatchDocument = string('{{ {
    "Name": name,
    "Content": content,
    "Description": description,
    "TargetIds": target_ids,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id }}'
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
DELETE FROM awscc.organizations.policies
WHERE
  Identifier = '{{ id }}' AND
  region = 'us-east-1'
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

To operate on the <code>policies</code> resource, the following permissions are required:

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
organizations:CreatePolicy,
organizations:DescribePolicy,
organizations:AttachPolicy,
organizations:ListPolicies,
organizations:ListTagsForResource,
organizations:ListTargetsForPolicy,
organizations:TagResource
```

</TabItem>
<TabItem value="read">

```json
organizations:DescribePolicy,
organizations:ListTargetsForPolicy,
organizations:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
organizations:AttachPolicy,
organizations:DetachPolicy,
organizations:UpdatePolicy,
organizations:ListTagsForResource,
organizations:ListTargetsForPolicy,
organizations:TagResource,
organizations:UntagResource,
organizations:DescribePolicy
```

</TabItem>
<TabItem value="delete">

```json
organizations:DetachPolicy,
organizations:DeletePolicy
```

</TabItem>
<TabItem value="list">

```json
organizations:ListPolicies
```

</TabItem>
</Tabs>