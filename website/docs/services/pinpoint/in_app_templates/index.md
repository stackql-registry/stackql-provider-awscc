---
title: in_app_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - in_app_templates
  - pinpoint
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

Creates, updates, deletes or gets an <code>in_app_template</code> resource or lists <code>in_app_templates</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>in_app_templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Pinpoint::InAppTemplate</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.pinpoint.in_app_templates" /></td></tr>
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
    "name": "content",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "background_color",
        "type": "string",
        "description": ""
      },
      {
        "name": "body_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "alignment",
            "type": "string",
            "description": ""
          },
          {
            "name": "body",
            "type": "string",
            "description": ""
          },
          {
            "name": "text_color",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "header_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "alignment",
            "type": "string",
            "description": ""
          },
          {
            "name": "header",
            "type": "string",
            "description": ""
          },
          {
            "name": "text_color",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "image_url",
        "type": "string",
        "description": ""
      },
      {
        "name": "primary_btn",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "android",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "button_action",
                "type": "string",
                "description": ""
              },
              {
                "name": "link",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "default_config",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "background_color",
                "type": "string",
                "description": ""
              },
              {
                "name": "border_radius",
                "type": "integer",
                "description": ""
              },
              {
                "name": "button_action",
                "type": "string",
                "description": ""
              },
              {
                "name": "link",
                "type": "string",
                "description": ""
              },
              {
                "name": "text",
                "type": "string",
                "description": ""
              },
              {
                "name": "text_color",
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
    "name": "custom_config",
    "type": "object",
    "description": ""
  },
  {
    "name": "layout",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "object",
    "description": ""
  },
  {
    "name": "template_description",
    "type": "string",
    "description": ""
  },
  {
    "name": "template_name",
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
    "name": "template_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html"><code>AWS::Pinpoint::InAppTemplate</code></a>.

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
    <td><code>in_app_templates</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TemplateName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>in_app_templates</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>in_app_templates</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>in_app_templates_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>in_app_templates</code></td>
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

Gets all properties from an individual <code>in_app_template</code>.
```sql
SELECT
region,
arn,
content,
custom_config,
layout,
tags,
template_description,
template_name
FROM awscc.pinpoint.in_app_templates
WHERE region = 'us-east-1' AND data__Identifier = '<TemplateName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>in_app_templates</code> in a region.
```sql
SELECT
region,
template_name
FROM awscc.pinpoint.in_app_templates_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>in_app_template</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.pinpoint.in_app_templates (
 TemplateName,
 region
)
SELECT 
'{{ TemplateName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.pinpoint.in_app_templates (
 Content,
 CustomConfig,
 Layout,
 Tags,
 TemplateDescription,
 TemplateName,
 region
)
SELECT 
 '{{ Content }}',
 '{{ CustomConfig }}',
 '{{ Layout }}',
 '{{ Tags }}',
 '{{ TemplateDescription }}',
 '{{ TemplateName }}',
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
  - name: in_app_template
    props:
      - name: Content
        value:
          - BackgroundColor: '{{ BackgroundColor }}'
            BodyConfig:
              Alignment: '{{ Alignment }}'
              Body: '{{ Body }}'
              TextColor: '{{ TextColor }}'
            HeaderConfig:
              Alignment: null
              Header: '{{ Header }}'
              TextColor: '{{ TextColor }}'
            ImageUrl: '{{ ImageUrl }}'
            PrimaryBtn:
              Android:
                ButtonAction: '{{ ButtonAction }}'
                Link: '{{ Link }}'
              DefaultConfig:
                BackgroundColor: '{{ BackgroundColor }}'
                BorderRadius: '{{ BorderRadius }}'
                ButtonAction: null
                Link: '{{ Link }}'
                Text: '{{ Text }}'
                TextColor: '{{ TextColor }}'
              IOS: null
              Web: null
            SecondaryBtn: null
      - name: CustomConfig
        value: {}
      - name: Layout
        value: '{{ Layout }}'
      - name: Tags
        value: {}
      - name: TemplateDescription
        value: '{{ TemplateDescription }}'
      - name: TemplateName
        value: '{{ TemplateName }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.pinpoint.in_app_templates
SET data__PatchDocument = string('{{ {
    "Content": content,
    "CustomConfig": custom_config,
    "Layout": layout,
    "Tags": tags,
    "TemplateDescription": template_description
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<TemplateName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.pinpoint.in_app_templates
WHERE data__Identifier = '<TemplateName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>in_app_templates</code> resource, the following permissions are required:

### Create
```json
mobiletargeting:CreateInAppTemplate,
mobiletargeting:GetInAppTemplate,
mobiletargeting:TagResource
```

### Delete
```json
mobiletargeting:DeleteInAppTemplate,
mobiletargeting:GetInAppTemplate
```

### List
```json
mobiletargeting:GetInAppTemplate,
mobiletargeting:ListTemplates
```

### Read
```json
mobiletargeting:GetInAppTemplate,
mobiletargeting:ListTemplates
```

### Update
```json
mobiletargeting:UpdateInAppTemplate,
mobiletargeting:GetInAppTemplate,
mobiletargeting:TagResource,
mobiletargeting:UntagResource
```
