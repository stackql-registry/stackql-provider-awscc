---
title: secret_target_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - secret_target_attachments
  - secretsmanager
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

Creates, updates, deletes or gets a <code>secret_target_attachment</code> resource or lists <code>secret_target_attachments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>secret_target_attachments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SecretsManager::SecretTargetAttachment</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.secretsmanager.secret_target_attachments" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "secret_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "target_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "target_id",
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
<TabItem value="list">

<SchemaTable fields={[
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secrettargetattachment.html"><code>AWS::SecretsManager::SecretTargetAttachment</code></a>.

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
    <td><code>secret_target_attachments</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TargetType, TargetId, SecretId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>secret_target_attachments</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>secret_target_attachments</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>secret_target_attachments_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>secret_target_attachments</code></td>
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

Gets all properties from an individual <code>secret_target_attachment</code>.
```sql
SELECT
  region,
  id,
  secret_id,
  target_type,
  target_id
FROM awscc.secretsmanager.secret_target_attachments
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>secret_target_attachments</code> in a region.
```sql
SELECT
  region,
  id
FROM awscc.secretsmanager.secret_target_attachments_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>secret_target_attachment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.secretsmanager.secret_target_attachments (
  SecretId,
  TargetType,
  TargetId,
  region
)
SELECT
  '{{ secret_id }}',
  '{{ target_type }}',
  '{{ target_id }}',
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
INSERT INTO awscc.secretsmanager.secret_target_attachments (
  SecretId,
  TargetType,
  TargetId,
  region
)
SELECT
  '{{ secret_id }}',
  '{{ target_type }}',
  '{{ target_id }}',
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
  - name: secret_target_attachment
    props:
      - name: secret_id
        value: '{{ secret_id }}'
      - name: target_type
        value: '{{ target_type }}'
      - name: target_id
        value: '{{ target_id }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>secret_target_attachment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.secretsmanager.secret_target_attachments
SET PatchDocument = string('{{ {
    "TargetType": target_type,
    "TargetId": target_id
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
DELETE FROM awscc.secretsmanager.secret_target_attachments
WHERE
  Identifier = '{{ id }}' AND
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

To operate on the <code>secret_target_attachments</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'List', value: 'list', },
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="read">

```json
secretsmanager:GetSecretValue
```

</TabItem>
<TabItem value="list">

```json
secretsmanager:GetSecretValue,
secretsmanager:ListSecrets
```

</TabItem>
<TabItem value="create">

```json
secretsmanager:GetSecretValue,
secretsmanager:PutSecretValue,
rds:DescribeDBInstances,
redshift:DescribeClusters,
rds:DescribeDBClusters,
docdb-elastic:GetCluster,
redshift-serverless:ListWorkgroups,
redshift-serverless:GetNamespace
```

</TabItem>
<TabItem value="delete">

```json
secretsmanager:GetSecretValue,
secretsmanager:PutSecretValue
```

</TabItem>
<TabItem value="update">

```json
secretsmanager:GetSecretValue,
secretsmanager:PutSecretValue,
rds:DescribeDBInstances,
redshift:DescribeClusters,
rds:DescribeDBClusters,
docdb-elastic:GetCluster,
redshift-serverless:ListWorkgroups,
redshift-serverless:GetNamespace
```

</TabItem>
</Tabs>