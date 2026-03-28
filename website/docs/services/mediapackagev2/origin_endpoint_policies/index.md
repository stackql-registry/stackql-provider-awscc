---
title: origin_endpoint_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - origin_endpoint_policies
  - mediapackagev2
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

Creates, updates, deletes or gets an <code>origin_endpoint_policy</code> resource or lists <code>origin_endpoint_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>origin_endpoint_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><p>Represents a resource policy that allows or denies access to an origin endpoint.</p></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.mediapackagev2.origin_endpoint_policies" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "cdn_auth_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "cdn_identifier_secret_arns",
        "type": "array",
        "description": ""
      },
      {
        "name": "secrets_role_arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "channel_group_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "channel_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "origin_endpoint_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "policy",
    "type": "object",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpointpolicy.html"><code>AWS::MediaPackageV2::OriginEndpointPolicy</code></a>.

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
    <td><CopyableCode code="ChannelGroupName, ChannelName, OriginEndpointName, Policy, region" /></td>
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

Gets all properties from an individual <code>origin_endpoint_policy</code>.
```sql
SELECT
  region,
  cdn_auth_configuration,
  channel_group_name,
  channel_name,
  origin_endpoint_name,
  policy
FROM awscc.mediapackagev2.origin_endpoint_policies
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ channel_group_name }}|{{ channel_name }}|{{ origin_endpoint_name }}';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>origin_endpoint_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.mediapackagev2.origin_endpoint_policies (
  ChannelGroupName,
  ChannelName,
  OriginEndpointName,
  Policy,
  region
)
SELECT
  '{{ channel_group_name }}',
  '{{ channel_name }}',
  '{{ origin_endpoint_name }}',
  '{{ policy }}',
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
INSERT INTO awscc.mediapackagev2.origin_endpoint_policies (
  CdnAuthConfiguration,
  ChannelGroupName,
  ChannelName,
  OriginEndpointName,
  Policy,
  region
)
SELECT
  '{{ cdn_auth_configuration }}',
  '{{ channel_group_name }}',
  '{{ channel_name }}',
  '{{ origin_endpoint_name }}',
  '{{ policy }}',
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
  - name: origin_endpoint_policy
    props:
      - name: cdn_auth_configuration
        value:
          cdn_identifier_secret_arns:
            - '{{ cdn_identifier_secret_arns[0] }}'
          secrets_role_arn: '{{ secrets_role_arn }}'
      - name: channel_group_name
        value: '{{ channel_group_name }}'
      - name: channel_name
        value: '{{ channel_name }}'
      - name: origin_endpoint_name
        value: '{{ origin_endpoint_name }}'
      - name: policy
        value: {}`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>origin_endpoint_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.mediapackagev2.origin_endpoint_policies
SET PatchDocument = string('{{ {
    "CdnAuthConfiguration": cdn_auth_configuration,
    "Policy": policy
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ channel_group_name }}|{{ channel_name }}|{{ origin_endpoint_name }}'
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
DELETE FROM awscc.mediapackagev2.origin_endpoint_policies
WHERE
  Identifier = '{{ channel_group_name }}|{{ channel_name }}|{{ origin_endpoint_name }}' AND
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

To operate on the <code>origin_endpoint_policies</code> resource, the following permissions are required:

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
mediapackagev2:GetOriginEndpointPolicy,
mediapackagev2:PutOriginEndpointPolicy,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
mediapackagev2:GetOriginEndpointPolicy
```

</TabItem>
<TabItem value="update">

```json
mediapackagev2:GetOriginEndpointPolicy,
mediapackagev2:PutOriginEndpointPolicy,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
mediapackagev2:GetOriginEndpointPolicy,
mediapackagev2:DeleteOriginEndpointPolicy
```

</TabItem>
</Tabs>