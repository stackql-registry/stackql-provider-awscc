---
title: wal_workspaces
hide_title: false
hide_table_of_contents: false
keywords:
  - wal_workspaces
  - emr
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

Creates, updates, deletes or gets a <code>wal_workspace</code> resource or lists <code>wal_workspaces</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>wal_workspaces</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::EMR::WALWorkspace Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.emr.wal_workspaces" /></td></tr>
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
    "name": "wal_workspace_name",
    "type": "string",
    "description": "The name of the emrwal container"
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
    "name": "wal_workspace_name",
    "type": "string",
    "description": "The name of the emrwal container"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-walworkspace.html"><code>AWS::EMR::WALWorkspace</code></a>.

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
    <td><code>wal_workspaces</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>wal_workspaces</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>wal_workspaces</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>wal_workspaces_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>wal_workspaces</code></td>
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

Gets all properties from an individual <code>wal_workspace</code>.
```sql
SELECT
region,
wal_workspace_name,
tags
FROM awscc.emr.wal_workspaces
WHERE region = 'us-east-1' AND data__Identifier = '<WALWorkspaceName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>wal_workspaces</code> in a region.
```sql
SELECT
region,
wal_workspace_name
FROM awscc.emr.wal_workspaces_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>wal_workspace</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.emr.wal_workspaces (
 WALWorkspaceName,
 Tags,
 region
)
SELECT 
'{{ WALWorkspaceName }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.emr.wal_workspaces (
 WALWorkspaceName,
 Tags,
 region
)
SELECT 
 '{{ WALWorkspaceName }}',
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
  - name: wal_workspace
    props:
      - name: WALWorkspaceName
        value: '{{ WALWorkspaceName }}'
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
UPDATE awscc.emr.wal_workspaces
SET data__PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<WALWorkspaceName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.emr.wal_workspaces
WHERE data__Identifier = '<WALWorkspaceName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>wal_workspaces</code> resource, the following permissions are required:

### Create
```json
emrwal:CreateWorkspace,
emrwal:TagResource,
iam:CreateServiceLinkedRole
```

### Read
```json
emrwal:ListTagsForResource
```

### Delete
```json
emrwal:DeleteWorkspace
```

### List
```json
emrwal:ListWorkspaces
```

### Update
```json
emrwal:TagResource,
emrwal:UntagResource,
emrwal:ListTagsForResource
```
