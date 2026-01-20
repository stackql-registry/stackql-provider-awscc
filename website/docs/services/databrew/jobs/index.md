---
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
  - databrew
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

Creates, updates, deletes or gets a <code>job</code> resource or lists <code>jobs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>jobs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::DataBrew::Job.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.databrew.jobs" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "dataset_name",
    "type": "string",
    "description": "Dataset name"
  },
  {
    "name": "encryption_key_arn",
    "type": "string",
    "description": "Encryption Key Arn"
  },
  {
    "name": "encryption_mode",
    "type": "string",
    "description": "Encryption mode"
  },
  {
    "name": "name",
    "type": "string",
    "description": "Job name"
  },
  {
    "name": "type",
    "type": "string",
    "description": "Job type"
  },
  {
    "name": "log_subscription",
    "type": "string",
    "description": "Log subscription"
  },
  {
    "name": "max_capacity",
    "type": "integer",
    "description": "Max capacity"
  },
  {
    "name": "max_retries",
    "type": "integer",
    "description": "Max retries"
  },
  {
    "name": "outputs",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "compression_format",
        "type": "string",
        "description": ""
      },
      {
        "name": "format",
        "type": "string",
        "description": ""
      },
      {
        "name": "format_options",
        "type": "object",
        "description": "Format options for job Output",
        "children": [
          {
            "name": "csv",
            "type": "object",
            "description": "Output Csv options",
            "children": [
              {
                "name": "delimiter",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "partition_columns",
        "type": "array",
        "description": ""
      },
      {
        "name": "location",
        "type": "object",
        "description": "Input location",
        "children": [
          {
            "name": "bucket",
            "type": "string",
            "description": ""
          },
          {
            "name": "key",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "overwrite",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "max_output_files",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "data_catalog_outputs",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "catalog_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "database_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "table_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "s3_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "location",
            "type": "object",
            "description": "Input location",
            "children": [
              {
                "name": "bucket",
                "type": "string",
                "description": ""
              },
              {
                "name": "key",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "database_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "temp_directory",
            "type": "object",
            "description": "Input location",
            "children": [
              {
                "name": "bucket",
                "type": "string",
                "description": ""
              },
              {
                "name": "key",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "table_name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "overwrite",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "database_outputs",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "glue_connection_name",
        "type": "string",
        "description": "Glue connection name"
      },
      {
        "name": "database_output_mode",
        "type": "string",
        "description": "Database table name"
      },
      {
        "name": "database_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "temp_directory",
            "type": "object",
            "description": "Input location",
            "children": [
              {
                "name": "bucket",
                "type": "string",
                "description": ""
              },
              {
                "name": "key",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "table_name",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "output_location",
    "type": "object",
    "description": "Output location",
    "children": [
      {
        "name": "bucket",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "bucket_owner",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "project_name",
    "type": "string",
    "description": "Project name"
  },
  {
    "name": "recipe",
    "type": "object",
    "description": "Resource schema for AWS::DataBrew::Recipe.",
    "children": [
      {
        "name": "description",
        "type": "string",
        "description": "Description of the recipe"
      },
      {
        "name": "name",
        "type": "string",
        "description": "Recipe name"
      },
      {
        "name": "steps",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "action",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "operation",
                "type": "string",
                "description": "Step action operation"
              },
              {
                "name": "parameters",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "condition_expressions",
            "type": "array",
            "description": "Condition expressions applied to the step action",
            "children": [
              {
                "name": "condition",
                "type": "string",
                "description": "Input condition to be applied to the target column"
              },
              {
                "name": "value",
                "type": "string",
                "description": "Value of the condition"
              },
              {
                "name": "target_column",
                "type": "string",
                "description": "Name of the target column"
              }
            ]
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
    "name": "role_arn",
    "type": "string",
    "description": "Role arn"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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
  },
  {
    "name": "timeout",
    "type": "integer",
    "description": "Timeout"
  },
  {
    "name": "job_sample",
    "type": "object",
    "description": "Job Sample",
    "children": [
      {
        "name": "mode",
        "type": "string",
        "description": "Sample configuration mode for profile jobs."
      },
      {
        "name": "size",
        "type": "integer",
        "description": "Sample configuration size for profile jobs."
      }
    ]
  },
  {
    "name": "profile_configuration",
    "type": "object",
    "description": "Profile Job configuration",
    "children": [
      {
        "name": "dataset_statistics_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "included_statistics",
            "type": "array",
            "description": ""
          },
          {
            "name": "overrides",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "parameters",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "profile_columns",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "regex",
            "type": "string",
            "description": "A regular expression for selecting a column from a dataset"
          },
          {
            "name": "name",
            "type": "string",
            "description": "The name of a column from a dataset"
          }
        ]
      },
      {
        "name": "column_statistics_configurations",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "selectors",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "entity_detector_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "entity_types",
            "type": "array",
            "description": ""
          },
          {
            "name": "allowed_statistics",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "statistics",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "validation_configurations",
    "type": "array",
    "description": "Data quality rules configuration",
    "children": [
      {
        "name": "ruleset_arn",
        "type": "string",
        "description": "Arn of the Ruleset"
      },
      {
        "name": "validation_mode",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html"><code>AWS::DataBrew::Job</code></a>.

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
    <td><CopyableCode code="Name, RoleArn, Type, region" /></td>
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

Gets all properties from an individual <code>job</code>.
```sql
SELECT
region,
dataset_name,
encryption_key_arn,
encryption_mode,
name,
type,
log_subscription,
max_capacity,
max_retries,
outputs,
data_catalog_outputs,
database_outputs,
output_location,
project_name,
recipe,
role_arn,
tags,
timeout,
job_sample,
profile_configuration,
validation_configurations
FROM awscc.databrew.jobs
WHERE region = 'us-east-1' AND data__Identifier = '<Name>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>job</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.databrew.jobs (
 Name,
 Type,
 RoleArn,
 region
)
SELECT 
'{{ Name }}',
 '{{ Type }}',
 '{{ RoleArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.databrew.jobs (
 DatasetName,
 EncryptionKeyArn,
 EncryptionMode,
 Name,
 Type,
 LogSubscription,
 MaxCapacity,
 MaxRetries,
 Outputs,
 DataCatalogOutputs,
 DatabaseOutputs,
 OutputLocation,
 ProjectName,
 Recipe,
 RoleArn,
 Tags,
 Timeout,
 JobSample,
 ProfileConfiguration,
 ValidationConfigurations,
 region
)
SELECT 
 '{{ DatasetName }}',
 '{{ EncryptionKeyArn }}',
 '{{ EncryptionMode }}',
 '{{ Name }}',
 '{{ Type }}',
 '{{ LogSubscription }}',
 '{{ MaxCapacity }}',
 '{{ MaxRetries }}',
 '{{ Outputs }}',
 '{{ DataCatalogOutputs }}',
 '{{ DatabaseOutputs }}',
 '{{ OutputLocation }}',
 '{{ ProjectName }}',
 '{{ Recipe }}',
 '{{ RoleArn }}',
 '{{ Tags }}',
 '{{ Timeout }}',
 '{{ JobSample }}',
 '{{ ProfileConfiguration }}',
 '{{ ValidationConfigurations }}',
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
  - name: job
    props:
      - name: DatasetName
        value: '{{ DatasetName }}'
      - name: EncryptionKeyArn
        value: '{{ EncryptionKeyArn }}'
      - name: EncryptionMode
        value: '{{ EncryptionMode }}'
      - name: Name
        value: '{{ Name }}'
      - name: Type
        value: '{{ Type }}'
      - name: LogSubscription
        value: '{{ LogSubscription }}'
      - name: MaxCapacity
        value: '{{ MaxCapacity }}'
      - name: MaxRetries
        value: '{{ MaxRetries }}'
      - name: Outputs
        value:
          - CompressionFormat: '{{ CompressionFormat }}'
            Format: '{{ Format }}'
            FormatOptions:
              Csv:
                Delimiter: '{{ Delimiter }}'
            PartitionColumns:
              - '{{ PartitionColumns[0] }}'
            Location:
              Bucket: '{{ Bucket }}'
              Key: '{{ Key }}'
            Overwrite: '{{ Overwrite }}'
            MaxOutputFiles: '{{ MaxOutputFiles }}'
      - name: DataCatalogOutputs
        value:
          - CatalogId: '{{ CatalogId }}'
            DatabaseName: '{{ DatabaseName }}'
            TableName: '{{ TableName }}'
            S3Options:
              Location: null
            DatabaseOptions:
              TempDirectory: null
              TableName: '{{ TableName }}'
            Overwrite: '{{ Overwrite }}'
      - name: DatabaseOutputs
        value:
          - GlueConnectionName: '{{ GlueConnectionName }}'
            DatabaseOutputMode: '{{ DatabaseOutputMode }}'
            DatabaseOptions: null
      - name: OutputLocation
        value:
          Bucket: '{{ Bucket }}'
          Key: '{{ Key }}'
          BucketOwner: '{{ BucketOwner }}'
      - name: ProjectName
        value: '{{ ProjectName }}'
      - name: Recipe
        value:
          Description: '{{ Description }}'
          Name: '{{ Name }}'
          Steps:
            - Action:
                Operation: '{{ Operation }}'
                Parameters: null
              ConditionExpressions:
                - Condition: '{{ Condition }}'
                  Value: '{{ Value }}'
                  TargetColumn: '{{ TargetColumn }}'
          Tags:
            - Key: '{{ Key }}'
              Value: '{{ Value }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: Tags
        value:
          - null
      - name: Timeout
        value: '{{ Timeout }}'
      - name: JobSample
        value:
          Mode: '{{ Mode }}'
          Size: '{{ Size }}'
      - name: ProfileConfiguration
        value:
          DatasetStatisticsConfiguration:
            IncludedStatistics:
              - '{{ IncludedStatistics[0] }}'
            Overrides:
              - Statistic: null
                Parameters: {}
          ProfileColumns:
            - Regex: '{{ Regex }}'
              Name: '{{ Name }}'
          ColumnStatisticsConfigurations:
            - Selectors:
                - null
              Statistics: null
          EntityDetectorConfiguration:
            EntityTypes:
              - '{{ EntityTypes[0] }}'
            AllowedStatistics:
              Statistics:
                - null
      - name: ValidationConfigurations
        value:
          - RulesetArn: '{{ RulesetArn }}'
            ValidationMode: '{{ ValidationMode }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.databrew.jobs
WHERE data__Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>jobs</code> resource, the following permissions are required:

### Create
```json
databrew:CreateProfileJob,
databrew:CreateRecipeJob,
databrew:DescribeJob,
databrew:TagResource,
databrew:UntagResource,
iam:PassRole
```

### Read
```json
databrew:DescribeJob,
iam:ListRoles
```

### Update
```json
databrew:UpdateProfileJob,
databrew:UpdateRecipeJob,
databrew:TagResource,
databrew:UntagResource,
iam:PassRole
```

### Delete
```json
databrew:DeleteJob
```

### List
```json
databrew:ListJobs,
databrew:ListTagsForResource,
iam:ListRoles
```
