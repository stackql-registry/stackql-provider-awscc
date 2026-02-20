---
title: identity_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_sources
  - verifiedpermissions
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

Creates, updates, deletes or gets an <code>identity_source</code> resource or lists <code>identity_sources</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>identity_sources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::VerifiedPermissions::IdentitySource Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.verifiedpermissions.identity_sources" /></td></tr>
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
    "name": "configuration",
    "type": "object",
    "description": ""
  },
  {
    "name": "details",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "client_ids",
        "type": "array",
        "description": ""
      },
      {
        "name": "user_pool_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "discovery_url",
        "type": "string",
        "description": ""
      },
      {
        "name": "open_id_issuer",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "identity_source_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "policy_store_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "principal_entity_type",
    "type": "string",
    "description": ""
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
    "name": "identity_source_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "policy_store_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-identitysource.html"><code>AWS::VerifiedPermissions::IdentitySource</code></a>.

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
    <td><code>identity_sources</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Configuration, PolicyStoreId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>identity_sources</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>identity_sources</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>identity_sources_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>identity_sources</code></td>
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

Gets all properties from an individual <code>identity_source</code>.
```sql
SELECT
region,
configuration,
details,
identity_source_id,
policy_store_id,
principal_entity_type
FROM awscc.verifiedpermissions.identity_sources
WHERE region = 'us-east-1' AND Identifier = '<IdentitySourceId>|<PolicyStoreId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>identity_sources</code> in a region.
```sql
SELECT
region,
identity_source_id,
policy_store_id
FROM awscc.verifiedpermissions.identity_sources_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>identity_source</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.verifiedpermissions.identity_sources (
 Configuration,
 PolicyStoreId,
 region
)
SELECT 
'{{ Configuration }}',
 '{{ PolicyStoreId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.verifiedpermissions.identity_sources (
 Configuration,
 PolicyStoreId,
 PrincipalEntityType,
 region
)
SELECT 
 '{{ Configuration }}',
 '{{ PolicyStoreId }}',
 '{{ PrincipalEntityType }}',
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
  - name: identity_source
    props:
      - name: Configuration
        value: null
      - name: PolicyStoreId
        value: '{{ PolicyStoreId }}'
      - name: PrincipalEntityType
        value: '{{ PrincipalEntityType }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.verifiedpermissions.identity_sources
SET PatchDocument = string('{{ {
    "Configuration": configuration,
    "PrincipalEntityType": principal_entity_type
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<IdentitySourceId>|<PolicyStoreId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.verifiedpermissions.identity_sources
WHERE Identifier = '<IdentitySourceId|PolicyStoreId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>identity_sources</code> resource, the following permissions are required:

### Create
```json
verifiedpermissions:CreateIdentitySource,
verifiedpermissions:GetIdentitySource,
cognito-idp:DescribeUserPool,
cognito-idp:ListUserPoolClients
```

### Read
```json
verifiedpermissions:GetIdentitySource,
cognito-idp:DescribeUserPool,
cognito-idp:ListUserPoolClients
```

### Update
```json
verifiedpermissions:UpdateIdentitySource,
verifiedpermissions:GetIdentitySource,
cognito-idp:DescribeUserPool,
cognito-idp:ListUserPoolClients
```

### Delete
```json
verifiedpermissions:DeleteIdentitySource,
verifiedpermissions:GetIdentitySource,
cognito-idp:DescribeUserPool,
cognito-idp:ListUserPoolClients
```

### List
```json
verifiedpermissions:ListIdentitySources,
verifiedpermissions:GetIdentitySource,
cognito-idp:DescribeUserPool,
cognito-idp:ListUserPoolClients
```
