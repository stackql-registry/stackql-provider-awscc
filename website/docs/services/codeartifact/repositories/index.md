---
title: repositories
hide_title: false
hide_table_of_contents: false
keywords:
  - repositories
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

Creates, updates, deletes or gets a <code>repository</code> resource or lists <code>repositories</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>repositories</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The resource schema to create a CodeArtifact repository.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.codeartifact.repositories" /></td></tr>
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
    "name": "repository_name",
    "type": "string",
    "description": "The name of the repository."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the repository. This is used for GetAtt"
  },
  {
    "name": "domain_name",
    "type": "string",
    "description": "The name of the domain that contains the repository."
  },
  {
    "name": "domain_owner",
    "type": "string",
    "description": "The 12-digit account ID of the AWS account that owns the domain."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A text description of the repository."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The ARN of the repository."
  },
  {
    "name": "external_connections",
    "type": "array",
    "description": "A list of external connections associated with the repository."
  },
  {
    "name": "upstreams",
    "type": "array",
    "description": "A list of upstream repositories associated with the repository."
  },
  {
    "name": "permissions_policy_document",
    "type": "object",
    "description": "The access control resource policy on the provided repository."
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
    "description": "The ARN of the repository."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html"><code>AWS::CodeArtifact::Repository</code></a>.

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
    <td><code>repositories</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RepositoryName, DomainName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>repositories</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>repositories</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>repositories_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>repositories</code></td>
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

Gets all properties from an individual <code>repository</code>.
```sql
SELECT
region,
repository_name,
name,
domain_name,
domain_owner,
description,
arn,
external_connections,
upstreams,
permissions_policy_document,
tags
FROM awscc.codeartifact.repositories
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>repositories</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.codeartifact.repositories_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>repository</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.codeartifact.repositories (
 RepositoryName,
 DomainName,
 region
)
SELECT 
'{{ RepositoryName }}',
 '{{ DomainName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.codeartifact.repositories (
 RepositoryName,
 DomainName,
 Description,
 ExternalConnections,
 Upstreams,
 PermissionsPolicyDocument,
 Tags,
 region
)
SELECT 
 '{{ RepositoryName }}',
 '{{ DomainName }}',
 '{{ Description }}',
 '{{ ExternalConnections }}',
 '{{ Upstreams }}',
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
  - name: repository
    props:
      - name: RepositoryName
        value: '{{ RepositoryName }}'
      - name: DomainName
        value: '{{ DomainName }}'
      - name: Description
        value: '{{ Description }}'
      - name: ExternalConnections
        value:
          - '{{ ExternalConnections[0] }}'
      - name: Upstreams
        value:
          - '{{ Upstreams[0] }}'
      - name: PermissionsPolicyDocument
        value: {}
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>repository</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.codeartifact.repositories
SET PatchDocument = string('{{ {
    "Description": description,
    "ExternalConnections": external_connections,
    "Upstreams": upstreams,
    "PermissionsPolicyDocument": permissions_policy_document,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.codeartifact.repositories
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>repositories</code> resource, the following permissions are required:

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
codeartifact:CreateRepository,
codeartifact:DescribeRepository,
codeartifact:PutRepositoryPermissionsPolicy,
codeartifact:GetRepositoryPermissionsPolicy,
codeartifact:AssociateExternalConnection,
codeartifact:AssociateWithDownstreamRepository,
codeartifact:TagResource,
codeartifact:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
codeartifact:DescribeRepository,
codeartifact:GetRepositoryPermissionsPolicy,
codeartifact:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
codeartifact:PutRepositoryPermissionsPolicy,
codeartifact:GetRepositoryPermissionsPolicy,
codeartifact:DeleteRepositoryPermissionsPolicy,
codeartifact:AssociateExternalConnection,
codeartifact:DisassociateExternalConnection,
codeartifact:UpdateRepository,
codeartifact:DescribeRepository,
codeartifact:AssociateWithDownstreamRepository,
codeartifact:TagResource,
codeartifact:UntagResource,
codeartifact:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
codeartifact:DeleteRepository,
codeartifact:DescribeRepository
```

</TabItem>
<TabItem value="list">

```json
codeartifact:ListRepositories
```

</TabItem>
</Tabs>