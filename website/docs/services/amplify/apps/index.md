---
title: apps
hide_title: false
hide_table_of_contents: false
keywords:
  - apps
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

Creates, updates, deletes or gets an <code>app</code> resource or lists <code>apps</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>apps</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::Amplify::App resource creates Apps in the Amplify Console. An App is a collection of branches.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.amplify.apps" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "access_token",
    "type": "string",
    "description": ""
  },
  {
    "name": "app_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "app_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "auto_branch_creation_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "auto_branch_creation_patterns",
        "type": "array",
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
        "name": "build_spec",
        "type": "string",
        "description": ""
      },
      {
        "name": "enable_auto_branch_creation",
        "type": "boolean",
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
      }
    ]
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
    "name": "build_spec",
    "type": "string",
    "description": ""
  },
  {
    "name": "cache_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "compute_role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "custom_headers",
    "type": "string",
    "description": ""
  },
  {
    "name": "custom_rules",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "condition",
        "type": "string",
        "description": ""
      },
      {
        "name": "status",
        "type": "string",
        "description": ""
      },
      {
        "name": "target",
        "type": "string",
        "description": ""
      },
      {
        "name": "source",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "default_domain",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "enable_branch_auto_deletion",
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
    "name": "iam_service_role",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "oauth_token",
    "type": "string",
    "description": ""
  },
  {
    "name": "platform",
    "type": "string",
    "description": ""
  },
  {
    "name": "repository",
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
    "name": "job_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "build_compute_type",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html"><code>AWS::Amplify::App</code></a>.

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
    <td><CopyableCode code="Name, region" /></td>
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

Gets all properties from an individual <code>app</code>.
```sql
SELECT
region,
access_token,
app_id,
app_name,
arn,
auto_branch_creation_config,
basic_auth_config,
build_spec,
cache_config,
compute_role_arn,
custom_headers,
custom_rules,
default_domain,
description,
enable_branch_auto_deletion,
environment_variables,
iam_service_role,
name,
oauth_token,
platform,
repository,
tags,
job_config
FROM awscc.amplify.apps
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>app</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.amplify.apps (
 Name,
 region
)
SELECT 
'{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.amplify.apps (
 AccessToken,
 AutoBranchCreationConfig,
 BasicAuthConfig,
 BuildSpec,
 CacheConfig,
 ComputeRoleArn,
 CustomHeaders,
 CustomRules,
 Description,
 EnableBranchAutoDeletion,
 EnvironmentVariables,
 IAMServiceRole,
 Name,
 OauthToken,
 Platform,
 Repository,
 Tags,
 JobConfig,
 region
)
SELECT 
 '{{ AccessToken }}',
 '{{ AutoBranchCreationConfig }}',
 '{{ BasicAuthConfig }}',
 '{{ BuildSpec }}',
 '{{ CacheConfig }}',
 '{{ ComputeRoleArn }}',
 '{{ CustomHeaders }}',
 '{{ CustomRules }}',
 '{{ Description }}',
 '{{ EnableBranchAutoDeletion }}',
 '{{ EnvironmentVariables }}',
 '{{ IAMServiceRole }}',
 '{{ Name }}',
 '{{ OauthToken }}',
 '{{ Platform }}',
 '{{ Repository }}',
 '{{ Tags }}',
 '{{ JobConfig }}',
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
  - name: app
    props:
      - name: AccessToken
        value: '{{ AccessToken }}'
      - name: AutoBranchCreationConfig
        value:
          AutoBranchCreationPatterns:
            - '{{ AutoBranchCreationPatterns[0] }}'
          BasicAuthConfig:
            EnableBasicAuth: '{{ EnableBasicAuth }}'
            Username: '{{ Username }}'
            Password: '{{ Password }}'
          BuildSpec: '{{ BuildSpec }}'
          EnableAutoBranchCreation: '{{ EnableAutoBranchCreation }}'
          EnableAutoBuild: '{{ EnableAutoBuild }}'
          EnablePerformanceMode: '{{ EnablePerformanceMode }}'
          EnablePullRequestPreview: '{{ EnablePullRequestPreview }}'
          EnvironmentVariables:
            - Name: '{{ Name }}'
              Value: '{{ Value }}'
          Framework: '{{ Framework }}'
          PullRequestEnvironmentName: '{{ PullRequestEnvironmentName }}'
          Stage: '{{ Stage }}'
      - name: BasicAuthConfig
        value: null
      - name: BuildSpec
        value: '{{ BuildSpec }}'
      - name: CacheConfig
        value:
          Type: '{{ Type }}'
      - name: ComputeRoleArn
        value: '{{ ComputeRoleArn }}'
      - name: CustomHeaders
        value: '{{ CustomHeaders }}'
      - name: CustomRules
        value:
          - Condition: '{{ Condition }}'
            Status: '{{ Status }}'
            Target: '{{ Target }}'
            Source: '{{ Source }}'
      - name: Description
        value: '{{ Description }}'
      - name: EnableBranchAutoDeletion
        value: '{{ EnableBranchAutoDeletion }}'
      - name: EnvironmentVariables
        value:
          - null
      - name: IAMServiceRole
        value: '{{ IAMServiceRole }}'
      - name: Name
        value: '{{ Name }}'
      - name: OauthToken
        value: '{{ OauthToken }}'
      - name: Platform
        value: '{{ Platform }}'
      - name: Repository
        value: '{{ Repository }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: JobConfig
        value:
          BuildComputeType: '{{ BuildComputeType }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.amplify.apps
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>apps</code> resource, the following permissions are required:

### Create
```json
amplify:GetApp,
amplify:CreateApp,
amplify:TagResource,
codecommit:GetRepository,
codecommit:PutRepositoryTriggers,
codecommit:GetRepositoryTriggers,
sns:CreateTopic,
sns:Subscribe,
iam:PassRole
```

### Delete
```json
amplify:GetApp,
amplify:DeleteApp,
codecommit:GetRepository,
codecommit:GetRepositoryTriggers,
codecommit:PutRepositoryTriggers,
sns:Unsubscribe,
iam:PassRole
```

### List
```json
amplify:GetApp,
amplify:ListApps,
amplify:ListTagsForResource,
iam:PassRole
```

### Read
```json
amplify:GetApp,
amplify:ListTagsForResource,
codecommit:GetRepository,
codecommit:GetRepositoryTriggers,
iam:PassRole
```

### Update
```json
amplify:GetApp,
amplify:UpdateApp,
amplify:ListTagsForResource,
amplify:TagResource,
amplify:UntagResource,
codecommit:GetRepository,
codecommit:PutRepositoryTriggers,
codecommit:GetRepositoryTriggers,
sns:CreateTopic,
sns:Subscribe,
sns:Unsubscribe,
iam:PassRole
```
