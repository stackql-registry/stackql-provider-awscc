---
title: projects
hide_title: false
hide_table_of_contents: false
keywords:
  - projects
  - evidently
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
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Evidently::Project</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.evidently.projects" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "data_delivery",
    "type": "object",
    "description": "Destinations for data.",
    "children": [
      {
        "name": "s3",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "bucket_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "prefix",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "log_group",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "app_config_resource",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "application_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "environment_id",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html"><code>AWS::Evidently::Project</code></a>.

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
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>project</code>.
```sql
SELECT
region,
arn,
name,
description,
data_delivery,
app_config_resource,
tags
FROM awscc.evidently.projects
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
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
INSERT INTO awscc.evidently.projects (
 Name,
 region
)
SELECT
'{{ name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.evidently.projects (
 Name,
 Description,
 DataDelivery,
 AppConfigResource,
 Tags,
 region
)
SELECT
 '{{ name }}',
 '{{ description }}',
 '{{ data_delivery }}',
 '{{ app_config_resource }}',
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
  - name: project
    props:
      - name: name
        value: '{{ name }}'
      - name: description
        value: '{{ description }}'
      - name: data_delivery
        value:
          s3:
            bucket_name: '{{ bucket_name }}'
            prefix: '{{ prefix }}'
          log_group: '{{ log_group }}'
      - name: app_config_resource
        value:
          application_id: '{{ application_id }}'
          environment_id: '{{ environment_id }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>project</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.evidently.projects
SET PatchDocument = string('{{ {
    "Description": description,
    "DataDelivery": data_delivery,
    "AppConfigResource": app_config_resource,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.evidently.projects
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>projects</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="create">

```json
evidently:CreateProject,
evidently:GetProject,
logs:CreateLogDelivery,
logs:GetLogDelivery,
logs:ListLogDeliveries,
s3:PutBucketPolicy,
s3:GetBucketPolicy,
evidently:TagResource,
evidently:ExportProjectAsConfiguration,
appconfig:GetEnvironment,
appconfig:CreateConfigurationProfile,
appconfig:CreateHostedConfigurationVersion,
appconfig:CreateExtensionAssociation,
appconfig:TagResource,
iam:GetRole,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="read">

```json
evidently:GetProject,
logs:GetLogDelivery,
logs:ListLogDeliveries,
s3:GetBucketPolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups,
evidently:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
evidently:UpdateProject,
evidently:UpdateProjectDataDelivery,
logs:GetLogDelivery,
logs:UpdateLogDelivery,
logs:ListLogDeliveries,
s3:PutBucketPolicy,
s3:GetBucketPolicy,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups,
evidently:TagResource,
evidently:UntagResource,
evidently:ListTagsForResource,
evidently:GetProject,
evidently:ExportProjectAsConfiguration,
appconfig:GetEnvironment,
appconfig:CreateConfigurationProfile,
appconfig:CreateHostedConfigurationVersion,
appconfig:CreateExtensionAssociation,
appconfig:TagResource,
iam:GetRole,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="delete">

```json
evidently:DeleteProject,
evidently:GetProject,
logs:CreateLogDelivery,
logs:GetLogDelivery,
logs:DeleteLogDelivery,
logs:ListLogDeliveries,
s3:GetBucketPolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups,
evidently:UntagResource,
appconfig:DeleteHostedConfigurationVersion,
appconfig:DeleteExtensionAssociation,
appconfig:DeleteConfigurationProfile
```

</TabItem>
</Tabs>