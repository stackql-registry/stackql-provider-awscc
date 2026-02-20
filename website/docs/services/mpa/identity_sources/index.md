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
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

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
    "name": "identity_source_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "identity_source_parameters",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "iam_identity_center",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "instance_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "region",
            "type": "string",
            "description": ""
          },
          {
            "name": "approval_portal_url",
            "type": "string",
            "description": ""
          }
        ]
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
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "identity_source_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "status_code",
    "type": "string",
    "description": ""
  },
  {
    "name": "status_message",
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
    "name": "identity_source_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mpa-identitysource.html"><code>AWS::MPA::IdentitySource</code></a>.

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
    <td><code>identity_sources</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="IdentitySourceParameters, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>identity_sources</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>identity_sources</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>identity_sources_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>identity_sources</code></td>
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
</TabItem>
<TabItem value="list">

Lists all <code>identity_sources</code> in a region.
```sql
SELECT
region,
identity_source_arn
FROM awscc.mpa.identity_sources_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.mpa.identity_sources
SET data__PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<IdentitySourceArn>';
```


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
