---
title: metric_filters
hide_title: false
hide_table_of_contents: false
keywords:
  - metric_filters
  - logs
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

Creates, updates, deletes or gets a <code>metric_filter</code> resource or lists <code>metric_filters</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>metric_filters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::Logs::MetricFilter&#96;&#96; resource specifies a metric filter that describes how CWL extracts information from logs and transforms it into Amazon CloudWatch metrics. If you have multiple metric filters that are associated with a log group, all the filters are applied to the log streams in that group.<br />The maximum number of metric filters that can be associated with a log group is 100.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.logs.metric_filters" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "metric_transformations",
    "type": "array",
    "description": "The metric transformations.",
    "children": [
      {
        "name": "default_value",
        "type": "number",
        "description": "(Optional) The value to emit when a filter pattern does not match a log event. This value can be null."
      },
      {
        "name": "metric_name",
        "type": "string",
        "description": "The name of the CloudWatch metric."
      },
      {
        "name": "metric_value",
        "type": "string",
        "description": "The value that is published to the CloudWatch metric. For example, if you're counting the occurrences of a particular term like &#96;&#96;Error&#96;&#96;, specify 1 for the metric value. If you're counting the number of bytes transferred, reference the value that is in the log event by using $. followed by the name of the field that you specified in the filter pattern, such as &#96;&#96;$.size&#96;&#96;."
      },
      {
        "name": "metric_namespace",
        "type": "string",
        "description": "A custom namespace to contain your metric in CloudWatch. Use namespaces to group together metrics that are similar. For more information, see &#91;Namespaces&#93;(https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch&#95;concepts.html#Namespace)."
      },
      {
        "name": "dimensions",
        "type": "array",
        "description": "The fields to use as dimensions for the metric. One metric filter can include as many as three dimensions.<br />Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as &#96;&#96;IPAddress&#96;&#96; or &#96;&#96;requestID&#96;&#96; as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric. <br />CloudWatch Logs disables a metric filter if it generates 1000 different name/value pairs for your specified dimensions within a certain amount of time. This helps to prevent accidental high charges.<br />You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see &#91;Creating a Billing Alarm to Monitor Your Estimated Charges&#93;(https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor&#95;estimated&#95;charges&#95;with&#95;cloudwatch.html).",
        "children": [
          {
            "name": "value",
            "type": "string",
            "description": "The log event field that will contain the value for this dimension. This dimension will only be published for a metric if the value is found in the log event. For example, &#96;&#96;$.eventType&#96;&#96; for JSON log events, or &#96;&#96;$server&#96;&#96; for space-delimited log events."
          },
          {
            "name": "key",
            "type": "string",
            "description": "The name for the CW metric dimension that the metric filter creates.<br />Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (:)."
          }
        ]
      },
      {
        "name": "unit",
        "type": "string",
        "description": "The unit to assign to the metric. If you omit this, the unit is set as &#96;&#96;None&#96;&#96;."
      }
    ]
  },
  {
    "name": "filter_pattern",
    "type": "string",
    "description": "A filter pattern for extracting metric data out of ingested log events. For more information, see &#91;Filter and Pattern Syntax&#93;(https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html)."
  },
  {
    "name": "log_group_name",
    "type": "string",
    "description": "The name of an existing log group that you want to associate with this metric filter."
  },
  {
    "name": "apply_on_transformed_logs",
    "type": "boolean",
    "description": "This parameter is valid only for log groups that have an active log transformer. For more information about log transformers, see &#91;PutTransformer&#93;(https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API&#95;PutTransformer.html).<br />If this value is &#96;&#96;true&#96;&#96;, the metric filter is applied on the transformed version of the log events instead of the original ingested log events."
  },
  {
    "name": "filter_name",
    "type": "string",
    "description": "The name of the metric filter."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html"><code>AWS::Logs::MetricFilter</code></a>.

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
    <td><CopyableCode code="FilterPattern, LogGroupName, MetricTransformations, region" /></td>
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

Gets all properties from an individual <code>metric_filter</code>.
```sql
SELECT
region,
metric_transformations,
filter_pattern,
log_group_name,
apply_on_transformed_logs,
filter_name
FROM awscc.logs.metric_filters
WHERE region = 'us-east-1' AND data__Identifier = '<LogGroupName>|<FilterName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>metric_filter</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.logs.metric_filters (
 MetricTransformations,
 FilterPattern,
 LogGroupName,
 region
)
SELECT 
'{{ MetricTransformations }}',
 '{{ FilterPattern }}',
 '{{ LogGroupName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.logs.metric_filters (
 MetricTransformations,
 FilterPattern,
 LogGroupName,
 ApplyOnTransformedLogs,
 FilterName,
 region
)
SELECT 
 '{{ MetricTransformations }}',
 '{{ FilterPattern }}',
 '{{ LogGroupName }}',
 '{{ ApplyOnTransformedLogs }}',
 '{{ FilterName }}',
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
  - name: metric_filter
    props:
      - name: MetricTransformations
        value:
          - DefaultValue: null
            MetricName: '{{ MetricName }}'
            MetricValue: '{{ MetricValue }}'
            MetricNamespace: '{{ MetricNamespace }}'
            Dimensions:
              - Value: '{{ Value }}'
                Key: '{{ Key }}'
            Unit: '{{ Unit }}'
      - name: FilterPattern
        value: '{{ FilterPattern }}'
      - name: LogGroupName
        value: '{{ LogGroupName }}'
      - name: ApplyOnTransformedLogs
        value: '{{ ApplyOnTransformedLogs }}'
      - name: FilterName
        value: '{{ FilterName }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.logs.metric_filters
WHERE data__Identifier = '<LogGroupName|FilterName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>metric_filters</code> resource, the following permissions are required:

### Read
```json
logs:DescribeMetricFilters
```

### Create
```json
logs:PutMetricFilter,
logs:DescribeMetricFilters
```

### Update
```json
logs:PutMetricFilter,
logs:DescribeMetricFilters
```

### List
```json
logs:DescribeMetricFilters
```

### Delete
```json
logs:DeleteMetricFilter
```
