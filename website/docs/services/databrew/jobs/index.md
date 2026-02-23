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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "Job name"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html"><code>AWS::DataBrew::Job</code></a>.

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
    <td><code>jobs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, RoleArn, Type, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>jobs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>jobs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>jobs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>jobs</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '{{ name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>jobs</code> in a region.
```sql
SELECT
region,
name
FROM awscc.databrew.jobs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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
'{{ name }}',
 '{{ type }}',
 '{{ role_arn }}',
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
 '{{ dataset_name }}',
 '{{ encryption_key_arn }}',
 '{{ encryption_mode }}',
 '{{ name }}',
 '{{ type }}',
 '{{ log_subscription }}',
 '{{ max_capacity }}',
 '{{ max_retries }}',
 '{{ outputs }}',
 '{{ data_catalog_outputs }}',
 '{{ database_outputs }}',
 '{{ output_location }}',
 '{{ project_name }}',
 '{{ recipe }}',
 '{{ role_arn }}',
 '{{ tags }}',
 '{{ timeout }}',
 '{{ job_sample }}',
 '{{ profile_configuration }}',
 '{{ validation_configurations }}',
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
      - name: dataset_name
        value: '{{ dataset_name }}'
      - name: encryption_key_arn
        value: '{{ encryption_key_arn }}'
      - name: encryption_mode
        value: '{{ encryption_mode }}'
      - name: name
        value: '{{ name }}'
      - name: type
        value: '{{ type }}'
      - name: log_subscription
        value: '{{ log_subscription }}'
      - name: max_capacity
        value: '{{ max_capacity }}'
      - name: max_retries
        value: '{{ max_retries }}'
      - name: outputs
        value:
          - compression_format: '{{ compression_format }}'
            format: '{{ format }}'
            format_options:
              csv:
                delimiter: '{{ delimiter }}'
            partition_columns:
              - '{{ partition_columns[0] }}'
            location:
              bucket: '{{ bucket }}'
              key: '{{ key }}'
            overwrite: '{{ overwrite }}'
            max_output_files: '{{ max_output_files }}'
      - name: data_catalog_outputs
        value:
          - catalog_id: '{{ catalog_id }}'
            database_name: '{{ database_name }}'
            table_name: '{{ table_name }}'
            s3_options:
              location: null
            database_options:
              temp_directory: null
              table_name: '{{ table_name }}'
            overwrite: '{{ overwrite }}'
      - name: database_outputs
        value:
          - glue_connection_name: '{{ glue_connection_name }}'
            database_output_mode: '{{ database_output_mode }}'
            database_options: null
      - name: output_location
        value:
          bucket: '{{ bucket }}'
          key: '{{ key }}'
          bucket_owner: '{{ bucket_owner }}'
      - name: project_name
        value: '{{ project_name }}'
      - name: recipe
        value:
          description: '{{ description }}'
          name: '{{ name }}'
          steps:
            - action:
                operation: '{{ operation }}'
                parameters: null
              condition_expressions:
                - condition: '{{ condition }}'
                  value: '{{ value }}'
                  target_column: '{{ target_column }}'
          tags:
            - key: '{{ key }}'
              value: '{{ value }}'
      - name: role_arn
        value: '{{ role_arn }}'
      - name: tags
        value:
          - null
      - name: timeout
        value: '{{ timeout }}'
      - name: job_sample
        value:
          mode: '{{ mode }}'
          size: '{{ size }}'
      - name: profile_configuration
        value:
          dataset_statistics_configuration:
            included_statistics:
              - '{{ included_statistics[0] }}'
            overrides:
              - statistic: null
                parameters: {}
          profile_columns:
            - regex: '{{ regex }}'
              name: '{{ name }}'
          column_statistics_configurations:
            - selectors:
                - null
              statistics: null
          entity_detector_configuration:
            entity_types:
              - '{{ entity_types[0] }}'
            allowed_statistics:
              statistics:
                - null
      - name: validation_configurations
        value:
          - ruleset_arn: '{{ ruleset_arn }}'
            validation_mode: '{{ validation_mode }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>job</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.databrew.jobs
SET PatchDocument = string('{{ {
    "DatasetName": dataset_name,
    "EncryptionKeyArn": encryption_key_arn,
    "EncryptionMode": encryption_mode,
    "LogSubscription": log_subscription,
    "MaxCapacity": max_capacity,
    "MaxRetries": max_retries,
    "Outputs": outputs,
    "DataCatalogOutputs": data_catalog_outputs,
    "DatabaseOutputs": database_outputs,
    "OutputLocation": output_location,
    "ProjectName": project_name,
    "Recipe": recipe,
    "RoleArn": role_arn,
    "Tags": tags,
    "Timeout": timeout,
    "JobSample": job_sample,
    "ProfileConfiguration": profile_configuration,
    "ValidationConfigurations": validation_configurations
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.databrew.jobs
WHERE Identifier = '{{ name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>jobs</code> resource, the following permissions are required:

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
databrew:CreateProfileJob,
databrew:CreateRecipeJob,
databrew:DescribeJob,
databrew:TagResource,
databrew:UntagResource,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
databrew:DescribeJob,
iam:ListRoles
```

</TabItem>
<TabItem value="update">

```json
databrew:UpdateProfileJob,
databrew:UpdateRecipeJob,
databrew:TagResource,
databrew:UntagResource,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
databrew:DeleteJob
```

</TabItem>
<TabItem value="list">

```json
databrew:ListJobs,
databrew:ListTagsForResource,
iam:ListRoles
```

</TabItem>
</Tabs>