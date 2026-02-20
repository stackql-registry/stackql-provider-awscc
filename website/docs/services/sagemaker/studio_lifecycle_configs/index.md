---
title: studio_lifecycle_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - studio_lifecycle_configs
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

Creates, updates, deletes or gets a <code>studio_lifecycle_config</code> resource or lists <code>studio_lifecycle_configs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>studio_lifecycle_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SageMaker::StudioLifecycleConfig</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sagemaker.studio_lifecycle_configs" /></td></tr>
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
    "name": "studio_lifecycle_config_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the Lifecycle Configuration."
  },
  {
    "name": "studio_lifecycle_config_app_type",
    "type": "string",
    "description": "The App type that the Lifecycle Configuration is attached to."
  },
  {
    "name": "studio_lifecycle_config_content",
    "type": "string",
    "description": "The content of your Amazon SageMaker Studio Lifecycle Configuration script. This content must be base64 encoded."
  },
  {
    "name": "studio_lifecycle_config_name",
    "type": "string",
    "description": "The name of the Amazon SageMaker Studio Lifecycle Configuration."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags to be associated with the Lifecycle Configuration. Each tag consists of a key and an optional value. Tag keys must be unique per resource. Tags are searchable using the Search API.",
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
    "name": "studio_lifecycle_config_name",
    "type": "string",
    "description": "The name of the Amazon SageMaker Studio Lifecycle Configuration."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-studiolifecycleconfig.html"><code>AWS::SageMaker::StudioLifecycleConfig</code></a>.

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
    <td><code>studio_lifecycle_configs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="StudioLifecycleConfigAppType, StudioLifecycleConfigContent, StudioLifecycleConfigName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>studio_lifecycle_configs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>studio_lifecycle_configs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>studio_lifecycle_configs</code></td>
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

Gets all properties from an individual <code>studio_lifecycle_config</code>.
```sql
SELECT
region,
studio_lifecycle_config_arn,
studio_lifecycle_config_app_type,
studio_lifecycle_config_content,
studio_lifecycle_config_name,
tags
FROM awscc.sagemaker.studio_lifecycle_configs
WHERE region = 'us-east-1' AND Identifier = '<StudioLifecycleConfigName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>studio_lifecycle_configs</code> in a region.
```sql
SELECT
region,
studio_lifecycle_config_name
FROM awscc.sagemaker.studio_lifecycle_configs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>studio_lifecycle_config</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sagemaker.studio_lifecycle_configs (
 StudioLifecycleConfigAppType,
 StudioLifecycleConfigContent,
 StudioLifecycleConfigName,
 region
)
SELECT 
'{{ StudioLifecycleConfigAppType }}',
 '{{ StudioLifecycleConfigContent }}',
 '{{ StudioLifecycleConfigName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.sagemaker.studio_lifecycle_configs (
 StudioLifecycleConfigAppType,
 StudioLifecycleConfigContent,
 StudioLifecycleConfigName,
 Tags,
 region
)
SELECT 
 '{{ StudioLifecycleConfigAppType }}',
 '{{ StudioLifecycleConfigContent }}',
 '{{ StudioLifecycleConfigName }}',
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
  - name: studio_lifecycle_config
    props:
      - name: StudioLifecycleConfigAppType
        value: '{{ StudioLifecycleConfigAppType }}'
      - name: StudioLifecycleConfigContent
        value: '{{ StudioLifecycleConfigContent }}'
      - name: StudioLifecycleConfigName
        value: '{{ StudioLifecycleConfigName }}'
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
DELETE FROM awscc.sagemaker.studio_lifecycle_configs
WHERE Identifier = '<StudioLifecycleConfigName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>studio_lifecycle_configs</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
sagemaker:CreateStudioLifecycleConfig,
sagemaker:DescribeStudioLifecycleConfig,
sagemaker:AddTags,
sagemaker:ListTags
```

</TabItem>
<TabItem value="read">

```json
sagemaker:DescribeStudioLifecycleConfig,
sagemaker:ListTags
```

</TabItem>
<TabItem value="delete">

```json
sagemaker:DeleteStudioLifecycleConfig,
sagemaker:DescribeStudioLifecycleConfig,
sagemaker:DeleteTags,
sagemaker:ListTags
```

</TabItem>
<TabItem value="list">

```json
sagemaker:ListStudioLifecycleConfigs,
sagemaker:ListTags
```

</TabItem>
</Tabs>