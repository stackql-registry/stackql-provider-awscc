---
title: network_performance_metric_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - network_performance_metric_subscriptions
  - ec2
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

Creates, updates, deletes or gets a <code>network_performance_metric_subscription</code> resource or lists <code>network_performance_metric_subscriptions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>network_performance_metric_subscriptions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EC2::NetworkPerformanceMetricSubscription</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.network_performance_metric_subscriptions" /></td></tr>
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
    "name": "source",
    "type": "string",
    "description": "The starting Region or Availability Zone for metric to subscribe to."
  },
  {
    "name": "destination",
    "type": "string",
    "description": "The target Region or Availability Zone for the metric to subscribe to."
  },
  {
    "name": "metric",
    "type": "string",
    "description": "The metric type to subscribe to."
  },
  {
    "name": "statistic",
    "type": "string",
    "description": "The statistic to subscribe to."
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
    "name": "source",
    "type": "string",
    "description": "The starting Region or Availability Zone for metric to subscribe to."
  },
  {
    "name": "destination",
    "type": "string",
    "description": "The target Region or Availability Zone for the metric to subscribe to."
  },
  {
    "name": "metric",
    "type": "string",
    "description": "The metric type to subscribe to."
  },
  {
    "name": "statistic",
    "type": "string",
    "description": "The statistic to subscribe to."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkperformancemetricsubscription.html"><code>AWS::EC2::NetworkPerformanceMetricSubscription</code></a>.

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
    <td><code>network_performance_metric_subscriptions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Source, Destination, Metric, Statistic, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>network_performance_metric_subscriptions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>network_performance_metric_subscriptions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>network_performance_metric_subscriptions</code></td>
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

Gets all properties from an individual <code>network_performance_metric_subscription</code>.
```sql
SELECT
region,
source,
destination,
metric,
statistic
FROM awscc.ec2.network_performance_metric_subscriptions
WHERE region = 'us-east-1' AND Identifier = '<Source>|<Destination>|<Metric>|<Statistic>';
```
</TabItem>
<TabItem value="list">

Lists all <code>network_performance_metric_subscriptions</code> in a region.
```sql
SELECT
region,
source,
destination,
metric,
statistic
FROM awscc.ec2.network_performance_metric_subscriptions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>network_performance_metric_subscription</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.network_performance_metric_subscriptions (
 Source,
 Destination,
 Metric,
 Statistic,
 region
)
SELECT 
'{{ Source }}',
 '{{ Destination }}',
 '{{ Metric }}',
 '{{ Statistic }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.network_performance_metric_subscriptions (
 Source,
 Destination,
 Metric,
 Statistic,
 region
)
SELECT 
 '{{ Source }}',
 '{{ Destination }}',
 '{{ Metric }}',
 '{{ Statistic }}',
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
  - name: network_performance_metric_subscription
    props:
      - name: Source
        value: '{{ Source }}'
      - name: Destination
        value: '{{ Destination }}'
      - name: Metric
        value: '{{ Metric }}'
      - name: Statistic
        value: '{{ Statistic }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.network_performance_metric_subscriptions
WHERE Identifier = '<Source|Destination|Metric|Statistic>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>network_performance_metric_subscriptions</code> resource, the following permissions are required:

### Create
```json
ec2:DescribeAwsNetworkPerformanceMetricSubscriptions,
ec2:EnableAwsNetworkPerformanceMetricSubscription
```

### Read
```json
ec2:DescribeAwsNetworkPerformanceMetricSubscriptions
```

### Delete
```json
ec2:DescribeAwsNetworkPerformanceMetricSubscriptions,
ec2:DisableAwsNetworkPerformanceMetricSubscription
```

### List
```json
ec2:DescribeAwsNetworkPerformanceMetricSubscriptions
```
