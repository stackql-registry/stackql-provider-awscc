---
title: template_group_access_control_entries
hide_title: false
hide_table_of_contents: false
keywords:
  - template_group_access_control_entries
  - pcaconnectorad
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

Creates, updates, deletes or gets a <code>template_group_access_control_entry</code> resource or lists <code>template_group_access_control_entries</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>template_group_access_control_entries</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::PCAConnectorAD::TemplateGroupAccessControlEntry Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.pcaconnectorad.template_group_access_control_entries" /></td></tr>
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
    "name": "access_rights",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "enroll",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "group_display_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "group_security_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "template_arn",
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
    "name": "group_security_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "template_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-templategroupaccesscontrolentry.html"><code>AWS::PCAConnectorAD::TemplateGroupAccessControlEntry</code></a>.

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
    <td><code>template_group_access_control_entries</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AccessRights, GroupDisplayName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>template_group_access_control_entries</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>template_group_access_control_entries</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>template_group_access_control_entries_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>template_group_access_control_entries</code></td>
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

Gets all properties from an individual <code>template_group_access_control_entry</code>.
```sql
SELECT
  region,
  access_rights,
  group_display_name,
  group_security_identifier,
  template_arn
FROM awscc.pcaconnectorad.template_group_access_control_entries
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ group_security_identifier }}|{{ template_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>template_group_access_control_entries</code> in a region.
```sql
SELECT
  region,
  group_security_identifier,
  template_arn
FROM awscc.pcaconnectorad.template_group_access_control_entries_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>template_group_access_control_entry</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.pcaconnectorad.template_group_access_control_entries (
  AccessRights,
  GroupDisplayName,
  region
)
SELECT
  '{{ access_rights }}',
  '{{ group_display_name }}',
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
INSERT INTO awscc.pcaconnectorad.template_group_access_control_entries (
  AccessRights,
  GroupDisplayName,
  GroupSecurityIdentifier,
  TemplateArn,
  region
)
SELECT
  '{{ access_rights }}',
  '{{ group_display_name }}',
  '{{ group_security_identifier }}',
  '{{ template_arn }}',
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
  - name: template_group_access_control_entry
    props:
      - name: access_rights
        value:
          enroll: '{{ enroll }}'
          auto_enroll: null
      - name: group_display_name
        value: '{{ group_display_name }}'
      - name: group_security_identifier
        value: '{{ group_security_identifier }}'
      - name: template_arn
        value: '{{ template_arn }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>template_group_access_control_entry</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.pcaconnectorad.template_group_access_control_entries
SET PatchDocument = string('{{ {
    "AccessRights": access_rights,
    "GroupDisplayName": group_display_name
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ group_security_identifier }}|{{ template_arn }}'
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
DELETE FROM awscc.pcaconnectorad.template_group_access_control_entries
WHERE
  Identifier = '{{ group_security_identifier }}|{{ template_arn }}' AND
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

To operate on the <code>template_group_access_control_entries</code> resource, the following permissions are required:

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
pca-connector-ad:CreateTemplateGroupAccessControlEntry
```

</TabItem>
<TabItem value="read">

```json
pca-connector-ad:GetTemplateGroupAccessControlEntry
```

</TabItem>
<TabItem value="update">

```json
pca-connector-ad:UpdateTemplateGroupAccessControlEntry
```

</TabItem>
<TabItem value="delete">

```json
pca-connector-ad:DeleteTemplateGroupAccessControlEntry,
pca-connector-ad:GetTemplateGroupAccessControlEntry
```

</TabItem>
<TabItem value="list">

```json
pca-connector-ad:ListTemplateGroupAccessControlEntries
```

</TabItem>
</Tabs>