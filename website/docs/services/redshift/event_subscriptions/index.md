---
title: event_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - event_subscriptions
  - redshift
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

Creates, updates, deletes or gets an <code>event_subscription</code> resource or lists <code>event_subscriptions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>event_subscriptions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;AWS::Redshift::EventSubscription&#96; resource creates an Amazon Redshift Event Subscription.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.redshift.event_subscriptions" /></td></tr>
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
    "name": "status",
    "type": "string",
    "description": "The status of the Amazon Redshift event notification subscription."
  },
  {
    "name": "cust_subscription_id",
    "type": "string",
    "description": "The name of the Amazon Redshift event notification subscription."
  },
  {
    "name": "event_categories_list",
    "type": "array",
    "description": "The list of Amazon Redshift event categories specified in the event notification subscription."
  },
  {
    "name": "source_type",
    "type": "string",
    "description": "The type of source that will be generating the events."
  },
  {
    "name": "event_categories",
    "type": "array",
    "description": "Specifies the Amazon Redshift event categories to be published by the event notification subscription."
  },
  {
    "name": "enabled",
    "type": "boolean",
    "description": "A boolean value; set to true to activate the subscription, and set to false to create the subscription but not activate it."
  },
  {
    "name": "severity",
    "type": "string",
    "description": "Specifies the Amazon Redshift event severity to be published by the event notification subscription."
  },
  {
    "name": "subscription_name",
    "type": "string",
    "description": "The name of the Amazon Redshift event notification subscription"
  },
  {
    "name": "source_ids",
    "type": "array",
    "description": "A list of one or more identifiers of Amazon Redshift source objects."
  },
  {
    "name": "customer_aws_id",
    "type": "string",
    "description": "The AWS account associated with the Amazon Redshift event notification subscription."
  },
  {
    "name": "source_ids_list",
    "type": "array",
    "description": "A list of the sources that publish events to the Amazon Redshift event notification subscription."
  },
  {
    "name": "sns_topic_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the Amazon SNS topic used to transmit the event notifications."
  },
  {
    "name": "subscription_creation_time",
    "type": "string",
    "description": "The date and time the Amazon Redshift event notification subscription was created."
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "subscription_name",
    "type": "string",
    "description": "The name of the Amazon Redshift event notification subscription"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html"><code>AWS::Redshift::EventSubscription</code></a>.

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
    <td><code>event_subscriptions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="SubscriptionName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>event_subscriptions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>event_subscriptions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>event_subscriptions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>event_subscriptions</code></td>
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

Gets all properties from an individual <code>event_subscription</code>.
```sql
SELECT
region,
status,
cust_subscription_id,
event_categories_list,
source_type,
event_categories,
enabled,
severity,
subscription_name,
source_ids,
customer_aws_id,
source_ids_list,
sns_topic_arn,
subscription_creation_time,
tags
FROM awscc.redshift.event_subscriptions
WHERE region = 'us-east-1' AND Identifier = '<SubscriptionName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>event_subscriptions</code> in a region.
```sql
SELECT
region,
subscription_name
FROM awscc.redshift.event_subscriptions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>event_subscription</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.redshift.event_subscriptions (
 SubscriptionName,
 region
)
SELECT 
'{{ SubscriptionName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.redshift.event_subscriptions (
 SourceType,
 EventCategories,
 Enabled,
 Severity,
 SubscriptionName,
 SourceIds,
 SnsTopicArn,
 Tags,
 region
)
SELECT 
 '{{ SourceType }}',
 '{{ EventCategories }}',
 '{{ Enabled }}',
 '{{ Severity }}',
 '{{ SubscriptionName }}',
 '{{ SourceIds }}',
 '{{ SnsTopicArn }}',
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
  - name: event_subscription
    props:
      - name: SourceType
        value: '{{ SourceType }}'
      - name: EventCategories
        value:
          - '{{ EventCategories[0] }}'
      - name: Enabled
        value: '{{ Enabled }}'
      - name: Severity
        value: '{{ Severity }}'
      - name: SubscriptionName
        value: '{{ SubscriptionName }}'
      - name: SourceIds
        value:
          - '{{ SourceIds[0] }}'
      - name: SnsTopicArn
        value: '{{ SnsTopicArn }}'
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
UPDATE awscc.redshift.event_subscriptions
SET PatchDocument = string('{{ {
    "SourceType": source_type,
    "EventCategories": event_categories,
    "Enabled": enabled,
    "Severity": severity,
    "SourceIds": source_ids,
    "SnsTopicArn": sns_topic_arn,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<SubscriptionName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.redshift.event_subscriptions
WHERE Identifier = '<SubscriptionName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>event_subscriptions</code> resource, the following permissions are required:

### Read
```json
redshift:DescribeEventSubscriptions,
redshift:DescribeTags
```

### Create
```json
redshift:CreateEventSubscription,
redshift:CreateTags,
redshift:DescribeTags,
redshift:DescribeEventSubscriptions
```

### Update
```json
redshift:ModifyEventSubscription,
redshift:CreateTags,
redshift:DescribeTags,
redshift:DescribeEventSubscriptions,
redshift:DeleteTags
```

### List
```json
redshift:DescribeTags,
redshift:DescribeEventSubscriptions
```

### Delete
```json
redshift:DescribeEventSubscriptions,
redshift:DeleteEventSubscription,
redshift:DescribeTags,
redshift:DeleteTags
```
