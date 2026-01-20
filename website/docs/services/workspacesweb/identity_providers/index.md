---
title: identity_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_providers
  - workspacesweb
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

Creates, updates, deletes or gets an <code>identity_provider</code> resource or lists <code>identity_providers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>identity_providers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::WorkSpacesWeb::IdentityProvider Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.workspacesweb.identity_providers" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "identity_provider_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "identity_provider_details",
    "type": "object",
    "description": ""
  },
  {
    "name": "identity_provider_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "identity_provider_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "portal_arn",
    "type": "string",
    "description": ""
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-identityprovider.html"><code>AWS::WorkSpacesWeb::IdentityProvider</code></a>.

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
    <td><CopyableCode code="IdentityProviderDetails, IdentityProviderName, IdentityProviderType, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>identity_provider</code>.
```sql
SELECT
region,
identity_provider_arn,
identity_provider_details,
identity_provider_name,
identity_provider_type,
portal_arn,
tags
FROM awscc.workspacesweb.identity_providers
WHERE region = 'us-east-1' AND data__Identifier = '<IdentityProviderArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>identity_provider</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.workspacesweb.identity_providers (
 IdentityProviderDetails,
 IdentityProviderName,
 IdentityProviderType,
 region
)
SELECT 
'{{ IdentityProviderDetails }}',
 '{{ IdentityProviderName }}',
 '{{ IdentityProviderType }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.workspacesweb.identity_providers (
 IdentityProviderDetails,
 IdentityProviderName,
 IdentityProviderType,
 PortalArn,
 Tags,
 region
)
SELECT 
 '{{ IdentityProviderDetails }}',
 '{{ IdentityProviderName }}',
 '{{ IdentityProviderType }}',
 '{{ PortalArn }}',
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
  - name: identity_provider
    props:
      - name: IdentityProviderDetails
        value: {}
      - name: IdentityProviderName
        value: '{{ IdentityProviderName }}'
      - name: IdentityProviderType
        value: '{{ IdentityProviderType }}'
      - name: PortalArn
        value: '{{ PortalArn }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.workspacesweb.identity_providers
WHERE data__Identifier = '<IdentityProviderArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>identity_providers</code> resource, the following permissions are required:

### Create
```json
workspaces-web:CreateIdentityProvider,
workspaces-web:GetIdentityProvider,
workspaces-web:ListTagsForResource,
workspaces-web:TagResource
```

### Read
```json
workspaces-web:GetIdentityProvider,
workspaces-web:ListIdentityProviders,
workspaces-web:ListTagsForResource
```

### Update
```json
workspaces-web:UpdateIdentityProvider,
workspaces-web:TagResource,
workspaces-web:UntagResource,
workspaces-web:GetIdentityProvider,
workspaces-web:ListIdentityProviders,
workspaces-web:ListTagsForResource
```

### Delete
```json
workspaces-web:GetIdentityProvider,
workspaces-web:DeleteIdentityProvider
```

### List
```json
workspaces-web:ListIdentityProviders
```
