---
title: dashboards
hide_title: false
hide_table_of_contents: false
keywords:
  - dashboards
  - cloudwatch
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
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::CloudWatch::Dashboard</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudwatch.dashboards" /></td></tr>
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
    "name": "dashboard_name",
    "type": "string",
    "description": "The name of the dashboard. The name must be between 1 and 255 characters. If you do not specify a name, one will be generated automatically."
  },
  {
    "name": "dashboard_body",
    "type": "string",
    "description": "The detailed information about the dashboard in JSON format, including the widgets to include and their location on the dashboard"
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
    "name": "dashboard_name",
    "type": "string",
    "description": "The name of the dashboard. The name must be between 1 and 255 characters. If you do not specify a name, one will be generated automatically."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-dashboard.html"><code>AWS::CloudWatch::Dashboard</code></a>.

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
    <td><CopyableCode code="DashboardBody, region" /></td>
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
dashboard_name,
dashboard_body
FROM awscc.cloudwatch.dashboards
WHERE region = 'us-east-1' AND Identifier = '{{ dashboard_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>dashboards</code> in a region.
```sql
SELECT
region,
dashboard_name
FROM awscc.cloudwatch.dashboards_list_only
WHERE region = 'us-east-1';
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
INSERT INTO awscc.cloudwatch.dashboards (
 DashboardBody,
 region
)
SELECT
'{{ dashboard_body }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudwatch.dashboards (
 DashboardName,
 DashboardBody,
 region
)
SELECT
 '{{ dashboard_name }}',
 '{{ dashboard_body }}',
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
      - name: dashboard_name
        value: '{{ dashboard_name }}'
      - name: dashboard_body
        value: '{{ dashboard_body }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>dashboard</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cloudwatch.dashboards
SET PatchDocument = string('{{ {
    "DashboardBody": dashboard_body
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ dashboard_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudwatch.dashboards
WHERE Identifier = '{{ dashboard_name }}'
AND region = 'us-east-1';
```

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
cloudwatch:PutDashboard,
cloudwatch:GetDashboard
```

</TabItem>
<TabItem value="read">

```json
cloudwatch:GetDashboard
```

</TabItem>
<TabItem value="update">

```json
cloudwatch:PutDashboard
```

</TabItem>
<TabItem value="delete">

```json
cloudwatch:DeleteDashboards,
cloudwatch:GetDashboard
```

</TabItem>
<TabItem value="list">

```json
cloudwatch:ListDashboards
```

</TabItem>
</Tabs>