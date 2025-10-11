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
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="aws_location" /></td><td><code>object</code></td><td>AWS Location of project</td></tr>
<tr><td><CopyableCode code="connection_id" /></td><td><code>string</code></td><td>The ID of the connection.</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>The description of the connection.</td></tr>
<tr><td><CopyableCode code="domain_id" /></td><td><code>string</code></td><td>The ID of the domain in which the connection is created.</td></tr>
<tr><td><CopyableCode code="domain_identifier" /></td><td><code>string</code></td><td>The identifier of the domain in which the connection is created.</td></tr>
<tr><td><CopyableCode code="domain_unit_id" /></td><td><code>string</code></td><td>The ID of the domain unit in which the connection is created.</td></tr>
<tr><td><CopyableCode code="environment_id" /></td><td><code>string</code></td><td>The ID of the environment in which the connection is created.</td></tr>
<tr><td><CopyableCode code="environment_identifier" /></td><td><code>string</code></td><td>The identifier of the environment in which the connection is created.</td></tr>
<tr><td><CopyableCode code="environment_user_role" /></td><td><code>string</code></td><td>The role of the user in the environment.</td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>The name of the connection.</td></tr>
<tr><td><CopyableCode code="project_id" /></td><td><code>string</code></td><td>The ID of the project in which the connection is created.</td></tr>
<tr><td><CopyableCode code="props" /></td><td><code>undefined</code></td><td></td></tr>
<tr><td><CopyableCode code="type" /></td><td><code>string</code></td><td>Connection Type</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html"><code>AWS::DataZone::Connection</code></a>.

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
    <td><CopyableCode code="DomainIdentifier, EnvironmentIdentifier, Name, region" /></td>
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
Gets all <code>connections</code> in a region.
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
WHERE region = 'us-east-1';
```
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
WHERE region = 'us-east-1' AND data__Identifier = '<DomainId>|<ConnectionId>';
```

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

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datazone.connections
WHERE data__Identifier = '<DomainId|ConnectionId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>connections</code> resource, the following permissions are required:

### Create
```json
datazone:CreateConnection,
datazone:GetConnection,
datazone:DeleteConnection
```

### Read
```json
datazone:GetConnection
```

### Update
```json
datazone:UpdateConnection,
datazone:GetConnection,
datazone:DeleteConnection
```

### Delete
```json
datazone:DeleteConnection,
datazone:GetConnection
```

### List
```json
datazone:ListConnections
```
