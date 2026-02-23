---
title: image_recipes
hide_title: false
hide_table_of_contents: false
keywords:
  - image_recipes
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

Creates, updates, deletes or gets an <code>image_recipe</code> resource or lists <code>image_recipes</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>image_recipes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::ImageBuilder::ImageRecipe</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.imagebuilder.image_recipes" /></td></tr>
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
    "description": "The Amazon Resource Name (ARN) of the image recipe."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the image recipe."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the image recipe."
  },
  {
    "name": "version",
    "type": "string",
    "description": "The version of the image recipe."
  },
  {
    "name": "components",
    "type": "array",
    "description": "The components of the image recipe.",
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
    "name": "block_device_mappings",
    "type": "array",
    "description": "The block device mappings to apply when creating images from this recipe.",
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
  },
  {
    "name": "parent_image",
    "type": "string",
    "description": "The parent image of the image recipe."
  },
  {
    "name": "working_directory",
    "type": "string",
    "description": "The working directory to be used during build and test workflows."
  },
  {
    "name": "additional_instance_configuration",
    "type": "object",
    "description": "Specify additional settings and launch scripts for your build instances.",
    "children": [
      {
        "name": "systems_manager_agent",
        "type": "object",
        "description": "Contains settings for the SSM agent on your build instance.",
        "children": [
          {
            "name": "uninstall_after_build",
            "type": "boolean",
            "description": "Controls whether the SSM agent is removed from your final build image, prior to creating the new AMI. If this is set to true, then the agent is removed from the final image. If it's set to false, then the agent is left in, so that it is included in the new AMI. The default value is false."
          }
        ]
      },
      {
        "name": "user_data_override",
        "type": "string",
        "description": "Use this property to provide commands or a command script to run when you launch your build instance."
      }
    ]
  },
  {
    "name": "tags",
    "type": "object",
    "description": "The tags of the image recipe."
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
    "description": "The Amazon Resource Name (ARN) of the image recipe."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagerecipe.html"><code>AWS::ImageBuilder::ImageRecipe</code></a>.

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
    <td><code>image_recipes</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, Version, Components, ParentImage, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>image_recipes</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>image_recipes</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>image_recipes_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>image_recipes</code></td>
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

Gets all properties from an individual <code>image_recipe</code>.
```sql
SELECT
region,
arn,
name,
description,
version,
components,
block_device_mappings,
parent_image,
working_directory,
additional_instance_configuration,
tags
FROM awscc.imagebuilder.image_recipes
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>image_recipes</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.imagebuilder.image_recipes_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>image_recipe</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.imagebuilder.image_recipes (
 Name,
 Version,
 Components,
 ParentImage,
 region
)
SELECT
'{{ name }}',
 '{{ version }}',
 '{{ components }}',
 '{{ parent_image }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.imagebuilder.image_recipes (
 Name,
 Description,
 Version,
 Components,
 BlockDeviceMappings,
 ParentImage,
 WorkingDirectory,
 AdditionalInstanceConfiguration,
 Tags,
 region
)
SELECT
 '{{ name }}',
 '{{ description }}',
 '{{ version }}',
 '{{ components }}',
 '{{ block_device_mappings }}',
 '{{ parent_image }}',
 '{{ working_directory }}',
 '{{ additional_instance_configuration }}',
 '{{ tags }}',
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
  - name: image_recipe
    props:
      - name: name
        value: '{{ name }}'
      - name: description
        value: '{{ description }}'
      - name: version
        value: '{{ version }}'
      - name: components
        value:
          - component_arn: '{{ component_arn }}'
            parameters:
              - name: '{{ name }}'
                value:
                  - '{{ value[0] }}'
      - name: block_device_mappings
        value:
          - device_name: '{{ device_name }}'
            virtual_name: '{{ virtual_name }}'
            no_device: '{{ no_device }}'
            ebs:
              encrypted: '{{ encrypted }}'
              delete_on_termination: '{{ delete_on_termination }}'
              iops: '{{ iops }}'
              kms_key_id: '{{ kms_key_id }}'
              snapshot_id: '{{ snapshot_id }}'
              throughput: '{{ throughput }}'
              volume_size: '{{ volume_size }}'
              volume_type: '{{ volume_type }}'
      - name: parent_image
        value: '{{ parent_image }}'
      - name: working_directory
        value: '{{ working_directory }}'
      - name: additional_instance_configuration
        value:
          systems_manager_agent:
            uninstall_after_build: '{{ uninstall_after_build }}'
          user_data_override: '{{ user_data_override }}'
      - name: tags
        value: {}
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>image_recipe</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.imagebuilder.image_recipes
SET PatchDocument = string('{{ {
    "AdditionalInstanceConfiguration": additional_instance_configuration,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.imagebuilder.image_recipes
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>image_recipes</code> resource, the following permissions are required:

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
imagebuilder:GetImage,
imagebuilder:TagResource,
imagebuilder:GetImageRecipe,
imagebuilder:CreateImageRecipe,
ec2:DescribeImages
```

</TabItem>
<TabItem value="read">

```json
imagebuilder:GetImageRecipe
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
imagebuilder:GetImageRecipe,
imagebuilder:DeleteImageRecipe
```

</TabItem>
<TabItem value="list">

```json
imagebuilder:ListImageRecipes
```

</TabItem>
</Tabs>