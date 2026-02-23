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
WHERE region = 'us-east-1' AND Identifier = '{{ delivery_stream_name }}';
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
'{{ delivery_stream_encryption_configuration_input }}',
 '{{ http_endpoint_destination_configuration }}',
 '{{ kinesis_stream_source_configuration }}',
 '{{ delivery_stream_type }}',
 '{{ iceberg_destination_configuration }}',
 '{{ redshift_destination_configuration }}',
 '{{ amazonopensearchservice_destination_configuration }}',
 '{{ msk_source_configuration }}',
 '{{ direct_put_source_configuration }}',
 '{{ splunk_destination_configuration }}',
 '{{ extended_s3_destination_configuration }}',
 '{{ amazon_open_search_serverless_destination_configuration }}',
 '{{ elasticsearch_destination_configuration }}',
 '{{ snowflake_destination_configuration }}',
 '{{ database_source_configuration }}',
 '{{ s3_destination_configuration }}',
 '{{ delivery_stream_name }}',
 '{{ tags }}',
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
 '{{ delivery_stream_encryption_configuration_input }}',
 '{{ http_endpoint_destination_configuration }}',
 '{{ kinesis_stream_source_configuration }}',
 '{{ delivery_stream_type }}',
 '{{ iceberg_destination_configuration }}',
 '{{ redshift_destination_configuration }}',
 '{{ amazonopensearchservice_destination_configuration }}',
 '{{ msk_source_configuration }}',
 '{{ direct_put_source_configuration }}',
 '{{ splunk_destination_configuration }}',
 '{{ extended_s3_destination_configuration }}',
 '{{ amazon_open_search_serverless_destination_configuration }}',
 '{{ elasticsearch_destination_configuration }}',
 '{{ snowflake_destination_configuration }}',
 '{{ database_source_configuration }}',
 '{{ s3_destination_configuration }}',
 '{{ delivery_stream_name }}',
 '{{ tags }}',
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
      - name: delivery_stream_encryption_configuration_input
        value:
          key_type: '{{ key_type }}'
          key_arn: '{{ key_arn }}'
      - name: http_endpoint_destination_configuration
        value:
          request_configuration:
            common_attributes:
              - attribute_value: '{{ attribute_value }}'
                attribute_name: '{{ attribute_name }}'
            content_encoding: '{{ content_encoding }}'
          s3_configuration:
            error_output_prefix: '{{ error_output_prefix }}'
            bucket_arn: '{{ bucket_arn }}'
            buffering_hints:
              interval_in_seconds: '{{ interval_in_seconds }}'
              size_in_mbs: '{{ size_in_mbs }}'
            compression_format: '{{ compression_format }}'
            encryption_configuration:
              kms_encryption_config:
                aws_kms_key_arn: '{{ aws_kms_key_arn }}'
              no_encryption_config: '{{ no_encryption_config }}'
            prefix: '{{ prefix }}'
            cloud_watch_logging_options:
              log_stream_name: '{{ log_stream_name }}'
              enabled: '{{ enabled }}'
              log_group_name: '{{ log_group_name }}'
            role_arn: '{{ role_arn }}'
          buffering_hints: null
          retry_options:
            duration_in_seconds: '{{ duration_in_seconds }}'
          secrets_manager_configuration:
            secret_arn: '{{ secret_arn }}'
            enabled: '{{ enabled }}'
            role_arn: '{{ role_arn }}'
          endpoint_configuration:
            access_key: '{{ access_key }}'
            url: '{{ url }}'
            name: '{{ name }}'
          processing_configuration:
            enabled: '{{ enabled }}'
            processors:
              - type: '{{ type }}'
                parameters:
                  - parameter_value: '{{ parameter_value }}'
                    parameter_name: '{{ parameter_name }}'
          role_arn: '{{ role_arn }}'
          cloud_watch_logging_options: null
          s3_backup_mode: '{{ s3_backup_mode }}'
      - name: kinesis_stream_source_configuration
        value:
          kinesis_stream_arn: '{{ kinesis_stream_arn }}'
          role_arn: '{{ role_arn }}'
      - name: delivery_stream_type
        value: '{{ delivery_stream_type }}'
      - name: iceberg_destination_configuration
        value:
          catalog_configuration:
            catalog_arn: '{{ catalog_arn }}'
            warehouse_location: '{{ warehouse_location }}'
          s3_configuration: null
          destination_table_configuration_list:
            - destination_database_name: '{{ destination_database_name }}'
              s3_error_output_prefix: '{{ s3_error_output_prefix }}'
              destination_table_name: '{{ destination_table_name }}'
              unique_keys:
                - '{{ unique_keys[0] }}'
              partition_spec:
                identity:
                  - source_name: '{{ source_name }}'
          buffering_hints: null
          table_creation_configuration:
            enabled: '{{ enabled }}'
          retry_options: null
          s3_backup_mode: '{{ s3_backup_mode }}'
          processing_configuration: null
          schema_evolution_configuration:
            enabled: '{{ enabled }}'
          append_only: '{{ append_only }}'
          cloud_watch_logging_options: null
          role_arn: '{{ role_arn }}'
      - name: redshift_destination_configuration
        value:
          s3_backup_configuration: null
          s3_configuration: null
          username: '{{ username }}'
          copy_command:
            data_table_name: '{{ data_table_name }}'
            copy_options: '{{ copy_options }}'
            data_table_columns: '{{ data_table_columns }}'
          retry_options:
            duration_in_seconds: '{{ duration_in_seconds }}'
          secrets_manager_configuration: null
          processing_configuration: null
          cloud_watch_logging_options: null
          cluster_jdb_curl: '{{ cluster_jdb_curl }}'
          role_arn: '{{ role_arn }}'
          password: '{{ password }}'
          s3_backup_mode: '{{ s3_backup_mode }}'
      - name: amazonopensearchservice_destination_configuration
        value:
          type_name: '{{ type_name }}'
          index_rotation_period: '{{ index_rotation_period }}'
          processing_configuration: null
          cluster_endpoint: '{{ cluster_endpoint }}'
          domain_arn: '{{ domain_arn }}'
          role_arn: '{{ role_arn }}'
          s3_backup_mode: '{{ s3_backup_mode }}'
          index_name: '{{ index_name }}'
          document_id_options:
            default_document_id_format: '{{ default_document_id_format }}'
          s3_configuration: null
          buffering_hints:
            interval_in_seconds: '{{ interval_in_seconds }}'
            size_in_mbs: '{{ size_in_mbs }}'
          retry_options:
            duration_in_seconds: '{{ duration_in_seconds }}'
          vpc_configuration:
            subnet_ids:
              - '{{ subnet_ids[0] }}'
            security_group_ids:
              - '{{ security_group_ids[0] }}'
            role_arn: '{{ role_arn }}'
          cloud_watch_logging_options: null
      - name: msk_source_configuration
        value:
          authentication_configuration:
            connectivity: '{{ connectivity }}'
            role_arn: '{{ role_arn }}'
          read_from_timestamp: '{{ read_from_timestamp }}'
          msk_cluster_arn: '{{ msk_cluster_arn }}'
          topic_name: '{{ topic_name }}'
      - name: direct_put_source_configuration
        value:
          throughput_hint_in_mbs: '{{ throughput_hint_in_mbs }}'
      - name: splunk_destination_configuration
        value:
          h_ec_endpoint: '{{ h_ec_endpoint }}'
          s3_configuration: null
          buffering_hints:
            interval_in_seconds: '{{ interval_in_seconds }}'
            size_in_mbs: '{{ size_in_mbs }}'
          h_ec_token: '{{ h_ec_token }}'
          retry_options:
            duration_in_seconds: '{{ duration_in_seconds }}'
          h_ec_endpoint_type: '{{ h_ec_endpoint_type }}'
          secrets_manager_configuration: null
          h_ecacknowledgment_timeout_in_seconds: '{{ h_ecacknowledgment_timeout_in_seconds }}'
          processing_configuration: null
          cloud_watch_logging_options: null
          s3_backup_mode: '{{ s3_backup_mode }}'
      - name: extended_s3_destination_configuration
        value:
          error_output_prefix: '{{ error_output_prefix }}'
          s3_backup_configuration: null
          bucket_arn: '{{ bucket_arn }}'
          compression_format: '{{ compression_format }}'
          data_format_conversion_configuration:
            input_format_configuration:
              deserializer:
                hive_json_ser_de:
                  timestamp_formats:
                    - '{{ timestamp_formats[0] }}'
                open_xjson_ser_de:
                  convert_dots_in_json_keys_to_underscores: '{{ convert_dots_in_json_keys_to_underscores }}'
                  column_to_json_key_mappings: {}
                  case_insensitive: '{{ case_insensitive }}'
            enabled: '{{ enabled }}'
            schema_configuration:
              version_id: '{{ version_id }}'
              table_name: '{{ table_name }}'
              database_name: '{{ database_name }}'
              region: '{{ region }}'
              catalog_id: '{{ catalog_id }}'
              role_arn: '{{ role_arn }}'
            output_format_configuration:
              serializer:
                orc_ser_de:
                  padding_tolerance: null
                  compression: '{{ compression }}'
                  stripe_size_bytes: '{{ stripe_size_bytes }}'
                  bloom_filter_columns:
                    - '{{ bloom_filter_columns[0] }}'
                  bloom_filter_false_positive_probability: null
                  enable_padding: '{{ enable_padding }}'
                  format_version: '{{ format_version }}'
                  row_index_stride: '{{ row_index_stride }}'
                  block_size_bytes: '{{ block_size_bytes }}'
                  dictionary_key_threshold: null
                parquet_ser_de:
                  compression: '{{ compression }}'
                  block_size_bytes: '{{ block_size_bytes }}'
                  enable_dictionary_compression: '{{ enable_dictionary_compression }}'
                  page_size_bytes: '{{ page_size_bytes }}'
                  max_padding_bytes: '{{ max_padding_bytes }}'
                  writer_version: '{{ writer_version }}'
          encryption_configuration: null
          custom_time_zone: '{{ custom_time_zone }}'
          dynamic_partitioning_configuration:
            enabled: '{{ enabled }}'
            retry_options: null
          prefix: '{{ prefix }}'
          processing_configuration: null
          role_arn: '{{ role_arn }}'
          s3_backup_mode: '{{ s3_backup_mode }}'
          buffering_hints: null
          file_extension: '{{ file_extension }}'
          cloud_watch_logging_options: null
      - name: amazon_open_search_serverless_destination_configuration
        value:
          index_name: '{{ index_name }}'
          s3_configuration: null
          buffering_hints:
            interval_in_seconds: '{{ interval_in_seconds }}'
            size_in_mbs: '{{ size_in_mbs }}'
          retry_options:
            duration_in_seconds: '{{ duration_in_seconds }}'
          collection_endpoint: '{{ collection_endpoint }}'
          vpc_configuration: null
          processing_configuration: null
          cloud_watch_logging_options: null
          role_arn: '{{ role_arn }}'
          s3_backup_mode: '{{ s3_backup_mode }}'
      - name: elasticsearch_destination_configuration
        value:
          type_name: '{{ type_name }}'
          index_rotation_period: '{{ index_rotation_period }}'
          processing_configuration: null
          cluster_endpoint: '{{ cluster_endpoint }}'
          domain_arn: '{{ domain_arn }}'
          role_arn: '{{ role_arn }}'
          s3_backup_mode: '{{ s3_backup_mode }}'
          index_name: '{{ index_name }}'
          document_id_options: null
          s3_configuration: null
          buffering_hints:
            interval_in_seconds: '{{ interval_in_seconds }}'
            size_in_mbs: '{{ size_in_mbs }}'
          retry_options:
            duration_in_seconds: '{{ duration_in_seconds }}'
          vpc_configuration: null
          cloud_watch_logging_options: null
      - name: snowflake_destination_configuration
        value:
          private_key: '{{ private_key }}'
          user: '{{ user }}'
          table: '{{ table }}'
          snowflake_vpc_configuration:
            private_link_vpce_id: '{{ private_link_vpce_id }}'
          data_loading_option: '{{ data_loading_option }}'
          schema: '{{ schema }}'
          content_column_name: '{{ content_column_name }}'
          secrets_manager_configuration: null
          snowflake_role_configuration:
            snowflake_role: '{{ snowflake_role }}'
            enabled: '{{ enabled }}'
          processing_configuration: null
          account_url: '{{ account_url }}'
          role_arn: '{{ role_arn }}'
          s3_backup_mode: '{{ s3_backup_mode }}'
          s3_configuration: null
          buffering_hints:
            interval_in_seconds: '{{ interval_in_seconds }}'
            size_in_mbs: '{{ size_in_mbs }}'
          meta_data_column_name: '{{ meta_data_column_name }}'
          database: '{{ database }}'
          retry_options:
            duration_in_seconds: '{{ duration_in_seconds }}'
          key_passphrase: '{{ key_passphrase }}'
          cloud_watch_logging_options: null
      - name: database_source_configuration
        value:
          digest: '{{ digest }}'
          port: '{{ port }}'
          public_certificate: '{{ public_certificate }}'
          columns:
            exclude:
              - '{{ exclude[0] }}'
            include:
              - null
          type: '{{ type }}'
          surrogate_keys:
            - '{{ surrogate_keys[0] }}'
          databases:
            exclude:
              - '{{ exclude[0] }}'
            include:
              - null
          endpoint: '{{ endpoint }}'
          s_sl_mode: '{{ s_sl_mode }}'
          snapshot_watermark_table: '{{ snapshot_watermark_table }}'
          database_source_authentication_configuration:
            secrets_manager_configuration: null
          tables:
            exclude:
              - null
            include:
              - null
          database_source_vpc_configuration:
            vpc_endpoint_service_name: '{{ vpc_endpoint_service_name }}'
      - name: s3_destination_configuration
        value: null
      - name: delivery_stream_name
        value: '{{ delivery_stream_name }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>delivery_stream</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
AND Identifier = '{{ delivery_stream_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.kinesisfirehose.delivery_streams
WHERE Identifier = '{{ delivery_stream_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>delivery_streams</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
firehose:DescribeDeliveryStream,
firehose:ListTagsForDeliveryStream
```

</TabItem>
<TabItem value="create">

```json
firehose:CreateDeliveryStream,
firehose:DescribeDeliveryStream,
iam:GetRole,
iam:PassRole,
kms:CreateGrant,
kms:DescribeKey,
firehose:TagDeliveryStream
```

</TabItem>
<TabItem value="update">

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

</TabItem>
<TabItem value="list">

```json
firehose:ListDeliveryStreams
```

</TabItem>
<TabItem value="delete">

```json
firehose:DeleteDeliveryStream,
firehose:DescribeDeliveryStream,
kms:RevokeGrant,
kms:DescribeKey
```

</TabItem>
</Tabs>