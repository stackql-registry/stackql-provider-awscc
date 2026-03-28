---
title: security_controls
hide_title: false
hide_table_of_contents: false
keywords:
  - security_controls
  - securityhub
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

Creates, updates, deletes or gets a <code>security_control</code> resource or lists <code>security_controls</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>security_controls</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A security control in Security Hub describes a security best practice related to a specific resource.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.securityhub.security_controls" /></td></tr>
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
    "name": "security_control_id",
    "type": "string",
    "description": "The unique identifier of a security control across standards. Values for this field typically consist of an AWS service name and a number, such as APIGateway.3."
  },
  {
    "name": "last_update_reason",
    "type": "string",
    "description": "The most recent reason for updating the customizable properties of a security control. This differs from the UpdateReason field of the BatchUpdateStandardsControlAssociations API, which tracks the reason for updating the enablement status of a control. This field accepts alphanumeric characters in addition to white spaces, dashes, and underscores."
  },
  {
    "name": "parameters",
    "type": "object",
    "description": "An object that identifies the name of a control parameter, its current value, and whether it has been customized."
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
    "name": "security_control_id",
    "type": "string",
    "description": "The unique identifier of a security control across standards. Values for this field typically consist of an AWS service name and a number, such as APIGateway.3."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html"><code>AWS::SecurityHub::SecurityControl</code></a>.

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
    <td><code>security_controls</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Parameters, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>security_controls</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>security_controls</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>security_controls_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>security_controls</code></td>
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

Gets all properties from an individual <code>security_control</code>.
```sql
SELECT
  region,
  security_control_id,
  security_control_arn,
  last_update_reason,
  parameters
FROM awscc.securityhub.security_controls
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ security_control_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>security_controls</code> in a region.
```sql
SELECT
  region,
  security_control_id
FROM awscc.securityhub.security_controls_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>security_control</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.securityhub.security_controls (
  Parameters,
  region
)
SELECT
  '{{ parameters }}',
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
INSERT INTO awscc.securityhub.security_controls (
  SecurityControlId,
  SecurityControlArn,
  LastUpdateReason,
  Parameters,
  region
)
SELECT
  '{{ security_control_id }}',
  '{{ security_control_arn }}',
  '{{ last_update_reason }}',
  '{{ parameters }}',
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
  - name: security_control
    props:
      - name: security_control_id
        value: '{{ security_control_id }}'
      - name: security_control_arn
        value: null
      - name: last_update_reason
        value: '{{ last_update_reason }}'
      - name: parameters
        value: {}`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>security_control</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.securityhub.security_controls
SET PatchDocument = string('{{ {
    "SecurityControlArn": security_control_arn,
    "LastUpdateReason": last_update_reason,
    "Parameters": parameters
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ security_control_id }}'
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
DELETE FROM awscc.securityhub.security_controls
WHERE
  Identifier = '{{ security_control_id }}' AND
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

To operate on the <code>security_controls</code> resource, the following permissions are required:

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
securityhub:BatchGetSecurityControls,
securityhub:DescribeStandardsControls,
securityhub:UpdateSecurityControl,
securityhub:UpdateStandardsControl
```

</TabItem>
<TabItem value="read">

```json
securityhub:BatchGetSecurityControls,
securityhub:DescribeStandardsControls
```

</TabItem>
<TabItem value="update">

```json
securityhub:BatchGetSecurityControls,
securityhub:DescribeStandardsControls,
securityhub:UpdateSecurityControl,
securityhub:UpdateStandardsControl
```

</TabItem>
<TabItem value="delete">

```json
securityhub:BatchGetSecurityControls,
securityhub:DescribeStandardsControls,
securityhub:UpdateSecurityControl,
securityhub:UpdateStandardsControl
```

</TabItem>
<TabItem value="list">

```json
securityhub:BatchGetSecurityControls,
securityhub:DescribeStandardsControls,
securityhub:ListSecurityControlDefinitions
```

</TabItem>
</Tabs>