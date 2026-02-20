---
title: spaces
hide_title: false
hide_table_of_contents: false
keywords:
  - spaces
  - sagemaker
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

Creates, updates, deletes or gets a <code>space</code> resource or lists <code>spaces</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>spaces</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SageMaker::Space</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sagemaker.spaces" /></td></tr>
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
    "name": "space_arn",
    "type": "string",
    "description": "The space Amazon Resource Name (ARN)."
  },
  {
    "name": "domain_id",
    "type": "string",
    "description": "The ID of the associated Domain."
  },
  {
    "name": "space_name",
    "type": "string",
    "description": "A name for the Space."
  },
  {
    "name": "space_settings",
    "type": "object",
    "description": "A collection of settings.",
    "children": [
      {
        "name": "jupyter_server_app_settings",
        "type": "object",
        "description": "The Jupyter server's app settings.",
        "children": [
          {
            "name": "default_resource_spec",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "instance_type",
                "type": "string",
                "description": "The instance type that the image version runs on."
              },
              {
                "name": "sage_maker_image_arn",
                "type": "string",
                "description": "The ARN of the SageMaker image that the image version belongs to."
              },
              {
                "name": "sage_maker_image_version_arn",
                "type": "string",
                "description": "The ARN of the image version created on the instance."
              },
              {
                "name": "lifecycle_config_arn",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource."
              }
            ]
          },
          {
            "name": "lifecycle_config_arns",
            "type": "array",
            "description": "A list of LifecycleConfigArns available for use with JupyterServer apps."
          }
        ]
      },
      {
        "name": "kernel_gateway_app_settings",
        "type": "object",
        "description": "The kernel gateway app settings.",
        "children": [
          {
            "name": "custom_images",
            "type": "array",
            "description": "A list of custom SageMaker images that are configured to run as a KernelGateway app.",
            "children": [
              {
                "name": "app_image_config_name",
                "type": "string",
                "description": "The Name of the AppImageConfig."
              },
              {
                "name": "image_name",
                "type": "string",
                "description": "The name of the CustomImage. Must be unique to your account."
              },
              {
                "name": "image_version_number",
                "type": "integer",
                "description": "The version number of the CustomImage."
              }
            ]
          },
          {
            "name": "default_resource_spec",
            "type": "object",
            "description": "The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app.",
            "children": [
              {
                "name": "instance_type",
                "type": "string",
                "description": "The instance type that the image version runs on."
              },
              {
                "name": "sage_maker_image_arn",
                "type": "string",
                "description": "The ARN of the SageMaker image that the image version belongs to."
              },
              {
                "name": "sage_maker_image_version_arn",
                "type": "string",
                "description": "The ARN of the image version created on the instance."
              },
              {
                "name": "lifecycle_config_arn",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource."
              }
            ]
          },
          {
            "name": "lifecycle_config_arns",
            "type": "array",
            "description": "A list of LifecycleConfigArns available for use with KernelGateway apps."
          }
        ]
      },
      {
        "name": "jupyter_lab_app_settings",
        "type": "object",
        "description": "The JupyterLab app settings.",
        "children": [
          {
            "name": "default_resource_spec",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "instance_type",
                "type": "string",
                "description": "The instance type that the image version runs on."
              },
              {
                "name": "sage_maker_image_arn",
                "type": "string",
                "description": "The ARN of the SageMaker image that the image version belongs to."
              },
              {
                "name": "sage_maker_image_version_arn",
                "type": "string",
                "description": "The ARN of the image version created on the instance."
              },
              {
                "name": "lifecycle_config_arn",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource."
              }
            ]
          },
          {
            "name": "app_lifecycle_management",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "idle_settings",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "code_repositories",
            "type": "array",
            "description": "A list of CodeRepositories available for use with JupyterLab apps.",
            "children": [
              {
                "name": "repository_url",
                "type": "string",
                "description": "A CodeRepository (valid URL) to be used within Jupyter's Git extension."
              }
            ]
          }
        ]
      },
      {
        "name": "code_editor_app_settings",
        "type": "object",
        "description": "The CodeEditor app settings.",
        "children": [
          {
            "name": "default_resource_spec",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "instance_type",
                "type": "string",
                "description": "The instance type that the image version runs on."
              },
              {
                "name": "sage_maker_image_arn",
                "type": "string",
                "description": "The ARN of the SageMaker image that the image version belongs to."
              },
              {
                "name": "sage_maker_image_version_arn",
                "type": "string",
                "description": "The ARN of the image version created on the instance."
              },
              {
                "name": "lifecycle_config_arn",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource."
              }
            ]
          },
          {
            "name": "app_lifecycle_management",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "idle_settings",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "space_storage_settings",
        "type": "object",
        "description": "Default storage settings for a space.",
        "children": [
          {
            "name": "ebs_storage_settings",
            "type": "object",
            "description": "Properties related to the space's Amazon Elastic Block Store volume.",
            "children": [
              {
                "name": "ebs_volume_size_in_gb",
                "type": "integer",
                "description": "Size of the Amazon EBS volume in Gb"
              }
            ]
          }
        ]
      },
      {
        "name": "space_managed_resources",
        "type": "string",
        "description": "This is a flag used to indicate if space managed resources needs to be created."
      },
      {
        "name": "remote_access",
        "type": "string",
        "description": "This is a flag used to indicate if remote access is enabled."
      },
      {
        "name": "app_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "custom_file_systems",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "e_fs_file_system",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "file_system_id",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "f_sx_lustre_file_system",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "file_system_id",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "s3_file_system",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "s3_uri",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of tags to apply to the space.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "ownership_settings",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "owner_user_profile_name",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "space_sharing_settings",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "sharing_type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "space_display_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "url",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "domain_id",
    "type": "string",
    "description": "The ID of the associated Domain."
  },
  {
    "name": "space_name",
    "type": "string",
    "description": "A name for the Space."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html"><code>AWS::SageMaker::Space</code></a>.

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
    <td><code>spaces</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DomainId, SpaceName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>spaces</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>spaces</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>spaces_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>spaces</code></td>
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

Gets all properties from an individual <code>space</code>.
```sql
SELECT
region,
space_arn,
domain_id,
space_name,
space_settings,
tags,
ownership_settings,
space_sharing_settings,
space_display_name,
url
FROM awscc.sagemaker.spaces
WHERE region = 'us-east-1' AND Identifier = '<DomainId>|<SpaceName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>spaces</code> in a region.
```sql
SELECT
region,
domain_id,
space_name
FROM awscc.sagemaker.spaces_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>space</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sagemaker.spaces (
 DomainId,
 SpaceName,
 region
)
SELECT 
'{{ DomainId }}',
 '{{ SpaceName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.sagemaker.spaces (
 DomainId,
 SpaceName,
 SpaceSettings,
 Tags,
 OwnershipSettings,
 SpaceSharingSettings,
 SpaceDisplayName,
 region
)
SELECT 
 '{{ DomainId }}',
 '{{ SpaceName }}',
 '{{ SpaceSettings }}',
 '{{ Tags }}',
 '{{ OwnershipSettings }}',
 '{{ SpaceSharingSettings }}',
 '{{ SpaceDisplayName }}',
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
  - name: space
    props:
      - name: DomainId
        value: '{{ DomainId }}'
      - name: SpaceName
        value: '{{ SpaceName }}'
      - name: SpaceSettings
        value:
          JupyterServerAppSettings:
            DefaultResourceSpec:
              InstanceType: '{{ InstanceType }}'
              SageMakerImageArn: '{{ SageMakerImageArn }}'
              SageMakerImageVersionArn: '{{ SageMakerImageVersionArn }}'
              LifecycleConfigArn: '{{ LifecycleConfigArn }}'
            LifecycleConfigArns:
              - '{{ LifecycleConfigArns[0] }}'
          KernelGatewayAppSettings:
            CustomImages:
              - AppImageConfigName: '{{ AppImageConfigName }}'
                ImageName: '{{ ImageName }}'
                ImageVersionNumber: '{{ ImageVersionNumber }}'
            DefaultResourceSpec: null
            LifecycleConfigArns:
              - null
          JupyterLabAppSettings:
            DefaultResourceSpec: null
            AppLifecycleManagement:
              IdleSettings:
                IdleTimeoutInMinutes: '{{ IdleTimeoutInMinutes }}'
            CodeRepositories:
              - RepositoryUrl: '{{ RepositoryUrl }}'
          CodeEditorAppSettings:
            DefaultResourceSpec: null
            AppLifecycleManagement: null
          SpaceStorageSettings:
            EbsStorageSettings:
              EbsVolumeSizeInGb: '{{ EbsVolumeSizeInGb }}'
          SpaceManagedResources: '{{ SpaceManagedResources }}'
          RemoteAccess: '{{ RemoteAccess }}'
          AppType: '{{ AppType }}'
          CustomFileSystems:
            - EFSFileSystem:
                FileSystemId: '{{ FileSystemId }}'
              FSxLustreFileSystem:
                FileSystemId: '{{ FileSystemId }}'
              S3FileSystem:
                S3Uri: '{{ S3Uri }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: OwnershipSettings
        value:
          OwnerUserProfileName: '{{ OwnerUserProfileName }}'
      - name: SpaceSharingSettings
        value:
          SharingType: '{{ SharingType }}'
      - name: SpaceDisplayName
        value: '{{ SpaceDisplayName }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.sagemaker.spaces
SET PatchDocument = string('{{ {
    "SpaceSettings": space_settings,
    "Tags": tags,
    "SpaceDisplayName": space_display_name
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<DomainId>|<SpaceName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sagemaker.spaces
WHERE Identifier = '<DomainId|SpaceName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>spaces</code> resource, the following permissions are required:

### Create
```json
sagemaker:CreateSpace,
sagemaker:DescribeSpace,
sagemaker:ListTags,
sagemaker:AddTags
```

### Read
```json
sagemaker:DescribeSpace,
sagemaker:ListTags
```

### Update
```json
sagemaker:UpdateSpace,
sagemaker:DescribeSpace,
sagemaker:AddTags,
sagemaker:DeleteTags,
sagemaker:ListTags
```

### Delete
```json
sagemaker:DeleteSpace,
sagemaker:DescribeSpace,
sagemaker:DeleteTags
```

### List
```json
sagemaker:ListSpaces,
sagemaker:ListTags
```
