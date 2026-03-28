---
title: api_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - api_keys
  - location
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

Creates, updates, deletes or gets an <code>api_key</code> resource or lists <code>api_keys</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>api_keys</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Location::APIKey Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.location.api_keys" /></td></tr>
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
    "name": "create_time",
    "type": "string",
    "description": "The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ)"
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "force_update",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "key_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "key_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "no_expiry",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "restrictions",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "allow_actions",
        "type": "array",
        "description": ""
      },
      {
        "name": "allow_resources",
        "type": "array",
        "description": ""
      },
      {
        "name": "allow_referers",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "force_delete",
    "type": "boolean",
    "description": ""
  },
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "key_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html"><code>AWS::Location::APIKey</code></a>.

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
    <td><code>api_keys</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="KeyName, Restrictions, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>api_keys</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>api_keys</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>api_keys_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>api_keys</code></td>
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

Gets all properties from an individual <code>api_key</code>.
```sql
SELECT
  region,
  create_time,
  description,
  expire_time,
  force_update,
  key_arn,
  key_name,
  no_expiry,
  restrictions,
  tags,
  update_time,
  force_delete,
  arn
FROM awscc.location.api_keys
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ key_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>api_keys</code> in a region.
```sql
SELECT
  region,
  key_name
FROM awscc.location.api_keys_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>api_key</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.location.api_keys (
  KeyName,
  Restrictions,
  region
)
SELECT
  '{{ key_name }}',
  '{{ restrictions }}',
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
INSERT INTO awscc.location.api_keys (
  Description,
  ExpireTime,
  ForceUpdate,
  KeyName,
  NoExpiry,
  Restrictions,
  Tags,
  ForceDelete,
  region
)
SELECT
  '{{ description }}',
  '{{ expire_time }}',
  '{{ force_update }}',
  '{{ key_name }}',
  '{{ no_expiry }}',
  '{{ restrictions }}',
  '{{ tags }}',
  '{{ force_delete }}',
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
  - name: api_key
    props:
      - name: description
        value: '{{ description }}'
      - name: expire_time
        value: '{{ expire_time }}'
      - name: force_update
        value: '{{ force_update }}'
      - name: key_name
        value: '{{ key_name }}'
      - name: no_expiry
        value: '{{ no_expiry }}'
      - name: restrictions
        value:
          allow_actions:
            - '{{ allow_actions[0] }}'
          allow_resources:
            - '{{ allow_resources[0] }}'
          allow_referers:
            - '{{ allow_referers[0] }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: force_delete
        value: '{{ force_delete }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>api_key</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.location.api_keys
SET PatchDocument = string('{{ {
    "Description": description,
    "ExpireTime": expire_time,
    "ForceUpdate": force_update,
    "NoExpiry": no_expiry,
    "Restrictions": restrictions,
    "Tags": tags,
    "ForceDelete": force_delete
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ key_name }}'
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
DELETE FROM awscc.location.api_keys
WHERE
  Identifier = '{{ key_name }}' AND
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

To operate on the <code>api_keys</code> resource, the following permissions are required:

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
geo:CreateKey,
geo:DescribeKey,
geo:TagResource,
geo:UntagResource,
geo:GetMapTile,
geo:GetMapStyleDescriptor,
geo:GetMapSprites,
geo:GetMapGlyphs,
geo:SearchPlaceIndexForText,
geo:SearchPlaceIndexForPosition,
geo:SearchPlaceIndexForSuggestions,
geo:GetPlace,
geo:CalculateRoute,
geo:CalculateRouteMatrix,
geo-maps:GetTile,
geo-maps:GetStaticMap,
geo-places:Autocomplete,
geo-places:Geocode,
geo-places:GetPlace,
geo-places:ReverseGeocode,
geo-places:SearchNearby,
geo-places:SearchText,
geo-places:Suggest,
geo-routes:CalculateIsolines,
geo-routes:CalculateRouteMatrix,
geo-routes:CalculateRoutes,
geo-routes:OptimizeWaypoints,
geo-routes:SnapToRoads
```

</TabItem>
<TabItem value="read">

```json
geo:DescribeKey
```

</TabItem>
<TabItem value="update">

```json
geo:CreateKey,
geo:DescribeKey,
geo:TagResource,
geo:UntagResource,
geo:GetMapTile,
geo:GetMapStyleDescriptor,
geo:GetMapSprites,
geo:GetMapGlyphs,
geo:SearchPlaceIndexForText,
geo:SearchPlaceIndexForPosition,
geo:SearchPlaceIndexForSuggestions,
geo:GetPlace,
geo:CalculateRoute,
geo:CalculateRouteMatrix,
geo-maps:GetTile,
geo-maps:GetStaticMap,
geo-places:Autocomplete,
geo-places:Geocode,
geo-places:GetPlace,
geo-places:ReverseGeocode,
geo-places:SearchNearby,
geo-places:SearchText,
geo-places:Suggest,
geo-routes:CalculateIsolines,
geo-routes:CalculateRouteMatrix,
geo-routes:CalculateRoutes,
geo-routes:OptimizeWaypoints,
geo-routes:SnapToRoads,
geo:UpdateKey
```

</TabItem>
<TabItem value="delete">

```json
geo:DeleteKey,
geo:DescribeKey
```

</TabItem>
<TabItem value="list">

```json
geo:ListKeys
```

</TabItem>
</Tabs>