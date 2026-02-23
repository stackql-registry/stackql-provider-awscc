---
title: analyses
hide_title: false
hide_table_of_contents: false
keywords:
  - analyses
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

Creates, updates, deletes or gets an <code>analysis</code> resource or lists <code>analyses</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>analyses</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of the AWS::QuickSight::Analysis Resource Type.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.quicksight.analyses" /></td></tr>
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
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "created_time",
    "type": "string",
    "description": "<p>The time that the analysis was created.</p>"
  },
  {
    "name": "parameters",
    "type": "object",
    "description": "<p>A list of Amazon QuickSight parameters and the list's override values.</p>",
    "children": [
      {
        "name": "string_parameters",
        "type": "array",
        "description": "<p>The parameters that have a data type of string.</p>",
        "children": [
          {
            "name": "values",
            "type": "array",
            "description": "<p>The values of a string parameter.</p>"
          },
          {
            "name": "name",
            "type": "string",
            "description": "<p>A display name for a string parameter.</p>"
          }
        ]
      },
      {
        "name": "decimal_parameters",
        "type": "array",
        "description": "<p>The parameters that have a data type of decimal.</p>",
        "children": [
          {
            "name": "values",
            "type": "array",
            "description": "<p>The values for the decimal parameter.</p>"
          },
          {
            "name": "name",
            "type": "string",
            "description": "<p>A display name for the decimal parameter.</p>"
          }
        ]
      },
      {
        "name": "integer_parameters",
        "type": "array",
        "description": "<p>The parameters that have a data type of integer.</p>",
        "children": [
          {
            "name": "values",
            "type": "array",
            "description": "<p>The values for the integer parameter.</p>"
          },
          {
            "name": "name",
            "type": "string",
            "description": "<p>The name of the integer parameter.</p>"
          }
        ]
      },
      {
        "name": "date_time_parameters",
        "type": "array",
        "description": "<p>The parameters that have a data type of date-time.</p>",
        "children": [
          {
            "name": "values",
            "type": "array",
            "description": "<p>The values for the date-time parameter.</p>"
          },
          {
            "name": "name",
            "type": "string",
            "description": "<p>A display name for the date-time parameter.</p>"
          }
        ]
      }
    ]
  },
  {
    "name": "data_set_arns",
    "type": "array",
    "description": "<p>The ARNs of the datasets of the analysis.</p>"
  },
  {
    "name": "source_entity",
    "type": "object",
    "description": "<p>The source entity of an analysis.</p>",
    "children": [
      {
        "name": "source_template",
        "type": "object",
        "description": "<p>The source template of an analysis.</p>",
        "children": [
          {
            "name": "data_set_references",
            "type": "array",
            "description": "<p>The dataset references of the source template of an analysis.</p>",
            "children": [
              {
                "name": "data_set_arn",
                "type": "string",
                "description": "<p>Dataset Amazon Resource Name (ARN).</p>"
              },
              {
                "name": "data_set_placeholder",
                "type": "string",
                "description": "<p>Dataset placeholder.</p>"
              }
            ]
          },
          {
            "name": "arn",
            "type": "string",
            "description": "<p>The Amazon Resource Name (ARN) of the source template of an analysis.</p>"
          }
        ]
      }
    ]
  },
  {
    "name": "theme_arn",
    "type": "string",
    "description": "<p>The ARN of the theme of the analysis.</p>"
  },
  {
    "name": "definition",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "timezone",
            "type": "string",
            "description": ""
          },
          {
            "name": "week_start",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "filter_groups",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "status",
            "type": "string",
            "description": ""
          },
          {
            "name": "filters",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "nested_filter",
                "type": "object",
                "description": ""
              },
              {
                "name": "numeric_equality_filter",
                "type": "object",
                "description": ""
              },
              {
                "name": "numeric_range_filter",
                "type": "object",
                "description": ""
              },
              {
                "name": "time_range_filter",
                "type": "object",
                "description": ""
              },
              {
                "name": "relative_dates_filter",
                "type": "object",
                "description": ""
              },
              {
                "name": "top_bottom_filter",
                "type": "object",
                "description": ""
              },
              {
                "name": "time_equality_filter",
                "type": "object",
                "description": ""
              },
              {
                "name": "category_filter",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "cross_dataset",
            "type": "string",
            "description": ""
          },
          {
            "name": "scope_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "all_sheets",
                "type": "object",
                "description": ""
              },
              {
                "name": "selected_sheets",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "filter_group_id",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "query_execution_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "query_execution_mode",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "static_files",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "image_static_file",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "static_file_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "source",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "spatial_static_file",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "static_file_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "source",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "calculated_fields",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "expression",
            "type": "string",
            "description": ""
          },
          {
            "name": "data_set_identifier",
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
        "name": "data_set_identifier_declarations",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "identifier",
            "type": "string",
            "description": ""
          },
          {
            "name": "data_set_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "column_configurations",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "role",
            "type": "string",
            "description": ""
          },
          {
            "name": "format_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "number_format_configuration",
                "type": "object",
                "description": ""
              },
              {
                "name": "date_time_format_configuration",
                "type": "object",
                "description": ""
              },
              {
                "name": "string_format_configuration",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "column",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "column_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "data_set_identifier",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "colors_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "custom_colors",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "analysis_defaults",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "default_new_sheet_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "sheet_content_type",
                "type": "string",
                "description": ""
              },
              {
                "name": "interactive_layout_configuration",
                "type": "object",
                "description": ""
              },
              {
                "name": "paginated_layout_configuration",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "sheets",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "description",
            "type": "string",
            "description": ""
          },
          {
            "name": "parameter_controls",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "slider",
                "type": "object",
                "description": ""
              },
              {
                "name": "text_area",
                "type": "object",
                "description": ""
              },
              {
                "name": "dropdown",
                "type": "object",
                "description": ""
              },
              {
                "name": "text_field",
                "type": "object",
                "description": ""
              },
              {
                "name": "list",
                "type": "object",
                "description": ""
              },
              {
                "name": "date_time_picker",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "content_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "sheet_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "images",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "actions",
                "type": "array",
                "description": ""
              },
              {
                "name": "sheet_image_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "tooltip",
                "type": "object",
                "description": ""
              },
              {
                "name": "scaling",
                "type": "object",
                "description": ""
              },
              {
                "name": "interactions",
                "type": "object",
                "description": ""
              },
              {
                "name": "source",
                "type": "object",
                "description": ""
              },
              {
                "name": "image_content_alt_text",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "sheet_control_layouts",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "configuration",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "title",
            "type": "string",
            "description": ""
          },
          {
            "name": "name",
            "type": "string",
            "description": ""
          },
          {
            "name": "text_boxes",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "sheet_text_box_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "content",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "layouts",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "configuration",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "filter_controls",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "slider",
                "type": "object",
                "description": ""
              },
              {
                "name": "text_area",
                "type": "object",
                "description": ""
              },
              {
                "name": "dropdown",
                "type": "object",
                "description": ""
              },
              {
                "name": "text_field",
                "type": "object",
                "description": ""
              },
              {
                "name": "list",
                "type": "object",
                "description": ""
              },
              {
                "name": "date_time_picker",
                "type": "object",
                "description": ""
              },
              {
                "name": "relative_date_time",
                "type": "object",
                "description": ""
              },
              {
                "name": "cross_sheet",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "visuals",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "funnel_chart_visual",
                "type": "object",
                "description": ""
              },
              {
                "name": "box_plot_visual",
                "type": "object",
                "description": ""
              },
              {
                "name": "geospatial_map_visual",
                "type": "object",
                "description": ""
              },
              {
                "name": "scatter_plot_visual",
                "type": "object",
                "description": ""
              },
              {
                "name": "radar_chart_visual",
                "type": "object",
                "description": ""
              },
              {
                "name": "combo_chart_visual",
                "type": "object",
                "description": ""
              },
              {
                "name": "word_cloud_visual",
                "type": "object",
                "description": ""
              },
              {
                "name": "sankey_diagram_visual",
                "type": "object",
                "description": ""
              },
              {
                "name": "gauge_chart_visual",
                "type": "object",
                "description": ""
              },
              {
                "name": "filled_map_visual",
                "type": "object",
                "description": ""
              },
              {
                "name": "waterfall_visual",
                "type": "object",
                "description": ""
              },
              {
                "name": "custom_content_visual",
                "type": "object",
                "description": ""
              },
              {
                "name": "pie_chart_visual",
                "type": "object",
                "description": ""
              },
              {
                "name": "k_pi_visual",
                "type": "object",
                "description": ""
              },
              {
                "name": "histogram_visual",
                "type": "object",
                "description": ""
              },
              {
                "name": "plugin_visual",
                "type": "object",
                "description": ""
              },
              {
                "name": "table_visual",
                "type": "object",
                "description": ""
              },
              {
                "name": "pivot_table_visual",
                "type": "object",
                "description": ""
              },
              {
                "name": "bar_chart_visual",
                "type": "object",
                "description": ""
              },
              {
                "name": "heat_map_visual",
                "type": "object",
                "description": ""
              },
              {
                "name": "tree_map_visual",
                "type": "object",
                "description": ""
              },
              {
                "name": "insight_visual",
                "type": "object",
                "description": ""
              },
              {
                "name": "line_chart_visual",
                "type": "object",
                "description": ""
              },
              {
                "name": "empty_visual",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "parameter_declarations",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "string_parameter_declaration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "mapped_data_set_parameters",
                "type": "array",
                "description": ""
              },
              {
                "name": "default_values",
                "type": "object",
                "description": ""
              },
              {
                "name": "parameter_value_type",
                "type": "string",
                "description": ""
              },
              {
                "name": "value_when_unset",
                "type": "object",
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
            "name": "date_time_parameter_declaration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "mapped_data_set_parameters",
                "type": "array",
                "description": ""
              },
              {
                "name": "default_values",
                "type": "object",
                "description": ""
              },
              {
                "name": "time_granularity",
                "type": "string",
                "description": ""
              },
              {
                "name": "value_when_unset",
                "type": "object",
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
            "name": "decimal_parameter_declaration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "mapped_data_set_parameters",
                "type": "array",
                "description": ""
              },
              {
                "name": "default_values",
                "type": "object",
                "description": ""
              },
              {
                "name": "parameter_value_type",
                "type": "string",
                "description": ""
              },
              {
                "name": "value_when_unset",
                "type": "object",
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
            "name": "integer_parameter_declaration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "mapped_data_set_parameters",
                "type": "array",
                "description": ""
              },
              {
                "name": "default_values",
                "type": "object",
                "description": ""
              },
              {
                "name": "parameter_value_type",
                "type": "string",
                "description": ""
              },
              {
                "name": "value_when_unset",
                "type": "object",
                "description": ""
              },
              {
                "name": "name",
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
    "name": "last_updated_time",
    "type": "string",
    "description": "<p>The time that the analysis was last updated.</p>"
  },
  {
    "name": "validation_strategy",
    "type": "object",
    "description": "<p>The option to relax the validation that is required to create and update analyses, dashboards, and templates with definition objects. When you set this value to &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95;, validation is skipped for specific errors.</p>",
    "children": [
      {
        "name": "mode",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "folder_arns",
    "type": "array",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": "<p>The descriptive name of the analysis.</p>"
  },
  {
    "name": "errors",
    "type": "array",
    "description": "<p>Errors associated with the analysis.</p>",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "message",
        "type": "string",
        "description": "<p>The message associated with the analysis error.</p>"
      },
      {
        "name": "violated_entities",
        "type": "array",
        "description": "<p>Lists the violated entities that caused the analysis error</p>",
        "children": [
          {
            "name": "path",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "analysis_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "aws_account_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "permissions",
    "type": "array",
    "description": "",
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
    "name": "arn",
    "type": "string",
    "description": "<p>The Amazon Resource Name (ARN) of the analysis.</p>"
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
    "name": "sheets",
    "type": "array",
    "description": "<p>A list of the associated sheets with the unique identifier and name of each sheet.</p>",
    "children": [
      {
        "name": "sheet_id",
        "type": "string",
        "description": "<p>The unique identifier associated with a sheet.</p>"
      },
      {
        "name": "name",
        "type": "string",
        "description": "<p>The name of a sheet. This name is displayed on the sheet's tab in the Amazon QuickSight<br />console.</p>"
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
    "name": "analysis_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-analysis.html"><code>AWS::QuickSight::Analysis</code></a>.

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
    <td><code>analyses</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AwsAccountId, AnalysisId, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>analyses</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>analyses</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>analyses_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>analyses</code></td>
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

Gets all properties from an individual <code>analysis</code>.
```sql
SELECT
region,
status,
created_time,
parameters,
data_set_arns,
source_entity,
theme_arn,
definition,
last_updated_time,
validation_strategy,
folder_arns,
name,
errors,
analysis_id,
aws_account_id,
permissions,
arn,
tags,
sheets
FROM awscc.quicksight.analyses
WHERE region = 'us-east-1' AND Identifier = '{{ analysis_id }}|{{ aws_account_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>analyses</code> in a region.
```sql
SELECT
region,
analysis_id,
aws_account_id
FROM awscc.quicksight.analyses_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>analysis</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.quicksight.analyses (
 Name,
 AnalysisId,
 AwsAccountId,
 region
)
SELECT
'{{ name }}',
 '{{ analysis_id }}',
 '{{ aws_account_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.quicksight.analyses (
 Status,
 Parameters,
 SourceEntity,
 ThemeArn,
 Definition,
 ValidationStrategy,
 FolderArns,
 Name,
 Errors,
 AnalysisId,
 AwsAccountId,
 Permissions,
 Tags,
 Sheets,
 region
)
SELECT
 '{{ status }}',
 '{{ parameters }}',
 '{{ source_entity }}',
 '{{ theme_arn }}',
 '{{ definition }}',
 '{{ validation_strategy }}',
 '{{ folder_arns }}',
 '{{ name }}',
 '{{ errors }}',
 '{{ analysis_id }}',
 '{{ aws_account_id }}',
 '{{ permissions }}',
 '{{ tags }}',
 '{{ sheets }}',
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
  - name: analysis
    props:
      - name: status
        value: '{{ status }}'
      - name: parameters
        value:
          string_parameters:
            - values:
                - '{{ values[0] }}'
              name: '{{ name }}'
          decimal_parameters:
            - values:
                - null
              name: '{{ name }}'
          integer_parameters:
            - values:
                - null
              name: '{{ name }}'
          date_time_parameters:
            - values:
                - '{{ values[0] }}'
              name: '{{ name }}'
      - name: source_entity
        value:
          source_template:
            data_set_references:
              - data_set_arn: '{{ data_set_arn }}'
                data_set_placeholder: '{{ data_set_placeholder }}'
            arn: '{{ arn }}'
      - name: theme_arn
        value: '{{ theme_arn }}'
      - name: definition
        value:
          options:
            timezone: '{{ timezone }}'
            week_start: '{{ week_start }}'
          filter_groups:
            - status: '{{ status }}'
              filters:
                - nested_filter:
                    column:
                      column_name: '{{ column_name }}'
                      data_set_identifier: '{{ data_set_identifier }}'
                    inner_filter:
                      category_inner_filter:
                        configuration:
                          custom_filter_list_configuration:
                            category_values:
                              - '{{ category_values[0] }}'
                            null_option: '{{ null_option }}'
                            match_operator: '{{ match_operator }}'
                            select_all_options: '{{ select_all_options }}'
                          custom_filter_configuration:
                            category_value: '{{ category_value }}'
                            parameter_name: '{{ parameter_name }}'
                            null_option: null
                            match_operator: null
                            select_all_options: null
                          filter_list_configuration:
                            category_values:
                              - '{{ category_values[0] }}'
                            null_option: null
                            match_operator: null
                            select_all_options: null
                        column: null
                        default_filter_control_configuration:
                          control_options:
                            default_slider_options:
                              type: '{{ type }}'
                              step_size: null
                              display_options:
                                title_options:
                                  custom_label: '{{ custom_label }}'
                                  visibility: null
                                  font_configuration:
                                    font_family: '{{ font_family }}'
                                    font_style: '{{ font_style }}'
                                    font_size:
                                      relative: '{{ relative }}'
                                      absolute: '{{ absolute }}'
                                    font_decoration: '{{ font_decoration }}'
                                    font_color: '{{ font_color }}'
                                    font_weight:
                                      name: '{{ name }}'
                                info_icon_label_options:
                                  visibility: null
                                  info_icon_text: '{{ info_icon_text }}'
                              maximum_value: null
                              minimum_value: null
                            default_relative_date_time_options:
                              display_options:
                                title_options: null
                                info_icon_label_options: null
                                date_time_format: '{{ date_time_format }}'
                              commit_mode: '{{ commit_mode }}'
                            default_text_field_options:
                              display_options:
                                title_options: null
                                placeholder_options:
                                  visibility: null
                                info_icon_label_options: null
                            default_text_area_options:
                              delimiter: '{{ delimiter }}'
                              display_options:
                                title_options: null
                                placeholder_options: null
                                info_icon_label_options: null
                            default_dropdown_options:
                              type: '{{ type }}'
                              display_options:
                                title_options: null
                                select_all_options:
                                  visibility: null
                                info_icon_label_options: null
                              commit_mode: null
                              selectable_values:
                                values:
                                  - '{{ values[0] }}'
                            default_date_time_picker_options:
                              type: '{{ type }}'
                              display_options:
                                title_options: null
                                info_icon_label_options: null
                                helper_text_visibility: null
                                date_icon_visibility: null
                                date_time_format: '{{ date_time_format }}'
                              commit_mode: null
                            default_list_options:
                              type: null
                              display_options:
                                title_options: null
                                search_options:
                                  visibility: null
                                select_all_options: null
                                info_icon_label_options: null
                              selectable_values: null
                          title: '{{ title }}'
                    include_inner_set: '{{ include_inner_set }}'
                    filter_id: '{{ filter_id }}'
                  numeric_equality_filter:
                    aggregation_function:
                      attribute_aggregation_function:
                        simple_attribute_aggregation: '{{ simple_attribute_aggregation }}'
                        value_for_multiple_values: '{{ value_for_multiple_values }}'
                      date_aggregation_function: '{{ date_aggregation_function }}'
                      numerical_aggregation_function:
                        percentile_aggregation:
                          percentile_value: null
                        simple_numerical_aggregation: '{{ simple_numerical_aggregation }}'
                      categorical_aggregation_function: '{{ categorical_aggregation_function }}'
                    column: null
                    value: null
                    parameter_name: '{{ parameter_name }}'
                    null_option: null
                    match_operator: '{{ match_operator }}'
                    select_all_options: '{{ select_all_options }}'
                    default_filter_control_configuration: null
                    filter_id: '{{ filter_id }}'
                  numeric_range_filter:
                    aggregation_function: null
                    column: null
                    include_maximum: '{{ include_maximum }}'
                    range_minimum:
                      static_value: null
                      parameter: '{{ parameter }}'
                    null_option: null
                    select_all_options: null
                    default_filter_control_configuration: null
                    filter_id: '{{ filter_id }}'
                    range_maximum: null
                    include_minimum: '{{ include_minimum }}'
                  time_range_filter:
                    range_minimum_value:
                      rolling_date:
                        expression: '{{ expression }}'
                        data_set_identifier: '{{ data_set_identifier }}'
                      static_value: '{{ static_value }}'
                      parameter: '{{ parameter }}'
                    column: null
                    range_maximum_value: null
                    include_maximum: '{{ include_maximum }}'
                    time_granularity: '{{ time_granularity }}'
                    null_option: null
                    default_filter_control_configuration: null
                    filter_id: '{{ filter_id }}'
                    include_minimum: '{{ include_minimum }}'
                    exclude_period_configuration:
                      status: null
                      amount: null
                      granularity: null
                  relative_dates_filter:
                    relative_date_value: null
                    column: null
                    relative_date_type: '{{ relative_date_type }}'
                    time_granularity: null
                    parameter_name: '{{ parameter_name }}'
                    null_option: null
                    default_filter_control_configuration: null
                    filter_id: '{{ filter_id }}'
                    anchor_date_configuration:
                      anchor_option: '{{ anchor_option }}'
                      parameter_name: '{{ parameter_name }}'
                    minimum_granularity: null
                    exclude_period_configuration: null
                  top_bottom_filter:
                    aggregation_sort_configurations:
                      - aggregation_function: null
                        sort_direction: '{{ sort_direction }}'
                        column: null
                    column: null
                    time_granularity: null
                    parameter_name: '{{ parameter_name }}'
                    limit: null
                    default_filter_control_configuration: null
                    filter_id: '{{ filter_id }}'
                  time_equality_filter:
                    column: null
                    rolling_date: null
                    value: '{{ value }}'
                    time_granularity: null
                    parameter_name: '{{ parameter_name }}'
                    default_filter_control_configuration: null
                    filter_id: '{{ filter_id }}'
                  category_filter:
                    configuration: null
                    column: null
                    default_filter_control_configuration: null
                    filter_id: '{{ filter_id }}'
              cross_dataset: '{{ cross_dataset }}'
              scope_configuration:
                all_sheets: {}
                selected_sheets:
                  sheet_visual_scoping_configurations:
                    - scope: '{{ scope }}'
                      sheet_id: '{{ sheet_id }}'
                      visual_ids:
                        - '{{ visual_ids[0] }}'
              filter_group_id: '{{ filter_group_id }}'
          query_execution_options:
            query_execution_mode: '{{ query_execution_mode }}'
          static_files:
            - image_static_file:
                static_file_id: '{{ static_file_id }}'
                source:
                  url_options:
                    url: '{{ url }}'
                  s3_options:
                    bucket_name: '{{ bucket_name }}'
                    object_key: '{{ object_key }}'
                    region: '{{ region }}'
              spatial_static_file:
                static_file_id: '{{ static_file_id }}'
                source: null
          calculated_fields:
            - expression: '{{ expression }}'
              data_set_identifier: '{{ data_set_identifier }}'
              name: '{{ name }}'
          data_set_identifier_declarations:
            - identifier: '{{ identifier }}'
              data_set_arn: '{{ data_set_arn }}'
          column_configurations:
            - role: '{{ role }}'
              format_configuration:
                number_format_configuration:
                  format_configuration:
                    number_display_format_configuration:
                      negative_value_configuration:
                        display_mode: '{{ display_mode }}'
                      decimal_places_configuration:
                        decimal_places: null
                      number_scale: '{{ number_scale }}'
                      null_value_format_configuration:
                        null_string: '{{ null_string }}'
                      suffix: '{{ suffix }}'
                      separator_configuration:
                        decimal_separator: '{{ decimal_separator }}'
                        thousands_separator:
                          symbol: null
                          visibility: null
                          grouping_style: '{{ grouping_style }}'
                      prefix: '{{ prefix }}'
                    currency_display_format_configuration:
                      negative_value_configuration: null
                      decimal_places_configuration: null
                      number_scale: null
                      null_value_format_configuration: null
                      suffix: '{{ suffix }}'
                      separator_configuration: null
                      symbol: '{{ symbol }}'
                      prefix: '{{ prefix }}'
                    percentage_display_format_configuration:
                      negative_value_configuration: null
                      decimal_places_configuration: null
                      null_value_format_configuration: null
                      suffix: '{{ suffix }}'
                      separator_configuration: null
                      prefix: '{{ prefix }}'
                date_time_format_configuration:
                  numeric_format_configuration: null
                  null_value_format_configuration: null
                  date_time_format: '{{ date_time_format }}'
                string_format_configuration:
                  numeric_format_configuration: null
                  null_value_format_configuration: null
              column: null
              colors_configuration:
                custom_colors:
                  - color: '{{ color }}'
                    field_value: '{{ field_value }}'
                    special_value: '{{ special_value }}'
          analysis_defaults:
            default_new_sheet_configuration:
              sheet_content_type: '{{ sheet_content_type }}'
              interactive_layout_configuration:
                free_form:
                  canvas_size_options:
                    screen_canvas_size_options:
                      optimized_view_port_width: '{{ optimized_view_port_width }}'
                grid:
                  canvas_size_options:
                    screen_canvas_size_options:
                      optimized_view_port_width: '{{ optimized_view_port_width }}'
                      resize_option: '{{ resize_option }}'
              paginated_layout_configuration:
                section_based:
                  canvas_size_options:
                    paper_canvas_size_options:
                      paper_margin:
                        left: '{{ left }}'
                        top: '{{ top }}'
                        right: '{{ right }}'
                        bottom: '{{ bottom }}'
                      paper_size: '{{ paper_size }}'
                      paper_orientation: '{{ paper_orientation }}'
          sheets:
            - description: '{{ description }}'
              parameter_controls:
                - slider:
                    parameter_control_id: '{{ parameter_control_id }}'
                    step_size: null
                    display_options: null
                    source_parameter_name: '{{ source_parameter_name }}'
                    title: '{{ title }}'
                    maximum_value: null
                    minimum_value: null
                  text_area:
                    parameter_control_id: '{{ parameter_control_id }}'
                    delimiter: '{{ delimiter }}'
                    display_options: null
                    source_parameter_name: '{{ source_parameter_name }}'
                    title: '{{ title }}'
                  dropdown:
                    parameter_control_id: '{{ parameter_control_id }}'
                    type: null
                    display_options: null
                    source_parameter_name: '{{ source_parameter_name }}'
                    cascading_control_configuration:
                      source_controls:
                        - source_sheet_control_id: '{{ source_sheet_control_id }}'
                          column_to_match: null
                    title: '{{ title }}'
                    commit_mode: null
                    selectable_values:
                      link_to_data_set_column: null
                      values:
                        - '{{ values[0] }}'
                  text_field:
                    parameter_control_id: '{{ parameter_control_id }}'
                    display_options: null
                    source_parameter_name: '{{ source_parameter_name }}'
                    title: '{{ title }}'
                  list:
                    parameter_control_id: '{{ parameter_control_id }}'
                    type: null
                    display_options: null
                    source_parameter_name: '{{ source_parameter_name }}'
                    cascading_control_configuration: null
                    title: '{{ title }}'
                    selectable_values: null
                  date_time_picker:
                    parameter_control_id: '{{ parameter_control_id }}'
                    display_options: null
                    source_parameter_name: '{{ source_parameter_name }}'
                    title: '{{ title }}'
              content_type: null
              sheet_id: '{{ sheet_id }}'
              images:
                - actions:
                    - status: null
                      trigger: '{{ trigger }}'
                      custom_action_id: '{{ custom_action_id }}'
                      name: '{{ name }}'
                      action_operations:
                        - navigation_operation:
                            local_navigation_configuration:
                              target_sheet_id: '{{ target_sheet_id }}'
                          set_parameters_operation:
                            parameter_value_configurations:
                              - destination_parameter_name: '{{ destination_parameter_name }}'
                                value:
                                  custom_values_configuration:
                                    include_null_value: '{{ include_null_value }}'
                                    custom_values:
                                      decimal_values:
                                        - null
                                      integer_values:
                                        - null
                                      string_values:
                                        - '{{ string_values[0] }}'
                                      date_time_values:
                                        - '{{ date_time_values[0] }}'
                                  source_parameter_name: '{{ source_parameter_name }}'
                                  select_all_value_options: '{{ select_all_value_options }}'
                                  source_field: '{{ source_field }}'
                                  source_column: null
                          url_operation:
                            url_template: '{{ url_template }}'
                            url_target: '{{ url_target }}'
                  sheet_image_id: '{{ sheet_image_id }}'
                  tooltip:
                    visibility: null
                    tooltip_text:
                      plain_text: '{{ plain_text }}'
                  scaling:
                    scaling_type: '{{ scaling_type }}'
                  interactions:
                    image_menu_option:
                      availability_status: '{{ availability_status }}'
                  source:
                    sheet_image_static_file_source:
                      static_file_id: '{{ static_file_id }}'
                  image_content_alt_text: '{{ image_content_alt_text }}'
              sheet_control_layouts:
                - configuration:
                    grid_layout:
                      canvas_size_options: null
                      elements:
                        - element_type: '{{ element_type }}'
                          column_span: null
                          column_index: null
                          row_index: null
                          row_span: null
                          element_id: '{{ element_id }}'
              title: '{{ title }}'
              name: '{{ name }}'
              text_boxes:
                - sheet_text_box_id: '{{ sheet_text_box_id }}'
                  content: '{{ content }}'
              layouts:
                - configuration:
                    grid_layout: null
                    free_form_layout:
                      canvas_size_options: null
                      elements:
                        - element_type: null
                          border_style:
                            color: '{{ color }}'
                            visibility: null
                          height: '{{ height }}'
                          visibility: null
                          rendering_rules:
                            - expression: '{{ expression }}'
                              configuration_overrides:
                                visibility: null
                          y_axis_location: '{{ y_axis_location }}'
                          loading_animation:
                            visibility: null
                          width: '{{ width }}'
                          background_style:
                            color: '{{ color }}'
                            visibility: null
                          element_id: '{{ element_id }}'
                          x_axis_location: '{{ x_axis_location }}'
                          selected_border_style: null
                    section_based_layout:
                      canvas_size_options: null
                      footer_sections:
                        - layout:
                            free_form_layout:
                              elements:
                                - null
                          style:
                            padding: null
                            height: '{{ height }}'
                          section_id: '{{ section_id }}'
                      body_sections:
                        - content:
                            layout: null
                          style: null
                          page_break_configuration:
                            after:
                              status: '{{ status }}'
                          section_id: '{{ section_id }}'
                          repeat_configuration:
                            dimension_configurations:
                              - dynamic_numeric_dimension_configuration:
                                  column: null
                                  sort_by_metrics:
                                    - aggregation_function: null
                                      sort_by: null
                                      direction: null
                                  limit: null
                                dynamic_category_dimension_configuration:
                                  column: null
                                  sort_by_metrics:
                                    - null
                                  limit: null
                            non_repeating_visuals:
                              - '{{ non_repeating_visuals[0] }}'
                            page_break_configuration:
                              after: null
                      header_sections:
                        - null
              filter_controls:
                - slider:
                    filter_control_id: '{{ filter_control_id }}'
                    type: null
                    step_size: null
                    display_options: null
                    title: '{{ title }}'
                    maximum_value: null
                    source_filter_id: '{{ source_filter_id }}'
                    minimum_value: null
                  text_area:
                    filter_control_id: '{{ filter_control_id }}'
                    delimiter: '{{ delimiter }}'
                    display_options: null
                    title: '{{ title }}'
                    source_filter_id: '{{ source_filter_id }}'
                  dropdown:
                    filter_control_id: '{{ filter_control_id }}'
                    type: null
                    display_options: null
                    cascading_control_configuration: null
                    title: '{{ title }}'
                    commit_mode: null
                    source_filter_id: '{{ source_filter_id }}'
                    selectable_values: null
                  text_field:
                    filter_control_id: '{{ filter_control_id }}'
                    display_options: null
                    title: '{{ title }}'
                    source_filter_id: '{{ source_filter_id }}'
                  list:
                    filter_control_id: '{{ filter_control_id }}'
                    type: null
                    display_options: null
                    cascading_control_configuration: null
                    title: '{{ title }}'
                    source_filter_id: '{{ source_filter_id }}'
                    selectable_values: null
                  date_time_picker:
                    filter_control_id: '{{ filter_control_id }}'
                    type: null
                    display_options: null
                    title: '{{ title }}'
                    commit_mode: null
                    source_filter_id: '{{ source_filter_id }}'
                  relative_date_time:
                    filter_control_id: '{{ filter_control_id }}'
                    display_options: null
                    title: '{{ title }}'
                    commit_mode: null
                    source_filter_id: '{{ source_filter_id }}'
                  cross_sheet:
                    filter_control_id: '{{ filter_control_id }}'
                    cascading_control_configuration: null
                    source_filter_id: '{{ source_filter_id }}'
              visuals:
                - funnel_chart_visual:
                    subtitle:
                      visibility: null
                      format_text:
                        rich_text: '{{ rich_text }}'
                        plain_text: '{{ plain_text }}'
                    visual_id: '{{ visual_id }}'
                    chart_configuration:
                      sort_configuration:
                        category_items_limit:
                          items_limit: null
                          other_categories: '{{ other_categories }}'
                        category_sort:
                          - field_sort:
                              field_id: '{{ field_id }}'
                              direction: null
                            column_sort: null
                      data_label_options:
                        measure_label_visibility: null
                        position: '{{ position }}'
                        visibility: null
                        category_label_visibility: null
                        label_color: '{{ label_color }}'
                        measure_data_label_style: '{{ measure_data_label_style }}'
                        label_font_configuration: null
                      category_label_options:
                        visibility: null
                        sort_icon_visibility: null
                        axis_label_options:
                          - custom_label: '{{ custom_label }}'
                            apply_to:
                              column: null
                              field_id: '{{ field_id }}'
                            font_configuration: null
                      field_wells:
                        funnel_chart_aggregated_field_wells:
                          category:
                            - date_dimension_field:
                                hierarchy_id: '{{ hierarchy_id }}'
                                format_configuration: null
                                column: null
                                field_id: '{{ field_id }}'
                                date_granularity: null
                              numerical_dimension_field:
                                hierarchy_id: '{{ hierarchy_id }}'
                                format_configuration: null
                                column: null
                                field_id: '{{ field_id }}'
                              categorical_dimension_field:
                                hierarchy_id: '{{ hierarchy_id }}'
                                format_configuration: null
                                column: null
                                field_id: '{{ field_id }}'
                          values:
                            - date_measure_field:
                                aggregation_function: null
                                format_configuration: null
                                column: null
                                field_id: '{{ field_id }}'
                              numerical_measure_field:
                                aggregation_function: null
                                format_configuration: null
                                column: null
                                field_id: '{{ field_id }}'
                              categorical_measure_field:
                                aggregation_function: null
                                format_configuration: null
                                column: null
                                field_id: '{{ field_id }}'
                              calculated_measure_field:
                                expression: '{{ expression }}'
                                field_id: '{{ field_id }}'
                      tooltip:
                        selected_tooltip_type: '{{ selected_tooltip_type }}'
                        tooltip_visibility: null
                        field_based_tooltip:
                          tooltip_fields:
                            - field_tooltip_item:
                                tooltip_target: '{{ tooltip_target }}'
                                field_id: '{{ field_id }}'
                                label: '{{ label }}'
                                visibility: null
                              column_tooltip_item:
                                aggregation: null
                                tooltip_target: null
                                column: null
                                label: '{{ label }}'
                                visibility: null
                          aggregation_visibility: null
                          tooltip_title_type: '{{ tooltip_title_type }}'
                      interactions:
                        context_menu_option:
                          availability_status: null
                        visual_menu_option:
                          availability_status: null
                      value_label_options: null
                      visual_palette:
                        chart_color: '{{ chart_color }}'
                        color_map:
                          - element:
                              data_path_type:
                                pivot_table_data_path_type: '{{ pivot_table_data_path_type }}'
                              field_id: '{{ field_id }}'
                              field_value: '{{ field_value }}'
                            color: '{{ color }}'
                            time_granularity: null
                    actions:
                      - status: null
                        trigger: '{{ trigger }}'
                        custom_action_id: '{{ custom_action_id }}'
                        name: '{{ name }}'
                        action_operations:
                          - navigation_operation: null
                            set_parameters_operation: null
                            filter_operation:
                              selected_fields_configuration:
                                selected_columns:
                                  - null
                                selected_fields:
                                  - '{{ selected_fields[0] }}'
                                selected_field_options: '{{ selected_field_options }}'
                              target_visuals_configuration:
                                same_sheet_target_visual_configuration:
                                  target_visual_options: '{{ target_visual_options }}'
                                  target_visuals:
                                    - '{{ target_visuals[0] }}'
                            url_operation: null
                    title:
                      visibility: null
                      format_text:
                        rich_text: '{{ rich_text }}'
                        plain_text: '{{ plain_text }}'
                    visual_content_alt_text: '{{ visual_content_alt_text }}'
                    column_hierarchies:
                      - date_time_hierarchy:
                          hierarchy_id: '{{ hierarchy_id }}'
                          drill_down_filters:
                            - numeric_equality_filter:
                                column: null
                                value: null
                              time_range_filter:
                                column: null
                                range_minimum: '{{ range_minimum }}'
                                time_granularity: null
                                range_maximum: '{{ range_maximum }}'
                              category_filter:
                                column: null
                                category_values:
                                  - '{{ category_values[0] }}'
                        explicit_hierarchy:
                          hierarchy_id: '{{ hierarchy_id }}'
                          drill_down_filters:
                            - null
                          columns:
                            - null
                        predefined_hierarchy:
                          hierarchy_id: '{{ hierarchy_id }}'
                          drill_down_filters:
                            - null
                          columns:
                            - null
                  box_plot_visual:
                    subtitle: null
                    visual_id: '{{ visual_id }}'
                    chart_configuration:
                      sort_configuration:
                        category_sort:
                          - null
                        pagination_configuration:
                          page_size: null
                          page_number: null
                      legend:
                        position: '{{ position }}'
                        value_font_configuration: null
                        title: null
                        visibility: null
                        height: '{{ height }}'
                        width: '{{ width }}'
                      reference_lines:
                        - status: null
                          data_configuration:
                            dynamic_configuration:
                              column: null
                              measure_aggregation_function: null
                              calculation: null
                            axis_binding: '{{ axis_binding }}'
                            series_type: '{{ series_type }}'
                            static_configuration:
                              value: null
                          label_configuration:
                            horizontal_position: '{{ horizontal_position }}'
                            value_label_configuration:
                              format_configuration: null
                              relative_position: '{{ relative_position }}'
                            custom_label_configuration:
                              custom_label: '{{ custom_label }}'
                            font_color: '{{ font_color }}'
                            font_configuration: null
                            vertical_position: '{{ vertical_position }}'
                          style_configuration:
                            pattern: '{{ pattern }}'
                            color: '{{ color }}'
                      category_axis:
                        data_options:
                          date_axis_options:
                            missing_date_visibility: null
                          numeric_axis_options:
                            scale:
                              logarithmic:
                                base: null
                              linear:
                                step_size: null
                                step_count: null
                            range:
                              data_driven: {}
                              min_max:
                                minimum: null
                                maximum: null
                        tick_label_options:
                          rotation_angle: null
                          label_options: null
                        axis_offset: '{{ axis_offset }}'
                        axis_line_visibility: null
                        grid_line_visibility: null
                        scrollbar_options:
                          visible_range:
                            percent_range:
                              from: null
                              to: null
                          visibility: null
                      primary_yaxis_label_options: null
                      category_label_options: null
                      field_wells:
                        box_plot_aggregated_field_wells:
                          group_by:
                            - null
                          values:
                            - null
                      tooltip: null
                      box_plot_options:
                        style_options:
                          fill_style: '{{ fill_style }}'
                        outlier_visibility: null
                        all_data_points_visibility: null
                      interactions: null
                      primary_yaxis_display_options: null
                      visual_palette: null
                    actions:
                      - null
                    title: null
                    visual_content_alt_text: '{{ visual_content_alt_text }}'
                    column_hierarchies:
                      - null
                  geospatial_map_visual:
                    subtitle: null
                    visual_id: '{{ visual_id }}'
                    chart_configuration:
                      legend: null
                      map_style_options:
                        base_map_style: '{{ base_map_style }}'
                      field_wells:
                        geospatial_map_aggregated_field_wells:
                          colors:
                            - null
                          values:
                            - null
                          geospatial:
                            - null
                      tooltip: null
                      window_options:
                        bounds:
                          west: null
                          south: null
                          north: null
                          east: null
                        map_zoom_mode: '{{ map_zoom_mode }}'
                      point_style_options:
                        selected_point_style: '{{ selected_point_style }}'
                        cluster_marker_configuration:
                          cluster_marker:
                            simple_cluster_marker:
                              color: '{{ color }}'
                        heatmap_configuration:
                          heatmap_color:
                            colors:
                              - color: '{{ color }}'
                      visual_palette: null
                    actions:
                      - null
                    title: null
                    visual_content_alt_text: '{{ visual_content_alt_text }}'
                    column_hierarchies:
                      - null
                  scatter_plot_visual:
                    subtitle: null
                    visual_id: '{{ visual_id }}'
                    chart_configuration:
                      y_axis_label_options: null
                      sort_configuration:
                        scatter_plot_limit_configuration: null
                      legend: null
                      y_axis_display_options: null
                      data_labels:
                        data_label_types:
                          - maximum_label_type:
                              visibility: null
                            data_path_label_type:
                              field_id: '{{ field_id }}'
                              visibility: null
                              field_value: '{{ field_value }}'
                            range_ends_label_type:
                              visibility: null
                            field_label_type:
                              field_id: '{{ field_id }}'
                              visibility: null
                            minimum_label_type:
                              visibility: null
                        measure_label_visibility: null
                        position: null
                        label_content: '{{ label_content }}'
                        visibility: null
                        totals_visibility: null
                        overlap: '{{ overlap }}'
                        category_label_visibility: null
                        label_color: '{{ label_color }}'
                        label_font_configuration: null
                      field_wells:
                        scatter_plot_unaggregated_field_wells:
                          category:
                            - null
                          size:
                            - null
                          label:
                            - null
                          x_axis:
                            - null
                          y_axis:
                            - null
                        scatter_plot_categorically_aggregated_field_wells:
                          category:
                            - null
                          size:
                            - null
                          label:
                            - null
                          x_axis:
                            - null
                          y_axis:
                            - null
                      tooltip: null
                      x_axis_label_options: null
                      interactions: null
                      visual_palette: null
                      x_axis_display_options: null
                    actions:
                      - null
                    title: null
                    visual_content_alt_text: '{{ visual_content_alt_text }}'
                    column_hierarchies:
                      - null
                  radar_chart_visual:
                    subtitle: null
                    visual_id: '{{ visual_id }}'
                    chart_configuration:
                      sort_configuration:
                        color_sort:
                          - null
                        color_items_limit: null
                        category_items_limit: null
                        category_sort:
                          - null
                      legend: null
                      shape: '{{ shape }}'
                      base_series_settings:
                        area_style_settings:
                          visibility: null
                      color_label_options: null
                      category_label_options: null
                      axes_range_scale: '{{ axes_range_scale }}'
                      visual_palette: null
                      alternate_band_colors_visibility: null
                      start_angle: null
                      category_axis: null
                      field_wells:
                        radar_chart_aggregated_field_wells:
                          category:
                            - null
                          color:
                            - null
                          values:
                            - null
                      color_axis: null
                      alternate_band_odd_color: '{{ alternate_band_odd_color }}'
                      interactions: null
                      alternate_band_even_color: '{{ alternate_band_even_color }}'
                    actions:
                      - null
                    title: null
                    visual_content_alt_text: '{{ visual_content_alt_text }}'
                    column_hierarchies:
                      - null
                  combo_chart_visual:
                    subtitle: null
                    visual_id: '{{ visual_id }}'
                    chart_configuration:
                      sort_configuration:
                        color_sort:
                          - null
                        color_items_limit: null
                        category_items_limit: null
                        category_sort:
                          - null
                      legend: null
                      reference_lines:
                        - null
                      color_label_options: null
                      bar_data_labels: null
                      category_label_options: null
                      tooltip: null
                      single_axis_options:
                        y_axis_options:
                          y_axis: '{{ y_axis }}'
                      primary_yaxis_display_options: null
                      visual_palette: null
                      bars_arrangement: '{{ bars_arrangement }}'
                      secondary_yaxis_label_options: null
                      line_data_labels: null
                      category_axis: null
                      primary_yaxis_label_options: null
                      field_wells:
                        combo_chart_aggregated_field_wells:
                          bar_values:
                            - null
                          category:
                            - null
                          colors:
                            - null
                          line_values:
                            - null
                      secondary_yaxis_display_options: null
                      interactions: null
                    actions:
                      - null
                    title: null
                    visual_content_alt_text: '{{ visual_content_alt_text }}'
                    column_hierarchies:
                      - null
                  word_cloud_visual:
                    subtitle: null
                    visual_id: '{{ visual_id }}'
                    chart_configuration:
                      sort_configuration:
                        category_items_limit: null
                        category_sort:
                          - null
                      category_label_options: null
                      field_wells:
                        word_cloud_aggregated_field_wells:
                          group_by:
                            - null
                          size:
                            - null
                      word_cloud_options:
                        word_orientation: '{{ word_orientation }}'
                        word_scaling: '{{ word_scaling }}'
                        cloud_layout: '{{ cloud_layout }}'
                        maximum_string_length: null
                        word_casing: '{{ word_casing }}'
                        word_padding: '{{ word_padding }}'
                      interactions: null
                    actions:
                      - null
                    title: null
                    visual_content_alt_text: '{{ visual_content_alt_text }}'
                    column_hierarchies:
                      - null
                  sankey_diagram_visual:
                    subtitle: null
                    visual_id: '{{ visual_id }}'
                    chart_configuration:
                      sort_configuration:
                        weight_sort:
                          - null
                        source_items_limit: null
                        destination_items_limit: null
                      data_labels: null
                      field_wells:
                        sankey_diagram_aggregated_field_wells:
                          destination:
                            - null
                          source:
                            - null
                          weight:
                            - null
                      interactions: null
                    actions:
                      - null
                    title: null
                    visual_content_alt_text: '{{ visual_content_alt_text }}'
                  gauge_chart_visual:
                    subtitle: null
                    conditional_formatting:
                      conditional_formatting_options:
                        - arc:
                            foreground_color:
                              gradient:
                                expression: '{{ expression }}'
                                color:
                                  stops:
                                    - gradient_offset: null
                                      data_value: null
                                      color: '{{ color }}'
                              solid:
                                expression: '{{ expression }}'
                                color: '{{ color }}'
                          primary_value:
                            text_color: null
                            icon:
                              custom_condition:
                                expression: '{{ expression }}'
                                color: '{{ color }}'
                                display_configuration:
                                  icon_display_option: '{{ icon_display_option }}'
                                icon_options:
                                  unicode_icon: '{{ unicode_icon }}'
                                  icon: '{{ icon }}'
                              icon_set:
                                expression: '{{ expression }}'
                                icon_set_type: '{{ icon_set_type }}'
                    visual_id: '{{ visual_id }}'
                    chart_configuration:
                      data_labels: null
                      field_wells:
                        target_values:
                          - null
                        values:
                          - null
                      tooltip_options: null
                      gauge_chart_options:
                        arc:
                          arc_angle: null
                          arc_thickness: '{{ arc_thickness }}'
                        comparison:
                          comparison_method: '{{ comparison_method }}'
                          comparison_format:
                            number_display_format_configuration: null
                            percentage_display_format_configuration: null
                        primary_value_display_type: '{{ primary_value_display_type }}'
                        arc_axis:
                          range:
                            min: null
                            max: null
                          reserve_range: null
                        primary_value_font_configuration: null
                      color_configuration:
                        foreground_color: '{{ foreground_color }}'
                        background_color: '{{ background_color }}'
                      interactions: null
                      visual_palette: null
                    actions:
                      - null
                    title: null
                    visual_content_alt_text: '{{ visual_content_alt_text }}'
                  filled_map_visual:
                    subtitle: null
                    conditional_formatting:
                      conditional_formatting_options:
                        - shape:
                            format:
                              background_color: null
                            field_id: '{{ field_id }}'
                    visual_id: '{{ visual_id }}'
                    chart_configuration:
                      sort_configuration:
                        category_sort:
                          - null
                      legend: null
                      map_style_options: null
                      field_wells:
                        filled_map_aggregated_field_wells:
                          values:
                            - null
                          geospatial:
                            - null
                      tooltip: null
                      interactions: null
                      window_options: null
                    actions:
                      - null
                    title: null
                    visual_content_alt_text: '{{ visual_content_alt_text }}'
                    column_hierarchies:
                      - null
                  waterfall_visual:
                    subtitle: null
                    visual_id: '{{ visual_id }}'
                    chart_configuration:
                      category_axis_label_options: null
                      sort_configuration:
                        breakdown_items_limit: null
                        category_sort:
                          - null
                      legend: null
                      data_labels: null
                      primary_yaxis_label_options: null
                      field_wells:
                        waterfall_chart_aggregated_field_wells:
                          categories:
                            - null
                          breakdowns:
                            - null
                          values:
                            - null
                      waterfall_chart_options:
                        total_bar_label: '{{ total_bar_label }}'
                      color_configuration:
                        group_color_configuration:
                          negative_bar_color: '{{ negative_bar_color }}'
                          total_bar_color: '{{ total_bar_color }}'
                          positive_bar_color: '{{ positive_bar_color }}'
                      interactions: null
                      category_axis_display_options: null
                      primary_yaxis_display_options: null
                      visual_palette: null
                    actions:
                      - null
                    title: null
                    visual_content_alt_text: '{{ visual_content_alt_text }}'
                    column_hierarchies:
                      - null
                  custom_content_visual:
                    subtitle: null
                    visual_id: '{{ visual_id }}'
                    chart_configuration:
                      content_url: '{{ content_url }}'
                      content_type: '{{ content_type }}'
                      image_scaling: '{{ image_scaling }}'
                      interactions: null
                    actions:
                      - null
                    data_set_identifier: '{{ data_set_identifier }}'
                    title: null
                    visual_content_alt_text: '{{ visual_content_alt_text }}'
                  pie_chart_visual:
                    subtitle: null
                    visual_id: '{{ visual_id }}'
                    chart_configuration:
                      sort_configuration:
                        small_multiples_sort:
                          - null
                        category_items_limit: null
                        category_sort:
                          - null
                        small_multiples_limit_configuration: null
                      legend: null
                      data_labels: null
                      contribution_analysis_defaults:
                        - measure_field_id: '{{ measure_field_id }}'
                          contributor_dimensions:
                            - null
                      category_label_options: null
                      field_wells:
                        pie_chart_aggregated_field_wells:
                          category:
                            - null
                          values:
                            - null
                          small_multiples:
                            - null
                      tooltip: null
                      donut_options:
                        donut_center_options:
                          label_visibility: null
                        arc_options:
                          arc_thickness: '{{ arc_thickness }}'
                      small_multiples_options:
                        max_visible_rows: null
                        panel_configuration:
                          border_thickness: '{{ border_thickness }}'
                          border_style: '{{ border_style }}'
                          gutter_spacing: '{{ gutter_spacing }}'
                          background_visibility: null
                          border_visibility: null
                          border_color: '{{ border_color }}'
                          title:
                            visibility: null
                            font_configuration: null
                            horizontal_text_alignment: '{{ horizontal_text_alignment }}'
                          gutter_visibility: null
                          background_color: '{{ background_color }}'
                        max_visible_columns: null
                        x_axis:
                          placement: '{{ placement }}'
                          scale: '{{ scale }}'
                        y_axis: null
                      interactions: null
                      value_label_options: null
                      visual_palette: null
                    actions:
                      - null
                    title: null
                    visual_content_alt_text: '{{ visual_content_alt_text }}'
                    column_hierarchies:
                      - null
                  k_pi_visual:
                    subtitle: null
                    conditional_formatting:
                      conditional_formatting_options:
                        - primary_value:
                            text_color: null
                            icon: null
                          actual_value:
                            text_color: null
                            icon: null
                          comparison_value:
                            text_color: null
                            icon: null
                          progress_bar:
                            foreground_color: null
                    visual_id: '{{ visual_id }}'
                    chart_configuration:
                      sort_configuration:
                        trend_group_sort:
                          - null
                      k_pi_options:
                        secondary_value_font_configuration: null
                        visual_layout_options:
                          standard_layout:
                            type: '{{ type }}'
                        trend_arrows:
                          visibility: null
                        secondary_value:
                          visibility: null
                        comparison: null
                        primary_value_display_type: null
                        progress_bar:
                          visibility: null
                        primary_value_font_configuration: null
                        sparkline:
                          type: '{{ type }}'
                          color: '{{ color }}'
                          tooltip_visibility: null
                          visibility: null
                      field_wells:
                        target_values:
                          - null
                        trend_groups:
                          - null
                        values:
                          - null
                      interactions: null
                    actions:
                      - null
                    title: null
                    visual_content_alt_text: '{{ visual_content_alt_text }}'
                    column_hierarchies:
                      - null
                  histogram_visual:
                    subtitle: null
                    visual_id: '{{ visual_id }}'
                    chart_configuration:
                      y_axis_display_options: null
                      data_labels: null
                      bin_options:
                        bin_width:
                          bin_count_limit: null
                          value: null
                        start_value: null
                        selected_bin_type: '{{ selected_bin_type }}'
                        bin_count:
                          value: null
                      field_wells:
                        histogram_aggregated_field_wells:
                          values:
                            - null
                      tooltip: null
                      x_axis_label_options: null
                      interactions: null
                      visual_palette: null
                      x_axis_display_options: null
                    actions:
                      - null
                    title: null
                    visual_content_alt_text: '{{ visual_content_alt_text }}'
                  plugin_visual:
                    subtitle: null
                    plugin_arn: '{{ plugin_arn }}'
                    visual_id: '{{ visual_id }}'
                    chart_configuration:
                      sort_configuration:
                        plugin_visual_table_query_sort:
                          items_limit_configuration:
                            items_limit: null
                          row_sort:
                            - null
                      visual_options:
                        visual_properties:
                          - value: '{{ value }}'
                            name: '{{ name }}'
                      field_wells:
                        - unaggregated:
                            - format_configuration: null
                              column: null
                              field_id: '{{ field_id }}'
                          axis_name: '{{ axis_name }}'
                          measures:
                            - null
                          dimensions:
                            - null
                    title: null
                    visual_content_alt_text: '{{ visual_content_alt_text }}'
                  table_visual:
                    subtitle: null
                    conditional_formatting:
                      conditional_formatting_options:
                        - row:
                            text_color: null
                            background_color: null
                          cell:
                            field_id: '{{ field_id }}'
                            text_format:
                              text_color: null
                              icon: null
                              background_color: null
                    visual_id: '{{ visual_id }}'
                    chart_configuration:
                      sort_configuration:
                        row_sort:
                          - null
                        pagination_configuration: null
                      paginated_report_options:
                        overflow_column_header_visibility: null
                        vertical_overflow_visibility: null
                      table_options:
                        header_style:
                          vertical_text_alignment: '{{ vertical_text_alignment }}'
                          visibility: null
                          height: null
                          font_configuration: null
                          border:
                            uniform_border:
                              thickness: null
                              color: '{{ color }}'
                              style: '{{ style }}'
                            side_specific_border:
                              left: null
                              top: null
                              inner_horizontal: null
                              right: null
                              bottom: null
                              inner_vertical: null
                          text_wrap: '{{ text_wrap }}'
                          horizontal_text_alignment: null
                          background_color: '{{ background_color }}'
                        cell_style: null
                        orientation: '{{ orientation }}'
                        row_alternate_color_options:
                          status: null
                          use_primary_background_color: null
                          row_alternate_colors:
                            - '{{ row_alternate_colors[0] }}'
                      table_inline_visualizations:
                        - data_bars:
                            positive_color: '{{ positive_color }}'
                            field_id: '{{ field_id }}'
                            negative_color: '{{ negative_color }}'
                      field_wells:
                        table_unaggregated_field_wells:
                          values:
                            - null
                        table_aggregated_field_wells:
                          group_by:
                            - null
                          values:
                            - null
                      field_options:
                        order:
                          - '{{ order[0] }}'
                        pinned_field_options:
                          pinned_left_fields:
                            - '{{ pinned_left_fields[0] }}'
                        transposed_table_options:
                          - column_width: '{{ column_width }}'
                            column_index: null
                            column_type: '{{ column_type }}'
                        selected_field_options:
                          - custom_label: '{{ custom_label }}'
                            url_styling:
                              link_configuration:
                                target: null
                                content:
                                  custom_icon_content:
                                    icon: '{{ icon }}'
                                  custom_text_content:
                                    value: '{{ value }}'
                                    font_configuration: null
                              image_configuration:
                                sizing_options:
                                  table_cell_image_scaling_configuration: '{{ table_cell_image_scaling_configuration }}'
                            field_id: '{{ field_id }}'
                            visibility: null
                            width: '{{ width }}'
                      interactions: null
                      total_options:
                        total_aggregation_options:
                          - total_aggregation_function:
                              simple_total_aggregation_function: '{{ simple_total_aggregation_function }}'
                            field_id: '{{ field_id }}'
                        custom_label: '{{ custom_label }}'
                        scroll_status: '{{ scroll_status }}'
                        placement: '{{ placement }}'
                        total_cell_style: null
                        totals_visibility: null
                    actions:
                      - null
                    title: null
                    visual_content_alt_text: '{{ visual_content_alt_text }}'
                  pivot_table_visual:
                    subtitle: null
                    conditional_formatting:
                      conditional_formatting_options:
                        - cell:
                            scope:
                              role: '{{ role }}'
                            scopes:
                              - null
                            field_id: '{{ field_id }}'
                            text_format: null
                    visual_id: '{{ visual_id }}'
                    chart_configuration:
                      sort_configuration:
                        field_sort_options:
                          - sort_by:
                              field: null
                              data_path:
                                sort_paths:
                                  - null
                                direction: null
                              column: null
                            field_id: '{{ field_id }}'
                      paginated_report_options:
                        overflow_column_header_visibility: null
                        vertical_overflow_visibility: null
                      table_options:
                        row_field_names_style: null
                        row_header_style: null
                        collapsed_row_dimensions_visibility: null
                        rows_layout: '{{ rows_layout }}'
                        metric_placement: '{{ metric_placement }}'
                        default_cell_width: '{{ default_cell_width }}'
                        column_names_visibility: null
                        rows_label_options:
                          custom_label: '{{ custom_label }}'
                          visibility: null
                        single_metric_visibility: null
                        column_header_style: null
                        toggle_buttons_visibility: null
                        cell_style: null
                        row_alternate_color_options: null
                      field_wells:
                        pivot_table_aggregated_field_wells:
                          values:
                            - null
                          columns:
                            - null
                          rows:
                            - null
                      field_options:
                        collapse_state_options:
                          - target:
                              field_id: '{{ field_id }}'
                              field_data_path_values:
                                - null
                            state: '{{ state }}'
                        data_path_options:
                          - data_path_list:
                              - null
                            width: '{{ width }}'
                        selected_field_options:
                          - custom_label: '{{ custom_label }}'
                            field_id: '{{ field_id }}'
                            visibility: null
                      interactions: null
                      total_options:
                        column_subtotal_options:
                          custom_label: '{{ custom_label }}'
                          field_level_options:
                            - field_id: '{{ field_id }}'
                          value_cell_style: null
                          total_cell_style: null
                          totals_visibility: null
                          field_level: '{{ field_level }}'
                          metric_header_cell_style: null
                          style_targets:
                            - cell_type: '{{ cell_type }}'
                        row_subtotal_options: null
                        row_total_options:
                          total_aggregation_options:
                            - null
                          custom_label: '{{ custom_label }}'
                          value_cell_style: null
                          scroll_status: null
                          placement: null
                          total_cell_style: null
                          totals_visibility: null
                          metric_header_cell_style: null
                        column_total_options: null
                    actions:
                      - null
                    title: null
                    visual_content_alt_text: '{{ visual_content_alt_text }}'
                  bar_chart_visual:
                    subtitle: null
                    visual_id: '{{ visual_id }}'
                    chart_configuration:
                      sort_configuration:
                        small_multiples_sort:
                          - null
                        color_sort:
                          - null
                        color_items_limit: null
                        category_items_limit: null
                        category_sort:
                          - null
                        small_multiples_limit_configuration: null
                      legend: null
                      reference_lines:
                        - null
                      data_labels: null
                      color_label_options: null
                      category_label_options: null
                      tooltip: null
                      small_multiples_options: null
                      orientation: '{{ orientation }}'
                      visual_palette: null
                      value_label_options: null
                      bars_arrangement: null
                      category_axis: null
                      contribution_analysis_defaults:
                        - null
                      field_wells:
                        bar_chart_aggregated_field_wells:
                          category:
                            - null
                          colors:
                            - null
                          values:
                            - null
                          small_multiples:
                            - null
                      value_axis: null
                      interactions: null
                    actions:
                      - null
                    title: null
                    visual_content_alt_text: '{{ visual_content_alt_text }}'
                    column_hierarchies:
                      - null
                  heat_map_visual:
                    subtitle: null
                    visual_id: '{{ visual_id }}'
                    chart_configuration:
                      sort_configuration:
                        heat_map_row_sort:
                          - null
                        heat_map_row_items_limit_configuration: null
                        heat_map_column_items_limit_configuration: null
                        heat_map_column_sort:
                          - null
                      column_label_options: null
                      legend: null
                      data_labels: null
                      field_wells:
                        heat_map_aggregated_field_wells:
                          values:
                            - null
                          columns:
                            - null
                          rows:
                            - null
                      tooltip: null
                      color_scale:
                        colors:
                          - data_value: null
                            color: '{{ color }}'
                        color_fill_type: '{{ color_fill_type }}'
                        null_value_color: null
                      interactions: null
                      row_label_options: null
                    actions:
                      - null
                    title: null
                    visual_content_alt_text: '{{ visual_content_alt_text }}'
                    column_hierarchies:
                      - null
                  tree_map_visual:
                    subtitle: null
                    visual_id: '{{ visual_id }}'
                    chart_configuration:
                      sort_configuration:
                        tree_map_sort:
                          - null
                        tree_map_group_items_limit_configuration: null
                      legend: null
                      data_labels: null
                      color_label_options: null
                      size_label_options: null
                      field_wells:
                        tree_map_aggregated_field_wells:
                          sizes:
                            - null
                          colors:
                            - null
                          groups:
                            - null
                      tooltip: null
                      color_scale: null
                      interactions: null
                      group_label_options: null
                    actions:
                      - null
                    title: null
                    visual_content_alt_text: '{{ visual_content_alt_text }}'
                    column_hierarchies:
                      - null
                  insight_visual:
                    subtitle: null
                    visual_id: '{{ visual_id }}'
                    actions:
                      - null
                    data_set_identifier: '{{ data_set_identifier }}'
                    insight_configuration:
                      computations:
                        - period_to_date:
                            period_time_granularity: null
                            value: null
                            time: null
                            computation_id: '{{ computation_id }}'
                            name: '{{ name }}'
                          growth_rate:
                            value: null
                            time: null
                            period_size: null
                            computation_id: '{{ computation_id }}'
                            name: '{{ name }}'
                          top_bottom_ranked:
                            type: '{{ type }}'
                            category: null
                            result_size: null
                            value: null
                            computation_id: '{{ computation_id }}'
                            name: '{{ name }}'
                          total_aggregation:
                            value: null
                            computation_id: '{{ computation_id }}'
                            name: '{{ name }}'
                          forecast:
                            periods_backward: null
                            periods_forward: null
                            prediction_interval: null
                            seasonality: '{{ seasonality }}'
                            custom_seasonality_value: null
                            value: null
                            time: null
                            upper_boundary: null
                            computation_id: '{{ computation_id }}'
                            name: '{{ name }}'
                            lower_boundary: null
                          maximum_minimum:
                            type: '{{ type }}'
                            value: null
                            time: null
                            computation_id: '{{ computation_id }}'
                            name: '{{ name }}'
                          period_over_period:
                            value: null
                            time: null
                            computation_id: '{{ computation_id }}'
                            name: '{{ name }}'
                          metric_comparison:
                            target_value: null
                            time: null
                            computation_id: '{{ computation_id }}'
                            from_value: null
                            name: '{{ name }}'
                          top_bottom_movers:
                            type: null
                            category: null
                            value: null
                            sort_order: '{{ sort_order }}'
                            time: null
                            mover_size: null
                            computation_id: '{{ computation_id }}'
                            name: '{{ name }}'
                          unique_values:
                            category: null
                            computation_id: '{{ computation_id }}'
                            name: '{{ name }}'
                      custom_narrative:
                        narrative: '{{ narrative }}'
                      interactions: null
                    title: null
                    visual_content_alt_text: '{{ visual_content_alt_text }}'
                  line_chart_visual:
                    subtitle: null
                    visual_id: '{{ visual_id }}'
                    chart_configuration:
                      sort_configuration:
                        category_items_limit_configuration: null
                        color_items_limit_configuration: null
                        small_multiples_sort:
                          - null
                        category_sort:
                          - null
                        small_multiples_limit_configuration: null
                      legend: null
                      reference_lines:
                        - null
                      data_labels: null
                      tooltip: null
                      single_axis_options: null
                      small_multiples_options: null
                      primary_yaxis_display_options:
                        missing_data_configurations:
                          - treatment_option: '{{ treatment_option }}'
                        axis_options: null
                      visual_palette: null
                      x_axis_display_options: null
                      default_series_settings:
                        line_style_settings:
                          line_interpolation: '{{ line_interpolation }}'
                          line_style: '{{ line_style }}'
                          line_visibility: null
                          line_width: '{{ line_width }}'
                        axis_binding: null
                        marker_style_settings:
                          marker_shape: '{{ marker_shape }}'
                          marker_size: '{{ marker_size }}'
                          marker_visibility: null
                          marker_color: '{{ marker_color }}'
                      secondary_yaxis_label_options: null
                      forecast_configurations:
                        - forecast_properties:
                            periods_backward: null
                            periods_forward: null
                            prediction_interval: null
                            seasonality: null
                            upper_boundary: null
                            lower_boundary: null
                          scenario:
                            what_if_range_scenario:
                              start_date: '{{ start_date }}'
                              value: null
                              end_date: '{{ end_date }}'
                            what_if_point_scenario:
                              value: null
                              date: '{{ date }}'
                      series:
                        - field_series_item:
                            field_id: '{{ field_id }}'
                            axis_binding: null
                            settings:
                              line_style_settings: null
                              marker_style_settings: null
                          data_field_series_item:
                            field_id: '{{ field_id }}'
                            axis_binding: null
                            field_value: '{{ field_value }}'
                            settings: null
                      type: '{{ type }}'
                      primary_yaxis_label_options: null
                      contribution_analysis_defaults:
                        - null
                      field_wells:
                        line_chart_aggregated_field_wells:
                          category:
                            - null
                          colors:
                            - null
                          values:
                            - null
                          small_multiples:
                            - null
                      secondary_yaxis_display_options: null
                      x_axis_label_options: null
                      interactions: null
                    actions:
                      - null
                    title: null
                    visual_content_alt_text: '{{ visual_content_alt_text }}'
                    column_hierarchies:
                      - null
                  empty_visual:
                    visual_id: '{{ visual_id }}'
                    actions:
                      - null
                    data_set_identifier: '{{ data_set_identifier }}'
          parameter_declarations:
            - string_parameter_declaration:
                mapped_data_set_parameters:
                  - data_set_parameter_name: '{{ data_set_parameter_name }}'
                    data_set_identifier: '{{ data_set_identifier }}'
                default_values:
                  dynamic_value:
                    group_name_column: null
                    default_value_column: null
                    user_name_column: null
                  static_values:
                    - '{{ static_values[0] }}'
                parameter_value_type: '{{ parameter_value_type }}'
                value_when_unset:
                  value_when_unset_option: '{{ value_when_unset_option }}'
                  custom_value: '{{ custom_value }}'
                name: '{{ name }}'
              date_time_parameter_declaration:
                mapped_data_set_parameters:
                  - null
                default_values:
                  rolling_date: null
                  dynamic_value: null
                  static_values:
                    - '{{ static_values[0] }}'
                time_granularity: null
                value_when_unset:
                  value_when_unset_option: null
                  custom_value: '{{ custom_value }}'
                name: '{{ name }}'
              decimal_parameter_declaration:
                mapped_data_set_parameters:
                  - null
                default_values:
                  dynamic_value: null
                  static_values:
                    - null
                parameter_value_type: null
                value_when_unset:
                  value_when_unset_option: null
                  custom_value: null
                name: '{{ name }}'
              integer_parameter_declaration:
                mapped_data_set_parameters:
                  - null
                default_values:
                  dynamic_value: null
                  static_values:
                    - null
                parameter_value_type: null
                value_when_unset:
                  value_when_unset_option: null
                  custom_value: null
                name: '{{ name }}'
      - name: validation_strategy
        value:
          mode: '{{ mode }}'
      - name: folder_arns
        value:
          - '{{ folder_arns[0] }}'
      - name: name
        value: '{{ name }}'
      - name: errors
        value:
          - type: '{{ type }}'
            message: '{{ message }}'
            violated_entities:
              - path: '{{ path }}'
      - name: analysis_id
        value: '{{ analysis_id }}'
      - name: aws_account_id
        value: '{{ aws_account_id }}'
      - name: permissions
        value:
          - principal: '{{ principal }}'
            actions:
              - '{{ actions[0] }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: sheets
        value:
          - sheet_id: '{{ sheet_id }}'
            name: '{{ name }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>analysis</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.quicksight.analyses
SET PatchDocument = string('{{ {
    "Status": status,
    "Parameters": parameters,
    "SourceEntity": source_entity,
    "ThemeArn": theme_arn,
    "Definition": definition,
    "ValidationStrategy": validation_strategy,
    "FolderArns": folder_arns,
    "Name": name,
    "Errors": errors,
    "Permissions": permissions,
    "Tags": tags,
    "Sheets": sheets
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ analysis_id }}|{{ aws_account_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.quicksight.analyses
WHERE Identifier = '{{ analysis_id }}|{{ aws_account_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>analyses</code> resource, the following permissions are required:

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
quicksight:DescribeAnalysis,
quicksight:DescribeAnalysisPermissions,
quicksight:ListTagsForResource
```

</TabItem>
<TabItem value="create">

```json
quicksight:DescribeAnalysis,
quicksight:DescribeAnalysisPermissions,
quicksight:CreateAnalysis,
quicksight:DescribeTemplate,
quicksight:DescribeTheme,
quicksight:PassDataSet,
quicksight:TagResource,
quicksight:UntagResource,
quicksight:ListTagsForResource,
quicksight:CreateFolderMembership,
quicksight:DeleteFolderMembership,
quicksight:ListFoldersForResource
```

</TabItem>
<TabItem value="update">

```json
quicksight:DescribeAnalysis,
quicksight:DescribeAnalysisPermissions,
quicksight:UpdateAnalysis,
quicksight:UpdateAnalysisPermissions,
quicksight:CreateFolderMembership,
quicksight:DeleteFolderMembership,
quicksight:ListFoldersForResource,
quicksight:DescribeTemplate,
quicksight:DescribeTheme,
quicksight:PassDataSet,
quicksight:TagResource,
quicksight:UntagResource,
quicksight:ListTagsForResource
```

</TabItem>
<TabItem value="list">

```json
quicksight:ListAnalyses
```

</TabItem>
<TabItem value="delete">

```json
quicksight:DescribeAnalysis,
quicksight:DeleteAnalysis
```

</TabItem>
</Tabs>