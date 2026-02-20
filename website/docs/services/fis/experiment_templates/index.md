---
title: experiment_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - experiment_templates
  - fis
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

Creates, updates, deletes or gets an <code>experiment_template</code> resource or lists <code>experiment_templates</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>experiment_templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::FIS::ExperimentTemplate</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.fis.experiment_templates" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description for the experiment template."
  },
  {
    "name": "targets",
    "type": "object",
    "description": "The targets for the experiment."
  },
  {
    "name": "actions",
    "type": "object",
    "description": "The actions for the experiment."
  },
  {
    "name": "stop_conditions",
    "type": "array",
    "description": "One or more stop conditions.",
    "children": [
      {
        "name": "source",
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
    "name": "log_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "cloud_watch_logs_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "log_group_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "s3_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "bucket_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "prefix",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "log_schema_version",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of an IAM role that grants the AWS FIS service permission to perform service actions on your behalf."
  },
  {
    "name": "tags",
    "type": "object",
    "description": ""
  },
  {
    "name": "experiment_options",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "account_targeting",
        "type": "string",
        "description": "The account targeting setting for the experiment template."
      },
      {
        "name": "empty_target_resolution_mode",
        "type": "string",
        "description": "The target resolution failure mode for the experiment template."
      }
    ]
  },
  {
    "name": "experiment_report_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "outputs",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "experiment_report_s3_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "bucket_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "prefix",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "data_sources",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "cloud_watch_dashboards",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "dashboard_identifier",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "pre_experiment_duration",
        "type": "string",
        "description": ""
      },
      {
        "name": "post_experiment_duration",
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
    "name": "id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html"><code>AWS::FIS::ExperimentTemplate</code></a>.

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
    <td><code>experiment_templates</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Description, StopConditions, Targets, RoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>experiment_templates</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>experiment_templates</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>experiment_templates_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>experiment_templates</code></td>
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

Gets all properties from an individual <code>experiment_template</code>.
```sql
SELECT
region,
id,
description,
targets,
actions,
stop_conditions,
log_configuration,
role_arn,
tags,
experiment_options,
experiment_report_configuration
FROM awscc.fis.experiment_templates
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>experiment_templates</code> in a region.
```sql
SELECT
region,
id
FROM awscc.fis.experiment_templates_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>experiment_template</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.fis.experiment_templates (
 Description,
 Targets,
 StopConditions,
 RoleArn,
 region
)
SELECT 
'{{ Description }}',
 '{{ Targets }}',
 '{{ StopConditions }}',
 '{{ RoleArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.fis.experiment_templates (
 Description,
 Targets,
 Actions,
 StopConditions,
 LogConfiguration,
 RoleArn,
 Tags,
 ExperimentOptions,
 ExperimentReportConfiguration,
 region
)
SELECT 
 '{{ Description }}',
 '{{ Targets }}',
 '{{ Actions }}',
 '{{ StopConditions }}',
 '{{ LogConfiguration }}',
 '{{ RoleArn }}',
 '{{ Tags }}',
 '{{ ExperimentOptions }}',
 '{{ ExperimentReportConfiguration }}',
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
  - name: experiment_template
    props:
      - name: Description
        value: '{{ Description }}'
      - name: Targets
        value: {}
      - name: Actions
        value: {}
      - name: StopConditions
        value:
          - Source: '{{ Source }}'
            Value: '{{ Value }}'
      - name: LogConfiguration
        value:
          CloudWatchLogsConfiguration:
            LogGroupArn: '{{ LogGroupArn }}'
          S3Configuration:
            BucketName: '{{ BucketName }}'
            Prefix: '{{ Prefix }}'
          LogSchemaVersion: '{{ LogSchemaVersion }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: Tags
        value: {}
      - name: ExperimentOptions
        value:
          AccountTargeting: '{{ AccountTargeting }}'
          EmptyTargetResolutionMode: '{{ EmptyTargetResolutionMode }}'
      - name: ExperimentReportConfiguration
        value:
          Outputs:
            ExperimentReportS3Configuration:
              BucketName: '{{ BucketName }}'
              Prefix: '{{ Prefix }}'
          DataSources:
            CloudWatchDashboards:
              - DashboardIdentifier: '{{ DashboardIdentifier }}'
          PreExperimentDuration: '{{ PreExperimentDuration }}'
          PostExperimentDuration: '{{ PostExperimentDuration }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.fis.experiment_templates
SET data__PatchDocument = string('{{ {
    "Description": description,
    "Targets": targets,
    "Actions": actions,
    "StopConditions": stop_conditions,
    "LogConfiguration": log_configuration,
    "RoleArn": role_arn,
    "Tags": tags,
    "ExperimentReportConfiguration": experiment_report_configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.fis.experiment_templates
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>experiment_templates</code> resource, the following permissions are required:

### Create
```json
fis:CreateExperimentTemplate,
fis:TagResource,
iam:PassRole
```

### Read
```json
fis:GetExperimentTemplate,
fis:ListTagsForResource
```

### Update
```json
fis:UpdateExperimentTemplate,
fis:TagResource,
fis:UntagResource,
iam:PassRole
```

### Delete
```json
fis:DeleteExperimentTemplate
```

### List
```json
fis:ListExperimentTemplates,
fis:ListTagsForResource
```
