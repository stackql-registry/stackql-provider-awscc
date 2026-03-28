---
title: hypervisors
hide_title: false
hide_table_of_contents: false
keywords:
  - hypervisors
  - backupgateway
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

Creates, updates, deletes or gets a <code>hypervisor</code> resource or lists <code>hypervisors</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>hypervisors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::BackupGateway::Hypervisor Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.backupgateway.hypervisors" /></td></tr>
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
    "name": "host",
    "type": "string",
    "description": ""
  },
  {
    "name": "hypervisor_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "kms_key_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "log_group_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "password",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "username",
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
    "name": "hypervisor_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backupgateway-hypervisor.html"><code>AWS::BackupGateway::Hypervisor</code></a>.

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
    <td><code>hypervisors</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>hypervisors</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>hypervisors</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>hypervisors_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>hypervisors</code></td>
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

Gets all properties from an individual <code>hypervisor</code>.
```sql
SELECT
  region,
  host,
  hypervisor_arn,
  kms_key_arn,
  log_group_arn,
  name,
  password,
  tags,
  username
FROM awscc.backupgateway.hypervisors
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ hypervisor_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>hypervisors</code> in a region.
```sql
SELECT
  region,
  hypervisor_arn
FROM awscc.backupgateway.hypervisors_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>hypervisor</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.backupgateway.hypervisors (
  Host,
  KmsKeyArn,
  LogGroupArn,
  Name,
  Password,
  Tags,
  Username,
  region
)
SELECT
  '{{ host }}',
  '{{ kms_key_arn }}',
  '{{ log_group_arn }}',
  '{{ name }}',
  '{{ password }}',
  '{{ tags }}',
  '{{ username }}',
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
INSERT INTO awscc.backupgateway.hypervisors (
  Host,
  KmsKeyArn,
  LogGroupArn,
  Name,
  Password,
  Tags,
  Username,
  region
)
SELECT
  '{{ host }}',
  '{{ kms_key_arn }}',
  '{{ log_group_arn }}',
  '{{ name }}',
  '{{ password }}',
  '{{ tags }}',
  '{{ username }}',
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
  - name: hypervisor
    props:
      - name: host
        value: '{{ host }}'
      - name: kms_key_arn
        value: '{{ kms_key_arn }}'
      - name: log_group_arn
        value: '{{ log_group_arn }}'
      - name: name
        value: '{{ name }}'
      - name: password
        value: '{{ password }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: username
        value: '{{ username }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>hypervisor</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.backupgateway.hypervisors
SET PatchDocument = string('{{ {
    "Host": host,
    "LogGroupArn": log_group_arn,
    "Name": name,
    "Password": password,
    "Username": username
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ hypervisor_arn }}'
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
DELETE FROM awscc.backupgateway.hypervisors
WHERE
  Identifier = '{{ hypervisor_arn }}' AND
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

To operate on the <code>hypervisors</code> resource, the following permissions are required:

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
backup-gateway:ListTagsForResource,
backup-gateway:ImportHypervisorConfiguration,
backup-gateway:GetHypervisor,
backup-gateway:ListHypervisors,
backup-gateway:TagResource,
kms:CreateGrant,
kms:Encrypt,
kms:Decrypt
```

</TabItem>
<TabItem value="read">

```json
backup-gateway:GetHypervisor,
backup-gateway:ListHypervisors,
backup-gateway:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
backup-gateway:UpdateHypervisor,
backup-gateway:GetHypervisor,
backup-gateway:ListHypervisors,
backup-gateway:ImportHypervisorConfiguration,
backup-gateway:DeleteHypervisor,
backup-gateway:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
backup-gateway:DeleteHypervisor,
backup-gateway:GetHypervisor,
backup-gateway:ListHypervisors
```

</TabItem>
<TabItem value="list">

```json
backup-gateway:ListHypervisors
```

</TabItem>
</Tabs>