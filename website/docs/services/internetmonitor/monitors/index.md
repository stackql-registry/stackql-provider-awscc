---
title: monitors
hide_title: false
hide_table_of_contents: false
keywords:
  - monitors
  - internetmonitor
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

Creates, updates, deletes or gets a <code>monitor</code> resource or lists <code>monitors</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>monitors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Represents a monitor, which defines the monitoring boundaries for measurements that Internet Monitor publishes information about for an application</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.internetmonitor.monitors" /></td></tr>
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
    "name": "created_at",
    "type": "string",
    "description": "The date value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ssZ)"
  },
  {
    "name": "monitor_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "monitor_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "linked_account_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "include_linked_accounts",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "processing_status",
    "type": "string",
    "description": ""
  },
  {
    "name": "processing_status_info",
    "type": "string",
    "description": ""
  },
  {
    "name": "resources",
    "type": "array",
    "description": ""
  },
  {
    "name": "resources_to_add",
    "type": "array",
    "description": ""
  },
  {
    "name": "resources_to_remove",
    "type": "array",
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
    "name": "max_city_networks_to_monitor",
    "type": "integer",
    "description": ""
  },
  {
    "name": "traffic_percentage_to_monitor",
    "type": "integer",
    "description": ""
  },
  {
    "name": "internet_measurements_log_delivery",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "s3_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "bucket_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "bucket_prefix",
            "type": "string",
            "description": ""
          },
          {
            "name": "log_delivery_status",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "health_events_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "availability_score_threshold",
        "type": "number",
        "description": ""
      },
      {
        "name": "performance_score_threshold",
        "type": "number",
        "description": ""
      },
      {
        "name": "availability_local_health_events_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "status",
            "type": "string",
            "description": ""
          },
          {
            "name": "health_score_threshold",
            "type": "number",
            "description": ""
          },
          {
            "name": "min_traffic_impact",
            "type": "number",
            "description": ""
          }
        ]
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
    "name": "monitor_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-internetmonitor-monitor.html"><code>AWS::InternetMonitor::Monitor</code></a>.

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
    <td><code>monitors</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="MonitorName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>monitors</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>monitors</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>monitors_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>monitors</code></td>
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

Gets all properties from an individual <code>monitor</code>.
```sql
SELECT
region,
created_at,
modified_at,
monitor_arn,
monitor_name,
linked_account_id,
include_linked_accounts,
processing_status,
processing_status_info,
resources,
resources_to_add,
resources_to_remove,
status,
tags,
max_city_networks_to_monitor,
traffic_percentage_to_monitor,
internet_measurements_log_delivery,
health_events_config
FROM awscc.internetmonitor.monitors
WHERE region = 'us-east-1' AND Identifier = '<MonitorName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>monitors</code> in a region.
```sql
SELECT
region,
monitor_name
FROM awscc.internetmonitor.monitors_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>monitor</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.internetmonitor.monitors (
 MonitorName,
 region
)
SELECT 
'{{ MonitorName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.internetmonitor.monitors (
 MonitorName,
 LinkedAccountId,
 IncludeLinkedAccounts,
 Resources,
 ResourcesToAdd,
 ResourcesToRemove,
 Status,
 Tags,
 MaxCityNetworksToMonitor,
 TrafficPercentageToMonitor,
 InternetMeasurementsLogDelivery,
 HealthEventsConfig,
 region
)
SELECT 
 '{{ MonitorName }}',
 '{{ LinkedAccountId }}',
 '{{ IncludeLinkedAccounts }}',
 '{{ Resources }}',
 '{{ ResourcesToAdd }}',
 '{{ ResourcesToRemove }}',
 '{{ Status }}',
 '{{ Tags }}',
 '{{ MaxCityNetworksToMonitor }}',
 '{{ TrafficPercentageToMonitor }}',
 '{{ InternetMeasurementsLogDelivery }}',
 '{{ HealthEventsConfig }}',
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
  - name: monitor
    props:
      - name: MonitorName
        value: '{{ MonitorName }}'
      - name: LinkedAccountId
        value: '{{ LinkedAccountId }}'
      - name: IncludeLinkedAccounts
        value: '{{ IncludeLinkedAccounts }}'
      - name: Resources
        value:
          - '{{ Resources[0] }}'
      - name: ResourcesToAdd
        value:
          - '{{ ResourcesToAdd[0] }}'
      - name: ResourcesToRemove
        value:
          - '{{ ResourcesToRemove[0] }}'
      - name: Status
        value: '{{ Status }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: MaxCityNetworksToMonitor
        value: '{{ MaxCityNetworksToMonitor }}'
      - name: TrafficPercentageToMonitor
        value: '{{ TrafficPercentageToMonitor }}'
      - name: InternetMeasurementsLogDelivery
        value:
          S3Config:
            BucketName: '{{ BucketName }}'
            BucketPrefix: '{{ BucketPrefix }}'
            LogDeliveryStatus: '{{ LogDeliveryStatus }}'
      - name: HealthEventsConfig
        value:
          AvailabilityScoreThreshold: null
          PerformanceScoreThreshold: null
          AvailabilityLocalHealthEventsConfig:
            Status: '{{ Status }}'
            HealthScoreThreshold: null
            MinTrafficImpact: null
          PerformanceLocalHealthEventsConfig: null

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>monitor</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.internetmonitor.monitors
SET PatchDocument = string('{{ {
    "LinkedAccountId": linked_account_id,
    "IncludeLinkedAccounts": include_linked_accounts,
    "Resources": resources,
    "ResourcesToAdd": resources_to_add,
    "ResourcesToRemove": resources_to_remove,
    "Status": status,
    "Tags": tags,
    "MaxCityNetworksToMonitor": max_city_networks_to_monitor,
    "TrafficPercentageToMonitor": traffic_percentage_to_monitor,
    "InternetMeasurementsLogDelivery": internet_measurements_log_delivery,
    "HealthEventsConfig": health_events_config
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<MonitorName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.internetmonitor.monitors
WHERE Identifier = '<MonitorName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>monitors</code> resource, the following permissions are required:

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
internetmonitor:CreateMonitor,
internetmonitor:GetMonitor,
internetmonitor:TagResource,
internetmonitor:UntagResource,
logs:CreateLogDelivery,
logs:GetLogDelivery,
s3:GetBucketPolicy,
s3:PutBucketPolicy,
s3:ListBucket,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
internetmonitor:GetMonitor,
internetmonitor:ListTagsForResource,
logs:GetLogDelivery
```

</TabItem>
<TabItem value="update">

```json
internetmonitor:CreateMonitor,
internetmonitor:GetMonitor,
internetmonitor:UpdateMonitor,
internetmonitor:TagResource,
internetmonitor:UntagResource,
logs:CreateLogDelivery,
logs:GetLogDelivery,
logs:UpdateLogDelivery,
logs:DeleteLogDelivery,
logs:ListLogDeliveries,
s3:GetBucketPolicy,
s3:PutBucketPolicy,
s3:ListBucket,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
internetmonitor:UpdateMonitor,
internetmonitor:DeleteMonitor,
internetmonitor:GetMonitor,
logs:DeleteLogDelivery
```

</TabItem>
<TabItem value="list">

```json
internetmonitor:ListMonitors,
internetmonitor:GetMonitor,
internetmonitor:ListTagsForResource,
logs:GetLogDelivery
```

</TabItem>
</Tabs>