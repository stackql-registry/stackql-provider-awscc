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

Creates, updates, deletes or gets a <code>public_repository</code> resource or lists <code>public_repositories</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>public_repositories</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The <code>AWS::ECR::PublicRepository</code> resource specifies an Amazon Elastic Container Registry Public (Amazon ECR Public) repository, where users can push and pull Docker images, Open Container Initiative (OCI) images, and OCI compatible artifacts. For more information, see &#91;Amazon ECR public repositories&#93;(https://docs.aws.amazon.com/AmazonECR/latest/public/public-repositories.html) in the ASTERIX;Amazon ECR Public User GuideASTERIX;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ecr.public_repositories" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="repository_name" /></td><td><code>string</code></td><td>The name to use for the public repository. The repository name may be specified on its own (such as <code>nginx-web-app</code>) or it can be prepended with a namespace to group the repository into a category (such as <code>project-a/nginx-web-app</code>). If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the repository name. For more information, see &#91;Name Type&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).<br />If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.</td></tr>
<tr><td><CopyableCode code="repository_policy_text" /></td><td><code>object</code></td><td>The JSON repository policy text to apply to the public repository. For more information, see &#91;Amazon ECR Public repository policies&#93;(https://docs.aws.amazon.com/AmazonECR/latest/public/public-repository-policies.html) in the ASTERIX;Amazon ECR Public User GuideASTERIX;.</td></tr>
<tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="repository_catalog_data" /></td><td><code>object</code></td><td>The details about the repository that are publicly visible in the Amazon ECR Public Gallery. For more information, see &#91;Amazon ECR Public repository catalog data&#93;(https://docs.aws.amazon.com/AmazonECR/latest/public/public-repository-catalog-data.html) in the ASTERIX;Amazon ECR Public User GuideASTERIX;.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-publicrepository.html"><code>AWS::ECR::PublicRepository</code></a>.

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
    <td><CopyableCode code="region" /></td>
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
Gets all <code>public_repositories</code> in a region.
```sql
SELECT
region,
repository_name,
repository_policy_text,
arn,
repository_catalog_data,
tags
FROM awscc.ecr.public_repositories
WHERE region = 'us-east-1';
```
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
WHERE region = 'us-east-1' AND data__Identifier = '<RepositoryName>';
```

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

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ecr.public_repositories
WHERE data__Identifier = '<RepositoryName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>public_repositories</code> resource, the following permissions are required:

### Create
```json
ecr-public:CreateRepository,
ecr-public:SetRepositoryPolicy,
ecr-public:PutRepositoryCatalogData,
ecr-public:TagResource
```

### Read
```json
ecr-public:DescribeRepositories,
ecr-public:GetRepositoryPolicy,
ecr-public:GetRepositoryCatalogData,
ecr-public:ListTagsForResource
```

### Update
```json
ecr-public:DescribeRepositories,
ecr-public:SetRepositoryPolicy,
ecr-public:DeleteRepositoryPolicy,
ecr-public:PutRepositoryCatalogData,
ecr-public:TagResource,
ecr-public:UntagResource
```

### Delete
```json
ecr-public:DeleteRepository
```

### List
```json
ecr-public:DescribeRepositories
```
