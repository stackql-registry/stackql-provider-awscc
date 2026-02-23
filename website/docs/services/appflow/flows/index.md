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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "flow_name",
    "type": "string",
    "description": "Name of the flow."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html"><code>AWS::AppFlow::Flow</code></a>.

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
    <td><code>flows</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="FlowName, Tasks, SourceFlowConfig, DestinationFlowConfigList, TriggerConfig, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>flows</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>flows</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>flows_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>flows</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '{{ flow_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>flows</code> in a region.
```sql
SELECT
region,
flow_name
FROM awscc.appflow.flows_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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
'{{ flow_name }}',
 '{{ trigger_config }}',
 '{{ source_flow_config }}',
 '{{ destination_flow_config_list }}',
 '{{ tasks }}',
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
 '{{ flow_name }}',
 '{{ description }}',
 '{{ kms_arn }}',
 '{{ trigger_config }}',
 '{{ flow_status }}',
 '{{ source_flow_config }}',
 '{{ destination_flow_config_list }}',
 '{{ tasks }}',
 '{{ tags }}',
 '{{ metadata_catalog_config }}',
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
      - name: flow_name
        value: '{{ flow_name }}'
      - name: description
        value: '{{ description }}'
      - name: kms_arn
        value: '{{ kms_arn }}'
      - name: trigger_config
        value:
          trigger_type: '{{ trigger_type }}'
          trigger_properties:
            schedule_expression: '{{ schedule_expression }}'
            data_pull_mode: '{{ data_pull_mode }}'
            schedule_start_time: null
            schedule_end_time: null
            first_execution_from: null
            time_zone: '{{ time_zone }}'
            schedule_offset: null
            flow_error_deactivation_threshold: '{{ flow_error_deactivation_threshold }}'
      - name: flow_status
        value: '{{ flow_status }}'
      - name: source_flow_config
        value:
          connector_type: '{{ connector_type }}'
          api_version: '{{ api_version }}'
          connector_profile_name: '{{ connector_profile_name }}'
          source_connector_properties:
            amplitude:
              object: '{{ object }}'
            datadog:
              object: null
            dynatrace:
              object: null
            google_analytics:
              object: null
            infor_nexus:
              object: null
            marketo:
              object: null
            s3:
              bucket_name: '{{ bucket_name }}'
              bucket_prefix: '{{ bucket_prefix }}'
              s3_input_format_config:
                s3_input_file_type: '{{ s3_input_file_type }}'
            s_ap_odata:
              object_path: null
              parallelism_config:
                max_parallelism: '{{ max_parallelism }}'
              pagination_config:
                max_page_size: '{{ max_page_size }}'
            salesforce:
              object: null
              enable_dynamic_field_update: '{{ enable_dynamic_field_update }}'
              include_deleted_records: '{{ include_deleted_records }}'
              data_transfer_api: '{{ data_transfer_api }}'
            pardot:
              object: null
            service_now:
              object: null
            singular:
              object: null
            slack:
              object: null
            trendmicro:
              object: null
            veeva:
              object: null
              document_type: '{{ document_type }}'
              include_source_files: '{{ include_source_files }}'
              include_renditions: '{{ include_renditions }}'
              include_all_versions: '{{ include_all_versions }}'
            zendesk:
              object: null
            custom_connector:
              entity_name: '{{ entity_name }}'
              custom_properties: {}
              data_transfer_api:
                name: '{{ name }}'
                type: '{{ type }}'
          incremental_pull_config:
            datetime_type_field_name: '{{ datetime_type_field_name }}'
      - name: destination_flow_config_list
        value:
          - connector_type: null
            api_version: null
            connector_profile_name: null
            destination_connector_properties:
              redshift:
                object: null
                intermediate_bucket_name: null
                bucket_prefix: null
                error_handling_config:
                  fail_on_first_error: '{{ fail_on_first_error }}'
                  bucket_prefix: null
                  bucket_name: null
              s3:
                bucket_name: null
                bucket_prefix: null
                s3_output_format_config:
                  file_type: '{{ file_type }}'
                  prefix_config:
                    prefix_type: '{{ prefix_type }}'
                    prefix_format: '{{ prefix_format }}'
                    path_prefix_hierarchy:
                      - '{{ path_prefix_hierarchy[0] }}'
                  aggregation_config:
                    aggregation_type: '{{ aggregation_type }}'
                    target_file_size: '{{ target_file_size }}'
                  preserve_source_data_typing: '{{ preserve_source_data_typing }}'
              salesforce:
                object: null
                error_handling_config: null
                id_field_names:
                  - '{{ id_field_names[0] }}'
                write_operation_type: '{{ write_operation_type }}'
                data_transfer_api: null
              snowflake:
                object: null
                intermediate_bucket_name: null
                bucket_prefix: null
                error_handling_config: null
              event_bridge:
                object: null
                error_handling_config: null
              upsolver:
                bucket_name: '{{ bucket_name }}'
                bucket_prefix: null
                s3_output_format_config:
                  file_type: null
                  prefix_config: null
                  aggregation_config: null
              lookout_metrics:
                object: null
              marketo:
                object: null
                error_handling_config: null
              zendesk:
                object: null
                error_handling_config: null
                id_field_names:
                  - '{{ id_field_names[0] }}'
                write_operation_type: null
              custom_connector:
                entity_name: null
                error_handling_config: null
                write_operation_type: null
                id_field_names:
                  - '{{ id_field_names[0] }}'
                custom_properties: null
              s_ap_odata:
                object_path: null
                error_handling_config: null
                success_response_handling_config:
                  bucket_prefix: null
                  bucket_name: null
                id_field_names:
                  - '{{ id_field_names[0] }}'
                write_operation_type: null
      - name: tasks
        value:
          - source_fields:
              - '{{ source_fields[0] }}'
            connector_operator:
              amplitude: '{{ amplitude }}'
              datadog: '{{ datadog }}'
              dynatrace: '{{ dynatrace }}'
              google_analytics: '{{ google_analytics }}'
              infor_nexus: '{{ infor_nexus }}'
              marketo: '{{ marketo }}'
              s3: '{{ s3 }}'
              s_ap_odata: '{{ s_ap_odata }}'
              salesforce: '{{ salesforce }}'
              pardot: '{{ pardot }}'
              service_now: '{{ service_now }}'
              singular: '{{ singular }}'
              slack: '{{ slack }}'
              trendmicro: '{{ trendmicro }}'
              veeva: '{{ veeva }}'
              zendesk: '{{ zendesk }}'
              custom_connector: '{{ custom_connector }}'
            destination_field: '{{ destination_field }}'
            task_type: '{{ task_type }}'
            task_properties:
              - key: '{{ key }}'
                value: '{{ value }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: metadata_catalog_config
        value:
          glue_data_catalog:
            role_arn: '{{ role_arn }}'
            database_name: '{{ database_name }}'
            table_prefix: '{{ table_prefix }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>flow</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.appflow.flows
SET PatchDocument = string('{{ {
    "Description": description,
    "TriggerConfig": trigger_config,
    "FlowStatus": flow_status,
    "SourceFlowConfig": source_flow_config,
    "DestinationFlowConfigList": destination_flow_config_list,
    "Tasks": tasks,
    "Tags": tags,
    "MetadataCatalogConfig": metadata_catalog_config
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ flow_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.appflow.flows
WHERE Identifier = '{{ flow_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>flows</code> resource, the following permissions are required:

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

</TabItem>
<TabItem value="read">

```json
appflow:DescribeFlow,
appflow:ListTagsForResource
```

</TabItem>
<TabItem value="update">

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

</TabItem>
<TabItem value="delete">

```json
appflow:DeleteFlow
```

</TabItem>
<TabItem value="list">

```json
appflow:ListFlows
```

</TabItem>
</Tabs>