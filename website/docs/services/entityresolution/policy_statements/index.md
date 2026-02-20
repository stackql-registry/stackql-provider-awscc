---
title: policy_statements
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_statements
  - entityresolution
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

Creates, updates, deletes or gets a <code>policy_statement</code> resource or lists <code>policy_statements</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>policy_statements</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Policy Statement defined in AWS Entity Resolution Service</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.entityresolution.policy_statements" /></td></tr>
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
    "description": "Arn of the resource to which the policy statement is being attached."
  },
  {
    "name": "statement_id",
    "type": "string",
    "description": "The Statement Id of the policy statement that is being attached."
  },
  {
    "name": "effect",
    "type": "string",
    "description": ""
  },
  {
    "name": "action",
    "type": "array",
    "description": ""
  },
  {
    "name": "principal",
    "type": "array",
    "description": ""
  },
  {
    "name": "condition",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": "Arn of the resource to which the policy statement is being attached."
  },
  {
    "name": "statement_id",
    "type": "string",
    "description": "The Statement Id of the policy statement that is being attached."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-policystatement.html"><code>AWS::EntityResolution::PolicyStatement</code></a>.

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
    <td><code>policy_statements</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Arn, StatementId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>policy_statements</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>policy_statements</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>policy_statements_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>policy_statements</code></td>
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

Gets all properties from an individual <code>policy_statement</code>.
```sql
SELECT
region,
arn,
statement_id,
effect,
action,
principal,
condition
FROM awscc.entityresolution.policy_statements
WHERE region = 'us-east-1' AND Identifier = '<Arn>|<StatementId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>policy_statements</code> in a region.
```sql
SELECT
region,
arn,
statement_id
FROM awscc.entityresolution.policy_statements_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>policy_statement</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.entityresolution.policy_statements (
 Arn,
 StatementId,
 region
)
SELECT 
'{{ Arn }}',
 '{{ StatementId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.entityresolution.policy_statements (
 Arn,
 StatementId,
 Effect,
 Action,
 Principal,
 Condition,
 region
)
SELECT 
 '{{ Arn }}',
 '{{ StatementId }}',
 '{{ Effect }}',
 '{{ Action }}',
 '{{ Principal }}',
 '{{ Condition }}',
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
  - name: policy_statement
    props:
      - name: Arn
        value: '{{ Arn }}'
      - name: StatementId
        value: '{{ StatementId }}'
      - name: Effect
        value: '{{ Effect }}'
      - name: Action
        value:
          - '{{ Action[0] }}'
      - name: Principal
        value:
          - '{{ Principal[0] }}'
      - name: Condition
        value: '{{ Condition }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>policy_statement</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.entityresolution.policy_statements
SET PatchDocument = string('{{ {
    "Effect": effect,
    "Action": action,
    "Principal": principal,
    "Condition": condition
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>|<StatementId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.entityresolution.policy_statements
WHERE Identifier = '<Arn|StatementId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>policy_statements</code> resource, the following permissions are required:

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
entityresolution:AddPolicyStatement
```

</TabItem>
<TabItem value="read">

```json
entityresolution:GetPolicy
```

</TabItem>
<TabItem value="update">

```json
entityresolution:AddPolicyStatement,
entityresolution:DeletePolicyStatement
```

</TabItem>
<TabItem value="delete">

```json
entityresolution:DeletePolicyStatement,
entityresolution:GetPolicy
```

</TabItem>
<TabItem value="list">

```json
entityresolution:GetPolicy
```

</TabItem>
</Tabs>