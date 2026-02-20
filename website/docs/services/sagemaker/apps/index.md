---
title: apps
hide_title: false
hide_table_of_contents: false
keywords:
  - apps
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

Creates, updates, deletes or gets an <code>app</code> resource or lists <code>apps</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>apps</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SageMaker::App</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sagemaker.apps" /></td></tr>
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
    "name": "app_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the app."
  },
  {
    "name": "app_name",
    "type": "string",
    "description": "The name of the app."
  },
  {
    "name": "app_type",
    "type": "string",
    "description": "The type of app."
  },
  {
    "name": "domain_id",
    "type": "string",
    "description": "The domain ID."
  },
  {
    "name": "resource_spec",
    "type": "object",
    "description": "The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.",
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
    "name": "tags",
    "type": "array",
    "description": "A list of tags to apply to the app.",
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
    "name": "user_profile_name",
    "type": "string",
    "description": "The user profile name."
  },
  {
    "name": "built_in_lifecycle_config_arn",
    "type": "string",
    "description": "The lifecycle configuration that runs before the default lifecycle configuration."
  },
  {
    "name": "recovery_mode",
    "type": "boolean",
    "description": "Indicates whether the application is launched in recovery mode."
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
    "name": "app_name",
    "type": "string",
    "description": "The name of the app."
  },
  {
    "name": "app_type",
    "type": "string",
    "description": "The type of app."
  },
  {
    "name": "domain_id",
    "type": "string",
    "description": "The domain ID."
  },
  {
    "name": "user_profile_name",
    "type": "string",
    "description": "The user profile name."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-app.html"><code>AWS::SageMaker::App</code></a>.

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
    <td><code>apps</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AppName, AppType, DomainId, UserProfileName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>apps</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>apps</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>apps_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>apps</code></td>
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

Gets all properties from an individual <code>app</code>.
```sql
SELECT
region,
app_arn,
app_name,
app_type,
domain_id,
resource_spec,
tags,
user_profile_name,
built_in_lifecycle_config_arn,
recovery_mode
FROM awscc.sagemaker.apps
WHERE region = 'us-east-1' AND Identifier = '<AppName>|<AppType>|<DomainId>|<UserProfileName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>apps</code> in a region.
```sql
SELECT
region,
app_name,
app_type,
domain_id,
user_profile_name
FROM awscc.sagemaker.apps_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>app</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sagemaker.apps (
 AppName,
 AppType,
 DomainId,
 UserProfileName,
 region
)
SELECT 
'{{ AppName }}',
 '{{ AppType }}',
 '{{ DomainId }}',
 '{{ UserProfileName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.sagemaker.apps (
 AppName,
 AppType,
 DomainId,
 ResourceSpec,
 Tags,
 UserProfileName,
 RecoveryMode,
 region
)
SELECT 
 '{{ AppName }}',
 '{{ AppType }}',
 '{{ DomainId }}',
 '{{ ResourceSpec }}',
 '{{ Tags }}',
 '{{ UserProfileName }}',
 '{{ RecoveryMode }}',
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
  - name: app
    props:
      - name: AppName
        value: '{{ AppName }}'
      - name: AppType
        value: '{{ AppType }}'
      - name: DomainId
        value: '{{ DomainId }}'
      - name: ResourceSpec
        value:
          InstanceType: '{{ InstanceType }}'
          SageMakerImageArn: '{{ SageMakerImageArn }}'
          SageMakerImageVersionArn: '{{ SageMakerImageVersionArn }}'
          LifecycleConfigArn: '{{ LifecycleConfigArn }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: UserProfileName
        value: '{{ UserProfileName }}'
      - name: RecoveryMode
        value: '{{ RecoveryMode }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.sagemaker.apps
SET PatchDocument = string('{{ {
    "Tags": tags,
    "RecoveryMode": recovery_mode
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<AppName>|<AppType>|<DomainId>|<UserProfileName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sagemaker.apps
WHERE Identifier = '<AppName|AppType|DomainId|UserProfileName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>apps</code> resource, the following permissions are required:

### Create
```json
sagemaker:CreateApp,
sagemaker:DescribeApp,
sagemaker:AddTags,
sagemaker:ListTags
```

### Read
```json
sagemaker:DescribeApp,
sagemaker:DescribeApp,
sagemaker:ListTags
```

### Update
```json
sagemaker:DescribeApp,
sagemaker:AddTags,
sagemaker:DeleteTags,
sagemaker:ListTags
```

### Delete
```json
sagemaker:DeleteApp,
sagemaker:DescribeApp,
sagemaker:DeleteTags,
sagemaker:ListTags
```

### List
```json
sagemaker:ListApps,
sagemaker:ListTags
```
