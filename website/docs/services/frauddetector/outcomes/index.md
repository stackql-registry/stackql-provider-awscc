---
title: outcomes
hide_title: false
hide_table_of_contents: false
keywords:
  - outcomes
  - frauddetector
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

Creates, updates, deletes or gets an <code>outcome</code> resource or lists <code>outcomes</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>outcomes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An outcome for rule evaluation.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.frauddetector.outcomes" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "The name of the outcome."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags associated with this outcome.",
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
    "name": "description",
    "type": "string",
    "description": "The outcome description."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The outcome ARN."
  },
  {
    "name": "created_time",
    "type": "string",
    "description": "The timestamp when the outcome was created."
  },
  {
    "name": "last_updated_time",
    "type": "string",
    "description": "The timestamp when the outcome was last updated."
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
    "name": "arn",
    "type": "string",
    "description": "The outcome ARN."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-outcome.html"><code>AWS::FraudDetector::Outcome</code></a>.

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
    <td><code>outcomes</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>outcomes</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>outcomes</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>outcomes_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>outcomes</code></td>
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

Gets all properties from an individual <code>outcome</code>.
```sql
SELECT
region,
name,
tags,
description,
arn,
created_time,
last_updated_time
FROM awscc.frauddetector.outcomes
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>outcomes</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.frauddetector.outcomes_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>outcome</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.frauddetector.outcomes (
 Name,
 region
)
SELECT
'{{ name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.frauddetector.outcomes (
 Name,
 Tags,
 Description,
 region
)
SELECT
 '{{ name }}',
 '{{ tags }}',
 '{{ description }}',
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
  - name: outcome
    props:
      - name: name
        value: '{{ name }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: description
        value: '{{ description }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>outcome</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.frauddetector.outcomes
SET PatchDocument = string('{{ {
    "Tags": tags,
    "Description": description
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.frauddetector.outcomes
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>outcomes</code> resource, the following permissions are required:

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
frauddetector:GetOutcomes,
frauddetector:PutOutcome,
frauddetector:ListTagsForResource,
frauddetector:TagResource
```

</TabItem>
<TabItem value="read">

```json
frauddetector:GetOutcomes,
frauddetector:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
frauddetector:GetOutcomes,
frauddetector:PutOutcome,
frauddetector:ListTagsForResource,
frauddetector:TagResource,
frauddetector:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
frauddetector:GetOutcomes,
frauddetector:DeleteOutcome
```

</TabItem>
<TabItem value="list">

```json
frauddetector:GetOutcomes,
frauddetector:ListTagsForResource
```

</TabItem>
</Tabs>