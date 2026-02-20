---
title: event_bridge_rule_template_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - event_bridge_rule_template_groups
  - medialive
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

Creates, updates, deletes or gets an <code>event_bridge_rule_template_group</code> resource or lists <code>event_bridge_rule_template_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>event_bridge_rule_template_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::MediaLive::EventBridgeRuleTemplateGroup Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.medialive.event_bridge_rule_template_groups" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": "An eventbridge rule template group's ARN (Amazon Resource Name)"
  },
  {
    "name": "created_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": "A resource's optional description."
  },
  {
    "name": "id",
    "type": "string",
    "description": "An eventbridge rule template group's id. AWS provided template groups have ids that start with &#96;aws-&#96;"
  },
  {
    "name": "identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "modified_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": "A resource's name. Names must be unique within the scope of a resource type in a specific region."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "Represents the tags associated with a resource."
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
    "name": "id",
    "type": "string",
    "description": "An eventbridge rule template group's id. AWS provided template groups have ids that start with &#96;aws-&#96;"
  },
  {
    "name": "identifier",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplategroup.html"><code>AWS::MediaLive::EventBridgeRuleTemplateGroup</code></a>.

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
    <td><code>event_bridge_rule_template_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>event_bridge_rule_template_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>event_bridge_rule_template_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>event_bridge_rule_template_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>event_bridge_rule_template_groups</code></td>
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

Gets all properties from an individual <code>event_bridge_rule_template_group</code>.
```sql
SELECT
region,
arn,
created_at,
description,
id,
identifier,
modified_at,
name,
tags
FROM awscc.medialive.event_bridge_rule_template_groups
WHERE region = 'us-east-1' AND Identifier = '<Identifier>';
```
</TabItem>
<TabItem value="list">

Lists all <code>event_bridge_rule_template_groups</code> in a region.
```sql
SELECT
region,
identifier
FROM awscc.medialive.event_bridge_rule_template_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>event_bridge_rule_template_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.medialive.event_bridge_rule_template_groups (
 Name,
 region
)
SELECT 
'{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.medialive.event_bridge_rule_template_groups (
 Description,
 Name,
 Tags,
 region
)
SELECT 
 '{{ Description }}',
 '{{ Name }}',
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
  - name: event_bridge_rule_template_group
    props:
      - name: Description
        value: '{{ Description }}'
      - name: Name
        value: '{{ Name }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.medialive.event_bridge_rule_template_groups
SET PatchDocument = string('{{ {
    "Description": description
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Identifier>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.medialive.event_bridge_rule_template_groups
WHERE Identifier = '<Identifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>event_bridge_rule_template_groups</code> resource, the following permissions are required:

### Create
```json
medialive:CreateEventBridgeRuleTemplateGroup,
medialive:GetEventBridgeRuleTemplateGroup,
medialive:CreateTags
```

### Read
```json
medialive:GetEventBridgeRuleTemplateGroup
```

### Update
```json
medialive:UpdateEventBridgeRuleTemplateGroup,
medialive:GetEventBridgeRuleTemplateGroup,
medialive:CreateTags,
medialive:DeleteTags
```

### Delete
```json
medialive:DeleteEventBridgeRuleTemplateGroup
```

### List
```json
medialive:ListEventBridgeRuleTemplateGroups
```
