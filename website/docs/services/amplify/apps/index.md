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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html"><code>AWS::Amplify::App</code></a>.

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
    <td><code>apps</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>apps</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>apps</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>apps_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>apps</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>apps</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.amplify.apps_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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
'{{ name }}',
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
 '{{ access_token }}',
 '{{ auto_branch_creation_config }}',
 '{{ basic_auth_config }}',
 '{{ build_spec }}',
 '{{ cache_config }}',
 '{{ compute_role_arn }}',
 '{{ custom_headers }}',
 '{{ custom_rules }}',
 '{{ description }}',
 '{{ enable_branch_auto_deletion }}',
 '{{ environment_variables }}',
 '{{ iam_service_role }}',
 '{{ name }}',
 '{{ oauth_token }}',
 '{{ platform }}',
 '{{ repository }}',
 '{{ tags }}',
 '{{ job_config }}',
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
      - name: access_token
        value: '{{ access_token }}'
      - name: auto_branch_creation_config
        value:
          auto_branch_creation_patterns:
            - '{{ auto_branch_creation_patterns[0] }}'
          basic_auth_config:
            enable_basic_auth: '{{ enable_basic_auth }}'
            username: '{{ username }}'
            password: '{{ password }}'
          build_spec: '{{ build_spec }}'
          enable_auto_branch_creation: '{{ enable_auto_branch_creation }}'
          enable_auto_build: '{{ enable_auto_build }}'
          enable_performance_mode: '{{ enable_performance_mode }}'
          enable_pull_request_preview: '{{ enable_pull_request_preview }}'
          environment_variables:
            - name: '{{ name }}'
              value: '{{ value }}'
          framework: '{{ framework }}'
          pull_request_environment_name: '{{ pull_request_environment_name }}'
          stage: '{{ stage }}'
      - name: basic_auth_config
        value: null
      - name: build_spec
        value: '{{ build_spec }}'
      - name: cache_config
        value:
          type: '{{ type }}'
      - name: compute_role_arn
        value: '{{ compute_role_arn }}'
      - name: custom_headers
        value: '{{ custom_headers }}'
      - name: custom_rules
        value:
          - condition: '{{ condition }}'
            status: '{{ status }}'
            target: '{{ target }}'
            source: '{{ source }}'
      - name: description
        value: '{{ description }}'
      - name: enable_branch_auto_deletion
        value: '{{ enable_branch_auto_deletion }}'
      - name: environment_variables
        value:
          - null
      - name: iam_service_role
        value: '{{ iam_service_role }}'
      - name: name
        value: '{{ name }}'
      - name: oauth_token
        value: '{{ oauth_token }}'
      - name: platform
        value: '{{ platform }}'
      - name: repository
        value: '{{ repository }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: job_config
        value:
          build_compute_type: '{{ build_compute_type }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>app</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.amplify.apps
SET PatchDocument = string('{{ {
    "AccessToken": access_token,
    "AutoBranchCreationConfig": auto_branch_creation_config,
    "BasicAuthConfig": basic_auth_config,
    "BuildSpec": build_spec,
    "CacheConfig": cache_config,
    "ComputeRoleArn": compute_role_arn,
    "CustomHeaders": custom_headers,
    "CustomRules": custom_rules,
    "Description": description,
    "EnableBranchAutoDeletion": enable_branch_auto_deletion,
    "EnvironmentVariables": environment_variables,
    "IAMServiceRole": iam_service_role,
    "Name": name,
    "OauthToken": oauth_token,
    "Platform": platform,
    "Repository": repository,
    "Tags": tags,
    "JobConfig": job_config
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.amplify.apps
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>apps</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

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

</TabItem>
<TabItem value="delete">

```json
amplify:GetApp,
amplify:DeleteApp,
codecommit:GetRepository,
codecommit:GetRepositoryTriggers,
codecommit:PutRepositoryTriggers,
sns:Unsubscribe,
iam:PassRole
```

</TabItem>
<TabItem value="list">

```json
amplify:GetApp,
amplify:ListApps,
amplify:ListTagsForResource,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
amplify:GetApp,
amplify:ListTagsForResource,
codecommit:GetRepository,
codecommit:GetRepositoryTriggers,
iam:PassRole
```

</TabItem>
<TabItem value="update">

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

</TabItem>
</Tabs>