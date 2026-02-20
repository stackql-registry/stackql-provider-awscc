---
title: aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - aliases
  - gamelift
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

Creates, updates, deletes or gets an <code>alias</code> resource or lists <code>aliases</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>aliases</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::GameLift::Alias resource creates an alias for an Amazon GameLift (GameLift) fleet destination.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.gamelift.aliases" /></td></tr>
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
    "description": "A human-readable description of the alias."
  },
  {
    "name": "name",
    "type": "string",
    "description": "A descriptive label that is associated with an alias. Alias names do not need to be unique."
  },
  {
    "name": "routing_strategy",
    "type": "object",
    "description": "A routing configuration that specifies where traffic is directed for this alias, such as to a fleet or to a message.",
    "children": [
      {
        "name": "message",
        "type": "string",
        "description": "The message text to be used with a terminal routing strategy. If you specify TERMINAL for the Type property, you must specify this property."
      },
      {
        "name": "fleet_id",
        "type": "string",
        "description": "A unique identifier for a fleet that the alias points to. If you specify SIMPLE for the Type property, you must specify this property."
      },
      {
        "name": "type",
        "type": "string",
        "description": "Simple routing strategy. The alias resolves to one specific fleet. Use this type when routing to active fleets."
      }
    ]
  },
  {
    "name": "alias_id",
    "type": "string",
    "description": "Unique alias ID"
  },
  {
    "name": "alias_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift Alias resource and uniquely identifies it. ARNs are unique across all Regions. In a GameLift Alias ARN, the resource ID matches the AliasId value."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length."
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
    "name": "alias_id",
    "type": "string",
    "description": "Unique alias ID"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html"><code>AWS::GameLift::Alias</code></a>.

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
    <td><code>aliases</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, RoutingStrategy, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>aliases</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>aliases</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>aliases_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>aliases</code></td>
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

Gets all properties from an individual <code>alias</code>.
```sql
SELECT
region,
description,
name,
routing_strategy,
alias_id,
alias_arn,
tags
FROM awscc.gamelift.aliases
WHERE region = 'us-east-1' AND Identifier = '<AliasId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>aliases</code> in a region.
```sql
SELECT
region,
alias_id
FROM awscc.gamelift.aliases_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>alias</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.gamelift.aliases (
 Name,
 RoutingStrategy,
 region
)
SELECT 
'{{ Name }}',
 '{{ RoutingStrategy }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.gamelift.aliases (
 Description,
 Name,
 RoutingStrategy,
 Tags,
 region
)
SELECT 
 '{{ Description }}',
 '{{ Name }}',
 '{{ RoutingStrategy }}',
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
  - name: alias
    props:
      - name: Description
        value: '{{ Description }}'
      - name: Name
        value: '{{ Name }}'
      - name: RoutingStrategy
        value:
          Message: '{{ Message }}'
          FleetId: '{{ FleetId }}'
          Type: '{{ Type }}'
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
UPDATE awscc.gamelift.aliases
SET PatchDocument = string('{{ {
    "Description": description,
    "Name": name,
    "RoutingStrategy": routing_strategy,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<AliasId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.gamelift.aliases
WHERE Identifier = '<AliasId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>aliases</code> resource, the following permissions are required:

### Create
```json
gamelift:CreateAlias,
gamelift:TagResource
```

### Read
```json
gamelift:DescribeAlias,
gamelift:ListTagsForResource
```

### Update
```json
gamelift:UpdateAlias,
gamelift:DescribeAlias,
gamelift:ListTagsForResource,
gamelift:TagResource,
gamelift:UntagResource
```

### Delete
```json
gamelift:DeleteAlias
```

### List
```json
gamelift:ListAliases
```
