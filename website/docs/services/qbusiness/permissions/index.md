---
title: permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - permissions
  - qbusiness
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

Creates, updates, deletes or gets a <code>permission</code> resource or lists <code>permissions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>permissions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::QBusiness::Permission Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.qbusiness.permissions" /></td></tr>
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
    "name": "application_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "statement_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "actions",
    "type": "array",
    "description": ""
  },
  {
    "name": "conditions",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "condition_operator",
        "type": "string",
        "description": ""
      },
      {
        "name": "condition_key",
        "type": "string",
        "description": ""
      },
      {
        "name": "condition_values",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "principal",
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
    "name": "application_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "statement_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-permission.html"><code>AWS::QBusiness::Permission</code></a>.

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
    <td><code>permissions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ApplicationId, StatementId, Actions, Principal, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>permissions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>permissions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>permissions</code></td>
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

Gets all properties from an individual <code>permission</code>.
```sql
SELECT
region,
application_id,
statement_id,
actions,
conditions,
principal
FROM awscc.qbusiness.permissions
WHERE region = 'us-east-1' AND Identifier = '{{ application_id }}|{{ statement_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>permissions</code> in a region.
```sql
SELECT
region,
application_id,
statement_id
FROM awscc.qbusiness.permissions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>permission</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.qbusiness.permissions (
 ApplicationId,
 StatementId,
 Actions,
 Principal,
 region
)
SELECT
'{{ application_id }}',
 '{{ statement_id }}',
 '{{ actions }}',
 '{{ principal }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.qbusiness.permissions (
 ApplicationId,
 StatementId,
 Actions,
 Conditions,
 Principal,
 region
)
SELECT
 '{{ application_id }}',
 '{{ statement_id }}',
 '{{ actions }}',
 '{{ conditions }}',
 '{{ principal }}',
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
  - name: permission
    props:
      - name: application_id
        value: '{{ application_id }}'
      - name: statement_id
        value: '{{ statement_id }}'
      - name: actions
        value:
          - '{{ actions[0] }}'
      - name: conditions
        value:
          - condition_operator: '{{ condition_operator }}'
            condition_key: '{{ condition_key }}'
            condition_values:
              - '{{ condition_values[0] }}'
      - name: principal
        value: '{{ principal }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.qbusiness.permissions
WHERE Identifier = '{{ application_id }}|{{ statement_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>permissions</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
qbusiness:AssociatePermission,
qbusiness:PutResourcePolicy
```

</TabItem>
<TabItem value="read">

```json
qbusiness:GetPolicy
```

</TabItem>
<TabItem value="delete">

```json
qbusiness:DisassociatePermission,
qbusiness:PutResourcePolicy
```

</TabItem>
<TabItem value="list">

```json
qbusiness:GetPolicy
```

</TabItem>
</Tabs>