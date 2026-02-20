---
title: simulation_application_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - simulation_application_versions
  - robomaker
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

Creates, updates, deletes or gets a <code>simulation_application_version</code> resource or lists <code>simulation_application_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>simulation_application_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>AWS::RoboMaker::SimulationApplicationVersion resource creates an AWS RoboMaker SimulationApplicationVersion. This helps you control which code your simulation uses.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.robomaker.simulation_application_versions" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "application",
    "type": "string",
    "description": ""
  },
  {
    "name": "current_revision_id",
    "type": "string",
    "description": "The revision ID of robot application."
  },
  {
    "name": "application_version",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplicationversion.html"><code>AWS::RoboMaker::SimulationApplicationVersion</code></a>.

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
    <td><CopyableCode code="Application, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>simulation_application_version</code>.
```sql
SELECT
region,
application,
current_revision_id,
application_version,
arn
FROM awscc.robomaker.simulation_application_versions
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>simulation_application_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.robomaker.simulation_application_versions (
 Application,
 region
)
SELECT 
'{{ Application }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.robomaker.simulation_application_versions (
 Application,
 CurrentRevisionId,
 region
)
SELECT 
 '{{ Application }}',
 '{{ CurrentRevisionId }}',
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
  - name: simulation_application_version
    props:
      - name: Application
        value: '{{ Application }}'
      - name: CurrentRevisionId
        value: '{{ CurrentRevisionId }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.robomaker.simulation_application_versions
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>simulation_application_versions</code> resource, the following permissions are required:

### Create
```json
robomaker:CreateSimulationApplicationVersion,
s3:GetObject,
ecr:BatchGetImage,
ecr:GetAuthorizationToken,
ecr:BatchCheckLayerAvailability,
ecr-public:GetAuthorizationToken,
sts:GetServiceBearerToken
```

### Delete
```json
robomaker:DeleteSimulationApplication,
robomaker:DescribeSimulationApplication
```

### Read
```json
robomaker:DescribeSimulationApplication
```
