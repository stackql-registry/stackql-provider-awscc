---
title: environment_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - environment_actions
  - datazone
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

Creates, updates, deletes or gets an <code>environment_action</code> resource or lists <code>environment_actions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>environment_actions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::DataZone::EnvironmentActions Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datazone.environment_actions" /></td></tr>
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
    "name": "description",
    "type": "string",
    "description": "The description of the Amazon DataZone environment action."
  },
  {
    "name": "domain_id",
    "type": "string",
    "description": "The identifier of the Amazon DataZone domain in which the environment is created."
  },
  {
    "name": "domain_identifier",
    "type": "string",
    "description": "The identifier of the Amazon DataZone domain in which the environment would be created."
  },
  {
    "name": "environment_id",
    "type": "string",
    "description": "The identifier of the Amazon DataZone environment in which the action is taking place"
  },
  {
    "name": "environment_identifier",
    "type": "string",
    "description": "The identifier of the Amazon DataZone environment in which the action is taking place"
  },
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the Amazon DataZone environment action."
  },
  {
    "name": "identifier",
    "type": "string",
    "description": "The ID of the Amazon DataZone environment action."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the environment action."
  },
  {
    "name": "parameters",
    "type": "object",
    "description": "The parameters of the environment action.",
    "children": [
      {
        "name": "uri",
        "type": "string",
        "description": "The URI of the console link specified as part of the environment action."
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
    "name": "domain_id",
    "type": "string",
    "description": "The identifier of the Amazon DataZone domain in which the environment is created."
  },
  {
    "name": "environment_id",
    "type": "string",
    "description": "The identifier of the Amazon DataZone environment in which the action is taking place"
  },
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the Amazon DataZone environment action."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentaction.html"><code>AWS::DataZone::EnvironmentActions</code></a>.

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
    <td><code>environment_actions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>environment_actions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>environment_actions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>environment_actions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>environment_actions</code></td>
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

Gets all properties from an individual <code>environment_action</code>.
```sql
SELECT
region,
description,
domain_id,
domain_identifier,
environment_id,
environment_identifier,
id,
identifier,
name,
parameters
FROM awscc.datazone.environment_actions
WHERE region = 'us-east-1' AND Identifier = '<DomainId>|<EnvironmentId>|<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>environment_actions</code> in a region.
```sql
SELECT
region,
domain_id,
environment_id,
id
FROM awscc.datazone.environment_actions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>environment_action</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datazone.environment_actions (
 Name,
 region
)
SELECT 
'{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.datazone.environment_actions (
 Description,
 DomainIdentifier,
 EnvironmentIdentifier,
 Identifier,
 Name,
 Parameters,
 region
)
SELECT 
 '{{ Description }}',
 '{{ DomainIdentifier }}',
 '{{ EnvironmentIdentifier }}',
 '{{ Identifier }}',
 '{{ Name }}',
 '{{ Parameters }}',
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
  - name: environment_action
    props:
      - name: Description
        value: '{{ Description }}'
      - name: DomainIdentifier
        value: '{{ DomainIdentifier }}'
      - name: EnvironmentIdentifier
        value: '{{ EnvironmentIdentifier }}'
      - name: Identifier
        value: '{{ Identifier }}'
      - name: Name
        value: '{{ Name }}'
      - name: Parameters
        value:
          Uri: '{{ Uri }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.datazone.environment_actions
SET PatchDocument = string('{{ {
    "Description": description,
    "Identifier": identifier,
    "Name": name,
    "Parameters": parameters
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<DomainId>|<EnvironmentId>|<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datazone.environment_actions
WHERE Identifier = '<DomainId|EnvironmentId|Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>environment_actions</code> resource, the following permissions are required:

### Create
```json
datazone:CreateEnvironmentAction,
datazone:GetEnvironmentAction,
datazone:DeleteEnvironmentAction
```

### Read
```json
datazone:GetEnvironmentAction
```

### Update
```json
datazone:UpdateEnvironmentAction,
datazone:GetEnvironmentAction,
datazone:DeleteEnvironmentAction
```

### Delete
```json
datazone:DeleteEnvironmentAction,
datazone:GetEnvironmentAction
```

### List
```json
datazone:ListEnvironmentActions
```
