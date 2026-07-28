---
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
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

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>domain</code> resource or lists <code>domains</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>domains</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SageMaker::Domain</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sagemaker.domains" /></td></tr>
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
    "name": "domain_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the created domain."
  },
  {
    "name": "url",
    "type": "string",
    "description": "The URL to the created domain."
  },
  {
    "name": "app_network_access_type",
    "type": "string",
    "description": "Specifies the VPC used for non-EFS traffic. The default value is PublicInternetOnly."
  },
  {
    "name": "auth_mode",
    "type": "string",
    "description": "The mode of authentication that members use to access the domain."
  },
  {
    "name": "default_user_settings",
    "type": "object",
    "description": "The default user settings.",
    "children": [
      {
        "name": "execution_role",
        "type": "string",
        "description": "The execution role for the user."
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
                "description": "The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to."
              },
              {
                "name": "sage_maker_image_version_arn",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the image version created on the instance."
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
                "description": "The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to."
              },
              {
                "name": "sage_maker_image_version_arn",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the image version created on the instance."
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
        "name": "r_session_app_settings",
        "type": "object",
        "description": "A collection of settings that apply to an RSessionGateway app.",
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
                "description": "The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to."
              },
              {
                "name": "sage_maker_image_version_arn",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the image version created on the instance."
              },
              {
                "name": "lifecycle_config_arn",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource."
              }
            ]
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
                "description": "The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to."
              },
              {
                "name": "sage_maker_image_version_arn",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the image version created on the instance."
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
            "description": "A list of custom images for use for JupyterLab apps.",
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
            "description": "Properties related to the Amazon Elastic Block Store volume. Must be provided if storage type is Amazon EBS and must not be provided if storage type is not Amazon EBS",
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
                "description": "The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to."
              },
              {
                "name": "sage_maker_image_version_arn",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the image version created on the instance."
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
    "name": "default_space_settings",
    "type": "object",
    "description": "The default space settings.",
    "children": [
      {
        "name": "execution_role",
        "type": "string",
        "description": "The execution role for the space."
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
                "description": "The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to."
              },
              {
                "name": "sage_maker_image_version_arn",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the image version created on the instance."
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
                "description": "The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to."
              },
              {
                "name": "sage_maker_image_version_arn",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the image version created on the instance."
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
        "name": "security_groups",
        "type": "array",
        "description": "The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication."
      },
      {
        "name": "jupyter_lab_app_settings",
        "type": "object",
        "description": "The Jupyter lab's app settings.",
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
                "description": "The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to."
              },
              {
                "name": "sage_maker_image_version_arn",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the image version created on the instance."
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
            "description": "A list of custom images for use for JupyterLab apps.",
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
        "description": "The Jupyter lab's space storage settings.",
        "children": [
          {
            "name": "default_ebs_storage_settings",
            "type": "object",
            "description": "Properties related to the Amazon Elastic Block Store volume. Must be provided if storage type is Amazon EBS and must not be provided if storage type is not Amazon EBS",
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
        "name": "custom_posix_user_config",
        "type": "object",
        "description": "The Jupyter lab's custom posix user configurations.",
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
      }
    ]
  },
  {
    "name": "domain_name",
    "type": "string",
    "description": "A name for the domain."
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "SageMaker uses AWS KMS to encrypt the EFS volume attached to the domain with an AWS managed customer master key (CMK) by default."
  },
  {
    "name": "subnet_ids",
    "type": "array",
    "description": "The VPC subnets that Studio uses for communication."
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
    "name": "vpc_id",
    "type": "string",
    "description": "The ID of the Amazon Virtual Private Cloud (VPC) that Studio uses for communication."
  },
  {
    "name": "domain_id",
    "type": "string",
    "description": "The domain name."
  },
  {
    "name": "home_efs_file_system_id",
    "type": "string",
    "description": "The ID of the Amazon Elastic File System (EFS) managed by this Domain."
  },
  {
    "name": "single_sign_on_managed_application_instance_id",
    "type": "string",
    "description": "The SSO managed application instance ID."
  },
  {
    "name": "single_sign_on_application_arn",
    "type": "string",
    "description": "The ARN of the application managed by SageMaker in IAM Identity Center. This value is only returned for domains created after October 1, 2023."
  },
  {
    "name": "domain_settings",
    "type": "object",
    "description": "A collection of Domain settings.",
    "children": [
      {
        "name": "security_group_ids",
        "type": "array",
        "description": "The security groups for the Amazon Virtual Private Cloud that the Domain uses for communication between Domain-level apps and user apps."
      },
      {
        "name": "r_studio_server_pro_domain_settings",
        "type": "object",
        "description": "A collection of settings that update the current configuration for the RStudioServerPro Domain-level app.",
        "children": [
          {
            "name": "domain_execution_role_arn",
            "type": "string",
            "description": "The ARN of the execution role for the RStudioServerPro Domain-level app."
          },
          {
            "name": "r_studio_connect_url",
            "type": "string",
            "description": "A URL pointing to an RStudio Connect server."
          },
          {
            "name": "r_studio_package_manager_url",
            "type": "string",
            "description": "A URL pointing to an RStudio Package Manager server."
          },
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
                "description": "The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to."
              },
              {
                "name": "sage_maker_image_version_arn",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the image version created on the instance."
              },
              {
                "name": "lifecycle_config_arn",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource."
              }
            ]
          }
        ]
      },
      {
        "name": "docker_settings",
        "type": "object",
        "description": "A collection of settings that are required to start docker-proxy server.",
        "children": [
          {
            "name": "enable_docker_access",
            "type": "string",
            "description": "The flag to enable/disable docker-proxy server"
          },
          {
            "name": "vpc_only_trusted_accounts",
            "type": "array",
            "description": "A list of account id's that would be used to pull images from in VpcOnly mode"
          }
        ]
      },
      {
        "name": "execution_role_identity_config",
        "type": "string",
        "description": "The configuration for attaching a SageMaker user profile name to the execution role as a sts:SourceIdentity key."
      },
      {
        "name": "unified_studio_settings",
        "type": "object",
        "description": "A collection of settings that apply to an Amazon SageMaker AI domain when you use it in Amazon SageMaker Unified Studio.",
        "children": [
          {
            "name": "studio_web_portal_access",
            "type": "string",
            "description": "<details><summary>Sets whether you can access the domain in Amazon SageMaker Studio:</summary>ENABLED<br />You can access the domain in Amazon SageMaker Studio. If you migrate the domain to Amazon SageMaker Unified Studio, you can access it in both studio interfaces.<br />DISABLED<br />You can't access the domain in Amazon SageMaker Studio. If you migrate the domain to Amazon SageMaker Unified Studio, you can access it only in that studio interface.</details>"
          },
          {
            "name": "domain_account_id",
            "type": "string",
            "description": "The ID of the AWS account that has the Amazon SageMaker Unified Studio domain. The default value, if you don't specify an ID, is the ID of the account that has the Amazon SageMaker AI domain."
          },
          {
            "name": "domain_region",
            "type": "string",
            "description": "The AWS Region where the domain is located in Amazon SageMaker Unified Studio. The default value, if you don't specify a Region, is the Region where the Amazon SageMaker AI domain is located."
          },
          {
            "name": "domain_id",
            "type": "string",
            "description": "The ID of the Amazon SageMaker Unified Studio domain associated with this domain."
          },
          {
            "name": "project_id",
            "type": "string",
            "description": "The ID of the Amazon SageMaker Unified Studio project that corresponds to the domain."
          },
          {
            "name": "environment_id",
            "type": "string",
            "description": "The ID of the environment that Amazon SageMaker Unified Studio associates with the domain."
          },
          {
            "name": "project_s3_path",
            "type": "string",
            "description": "The location where Amazon S3 stores temporary execution data and other artifacts for the project that corresponds to the domain."
          }
        ]
      }
    ]
  },
  {
    "name": "app_security_group_management",
    "type": "string",
    "description": "The entity that creates and manages the required security groups for inter-app communication in VPCOnly mode. Required when CreateDomain.AppNetworkAccessType is VPCOnly and DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn is provided."
  },
  {
    "name": "security_group_id_for_domain_boundary",
    "type": "string",
    "description": "The ID of the security group that authorizes traffic between the RSessionGateway apps and the RStudioServerPro app."
  },
  {
    "name": "tag_propagation",
    "type": "string",
    "description": "Indicates whether the tags added to Domain, User Profile and Space entity is propagated to all SageMaker resources."
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
    "description": "The domain name."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html"><code>AWS::SageMaker::Domain</code></a>.

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
    <td><code>domains</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AuthMode, DefaultUserSettings, DomainName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>domains</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>domains</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>domains_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>domains</code></td>
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

Gets all properties from an individual <code>domain</code>.
```sql
SELECT
  region,
  domain_arn,
  url,
  app_network_access_type,
  auth_mode,
  default_user_settings,
  default_space_settings,
  domain_name,
  kms_key_id,
  subnet_ids,
  tags,
  vpc_id,
  domain_id,
  home_efs_file_system_id,
  single_sign_on_managed_application_instance_id,
  single_sign_on_application_arn,
  domain_settings,
  app_security_group_management,
  security_group_id_for_domain_boundary,
  tag_propagation
FROM awscc.sagemaker.domains
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ domain_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>domains</code> in a region.
```sql
SELECT
  region,
  domain_id
FROM awscc.sagemaker.domains_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>domain</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sagemaker.domains (
  AuthMode,
  DefaultUserSettings,
  DomainName,
  region
)
SELECT
  '{{ auth_mode }}',
  '{{ default_user_settings }}',
  '{{ domain_name }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.sagemaker.domains (
  AppNetworkAccessType,
  AuthMode,
  DefaultUserSettings,
  DefaultSpaceSettings,
  DomainName,
  KmsKeyId,
  SubnetIds,
  Tags,
  VpcId,
  DomainSettings,
  AppSecurityGroupManagement,
  TagPropagation,
  region
)
SELECT
  '{{ app_network_access_type }}',
  '{{ auth_mode }}',
  '{{ default_user_settings }}',
  '{{ default_space_settings }}',
  '{{ domain_name }}',
  '{{ kms_key_id }}',
  '{{ subnet_ids }}',
  '{{ tags }}',
  '{{ vpc_id }}',
  '{{ domain_settings }}',
  '{{ app_security_group_management }}',
  '{{ tag_propagation }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: domain
    props:
      - name: app_network_access_type
        value: '{{ app_network_access_type }}'
      - name: auth_mode
        value: '{{ auth_mode }}'
      - name: default_user_settings
        value:
          execution_role: '{{ execution_role }}'
          auto_mount_home_ef_s: '{{ auto_mount_home_ef_s }}'
          jupyter_server_app_settings:
            default_resource_spec:
              instance_type: '{{ instance_type }}'
              sage_maker_image_arn: '{{ sage_maker_image_arn }}'
              sage_maker_image_version_arn: '{{ sage_maker_image_version_arn }}'
              lifecycle_config_arn: '{{ lifecycle_config_arn }}'
            lifecycle_config_arns:
              - '{{ lifecycle_config_arns[0] }}'
          kernel_gateway_app_settings:
            custom_images:
              - app_image_config_name: '{{ app_image_config_name }}'
                image_name: '{{ image_name }}'
                image_version_number: '{{ image_version_number }}'
            default_resource_spec: null
            lifecycle_config_arns:
              - null
          r_studio_server_pro_app_settings:
            access_status: '{{ access_status }}'
            user_group: '{{ user_group }}'
          r_session_app_settings:
            custom_images:
              - null
            default_resource_spec: null
          jupyter_lab_app_settings:
            default_resource_spec: null
            lifecycle_config_arns:
              - null
            code_repositories:
              - repository_url: '{{ repository_url }}'
            custom_images:
              - null
            app_lifecycle_management:
              idle_settings:
                lifecycle_management: '{{ lifecycle_management }}'
                idle_timeout_in_minutes: '{{ idle_timeout_in_minutes }}'
                min_idle_timeout_in_minutes: '{{ min_idle_timeout_in_minutes }}'
                max_idle_timeout_in_minutes: '{{ max_idle_timeout_in_minutes }}'
            built_in_lifecycle_config_arn: '{{ built_in_lifecycle_config_arn }}'
          space_storage_settings:
            default_ebs_storage_settings:
              default_ebs_volume_size_in_gb: '{{ default_ebs_volume_size_in_gb }}'
              maximum_ebs_volume_size_in_gb: null
          code_editor_app_settings:
            default_resource_spec: null
            lifecycle_config_arns:
              - null
            custom_images:
              - null
            app_lifecycle_management: null
            built_in_lifecycle_config_arn: '{{ built_in_lifecycle_config_arn }}'
          studio_web_portal_settings:
            hidden_ml_tools:
              - '{{ hidden_ml_tools[0] }}'
            hidden_app_types:
              - '{{ hidden_app_types[0] }}'
            hidden_instance_types:
              - '{{ hidden_instance_types[0] }}'
            hidden_sage_maker_image_version_aliases:
              - sage_maker_image_name: '{{ sage_maker_image_name }}'
                version_aliases:
                  - '{{ version_aliases[0] }}'
          default_landing_uri: '{{ default_landing_uri }}'
          studio_web_portal: '{{ studio_web_portal }}'
          custom_posix_user_config:
            uid: '{{ uid }}'
            gid: '{{ gid }}'
          custom_file_system_configs:
            - e_fs_file_system_config:
                file_system_path: '{{ file_system_path }}'
                file_system_id: '{{ file_system_id }}'
              f_sx_lustre_file_system_config:
                file_system_path: '{{ file_system_path }}'
                file_system_id: '{{ file_system_id }}'
              s3_file_system_config:
                mount_path: '{{ mount_path }}'
                s3_uri: '{{ s3_uri }}'
          security_groups:
            - '{{ security_groups[0] }}'
          sharing_settings:
            notebook_output_option: '{{ notebook_output_option }}'
            s3_kms_key_id: '{{ s3_kms_key_id }}'
            s3_output_path: '{{ s3_output_path }}'
      - name: default_space_settings
        value:
          execution_role: '{{ execution_role }}'
          jupyter_server_app_settings: null
          kernel_gateway_app_settings: null
          security_groups:
            - '{{ security_groups[0] }}'
          jupyter_lab_app_settings: null
          space_storage_settings: null
          custom_posix_user_config: null
          custom_file_system_configs:
            - null
      - name: domain_name
        value: '{{ domain_name }}'
      - name: kms_key_id
        value: '{{ kms_key_id }}'
      - name: subnet_ids
        value:
          - '{{ subnet_ids[0] }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
      - name: vpc_id
        value: '{{ vpc_id }}'
      - name: domain_settings
        value:
          security_group_ids:
            - '{{ security_group_ids[0] }}'
          r_studio_server_pro_domain_settings:
            domain_execution_role_arn: '{{ domain_execution_role_arn }}'
            r_studio_connect_url: '{{ r_studio_connect_url }}'
            r_studio_package_manager_url: '{{ r_studio_package_manager_url }}'
            default_resource_spec: null
          docker_settings:
            enable_docker_access: '{{ enable_docker_access }}'
            vpc_only_trusted_accounts:
              - '{{ vpc_only_trusted_accounts[0] }}'
          execution_role_identity_config: '{{ execution_role_identity_config }}'
          unified_studio_settings:
            studio_web_portal_access: '{{ studio_web_portal_access }}'
            domain_account_id: '{{ domain_account_id }}'
            domain_region: '{{ domain_region }}'
            domain_id: '{{ domain_id }}'
            project_id: '{{ project_id }}'
            environment_id: '{{ environment_id }}'
            project_s3_path: '{{ project_s3_path }}'
      - name: app_security_group_management
        value: '{{ app_security_group_management }}'
      - name: tag_propagation
        value: '{{ tag_propagation }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>domain</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.sagemaker.domains
