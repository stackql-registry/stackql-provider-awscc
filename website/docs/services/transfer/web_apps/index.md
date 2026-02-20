---
title: web_apps
hide_title: false
hide_table_of_contents: false
keywords:
  - web_apps
  - transfer
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

Creates, updates, deletes or gets a <code>web_app</code> resource or lists <code>web_apps</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>web_apps</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Transfer::WebApp</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.transfer.web_apps" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": "Specifies the unique Amazon Resource Name (ARN) for the web app."
  },
  {
    "name": "web_app_id",
    "type": "string",
    "description": "A unique identifier for the web app."
  },
  {
    "name": "identity_provider_details",
    "type": "object",
    "description": "You can provide a structure that contains the details for the identity provider to use with your web app.",
    "children": [
      {
        "name": "application_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "instance_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) for the IAM Identity Center used for the web app."
      },
      {
        "name": "role",
        "type": "string",
        "description": "The IAM role in IAM Identity Center used for the web app."
      }
    ]
  },
  {
    "name": "access_endpoint",
    "type": "string",
    "description": "The AccessEndpoint is the URL that you provide to your users for them to interact with the Transfer Family web app. You can specify a custom URL or use the default value."
  },
  {
    "name": "web_app_units",
    "type": "object",
    "description": ""
  },
  {
    "name": "web_app_customization",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "title",
        "type": "string",
        "description": "Specifies a title to display on the web app."
      },
      {
        "name": "logo_file",
        "type": "string",
        "description": "Specifies a logo to display on the web app."
      },
      {
        "name": "favicon_file",
        "type": "string",
        "description": "Specifies a favicon to display in the browser tab."
      }
    ]
  },
  {
    "name": "web_app_endpoint_policy",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Key-value pairs that can be used to group and search for web apps.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The name assigned to the tag that you create."
      },
      {
        "name": "value",
        "type": "string",
        "description": "Contains one or more values that you assigned to the key name you create."
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
    "name": "arn",
    "type": "string",
    "description": "Specifies the unique Amazon Resource Name (ARN) for the web app."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html"><code>AWS::Transfer::WebApp</code></a>.

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
    <td><code>web_apps</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="IdentityProviderDetails, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>web_apps</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>web_apps</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>web_apps_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>web_apps</code></td>
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

Gets all properties from an individual <code>web_app</code>.
```sql
SELECT
region,
arn,
web_app_id,
identity_provider_details,
access_endpoint,
web_app_units,
web_app_customization,
web_app_endpoint_policy,
tags
FROM awscc.transfer.web_apps
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>web_apps</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.transfer.web_apps_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>web_app</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.transfer.web_apps (
 IdentityProviderDetails,
 region
)
SELECT 
'{{ IdentityProviderDetails }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.transfer.web_apps (
 IdentityProviderDetails,
 AccessEndpoint,
 WebAppUnits,
 WebAppCustomization,
 WebAppEndpointPolicy,
 Tags,
 region
)
SELECT 
 '{{ IdentityProviderDetails }}',
 '{{ AccessEndpoint }}',
 '{{ WebAppUnits }}',
 '{{ WebAppCustomization }}',
 '{{ WebAppEndpointPolicy }}',
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
  - name: web_app
    props:
      - name: IdentityProviderDetails
        value:
          ApplicationArn: '{{ ApplicationArn }}'
          InstanceArn: '{{ InstanceArn }}'
          Role: '{{ Role }}'
      - name: AccessEndpoint
        value: '{{ AccessEndpoint }}'
      - name: WebAppUnits
        value: null
      - name: WebAppCustomization
        value:
          Title: '{{ Title }}'
          LogoFile: '{{ LogoFile }}'
          FaviconFile: '{{ FaviconFile }}'
      - name: WebAppEndpointPolicy
        value: '{{ WebAppEndpointPolicy }}'
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
UPDATE awscc.transfer.web_apps
SET PatchDocument = string('{{ {
    "AccessEndpoint": access_endpoint,
    "WebAppUnits": web_app_units,
    "WebAppCustomization": web_app_customization,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.transfer.web_apps
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>web_apps</code> resource, the following permissions are required:

### Create
```json
transfer:CreateWebApp,
transfer:DescribeWebApp,
transfer:DescribeWebAppCustomization,
transfer:TagResource,
transfer:UpdateWebAppCustomization,
iam:PassRole,
sso:CreateApplication,
sso:DescribeApplication,
sso:ListApplications,
sso:PutApplicationGrant,
sso:GetApplicationGrant,
sso:ListApplicationGrants,
sso:PutApplicationAuthenticationMethod,
sso:GetApplicationAuthenticationMethod,
sso:ListApplicationAuthenticationMethods,
sso:PutApplicationAccessScope,
sso:GetApplicationAccessScope,
sso:ListApplicationAccessScopes
```

### Read
```json
transfer:DescribeWebApp,
transfer:DescribeWebAppCustomization
```

### Update
```json
transfer:DescribeWebApp,
transfer:DescribeWebAppCustomization,
transfer:UpdateWebApp,
transfer:UpdateWebAppCustomization,
transfer:DeleteWebAppCustomization,
transfer:UnTagResource,
transfer:TagResource,
iam:PassRole,
sso:PutApplicationGrant,
sso:GetApplicationGrant,
sso:ListApplicationGrants,
sso:UpdateApplication,
sso:DescribeApplication,
sso:ListApplications
```

### Delete
```json
transfer:DeleteWebApp,
sso:DescribeApplication,
sso:DeleteApplication
```

### List
```json
transfer:ListWebApps
```
