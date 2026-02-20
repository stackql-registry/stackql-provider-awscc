---
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
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

Creates, updates, deletes or gets a <code>connection</code> resource or lists <code>connections</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>connections</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Connections enables users to connect their DataZone resources (domains, projects, and environments) to external resources/services (data, compute, etc)</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datazone.connections" /></td></tr>
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
    "name": "aws_location",
    "type": "object",
    "description": "AWS Location of project",
    "children": [
      {
        "name": "access_role",
        "type": "string",
        "description": ""
      },
      {
        "name": "aws_account_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "aws_region",
        "type": "string",
        "description": ""
      },
      {
        "name": "iam_connection_id",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "connection_id",
    "type": "string",
    "description": "The ID of the connection."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the connection."
  },
  {
    "name": "domain_id",
    "type": "string",
    "description": "The ID of the domain in which the connection is created."
  },
  {
    "name": "domain_identifier",
    "type": "string",
    "description": "The identifier of the domain in which the connection is created."
  },
  {
    "name": "domain_unit_id",
    "type": "string",
    "description": "The ID of the domain unit in which the connection is created."
  },
  {
    "name": "environment_id",
    "type": "string",
    "description": "The ID of the environment in which the connection is created."
  },
  {
    "name": "environment_identifier",
    "type": "string",
    "description": "The identifier of the environment in which the connection is created."
  },
  {
    "name": "environment_user_role",
    "type": "string",
    "description": "The role of the user in the environment."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the connection."
  },
  {
    "name": "project_id",
    "type": "string",
    "description": "The ID of the project in which the connection is created."
  },
  {
    "name": "props",
    "type": "object",
    "description": ""
  },
  {
    "name": "type",
    "type": "string",
    "description": "Connection Type"
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
    "name": "connection_id",
    "type": "string",
    "description": "The ID of the connection."
  },
  {
    "name": "domain_id",
    "type": "string",
    "description": "The ID of the domain in which the connection is created."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html"><code>AWS::DataZone::Connection</code></a>.

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
    <td><code>connections</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DomainIdentifier, EnvironmentIdentifier, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>connections</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>connections</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>connections_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>connections</code></td>
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

Gets all properties from an individual <code>connection</code>.
```sql
SELECT
region,
aws_location,
connection_id,
description,
domain_id,
domain_identifier,
domain_unit_id,
environment_id,
environment_identifier,
environment_user_role,
name,
project_id,
props,
type
FROM awscc.datazone.connections
WHERE region = 'us-east-1' AND Identifier = '<DomainId>|<ConnectionId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>connections</code> in a region.
```sql
SELECT
region,
domain_id,
connection_id
FROM awscc.datazone.connections_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>connection</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datazone.connections (
 DomainIdentifier,
 EnvironmentIdentifier,
 Name,
 region
)
SELECT 
'{{ DomainIdentifier }}',
 '{{ EnvironmentIdentifier }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.datazone.connections (
 AwsLocation,
 Description,
 DomainIdentifier,
 EnvironmentIdentifier,
 Name,
 Props,
 region
)
SELECT 
 '{{ AwsLocation }}',
 '{{ Description }}',
 '{{ DomainIdentifier }}',
 '{{ EnvironmentIdentifier }}',
 '{{ Name }}',
 '{{ Props }}',
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
  - name: connection
    props:
      - name: AwsLocation
        value:
          AccessRole: '{{ AccessRole }}'
          AwsAccountId: '{{ AwsAccountId }}'
          AwsRegion: '{{ AwsRegion }}'
          IamConnectionId: '{{ IamConnectionId }}'
      - name: Description
        value: '{{ Description }}'
      - name: DomainIdentifier
        value: '{{ DomainIdentifier }}'
      - name: EnvironmentIdentifier
        value: '{{ EnvironmentIdentifier }}'
      - name: Name
        value: '{{ Name }}'
      - name: Props
        value: null

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>connection</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.datazone.connections
SET PatchDocument = string('{{ {
    "AwsLocation": aws_location,
    "Description": description,
    "Props": props
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<DomainId>|<ConnectionId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datazone.connections
WHERE Identifier = '<DomainId|ConnectionId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>connections</code> resource, the following permissions are required:

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
datazone:CreateConnection,
datazone:GetConnection,
datazone:DeleteConnection
```

</TabItem>
<TabItem value="read">

```json
datazone:GetConnection
```

</TabItem>
<TabItem value="update">

```json
datazone:UpdateConnection,
datazone:GetConnection,
datazone:DeleteConnection
```

</TabItem>
<TabItem value="delete">

```json
datazone:DeleteConnection,
datazone:GetConnection
```

</TabItem>
<TabItem value="list">

```json
datazone:ListConnections
```

</TabItem>
</Tabs>