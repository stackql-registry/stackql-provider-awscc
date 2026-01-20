---
title: repository_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - repository_associations
  - codegurureviewer
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

Creates, updates, deletes or gets a <code>repository_association</code> resource or lists <code>repository_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>repository_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>This resource schema represents the RepositoryAssociation resource in the Amazon CodeGuru Reviewer service.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.codegurureviewer.repository_associations" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "Name of the repository to be associated."
  },
  {
    "name": "type",
    "type": "string",
    "description": "The type of repository to be associated."
  },
  {
    "name": "owner",
    "type": "string",
    "description": "The owner of the repository. For a Bitbucket repository, this is the username for the account that owns the repository."
  },
  {
    "name": "bucket_name",
    "type": "string",
    "description": "The name of the S3 bucket associated with an associated S3 repository. It must start with &#96;codeguru-reviewer-&#96;."
  },
  {
    "name": "connection_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection."
  },
  {
    "name": "association_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the repository association."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags associated with a repository association.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . &#95; : / @."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . &#95; : / @."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codegurureviewer-repositoryassociation.html"><code>AWS::CodeGuruReviewer::RepositoryAssociation</code></a>.

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
    <td><CopyableCode code="Name, Type, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>repository_association</code>.
```sql
SELECT
region,
name,
type,
owner,
bucket_name,
connection_arn,
association_arn,
tags
FROM awscc.codegurureviewer.repository_associations
WHERE region = 'us-east-1' AND data__Identifier = '<AssociationArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>repository_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.codegurureviewer.repository_associations (
 Name,
 Type,
 region
)
SELECT 
'{{ Name }}',
 '{{ Type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.codegurureviewer.repository_associations (
 Name,
 Type,
 Owner,
 BucketName,
 ConnectionArn,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Type }}',
 '{{ Owner }}',
 '{{ BucketName }}',
 '{{ ConnectionArn }}',
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
  - name: repository_association
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Type
        value: '{{ Type }}'
      - name: Owner
        value: '{{ Owner }}'
      - name: BucketName
        value: '{{ BucketName }}'
      - name: ConnectionArn
        value: '{{ ConnectionArn }}'
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
DELETE FROM awscc.codegurureviewer.repository_associations
WHERE data__Identifier = '<AssociationArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>repository_associations</code> resource, the following permissions are required:

### Create
```json
codeguru-reviewer:DescribeRepositoryAssociation,
codeguru-reviewer:AssociateRepository,
codeguru-reviewer:TagResource,
iam:CreateServiceLinkedRole,
codecommit:TagResource,
codecommit:GitPull,
codecommit:TagResource,
events:PutRule,
events:PutTargets,
codestar-connections:ListBranches,
codestar-connections:ListRepositories,
codestar-connections:ListTagsForResource,
codestar-connections:PassConnection,
codestar-connections:TagResource,
codestar-connections:UseConnection,
s3:ListBucket
```

### Read
```json
codeguru-reviewer:DescribeRepositoryAssociation,
codeguru-reviewer:ListTagsForResource
```

### Delete
```json
codeguru-reviewer:DescribeRepositoryAssociation,
codeguru-reviewer:DisassociateRepository,
codecommit:UntagResource,
events:DeleteRule,
events:RemoveTargets,
codestar-connections:UntagResource,
codestar-connections:ListTagsForResource
```

### List
```json
codeguru-reviewer:ListRepositoryAssociations
```
