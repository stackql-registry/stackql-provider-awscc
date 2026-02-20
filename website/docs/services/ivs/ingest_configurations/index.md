---
title: ingest_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - ingest_configurations
  - ivs
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

Creates, updates, deletes or gets an <code>ingest_configuration</code> resource or lists <code>ingest_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>ingest_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::IVS::IngestConfiguration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ivs.ingest_configurations" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": "IngestConfiguration ARN is automatically generated on creation and assigned as the unique identifier."
  },
  {
    "name": "name",
    "type": "string",
    "description": "IngestConfiguration"
  },
  {
    "name": "stage_arn",
    "type": "string",
    "description": "Stage ARN. A value other than an empty string indicates that stage is linked to IngestConfiguration. Default: \"\" (recording is disabled)."
  },
  {
    "name": "participant_id",
    "type": "string",
    "description": "Participant Id is automatically generated on creation and assigned."
  },
  {
    "name": "ingest_protocol",
    "type": "string",
    "description": "Ingest Protocol."
  },
  {
    "name": "insecure_ingest",
    "type": "boolean",
    "description": "Whether ingest configuration allows insecure ingest."
  },
  {
    "name": "state",
    "type": "string",
    "description": "State of IngestConfiguration which determines whether IngestConfiguration is in use or not."
  },
  {
    "name": "stream_key",
    "type": "string",
    "description": "Stream-key value."
  },
  {
    "name": "user_id",
    "type": "string",
    "description": "User defined indentifier for participant associated with IngestConfiguration."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of key-value pairs that contain metadata for the asset model.",
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
    "name": "arn",
    "type": "string",
    "description": "IngestConfiguration ARN is automatically generated on creation and assigned as the unique identifier."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-ingestconfiguration.html"><code>AWS::IVS::IngestConfiguration</code></a>.

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
    <td><code>ingest_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>ingest_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>ingest_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>ingest_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>ingest_configurations</code></td>
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

Gets all properties from an individual <code>ingest_configuration</code>.
```sql
SELECT
region,
arn,
name,
stage_arn,
participant_id,
ingest_protocol,
insecure_ingest,
state,
stream_key,
user_id,
tags
FROM awscc.ivs.ingest_configurations
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>ingest_configurations</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.ivs.ingest_configurations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>ingest_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ivs.ingest_configurations (
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
INSERT INTO awscc.ivs.ingest_configurations (
 Name,
 StageArn,
 IngestProtocol,
 InsecureIngest,
 UserId,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ StageArn }}',
 '{{ IngestProtocol }}',
 '{{ InsecureIngest }}',
 '{{ UserId }}',
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
  - name: ingest_configuration
    props:
      - name: Name
        value: '{{ Name }}'
      - name: StageArn
        value: '{{ StageArn }}'
      - name: IngestProtocol
        value: '{{ IngestProtocol }}'
      - name: InsecureIngest
        value: '{{ InsecureIngest }}'
      - name: UserId
        value: '{{ UserId }}'
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
UPDATE awscc.ivs.ingest_configurations
SET data__PatchDocument = string('{{ {
    "StageArn": stage_arn,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ivs.ingest_configurations
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>ingest_configurations</code> resource, the following permissions are required:

### Create
```json
ivs:CreateIngestConfiguration,
ivs:TagResource
```

### Read
```json
ivs:GetIngestConfiguration,
ivs:ListTagsForResource
```

### Update
```json
ivs:GetIngestConfiguration,
ivs:UpdateIngestConfiguration,
ivs:TagResource,
ivs:UntagResource,
ivs:ListTagsForResource
```

### Delete
```json
ivs:DeleteIngestConfiguration,
ivs:UntagResource
```

### List
```json
ivs:ListIngestConfigurations,
ivs:ListTagsForResource
```
