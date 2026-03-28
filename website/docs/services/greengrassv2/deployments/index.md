---
title: deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments
  - greengrassv2
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>deployment</code> resource or lists <code>deployments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>deployments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource for Greengrass V2 deployment.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.greengrassv2.deployments" /></td></tr>
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
    "name": "target_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "parent_target_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "deployment_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "deployment_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "components",
    "type": "object",
    "description": ""
  },
  {
    "name": "iot_job_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "job_executions_rollout_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "exponential_rate",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "base_rate_per_minute",
                "type": "integer",
                "description": ""
              },
              {
                "name": "increment_factor",
                "type": "number",
                "description": ""
              },
              {
                "name": "rate_increase_criteria",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "maximum_per_minute",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "abort_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "criteria_list",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "failure_type",
                "type": "string",
                "description": ""
              },
              {
                "name": "action",
                "type": "string",
                "description": ""
              },
              {
                "name": "threshold_percentage",
                "type": "number",
                "description": ""
              },
              {
                "name": "min_number_of_executed_things",
                "type": "integer",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "timeout_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "in_progress_timeout_in_minutes",
            "type": "integer",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "deployment_policies",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "failure_handling_policy",
        "type": "string",
        "description": ""
      },
      {
        "name": "component_update_policy",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "timeout_in_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "action",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "configuration_validation_policy",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "timeout_in_seconds",
            "type": "integer",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "object",
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
    "name": "deployment_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-deployment.html"><code>AWS::GreengrassV2::Deployment</code></a>.

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
    <td><code>deployments</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TargetArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>deployments</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>deployments</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>deployments_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>deployments</code></td>
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

Gets all properties from an individual <code>deployment</code>.
```sql
SELECT
  region,
  target_arn,
  parent_target_arn,
  deployment_id,
  deployment_name,
  components,
  iot_job_configuration,
  deployment_policies,
  tags
FROM awscc.greengrassv2.deployments
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ deployment_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>deployments</code> in a region.
```sql
SELECT
  region,
  deployment_id
FROM awscc.greengrassv2.deployments_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>deployment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.greengrassv2.deployments (
  TargetArn,
  region
)
SELECT
  '{{ target_arn }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.greengrassv2.deployments (
  TargetArn,
  ParentTargetArn,
  DeploymentName,
  Components,
  IotJobConfiguration,
  DeploymentPolicies,
  Tags,
  region
)
SELECT
  '{{ target_arn }}',
  '{{ parent_target_arn }}',
  '{{ deployment_name }}',
  '{{ components }}',
  '{{ iot_job_configuration }}',
  '{{ deployment_policies }}',
  '{{ tags }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: deployment
    props:
      - name: target_arn
        value: '{{ target_arn }}'
      - name: parent_target_arn
        value: '{{ parent_target_arn }}'
      - name: deployment_name
        value: '{{ deployment_name }}'
      - name: components
        value: {}
      - name: iot_job_configuration
        value:
          job_executions_rollout_config:
            exponential_rate:
              base_rate_per_minute: '{{ base_rate_per_minute }}'
              increment_factor: null
              rate_increase_criteria: {}
            maximum_per_minute: '{{ maximum_per_minute }}'
          abort_config:
            criteria_list:
              - failure_type: '{{ failure_type }}'
                action: '{{ action }}'
                threshold_percentage: null
                min_number_of_executed_things: '{{ min_number_of_executed_things }}'
          timeout_config:
            in_progress_timeout_in_minutes: '{{ in_progress_timeout_in_minutes }}'
      - name: deployment_policies
        value:
          failure_handling_policy: '{{ failure_handling_policy }}'
          component_update_policy:
            timeout_in_seconds: '{{ timeout_in_seconds }}'
            action: '{{ action }}'
          configuration_validation_policy:
            timeout_in_seconds: '{{ timeout_in_seconds }}'
      - name: tags
        value: {}`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>deployment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.greengrassv2.deployments
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ deployment_id }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.greengrassv2.deployments
WHERE
  Identifier = '{{ deployment_id }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>deployments</code> resource, the following permissions are required:

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
greengrass:CreateDeployment,
greengrass:GetDeployment,
greengrass:TagResource,
iot:CancelJob,
iot:CreateJob,
iot:DeleteThingShadow,
iot:DescribeJob,
iot:DescribeThing,
iot:DescribeThingGroup,
iot:GetThingShadow,
iot:UpdateJob,
iot:UpdateThingShadow
```

</TabItem>
<TabItem value="read">

```json
greengrass:GetDeployment,
iot:DescribeJob,
iot:DescribeThing,
iot:DescribeThingGroup,
iot:GetThingShadow
```

</TabItem>
<TabItem value="update">

```json
greengrass:GetDeployment,
greengrass:TagResource,
greengrass:UntagResource,
iot:DescribeJob
```

</TabItem>
<TabItem value="delete">

```json
greengrass:DeleteDeployment,
greengrass:CancelDeployment,
iot:CancelJob,
iot:DeleteJob,
iot:DescribeJob
```

</TabItem>
<TabItem value="list">

```json
greengrass:ListDeployments,
iot:DescribeJob,
iot:DescribeThing,
iot:DescribeThingGroup,
iot:GetThingShadow
```

</TabItem>
</Tabs>