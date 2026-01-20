---
title: simulation_applications
hide_title: false
hide_table_of_contents: false
keywords:
  - simulation_applications
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

Creates, updates, deletes or gets a <code>simulation_application</code> resource or lists <code>simulation_applications</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>simulation_applications</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>This schema is for testing purpose only.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.robomaker.simulation_applications" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the simulation application."
  },
  {
    "name": "current_revision_id",
    "type": "string",
    "description": "The current revision id."
  },
  {
    "name": "rendering_engine",
    "type": "object",
    "description": "The rendering engine for the simulation application.",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": "The name of the rendering engine."
      },
      {
        "name": "version",
        "type": "string",
        "description": "The version of the rendering engine."
      }
    ]
  },
  {
    "name": "robot_software_suite",
    "type": "object",
    "description": "The robot software suite used by the simulation application.",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": "The name of the robot software suite."
      },
      {
        "name": "version",
        "type": "string",
        "description": "The version of the robot software suite."
      }
    ]
  },
  {
    "name": "simulation_software_suite",
    "type": "object",
    "description": "The simulation software suite used by the simulation application.",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": "The name of the simulation software suite."
      },
      {
        "name": "version",
        "type": "string",
        "description": "The version of the simulation software suite."
      }
    ]
  },
  {
    "name": "sources",
    "type": "array",
    "description": "The sources of the simulation application.",
    "children": [
      {
        "name": "s3_bucket",
        "type": "string",
        "description": "The Amazon S3 bucket name."
      },
      {
        "name": "s3_key",
        "type": "string",
        "description": "The s3 object key."
      },
      {
        "name": "architecture",
        "type": "string",
        "description": "The target processor architecture for the application."
      }
    ]
  },
  {
    "name": "environment",
    "type": "string",
    "description": "The URI of the Docker image for the robot application."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A key-value pair to associate with a resource."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html"><code>AWS::RoboMaker::SimulationApplication</code></a>.

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
    <td><CopyableCode code="RobotSoftwareSuite, SimulationSoftwareSuite, region" /></td>
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

Gets all properties from an individual <code>simulation_application</code>.
```sql
SELECT
region,
arn,
name,
current_revision_id,
rendering_engine,
robot_software_suite,
simulation_software_suite,
sources,
environment,
tags
FROM awscc.robomaker.simulation_applications
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>simulation_application</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.robomaker.simulation_applications (
 RobotSoftwareSuite,
 SimulationSoftwareSuite,
 region
)
SELECT 
'{{ RobotSoftwareSuite }}',
 '{{ SimulationSoftwareSuite }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.robomaker.simulation_applications (
 Name,
 CurrentRevisionId,
 RenderingEngine,
 RobotSoftwareSuite,
 SimulationSoftwareSuite,
 Sources,
 Environment,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ CurrentRevisionId }}',
 '{{ RenderingEngine }}',
 '{{ RobotSoftwareSuite }}',
 '{{ SimulationSoftwareSuite }}',
 '{{ Sources }}',
 '{{ Environment }}',
 '{{ Tags }}',
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
  - name: simulation_application
    props:
      - name: Name
        value: '{{ Name }}'
      - name: CurrentRevisionId
        value: '{{ CurrentRevisionId }}'
      - name: RenderingEngine
        value:
          Name: '{{ Name }}'
          Version: '{{ Version }}'
      - name: RobotSoftwareSuite
        value:
          Name: '{{ Name }}'
          Version: '{{ Version }}'
      - name: SimulationSoftwareSuite
        value:
          Name: '{{ Name }}'
          Version: '{{ Version }}'
      - name: Sources
        value:
          - S3Bucket: '{{ S3Bucket }}'
            S3Key: '{{ S3Key }}'
            Architecture: '{{ Architecture }}'
      - name: Environment
        value: '{{ Environment }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.robomaker.simulation_applications
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>simulation_applications</code> resource, the following permissions are required:

### Create
```json
robomaker:CreateSimulationApplication,
robomaker:TagResource,
robomaker:UntagResource,
ecr:BatchGetImage,
ecr:GetAuthorizationToken,
ecr:BatchCheckLayerAvailability,
ecr-public:GetAuthorizationToken,
sts:GetServiceBearerToken
```

### Read
```json
robomaker:DescribeSimulationApplication
```

### Update
```json
robomaker:TagResource,
robomaker:UntagResource,
robomaker:UpdateSimulationApplication,
ecr:BatchGetImage,
ecr:GetAuthorizationToken,
ecr:BatchCheckLayerAvailability,
ecr-public:GetAuthorizationToken
```

### Delete
```json
robomaker:DescribeSimulationApplication,
robomaker:DeleteSimulationApplication
```

### List
```json
robomaker:ListSimulationApplications
```
