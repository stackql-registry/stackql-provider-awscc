---
title: automated_reasoning_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - automated_reasoning_policies
  - bedrock
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

Creates, updates, deletes or gets an <code>automated_reasoning_policy</code> resource or lists <code>automated_reasoning_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>automated_reasoning_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Bedrock::AutomatedReasoningPolicy Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.bedrock.automated_reasoning_policies" /></td></tr>
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
    "description": "The name inherited from the policy"
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description inherited from the policy"
  },
  {
    "name": "policy_definition",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "version",
        "type": "string",
        "description": "The policy format version."
      },
      {
        "name": "types",
        "type": "array",
        "description": "The types definition block of an AutomatedReasoningPolicyDefinition.",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "A name for this type."
          },
          {
            "name": "description",
            "type": "string",
            "description": "A natural language description of this type."
          },
          {
            "name": "values",
            "type": "array",
            "description": "A list of valid values for this type.",
            "children": [
              {
                "name": "value",
                "type": "string",
                "description": "The value of the type value."
              },
              {
                "name": "description",
                "type": "string",
                "description": "A natural language description of the type's value."
              }
            ]
          }
        ]
      },
      {
        "name": "rules",
        "type": "array",
        "description": "The rules definition block of an AutomatedReasoningPolicyDefinition.",
        "children": [
          {
            "name": "id",
            "type": "string",
            "description": "A unique id within the PolicyDefinition"
          },
          {
            "name": "expression",
            "type": "string",
            "description": "The SMT expression for this rule"
          },
          {
            "name": "alternate_expression",
            "type": "string",
            "description": "An alternate expression for this rule"
          }
        ]
      },
      {
        "name": "variables",
        "type": "array",
        "description": "The variables definition block of an AutomatedReasoningPolicyDefinition.",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "A name from this variable."
          },
          {
            "name": "type",
            "type": "string",
            "description": "A type for this variable."
          },
          {
            "name": "description",
            "type": "string",
            "description": "A natural language description of this variable."
          }
        ]
      }
    ]
  },
  {
    "name": "policy_arn",
    "type": "string",
    "description": "Arn of the policy"
  },
  {
    "name": "version",
    "type": "string",
    "description": "The version of the policy"
  },
  {
    "name": "definition_hash",
    "type": "string",
    "description": "The hash for this version"
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "Time this policy version was created"
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": "Time this policy was last updated"
  },
  {
    "name": "policy_id",
    "type": "string",
    "description": "The id of the associated policy"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "Tag Key"
      },
      {
        "name": "value",
        "type": "string",
        "description": "Tag Value"
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
    "name": "policy_arn",
    "type": "string",
    "description": "Arn of the policy"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-automatedreasoningpolicy.html"><code>AWS::Bedrock::AutomatedReasoningPolicy</code></a>.

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
    <td><code>automated_reasoning_policies</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>automated_reasoning_policies</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>automated_reasoning_policies</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>automated_reasoning_policies_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>automated_reasoning_policies</code></td>
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

Gets all properties from an individual <code>automated_reasoning_policy</code>.
```sql
SELECT
region,
name,
description,
policy_definition,
policy_arn,
version,
definition_hash,
created_at,
updated_at,
policy_id,
tags
FROM awscc.bedrock.automated_reasoning_policies
WHERE region = 'us-east-1' AND Identifier = '{{ policy_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>automated_reasoning_policies</code> in a region.
```sql
SELECT
region,
policy_arn
FROM awscc.bedrock.automated_reasoning_policies_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>automated_reasoning_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.bedrock.automated_reasoning_policies (
 Name,
 region
)
SELECT
'{{ name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.bedrock.automated_reasoning_policies (
 Name,
 Description,
 PolicyDefinition,
 Tags,
 region
)
SELECT
 '{{ name }}',
 '{{ description }}',
 '{{ policy_definition }}',
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
  - name: automated_reasoning_policy
    props:
      - name: name
        value: '{{ name }}'
      - name: description
        value: '{{ description }}'
      - name: policy_definition
        value:
          version: '{{ version }}'
          types:
            - name: '{{ name }}'
              description: '{{ description }}'
              values:
                - value: '{{ value }}'
                  description: '{{ description }}'
          rules:
            - id: '{{ id }}'
              expression: '{{ expression }}'
              alternate_expression: '{{ alternate_expression }}'
          variables:
            - name: '{{ name }}'
              type: '{{ type }}'
              description: '{{ description }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>automated_reasoning_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.bedrock.automated_reasoning_policies
SET PatchDocument = string('{{ {
    "Name": name,
    "Description": description,
    "PolicyDefinition": policy_definition,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ policy_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.bedrock.automated_reasoning_policies
WHERE Identifier = '{{ policy_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>automated_reasoning_policies</code> resource, the following permissions are required:

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
bedrock:CreateAutomatedReasoningPolicy,
bedrock:GetAutomatedReasoningPolicy,
bedrock:ExportAutomatedReasoningPolicyVersion,
bedrock:TagResource,
bedrock:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
bedrock:GetAutomatedReasoningPolicy,
bedrock:ExportAutomatedReasoningPolicyVersion,
bedrock:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
bedrock:UpdateAutomatedReasoningPolicy,
bedrock:GetAutomatedReasoningPolicy,
bedrock:ExportAutomatedReasoningPolicyVersion,
bedrock:ListTagsForResource,
bedrock:TagResource,
bedrock:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
bedrock:DeleteAutomatedReasoningPolicy,
bedrock:GetAutomatedReasoningPolicy
```

</TabItem>
<TabItem value="list">

```json
bedrock:ListAutomatedReasoningPolicies
```

</TabItem>
</Tabs>