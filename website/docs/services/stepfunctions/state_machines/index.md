---
title: state_machines
hide_title: false
hide_table_of_contents: false
keywords:
  - state_machines
  - stepfunctions
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

Creates, updates, deletes or gets a <code>state_machine</code> resource or lists <code>state_machines</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>state_machines</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for StateMachine</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.stepfunctions.state_machines" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "definition_string",
    "type": "string",
    "description": ""
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "state_machine_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "state_machine_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "state_machine_revision_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "logging_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "level",
        "type": "string",
        "description": ""
      },
      {
        "name": "include_execution_data",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "destinations",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "cloud_watch_logs_log_group",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "log_group_arn",
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
    "name": "tracing_configuration",
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
    "name": "encryption_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "kms_key_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "kms_data_key_reuse_period_seconds",
        "type": "integer",
        "description": ""
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "definition_s3_location",
    "type": "object",
    "description": "",
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
        "name": "version",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "definition_substitutions",
    "type": "object",
    "description": ""
  },
  {
    "name": "definition",
    "type": "object",
    "description": ""
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
    "name": "arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html"><code>AWS::StepFunctions::StateMachine</code></a>.

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
    <td><code>state_machines</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>state_machines</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>state_machines</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>state_machines_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>state_machines</code></td>
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

Gets all properties from an individual <code>state_machine</code>.
```sql
SELECT
region,
arn,
name,
definition_string,
role_arn,
state_machine_name,
state_machine_type,
state_machine_revision_id,
logging_configuration,
tracing_configuration,
encryption_configuration,
definition_s3_location,
definition_substitutions,
definition,
tags
FROM awscc.stepfunctions.state_machines
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>state_machines</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.stepfunctions.state_machines_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>state_machine</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.stepfunctions.state_machines (
 RoleArn,
 region
)
SELECT
'{{ role_arn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.stepfunctions.state_machines (
 DefinitionString,
 RoleArn,
 StateMachineName,
 StateMachineType,
 LoggingConfiguration,
 TracingConfiguration,
 EncryptionConfiguration,
 DefinitionS3Location,
 DefinitionSubstitutions,
 Definition,
 Tags,
 region
)
SELECT
 '{{ definition_string }}',
 '{{ role_arn }}',
 '{{ state_machine_name }}',
 '{{ state_machine_type }}',
 '{{ logging_configuration }}',
 '{{ tracing_configuration }}',
 '{{ encryption_configuration }}',
 '{{ definition_s3_location }}',
 '{{ definition_substitutions }}',
 '{{ definition }}',
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
  - name: state_machine
    props:
      - name: definition_string
        value: '{{ definition_string }}'
      - name: role_arn
        value: '{{ role_arn }}'
      - name: state_machine_name
        value: '{{ state_machine_name }}'
      - name: state_machine_type
        value: '{{ state_machine_type }}'
      - name: logging_configuration
        value:
          level: '{{ level }}'
          include_execution_data: '{{ include_execution_data }}'
          destinations:
            - cloud_watch_logs_log_group:
                log_group_arn: '{{ log_group_arn }}'
      - name: tracing_configuration
        value:
          enabled: '{{ enabled }}'
      - name: encryption_configuration
        value:
          kms_key_id: '{{ kms_key_id }}'
          kms_data_key_reuse_period_seconds: '{{ kms_data_key_reuse_period_seconds }}'
          type: '{{ type }}'
      - name: definition_s3_location
        value:
          bucket: '{{ bucket }}'
          key: '{{ key }}'
          version: '{{ version }}'
      - name: definition_substitutions
        value: {}
      - name: definition
        value: {}
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>state_machine</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.stepfunctions.state_machines
SET PatchDocument = string('{{ {
    "DefinitionString": definition_string,
    "RoleArn": role_arn,
    "LoggingConfiguration": logging_configuration,
    "TracingConfiguration": tracing_configuration,
    "EncryptionConfiguration": encryption_configuration,
    "DefinitionS3Location": definition_s3_location,
    "DefinitionSubstitutions": definition_substitutions,
    "Definition": definition,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.stepfunctions.state_machines
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>state_machines</code> resource, the following permissions are required:

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
states:CreateStateMachine,
states:DescribeStateMachine,
states:TagResource,
iam:PassRole,
s3:GetObject,
kms:DescribeKey,
kms:GenerateDataKey
```

</TabItem>
<TabItem value="read">

```json
states:DescribeStateMachine,
states:ListTagsForResource,
kms:Decrypt
```

</TabItem>
<TabItem value="update">

```json
states:UpdateStateMachine,
states:TagResource,
states:UntagResource,
states:ListTagsForResource,
iam:PassRole,
kms:DescribeKey,
kms:GenerateDataKey
```

</TabItem>
<TabItem value="delete">

```json
states:DeleteStateMachine,
states:DescribeStateMachine
```

</TabItem>
<TabItem value="list">

```json
states:ListStateMachines
```

</TabItem>
</Tabs>