---
title: images
hide_title: false
hide_table_of_contents: false
keywords:
  - images
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

Creates, updates, deletes or gets an <code>image</code> resource or lists <code>images</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>images</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::ImageBuilder::Image</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.imagebuilder.images" /></td></tr>
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
    "name": "container_recipe_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested."
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
    "name": "image_uri",
    "type": "string",
    "description": "URI for containers created in current Region with default ECR image tag"
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the image."
  },
  {
    "name": "infrastructure_configuration_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the infrastructure configuration."
  },
  {
    "name": "image_recipe_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed."
  },
  {
    "name": "distribution_configuration_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the distribution configuration."
  },
  {
    "name": "image_id",
    "type": "string",
    "description": "The AMI ID of the EC2 AMI in current region."
  },
  {
    "name": "image_tests_configuration",
    "type": "object",
    "description": "The image tests configuration used when creating this image.",
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
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the image."
  },
  {
    "name": "enhanced_image_metadata_enabled",
    "type": "boolean",
    "description": "Collects additional information about the image being created, including the operating system (OS) version and package list."
  },
  {
    "name": "execution_role",
    "type": "string",
    "description": "The execution role name/ARN for the image build, if provided"
  },
  {
    "name": "tags",
    "type": "object",
    "description": "The tags associated with the image."
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
    "description": "The Amazon Resource Name (ARN) of the image."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html"><code>AWS::ImageBuilder::Image</code></a>.

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
    <td><code>images</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>images</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>images</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>images_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>images</code></td>
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

Gets all properties from an individual <code>image</code>.
```sql
SELECT
region,
image_scanning_configuration,
container_recipe_arn,
workflows,
image_uri,
name,
infrastructure_configuration_arn,
image_recipe_arn,
distribution_configuration_arn,
image_id,
image_tests_configuration,
arn,
enhanced_image_metadata_enabled,
execution_role,
tags
FROM awscc.imagebuilder.images
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>images</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.imagebuilder.images_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>image</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.imagebuilder.images (
 ImageScanningConfiguration,
 ContainerRecipeArn,
 Workflows,
 InfrastructureConfigurationArn,
 ImageRecipeArn,
 DistributionConfigurationArn,
 ImageTestsConfiguration,
 EnhancedImageMetadataEnabled,
 ExecutionRole,
 Tags,
 region
)
SELECT 
'{{ ImageScanningConfiguration }}',
 '{{ ContainerRecipeArn }}',
 '{{ Workflows }}',
 '{{ InfrastructureConfigurationArn }}',
 '{{ ImageRecipeArn }}',
 '{{ DistributionConfigurationArn }}',
 '{{ ImageTestsConfiguration }}',
 '{{ EnhancedImageMetadataEnabled }}',
 '{{ ExecutionRole }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.imagebuilder.images (
 ImageScanningConfiguration,
 ContainerRecipeArn,
 Workflows,
 InfrastructureConfigurationArn,
 ImageRecipeArn,
 DistributionConfigurationArn,
 ImageTestsConfiguration,
 EnhancedImageMetadataEnabled,
 ExecutionRole,
 Tags,
 region
)
SELECT 
 '{{ ImageScanningConfiguration }}',
 '{{ ContainerRecipeArn }}',
 '{{ Workflows }}',
 '{{ InfrastructureConfigurationArn }}',
 '{{ ImageRecipeArn }}',
 '{{ DistributionConfigurationArn }}',
 '{{ ImageTestsConfiguration }}',
 '{{ EnhancedImageMetadataEnabled }}',
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
  - name: image
    props:
      - name: ImageScanningConfiguration
        value:
          EcrConfiguration:
            ContainerTags:
              - '{{ ContainerTags[0] }}'
            RepositoryName: '{{ RepositoryName }}'
          ImageScanningEnabled: '{{ ImageScanningEnabled }}'
      - name: ContainerRecipeArn
        value: '{{ ContainerRecipeArn }}'
      - name: Workflows
        value:
          - WorkflowArn: '{{ WorkflowArn }}'
            Parameters:
              - Name: '{{ Name }}'
                Value:
                  - '{{ Value[0] }}'
            ParallelGroup: '{{ ParallelGroup }}'
            OnFailure: '{{ OnFailure }}'
      - name: InfrastructureConfigurationArn
        value: '{{ InfrastructureConfigurationArn }}'
      - name: ImageRecipeArn
        value: '{{ ImageRecipeArn }}'
      - name: DistributionConfigurationArn
        value: '{{ DistributionConfigurationArn }}'
      - name: ImageTestsConfiguration
        value:
          ImageTestsEnabled: '{{ ImageTestsEnabled }}'
          TimeoutMinutes: '{{ TimeoutMinutes }}'
      - name: EnhancedImageMetadataEnabled
        value: '{{ EnhancedImageMetadataEnabled }}'
      - name: ExecutionRole
        value: '{{ ExecutionRole }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>image</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.imagebuilder.images
SET PatchDocument = string('{{ {
    "ExecutionRole": execution_role,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.imagebuilder.images
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>images</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
imagebuilder:GetImage
```

</TabItem>
<TabItem value="create">

```json
ecr:BatchGetRepositoryScanningConfiguration,
iam:GetRole,
iam:PassRole,
iam:CreateServiceLinkedRole,
imagebuilder:GetImageRecipe,
imagebuilder:GetInfrastructureConfiguration,
imagebuilder:GetDistributionConfiguration,
imagebuilder:GetWorkflow,
imagebuilder:GetImage,
imagebuilder:CreateImage,
imagebuilder:TagResource,
inspector2:BatchGetAccountStatus
```

</TabItem>
<TabItem value="update">

```json
imagebuilder:TagResource,
imagebuilder:UntagResource
```

</TabItem>
<TabItem value="list">

```json
imagebuilder:ListImages,
imagebuilder:ListImageBuildVersions
```

</TabItem>
<TabItem value="delete">

```json
imagebuilder:GetImage,
imagebuilder:DeleteImage,
imagebuilder:UntagResource,
imagebuilder:CancelImageCreation
```

</TabItem>
</Tabs>