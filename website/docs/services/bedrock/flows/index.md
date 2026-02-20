---
title: flows
hide_title: false
hide_table_of_contents: false
keywords:
  - flows
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

Creates, updates, deletes or gets a <code>flow</code> resource or lists <code>flows</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>flows</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Bedrock::Flow Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.bedrock.flows" /></td></tr>
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
    "description": "Arn representation of the Flow"
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "Time Stamp."
  },
  {
    "name": "definition",
    "type": "object",
    "description": "Flow definition",
    "children": [
      {
        "name": "nodes",
        "type": "array",
        "description": "List of nodes in a flow",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "Name of a node in a flow"
          },
          {
            "name": "type",
            "type": "string",
            "description": "Flow node types"
          },
          {
            "name": "configuration",
            "type": "object",
            "description": "Node configuration in a flow"
          },
          {
            "name": "inputs",
            "type": "array",
            "description": "List of node inputs in a flow",
            "children": [
              {
                "name": "name",
                "type": "string",
                "description": "Name of a node input in a flow"
              },
              {
                "name": "type",
                "type": "string",
                "description": "Type of input/output for a node in a flow"
              },
              {
                "name": "expression",
                "type": "string",
                "description": "Expression for a node input in a flow"
              }
            ]
          },
          {
            "name": "outputs",
            "type": "array",
            "description": "List of node outputs in a flow",
            "children": [
              {
                "name": "name",
                "type": "string",
                "description": "Name of a node output in a flow"
              },
              {
                "name": "type",
                "type": "string",
                "description": "Type of input/output for a node in a flow"
              }
            ]
          }
        ]
      },
      {
        "name": "connections",
        "type": "array",
        "description": "List of connections",
        "children": [
          {
            "name": "type",
            "type": "string",
            "description": "Connection type"
          },
          {
            "name": "name",
            "type": "string",
            "description": "Name of a connection in a flow"
          },
          {
            "name": "source",
            "type": "string",
            "description": "Name of a node in a flow"
          },
          {
            "name": "target",
            "type": "string",
            "description": "Name of a node in a flow"
          },
          {
            "name": "configuration",
            "type": "object",
            "description": "Connection configuration"
          }
        ]
      }
    ]
  },
  {
    "name": "definition_string",
    "type": "string",
    "description": "A JSON string containing a Definition with the same schema as the Definition property of this resource"
  },
  {
    "name": "definition_s3_location",
    "type": "object",
    "description": "An Amazon S3 location.",
    "children": [
      {
        "name": "uri",
        "type": "string",
        "description": "The location's URI"
      }
    ]
  },
  {
    "name": "definition_substitutions",
    "type": "object",
    "description": "When supplied with DefinitionString or DefinitionS3Location, substrings in the definition matching $&#123;keyname&#125; will be replaced with the associated value from this map"
  },
  {
    "name": "description",
    "type": "string",
    "description": "Description of the flow"
  },
  {
    "name": "execution_role_arn",
    "type": "string",
    "description": "ARN of a IAM role"
  },
  {
    "name": "id",
    "type": "string",
    "description": "Identifier for a Flow"
  },
  {
    "name": "name",
    "type": "string",
    "description": "Name for the flow"
  },
  {
    "name": "status",
    "type": "string",
    "description": "Schema Type for Flow APIs"
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": "Time Stamp."
  },
  {
    "name": "customer_encryption_key_arn",
    "type": "string",
    "description": "A KMS key ARN"
  },
  {
    "name": "validations",
    "type": "array",
    "description": "List of flow validations",
    "children": [
      {
        "name": "message",
        "type": "string",
        "description": "validation message"
      }
    ]
  },
  {
    "name": "version",
    "type": "string",
    "description": "Draft Version."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A map of tag keys and values"
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
    "description": "Arn representation of the Flow"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html"><code>AWS::Bedrock::Flow</code></a>.

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
    <td><code>flows</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ExecutionRoleArn, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>flows</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>flows</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>flows_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>flows</code></td>
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

Gets all properties from an individual <code>flow</code>.
```sql
SELECT
region,
arn,
created_at,
definition,
definition_string,
definition_s3_location,
definition_substitutions,
description,
execution_role_arn,
id,
name,
status,
updated_at,
customer_encryption_key_arn,
validations,
version,
tags,
test_alias_tags
FROM awscc.bedrock.flows
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>flows</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.bedrock.flows_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>flow</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.bedrock.flows (
 ExecutionRoleArn,
 Name,
 region
)
SELECT 
'{{ ExecutionRoleArn }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.bedrock.flows (
 Definition,
 DefinitionString,
 DefinitionS3Location,
 DefinitionSubstitutions,
 Description,
 ExecutionRoleArn,
 Name,
 CustomerEncryptionKeyArn,
 Tags,
 TestAliasTags,
 region
)
SELECT 
 '{{ Definition }}',
 '{{ DefinitionString }}',
 '{{ DefinitionS3Location }}',
 '{{ DefinitionSubstitutions }}',
 '{{ Description }}',
 '{{ ExecutionRoleArn }}',
 '{{ Name }}',
 '{{ CustomerEncryptionKeyArn }}',
 '{{ Tags }}',
 '{{ TestAliasTags }}',
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
  - name: flow
    props:
      - name: Definition
        value:
          Nodes:
            - Name: '{{ Name }}'
              Type: '{{ Type }}'
              Configuration: null
              Inputs:
                - Name: '{{ Name }}'
                  Type: '{{ Type }}'
                  Expression: '{{ Expression }}'
              Outputs:
                - Name: '{{ Name }}'
                  Type: null
          Connections:
            - Type: '{{ Type }}'
              Name: '{{ Name }}'
              Source: '{{ Source }}'
              Target: '{{ Target }}'
              Configuration: null
      - name: DefinitionString
        value: '{{ DefinitionString }}'
      - name: DefinitionS3Location
        value:
          URI: '{{ URI }}'
      - name: DefinitionSubstitutions
        value: {}
      - name: Description
        value: '{{ Description }}'
      - name: ExecutionRoleArn
        value: '{{ ExecutionRoleArn }}'
      - name: Name
        value: '{{ Name }}'
      - name: CustomerEncryptionKeyArn
        value: '{{ CustomerEncryptionKeyArn }}'
      - name: Tags
        value: {}
      - name: TestAliasTags
        value: null

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>flow</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.bedrock.flows
SET PatchDocument = string('{{ {
    "Definition": definition,
    "DefinitionString": definition_string,
    "DefinitionS3Location": definition_s3_location,
    "DefinitionSubstitutions": definition_substitutions,
    "Description": description,
    "ExecutionRoleArn": execution_role_arn,
    "Name": name,
    "CustomerEncryptionKeyArn": customer_encryption_key_arn,
    "Tags": tags,
    "TestAliasTags": test_alias_tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.bedrock.flows
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>flows</code> resource, the following permissions are required:

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
bedrock:CreateFlow,
bedrock:GetFlow,
bedrock:PrepareFlow,
iam:PassRole,
s3:GetObject,
s3:GetObjectVersion,
bedrock:TagResource,
bedrock:ListTagsForResource,
kms:GenerateDataKey,
kms:Decrypt,
bedrock:CreateGuardrail,
bedrock:CreateGuardrailVersion,
bedrock:GetGuardrail
```

</TabItem>
<TabItem value="read">

```json
bedrock:GetFlow,
bedrock:ListTagsForResource,
kms:Decrypt,
bedrock:GetGuardrail
```

</TabItem>
<TabItem value="update">

```json
bedrock:UpdateFlow,
bedrock:GetFlow,
bedrock:PrepareFlow,
iam:PassRole,
s3:GetObject,
s3:GetObjectVersion,
bedrock:TagResource,
bedrock:UntagResource,
bedrock:ListTagsForResource,
kms:GenerateDataKey,
kms:Decrypt,
bedrock:UpdateGuardrail,
bedrock:GetGuardrail
```

</TabItem>
<TabItem value="delete">

```json
bedrock:DeleteFlow,
bedrock:GetFlow,
bedrock:DeleteGuardrail,
bedrock:GetGuardrail
```

</TabItem>
<TabItem value="list">

```json
bedrock:ListFlows,
bedrock:ListGuardrails
```

</TabItem>
</Tabs>