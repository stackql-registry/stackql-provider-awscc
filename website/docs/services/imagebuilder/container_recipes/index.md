---
title: container_recipes
hide_title: false
hide_table_of_contents: false
keywords:
  - container_recipes
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

Creates, updates, deletes or gets a <code>container_recipe</code> resource or lists <code>container_recipes</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>container_recipes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::ImageBuilder::ContainerRecipe</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.imagebuilder.container_recipes" /></td></tr>
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
    "description": "The Amazon Resource Name (ARN) of the container recipe."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the container recipe."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the container recipe."
  },
  {
    "name": "version",
    "type": "string",
    "description": "The semantic version of the container recipe (&lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;)."
  },
  {
    "name": "components",
    "type": "array",
    "description": "Components for build and test that are included in the container recipe.",
    "children": [
      {
        "name": "component_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the component."
      },
      {
        "name": "parameters",
        "type": "array",
        "description": "A group of parameter settings that are used to configure the component for a specific recipe.",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "The name of the component parameter to set."
          },
          {
            "name": "value",
            "type": "array",
            "description": "Sets the value for the named component parameter."
          }
        ]
      }
    ]
  },
  {
    "name": "instance_configuration",
    "type": "object",
    "description": "A group of options that can be used to configure an instance for building and testing container images.",
    "children": [
      {
        "name": "image",
        "type": "string",
        "description": "The AMI ID to use as the base image for a container build and test instance. If not specified, Image Builder will use the appropriate ECS-optimized AMI as a base image."
      },
      {
        "name": "block_device_mappings",
        "type": "array",
        "description": "Defines the block devices to attach for building an instance from this Image Builder AMI.",
        "children": [
          {
            "name": "device_name",
            "type": "string",
            "description": "The device to which these mappings apply."
          },
          {
            "name": "virtual_name",
            "type": "string",
            "description": "Use to manage instance ephemeral devices."
          },
          {
            "name": "no_device",
            "type": "string",
            "description": "Use to remove a mapping from the parent image."
          },
          {
            "name": "ebs",
            "type": "object",
            "description": "Use to manage Amazon EBS-specific configuration for this mapping.",
            "children": [
              {
                "name": "encrypted",
                "type": "boolean",
                "description": "Use to configure device encryption."
              },
              {
                "name": "delete_on_termination",
                "type": "boolean",
                "description": "Use to configure delete on termination of the associated device."
              },
              {
                "name": "iops",
                "type": "integer",
                "description": "Use to configure device IOPS."
              },
              {
                "name": "kms_key_id",
                "type": "string",
                "description": "Use to configure the KMS key to use when encrypting the device."
              },
              {
                "name": "snapshot_id",
                "type": "string",
                "description": "The snapshot that defines the device contents."
              },
              {
                "name": "throughput",
                "type": "integer",
                "description": "For GP3 volumes only - The throughput in MiB/s that the volume supports."
              },
              {
                "name": "volume_size",
                "type": "integer",
                "description": "Use to override the device's volume size."
              },
              {
                "name": "volume_type",
                "type": "string",
                "description": "Use to override the device's volume type."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "dockerfile_template_data",
    "type": "string",
    "description": "Dockerfiles are text documents that are used to build Docker containers, and ensure that they contain all of the elements required by the application running inside. The template data consists of contextual variables where Image Builder places build information or scripts, based on your container image recipe."
  },
  {
    "name": "dockerfile_template_uri",
    "type": "string",
    "description": "The S3 URI for the Dockerfile that will be used to build your container image."
  },
  {
    "name": "platform_override",
    "type": "string",
    "description": "Specifies the operating system platform when you use a custom source image."
  },
  {
    "name": "container_type",
    "type": "string",
    "description": "Specifies the type of container, such as Docker."
  },
  {
    "name": "image_os_version_override",
    "type": "string",
    "description": "Specifies the operating system version for the source image."
  },
  {
    "name": "target_repository",
    "type": "object",
    "description": "The destination repository for the container image.",
    "children": [
      {
        "name": "service",
        "type": "string",
        "description": "The service of target container repository."
      },
      {
        "name": "repository_name",
        "type": "string",
        "description": "The repository name of target container repository."
      }
    ]
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "Identifies which KMS key is used to encrypt the container image."
  },
  {
    "name": "parent_image",
    "type": "string",
    "description": "The source image for the container recipe."
  },
  {
    "name": "working_directory",
    "type": "string",
    "description": "The working directory to be used during build and test workflows."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "Tags that are attached to the container recipe."
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
    "description": "The Amazon Resource Name (ARN) of the container recipe."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-containerrecipe.html"><code>AWS::ImageBuilder::ContainerRecipe</code></a>.

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
    <td><code>container_recipes</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>container_recipes</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>container_recipes</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>container_recipes_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>container_recipes</code></td>
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

Gets all properties from an individual <code>container_recipe</code>.
```sql
SELECT
region,
arn,
name,
description,
version,
components,
instance_configuration,
dockerfile_template_data,
dockerfile_template_uri,
platform_override,
container_type,
image_os_version_override,
target_repository,
kms_key_id,
parent_image,
working_directory,
tags
FROM awscc.imagebuilder.container_recipes
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>container_recipes</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.imagebuilder.container_recipes_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>container_recipe</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.imagebuilder.container_recipes (
 Name,
 Description,
 Version,
 Components,
 InstanceConfiguration,
 DockerfileTemplateData,
 DockerfileTemplateUri,
 PlatformOverride,
 ContainerType,
 ImageOsVersionOverride,
 TargetRepository,
 KmsKeyId,
 ParentImage,
 WorkingDirectory,
 Tags,
 region
)
SELECT 
'{{ Name }}',
 '{{ Description }}',
 '{{ Version }}',
 '{{ Components }}',
 '{{ InstanceConfiguration }}',
 '{{ DockerfileTemplateData }}',
 '{{ DockerfileTemplateUri }}',
 '{{ PlatformOverride }}',
 '{{ ContainerType }}',
 '{{ ImageOsVersionOverride }}',
 '{{ TargetRepository }}',
 '{{ KmsKeyId }}',
 '{{ ParentImage }}',
 '{{ WorkingDirectory }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.imagebuilder.container_recipes (
 Name,
 Description,
 Version,
 Components,
 InstanceConfiguration,
 DockerfileTemplateData,
 DockerfileTemplateUri,
 PlatformOverride,
 ContainerType,
 ImageOsVersionOverride,
 TargetRepository,
 KmsKeyId,
 ParentImage,
 WorkingDirectory,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ Version }}',
 '{{ Components }}',
 '{{ InstanceConfiguration }}',
 '{{ DockerfileTemplateData }}',
 '{{ DockerfileTemplateUri }}',
 '{{ PlatformOverride }}',
 '{{ ContainerType }}',
 '{{ ImageOsVersionOverride }}',
 '{{ TargetRepository }}',
 '{{ KmsKeyId }}',
 '{{ ParentImage }}',
 '{{ WorkingDirectory }}',
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
  - name: container_recipe
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: Version
        value: '{{ Version }}'
      - name: Components
        value:
          - ComponentArn: '{{ ComponentArn }}'
            Parameters:
              - Name: '{{ Name }}'
                Value:
                  - '{{ Value[0] }}'
      - name: InstanceConfiguration
        value:
          Image: '{{ Image }}'
          BlockDeviceMappings:
            - DeviceName: '{{ DeviceName }}'
              VirtualName: '{{ VirtualName }}'
              NoDevice: '{{ NoDevice }}'
              Ebs:
                Encrypted: '{{ Encrypted }}'
                DeleteOnTermination: '{{ DeleteOnTermination }}'
                Iops: '{{ Iops }}'
                KmsKeyId: '{{ KmsKeyId }}'
                SnapshotId: '{{ SnapshotId }}'
                Throughput: '{{ Throughput }}'
                VolumeSize: '{{ VolumeSize }}'
                VolumeType: '{{ VolumeType }}'
      - name: DockerfileTemplateData
        value: '{{ DockerfileTemplateData }}'
      - name: DockerfileTemplateUri
        value: '{{ DockerfileTemplateUri }}'
      - name: PlatformOverride
        value: '{{ PlatformOverride }}'
      - name: ContainerType
        value: '{{ ContainerType }}'
      - name: ImageOsVersionOverride
        value: '{{ ImageOsVersionOverride }}'
      - name: TargetRepository
        value:
          Service: '{{ Service }}'
          RepositoryName: '{{ RepositoryName }}'
      - name: KmsKeyId
        value: '{{ KmsKeyId }}'
      - name: ParentImage
        value: '{{ ParentImage }}'
      - name: WorkingDirectory
        value: '{{ WorkingDirectory }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>container_recipe</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.imagebuilder.container_recipes
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.imagebuilder.container_recipes
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>container_recipes</code> resource, the following permissions are required:

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
iam:GetRole,
iam:CreateServiceLinkedRole,
imagebuilder:GetComponent,
imagebuilder:TagResource,
imagebuilder:GetContainerRecipe,
imagebuilder:CreateContainerRecipe,
imagebuilder:GetImage,
kms:Encrypt,
kms:Decrypt,
kms:ReEncryptFrom,
kms:ReEncryptTo,
kms:GenerateDataKey,
kms:GenerateDataKeyPair,
kms:GenerateDataKeyPairWithoutPlaintext,
kms:GenerateDataKeyWithoutPlaintext,
s3:GetObject,
s3:ListBucket,
ecr:DescribeRepositories,
ec2:DescribeImages
```

</TabItem>
<TabItem value="read">

```json
imagebuilder:GetContainerRecipe,
kms:Decrypt
```

</TabItem>
<TabItem value="update">

```json
imagebuilder:TagResource,
imagebuilder:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
imagebuilder:UntagResource,
imagebuilder:GetContainerRecipe,
imagebuilder:DeleteContainerRecipe
```

</TabItem>
<TabItem value="list">

```json
imagebuilder:ListContainerRecipes
```

</TabItem>
</Tabs>