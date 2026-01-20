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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dashboard.html"><code>AWS::IoTSiteWise::Dashboard</code></a>.

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
    <td><CopyableCode code="DashboardDefinition, DashboardDescription, DashboardName, region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<DashboardId>';
```

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
'{{ DashboardName }}',
 '{{ DashboardDescription }}',
 '{{ DashboardDefinition }}',
'{{ region }}';
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
 '{{ ProjectId }}',
 '{{ DashboardName }}',
 '{{ DashboardDescription }}',
 '{{ DashboardDefinition }}',
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
  - name: dashboard
    props:
      - name: ProjectId
        value: '{{ ProjectId }}'
      - name: DashboardName
        value: '{{ DashboardName }}'
      - name: DashboardDescription
        value: '{{ DashboardDescription }}'
      - name: DashboardDefinition
        value: '{{ DashboardDefinition }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotsitewise.dashboards
WHERE data__Identifier = '<DashboardId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>dashboards</code> resource, the following permissions are required:

### Create
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

### Read
```json
iotsitewise:DescribeDashboard,
iotsitewise:ListTagsForResource
```

### Update
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

### Delete
```json
iotsitewise:DescribeDashboard,
iotsitewise:DeleteDashboard
```

### List
```json
iotsitewise:ListDashboards,
iotsitewise:ListPortals,
iotsitewise:ListProjects,
iotsitewise:ListTagsForResource
```
