---
title: dashboards
hide_title: false
hide_table_of_contents: false
keywords:
  - dashboards
  - cloudtrail
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
<tr><td><b>Description</b></td><td>The Amazon CloudTrail dashboard resource allows customers to manage managed dashboards and create custom dashboards. You can manually refresh custom and managed dashboards. For custom dashboards, you can also set up an automatic refresh schedule and modify dashboard widgets.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudtrail.dashboards" /></td></tr>
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
    "name": "widgets",
    "type": "array",
    "description": "List of widgets on the dashboard",
    "children": [
      {
        "name": "query_statement",
        "type": "string",
        "description": "The SQL query statement on one or more event data stores."
      },
      {
        "name": "query_parameters",
        "type": "array",
        "description": "The placeholder keys in the QueryStatement. For example: $StartTime$, $EndTime$, $Period$."
      },
      {
        "name": "view_properties",
        "type": "object",
        "description": "The view properties of the widget."
      }
    ]
  },
  {
    "name": "created_timestamp",
    "type": "string",
    "description": "The timestamp of the dashboard creation."
  },
  {
    "name": "dashboard_arn",
    "type": "string",
    "description": "The ARN of the dashboard."
  },
  {
    "name": "refresh_schedule",
    "type": "object",
    "description": "Configures the automatic refresh schedule for the dashboard. Includes the frequency unit (DAYS or HOURS) and value, as well as the status (ENABLED or DISABLED) of the refresh schedule.",
    "children": [
      {
        "name": "frequency",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "unit",
            "type": "string",
            "description": "The frequency unit. Supported values are HOURS and DAYS."
          },
          {
            "name": "value",
            "type": "integer",
            "description": "The frequency value."
          }
        ]
      },
      {
        "name": "time_of_day",
        "type": "string",
        "description": "StartTime of the automatic schedule refresh."
      },
      {
        "name": "status",
        "type": "string",
        "description": "The status of the schedule. Supported values are ENABLED and DISABLED."
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the dashboard."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the dashboard. Values are CREATING, CREATED, UPDATING, UPDATED and DELETING."
  },
  {
    "name": "termination_protection_enabled",
    "type": "boolean",
    "description": "Indicates whether the dashboard is protected from termination."
  },
  {
    "name": "type",
    "type": "string",
    "description": "The type of the dashboard. Values are CUSTOM and MANAGED."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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
    "name": "dashboard_arn",
    "type": "string",
    "description": "The ARN of the dashboard."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html"><code>AWS::CloudTrail::Dashboard</code></a>.

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
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>dashboards</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>dashboards</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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
    <td><CopyableCode code="data__Identifier, region" /></td>
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
widgets,
created_timestamp,
dashboard_arn,
refresh_schedule,
name,
status,
termination_protection_enabled,
type,
updated_timestamp,
tags
FROM awscc.cloudtrail.dashboards
WHERE region = 'us-east-1' AND data__Identifier = '<DashboardArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>dashboards</code> in a region.
```sql
SELECT
region,
dashboard_arn
FROM awscc.cloudtrail.dashboards_list_only
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
INSERT INTO awscc.cloudtrail.dashboards (
 ,
 region
)
SELECT 
'{{  }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudtrail.dashboards (
 Widgets,
 RefreshSchedule,
 Name,
 TerminationProtectionEnabled,
 Tags,
 region
)
SELECT 
 '{{ Widgets }}',
 '{{ RefreshSchedule }}',
 '{{ Name }}',
 '{{ TerminationProtectionEnabled }}',
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
      - name: Widgets
        value:
          - QueryStatement: '{{ QueryStatement }}'
            QueryParameters:
              - '{{ QueryParameters[0] }}'
            ViewProperties: {}
      - name: RefreshSchedule
        value:
          Frequency:
            Unit: '{{ Unit }}'
            Value: '{{ Value }}'
          TimeOfDay: '{{ TimeOfDay }}'
          Status: '{{ Status }}'
      - name: Name
        value: '{{ Name }}'
      - name: TerminationProtectionEnabled
        value: '{{ TerminationProtectionEnabled }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.cloudtrail.dashboards
SET data__PatchDocument = string('{{ {
    "Widgets": widgets,
    "RefreshSchedule": refresh_schedule,
    "Name": name,
    "TerminationProtectionEnabled": termination_protection_enabled,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<DashboardArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudtrail.dashboards
WHERE data__Identifier = '<DashboardArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>dashboards</code> resource, the following permissions are required:

### Create
```json
CloudTrail:CreateDashboard,
CloudTrail:AddTags,
CloudTrail:StartQuery,
CloudTrail:StartDashboardRefresh
```

### Read
```json
CloudTrail:GetDashboard,
CloudTrail:ListDashboards,
CloudTrail:ListTags
```

### Update
```json
CloudTrail:UpdateDashboard,
CloudTrail:AddTags,
CloudTrail:RemoveTags,
CloudTrail:StartQuery,
CloudTrail:StartDashboardRefresh
```

### Delete
```json
CloudTrail:DeleteDashboard,
CloudTrail:UpdateDashboard
```

### List
```json
CloudTrail:ListDashboards,
CloudTrail:GetDashboard,
CloudTrail:ListTags
```
