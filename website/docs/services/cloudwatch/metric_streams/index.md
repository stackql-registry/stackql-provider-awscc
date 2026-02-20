---
title: metric_streams
hide_title: false
hide_table_of_contents: false
keywords:
  - metric_streams
  - cloudwatch
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

Creates, updates, deletes or gets a <code>metric_stream</code> resource or lists <code>metric_streams</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>metric_streams</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for Metric Stream</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudwatch.metric_streams" /></td></tr>
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
    "description": "Amazon Resource Name of the metric stream."
  },
  {
    "name": "creation_date",
    "type": "string",
    "description": "The date of creation of the metric stream."
  },
  {
    "name": "exclude_filters",
    "type": "array",
    "description": "Define which metrics will be not streamed. Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.",
    "children": [
      {
        "name": "namespace",
        "type": "string",
        "description": "Only metrics with Namespace matching this value will be streamed."
      },
      {
        "name": "metric_names",
        "type": "array",
        "description": "Only metrics with MetricNames matching these values will be streamed. Must be set together with Namespace."
      }
    ]
  },
  {
    "name": "firehose_arn",
    "type": "string",
    "description": "The ARN of the Kinesis Firehose where to stream the data."
  },
  {
    "name": "include_filters",
    "type": "array",
    "description": "Define which metrics will be streamed. Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null."
  },
  {
    "name": "last_update_date",
    "type": "string",
    "description": "The date of the last update of the metric stream."
  },
  {
    "name": "name",
    "type": "string",
    "description": "Name of the metric stream."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The ARN of the role that provides access to the Kinesis Firehose."
  },
  {
    "name": "state",
    "type": "string",
    "description": "Displays the state of the Metric Stream."
  },
  {
    "name": "output_format",
    "type": "string",
    "description": "The output format of the data streamed to the Kinesis Firehose."
  },
  {
    "name": "statistics_configurations",
    "type": "array",
    "description": "By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed. You can use this parameter to have the metric stream also send additional statistics in the stream. This array can have up to 100 members.",
    "children": [
      {
        "name": "additional_statistics",
        "type": "array",
        "description": "The additional statistics to stream for the metrics listed in IncludeMetrics."
      },
      {
        "name": "include_metrics",
        "type": "array",
        "description": "An array that defines the metrics that are to have additional statistics streamed.",
        "children": [
          {
            "name": "metric_name",
            "type": "string",
            "description": "The name of the metric."
          },
          {
            "name": "namespace",
            "type": "string",
            "description": "The namespace of the metric."
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A set of tags to assign to the delivery stream.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A unique identifier for the tag."
      },
      {
        "name": "value",
        "type": "string",
        "description": "String which you can use to describe or define the tag."
      }
    ]
  },
  {
    "name": "include_linked_accounts_metrics",
    "type": "boolean",
    "description": "If you are creating a metric stream in a monitoring account, specify true to include metrics from source accounts that are linked to this monitoring account, in the metric stream. The default is false."
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
    "name": "name",
    "type": "string",
    "description": "Name of the metric stream."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html"><code>AWS::CloudWatch::MetricStream</code></a>.

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
    <td><code>metric_streams</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>metric_streams</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>metric_streams</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>metric_streams_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>metric_streams</code></td>
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

Gets all properties from an individual <code>metric_stream</code>.
```sql
SELECT
region,
arn,
creation_date,
exclude_filters,
firehose_arn,
include_filters,
last_update_date,
name,
role_arn,
state,
output_format,
statistics_configurations,
tags,
include_linked_accounts_metrics
FROM awscc.cloudwatch.metric_streams
WHERE region = 'us-east-1' AND Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>metric_streams</code> in a region.
```sql
SELECT
region,
name
FROM awscc.cloudwatch.metric_streams_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>metric_stream</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudwatch.metric_streams (
 ExcludeFilters,
 FirehoseArn,
 IncludeFilters,
 Name,
 RoleArn,
 OutputFormat,
 StatisticsConfigurations,
 Tags,
 IncludeLinkedAccountsMetrics,
 region
)
SELECT 
'{{ ExcludeFilters }}',
 '{{ FirehoseArn }}',
 '{{ IncludeFilters }}',
 '{{ Name }}',
 '{{ RoleArn }}',
 '{{ OutputFormat }}',
 '{{ StatisticsConfigurations }}',
 '{{ Tags }}',
 '{{ IncludeLinkedAccountsMetrics }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudwatch.metric_streams (
 ExcludeFilters,
 FirehoseArn,
 IncludeFilters,
 Name,
 RoleArn,
 OutputFormat,
 StatisticsConfigurations,
 Tags,
 IncludeLinkedAccountsMetrics,
 region
)
SELECT 
 '{{ ExcludeFilters }}',
 '{{ FirehoseArn }}',
 '{{ IncludeFilters }}',
 '{{ Name }}',
 '{{ RoleArn }}',
 '{{ OutputFormat }}',
 '{{ StatisticsConfigurations }}',
 '{{ Tags }}',
 '{{ IncludeLinkedAccountsMetrics }}',
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
  - name: metric_stream
    props:
      - name: ExcludeFilters
        value:
          - Namespace: '{{ Namespace }}'
            MetricNames:
              - '{{ MetricNames[0] }}'
      - name: FirehoseArn
        value: '{{ FirehoseArn }}'
      - name: IncludeFilters
        value:
          - null
      - name: Name
        value: '{{ Name }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: OutputFormat
        value: '{{ OutputFormat }}'
      - name: StatisticsConfigurations
        value:
          - AdditionalStatistics:
              - '{{ AdditionalStatistics[0] }}'
            IncludeMetrics:
              - MetricName: '{{ MetricName }}'
                Namespace: '{{ Namespace }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: IncludeLinkedAccountsMetrics
        value: '{{ IncludeLinkedAccountsMetrics }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>metric_stream</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cloudwatch.metric_streams
SET PatchDocument = string('{{ {
    "ExcludeFilters": exclude_filters,
    "FirehoseArn": firehose_arn,
    "IncludeFilters": include_filters,
    "RoleArn": role_arn,
    "OutputFormat": output_format,
    "StatisticsConfigurations": statistics_configurations,
    "Tags": tags,
    "IncludeLinkedAccountsMetrics": include_linked_accounts_metrics
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudwatch.metric_streams
WHERE Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>metric_streams</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Read', value: 'read', },
    ]
}>
<TabItem value="create">

```json
cloudwatch:PutMetricStream,
cloudwatch:GetMetricStream,
cloudwatch:TagResource,
iam:PassRole
```

</TabItem>
<TabItem value="update">

```json
cloudwatch:PutMetricStream,
cloudwatch:GetMetricStream,
cloudwatch:TagResource,
cloudwatch:UntagResource,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
cloudwatch:DeleteMetricStream,
cloudwatch:GetMetricStream
```

</TabItem>
<TabItem value="list">

```json
cloudwatch:ListMetricStreams
```

</TabItem>
<TabItem value="read">

```json
cloudwatch:GetMetricStream,
cloudwatch:ListTagsForResource
```

</TabItem>
</Tabs>