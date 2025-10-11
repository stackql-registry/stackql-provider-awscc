---
title: identity_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_sources
  - mpa
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

Creates, updates, deletes or gets an <code>identity_source</code> resource or lists <code>identity_sources</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>identity_sources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::MPA::IdentitySource.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.mpa.identity_sources" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="identity_source_arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="identity_source_parameters" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="identity_source_type" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="creation_time" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="status_code" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="status_message" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mpa-identitysource.html"><code>AWS::MPA::IdentitySource</code></a>.

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
    <td><CopyableCode code="IdentitySourceParameters, region" /></td>
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
Gets all <code>identity_sources</code> in a region.
```sql
SELECT
region,
identity_source_arn,
identity_source_parameters,
tags,
identity_source_type,
creation_time,
status,
status_code,
status_message
FROM awscc.mpa.identity_sources
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>identity_source</code>.
```sql
SELECT
region,
identity_source_arn,
identity_source_parameters,
tags,
identity_source_type,
creation_time,
status,
status_code,
status_message
FROM awscc.mpa.identity_sources
WHERE region = 'us-east-1' AND data__Identifier = '<IdentitySourceArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>identity_source</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.mpa.identity_sources (
 IdentitySourceParameters,
 region
)
SELECT 
'{{ IdentitySourceParameters }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.mpa.identity_sources (
 IdentitySourceParameters,
 Tags,
 region
)
SELECT 
 '{{ IdentitySourceParameters }}',
 '{{ Tags }}',
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
  - name: identity_source
    props:
      - name: IdentitySourceParameters
        value:
          IamIdentityCenter:
            InstanceArn: '{{ InstanceArn }}'
            Region: '{{ Region }}'
            ApprovalPortalUrl: '{{ ApprovalPortalUrl }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.mpa.identity_sources
WHERE data__Identifier = '<IdentitySourceArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>identity_sources</code> resource, the following permissions are required:

### Create
```json
mpa:CreateIdentitySource,
mpa:TagResource,
mpa:ListTagsForResource,
mpa:GetIdentitySource,
sso:DescribeApplication,
sso:DescribeInstance,
sso:CreateApplication,
sso:PutApplicationAssignmentConfiguration,
sso:PutApplicationGrant,
sso:PutApplicationAuthenticationMethod,
sso:PutApplicationAccessScope,
kms:Decrypt
```

### Read
```json
mpa:GetIdentitySource,
mpa:ListTagsForResource
```

### Update
```json
mpa:GetIdentitySource,
mpa:TagResource,
mpa:ListTagsForResource,
mpa:UntagResource
```

### Delete
```json
mpa:DeleteIdentitySource,
mpa:GetIdentitySource,
mpa:UntagResource,
sso:DeleteApplication,
sso:ListInstances,
kms:Decrypt
```

### List
```json
mpa:ListIdentitySources,
mpa:ListTagsForResource
```
