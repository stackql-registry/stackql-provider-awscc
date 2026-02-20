---
title: datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - datasets
  - iotanalytics
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

Creates, updates, deletes or gets a <code>dataset</code> resource or lists <code>datasets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>datasets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::IoTAnalytics::Dataset</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotanalytics.datasets" /></td></tr>
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
    "name": "actions",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "action_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "container_action",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "variables",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "variable_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "dataset_content_version_value",
                "type": "object",
                "description": ""
              },
              {
                "name": "string_value",
                "type": "string",
                "description": ""
              },
              {
                "name": "double_value",
                "type": "number",
                "description": ""
              },
              {
                "name": "output_file_uri_value",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "execution_role_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "image",
            "type": "string",
            "description": ""
          },
          {
            "name": "resource_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "volume_size_in_gb",
                "type": "integer",
                "description": ""
              },
              {
                "name": "compute_type",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "query_action",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "filters",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "filter",
                "type": "string",
                "description": ""
              },
              {
                "name": "next",
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
            "name": "sql_query",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "late_data_rules",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "rule_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "delta_time_session_window_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "timeout_in_minutes",
                "type": "integer",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "rule_name",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "dataset_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "content_delivery_rules",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "destination",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "iot_events_destination_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "input_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "s3_destination_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "glue_configuration",
                "type": "object",
                "description": ""
              },
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
                "name": "role_arn",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "entry_name",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "triggers",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "triggering_dataset",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "dataset_name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "schedule",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "schedule_expression",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "versioning_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "unlimited",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "max_versions",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "retention_period",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "number_of_days",
        "type": "integer",
        "description": ""
      },
      {
        "name": "unlimited",
        "type": "boolean",
        "description": ""
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
    "name": "dataset_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-dataset.html"><code>AWS::IoTAnalytics::Dataset</code></a>.

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
    <td><code>datasets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Actions, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>datasets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>datasets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>datasets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>datasets</code></td>
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

Gets all properties from an individual <code>dataset</code>.
```sql
SELECT
region,
actions,
late_data_rules,
dataset_name,
content_delivery_rules,
triggers,
versioning_configuration,
id,
retention_period,
tags
FROM awscc.iotanalytics.datasets
WHERE region = 'us-east-1' AND data__Identifier = '<DatasetName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>datasets</code> in a region.
```sql
SELECT
region,
dataset_name
FROM awscc.iotanalytics.datasets_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>dataset</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotanalytics.datasets (
 Actions,
 region
)
SELECT 
'{{ Actions }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotanalytics.datasets (
 Actions,
 LateDataRules,
 DatasetName,
 ContentDeliveryRules,
 Triggers,
 VersioningConfiguration,
 RetentionPeriod,
 Tags,
 region
)
SELECT 
 '{{ Actions }}',
 '{{ LateDataRules }}',
 '{{ DatasetName }}',
 '{{ ContentDeliveryRules }}',
 '{{ Triggers }}',
 '{{ VersioningConfiguration }}',
 '{{ RetentionPeriod }}',
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
  - name: dataset
    props:
      - name: Actions
        value:
          - ActionName: '{{ ActionName }}'
            ContainerAction:
              Variables:
                - VariableName: '{{ VariableName }}'
                  DatasetContentVersionValue:
                    DatasetName: '{{ DatasetName }}'
                  StringValue: '{{ StringValue }}'
                  DoubleValue: null
                  OutputFileUriValue:
                    FileName: '{{ FileName }}'
              ExecutionRoleArn: '{{ ExecutionRoleArn }}'
              Image: '{{ Image }}'
              ResourceConfiguration:
                VolumeSizeInGB: '{{ VolumeSizeInGB }}'
                ComputeType: '{{ ComputeType }}'
            QueryAction:
              Filters:
                - Filter: '{{ Filter }}'
                  Next: '{{ Next }}'
                  Name: '{{ Name }}'
              SqlQuery: '{{ SqlQuery }}'
      - name: LateDataRules
        value:
          - RuleConfiguration:
              DeltaTimeSessionWindowConfiguration:
                TimeoutInMinutes: '{{ TimeoutInMinutes }}'
            RuleName: '{{ RuleName }}'
      - name: DatasetName
        value: '{{ DatasetName }}'
      - name: ContentDeliveryRules
        value:
          - Destination:
              IotEventsDestinationConfiguration:
                InputName: '{{ InputName }}'
                RoleArn: '{{ RoleArn }}'
              S3DestinationConfiguration:
                GlueConfiguration:
                  DatabaseName: '{{ DatabaseName }}'
                  TableName: '{{ TableName }}'
                Bucket: '{{ Bucket }}'
                Key: '{{ Key }}'
                RoleArn: '{{ RoleArn }}'
            EntryName: '{{ EntryName }}'
      - name: Triggers
        value:
          - TriggeringDataset:
              DatasetName: '{{ DatasetName }}'
            Schedule:
              ScheduleExpression: '{{ ScheduleExpression }}'
      - name: VersioningConfiguration
        value:
          Unlimited: '{{ Unlimited }}'
          MaxVersions: '{{ MaxVersions }}'
      - name: RetentionPeriod
        value:
          NumberOfDays: '{{ NumberOfDays }}'
          Unlimited: '{{ Unlimited }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.iotanalytics.datasets
SET data__PatchDocument = string('{{ {
    "Actions": actions,
    "LateDataRules": late_data_rules,
    "ContentDeliveryRules": content_delivery_rules,
    "Triggers": triggers,
    "VersioningConfiguration": versioning_configuration,
    "RetentionPeriod": retention_period,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<DatasetName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotanalytics.datasets
WHERE data__Identifier = '<DatasetName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>datasets</code> resource, the following permissions are required:

### Create
```json
iotanalytics:CreateDataset
```

### Read
```json
iotanalytics:DescribeDataset,
iotanalytics:ListTagsForResource
```

### Update
```json
iotanalytics:UpdateDataset,
iotanalytics:TagResource,
iotanalytics:UntagResource
```

### Delete
```json
iotanalytics:DeleteDataset
```

### List
```json
iotanalytics:ListDatasets
```
