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
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="domain_identifier" /></td><td><code>string</code></td><td>The ID of the domain where you want to create a domain unit.</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>The description of the domain unit.</td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>The name of the domain unit.</td></tr>
<tr><td><CopyableCode code="parent_domain_unit_identifier" /></td><td><code>string</code></td><td>The ID of the parent domain unit.</td></tr>
<tr><td><CopyableCode code="created_at" /></td><td><code>string</code></td><td>The timestamp at which the domain unit was created.</td></tr>
<tr><td><CopyableCode code="domain_id" /></td><td><code>string</code></td><td>The ID of the domain where the domain unit was created.</td></tr>
<tr><td><CopyableCode code="id" /></td><td><code>string</code></td><td>The ID of the domain unit.</td></tr>
<tr><td><CopyableCode code="parent_domain_unit_id" /></td><td><code>string</code></td><td>The ID of the parent domain unit.</td></tr>
<tr><td><CopyableCode code="identifier" /></td><td><code>string</code></td><td>The identifier of the domain unit that you want to get.</td></tr>
<tr><td><CopyableCode code="last_updated_at" /></td><td><code>string</code></td><td>The timestamp at which the domain unit was last updated.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domainunit.html"><code>AWS::DataZone::DomainUnit</code></a>.

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
    <td><CopyableCode code="DomainIdentifier, Name, ParentDomainUnitIdentifier, region" /></td>
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
Gets all <code>domain_units</code> in a region.
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
WHERE region = 'us-east-1';
```
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
WHERE region = 'us-east-1' AND data__Identifier = '<DomainId>|<Id>';
```

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

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datazone.domain_units
WHERE data__Identifier = '<DomainId|Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>domain_units</code> resource, the following permissions are required:

### Create
```json
datazone:CreateDomainUnit,
datazone:GetDomainUnit
```

### Read
```json
datazone:GetDomainUnit
```

### Update
```json
datazone:UpdateDomainUnit,
datazone:GetDomainUnit
```

### Delete
```json
datazone:DeleteDomainUnit,
datazone:GetDomainUnit
```

### List
```json
datazone:ListDomainUnitsForParent
```
