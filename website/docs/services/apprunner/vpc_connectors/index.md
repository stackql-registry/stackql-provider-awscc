---
title: vpc_connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_connectors
  - apprunner
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

Creates, updates, deletes or gets a <code>vpc_connector</code> resource or lists <code>vpc_connectors</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vpc_connectors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::AppRunner::VpcConnector resource specifies an App Runner VpcConnector.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apprunner.vpc_connectors" /></td></tr>
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
    "name": "vpc_connector_name",
    "type": "string",
    "description": "A name for the VPC connector. If you don't specify a name, AWS CloudFormation generates a name for your VPC connector."
  },
  {
    "name": "vpc_connector_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of this VPC connector."
  },
  {
    "name": "vpc_connector_revision",
    "type": "integer",
    "description": "The revision of this VPC connector. It's unique among all the active connectors (\"Status\": \"ACTIVE\") that share the same Name."
  },
  {
    "name": "subnets",
    "type": "array",
    "description": "A list of IDs of subnets that App Runner should use when it associates your service with a custom Amazon VPC. Specify IDs of subnets of a single Amazon VPC. App Runner determines the Amazon VPC from the subnets you specify."
  },
  {
    "name": "security_groups",
    "type": "array",
    "description": "A list of IDs of security groups that App Runner should use for access to AWS resources under the specified subnets. If not specified, App Runner uses the default security group of the Amazon VPC. The default security group allows all outbound traffic."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of metadata items that you can associate with your VPC connector resource. A tag is a key-value pair.",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "vpc_connector_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of this VPC connector."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcconnector.html"><code>AWS::AppRunner::VpcConnector</code></a>.

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
    <td><code>vpc_connectors</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Subnets, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>vpc_connectors</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>vpc_connectors_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>vpc_connectors</code></td>
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

Gets all properties from an individual <code>vpc_connector</code>.
```sql
SELECT
  region,
  vpc_connector_name,
  vpc_connector_arn,
  vpc_connector_revision,
  subnets,
  security_groups,
  tags
FROM awscc.apprunner.vpc_connectors
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ vpc_connector_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>vpc_connectors</code> in a region.
```sql
SELECT
  region,
  vpc_connector_arn
FROM awscc.apprunner.vpc_connectors_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>vpc_connector</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.apprunner.vpc_connectors (
  Subnets,
  region
)
SELECT
  '{{ subnets }}',
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
INSERT INTO awscc.apprunner.vpc_connectors (
  VpcConnectorName,
  Subnets,
  SecurityGroups,
  Tags,
  region
)
SELECT
  '{{ vpc_connector_name }}',
  '{{ subnets }}',
  '{{ security_groups }}',
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
  - name: vpc_connector
    props:
      - name: vpc_connector_name
        value: '{{ vpc_connector_name }}'
      - name: subnets
        value:
          - '{{ subnets[0] }}'
      - name: security_groups
        value:
          - '{{ security_groups[0] }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apprunner.vpc_connectors
WHERE
  Identifier = '{{ vpc_connector_arn }}' AND
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

To operate on the <code>vpc_connectors</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
iam:CreateServiceLinkedRole,
apprunner:CreateVpcConnector,
apprunner:DescribeVpcConnector,
apprunner:TagResource,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups
```

</TabItem>
<TabItem value="read">

```json
apprunner:DescribeVpcConnector
```

</TabItem>
<TabItem value="delete">

```json
apprunner:DeleteVpcConnector
```

</TabItem>
<TabItem value="list">

```json
apprunner:ListVpcConnectors
```

</TabItem>
</Tabs>