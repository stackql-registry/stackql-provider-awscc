---
title: vdm_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - vdm_attributes
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

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>vdm_attribute</code> resource or lists <code>vdm_attributes</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vdm_attributes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SES::VdmAttributes</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ses.vdm_attributes" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "vdm_attributes_resource_id",
    "type": "string",
    "description": "Unique identifier for this resource"
  },
  {
    "name": "dashboard_attributes",
    "type": "object",
    "description": "Preferences regarding the Dashboard feature.",
    "children": [
      {
        "name": "engagement_metrics",
        "type": "string",
        "description": "Whether emails sent from this account have engagement tracking enabled."
      }
    ]
  },
  {
    "name": "guardian_attributes",
    "type": "object",
    "description": "Preferences regarding the Guardian feature.",
    "children": [
      {
        "name": "optimized_shared_delivery",
        "type": "string",
        "description": "Whether emails sent from this account have optimized delivery algorithm enabled."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-vdmattribute.html"><code>AWS::SES::VdmAttributes</code></a>.

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
    <td><CopyableCode code="region" /></td>
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

Gets all properties from an individual <code>vdm_attribute</code>.
```sql
SELECT
  region,
  vdm_attributes_resource_id,
  dashboard_attributes,
  guardian_attributes
FROM awscc.ses.vdm_attributes
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ vdm_attributes_resource_id }}';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>vdm_attribute</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ses.vdm_attributes (
  DashboardAttributes,
  GuardianAttributes,
  region
)
SELECT
  '{{ dashboard_attributes }}',
  '{{ guardian_attributes }}',
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
INSERT INTO awscc.ses.vdm_attributes (
  DashboardAttributes,
  GuardianAttributes,
  region
)
SELECT
  '{{ dashboard_attributes }}',
  '{{ guardian_attributes }}',
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
  - name: vdm_attribute
    props:
      - name: dashboard_attributes
        value:
          engagement_metrics: '{{ engagement_metrics }}'
      - name: guardian_attributes
        value:
          optimized_shared_delivery: '{{ optimized_shared_delivery }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>vdm_attribute</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ses.vdm_attributes
SET PatchDocument = string('{{ {
    "DashboardAttributes": dashboard_attributes,
    "GuardianAttributes": guardian_attributes
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ vdm_attributes_resource_id }}'
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
DELETE FROM awscc.ses.vdm_attributes
WHERE
  Identifier = '{{ vdm_attributes_resource_id }}' AND
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

To operate on the <code>vdm_attributes</code> resource, the following permissions are required:

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
ses:PutAccountVdmAttributes,
ses:GetAccount
```

</TabItem>
<TabItem value="read">

```json
ses:GetAccount
```

</TabItem>
<TabItem value="update">

```json
ses:PutAccountVdmAttributes,
ses:GetAccount
```

</TabItem>
<TabItem value="delete">

```json
ses:PutAccountVdmAttributes,
ses:GetAccount
```

</TabItem>
</Tabs>