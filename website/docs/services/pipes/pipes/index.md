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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html"><code>AWS::Pipes::Pipe</code></a>.

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
    <td><CopyableCode code="RoleArn, Source, Target, region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<Name>';
```

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
'{{ RoleArn }}',
 '{{ Source }}',
 '{{ Target }}',
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
 '{{ Description }}',
 '{{ DesiredState }}',
 '{{ Enrichment }}',
 '{{ EnrichmentParameters }}',
 '{{ KmsKeyIdentifier }}',
 '{{ LogConfiguration }}',
 '{{ Name }}',
 '{{ RoleArn }}',
 '{{ Source }}',
 '{{ SourceParameters }}',
 '{{ Tags }}',
 '{{ Target }}',
 '{{ TargetParameters }}',
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
      - name: Description
        value: '{{ Description }}'
      - name: DesiredState
        value: '{{ DesiredState }}'
      - name: Enrichment
        value: '{{ Enrichment }}'
      - name: EnrichmentParameters
        value:
          InputTemplate: '{{ InputTemplate }}'
          HttpParameters:
            PathParameterValues:
              - '{{ PathParameterValues[0] }}'
            HeaderParameters: {}
            QueryStringParameters: {}
      - name: KmsKeyIdentifier
        value: '{{ KmsKeyIdentifier }}'
      - name: LogConfiguration
        value:
          S3LogDestination:
            BucketName: '{{ BucketName }}'
            Prefix: '{{ Prefix }}'
            BucketOwner: '{{ BucketOwner }}'
            OutputFormat: '{{ OutputFormat }}'
          FirehoseLogDestination:
            DeliveryStreamArn: '{{ DeliveryStreamArn }}'
          CloudwatchLogsLogDestination:
            LogGroupArn: '{{ LogGroupArn }}'
          Level: '{{ Level }}'
          IncludeExecutionData:
            - '{{ IncludeExecutionData[0] }}'
      - name: Name
        value: '{{ Name }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: Source
        value: '{{ Source }}'
      - name: SourceParameters
        value:
          FilterCriteria:
            Filters:
              - Pattern: '{{ Pattern }}'
          KinesisStreamParameters:
            BatchSize: '{{ BatchSize }}'
            DeadLetterConfig:
              Arn: '{{ Arn }}'
            OnPartialBatchItemFailure: '{{ OnPartialBatchItemFailure }}'
            MaximumBatchingWindowInSeconds: '{{ MaximumBatchingWindowInSeconds }}'
            MaximumRecordAgeInSeconds: '{{ MaximumRecordAgeInSeconds }}'
            MaximumRetryAttempts: '{{ MaximumRetryAttempts }}'
            ParallelizationFactor: '{{ ParallelizationFactor }}'
            StartingPosition: '{{ StartingPosition }}'
            StartingPositionTimestamp: '{{ StartingPositionTimestamp }}'
          DynamoDBStreamParameters:
            BatchSize: '{{ BatchSize }}'
            DeadLetterConfig: null
            OnPartialBatchItemFailure: null
            MaximumBatchingWindowInSeconds: '{{ MaximumBatchingWindowInSeconds }}'
            MaximumRecordAgeInSeconds: '{{ MaximumRecordAgeInSeconds }}'
            MaximumRetryAttempts: '{{ MaximumRetryAttempts }}'
            ParallelizationFactor: '{{ ParallelizationFactor }}'
            StartingPosition: '{{ StartingPosition }}'
          SqsQueueParameters:
            BatchSize: '{{ BatchSize }}'
            MaximumBatchingWindowInSeconds: '{{ MaximumBatchingWindowInSeconds }}'
          ActiveMQBrokerParameters:
            Credentials: null
            QueueName: '{{ QueueName }}'
            BatchSize: '{{ BatchSize }}'
            MaximumBatchingWindowInSeconds: '{{ MaximumBatchingWindowInSeconds }}'
          RabbitMQBrokerParameters:
            Credentials: null
            QueueName: '{{ QueueName }}'
            VirtualHost: '{{ VirtualHost }}'
            BatchSize: '{{ BatchSize }}'
            MaximumBatchingWindowInSeconds: '{{ MaximumBatchingWindowInSeconds }}'
          ManagedStreamingKafkaParameters:
            TopicName: '{{ TopicName }}'
            StartingPosition: '{{ StartingPosition }}'
            BatchSize: '{{ BatchSize }}'
            MaximumBatchingWindowInSeconds: '{{ MaximumBatchingWindowInSeconds }}'
            ConsumerGroupID: '{{ ConsumerGroupID }}'
            Credentials: null
          SelfManagedKafkaParameters:
            TopicName: '{{ TopicName }}'
            StartingPosition: '{{ StartingPosition }}'
            AdditionalBootstrapServers:
              - '{{ AdditionalBootstrapServers[0] }}'
            BatchSize: '{{ BatchSize }}'
            MaximumBatchingWindowInSeconds: '{{ MaximumBatchingWindowInSeconds }}'
            ConsumerGroupID: '{{ ConsumerGroupID }}'
            Credentials: null
            ServerRootCaCertificate: '{{ ServerRootCaCertificate }}'
            Vpc:
              Subnets:
                - '{{ Subnets[0] }}'
              SecurityGroup:
                - '{{ SecurityGroup[0] }}'
      - name: Tags
        value: {}
      - name: Target
        value: '{{ Target }}'
      - name: TargetParameters
        value:
          InputTemplate: '{{ InputTemplate }}'
          LambdaFunctionParameters:
            InvocationType: '{{ InvocationType }}'
          StepFunctionStateMachineParameters:
            InvocationType: null
          KinesisStreamParameters:
            PartitionKey: '{{ PartitionKey }}'
          EcsTaskParameters:
            TaskDefinitionArn: '{{ TaskDefinitionArn }}'
            TaskCount: '{{ TaskCount }}'
            LaunchType: '{{ LaunchType }}'
            NetworkConfiguration:
              AwsvpcConfiguration:
                Subnets:
                  - '{{ Subnets[0] }}'
                SecurityGroups:
                  - '{{ SecurityGroups[0] }}'
                AssignPublicIp: '{{ AssignPublicIp }}'
            PlatformVersion: '{{ PlatformVersion }}'
            Group: '{{ Group }}'
            CapacityProviderStrategy:
              - CapacityProvider: '{{ CapacityProvider }}'
                Weight: '{{ Weight }}'
                Base: '{{ Base }}'
            EnableECSManagedTags: '{{ EnableECSManagedTags }}'
            EnableExecuteCommand: '{{ EnableExecuteCommand }}'
            PlacementConstraints:
              - Type: '{{ Type }}'
                Expression: '{{ Expression }}'
            PlacementStrategy:
              - Type: '{{ Type }}'
                Field: '{{ Field }}'
            PropagateTags: '{{ PropagateTags }}'
            ReferenceId: '{{ ReferenceId }}'
            Overrides:
              ContainerOverrides:
                - Command:
                    - '{{ Command[0] }}'
                  Cpu: '{{ Cpu }}'
                  Environment:
                    - Name: '{{ Name }}'
                      Value: '{{ Value }}'
                  EnvironmentFiles:
                    - Type: '{{ Type }}'
                      Value: '{{ Value }}'
                  Memory: '{{ Memory }}'
                  MemoryReservation: '{{ MemoryReservation }}'
                  Name: '{{ Name }}'
                  ResourceRequirements:
                    - Type: '{{ Type }}'
                      Value: '{{ Value }}'
              Cpu: '{{ Cpu }}'
              EphemeralStorage:
                SizeInGiB: '{{ SizeInGiB }}'
              ExecutionRoleArn: '{{ ExecutionRoleArn }}'
              InferenceAcceleratorOverrides:
                - DeviceName: '{{ DeviceName }}'
                  DeviceType: '{{ DeviceType }}'
              Memory: '{{ Memory }}'
              TaskRoleArn: '{{ TaskRoleArn }}'
            Tags:
              - Key: '{{ Key }}'
                Value: '{{ Value }}'
          BatchJobParameters:
            JobDefinition: '{{ JobDefinition }}'
            JobName: '{{ JobName }}'
            ArrayProperties:
              Size: '{{ Size }}'
            RetryStrategy:
              Attempts: '{{ Attempts }}'
            ContainerOverrides:
              Command:
                - '{{ Command[0] }}'
              Environment:
                - Name: '{{ Name }}'
                  Value: '{{ Value }}'
              InstanceType: '{{ InstanceType }}'
              ResourceRequirements:
                - Type: '{{ Type }}'
                  Value: '{{ Value }}'
            DependsOn:
              - JobId: '{{ JobId }}'
                Type: '{{ Type }}'
            Parameters: {}
          SqsQueueParameters:
            MessageGroupId: '{{ MessageGroupId }}'
            MessageDeduplicationId: '{{ MessageDeduplicationId }}'
          HttpParameters:
            PathParameterValues:
              - '{{ PathParameterValues[0] }}'
            HeaderParameters: null
            QueryStringParameters: null
          RedshiftDataParameters:
            SecretManagerArn: '{{ SecretManagerArn }}'
            Database: '{{ Database }}'
            DbUser: '{{ DbUser }}'
            StatementName: '{{ StatementName }}'
            WithEvent: '{{ WithEvent }}'
            Sqls:
              - '{{ Sqls[0] }}'
          SageMakerPipelineParameters:
            PipelineParameterList:
              - Name: '{{ Name }}'
                Value: '{{ Value }}'
          EventBridgeEventBusParameters:
            EndpointId: '{{ EndpointId }}'
            DetailType: '{{ DetailType }}'
            Source: '{{ Source }}'
            Resources:
              - '{{ Resources[0] }}'
            Time: '{{ Time }}'
          CloudWatchLogsParameters:
            LogStreamName: '{{ LogStreamName }}'
            Timestamp: '{{ Timestamp }}'
          TimestreamParameters:
            TimeValue: '{{ TimeValue }}'
            EpochTimeUnit: '{{ EpochTimeUnit }}'
            TimeFieldType: '{{ TimeFieldType }}'
            TimestampFormat: '{{ TimestampFormat }}'
            VersionValue: '{{ VersionValue }}'
            DimensionMappings:
              - DimensionValue: '{{ DimensionValue }}'
                DimensionValueType: '{{ DimensionValueType }}'
                DimensionName: '{{ DimensionName }}'
            SingleMeasureMappings:
              - MeasureValue: '{{ MeasureValue }}'
                MeasureValueType: '{{ MeasureValueType }}'
                MeasureName: '{{ MeasureName }}'
            MultiMeasureMappings:
              - MultiMeasureName: '{{ MultiMeasureName }}'
                MultiMeasureAttributeMappings:
                  - MeasureValue: '{{ MeasureValue }}'
                    MeasureValueType: null
                    MultiMeasureAttributeName: '{{ MultiMeasureAttributeName }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.pipes.pipes
WHERE data__Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>pipes</code> resource, the following permissions are required:

### Create
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

### Read
```json
pipes:DescribePipe,
kms:Decrypt
```

### Update
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

### Delete
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

### List
```json
pipes:ListPipes
```
