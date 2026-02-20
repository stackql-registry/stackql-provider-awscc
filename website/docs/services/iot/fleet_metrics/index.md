---
title: fleet_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - fleet_metrics
  - iot
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

Creates, updates, deletes or gets a <code>fleet_metric</code> resource or lists <code>fleet_metrics</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>fleet_metrics</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An aggregated metric of certain devices in your fleet</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iot.fleet_metrics" /></td></tr>
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
    "name": "metric_name",
    "type": "string",
    "description": "The name of the fleet metric"
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of a fleet metric"
  },
  {
    "name": "query_string",
    "type": "string",
    "description": "The Fleet Indexing query used by a fleet metric"
  },
  {
    "name": "period",
    "type": "integer",
    "description": "The period of metric emission in seconds"
  },
  {
    "name": "aggregation_field",
    "type": "string",
    "description": "The aggregation field to perform aggregation and metric emission"
  },
  {
    "name": "query_version",
    "type": "string",
    "description": "The version of a Fleet Indexing query used by a fleet metric"
  },
  {
    "name": "index_name",
    "type": "string",
    "description": "The index name of a fleet metric"
  },
  {
    "name": "unit",
    "type": "string",
    "description": "The unit of data points emitted by a fleet metric"
  },
  {
    "name": "aggregation_type",
    "type": "object",
    "description": "Aggregation types supported by Fleet Indexing",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": "Fleet Indexing aggregation type names such as Statistics, Percentiles and Cardinality"
      },
      {
        "name": "values",
        "type": "array",
        "description": "Fleet Indexing aggregation type values"
      }
    ]
  },
  {
    "name": "metric_arn",
    "type": "string",
    "description": "The Amazon Resource Number (ARN) of a fleet metric metric"
  },
  {
    "name": "creation_date",
    "type": "string",
    "description": "The creation date of a fleet metric"
  },
  {
    "name": "version",
    "type": "number",
    "description": "The version of a fleet metric"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource",
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
    "name": "metric_name",
    "type": "string",
    "description": "The name of the fleet metric"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-fleetmetric.html"><code>AWS::IoT::FleetMetric</code></a>.

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
    <td><code>fleet_metrics</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="MetricName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>fleet_metrics</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>fleet_metrics</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>fleet_metrics_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>fleet_metrics</code></td>
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

Gets all properties from an individual <code>fleet_metric</code>.
```sql
SELECT
region,
metric_name,
description,
query_string,
period,
aggregation_field,
query_version,
index_name,
unit,
aggregation_type,
metric_arn,
creation_date,
last_modified_date,
version,
tags
FROM awscc.iot.fleet_metrics
WHERE region = 'us-east-1' AND data__Identifier = '<MetricName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>fleet_metrics</code> in a region.
```sql
SELECT
region,
metric_name
FROM awscc.iot.fleet_metrics_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>fleet_metric</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iot.fleet_metrics (
 MetricName,
 region
)
SELECT 
'{{ MetricName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iot.fleet_metrics (
 MetricName,
 Description,
 QueryString,
 Period,
 AggregationField,
 QueryVersion,
 IndexName,
 Unit,
 AggregationType,
 Tags,
 region
)
SELECT 
 '{{ MetricName }}',
 '{{ Description }}',
 '{{ QueryString }}',
 '{{ Period }}',
 '{{ AggregationField }}',
 '{{ QueryVersion }}',
 '{{ IndexName }}',
 '{{ Unit }}',
 '{{ AggregationType }}',
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
  - name: fleet_metric
    props:
      - name: MetricName
        value: '{{ MetricName }}'
      - name: Description
        value: '{{ Description }}'
      - name: QueryString
        value: '{{ QueryString }}'
      - name: Period
        value: '{{ Period }}'
      - name: AggregationField
        value: '{{ AggregationField }}'
      - name: QueryVersion
        value: '{{ QueryVersion }}'
      - name: IndexName
        value: '{{ IndexName }}'
      - name: Unit
        value: '{{ Unit }}'
      - name: AggregationType
        value:
          Name: '{{ Name }}'
          Values:
            - '{{ Values[0] }}'
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
UPDATE awscc.iot.fleet_metrics
SET data__PatchDocument = string('{{ {
    "Description": description,
    "QueryString": query_string,
    "Period": period,
    "AggregationField": aggregation_field,
    "QueryVersion": query_version,
    "IndexName": index_name,
    "Unit": unit,
    "AggregationType": aggregation_type,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<MetricName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.fleet_metrics
WHERE data__Identifier = '<MetricName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>fleet_metrics</code> resource, the following permissions are required:

### Create
```json
iot:CreateFleetMetric,
iot:DescribeFleetMetric,
iot:TagResource
```

### Read
```json
iot:DescribeFleetMetric,
iot:ListTagsForResource
```

### Update
```json
iot:UpdateFleetMetric,
iot:DescribeFleetMetric,
iot:ListTagsForResource,
iot:UntagResource,
iot:TagResource
```

### Delete
```json
iot:DeleteFleetMetric,
iot:DescribeFleetMetric
```

### List
```json
iot:ListFleetMetrics
```
