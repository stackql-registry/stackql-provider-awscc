---
title: evaluation_forms
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluation_forms
  - connect
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

Creates, updates, deletes or gets an <code>evaluation_form</code> resource or lists <code>evaluation_forms</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>evaluation_forms</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates an evaluation form for the specified CON instance.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.evaluation_forms" /></td></tr>
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
    "name": "scoring_strategy",
    "type": "object",
    "description": "A scoring strategy of the evaluation form.",
    "children": [
      {
        "name": "status",
        "type": "string",
        "description": "The scoring status of the evaluation form.<br />&#42;Allowed values&#42;: &#96;&#96;ENABLED&#96;&#96; &#124; &#96;&#96;DISABLED&#96;&#96;"
      },
      {
        "name": "mode",
        "type": "string",
        "description": "The scoring mode of the evaluation form.<br />&#42;Allowed values&#42;: &#96;&#96;QUESTION&#95;ONLY&#96;&#96; &#124; &#96;&#96;SECTION&#95;ONLY&#96;&#96;"
      }
    ]
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the evaluation form.<br />&#42;Allowed values&#42;: &#96;&#96;DRAFT&#96;&#96; &#124; &#96;&#96;ACTIVE&#96;&#96;"
  },
  {
    "name": "auto_evaluation_configuration",
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
    "name": "description",
    "type": "string",
    "description": "The description of the evaluation form.<br />&#42;Length Constraints&#42;: Minimum length of 0. Maximum length of 1024."
  },
  {
    "name": "instance_arn",
    "type": "string",
    "description": "The identifier of the Amazon Connect instance."
  },
  {
    "name": "title",
    "type": "string",
    "description": "A title of the evaluation form."
  },
  {
    "name": "items",
    "type": "array",
    "description": "Items that are part of the evaluation form. The total number of sections and questions must not exceed 100 each. Questions must be contained in a section.<br />&#42;Minimum size&#42;: 1<br />&#42;Maximum size&#42;: 100",
    "children": [
      {
        "name": "section",
        "type": "object",
        "description": "A subsection or inner section of an item.",
        "children": [
          {
            "name": "title",
            "type": "string",
            "description": "The title of the section.<br />&#42;Length Constraints&#42;: Minimum length of 1. Maximum length of 128."
          },
          {
            "name": "instructions",
            "type": "string",
            "description": "The instructions of the section."
          },
          {
            "name": "items",
            "type": "array",
            "description": "The items of the section.<br />&#42;Minimum&#42;: 1",
            "children": [
              {
                "name": "question",
                "type": "object",
                "description": "The information of the question."
              }
            ]
          },
          {
            "name": "ref_id",
            "type": "string",
            "description": "The identifier of the section. An identifier must be unique within the evaluation form.<br />&#42;Length Constraints&#42;: Minimum length of 1. Maximum length of 40."
          },
          {
            "name": "weight",
            "type": "number",
            "description": "The scoring weight of the section.<br />&#42;Minimum&#42;: 0 <br />&#42;Maximum&#42;: 100"
          }
        ]
      }
    ]
  },
  {
    "name": "evaluation_form_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags used to organize, track, or control access for this resource. For example, &#123; \"tags\": &#123;\"key1\":\"value1\", \"key2\":\"value2\"&#125; &#125;.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters"
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. . You can specify a value that is maximum of 256 Unicode characters"
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
    "name": "evaluation_form_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html"><code>AWS::Connect::EvaluationForm</code></a>.

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
    <td><code>evaluation_forms</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Title, InstanceArn, Items, Status, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>evaluation_forms</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>evaluation_forms</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>evaluation_forms_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>evaluation_forms</code></td>
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

Gets all properties from an individual <code>evaluation_form</code>.
```sql
SELECT
region,
scoring_strategy,
status,
auto_evaluation_configuration,
description,
instance_arn,
title,
items,
evaluation_form_arn,
tags
FROM awscc.connect.evaluation_forms
WHERE region = 'us-east-1' AND Identifier = '{{ evaluation_form_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>evaluation_forms</code> in a region.
```sql
SELECT
region,
evaluation_form_arn
FROM awscc.connect.evaluation_forms_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>evaluation_form</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.connect.evaluation_forms (
 Status,
 InstanceArn,
 Title,
 Items,
 region
)
SELECT
'{{ status }}',
 '{{ instance_arn }}',
 '{{ title }}',
 '{{ items }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.connect.evaluation_forms (
 ScoringStrategy,
 Status,
 AutoEvaluationConfiguration,
 Description,
 InstanceArn,
 Title,
 Items,
 Tags,
 region
)
SELECT
 '{{ scoring_strategy }}',
 '{{ status }}',
 '{{ auto_evaluation_configuration }}',
 '{{ description }}',
 '{{ instance_arn }}',
 '{{ title }}',
 '{{ items }}',
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
  - name: evaluation_form
    props:
      - name: scoring_strategy
        value:
          status: '{{ status }}'
          mode: '{{ mode }}'
      - name: status
        value: '{{ status }}'
      - name: auto_evaluation_configuration
        value:
          enabled: '{{ enabled }}'
      - name: description
        value: '{{ description }}'
      - name: instance_arn
        value: '{{ instance_arn }}'
      - name: title
        value: '{{ title }}'
      - name: items
        value:
          - section:
              title: '{{ title }}'
              instructions: '{{ instructions }}'
              items:
                - question:
                    not_applicable_enabled: '{{ not_applicable_enabled }}'
                    title: '{{ title }}'
                    question_type: '{{ question_type }}'
                    instructions: '{{ instructions }}'
                    ref_id: '{{ ref_id }}'
                    question_type_properties:
                      numeric:
                        options:
                          - score: '{{ score }}'
                            min_value: '{{ min_value }}'
                            max_value: '{{ max_value }}'
                            automatic_fail: '{{ automatic_fail }}'
                        automation:
                          answer_source: null
                          property_value:
                            label: '{{ label }}'
                        min_value: '{{ min_value }}'
                        max_value: '{{ max_value }}'
                      single_select:
                        display_as: '{{ display_as }}'
                        options:
                          - score: null
                            text: '{{ text }}'
                            ref_id: null
                            automatic_fail: '{{ automatic_fail }}'
                        automation:
                          options:
                            - rule_category:
                                condition: '{{ condition }}'
                                category: '{{ category }}'
                                option_ref_id: null
                          default_option_ref_id: null
                    weight: null
                  section: null
              ref_id: null
              weight: null
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>evaluation_form</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.connect.evaluation_forms
SET PatchDocument = string('{{ {
    "ScoringStrategy": scoring_strategy,
    "Status": status,
    "AutoEvaluationConfiguration": auto_evaluation_configuration,
    "Description": description,
    "InstanceArn": instance_arn,
    "Title": title,
    "Items": items,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ evaluation_form_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connect.evaluation_forms
WHERE Identifier = '{{ evaluation_form_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>evaluation_forms</code> resource, the following permissions are required:

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
connect:DescribeEvaluationForm,
connect:ListEvaluationFormVersions
```

</TabItem>
<TabItem value="create">

```json
connect:CreateEvaluationForm,
connect:ActivateEvaluationForm,
connect:TagResource
```

</TabItem>
<TabItem value="update">

```json
connect:UpdateEvaluationForm,
connect:ListEvaluationFormVersions,
connect:ActivateEvaluationForm,
connect:DeactivateEvaluationForm,
connect:TagResource,
connect:UntagResource
```

</TabItem>
<TabItem value="list">

```json
connect:ListEvaluationForms
```

</TabItem>
<TabItem value="delete">

```json
connect:DeleteEvaluationForm,
connect:UntagResource
```

</TabItem>
</Tabs>