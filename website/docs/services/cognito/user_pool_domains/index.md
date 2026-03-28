---
title: user_pool_domains
hide_title: false
hide_table_of_contents: false
keywords:
  - user_pool_domains
  - cognito
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

Creates, updates, deletes or gets an <code>user_pool_domain</code> resource or lists <code>user_pool_domains</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>user_pool_domains</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Cognito::UserPoolDomain</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cognito.user_pool_domains" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "user_pool_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "domain",
    "type": "string",
    "description": ""
  },
  {
    "name": "custom_domain_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "certificate_arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "cloud_front_distribution",
    "type": "string",
    "description": ""
  },
  {
    "name": "managed_login_version",
    "type": "integer",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html"><code>AWS::Cognito::UserPoolDomain</code></a>.

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
    <td><CopyableCode code="UserPoolId, Domain, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>user_pool_domain</code>.
```sql
SELECT
  region,
  user_pool_id,
  domain,
  custom_domain_config,
  cloud_front_distribution,
  managed_login_version
FROM awscc.cognito.user_pool_domains
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ user_pool_id }}|{{ domain }}';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>user_pool_domain</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cognito.user_pool_domains (
  UserPoolId,
  Domain,
  region
)
SELECT
  '{{ user_pool_id }}',
  '{{ domain }}',
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
INSERT INTO awscc.cognito.user_pool_domains (
  UserPoolId,
  Domain,
  CustomDomainConfig,
  ManagedLoginVersion,
  region
)
SELECT
  '{{ user_pool_id }}',
  '{{ domain }}',
  '{{ custom_domain_config }}',
  '{{ managed_login_version }}',
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
  - name: user_pool_domain
    props:
      - name: user_pool_id
        value: '{{ user_pool_id }}'
      - name: domain
        value: '{{ domain }}'
      - name: custom_domain_config
        value:
          certificate_arn: '{{ certificate_arn }}'
      - name: managed_login_version
        value: '{{ managed_login_version }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>user_pool_domain</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cognito.user_pool_domains
SET PatchDocument = string('{{ {
    "CustomDomainConfig": custom_domain_config,
    "ManagedLoginVersion": managed_login_version
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ user_pool_id }}|{{ domain }}'
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
DELETE FROM awscc.cognito.user_pool_domains
WHERE
  Identifier = '{{ user_pool_id }}|{{ domain }}' AND
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

To operate on the <code>user_pool_domains</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="create">

```json
cognito-idp:CreateUserPoolDomain,
cognito-idp:DescribeUserPoolDomain,
cloudfront:updateDistribution
```

</TabItem>
<TabItem value="read">

```json
cognito-idp:DescribeUserPoolDomain
```

</TabItem>
<TabItem value="update">

```json
cognito-idp:UpdateUserPoolDomain,
cognito-idp:DescribeUserPoolDomain,
cloudfront:updateDistribution
```

</TabItem>
<TabItem value="delete">

```json
cognito-idp:DeleteUserPoolDomain,
cognito-idp:DescribeUserPoolDomain
```

</TabItem>
</Tabs>