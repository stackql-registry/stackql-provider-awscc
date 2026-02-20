---
title: event_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - event_subscriptions
  - neptune
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
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Neptune::EventSubscription</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.neptune.event_subscriptions" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "enabled",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "event_categories",
    "type": "array",
    "description": ""
  },
  {
    "name": "sns_topic_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "source_ids",
    "type": "array",
    "description": ""
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "source_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-eventsubscription.html"><code>AWS::Neptune::EventSubscription</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
</tbody>
</table>







