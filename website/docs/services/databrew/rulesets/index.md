---
title: rulesets
hide_title: false
hide_table_of_contents: false
keywords:
  - rulesets
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

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>ruleset</code> resource or lists <code>rulesets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>rulesets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::DataBrew::Ruleset.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.databrew.rulesets" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "Name of the Ruleset"
  },
  {
    "name": "description",
    "type": "string",
    "description": "Description of the Ruleset"
  },
  {
    "name": "target_arn",
    "type": "string",
    "description": "Arn of the target resource (dataset) to apply the ruleset to"
  },
  {
    "name": "rules",
    "type": "array",
    "description": "List of the data quality rules in the ruleset",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": "Name of the rule"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": "Boolean value to disable/enable a rule"
      },
      {
        "name": "check_expression",
        "type": "string",
        "description": "Expression with rule conditions"
      },
      {
        "name": "substitution_map",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "value_reference",
            "type": "string",
            "description": "Variable name"
          },
          {
            "name": "value",
            "type": "string",
            "description": "Value or column name"
          }
        ]
      },
      {
        "name": "threshold",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "value",
            "type": "number",
            "description": "Threshold value for a rule"
          },
          {
            "name": "type",
            "type": "string",
            "description": "Threshold type for a rule"
          },
          {
            "name": "unit",
            "type": "string",
            "description": "Threshold unit for a rule"
          }
        ]
      },
      {
        "name": "column_selectors",
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
    "name": "name",
    "type": "string",
    "description": "Name of the Ruleset"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-ruleset.html"><code>AWS::DataBrew::Ruleset</code></a>.

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
    <td><code>rulesets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, TargetArn, Rules, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>rulesets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>rulesets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>rulesets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>rulesets</code></td>
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

Gets all properties from an individual <code>ruleset</code>.
```sql
SELECT
  region,
  name,
  description,
  target_arn,
  rules,
  tags
FROM awscc.databrew.rulesets
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>rulesets</code> in a region.
```sql
SELECT
  region,
  name
FROM awscc.databrew.rulesets_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>ruleset</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.databrew.rulesets (
  Name,
  TargetArn,
  Rules,
  region
)
SELECT
  '{{ name }}',
  '{{ target_arn }}',
  '{{ rules }}',
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
INSERT INTO awscc.databrew.rulesets (
  Name,
  Description,
  TargetArn,
  Rules,
  Tags,
  region
)
SELECT
  '{{ name }}',
  '{{ description }}',
  '{{ target_arn }}',
  '{{ rules }}',
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
  - name: ruleset
    props:
      - name: name
        value: '{{ name }}'
      - name: description
        value: '{{ description }}'
      - name: target_arn
        value: '{{ target_arn }}'
      - name: rules
        value:
          - name: '{{ name }}'
            disabled: '{{ disabled }}'
            check_expression: '{{ check_expression }}'
            substitution_map:
              - value_reference: '{{ value_reference }}'
                value: '{{ value }}'
            threshold:
              value: null
              type: '{{ type }}'
              unit: '{{ unit }}'
            column_selectors:
              - regex: '{{ regex }}'
                name: '{{ name }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>ruleset</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.databrew.rulesets
SET PatchDocument = string('{{ {
    "Description": description,
    "Rules": rules,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ name }}'
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
DELETE FROM awscc.databrew.rulesets
WHERE
  Identifier = '{{ name }}' AND
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

To operate on the <code>rulesets</code> resource, the following permissions are required:

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
databrew:CreateRuleset,
databrew:DescribeRuleset,
databrew:TagResource,
databrew:UntagResource,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
databrew:DescribeRuleset,
iam:ListRoles
```

</TabItem>
<TabItem value="update">

```json
databrew:UpdateRuleset,
databrew:TagResource,
databrew:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
databrew:DeleteRuleset
```

</TabItem>
<TabItem value="list">

```json
databrew:ListRulesets,
databrew:ListTagsForResource,
iam:ListRoles
```

</TabItem>
</Tabs>