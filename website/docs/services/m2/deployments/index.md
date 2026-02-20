---
title: deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments
  - m2
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

Creates, updates, deletes or gets a <code>deployment</code> resource or lists <code>deployments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>deployments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Represents a deployment resource of an AWS Mainframe Modernization (M2) application to a specified environment</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.m2.deployments" /></td></tr>
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
    "name": "environment_id",
    "type": "string",
    "description": "The environment ID."
  },
  {
    "name": "application_id",
    "type": "string",
    "description": "The application ID."
  },
  {
    "name": "application_version",
    "type": "integer",
    "description": "The version number of the application to deploy"
  },
  {
    "name": "deployment_id",
    "type": "string",
    "description": "The deployment ID."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the deployment."
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
    "name": "application_id",
    "type": "string",
    "description": "The application ID."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-deployment.html"><code>AWS::M2::Deployment</code></a>.

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
    <td><code>deployments</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="EnvironmentId, ApplicationId, ApplicationVersion, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>deployments</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>deployments</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>deployments_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>deployments</code></td>
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

Gets all properties from an individual <code>deployment</code>.
```sql
SELECT
region,
environment_id,
application_id,
application_version,
deployment_id,
status
FROM awscc.m2.deployments
WHERE region = 'us-east-1' AND Identifier = '<ApplicationId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>deployments</code> in a region.
```sql
SELECT
region,
application_id
FROM awscc.m2.deployments_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>deployment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.m2.deployments (
 EnvironmentId,
 ApplicationId,
 ApplicationVersion,
 region
)
SELECT 
'{{ EnvironmentId }}',
 '{{ ApplicationId }}',
 '{{ ApplicationVersion }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.m2.deployments (
 EnvironmentId,
 ApplicationId,
 ApplicationVersion,
 region
)
SELECT 
 '{{ EnvironmentId }}',
 '{{ ApplicationId }}',
 '{{ ApplicationVersion }}',
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
  - name: deployment
    props:
      - name: EnvironmentId
        value: '{{ EnvironmentId }}'
      - name: ApplicationId
        value: '{{ ApplicationId }}'
      - name: ApplicationVersion
        value: '{{ ApplicationVersion }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>deployment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.m2.deployments
SET PatchDocument = string('{{ {
    "ApplicationVersion": application_version
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ApplicationId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.m2.deployments
WHERE Identifier = '<ApplicationId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>deployments</code> resource, the following permissions are required:

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
m2:CreateDeployment,
m2:ListDeployments,
m2:GetDeployment,
iam:PassRole,
ec2:DescribeNetworkInterfaces,
elasticloadbalancing:CreateListener,
elasticloadbalancing:CreateLoadBalancer,
elasticloadbalancing:CreateTargetGroup,
elasticloadbalancing:AddTags,
elasticloadbalancing:RegisterTargets,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups,
logs:CreateLogDelivery,
logs:GetLogDelivery,
logs:UpdateLogDelivery,
logs:DeleteLogDelivery,
logs:ListLogDeliveries,
logs:CreateLogGroup,
logs:PutResourcePolicy
```

</TabItem>
<TabItem value="read">

```json
m2:ListDeployments,
m2:GetDeployment
```

</TabItem>
<TabItem value="update">

```json
m2:CreateDeployment,
m2:ListDeployments,
m2:GetDeployment,
elasticloadbalancing:CreateListener,
elasticloadbalancing:CreateLoadBalancer,
elasticloadbalancing:CreateTargetGroup,
elasticloadbalancing:DeleteListener,
elasticloadbalancing:DeleteTargetGroup,
elasticloadbalancing:DeregisterTargets,
elasticloadbalancing:DeleteLoadBalancer,
elasticloadbalancing:AddTags,
elasticloadbalancing:RegisterTargets,
ec2:DescribeNetworkInterfaces
```

</TabItem>
<TabItem value="delete">

```json
elasticloadbalancing:DeleteListener,
elasticloadbalancing:DeleteTargetGroup,
elasticloadbalancing:DeregisterTargets,
elasticloadbalancing:DeleteLoadBalancer,
logs:DeleteLogDelivery,
m2:ListDeployments,
m2:GetDeployment,
m2:DeleteApplicationFromEnvironment
```

</TabItem>
<TabItem value="list">

```json
m2:ListDeployments
```

</TabItem>
</Tabs>