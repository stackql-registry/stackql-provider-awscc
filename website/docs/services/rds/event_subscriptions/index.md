---
title: event_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - event_subscriptions
  - rds
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
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::RDS::EventSubscription&#96;&#96; resource allows you to receive notifications for Amazon Relational Database Service events through the Amazon Simple Notification Service (Amazon SNS). For more information, see &#91;Using Amazon RDS Event Notification&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;Events.html) in the &#42;Amazon RDS User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rds.event_subscriptions" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "tags",
    "type": "array",
    "description": "An optional array of key-value pairs to apply to this subscription.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with &#96;&#96;aws:&#96;&#96; or &#96;&#96;rds:&#96;&#96;. The string can only contain only the set of Unicode letters, digits, white-space, '&#95;', '.', ':', '/', '=', '+', '-', '@' (Java regex: \"^(&#91;\\\\p&#123;L&#125;\\\\p&#123;Z&#125;\\\\p&#123;N&#125;&#95;.:/=+\\\\-@&#93;&#42;)$\")."
      },
      {
        "name": "value",
        "type": "string",
        "description": "A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with &#96;&#96;aws:&#96;&#96; or &#96;&#96;rds:&#96;&#96;. The string can only contain only the set of Unicode letters, digits, white-space, '&#95;', '.', ':', '/', '=', '+', '-', '@' (Java regex: \"^(&#91;\\\\p&#123;L&#125;\\\\p&#123;Z&#125;\\\\p&#123;N&#125;&#95;.:/=+\\\\-@&#93;&#42;)$\")."
      }
    ]
  },
  {
    "name": "subscription_name",
    "type": "string",
    "description": "The name of the subscription.<br />Constraints: The name must be less than 255 characters."
  },
  {
    "name": "enabled",
    "type": "boolean",
    "description": "Specifies whether to activate the subscription. If the event notification subscription isn't activated, the subscription is created but not active."
  },
  {
    "name": "event_categories",
    "type": "array",
    "description": "A list of event categories for a particular source type (&#96;&#96;SourceType&#96;&#96;) that you want to subscribe to. You can see a list of the categories for a given source type in the \"Amazon RDS event categories and event messages\" section of the &#91;Amazon RDS User Guide&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;Events.Messages.html) or the &#91;Amazon Aurora User Guide&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER&#95;Events.Messages.html). You can also see this list by using the &#96;&#96;DescribeEventCategories&#96;&#96; operation."
  },
  {
    "name": "sns_topic_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the SNS topic created for event notification. SNS automatically creates the ARN when you create a topic and subscribe to it.<br />RDS doesn't support FIFO (first in, first out) topics. For more information, see &#91;Message ordering and deduplication (FIFO topics)&#93;(https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html) in the &#42;Amazon Simple Notification Service Developer Guide&#42;."
  },
  {
    "name": "source_ids",
    "type": "array",
    "description": "The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens. It can't end with a hyphen or contain two consecutive hyphens.<br />Constraints:<br />+ If &#96;&#96;SourceIds&#96;&#96; are supplied, &#96;&#96;SourceType&#96;&#96; must also be provided.<br />+ If the source type is a DB instance, a &#96;&#96;DBInstanceIdentifier&#96;&#96; value must be supplied.<br />+ If the source type is a DB cluster, a &#96;&#96;DBClusterIdentifier&#96;&#96; value must be supplied.<br />+ If the source type is a DB parameter group, a &#96;&#96;DBParameterGroupName&#96;&#96; value must be supplied.<br />+ If the source type is a DB security group, a &#96;&#96;DBSecurityGroupName&#96;&#96; value must be supplied.<br />+ If the source type is a DB snapshot, a &#96;&#96;DBSnapshotIdentifier&#96;&#96; value must be supplied.<br />+ If the source type is a DB cluster snapshot, a &#96;&#96;DBClusterSnapshotIdentifier&#96;&#96; value must be supplied.<br />+ If the source type is an RDS Proxy, a &#96;&#96;DBProxyName&#96;&#96; value must be supplied."
  },
  {
    "name": "source_type",
    "type": "string",
    "description": "The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you set this parameter to &#96;&#96;db-instance&#96;&#96;. For RDS Proxy events, specify &#96;&#96;db-proxy&#96;&#96;. If this value isn't specified, all events are returned.<br />Valid Values:&#96;&#96;db-instance &#124; db-cluster &#124; db-parameter-group &#124; db-security-group &#124; db-snapshot &#124; db-cluster-snapshot &#124; db-proxy &#124; zero-etl &#124; custom-engine-version &#124; blue-green-deployment&#96;&#96;"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-eventsubscription.html"><code>AWS::RDS::EventSubscription</code></a>.

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
    <td><CopyableCode code="SnsTopicArn, region" /></td>
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

Gets all properties from an individual <code>event_subscription</code>.
```sql
SELECT
region,
tags,
subscription_name,
enabled,
event_categories,
sns_topic_arn,
source_ids,
source_type
FROM awscc.rds.event_subscriptions
WHERE region = 'us-east-1' AND data__Identifier = '<SubscriptionName>';
```

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
INSERT INTO awscc.rds.event_subscriptions (
 SnsTopicArn,
 region
)
SELECT 
'{{ SnsTopicArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.rds.event_subscriptions (
 Tags,
 SubscriptionName,
 Enabled,
 EventCategories,
 SnsTopicArn,
 SourceIds,
 SourceType,
 region
)
SELECT 
 '{{ Tags }}',
 '{{ SubscriptionName }}',
 '{{ Enabled }}',
 '{{ EventCategories }}',
 '{{ SnsTopicArn }}',
 '{{ SourceIds }}',
 '{{ SourceType }}',
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
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: SubscriptionName
        value: '{{ SubscriptionName }}'
      - name: Enabled
        value: '{{ Enabled }}'
      - name: EventCategories
        value:
          - '{{ EventCategories[0] }}'
      - name: SnsTopicArn
        value: '{{ SnsTopicArn }}'
      - name: SourceIds
        value:
          - '{{ SourceIds[0] }}'
      - name: SourceType
        value: '{{ SourceType }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.rds.event_subscriptions
WHERE data__Identifier = '<SubscriptionName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>event_subscriptions</code> resource, the following permissions are required:

### Create
```json
iam:CreateServiceLinkedRole,
rds:CreateEventSubscription,
rds:DescribeEventSubscriptions,
rds:ListTagsForResource,
rds:AddTagsToResource,
rds:RemoveTagsFromResource
```

### Read
```json
rds:DescribeEventSubscriptions,
rds:ListTagsForResource
```

### Update
```json
rds:ModifyEventSubscription,
rds:AddSourceIdentifierToSubscription,
rds:RemoveSourceIdentifierFromSubscription,
rds:DescribeEventSubscriptions,
rds:ListTagsForResource,
rds:AddTagsToResource,
rds:RemoveTagsFromResource
```

### Delete
```json
rds:DeleteEventSubscription,
rds:DescribeEventSubscriptions
```

### List
```json
rds:DescribeEventSubscriptions
```
