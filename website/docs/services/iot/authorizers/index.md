---
title: authorizers
hide_title: false
hide_table_of_contents: false
keywords:
  - authorizers
  - iot
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

Creates, updates, deletes or gets an <code>authorizer</code> resource or lists <code>authorizers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>authorizers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates an authorizer.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iot.authorizers" /></td></tr>
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
    "name": "authorizer_function_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "authorizer_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "signing_disabled",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "token_key_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "token_signing_public_keys",
    "type": "object",
    "description": ""
  },
  {
    "name": "enable_caching_for_http",
    "type": "boolean",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "authorizer_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-authorizer.html"><code>AWS::IoT::Authorizer</code></a>.

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
    <td><code>authorizers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AuthorizerFunctionArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>authorizers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>authorizers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>authorizers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>authorizers</code></td>
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

Gets all properties from an individual <code>authorizer</code>.
```sql
SELECT
region,
authorizer_function_arn,
arn,
authorizer_name,
signing_disabled,
status,
token_key_name,
token_signing_public_keys,
enable_caching_for_http,
tags
FROM awscc.iot.authorizers
WHERE region = 'us-east-1' AND Identifier = '<AuthorizerName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>authorizers</code> in a region.
```sql
SELECT
region,
authorizer_name
FROM awscc.iot.authorizers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>authorizer</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iot.authorizers (
 AuthorizerFunctionArn,
 region
)
SELECT 
'{{ AuthorizerFunctionArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iot.authorizers (
 AuthorizerFunctionArn,
 AuthorizerName,
 SigningDisabled,
 Status,
 TokenKeyName,
 TokenSigningPublicKeys,
 EnableCachingForHttp,
 Tags,
 region
)
SELECT 
 '{{ AuthorizerFunctionArn }}',
 '{{ AuthorizerName }}',
 '{{ SigningDisabled }}',
 '{{ Status }}',
 '{{ TokenKeyName }}',
 '{{ TokenSigningPublicKeys }}',
 '{{ EnableCachingForHttp }}',
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
  - name: authorizer
    props:
      - name: AuthorizerFunctionArn
        value: '{{ AuthorizerFunctionArn }}'
      - name: AuthorizerName
        value: '{{ AuthorizerName }}'
      - name: SigningDisabled
        value: '{{ SigningDisabled }}'
      - name: Status
        value: '{{ Status }}'
      - name: TokenKeyName
        value: '{{ TokenKeyName }}'
      - name: TokenSigningPublicKeys
        value: {}
      - name: EnableCachingForHttp
        value: '{{ EnableCachingForHttp }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>authorizer</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iot.authorizers
SET PatchDocument = string('{{ {
    "AuthorizerFunctionArn": authorizer_function_arn,
    "Status": status,
    "TokenKeyName": token_key_name,
    "TokenSigningPublicKeys": token_signing_public_keys,
    "EnableCachingForHttp": enable_caching_for_http,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<AuthorizerName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.authorizers
WHERE Identifier = '<AuthorizerName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>authorizers</code> resource, the following permissions are required:

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
iot:CreateAuthorizer,
iot:DescribeAuthorizer,
iot:TagResource,
iot:ListTagsForResource,
kms:Decrypt
```

</TabItem>
<TabItem value="read">

```json
iot:DescribeAuthorizer,
iot:ListTagsForResource,
kms:Decrypt
```

</TabItem>
<TabItem value="update">

```json
iot:UpdateAuthorizer,
iot:DescribeAuthorizer,
iot:TagResource,
iot:UntagResource,
iot:ListTagsForResource,
kms:Decrypt
```

</TabItem>
<TabItem value="delete">

```json
iot:UpdateAuthorizer,
iot:DeleteAuthorizer,
iot:DescribeAuthorizer,
kms:Decrypt
```

</TabItem>
<TabItem value="list">

```json
iot:ListAuthorizers
```

</TabItem>
</Tabs>