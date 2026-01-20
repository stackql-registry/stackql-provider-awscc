---
title: groups
hide_title: false
hide_table_of_contents: false
keywords:
  - groups
  - xray
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

Creates, updates, deletes or gets a <code>group</code> resource or lists <code>groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>This schema provides construct and validation rules for AWS-XRay Group resource parameters.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.xray.groups" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "filter_expression",
    "type": "string",
    "description": "The filter expression defining criteria by which to group traces."
  },
  {
    "name": "group_name",
    "type": "string",
    "description": "The case-sensitive name of the new group. Names must be unique."
  },
  {
    "name": "group_arn",
    "type": "string",
    "description": "The ARN of the group that was generated on creation."
  },
  {
    "name": "insights_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "insights_enabled",
        "type": "boolean",
        "description": "Set the InsightsEnabled value to true to enable insights or false to disable insights."
      },
      {
        "name": "notifications_enabled",
        "type": "boolean",
        "description": "Set the NotificationsEnabled value to true to enable insights notifications. Notifications can only be enabled on a group with InsightsEnabled set to true."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-group.html"><code>AWS::XRay::Group</code></a>.

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
    <td><CopyableCode code="GroupName, region" /></td>
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

Gets all properties from an individual <code>group</code>.
```sql
SELECT
region,
filter_expression,
group_name,
group_arn,
insights_configuration,
tags
FROM awscc.xray.groups
WHERE region = 'us-east-1' AND data__Identifier = '<GroupARN>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.xray.groups (
 GroupName,
 region
)
SELECT 
'{{ GroupName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.xray.groups (
 FilterExpression,
 GroupName,
 InsightsConfiguration,
 Tags,
 region
)
SELECT 
 '{{ FilterExpression }}',
 '{{ GroupName }}',
 '{{ InsightsConfiguration }}',
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
  - name: group
    props:
      - name: FilterExpression
        value: '{{ FilterExpression }}'
      - name: GroupName
        value: '{{ GroupName }}'
      - name: InsightsConfiguration
        value:
          InsightsEnabled: '{{ InsightsEnabled }}'
          NotificationsEnabled: '{{ NotificationsEnabled }}'
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
DELETE FROM awscc.xray.groups
WHERE data__Identifier = '<GroupARN>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>groups</code> resource, the following permissions are required:

### Create
```json
xray:CreateGroup,
xray:TagResource
```

### Read
```json
xray:GetGroup,
xray:ListTagsForResource
```

### Update
```json
xray:UpdateGroup,
xray:TagResource,
xray:UntagResource,
xray:ListTagsForResource
```

### Delete
```json
xray:DeleteGroup
```

### List
```json
xray:GetGroups,
xray:ListTagsForResource
```
