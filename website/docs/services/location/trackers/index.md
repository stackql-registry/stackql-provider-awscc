---
title: trackers
hide_title: false
hide_table_of_contents: false
keywords:
  - trackers
  - location
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

Creates, updates, deletes or gets a <code>tracker</code> resource or lists <code>trackers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>trackers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Location::Tracker Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.location.trackers" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "create_time",
    "type": "string",
    "description": "The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ)"
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "event_bridge_enabled",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "kms_key_enable_geospatial_queries",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "position_filtering",
    "type": "string",
    "description": ""
  },
  {
    "name": "pricing_plan",
    "type": "string",
    "description": ""
  },
  {
    "name": "pricing_plan_data_source",
    "type": "string",
    "description": "This shape is deprecated since 2022-02-01: Deprecated. No longer allowed."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
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
    "name": "tracker_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "tracker_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-tracker.html"><code>AWS::Location::Tracker</code></a>.

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
    <td><CopyableCode code="TrackerName, region" /></td>
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

Gets all properties from an individual <code>tracker</code>.
```sql
SELECT
region,
create_time,
description,
event_bridge_enabled,
kms_key_enable_geospatial_queries,
kms_key_id,
position_filtering,
pricing_plan,
pricing_plan_data_source,
tags,
tracker_arn,
tracker_name,
update_time,
arn
FROM awscc.location.trackers
WHERE region = 'us-east-1' AND data__Identifier = '<TrackerName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>tracker</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.location.trackers (
 TrackerName,
 region
)
SELECT 
'{{ TrackerName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.location.trackers (
 Description,
 EventBridgeEnabled,
 KmsKeyEnableGeospatialQueries,
 KmsKeyId,
 PositionFiltering,
 PricingPlan,
 PricingPlanDataSource,
 Tags,
 TrackerName,
 region
)
SELECT 
 '{{ Description }}',
 '{{ EventBridgeEnabled }}',
 '{{ KmsKeyEnableGeospatialQueries }}',
 '{{ KmsKeyId }}',
 '{{ PositionFiltering }}',
 '{{ PricingPlan }}',
 '{{ PricingPlanDataSource }}',
 '{{ Tags }}',
 '{{ TrackerName }}',
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
  - name: tracker
    props:
      - name: Description
        value: '{{ Description }}'
      - name: EventBridgeEnabled
        value: '{{ EventBridgeEnabled }}'
      - name: KmsKeyEnableGeospatialQueries
        value: '{{ KmsKeyEnableGeospatialQueries }}'
      - name: KmsKeyId
        value: '{{ KmsKeyId }}'
      - name: PositionFiltering
        value: '{{ PositionFiltering }}'
      - name: PricingPlan
        value: '{{ PricingPlan }}'
      - name: PricingPlanDataSource
        value: '{{ PricingPlanDataSource }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: TrackerName
        value: '{{ TrackerName }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.location.trackers
WHERE data__Identifier = '<TrackerName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>trackers</code> resource, the following permissions are required:

### Create
```json
geo:CreateTracker,
geo:DescribeTracker,
geo:TagResource,
geo:UntagResource,
kms:DescribeKey,
kms:CreateGrant
```

### Read
```json
geo:DescribeTracker,
kms:DescribeKey
```

### Update
```json
geo:CreateTracker,
geo:DescribeTracker,
geo:TagResource,
geo:UntagResource,
kms:DescribeKey,
kms:CreateGrant,
geo:UpdateTracker
```

### Delete
```json
geo:DeleteTracker,
geo:DescribeTracker
```

### List
```json
geo:ListTrackers
```
