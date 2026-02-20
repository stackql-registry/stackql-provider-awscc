---
title: retrievers
hide_title: false
hide_table_of_contents: false
keywords:
  - retrievers
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

Creates, updates, deletes or gets a <code>retriever</code> resource or lists <code>retrievers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>retrievers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::QBusiness::Retriever Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.qbusiness.retrievers" /></td></tr>
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
    "name": "configuration",
    "type": "object",
    "description": ""
  },
  {
    "name": "created_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "display_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "retriever_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "retriever_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "status",
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
    "name": "type",
    "type": "string",
    "description": ""
  },
  {
    "name": "updated_at",
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
    "name": "retriever_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-retriever.html"><code>AWS::QBusiness::Retriever</code></a>.

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
    <td><code>retrievers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ApplicationId, Configuration, DisplayName, Type, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>retrievers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>retrievers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>retrievers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>retrievers</code></td>
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

Gets all properties from an individual <code>retriever</code>.
```sql
SELECT
region,
application_id,
configuration,
created_at,
display_name,
retriever_arn,
retriever_id,
role_arn,
status,
tags,
type,
updated_at
FROM awscc.qbusiness.retrievers
WHERE region = 'us-east-1' AND Identifier = '<ApplicationId>|<RetrieverId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>retrievers</code> in a region.
```sql
SELECT
region,
application_id,
retriever_id
FROM awscc.qbusiness.retrievers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>retriever</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.qbusiness.retrievers (
 ApplicationId,
 Configuration,
 DisplayName,
 Type,
 region
)
SELECT 
'{{ ApplicationId }}',
 '{{ Configuration }}',
 '{{ DisplayName }}',
 '{{ Type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.qbusiness.retrievers (
 ApplicationId,
 Configuration,
 DisplayName,
 RoleArn,
 Tags,
 Type,
 region
)
SELECT 
 '{{ ApplicationId }}',
 '{{ Configuration }}',
 '{{ DisplayName }}',
 '{{ RoleArn }}',
 '{{ Tags }}',
 '{{ Type }}',
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
  - name: retriever
    props:
      - name: ApplicationId
        value: '{{ ApplicationId }}'
      - name: Configuration
        value: null
      - name: DisplayName
        value: '{{ DisplayName }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Type
        value: '{{ Type }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.qbusiness.retrievers
SET PatchDocument = string('{{ {
    "Configuration": configuration,
    "DisplayName": display_name,
    "RoleArn": role_arn,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ApplicationId>|<RetrieverId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.qbusiness.retrievers
WHERE Identifier = '<ApplicationId|RetrieverId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>retrievers</code> resource, the following permissions are required:

### Create
```json
iam:PassRole,
qbusiness:CreateRetriever,
qbusiness:GetRetriever,
qbusiness:ListTagsForResource,
qbusiness:TagResource
```

### Read
```json
qbusiness:GetRetriever,
qbusiness:ListTagsForResource
```

### Update
```json
iam:PassRole,
qbusiness:GetRetriever,
qbusiness:ListTagsForResource,
qbusiness:TagResource,
qbusiness:UntagResource,
qbusiness:UpdateRetriever
```

### Delete
```json
qbusiness:DeleteRetriever,
qbusiness:GetRetriever
```

### List
```json
qbusiness:ListRetrievers
```
