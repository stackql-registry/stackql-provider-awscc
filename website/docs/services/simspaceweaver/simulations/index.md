---
title: simulations
hide_title: false
hide_table_of_contents: false
keywords:
  - simulations
  - simspaceweaver
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

Creates, updates, deletes or gets a <code>simulation</code> resource or lists <code>simulations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>simulations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>AWS::SimSpaceWeaver::Simulation resource creates an AWS Simulation.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.simspaceweaver.simulations" /></td></tr>
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
    "description": "The name of the simulation."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "Role ARN."
  },
  {
    "name": "schema_s3_location",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "bucket_name",
        "type": "string",
        "description": "The Schema S3 bucket name."
      },
      {
        "name": "object_key",
        "type": "string",
        "description": "This is the schema S3 object key, which includes the full path of \"folders\" from the bucket root to the schema."
      }
    ]
  },
  {
    "name": "describe_payload",
    "type": "string",
    "description": "Json object with all simulation details"
  },
  {
    "name": "maximum_duration",
    "type": "string",
    "description": "The maximum running time of the simulation."
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
    "description": "The name of the simulation."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-simspaceweaver-simulation.html"><code>AWS::SimSpaceWeaver::Simulation</code></a>.

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
    <td><code>simulations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, RoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>simulations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>simulations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>simulations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>simulations</code></td>
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

Gets all properties from an individual <code>simulation</code>.
```sql
SELECT
region,
name,
role_arn,
schema_s3_location,
describe_payload,
maximum_duration,
snapshot_s3_location
FROM awscc.simspaceweaver.simulations
WHERE region = 'us-east-1' AND Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>simulations</code> in a region.
```sql
SELECT
region,
name
FROM awscc.simspaceweaver.simulations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>simulation</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.simspaceweaver.simulations (
 Name,
 RoleArn,
 region
)
SELECT 
'{{ Name }}',
 '{{ RoleArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.simspaceweaver.simulations (
 Name,
 RoleArn,
 SchemaS3Location,
 MaximumDuration,
 SnapshotS3Location,
 region
)
SELECT 
 '{{ Name }}',
 '{{ RoleArn }}',
 '{{ SchemaS3Location }}',
 '{{ MaximumDuration }}',
 '{{ SnapshotS3Location }}',
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
  - name: simulation
    props:
      - name: Name
        value: '{{ Name }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: SchemaS3Location
        value:
          BucketName: '{{ BucketName }}'
          ObjectKey: '{{ ObjectKey }}'
      - name: MaximumDuration
        value: '{{ MaximumDuration }}'
      - name: SnapshotS3Location
        value: null

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.simspaceweaver.simulations
WHERE Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>simulations</code> resource, the following permissions are required:

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
simspaceweaver:StartSimulation,
simspaceweaver:DescribeSimulation,
iam:GetRole,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
simspaceweaver:DescribeSimulation
```

</TabItem>
<TabItem value="update">

```json
simspaceweaver:StartSimulation,
simspaceweaver:StopSimulation,
simspaceweaver:DeleteSimulation,
simspaceweaver:DescribeSimulation
```

</TabItem>
<TabItem value="delete">

```json
simspaceweaver:StopSimulation,
simspaceweaver:DeleteSimulation,
simspaceweaver:DescribeSimulation
```

</TabItem>
<TabItem value="list">

```json
simspaceweaver:ListSimulations
```

</TabItem>
</Tabs>