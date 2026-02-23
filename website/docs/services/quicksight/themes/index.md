---
title: themes
hide_title: false
hide_table_of_contents: false
keywords:
  - themes
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

Creates, updates, deletes or gets a <code>theme</code> resource or lists <code>themes</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>themes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of the AWS::QuickSight::Theme Resource Type.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.quicksight.themes" /></td></tr>
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
    "description": "<p>The Amazon Resource Name (ARN) of the theme.</p>"
  },
  {
    "name": "aws_account_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "base_theme_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "configuration",
    "type": "object",
    "description": "<p>The theme configuration. This configuration contains all of the display properties for<br />a theme.</p>",
    "children": [
      {
        "name": "data_color_palette",
        "type": "object",
        "description": "<p>The theme colors that are used for data colors in charts. The colors description is a<br />hexadecimal color code that consists of six alphanumerical characters, prefixed with<br />&#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95;, for example #37BFF5. </p>",
        "children": [
          {
            "name": "colors",
            "type": "array",
            "description": "<p>The hexadecimal codes for the colors.</p>"
          },
          {
            "name": "min_max_gradient",
            "type": "array",
            "description": "<p>The minimum and maximum hexadecimal codes that describe a color gradient. </p>"
          },
          {
            "name": "empty_fill_color",
            "type": "string",
            "description": "<p>The hexadecimal code of a color that applies to charts where a lack of data is<br />highlighted.</p>"
          }
        ]
      },
      {
        "name": "u_icolor_palette",
        "type": "object",
        "description": "<p>The theme colors that apply to UI and to charts, excluding data colors. The colors<br />description is a hexadecimal color code that consists of six alphanumerical characters,<br />prefixed with &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95;, for example #37BFF5. For more information, see <a href=\"https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html\">Using Themes in Amazon QuickSight</a> in the <i>Amazon QuickSight User<br />Guide.</i><br /></p>",
        "children": [
          {
            "name": "primary_foreground",
            "type": "string",
            "description": "<p>The color of text and other foreground elements that appear over the primary<br />background regions, such as grid lines, borders, table banding, icons, and so on.</p>"
          },
          {
            "name": "primary_background",
            "type": "string",
            "description": "<p>The background color that applies to visuals and other high emphasis UI.</p>"
          },
          {
            "name": "secondary_foreground",
            "type": "string",
            "description": "<p>The foreground color that applies to any sheet title, sheet control text, or UI that<br />appears over the secondary background.</p>"
          },
          {
            "name": "secondary_background",
            "type": "string",
            "description": "<p>The background color that applies to the sheet background and sheet controls.</p>"
          },
          {
            "name": "accent",
            "type": "string",
            "description": "<p>This color is that applies to selected states and buttons.</p>"
          },
          {
            "name": "accent_foreground",
            "type": "string",
            "description": "<p>The foreground color that applies to any text or other elements that appear over the<br />accent color.</p>"
          },
          {
            "name": "danger",
            "type": "string",
            "description": "<p>The color that applies to error messages.</p>"
          },
          {
            "name": "danger_foreground",
            "type": "string",
            "description": "<p>The foreground color that applies to any text or other elements that appear over the<br />error color.</p>"
          },
          {
            "name": "warning",
            "type": "string",
            "description": "<p>This color that applies to warning and informational messages.</p>"
          },
          {
            "name": "warning_foreground",
            "type": "string",
            "description": "<p>The foreground color that applies to any text or other elements that appear over the<br />warning color.</p>"
          },
          {
            "name": "success",
            "type": "string",
            "description": "<p>The color that applies to success messages, for example the check mark for a<br />successful download.</p>"
          },
          {
            "name": "success_foreground",
            "type": "string",
            "description": "<p>The foreground color that applies to any text or other elements that appear over the<br />success color.</p>"
          },
          {
            "name": "dimension",
            "type": "string",
            "description": "<p>The color that applies to the names of fields that are identified as<br />dimensions.</p>"
          },
          {
            "name": "dimension_foreground",
            "type": "string",
            "description": "<p>The foreground color that applies to any text or other elements that appear over the<br />dimension color.</p>"
          },
          {
            "name": "measure",
            "type": "string",
            "description": "<p>The color that applies to the names of fields that are identified as measures.</p>"
          },
          {
            "name": "measure_foreground",
            "type": "string",
            "description": "<p>The foreground color that applies to any text or other elements that appear over the<br />measure color.</p>"
          }
        ]
      },
      {
        "name": "sheet",
        "type": "object",
        "description": "<p>The theme display options for sheets. </p>",
        "children": [
          {
            "name": "tile",
            "type": "object",
            "description": "<p>Display options related to tiles on a sheet.</p>",
            "children": [
              {
                "name": "border",
                "type": "object",
                "description": "<p>The display options for tile borders for visuals.</p>"
              }
            ]
          },
          {
            "name": "tile_layout",
            "type": "object",
            "description": "<p>The display options for the layout of tiles on a sheet.</p>",
            "children": [
              {
                "name": "gutter",
                "type": "object",
                "description": "<p>The display options for gutter spacing between tiles on a sheet.</p>"
              },
              {
                "name": "margin",
                "type": "object",
                "description": "<p>The display options for margins around the outside edge of sheets.</p>"
              }
            ]
          }
        ]
      },
      {
        "name": "typography",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "font_families",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "font_family",
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
    "name": "created_time",
    "type": "string",
    "description": "<p>The date and time that the theme was created.</p>"
  },
  {
    "name": "last_updated_time",
    "type": "string",
    "description": "<p>The date and time that the theme was last updated.</p>"
  },
  {
    "name": "name",
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
    "name": "theme_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "type",
    "type": "string",
    "description": ""
  },
  {
    "name": "version",
    "type": "object",
    "description": "<p>A version of a theme.</p>",
    "children": [
      {
        "name": "version_number",
        "type": "number",
        "description": "<p>The version number of the theme.</p>"
      },
      {
        "name": "arn",
        "type": "string",
        "description": "<p>The Amazon Resource Name (ARN) of the resource.</p>"
      },
      {
        "name": "description",
        "type": "string",
        "description": "<p>The description of the theme.</p>"
      },
      {
        "name": "base_theme_id",
        "type": "string",
        "description": "<p>The Amazon QuickSight-defined ID of the theme that a custom theme inherits from. All<br />themes initially inherit from a default Amazon QuickSight theme.</p>"
      },
      {
        "name": "created_time",
        "type": "string",
        "description": "<p>The date and time that this theme version was created.</p>"
      },
      {
        "name": "errors",
        "type": "array",
        "description": "<p>Errors associated with the theme.</p>",
        "children": [
          {
            "name": "type",
            "type": "string",
            "description": ""
          },
          {
            "name": "message",
            "type": "string",
            "description": "<p>The error message.</p>"
          }
        ]
      },
      {
        "name": "status",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "version_description",
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
    "name": "theme_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html"><code>AWS::QuickSight::Theme</code></a>.

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
    <td><code>themes</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AwsAccountId, ThemeId, BaseThemeId, Configuration, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>themes</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>themes</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>themes_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>themes</code></td>
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

Gets all properties from an individual <code>theme</code>.
```sql
SELECT
region,
arn,
aws_account_id,
base_theme_id,
configuration,
created_time,
last_updated_time,
name,
permissions,
tags,
theme_id,
type,
version,
version_description
FROM awscc.quicksight.themes
WHERE region = 'us-east-1' AND Identifier = '{{ theme_id }}|{{ aws_account_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>themes</code> in a region.
```sql
SELECT
region,
theme_id,
aws_account_id
FROM awscc.quicksight.themes_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>theme</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.quicksight.themes (
 AwsAccountId,
 BaseThemeId,
 Configuration,
 Name,
 ThemeId,
 region
)
SELECT
'{{ aws_account_id }}',
 '{{ base_theme_id }}',
 '{{ configuration }}',
 '{{ name }}',
 '{{ theme_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.quicksight.themes (
 AwsAccountId,
 BaseThemeId,
 Configuration,
 Name,
 Permissions,
 Tags,
 ThemeId,
 VersionDescription,
 region
)
SELECT
 '{{ aws_account_id }}',
 '{{ base_theme_id }}',
 '{{ configuration }}',
 '{{ name }}',
 '{{ permissions }}',
 '{{ tags }}',
 '{{ theme_id }}',
 '{{ version_description }}',
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
  - name: theme
    props:
      - name: aws_account_id
        value: '{{ aws_account_id }}'
      - name: base_theme_id
        value: '{{ base_theme_id }}'
      - name: configuration
        value:
          data_color_palette:
            colors:
              - '{{ colors[0] }}'
            min_max_gradient:
              - '{{ min_max_gradient[0] }}'
            empty_fill_color: '{{ empty_fill_color }}'
          u_icolor_palette:
            primary_foreground: '{{ primary_foreground }}'
            primary_background: '{{ primary_background }}'
            secondary_foreground: '{{ secondary_foreground }}'
            secondary_background: '{{ secondary_background }}'
            accent: '{{ accent }}'
            accent_foreground: '{{ accent_foreground }}'
            danger: '{{ danger }}'
            danger_foreground: '{{ danger_foreground }}'
            warning: '{{ warning }}'
            warning_foreground: '{{ warning_foreground }}'
            success: '{{ success }}'
            success_foreground: '{{ success_foreground }}'
            dimension: '{{ dimension }}'
            dimension_foreground: '{{ dimension_foreground }}'
            measure: '{{ measure }}'
            measure_foreground: '{{ measure_foreground }}'
          sheet:
            tile:
              border:
                show: '{{ show }}'
            tile_layout:
              gutter:
                show: '{{ show }}'
              margin:
                show: '{{ show }}'
          typography:
            font_families:
              - font_family: '{{ font_family }}'
      - name: name
        value: '{{ name }}'
      - name: permissions
        value:
          - principal: '{{ principal }}'
            actions:
              - '{{ actions[0] }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: theme_id
        value: '{{ theme_id }}'
      - name: version_description
        value: '{{ version_description }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>theme</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.quicksight.themes
SET PatchDocument = string('{{ {
    "BaseThemeId": base_theme_id,
    "Configuration": configuration,
    "Name": name,
    "Permissions": permissions,
    "Tags": tags,
    "VersionDescription": version_description
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ theme_id }}|{{ aws_account_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.quicksight.themes
WHERE Identifier = '{{ theme_id }}|{{ aws_account_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>themes</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'List', value: 'list', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
quicksight:DescribeTheme,
quicksight:DescribeThemePermissions,
quicksight:ListTagsForResource
```

</TabItem>
<TabItem value="create">

```json
quicksight:DescribeTheme,
quicksight:DescribeThemePermissions,
quicksight:CreateTheme,
quicksight:TagResource,
quicksight:UntagResource,
quicksight:ListTagsForResource
```

</TabItem>
<TabItem value="list">

```json
quicksight:ListThemes
```

</TabItem>
<TabItem value="update">

```json
quicksight:DescribeTheme,
quicksight:DescribeThemePermissions,
quicksight:UpdateTheme,
quicksight:UpdateThemePermissions,
quicksight:TagResource,
quicksight:UntagResource,
quicksight:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
quicksight:DescribeTheme,
quicksight:DeleteTheme
```

</TabItem>
</Tabs>