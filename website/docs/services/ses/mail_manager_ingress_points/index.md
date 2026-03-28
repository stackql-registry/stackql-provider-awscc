---
title: mail_manager_ingress_points
hide_title: false
hide_table_of_contents: false
keywords:
  - mail_manager_ingress_points
  - ses
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

Creates, updates, deletes or gets a <code>mail_manager_ingress_point</code> resource or lists <code>mail_manager_ingress_points</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>mail_manager_ingress_points</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::SES::MailManagerIngressPoint Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ses.mail_manager_ingress_points" /></td></tr>
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
    "name": "a_record",
    "type": "string",
    "description": ""
  },
  {
    "name": "traffic_policy_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "ingress_point_configuration",
    "type": "object",
    "description": ""
  },
  {
    "name": "ingress_point_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "ingress_point_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "ingress_point_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "network_configuration",
    "type": "object",
    "description": ""
  },
  {
    "name": "rule_set_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "status_to_update",
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
    "name": "type",
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
    "name": "ingress_point_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html"><code>AWS::SES::MailManagerIngressPoint</code></a>.

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
    <td><code>mail_manager_ingress_points</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Type, TrafficPolicyId, RuleSetId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>mail_manager_ingress_points</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>mail_manager_ingress_points</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>mail_manager_ingress_points_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>mail_manager_ingress_points</code></td>
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

Gets all properties from an individual <code>mail_manager_ingress_point</code>.
```sql
SELECT
  region,
  a_record,
  traffic_policy_id,
  ingress_point_configuration,
  ingress_point_arn,
  ingress_point_id,
  ingress_point_name,
  network_configuration,
  rule_set_id,
  status,
  status_to_update,
  tags,
  type
FROM awscc.ses.mail_manager_ingress_points
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ ingress_point_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>mail_manager_ingress_points</code> in a region.
```sql
SELECT
  region,
  ingress_point_id
FROM awscc.ses.mail_manager_ingress_points_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>mail_manager_ingress_point</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ses.mail_manager_ingress_points (
  TrafficPolicyId,
  RuleSetId,
  Type,
  region
)
SELECT
  '{{ traffic_policy_id }}',
  '{{ rule_set_id }}',
  '{{ type }}',
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
INSERT INTO awscc.ses.mail_manager_ingress_points (
  TrafficPolicyId,
  IngressPointConfiguration,
  IngressPointName,
  NetworkConfiguration,
  RuleSetId,
  StatusToUpdate,
  Tags,
  Type,
  region
)
SELECT
  '{{ traffic_policy_id }}',
  '{{ ingress_point_configuration }}',
  '{{ ingress_point_name }}',
  '{{ network_configuration }}',
  '{{ rule_set_id }}',
  '{{ status_to_update }}',
  '{{ tags }}',
  '{{ type }}',
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
  - name: mail_manager_ingress_point
    props:
      - name: traffic_policy_id
        value: '{{ traffic_policy_id }}'
      - name: ingress_point_configuration
        value: null
      - name: ingress_point_name
        value: '{{ ingress_point_name }}'
      - name: network_configuration
        value: null
      - name: rule_set_id
        value: '{{ rule_set_id }}'
      - name: status_to_update
        value: '{{ status_to_update }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: type
        value: '{{ type }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>mail_manager_ingress_point</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ses.mail_manager_ingress_points
SET PatchDocument = string('{{ {
    "TrafficPolicyId": traffic_policy_id,
    "IngressPointConfiguration": ingress_point_configuration,
    "IngressPointName": ingress_point_name,
    "RuleSetId": rule_set_id,
    "StatusToUpdate": status_to_update,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ ingress_point_id }}'
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
DELETE FROM awscc.ses.mail_manager_ingress_points
WHERE
  Identifier = '{{ ingress_point_id }}' AND
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

To operate on the <code>mail_manager_ingress_points</code> resource, the following permissions are required:

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
ses:TagResource,
ses:ListTagsForResource,
ses:GetIngressPoint,
ses:CreateIngressPoint,
iam:CreateServiceLinkedRole,
ec2:DescribeVpcEndpoints
```

</TabItem>
<TabItem value="read">

```json
ses:ListTagsForResource,
ses:GetIngressPoint
```

</TabItem>
<TabItem value="update">

```json
ses:TagResource,
ses:UntagResource,
ses:ListTagsForResource,
ses:GetIngressPoint,
ses:UpdateIngressPoint
```

</TabItem>
<TabItem value="delete">

```json
ses:GetIngressPoint,
ses:DeleteIngressPoint
```

</TabItem>
<TabItem value="list">

```json
ses:ListIngressPoints
```

</TabItem>
</Tabs>