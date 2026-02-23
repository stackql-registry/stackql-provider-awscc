---
title: workspaces
hide_title: false
hide_table_of_contents: false
keywords:
  - workspaces
  - aps
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

Creates, updates, deletes or gets a <code>workspace</code> resource or lists <code>workspaces</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>workspaces</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::APS::Workspace</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.aps.workspaces" /></td></tr>
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
    "name": "workspace_id",
    "type": "string",
    "description": "Required to identify a specific APS Workspace."
  },
  {
    "name": "alias",
    "type": "string",
    "description": "AMP Workspace alias."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "Workspace arn."
  },
  {
    "name": "alert_manager_definition",
    "type": "string",
    "description": "The AMP Workspace alert manager definition data"
  },
  {
    "name": "prometheus_endpoint",
    "type": "string",
    "description": "AMP Workspace prometheus endpoint"
  },
  {
    "name": "logging_configuration",
    "type": "object",
    "description": "Logging configuration",
    "children": [
      {
        "name": "log_group_arn",
        "type": "string",
        "description": "CloudWatch log group ARN"
      }
    ]
  },
  {
    "name": "workspace_configuration",
    "type": "object",
    "description": "Workspace configuration",
    "children": [
      {
        "name": "retention_period_in_days",
        "type": "integer",
        "description": "How many days that metrics are retained in the workspace"
      },
      {
        "name": "limits_per_label_sets",
        "type": "array",
        "description": "An array of label set and associated limits",
        "children": [
          {
            "name": "limits",
            "type": "object",
            "description": "Limits that can be applied to a label set",
            "children": [
              {
                "name": "max_series",
                "type": "integer",
                "description": "The maximum number of active series that can be ingested for this label set"
              }
            ]
          },
          {
            "name": "label_set",
            "type": "array",
            "description": "An array of series labels",
            "children": [
              {
                "name": "name",
                "type": "string",
                "description": "Name of the label"
              },
              {
                "name": "value",
                "type": "string",
                "description": "Value of the label"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "query_logging_configuration",
    "type": "object",
    "description": "Query logging configuration",
    "children": [
      {
        "name": "destinations",
        "type": "array",
        "description": "The destinations configuration for query logging",
        "children": [
          {
            "name": "cloud_watch_logs",
            "type": "object",
            "description": "Represents a cloudwatch logs destination for query logging",
            "children": [
              {
                "name": "log_group_arn",
                "type": "string",
                "description": "The ARN of the CloudWatch Logs log group"
              }
            ]
          },
          {
            "name": "filters",
            "type": "object",
            "description": "Filters for logging",
            "children": [
              {
                "name": "qsp_threshold",
                "type": "integer",
                "description": "Query logs with QSP above this limit are vended"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "kms_key_arn",
    "type": "string",
    "description": "KMS Key ARN used to encrypt and decrypt AMP workspace data."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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
    "name": "arn",
    "type": "string",
    "description": "Workspace arn."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html"><code>AWS::APS::Workspace</code></a>.

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
    <td><code>workspaces</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>workspaces</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>workspaces</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>workspaces_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>workspaces</code></td>
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

Gets all properties from an individual <code>workspace</code>.
```sql
SELECT
region,
workspace_id,
alias,
arn,
alert_manager_definition,
prometheus_endpoint,
logging_configuration,
workspace_configuration,
query_logging_configuration,
kms_key_arn,
tags
FROM awscc.aps.workspaces
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>workspaces</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.aps.workspaces_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>workspace</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.aps.workspaces (
 ,
 region
)
SELECT
'{{  }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.aps.workspaces (
 Alias,
 AlertManagerDefinition,
 LoggingConfiguration,
 WorkspaceConfiguration,
 QueryLoggingConfiguration,
 KmsKeyArn,
 Tags,
 region
)
SELECT
 '{{ alias }}',
 '{{ alert_manager_definition }}',
 '{{ logging_configuration }}',
 '{{ workspace_configuration }}',
 '{{ query_logging_configuration }}',
 '{{ kms_key_arn }}',
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
  - name: workspace
    props:
      - name: alias
        value: '{{ alias }}'
      - name: alert_manager_definition
        value: '{{ alert_manager_definition }}'
      - name: logging_configuration
        value:
          log_group_arn: '{{ log_group_arn }}'
      - name: workspace_configuration
        value:
          retention_period_in_days: '{{ retention_period_in_days }}'
          limits_per_label_sets:
            - limits:
                max_series: '{{ max_series }}'
              label_set:
                - name: '{{ name }}'
                  value: '{{ value }}'
      - name: query_logging_configuration
        value:
          destinations:
            - cloud_watch_logs:
                log_group_arn: '{{ log_group_arn }}'
              filters:
                qsp_threshold: '{{ qsp_threshold }}'
      - name: kms_key_arn
        value: '{{ kms_key_arn }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>workspace</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.aps.workspaces
SET PatchDocument = string('{{ {
    "Alias": alias,
    "AlertManagerDefinition": alert_manager_definition,
    "LoggingConfiguration": logging_configuration,
    "WorkspaceConfiguration": workspace_configuration,
    "QueryLoggingConfiguration": query_logging_configuration,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.aps.workspaces
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>workspaces</code> resource, the following permissions are required:

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
aps:CreateWorkspace,
aps:DescribeWorkspace,
aps:TagResource,
aps:CreateAlertManagerDefinition,
aps:DescribeAlertManagerDefinition,
aps:CreateLoggingConfiguration,
aps:CreateQueryLoggingConfiguration,
aps:DescribeWorkspaceConfiguration,
aps:UpdateWorkspaceConfiguration,
logs:CreateLogDelivery,
logs:GetLogDelivery,
logs:ListLogDeliveries,
logs:PutResourcePolicy,
kms:CreateGrant,
kms:Decrypt,
kms:GenerateDataKey
```

</TabItem>
<TabItem value="read">

```json
aps:DescribeWorkspace,
aps:ListTagsForResource,
aps:DescribeAlertManagerDefinition,
aps:DescribeLoggingConfiguration,
aps:DescribeQueryLoggingConfiguration,
aps:DescribeWorkspaceConfiguration
```

</TabItem>
<TabItem value="update">

```json
aps:UpdateWorkspaceAlias,
aps:DescribeWorkspace,
aps:TagResource,
aps:UntagResource,
aps:ListTagsForResource,
aps:CreateAlertManagerDefinition,
aps:PutAlertManagerDefinition,
aps:DeleteAlertManagerDefinition,
aps:CreateLoggingConfiguration,
aps:DescribeLoggingConfiguration,
aps:UpdateLoggingConfiguration,
aps:DeleteLoggingConfiguration,
aps:DescribeWorkspaceConfiguration,
aps:UpdateWorkspaceConfiguration,
aps:CreateQueryLoggingConfiguration,
aps:UpdateQueryLoggingConfiguration,
aps:DeleteQueryLoggingConfiguration,
aps:DescribeQueryLoggingConfiguration,
logs:CreateLogDelivery,
logs:GetLogDelivery,
logs:UpdateLogDelivery,
logs:ListLogDeliveries,
logs:DeleteLogDelivery,
logs:PutResourcePolicy
```

</TabItem>
<TabItem value="delete">

```json
aps:DeleteWorkspace,
aps:DescribeWorkspace,
aps:DeleteAlertManagerDefinition,
aps:DeleteLoggingConfiguration,
aps:DeleteQueryLoggingConfiguration,
logs:DeleteLogDelivery
```

</TabItem>
<TabItem value="list">

```json
aps:ListWorkspaces,
aps:ListTagsForResource
```

</TabItem>
</Tabs>