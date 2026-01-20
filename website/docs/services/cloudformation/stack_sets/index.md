---
title: stack_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - stack_sets
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

Creates, updates, deletes or gets a <code>stack_set</code> resource or lists <code>stack_sets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>stack_sets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>StackSet as a resource provides one-click experience for provisioning a StackSet and StackInstances</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudformation.stack_sets" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "stack_set_name",
    "type": "string",
    "description": "The name to associate with the stack set. The name must be unique in the Region where you create your stack set."
  },
  {
    "name": "stack_set_id",
    "type": "string",
    "description": "The ID of the stack set that you're creating."
  },
  {
    "name": "administration_role_arn",
    "type": "string",
    "description": "The Amazon Resource Number (ARN) of the IAM role to use to create this stack set. Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account."
  },
  {
    "name": "auto_deployment",
    "type": "object",
    "description": "Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to the target organization or organizational unit (OU). Specify only if PermissionModel is SERVICE&#95;MANAGED.",
    "children": [
      {
        "name": "enabled",
        "type": "boolean",
        "description": "If set to true, StackSets automatically deploys additional stack instances to AWS Organizations accounts that are added to a target organization or organizational unit (OU) in the specified Regions. If an account is removed from a target organization or OU, StackSets deletes stack instances from the account in the specified Regions."
      },
      {
        "name": "retain_stacks_on_account_removal",
        "type": "boolean",
        "description": "If set to true, stack resources are retained when an account is removed from a target organization or OU. If set to false, stack resources are deleted. Specify only if Enabled is set to True."
      }
    ]
  },
  {
    "name": "capabilities",
    "type": "array",
    "description": "In some cases, you must explicitly acknowledge that your stack set template contains certain capabilities in order for AWS CloudFormation to create the stack set and related stack instances."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description of the stack set. You can use the description to identify the stack set's purpose or other important information."
  },
  {
    "name": "execution_role_name",
    "type": "string",
    "description": "The name of the IAM execution role to use to create the stack set. If you do not specify an execution role, AWS CloudFormation uses the AWSCloudFormationStackSetExecutionRole role for the stack set operation."
  },
  {
    "name": "operation_preferences",
    "type": "object",
    "description": "The user-specified preferences for how AWS CloudFormation performs a stack set operation.",
    "children": [
      {
        "name": "failure_tolerance_count",
        "type": "integer",
        "description": ""
      },
      {
        "name": "failure_tolerance_percentage",
        "type": "integer",
        "description": ""
      },
      {
        "name": "max_concurrent_count",
        "type": "integer",
        "description": ""
      },
      {
        "name": "max_concurrent_percentage",
        "type": "integer",
        "description": ""
      },
      {
        "name": "region_order",
        "type": "array",
        "description": ""
      },
      {
        "name": "region_concurrency_type",
        "type": "string",
        "description": "The concurrency type of deploying StackSets operations in regions, could be in parallel or one region at a time"
      },
      {
        "name": "concurrency_mode",
        "type": "string",
        "description": "Specifies how the concurrency level behaves during the operation execution."
      }
    ]
  },
  {
    "name": "stack_instances_group",
    "type": "array",
    "description": "A group of stack instances with parameters in some specific accounts and regions.",
    "children": [
      {
        "name": "deployment_targets",
        "type": "object",
        "description": "The AWS OrganizationalUnitIds or Accounts for which to create stack instances in the specified Regions.",
        "children": [
          {
            "name": "accounts",
            "type": "array",
            "description": "AWS accounts that you want to create stack instances in the specified Region(s) for."
          },
          {
            "name": "accounts_url",
            "type": "string",
            "description": "Returns the value of the AccountsUrl property."
          },
          {
            "name": "organizational_unit_ids",
            "type": "array",
            "description": "The organization root ID or organizational unit (OU) IDs to which StackSets deploys."
          },
          {
            "name": "account_filter_type",
            "type": "string",
            "description": "The filter type you want to apply on organizational units and accounts."
          }
        ]
      },
      {
        "name": "regions",
        "type": "array",
        "description": "The names of one or more Regions where you want to create stack instances using the specified AWS account(s)."
      },
      {
        "name": "parameter_overrides",
        "type": "array",
        "description": "A list of stack set parameters whose values you want to override in the selected stack instances.",
        "children": [
          {
            "name": "parameter_key",
            "type": "string",
            "description": "The key associated with the parameter. If you don't specify a key and value for a particular parameter, AWS CloudFormation uses the default value that is specified in your template."
          },
          {
            "name": "parameter_value",
            "type": "string",
            "description": "The input value associated with the parameter."
          }
        ]
      }
    ]
  },
  {
    "name": "parameters",
    "type": "array",
    "description": "The input parameters for the stack set template.",
    "children": [
      {
        "name": "parameter_key",
        "type": "string",
        "description": "The key associated with the parameter. If you don't specify a key and value for a particular parameter, AWS CloudFormation uses the default value that is specified in your template."
      },
      {
        "name": "parameter_value",
        "type": "string",
        "description": "The input value associated with the parameter."
      }
    ]
  },
  {
    "name": "permission_model",
    "type": "string",
    "description": "Describes how the IAM roles required for stack set operations are created. By default, SELF-MANAGED is specified."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The key-value pairs to associate with this stack set and the stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the stacks. A maximum number of 50 tags can be specified.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A string used to identify this tag. You can specify a maximum of 127 characters for a tag key."
      },
      {
        "name": "value",
        "type": "string",
        "description": "A string containing the value for this tag. You can specify a maximum of 256 characters for a tag value."
      }
    ]
  },
  {
    "name": "template_body",
    "type": "string",
    "description": "The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes."
  },
  {
    "name": "template_url",
    "type": "string",
    "description": "Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket."
  },
  {
    "name": "call_as",
    "type": "string",
    "description": "Specifies the AWS account that you are acting from. By default, SELF is specified. For self-managed permissions, specify SELF; for service-managed permissions, if you are signed in to the organization's management account, specify SELF. If you are signed in to a delegated administrator account, specify DELEGATED&#95;ADMIN."
  },
  {
    "name": "managed_execution",
    "type": "object",
    "description": "Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.",
    "children": [
      {
        "name": "active",
        "type": "boolean",
        "description": "When true, StackSets performs non-conflicting operations concurrently and queues conflicting operations. After conflicting operations finish, StackSets starts queued operations in request order."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html"><code>AWS::CloudFormation::StackSet</code></a>.

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
    <td><CopyableCode code="StackSetName, PermissionModel, region" /></td>
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

Gets all properties from an individual <code>stack_set</code>.
```sql
SELECT
region,
stack_set_name,
stack_set_id,
administration_role_arn,
auto_deployment,
capabilities,
description,
execution_role_name,
operation_preferences,
stack_instances_group,
parameters,
permission_model,
tags,
template_body,
template_url,
call_as,
managed_execution
FROM awscc.cloudformation.stack_sets
WHERE region = 'us-east-1' AND data__Identifier = '<StackSetId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>stack_set</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudformation.stack_sets (
 StackSetName,
 PermissionModel,
 region
)
SELECT 
'{{ StackSetName }}',
 '{{ PermissionModel }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudformation.stack_sets (
 StackSetName,
 AdministrationRoleARN,
 AutoDeployment,
 Capabilities,
 Description,
 ExecutionRoleName,
 OperationPreferences,
 StackInstancesGroup,
 Parameters,
 PermissionModel,
 Tags,
 TemplateBody,
 TemplateURL,
 CallAs,
 ManagedExecution,
 region
)
SELECT 
 '{{ StackSetName }}',
 '{{ AdministrationRoleARN }}',
 '{{ AutoDeployment }}',
 '{{ Capabilities }}',
 '{{ Description }}',
 '{{ ExecutionRoleName }}',
 '{{ OperationPreferences }}',
 '{{ StackInstancesGroup }}',
 '{{ Parameters }}',
 '{{ PermissionModel }}',
 '{{ Tags }}',
 '{{ TemplateBody }}',
 '{{ TemplateURL }}',
 '{{ CallAs }}',
 '{{ ManagedExecution }}',
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
  - name: stack_set
    props:
      - name: StackSetName
        value: '{{ StackSetName }}'
      - name: AdministrationRoleARN
        value: '{{ AdministrationRoleARN }}'
      - name: AutoDeployment
        value:
          Enabled: '{{ Enabled }}'
          RetainStacksOnAccountRemoval: '{{ RetainStacksOnAccountRemoval }}'
      - name: Capabilities
        value:
          - '{{ Capabilities[0] }}'
      - name: Description
        value: '{{ Description }}'
      - name: ExecutionRoleName
        value: '{{ ExecutionRoleName }}'
      - name: OperationPreferences
        value:
          FailureToleranceCount: '{{ FailureToleranceCount }}'
          FailureTolerancePercentage: '{{ FailureTolerancePercentage }}'
          MaxConcurrentCount: '{{ MaxConcurrentCount }}'
          MaxConcurrentPercentage: '{{ MaxConcurrentPercentage }}'
          RegionOrder:
            - '{{ RegionOrder[0] }}'
          RegionConcurrencyType: '{{ RegionConcurrencyType }}'
          ConcurrencyMode: '{{ ConcurrencyMode }}'
      - name: StackInstancesGroup
        value:
          - DeploymentTargets:
              Accounts:
                - '{{ Accounts[0] }}'
              AccountsUrl: '{{ AccountsUrl }}'
              OrganizationalUnitIds:
                - '{{ OrganizationalUnitIds[0] }}'
              AccountFilterType: '{{ AccountFilterType }}'
            Regions:
              - null
            ParameterOverrides:
              - ParameterKey: '{{ ParameterKey }}'
                ParameterValue: '{{ ParameterValue }}'
      - name: Parameters
        value:
          - null
      - name: PermissionModel
        value: '{{ PermissionModel }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: TemplateBody
        value: '{{ TemplateBody }}'
      - name: TemplateURL
        value: '{{ TemplateURL }}'
      - name: CallAs
        value: '{{ CallAs }}'
      - name: ManagedExecution
        value:
          Active: '{{ Active }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudformation.stack_sets
WHERE data__Identifier = '<StackSetId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>stack_sets</code> resource, the following permissions are required:

### Create
```json
cloudformation:GetTemplateSummary,
cloudformation:CreateStackSet,
cloudformation:CreateStackInstances,
cloudformation:DescribeStackSetOperation,
cloudformation:ListStackSetOperationResults,
cloudformation:TagResource,
iam:PassRole
```

### Read
```json
cloudformation:DescribeStackSet,
cloudformation:ListStackInstances,
cloudformation:DescribeStackInstance
```

### Update
```json
cloudformation:GetTemplateSummary,
cloudformation:UpdateStackSet,
cloudformation:CreateStackInstances,
cloudformation:DeleteStackInstances,
cloudformation:UpdateStackInstances,
cloudformation:DescribeStackSet,
cloudformation:DescribeStackSetOperation,
cloudformation:ListStackSetOperationResults,
cloudformation:TagResource,
cloudformation:UntagResource,
iam:PassRole
```

### Delete
```json
cloudformation:DeleteStackSet,
cloudformation:DeleteStackInstances,
cloudformation:DescribeStackSet,
cloudformation:DescribeStackSetOperation,
cloudformation:ListStackSetOperationResults,
cloudformation:UntagResource
```

### List
```json
cloudformation:ListStackSets,
cloudformation:DescribeStackSet,
cloudformation:ListStackInstances,
cloudformation:DescribeStackInstance
```
