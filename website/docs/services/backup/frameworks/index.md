---
title: frameworks
hide_title: false
hide_table_of_contents: false
keywords:
  - frameworks
  - backup
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

Creates, updates, deletes or gets a <code>framework</code> resource or lists <code>frameworks</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>frameworks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Contains detailed information about a framework. Frameworks contain controls, which evaluate and report on your backup events and resources. Frameworks generate daily compliance results.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.backup.frameworks" /></td></tr>
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
    "name": "framework_name",
    "type": "string",
    "description": "The unique name of a framework. This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_)."
  },
  {
    "name": "framework_description",
    "type": "string",
    "description": "An optional description of the framework with a maximum 1,024 characters."
  },
  {
    "name": "framework_arn",
    "type": "string",
    "description": "An Amazon Resource Name (ARN) that uniquely identifies Framework as a resource"
  },
  {
    "name": "deployment_status",
    "type": "string",
    "description": "The deployment status of a framework. The statuses are: <code>CREATE_IN_PROGRESS | UPDATE_IN_PROGRESS | DELETE_IN_PROGRESS | COMPLETED | FAILED</code>"
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "The date and time that a framework is created, in ISO 8601 representation. The value of CreationTime is accurate to milliseconds. For example, 2020-07-10T15:00:00.000-08:00 represents the 10th of July 2020 at 3:00 PM 8 hours behind UTC."
  },
  {
    "name": "framework_controls",
    "type": "array",
    "description": "Contains detailed information about all of the controls of a framework. Each framework must contain at least one control.",
    "children": [
      {
        "name": "control_name",
        "type": "string",
        "description": "The name of a control. This name is between 1 and 256 characters."
      },
      {
        "name": "control_input_parameters",
        "type": "array",
        "description": "A list of ParameterName and ParameterValue pairs.",
        "children": [
          {
            "name": "parameter_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "parameter_value",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "control_scope",
        "type": "object",
        "description": "The scope of a control. The control scope defines what the control will evaluate. Three examples of control scopes are: a specific backup plan, all backup plans with a specific tag, or all backup plans.",
        "children": [
          {
            "name": "compliance_resource_ids",
            "type": "array",
            "description": "The ID of the only AWS resource that you want your control scope to contain."
          },
          {
            "name": "compliance_resource_types",
            "type": "array",
            "description": "Describes whether the control scope includes one or more types of resources, such as <code>EFS</code> or <code>RDS</code>."
          },
          {
            "name": "tags",
            "type": "array",
            "description": "Describes whether the control scope includes resources with one or more tags. Each tag is a key-value pair.",
            "children": [
              {
                "name": "value",
                "type": "string",
                "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
              },
              {
                "name": "key",
                "type": "string",
                "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "framework_status",
    "type": "string",
    "description": "<details><summary>A framework consists of one or more controls. Each control governs a resource, such as backup plans, backup selections, backup vaults, or recovery points. You can also turn AWS Config recording on or off for each resource. The statuses are:</summary><code>ACTIVE</code> when recording is turned on for all resources governed by the framework.<br /><code>PARTIALLY_ACTIVE</code> when recording is turned off for at least one resource governed by the framework.<br /><code>INACTIVE</code> when recording is turned off for all resources governed by the framework.<br /><code>UNAVAILABLE</code> when AWS Backup is unable to validate recording status at this time.</details>"
  },
  {
    "name": "framework_tags",
    "type": "array",
    "description": "Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
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
    "name": "framework_arn",
    "type": "string",
    "description": "An Amazon Resource Name (ARN) that uniquely identifies Framework as a resource"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html"><code>AWS::Backup::Framework</code></a>.

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
    <td><code>frameworks</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="FrameworkControls, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>frameworks</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>frameworks</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>frameworks_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>frameworks</code></td>
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

Gets all properties from an individual <code>framework</code>.
```sql
SELECT
  region,
  framework_name,
  framework_description,
  framework_arn,
  deployment_status,
  creation_time,
  framework_controls,
  framework_status,
  framework_tags
FROM awscc.backup.frameworks
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ framework_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>frameworks</code> in a region.
```sql
SELECT
  region,
  framework_arn
FROM awscc.backup.frameworks_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>framework</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.backup.frameworks (
  FrameworkControls,
  region
)
SELECT
  '{{ framework_controls }}',
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
INSERT INTO awscc.backup.frameworks (
  FrameworkName,
  FrameworkDescription,
  FrameworkControls,
  FrameworkTags,
  region
)
SELECT
  '{{ framework_name }}',
  '{{ framework_description }}',
  '{{ framework_controls }}',
  '{{ framework_tags }}',
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
  - name: framework
    props:
      - name: framework_name
        value: '{{ framework_name }}'
      - name: framework_description
        value: '{{ framework_description }}'
      - name: framework_controls
        value:
          - control_name: '{{ control_name }}'
            control_input_parameters:
              - parameter_name: '{{ parameter_name }}'
                parameter_value: '{{ parameter_value }}'
            control_scope:
              compliance_resource_ids:
                - '{{ compliance_resource_ids[0] }}'
              compliance_resource_types:
                - '{{ compliance_resource_types[0] }}'
              tags:
                - value: '{{ value }}'
                  key: '{{ key }}'
      - name: framework_tags
        value:
          - null
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>framework</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.backup.frameworks
SET PatchDocument = string('{{ {
    "FrameworkDescription": framework_description,
    "FrameworkControls": framework_controls,
    "FrameworkTags": framework_tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ framework_arn }}'
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
DELETE FROM awscc.backup.frameworks
WHERE
  Identifier = '{{ framework_arn }}' AND
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

To operate on the <code>frameworks</code> resource, the following permissions are required:

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
backup:CreateFramework,
backup:DescribeFramework,
backup:ListTags,
backup:TagResource,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="read">

```json
backup:DescribeFramework,
backup:ListTags
```

</TabItem>
<TabItem value="update">

```json
backup:DescribeFramework,
backup:UpdateFramework,
backup:ListTags,
backup:TagResource,
backup:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
backup:DeleteFramework,
backup:DescribeFramework
```

</TabItem>
<TabItem value="list">

```json
backup:ListFrameworks
```

</TabItem>
</Tabs>