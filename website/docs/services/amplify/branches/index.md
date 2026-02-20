---
title: branches
hide_title: false
hide_table_of_contents: false
keywords:
  - branches
  - amplify
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

Creates, updates, deletes or gets a <code>branch</code> resource or lists <code>branches</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>branches</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::Amplify::Branch resource creates a new branch within an app.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.amplify.branches" /></td></tr>
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
    "name": "app_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "basic_auth_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "enable_basic_auth",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "username",
        "type": "string",
        "description": ""
      },
      {
        "name": "password",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "backend",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "stack_arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "branch_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "build_spec",
    "type": "string",
    "description": ""
  },
  {
    "name": "compute_role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "enable_auto_build",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "enable_performance_mode",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "enable_pull_request_preview",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "enable_skew_protection",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "environment_variables",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "name",
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
    "name": "framework",
    "type": "string",
    "description": ""
  },
  {
    "name": "pull_request_environment_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "stage",
    "type": "string",
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
    "name": "arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-branch.html"><code>AWS::Amplify::Branch</code></a>.

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
    <td><code>branches</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AppId, BranchName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>branches</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>branches</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>branches_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>branches</code></td>
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

Gets all properties from an individual <code>branch</code>.
```sql
SELECT
region,
app_id,
arn,
basic_auth_config,
backend,
branch_name,
build_spec,
compute_role_arn,
description,
enable_auto_build,
enable_performance_mode,
enable_pull_request_preview,
enable_skew_protection,
environment_variables,
framework,
pull_request_environment_name,
stage,
tags
FROM awscc.amplify.branches
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>branches</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.amplify.branches_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>branch</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.amplify.branches (
 AppId,
 BranchName,
 region
)
SELECT 
'{{ AppId }}',
 '{{ BranchName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.amplify.branches (
 AppId,
 BasicAuthConfig,
 Backend,
 BranchName,
 BuildSpec,
 ComputeRoleArn,
 Description,
 EnableAutoBuild,
 EnablePerformanceMode,
 EnablePullRequestPreview,
 EnableSkewProtection,
 EnvironmentVariables,
 Framework,
 PullRequestEnvironmentName,
 Stage,
 Tags,
 region
)
SELECT 
 '{{ AppId }}',
 '{{ BasicAuthConfig }}',
 '{{ Backend }}',
 '{{ BranchName }}',
 '{{ BuildSpec }}',
 '{{ ComputeRoleArn }}',
 '{{ Description }}',
 '{{ EnableAutoBuild }}',
 '{{ EnablePerformanceMode }}',
 '{{ EnablePullRequestPreview }}',
 '{{ EnableSkewProtection }}',
 '{{ EnvironmentVariables }}',
 '{{ Framework }}',
 '{{ PullRequestEnvironmentName }}',
 '{{ Stage }}',
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
  - name: branch
    props:
      - name: AppId
        value: '{{ AppId }}'
      - name: BasicAuthConfig
        value:
          EnableBasicAuth: '{{ EnableBasicAuth }}'
          Username: '{{ Username }}'
          Password: '{{ Password }}'
      - name: Backend
        value:
          StackArn: '{{ StackArn }}'
      - name: BranchName
        value: '{{ BranchName }}'
      - name: BuildSpec
        value: '{{ BuildSpec }}'
      - name: ComputeRoleArn
        value: '{{ ComputeRoleArn }}'
      - name: Description
        value: '{{ Description }}'
      - name: EnableAutoBuild
        value: '{{ EnableAutoBuild }}'
      - name: EnablePerformanceMode
        value: '{{ EnablePerformanceMode }}'
      - name: EnablePullRequestPreview
        value: '{{ EnablePullRequestPreview }}'
      - name: EnableSkewProtection
        value: '{{ EnableSkewProtection }}'
      - name: EnvironmentVariables
        value:
          - Name: '{{ Name }}'
            Value: '{{ Value }}'
      - name: Framework
        value: '{{ Framework }}'
      - name: PullRequestEnvironmentName
        value: '{{ PullRequestEnvironmentName }}'
      - name: Stage
        value: '{{ Stage }}'
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
UPDATE awscc.amplify.branches
SET PatchDocument = string('{{ {
    "BasicAuthConfig": basic_auth_config,
    "Backend": backend,
    "BuildSpec": build_spec,
    "ComputeRoleArn": compute_role_arn,
    "Description": description,
    "EnableAutoBuild": enable_auto_build,
    "EnablePerformanceMode": enable_performance_mode,
    "EnablePullRequestPreview": enable_pull_request_preview,
    "EnableSkewProtection": enable_skew_protection,
    "EnvironmentVariables": environment_variables,
    "Framework": framework,
    "PullRequestEnvironmentName": pull_request_environment_name,
    "Stage": stage,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.amplify.branches
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>branches</code> resource, the following permissions are required:

### Create
```json
amplify:GetBranch,
amplify:CreateBranch,
amplify:TagResource,
codecommit:GetRepository,
codecommit:PutRepositoryTriggers,
codecommit:GetRepositoryTriggers,
s3:GetObject,
s3:GetObjectAcl,
s3:PutObject,
s3:PutObjectAcl,
sns:CreateTopic,
sns:Subscribe,
iam:PassRole
```

### Delete
```json
amplify:GetBranch,
amplify:DeleteBranch,
codecommit:GetRepository,
codecommit:GetRepositoryTriggers,
sns:Unsubscribe,
iam:PassRole
```

### List
```json
amplify:GetBranch,
amplify:ListBranches,
amplify:ListTagsForResource,
iam:PassRole
```

### Read
```json
amplify:GetBranch,
amplify:ListTagsForResource,
codecommit:GetRepository,
codecommit:GetRepositoryTriggers,
s3:GetObject,
s3:GetObjectAcl,
iam:PassRole
```

### Update
```json
amplify:GetBranch,
amplify:UpdateBranch,
amplify:ListTagsForResource,
amplify:TagResource,
amplify:UntagResource,
codecommit:GetRepository,
codecommit:PutRepositoryTriggers,
codecommit:GetRepositoryTriggers,
s3:GetObject,
s3:GetObjectAcl,
s3:PutObject,
s3:PutObjectAcl,
sns:CreateTopic,
sns:Subscribe,
sns:Unsubscribe,
iam:PassRole
```
