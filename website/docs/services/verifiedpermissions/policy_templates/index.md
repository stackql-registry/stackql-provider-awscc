---
title: policy_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_templates
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

Creates, updates, deletes or gets a <code>policy_template</code> resource or lists <code>policy_templates</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>policy_templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::VerifiedPermissions::PolicyTemplate Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.verifiedpermissions.policy_templates" /></td></tr>
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
    "name": "policy_template_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "statement",
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
    "name": "policy_store_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "policy_template_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policytemplate.html"><code>AWS::VerifiedPermissions::PolicyTemplate</code></a>.

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
    <td><code>policy_templates</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Statement, PolicyStoreId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>policy_templates</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>policy_templates</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>policy_templates_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>policy_templates</code></td>
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

Gets all properties from an individual <code>policy_template</code>.
```sql
SELECT
region,
description,
policy_store_id,
policy_template_id,
statement
FROM awscc.verifiedpermissions.policy_templates
WHERE region = 'us-east-1' AND data__Identifier = '<PolicyStoreId>|<PolicyTemplateId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>policy_templates</code> in a region.
```sql
SELECT
region,
policy_store_id,
policy_template_id
FROM awscc.verifiedpermissions.policy_templates_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>policy_template</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.verifiedpermissions.policy_templates (
 PolicyStoreId,
 Statement,
 region
)
SELECT 
'{{ PolicyStoreId }}',
 '{{ Statement }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.verifiedpermissions.policy_templates (
 Description,
 PolicyStoreId,
 Statement,
 region
)
SELECT 
 '{{ Description }}',
 '{{ PolicyStoreId }}',
 '{{ Statement }}',
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
  - name: policy_template
    props:
      - name: Description
        value: '{{ Description }}'
      - name: PolicyStoreId
        value: '{{ PolicyStoreId }}'
      - name: Statement
        value: '{{ Statement }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.verifiedpermissions.policy_templates
SET data__PatchDocument = string('{{ {
    "Description": description,
    "Statement": statement
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<PolicyStoreId>|<PolicyTemplateId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.verifiedpermissions.policy_templates
WHERE data__Identifier = '<PolicyStoreId|PolicyTemplateId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>policy_templates</code> resource, the following permissions are required:

### Create
```json
verifiedpermissions:CreatePolicyTemplate,
verifiedpermissions:GetPolicyTemplate
```

### Read
```json
verifiedpermissions:GetPolicyTemplate
```

### Update
```json
verifiedpermissions:UpdatePolicyTemplate,
verifiedpermissions:GetPolicyTemplate
```

### Delete
```json
verifiedpermissions:DeletePolicyTemplate,
verifiedpermissions:GetPolicyTemplate
```

### List
```json
verifiedpermissions:ListPolicyTemplates,
verifiedpermissions:GetPolicyTemplate
```
