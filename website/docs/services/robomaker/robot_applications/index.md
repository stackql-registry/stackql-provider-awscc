---
title: robot_applications
hide_title: false
hide_table_of_contents: false
keywords:
  - robot_applications
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

Creates, updates, deletes or gets a <code>robot_application</code> resource or lists <code>robot_applications</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>robot_applications</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>This schema is for testing purpose only.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.robomaker.robot_applications" /></td></tr>
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
    "description": "The name of the robot application."
  },
  {
    "name": "sources",
    "type": "array",
    "description": "The sources of the robot application.",
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
    "name": "robot_software_suite",
    "type": "object",
    "description": "Information about a robot software suite.",
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
    "name": "current_revision_id",
    "type": "string",
    "description": "The revision ID of robot application."
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplication.html"><code>AWS::RoboMaker::RobotApplication</code></a>.

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
    <td><code>robot_applications</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RobotSoftwareSuite, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>robot_applications</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>robot_applications</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>robot_applications_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>robot_applications</code></td>
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

Gets all properties from an individual <code>robot_application</code>.
```sql
SELECT
region,
name,
sources,
environment,
robot_software_suite,
current_revision_id,
arn,
tags
FROM awscc.robomaker.robot_applications
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>robot_applications</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.robomaker.robot_applications_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>robot_application</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.robomaker.robot_applications (
 RobotSoftwareSuite,
 region
)
SELECT 
'{{ RobotSoftwareSuite }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.robomaker.robot_applications (
 Name,
 Sources,
 Environment,
 RobotSoftwareSuite,
 CurrentRevisionId,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Sources }}',
 '{{ Environment }}',
 '{{ RobotSoftwareSuite }}',
 '{{ CurrentRevisionId }}',
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
  - name: robot_application
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Sources
        value:
          - S3Bucket: '{{ S3Bucket }}'
            S3Key: '{{ S3Key }}'
            Architecture: '{{ Architecture }}'
      - name: Environment
        value: '{{ Environment }}'
      - name: RobotSoftwareSuite
        value:
          Name: '{{ Name }}'
          Version: '{{ Version }}'
      - name: CurrentRevisionId
        value: '{{ CurrentRevisionId }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>robot_application</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.robomaker.robot_applications
SET PatchDocument = string('{{ {
    "Sources": sources,
    "Environment": environment,
    "RobotSoftwareSuite": robot_software_suite,
    "CurrentRevisionId": current_revision_id,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.robomaker.robot_applications
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>robot_applications</code> resource, the following permissions are required:

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
robomaker:CreateRobotApplication,
robomaker:TagResource,
robomaker:UntagResource,
ecr:BatchGetImage,
ecr:GetAuthorizationToken,
ecr:BatchCheckLayerAvailability,
ecr-public:GetAuthorizationToken,
sts:GetServiceBearerToken
```

</TabItem>
<TabItem value="read">

```json
robomaker:DescribeRobotApplication
```

</TabItem>
<TabItem value="update">

```json
robomaker:TagResource,
robomaker:UntagResource,
robomaker:UpdateRobotApplication,
ecr:BatchGetImage,
ecr:GetAuthorizationToken,
ecr:BatchCheckLayerAvailability,
ecr-public:GetAuthorizationToken
```

</TabItem>
<TabItem value="delete">

```json
robomaker:DescribeRobotApplication,
robomaker:DeleteRobotApplication
```

</TabItem>
<TabItem value="list">

```json
robomaker:ListRobotApplications
```

</TabItem>
</Tabs>