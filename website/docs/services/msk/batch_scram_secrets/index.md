---
title: batch_scram_secrets
hide_title: false
hide_table_of_contents: false
keywords:
  - batch_scram_secrets
  - msk
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

Creates, updates, deletes or gets a <code>batch_scram_secret</code> resource or lists <code>batch_scram_secrets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>batch_scram_secrets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::MSK::BatchScramSecret</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.msk.batch_scram_secrets" /></td></tr>
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
    "name": "cluster_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "secret_arn_list",
    "type": "array",
    "description": ""
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
    "name": "cluster_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-batchscramsecret.html"><code>AWS::MSK::BatchScramSecret</code></a>.

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
    <td><code>batch_scram_secrets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ClusterArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>batch_scram_secrets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>batch_scram_secrets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>batch_scram_secrets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>batch_scram_secrets</code></td>
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

Gets all properties from an individual <code>batch_scram_secret</code>.
```sql
SELECT
  region,
  cluster_arn,
  secret_arn_list
FROM awscc.msk.batch_scram_secrets
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ cluster_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>batch_scram_secrets</code> in a region.
```sql
SELECT
  region,
  cluster_arn
FROM awscc.msk.batch_scram_secrets_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>batch_scram_secret</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.msk.batch_scram_secrets (
  ClusterArn,
  region
)
SELECT
  '{{ cluster_arn }}',
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
INSERT INTO awscc.msk.batch_scram_secrets (
  ClusterArn,
  SecretArnList,
  region
)
SELECT
  '{{ cluster_arn }}',
  '{{ secret_arn_list }}',
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
  - name: batch_scram_secret
    props:
      - name: cluster_arn
        value: '{{ cluster_arn }}'
      - name: secret_arn_list
        value:
          - '{{ secret_arn_list[0] }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>batch_scram_secret</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.msk.batch_scram_secrets
SET PatchDocument = string('{{ {
    "SecretArnList": secret_arn_list
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ cluster_arn }}'
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
DELETE FROM awscc.msk.batch_scram_secrets
WHERE
  Identifier = '{{ cluster_arn }}' AND
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

To operate on the <code>batch_scram_secrets</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
kafka:BatchAssociateScramSecret,
kafka:ListScramSecrets,
kms:CreateGrant,
kms:DescribeKey,
secretsmanager:GetSecretValue
```

</TabItem>
<TabItem value="delete">

```json
kafka:BatchDisassociateScramSecret,
kafka:ListScramSecrets,
kms:CreateGrant,
kms:DescribeKey
```

</TabItem>
<TabItem value="list">

```json
kafka:ListScramSecrets,
kms:CreateGrant,
kms:DescribeKey,
secretsmanager:GetSecretValue
```

</TabItem>
<TabItem value="read">

```json
kafka:ListScramSecrets,
kms:CreateGrant,
kms:DescribeKey,
secretsmanager:GetSecretValue
```

</TabItem>
<TabItem value="update">

```json
kafka:BatchAssociateScramSecret,
kafka:BatchDisassociateScramSecret,
kafka:ListScramSecrets,
kms:CreateGrant,
kms:DescribeKey,
secretsmanager:GetSecretValue
```

</TabItem>
</Tabs>