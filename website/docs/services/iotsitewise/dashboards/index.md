---
title: dashboards
hide_title: false
hide_table_of_contents: false
keywords:
  - dashboards
  - iotsitewise
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

Creates, updates, deletes or gets a <code>dashboard</code> resource or lists <code>dashboards</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>dashboards</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::IoTSiteWise::Dashboard</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotsitewise.dashboards" /></td></tr>
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
    "name": "project_id",
    "type": "string",
    "description": "The ID of the project in which to create the dashboard."
  },
  {
    "name": "dashboard_id",
    "type": "string",
    "description": "The ID of the dashboard."
  },
  {
    "name": "dashboard_name",
    "type": "string",
    "description": "A friendly name for the dashboard."
  },
  {
    "name": "dashboard_description",
    "type": "string",
    "description": "A description for the dashboard."
  },
  {
    "name": "dashboard_definition",
    "type": "string",
    "description": "The dashboard definition specified in a JSON literal."
  },
  {
    "name": "dashboard_arn",
    "type": "string",
    "description": "The ARN of the dashboard."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of key-value pairs that contain metadata for the dashboard.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
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
    "name": "dashboard_id",
    "type": "string",
    "description": "The ID of the dashboard."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dashboard.html"><code>AWS::IoTSiteWise::Dashboard</code></a>.

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
    <td><code>dashboards</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DashboardDefinition, DashboardDescription, DashboardName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>dashboards</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>dashboards</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>dashboards_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>dashboards</code></td>
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

Gets all properties from an individual <code>dashboard</code>.
```sql
SELECT
  region,
  project_id,
  dashboard_id,
  dashboard_name,
  dashboard_description,
  dashboard_definition,
  dashboard_arn,
  tags
FROM awscc.iotsitewise.dashboards
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ dashboard_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>dashboards</code> in a region.
```sql
SELECT
  region,
  dashboard_id
FROM awscc.iotsitewise.dashboards_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>dashboard</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotsitewise.dashboards (
  DashboardName,
  DashboardDescription,
  DashboardDefinition,
  region
)
SELECT
  '{{ dashboard_name }}',
  '{{ dashboard_description }}',
  '{{ dashboard_definition }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotsitewise.dashboards (
  ProjectId,
  DashboardName,
  DashboardDescription,
  DashboardDefinition,
  Tags,
  region
)
SELECT
  '{{ project_id }}',
  '{{ dashboard_name }}',
  '{{ dashboard_description }}',
  '{{ dashboard_definition }}',
  '{{ tags }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
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
  - name: dashboard
    props:
      - name: project_id
        value: '{{ project_id }}'
      - name: dashboard_name
        value: '{{ dashboard_name }}'
      - name: dashboard_description
        value: '{{ dashboard_description }}'
      - name: dashboard_definition
        value: '{{ dashboard_definition }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>dashboard</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iotsitewise.dashboards
SET PatchDocument = string('{{ {
    "DashboardName": dashboard_name,
    "DashboardDescription": dashboard_description,
    "DashboardDefinition": dashboard_definition,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ dashboard_id }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotsitewise.dashboards
WHERE
  Identifier = '{{ dashboard_id }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>dashboards</code> resource, the following permissions are required:

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
iotsitewise:CreateDashboard,
iotsitewise:DescribeDashboard,
iotsitewise:ListTagsForResource,
iotsitewise:TagResource,
iotsitewise:DescribeAsset,
iotsitewise:DescribeAssetModel,
iotsitewise:ListAssetModelProperties,
iotsitewise:ListAssetModelCompositeModels
```

</TabItem>
<TabItem value="read">

```json
iotsitewise:DescribeDashboard,
iotsitewise:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
iotsitewise:DescribeDashboard,
iotsitewise:UpdateDashboard,
iotsitewise:TagResource,
iotsitewise:UntagResource,
iotsitewise:ListTagsForResource,
iotsitewise:DescribeAsset,
iotsitewise:DescribeAssetModel,
iotsitewise:ListAssetModelProperties,
iotsitewise:ListAssetModelCompositeModels
```

</TabItem>
<TabItem value="delete">

```json
iotsitewise:DescribeDashboard,
iotsitewise:DeleteDashboard
```

</TabItem>
<TabItem value="list">

```json
iotsitewise:ListDashboards,
iotsitewise:ListPortals,
iotsitewise:ListProjects,
iotsitewise:ListTagsForResource
```

</TabItem>
</Tabs>