---
title: id_namespace_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - id_namespace_associations
  - cleanrooms
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

Creates, updates, deletes or gets an <code>id_namespace_association</code> resource or lists <code>id_namespace_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>id_namespace_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Represents an association between an ID namespace and a collaboration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cleanrooms.id_namespace_associations" /></td></tr>
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
    "name": "id_namespace_association_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "membership_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "collaboration_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "input_reference_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "input_reference_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "manage_resource_policies",
        "type": "boolean",
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
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "id_mapping_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "allow_use_as_dimension_column",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "input_reference_properties",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "id_namespace_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "id_mapping_workflows_supported",
        "type": "array",
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
    "name": "id_namespace_association_identifier",
    "type": "string",
    "description": ""
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
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-idnamespaceassociation.html"><code>AWS::CleanRooms::IdNamespaceAssociation</code></a>.

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
    <td><code>id_namespace_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="MembershipIdentifier, InputReferenceConfig, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>id_namespace_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>id_namespace_associations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>id_namespace_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>id_namespace_associations</code></td>
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

Gets all properties from an individual <code>id_namespace_association</code>.
```sql
SELECT
  region,
  id_namespace_association_identifier,
  arn,
  membership_identifier,
  membership_arn,
  collaboration_identifier,
  collaboration_arn,
  input_reference_config,
  tags,
  name,
  description,
  id_mapping_config,
  input_reference_properties
FROM awscc.cleanrooms.id_namespace_associations
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id_namespace_association_identifier }}|{{ membership_identifier }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>id_namespace_associations</code> in a region.
```sql
SELECT
  region,
  id_namespace_association_identifier,
  membership_identifier
FROM awscc.cleanrooms.id_namespace_associations_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>id_namespace_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cleanrooms.id_namespace_associations (
  MembershipIdentifier,
  InputReferenceConfig,
  Name,
  region
)
SELECT
  '{{ membership_identifier }}',
  '{{ input_reference_config }}',
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
INSERT INTO awscc.cleanrooms.id_namespace_associations (
  MembershipIdentifier,
  InputReferenceConfig,
  Tags,
  Name,
  Description,
  IdMappingConfig,
  region
)
SELECT
  '{{ membership_identifier }}',
  '{{ input_reference_config }}',
  '{{ tags }}',
  '{{ name }}',
  '{{ description }}',
  '{{ id_mapping_config }}',
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
  - name: id_namespace_association
    props:
      - name: membership_identifier
        value: '{{ membership_identifier }}'
      - name: input_reference_config
        value:
          input_reference_arn: '{{ input_reference_arn }}'
          manage_resource_policies: '{{ manage_resource_policies }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: name
        value: '{{ name }}'
      - name: description
        value: '{{ description }}'
      - name: id_mapping_config
        value:
          allow_use_as_dimension_column: '{{ allow_use_as_dimension_column }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>id_namespace_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cleanrooms.id_namespace_associations
SET PatchDocument = string('{{ {
    "Tags": tags,
    "Name": name,
    "Description": description,
    "IdMappingConfig": id_mapping_config
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id_namespace_association_identifier }}|{{ membership_identifier }}'
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
DELETE FROM awscc.cleanrooms.id_namespace_associations
WHERE
  Identifier = '{{ id_namespace_association_identifier }}|{{ membership_identifier }}' AND
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

To operate on the <code>id_namespace_associations</code> resource, the following permissions are required:

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
cleanrooms:CreateIdNamespaceAssociation,
cleanrooms:GetIdNamespaceAssociation,
cleanrooms:ListIdNamespaceAssociations,
cleanrooms:ListTagsForResource,
cleanrooms:TagResource,
cleanrooms:GetMembership,
cleanrooms:GetCollaboration,
entityresolution:GetIdNamespace,
entityresolution:AddPolicyStatement
```

</TabItem>
<TabItem value="read">

```json
cleanrooms:GetIdNamespaceAssociation,
cleanrooms:ListTagsForResource,
cleanrooms:GetMembership,
cleanrooms:GetCollaboration,
entityresolution:GetIdNamespace
```

</TabItem>
<TabItem value="update">

```json
cleanrooms:UpdateIdNamespaceAssociation,
cleanrooms:GetIdNamespaceAssociation,
cleanrooms:GetMembership,
cleanrooms:GetCollaboration,
cleanrooms:ListTagsForResource,
cleanrooms:TagResource,
cleanrooms:UntagResource,
entityresolution:GetIdNamespace,
entityresolution:AddPolicyStatement
```

</TabItem>
<TabItem value="delete">

```json
cleanrooms:DeleteIdNamespaceAssociation,
cleanrooms:GetIdNamespaceAssociation,
cleanrooms:ListIdNamespaceAssociations,
cleanrooms:GetMembership,
cleanrooms:GetCollaboration,
cleanrooms:ListTagsForResource,
cleanrooms:UntagResource,
entityresolution:GetIdNamespace,
entityresolution:DeletePolicyStatement
```

</TabItem>
<TabItem value="list">

```json
cleanrooms:ListIdNamespaceAssociations,
cleanrooms:GetMembership,
cleanrooms:GetCollaboration
```

</TabItem>
</Tabs>