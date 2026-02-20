---
title: event_bridge_rule_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - event_bridge_rule_templates
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

Creates, updates, deletes or gets an <code>event_bridge_rule_template</code> resource or lists <code>event_bridge_rule_templates</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>event_bridge_rule_templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::MediaLive::EventBridgeRuleTemplate Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.medialive.event_bridge_rule_templates" /></td></tr>
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
    "description": "An eventbridge rule template's ARN (Amazon Resource Name)"
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "Placeholder documentation for &#95;&#95;timestampIso8601"
  },
  {
    "name": "description",
    "type": "string",
    "description": "A resource's optional description."
  },
  {
    "name": "event_targets",
    "type": "array",
    "description": "Placeholder documentation for &#95;&#95;listOfEventBridgeRuleTemplateTarget",
    "children": [
      {
        "name": "arn",
        "type": "string",
        "description": "Target ARNs must be either an SNS topic or CloudWatch log group."
      }
    ]
  },
  {
    "name": "event_type",
    "type": "string",
    "description": "The type of event to match with the rule."
  },
  {
    "name": "group_id",
    "type": "string",
    "description": "An eventbridge rule template group's id. AWS provided template groups have ids that start with &#96;aws-&#96;"
  },
  {
    "name": "group_identifier",
    "type": "string",
    "description": "An eventbridge rule template group's identifier. Can be either be its id or current name."
  },
  {
    "name": "id",
    "type": "string",
    "description": "An eventbridge rule template's id. AWS provided templates have ids that start with &#96;aws-&#96;"
  },
  {
    "name": "identifier",
    "type": "string",
    "description": "Placeholder documentation for &#95;&#95;string"
  },
  {
    "name": "modified_at",
    "type": "string",
    "description": "Placeholder documentation for &#95;&#95;timestampIso8601"
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
    "description": "An eventbridge rule template's id. AWS provided templates have ids that start with &#96;aws-&#96;"
  },
  {
    "name": "identifier",
    "type": "string",
    "description": "Placeholder documentation for &#95;&#95;string"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplate.html"><code>AWS::MediaLive::EventBridgeRuleTemplate</code></a>.

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
    <td><code>event_bridge_rule_templates</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="EventType, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>event_bridge_rule_templates</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>event_bridge_rule_templates</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>event_bridge_rule_templates_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>event_bridge_rule_templates</code></td>
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

Gets all properties from an individual <code>event_bridge_rule_template</code>.
```sql
SELECT
region,
arn,
created_at,
description,
event_targets,
event_type,
group_id,
group_identifier,
id,
identifier,
modified_at,
name,
tags
FROM awscc.medialive.event_bridge_rule_templates
WHERE region = 'us-east-1' AND Identifier = '<Identifier>';
```
</TabItem>
<TabItem value="list">

Lists all <code>event_bridge_rule_templates</code> in a region.
```sql
SELECT
region,
identifier
FROM awscc.medialive.event_bridge_rule_templates_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>event_bridge_rule_template</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.medialive.event_bridge_rule_templates (
 EventType,
 Name,
 region
)
SELECT 
'{{ EventType }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.medialive.event_bridge_rule_templates (
 Description,
 EventTargets,
 EventType,
 GroupIdentifier,
 Name,
 Tags,
 region
)
SELECT 
 '{{ Description }}',
 '{{ EventTargets }}',
 '{{ EventType }}',
 '{{ GroupIdentifier }}',
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
  - name: event_bridge_rule_template
    props:
      - name: Description
        value: '{{ Description }}'
      - name: EventTargets
        value:
          - Arn: '{{ Arn }}'
      - name: EventType
        value: '{{ EventType }}'
      - name: GroupIdentifier
        value: '{{ GroupIdentifier }}'
      - name: Name
        value: '{{ Name }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>event_bridge_rule_template</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.medialive.event_bridge_rule_templates
SET PatchDocument = string('{{ {
    "Description": description,
    "EventTargets": event_targets,
    "EventType": event_type,
    "GroupIdentifier": group_identifier,
    "Name": name
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Identifier>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.medialive.event_bridge_rule_templates
WHERE Identifier = '<Identifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>event_bridge_rule_templates</code> resource, the following permissions are required:

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
medialive:CreateEventBridgeRuleTemplate,
medialive:GetEventBridgeRuleTemplate,
medialive:CreateTags
```

</TabItem>
<TabItem value="read">

```json
medialive:GetEventBridgeRuleTemplate
```

</TabItem>
<TabItem value="update">

```json
medialive:UpdateEventBridgeRuleTemplate,
medialive:GetEventBridgeRuleTemplate,
medialive:CreateTags,
medialive:DeleteTags
```

</TabItem>
<TabItem value="delete">

```json
medialive:DeleteEventBridgeRuleTemplate
```

</TabItem>
<TabItem value="list">

```json
medialive:ListEventBridgeRuleTemplates
```

</TabItem>
</Tabs>