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
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="access_log_location" /></td><td><code>string</code></td><td>Location of the access logs.</td></tr>
<tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td>The store's ARN.</td></tr>
<tr><td><CopyableCode code="creation_time" /></td><td><code>string</code></td><td>When the store was created.</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>A description for the store.</td></tr>
<tr><td><CopyableCode code="e_tag_algorithm_family" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="fallback_location" /></td><td><code>string</code></td><td>An S3 location that is used to store files that have failed a direct upload.</td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>A name for the store.</td></tr>
<tr><td><CopyableCode code="propagated_set_level_tags" /></td><td><code>array</code></td><td>The tags keys to propagate to the S3 objects associated with read sets in the sequence store.</td></tr>
<tr><td><CopyableCode code="s3_access_point_arn" /></td><td><code>string</code></td><td>This is ARN of the access point associated with the S3 bucket storing read sets.</td></tr>
<tr><td><CopyableCode code="s3_access_policy" /></td><td><code>object</code></td><td>The resource policy that controls S3 access on the store</td></tr>
<tr><td><CopyableCode code="s3_uri" /></td><td><code>string</code></td><td>The S3 URI of the sequence store.</td></tr>
<tr><td><CopyableCode code="sequence_store_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="sse_config" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="status_message" /></td><td><code>string</code></td><td>The status message of the sequence store.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>object</code></td><td>A map of resource tags</td></tr>
<tr><td><CopyableCode code="update_time" /></td><td><code>string</code></td><td>The last-updated time of the sequence store.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html"><code>AWS::Omics::SequenceStore</code></a>.

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
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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
Gets all <code>sequence_stores</code> in a region.
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
WHERE region = 'us-east-1';
```
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
WHERE region = 'us-east-1' AND data__Identifier = '<SequenceStoreId>';
```

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
'{{ Name }}',
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
 '{{ AccessLogLocation }}',
 '{{ Description }}',
 '{{ ETagAlgorithmFamily }}',
 '{{ FallbackLocation }}',
 '{{ Name }}',
 '{{ PropagatedSetLevelTags }}',
 '{{ S3AccessPolicy }}',
 '{{ SseConfig }}',
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
  - name: sequence_store
    props:
      - name: AccessLogLocation
        value: '{{ AccessLogLocation }}'
      - name: Description
        value: '{{ Description }}'
      - name: ETagAlgorithmFamily
        value: '{{ ETagAlgorithmFamily }}'
      - name: FallbackLocation
        value: '{{ FallbackLocation }}'
      - name: Name
        value: '{{ Name }}'
      - name: PropagatedSetLevelTags
        value:
          - '{{ PropagatedSetLevelTags[0] }}'
      - name: S3AccessPolicy
        value: {}
      - name: SseConfig
        value:
          Type: '{{ Type }}'
          KeyArn: '{{ KeyArn }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.omics.sequence_stores
WHERE data__Identifier = '<SequenceStoreId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>sequence_stores</code> resource, the following permissions are required:

### Create
```json
omics:CreateSequenceStore,
omics:GetSequenceStore,
omics:GetS3AccessPolicy,
omics:PutS3AccessPolicy,
omics:ListTagsForResource,
omics:TagResource,
kms:DescribeKey
```

### Read
```json
omics:GetS3AccessPolicy,
omics:GetSequenceStore,
omics:ListTagsForResource
```

### Update
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

### Delete
```json
omics:DeleteSequenceStore
```

### List
```json
omics:ListSequenceStores
```
