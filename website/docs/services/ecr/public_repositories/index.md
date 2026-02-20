---
title: public_repositories
hide_title: false
hide_table_of_contents: false
keywords:
  - public_repositories
  - ecr
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

Creates, updates, deletes or gets a <code>public_repository</code> resource or lists <code>public_repositories</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>public_repositories</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ECR::PublicRepository&#96;&#96; resource specifies an Amazon Elastic Container Registry Public (Amazon ECR Public) repository, where users can push and pull Docker images, Open Container Initiative (OCI) images, and OCI compatible artifacts. For more information, see &#91;Amazon ECR public repositories&#93;(https://docs.aws.amazon.com/AmazonECR/latest/public/public-repositories.html) in the &#42;Amazon ECR Public User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ecr.public_repositories" /></td></tr>
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
    "description": "The name to use for the public repository. The repository name may be specified on its own (such as &#96;&#96;nginx-web-app&#96;&#96;) or it can be prepended with a namespace to group the repository into a category (such as &#96;&#96;project-a/nginx-web-app&#96;&#96;). If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the repository name. For more information, see &#91;Name Type&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).<br />If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name."
  },
  {
    "name": "repository_policy_text",
    "type": "object",
    "description": "The JSON repository policy text to apply to the public repository. For more information, see &#91;Amazon ECR Public repository policies&#93;(https://docs.aws.amazon.com/AmazonECR/latest/public/public-repository-policies.html) in the &#42;Amazon ECR Public User Guide&#42;."
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "repository_catalog_data",
    "type": "object",
    "description": "The details about the repository that are publicly visible in the Amazon ECR Public Gallery. For more information, see &#91;Amazon ECR Public repository catalog data&#93;(https://docs.aws.amazon.com/AmazonECR/latest/public/public-repository-catalog-data.html) in the &#42;Amazon ECR Public User Guide&#42;.",
    "children": [
      {
        "name": "repository_description",
        "type": "string",
        "description": "The description of the public repository."
      },
      {
        "name": "architectures",
        "type": "array",
        "description": "Select the system architectures that the images in your repository are compatible with."
      },
      {
        "name": "operating_systems",
        "type": "array",
        "description": "Select the operating systems that the images in your repository are compatible with."
      },
      {
        "name": "about_text",
        "type": "string",
        "description": "Provide a detailed description of the repository. Identify what is included in the repository, any licensing details, or other relevant information."
      },
      {
        "name": "usage_text",
        "type": "string",
        "description": "Provide detailed information about how to use the images in the repository. This provides context, support information, and additional usage details for users of the repository."
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
        "description": "One part of a key-value pair that make up a tag. A &#96;&#96;key&#96;&#96; is a general label that acts like a category for more specific tag values."
      },
      {
        "name": "value",
        "type": "string",
        "description": "A &#96;&#96;value&#96;&#96; acts as a descriptor within a tag category (key)."
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
    "name": "repository_name",
    "type": "string",
    "description": "The name to use for the public repository. The repository name may be specified on its own (such as &#96;&#96;nginx-web-app&#96;&#96;) or it can be prepended with a namespace to group the repository into a category (such as &#96;&#96;project-a/nginx-web-app&#96;&#96;). If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the repository name. For more information, see &#91;Name Type&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).<br />If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-publicrepository.html"><code>AWS::ECR::PublicRepository</code></a>.

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
    <td><code>public_repositories</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>public_repositories</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>public_repositories</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>public_repositories_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>public_repositories</code></td>
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

Gets all properties from an individual <code>public_repository</code>.
```sql
SELECT
region,
repository_name,
repository_policy_text,
arn,
repository_catalog_data,
tags
FROM awscc.ecr.public_repositories
WHERE region = 'us-east-1' AND Identifier = '<RepositoryName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>public_repositories</code> in a region.
```sql
SELECT
region,
repository_name
FROM awscc.ecr.public_repositories_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>public_repository</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ecr.public_repositories (
 RepositoryName,
 RepositoryPolicyText,
 RepositoryCatalogData,
 Tags,
 region
)
SELECT 
'{{ RepositoryName }}',
 '{{ RepositoryPolicyText }}',
 '{{ RepositoryCatalogData }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ecr.public_repositories (
 RepositoryName,
 RepositoryPolicyText,
 RepositoryCatalogData,
 Tags,
 region
)
SELECT 
 '{{ RepositoryName }}',
 '{{ RepositoryPolicyText }}',
 '{{ RepositoryCatalogData }}',
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
  - name: public_repository
    props:
      - name: RepositoryName
        value: '{{ RepositoryName }}'
      - name: RepositoryPolicyText
        value: {}
      - name: RepositoryCatalogData
        value:
          RepositoryDescription: '{{ RepositoryDescription }}'
          Architectures:
            - '{{ Architectures[0] }}'
          OperatingSystems:
            - '{{ OperatingSystems[0] }}'
          AboutText: '{{ AboutText }}'
          UsageText: '{{ UsageText }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>public_repository</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ecr.public_repositories
SET PatchDocument = string('{{ {
    "RepositoryPolicyText": repository_policy_text,
    "RepositoryCatalogData": repository_catalog_data,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<RepositoryName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ecr.public_repositories
WHERE Identifier = '<RepositoryName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>public_repositories</code> resource, the following permissions are required:

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
ecr-public:CreateRepository,
ecr-public:SetRepositoryPolicy,
ecr-public:PutRepositoryCatalogData,
ecr-public:TagResource
```

</TabItem>
<TabItem value="read">

```json
ecr-public:DescribeRepositories,
ecr-public:GetRepositoryPolicy,
ecr-public:GetRepositoryCatalogData,
ecr-public:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
ecr-public:DescribeRepositories,
ecr-public:SetRepositoryPolicy,
ecr-public:DeleteRepositoryPolicy,
ecr-public:PutRepositoryCatalogData,
ecr-public:TagResource,
ecr-public:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
ecr-public:DeleteRepository
```

</TabItem>
<TabItem value="list">

```json
ecr-public:DescribeRepositories
```

</TabItem>
</Tabs>