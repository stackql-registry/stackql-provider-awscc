---
title: pipes
hide_title: false
hide_table_of_contents: false
keywords:
  - pipes
  - pipes
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

Creates, updates, deletes or gets a <code>pipe</code> resource or lists <code>pipes</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>pipes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Pipes::Pipe Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.pipes.pipes" /></td></tr>
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
    "description": ""
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "current_state",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "desired_state",
    "type": "string",
    "description": ""
  },
  {
    "name": "enrichment",
    "type": "string",
    "description": ""
  },
  {
    "name": "enrichment_parameters",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "input_template",
        "type": "string",
        "description": ""
      },
      {
        "name": "http_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "path_parameter_values",
            "type": "array",
            "description": ""
          },
          {
            "name": "header_parameters",
            "type": "object",
            "description": ""
          },
          {
            "name": "query_string_parameters",
            "type": "object",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "kms_key_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "last_modified_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "log_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "s3_log_destination",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "bucket_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "prefix",
            "type": "string",
            "description": ""
          },
          {
            "name": "bucket_owner",
            "type": "string",
            "description": ""
          },
          {
            "name": "output_format",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "firehose_log_destination",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "delivery_stream_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "cloudwatch_logs_log_destination",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "log_group_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "level",
        "type": "string",
        "description": ""
      },
      {
        "name": "include_execution_data",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "source",
    "type": "string",
    "description": ""
  },
  {
    "name": "source_parameters",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "filter_criteria",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "filters",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "pattern",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "kinesis_stream_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "batch_size",
            "type": "integer",
            "description": ""
          },
          {
            "name": "dead_letter_config",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "arn",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "on_partial_batch_item_failure",
            "type": "string",
            "description": ""
          },
          {
            "name": "maximum_batching_window_in_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "maximum_record_age_in_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "maximum_retry_attempts",
            "type": "integer",
            "description": ""
          },
          {
            "name": "parallelization_factor",
            "type": "integer",
            "description": ""
          },
          {
            "name": "starting_position",
            "type": "string",
            "description": ""
          },
          {
            "name": "starting_position_timestamp",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "dynamo_db_stream_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "batch_size",
            "type": "integer",
            "description": ""
          },
          {
            "name": "dead_letter_config",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "arn",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "on_partial_batch_item_failure",
            "type": "string",
            "description": ""
          },
          {
            "name": "maximum_batching_window_in_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "maximum_record_age_in_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "maximum_retry_attempts",
            "type": "integer",
            "description": ""
          },
          {
            "name": "parallelization_factor",
            "type": "integer",
            "description": ""
          },
          {
            "name": "starting_position",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "sqs_queue_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "batch_size",
            "type": "integer",
            "description": ""
          },
          {
            "name": "maximum_batching_window_in_seconds",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "active_mq_broker_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "credentials",
            "type": "object",
            "description": ""
          },
          {
            "name": "queue_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "batch_size",
            "type": "integer",
            "description": ""
          },
          {
            "name": "maximum_batching_window_in_seconds",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "rabbit_mq_broker_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "credentials",
            "type": "object",
            "description": ""
          },
          {
            "name": "queue_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "virtual_host",
            "type": "string",
            "description": ""
          },
          {
            "name": "batch_size",
            "type": "integer",
            "description": ""
          },
          {
            "name": "maximum_batching_window_in_seconds",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "managed_streaming_kafka_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "topic_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "starting_position",
            "type": "string",
            "description": ""
          },
          {
            "name": "batch_size",
            "type": "integer",
            "description": ""
          },
          {
            "name": "maximum_batching_window_in_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "consumer_group_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "credentials",
            "type": "object",
            "description": ""
          }
        ]
      },
      {
        "name": "self_managed_kafka_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "topic_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "starting_position",
            "type": "string",
            "description": ""
          },
          {
            "name": "additional_bootstrap_servers",
            "type": "array",
            "description": ""
          },
          {
            "name": "batch_size",
            "type": "integer",
            "description": ""
          },
          {
            "name": "maximum_batching_window_in_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "consumer_group_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "credentials",
            "type": "object",
            "description": ""
          },
          {
            "name": "server_root_ca_certificate",
            "type": "string",
            "description": "Optional SecretManager ARN which stores the database credentials"
          },
          {
            "name": "vpc",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "subnets",
                "type": "array",
                "description": "List of SubnetId."
              },
              {
                "name": "security_group",
                "type": "array",
                "description": "List of SecurityGroupId."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "state_reason",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "object",
    "description": ""
  },
  {
    "name": "target",
    "type": "string",
    "description": ""
  },
  {
    "name": "target_parameters",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "input_template",
        "type": "string",
        "description": ""
      },
      {
        "name": "lambda_function_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "invocation_type",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "step_function_state_machine_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "invocation_type",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "kinesis_stream_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "partition_key",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "ecs_task_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "task_definition_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "task_count",
            "type": "integer",
            "description": ""
          },
          {
            "name": "launch_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "network_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "awsvpc_configuration",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "platform_version",
            "type": "string",
            "description": ""
          },
          {
            "name": "group",
            "type": "string",
            "description": ""
          },
          {
            "name": "capacity_provider_strategy",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "capacity_provider",
                "type": "string",
                "description": ""
              },
              {
                "name": "weight",
                "type": "integer",
                "description": ""
              },
              {
                "name": "base",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "enable_ecs_managed_tags",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "enable_execute_command",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "placement_constraints",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": ""
              },
              {
                "name": "expression",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "placement_strategy",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": ""
              },
              {
                "name": "field",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "propagate_tags",
            "type": "string",
            "description": ""
          },
          {
            "name": "reference_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "overrides",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "container_overrides",
                "type": "array",
                "description": ""
              },
              {
                "name": "cpu",
                "type": "string",
                "description": ""
              },
              {
                "name": "ephemeral_storage",
                "type": "object",
                "description": ""
              },
              {
                "name": "execution_role_arn",
                "type": "string",
                "description": ""
              },
              {
                "name": "inference_accelerator_overrides",
                "type": "array",
                "description": ""
              },
              {
                "name": "memory",
                "type": "string",
                "description": ""
              },
              {
                "name": "task_role_arn",
                "type": "string",
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
                "name": "key",
                "type": "string",
                "description": ""
              },
              {
                "name": "value",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "batch_job_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "job_definition",
            "type": "string",
            "description": ""
          },
          {
            "name": "job_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "array_properties",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "size",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "retry_strategy",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "attempts",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "container_overrides",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "command",
                "type": "array",
                "description": ""
              },
              {
                "name": "environment",
                "type": "array",
                "description": ""
              },
              {
                "name": "instance_type",
                "type": "string",
                "description": ""
              },
              {
                "name": "resource_requirements",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "depends_on",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "job_id",
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
            "name": "parameters",
            "type": "object",
            "description": ""
          }
        ]
      },
      {
        "name": "sqs_queue_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "message_group_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "message_deduplication_id",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "http_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "path_parameter_values",
            "type": "array",
            "description": ""
          },
          {
            "name": "header_parameters",
            "type": "object",
            "description": ""
          },
          {
            "name": "query_string_parameters",
            "type": "object",
            "description": ""
          }
        ]
      },
      {
        "name": "redshift_data_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "secret_manager_arn",
            "type": "string",
            "description": "Optional SecretManager ARN which stores the database credentials"
          },
          {
            "name": "database",
            "type": "string",
            "description": "Redshift Database"
          },
          {
            "name": "db_user",
            "type": "string",
            "description": "Database user name"
          },
          {
            "name": "statement_name",
            "type": "string",
            "description": "A name for Redshift DataAPI statement which can be used as filter of ListStatement."
          },
          {
            "name": "with_event",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "sqls",
            "type": "array",
            "description": "A list of SQLs."
          }
        ]
      },
      {
        "name": "sage_maker_pipeline_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "pipeline_parameter_list",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "name",
                "type": "string",
                "description": ""
              },
              {
                "name": "value",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "event_bridge_event_bus_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "endpoint_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "detail_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "source",
            "type": "string",
            "description": ""
          },
          {
            "name": "resources",
            "type": "array",
            "description": ""
          },
          {
            "name": "time",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "cloud_watch_logs_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "log_stream_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "timestamp",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "timestream_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "time_value",
            "type": "string",
            "description": ""
          },
          {
            "name": "epoch_time_unit",
            "type": "string",
            "description": ""
          },
          {
            "name": "time_field_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "timestamp_format",
            "type": "string",
            "description": ""
          },
          {
            "name": "version_value",
            "type": "string",
            "description": ""
          },
          {
            "name": "dimension_mappings",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "dimension_value",
                "type": "string",
                "description": ""
              },
              {
                "name": "dimension_value_type",
                "type": "string",
                "description": ""
              },
              {
                "name": "dimension_name",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "single_measure_mappings",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "measure_value",
                "type": "string",
                "description": ""
              },
              {
                "name": "measure_value_type",
                "type": "string",
                "description": ""
              },
              {
                "name": "measure_name",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "multi_measure_mappings",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "multi_measure_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "multi_measure_attribute_mappings",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
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
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html"><code>AWS::Pipes::Pipe</code></a>.

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
    <td><code>pipes</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RoleArn, Source, Target, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>pipes</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>pipes</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>pipes_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>pipes</code></td>
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

Gets all properties from an individual <code>pipe</code>.
```sql
SELECT
region,
arn,
creation_time,
current_state,
description,
desired_state,
enrichment,
enrichment_parameters,
kms_key_identifier,
last_modified_time,
log_configuration,
name,
role_arn,
source,
source_parameters,
state_reason,
tags,
target,
target_parameters
FROM awscc.pipes.pipes
WHERE region = 'us-east-1' AND Identifier = '{{ name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>pipes</code> in a region.
```sql
SELECT
region,
name
FROM awscc.pipes.pipes_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>pipe</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.pipes.pipes (
 RoleArn,
 Source,
 Target,
 region
)
SELECT
'{{ role_arn }}',
 '{{ source }}',
 '{{ target }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.pipes.pipes (
 Description,
 DesiredState,
 Enrichment,
 EnrichmentParameters,
 KmsKeyIdentifier,
 LogConfiguration,
 Name,
 RoleArn,
 Source,
 SourceParameters,
 Tags,
 Target,
 TargetParameters,
 region
)
SELECT
 '{{ description }}',
 '{{ desired_state }}',
 '{{ enrichment }}',
 '{{ enrichment_parameters }}',
 '{{ kms_key_identifier }}',
 '{{ log_configuration }}',
 '{{ name }}',
 '{{ role_arn }}',
 '{{ source }}',
 '{{ source_parameters }}',
 '{{ tags }}',
 '{{ target }}',
 '{{ target_parameters }}',
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
  - name: pipe
    props:
      - name: description
        value: '{{ description }}'
      - name: desired_state
        value: '{{ desired_state }}'
      - name: enrichment
        value: '{{ enrichment }}'
      - name: enrichment_parameters
        value:
          input_template: '{{ input_template }}'
          http_parameters:
            path_parameter_values:
              - '{{ path_parameter_values[0] }}'
            header_parameters: {}
            query_string_parameters: {}
      - name: kms_key_identifier
        value: '{{ kms_key_identifier }}'
      - name: log_configuration
        value:
          s3_log_destination:
            bucket_name: '{{ bucket_name }}'
            prefix: '{{ prefix }}'
            bucket_owner: '{{ bucket_owner }}'
            output_format: '{{ output_format }}'
          firehose_log_destination:
            delivery_stream_arn: '{{ delivery_stream_arn }}'
          cloudwatch_logs_log_destination:
            log_group_arn: '{{ log_group_arn }}'
          level: '{{ level }}'
          include_execution_data:
            - '{{ include_execution_data[0] }}'
      - name: name
        value: '{{ name }}'
      - name: role_arn
        value: '{{ role_arn }}'
      - name: source
        value: '{{ source }}'
      - name: source_parameters
        value:
          filter_criteria:
            filters:
              - pattern: '{{ pattern }}'
          kinesis_stream_parameters:
            batch_size: '{{ batch_size }}'
            dead_letter_config:
              arn: '{{ arn }}'
            on_partial_batch_item_failure: '{{ on_partial_batch_item_failure }}'
            maximum_batching_window_in_seconds: '{{ maximum_batching_window_in_seconds }}'
            maximum_record_age_in_seconds: '{{ maximum_record_age_in_seconds }}'
            maximum_retry_attempts: '{{ maximum_retry_attempts }}'
            parallelization_factor: '{{ parallelization_factor }}'
            starting_position: '{{ starting_position }}'
            starting_position_timestamp: '{{ starting_position_timestamp }}'
          dynamo_db_stream_parameters:
            batch_size: '{{ batch_size }}'
            dead_letter_config: null
            on_partial_batch_item_failure: null
            maximum_batching_window_in_seconds: '{{ maximum_batching_window_in_seconds }}'
            maximum_record_age_in_seconds: '{{ maximum_record_age_in_seconds }}'
            maximum_retry_attempts: '{{ maximum_retry_attempts }}'
            parallelization_factor: '{{ parallelization_factor }}'
            starting_position: '{{ starting_position }}'
          sqs_queue_parameters:
            batch_size: '{{ batch_size }}'
            maximum_batching_window_in_seconds: '{{ maximum_batching_window_in_seconds }}'
          active_mq_broker_parameters:
            credentials: null
            queue_name: '{{ queue_name }}'
            batch_size: '{{ batch_size }}'
            maximum_batching_window_in_seconds: '{{ maximum_batching_window_in_seconds }}'
          rabbit_mq_broker_parameters:
            credentials: null
            queue_name: '{{ queue_name }}'
            virtual_host: '{{ virtual_host }}'
            batch_size: '{{ batch_size }}'
            maximum_batching_window_in_seconds: '{{ maximum_batching_window_in_seconds }}'
          managed_streaming_kafka_parameters:
            topic_name: '{{ topic_name }}'
            starting_position: '{{ starting_position }}'
            batch_size: '{{ batch_size }}'
            maximum_batching_window_in_seconds: '{{ maximum_batching_window_in_seconds }}'
            consumer_group_id: '{{ consumer_group_id }}'
            credentials: null
          self_managed_kafka_parameters:
            topic_name: '{{ topic_name }}'
            starting_position: '{{ starting_position }}'
            additional_bootstrap_servers:
              - '{{ additional_bootstrap_servers[0] }}'
            batch_size: '{{ batch_size }}'
            maximum_batching_window_in_seconds: '{{ maximum_batching_window_in_seconds }}'
            consumer_group_id: '{{ consumer_group_id }}'
            credentials: null
            server_root_ca_certificate: '{{ server_root_ca_certificate }}'
            vpc:
              subnets:
                - '{{ subnets[0] }}'
              security_group:
                - '{{ security_group[0] }}'
      - name: tags
        value: {}
      - name: target
        value: '{{ target }}'
      - name: target_parameters
        value:
          input_template: '{{ input_template }}'
          lambda_function_parameters:
            invocation_type: '{{ invocation_type }}'
          step_function_state_machine_parameters:
            invocation_type: null
          kinesis_stream_parameters:
            partition_key: '{{ partition_key }}'
          ecs_task_parameters:
            task_definition_arn: '{{ task_definition_arn }}'
            task_count: '{{ task_count }}'
            launch_type: '{{ launch_type }}'
            network_configuration:
              awsvpc_configuration:
                subnets:
                  - '{{ subnets[0] }}'
                security_groups:
                  - '{{ security_groups[0] }}'
                assign_public_ip: '{{ assign_public_ip }}'
            platform_version: '{{ platform_version }}'
            group: '{{ group }}'
            capacity_provider_strategy:
              - capacity_provider: '{{ capacity_provider }}'
                weight: '{{ weight }}'
                base: '{{ base }}'
            enable_ecs_managed_tags: '{{ enable_ecs_managed_tags }}'
            enable_execute_command: '{{ enable_execute_command }}'
            placement_constraints:
              - type: '{{ type }}'
                expression: '{{ expression }}'
            placement_strategy:
              - type: '{{ type }}'
                field: '{{ field }}'
            propagate_tags: '{{ propagate_tags }}'
            reference_id: '{{ reference_id }}'
            overrides:
              container_overrides:
                - command:
                    - '{{ command[0] }}'
                  cpu: '{{ cpu }}'
                  environment:
                    - name: '{{ name }}'
                      value: '{{ value }}'
                  environment_files:
                    - type: '{{ type }}'
                      value: '{{ value }}'
                  memory: '{{ memory }}'
                  memory_reservation: '{{ memory_reservation }}'
                  name: '{{ name }}'
                  resource_requirements:
                    - type: '{{ type }}'
                      value: '{{ value }}'
              cpu: '{{ cpu }}'
              ephemeral_storage:
                size_in_gi_b: '{{ size_in_gi_b }}'
              execution_role_arn: '{{ execution_role_arn }}'
              inference_accelerator_overrides:
                - device_name: '{{ device_name }}'
                  device_type: '{{ device_type }}'
              memory: '{{ memory }}'
              task_role_arn: '{{ task_role_arn }}'
            tags:
              - key: '{{ key }}'
                value: '{{ value }}'
          batch_job_parameters:
            job_definition: '{{ job_definition }}'
            job_name: '{{ job_name }}'
            array_properties:
              size: '{{ size }}'
            retry_strategy:
              attempts: '{{ attempts }}'
            container_overrides:
              command:
                - '{{ command[0] }}'
              environment:
                - name: '{{ name }}'
                  value: '{{ value }}'
              instance_type: '{{ instance_type }}'
              resource_requirements:
                - type: '{{ type }}'
                  value: '{{ value }}'
            depends_on:
              - job_id: '{{ job_id }}'
                type: '{{ type }}'
            parameters: {}
          sqs_queue_parameters:
            message_group_id: '{{ message_group_id }}'
            message_deduplication_id: '{{ message_deduplication_id }}'
          http_parameters:
            path_parameter_values:
              - '{{ path_parameter_values[0] }}'
            header_parameters: null
            query_string_parameters: null
          redshift_data_parameters:
            secret_manager_arn: '{{ secret_manager_arn }}'
            database: '{{ database }}'
            db_user: '{{ db_user }}'
            statement_name: '{{ statement_name }}'
            with_event: '{{ with_event }}'
            sqls:
              - '{{ sqls[0] }}'
          sage_maker_pipeline_parameters:
            pipeline_parameter_list:
              - name: '{{ name }}'
                value: '{{ value }}'
          event_bridge_event_bus_parameters:
            endpoint_id: '{{ endpoint_id }}'
            detail_type: '{{ detail_type }}'
            source: '{{ source }}'
            resources:
              - '{{ resources[0] }}'
            time: '{{ time }}'
          cloud_watch_logs_parameters:
            log_stream_name: '{{ log_stream_name }}'
            timestamp: '{{ timestamp }}'
          timestream_parameters:
            time_value: '{{ time_value }}'
            epoch_time_unit: '{{ epoch_time_unit }}'
            time_field_type: '{{ time_field_type }}'
            timestamp_format: '{{ timestamp_format }}'
            version_value: '{{ version_value }}'
            dimension_mappings:
              - dimension_value: '{{ dimension_value }}'
                dimension_value_type: '{{ dimension_value_type }}'
                dimension_name: '{{ dimension_name }}'
            single_measure_mappings:
              - measure_value: '{{ measure_value }}'
                measure_value_type: '{{ measure_value_type }}'
                measure_name: '{{ measure_name }}'
            multi_measure_mappings:
              - multi_measure_name: '{{ multi_measure_name }}'
                multi_measure_attribute_mappings:
                  - measure_value: '{{ measure_value }}'
                    measure_value_type: null
                    multi_measure_attribute_name: '{{ multi_measure_attribute_name }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>pipe</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.pipes.pipes
