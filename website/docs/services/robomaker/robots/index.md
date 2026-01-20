---
title: robots
hide_title: false
hide_table_of_contents: false
keywords:
  - robots
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

Creates, updates, deletes or gets a <code>robot</code> resource or lists <code>robots</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>robots</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>AWS::RoboMaker::Robot resource creates an AWS RoboMaker Robot.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.robomaker.robots" /></td></tr>
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
    "name": "fleet",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the fleet."
  },
  {
    "name": "architecture",
    "type": "string",
    "description": "The target architecture of the robot."
  },
  {
    "name": "greengrass_group_id",
    "type": "string",
    "description": "The Greengrass group id."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A key-value pair to associate with a resource."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name for the robot."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robot.html"><code>AWS::RoboMaker::Robot</code></a>.

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
    <td><CopyableCode code="GreengrassGroupId, Architecture, region" /></td>
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

Gets all properties from an individual <code>robot</code>.
```sql
SELECT
region,
arn,
fleet,
architecture,
greengrass_group_id,
tags,
name
FROM awscc.robomaker.robots
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>robot</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.robomaker.robots (
 Architecture,
 GreengrassGroupId,
 region
)
SELECT 
'{{ Architecture }}',
 '{{ GreengrassGroupId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.robomaker.robots (
 Fleet,
 Architecture,
 GreengrassGroupId,
 Tags,
 Name,
 region
)
SELECT 
 '{{ Fleet }}',
 '{{ Architecture }}',
 '{{ GreengrassGroupId }}',
 '{{ Tags }}',
 '{{ Name }}',
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
  - name: robot
    props:
      - name: Fleet
        value: '{{ Fleet }}'
      - name: Architecture
        value: '{{ Architecture }}'
      - name: GreengrassGroupId
        value: '{{ GreengrassGroupId }}'
      - name: Tags
        value: {}
      - name: Name
        value: '{{ Name }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.robomaker.robots
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>robots</code> resource, the following permissions are required:

### Create
```json
robomaker:CreateRobot,
robomaker:RegisterRobot
```

### Read
```json
robomaker:DescribeRobot
```

### Delete
```json
robomaker:DescribeRobot,
robomaker:DeleteRobot,
robomaker:DeregisterRobot
```

### List
```json
robomaker:ListRobots
```

### Update
```json
robomaker:TagResource,
robomaker:UntagResource
```
