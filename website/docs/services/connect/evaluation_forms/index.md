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
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="scoring_strategy" /></td><td><code>object</code></td><td>A scoring strategy of the evaluation form.</td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td>The status of the evaluation form.<br />ASTERIX;Allowed valuesASTERIX;: <code>DRAFT</code> | <code>ACTIVE</code></td></tr>
<tr><td><CopyableCode code="auto_evaluation_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>The description of the evaluation form.<br />ASTERIX;Length ConstraintsASTERIX;: Minimum length of 0. Maximum length of 1024.</td></tr>
<tr><td><CopyableCode code="instance_arn" /></td><td><code>string</code></td><td>The identifier of the Amazon Connect instance.</td></tr>
<tr><td><CopyableCode code="title" /></td><td><code>string</code></td><td>A title of the evaluation form.</td></tr>
<tr><td><CopyableCode code="items" /></td><td><code>array</code></td><td>Items that are part of the evaluation form. The total number of sections and questions must not exceed 100 each. Questions must be contained in a section.<br />ASTERIX;Minimum sizeASTERIX;: 1<br />ASTERIX;Maximum sizeASTERIX;: 100</td></tr>
<tr><td><CopyableCode code="evaluation_form_arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>The tags used to organize, track, or control access for this resource. For example, &#123; "tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html"><code>AWS::Connect::EvaluationForm</code></a>.

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
    <td><CopyableCode code="Title, InstanceArn, Items, Status, region" /></td>
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
Gets all <code>evaluation_forms</code> in a region.
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
WHERE region = 'us-east-1';
```
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
WHERE region = 'us-east-1' AND data__Identifier = '<EvaluationFormArn>';
```

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
'{{ Status }}',
 '{{ InstanceArn }}',
 '{{ Title }}',
 '{{ Items }}',
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
 '{{ ScoringStrategy }}',
 '{{ Status }}',
 '{{ AutoEvaluationConfiguration }}',
 '{{ Description }}',
 '{{ InstanceArn }}',
 '{{ Title }}',
 '{{ Items }}',
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
  - name: evaluation_form
    props:
      - name: ScoringStrategy
        value:
          Status: '{{ Status }}'
          Mode: '{{ Mode }}'
      - name: Status
        value: '{{ Status }}'
      - name: AutoEvaluationConfiguration
        value:
          Enabled: '{{ Enabled }}'
      - name: Description
        value: '{{ Description }}'
      - name: InstanceArn
        value: '{{ InstanceArn }}'
      - name: Title
        value: '{{ Title }}'
      - name: Items
        value:
          - Section:
              Title: '{{ Title }}'
              Instructions: '{{ Instructions }}'
              Items:
                - Question:
                    NotApplicableEnabled: '{{ NotApplicableEnabled }}'
                    Title: '{{ Title }}'
                    QuestionType: '{{ QuestionType }}'
                    Instructions: '{{ Instructions }}'
                    RefId: '{{ RefId }}'
                    QuestionTypeProperties:
                      Numeric:
                        Options:
                          - Score: '{{ Score }}'
                            MinValue: '{{ MinValue }}'
                            MaxValue: '{{ MaxValue }}'
                            AutomaticFail: '{{ AutomaticFail }}'
                        Automation:
                          AnswerSource: null
                          PropertyValue:
                            Label: '{{ Label }}'
                        MinValue: '{{ MinValue }}'
                        MaxValue: '{{ MaxValue }}'
                      SingleSelect:
                        DisplayAs: '{{ DisplayAs }}'
                        Options:
                          - Score: null
                            Text: '{{ Text }}'
                            RefId: null
                            AutomaticFail: '{{ AutomaticFail }}'
                        Automation:
                          Options:
                            - RuleCategory:
                                Condition: '{{ Condition }}'
                                Category: '{{ Category }}'
                                OptionRefId: null
                          DefaultOptionRefId: null
                    Weight: null
                  Section: null
              RefId: null
              Weight: null
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connect.evaluation_forms
WHERE data__Identifier = '<EvaluationFormArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>evaluation_forms</code> resource, the following permissions are required:

### Read
```json
connect:DescribeEvaluationForm,
connect:ListEvaluationFormVersions
```

### Create
```json
connect:CreateEvaluationForm,
connect:ActivateEvaluationForm,
connect:TagResource
```

### Update
```json
connect:UpdateEvaluationForm,
connect:ListEvaluationFormVersions,
connect:ActivateEvaluationForm,
connect:DeactivateEvaluationForm,
connect:TagResource,
connect:UntagResource
```

### List
```json
connect:ListEvaluationForms
```

### Delete
```json
connect:DeleteEvaluationForm,
connect:UntagResource
```