SET PatchDocument = string('{{ {
    "Description": description,
    "DesiredState": desired_state,
    "Enrichment": enrichment,
    "EnrichmentParameters": enrichment_parameters,
    "KmsKeyIdentifier": kms_key_identifier,
    "LogConfiguration": log_configuration,
    "RoleArn": role_arn,
    "Tags": tags,
    "Target": target,
    "TargetParameters": target_parameters
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.pipes.pipes
WHERE Identifier = '{{ name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>pipes</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
pipes:CreatePipe,
pipes:DescribePipe,
pipes:TagResource,
iam:PassRole,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups,
iam:CreateServiceLinkedRole,
logs:CreateLogDelivery,
logs:GetLogDelivery,
logs:ListLogDeliveries,
s3:PutBucketPolicy,
s3:GetBucketPolicy,
firehose:TagDeliveryStream,
kms:DescribeKey,
kms:Decrypt,
kms:GenerateDataKey
```

</TabItem>
<TabItem value="read">

```json
pipes:DescribePipe,
kms:Decrypt
```

</TabItem>
<TabItem value="update">

```json
pipes:UpdatePipe,
pipes:TagResource,
pipes:UntagResource,
pipes:DescribePipe,
iam:PassRole,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups,
iam:CreateServiceLinkedRole,
logs:CreateLogDelivery,
logs:UpdateLogDelivery,
logs:DeleteLogDelivery,
logs:GetLogDelivery,
logs:ListLogDeliveries,
s3:PutBucketPolicy,
s3:GetBucketPolicy,
firehose:TagDeliveryStream,
kms:DescribeKey,
kms:Decrypt,
kms:GenerateDataKey
```

</TabItem>
<TabItem value="delete">

```json
pipes:DeletePipe,
pipes:DescribePipe,
pipes:UntagResource,
logs:CreateLogDelivery,
logs:UpdateLogDelivery,
logs:DeleteLogDelivery,
logs:GetLogDelivery,
logs:ListLogDeliveries,
kms:DescribeKey,
kms:Decrypt,
kms:GenerateDataKey
```

</TabItem>
<TabItem value="list">

```json
pipes:ListPipes
```

</TabItem>
</Tabs>