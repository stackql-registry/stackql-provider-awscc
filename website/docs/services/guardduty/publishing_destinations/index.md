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
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

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
    "name": "id",
    "type": "string",
    "description": "The ID of the publishing destination."
  },
  {
    "name": "detector_id",
    "type": "string",
    "description": "The ID of the GuardDuty detector associated with the publishing destination."
  },
  {
    "name": "destination_type",
    "type": "string",
    "description": "The type of resource for the publishing destination. Currently only Amazon S3 buckets are supported."
  },
  {
    "name": "destination_properties",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "destination_arn",
        "type": "string",
        "description": "The ARN of the resource to publish to."
      },
      {
        "name": "kms_key_arn",
        "type": "string",
        "description": "The ARN of the KMS key to use for encryption."
      }
    ]
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the publishing destination."
  },
  {
    "name": "publishing_failure_start_timestamp",
    "type": "string",
    "description": "The time, in epoch millisecond format, at which GuardDuty was first unable to publish findings to the destination."
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the publishing destination."
  },
  {
    "name": "detector_id",
    "type": "string",
    "description": "The ID of the GuardDuty detector associated with the publishing destination."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-publishingdestination.html"><code>AWS::GuardDuty::PublishingDestination</code></a>.

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
    <td><code>publishing_destinations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DetectorId, DestinationType, DestinationProperties, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>publishing_destinations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>publishing_destinations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>publishing_destinations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>publishing_destinations</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '<DetectorId>|<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>publishing_destinations</code> in a region.
```sql
SELECT
region,
detector_id,
id
FROM awscc.guardduty.publishing_destinations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>publishing_destination</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.guardduty.publishing_destinations
SET PatchDocument = string('{{ {
    "DestinationType": destination_type,
    "DestinationProperties": destination_properties,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<DetectorId>|<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.guardduty.publishing_destinations
WHERE Identifier = '<DetectorId|Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>publishing_destinations</code> resource, the following permissions are required:

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
guardduty:CreatePublishingDestination,
guardduty:TagResource,
guardduty:DescribePublishingDestination,
guardduty:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
guardduty:DescribePublishingDestination,
guardduty:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
guardduty:UpdatePublishingDestination,
guardduty:TagResource,
guardduty:UntagResource,
guardduty:ListTagsForResource,
guardduty:DescribePublishingDestination
```

</TabItem>
<TabItem value="delete">

```json
guardduty:DeletePublishingDestination,
guardduty:DescribePublishingDestination
```

</TabItem>
<TabItem value="list">

```json
guardduty:ListPublishingDestinations
```

</TabItem>
</Tabs>