---
title: topics
hide_title: false
hide_table_of_contents: false
keywords:
  - topics
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

Creates, updates, deletes or gets a <code>topic</code> resource or lists <code>topics</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>topics</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of the AWS::QuickSight::Topic Resource Type.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.quicksight.topics" /></td></tr>
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
    "name": "aws_account_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "config_options",
    "type": "object",
    "description": "Model for configuration of a Topic",
    "children": [
      {
        "name": "q_business_insights_enabled",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "custom_instructions",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "custom_instructions_string",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "data_sets",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "dataset_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "dataset_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "dataset_description",
        "type": "string",
        "description": ""
      },
      {
        "name": "data_aggregation",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "dataset_row_date_granularity",
            "type": "string",
            "description": ""
          },
          {
            "name": "default_date_column_name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "filters",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "filter_description",
            "type": "string",
            "description": ""
          },
          {
            "name": "filter_class",
            "type": "string",
            "description": ""
          },
          {
            "name": "filter_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "filter_synonyms",
            "type": "array",
            "description": ""
          },
          {
            "name": "operand_field_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "filter_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "category_filter",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "category_filter_function",
                "type": "string",
                "description": ""
              },
              {
                "name": "category_filter_type",
                "type": "string",
                "description": ""
              },
              {
                "name": "constant",
                "type": "object",
                "description": ""
              },
              {
                "name": "inverse",
                "type": "boolean",
                "description": ""
              }
            ]
          },
          {
            "name": "numeric_equality_filter",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "constant",
                "type": "object",
                "description": ""
              },
              {
                "name": "aggregation",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "numeric_range_filter",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "inclusive",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "constant",
                "type": "object",
                "description": ""
              },
              {
                "name": "aggregation",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "date_range_filter",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "inclusive",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "constant",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "relative_date_filter",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "time_granularity",
                "type": "string",
                "description": ""
              },
              {
                "name": "relative_date_filter_function",
                "type": "string",
                "description": ""
              },
              {
                "name": "constant",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "columns",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "column_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "column_friendly_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "column_description",
            "type": "string",
            "description": ""
          },
          {
            "name": "column_synonyms",
            "type": "array",
            "description": ""
          },
          {
            "name": "column_data_role",
            "type": "string",
            "description": ""
          },
          {
            "name": "aggregation",
            "type": "string",
            "description": ""
          },
          {
            "name": "is_included_in_topic",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "disable_indexing",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "comparative_order",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "use_ordering",
                "type": "string",
                "description": ""
              },
              {
                "name": "specifed_order",
                "type": "array",
                "description": ""
              },
              {
                "name": "treat_undefined_specified_values",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "semantic_type",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "type_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "sub_type_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "type_parameters",
                "type": "object",
                "description": ""
              },
              {
                "name": "truthy_cell_value",
                "type": "string",
                "description": ""
              },
              {
                "name": "truthy_cell_value_synonyms",
                "type": "array",
                "description": ""
              },
              {
                "name": "falsey_cell_value",
                "type": "string",
                "description": ""
              },
              {
                "name": "falsey_cell_value_synonyms",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "time_granularity",
            "type": "string",
            "description": ""
          },
          {
            "name": "allowed_aggregations",
            "type": "array",
            "description": ""
          },
          {
            "name": "not_allowed_aggregations",
            "type": "array",
            "description": ""
          },
          {
            "name": "default_formatting",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "display_format",
                "type": "string",
                "description": ""
              },
              {
                "name": "display_format_options",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "never_aggregate_in_filter",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "cell_value_synonyms",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "cell_value",
                "type": "string",
                "description": ""
              },
              {
                "name": "synonyms",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "non_additive",
            "type": "boolean",
            "description": ""
          }
        ]
      },
      {
        "name": "calculated_fields",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "calculated_field_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "calculated_field_description",
            "type": "string",
            "description": ""
          },
          {
            "name": "expression",
            "type": "string",
            "description": ""
          },
          {
            "name": "calculated_field_synonyms",
            "type": "array",
            "description": ""
          },
          {
            "name": "is_included_in_topic",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "disable_indexing",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "column_data_role",
            "type": "string",
            "description": ""
          },
          {
            "name": "time_granularity",
            "type": "string",
            "description": ""
          },
          {
            "name": "default_formatting",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "display_format",
                "type": "string",
                "description": ""
              },
              {
                "name": "display_format_options",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "aggregation",
            "type": "string",
            "description": ""
          },
          {
            "name": "comparative_order",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "use_ordering",
                "type": "string",
                "description": ""
              },
              {
                "name": "specifed_order",
                "type": "array",
                "description": ""
              },
              {
                "name": "treat_undefined_specified_values",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "semantic_type",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "type_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "sub_type_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "type_parameters",
                "type": "object",
                "description": ""
              },
              {
                "name": "truthy_cell_value",
                "type": "string",
                "description": ""
              },
              {
                "name": "truthy_cell_value_synonyms",
                "type": "array",
                "description": ""
              },
              {
                "name": "falsey_cell_value",
                "type": "string",
                "description": ""
              },
              {
                "name": "falsey_cell_value_synonyms",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "allowed_aggregations",
            "type": "array",
            "description": ""
          },
          {
            "name": "not_allowed_aggregations",
            "type": "array",
            "description": ""
          },
          {
            "name": "never_aggregate_in_filter",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "cell_value_synonyms",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "cell_value",
                "type": "string",
                "description": ""
              },
              {
                "name": "synonyms",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "non_additive",
            "type": "boolean",
            "description": ""
          }
        ]
      },
      {
        "name": "named_entities",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "entity_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "entity_description",
            "type": "string",
            "description": ""
          },
          {
            "name": "entity_synonyms",
            "type": "array",
            "description": ""
          },
          {
            "name": "semantic_entity_type",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "type_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "sub_type_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "type_parameters",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "definition",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "field_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "property_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "property_role",
                "type": "string",
                "description": ""
              },
              {
                "name": "property_usage",
                "type": "string",
                "description": ""
              },
              {
                "name": "metric",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "folder_arns",
    "type": "array",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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
    "name": "topic_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "user_experience_version",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "aws_account_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "topic_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html"><code>AWS::QuickSight::Topic</code></a>.

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
    <td><code>topics</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>topics</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>topics</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>topics_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>topics</code></td>
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

Gets all properties from an individual <code>topic</code>.
```sql
SELECT
region,
arn,
aws_account_id,
config_options,
custom_instructions,
data_sets,
description,
folder_arns,
name,
tags,
topic_id,
user_experience_version
FROM awscc.quicksight.topics
WHERE region = 'us-east-1' AND data__Identifier = '<AwsAccountId>|<TopicId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>topics</code> in a region.
```sql
SELECT
region,
aws_account_id,
topic_id
FROM awscc.quicksight.topics_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>topic</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.quicksight.topics (
 AwsAccountId,
 ConfigOptions,
 CustomInstructions,
 DataSets,
 Description,
 FolderArns,
 Name,
 Tags,
 TopicId,
 UserExperienceVersion,
 region
)
SELECT 
'{{ AwsAccountId }}',
 '{{ ConfigOptions }}',
 '{{ CustomInstructions }}',
 '{{ DataSets }}',
 '{{ Description }}',
 '{{ FolderArns }}',
 '{{ Name }}',
 '{{ Tags }}',
 '{{ TopicId }}',
 '{{ UserExperienceVersion }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.quicksight.topics (
 AwsAccountId,
 ConfigOptions,
 CustomInstructions,
 DataSets,
 Description,
 FolderArns,
 Name,
 Tags,
 TopicId,
 UserExperienceVersion,
 region
)
SELECT 
 '{{ AwsAccountId }}',
 '{{ ConfigOptions }}',
 '{{ CustomInstructions }}',
 '{{ DataSets }}',
 '{{ Description }}',
 '{{ FolderArns }}',
 '{{ Name }}',
 '{{ Tags }}',
 '{{ TopicId }}',
 '{{ UserExperienceVersion }}',
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
  - name: topic
    props:
      - name: AwsAccountId
        value: '{{ AwsAccountId }}'
      - name: ConfigOptions
        value:
          QBusinessInsightsEnabled: '{{ QBusinessInsightsEnabled }}'
      - name: CustomInstructions
        value:
          CustomInstructionsString: '{{ CustomInstructionsString }}'
      - name: DataSets
        value:
          - DatasetArn: '{{ DatasetArn }}'
            DatasetName: '{{ DatasetName }}'
            DatasetDescription: '{{ DatasetDescription }}'
            DataAggregation:
              DatasetRowDateGranularity: '{{ DatasetRowDateGranularity }}'
              DefaultDateColumnName: '{{ DefaultDateColumnName }}'
            Filters:
              - FilterDescription: '{{ FilterDescription }}'
                FilterClass: '{{ FilterClass }}'
                FilterName: '{{ FilterName }}'
                FilterSynonyms:
                  - '{{ FilterSynonyms[0] }}'
                OperandFieldName: '{{ OperandFieldName }}'
                FilterType: '{{ FilterType }}'
                CategoryFilter:
                  CategoryFilterFunction: '{{ CategoryFilterFunction }}'
                  CategoryFilterType: '{{ CategoryFilterType }}'
                  Constant:
                    ConstantType: '{{ ConstantType }}'
                    SingularConstant: '{{ SingularConstant }}'
                    CollectiveConstant:
                      ValueList:
                        - '{{ ValueList[0] }}'
                  Inverse: '{{ Inverse }}'
                NumericEqualityFilter:
                  Constant:
                    ConstantType: null
                    SingularConstant: '{{ SingularConstant }}'
                  Aggregation: '{{ Aggregation }}'
                NumericRangeFilter:
                  Inclusive: '{{ Inclusive }}'
                  Constant:
                    ConstantType: null
                    RangeConstant:
                      Minimum: '{{ Minimum }}'
                      Maximum: '{{ Maximum }}'
                  Aggregation: null
                DateRangeFilter:
                  Inclusive: '{{ Inclusive }}'
                  Constant: null
                RelativeDateFilter:
                  TimeGranularity: null
                  RelativeDateFilterFunction: '{{ RelativeDateFilterFunction }}'
                  Constant: null
            Columns:
              - ColumnName: '{{ ColumnName }}'
                ColumnFriendlyName: '{{ ColumnFriendlyName }}'
                ColumnDescription: '{{ ColumnDescription }}'
                ColumnSynonyms:
                  - '{{ ColumnSynonyms[0] }}'
                ColumnDataRole: '{{ ColumnDataRole }}'
                Aggregation: '{{ Aggregation }}'
                IsIncludedInTopic: '{{ IsIncludedInTopic }}'
                DisableIndexing: '{{ DisableIndexing }}'
                ComparativeOrder:
                  UseOrdering: '{{ UseOrdering }}'
                  SpecifedOrder:
                    - '{{ SpecifedOrder[0] }}'
                  TreatUndefinedSpecifiedValues: '{{ TreatUndefinedSpecifiedValues }}'
                SemanticType:
                  TypeName: '{{ TypeName }}'
                  SubTypeName: '{{ SubTypeName }}'
                  TypeParameters: {}
                  TruthyCellValue: '{{ TruthyCellValue }}'
                  TruthyCellValueSynonyms:
                    - '{{ TruthyCellValueSynonyms[0] }}'
                  FalseyCellValue: '{{ FalseyCellValue }}'
                  FalseyCellValueSynonyms:
                    - '{{ FalseyCellValueSynonyms[0] }}'
                TimeGranularity: null
                AllowedAggregations:
                  - '{{ AllowedAggregations[0] }}'
                NotAllowedAggregations:
                  - null
                DefaultFormatting:
                  DisplayFormat: '{{ DisplayFormat }}'
                  DisplayFormatOptions:
                    UseBlankCellFormat: '{{ UseBlankCellFormat }}'
                    BlankCellFormat: '{{ BlankCellFormat }}'
                    DateFormat: '{{ DateFormat }}'
                    DecimalSeparator: '{{ DecimalSeparator }}'
                    GroupingSeparator: '{{ GroupingSeparator }}'
                    UseGrouping: '{{ UseGrouping }}'
                    FractionDigits: null
                    Prefix: '{{ Prefix }}'
                    Suffix: '{{ Suffix }}'
                    UnitScaler: '{{ UnitScaler }}'
                    NegativeFormat:
                      Prefix: '{{ Prefix }}'
                      Suffix: '{{ Suffix }}'
                    CurrencySymbol: '{{ CurrencySymbol }}'
                NeverAggregateInFilter: '{{ NeverAggregateInFilter }}'
                CellValueSynonyms:
                  - CellValue: '{{ CellValue }}'
                    Synonyms:
                      - '{{ Synonyms[0] }}'
                NonAdditive: '{{ NonAdditive }}'
            CalculatedFields:
              - CalculatedFieldName: '{{ CalculatedFieldName }}'
                CalculatedFieldDescription: '{{ CalculatedFieldDescription }}'
                Expression: '{{ Expression }}'
                CalculatedFieldSynonyms:
                  - '{{ CalculatedFieldSynonyms[0] }}'
                IsIncludedInTopic: '{{ IsIncludedInTopic }}'
                DisableIndexing: '{{ DisableIndexing }}'
                ColumnDataRole: null
                TimeGranularity: null
                DefaultFormatting: null
                Aggregation: null
                ComparativeOrder: null
                SemanticType: null
                AllowedAggregations:
                  - null
                NotAllowedAggregations:
                  - null
                NeverAggregateInFilter: '{{ NeverAggregateInFilter }}'
                CellValueSynonyms:
                  - null
                NonAdditive: '{{ NonAdditive }}'
            NamedEntities:
              - EntityName: '{{ EntityName }}'
                EntityDescription: '{{ EntityDescription }}'
                EntitySynonyms:
                  - '{{ EntitySynonyms[0] }}'
                SemanticEntityType:
                  TypeName: '{{ TypeName }}'
                  SubTypeName: '{{ SubTypeName }}'
                  TypeParameters: null
                Definition:
                  - FieldName: '{{ FieldName }}'
                    PropertyName: '{{ PropertyName }}'
                    PropertyRole: '{{ PropertyRole }}'
                    PropertyUsage: '{{ PropertyUsage }}'
                    Metric:
                      Aggregation: '{{ Aggregation }}'
                      AggregationFunctionParameters: {}
      - name: Description
        value: '{{ Description }}'
      - name: FolderArns
        value:
          - '{{ FolderArns[0] }}'
      - name: Name
        value: '{{ Name }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: TopicId
        value: '{{ TopicId }}'
      - name: UserExperienceVersion
        value: '{{ UserExperienceVersion }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.quicksight.topics
SET data__PatchDocument = string('{{ {
    "ConfigOptions": config_options,
    "CustomInstructions": custom_instructions,
    "DataSets": data_sets,
    "Description": description,
    "Name": name,
    "UserExperienceVersion": user_experience_version
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<AwsAccountId>|<TopicId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.quicksight.topics
WHERE data__Identifier = '<AwsAccountId|TopicId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>topics</code> resource, the following permissions are required:

### Create
```json
quicksight:CreateTopic,
quicksight:PassDataSet,
quicksight:DescribeTopicRefresh,
quicksight:TagResource
```

### Read
```json
quicksight:DescribeTopic,
quicksight:ListTagsForResource
```

### Update
```json
quicksight:UpdateTopic,
quicksight:PassDataSet,
quicksight:DescribeTopicRefresh
```

### Delete
```json
quicksight:DeleteTopic
```

### List
```json
quicksight:ListTopics
```
