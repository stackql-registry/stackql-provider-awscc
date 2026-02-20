---
title: delivery_streams
hide_title: false
hide_table_of_contents: false
keywords:
  - delivery_streams
  - kinesisfirehose
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

Creates, updates, deletes or gets a <code>delivery_stream</code> resource or lists <code>delivery_streams</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>delivery_streams</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::KinesisFirehose::DeliveryStream</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.kinesisfirehose.delivery_streams" /></td></tr>
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
    "name": "delivery_stream_encryption_configuration_input",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "key_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "key_arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "http_endpoint_destination_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "request_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "common_attributes",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "attribute_value",
                "type": "string",
                "description": ""
              },
              {
                "name": "attribute_name",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "content_encoding",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "s3_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "error_output_prefix",
            "type": "string",
            "description": ""
          },
          {
            "name": "bucket_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "buffering_hints",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "interval_in_seconds",
                "type": "integer",
                "description": ""
              },
              {
                "name": "size_in_mbs",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "compression_format",
            "type": "string",
            "description": ""
          },
          {
            "name": "encryption_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "kms_encryption_config",
                "type": "object",
                "description": ""
              },
              {
                "name": "no_encryption_config",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "prefix",
            "type": "string",
            "description": ""
          },
          {
            "name": "cloud_watch_logging_options",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "log_stream_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "enabled",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "log_group_name",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "buffering_hints",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "interval_in_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "size_in_mbs",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "retry_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "duration_in_seconds",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "secrets_manager_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "secret_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "endpoint_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "access_key",
            "type": "string",
            "description": ""
          },
          {
            "name": "url",
            "type": "string",
            "description": ""
          },
          {
            "name": "name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "processing_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "processors",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": ""
              },
              {
                "name": "parameters",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "cloud_watch_logging_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "log_stream_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "log_group_name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "s3_backup_mode",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "kinesis_stream_source_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "kinesis_stream_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "delivery_stream_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "iceberg_destination_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "catalog_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "catalog_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "warehouse_location",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "s3_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "error_output_prefix",
            "type": "string",
            "description": ""
          },
          {
            "name": "bucket_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "buffering_hints",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "interval_in_seconds",
                "type": "integer",
                "description": ""
              },
              {
                "name": "size_in_mbs",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "compression_format",
            "type": "string",
            "description": ""
          },
          {
            "name": "encryption_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "kms_encryption_config",
                "type": "object",
                "description": ""
              },
              {
                "name": "no_encryption_config",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "prefix",
            "type": "string",
            "description": ""
          },
          {
            "name": "cloud_watch_logging_options",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "log_stream_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "enabled",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "log_group_name",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "destination_table_configuration_list",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "destination_database_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "s3_error_output_prefix",
            "type": "string",
            "description": ""
          },
          {
            "name": "destination_table_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "unique_keys",
            "type": "array",
            "description": ""
          },
          {
            "name": "partition_spec",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "identity",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "buffering_hints",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "interval_in_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "size_in_mbs",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "table_creation_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          }
        ]
      },
      {
        "name": "retry_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "duration_in_seconds",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "s3_backup_mode",
        "type": "string",
        "description": ""
      },
      {
        "name": "processing_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "processors",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": ""
              },
              {
                "name": "parameters",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "schema_evolution_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          }
        ]
      },
      {
        "name": "append_only",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "cloud_watch_logging_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "log_stream_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "log_group_name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "redshift_destination_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "s3_backup_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "error_output_prefix",
            "type": "string",
            "description": ""
          },
          {
            "name": "bucket_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "buffering_hints",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "interval_in_seconds",
                "type": "integer",
                "description": ""
              },
              {
                "name": "size_in_mbs",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "compression_format",
            "type": "string",
            "description": ""
          },
          {
            "name": "encryption_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "kms_encryption_config",
                "type": "object",
                "description": ""
              },
              {
                "name": "no_encryption_config",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "prefix",
            "type": "string",
            "description": ""
          },
          {
            "name": "cloud_watch_logging_options",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "log_stream_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "enabled",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "log_group_name",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "username",
        "type": "string",
        "description": ""
      },
      {
        "name": "copy_command",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "data_table_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "copy_options",
            "type": "string",
            "description": ""
          },
          {
            "name": "data_table_columns",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "retry_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "duration_in_seconds",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "secrets_manager_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "secret_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "processing_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "processors",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": ""
              },
              {
                "name": "parameters",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "cloud_watch_logging_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "log_stream_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "log_group_name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "cluster_jdb_curl",
        "type": "string",
        "description": ""
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "password",
        "type": "string",
        "description": ""
      },
      {
        "name": "s3_backup_mode",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "amazonopensearchservice_destination_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "type_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "index_rotation_period",
        "type": "string",
        "description": ""
      },
      {
        "name": "processing_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "processors",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": ""
              },
              {
                "name": "parameters",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "cluster_endpoint",
        "type": "string",
        "description": ""
      },
      {
        "name": "domain_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "s3_backup_mode",
        "type": "string",
        "description": ""
      },
      {
        "name": "index_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "document_id_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "default_document_id_format",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "s3_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "error_output_prefix",
            "type": "string",
            "description": ""
          },
          {
            "name": "bucket_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "buffering_hints",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "interval_in_seconds",
                "type": "integer",
                "description": ""
              },
              {
                "name": "size_in_mbs",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "compression_format",
            "type": "string",
            "description": ""
          },
          {
            "name": "encryption_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "kms_encryption_config",
                "type": "object",
                "description": ""
              },
              {
                "name": "no_encryption_config",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "prefix",
            "type": "string",
            "description": ""
          },
          {
            "name": "cloud_watch_logging_options",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "log_stream_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "enabled",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "log_group_name",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "buffering_hints",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "interval_in_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "size_in_mbs",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "retry_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "duration_in_seconds",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "vpc_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "subnet_ids",
            "type": "array",
            "description": ""
          },
          {
            "name": "security_group_ids",
            "type": "array",
            "description": ""
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "cloud_watch_logging_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "log_stream_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "log_group_name",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "msk_source_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "authentication_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "connectivity",
            "type": "string",
            "description": ""
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "read_from_timestamp",
        "type": "string",
        "description": ""
      },
      {
        "name": "msk_cluster_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "topic_name",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "direct_put_source_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "throughput_hint_in_mbs",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "splunk_destination_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "h_ec_endpoint",
        "type": "string",
        "description": ""
      },
      {
        "name": "s3_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "error_output_prefix",
            "type": "string",
            "description": ""
          },
          {
            "name": "bucket_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "buffering_hints",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "interval_in_seconds",
                "type": "integer",
                "description": ""
              },
              {
                "name": "size_in_mbs",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "compression_format",
            "type": "string",
            "description": ""
          },
          {
            "name": "encryption_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "kms_encryption_config",
                "type": "object",
                "description": ""
              },
              {
                "name": "no_encryption_config",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "prefix",
            "type": "string",
            "description": ""
          },
          {
            "name": "cloud_watch_logging_options",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "log_stream_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "enabled",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "log_group_name",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "buffering_hints",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "interval_in_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "size_in_mbs",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "h_ec_token",
        "type": "string",
        "description": ""
      },
      {
        "name": "retry_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "duration_in_seconds",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "h_ec_endpoint_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "secrets_manager_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "secret_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "h_ecacknowledgment_timeout_in_seconds",
        "type": "integer",
        "description": ""
      },
      {
        "name": "processing_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "processors",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": ""
              },
              {
                "name": "parameters",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "cloud_watch_logging_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "log_stream_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "log_group_name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "s3_backup_mode",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "extended_s3_destination_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "error_output_prefix",
        "type": "string",
        "description": ""
      },
      {
        "name": "s3_backup_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "error_output_prefix",
            "type": "string",
            "description": ""
          },
          {
            "name": "bucket_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "buffering_hints",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "interval_in_seconds",
                "type": "integer",
                "description": ""
              },
              {
                "name": "size_in_mbs",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "compression_format",
            "type": "string",
            "description": ""
          },
          {
            "name": "encryption_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "kms_encryption_config",
                "type": "object",
                "description": ""
              },
              {
                "name": "no_encryption_config",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "prefix",
            "type": "string",
            "description": ""
          },
          {
            "name": "cloud_watch_logging_options",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "log_stream_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "enabled",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "log_group_name",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "bucket_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "compression_format",
        "type": "string",
        "description": ""
      },
      {
        "name": "data_format_conversion_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "input_format_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "deserializer",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "schema_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "version_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "table_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "database_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "region",
                "type": "string",
                "description": ""
              },
              {
                "name": "catalog_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "output_format_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "serializer",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "encryption_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "kms_encryption_config",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "aws_kms_key_arn",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "no_encryption_config",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "custom_time_zone",
        "type": "string",
        "description": ""
      },
      {
        "name": "dynamic_partitioning_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "retry_options",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "duration_in_seconds",
                "type": "integer",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "prefix",
        "type": "string",
        "description": ""
      },
      {
        "name": "processing_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "processors",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": ""
              },
              {
                "name": "parameters",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "s3_backup_mode",
        "type": "string",
        "description": ""
      },
      {
        "name": "buffering_hints",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "interval_in_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "size_in_mbs",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "file_extension",
        "type": "string",
        "description": ""
      },
      {
        "name": "cloud_watch_logging_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "log_stream_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "log_group_name",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "amazon_open_search_serverless_destination_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "index_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "s3_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "error_output_prefix",
            "type": "string",
            "description": ""
          },
          {
            "name": "bucket_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "buffering_hints",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "interval_in_seconds",
                "type": "integer",
                "description": ""
              },
              {
                "name": "size_in_mbs",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "compression_format",
            "type": "string",
            "description": ""
          },
          {
            "name": "encryption_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "kms_encryption_config",
                "type": "object",
                "description": ""
              },
              {
                "name": "no_encryption_config",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "prefix",
            "type": "string",
            "description": ""
          },
          {
            "name": "cloud_watch_logging_options",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "log_stream_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "enabled",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "log_group_name",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "buffering_hints",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "interval_in_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "size_in_mbs",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "retry_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "duration_in_seconds",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "collection_endpoint",
        "type": "string",
        "description": ""
      },
      {
        "name": "vpc_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "subnet_ids",
            "type": "array",
            "description": ""
          },
          {
            "name": "security_group_ids",
            "type": "array",
            "description": ""
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "processing_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "processors",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": ""
              },
              {
                "name": "parameters",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "cloud_watch_logging_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "log_stream_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "log_group_name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "s3_backup_mode",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "elasticsearch_destination_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "type_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "index_rotation_period",
        "type": "string",
        "description": ""
      },
      {
        "name": "processing_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "processors",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": ""
              },
              {
                "name": "parameters",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "cluster_endpoint",
        "type": "string",
        "description": ""
      },
      {
        "name": "domain_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "s3_backup_mode",
        "type": "string",
        "description": ""
      },
      {
        "name": "index_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "document_id_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "default_document_id_format",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "s3_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "error_output_prefix",
            "type": "string",
            "description": ""
          },
          {
            "name": "bucket_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "buffering_hints",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "interval_in_seconds",
                "type": "integer",
                "description": ""
              },
              {
                "name": "size_in_mbs",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "compression_format",
            "type": "string",
            "description": ""
          },
          {
            "name": "encryption_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "kms_encryption_config",
                "type": "object",
                "description": ""
              },
              {
                "name": "no_encryption_config",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "prefix",
            "type": "string",
            "description": ""
          },
          {
            "name": "cloud_watch_logging_options",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "log_stream_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "enabled",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "log_group_name",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "buffering_hints",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "interval_in_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "size_in_mbs",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "retry_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "duration_in_seconds",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "vpc_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "subnet_ids",
            "type": "array",
            "description": ""
          },
          {
            "name": "security_group_ids",
            "type": "array",
            "description": ""
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "cloud_watch_logging_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "log_stream_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "log_group_name",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "snowflake_destination_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "private_key",
        "type": "string",
        "description": ""
      },
      {
        "name": "user",
        "type": "string",
        "description": ""
      },
      {
        "name": "table",
        "type": "string",
        "description": ""
      },
      {
        "name": "snowflake_vpc_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "private_link_vpce_id",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "data_loading_option",
        "type": "string",
        "description": ""
      },
      {
        "name": "schema",
        "type": "string",
        "description": ""
      },
      {
        "name": "content_column_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "secrets_manager_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "secret_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "snowflake_role_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "snowflake_role",
            "type": "string",
            "description": ""
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          }
        ]
      },
      {
        "name": "processing_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "processors",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": ""
              },
              {
                "name": "parameters",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "account_url",
        "type": "string",
        "description": ""
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "s3_backup_mode",
        "type": "string",
        "description": ""
      },
      {
        "name": "s3_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "error_output_prefix",
            "type": "string",
            "description": ""
          },
          {
            "name": "bucket_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "buffering_hints",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "interval_in_seconds",
                "type": "integer",
                "description": ""
              },
              {
                "name": "size_in_mbs",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "compression_format",
            "type": "string",
            "description": ""
          },
          {
            "name": "encryption_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "kms_encryption_config",
                "type": "object",
                "description": ""
              },
              {
                "name": "no_encryption_config",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "prefix",
            "type": "string",
            "description": ""
          },
          {
            "name": "cloud_watch_logging_options",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "log_stream_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "enabled",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "log_group_name",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "buffering_hints",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "interval_in_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "size_in_mbs",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "meta_data_column_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "database",
        "type": "string",
        "description": ""
      },
      {
        "name": "retry_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "duration_in_seconds",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "key_passphrase",
        "type": "string",
        "description": ""
      },
      {
        "name": "cloud_watch_logging_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "log_stream_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "log_group_name",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "database_source_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "digest",
        "type": "string",
        "description": ""
      },
      {
        "name": "port",
        "type": "integer",
        "description": ""
      },
      {
        "name": "public_certificate",
        "type": "string",
        "description": ""
      },
      {
        "name": "columns",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "exclude",
            "type": "array",
            "description": ""
          },
          {
            "name": "include",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "surrogate_keys",
        "type": "array",
        "description": ""
      },
      {
        "name": "databases",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "exclude",
            "type": "array",
            "description": ""
          },
          {
            "name": "include",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "endpoint",
        "type": "string",
        "description": ""
      },
      {
        "name": "s_sl_mode",
        "type": "string",
        "description": ""
      },
      {
        "name": "snapshot_watermark_table",
        "type": "string",
        "description": ""
      },
      {
        "name": "database_source_authentication_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "secrets_manager_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "secret_arn",
                "type": "string",
                "description": ""
              },
              {
                "name": "enabled",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "tables",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "exclude",
            "type": "array",
            "description": ""
          },
          {
            "name": "include",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "database_source_vpc_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "vpc_endpoint_service_name",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "s3_destination_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "error_output_prefix",
        "type": "string",
        "description": ""
      },
      {
        "name": "bucket_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "buffering_hints",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "interval_in_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "size_in_mbs",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "compression_format",
        "type": "string",
        "description": ""
      },
      {
        "name": "encryption_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "kms_encryption_config",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "aws_kms_key_arn",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "no_encryption_config",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "prefix",
        "type": "string",
        "description": ""
      },
      {
        "name": "cloud_watch_logging_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "log_stream_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "log_group_name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "delivery_stream_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "delivery_stream_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html"><code>AWS::KinesisFirehose::DeliveryStream</code></a>.

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
    <td><code>delivery_streams</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>delivery_streams</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>delivery_streams</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>delivery_streams_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>delivery_streams</code></td>
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

Gets all properties from an individual <code>delivery_stream</code>.
```sql
SELECT
region,
delivery_stream_encryption_configuration_input,
http_endpoint_destination_configuration,
kinesis_stream_source_configuration,
delivery_stream_type,
iceberg_destination_configuration,
redshift_destination_configuration,
amazonopensearchservice_destination_configuration,
msk_source_configuration,
direct_put_source_configuration,
splunk_destination_configuration,
extended_s3_destination_configuration,
amazon_open_search_serverless_destination_configuration,
elasticsearch_destination_configuration,
snowflake_destination_configuration,
database_source_configuration,
s3_destination_configuration,
delivery_stream_name,
arn,
tags
FROM awscc.kinesisfirehose.delivery_streams
WHERE region = 'us-east-1' AND Identifier = '<DeliveryStreamName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>delivery_streams</code> in a region.
```sql
SELECT
region,
delivery_stream_name
FROM awscc.kinesisfirehose.delivery_streams_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>delivery_stream</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.kinesisfirehose.delivery_streams (
 DeliveryStreamEncryptionConfigurationInput,
 HttpEndpointDestinationConfiguration,
 KinesisStreamSourceConfiguration,
 DeliveryStreamType,
 IcebergDestinationConfiguration,
 RedshiftDestinationConfiguration,
 AmazonopensearchserviceDestinationConfiguration,
 MSKSourceConfiguration,
 DirectPutSourceConfiguration,
 SplunkDestinationConfiguration,
 ExtendedS3DestinationConfiguration,
 AmazonOpenSearchServerlessDestinationConfiguration,
 ElasticsearchDestinationConfiguration,
 SnowflakeDestinationConfiguration,
 DatabaseSourceConfiguration,
 S3DestinationConfiguration,
 DeliveryStreamName,
 Tags,
 region
)
SELECT 
'{{ DeliveryStreamEncryptionConfigurationInput }}',
 '{{ HttpEndpointDestinationConfiguration }}',
 '{{ KinesisStreamSourceConfiguration }}',
 '{{ DeliveryStreamType }}',
 '{{ IcebergDestinationConfiguration }}',
 '{{ RedshiftDestinationConfiguration }}',
 '{{ AmazonopensearchserviceDestinationConfiguration }}',
 '{{ MSKSourceConfiguration }}',
 '{{ DirectPutSourceConfiguration }}',
 '{{ SplunkDestinationConfiguration }}',
 '{{ ExtendedS3DestinationConfiguration }}',
 '{{ AmazonOpenSearchServerlessDestinationConfiguration }}',
 '{{ ElasticsearchDestinationConfiguration }}',
 '{{ SnowflakeDestinationConfiguration }}',
 '{{ DatabaseSourceConfiguration }}',
 '{{ S3DestinationConfiguration }}',
 '{{ DeliveryStreamName }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.kinesisfirehose.delivery_streams (
 DeliveryStreamEncryptionConfigurationInput,
 HttpEndpointDestinationConfiguration,
 KinesisStreamSourceConfiguration,
 DeliveryStreamType,
 IcebergDestinationConfiguration,
 RedshiftDestinationConfiguration,
 AmazonopensearchserviceDestinationConfiguration,
 MSKSourceConfiguration,
 DirectPutSourceConfiguration,
 SplunkDestinationConfiguration,
 ExtendedS3DestinationConfiguration,
 AmazonOpenSearchServerlessDestinationConfiguration,
 ElasticsearchDestinationConfiguration,
 SnowflakeDestinationConfiguration,
 DatabaseSourceConfiguration,
 S3DestinationConfiguration,
 DeliveryStreamName,
 Tags,
 region
)
SELECT 
 '{{ DeliveryStreamEncryptionConfigurationInput }}',
 '{{ HttpEndpointDestinationConfiguration }}',
 '{{ KinesisStreamSourceConfiguration }}',
 '{{ DeliveryStreamType }}',
 '{{ IcebergDestinationConfiguration }}',
 '{{ RedshiftDestinationConfiguration }}',
 '{{ AmazonopensearchserviceDestinationConfiguration }}',
 '{{ MSKSourceConfiguration }}',
 '{{ DirectPutSourceConfiguration }}',
 '{{ SplunkDestinationConfiguration }}',
 '{{ ExtendedS3DestinationConfiguration }}',
 '{{ AmazonOpenSearchServerlessDestinationConfiguration }}',
 '{{ ElasticsearchDestinationConfiguration }}',
 '{{ SnowflakeDestinationConfiguration }}',
 '{{ DatabaseSourceConfiguration }}',
 '{{ S3DestinationConfiguration }}',
 '{{ DeliveryStreamName }}',
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
  - name: delivery_stream
    props:
      - name: DeliveryStreamEncryptionConfigurationInput
        value:
          KeyType: '{{ KeyType }}'
          KeyARN: '{{ KeyARN }}'
      - name: HttpEndpointDestinationConfiguration
        value:
          RequestConfiguration:
            CommonAttributes:
              - AttributeValue: '{{ AttributeValue }}'
                AttributeName: '{{ AttributeName }}'
            ContentEncoding: '{{ ContentEncoding }}'
          S3Configuration:
            ErrorOutputPrefix: '{{ ErrorOutputPrefix }}'
            BucketARN: '{{ BucketARN }}'
            BufferingHints:
              IntervalInSeconds: '{{ IntervalInSeconds }}'
              SizeInMBs: '{{ SizeInMBs }}'
            CompressionFormat: '{{ CompressionFormat }}'
            EncryptionConfiguration:
              KMSEncryptionConfig:
                AWSKMSKeyARN: '{{ AWSKMSKeyARN }}'
              NoEncryptionConfig: '{{ NoEncryptionConfig }}'
            Prefix: '{{ Prefix }}'
            CloudWatchLoggingOptions:
              LogStreamName: '{{ LogStreamName }}'
              Enabled: '{{ Enabled }}'
              LogGroupName: '{{ LogGroupName }}'
            RoleARN: '{{ RoleARN }}'
          BufferingHints: null
          RetryOptions:
            DurationInSeconds: '{{ DurationInSeconds }}'
          SecretsManagerConfiguration:
            SecretARN: '{{ SecretARN }}'
            Enabled: '{{ Enabled }}'
            RoleARN: '{{ RoleARN }}'
          EndpointConfiguration:
            AccessKey: '{{ AccessKey }}'
            Url: '{{ Url }}'
            Name: '{{ Name }}'
          ProcessingConfiguration:
            Enabled: '{{ Enabled }}'
            Processors:
              - Type: '{{ Type }}'
                Parameters:
                  - ParameterValue: '{{ ParameterValue }}'
                    ParameterName: '{{ ParameterName }}'
          RoleARN: '{{ RoleARN }}'
          CloudWatchLoggingOptions: null
          S3BackupMode: '{{ S3BackupMode }}'
      - name: KinesisStreamSourceConfiguration
        value:
          KinesisStreamARN: '{{ KinesisStreamARN }}'
          RoleARN: '{{ RoleARN }}'
      - name: DeliveryStreamType
        value: '{{ DeliveryStreamType }}'
      - name: IcebergDestinationConfiguration
        value:
          CatalogConfiguration:
            CatalogArn: '{{ CatalogArn }}'
            WarehouseLocation: '{{ WarehouseLocation }}'
          S3Configuration: null
          DestinationTableConfigurationList:
            - DestinationDatabaseName: '{{ DestinationDatabaseName }}'
              S3ErrorOutputPrefix: '{{ S3ErrorOutputPrefix }}'
              DestinationTableName: '{{ DestinationTableName }}'
              UniqueKeys:
                - '{{ UniqueKeys[0] }}'
              PartitionSpec:
                Identity:
                  - SourceName: '{{ SourceName }}'
          BufferingHints: null
          TableCreationConfiguration:
            Enabled: '{{ Enabled }}'
          RetryOptions: null
          s3BackupMode: '{{ s3BackupMode }}'
          ProcessingConfiguration: null
          SchemaEvolutionConfiguration:
            Enabled: '{{ Enabled }}'
          AppendOnly: '{{ AppendOnly }}'
          CloudWatchLoggingOptions: null
          RoleARN: '{{ RoleARN }}'
      - name: RedshiftDestinationConfiguration
        value:
          S3BackupConfiguration: null
          S3Configuration: null
          Username: '{{ Username }}'
          CopyCommand:
            DataTableName: '{{ DataTableName }}'
            CopyOptions: '{{ CopyOptions }}'
            DataTableColumns: '{{ DataTableColumns }}'
          RetryOptions:
            DurationInSeconds: '{{ DurationInSeconds }}'
          SecretsManagerConfiguration: null
          ProcessingConfiguration: null
          CloudWatchLoggingOptions: null
          ClusterJDBCURL: '{{ ClusterJDBCURL }}'
          RoleARN: '{{ RoleARN }}'
          Password: '{{ Password }}'
          S3BackupMode: '{{ S3BackupMode }}'
      - name: AmazonopensearchserviceDestinationConfiguration
        value:
          TypeName: '{{ TypeName }}'
          IndexRotationPeriod: '{{ IndexRotationPeriod }}'
          ProcessingConfiguration: null
          ClusterEndpoint: '{{ ClusterEndpoint }}'
          DomainARN: '{{ DomainARN }}'
          RoleARN: '{{ RoleARN }}'
          S3BackupMode: '{{ S3BackupMode }}'
          IndexName: '{{ IndexName }}'
          DocumentIdOptions:
            DefaultDocumentIdFormat: '{{ DefaultDocumentIdFormat }}'
          S3Configuration: null
          BufferingHints:
            IntervalInSeconds: '{{ IntervalInSeconds }}'
            SizeInMBs: '{{ SizeInMBs }}'
          RetryOptions:
            DurationInSeconds: '{{ DurationInSeconds }}'
          VpcConfiguration:
            SubnetIds:
              - '{{ SubnetIds[0] }}'
            SecurityGroupIds:
              - '{{ SecurityGroupIds[0] }}'
            RoleARN: '{{ RoleARN }}'
          CloudWatchLoggingOptions: null
      - name: MSKSourceConfiguration
        value:
          AuthenticationConfiguration:
            Connectivity: '{{ Connectivity }}'
            RoleARN: '{{ RoleARN }}'
          ReadFromTimestamp: '{{ ReadFromTimestamp }}'
          MSKClusterARN: '{{ MSKClusterARN }}'
          TopicName: '{{ TopicName }}'
      - name: DirectPutSourceConfiguration
        value:
          ThroughputHintInMBs: '{{ ThroughputHintInMBs }}'
      - name: SplunkDestinationConfiguration
        value:
          HECEndpoint: '{{ HECEndpoint }}'
          S3Configuration: null
          BufferingHints:
            IntervalInSeconds: '{{ IntervalInSeconds }}'
            SizeInMBs: '{{ SizeInMBs }}'
          HECToken: '{{ HECToken }}'
          RetryOptions:
            DurationInSeconds: '{{ DurationInSeconds }}'
          HECEndpointType: '{{ HECEndpointType }}'
          SecretsManagerConfiguration: null
          HECAcknowledgmentTimeoutInSeconds: '{{ HECAcknowledgmentTimeoutInSeconds }}'
          ProcessingConfiguration: null
          CloudWatchLoggingOptions: null
          S3BackupMode: '{{ S3BackupMode }}'
      - name: ExtendedS3DestinationConfiguration
        value:
          ErrorOutputPrefix: '{{ ErrorOutputPrefix }}'
          S3BackupConfiguration: null
          BucketARN: '{{ BucketARN }}'
          CompressionFormat: '{{ CompressionFormat }}'
          DataFormatConversionConfiguration:
            InputFormatConfiguration:
              Deserializer:
                HiveJsonSerDe:
                  TimestampFormats:
                    - '{{ TimestampFormats[0] }}'
                OpenXJsonSerDe:
                  ConvertDotsInJsonKeysToUnderscores: '{{ ConvertDotsInJsonKeysToUnderscores }}'
                  ColumnToJsonKeyMappings: {}
                  CaseInsensitive: '{{ CaseInsensitive }}'
            Enabled: '{{ Enabled }}'
            SchemaConfiguration:
              VersionId: '{{ VersionId }}'
              TableName: '{{ TableName }}'
              DatabaseName: '{{ DatabaseName }}'
              Region: '{{ Region }}'
              CatalogId: '{{ CatalogId }}'
              RoleARN: '{{ RoleARN }}'
            OutputFormatConfiguration:
              Serializer:
                OrcSerDe:
                  PaddingTolerance: null
                  Compression: '{{ Compression }}'
                  StripeSizeBytes: '{{ StripeSizeBytes }}'
                  BloomFilterColumns:
                    - '{{ BloomFilterColumns[0] }}'
                  BloomFilterFalsePositiveProbability: null
                  EnablePadding: '{{ EnablePadding }}'
                  FormatVersion: '{{ FormatVersion }}'
                  RowIndexStride: '{{ RowIndexStride }}'
                  BlockSizeBytes: '{{ BlockSizeBytes }}'
                  DictionaryKeyThreshold: null
                ParquetSerDe:
                  Compression: '{{ Compression }}'
                  BlockSizeBytes: '{{ BlockSizeBytes }}'
                  EnableDictionaryCompression: '{{ EnableDictionaryCompression }}'
                  PageSizeBytes: '{{ PageSizeBytes }}'
                  MaxPaddingBytes: '{{ MaxPaddingBytes }}'
                  WriterVersion: '{{ WriterVersion }}'
          EncryptionConfiguration: null
          CustomTimeZone: '{{ CustomTimeZone }}'
          DynamicPartitioningConfiguration:
            Enabled: '{{ Enabled }}'
            RetryOptions: null
          Prefix: '{{ Prefix }}'
          ProcessingConfiguration: null
          RoleARN: '{{ RoleARN }}'
          S3BackupMode: '{{ S3BackupMode }}'
          BufferingHints: null
          FileExtension: '{{ FileExtension }}'
          CloudWatchLoggingOptions: null
      - name: AmazonOpenSearchServerlessDestinationConfiguration
        value:
          IndexName: '{{ IndexName }}'
          S3Configuration: null
          BufferingHints:
            IntervalInSeconds: '{{ IntervalInSeconds }}'
            SizeInMBs: '{{ SizeInMBs }}'
          RetryOptions:
            DurationInSeconds: '{{ DurationInSeconds }}'
          CollectionEndpoint: '{{ CollectionEndpoint }}'
          VpcConfiguration: null
          ProcessingConfiguration: null
          CloudWatchLoggingOptions: null
          RoleARN: '{{ RoleARN }}'
          S3BackupMode: '{{ S3BackupMode }}'
      - name: ElasticsearchDestinationConfiguration
        value:
          TypeName: '{{ TypeName }}'
          IndexRotationPeriod: '{{ IndexRotationPeriod }}'
          ProcessingConfiguration: null
          ClusterEndpoint: '{{ ClusterEndpoint }}'
          DomainARN: '{{ DomainARN }}'
          RoleARN: '{{ RoleARN }}'
          S3BackupMode: '{{ S3BackupMode }}'
          IndexName: '{{ IndexName }}'
          DocumentIdOptions: null
          S3Configuration: null
          BufferingHints:
            IntervalInSeconds: '{{ IntervalInSeconds }}'
            SizeInMBs: '{{ SizeInMBs }}'
          RetryOptions:
            DurationInSeconds: '{{ DurationInSeconds }}'
          VpcConfiguration: null
          CloudWatchLoggingOptions: null
      - name: SnowflakeDestinationConfiguration
        value:
          PrivateKey: '{{ PrivateKey }}'
          User: '{{ User }}'
          Table: '{{ Table }}'
          SnowflakeVpcConfiguration:
            PrivateLinkVpceId: '{{ PrivateLinkVpceId }}'
          DataLoadingOption: '{{ DataLoadingOption }}'
          Schema: '{{ Schema }}'
          ContentColumnName: '{{ ContentColumnName }}'
          SecretsManagerConfiguration: null
          SnowflakeRoleConfiguration:
            SnowflakeRole: '{{ SnowflakeRole }}'
            Enabled: '{{ Enabled }}'
          ProcessingConfiguration: null
          AccountUrl: '{{ AccountUrl }}'
          RoleARN: '{{ RoleARN }}'
          S3BackupMode: '{{ S3BackupMode }}'
          S3Configuration: null
          BufferingHints:
            IntervalInSeconds: '{{ IntervalInSeconds }}'
            SizeInMBs: '{{ SizeInMBs }}'
          MetaDataColumnName: '{{ MetaDataColumnName }}'
          Database: '{{ Database }}'
          RetryOptions:
            DurationInSeconds: '{{ DurationInSeconds }}'
          KeyPassphrase: '{{ KeyPassphrase }}'
          CloudWatchLoggingOptions: null
      - name: DatabaseSourceConfiguration
        value:
          Digest: '{{ Digest }}'
          Port: '{{ Port }}'
          PublicCertificate: '{{ PublicCertificate }}'
          Columns:
            Exclude:
              - '{{ Exclude[0] }}'
            Include:
              - null
          Type: '{{ Type }}'
          SurrogateKeys:
            - '{{ SurrogateKeys[0] }}'
          Databases:
            Exclude:
              - '{{ Exclude[0] }}'
            Include:
              - null
          Endpoint: '{{ Endpoint }}'
          SSLMode: '{{ SSLMode }}'
          SnapshotWatermarkTable: '{{ SnapshotWatermarkTable }}'
          DatabaseSourceAuthenticationConfiguration:
            SecretsManagerConfiguration: null
          Tables:
            Exclude:
              - null
            Include:
              - null
          DatabaseSourceVPCConfiguration:
            VpcEndpointServiceName: '{{ VpcEndpointServiceName }}'
      - name: S3DestinationConfiguration
        value: null
      - name: DeliveryStreamName
        value: '{{ DeliveryStreamName }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.kinesisfirehose.delivery_streams
