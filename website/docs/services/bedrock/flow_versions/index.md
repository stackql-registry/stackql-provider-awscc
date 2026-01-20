---
title: flow_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - flow_versions
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

Creates, updates, deletes or gets a <code>flow_version</code> resource or lists <code>flow_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>flow_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Bedrock::FlowVersion Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.bedrock.flow_versions" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "flow_arn",
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
    "name": "description",
    "type": "string",
    "description": "Description of the flow version"
  },
  {
    "name": "execution_role_arn",
    "type": "string",
    "description": "ARN of a IAM role"
  },
  {
    "name": "flow_id",
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
    "name": "version",
    "type": "string",
    "description": "Numerical Version."
  },
  {
    "name": "customer_encryption_key_arn",
    "type": "string",
    "description": "A KMS key ARN"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowversion.html"><code>AWS::Bedrock::FlowVersion</code></a>.

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
    <td><CopyableCode code="FlowArn, region" /></td>
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

Gets all properties from an individual <code>flow_version</code>.
```sql
SELECT
region,
flow_arn,
created_at,
definition,
description,
execution_role_arn,
flow_id,
name,
status,
version,
customer_encryption_key_arn
FROM awscc.bedrock.flow_versions
WHERE region = 'us-east-1' AND data__Identifier = '<FlowArn>|<Version>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>flow_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.bedrock.flow_versions (
 FlowArn,
 region
)
SELECT 
'{{ FlowArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.bedrock.flow_versions (
 FlowArn,
 Description,
 region
)
SELECT 
 '{{ FlowArn }}',
 '{{ Description }}',
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
  - name: flow_version
    props:
      - name: FlowArn
        value: '{{ FlowArn }}'
      - name: Description
        value: '{{ Description }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.bedrock.flow_versions
WHERE data__Identifier = '<FlowArn|Version>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>flow_versions</code> resource, the following permissions are required:

### Create
```json
bedrock:CreateFlowVersion,
bedrock:GetFlowVersion,
kms:GenerateDataKey,
kms:Decrypt,
bedrock:CreateGuardrail,
bedrock:CreateGuardrailVersion,
bedrock:GetGuardrail
```

### Read
```json
bedrock:GetFlowVersion,
kms:Decrypt,
bedrock:GetGuardrail
```

### Delete
```json
bedrock:DeleteFlowVersion,
bedrock:GetFlowVersion,
bedrock:DeleteGuardrail,
bedrock:GetGuardrail
```

### List
```json
bedrock:ListFlowVersions,
bedrock:ListGuardrails
```

### Update
```json
noservice:NoAction
```
