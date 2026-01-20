---
title: flows
hide_title: false
hide_table_of_contents: false
keywords:
  - flows
  - appflow
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

Creates, updates, deletes or gets a <code>flow</code> resource or lists <code>flows</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>flows</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::AppFlow::Flow.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.appflow.flows" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "flow_arn",
    "type": "string",
    "description": "ARN identifier of the flow."
  },
  {
    "name": "flow_name",
    "type": "string",
    "description": "Name of the flow."
  },
  {
    "name": "description",
    "type": "string",
    "description": "Description of the flow."
  },
  {
    "name": "kms_arn",
    "type": "string",
    "description": "The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key."
  },
  {
    "name": "trigger_config",
    "type": "object",
    "description": "Trigger settings of the flow.",
    "children": [
      {
        "name": "trigger_type",
        "type": "string",
        "description": "Trigger type of the flow"
      },
      {
        "name": "trigger_properties",
        "type": "object",
        "description": "Details required based on the type of trigger",
        "children": [
          {
            "name": "schedule_expression",
            "type": "string",
            "description": ""
          },
          {
            "name": "data_pull_mode",
            "type": "string",
            "description": ""
          },
          {
            "name": "schedule_start_time",
            "type": "number",
            "description": ""
          },
          {
            "name": "schedule_end_time",
            "type": "number",
            "description": ""
          },
          {
            "name": "first_execution_from",
            "type": "number",
            "description": ""
          },
          {
            "name": "time_zone",
            "type": "string",
            "description": ""
          },
          {
            "name": "schedule_offset",
            "type": "number",
            "description": ""
          },
          {
            "name": "flow_error_deactivation_threshold",
            "type": "integer",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "flow_status",
    "type": "string",
    "description": "Flow activation status for Scheduled- and Event-triggered flows"
  },
  {
    "name": "source_flow_config",
    "type": "object",
    "description": "Configurations of Source connector of the flow.",
    "children": [
      {
        "name": "connector_type",
        "type": "string",
        "description": "Type of source connector"
      },
      {
        "name": "api_version",
        "type": "string",
        "description": "The API version that the destination connector uses."
      },
      {
        "name": "connector_profile_name",
        "type": "string",
        "description": "Name of source connector profile"
      },
      {
        "name": "source_connector_properties",
        "type": "object",
        "description": "Source connector details required to query a connector",
        "children": [
          {
            "name": "amplitude",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "object",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "datadog",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "object",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "dynatrace",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "object",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "google_analytics",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "object",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "infor_nexus",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "object",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "marketo",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "object",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "s3",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "bucket_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "bucket_prefix",
                "type": "string",
                "description": ""
              },
              {
                "name": "s3_input_format_config",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "s_ap_odata",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "object_path",
                "type": "string",
                "description": ""
              },
              {
                "name": "parallelism_config",
                "type": "object",
                "description": "SAP Source connector parallelism factor"
              },
              {
                "name": "pagination_config",
                "type": "object",
                "description": "SAP Source connector page size"
              }
            ]
          },
          {
            "name": "salesforce",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "object",
                "type": "string",
                "description": ""
              },
              {
                "name": "enable_dynamic_field_update",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "include_deleted_records",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "data_transfer_api",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "pardot",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "object",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "service_now",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "object",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "singular",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "object",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "slack",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "object",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "trendmicro",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "object",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "veeva",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "object",
                "type": "string",
                "description": ""
              },
              {
                "name": "document_type",
                "type": "string",
                "description": ""
              },
              {
                "name": "include_source_files",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "include_renditions",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "include_all_versions",
                "type": "boolean",
                "description": ""
              }
            ]
          },
          {
            "name": "zendesk",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "object",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "custom_connector",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "entity_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "custom_properties",
                "type": "object",
                "description": "A map for properties for custom connector."
              },
              {
                "name": "data_transfer_api",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "incremental_pull_config",
        "type": "object",
        "description": "Configuration for scheduled incremental data pull",
        "children": [
          {
            "name": "datetime_type_field_name",
            "type": "string",
            "description": "Name of the datetime/timestamp data type field to be used for importing incremental records from the source"
          }
        ]
      }
    ]
  },
  {
    "name": "destination_flow_config_list",
    "type": "array",
    "description": "List of Destination connectors of the flow.",
    "children": [
      {
        "name": "connector_type",
        "type": "string",
        "description": "Destination connector type"
      },
      {
        "name": "api_version",
        "type": "string",
        "description": "The API version that the destination connector uses."
      },
      {
        "name": "connector_profile_name",
        "type": "string",
        "description": "Name of destination connector profile"
      },
      {
        "name": "destination_connector_properties",
        "type": "object",
        "description": "Destination connector details",
        "children": [
          {
            "name": "redshift",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "object",
                "type": "string",
                "description": ""
              },
              {
                "name": "intermediate_bucket_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "bucket_prefix",
                "type": "string",
                "description": ""
              },
              {
                "name": "error_handling_config",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "s3",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "bucket_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "bucket_prefix",
                "type": "string",
                "description": ""
              },
              {
                "name": "s3_output_format_config",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "salesforce",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "object",
                "type": "string",
                "description": ""
              },
              {
                "name": "error_handling_config",
                "type": "object",
                "description": ""
              },
              {
                "name": "id_field_names",
                "type": "array",
                "description": "List of fields used as ID when performing a write operation."
              },
              {
                "name": "write_operation_type",
                "type": "string",
                "description": ""
              },
              {
                "name": "data_transfer_api",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "snowflake",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "object",
                "type": "string",
                "description": ""
              },
              {
                "name": "intermediate_bucket_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "bucket_prefix",
                "type": "string",
                "description": ""
              },
              {
                "name": "error_handling_config",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "event_bridge",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "object",
                "type": "string",
                "description": ""
              },
              {
                "name": "error_handling_config",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "upsolver",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "bucket_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "bucket_prefix",
                "type": "string",
                "description": ""
              },
              {
                "name": "s3_output_format_config",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "lookout_metrics",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "object",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "marketo",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "object",
                "type": "string",
                "description": ""
              },
              {
                "name": "error_handling_config",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "zendesk",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "object",
                "type": "string",
                "description": ""
              },
              {
                "name": "error_handling_config",
                "type": "object",
                "description": ""
              },
              {
                "name": "id_field_names",
                "type": "array",
                "description": "List of fields used as ID when performing a write operation."
              },
              {
                "name": "write_operation_type",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "custom_connector",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "entity_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "error_handling_config",
                "type": "object",
                "description": ""
              },
              {
                "name": "write_operation_type",
                "type": "string",
                "description": ""
              },
              {
                "name": "id_field_names",
                "type": "array",
                "description": "List of fields used as ID when performing a write operation."
              },
              {
                "name": "custom_properties",
                "type": "object",
                "description": "A map for properties for custom connector."
              }
            ]
          },
          {
            "name": "s_ap_odata",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "object_path",
                "type": "string",
                "description": ""
              },
              {
                "name": "error_handling_config",
                "type": "object",
                "description": ""
              },
              {
                "name": "success_response_handling_config",
                "type": "object",
                "description": ""
              },
              {
                "name": "id_field_names",
                "type": "array",
                "description": "List of fields used as ID when performing a write operation."
              },
              {
                "name": "write_operation_type",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "tasks",
    "type": "array",
    "description": "List of tasks for the flow.",
    "children": [
      {
        "name": "source_fields",
        "type": "array",
        "description": "Source fields on which particular task will be applied"
      },
      {
        "name": "connector_operator",
        "type": "object",
        "description": "Operation to be performed on provided source fields",
        "children": [
          {
            "name": "amplitude",
            "type": "string",
            "description": ""
          },
          {
            "name": "datadog",
            "type": "string",
            "description": ""
          },
          {
            "name": "dynatrace",
            "type": "string",
            "description": ""
          },
          {
            "name": "google_analytics",
            "type": "string",
            "description": ""
          },
          {
            "name": "infor_nexus",
            "type": "string",
            "description": ""
          },
          {
            "name": "marketo",
            "type": "string",
            "description": ""
          },
          {
            "name": "s3",
            "type": "string",
            "description": ""
          },
          {
            "name": "s_ap_odata",
            "type": "string",
            "description": ""
          },
          {
            "name": "salesforce",
            "type": "string",
            "description": ""
          },
          {
            "name": "pardot",
            "type": "string",
            "description": ""
          },
          {
            "name": "service_now",
            "type": "string",
            "description": ""
          },
          {
            "name": "singular",
            "type": "string",
            "description": ""
          },
          {
            "name": "slack",
            "type": "string",
            "description": ""
          },
          {
            "name": "trendmicro",
            "type": "string",
            "description": ""
          },
          {
            "name": "veeva",
            "type": "string",
            "description": ""
          },
          {
            "name": "zendesk",
            "type": "string",
            "description": ""
          },
          {
            "name": "custom_connector",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "destination_field",
        "type": "string",
        "description": "A field value on which source field should be validated"
      },
      {
        "name": "task_type",
        "type": "string",
        "description": "Type of task"
      },
      {
        "name": "task_properties",
        "type": "array",
        "description": "A Map used to store task related info",
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
    "name": "tags",
    "type": "array",
    "description": "List of Tags.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A string used to identify this tag"
      },
      {
        "name": "value",
        "type": "string",
        "description": "A string containing the value for the tag"
      }
    ]
  },
  {
    "name": "metadata_catalog_config",
    "type": "object",
    "description": "Configurations of metadata catalog of the flow.",
    "children": [
      {
        "name": "glue_data_catalog",
        "type": "object",
        "description": "Configurations of glue data catalog of the flow.",
        "children": [
          {
            "name": "role_arn",
            "type": "string",
            "description": "A string containing the value for the tag"
          },
          {
            "name": "database_name",
            "type": "string",
            "description": "A string containing the value for the tag"
          },
          {
            "name": "table_prefix",
            "type": "string",
            "description": "A string containing the value for the tag"
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html"><code>AWS::AppFlow::Flow</code></a>.

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
    <td><CopyableCode code="FlowName, Tasks, SourceFlowConfig, DestinationFlowConfigList, TriggerConfig, region" /></td>
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

Gets all properties from an individual <code>flow</code>.
```sql
SELECT
region,
flow_arn,
flow_name,
description,
kms_arn,
trigger_config,
flow_status,
source_flow_config,
destination_flow_config_list,
tasks,
tags,
metadata_catalog_config
FROM awscc.appflow.flows
WHERE region = 'us-east-1' AND data__Identifier = '<FlowName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>flow</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.appflow.flows (
 FlowName,
 TriggerConfig,
 SourceFlowConfig,
 DestinationFlowConfigList,
 Tasks,
 region
)
SELECT 
'{{ FlowName }}',
 '{{ TriggerConfig }}',
 '{{ SourceFlowConfig }}',
 '{{ DestinationFlowConfigList }}',
 '{{ Tasks }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.appflow.flows (
 FlowName,
 Description,
 KMSArn,
 TriggerConfig,
 FlowStatus,
 SourceFlowConfig,
 DestinationFlowConfigList,
 Tasks,
 Tags,
 MetadataCatalogConfig,
 region
)
SELECT 
 '{{ FlowName }}',
 '{{ Description }}',
 '{{ KMSArn }}',
 '{{ TriggerConfig }}',
 '{{ FlowStatus }}',
 '{{ SourceFlowConfig }}',
 '{{ DestinationFlowConfigList }}',
 '{{ Tasks }}',
 '{{ Tags }}',
 '{{ MetadataCatalogConfig }}',
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
  - name: flow
    props:
      - name: FlowName
        value: '{{ FlowName }}'
      - name: Description
        value: '{{ Description }}'
      - name: KMSArn
        value: '{{ KMSArn }}'
      - name: TriggerConfig
        value:
          TriggerType: '{{ TriggerType }}'
          TriggerProperties:
            ScheduleExpression: '{{ ScheduleExpression }}'
            DataPullMode: '{{ DataPullMode }}'
            ScheduleStartTime: null
            ScheduleEndTime: null
            FirstExecutionFrom: null
            TimeZone: '{{ TimeZone }}'
            ScheduleOffset: null
            FlowErrorDeactivationThreshold: '{{ FlowErrorDeactivationThreshold }}'
      - name: FlowStatus
        value: '{{ FlowStatus }}'
      - name: SourceFlowConfig
        value:
          ConnectorType: '{{ ConnectorType }}'
          ApiVersion: '{{ ApiVersion }}'
          ConnectorProfileName: '{{ ConnectorProfileName }}'
          SourceConnectorProperties:
            Amplitude:
              Object: '{{ Object }}'
            Datadog:
              Object: null
            Dynatrace:
              Object: null
            GoogleAnalytics:
              Object: null
            InforNexus:
              Object: null
            Marketo:
              Object: null
            S3:
              BucketName: '{{ BucketName }}'
              BucketPrefix: '{{ BucketPrefix }}'
              S3InputFormatConfig:
                S3InputFileType: '{{ S3InputFileType }}'
            SAPOData:
              ObjectPath: null
              parallelismConfig:
                maxParallelism: '{{ maxParallelism }}'
              paginationConfig:
                maxPageSize: '{{ maxPageSize }}'
            Salesforce:
              Object: null
              EnableDynamicFieldUpdate: '{{ EnableDynamicFieldUpdate }}'
              IncludeDeletedRecords: '{{ IncludeDeletedRecords }}'
              DataTransferApi: '{{ DataTransferApi }}'
            Pardot:
              Object: null
            ServiceNow:
              Object: null
            Singular:
              Object: null
            Slack:
              Object: null
            Trendmicro:
              Object: null
            Veeva:
              Object: null
              DocumentType: '{{ DocumentType }}'
              IncludeSourceFiles: '{{ IncludeSourceFiles }}'
              IncludeRenditions: '{{ IncludeRenditions }}'
              IncludeAllVersions: '{{ IncludeAllVersions }}'
            Zendesk:
              Object: null
            CustomConnector:
              EntityName: '{{ EntityName }}'
              CustomProperties: {}
              DataTransferApi:
                Name: '{{ Name }}'
                Type: '{{ Type }}'
          IncrementalPullConfig:
            DatetimeTypeFieldName: '{{ DatetimeTypeFieldName }}'
      - name: DestinationFlowConfigList
        value:
          - ConnectorType: null
            ApiVersion: null
            ConnectorProfileName: null
            DestinationConnectorProperties:
              Redshift:
                Object: null
                IntermediateBucketName: null
                BucketPrefix: null
                ErrorHandlingConfig:
                  FailOnFirstError: '{{ FailOnFirstError }}'
                  BucketPrefix: null
                  BucketName: null
              S3:
                BucketName: null
                BucketPrefix: null
                S3OutputFormatConfig:
                  FileType: '{{ FileType }}'
                  PrefixConfig:
                    PrefixType: '{{ PrefixType }}'
                    PrefixFormat: '{{ PrefixFormat }}'
                    PathPrefixHierarchy:
                      - '{{ PathPrefixHierarchy[0] }}'
                  AggregationConfig:
                    AggregationType: '{{ AggregationType }}'
                    TargetFileSize: '{{ TargetFileSize }}'
                  PreserveSourceDataTyping: '{{ PreserveSourceDataTyping }}'
              Salesforce:
                Object: null
                ErrorHandlingConfig: null
                IdFieldNames:
                  - '{{ IdFieldNames[0] }}'
                WriteOperationType: '{{ WriteOperationType }}'
                DataTransferApi: null
              Snowflake:
                Object: null
                IntermediateBucketName: null
                BucketPrefix: null
                ErrorHandlingConfig: null
              EventBridge:
                Object: null
                ErrorHandlingConfig: null
              Upsolver:
                BucketName: '{{ BucketName }}'
                BucketPrefix: null
                S3OutputFormatConfig:
                  FileType: null
                  PrefixConfig: null
                  AggregationConfig: null
              LookoutMetrics:
                Object: null
              Marketo:
                Object: null
                ErrorHandlingConfig: null
              Zendesk:
                Object: null
                ErrorHandlingConfig: null
                IdFieldNames:
                  - '{{ IdFieldNames[0] }}'
                WriteOperationType: null
              CustomConnector:
                EntityName: null
                ErrorHandlingConfig: null
                WriteOperationType: null
                IdFieldNames:
                  - '{{ IdFieldNames[0] }}'
                CustomProperties: null
              SAPOData:
                ObjectPath: null
                ErrorHandlingConfig: null
                SuccessResponseHandlingConfig:
                  BucketPrefix: null
                  BucketName: null
                IdFieldNames:
                  - '{{ IdFieldNames[0] }}'
                WriteOperationType: null
      - name: Tasks
        value:
          - SourceFields:
              - '{{ SourceFields[0] }}'
            ConnectorOperator:
              Amplitude: '{{ Amplitude }}'
              Datadog: '{{ Datadog }}'
              Dynatrace: '{{ Dynatrace }}'
              GoogleAnalytics: '{{ GoogleAnalytics }}'
              InforNexus: '{{ InforNexus }}'
              Marketo: '{{ Marketo }}'
              S3: '{{ S3 }}'
              SAPOData: '{{ SAPOData }}'
              Salesforce: '{{ Salesforce }}'
              Pardot: '{{ Pardot }}'
              ServiceNow: '{{ ServiceNow }}'
              Singular: '{{ Singular }}'
              Slack: '{{ Slack }}'
              Trendmicro: '{{ Trendmicro }}'
              Veeva: '{{ Veeva }}'
              Zendesk: '{{ Zendesk }}'
              CustomConnector: '{{ CustomConnector }}'
            DestinationField: '{{ DestinationField }}'
            TaskType: '{{ TaskType }}'
            TaskProperties:
              - Key: '{{ Key }}'
                Value: '{{ Value }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: MetadataCatalogConfig
        value:
          GlueDataCatalog:
            RoleArn: '{{ RoleArn }}'
            DatabaseName: '{{ DatabaseName }}'
            TablePrefix: '{{ TablePrefix }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.appflow.flows
WHERE data__Identifier = '<FlowName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>flows</code> resource, the following permissions are required:

### Create
```json
appflow:CreateFlow,
appflow:StartFlow,
appflow:TagResource,
appflow:ListTagsForResource,
appflow:UseConnectorProfile,
iam:PassRole,
s3:ListAllMyBuckets,
s3:GetBucketLocation,
s3:GetBucketPolicy,
kms:ListGrants,
kms:ListKeys,
kms:DescribeKey,
kms:ListAliases,
kms:CreateGrant,
secretsmanager:CreateSecret,
secretsmanager:PutResourcePolicy
```

### Read
```json
appflow:DescribeFlow,
appflow:ListTagsForResource
```

### Update
```json
appflow:DescribeFlow,
appflow:UpdateFlow,
appflow:StartFlow,
appflow:StopFlow,
appflow:TagResource,
appflow:UntagResource,
appflow:ListTagsForResource,
appflow:UseConnectorProfile,
iam:PassRole,
s3:ListAllMyBuckets,
s3:GetBucketLocation,
s3:GetBucketPolicy,
kms:ListGrants,
secretsmanager:CreateSecret,
secretsmanager:PutResourcePolicy
```

### Delete
```json
appflow:DeleteFlow
```

### List
```json
appflow:ListFlows
```