SET PatchDocument = string('{{ {
    "AppNetworkAccessType": app_network_access_type,
    "DefaultUserSettings": default_user_settings,
    "DefaultSpaceSettings": default_space_settings,
    "SubnetIds": subnet_ids,
    "AppSecurityGroupManagement": app_security_group_management,
    "TagPropagation": tag_propagation
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ domain_id }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sagemaker.domains
WHERE
  Identifier = '{{ domain_id }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>domains</code> resource, the following permissions are required:

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
sagemaker:CreateApp,
sagemaker:CreateDomain,
sagemaker:DescribeDomain,
sagemaker:DescribeImage,
sagemaker:DescribeImageVersion,
iam:CreateServiceLinkedRole,
iam:PassRole,
efs:CreateFileSystem,
kms:CreateGrant,
kms:Decrypt,
kms:DescribeKey,
kms:GenerateDataKeyWithoutPlainText
```

</TabItem>
<TabItem value="read">

```json
sagemaker:DescribeDomain
```

</TabItem>
<TabItem value="update">

```json
sagemaker:CreateApp,
sagemaker:UpdateDomain,
sagemaker:DescribeDomain,
sagemaker:DescribeImage,
sagemaker:DescribeImageVersion,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
sagemaker:DeleteApp,
sagemaker:DeleteDomain,
sagemaker:DescribeDomain
```

</TabItem>
<TabItem value="list">

```json
sagemaker:ListDomains
```

</TabItem>
</Tabs>