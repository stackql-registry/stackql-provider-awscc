---
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
  - codeartifact
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

Creates, updates, deletes or gets a <code>domain</code> resource or lists <code>domains</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>domains</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The resource schema to create a CodeArtifact domain.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.codeartifact.domains" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "domain_name",
    "type": "string",
    "description": "The name of the domain."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the domain. This field is used for GetAtt"
  },
  {
    "name": "owner",
    "type": "string",
    "description": "The 12-digit account ID of the AWS account that owns the domain. This field is used for GetAtt"
  },
  {
    "name": "encryption_key",
    "type": "string",
    "description": "The ARN of an AWS Key Management Service (AWS KMS) key associated with a domain."
  },
  {
    "name": "permissions_policy_document",
    "type": "object",
    "description": "The access control resource policy on the provided domain."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The ARN of the domain."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html"><code>AWS::CodeArtifact::Domain</code></a>.

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
    <td><CopyableCode code="DomainName, region" /></td>
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

Gets all properties from an individual <code>domain</code>.
```sql
SELECT
region,
domain_name,
name,
owner,
encryption_key,
permissions_policy_document,
tags,
arn
FROM awscc.codeartifact.domains
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>domain</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.codeartifact.domains (
 DomainName,
 region
)
SELECT 
'{{ DomainName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.codeartifact.domains (
 DomainName,
 PermissionsPolicyDocument,
 Tags,
 region
)
SELECT 
 '{{ DomainName }}',
 '{{ PermissionsPolicyDocument }}',
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
  - name: domain
    props:
      - name: DomainName
        value: '{{ DomainName }}'
      - name: PermissionsPolicyDocument
        value: {}
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
DELETE FROM awscc.codeartifact.domains
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>domains</code> resource, the following permissions are required:

### Create
```json
codeartifact:CreateDomain,
codeartifact:DescribeDomain,
codeartifact:PutDomainPermissionsPolicy,
codeartifact:GetDomainPermissionsPolicy,
codeartifact:TagResource,
codeartifact:ListTagsForResource
```

### Read
```json
codeartifact:DescribeDomain,
codeartifact:GetDomainPermissionsPolicy,
codeartifact:ListTagsForResource
```

### Update
```json
codeartifact:DescribeDomain,
codeartifact:PutDomainPermissionsPolicy,
codeartifact:DeleteDomainPermissionsPolicy,
codeartifact:GetDomainPermissionsPolicy,
codeartifact:TagResource,
codeartifact:UntagResource,
codeartifact:ListTagsForResource
```

### Delete
```json
codeartifact:DeleteDomain,
codeartifact:DescribeDomain
```

### List
```json
codeartifact:ListDomains
```
