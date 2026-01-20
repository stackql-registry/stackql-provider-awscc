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
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

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
<SchemaTable fields={[
  {
    "name": "security_groups",
    "type": "array",
    "description": ""
  },
  {
    "name": "data_replication_primary_broker_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "revision",
        "type": "integer",
        "description": ""
      },
      {
        "name": "id",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "authentication_strategy",
    "type": "string",
    "description": ""
  },
  {
    "name": "users",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "replication_user",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "console_access",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "username",
        "type": "string",
        "description": ""
      },
      {
        "name": "groups",
        "type": "array",
        "description": ""
      },
      {
        "name": "password",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "subnet_ids",
    "type": "array",
    "description": ""
  },
  {
    "name": "stomp_endpoints",
    "type": "array",
    "description": ""
  },
  {
    "name": "mqtt_endpoints",
    "type": "array",
    "description": ""
  },
  {
    "name": "amqp_endpoints",
    "type": "array",
    "description": ""
  },
  {
    "name": "deployment_mode",
    "type": "string",
    "description": ""
  },
  {
    "name": "engine_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "encryption_options",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "kms_key_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "use_aws_owned_key",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "configuration_revision",
    "type": "integer",
    "description": ""
  },
  {
    "name": "storage_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "engine_version",
    "type": "string",
    "description": ""
  },
  {
    "name": "maintenance_window_start_time",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "day_of_week",
        "type": "string",
        "description": ""
      },
      {
        "name": "time_of_day",
        "type": "string",
        "description": ""
      },
      {
        "name": "time_zone",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "host_instance_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "auto_minor_version_upgrade",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "logs",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "audit",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "general",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "console_urls",
    "type": "array",
    "description": ""
  },
  {
    "name": "configuration_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "data_replication_mode",
    "type": "string",
    "description": ""
  },
  {
    "name": "broker_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "wss_endpoints",
    "type": "array",
    "description": ""
  },
  {
    "name": "ip_addresses",
    "type": "array",
    "description": ""
  },
  {
    "name": "open_wire_endpoints",
    "type": "array",
    "description": ""
  },
  {
    "name": "ldap_server_metadata",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "hosts",
        "type": "array",
        "description": ""
      },
      {
        "name": "user_role_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "user_search_matching",
        "type": "string",
        "description": ""
      },
      {
        "name": "role_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "user_base",
        "type": "string",
        "description": ""
      },
      {
        "name": "user_search_subtree",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "role_search_matching",
        "type": "string",
        "description": ""
      },
      {
        "name": "service_account_username",
        "type": "string",
        "description": ""
      },
      {
        "name": "role_base",
        "type": "string",
        "description": ""
      },
      {
        "name": "service_account_password",
        "type": "string",
        "description": ""
      },
      {
        "name": "role_search_subtree",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "publicly_accessible",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

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






