---
title: distribution_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - distribution_configurations
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

Creates, updates, deletes or gets a <code>distribution_configuration</code> resource or lists <code>distribution_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>distribution_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::ImageBuilder::DistributionConfiguration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.imagebuilder.distribution_configurations" /></td></tr>
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
    "description": "The Amazon Resource Name (ARN) of the distribution configuration."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the distribution configuration."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the distribution configuration."
  },
  {
    "name": "distributions",
    "type": "array",
    "description": "The distributions of the distribution configuration.",
    "children": [
      {
        "name": "region",
        "type": "string",
        "description": "region"
      },
      {
        "name": "ami_distribution_configuration",
        "type": "object",
        "description": "The specific AMI settings (for example, launch permissions, AMI tags).",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "The name of the AMI distribution configuration."
          },
          {
            "name": "kms_key_id",
            "type": "string",
            "description": "The KMS key identifier used to encrypt the distributed image."
          },
          {
            "name": "description",
            "type": "string",
            "description": "The description of the AMI distribution configuration."
          },
          {
            "name": "ami_tags",
            "type": "object",
            "description": "The tags to apply to AMIs distributed to this Region."
          },
          {
            "name": "target_account_ids",
            "type": "array",
            "description": "The ID of accounts to which you want to distribute an image."
          },
          {
            "name": "launch_permission_configuration",
            "type": "object",
            "description": "Launch permissions can be used to configure which AWS accounts can use the AMI to launch instances.",
            "children": [
              {
                "name": "user_ids",
                "type": "array",
                "description": "The AWS account ID."
              },
              {
                "name": "user_groups",
                "type": "array",
                "description": "The name of the group."
              },
              {
                "name": "organization_arns",
                "type": "array",
                "description": "The ARN for an Amazon Web Services Organization that you want to share your AMI with."
              },
              {
                "name": "organizational_unit_arns",
                "type": "array",
                "description": "The ARN for an Organizations organizational unit (OU) that you want to share your AMI with."
              }
            ]
          }
        ]
      },
      {
        "name": "container_distribution_configuration",
        "type": "object",
        "description": "Container distribution settings for encryption, licensing, and sharing in a specific Region.",
        "children": [
          {
            "name": "description",
            "type": "string",
            "description": "The description of the container distribution configuration."
          },
          {
            "name": "container_tags",
            "type": "array",
            "description": "Tags that are attached to the container distribution configuration."
          },
          {
            "name": "target_repository",
            "type": "object",
            "description": "The destination repository for the container distribution configuration.",
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
          }
        ]
      },
      {
        "name": "license_configuration_arns",
        "type": "array",
        "description": "The License Manager Configuration to associate with the AMI in the specified Region."
      },
      {
        "name": "launch_template_configurations",
        "type": "array",
        "description": "A group of launchTemplateConfiguration settings that apply to image distribution.",
        "children": [
          {
            "name": "launch_template_id",
            "type": "string",
            "description": "Identifies the EC2 launch template to use."
          },
          {
            "name": "account_id",
            "type": "string",
            "description": "The account ID that this configuration applies to."
          },
          {
            "name": "set_default_version",
            "type": "boolean",
            "description": "Set the specified EC2 launch template as the default launch template for the specified account."
          }
        ]
      },
      {
        "name": "fast_launch_configurations",
        "type": "array",
        "description": "The Windows faster-launching configurations to use for AMI distribution.",
        "children": [
          {
            "name": "account_id",
            "type": "string",
            "description": "The owner account ID for the fast-launch enabled Windows AMI."
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": "A Boolean that represents the current state of faster launching for the Windows AMI. Set to true to start using Windows faster launching, or false to stop using it."
          },
          {
            "name": "launch_template",
            "type": "object",
            "description": "The launch template that the fast-launch enabled Windows AMI uses when it launches Windows instances to create pre-provisioned snapshots.",
            "children": [
              {
                "name": "launch_template_id",
                "type": "string",
                "description": "The ID of the launch template to use for faster launching for a Windows AMI."
              },
              {
                "name": "launch_template_name",
                "type": "string",
                "description": "The name of the launch template to use for faster launching for a Windows AMI."
              },
              {
                "name": "launch_template_version",
                "type": "string",
                "description": "The version of the launch template to use for faster launching for a Windows AMI."
              }
            ]
          },
          {
            "name": "max_parallel_launches",
            "type": "integer",
            "description": "The maximum number of parallel instances that are launched for creating resources."
          },
          {
            "name": "snapshot_configuration",
            "type": "object",
            "description": "Configuration settings for managing the number of snapshots that are created from pre-provisioned instances for the Windows AMI when faster launching is enabled.",
            "children": [
              {
                "name": "target_resource_count",
                "type": "integer",
                "description": "The number of pre-provisioned snapshots to keep on hand for a fast-launch enabled Windows AMI."
              }
            ]
          }
        ]
      },
      {
        "name": "ssm_parameter_configurations",
        "type": "array",
        "description": "The SSM parameter configurations to use for AMI distribution.",
        "children": [
          {
            "name": "ami_account_id",
            "type": "string",
            "description": "The account ID for the AMI to update the parameter with."
          },
          {
            "name": "parameter_name",
            "type": "string",
            "description": "The name of the SSM parameter."
          },
          {
            "name": "data_type",
            "type": "string",
            "description": "The data type of the SSM parameter."
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "object",
    "description": "The tags associated with the component."
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
    "description": "The Amazon Resource Name (ARN) of the distribution configuration."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-distributionconfiguration.html"><code>AWS::ImageBuilder::DistributionConfiguration</code></a>.

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
    <td><code>distribution_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, Distributions, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>distribution_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>distribution_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>distribution_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>distribution_configurations</code></td>
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

Gets all properties from an individual <code>distribution_configuration</code>.
```sql
SELECT
region,
arn,
name,
description,
distributions,
tags
FROM awscc.imagebuilder.distribution_configurations
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>distribution_configurations</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.imagebuilder.distribution_configurations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>distribution_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.imagebuilder.distribution_configurations (
 Name,
 Distributions,
 region
)
SELECT 
'{{ Name }}',
 '{{ Distributions }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.imagebuilder.distribution_configurations (
 Name,
 Description,
 Distributions,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ Distributions }}',
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
  - name: distribution_configuration
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: Distributions
        value:
          - Region: '{{ Region }}'
            AmiDistributionConfiguration:
              Name: '{{ Name }}'
              KmsKeyId: '{{ KmsKeyId }}'
              Description: '{{ Description }}'
              AmiTags: {}
              TargetAccountIds:
                - '{{ TargetAccountIds[0] }}'
              LaunchPermissionConfiguration:
                UserIds:
                  - '{{ UserIds[0] }}'
                UserGroups:
                  - '{{ UserGroups[0] }}'
                OrganizationArns:
                  - '{{ OrganizationArns[0] }}'
                OrganizationalUnitArns:
                  - '{{ OrganizationalUnitArns[0] }}'
            ContainerDistributionConfiguration:
              Description: '{{ Description }}'
              ContainerTags:
                - '{{ ContainerTags[0] }}'
              TargetRepository:
                Service: '{{ Service }}'
                RepositoryName: '{{ RepositoryName }}'
            LicenseConfigurationArns:
              - '{{ LicenseConfigurationArns[0] }}'
            LaunchTemplateConfigurations:
              - LaunchTemplateId: '{{ LaunchTemplateId }}'
                AccountId: '{{ AccountId }}'
                SetDefaultVersion: '{{ SetDefaultVersion }}'
            FastLaunchConfigurations:
              - AccountId: '{{ AccountId }}'
                Enabled: '{{ Enabled }}'
                LaunchTemplate:
                  LaunchTemplateId: '{{ LaunchTemplateId }}'
                  LaunchTemplateName: '{{ LaunchTemplateName }}'
                  LaunchTemplateVersion: '{{ LaunchTemplateVersion }}'
                MaxParallelLaunches: '{{ MaxParallelLaunches }}'
                SnapshotConfiguration:
                  TargetResourceCount: '{{ TargetResourceCount }}'
            SsmParameterConfigurations:
              - AmiAccountId: '{{ AmiAccountId }}'
                ParameterName: '{{ ParameterName }}'
                DataType: '{{ DataType }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>distribution_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.imagebuilder.distribution_configurations
SET PatchDocument = string('{{ {
    "Description": description,
    "Distributions": distributions,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.imagebuilder.distribution_configurations
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>distribution_configurations</code> resource, the following permissions are required:

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
iam:GetRole,
iam:CreateServiceLinkedRole,
ec2:DescribeLaunchTemplates,
ec2:CreateLaunchTemplateVersion,
ec2:ModifyLaunchTemplate,
ssm:GetParameter,
imagebuilder:TagResource,
imagebuilder:GetDistributionConfiguration,
imagebuilder:CreateDistributionConfiguration
```

</TabItem>
<TabItem value="update">

```json
ec2:DescribeLaunchTemplates,
ec2:CreateLaunchTemplateVersion,
ec2:ModifyLaunchTemplate,
ssm:GetParameter,
imagebuilder:GetDistributionConfiguration,
imagebuilder:UpdateDistributionConfiguration,
imagebuilder:TagResource,
imagebuilder:UntagResource
```

</TabItem>
<TabItem value="read">

```json
imagebuilder:GetDistributionConfiguration
```

</TabItem>
<TabItem value="delete">

```json
imagebuilder:GetDistributionConfiguration,
imagebuilder:UntagResource,
imagebuilder:DeleteDistributionConfiguration
```

</TabItem>
<TabItem value="list">

```json
imagebuilder:ListDistributionConfigurations
```

</TabItem>
</Tabs>