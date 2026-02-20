---
title: datastores
hide_title: false
hide_table_of_contents: false
keywords:
  - datastores
  - healthimaging
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

Creates, updates, deletes or gets a <code>datastore</code> resource or lists <code>datastores</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>datastores</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::HealthImaging::Datastore Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.healthimaging.datastores" /></td></tr>
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
    "name": "datastore_arn",
    "type": "string",
    "description": "The Datastore's ARN."
  },
  {
    "name": "datastore_name",
    "type": "string",
    "description": "User friendly name for Datastore."
  },
  {
    "name": "datastore_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "datastore_status",
    "type": "string",
    "description": "A string to denote the Datastore's state."
  },
  {
    "name": "kms_key_arn",
    "type": "string",
    "description": "ARN referencing a KMS key or KMS key alias."
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The timestamp when the data store was created."
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": "The timestamp when the data store was created."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A Map of key value pairs for Tags."
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
    "name": "datastore_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthimaging-datastore.html"><code>AWS::HealthImaging::Datastore</code></a>.

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
    <td><code>datastores</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>datastores</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>datastores_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>datastores</code></td>
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

Gets all properties from an individual <code>datastore</code>.
```sql
SELECT
region,
datastore_arn,
datastore_name,
datastore_id,
datastore_status,
kms_key_arn,
created_at,
updated_at,
tags
FROM awscc.healthimaging.datastores
WHERE region = 'us-east-1' AND Identifier = '<DatastoreId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>datastores</code> in a region.
```sql
SELECT
region,
datastore_id
FROM awscc.healthimaging.datastores_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>datastore</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.healthimaging.datastores (
 ,
 region
)
SELECT 
'{{  }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.healthimaging.datastores (
 DatastoreName,
 KmsKeyArn,
 Tags,
 region
)
SELECT 
 '{{ DatastoreName }}',
 '{{ KmsKeyArn }}',
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
  - name: datastore
    props:
      - name: DatastoreName
        value: '{{ DatastoreName }}'
      - name: KmsKeyArn
        value: '{{ KmsKeyArn }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.healthimaging.datastores
WHERE Identifier = '<DatastoreId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>datastores</code> resource, the following permissions are required:

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
medical-imaging:CreateDatastore,
medical-imaging:GetDatastore,
kms:DescribeKey,
kms:CreateGrant,
kms:RetireGrant,
kms:GenerateDataKey,
kms:Decrypt,
lambda:InvokeFunction,
medical-imaging:TagResource,
medical-imaging:UntagResource,
medical-imaging:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
medical-imaging:GetDatastore,
medical-imaging:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
medical-imaging:DeleteDatastore,
medical-imaging:GetDatastore,
medical-imaging:UntagResource,
kms:DescribeKey,
kms:RetireGrant,
kms:GenerateDataKey,
kms:Decrypt
```

</TabItem>
<TabItem value="list">

```json
medical-imaging:ListDatastores
```

</TabItem>
</Tabs>