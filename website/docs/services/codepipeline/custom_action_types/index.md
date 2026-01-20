---
title: custom_action_types
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_action_types
  - codepipeline
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

Creates, updates, deletes or gets a <code>custom_action_type</code> resource or lists <code>custom_action_types</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>custom_action_types</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::CodePipeline::CustomActionType resource creates a custom action for activities that aren't included in the CodePipeline default actions, such as running an internally developed build process or a test suite. You can use these custom actions in the stage of a pipeline.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.codepipeline.custom_action_types" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "category",
    "type": "string",
    "description": "The category of the custom action, such as a build action or a test action."
  },
  {
    "name": "configuration_properties",
    "type": "array",
    "description": "The configuration properties for the custom action.",
    "children": [
      {
        "name": "description",
        "type": "string",
        "description": "The description of the action configuration property that is displayed to users."
      },
      {
        "name": "key",
        "type": "boolean",
        "description": "Whether the configuration property is a key."
      },
      {
        "name": "name",
        "type": "string",
        "description": "The name of the action configuration property."
      },
      {
        "name": "queryable",
        "type": "boolean",
        "description": "Indicates that the property is used with PollForJobs. When creating a custom action, an action can have up to one queryable property. If it has one, that property must be both required and not secret.If you create a pipeline with a custom action type, and that custom action contains a queryable property, the value for that configuration property is subject to other restrictions. The value must be less than or equal to twenty (20) characters. The value can contain only alphanumeric characters, underscores, and hyphens."
      },
      {
        "name": "required",
        "type": "boolean",
        "description": "Whether the configuration property is a required value."
      },
      {
        "name": "secret",
        "type": "boolean",
        "description": "Whether the configuration property is secret. Secrets are hidden from all calls except for GetJobDetails, GetThirdPartyJobDetails, PollForJobs, and PollForThirdPartyJobs."
      },
      {
        "name": "type",
        "type": "string",
        "description": "The type of the configuration property."
      }
    ]
  },
  {
    "name": "input_artifact_details",
    "type": "object",
    "description": "The details of the input artifact for the action, such as its commit ID.",
    "children": [
      {
        "name": "maximum_count",
        "type": "integer",
        "description": "The maximum number of artifacts allowed for the action type."
      },
      {
        "name": "minimum_count",
        "type": "integer",
        "description": "The minimum number of artifacts allowed for the action type."
      }
    ]
  },
  {
    "name": "provider",
    "type": "string",
    "description": "The provider of the service used in the custom action, such as AWS CodeDeploy."
  },
  {
    "name": "settings",
    "type": "object",
    "description": "URLs that provide users information about this custom action.",
    "children": [
      {
        "name": "entity_url_template",
        "type": "string",
        "description": "The URL returned to the AWS CodePipeline console that provides a deep link to the resources of the external system, such as the configuration page for an AWS CodeDeploy deployment group. This link is provided as part of the action display in the pipeline."
      },
      {
        "name": "execution_url_template",
        "type": "string",
        "description": "The URL returned to the AWS CodePipeline console that contains a link to the top-level landing page for the external system, such as the console page for AWS CodeDeploy. This link is shown on the pipeline view page in the AWS CodePipeline console and provides a link to the execution entity of the external action."
      },
      {
        "name": "revision_url_template",
        "type": "string",
        "description": "The URL returned to the AWS CodePipeline console that contains a link to the page where customers can update or change the configuration of the external action."
      },
      {
        "name": "third_party_configuration_url",
        "type": "string",
        "description": "The URL of a sign-up page where users can sign up for an external service and perform initial configuration of the action provided by that service."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Any tags assigned to the custom action.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The tag's value."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The tag's key."
      }
    ]
  },
  {
    "name": "version",
    "type": "string",
    "description": "The version identifier of the custom action."
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-customactiontype.html"><code>AWS::CodePipeline::CustomActionType</code></a>.

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
    <td><CopyableCode code="Category, InputArtifactDetails, OutputArtifactDetails, Provider, Version, region" /></td>
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

Gets all properties from an individual <code>custom_action_type</code>.
```sql
SELECT
region,
category,
configuration_properties,
input_artifact_details,
output_artifact_details,
provider,
settings,
tags,
version,
id
FROM awscc.codepipeline.custom_action_types
WHERE region = 'us-east-1' AND data__Identifier = '<Category>|<Provider>|<Version>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>custom_action_type</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.codepipeline.custom_action_types (
 Category,
 InputArtifactDetails,
 OutputArtifactDetails,
 Provider,
 Version,
 region
)
SELECT 
'{{ Category }}',
 '{{ InputArtifactDetails }}',
 '{{ OutputArtifactDetails }}',
 '{{ Provider }}',
 '{{ Version }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.codepipeline.custom_action_types (
 Category,
 ConfigurationProperties,
 InputArtifactDetails,
 OutputArtifactDetails,
 Provider,
 Settings,
 Tags,
 Version,
 region
)
SELECT 
 '{{ Category }}',
 '{{ ConfigurationProperties }}',
 '{{ InputArtifactDetails }}',
 '{{ OutputArtifactDetails }}',
 '{{ Provider }}',
 '{{ Settings }}',
 '{{ Tags }}',
 '{{ Version }}',
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
  - name: custom_action_type
    props:
      - name: Category
        value: '{{ Category }}'
      - name: ConfigurationProperties
        value:
          - Description: '{{ Description }}'
            Key: '{{ Key }}'
            Name: '{{ Name }}'
            Queryable: '{{ Queryable }}'
            Required: '{{ Required }}'
            Secret: '{{ Secret }}'
            Type: '{{ Type }}'
      - name: InputArtifactDetails
        value:
          MaximumCount: '{{ MaximumCount }}'
          MinimumCount: '{{ MinimumCount }}'
      - name: OutputArtifactDetails
        value: null
      - name: Provider
        value: '{{ Provider }}'
      - name: Settings
        value:
          EntityUrlTemplate: '{{ EntityUrlTemplate }}'
          ExecutionUrlTemplate: '{{ ExecutionUrlTemplate }}'
          RevisionUrlTemplate: '{{ RevisionUrlTemplate }}'
          ThirdPartyConfigurationUrl: '{{ ThirdPartyConfigurationUrl }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: Version
        value: '{{ Version }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.codepipeline.custom_action_types
WHERE data__Identifier = '<Category|Provider|Version>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>custom_action_types</code> resource, the following permissions are required:

### Create
```json
codepipeline:CreateCustomActionType,
codepipeline:TagResource,
codepipeline:ListActionTypes
```

### Read
```json
codepipeline:ListActionTypes,
codepipeline:ListTagsForResource
```

### Update
```json
codepipeline:ListActionTypes,
codepipeline:TagResource,
codepipeline:UntagResource
```

### Delete
```json
codepipeline:DeleteCustomActionType,
codepipeline:ListActionTypes
```

### List
```json
codepipeline:ListActionTypes
```
