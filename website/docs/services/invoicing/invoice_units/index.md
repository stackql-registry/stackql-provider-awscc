---
title: invoice_units
hide_title: false
hide_table_of_contents: false
keywords:
  - invoice_units
  - invoicing
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

Creates, updates, deletes or gets an <code>invoice_unit</code> resource or lists <code>invoice_units</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>invoice_units</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An invoice unit is a set of mutually exclusive accounts that correspond to your business entity. Invoice units allow you to separate AWS account costs and configures your invoice for each business entity.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.invoicing.invoice_units" /></td></tr>
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
    "name": "invoice_unit_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "invoice_receiver",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "tax_inheritance_disabled",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "rule",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "linked_accounts",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "last_modified",
    "type": "number",
    "description": ""
  },
  {
    "name": "resource_tags",
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
    "name": "invoice_unit_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-invoicing-invoiceunit.html"><code>AWS::Invoicing::InvoiceUnit</code></a>.

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
    <td><code>invoice_units</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="InvoiceReceiver, Name, Rule, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>invoice_units</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>invoice_units</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>invoice_units_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>invoice_units</code></td>
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

Gets all properties from an individual <code>invoice_unit</code>.
```sql
SELECT
region,
invoice_unit_arn,
invoice_receiver,
name,
description,
tax_inheritance_disabled,
rule,
last_modified,
resource_tags
FROM awscc.invoicing.invoice_units
WHERE region = 'us-east-1' AND Identifier = '{{ invoice_unit_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>invoice_units</code> in a region.
```sql
SELECT
region,
invoice_unit_arn
FROM awscc.invoicing.invoice_units_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>invoice_unit</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.invoicing.invoice_units (
 InvoiceReceiver,
 Name,
 Rule,
 region
)
SELECT
'{{ invoice_receiver }}',
 '{{ name }}',
 '{{ rule }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.invoicing.invoice_units (
 InvoiceReceiver,
 Name,
 Description,
 TaxInheritanceDisabled,
 Rule,
 ResourceTags,
 region
)
SELECT
 '{{ invoice_receiver }}',
 '{{ name }}',
 '{{ description }}',
 '{{ tax_inheritance_disabled }}',
 '{{ rule }}',
 '{{ resource_tags }}',
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
  - name: invoice_unit
    props:
      - name: invoice_receiver
        value: '{{ invoice_receiver }}'
      - name: name
        value: '{{ name }}'
      - name: description
        value: '{{ description }}'
      - name: tax_inheritance_disabled
        value: '{{ tax_inheritance_disabled }}'
      - name: rule
        value:
          linked_accounts:
            - '{{ linked_accounts[0] }}'
      - name: resource_tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>invoice_unit</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.invoicing.invoice_units
SET PatchDocument = string('{{ {
    "Description": description,
    "TaxInheritanceDisabled": tax_inheritance_disabled,
    "Rule": rule,
    "ResourceTags": resource_tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ invoice_unit_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.invoicing.invoice_units
WHERE Identifier = '{{ invoice_unit_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>invoice_units</code> resource, the following permissions are required:

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
invoicing:CreateInvoiceUnit,
invoicing:TagResource
```

</TabItem>
<TabItem value="read">

```json
invoicing:GetInvoiceUnit,
invoicing:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
invoicing:UpdateInvoiceUnit,
invoicing:UntagResource,
invoicing:TagResource
```

</TabItem>
<TabItem value="delete">

```json
invoicing:DeleteInvoiceUnit
```

</TabItem>
<TabItem value="list">

```json
invoicing:ListInvoiceUnits
```

</TabItem>
</Tabs>