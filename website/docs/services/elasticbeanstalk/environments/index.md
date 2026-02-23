---
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
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

Creates, updates, deletes or gets an <code>environment</code> resource or lists <code>environments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>environments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::ElasticBeanstalk::Environment</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.elasticbeanstalk.environments" /></td></tr>
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
    "name": "platform_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the custom platform to use with the environment."
  },
  {
    "name": "application_name",
    "type": "string",
    "description": "The name of the application that is associated with this environment."
  },
  {
    "name": "description",
    "type": "string",
    "description": "Your description for this environment."
  },
  {
    "name": "environment_name",
    "type": "string",
    "description": "A unique name for the environment."
  },
  {
    "name": "operations_role",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role."
  },
  {
    "name": "tier",
    "type": "object",
    "description": "Specifies the tier to use in creating this environment. The environment tier that you choose determines whether Elastic Beanstalk provisions resources to support a web application that handles HTTP(S) requests or a web application that handles background-processing tasks.",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": "The type of this environment tier."
      },
      {
        "name": "version",
        "type": "string",
        "description": "The version of this environment tier. When you don't set a value to it, Elastic Beanstalk uses the latest compatible worker tier version."
      },
      {
        "name": "name",
        "type": "string",
        "description": "The name of this environment tier."
      }
    ]
  },
  {
    "name": "version_label",
    "type": "string",
    "description": "The name of the application version to deploy."
  },
  {
    "name": "endpoint_url",
    "type": "string",
    "description": ""
  },
  {
    "name": "option_settings",
    "type": "array",
    "description": "Key-value pairs defining configuration options for this environment, such as the instance type.",
    "children": [
      {
        "name": "resource_name",
        "type": "string",
        "description": "A unique resource name for the option setting. Use it for a time–based scaling configuration option."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The current value for the configuration option."
      },
      {
        "name": "namespace",
        "type": "string",
        "description": "A unique namespace that identifies the option's associated AWS resource."
      },
      {
        "name": "option_name",
        "type": "string",
        "description": "The name of the configuration option."
      }
    ]
  },
  {
    "name": "template_name",
    "type": "string",
    "description": "The name of the Elastic Beanstalk configuration template to use with the environment."
  },
  {
    "name": "solution_stack_name",
    "type": "string",
    "description": "The name of an Elastic Beanstalk solution stack (platform version) to use with the environment."
  },
  {
    "name": "cname_prefix",
    "type": "string",
    "description": "If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL. If not specified, the CNAME is generated automatically by appending a random alphanumeric string to the environment name."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Specifies the tags applied to resources in the environment.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag."
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
    "name": "environment_name",
    "type": "string",
    "description": "A unique name for the environment."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-environment.html"><code>AWS::ElasticBeanstalk::Environment</code></a>.

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
    <td><code>environments</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ApplicationName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>environments</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>environments</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>environments_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>environments</code></td>
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

Gets all properties from an individual <code>environment</code>.
```sql
SELECT
region,
platform_arn,
application_name,
description,
environment_name,
operations_role,
tier,
version_label,
endpoint_url,
option_settings,
template_name,
solution_stack_name,
cname_prefix,
tags
FROM awscc.elasticbeanstalk.environments
WHERE region = 'us-east-1' AND Identifier = '{{ environment_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>environments</code> in a region.
```sql
SELECT
region,
environment_name
FROM awscc.elasticbeanstalk.environments_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>environment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.elasticbeanstalk.environments (
 ApplicationName,
 region
)
SELECT
'{{ application_name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.elasticbeanstalk.environments (
 PlatformArn,
 ApplicationName,
 Description,
 EnvironmentName,
 OperationsRole,
 Tier,
 VersionLabel,
 OptionSettings,
 TemplateName,
 SolutionStackName,
 CNAMEPrefix,
 Tags,
 region
)
SELECT
 '{{ platform_arn }}',
 '{{ application_name }}',
 '{{ description }}',
 '{{ environment_name }}',
 '{{ operations_role }}',
 '{{ tier }}',
 '{{ version_label }}',
 '{{ option_settings }}',
 '{{ template_name }}',
 '{{ solution_stack_name }}',
 '{{ cname_prefix }}',
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
  - name: environment
    props:
      - name: platform_arn
        value: '{{ platform_arn }}'
      - name: application_name
        value: '{{ application_name }}'
      - name: description
        value: '{{ description }}'
      - name: environment_name
        value: '{{ environment_name }}'
      - name: operations_role
        value: '{{ operations_role }}'
      - name: tier
        value:
          type: '{{ type }}'
          version: '{{ version }}'
          name: '{{ name }}'
      - name: version_label
        value: '{{ version_label }}'
      - name: option_settings
        value:
          - resource_name: '{{ resource_name }}'
            value: '{{ value }}'
            namespace: '{{ namespace }}'
            option_name: '{{ option_name }}'
      - name: template_name
        value: '{{ template_name }}'
      - name: solution_stack_name
        value: '{{ solution_stack_name }}'
      - name: cname_prefix
        value: '{{ cname_prefix }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>environment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.elasticbeanstalk.environments
SET PatchDocument = string('{{ {
    "PlatformArn": platform_arn,
    "Description": description,
    "OperationsRole": operations_role,
    "VersionLabel": version_label,
    "OptionSettings": option_settings,
    "TemplateName": template_name,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ environment_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.elasticbeanstalk.environments
WHERE Identifier = '{{ environment_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>environments</code> resource, the following permissions are required:

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
elasticbeanstalk:DescribeEnvironments,
elasticbeanstalk:DescribeConfigurationSettings,
elasticbeanstalk:ListTagsForResource
```

</TabItem>
<TabItem value="create">

```json
elasticbeanstalk:DescribeEnvironments,
elasticbeanstalk:CreateEnvironment,
elasticbeanstalk:AddTags,
elasticbeanstalk:ListTagsForResource,
iam:PassRole
```

</TabItem>
<TabItem value="update">

```json
elasticbeanstalk:DescribeEnvironments,
elasticbeanstalk:UpdateEnvironment,
elasticbeanstalk:AssociateEnvironmentOperationsRole,
elasticbeanstalk:DisassociateEnvironmentOperationsRole,
elasticbeanstalk:AddTags,
elasticbeanstalk:ListTagsForResource,
elasticbeanstalk:RemoveTags,
s3:GetBucketLocation,
s3:GetBucketPolicy,
s3:ListBucket,
s3:PutBucketPolicy,
iam:PassRole
```

</TabItem>
<TabItem value="list">

```json
elasticbeanstalk:DescribeEnvironments,
elasticbeanstalk:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
elasticbeanstalk:DescribeEnvironments,
elasticbeanstalk:TerminateEnvironment
```

</TabItem>
</Tabs>