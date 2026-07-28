---
title: access_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - access_policies
  - iotsitewise
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

Creates, updates, deletes or gets an <code>access_policy</code> resource or lists <code>access_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>access_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::IoTSiteWise::AccessPolicy</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotsitewise.access_policies" /></td></tr>
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
    "name": "access_policy_id",
    "type": "string",
    "description": "The ID of the access policy."
  },
  {
    "name": "access_policy_arn",
    "type": "string",
    "description": "The ARN of the access policy."
  },
  {
    "name": "access_policy_identity",
    "type": "object",
    "description": "The identity for this access policy. Choose either a user or a group but not both.",
    "children": [
      {
        "name": "user",
        "type": "object",
        "description": "Contains information for a user identity in an access policy.",
        "children": [
          {
            "name": "id",
            "type": "string",
            "description": "The AWS SSO ID of the user."
          }
        ]
      },
      {
        "name": "iam_user",
        "type": "object",
        "description": "Contains information for an IAM user identity in an access policy.",
        "children": [
          {
            "name": "arn",
            "type": "string",
            "description": "The ARN of the IAM user."
          }
        ]
      },
      {
        "name": "iam_role",
        "type": "object",
        "description": "Contains information for an IAM role identity in an access policy.",
        "children": [
          {
            "name": "arn",
            "type": "string",
            "description": "The ARN of the IAM role."
          }
        ]
      }
    ]
  },
  {
    "name": "access_policy_permission",
    "type": "string",
    "description": "The permission level for this access policy. Valid values are ADMINISTRATOR or VIEWER."
  },
  {
    "name": "access_policy_resource",
    "type": "object",
    "description": "The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both.",
    "children": [
      {
        "name": "portal",
        "type": "object",
        "description": "A portal resource.",
        "children": [
          {
            "name": "id",
            "type": "string",
            "description": "The ID of the portal."
          }
        ]
      },
      {
        "name": "project",
        "type": "object",
        "description": "A project resource.",
        "children": [
          {
            "name": "id",
            "type": "string",
            "description": "The ID of the project."
          }
        ]
      }
    ]
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
    "name": "access_policy_id",
    "type": "string",
    "description": "The ID of the access policy."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-accesspolicy.html"><code>AWS::IoTSiteWise::AccessPolicy</code></a>.

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
    <td><code>access_policies</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AccessPolicyIdentity, AccessPolicyPermission, AccessPolicyResource, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>access_policies</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>access_policies</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>access_policies_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>access_policies</code></td>
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

Gets all properties from an individual <code>access_policy</code>.
```sql
SELECT
  region,
  access_policy_id,
  access_policy_arn,
  access_policy_identity,
  access_policy_permission,
  access_policy_resource
FROM awscc.iotsitewise.access_policies
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ access_policy_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>access_policies</code> in a region.
```sql
SELECT
  region,
  access_policy_id
FROM awscc.iotsitewise.access_policies_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>access_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotsitewise.access_policies (
  AccessPolicyIdentity,
  AccessPolicyPermission,
  AccessPolicyResource,
  region
)
SELECT
  '{{ access_policy_identity }}',
  '{{ access_policy_permission }}',
  '{{ access_policy_resource }}',
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
INSERT INTO awscc.iotsitewise.access_policies (
  AccessPolicyIdentity,
  AccessPolicyPermission,
  AccessPolicyResource,
  region
)
SELECT
  '{{ access_policy_identity }}',
  '{{ access_policy_permission }}',
  '{{ access_policy_resource }}',
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
  - name: access_policy
    props:
      - name: access_policy_identity
        value:
          user:
            id: '{{ id }}'
          iam_user:
            arn: '{{ arn }}'
          iam_role:
            arn: '{{ arn }}'
      - name: access_policy_permission
        value: '{{ access_policy_permission }}'
      - name: access_policy_resource
        value:
          portal:
            id: '{{ id }}'
          project:
            id: '{{ id }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>access_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iotsitewise.access_policies
SET PatchDocument = string('{{ {
    "AccessPolicyIdentity": access_policy_identity,
    "AccessPolicyPermission": access_policy_permission,
    "AccessPolicyResource": access_policy_resource
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ access_policy_id }}'
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
DELETE FROM awscc.iotsitewise.access_policies
WHERE
  Identifier = '{{ access_policy_id }}' AND
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

To operate on the <code>access_policies</code> resource, the following permissions are required:

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
iotsitewise:CreateAccessPolicy
```

</TabItem>
<TabItem value="read">

```json
iotsitewise:DescribeAccessPolicy
```

</TabItem>
<TabItem value="update">

```json
iotsitewise:DescribeAccessPolicy,
iotsitewise:UpdateAccessPolicy
```

</TabItem>
<TabItem value="delete">

```json
iotsitewise:DescribeAccessPolicy,
iotsitewise:DeleteAccessPolicy
```

</TabItem>
<TabItem value="list">

```json
iotsitewise:ListAccessPolicies,
iotsitewise:ListProjects,
iotsitewise:ListPortals
```

</TabItem>
</Tabs>