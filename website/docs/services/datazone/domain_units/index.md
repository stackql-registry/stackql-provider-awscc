---
title: domain_units
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_units
  - datazone
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

Creates, updates, deletes or gets a <code>domain_unit</code> resource or lists <code>domain_units</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>domain_units</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A domain unit enables you to easily organize your assets and other domain entities under specific business units and teams.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datazone.domain_units" /></td></tr>
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
    "name": "domain_identifier",
    "type": "string",
    "description": "The ID of the domain where you want to create a domain unit."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the domain unit."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the domain unit."
  },
  {
    "name": "parent_domain_unit_identifier",
    "type": "string",
    "description": "The ID of the parent domain unit."
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The timestamp at which the domain unit was created."
  },
  {
    "name": "domain_id",
    "type": "string",
    "description": "The ID of the domain where the domain unit was created."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the domain unit."
  },
  {
    "name": "parent_domain_unit_id",
    "type": "string",
    "description": "The ID of the parent domain unit."
  },
  {
    "name": "identifier",
    "type": "string",
    "description": "The identifier of the domain unit that you want to get."
  },
  {
    "name": "last_updated_at",
    "type": "string",
    "description": "The timestamp at which the domain unit was last updated."
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
    "name": "domain_id",
    "type": "string",
    "description": "The ID of the domain where the domain unit was created."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the domain unit."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domainunit.html"><code>AWS::DataZone::DomainUnit</code></a>.

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
    <td><code>domain_units</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DomainIdentifier, Name, ParentDomainUnitIdentifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>domain_units</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>domain_units</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>domain_units_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>domain_units</code></td>
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

Gets all properties from an individual <code>domain_unit</code>.
```sql
SELECT
region,
domain_identifier,
description,
name,
parent_domain_unit_identifier,
created_at,
domain_id,
id,
parent_domain_unit_id,
identifier,
last_updated_at
FROM awscc.datazone.domain_units
WHERE region = 'us-east-1' AND Identifier = '<DomainId>|<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>domain_units</code> in a region.
```sql
SELECT
region,
domain_id,
id
FROM awscc.datazone.domain_units_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>domain_unit</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datazone.domain_units (
 DomainIdentifier,
 Name,
 ParentDomainUnitIdentifier,
 region
)
SELECT 
'{{ DomainIdentifier }}',
 '{{ Name }}',
 '{{ ParentDomainUnitIdentifier }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.datazone.domain_units (
 DomainIdentifier,
 Description,
 Name,
 ParentDomainUnitIdentifier,
 region
)
SELECT 
 '{{ DomainIdentifier }}',
 '{{ Description }}',
 '{{ Name }}',
 '{{ ParentDomainUnitIdentifier }}',
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
  - name: domain_unit
    props:
      - name: DomainIdentifier
        value: '{{ DomainIdentifier }}'
      - name: Description
        value: '{{ Description }}'
      - name: Name
        value: '{{ Name }}'
      - name: ParentDomainUnitIdentifier
        value: '{{ ParentDomainUnitIdentifier }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>domain_unit</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.datazone.domain_units
SET PatchDocument = string('{{ {
    "Description": description,
    "Name": name
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<DomainId>|<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datazone.domain_units
WHERE Identifier = '<DomainId|Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>domain_units</code> resource, the following permissions are required:

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
datazone:CreateDomainUnit,
datazone:GetDomainUnit
```

</TabItem>
<TabItem value="read">

```json
datazone:GetDomainUnit
```

</TabItem>
<TabItem value="update">

```json
datazone:UpdateDomainUnit,
datazone:GetDomainUnit
```

</TabItem>
<TabItem value="delete">

```json
datazone:DeleteDomainUnit,
datazone:GetDomainUnit
```

</TabItem>
<TabItem value="list">

```json
datazone:ListDomainUnitsForParent
```

</TabItem>
</Tabs>