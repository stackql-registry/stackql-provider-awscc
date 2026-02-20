---
title: predefined_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - predefined_attributes
  - connect
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

Creates, updates, deletes or gets a <code>predefined_attribute</code> resource or lists <code>predefined_attributes</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>predefined_attributes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Connect::PredefinedAttribute</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.predefined_attributes" /></td></tr>
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
    "name": "instance_arn",
    "type": "string",
    "description": "The identifier of the Amazon Connect instance."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the predefined attribute."
  },
  {
    "name": "values",
    "type": "object",
    "description": "The values of a predefined attribute.",
    "children": [
      {
        "name": "string_list",
        "type": "array",
        "description": "Predefined attribute values of type string list."
      }
    ]
  },
  {
    "name": "purposes",
    "type": "array",
    "description": "The assigned purposes of the predefined attribute."
  },
  {
    "name": "attribute_configuration",
    "type": "object",
    "description": "Custom metadata associated to a Predefined attribute that controls how the attribute behaves when used by upstream services.",
    "children": [
      {
        "name": "enable_value_validation_on_association",
        "type": "boolean",
        "description": "Enables customers to enforce strict validation on the specific values that this predefined attribute can hold."
      },
      {
        "name": "is_read_only",
        "type": "boolean",
        "description": "Allows the predefined attribute to show up and be managed in the Amazon Connect UI."
      }
    ]
  },
  {
    "name": "last_modified_region",
    "type": "string",
    "description": "Last modified region."
  },
  {
    "name": "last_modified_time",
    "type": "number",
    "description": "Last modified time."
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
    "name": "instance_arn",
    "type": "string",
    "description": "The identifier of the Amazon Connect instance."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the predefined attribute."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-predefinedattribute.html"><code>AWS::Connect::PredefinedAttribute</code></a>.

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
    <td><code>predefined_attributes</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="InstanceArn, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>predefined_attributes</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>predefined_attributes</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>predefined_attributes_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>predefined_attributes</code></td>
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

Gets all properties from an individual <code>predefined_attribute</code>.
```sql
SELECT
region,
instance_arn,
name,
values,
purposes,
attribute_configuration,
last_modified_region,
last_modified_time
FROM awscc.connect.predefined_attributes
WHERE region = 'us-east-1' AND Identifier = '<InstanceArn>|<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>predefined_attributes</code> in a region.
```sql
SELECT
region,
instance_arn,
name
FROM awscc.connect.predefined_attributes_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>predefined_attribute</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.connect.predefined_attributes (
 InstanceArn,
 Name,
 region
)
SELECT 
'{{ InstanceArn }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.connect.predefined_attributes (
 InstanceArn,
 Name,
 Values,
 Purposes,
 AttributeConfiguration,
 region
)
SELECT 
 '{{ InstanceArn }}',
 '{{ Name }}',
 '{{ Values }}',
 '{{ Purposes }}',
 '{{ AttributeConfiguration }}',
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
  - name: predefined_attribute
    props:
      - name: InstanceArn
        value: '{{ InstanceArn }}'
      - name: Name
        value: '{{ Name }}'
      - name: Values
        value:
          StringList:
            - '{{ StringList[0] }}'
      - name: Purposes
        value:
          - '{{ Purposes[0] }}'
      - name: AttributeConfiguration
        value:
          EnableValueValidationOnAssociation: '{{ EnableValueValidationOnAssociation }}'
          IsReadOnly: '{{ IsReadOnly }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>predefined_attribute</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.connect.predefined_attributes
SET PatchDocument = string('{{ {
    "Values": values,
    "Purposes": purposes,
    "AttributeConfiguration": attribute_configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<InstanceArn>|<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connect.predefined_attributes
WHERE Identifier = '<InstanceArn|Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>predefined_attributes</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
connect:CreatePredefinedAttribute
```

</TabItem>
<TabItem value="read">

```json
connect:DescribePredefinedAttribute
```

</TabItem>
<TabItem value="delete">

```json
connect:DeletePredefinedAttribute
```

</TabItem>
<TabItem value="update">

```json
connect:UpdatePredefinedAttribute
```

</TabItem>
<TabItem value="list">

```json
connect:ListPredefinedAttributes
```

</TabItem>
</Tabs>