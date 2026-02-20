---
title: data_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - data_sets
  - quicksight
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

Creates, updates, deletes or gets a <code>data_set</code> resource or lists <code>data_sets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>data_sets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of the AWS::QuickSight::DataSet Resource Type.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.quicksight.data_sets" /></td></tr>
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
    "name": "created_time",
    "type": "string",
    "description": "<p>The time that this dataset was created.</p>"
  },
  {
    "name": "folder_arns",
    "type": "array",
    "description": "<p>When you create the dataset, Amazon QuickSight adds the dataset to these folders.</p>"
  },
  {
    "name": "consumed_spice_capacity_in_bytes",
    "type": "number",
    "description": "<p>The amount of SPICE capacity used by this dataset. This is 0 if the dataset isn't<br />imported into SPICE.</p>"
  },
  {
    "name": "row_level_permission_data_set",
    "type": "object",
    "description": "<p>Information about a dataset that contains permissions for row-level security (RLS).<br />The permissions dataset maps fields to users or groups. For more information, see<br /><a href=\"https://docs.aws.amazon.com/quicksight/latest/user/restrict-access-to-a-data-set-using-row-level-security.html\">Using Row-Level Security (RLS) to Restrict Access to a Dataset</a> in the <i>Amazon QuickSight User<br />Guide</i>.</p><br /><p>The option to deny permissions by setting &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; to &#95;&#95;CODE&#95;BLOCK&#95;1&#95;&#95; is<br />not supported for new RLS datasets.</p>",
    "children": [
      {
        "name": "status",
        "type": "string",
        "description": ""
      },
      {
        "name": "format_version",
        "type": "string",
        "description": ""
      },
      {
        "name": "arn",
        "type": "string",
        "description": "<p>The Amazon Resource Name (ARN) of the dataset that contains permissions for RLS.</p>"
      },
      {
        "name": "namespace",
        "type": "string",
        "description": "<p>The namespace associated with the dataset that contains permissions for RLS.</p>"
      },
      {
        "name": "permission_policy",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "ingestion_wait_policy",
    "type": "object",
    "description": "<p>Wait policy to use when creating/updating dataset. Default is to wait for SPICE ingestion to finish with timeout of 36 hours.</p>",
    "children": [
      {
        "name": "wait_for_spice_ingestion",
        "type": "boolean",
        "description": "<p>Wait for SPICE ingestion to finish to mark dataset creation/update successful. Default (true).<br />Applicable only when DataSetImportMode mode is set to SPICE.</p>"
      },
      {
        "name": "ingestion_wait_time_in_hours",
        "type": "number",
        "description": "<p>The maximum time (in hours) to wait for Ingestion to complete. Default timeout is 36 hours.<br />Applicable only when DataSetImportMode mode is set to SPICE and WaitForSpiceIngestion is set to true.</p>"
      }
    ]
  },
  {
    "name": "column_level_permission_rules",
    "type": "array",
    "description": "<p>A set of one or more definitions of a <code><br /><a href=\"https://docs.aws.amazon.com/quicksight/latest/APIReference/API&#95;ColumnLevelPermissionRule.html\">ColumnLevelPermissionRule</a><br /></code>.</p>",
    "children": [
      {
        "name": "column_names",
        "type": "array",
        "description": "<p>An array of column names.</p>"
      },
      {
        "name": "principals",
        "type": "array",
        "description": "<p>An array of Amazon Resource Names (ARNs) for Amazon QuickSight users or groups.</p>"
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": "<p>The display name for the dataset.</p>"
  },
  {
    "name": "permissions",
    "type": "array",
    "description": "<p>A list of resource permissions on the dataset.</p>",
    "children": [
      {
        "name": "principal",
        "type": "string",
        "description": "<p>The Amazon Resource Name (ARN) of the principal. This can be one of the<br />following:</p><br /><ul><br /><li><br /><p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p><br /></li><br /><li><br /><p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p><br /></li><br /><li><br /><p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight<br />ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.<br />(This is less common.) </p><br /></li><br /></ul>"
      },
      {
        "name": "actions",
        "type": "array",
        "description": "<p>The IAM action to grant or revoke permissions on.</p>"
      }
    ]
  },
  {
    "name": "use_as",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "<p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "<p>Tag key.</p>"
      },
      {
        "name": "value",
        "type": "string",
        "description": "<p>Tag value.</p>"
      }
    ]
  },
  {
    "name": "physical_table_map",
    "type": "object",
    "description": ""
  },
  {
    "name": "field_folders",
    "type": "object",
    "description": ""
  },
  {
    "name": "last_updated_time",
    "type": "string",
    "description": "<p>The last time that this dataset was updated.</p>"
  },
  {
    "name": "data_set_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "performance_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "unique_keys",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "column_names",
            "type": "array",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "data_set_refresh_properties",
    "type": "object",
    "description": "<p>The refresh properties of a dataset.</p>",
    "children": [
      {
        "name": "refresh_configuration",
        "type": "object",
        "description": "<p>The refresh configuration of a dataset.</p>",
        "children": [
          {
            "name": "incremental_refresh",
            "type": "object",
            "description": "<p>The incremental refresh configuration for a dataset.</p>",
            "children": [
              {
                "name": "lookback_window",
                "type": "object",
                "description": "<p>The lookback window setup of an incremental refresh configuration.</p>"
              }
            ]
          }
        ]
      },
      {
        "name": "failure_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "email_alert",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "alert_status",
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
    "name": "row_level_permission_tag_configuration",
    "type": "object",
    "description": "<p>The configuration of tags on a dataset to set row-level security. </p>",
    "children": [
      {
        "name": "status",
        "type": "string",
        "description": ""
      },
      {
        "name": "tag_rules",
        "type": "array",
        "description": "<p>A set of rules associated with row-level security, such as the tag names and columns that they are assigned to.</p>",
        "children": [
          {
            "name": "column_name",
            "type": "string",
            "description": "<p>The column name that a tag key is assigned to.</p>"
          },
          {
            "name": "tag_key",
            "type": "string",
            "description": "<p>The unique key for a tag.</p>"
          },
          {
            "name": "match_all_value",
            "type": "string",
            "description": "<p>A string that you want to use to filter by all the values in a column in the dataset and don’t want to list the values one by one. For example, you can use an asterisk as your match all value.</p>"
          },
          {
            "name": "tag_multi_value_delimiter",
            "type": "string",
            "description": "<p>A string that you want to use to delimit the values when you pass the values at run time. For example, you can delimit the values with a comma.</p>"
          }
        ]
      },
      {
        "name": "tag_rule_configurations",
        "type": "array",
        "description": "<p>A list of tag configuration rules to apply to a dataset. All tag configurations have the OR condition. Tags within each tile will be joined (AND). At least one rule in this structure must have all tag values assigned to it to apply Row-level security (RLS) to the dataset.</p>"
      }
    ]
  },
  {
    "name": "column_groups",
    "type": "array",
    "description": "<p>Groupings of columns that work together in certain Amazon QuickSight features. Currently, only geospatial hierarchy is supported.</p>",
    "children": [
      {
        "name": "geo_spatial_column_group",
        "type": "object",
        "description": "<p>Geospatial column group that denotes a hierarchy.</p>",
        "children": [
          {
            "name": "columns",
            "type": "array",
            "description": "<p>Columns in this hierarchy.</p>"
          },
          {
            "name": "country_code",
            "type": "string",
            "description": ""
          },
          {
            "name": "name",
            "type": "string",
            "description": "<p>A display name for the hierarchy.</p>"
          }
        ]
      }
    ]
  },
  {
    "name": "import_mode",
    "type": "string",
    "description": ""
  },
  {
    "name": "dataset_parameters",
    "type": "array",
    "description": "<p>The parameter declarations of the dataset.</p>",
    "children": [
      {
        "name": "integer_dataset_parameter",
        "type": "object",
        "description": "<p>An integer parameter for a dataset.</p>",
        "children": [
          {
            "name": "value_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "default_values",
            "type": "object",
            "description": "<p>The default values of an integer parameter.</p>",
            "children": [
              {
                "name": "static_values",
                "type": "array",
                "description": "<p>A list of static default values for a given integer parameter.</p>"
              }
            ]
          },
          {
            "name": "id",
            "type": "string",
            "description": "<p>An identifier for the integer parameter created in the dataset.</p>"
          },
          {
            "name": "name",
            "type": "string",
            "description": "<p>The name of the integer parameter that is created in the dataset.</p>"
          }
        ]
      },
      {
        "name": "date_time_dataset_parameter",
        "type": "object",
        "description": "<p>A date time parameter for a dataset.</p>",
        "children": [
          {
            "name": "value_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "time_granularity",
            "type": "string",
            "description": ""
          },
          {
            "name": "default_values",
            "type": "object",
            "description": "<p>The default values of a date time parameter.</p>",
            "children": [
              {
                "name": "static_values",
                "type": "array",
                "description": "<p>A list of static default values for a given date time parameter.</p>"
              }
            ]
          },
          {
            "name": "id",
            "type": "string",
            "description": "<p>An identifier for the parameter that is created in the dataset.</p>"
          },
          {
            "name": "name",
            "type": "string",
            "description": "<p>The name of the date time parameter that is created in the dataset.</p>"
          }
        ]
      },
      {
        "name": "decimal_dataset_parameter",
        "type": "object",
        "description": "<p>A decimal parameter for a dataset.</p>",
        "children": [
          {
            "name": "value_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "default_values",
            "type": "object",
            "description": "<p>The default values of a decimal parameter.</p>",
            "children": [
              {
                "name": "static_values",
                "type": "array",
                "description": "<p>A list of static default values for a given decimal parameter.</p>"
              }
            ]
          },
          {
            "name": "id",
            "type": "string",
            "description": "<p>An identifier for the decimal parameter created in the dataset.</p>"
          },
          {
            "name": "name",
            "type": "string",
            "description": "<p>The name of the decimal parameter that is created in the dataset.</p>"
          }
        ]
      },
      {
        "name": "string_dataset_parameter",
        "type": "object",
        "description": "<p>A string parameter for a dataset.</p>",
        "children": [
          {
            "name": "value_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "default_values",
            "type": "object",
            "description": "<p>The default values of a string parameter.</p>",
            "children": [
              {
                "name": "static_values",
                "type": "array",
                "description": "<p>A list of static default values for a given string parameter.</p>"
              }
            ]
          },
          {
            "name": "id",
            "type": "string",
            "description": "<p>An identifier for the string parameter that is created in the dataset.</p>"
          },
          {
            "name": "name",
            "type": "string",
            "description": "<p>The name of the string parameter that is created in the dataset.</p>"
          }
        ]
      }
    ]
  },
  {
    "name": "logical_table_map",
    "type": "object",
    "description": ""
  },
  {
    "name": "aws_account_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "data_set_usage_configuration",
    "type": "object",
    "description": "<p>The usage configuration to apply to child datasets that reference this dataset as a source.</p>",
    "children": [
      {
        "name": "disable_use_as_imported_source",
        "type": "boolean",
        "description": "<p>An option that controls whether a child dataset that's stored in QuickSight can use this dataset as a source.</p>"
      },
      {
        "name": "disable_use_as_direct_query_source",
        "type": "boolean",
        "description": "<p>An option that controls whether a child dataset of a direct query can use this dataset as a source.</p>"
      }
    ]
  },
  {
    "name": "output_columns",
    "type": "array",
    "description": "<p>The list of columns after all transforms. These columns are available in templates,<br />analyses, and dashboards.</p>",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "description",
        "type": "string",
        "description": "<p>A description for a column.</p>"
      },
      {
        "name": "sub_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "name",
        "type": "string",
        "description": "<p>The display name of the column..</p>"
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "<p>The Amazon Resource Name (ARN) of the resource.</p>"
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
    "name": "data_set_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "aws_account_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html"><code>AWS::QuickSight::DataSet</code></a>.

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
    <td><code>data_sets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>data_sets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>data_sets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>data_sets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>data_sets</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>data_set</code>.
```sql
SELECT
region,
created_time,
folder_arns,
consumed_spice_capacity_in_bytes,
row_level_permission_data_set,
ingestion_wait_policy,
column_level_permission_rules,
name,
permissions,
use_as,
tags,
physical_table_map,
field_folders,
last_updated_time,
data_set_id,
performance_configuration,
data_set_refresh_properties,
row_level_permission_tag_configuration,
column_groups,
import_mode,
dataset_parameters,
logical_table_map,
aws_account_id,
data_set_usage_configuration,
output_columns,
arn
FROM awscc.quicksight.data_sets
WHERE region = 'us-east-1' AND data__Identifier = '<AwsAccountId>|<DataSetId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>data_sets</code> in a region.
```sql
SELECT
region,
aws_account_id,
data_set_id
FROM awscc.quicksight.data_sets_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>data_set</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.quicksight.data_sets (
 FolderArns,
 RowLevelPermissionDataSet,
 IngestionWaitPolicy,
 ColumnLevelPermissionRules,
 Name,
 Permissions,
 UseAs,
 Tags,
 PhysicalTableMap,
 FieldFolders,
 DataSetId,
 PerformanceConfiguration,
 DataSetRefreshProperties,
 RowLevelPermissionTagConfiguration,
 ColumnGroups,
 ImportMode,
 DatasetParameters,
 LogicalTableMap,
 AwsAccountId,
 DataSetUsageConfiguration,
 region
)
SELECT 
'{{ FolderArns }}',
 '{{ RowLevelPermissionDataSet }}',
 '{{ IngestionWaitPolicy }}',
 '{{ ColumnLevelPermissionRules }}',
 '{{ Name }}',
 '{{ Permissions }}',
 '{{ UseAs }}',
 '{{ Tags }}',
 '{{ PhysicalTableMap }}',
 '{{ FieldFolders }}',
 '{{ DataSetId }}',
 '{{ PerformanceConfiguration }}',
 '{{ DataSetRefreshProperties }}',
 '{{ RowLevelPermissionTagConfiguration }}',
 '{{ ColumnGroups }}',
 '{{ ImportMode }}',
 '{{ DatasetParameters }}',
 '{{ LogicalTableMap }}',
 '{{ AwsAccountId }}',
 '{{ DataSetUsageConfiguration }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.quicksight.data_sets (
 FolderArns,
 RowLevelPermissionDataSet,
 IngestionWaitPolicy,
 ColumnLevelPermissionRules,
 Name,
 Permissions,
 UseAs,
 Tags,
 PhysicalTableMap,
 FieldFolders,
 DataSetId,
 PerformanceConfiguration,
 DataSetRefreshProperties,
 RowLevelPermissionTagConfiguration,
 ColumnGroups,
 ImportMode,
 DatasetParameters,
 LogicalTableMap,
 AwsAccountId,
 DataSetUsageConfiguration,
 region
)
SELECT 
 '{{ FolderArns }}',
 '{{ RowLevelPermissionDataSet }}',
 '{{ IngestionWaitPolicy }}',
 '{{ ColumnLevelPermissionRules }}',
 '{{ Name }}',
 '{{ Permissions }}',
 '{{ UseAs }}',
 '{{ Tags }}',
 '{{ PhysicalTableMap }}',
 '{{ FieldFolders }}',
 '{{ DataSetId }}',
 '{{ PerformanceConfiguration }}',
 '{{ DataSetRefreshProperties }}',
 '{{ RowLevelPermissionTagConfiguration }}',
 '{{ ColumnGroups }}',
 '{{ ImportMode }}',
 '{{ DatasetParameters }}',
 '{{ LogicalTableMap }}',
 '{{ AwsAccountId }}',
 '{{ DataSetUsageConfiguration }}',
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
  - name: data_set
    props:
      - name: FolderArns
        value:
          - '{{ FolderArns[0] }}'
      - name: RowLevelPermissionDataSet
        value:
          Status: '{{ Status }}'
          FormatVersion: '{{ FormatVersion }}'
          Arn: '{{ Arn }}'
          Namespace: '{{ Namespace }}'
          PermissionPolicy: '{{ PermissionPolicy }}'
      - name: IngestionWaitPolicy
        value:
          WaitForSpiceIngestion: '{{ WaitForSpiceIngestion }}'
          IngestionWaitTimeInHours: null
      - name: ColumnLevelPermissionRules
        value:
          - ColumnNames:
              - '{{ ColumnNames[0] }}'
            Principals:
              - '{{ Principals[0] }}'
      - name: Name
        value: '{{ Name }}'
      - name: Permissions
        value:
          - Principal: '{{ Principal }}'
            Actions:
              - '{{ Actions[0] }}'
      - name: UseAs
        value: '{{ UseAs }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: PhysicalTableMap
        value: {}
      - name: FieldFolders
        value: {}
      - name: DataSetId
        value: '{{ DataSetId }}'
      - name: PerformanceConfiguration
        value:
          UniqueKeys:
            - ColumnNames:
                - '{{ ColumnNames[0] }}'
      - name: DataSetRefreshProperties
        value:
          RefreshConfiguration:
            IncrementalRefresh:
              LookbackWindow:
                ColumnName: '{{ ColumnName }}'
                SizeUnit: '{{ SizeUnit }}'
                Size: null
          FailureConfiguration:
            EmailAlert:
              AlertStatus: '{{ AlertStatus }}'
      - name: RowLevelPermissionTagConfiguration
        value:
          Status: null
          TagRules:
            - ColumnName: '{{ ColumnName }}'
              TagKey: '{{ TagKey }}'
              MatchAllValue: '{{ MatchAllValue }}'
              TagMultiValueDelimiter: '{{ TagMultiValueDelimiter }}'
          TagRuleConfigurations:
            - - '{{ 0[0] }}'
      - name: ColumnGroups
        value:
          - GeoSpatialColumnGroup:
              Columns:
                - '{{ Columns[0] }}'
              CountryCode: '{{ CountryCode }}'
              Name: '{{ Name }}'
      - name: ImportMode
        value: '{{ ImportMode }}'
      - name: DatasetParameters
        value:
          - IntegerDatasetParameter:
              ValueType: '{{ ValueType }}'
              DefaultValues:
                StaticValues:
                  - null
              Id: '{{ Id }}'
              Name: '{{ Name }}'
            DateTimeDatasetParameter:
              ValueType: null
              TimeGranularity: '{{ TimeGranularity }}'
              DefaultValues:
                StaticValues:
                  - '{{ StaticValues[0] }}'
              Id: '{{ Id }}'
              Name: '{{ Name }}'
            DecimalDatasetParameter:
              ValueType: null
              DefaultValues:
                StaticValues:
                  - null
              Id: '{{ Id }}'
              Name: '{{ Name }}'
            StringDatasetParameter:
              ValueType: null
              DefaultValues:
                StaticValues:
                  - '{{ StaticValues[0] }}'
              Id: '{{ Id }}'
              Name: '{{ Name }}'
      - name: LogicalTableMap
        value: {}
      - name: AwsAccountId
        value: '{{ AwsAccountId }}'
      - name: DataSetUsageConfiguration
        value:
          DisableUseAsImportedSource: '{{ DisableUseAsImportedSource }}'
          DisableUseAsDirectQuerySource: '{{ DisableUseAsDirectQuerySource }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.quicksight.data_sets
SET data__PatchDocument = string('{{ {
    "FolderArns": folder_arns,
    "RowLevelPermissionDataSet": row_level_permission_data_set,
    "IngestionWaitPolicy": ingestion_wait_policy,
    "ColumnLevelPermissionRules": column_level_permission_rules,
    "Name": name,
    "Permissions": permissions,
    "UseAs": use_as,
    "Tags": tags,
    "PhysicalTableMap": physical_table_map,
    "FieldFolders": field_folders,
    "PerformanceConfiguration": performance_configuration,
    "DataSetRefreshProperties": data_set_refresh_properties,
    "RowLevelPermissionTagConfiguration": row_level_permission_tag_configuration,
    "ColumnGroups": column_groups,
    "ImportMode": import_mode,
    "DatasetParameters": dataset_parameters,
    "LogicalTableMap": logical_table_map,
    "DataSetUsageConfiguration": data_set_usage_configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<AwsAccountId>|<DataSetId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.quicksight.data_sets
WHERE data__Identifier = '<AwsAccountId|DataSetId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>data_sets</code> resource, the following permissions are required:

### Read
```json
quicksight:DescribeDataSet,
quicksight:DescribeDataSetPermissions,
quicksight:ListTagsForResource,
quicksight:DescribeDataSetRefreshProperties
```

### Create
```json
quicksight:DescribeDataSet,
quicksight:DescribeDataSetPermissions,
quicksight:DescribeIngestion,
quicksight:ListIngestions,
quicksight:CreateDataSet,
quicksight:PassDataSource,
quicksight:PassDataSet,
quicksight:TagResource,
quicksight:ListTagsForResource,
quicksight:DescribeDataSetRefreshProperties,
quicksight:PutDataSetRefreshProperties,
quicksight:CreateFolderMembership,
quicksight:DeleteFolderMembership,
quicksight:ListFoldersForResource
```

### Update
```json
quicksight:DescribeDataSet,
quicksight:DescribeDataSetPermissions,
quicksight:PassDataSource,
quicksight:UpdateDataSet,
quicksight:UpdateDataSetPermissions,
quicksight:PassDataSet,
quicksight:DescribeIngestion,
quicksight:ListIngestions,
quicksight:CancelIngestion,
quicksight:CreateFolderMembership,
quicksight:DeleteFolderMembership,
quicksight:ListFoldersForResource,
quicksight:TagResource,
quicksight:UntagResource,
quicksight:ListTagsForResource,
quicksight:PutDataSetRefreshProperties,
quicksight:DescribeDataSetRefreshProperties,
quicksight:DeleteDataSetRefreshProperties
```

### List
```json
quicksight:DescribeDataSet,
quicksight:ListDataSets
```

### Delete
```json
quicksight:DescribeDataSet,
quicksight:DeleteDataSet,
quicksight:ListTagsForResource,
quicksight:DescribeIngestion,
quicksight:DeleteDataSetRefreshProperties,
quicksight:DescribeDataSetRefreshProperties
```
