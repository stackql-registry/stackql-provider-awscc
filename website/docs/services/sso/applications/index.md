---
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - sso
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
<tr><td><b>Description</b></td><td>Resource Type definition for Identity Center (SSO) Application</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sso.applications" /></td></tr>
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
    "description": "The name you want to assign to this Identity Center (SSO) Application"
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description information for the Identity Center (SSO) Application"
  },
  {
    "name": "instance_arn",
    "type": "string",
    "description": "The ARN of the instance of IAM Identity Center under which the operation will run"
  },
  {
    "name": "application_arn",
    "type": "string",
    "description": "The Application ARN that is returned upon creation of the Identity Center (SSO) Application"
  },
  {
    "name": "application_provider_arn",
    "type": "string",
    "description": "The ARN of the application provider under which the operation will run"
  },
  {
    "name": "status",
    "type": "string",
    "description": "Specifies whether the application is enabled or disabled"
  },
  {
    "name": "portal_options",
    "type": "object",
    "description": "A structure that describes the options for the portal associated with an application",
    "children": [
      {
        "name": "visibility",
        "type": "string",
        "description": "Indicates whether this application is visible in the access portal"
      },
      {
        "name": "sign_in_options",
        "type": "object",
        "description": "A structure that describes the sign-in options for the access portal",
        "children": [
          {
            "name": "origin",
            "type": "string",
            "description": "This determines how IAM Identity Center navigates the user to the target application"
          },
          {
            "name": "application_url",
            "type": "string",
            "description": "The URL that accepts authentication requests for an application, this is a required parameter if the Origin parameter is APPLICATION"
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
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
    "name": "application_arn",
    "type": "string",
    "description": "The Application ARN that is returned upon creation of the Identity Center (SSO) Application"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html"><code>AWS::SSO::Application</code></a>.

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
    <td><CopyableCode code="Name, InstanceArn, ApplicationProviderArn, region" /></td>
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
description,
instance_arn,
application_arn,
application_provider_arn,
status,
portal_options,
tags
FROM awscc.sso.applications
WHERE region = 'us-east-1' AND Identifier = '<ApplicationArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>applications</code> in a region.
```sql
SELECT
region,
application_arn
FROM awscc.sso.applications_list_only
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
INSERT INTO awscc.sso.applications (
 Name,
 InstanceArn,
 ApplicationProviderArn,
 region
)
SELECT 
'{{ Name }}',
 '{{ InstanceArn }}',
 '{{ ApplicationProviderArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.sso.applications (
 Name,
 Description,
 InstanceArn,
 ApplicationProviderArn,
 Status,
 PortalOptions,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ InstanceArn }}',
 '{{ ApplicationProviderArn }}',
 '{{ Status }}',
 '{{ PortalOptions }}',
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
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: InstanceArn
        value: '{{ InstanceArn }}'
      - name: ApplicationProviderArn
        value: '{{ ApplicationProviderArn }}'
      - name: Status
        value: '{{ Status }}'
      - name: PortalOptions
        value:
          Visibility: '{{ Visibility }}'
          SignInOptions:
            Origin: '{{ Origin }}'
            ApplicationUrl: '{{ ApplicationUrl }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.sso.applications
SET PatchDocument = string('{{ {
    "Name": name,
    "Description": description,
    "Status": status,
    "PortalOptions": portal_options,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ApplicationArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sso.applications
WHERE Identifier = '<ApplicationArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>applications</code> resource, the following permissions are required:

### Create
```json
sso:CreateApplication,
sso:DescribeApplication,
sso:TagResource,
sso:ListTagsForResource
```

### Read
```json
sso:DescribeApplication,
sso:ListTagsForResource
```

### Update
```json
sso:UpdateApplication,
sso:TagResource,
sso:UntagResource,
sso:ListTagsForResource,
sso:DescribeApplication
```

### Delete
```json
sso:DeleteApplication
```

### List
```json
sso:ListApplications,
sso:ListTagsForResource
```
