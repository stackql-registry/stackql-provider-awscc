---
title: connection_aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - connection_aliases
  - workspaces
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

Creates, updates, deletes or gets a <code>connection_alias</code> resource or lists <code>connection_aliases</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>connection_aliases</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::WorkSpaces::ConnectionAlias</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.workspaces.connection_aliases" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "associations",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "association_status",
        "type": "string",
        "description": ""
      },
      {
        "name": "associated_account_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "resource_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "connection_identifier",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "alias_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "connection_string",
    "type": "string",
    "description": ""
  },
  {
    "name": "connection_alias_state",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-connectionalias.html"><code>AWS::WorkSpaces::ConnectionAlias</code></a>.

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
    <td><CopyableCode code="ConnectionString, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>connection_alias</code>.
```sql
SELECT
region,
associations,
alias_id,
connection_string,
connection_alias_state,
tags
FROM awscc.workspaces.connection_aliases
WHERE region = 'us-east-1' AND Identifier = '{{ alias_id }}';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>connection_alias</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.workspaces.connection_aliases (
 ConnectionString,
 region
)
SELECT
'{{ connection_string }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.workspaces.connection_aliases (
 ConnectionString,
 Tags,
 region
)
SELECT
 '{{ connection_string }}',
 '{{ tags }}',
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
  - name: connection_alias
    props:
      - name: connection_string
        value: '{{ connection_string }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.workspaces.connection_aliases
WHERE Identifier = '{{ alias_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>connection_aliases</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="create">

```json
workspaces:CreateConnectionAlias,
workspaces:CreateTags,
workspaces:DescribeConnectionAliases,
workspaces:DescribeTags
```

</TabItem>
<TabItem value="read">

```json
workspaces:DescribeConnectionAliases,
workspaces:DescribeTags
```

</TabItem>
<TabItem value="delete">

```json
workspaces:DeleteConnectionAlias,
workspaces:DeleteTags,
workspaces:DescribeTags,
workspaces:DescribeConnectionAliases
```

</TabItem>
</Tabs>