---
title: solutions
hide_title: false
hide_table_of_contents: false
keywords:
  - solutions
  - personalize
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

Creates, updates, deletes or gets a <code>solution</code> resource or lists <code>solutions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>solutions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::Personalize::Solution.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.personalize.solutions" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "The name for the solution"
  },
  {
    "name": "solution_arn",
    "type": "string",
    "description": "The ARN of the solution"
  },
  {
    "name": "event_type",
    "type": "string",
    "description": "When your have multiple event types (using an EVENT&#95;TYPE schema field), this parameter specifies which event type (for example, 'click' or 'like') is used for training the model. If you do not provide an eventType, Amazon Personalize will use all interactions for training with equal weight regardless of type."
  },
  {
    "name": "dataset_group_arn",
    "type": "string",
    "description": "The ARN of the dataset group that provides the training data."
  },
  {
    "name": "perform_auto_ml",
    "type": "boolean",
    "description": "Whether to perform automated machine learning (AutoML). The default is false. For this case, you must specify recipeArn."
  },
  {
    "name": "perform_hpo",
    "type": "boolean",
    "description": "Whether to perform hyperparameter optimization (HPO) on the specified or selected recipe. The default is false. When performing AutoML, this parameter is always true and you should not set it to false."
  },
  {
    "name": "recipe_arn",
    "type": "string",
    "description": "The ARN of the recipe to use for model training. Only specified when performAutoML is false."
  },
  {
    "name": "solution_config",
    "type": "object",
    "description": "The configuration to use with the solution. When performAutoML is set to true, Amazon Personalize only evaluates the autoMLConfig section of the solution configuration.",
    "children": [
      {
        "name": "algorithm_hyper_parameters",
        "type": "object",
        "description": "Lists the hyperparameter names and ranges."
      },
      {
        "name": "auto_ml_config",
        "type": "object",
        "description": "The AutoMLConfig object containing a list of recipes to search when AutoML is performed.",
        "children": [
          {
            "name": "metric_name",
            "type": "string",
            "description": "The metric to optimize."
          },
          {
            "name": "recipe_list",
            "type": "array",
            "description": "The list of candidate recipes."
          }
        ]
      },
      {
        "name": "event_value_threshold",
        "type": "string",
        "description": "Only events with a value greater than or equal to this threshold are used for training a model."
      },
      {
        "name": "feature_transformation_parameters",
        "type": "object",
        "description": "Lists the feature transformation parameters."
      },
      {
        "name": "hpo_config",
        "type": "object",
        "description": "Describes the properties for hyperparameter optimization (HPO)",
        "children": [
          {
            "name": "algorithm_hyper_parameter_ranges",
            "type": "object",
            "description": "The hyperparameters and their allowable ranges",
            "children": [
              {
                "name": "categorical_hyper_parameter_ranges",
                "type": "array",
                "description": "The categorical hyperparameters and their ranges."
              },
              {
                "name": "continuous_hyper_parameter_ranges",
                "type": "array",
                "description": "The continuous hyperparameters and their ranges."
              },
              {
                "name": "integer_hyper_parameter_ranges",
                "type": "array",
                "description": "The integer hyperparameters and their ranges."
              }
            ]
          },
          {
            "name": "hpo_objective",
            "type": "object",
            "description": "The metric to optimize during HPO.",
            "children": [
              {
                "name": "metric_name",
                "type": "string",
                "description": "The name of the metric"
              },
              {
                "name": "type",
                "type": "string",
                "description": "The type of the metric. Valid values are Maximize and Minimize."
              },
              {
                "name": "metric_regex",
                "type": "string",
                "description": "A regular expression for finding the metric in the training job logs."
              }
            ]
          },
          {
            "name": "hpo_resource_config",
            "type": "object",
            "description": "Describes the resource configuration for hyperparameter optimization (HPO).",
            "children": [
              {
                "name": "max_number_of_training_jobs",
                "type": "string",
                "description": "The maximum number of training jobs when you create a solution version. The maximum value for maxNumberOfTrainingJobs is 40."
              },
              {
                "name": "max_parallel_training_jobs",
                "type": "string",
                "description": "The maximum number of parallel training jobs when you create a solution version. The maximum value for maxParallelTrainingJobs is 10."
              }
            ]
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html"><code>AWS::Personalize::Solution</code></a>.

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
    <td><CopyableCode code="Name, DatasetGroupArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>solution</code>.
```sql
SELECT
region,
name,
solution_arn,
event_type,
dataset_group_arn,
perform_auto_ml,
perform_hpo,
recipe_arn,
solution_config
FROM awscc.personalize.solutions
WHERE region = 'us-east-1' AND data__Identifier = '<SolutionArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>solution</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.personalize.solutions (
 Name,
 DatasetGroupArn,
 region
)
SELECT 
'{{ Name }}',
 '{{ DatasetGroupArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.personalize.solutions (
 Name,
 EventType,
 DatasetGroupArn,
 PerformAutoML,
 PerformHPO,
 RecipeArn,
 SolutionConfig,
 region
)
SELECT 
 '{{ Name }}',
 '{{ EventType }}',
 '{{ DatasetGroupArn }}',
 '{{ PerformAutoML }}',
 '{{ PerformHPO }}',
 '{{ RecipeArn }}',
 '{{ SolutionConfig }}',
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
  - name: solution
    props:
      - name: Name
        value: '{{ Name }}'
      - name: EventType
        value: '{{ EventType }}'
      - name: DatasetGroupArn
        value: '{{ DatasetGroupArn }}'
      - name: PerformAutoML
        value: '{{ PerformAutoML }}'
      - name: PerformHPO
        value: '{{ PerformHPO }}'
      - name: RecipeArn
        value: '{{ RecipeArn }}'
      - name: SolutionConfig
        value:
          AlgorithmHyperParameters: {}
          AutoMLConfig:
            MetricName: '{{ MetricName }}'
            RecipeList:
              - '{{ RecipeList[0] }}'
          EventValueThreshold: '{{ EventValueThreshold }}'
          FeatureTransformationParameters: {}
          HpoConfig:
            AlgorithmHyperParameterRanges:
              CategoricalHyperParameterRanges:
                - Name: '{{ Name }}'
                  Values:
                    - '{{ Values[0] }}'
              ContinuousHyperParameterRanges:
                - Name: '{{ Name }}'
                  MinValue: null
                  MaxValue: null
              IntegerHyperParameterRanges:
                - Name: '{{ Name }}'
                  MinValue: '{{ MinValue }}'
                  MaxValue: '{{ MaxValue }}'
            HpoObjective:
              MetricName: '{{ MetricName }}'
              Type: '{{ Type }}'
              MetricRegex: '{{ MetricRegex }}'
            HpoResourceConfig:
              MaxNumberOfTrainingJobs: '{{ MaxNumberOfTrainingJobs }}'
              MaxParallelTrainingJobs: '{{ MaxParallelTrainingJobs }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.personalize.solutions
WHERE data__Identifier = '<SolutionArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>solutions</code> resource, the following permissions are required:

### Create
```json
personalize:CreateSolution,
personalize:DescribeSolution
```

### Read
```json
personalize:DescribeSolution
```

### Delete
```json
personalize:DeleteSolution,
personalize:DescribeSolution
```

### List
```json
personalize:ListSolutions
```