SET PatchDocument = string('{{ {
    "DeliveryStreamEncryptionConfigurationInput": delivery_stream_encryption_configuration_input,
    "HttpEndpointDestinationConfiguration": http_endpoint_destination_configuration,
    "RedshiftDestinationConfiguration": redshift_destination_configuration,
    "SplunkDestinationConfiguration": splunk_destination_configuration,
    "ExtendedS3DestinationConfiguration": extended_s3_destination_configuration,
    "S3DestinationConfiguration": s3_destination_configuration,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<DeliveryStreamName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.kinesisfirehose.delivery_streams
WHERE Identifier = '<DeliveryStreamName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>delivery_streams</code> resource, the following permissions are required:

### Read
```json
firehose:DescribeDeliveryStream,
firehose:ListTagsForDeliveryStream
```

### Create
```json
firehose:CreateDeliveryStream,
firehose:DescribeDeliveryStream,
iam:GetRole,
iam:PassRole,
kms:CreateGrant,
kms:DescribeKey,
firehose:TagDeliveryStream
```

### Update
```json
firehose:UpdateDestination,
firehose:DescribeDeliveryStream,
firehose:StartDeliveryStreamEncryption,
firehose:StopDeliveryStreamEncryption,
firehose:ListTagsForDeliveryStream,
firehose:TagDeliveryStream,
firehose:UntagDeliveryStream,
kms:CreateGrant,
kms:RevokeGrant,
kms:DescribeKey,
iam:PassRole
```

### List
```json
firehose:ListDeliveryStreams
```

### Delete
```json
firehose:DeleteDeliveryStream,
firehose:DescribeDeliveryStream,
kms:RevokeGrant,
kms:DescribeKey
```
