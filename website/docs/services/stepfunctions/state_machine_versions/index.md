---
title: state_machine_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - state_machine_versions
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

Creates, updates, deletes or gets a <code>state_machine_version</code> resource or lists <code>state_machine_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>state_machine_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for StateMachineVersion</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.stepfunctions.state_machine_versions" /></td></tr>
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
    "name": "state_machine_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "state_machine_revision_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachineversion.html"><code>AWS::StepFunctions::StateMachineVersion</code></a>.

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
    <td><code>state_machine_versions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="StateMachineArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>state_machine_versions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>state_machine_versions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>state_machine_versions</code></td>
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

Gets all properties from an individual <code>state_machine_version</code>.
```sql
SELECT
region,
arn,
state_machine_arn,
state_machine_revision_id,
description
FROM awscc.stepfunctions.state_machine_versions
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>state_machine_versions</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.stepfunctions.state_machine_versions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>state_machine_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.stepfunctions.state_machine_versions (
 StateMachineArn,
 region
)
SELECT 
'{{ StateMachineArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.stepfunctions.state_machine_versions (
 StateMachineArn,
 StateMachineRevisionId,
 Description,
 region
)
SELECT 
 '{{ StateMachineArn }}',
 '{{ StateMachineRevisionId }}',
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
  - name: state_machine_version
    props:
      - name: StateMachineArn
        value: '{{ StateMachineArn }}'
      - name: StateMachineRevisionId
        value: '{{ StateMachineRevisionId }}'
      - name: Description
        value: '{{ Description }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.stepfunctions.state_machine_versions
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>state_machine_versions</code> resource, the following permissions are required:

### Create
```json
states:PublishStateMachineVersion,
states:ListStateMachineVersions,
states:DescribeStateMachine
```

### Read
```json
states:DescribeStateMachine
```

### Delete
```json
states:DeleteStateMachineVersion,
states:DescribeStateMachine
```

### List
```json
states:ListStateMachineVersions
```
