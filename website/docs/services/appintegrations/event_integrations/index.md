---
title: event_integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - event_integrations
  - appintegrations
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

Creates, updates, deletes or gets an <code>event_integration</code> resource or lists <code>event_integrations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>event_integrations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::AppIntegrations::EventIntegration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.appintegrations.event_integrations" /></td></tr>
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
    "name": "description",
    "type": "string",
    "description": "The event integration description."
  },
  {
    "name": "event_integration_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the event integration."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the event integration."
  },
  {
    "name": "event_bridge_bus",
    "type": "string",
    "description": "The Amazon Eventbridge bus for the event integration."
  },
  {
    "name": "event_filter",
    "type": "object",
    "description": "The EventFilter (source) associated with the event integration.",
    "children": [
      {
        "name": "source",
        "type": "string",
        "description": "The source of the events."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags (keys and values) associated with the event integration.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A key to identify the tag."
      },
      {
        "name": "value",
        "type": "string",
        "description": "Corresponding tag value for the key."
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
    "name": "name",
    "type": "string",
    "description": "The name of the event integration."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-eventintegration.html"><code>AWS::AppIntegrations::EventIntegration</code></a>.

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
    <td><code>event_integrations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, EventBridgeBus, EventFilter, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>event_integrations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>event_integrations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>event_integrations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>event_integrations</code></td>
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

Gets all properties from an individual <code>event_integration</code>.
```sql
SELECT
region,
description,
event_integration_arn,
name,
event_bridge_bus,
event_filter,
tags
FROM awscc.appintegrations.event_integrations
WHERE region = 'us-east-1' AND Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>event_integrations</code> in a region.
```sql
SELECT
region,
name
FROM awscc.appintegrations.event_integrations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>event_integration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.appintegrations.event_integrations (
 Name,
 EventBridgeBus,
 EventFilter,
 region
)
SELECT 
'{{ Name }}',
 '{{ EventBridgeBus }}',
 '{{ EventFilter }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.appintegrations.event_integrations (
 Description,
 Name,
 EventBridgeBus,
 EventFilter,
 Tags,
 region
)
SELECT 
 '{{ Description }}',
 '{{ Name }}',
 '{{ EventBridgeBus }}',
 '{{ EventFilter }}',
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
  - name: event_integration
    props:
      - name: Description
        value: '{{ Description }}'
      - name: Name
        value: '{{ Name }}'
      - name: EventBridgeBus
        value: '{{ EventBridgeBus }}'
      - name: EventFilter
        value:
          Source: '{{ Source }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.appintegrations.event_integrations
SET PatchDocument = string('{{ {
    "Description": description,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.appintegrations.event_integrations
WHERE Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>event_integrations</code> resource, the following permissions are required:

### Create
```json
app-integrations:CreateEventIntegration,
app-integrations:TagResource
```

### Read
```json
app-integrations:GetEventIntegration,
app-integrations:ListTagsForResource
```

### List
```json
app-integrations:ListEventIntegrations
```

### Update
```json
app-integrations:GetEventIntegration,
app-integrations:UpdateEventIntegration,
app-integrations:TagResource,
app-integrations:UntagResource
```

### Delete
```json
app-integrations:DeleteEventIntegration
```
