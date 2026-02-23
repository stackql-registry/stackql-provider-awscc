---
title: sequence_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - sequence_stores
  - omics
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

Creates, updates, deletes or gets a <code>sequence_store</code> resource or lists <code>sequence_stores</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>sequence_stores</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Omics::SequenceStore</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.omics.sequence_stores" /></td></tr>
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
    "name": "access_log_location",
    "type": "string",
    "description": "Location of the access logs."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The store's ARN."
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "When the store was created."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description for the store."
  },
  {
    "name": "e_tag_algorithm_family",
    "type": "string",
    "description": ""
  },
  {
    "name": "fallback_location",
    "type": "string",
    "description": "An S3 location that is used to store files that have failed a direct upload."
  },
  {
    "name": "name",
    "type": "string",
    "description": "A name for the store."
  },
  {
    "name": "propagated_set_level_tags",
    "type": "array",
    "description": "The tags keys to propagate to the S3 objects associated with read sets in the sequence store."
  },
  {
    "name": "s3_access_point_arn",
    "type": "string",
    "description": "This is ARN of the access point associated with the S3 bucket storing read sets."
  },
  {
    "name": "s3_access_policy",
    "type": "object",
    "description": "The resource policy that controls S3 access on the store"
  },
  {
    "name": "s3_uri",
    "type": "string",
    "description": "The S3 URI of the sequence store."
  },
  {
    "name": "sequence_store_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "sse_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "key_arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "status_message",
    "type": "string",
    "description": "The status message of the sequence store."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A map of resource tags"
  },
  {
    "name": "update_time",
    "type": "string",
    "description": "The last-updated time of the sequence store."
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
    "name": "sequence_store_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html"><code>AWS::Omics::SequenceStore</code></a>.

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
    <td><code>sequence_stores</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>sequence_stores</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>sequence_stores</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>sequence_stores_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>sequence_stores</code></td>
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

Gets all properties from an individual <code>sequence_store</code>.
```sql
SELECT
region,
access_log_location,
arn,
creation_time,
description,
e_tag_algorithm_family,
fallback_location,
name,
propagated_set_level_tags,
s3_access_point_arn,
s3_access_policy,
s3_uri,
sequence_store_id,
sse_config,
status,
status_message,
tags,
update_time
FROM awscc.omics.sequence_stores
WHERE region = 'us-east-1' AND Identifier = '{{ sequence_store_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>sequence_stores</code> in a region.
```sql
SELECT
region,
sequence_store_id
FROM awscc.omics.sequence_stores_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>sequence_store</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.omics.sequence_stores (
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
INSERT INTO awscc.omics.sequence_stores (
 AccessLogLocation,
 Description,
 ETagAlgorithmFamily,
 FallbackLocation,
 Name,
 PropagatedSetLevelTags,
 S3AccessPolicy,
 SseConfig,
 Tags,
 region
)
SELECT
 '{{ access_log_location }}',
 '{{ description }}',
 '{{ e_tag_algorithm_family }}',
 '{{ fallback_location }}',
 '{{ name }}',
 '{{ propagated_set_level_tags }}',
 '{{ s3_access_policy }}',
 '{{ sse_config }}',
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
  - name: sequence_store
    props:
      - name: access_log_location
        value: '{{ access_log_location }}'
      - name: description
        value: '{{ description }}'
      - name: e_tag_algorithm_family
        value: '{{ e_tag_algorithm_family }}'
      - name: fallback_location
        value: '{{ fallback_location }}'
      - name: name
        value: '{{ name }}'
      - name: propagated_set_level_tags
        value:
          - '{{ propagated_set_level_tags[0] }}'
      - name: s3_access_policy
        value: {}
      - name: sse_config
        value:
          type: '{{ type }}'
          key_arn: '{{ key_arn }}'
      - name: tags
        value: {}
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>sequence_store</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.omics.sequence_stores
SET PatchDocument = string('{{ {
    "AccessLogLocation": access_log_location,
    "Description": description,
    "FallbackLocation": fallback_location,
    "Name": name,
    "PropagatedSetLevelTags": propagated_set_level_tags,
    "S3AccessPolicy": s3_access_policy,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ sequence_store_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.omics.sequence_stores
WHERE Identifier = '{{ sequence_store_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>sequence_stores</code> resource, the following permissions are required:

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
omics:CreateSequenceStore,
omics:GetSequenceStore,
omics:GetS3AccessPolicy,
omics:PutS3AccessPolicy,
omics:ListTagsForResource,
omics:TagResource,
kms:DescribeKey
```

</TabItem>
<TabItem value="read">

```json
omics:GetS3AccessPolicy,
omics:GetSequenceStore,
omics:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
omics:UpdateSequenceStore,
omics:GetSequenceStore,
omics:TagResource,
omics:UntagResource,
omics:ListTagsForResource,
omics:GetS3AccessPolicy,
omics:DeleteS3AccessPolicy,
omics:PutS3AccessPolicy
```

</TabItem>
<TabItem value="delete">

```json
omics:DeleteSequenceStore
```

</TabItem>
<TabItem value="list">

```json
omics:ListSequenceStores
```

</TabItem>
</Tabs>