---
title: brokers
hide_title: false
hide_table_of_contents: false
keywords:
  - brokers
  - amazonmq
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

Creates, updates, deletes or gets a <code>broker</code> resource or lists <code>brokers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>brokers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::AmazonMQ::Broker</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.amazonmq.brokers" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="security_groups" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="data_replication_primary_broker_arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="authentication_strategy" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="users" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="subnet_ids" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="stomp_endpoints" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="mqtt_endpoints" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="amqp_endpoints" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="deployment_mode" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="engine_type" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="encryption_options" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="configuration_revision" /></td><td><code>integer</code></td><td></td></tr>
<tr><td><CopyableCode code="storage_type" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="engine_version" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="maintenance_window_start_time" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="host_instance_type" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="auto_minor_version_upgrade" /></td><td><code>boolean</code></td><td></td></tr>
<tr><td><CopyableCode code="logs" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="console_urls" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="configuration_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="data_replication_mode" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="broker_name" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="wss_endpoints" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="ip_addresses" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="open_wire_endpoints" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="ldap_server_metadata" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="publicly_accessible" /></td><td><code>boolean</code></td><td></td></tr>
<tr><td><CopyableCode code="id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html"><code>AWS::AmazonMQ::Broker</code></a>.

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






