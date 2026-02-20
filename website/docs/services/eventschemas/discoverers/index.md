---
title: discoverers
hide_title: false
hide_table_of_contents: false
keywords:
  - discoverers
  - eventschemas
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

Creates, updates, deletes or gets a <code>discoverer</code> resource or lists <code>discoverers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>discoverers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EventSchemas::Discoverer</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.eventschemas.discoverers" /></td></tr>
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
    "name": "discoverer_arn",
    "type": "string",
    "description": "The ARN of the discoverer."
  },
  {
    "name": "discoverer_id",
    "type": "string",
    "description": "The Id of the discoverer."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description for the discoverer."
  },
  {
    "name": "source_arn",
    "type": "string",
    "description": "The ARN of the event bus."
  },
  {
    "name": "cross_account",
    "type": "boolean",
    "description": "Defines whether event schemas from other accounts are discovered. Default is True."
  },
  {
    "name": "state",
    "type": "string",
    "description": "Defines the current state of the discoverer."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags associated with the resource.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
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
    "name": "discoverer_arn",
    "type": "string",
    "description": "The ARN of the discoverer."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-discoverer.html"><code>AWS::EventSchemas::Discoverer</code></a>.

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
    <td><code>discoverers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="SourceArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>discoverers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>discoverers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>discoverers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>discoverers</code></td>
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

Gets all properties from an individual <code>discoverer</code>.
```sql
SELECT
region,
discoverer_arn,
discoverer_id,
description,
source_arn,
cross_account,
state,
tags
FROM awscc.eventschemas.discoverers
WHERE region = 'us-east-1' AND Identifier = '<DiscovererArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>discoverers</code> in a region.
```sql
SELECT
region,
discoverer_arn
FROM awscc.eventschemas.discoverers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>discoverer</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.eventschemas.discoverers (
 SourceArn,
 region
)
SELECT 
'{{ SourceArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.eventschemas.discoverers (
 Description,
 SourceArn,
 CrossAccount,
 Tags,
 region
)
SELECT 
 '{{ Description }}',
 '{{ SourceArn }}',
 '{{ CrossAccount }}',
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
  - name: discoverer
    props:
      - name: Description
        value: '{{ Description }}'
      - name: SourceArn
        value: '{{ SourceArn }}'
      - name: CrossAccount
        value: '{{ CrossAccount }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>discoverer</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.eventschemas.discoverers
SET PatchDocument = string('{{ {
    "Description": description,
    "CrossAccount": cross_account,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<DiscovererArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.eventschemas.discoverers
WHERE Identifier = '<DiscovererArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>discoverers</code> resource, the following permissions are required:

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
schemas:CreateDiscoverer,
schemas:DescribeDiscoverer,
schemas:TagResource,
events:PutRule,
events:PutTargets,
events:EnableRule,
events:ListTargetsByRule,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="read">

```json
schemas:DescribeDiscoverer
```

</TabItem>
<TabItem value="update">

```json
schemas:DescribeDiscoverer,
schemas:UpdateDiscoverer,
schemas:TagResource,
schemas:UntagResource,
schemas:ListTagsForResource,
events:PutTargets,
events:PutRule
```

</TabItem>
<TabItem value="delete">

```json
schemas:DescribeDiscoverer,
schemas:DeleteDiscoverer,
events:DeleteRule,
events:DisableRule,
events:RemoveTargets
```

</TabItem>
<TabItem value="list">

```json
schemas:ListDiscoverers
```

</TabItem>
</Tabs>