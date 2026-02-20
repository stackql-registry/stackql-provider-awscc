---
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - opensearchservice
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

Creates, updates, deletes or gets an <code>application</code> resource or lists <code>applications</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>applications</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Amazon OpenSearchService application resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.opensearchservice.applications" /></td></tr>
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
    "name": "iam_identity_center_options",
    "type": "object",
    "description": "Options for configuring IAM Identity Center",
    "children": [
      {
        "name": "enabled",
        "type": "boolean",
        "description": "Whether IAM Identity Center is enabled."
      },
      {
        "name": "iam_identity_center_instance_arn",
        "type": "string",
        "description": "The ARN of the IAM Identity Center instance."
      },
      {
        "name": "iam_role_for_identity_center_application_arn",
        "type": "string",
        "description": "The ARN of the IAM role for Identity Center application."
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "Amazon Resource Name (ARN) format."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The identifier of the application."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the application."
  },
  {
    "name": "endpoint",
    "type": "string",
    "description": "The endpoint for the application."
  },
  {
    "name": "app_configs",
    "type": "array",
    "description": "List of application configurations.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The configuration key"
      },
      {
        "name": "value",
        "type": "string",
        "description": "The configuration value."
      }
    ]
  },
  {
    "name": "data_sources",
    "type": "array",
    "description": "List of data sources.",
    "children": [
      {
        "name": "data_source_arn",
        "type": "string",
        "description": "The ARN of the data source."
      },
      {
        "name": "data_source_description",
        "type": "string",
        "description": "Description of the data source."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An arbitrary set of tags (key-value pairs) for this application.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The key of the tag."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The value of the tag."
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
    "name": "name",
    "type": "string",
    "description": "The name of the application."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html"><code>AWS::OpenSearchService::Application</code></a>.

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
    <td><code>applications</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>applications</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>applications</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>applications_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>applications</code></td>
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

Gets all properties from an individual <code>application</code>.
```sql
SELECT
region,
iam_identity_center_options,
arn,
id,
name,
endpoint,
app_configs,
data_sources,
tags
FROM awscc.opensearchservice.applications
WHERE region = 'us-east-1' AND Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>applications</code> in a region.
```sql
SELECT
region,
name
FROM awscc.opensearchservice.applications_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>application</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.opensearchservice.applications (
 Name,
 region
)
SELECT 
'{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.opensearchservice.applications (
 IamIdentityCenterOptions,
 Name,
 Endpoint,
 AppConfigs,
 DataSources,
 Tags,
 region
)
SELECT 
 '{{ IamIdentityCenterOptions }}',
 '{{ Name }}',
 '{{ Endpoint }}',
 '{{ AppConfigs }}',
 '{{ DataSources }}',
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
  - name: application
    props:
      - name: IamIdentityCenterOptions
        value:
          Enabled: '{{ Enabled }}'
          IamIdentityCenterInstanceArn: '{{ IamIdentityCenterInstanceArn }}'
          IamRoleForIdentityCenterApplicationArn: '{{ IamRoleForIdentityCenterApplicationArn }}'
      - name: Name
        value: '{{ Name }}'
      - name: Endpoint
        value: '{{ Endpoint }}'
      - name: AppConfigs
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: DataSources
        value:
          - DataSourceArn: '{{ DataSourceArn }}'
            DataSourceDescription: '{{ DataSourceDescription }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>application</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.opensearchservice.applications
SET PatchDocument = string('{{ {
    "IamIdentityCenterOptions": iam_identity_center_options,
    "Endpoint": endpoint,
    "AppConfigs": app_configs,
    "DataSources": data_sources,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.opensearchservice.applications
WHERE Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>applications</code> resource, the following permissions are required:

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
es:CreateApplication,
es:GetApplication,
es:AddTags,
es:ListTags,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="read">

```json
es:GetApplication,
es:ListTags
```

</TabItem>
<TabItem value="update">

```json
es:UpdateApplication,
es:GetApplication,
es:AddTags,
es:RemoveTags,
es:ListTags
```

</TabItem>
<TabItem value="delete">

```json
es:GetApplication,
es:DeleteApplication
```

</TabItem>
<TabItem value="list">

```json
es:ListApplications
```

</TabItem>
</Tabs>