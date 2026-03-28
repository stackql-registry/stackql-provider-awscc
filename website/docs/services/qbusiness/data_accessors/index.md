---
title: data_accessors
hide_title: false
hide_table_of_contents: false
keywords:
  - data_accessors
  - qbusiness
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

Creates, updates, deletes or gets a <code>data_accessor</code> resource or lists <code>data_accessors</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>data_accessors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::QBusiness::DataAccessor Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.qbusiness.data_accessors" /></td></tr>
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
    "name": "action_configurations",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "action",
        "type": "string",
        "description": ""
      },
      {
        "name": "filter_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "document_attribute_filter",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "and_all_filters",
                "type": "array",
                "description": ""
              },
              {
                "name": "or_all_filters",
                "type": "array",
                "description": ""
              },
              {
                "name": "equals_to",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "application_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "authentication_detail",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "authentication_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "authentication_configuration",
        "type": "object",
        "description": ""
      },
      {
        "name": "external_ids",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "created_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "data_accessor_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "data_accessor_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "display_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "idc_application_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "principal",
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
    "name": "updated_at",
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
    "name": "application_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "data_accessor_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html"><code>AWS::QBusiness::DataAccessor</code></a>.

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
    <td><code>data_accessors</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ApplicationId, ActionConfigurations, DisplayName, Principal, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>data_accessors</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>data_accessors</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>data_accessors_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>data_accessors</code></td>
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

Gets all properties from an individual <code>data_accessor</code>.
```sql
SELECT
  region,
  action_configurations,
  application_id,
  authentication_detail,
  created_at,
  data_accessor_arn,
  data_accessor_id,
  display_name,
  idc_application_arn,
  principal,
  tags,
  updated_at
FROM awscc.qbusiness.data_accessors
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ application_id }}|{{ data_accessor_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>data_accessors</code> in a region.
```sql
SELECT
  region,
  application_id,
  data_accessor_id
FROM awscc.qbusiness.data_accessors_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>data_accessor</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.qbusiness.data_accessors (
  ActionConfigurations,
  ApplicationId,
  DisplayName,
  Principal,
  region
)
SELECT
  '{{ action_configurations }}',
  '{{ application_id }}',
  '{{ display_name }}',
  '{{ principal }}',
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
INSERT INTO awscc.qbusiness.data_accessors (
  ActionConfigurations,
  ApplicationId,
  AuthenticationDetail,
  DisplayName,
  Principal,
  Tags,
  region
)
SELECT
  '{{ action_configurations }}',
  '{{ application_id }}',
  '{{ authentication_detail }}',
  '{{ display_name }}',
  '{{ principal }}',
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

<CodeBlock language="yaml">{`version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: data_accessor
    props:
      - name: action_configurations
        value:
          - action: '{{ action }}'
            filter_configuration:
              document_attribute_filter:
                and_all_filters:
                  - null
                or_all_filters:
                  - null
                not_filter: null
                equals_to:
                  name: '{{ name }}'
                  value: null
                contains_all: null
                contains_any: null
                greater_than: null
                greater_than_or_equals: null
                less_than: null
                less_than_or_equals: null
      - name: application_id
        value: '{{ application_id }}'
      - name: authentication_detail
        value:
          authentication_type: '{{ authentication_type }}'
          authentication_configuration: null
          external_ids:
            - '{{ external_ids[0] }}'
      - name: display_name
        value: '{{ display_name }}'
      - name: principal
        value: '{{ principal }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>data_accessor</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.qbusiness.data_accessors
SET PatchDocument = string('{{ {
    "ActionConfigurations": action_configurations,
    "AuthenticationDetail": authentication_detail,
    "DisplayName": display_name,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ application_id }}|{{ data_accessor_id }}'
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
DELETE FROM awscc.qbusiness.data_accessors
WHERE
  Identifier = '{{ application_id }}|{{ data_accessor_id }}' AND
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

To operate on the <code>data_accessors</code> resource, the following permissions are required:

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
qbusiness:CreateDataAccessor,
qbusiness:GetDataAccessor,
qbusiness:ListTagsForResource,
qbusiness:CreateDataAccessorWithTti,
qbusiness:TagResource,
sso:CreateApplication,
sso:PutApplicationAuthenticationMethod,
sso:PutApplicationGrant,
sso:PutApplicationAccessScope,
sso:DescribeTrustedTokenIssuer
```

</TabItem>
<TabItem value="read">

```json
qbusiness:GetDataAccessor,
qbusiness:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
qbusiness:GetDataAccessor,
qbusiness:ListTagsForResource,
qbusiness:TagResource,
qbusiness:UntagResource,
qbusiness:UpdateDataAccessor,
sso:PutApplicationAuthenticationMethod,
sso:PutApplicationGrant,
sso:PutApplicationAccessScope,
sso:DescribeTrustedTokenIssuer,
sso:UpdateApplication
```

</TabItem>
<TabItem value="delete">

```json
qbusiness:DeleteDataAccessor,
qbusiness:GetDataAccessor,
sso:DeleteApplication
```

</TabItem>
<TabItem value="list">

```json
qbusiness:ListDataAccessors
```

</TabItem>
</Tabs>