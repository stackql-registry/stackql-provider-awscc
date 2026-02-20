---
title: policy_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_stores
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

Creates, updates, deletes or gets a <code>policy_store</code> resource or lists <code>policy_stores</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>policy_stores</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Represents a policy store that you can place schema, policies, and policy templates in to validate authorization requests</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.verifiedpermissions.policy_stores" /></td></tr>
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
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "policy_store_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "validation_settings",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "mode",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "schema",
    "type": "object",
    "description": ""
  },
  {
    "name": "deletion_protection",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "mode",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags to add to the policy store",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policystore.html"><code>AWS::VerifiedPermissions::PolicyStore</code></a>.

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
    <td><code>policy_stores</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ValidationSettings, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>policy_stores</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>policy_stores</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>policy_stores_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>policy_stores</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>policy_store</code>.
```sql
SELECT
region,
arn,
description,
policy_store_id,
validation_settings,
schema,
deletion_protection,
tags
FROM awscc.verifiedpermissions.policy_stores
WHERE region = 'us-east-1' AND data__Identifier = '<PolicyStoreId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>policy_stores</code> in a region.
```sql
SELECT
region,
policy_store_id
FROM awscc.verifiedpermissions.policy_stores_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>policy_store</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.verifiedpermissions.policy_stores (
 ValidationSettings,
 region
)
SELECT 
'{{ ValidationSettings }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.verifiedpermissions.policy_stores (
 Description,
 ValidationSettings,
 Schema,
 DeletionProtection,
 Tags,
 region
)
SELECT 
 '{{ Description }}',
 '{{ ValidationSettings }}',
 '{{ Schema }}',
 '{{ DeletionProtection }}',
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
  - name: policy_store
    props:
      - name: Description
        value: '{{ Description }}'
      - name: ValidationSettings
        value:
          Mode: '{{ Mode }}'
      - name: Schema
        value: null
      - name: DeletionProtection
        value:
          Mode: '{{ Mode }}'
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
UPDATE awscc.verifiedpermissions.policy_stores
SET data__PatchDocument = string('{{ {
    "Description": description,
    "ValidationSettings": validation_settings,
    "Schema": schema,
    "DeletionProtection": deletion_protection,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<PolicyStoreId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.verifiedpermissions.policy_stores
WHERE data__Identifier = '<PolicyStoreId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>policy_stores</code> resource, the following permissions are required:

### Create
```json
verifiedpermissions:CreatePolicyStore,
verifiedpermissions:TagResource,
verifiedpermissions:GetPolicyStore,
verifiedpermissions:PutSchema
```

### Read
```json
verifiedpermissions:GetPolicyStore,
verifiedpermissions:ListTagsForResource,
verifiedpermissions:GetSchema
```

### Update
```json
verifiedpermissions:UpdatePolicyStore,
verifiedpermissions:GetPolicyStore,
verifiedpermissions:TagResource,
verifiedpermissions:UntagResource,
verifiedpermissions:GetSchema,
verifiedpermissions:PutSchema
```

### Delete
```json
verifiedpermissions:DeletePolicyStore,
verifiedpermissions:GetPolicyStore
```

### List
```json
verifiedpermissions:ListPolicyStores,
verifiedpermissions:GetPolicyStore,
verifiedpermissions:GetSchema
```
