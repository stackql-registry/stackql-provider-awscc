---
title: oidc_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - oidc_providers
  - iam
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

Creates, updates, deletes or gets an <code>oidc_provider</code> resource or lists <code>oidc_providers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>oidc_providers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::IAM::OIDCProvider</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iam.oidc_providers" /></td></tr>
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
    "name": "client_id_list",
    "type": "array",
    "description": ""
  },
  {
    "name": "url",
    "type": "string",
    "description": ""
  },
  {
    "name": "thumbprint_list",
    "type": "array",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": "Amazon Resource Name (ARN) of the OIDC provider"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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
    "name": "arn",
    "type": "string",
    "description": "Amazon Resource Name (ARN) of the OIDC provider"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html"><code>AWS::IAM::OIDCProvider</code></a>.

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
    <td><code>oidc_providers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>oidc_providers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>oidc_providers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>oidc_providers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>oidc_providers</code></td>
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

Gets all properties from an individual <code>oidc_provider</code>.
```sql
SELECT
region,
client_id_list,
url,
thumbprint_list,
arn,
tags
FROM awscc.iam.oidc_providers
WHERE Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>oidc_providers</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.iam.oidc_providers_list_only
;
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>oidc_provider</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iam.oidc_providers (
 ClientIdList,
 Url,
 ThumbprintList,
 Tags,
 region
)
SELECT 
'{{ ClientIdList }}',
 '{{ Url }}',
 '{{ ThumbprintList }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iam.oidc_providers (
 ClientIdList,
 Url,
 ThumbprintList,
 Tags,
 region
)
SELECT 
 '{{ ClientIdList }}',
 '{{ Url }}',
 '{{ ThumbprintList }}',
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
  - name: oidc_provider
    props:
      - name: ClientIdList
        value:
          - '{{ ClientIdList[0] }}'
      - name: Url
        value: '{{ Url }}'
      - name: ThumbprintList
        value:
          - '{{ ThumbprintList[0] }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.iam.oidc_providers
SET PatchDocument = string('{{ {
    "ClientIdList": client_id_list,
    "ThumbprintList": thumbprint_list,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iam.oidc_providers
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>oidc_providers</code> resource, the following permissions are required:

### Create
```json
iam:CreateOpenIDConnectProvider,
iam:TagOpenIDConnectProvider,
iam:GetOpenIDConnectProvider
```

### Read
```json
iam:GetOpenIDConnectProvider
```

### Update
```json
iam:UpdateOpenIDConnectProviderThumbprint,
iam:RemoveClientIDFromOpenIDConnectProvider,
iam:AddClientIDToOpenIDConnectProvider,
iam:GetOpenIDConnectProvider,
iam:TagOpenIDConnectProvider,
iam:UntagOpenIDConnectProvider,
iam:ListOpenIDConnectProviderTags
```

### Delete
```json
iam:DeleteOpenIDConnectProvider
```

### List
```json
iam:ListOpenIDConnectProviders,
iam:GetOpenIDConnectProvider
```
