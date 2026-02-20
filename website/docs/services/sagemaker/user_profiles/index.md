---
title: user_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - user_profiles
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

Creates, updates, deletes or gets an <code>user_profile</code> resource or lists <code>user_profiles</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>user_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SageMaker::UserProfile</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sagemaker.user_profiles" /></td></tr>
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
    "name": "user_profile_arn",
    "type": "string",
    "description": "The user profile Amazon Resource Name (ARN)."
  },
  {
    "name": "domain_id",
    "type": "string",
    "description": "The ID of the associated Domain."
  },
  {
    "name": "single_sign_on_user_identifier",
    "type": "string",
    "description": "A specifier for the type of value specified in SingleSignOnUserValue. Currently, the only supported value is \"UserName\". If the Domain's AuthMode is SSO, this field is required. If the Domain's AuthMode is not SSO, this field cannot be specified."
  },
  {
    "name": "single_sign_on_user_value",
    "type": "string",
    "description": "The username of the associated AWS Single Sign-On User for this UserProfile. If the Domain's AuthMode is SSO, this field is required, and must match a valid username of a user in your directory. If the Domain's AuthMode is not SSO, this field cannot be specified."
  },
  {
    "name": "user_profile_name",
    "type": "string",
    "description": "A name for the UserProfile."
  },
  {
    "name": "user_settings",
    "type": "object",
    "description": "A collection of settings.",
    "children": [
      {
        "name": "execution_role",
        "type": "string",
        "description": "The user profile Amazon Resource Name (ARN)."
      },
      {
        "name": "auto_mount_home_ef_s",
        "type": "string",
        "description": "Indicates whether auto-mounting of an EFS volume is supported for the user profile."
      },
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
        "name": "r_studio_server_pro_app_settings",
        "type": "object",
        "description": "A collection of settings that configure user interaction with the RStudioServerPro app.",
        "children": [
          {
            "name": "access_status",
            "type": "string",
            "description": "Indicates whether the current user has access to the RStudioServerPro app."
          },
          {
            "name": "user_group",
            "type": "string",
            "description": "The level of permissions that the user has within the RStudioServerPro app. This value defaults to User. The Admin value allows the user access to the RStudio Administrative Dashboard."
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
            "description": "The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterLab app.",
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
            "description": "A list of LifecycleConfigArns available for use with JupyterLab apps."
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
          },
          {
            "name": "custom_images",
            "type": "array",
            "description": "A list of custom images available for use for JupyterLab apps",
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
            "name": "built_in_lifecycle_config_arn",
            "type": "string",
            "description": "The lifecycle configuration that runs before the default lifecycle configuration."
          }
        ]
      },
      {
        "name": "space_storage_settings",
        "type": "object",
        "description": "Default storage settings for a space.",
        "children": [
          {
            "name": "default_ebs_storage_settings",
            "type": "object",
            "description": "Properties related to the Amazon Elastic Block Store volume.",
            "children": [
              {
                "name": "default_ebs_volume_size_in_gb",
                "type": "integer",
                "description": "Default size of the Amazon EBS volume in Gb"
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
            "description": "The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the CodeEditor app.",
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
            "description": "A list of LifecycleConfigArns available for use with CodeEditor apps."
          },
          {
            "name": "custom_images",
            "type": "array",
            "description": "A list of custom images for use for CodeEditor apps.",
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
            "name": "built_in_lifecycle_config_arn",
            "type": "string",
            "description": "The lifecycle configuration that runs before the default lifecycle configuration."
          }
        ]
      },
      {
        "name": "studio_web_portal_settings",
        "type": "object",
        "description": "Studio settings. If these settings are applied on a user level, they take priority over the settings applied on a domain level.",
        "children": [
          {
            "name": "hidden_ml_tools",
            "type": "array",
            "description": "The machine learning tools that are hidden from the Studio left navigation pane."
          },
          {
            "name": "hidden_app_types",
            "type": "array",
            "description": "Applications supported in Studio that are hidden from the Studio left navigation pane."
          },
          {
            "name": "hidden_instance_types",
            "type": "array",
            "description": "The instance types you are hiding from the Studio user interface."
          },
          {
            "name": "hidden_sage_maker_image_version_aliases",
            "type": "array",
            "description": "The version aliases you are hiding from the Studio user interface.",
            "children": [
              {
                "name": "sage_maker_image_name",
                "type": "string",
                "description": "The SageMaker image name that you are hiding from the Studio user interface."
              },
              {
                "name": "version_aliases",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "default_landing_uri",
        "type": "string",
        "description": "Defines which Amazon SageMaker application users are directed to by default."
      },
      {
        "name": "studio_web_portal",
        "type": "string",
        "description": "Indicates whether the Studio experience is available to users. If not, users cannot access Studio."
      },
      {
        "name": "custom_posix_user_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "uid",
            "type": "integer",
            "description": ""
          },
          {
            "name": "gid",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "custom_file_system_configs",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "e_fs_file_system_config",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "file_system_path",
                "type": "string",
                "description": ""
              },
              {
                "name": "file_system_id",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "f_sx_lustre_file_system_config",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "file_system_path",
                "type": "string",
                "description": ""
              },
              {
                "name": "file_system_id",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "s3_file_system_config",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "mount_path",
                "type": "string",
                "description": ""
              },
              {
                "name": "s3_uri",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "security_groups",
        "type": "array",
        "description": "The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication."
      },
      {
        "name": "sharing_settings",
        "type": "object",
        "description": "The sharing settings.",
        "children": [
          {
            "name": "notebook_output_option",
            "type": "string",
            "description": "Whether to include the notebook cell output when sharing the notebook. The default is Disabled."
          },
          {
            "name": "s3_kms_key_id",
            "type": "string",
            "description": "When NotebookOutputOption is Allowed, the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket."
          },
          {
            "name": "s3_output_path",
            "type": "string",
            "description": "When NotebookOutputOption is Allowed, the Amazon S3 bucket used to store the shared notebook snapshots."
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of tags to apply to the user profile.",
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
    "name": "user_profile_name",
    "type": "string",
    "description": "A name for the UserProfile."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html"><code>AWS::SageMaker::UserProfile</code></a>.

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
    <td><code>user_profiles</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DomainId, UserProfileName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>user_profiles</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>user_profiles</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>user_profiles_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>user_profiles</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>user_profile</code>.
```sql
SELECT
region,
user_profile_arn,
domain_id,
single_sign_on_user_identifier,
single_sign_on_user_value,
user_profile_name,
user_settings,
tags
FROM awscc.sagemaker.user_profiles
WHERE region = 'us-east-1' AND data__Identifier = '<UserProfileName>|<DomainId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>user_profiles</code> in a region.
```sql
SELECT
region,
user_profile_name,
domain_id
FROM awscc.sagemaker.user_profiles_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>user_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sagemaker.user_profiles (
 DomainId,
 UserProfileName,
 region
)
SELECT 
'{{ DomainId }}',
 '{{ UserProfileName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.sagemaker.user_profiles (
 DomainId,
 SingleSignOnUserIdentifier,
 SingleSignOnUserValue,
 UserProfileName,
 UserSettings,
 Tags,
 region
)
SELECT 
 '{{ DomainId }}',
 '{{ SingleSignOnUserIdentifier }}',
 '{{ SingleSignOnUserValue }}',
 '{{ UserProfileName }}',
 '{{ UserSettings }}',
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
  - name: user_profile
    props:
      - name: DomainId
        value: '{{ DomainId }}'
      - name: SingleSignOnUserIdentifier
        value: '{{ SingleSignOnUserIdentifier }}'
      - name: SingleSignOnUserValue
        value: '{{ SingleSignOnUserValue }}'
      - name: UserProfileName
        value: '{{ UserProfileName }}'
      - name: UserSettings
        value:
          ExecutionRole: '{{ ExecutionRole }}'
          AutoMountHomeEFS: '{{ AutoMountHomeEFS }}'
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
          RStudioServerProAppSettings:
            AccessStatus: '{{ AccessStatus }}'
            UserGroup: '{{ UserGroup }}'
          JupyterLabAppSettings:
            DefaultResourceSpec: null
            LifecycleConfigArns:
              - null
            CodeRepositories:
              - RepositoryUrl: '{{ RepositoryUrl }}'
            CustomImages:
              - null
            AppLifecycleManagement:
              IdleSettings:
                LifecycleManagement: '{{ LifecycleManagement }}'
                IdleTimeoutInMinutes: '{{ IdleTimeoutInMinutes }}'
                MinIdleTimeoutInMinutes: '{{ MinIdleTimeoutInMinutes }}'
                MaxIdleTimeoutInMinutes: '{{ MaxIdleTimeoutInMinutes }}'
            BuiltInLifecycleConfigArn: '{{ BuiltInLifecycleConfigArn }}'
          SpaceStorageSettings:
            DefaultEbsStorageSettings:
              DefaultEbsVolumeSizeInGb: '{{ DefaultEbsVolumeSizeInGb }}'
              MaximumEbsVolumeSizeInGb: null
          CodeEditorAppSettings:
            DefaultResourceSpec: null
            LifecycleConfigArns:
              - null
            CustomImages:
              - null
            AppLifecycleManagement: null
            BuiltInLifecycleConfigArn: '{{ BuiltInLifecycleConfigArn }}'
          StudioWebPortalSettings:
            HiddenMlTools:
              - '{{ HiddenMlTools[0] }}'
            HiddenAppTypes:
              - '{{ HiddenAppTypes[0] }}'
            HiddenInstanceTypes:
              - '{{ HiddenInstanceTypes[0] }}'
            HiddenSageMakerImageVersionAliases:
              - SageMakerImageName: '{{ SageMakerImageName }}'
                VersionAliases:
                  - '{{ VersionAliases[0] }}'
          DefaultLandingUri: '{{ DefaultLandingUri }}'
          StudioWebPortal: '{{ StudioWebPortal }}'
          CustomPosixUserConfig:
            Uid: '{{ Uid }}'
            Gid: '{{ Gid }}'
          CustomFileSystemConfigs:
            - EFSFileSystemConfig:
                FileSystemPath: '{{ FileSystemPath }}'
                FileSystemId: '{{ FileSystemId }}'
              FSxLustreFileSystemConfig:
                FileSystemPath: '{{ FileSystemPath }}'
                FileSystemId: '{{ FileSystemId }}'
              S3FileSystemConfig:
                MountPath: '{{ MountPath }}'
                S3Uri: '{{ S3Uri }}'
          SecurityGroups:
            - '{{ SecurityGroups[0] }}'
          SharingSettings:
            NotebookOutputOption: '{{ NotebookOutputOption }}'
            S3KmsKeyId: '{{ S3KmsKeyId }}'
            S3OutputPath: '{{ S3OutputPath }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sagemaker.user_profiles
WHERE data__Identifier = '<UserProfileName|DomainId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>user_profiles</code> resource, the following permissions are required:

### Create
```json
sagemaker:CreateUserProfile,
sagemaker:DescribeUserProfile,
sagemaker:DescribeImage,
sagemaker:DescribeImageVersion,
iam:PassRole
```

### Read
```json
sagemaker:DescribeUserProfile
```

### Update
```json
sagemaker:UpdateUserProfile,
sagemaker:DescribeUserProfile,
sagemaker:DescribeImage,
sagemaker:DescribeImageVersion,
iam:PassRole
```

### Delete
```json
sagemaker:DeleteUserProfile,
sagemaker:DescribeUserProfile
```

### List
```json
sagemaker:ListUserProfiles
```
