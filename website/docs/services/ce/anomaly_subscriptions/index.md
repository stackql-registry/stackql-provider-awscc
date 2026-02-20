---
title: anomaly_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - anomaly_subscriptions
  - ce
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

Creates, updates, deletes or gets an <code>anomaly_subscription</code> resource or lists <code>anomaly_subscriptions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>anomaly_subscriptions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>AWS Cost Anomaly Detection leverages advanced Machine Learning technologies to identify anomalous spend and root causes, so you can quickly take action. Create subscription to be notified</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ce.anomaly_subscriptions" /></td></tr>
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
    "name": "subscription_arn",
    "type": "string",
    "description": "Subscription ARN"
  },
  {
    "name": "subscription_name",
    "type": "string",
    "description": "The name of the subscription."
  },
  {
    "name": "account_id",
    "type": "string",
    "description": "The accountId"
  },
  {
    "name": "monitor_arn_list",
    "type": "array",
    "description": "A list of cost anomaly monitors."
  },
  {
    "name": "subscribers",
    "type": "array",
    "description": "A list of subscriber",
    "children": [
      {
        "name": "address",
        "type": "string",
        "description": ""
      },
      {
        "name": "status",
        "type": "string",
        "description": ""
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "threshold",
    "type": "number",
    "description": "The dollar value that triggers a notification if the threshold is exceeded."
  },
  {
    "name": "threshold_expression",
    "type": "string",
    "description": "An Expression object in JSON String format used to specify the anomalies that you want to generate alerts for."
  },
  {
    "name": "frequency",
    "type": "string",
    "description": "The frequency at which anomaly reports are sent over email."
  },
  {
    "name": "resource_tags",
    "type": "array",
    "description": "Tags to assign to subscription.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name for the tag."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag."
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
    "name": "subscription_arn",
    "type": "string",
    "description": "Subscription ARN"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html"><code>AWS::CE::AnomalySubscription</code></a>.

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
    <td><code>anomaly_subscriptions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="MonitorArnList, Subscribers, Frequency, SubscriptionName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>anomaly_subscriptions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>anomaly_subscriptions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>anomaly_subscriptions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>anomaly_subscriptions</code></td>
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

Gets all properties from an individual <code>anomaly_subscription</code>.
```sql
SELECT
region,
subscription_arn,
subscription_name,
account_id,
monitor_arn_list,
subscribers,
threshold,
threshold_expression,
frequency,
resource_tags
FROM awscc.ce.anomaly_subscriptions
WHERE region = 'us-east-1' AND data__Identifier = '<SubscriptionArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>anomaly_subscriptions</code> in a region.
```sql
SELECT
region,
subscription_arn
FROM awscc.ce.anomaly_subscriptions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>anomaly_subscription</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ce.anomaly_subscriptions (
 SubscriptionName,
 MonitorArnList,
 Subscribers,
 Frequency,
 region
)
SELECT 
'{{ SubscriptionName }}',
 '{{ MonitorArnList }}',
 '{{ Subscribers }}',
 '{{ Frequency }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ce.anomaly_subscriptions (
 SubscriptionName,
 MonitorArnList,
 Subscribers,
 Threshold,
 ThresholdExpression,
 Frequency,
 ResourceTags,
 region
)
SELECT 
 '{{ SubscriptionName }}',
 '{{ MonitorArnList }}',
 '{{ Subscribers }}',
 '{{ Threshold }}',
 '{{ ThresholdExpression }}',
 '{{ Frequency }}',
 '{{ ResourceTags }}',
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
  - name: anomaly_subscription
    props:
      - name: SubscriptionName
        value: '{{ SubscriptionName }}'
      - name: MonitorArnList
        value:
          - '{{ MonitorArnList[0] }}'
      - name: Subscribers
        value:
          - Address: '{{ Address }}'
            Status: '{{ Status }}'
            Type: '{{ Type }}'
      - name: Threshold
        value: null
      - name: ThresholdExpression
        value: '{{ ThresholdExpression }}'
      - name: Frequency
        value: '{{ Frequency }}'
      - name: ResourceTags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ce.anomaly_subscriptions
SET data__PatchDocument = string('{{ {
    "SubscriptionName": subscription_name,
    "MonitorArnList": monitor_arn_list,
    "Threshold": threshold,
    "ThresholdExpression": threshold_expression,
    "Frequency": frequency
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<SubscriptionArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ce.anomaly_subscriptions
WHERE data__Identifier = '<SubscriptionArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>anomaly_subscriptions</code> resource, the following permissions are required:

### Create
```json
ce:CreateAnomalySubscription,
ce:TagResource
```

### Read
```json
ce:GetAnomalySubscriptions,
ce:ListTagsForResource
```

### Update
```json
ce:UpdateAnomalySubscription
```

### Delete
```json
ce:DeleteAnomalySubscription
```

### List
```json
ce:GetAnomalySubscriptions
```
