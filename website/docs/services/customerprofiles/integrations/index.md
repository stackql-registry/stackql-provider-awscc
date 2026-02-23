---
title: integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - integrations
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

Creates, updates, deletes or gets an <code>integration</code> resource or lists <code>integrations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>integrations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The resource schema for creating an Amazon Connect Customer Profiles Integration.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.customerprofiles.integrations" /></td></tr>
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
    "name": "uri",
    "type": "string",
    "description": "The URI of the S3 bucket or any other type of data source."
  },
  {
    "name": "flow_definition",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "flow_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "description",
        "type": "string",
        "description": ""
      },
      {
        "name": "kms_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "tasks",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "connector_operator",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "marketo",
                "type": "string",
                "description": ""
              },
              {
                "name": "s3",
                "type": "string",
                "description": ""
              },
              {
                "name": "salesforce",
                "type": "string",
                "description": ""
              },
              {
                "name": "service_now",
                "type": "string",
                "description": ""
              },
              {
                "name": "zendesk",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "source_fields",
            "type": "array",
            "description": ""
          },
          {
            "name": "destination_field",
            "type": "string",
            "description": ""
          },
          {
            "name": "task_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "task_properties",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "operator_property_key",
                "type": "string",
                "description": ""
              },
              {
                "name": "property",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "trigger_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "trigger_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "trigger_properties",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "scheduled",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "source_flow_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "connector_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "connector_profile_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "incremental_pull_config",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "datetime_type_field_name",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "source_connector_properties",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "marketo",
                "type": "object",
                "description": ""
              },
              {
                "name": "s3",
                "type": "object",
                "description": ""
              },
              {
                "name": "salesforce",
                "type": "object",
                "description": ""
              },
              {
                "name": "service_now",
                "type": "object",
                "description": ""
              },
              {
                "name": "zendesk",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "object_type_name",
    "type": "string",
    "description": "The name of the ObjectType defined for the 3rd party data in Profile Service"
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The time of this integration got created"
  },
  {
    "name": "last_updated_at",
    "type": "string",
    "description": "The time of this integration got last updated at"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags (keys and values) associated with the integration",
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
    "name": "object_type_names",
    "type": "array",
    "description": "The mapping between 3rd party event types and ObjectType names",
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
    "name": "event_trigger_names",
    "type": "array",
    "description": "A list of unique names for active event triggers associated with the integration."
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
    "name": "uri",
    "type": "string",
    "description": "The URI of the S3 bucket or any other type of data source."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html"><code>AWS::CustomerProfiles::Integration</code></a>.

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
    <td><code>integrations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DomainName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>integrations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>integrations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>integrations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>integrations</code></td>
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

Gets all properties from an individual <code>integration</code>.
```sql
SELECT
region,
domain_name,
uri,
flow_definition,
object_type_name,
created_at,
last_updated_at,
tags,
object_type_names,
event_trigger_names
FROM awscc.customerprofiles.integrations
WHERE region = 'us-east-1' AND Identifier = '{{ domain_name }}|{{ uri }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>integrations</code> in a region.
```sql
SELECT
region,
domain_name,
uri
FROM awscc.customerprofiles.integrations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>integration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.customerprofiles.integrations (
 DomainName,
 region
)
SELECT
'{{ domain_name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.customerprofiles.integrations (
 DomainName,
 Uri,
 FlowDefinition,
 ObjectTypeName,
 Tags,
 ObjectTypeNames,
 EventTriggerNames,
 region
)
SELECT
 '{{ domain_name }}',
 '{{ uri }}',
 '{{ flow_definition }}',
 '{{ object_type_name }}',
 '{{ tags }}',
 '{{ object_type_names }}',
 '{{ event_trigger_names }}',
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
  - name: integration
    props:
      - name: domain_name
        value: '{{ domain_name }}'
      - name: uri
        value: '{{ uri }}'
      - name: flow_definition
        value:
          flow_name: '{{ flow_name }}'
          description: '{{ description }}'
          kms_arn: '{{ kms_arn }}'
          tasks:
            - connector_operator:
                marketo: '{{ marketo }}'
                s3: '{{ s3 }}'
                salesforce: '{{ salesforce }}'
                service_now: '{{ service_now }}'
                zendesk: '{{ zendesk }}'
              source_fields:
                - '{{ source_fields[0] }}'
              destination_field: '{{ destination_field }}'
              task_type: '{{ task_type }}'
              task_properties:
                - operator_property_key: '{{ operator_property_key }}'
                  property: '{{ property }}'
          trigger_config:
            trigger_type: '{{ trigger_type }}'
            trigger_properties:
              scheduled:
                schedule_expression: '{{ schedule_expression }}'
                data_pull_mode: '{{ data_pull_mode }}'
                schedule_start_time: null
                schedule_end_time: null
                timezone: '{{ timezone }}'
                schedule_offset: '{{ schedule_offset }}'
                first_execution_from: null
          source_flow_config:
            connector_type: '{{ connector_type }}'
            connector_profile_name: '{{ connector_profile_name }}'
            incremental_pull_config:
              datetime_type_field_name: '{{ datetime_type_field_name }}'
            source_connector_properties:
              marketo:
                object: '{{ object }}'
              s3:
                bucket_name: '{{ bucket_name }}'
                bucket_prefix: '{{ bucket_prefix }}'
              salesforce:
                object: null
                enable_dynamic_field_update: '{{ enable_dynamic_field_update }}'
                include_deleted_records: '{{ include_deleted_records }}'
              service_now:
                object: null
              zendesk:
                object: null
      - name: object_type_name
        value: '{{ object_type_name }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: object_type_names
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: event_trigger_names
        value:
          - '{{ event_trigger_names[0] }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>integration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.customerprofiles.integrations
SET PatchDocument = string('{{ {
    "FlowDefinition": flow_definition,
    "ObjectTypeName": object_type_name,
    "Tags": tags,
    "ObjectTypeNames": object_type_names,
    "EventTriggerNames": event_trigger_names
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ domain_name }}|{{ uri }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.customerprofiles.integrations
WHERE Identifier = '{{ domain_name }}|{{ uri }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>integrations</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
profile:GetIntegration,
profile:PutIntegration,
appflow:CreateFlow,
app-integrations:CreateEventIntegrationAssociation,
app-integrations:GetEventIntegration,
connect:DescribeInstance,
ds:DescribeDirectories,
events:ListTargetsByRule,
events:PutRule,
events:PutTargets,
events:PutEvents,
profile:TagResource
```

</TabItem>
<TabItem value="read">

```json
profile:GetIntegration
```

</TabItem>
<TabItem value="delete">

```json
profile:DeleteIntegration,
appflow:DeleteFlow,
app-integrations:ListEventIntegrationAssociations,
app-integrations:DeleteEventIntegrationAssociation,
events:RemoveTargets,
events:ListTargetsByRule,
events:DeleteRule
```

</TabItem>
<TabItem value="update">

```json
profile:PutIntegration,
profile:GetIntegration,
appflow:CreateFlow,
app-integrations:GetEventIntegration,
app-integrations:CreateEventIntegrationAssociation,
app-integrations:ListEventIntegrationAssociations,
app-integrations:DeleteEventIntegrationAssociation,
events:ListTargetsByRule,
events:RemoveTargets,
events:DeleteRule,
events:PutRule,
events:PutTargets,
events:PutEvents,
profile:UntagResource,
profile:TagResource,
connect:DescribeInstance,
ds:DescribeDirectories
```

</TabItem>
<TabItem value="list">

```json
profile:ListIntegrations
```

</TabItem>
</Tabs>