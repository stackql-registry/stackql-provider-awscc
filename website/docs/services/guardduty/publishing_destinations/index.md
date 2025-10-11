---
title: publishing_destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - publishing_destinations
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

Creates, updates, deletes or gets a <code>publishing_destination</code> resource or lists <code>publishing_destinations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>publishing_destinations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::GuardDuty::PublishingDestination.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.guardduty.publishing_destinations" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="id" /></td><td><code>string</code></td><td>The ID of the publishing destination.</td></tr>
<tr><td><CopyableCode code="detector_id" /></td><td><code>string</code></td><td>The ID of the GuardDuty detector associated with the publishing destination.</td></tr>
<tr><td><CopyableCode code="destination_type" /></td><td><code>string</code></td><td>The type of resource for the publishing destination. Currently only Amazon S3 buckets are supported.</td></tr>
<tr><td><CopyableCode code="destination_properties" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td>The status of the publishing destination.</td></tr>
<tr><td><CopyableCode code="publishing_failure_start_timestamp" /></td><td><code>string</code></td><td>The time, in epoch millisecond format, at which GuardDuty was first unable to publish findings to the destination.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-publishingdestination.html"><code>AWS::GuardDuty::PublishingDestination</code></a>.

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
    <td><CopyableCode code="DetectorId, DestinationType, DestinationProperties, region" /></td>
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
Gets all <code>publishing_destinations</code> in a region.
```sql
SELECT
region,
id,
detector_id,
destination_type,
destination_properties,
status,
publishing_failure_start_timestamp,
tags
FROM awscc.guardduty.publishing_destinations
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>publishing_destination</code>.
```sql
SELECT
region,
id,
detector_id,
destination_type,
destination_properties,
status,
publishing_failure_start_timestamp,
tags
FROM awscc.guardduty.publishing_destinations
WHERE region = 'us-east-1' AND data__Identifier = '<DetectorId>|<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>publishing_destination</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.guardduty.publishing_destinations (
 DetectorId,
 DestinationType,
 DestinationProperties,
 region
)
SELECT 
'{{ DetectorId }}',
 '{{ DestinationType }}',
 '{{ DestinationProperties }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.guardduty.publishing_destinations (
 DetectorId,
 DestinationType,
 DestinationProperties,
 Tags,
 region
)
SELECT 
 '{{ DetectorId }}',
 '{{ DestinationType }}',
 '{{ DestinationProperties }}',
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
  - name: publishing_destination
    props:
      - name: DetectorId
        value: '{{ DetectorId }}'
      - name: DestinationType
        value: '{{ DestinationType }}'
      - name: DestinationProperties
        value:
          DestinationArn: '{{ DestinationArn }}'
          KmsKeyArn: '{{ KmsKeyArn }}'
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
DELETE FROM awscc.guardduty.publishing_destinations
WHERE data__Identifier = '<DetectorId|Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>publishing_destinations</code> resource, the following permissions are required:

### Create
```json
guardduty:CreatePublishingDestination,
guardduty:TagResource,
guardduty:DescribePublishingDestination,
guardduty:ListTagsForResource
```

### Read
```json
guardduty:DescribePublishingDestination,
guardduty:ListTagsForResource
```

### Update
```json
guardduty:UpdatePublishingDestination,
guardduty:TagResource,
guardduty:UntagResource,
guardduty:ListTagsForResource,
guardduty:DescribePublishingDestination
```

### Delete
```json
guardduty:DeletePublishingDestination,
guardduty:DescribePublishingDestination
```

### List
```json
guardduty:ListPublishingDestinations
```
