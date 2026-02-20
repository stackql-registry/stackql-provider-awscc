---
title: endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoints
  - events
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

Creates, updates, deletes or gets an <code>endpoint</code> resource or lists <code>endpoints</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>endpoints</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Events::Endpoint.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.events.endpoints" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "routing_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "failover_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "primary",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "health_check",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "secondary",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "route",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "replication_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "state",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "event_buses",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "event_bus_arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "endpoint_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "endpoint_url",
    "type": "string",
    "description": ""
  },
  {
    "name": "state",
    "type": "string",
    "description": ""
  },
  {
    "name": "state_reason",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html"><code>AWS::Events::Endpoint</code></a>.

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
    <td><code>endpoints</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RoutingConfig, EventBuses, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>endpoints</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>endpoints</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>endpoints_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>endpoints</code></td>
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

Gets all properties from an individual <code>endpoint</code>.
```sql
SELECT
region,
name,
arn,
role_arn,
description,
routing_config,
replication_config,
event_buses,
endpoint_id,
endpoint_url,
state,
state_reason
FROM awscc.events.endpoints
WHERE region = 'us-east-1' AND Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>endpoints</code> in a region.
```sql
SELECT
region,
name
FROM awscc.events.endpoints_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>endpoint</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.events.endpoints (
 RoutingConfig,
 EventBuses,
 region
)
SELECT 
'{{ RoutingConfig }}',
 '{{ EventBuses }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.events.endpoints (
 Name,
 RoleArn,
 Description,
 RoutingConfig,
 ReplicationConfig,
 EventBuses,
 region
)
SELECT 
 '{{ Name }}',
 '{{ RoleArn }}',
 '{{ Description }}',
 '{{ RoutingConfig }}',
 '{{ ReplicationConfig }}',
 '{{ EventBuses }}',
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
  - name: endpoint
    props:
      - name: Name
        value: '{{ Name }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: Description
        value: '{{ Description }}'
      - name: RoutingConfig
        value:
          FailoverConfig:
            Primary:
              HealthCheck: '{{ HealthCheck }}'
            Secondary:
              Route: '{{ Route }}'
      - name: ReplicationConfig
        value:
          State: '{{ State }}'
      - name: EventBuses
        value:
          - EventBusArn: '{{ EventBusArn }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.events.endpoints
SET PatchDocument = string('{{ {
    "RoleArn": role_arn,
    "Description": description,
    "RoutingConfig": routing_config,
    "ReplicationConfig": replication_config,
    "EventBuses": event_buses
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.events.endpoints
WHERE Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>endpoints</code> resource, the following permissions are required:

### Create
```json
events:CreateEndpoint,
events:DescribeEndpoint,
route53:GetHealthCheck,
iam:PassRole
```

### Read
```json
events:DescribeEndpoint
```

### Update
```json
events:DescribeEndpoint,
events:UpdateEndpoint,
route53:GetHealthCheck,
iam:PassRole
```

### Delete
```json
events:DeleteEndpoint,
events:DescribeEndpoint
```

### List
```json
events:ListEndpoints
```
