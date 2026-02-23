---
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - appintegrations
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
<tr><td><b>Description</b></td><td>Resource Type definition for AWS:AppIntegrations::Application</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.appintegrations.applications" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "The name of the application."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The id of the application."
  },
  {
    "name": "namespace",
    "type": "string",
    "description": "The namespace of the application."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The application description."
  },
  {
    "name": "application_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the application."
  },
  {
    "name": "application_source_config",
    "type": "object",
    "description": "Application source config",
    "children": [
      {
        "name": "external_url_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "access_url",
            "type": "string",
            "description": ""
          },
          {
            "name": "approved_origins",
            "type": "array",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "permissions",
    "type": "array",
    "description": "The configuration of events or requests that the application has access to."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags (keys and values) associated with the application.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A key to identify the tag."
      },
      {
        "name": "value",
        "type": "string",
        "description": "Corresponding tag value for the key."
      }
    ]
  },
  {
    "name": "is_service",
    "type": "boolean",
    "description": "Indicates if the application is a service"
  },
  {
    "name": "initialization_timeout",
    "type": "integer",
    "description": "The initialization timeout in milliseconds. Required when IsService is true."
  },
  {
    "name": "application_config",
    "type": "object",
    "description": "The application configuration. Cannot be used when IsService is true.",
    "children": [
      {
        "name": "contact_handling",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "scope",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "iframe_config",
    "type": "object",
    "description": "The iframe configuration",
    "children": [
      {
        "name": "allow",
        "type": "array",
        "description": ""
      },
      {
        "name": "sandbox",
        "type": "array",
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
    "name": "application_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the application."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-application.html"><code>AWS::AppIntegrations::Application</code></a>.

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
    <td><CopyableCode code="Name, Namespace, Description, ApplicationSourceConfig, region" /></td>
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
name,
id,
namespace,
description,
application_arn,
application_source_config,
permissions,
tags,
is_service,
initialization_timeout,
application_config,
iframe_config
FROM awscc.appintegrations.applications
WHERE region = 'us-east-1' AND Identifier = '{{ application_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>applications</code> in a region.
```sql
SELECT
region,
application_arn
FROM awscc.appintegrations.applications_list_only
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
INSERT INTO awscc.appintegrations.applications (
 Name,
 Namespace,
 Description,
 ApplicationSourceConfig,
 region
)
SELECT
'{{ name }}',
 '{{ namespace }}',
 '{{ description }}',
 '{{ application_source_config }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.appintegrations.applications (
 Name,
 Namespace,
 Description,
 ApplicationSourceConfig,
 Permissions,
 Tags,
 IsService,
 InitializationTimeout,
 ApplicationConfig,
 IframeConfig,
 region
)
SELECT
 '{{ name }}',
 '{{ namespace }}',
 '{{ description }}',
 '{{ application_source_config }}',
 '{{ permissions }}',
 '{{ tags }}',
 '{{ is_service }}',
 '{{ initialization_timeout }}',
 '{{ application_config }}',
 '{{ iframe_config }}',
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
      - name: name
        value: '{{ name }}'
      - name: namespace
        value: '{{ namespace }}'
      - name: description
        value: '{{ description }}'
      - name: application_source_config
        value:
          external_url_config:
            access_url: '{{ access_url }}'
            approved_origins:
              - '{{ approved_origins[0] }}'
      - name: permissions
        value:
          - '{{ permissions[0] }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: is_service
        value: '{{ is_service }}'
      - name: initialization_timeout
        value: '{{ initialization_timeout }}'
      - name: application_config
        value:
          contact_handling:
            scope: '{{ scope }}'
      - name: iframe_config
        value:
          allow:
            - '{{ allow[0] }}'
          sandbox:
            - '{{ sandbox[0] }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>application</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.appintegrations.applications
SET PatchDocument = string('{{ {
    "Name": name,
    "Namespace": namespace,
    "Description": description,
    "ApplicationSourceConfig": application_source_config,
    "Permissions": permissions,
    "Tags": tags,
    "IsService": is_service,
    "InitializationTimeout": initialization_timeout,
    "ApplicationConfig": application_config,
    "IframeConfig": iframe_config
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ application_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.appintegrations.applications
WHERE Identifier = '{{ application_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>applications</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'List', value: 'list', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="create">

```json
app-integrations:CreateApplication,
app-integrations:TagResource
```

</TabItem>
<TabItem value="read">

```json
app-integrations:GetApplication
```

</TabItem>
<TabItem value="list">

```json
app-integrations:ListApplications,
app-integrations:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
app-integrations:GetApplication,
app-integrations:UpdateApplication,
app-integrations:TagResource,
app-integrations:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
app-integrations:DeleteApplication
```

</TabItem>
</Tabs>