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
WHERE region = 'us-east-1' AND Identifier = '<ApplicationArn>';
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
'{{ Name }}',
 '{{ Namespace }}',
 '{{ Description }}',
 '{{ ApplicationSourceConfig }}',
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
 '{{ Name }}',
 '{{ Namespace }}',
 '{{ Description }}',
 '{{ ApplicationSourceConfig }}',
 '{{ Permissions }}',
 '{{ Tags }}',
 '{{ IsService }}',
 '{{ InitializationTimeout }}',
 '{{ ApplicationConfig }}',
 '{{ IframeConfig }}',
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
      - name: Name
        value: '{{ Name }}'
      - name: Namespace
        value: '{{ Namespace }}'
      - name: Description
        value: '{{ Description }}'
      - name: ApplicationSourceConfig
        value:
          ExternalUrlConfig:
            AccessUrl: '{{ AccessUrl }}'
            ApprovedOrigins:
              - '{{ ApprovedOrigins[0] }}'
      - name: Permissions
        value:
          - '{{ Permissions[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: IsService
        value: '{{ IsService }}'
      - name: InitializationTimeout
        value: '{{ InitializationTimeout }}'
      - name: ApplicationConfig
        value:
          ContactHandling:
            Scope: '{{ Scope }}'
      - name: IframeConfig
        value:
          Allow:
            - '{{ Allow[0] }}'
          Sandbox:
            - '{{ Sandbox[0] }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

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
AND Identifier = '<ApplicationArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.appintegrations.applications
WHERE Identifier = '<ApplicationArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>applications</code> resource, the following permissions are required:

### Create
```json
app-integrations:CreateApplication,
app-integrations:TagResource
```

### Read
```json
app-integrations:GetApplication
```

### List
```json
app-integrations:ListApplications,
app-integrations:ListTagsForResource
```

### Update
```json
app-integrations:GetApplication,
app-integrations:UpdateApplication,
app-integrations:TagResource,
app-integrations:UntagResource
```

### Delete
```json
app-integrations:DeleteApplication
```
