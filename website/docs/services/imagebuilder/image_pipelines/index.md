---
title: image_pipelines
hide_title: false
hide_table_of_contents: false
keywords:
  - image_pipelines
  - imagebuilder
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

Creates, updates, deletes or gets an <code>image_pipeline</code> resource or lists <code>image_pipelines</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>image_pipelines</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::ImageBuilder::ImagePipeline</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.imagebuilder.image_pipelines" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the image pipeline."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the image pipeline."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the image pipeline."
  },
  {
    "name": "image_tests_configuration",
    "type": "object",
    "description": "The image tests configuration of the image pipeline.",
    "children": [
      {
        "name": "image_tests_enabled",
        "type": "boolean",
        "description": "Defines if tests should be executed when building this image."
      },
      {
        "name": "timeout_minutes",
        "type": "integer",
        "description": "The maximum time in minutes that tests are permitted to run."
      }
    ]
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the image pipeline."
  },
  {
    "name": "schedule",
    "type": "object",
    "description": "The schedule of the image pipeline.",
    "children": [
      {
        "name": "schedule_expression",
        "type": "string",
        "description": "The expression determines how often EC2 Image Builder evaluates your pipelineExecutionStartCondition."
      },
      {
        "name": "pipeline_execution_start_condition",
        "type": "string",
        "description": "The condition configures when the pipeline should trigger a new image build."
      }
    ]
  },
  {
    "name": "image_recipe_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed."
  },
  {
    "name": "container_recipe_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested."
  },
  {
    "name": "distribution_configuration_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the distribution configuration associated with this image pipeline."
  },
  {
    "name": "infrastructure_configuration_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the infrastructure configuration associated with this image pipeline."
  },
  {
    "name": "workflows",
    "type": "array",
    "description": "Workflows to define the image build process",
    "children": [
      {
        "name": "workflow_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the workflow"
      },
      {
        "name": "parameters",
        "type": "array",
        "description": "The parameters associated with the workflow",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": ""
          },
          {
            "name": "value",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "parallel_group",
        "type": "string",
        "description": "The parallel group name"
      },
      {
        "name": "on_failure",
        "type": "string",
        "description": "Define execution decision in case of workflow failure"
      }
    ]
  },
  {
    "name": "enhanced_image_metadata_enabled",
    "type": "boolean",
    "description": "Collects additional information about the image being created, including the operating system (OS) version and package list."
  },
  {
    "name": "image_scanning_configuration",
    "type": "object",
    "description": "Contains settings for vulnerability scans.",
    "children": [
      {
        "name": "ecr_configuration",
        "type": "object",
        "description": "Contains ECR settings for vulnerability scans.",
        "children": [
          {
            "name": "container_tags",
            "type": "array",
            "description": "Tags for Image Builder to apply the output container image that is scanned. Tags can help you identify and manage your scanned images."
          },
          {
            "name": "repository_name",
            "type": "string",
            "description": "The name of the container repository that Amazon Inspector scans to identify findings for your container images. The name includes the path for the repository location. If you don't provide this information, Image Builder creates a repository in your account named image-builder-image-scanning-repository to use for vulnerability scans for your output container images."
          }
        ]
      },
      {
        "name": "image_scanning_enabled",
        "type": "boolean",
        "description": "This sets whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image."
      }
    ]
  },
  {
    "name": "execution_role",
    "type": "string",
    "description": "The execution role name/ARN for the image build, if provided"
  },
  {
    "name": "tags",
    "type": "object",
    "description": "The tags of this image pipeline."
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
    "description": "The Amazon Resource Name (ARN) of the image pipeline."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html"><code>AWS::ImageBuilder::ImagePipeline</code></a>.

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
    <td><code>image_pipelines</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>image_pipelines</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>image_pipelines</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>image_pipelines_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>image_pipelines</code></td>
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

Gets all properties from an individual <code>image_pipeline</code>.
```sql
SELECT
region,
arn,
name,
description,
image_tests_configuration,
status,
schedule,
image_recipe_arn,
container_recipe_arn,
distribution_configuration_arn,
infrastructure_configuration_arn,
workflows,
enhanced_image_metadata_enabled,
image_scanning_configuration,
execution_role,
tags
FROM awscc.imagebuilder.image_pipelines
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>image_pipelines</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.imagebuilder.image_pipelines_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>image_pipeline</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.imagebuilder.image_pipelines (
 Name,
 Description,
 ImageTestsConfiguration,
 Status,
 Schedule,
 ImageRecipeArn,
 ContainerRecipeArn,
 DistributionConfigurationArn,
 InfrastructureConfigurationArn,
 Workflows,
 EnhancedImageMetadataEnabled,
 ImageScanningConfiguration,
 ExecutionRole,
 Tags,
 region
)
SELECT 
'{{ Name }}',
 '{{ Description }}',
 '{{ ImageTestsConfiguration }}',
 '{{ Status }}',
 '{{ Schedule }}',
 '{{ ImageRecipeArn }}',
 '{{ ContainerRecipeArn }}',
 '{{ DistributionConfigurationArn }}',
 '{{ InfrastructureConfigurationArn }}',
 '{{ Workflows }}',
 '{{ EnhancedImageMetadataEnabled }}',
 '{{ ImageScanningConfiguration }}',
 '{{ ExecutionRole }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.imagebuilder.image_pipelines (
 Name,
 Description,
 ImageTestsConfiguration,
 Status,
 Schedule,
 ImageRecipeArn,
 ContainerRecipeArn,
 DistributionConfigurationArn,
 InfrastructureConfigurationArn,
 Workflows,
 EnhancedImageMetadataEnabled,
 ImageScanningConfiguration,
 ExecutionRole,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ ImageTestsConfiguration }}',
 '{{ Status }}',
 '{{ Schedule }}',
 '{{ ImageRecipeArn }}',
 '{{ ContainerRecipeArn }}',
 '{{ DistributionConfigurationArn }}',
 '{{ InfrastructureConfigurationArn }}',
 '{{ Workflows }}',
 '{{ EnhancedImageMetadataEnabled }}',
 '{{ ImageScanningConfiguration }}',
 '{{ ExecutionRole }}',
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
  - name: image_pipeline
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: ImageTestsConfiguration
        value:
          ImageTestsEnabled: '{{ ImageTestsEnabled }}'
          TimeoutMinutes: '{{ TimeoutMinutes }}'
      - name: Status
        value: '{{ Status }}'
      - name: Schedule
        value:
          ScheduleExpression: '{{ ScheduleExpression }}'
          PipelineExecutionStartCondition: '{{ PipelineExecutionStartCondition }}'
      - name: ImageRecipeArn
        value: '{{ ImageRecipeArn }}'
      - name: ContainerRecipeArn
        value: '{{ ContainerRecipeArn }}'
      - name: DistributionConfigurationArn
        value: '{{ DistributionConfigurationArn }}'
      - name: InfrastructureConfigurationArn
        value: '{{ InfrastructureConfigurationArn }}'
      - name: Workflows
        value:
          - WorkflowArn: '{{ WorkflowArn }}'
            Parameters:
              - Name: '{{ Name }}'
                Value:
                  - '{{ Value[0] }}'
            ParallelGroup: '{{ ParallelGroup }}'
            OnFailure: '{{ OnFailure }}'
      - name: EnhancedImageMetadataEnabled
        value: '{{ EnhancedImageMetadataEnabled }}'
      - name: ImageScanningConfiguration
        value:
          EcrConfiguration:
            ContainerTags:
              - '{{ ContainerTags[0] }}'
            RepositoryName: '{{ RepositoryName }}'
          ImageScanningEnabled: '{{ ImageScanningEnabled }}'
      - name: ExecutionRole
        value: '{{ ExecutionRole }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>image_pipeline</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.imagebuilder.image_pipelines
SET PatchDocument = string('{{ {
    "Description": description,
    "ImageTestsConfiguration": image_tests_configuration,
    "Status": status,
    "Schedule": schedule,
    "ImageRecipeArn": image_recipe_arn,
    "ContainerRecipeArn": container_recipe_arn,
    "DistributionConfigurationArn": distribution_configuration_arn,
    "InfrastructureConfigurationArn": infrastructure_configuration_arn,
    "Workflows": workflows,
    "EnhancedImageMetadataEnabled": enhanced_image_metadata_enabled,
    "ImageScanningConfiguration": image_scanning_configuration,
    "ExecutionRole": execution_role,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.imagebuilder.image_pipelines
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>image_pipelines</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
ecr:BatchGetRepositoryScanningConfiguration,
iam:GetRole,
iam:PassRole,
iam:CreateServiceLinkedRole,
imagebuilder:TagResource,
imagebuilder:GetImagePipeline,
imagebuilder:GetImageRecipe,
imagebuilder:GetInfrastructureConfiguration,
imagebuilder:GetDistributionConfiguration,
imagebuilder:CreateImagePipeline,
imagebuilder:GetWorkflow,
inspector2:BatchGetAccountStatus
```

</TabItem>
<TabItem value="update">

```json
iam:PassRole,
imagebuilder:GetImagePipeline,
imagebuilder:UpdateImagePipeline,
imagebuilder:GetWorkflow,
imagebuilder:TagResource,
imagebuilder:UntagResource
```

</TabItem>
<TabItem value="read">

```json
imagebuilder:GetImagePipeline
```

</TabItem>
<TabItem value="delete">

```json
imagebuilder:UntagResource,
imagebuilder:GetImagePipeline,
imagebuilder:DeleteImagePipeline
```

</TabItem>
<TabItem value="list">

```json
imagebuilder:ListImagePipelines
```

</TabItem>
</Tabs>