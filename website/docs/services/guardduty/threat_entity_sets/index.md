---
title: threat_entity_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - threat_entity_sets
  - guardduty
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

Creates, updates, deletes or gets a <code>threat_entity_set</code> resource or lists <code>threat_entity_sets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>threat_entity_sets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::GuardDuty::ThreatEntitySet</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.guardduty.threat_entity_sets" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="format" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="activate" /></td><td><code>boolean</code></td><td></td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="created_at" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="updated_at" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="error_details" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="detector_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="location" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="expected_bucket_owner" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatentityset.html"><code>AWS::GuardDuty::ThreatEntitySet</code></a>.

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
    <td><CopyableCode code="Format, Location, region" /></td>
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
Gets all <code>threat_entity_sets</code> in a region.
```sql
SELECT
region,
id,
format,
activate,
status,
created_at,
updated_at,
error_details,
detector_id,
name,
location,
expected_bucket_owner,
tags
FROM awscc.guardduty.threat_entity_sets
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>threat_entity_set</code>.
```sql
SELECT
region,
id,
format,
activate,
status,
created_at,
updated_at,
error_details,
detector_id,
name,
location,
expected_bucket_owner,
tags
FROM awscc.guardduty.threat_entity_sets
WHERE region = 'us-east-1' AND data__Identifier = '<Id>|<DetectorId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>threat_entity_set</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.guardduty.threat_entity_sets (
 Format,
 Location,
 region
)
SELECT 
'{{ Format }}',
 '{{ Location }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.guardduty.threat_entity_sets (
 Format,
 Activate,
 DetectorId,
 Name,
 Location,
 ExpectedBucketOwner,
 Tags,
 region
)
SELECT 
 '{{ Format }}',
 '{{ Activate }}',
 '{{ DetectorId }}',
 '{{ Name }}',
 '{{ Location }}',
 '{{ ExpectedBucketOwner }}',
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
  - name: threat_entity_set
    props:
      - name: Format
        value: '{{ Format }}'
      - name: Activate
        value: '{{ Activate }}'
      - name: DetectorId
        value: '{{ DetectorId }}'
      - name: Name
        value: '{{ Name }}'
      - name: Location
        value: '{{ Location }}'
      - name: ExpectedBucketOwner
        value: '{{ ExpectedBucketOwner }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.guardduty.threat_entity_sets
WHERE data__Identifier = '<Id|DetectorId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>threat_entity_sets</code> resource, the following permissions are required:

### Create
```json
guardduty:CreateThreatEntitySet,
guardduty:GetThreatEntitySet,
guardduty:TagResource,
s3:GetObject
```

### Read
```json
guardduty:GetThreatEntitySet
```

### Delete
```json
guardduty:ListDetectors,
guardduty:ListThreatEntitySets,
guardduty:DeleteThreatEntitySet,
guardduty:GetThreatEntitySet
```

### Update
```json
guardduty:UpdateThreatEntitySet,
guardduty:GetThreatEntitySet,
guardduty:ListThreatEntitySets,
guardduty:TagResource,
guardduty:UntagResource,
s3:GetObject
```

### List
```json
guardduty:ListThreatEntitySets
```
