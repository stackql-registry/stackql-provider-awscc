---
title: configuration_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_templates
  - elasticbeanstalk
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

Creates, updates, deletes or gets a <code>configuration_template</code> resource or lists <code>configuration_templates</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>configuration_templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::ElasticBeanstalk::ConfigurationTemplate</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.elasticbeanstalk.configuration_templates" /></td></tr>
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
    "name": "application_name",
    "type": "string",
    "description": "The name of the Elastic Beanstalk application to associate with this configuration template."
  },
  {
    "name": "description",
    "type": "string",
    "description": "An optional description for this configuration."
  },
  {
    "name": "environment_id",
    "type": "string",
    "description": "The ID of an environment whose settings you want to use to create the configuration template. You must specify EnvironmentId if you don't specify PlatformArn, SolutionStackName, or SourceConfiguration."
  },
  {
    "name": "option_settings",
    "type": "array",
    "description": "Option values for the Elastic Beanstalk configuration, such as the instance type. If specified, these values override the values obtained from the solution stack or the source configuration template. For a complete list of Elastic Beanstalk configuration options, see &#91;Option Values&#93;(https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html) in the AWS Elastic Beanstalk Developer Guide.",
    "children": [
      {
        "name": "namespace",
        "type": "string",
        "description": "A unique namespace that identifies the option's associated AWS resource."
      },
      {
        "name": "option_name",
        "type": "string",
        "description": "The name of the configuration option."
      },
      {
        "name": "resource_name",
        "type": "string",
        "description": "A unique resource name for the option setting. Use it for a time–based scaling configuration option."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The current value for the configuration option."
      }
    ]
  },
  {
    "name": "platform_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the custom platform. For more information, see &#91;Custom Platforms&#93;(https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html) in the AWS Elastic Beanstalk Developer Guide."
  },
  {
    "name": "solution_stack_name",
    "type": "string",
    "description": "The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses. For example, 64bit Amazon Linux 2013.09 running Tomcat 7 Java 7. A solution stack specifies the operating system, runtime, and application server for a configuration template. It also determines the set of configuration options as well as the possible and default values. For more information, see &#91;Supported Platforms&#93;(https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html) in the AWS Elastic Beanstalk Developer Guide.<br />You must specify SolutionStackName if you don't specify PlatformArn, EnvironmentId, or SourceConfiguration.<br />Use the ListAvailableSolutionStacks API to obtain a list of available solution stacks."
  },
  {
    "name": "source_configuration",
    "type": "object",
    "description": "An Elastic Beanstalk configuration template to base this one on. If specified, Elastic Beanstalk uses the configuration values from the specified configuration template to create a new configuration.<br />Values specified in OptionSettings override any values obtained from the SourceConfiguration.<br />You must specify SourceConfiguration if you don't specify PlatformArn, EnvironmentId, or SolutionStackName.<br />Constraint: If both solution stack name and source configuration are specified, the solution stack of the source configuration template must match the specified solution stack name.",
    "children": [
      {
        "name": "application_name",
        "type": "string",
        "description": "The name of the application associated with the configuration."
      },
      {
        "name": "template_name",
        "type": "string",
        "description": "The name of the configuration template."
      }
    ]
  },
  {
    "name": "template_name",
    "type": "string",
    "description": "The name of the configuration template"
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
    "name": "application_name",
    "type": "string",
    "description": "The name of the Elastic Beanstalk application to associate with this configuration template."
  },
  {
    "name": "template_name",
    "type": "string",
    "description": "The name of the configuration template"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-configurationtemplate.html"><code>AWS::ElasticBeanstalk::ConfigurationTemplate</code></a>.

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
    <td><code>configuration_templates</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ApplicationName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>configuration_templates</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>configuration_templates</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>configuration_templates_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>configuration_templates</code></td>
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

Gets all properties from an individual <code>configuration_template</code>.
```sql
SELECT
region,
application_name,
description,
environment_id,
option_settings,
platform_arn,
solution_stack_name,
source_configuration,
template_name
FROM awscc.elasticbeanstalk.configuration_templates
WHERE region = 'us-east-1' AND Identifier = '<ApplicationName>|<TemplateName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>configuration_templates</code> in a region.
```sql
SELECT
region,
application_name,
template_name
FROM awscc.elasticbeanstalk.configuration_templates_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>configuration_template</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.elasticbeanstalk.configuration_templates (
 ApplicationName,
 region
)
SELECT 
'{{ ApplicationName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.elasticbeanstalk.configuration_templates (
 ApplicationName,
 Description,
 EnvironmentId,
 OptionSettings,
 PlatformArn,
 SolutionStackName,
 SourceConfiguration,
 region
)
SELECT 
 '{{ ApplicationName }}',
 '{{ Description }}',
 '{{ EnvironmentId }}',
 '{{ OptionSettings }}',
 '{{ PlatformArn }}',
 '{{ SolutionStackName }}',
 '{{ SourceConfiguration }}',
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
  - name: configuration_template
    props:
      - name: ApplicationName
        value: '{{ ApplicationName }}'
      - name: Description
        value: '{{ Description }}'
      - name: EnvironmentId
        value: '{{ EnvironmentId }}'
      - name: OptionSettings
        value:
          - Namespace: '{{ Namespace }}'
            OptionName: '{{ OptionName }}'
            ResourceName: '{{ ResourceName }}'
            Value: '{{ Value }}'
      - name: PlatformArn
        value: '{{ PlatformArn }}'
      - name: SolutionStackName
        value: '{{ SolutionStackName }}'
      - name: SourceConfiguration
        value:
          ApplicationName: '{{ ApplicationName }}'
          TemplateName: '{{ TemplateName }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.elasticbeanstalk.configuration_templates
SET PatchDocument = string('{{ {
    "Description": description,
    "OptionSettings": option_settings
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ApplicationName>|<TemplateName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.elasticbeanstalk.configuration_templates
WHERE Identifier = '<ApplicationName|TemplateName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>configuration_templates</code> resource, the following permissions are required:

### Create
```json
elasticbeanstalk:CreateConfigurationTemplate,
s3:CreateBucket,
s3:PutBucketAcl,
s3:PutBucketObjectLockConfiguration,
s3:PutBucketVersioning,
s3:PutBucketOwnershipControls,
s3:PutBucketPolicy,
s3:PutBucketPublicAccessBlock,
s3:PutObject,
s3:ListBucket,
s3:GetObject,
s3:GetBucketLocation,
s3:GetBucketPolicy,
ec2:DescribeImages,
ec2:CreateLaunchTemplate
```

### Read
```json
elasticbeanstalk:DescribeConfigurationSettings,
ec2:CreateLaunchTemplate,
s3:ListBucket,
s3:GetObject,
s3:GetBucketLocation,
s3:GetBucketPolicy
```

### Update
```json
elasticbeanstalk:UpdateConfigurationTemplate,
ec2:CreateLaunchTemplate,
s3:PutObject,
s3:ListBucket,
s3:GetObject,
s3:GetBucketLocation,
s3:GetBucketPolicy,
ec2:DescribeImages
```

### Delete
```json
elasticbeanstalk:DeleteConfigurationTemplate,
elasticbeanstalk:DescribeConfigurationSettings,
ec2:CreateLaunchTemplate,
s3:ListBucket,
s3:GetObject,
s3:GetBucketLocation,
s3:GetBucketPolicy,
s3:DeleteObject
```

### List
```json
elasticbeanstalk:DescribeApplications
```
