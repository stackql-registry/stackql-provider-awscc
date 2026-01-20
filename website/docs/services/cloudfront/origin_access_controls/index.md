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
<tr><td><b>Description</b></td><td>Creates a new origin access control in CloudFront. After you create an origin access control, you can add it to an origin in a CloudFront distribution so that CloudFront sends authenticated (signed) requests to the origin.<br />This makes it possible to block public access to the origin, allowing viewers (users) to access the origin's content only through CloudFront.<br />For more information about using a CloudFront origin access control, see &#91;Restricting access to an origin&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html) in the &#42;Amazon CloudFront Developer Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudfront.origin_access_controls" /></td></tr>
</tbody>
</table>

## Fields
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
        "description": "Specifies which requests CloudFront signs (adds authentication information to). Specify &#96;&#96;always&#96;&#96; for the most common use case. For more information, see &#91;origin access control advanced settings&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#oac-advanced-settings) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />This field can have one of the following values:<br />+ &#96;&#96;always&#96;&#96; – CloudFront signs all origin requests, overwriting the &#96;&#96;Authorization&#96;&#96; header from the viewer request if one exists.<br />+ &#96;&#96;never&#96;&#96; – CloudFront doesn't sign any origin requests. This value turns off origin access control for all origins in all distributions that use this origin access control.<br />+ &#96;&#96;no-override&#96;&#96; – If the viewer request doesn't contain the &#96;&#96;Authorization&#96;&#96; header, then CloudFront signs the origin request. If the viewer request contains the &#96;&#96;Authorization&#96;&#96; header, then CloudFront doesn't sign the origin request and instead passes along the &#96;&#96;Authorization&#96;&#96; header from the viewer request. &#42;WARNING: To pass along the Authorization header from the viewer request, you must add the Authorization header to a cache policy for all cache behaviors that use origins associated with this origin access control.&#42;"
      },
      {
        "name": "signing_protocol",
        "type": "string",
        "description": "The signing protocol of the origin access control, which determines how CloudFront signs (authenticates) requests. The only valid value is &#96;&#96;sigv4&#96;&#96;."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originaccesscontrol.html"><code>AWS::CloudFront::OriginAccessControl</code></a>.

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
    <td><CopyableCode code="OriginAccessControlConfig, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>origin_access_control</code>.
```sql
SELECT
region,
id,
origin_access_control_config
FROM awscc.cloudfront.origin_access_controls
WHERE data__Identifier = '<Id>';
```

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
'{{ OriginAccessControlConfig }}',
'{{ region }}';
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
 '{{ OriginAccessControlConfig }}',
 '{{ region }}';
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
      - name: OriginAccessControlConfig
        value:
          Description: '{{ Description }}'
          Name: '{{ Name }}'
          OriginAccessControlOriginType: '{{ OriginAccessControlOriginType }}'
          SigningBehavior: '{{ SigningBehavior }}'
          SigningProtocol: '{{ SigningProtocol }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudfront.origin_access_controls
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>origin_access_controls</code> resource, the following permissions are required:

### Create
```json
cloudfront:CreateOriginAccessControl
```

### Delete
```json
cloudfront:DeleteOriginAccessControl,
cloudfront:GetOriginAccessControl
```

### List
```json
cloudfront:ListOriginAccessControls
```

### Read
```json
cloudfront:GetOriginAccessControl
```

### Update
```json
cloudfront:UpdateOriginAccessControl,
cloudfront:GetOriginAccessControl
```
