---
title: rules
hide_title: false
hide_table_of_contents: false
keywords:
  - rules
  - rbin
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

Creates, updates, deletes or gets a <code>rule</code> resource or lists <code>rules</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Rbin::Rule</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rbin.rules" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": "Rule Arn is unique for each rule."
  },
  {
    "name": "identifier",
    "type": "string",
    "description": "The unique ID of the retention rule."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the retention rule."
  },
  {
    "name": "resource_tags",
    "type": "array",
    "description": "Information about the resource tags used to identify resources that are retained by the retention rule.",
    "children": [
      {
        "name": "resource_tag_key",
        "type": "string",
        "description": "The tag key of the resource."
      },
      {
        "name": "resource_tag_value",
        "type": "string",
        "description": "The tag value of the resource"
      }
    ]
  },
  {
    "name": "exclude_resource_tags",
    "type": "array",
    "description": "Information about the exclude resource tags used to identify resources that are excluded by the retention rule."
  },
  {
    "name": "resource_type",
    "type": "string",
    "description": "The resource type retained by the retention rule."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Information about the tags assigned to the retention rule.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A unique identifier for the tag."
      },
      {
        "name": "value",
        "type": "string",
        "description": "String which you can use to describe or define the tag."
      }
    ]
  },
  {
    "name": "retention_period",
    "type": "object",
    "description": "Information about the retention period for which the retention rule is to retain resources.",
    "children": [
      {
        "name": "retention_period_value",
        "type": "integer",
        "description": "The retention period value of the rule."
      },
      {
        "name": "retention_period_unit",
        "type": "string",
        "description": "The retention period unit of the rule"
      }
    ]
  },
  {
    "name": "status",
    "type": "string",
    "description": "The state of the retention rule. Only retention rules that are in the available state retain resources."
  },
  {
    "name": "lock_configuration",
    "type": "object",
    "description": "Information about the retention rule lock configuration.",
    "children": [
      {
        "name": "unlock_delay_value",
        "type": "integer",
        "description": "The unlock delay period, measured in the unit specified for UnlockDelayUnit."
      },
      {
        "name": "unlock_delay_unit",
        "type": "string",
        "description": "The unit of time in which to measure the unlock delay. Currently, the unlock delay can be measure only in days."
      }
    ]
  },
  {
    "name": "lock_state",
    "type": "string",
    "description": "The lock state for the retention rule."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rbin-rule.html"><code>AWS::Rbin::Rule</code></a>.

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
    <td><CopyableCode code="RetentionPeriod, ResourceType, region" /></td>
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

Gets all properties from an individual <code>rule</code>.
```sql
SELECT
region,
arn,
identifier,
description,
resource_tags,
exclude_resource_tags,
resource_type,
tags,
retention_period,
status,
lock_configuration,
lock_state
FROM awscc.rbin.rules
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.rbin.rules (
 ResourceType,
 RetentionPeriod,
 region
)
SELECT 
'{{ ResourceType }}',
 '{{ RetentionPeriod }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.rbin.rules (
 Description,
 ResourceTags,
 ExcludeResourceTags,
 ResourceType,
 Tags,
 RetentionPeriod,
 Status,
 LockConfiguration,
 region
)
SELECT 
 '{{ Description }}',
 '{{ ResourceTags }}',
 '{{ ExcludeResourceTags }}',
 '{{ ResourceType }}',
 '{{ Tags }}',
 '{{ RetentionPeriod }}',
 '{{ Status }}',
 '{{ LockConfiguration }}',
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
  - name: rule
    props:
      - name: Description
        value: '{{ Description }}'
      - name: ResourceTags
        value:
          - ResourceTagKey: '{{ ResourceTagKey }}'
            ResourceTagValue: '{{ ResourceTagValue }}'
      - name: ExcludeResourceTags
        value:
          - null
      - name: ResourceType
        value: '{{ ResourceType }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: RetentionPeriod
        value:
          RetentionPeriodValue: '{{ RetentionPeriodValue }}'
          RetentionPeriodUnit: '{{ RetentionPeriodUnit }}'
      - name: Status
        value: '{{ Status }}'
      - name: LockConfiguration
        value:
          UnlockDelayValue: '{{ UnlockDelayValue }}'
          UnlockDelayUnit: '{{ UnlockDelayUnit }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.rbin.rules
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>rules</code> resource, the following permissions are required:

### Create
```json
rbin:CreateRule,
rbin:GetRule,
rbin:LockRule,
rbin:TagResource,
iam:PassRole
```

### Read
```json
rbin:GetRule,
rbin:ListTagsForResource,
iam:PassRole
```

### Update
```json
rbin:GetRule,
rbin:UpdateRule,
rbin:LockRule,
rbin:UnlockRule,
rbin:TagResource,
rbin:UntagResource,
rbin:ListTagsForResource,
iam:PassRole
```

### Delete
```json
rbin:GetRule,
rbin:DeleteRule,
iam:PassRole
```

### List
```json
rbin:ListRules,
rbin:ListTagsForResource,
iam:PassRole
```
