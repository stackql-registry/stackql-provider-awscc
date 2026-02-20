---
title: guard_hooks
hide_title: false
hide_table_of_contents: false
keywords:
  - guard_hooks
  - cloudformation
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

Creates, updates, deletes or gets a <code>guard_hook</code> resource or lists <code>guard_hooks</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>guard_hooks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>This is a CloudFormation resource for activating the first-party AWS::Hooks::GuardHook.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudformation.guard_hooks" /></td></tr>
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
    "name": "rule_location",
    "type": "object",
    "description": "S3 Source Location for the Guard files.",
    "children": [
      {
        "name": "uri",
        "type": "string",
        "description": "S3 uri of Guard files."
      },
      {
        "name": "version_id",
        "type": "string",
        "description": "S3 object version"
      }
    ]
  },
  {
    "name": "log_bucket",
    "type": "string",
    "description": "S3 Bucket where the guard validate report will be uploaded to"
  },
  {
    "name": "hook_status",
    "type": "string",
    "description": "Attribute to specify which stacks this hook applies to or should get invoked for"
  },
  {
    "name": "target_operations",
    "type": "array",
    "description": "Which operations should this Hook run against? Resource changes, stacks or change sets."
  },
  {
    "name": "failure_mode",
    "type": "string",
    "description": "Attribute to specify CloudFormation behavior on hook failure."
  },
  {
    "name": "target_filters",
    "type": "object",
    "description": "Attribute to specify which targets should invoke the hook"
  },
  {
    "name": "stack_filters",
    "type": "object",
    "description": "Filters to allow hooks to target specific stack attributes",
    "children": [
      {
        "name": "filtering_criteria",
        "type": "string",
        "description": "Attribute to specify the filtering behavior. ANY will make the Hook pass if one filter matches. ALL will make the Hook pass if all filters match"
      },
      {
        "name": "stack_names",
        "type": "object",
        "description": "List of stack names as filters",
        "children": [
          {
            "name": "include",
            "type": "array",
            "description": "List of stack names that the hook is going to target"
          },
          {
            "name": "exclude",
            "type": "array",
            "description": "List of stack names that the hook is going to be excluded from"
          }
        ]
      },
      {
        "name": "stack_roles",
        "type": "object",
        "description": "List of stack roles that are performing the stack operations.",
        "children": [
          {
            "name": "include",
            "type": "array",
            "description": "List of stack roles that the hook is going to target"
          },
          {
            "name": "exclude",
            "type": "array",
            "description": "List of stack roles that the hook is going to be excluded from"
          }
        ]
      }
    ]
  },
  {
    "name": "alias",
    "type": "string",
    "description": "The typename alias for the hook."
  },
  {
    "name": "hook_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the activated hook"
  },
  {
    "name": "execution_role",
    "type": "string",
    "description": "The execution role ARN assumed by hooks to read Guard rules from S3 and write Guard outputs to S3."
  },
  {
    "name": "options",
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
    "name": "hook_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the activated hook"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html"><code>AWS::CloudFormation::GuardHook</code></a>.

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
    <td><code>guard_hooks</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RuleLocation, HookStatus, TargetOperations, FailureMode, Alias, ExecutionRole, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>guard_hooks</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>guard_hooks</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>guard_hooks_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>guard_hooks</code></td>
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

Gets all properties from an individual <code>guard_hook</code>.
```sql
SELECT
region,
rule_location,
log_bucket,
hook_status,
target_operations,
failure_mode,
target_filters,
stack_filters,
alias,
hook_arn,
execution_role,
options
FROM awscc.cloudformation.guard_hooks
WHERE region = 'us-east-1' AND Identifier = '<HookArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>guard_hooks</code> in a region.
```sql
SELECT
region,
hook_arn
FROM awscc.cloudformation.guard_hooks_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>guard_hook</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudformation.guard_hooks (
 RuleLocation,
 HookStatus,
 TargetOperations,
 FailureMode,
 Alias,
 ExecutionRole,
 region
)
SELECT 
'{{ RuleLocation }}',
 '{{ HookStatus }}',
 '{{ TargetOperations }}',
 '{{ FailureMode }}',
 '{{ Alias }}',
 '{{ ExecutionRole }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudformation.guard_hooks (
 RuleLocation,
 LogBucket,
 HookStatus,
 TargetOperations,
 FailureMode,
 TargetFilters,
 StackFilters,
 Alias,
 ExecutionRole,
 Options,
 region
)
SELECT 
 '{{ RuleLocation }}',
 '{{ LogBucket }}',
 '{{ HookStatus }}',
 '{{ TargetOperations }}',
 '{{ FailureMode }}',
 '{{ TargetFilters }}',
 '{{ StackFilters }}',
 '{{ Alias }}',
 '{{ ExecutionRole }}',
 '{{ Options }}',
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
  - name: guard_hook
    props:
      - name: RuleLocation
        value:
          Uri: '{{ Uri }}'
          VersionId: '{{ VersionId }}'
      - name: LogBucket
        value: '{{ LogBucket }}'
      - name: HookStatus
        value: '{{ HookStatus }}'
      - name: TargetOperations
        value:
          - '{{ TargetOperations[0] }}'
      - name: FailureMode
        value: '{{ FailureMode }}'
      - name: TargetFilters
        value: {}
      - name: StackFilters
        value:
          FilteringCriteria: '{{ FilteringCriteria }}'
          StackNames:
            Include:
              - '{{ Include[0] }}'
            Exclude:
              - null
          StackRoles:
            Include:
              - '{{ Include[0] }}'
            Exclude:
              - null
      - name: Alias
        value: '{{ Alias }}'
      - name: ExecutionRole
        value: '{{ ExecutionRole }}'
      - name: Options
        value: null

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.cloudformation.guard_hooks
SET PatchDocument = string('{{ {
    "RuleLocation": rule_location,
    "LogBucket": log_bucket,
    "HookStatus": hook_status,
    "TargetOperations": target_operations,
    "FailureMode": failure_mode,
    "TargetFilters": target_filters,
    "StackFilters": stack_filters,
    "Options": options
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<HookArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudformation.guard_hooks
WHERE Identifier = '<HookArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>guard_hooks</code> resource, the following permissions are required:

### Create
```json
cloudformation:ActivateType,
cloudformation:DescribeType,
cloudformation:ListTypes,
cloudformation:SetTypeConfiguration,
cloudformation:BatchDescribeTypeConfigurations,
iam:PassRole
```

### Read
```json
cloudformation:DescribeType,
cloudformation:BatchDescribeTypeConfigurations
```

### Update
```json
cloudformation:BatchDescribeTypeConfigurations,
cloudformation:DescribeType,
cloudformation:SetTypeConfiguration,
iam:PassRole
```

### Delete
```json
cloudformation:BatchDescribeTypeConfigurations,
cloudformation:DescribeType,
cloudformation:DeactivateType,
cloudformation:SetTypeConfiguration
```

### List
```json
cloudformation:ListTypes,
cloudformation:DescribeType,
cloudformation:BatchDescribeTypeConfigurations
```
