---
title: assistant_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - assistant_associations
  - wisdom
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

Creates, updates, deletes or gets an <code>assistant_association</code> resource or lists <code>assistant_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>assistant_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Wisdom::AssistantAssociation Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.wisdom.assistant_associations" /></td></tr>
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
    "name": "assistant_association_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "assistant_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "assistant_association_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "assistant_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "association",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "knowledge_base_id",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "association_type",
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
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -"
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -"
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
    "name": "assistant_association_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "assistant_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "association",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "knowledge_base_id",
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
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistantassociation.html"><code>AWS::Wisdom::AssistantAssociation</code></a>.

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
    <td><code>assistant_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Association, AssociationType, AssistantId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>assistant_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>assistant_associations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>assistant_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>assistant_associations</code></td>
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

Gets all properties from an individual <code>assistant_association</code>.
```sql
SELECT
region,
assistant_association_arn,
assistant_arn,
assistant_association_id,
assistant_id,
association,
association_type,
tags
FROM awscc.wisdom.assistant_associations
WHERE region = 'us-east-1' AND Identifier = '{{ assistant_association_id }}|{{ assistant_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>assistant_associations</code> in a region.
```sql
SELECT
region,
assistant_association_id,
assistant_id
FROM awscc.wisdom.assistant_associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>assistant_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.wisdom.assistant_associations (
 AssistantId,
 Association,
 AssociationType,
 region
)
SELECT
'{{ assistant_id }}',
 '{{ association }}',
 '{{ association_type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.wisdom.assistant_associations (
 AssistantId,
 Association,
 AssociationType,
 Tags,
 region
)
SELECT
 '{{ assistant_id }}',
 '{{ association }}',
 '{{ association_type }}',
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
  - name: assistant_association
    props:
      - name: assistant_id
        value: '{{ assistant_id }}'
      - name: association
        value:
          knowledge_base_id: '{{ knowledge_base_id }}'
      - name: association_type
        value: '{{ association_type }}'
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
DELETE FROM awscc.wisdom.assistant_associations
WHERE Identifier = '{{ assistant_association_id }}|{{ assistant_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>assistant_associations</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'Read', value: 'read', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="create">

```json
wisdom:CreateAssistantAssociation,
wisdom:TagResource
```

</TabItem>
<TabItem value="update">

```json
wisdom:GetAssistantAssociation
```

</TabItem>
<TabItem value="read">

```json
wisdom:GetAssistantAssociation
```

</TabItem>
<TabItem value="list">

```json
wisdom:ListAssistantAssociations
```

</TabItem>
<TabItem value="delete">

```json
wisdom:DeleteAssistantAssociation
```

</TabItem>
</Tabs>