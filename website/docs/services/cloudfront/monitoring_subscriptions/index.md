---
title: monitoring_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - monitoring_subscriptions
  - cloudfront
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

Creates, updates, deletes or gets a <code>monitoring_subscription</code> resource or lists <code>monitoring_subscriptions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>monitoring_subscriptions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudfront.monitoring_subscriptions" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "distribution_id",
    "type": "string",
    "description": "The ID of the distribution that you are enabling metrics for."
  },
  {
    "name": "monitoring_subscription",
    "type": "object",
    "description": "A subscription configuration for additional CloudWatch metrics.",
    "children": [
      {
        "name": "distribution_id",
        "type": "string",
        "description": "The ID of the distribution that you are enabling metrics for."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-monitoringsubscription.html"><code>AWS::CloudFront::MonitoringSubscription</code></a>.

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
    <td><CopyableCode code="DistributionId, MonitoringSubscription, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>monitoring_subscription</code>.
```sql
SELECT
region,
distribution_id,
monitoring_subscription
FROM awscc.cloudfront.monitoring_subscriptions
WHERE Identifier = '<DistributionId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>monitoring_subscription</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudfront.monitoring_subscriptions (
 DistributionId,
 MonitoringSubscription,
 region
)
SELECT 
'{{ DistributionId }}',
 '{{ MonitoringSubscription }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudfront.monitoring_subscriptions (
 DistributionId,
 MonitoringSubscription,
 region
)
SELECT 
 '{{ DistributionId }}',
 '{{ MonitoringSubscription }}',
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
  - name: monitoring_subscription
    props:
      - name: DistributionId
        value: '{{ DistributionId }}'
      - name: MonitoringSubscription
        value:
          DistributionId: '{{ DistributionId }}'
          MonitoringSubscription: null

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudfront.monitoring_subscriptions
WHERE Identifier = '<DistributionId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>monitoring_subscriptions</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'Read', value: 'read', },
    ]
}>
<TabItem value="create">

```json
cloudfront:CreateMonitoringSubscription
```

</TabItem>
<TabItem value="delete">

```json
cloudfront:DeleteMonitoringSubscription
```

</TabItem>
<TabItem value="read">

```json
cloudfront:GetMonitoringSubscription
```

</TabItem>
</Tabs>