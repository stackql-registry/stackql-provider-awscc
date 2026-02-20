---
title: event_triggers
hide_title: false
hide_table_of_contents: false
keywords:
  - event_triggers
  - customerprofiles
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

Creates, updates, deletes or gets an <code>event_trigger</code> resource or lists <code>event_triggers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>event_triggers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An event trigger resource of Amazon Connect Customer Profiles</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.customerprofiles.event_triggers" /></td></tr>
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
    "name": "domain_name",
    "type": "string",
    "description": "The unique name of the domain."
  },
  {
    "name": "event_trigger_name",
    "type": "string",
    "description": "The unique name of the event trigger."
  },
  {
    "name": "object_type_name",
    "type": "string",
    "description": "The unique name of the object type."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the event trigger."
  },
  {
    "name": "event_trigger_conditions",
    "type": "array",
    "description": "A list of conditions that determine when an event should trigger the destination.",
    "children": [
      {
        "name": "event_trigger_dimensions",
        "type": "array",
        "description": "A list of dimensions to be evaluated for the event.",
        "children": [
          {
            "name": "object_attributes",
            "type": "array",
            "description": "A list of object attributes to be evaluated.",
            "children": [
              {
                "name": "source",
                "type": "string",
                "description": "An attribute contained within a source object."
              },
              {
                "name": "field_name",
                "type": "string",
                "description": "A field defined within an object type."
              },
              {
                "name": "comparison_operator",
                "type": "string",
                "description": "The operator used to compare an attribute against a list of values."
              },
              {
                "name": "values",
                "type": "array",
                "description": "A list of attribute values used for comparison."
              }
            ]
          }
        ]
      },
      {
        "name": "logical_operator",
        "type": "string",
        "description": "The operator used to combine multiple dimensions."
      }
    ]
  },
  {
    "name": "event_trigger_limits",
    "type": "object",
    "description": "Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods.",
    "children": [
      {
        "name": "event_expiration",
        "type": "integer",
        "description": "Specifies that an event will only trigger the destination if it is processed within a certain latency period."
      },
      {
        "name": "periods",
        "type": "array",
        "description": "A list of time periods during which the limits apply.",
        "children": [
          {
            "name": "unit",
            "type": "string",
            "description": "The unit of time."
          },
          {
            "name": "value",
            "type": "integer",
            "description": "The amount of time of the specified unit."
          },
          {
            "name": "max_invocations_per_profile",
            "type": "integer",
            "description": "The maximum allowed number of destination invocations per profile."
          },
          {
            "name": "unlimited",
            "type": "boolean",
            "description": "If set to true, there is no limit on the number of destination invocations per profile. The default is false."
          }
        ]
      }
    ]
  },
  {
    "name": "segment_filter",
    "type": "string",
    "description": "The destination is triggered only for profiles that meet the criteria of a segment definition."
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The timestamp of when the event trigger was created."
  },
  {
    "name": "last_updated_at",
    "type": "string",
    "description": "The timestamp of when the event trigger was most recently updated."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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
    "name": "domain_name",
    "type": "string",
    "description": "The unique name of the domain."
  },
  {
    "name": "event_trigger_name",
    "type": "string",
    "description": "The unique name of the event trigger."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html"><code>AWS::CustomerProfiles::EventTrigger</code></a>.

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
    <td><code>event_triggers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DomainName, EventTriggerName, ObjectTypeName, EventTriggerConditions, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>event_triggers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>event_triggers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>event_triggers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>event_triggers</code></td>
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

Gets all properties from an individual <code>event_trigger</code>.
```sql
SELECT
region,
domain_name,
event_trigger_name,
object_type_name,
description,
event_trigger_conditions,
event_trigger_limits,
segment_filter,
created_at,
last_updated_at,
tags
FROM awscc.customerprofiles.event_triggers
WHERE region = 'us-east-1' AND Identifier = '<DomainName>|<EventTriggerName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>event_triggers</code> in a region.
```sql
SELECT
region,
domain_name,
event_trigger_name
FROM awscc.customerprofiles.event_triggers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>event_trigger</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.customerprofiles.event_triggers (
 DomainName,
 EventTriggerName,
 ObjectTypeName,
 EventTriggerConditions,
 region
)
SELECT 
'{{ DomainName }}',
 '{{ EventTriggerName }}',
 '{{ ObjectTypeName }}',
 '{{ EventTriggerConditions }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.customerprofiles.event_triggers (
 DomainName,
 EventTriggerName,
 ObjectTypeName,
 Description,
 EventTriggerConditions,
 EventTriggerLimits,
 SegmentFilter,
 Tags,
 region
)
SELECT 
 '{{ DomainName }}',
 '{{ EventTriggerName }}',
 '{{ ObjectTypeName }}',
 '{{ Description }}',
 '{{ EventTriggerConditions }}',
 '{{ EventTriggerLimits }}',
 '{{ SegmentFilter }}',
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
  - name: event_trigger
    props:
      - name: DomainName
        value: '{{ DomainName }}'
      - name: EventTriggerName
        value: '{{ EventTriggerName }}'
      - name: ObjectTypeName
        value: '{{ ObjectTypeName }}'
      - name: Description
        value: '{{ Description }}'
      - name: EventTriggerConditions
        value:
          - EventTriggerDimensions:
              - ObjectAttributes:
                  - Source: '{{ Source }}'
                    FieldName: '{{ FieldName }}'
                    ComparisonOperator: '{{ ComparisonOperator }}'
                    Values:
                      - '{{ Values[0] }}'
            LogicalOperator: '{{ LogicalOperator }}'
      - name: EventTriggerLimits
        value:
          EventExpiration: '{{ EventExpiration }}'
          Periods:
            - Unit: '{{ Unit }}'
              Value: '{{ Value }}'
              MaxInvocationsPerProfile: '{{ MaxInvocationsPerProfile }}'
              Unlimited: '{{ Unlimited }}'
      - name: SegmentFilter
        value: '{{ SegmentFilter }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>event_trigger</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.customerprofiles.event_triggers
SET PatchDocument = string('{{ {
    "ObjectTypeName": object_type_name,
    "Description": description,
    "EventTriggerConditions": event_trigger_conditions,
    "EventTriggerLimits": event_trigger_limits,
    "SegmentFilter": segment_filter,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<DomainName>|<EventTriggerName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.customerprofiles.event_triggers
WHERE Identifier = '<DomainName|EventTriggerName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>event_triggers</code> resource, the following permissions are required:

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
profile:CreateEventTrigger,
profile:TagResource
```

</TabItem>
<TabItem value="read">

```json
profile:GetEventTrigger
```

</TabItem>
<TabItem value="update">

```json
profile:GetEventTrigger,
profile:UpdateEventTrigger,
profile:UntagResource,
profile:TagResource
```

</TabItem>
<TabItem value="delete">

```json
profile:DeleteEventTrigger
```

</TabItem>
<TabItem value="list">

```json
profile:ListEventTriggers
```

</TabItem>
</Tabs>