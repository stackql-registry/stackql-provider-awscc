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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthimaging-datastore.html"><code>AWS::HealthImaging::Datastore</code></a>.

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
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

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
WHERE region = 'us-east-1' AND data__Identifier = '<DatastoreId>';
```

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
WHERE data__Identifier = '<DatastoreId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>datastores</code> resource, the following permissions are required:

### Create
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

### Read
```json
medical-imaging:GetDatastore,
medical-imaging:ListTagsForResource
```

### Delete
```json
medical-imaging:DeleteDatastore,
medical-imaging:GetDatastore,
medical-imaging:UntagResource,
kms:DescribeKey,
kms:RetireGrant,
kms:GenerateDataKey,
kms:Decrypt
```

### List
```json
medical-imaging:ListDatastores
```
