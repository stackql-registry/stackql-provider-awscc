---
title: capacity_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_providers
  - ecs
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

Creates, updates, deletes or gets a <code>capacity_provider</code> resource or lists <code>capacity_providers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>capacity_providers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::ECS::CapacityProvider.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ecs.capacity_providers" /></td></tr>
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
    "name": "auto_scaling_group_provider",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "managed_scaling",
        "type": "object",
        "description": "The managed scaling settings for the Auto Scaling group capacity provider.",
        "children": [
          {
            "name": "status",
            "type": "string",
            "description": ""
          },
          {
            "name": "minimum_scaling_step_size",
            "type": "integer",
            "description": ""
          },
          {
            "name": "instance_warmup_period",
            "type": "integer",
            "description": ""
          },
          {
            "name": "target_capacity",
            "type": "integer",
            "description": ""
          },
          {
            "name": "maximum_scaling_step_size",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "auto_scaling_group_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "managed_termination_protection",
        "type": "string",
        "description": ""
      },
      {
        "name": "managed_draining",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "name",
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
    "name": "name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-capacityprovider.html"><code>AWS::ECS::CapacityProvider</code></a>.

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
    <td><code>capacity_providers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>capacity_providers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>capacity_providers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>capacity_providers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>capacity_providers</code></td>
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

Gets all properties from an individual <code>capacity_provider</code>.
```sql
SELECT
  region,
  auto_scaling_group_provider,
  tags,
  name
FROM awscc.ecs.capacity_providers
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>capacity_providers</code> in a region.
```sql
SELECT
  region,
  name
FROM awscc.ecs.capacity_providers_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>capacity_provider</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ecs.capacity_providers (
  AutoScalingGroupProvider,
  Tags,
  Name,
  region
)
SELECT
  '{{ auto_scaling_group_provider }}',
  '{{ tags }}',
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
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ecs.capacity_providers (
  AutoScalingGroupProvider,
  Tags,
  Name,
  region
)
SELECT
  '{{ auto_scaling_group_provider }}',
  '{{ tags }}',
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
  - name: capacity_provider
    props:
      - name: auto_scaling_group_provider
        value:
          managed_scaling:
            status: '{{ status }}'
            minimum_scaling_step_size: '{{ minimum_scaling_step_size }}'
            instance_warmup_period: '{{ instance_warmup_period }}'
            target_capacity: '{{ target_capacity }}'
            maximum_scaling_step_size: '{{ maximum_scaling_step_size }}'
          auto_scaling_group_arn: '{{ auto_scaling_group_arn }}'
          managed_termination_protection: '{{ managed_termination_protection }}'
          managed_draining: '{{ managed_draining }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
      - name: name
        value: '{{ name }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>capacity_provider</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ecs.capacity_providers
SET PatchDocument = string('{{ {
    "Tags": tags
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
DELETE FROM awscc.ecs.capacity_providers
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

To operate on the <code>capacity_providers</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
ecs:DescribeCapacityProviders
```

</TabItem>
<TabItem value="create">

```json
autoscaling:CreateOrUpdateTags,
ecs:CreateCapacityProvider,
ecs:DescribeCapacityProviders,
ecs:TagResource
```

</TabItem>
<TabItem value="update">

```json
ecs:UpdateCapacityProvider,
ecs:DescribeCapacityProviders,
ecs:ListTagsForResource,
ecs:TagResource,
ecs:UntagResource
```

</TabItem>
<TabItem value="list">

```json
ecs:DescribeCapacityProviders
```

</TabItem>
<TabItem value="delete">

```json
ecs:DescribeCapacityProviders,
ecs:DeleteCapacityProvider
```

</TabItem>
</Tabs>