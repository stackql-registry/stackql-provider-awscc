---
title: registry_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - registry_policies
  - eventschemas
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

Creates, updates, deletes or gets a <code>registry_policy</code> resource or lists <code>registry_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>registry_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EventSchemas::RegistryPolicy</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.eventschemas.registry_policies" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "policy",
    "type": "object",
    "description": ""
  },
  {
    "name": "registry_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "revision_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registrypolicy.html"><code>AWS::EventSchemas::RegistryPolicy</code></a>.

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
    <td><CopyableCode code="RegistryName, Policy, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>registry_policy</code>.
```sql
SELECT
region,
id,
policy,
registry_name,
revision_id
FROM awscc.eventschemas.registry_policies
WHERE region = 'us-east-1' AND Identifier = '<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>registry_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.eventschemas.registry_policies (
 Policy,
 RegistryName,
 region
)
SELECT 
'{{ Policy }}',
 '{{ RegistryName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.eventschemas.registry_policies (
 Policy,
 RegistryName,
 RevisionId,
 region
)
SELECT 
 '{{ Policy }}',
 '{{ RegistryName }}',
 '{{ RevisionId }}',
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
  - name: registry_policy
    props:
      - name: Policy
        value: {}
      - name: RegistryName
        value: '{{ RegistryName }}'
      - name: RevisionId
        value: '{{ RevisionId }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.eventschemas.registry_policies
SET PatchDocument = string('{{ {
    "Policy": policy,
    "RegistryName": registry_name,
    "RevisionId": revision_id
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.eventschemas.registry_policies
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>registry_policies</code> resource, the following permissions are required:

### Create
```json
schemas:PutResourcePolicy,
schemas:GetResourcePolicy,
schemas:DescribeRegistry
```

### Delete
```json
schemas:DeleteResourcePolicy,
schemas:GetResourcePolicy
```

### Update
```json
schemas:PutResourcePolicy,
schemas:GetResourcePolicy
```

### Read
```json
schemas:GetResourcePolicy
```
