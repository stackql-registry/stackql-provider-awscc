---
title: cloud_front_origin_access_identities
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_front_origin_access_identities
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

Creates, updates, deletes or gets a <code>cloud_front_origin_access_identity</code> resource or lists <code>cloud_front_origin_access_identities</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>cloud_front_origin_access_identities</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The request to create a new origin access identity (OAI). An origin access identity is a special CloudFront user that you can associate with Amazon S3 origins, so that you can secure all or just some of your Amazon S3 content. For more information, see &#91;Restricting Access to Amazon S3 Content by Using an Origin Access Identity&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html) in the &#42;Amazon CloudFront Developer Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudfront.cloud_front_origin_access_identities" /></td></tr>
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
    "name": "cloud_front_origin_access_identity_config",
    "type": "object",
    "description": "The current configuration information for the identity.",
    "children": [
      {
        "name": "comment",
        "type": "string",
        "description": "A comment to describe the origin access identity. The comment cannot be longer than 128 characters."
      }
    ]
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "s3_canonical_user_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-cloudfrontoriginaccessidentity.html"><code>AWS::CloudFront::CloudFrontOriginAccessIdentity</code></a>.

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
    <td><code>cloud_front_origin_access_identities</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="CloudFrontOriginAccessIdentityConfig, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>cloud_front_origin_access_identities</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>cloud_front_origin_access_identities</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>cloud_front_origin_access_identities_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>cloud_front_origin_access_identities</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>cloud_front_origin_access_identity</code>.
```sql
SELECT
region,
cloud_front_origin_access_identity_config,
id,
s3_canonical_user_id
FROM awscc.cloudfront.cloud_front_origin_access_identities
WHERE data__Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>cloud_front_origin_access_identities</code> in a region.
```sql
SELECT
region,
id
FROM awscc.cloudfront.cloud_front_origin_access_identities_list_only
;
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>cloud_front_origin_access_identity</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudfront.cloud_front_origin_access_identities (
 CloudFrontOriginAccessIdentityConfig,
 region
)
SELECT 
'{{ CloudFrontOriginAccessIdentityConfig }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudfront.cloud_front_origin_access_identities (
 CloudFrontOriginAccessIdentityConfig,
 region
)
SELECT 
 '{{ CloudFrontOriginAccessIdentityConfig }}',
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
  - name: cloud_front_origin_access_identity
    props:
      - name: CloudFrontOriginAccessIdentityConfig
        value:
          Comment: '{{ Comment }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.cloudfront.cloud_front_origin_access_identities
SET data__PatchDocument = string('{{ {
    "CloudFrontOriginAccessIdentityConfig": cloud_front_origin_access_identity_config
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudfront.cloud_front_origin_access_identities
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>cloud_front_origin_access_identities</code> resource, the following permissions are required:

### Create
```json
cloudfront:CreateCloudFrontOriginAccessIdentity
```

### Delete
```json
cloudfront:DeleteCloudFrontOriginAccessIdentity,
cloudfront:GetCloudFrontOriginAccessIdentity
```

### List
```json
cloudfront:ListCloudFrontOriginAccessIdentities
```

### Read
```json
cloudfront:GetCloudFrontOriginAccessIdentity
```

### Update
```json
cloudfront:UpdateCloudFrontOriginAccessIdentity,
cloudfront:GetCloudFrontOriginAccessIdentity
```
