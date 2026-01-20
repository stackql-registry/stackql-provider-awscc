---
title: projects
hide_title: false
hide_table_of_contents: false
keywords:
  - projects
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

Creates, updates, deletes or gets a <code>project</code> resource or lists <code>projects</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>projects</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SageMaker::Project</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sagemaker.projects" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
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
    "name": "project_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the Project."
  },
  {
    "name": "project_id",
    "type": "string",
    "description": "Project Id."
  },
  {
    "name": "project_name",
    "type": "string",
    "description": "The name of the project."
  },
  {
    "name": "project_description",
    "type": "string",
    "description": "The description of the project."
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "The time at which the project was created."
  },
  {
    "name": "service_catalog_provisioning_details",
    "type": "object",
    "description": "Input ServiceCatalog Provisioning Details",
    "children": [
      {
        "name": "product_id",
        "type": "string",
        "description": "Service Catalog product identifier."
      },
      {
        "name": "provisioning_artifact_id",
        "type": "string",
        "description": "The identifier of the provisioning artifact (also known as a version)."
      },
      {
        "name": "path_id",
        "type": "string",
        "description": "The path identifier of the product."
      },
      {
        "name": "provisioning_parameters",
        "type": "array",
        "description": "Parameters specified by the administrator that are required for provisioning the product.",
        "children": [
          {
            "name": "key",
            "type": "string",
            "description": "The parameter key."
          },
          {
            "name": "value",
            "type": "string",
            "description": "The parameter value."
          }
        ]
      }
    ]
  },
  {
    "name": "service_catalog_provisioned_product_details",
    "type": "object",
    "description": "Provisioned ServiceCatalog Details",
    "children": [
      {
        "name": "provisioned_product_id",
        "type": "string",
        "description": "The identifier of the provisioning artifact (also known as a version)."
      },
      {
        "name": "provisioned_product_status_message",
        "type": "string",
        "description": "Provisioned Product Status Message"
      }
    ]
  },
  {
    "name": "template_provider_details",
    "type": "array",
    "description": "An array of template providers associated with the project.",
    "children": [
      {
        "name": "cfn_template_provider_detail",
        "type": "object",
        "description": "CloudFormation template provider details for a SageMaker project.",
        "children": [
          {
            "name": "parameters",
            "type": "array",
            "description": "A list of parameters used in the CloudFormation template.",
            "children": [
              {
                "name": "key",
                "type": "string",
                "description": "The key of the parameter."
              },
              {
                "name": "value",
                "type": "string",
                "description": "The value of the parameter."
              }
            ]
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the IAM role used by the template provider."
          },
          {
            "name": "template_name",
            "type": "string",
            "description": "The name of the template used for the project."
          },
          {
            "name": "template_url",
            "type": "string",
            "description": "The URL of the CloudFormation template."
          }
        ]
      }
    ]
  },
  {
    "name": "project_status",
    "type": "string",
    "description": "The status of a project."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html"><code>AWS::SageMaker::Project</code></a>.

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
    <td><CopyableCode code="ProjectName, region" /></td>
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

Gets all properties from an individual <code>project</code>.
```sql
SELECT
region,
tags,
project_arn,
project_id,
project_name,
project_description,
creation_time,
service_catalog_provisioning_details,
service_catalog_provisioned_product_details,
template_provider_details,
project_status
FROM awscc.sagemaker.projects
WHERE region = 'us-east-1' AND data__Identifier = '<ProjectArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>project</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sagemaker.projects (
 ProjectName,
 region
)
SELECT 
'{{ ProjectName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.sagemaker.projects (
 Tags,
 ProjectName,
 ProjectDescription,
 ServiceCatalogProvisioningDetails,
 ServiceCatalogProvisionedProductDetails,
 TemplateProviderDetails,
 region
)
SELECT 
 '{{ Tags }}',
 '{{ ProjectName }}',
 '{{ ProjectDescription }}',
 '{{ ServiceCatalogProvisioningDetails }}',
 '{{ ServiceCatalogProvisionedProductDetails }}',
 '{{ TemplateProviderDetails }}',
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
  - name: project
    props:
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: ProjectName
        value: '{{ ProjectName }}'
      - name: ProjectDescription
        value: '{{ ProjectDescription }}'
      - name: ServiceCatalogProvisioningDetails
        value:
          ProductId: '{{ ProductId }}'
          ProvisioningArtifactId: '{{ ProvisioningArtifactId }}'
          PathId: '{{ PathId }}'
          ProvisioningParameters:
            - Key: '{{ Key }}'
              Value: '{{ Value }}'
      - name: ServiceCatalogProvisionedProductDetails
        value:
          ProvisionedProductId: null
          ProvisionedProductStatusMessage: '{{ ProvisionedProductStatusMessage }}'
      - name: TemplateProviderDetails
        value:
          - CfnTemplateProviderDetail:
              Parameters:
                - Key: '{{ Key }}'
                  Value: '{{ Value }}'
              RoleARN: '{{ RoleARN }}'
              TemplateName: '{{ TemplateName }}'
              TemplateURL: '{{ TemplateURL }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sagemaker.projects
WHERE data__Identifier = '<ProjectArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>projects</code> resource, the following permissions are required:

### Create
```json
sagemaker:AddTags,
sagemaker:CreateProject,
sagemaker:DescribeProject,
sagemaker:ListTags,
servicecatalog:DescribeProduct,
servicecatalog:DescribeProvisioningArtifact,
servicecatalog:ProvisionProduct,
servicecatalog:DescribeProvisionedProduct,
servicecatalog:TerminateProvisionedProduct,
cloudformation:DescribeStacks,
cloudformation:CreateStack,
iam:PassRole,
s3:GetObject
```

### Read
```json
sagemaker:DescribeProject,
sagemaker:ListTags
```

### Update
```json
sagemaker:DescribeProject,
sagemaker:ListTags,
sagemaker:AddTags,
sagemaker:DeleteTags
```

### Delete
```json
sagemaker:DeleteProject,
sagemaker:DescribeProject,
servicecatalog:TerminateProvisionedProduct,
servicecatalog:DescribeRecord,
cloudformation:DescribeStacks,
cloudformation:DeleteStack
```

### List
```json
sagemaker:ListProjects
```
