---
title: vpc_block_public_access_options
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_block_public_access_options
  - ec2
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

Creates, updates, deletes or gets a <code>vpc_block_public_access_option</code> resource or lists <code>vpc_block_public_access_options</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vpc_block_public_access_options</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EC2::VPCBlockPublicAccessOptions</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.vpc_block_public_access_options" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "internet_gateway_block_mode",
    "type": "string",
    "description": "The desired Block Public Access mode for Internet Gateways in your account. We do not allow to create in a off mode as this is the default value"
  },
  {
    "name": "account_id",
    "type": "string",
    "description": "The identifier for the specified AWS account."
  },
  {
    "name": "exclusions_allowed",
    "type": "string",
    "description": "Determines if exclusions are allowed. If you have enabled VPC BPA at the Organization level, exclusions may be not-allowed. Otherwise, they are allowed."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcblockpublicaccessoption.html"><code>AWS::EC2::VPCBlockPublicAccessOptions</code></a>.

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
    <td><CopyableCode code="InternetGatewayBlockMode, region" /></td>
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

Gets all properties from an individual <code>vpc_block_public_access_option</code>.
```sql
SELECT
  region,
  internet_gateway_block_mode,
  account_id,
  exclusions_allowed
FROM awscc.ec2.vpc_block_public_access_options
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ account_id }}';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>vpc_block_public_access_option</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.vpc_block_public_access_options (
  InternetGatewayBlockMode,
  region
)
SELECT
  '{{ internet_gateway_block_mode }}',
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
INSERT INTO awscc.ec2.vpc_block_public_access_options (
  InternetGatewayBlockMode,
  region
)
SELECT
  '{{ internet_gateway_block_mode }}',
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
  - name: vpc_block_public_access_option
    props:
      - name: internet_gateway_block_mode
        value: '{{ internet_gateway_block_mode }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>vpc_block_public_access_option</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.vpc_block_public_access_options
SET PatchDocument = string('{{ {
    "InternetGatewayBlockMode": internet_gateway_block_mode
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ account_id }}'
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
DELETE FROM awscc.ec2.vpc_block_public_access_options
WHERE
  Identifier = '{{ account_id }}' AND
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

To operate on the <code>vpc_block_public_access_options</code> resource, the following permissions are required:

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
ec2:DescribeVpcBlockPublicAccessOptions,
ec2:ModifyVpcBlockPublicAccessOptions
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeVpcBlockPublicAccessOptions
```

</TabItem>
<TabItem value="update">

```json
ec2:DescribeVpcBlockPublicAccessOptions,
ec2:ModifyVpcBlockPublicAccessOptions
```

</TabItem>
<TabItem value="delete">

```json
ec2:DescribeVpcBlockPublicAccessOptions,
ec2:ModifyVpcBlockPublicAccessOptions
```

</TabItem>
</Tabs>