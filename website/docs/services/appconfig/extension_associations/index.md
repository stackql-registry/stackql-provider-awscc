---
title: extension_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - extension_associations
  - appconfig
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

Creates, updates, deletes or gets an <code>extension_association</code> resource or lists <code>extension_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>extension_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An example resource schema demonstrating some basic constructs and validation rules.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.appconfig.extension_associations" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "extension_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "resource_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "extension_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "resource_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "extension_version_number",
    "type": "integer",
    "description": ""
  },
  {
    "name": "parameters",
    "type": "object",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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
    "name": "id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extensionassociation.html"><code>AWS::AppConfig::ExtensionAssociation</code></a>.

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
    <td><code>extension_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>extension_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>extension_associations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>extension_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>extension_associations</code></td>
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

Gets all properties from an individual <code>extension_association</code>.
```sql
SELECT
region,
id,
arn,
extension_arn,
resource_arn,
extension_identifier,
resource_identifier,
extension_version_number,
parameters,
tags
FROM awscc.appconfig.extension_associations
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>extension_associations</code> in a region.
```sql
SELECT
region,
id
FROM awscc.appconfig.extension_associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>extension_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.appconfig.extension_associations (
 ExtensionIdentifier,
 ResourceIdentifier,
 ExtensionVersionNumber,
 Parameters,
 Tags,
 region
)
SELECT 
'{{ ExtensionIdentifier }}',
 '{{ ResourceIdentifier }}',
 '{{ ExtensionVersionNumber }}',
 '{{ Parameters }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.appconfig.extension_associations (
 ExtensionIdentifier,
 ResourceIdentifier,
 ExtensionVersionNumber,
 Parameters,
 Tags,
 region
)
SELECT 
 '{{ ExtensionIdentifier }}',
 '{{ ResourceIdentifier }}',
 '{{ ExtensionVersionNumber }}',
 '{{ Parameters }}',
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
  - name: extension_association
    props:
      - name: ExtensionIdentifier
        value: '{{ ExtensionIdentifier }}'
      - name: ResourceIdentifier
        value: '{{ ResourceIdentifier }}'
      - name: ExtensionVersionNumber
        value: '{{ ExtensionVersionNumber }}'
      - name: Parameters
        value: {}
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
UPDATE awscc.appconfig.extension_associations
SET data__PatchDocument = string('{{ {
    "Parameters": parameters,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.appconfig.extension_associations
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>extension_associations</code> resource, the following permissions are required:

### Create
```json
appconfig:CreateExtensionAssociation,
appconfig:TagResource
```

### Read
```json
appconfig:GetExtensionAssociation,
appconfig:ListTagsForResource
```

### Update
```json
appconfig:UpdateExtensionAssociation,
appconfig:TagResource,
appconfig:UntagResource
```

### Delete
```json
appconfig:DeleteExtensionAssociation,
appconfig:UntagResource
```

### List
```json
appconfig:ListExtensionAssociations
```
