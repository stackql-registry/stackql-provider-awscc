---
title: fleets
hide_title: false
hide_table_of_contents: false
keywords:
  - fleets
  - deadline
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

Creates, updates, deletes or gets a <code>fleet</code> resource or lists <code>fleets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>fleets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Deadline::Fleet Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.deadline.fleets" /></td></tr>
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
    "name": "capabilities",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "amounts",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": ""
          },
          {
            "name": "min",
            "type": "number",
            "description": ""
          },
          {
            "name": "max",
            "type": "number",
            "description": ""
          }
        ]
      },
      {
        "name": "attributes",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": ""
          },
          {
            "name": "values",
            "type": "array",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "configuration",
    "type": "object",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "display_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "farm_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "fleet_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "host_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "script_body",
        "type": "string",
        "description": ""
      },
      {
        "name": "script_timeout_seconds",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "max_worker_count",
    "type": "integer",
    "description": ""
  },
  {
    "name": "min_worker_count",
    "type": "integer",
    "description": ""
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "status_message",
    "type": "string",
    "description": ""
  },
  {
    "name": "worker_count",
    "type": "integer",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
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
    "name": "arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html"><code>AWS::Deadline::Fleet</code></a>.

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
    <td><code>fleets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Configuration, DisplayName, FarmId, MaxWorkerCount, RoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>fleets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>fleets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>fleets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>fleets</code></td>
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

Gets all properties from an individual <code>fleet</code>.
```sql
SELECT
  region,
  capabilities,
  configuration,
  description,
  display_name,
  farm_id,
  fleet_id,
  host_configuration,
  max_worker_count,
  min_worker_count,
  role_arn,
  status,
  status_message,
  worker_count,
  arn,
  tags
FROM awscc.deadline.fleets
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>fleets</code> in a region.
```sql
SELECT
  region,
  arn
FROM awscc.deadline.fleets_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>fleet</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.deadline.fleets (
  Configuration,
  DisplayName,
  FarmId,
  MaxWorkerCount,
  RoleArn,
  region
)
SELECT
  '{{ configuration }}',
  '{{ display_name }}',
  '{{ farm_id }}',
  '{{ max_worker_count }}',
  '{{ role_arn }}',
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
INSERT INTO awscc.deadline.fleets (
  Configuration,
  Description,
  DisplayName,
  FarmId,
  HostConfiguration,
  MaxWorkerCount,
  MinWorkerCount,
  RoleArn,
  Tags,
  region
)
SELECT
  '{{ configuration }}',
  '{{ description }}',
  '{{ display_name }}',
  '{{ farm_id }}',
  '{{ host_configuration }}',
  '{{ max_worker_count }}',
  '{{ min_worker_count }}',
  '{{ role_arn }}',
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
  - name: fleet
    props:
      - name: configuration
        value: null
      - name: description
        value: '{{ description }}'
      - name: display_name
        value: '{{ display_name }}'
      - name: farm_id
        value: '{{ farm_id }}'
      - name: host_configuration
        value:
          script_body: '{{ script_body }}'
          script_timeout_seconds: '{{ script_timeout_seconds }}'
      - name: max_worker_count
        value: '{{ max_worker_count }}'
      - name: min_worker_count
        value: '{{ min_worker_count }}'
      - name: role_arn
        value: '{{ role_arn }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>fleet</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.deadline.fleets
SET PatchDocument = string('{{ {
    "Configuration": configuration,
    "Description": description,
    "DisplayName": display_name,
    "HostConfiguration": host_configuration,
    "MaxWorkerCount": max_worker_count,
    "MinWorkerCount": min_worker_count,
    "RoleArn": role_arn,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ arn }}'
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
DELETE FROM awscc.deadline.fleets
WHERE
  Identifier = '{{ arn }}' AND
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

To operate on the <code>fleets</code> resource, the following permissions are required:

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
deadline:CreateFleet,
deadline:GetFleet,
iam:PassRole,
identitystore:ListGroupMembershipsForMember,
logs:CreateLogGroup,
deadline:TagResource,
deadline:ListTagsForResource,
vpc-lattice:GetResourceGateway,
vpc-lattice:GetResourceConfiguration,
ec2:CreateVpcEndpoint,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups,
ec2:DescribeVpcs
```

</TabItem>
<TabItem value="read">

```json
deadline:GetFleet,
identitystore:ListGroupMembershipsForMember,
deadline:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
deadline:UpdateFleet,
deadline:GetFleet,
iam:PassRole,
identitystore:ListGroupMembershipsForMember,
deadline:TagResource,
deadline:UntagResource,
deadline:ListTagsForResource,
vpc-lattice:GetResourceGateway,
vpc-lattice:GetResourceConfiguration,
ec2:CreateVpcEndpoint,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups,
ec2:DescribeVpcs
```

</TabItem>
<TabItem value="delete">

```json
deadline:DeleteFleet,
deadline:GetFleet,
identitystore:ListGroupMembershipsForMember
```

</TabItem>
<TabItem value="list">

```json
deadline:ListFleets,
identitystore:DescribeGroup,
identitystore:DescribeUser,
identitystore:ListGroupMembershipsForMember
```

</TabItem>
</Tabs>