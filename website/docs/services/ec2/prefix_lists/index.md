---
title: prefix_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - prefix_lists
  - ec2
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

Creates, updates, deletes or gets a <code>prefix_list</code> resource or lists <code>prefix_lists</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>prefix_lists</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema of AWS::EC2::PrefixList Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.prefix_lists" /></td></tr>
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
    "name": "prefix_list_name",
    "type": "string",
    "description": "Name of Prefix List."
  },
  {
    "name": "prefix_list_id",
    "type": "string",
    "description": "Id of Prefix List."
  },
  {
    "name": "owner_id",
    "type": "string",
    "description": "Owner Id of Prefix List."
  },
  {
    "name": "address_family",
    "type": "string",
    "description": "Ip Version of Prefix List."
  },
  {
    "name": "max_entries",
    "type": "integer",
    "description": "Max Entries of Prefix List."
  },
  {
    "name": "version",
    "type": "integer",
    "description": "Version of Prefix List."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags for Prefix List",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The tag key."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The tag value."
      }
    ]
  },
  {
    "name": "entries",
    "type": "array",
    "description": "Entries of Prefix List.",
    "children": [
      {
        "name": "cidr",
        "type": "string",
        "description": ""
      },
      {
        "name": "description",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the Prefix List."
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
    "name": "prefix_list_id",
    "type": "string",
    "description": "Id of Prefix List."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-prefixlist.html"><code>AWS::EC2::PrefixList</code></a>.

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
    <td><code>prefix_lists</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="PrefixListName, AddressFamily, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>prefix_lists</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>prefix_lists</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>prefix_lists_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>prefix_lists</code></td>
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

Gets all properties from an individual <code>prefix_list</code>.
```sql
SELECT
region,
prefix_list_name,
prefix_list_id,
owner_id,
address_family,
max_entries,
version,
tags,
entries,
arn
FROM awscc.ec2.prefix_lists
WHERE region = 'us-east-1' AND data__Identifier = '<PrefixListId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>prefix_lists</code> in a region.
```sql
SELECT
region,
prefix_list_id
FROM awscc.ec2.prefix_lists_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>prefix_list</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.prefix_lists (
 PrefixListName,
 AddressFamily,
 region
)
SELECT 
'{{ PrefixListName }}',
 '{{ AddressFamily }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.prefix_lists (
 PrefixListName,
 AddressFamily,
 MaxEntries,
 Tags,
 Entries,
 region
)
SELECT 
 '{{ PrefixListName }}',
 '{{ AddressFamily }}',
 '{{ MaxEntries }}',
 '{{ Tags }}',
 '{{ Entries }}',
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
  - name: prefix_list
    props:
      - name: PrefixListName
        value: '{{ PrefixListName }}'
      - name: AddressFamily
        value: '{{ AddressFamily }}'
      - name: MaxEntries
        value: '{{ MaxEntries }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Entries
        value:
          - Cidr: '{{ Cidr }}'
            Description: '{{ Description }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ec2.prefix_lists
SET data__PatchDocument = string('{{ {
    "PrefixListName": prefix_list_name,
    "AddressFamily": address_family,
    "MaxEntries": max_entries,
    "Tags": tags,
    "Entries": entries
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<PrefixListId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.prefix_lists
WHERE data__Identifier = '<PrefixListId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>prefix_lists</code> resource, the following permissions are required:

### Create
```json
EC2:CreateManagedPrefixList,
EC2:DescribeManagedPrefixLists,
EC2:CreateTags
```

### Read
```json
EC2:GetManagedPrefixListEntries,
EC2:DescribeManagedPrefixLists
```

### Update
```json
EC2:DescribeManagedPrefixLists,
EC2:GetManagedPrefixListEntries,
EC2:ModifyManagedPrefixList,
EC2:CreateTags,
EC2:DeleteTags
```

### Delete
```json
EC2:DeleteManagedPrefixList,
EC2:DescribeManagedPrefixLists
```

### List
```json
EC2:DescribeManagedPrefixLists,
EC2:GetManagedPrefixListEntries
```
