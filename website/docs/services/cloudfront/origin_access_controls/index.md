---
title: origin_access_controls
hide_title: false
hide_table_of_contents: false
keywords:
  - origin_access_controls
  - cloudfront
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

Creates, updates, deletes or gets an <code>origin_access_control</code> resource or lists <code>origin_access_controls</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>origin_access_controls</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>Creates a new origin access control in CloudFront. After you create an origin access control, you can add it to an origin in a CloudFront distribution so that CloudFront sends authenticated (signed) requests to the origin.</summary>This makes it possible to block public access to the origin, allowing viewers (users) to access the origin's content only through CloudFront.<br />For more information about using a CloudFront origin access control, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html">Restricting access to an origin</a> in the <i>Amazon CloudFront Developer Guide</i>.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudfront.origin_access_controls" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "origin_access_control_config",
    "type": "object",
    "description": "The origin access control.",
    "children": [
      {
        "name": "description",
        "type": "string",
        "description": "A description of the origin access control."
      },
      {
        "name": "name",
        "type": "string",
        "description": "A name to identify the origin access control. You can specify up to 64 characters."
      },
      {
        "name": "origin_access_control_origin_type",
        "type": "string",
        "description": "The type of origin that this origin access control is for."
      },
      {
        "name": "signing_behavior",
        "type": "string",
        "description": "<details><summary>Specifies which requests CloudFront signs (adds authentication information to). Specify <code>always</code> for the most common use case. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#oac-advanced-settings\">origin access control advanced settings</a> in the <i>Amazon CloudFront Developer Guide</i>.</summary>This field can have one of the following values:<br />+  <code>always</code> – CloudFront signs all origin requests, overwriting the <code>Authorization</code> header from the viewer request if one exists.<br />+  <code>never</code> – CloudFront doesn't sign any origin requests. This value turns off origin access control for all origins in all distributions that use this origin access control.<br />+  <code>no-override</code> – If the viewer request doesn't contain the <code>Authorization</code> header, then CloudFront signs the origin request. If the viewer request contains the <code>Authorization</code> header, then CloudFront doesn't sign the origin request and instead passes along the <code>Authorization</code> header from the viewer request. <i>WARNING: To pass along the Authorization header from the viewer request, you must add the Authorization header to a cache policy for all cache behaviors that use origins associated with this origin access control.</i></details>"
      },
      {
        "name": "signing_protocol",
        "type": "string",
        "description": "The signing protocol of the origin access control, which determines how CloudFront signs (authenticates) requests. The only valid value is <code>sigv4</code>."
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
    "name": "id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originaccesscontrol.html"><code>AWS::CloudFront::OriginAccessControl</code></a>.

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
    <td><code>origin_access_controls</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="OriginAccessControlConfig, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>origin_access_controls</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>origin_access_controls</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>origin_access_controls_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>origin_access_controls</code></td>
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

Gets all properties from an individual <code>origin_access_control</code>.
```sql
SELECT
  region,
  id,
  origin_access_control_config
FROM awscc.cloudfront.origin_access_controls
WHERE
  region = 'us-east-1' AND
  Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>origin_access_controls</code> in a region.
```sql
SELECT
  region,
  id
FROM awscc.cloudfront.origin_access_controls_list_only
WHERE
  region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>origin_access_control</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudfront.origin_access_controls (
  OriginAccessControlConfig,
  region
)
SELECT
  '{{ origin_access_control_config }}',
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
INSERT INTO awscc.cloudfront.origin_access_controls (
  OriginAccessControlConfig,
  region
)
SELECT
  '{{ origin_access_control_config }}',
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
  - name: origin_access_control
    props:
      - name: origin_access_control_config
        value:
          description: '{{ description }}'
          name: '{{ name }}'
          origin_access_control_origin_type: '{{ origin_access_control_origin_type }}'
          signing_behavior: '{{ signing_behavior }}'
          signing_protocol: '{{ signing_protocol }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>origin_access_control</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cloudfront.origin_access_controls
SET PatchDocument = string('{{ {
    "OriginAccessControlConfig": origin_access_control_config
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id }}'
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
DELETE FROM awscc.cloudfront.origin_access_controls
WHERE
  Identifier = '{{ id }}' AND
  region = 'us-east-1'
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

To operate on the <code>origin_access_controls</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
cloudfront:CreateOriginAccessControl
```

</TabItem>
<TabItem value="delete">

```json
cloudfront:DeleteOriginAccessControl,
cloudfront:GetOriginAccessControl
```

</TabItem>
<TabItem value="list">

```json
cloudfront:ListOriginAccessControls
```

</TabItem>
<TabItem value="read">

```json
cloudfront:GetOriginAccessControl
```

</TabItem>
<TabItem value="update">

```json
cloudfront:UpdateOriginAccessControl,
cloudfront:GetOriginAccessControl
```

</TabItem>
</Tabs>