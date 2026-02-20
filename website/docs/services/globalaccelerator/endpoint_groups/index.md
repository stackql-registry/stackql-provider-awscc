---
title: endpoint_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoint_groups
  - globalaccelerator
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

Creates, updates, deletes or gets an <code>endpoint_group</code> resource or lists <code>endpoint_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>endpoint_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::GlobalAccelerator::EndpointGroup</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.globalaccelerator.endpoint_groups" /></td></tr>
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
    "name": "listener_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the listener"
  },
  {
    "name": "endpoint_group_region",
    "type": "string",
    "description": "The name of the AWS Region where the endpoint group is located"
  },
  {
    "name": "endpoint_configurations",
    "type": "array",
    "description": "The list of endpoint objects.",
    "children": [
      {
        "name": "endpoint_id",
        "type": "string",
        "description": "Id of the endpoint. For Network/Application Load Balancer this value is the ARN. For EIP, this value is the allocation ID. For EC2 instances, this is the EC2 instance ID"
      },
      {
        "name": "attachment_arn",
        "type": "string",
        "description": "Attachment ARN that provides access control to the cross account endpoint. Not required for resources hosted in the same account as the endpoint group."
      },
      {
        "name": "weight",
        "type": "integer",
        "description": "The weight for the endpoint."
      },
      {
        "name": "client_ip_preservation_enabled",
        "type": "boolean",
        "description": "true if client ip should be preserved"
      }
    ]
  },
  {
    "name": "traffic_dial_percentage",
    "type": "number",
    "description": "The percentage of traffic to sent to an AWS Region"
  },
  {
    "name": "health_check_port",
    "type": "integer",
    "description": "The port that AWS Global Accelerator uses to check the health of endpoints in this endpoint group."
  },
  {
    "name": "health_check_protocol",
    "type": "string",
    "description": "The protocol that AWS Global Accelerator uses to check the health of endpoints in this endpoint group."
  },
  {
    "name": "health_check_path",
    "type": "string",
    "description": ""
  },
  {
    "name": "health_check_interval_seconds",
    "type": "integer",
    "description": "The time in seconds between each health check for an endpoint. Must be a value of 10 or 30"
  },
  {
    "name": "threshold_count",
    "type": "integer",
    "description": "The number of consecutive health checks required to set the state of the endpoint to unhealthy."
  },
  {
    "name": "endpoint_group_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the endpoint group"
  },
  {
    "name": "port_overrides",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "listener_port",
        "type": "integer",
        "description": "A network port number"
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
    "name": "endpoint_group_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the endpoint group"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-endpointgroup.html"><code>AWS::GlobalAccelerator::EndpointGroup</code></a>.

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
    <td><code>endpoint_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ListenerArn, EndpointGroupRegion, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>endpoint_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>endpoint_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>endpoint_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>endpoint_groups</code></td>
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

Gets all properties from an individual <code>endpoint_group</code>.
```sql
SELECT
region,
listener_arn,
endpoint_group_region,
endpoint_configurations,
traffic_dial_percentage,
health_check_port,
health_check_protocol,
health_check_path,
health_check_interval_seconds,
threshold_count,
endpoint_group_arn,
port_overrides
FROM awscc.globalaccelerator.endpoint_groups
WHERE Identifier = '<EndpointGroupArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>endpoint_groups</code> in a region.
```sql
SELECT
region,
endpoint_group_arn
FROM awscc.globalaccelerator.endpoint_groups_list_only
;
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>endpoint_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.globalaccelerator.endpoint_groups (
 ListenerArn,
 EndpointGroupRegion,
 region
)
SELECT 
'{{ ListenerArn }}',
 '{{ EndpointGroupRegion }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.globalaccelerator.endpoint_groups (
 ListenerArn,
 EndpointGroupRegion,
 EndpointConfigurations,
 TrafficDialPercentage,
 HealthCheckPort,
 HealthCheckProtocol,
 HealthCheckPath,
 HealthCheckIntervalSeconds,
 ThresholdCount,
 PortOverrides,
 region
)
SELECT 
 '{{ ListenerArn }}',
 '{{ EndpointGroupRegion }}',
 '{{ EndpointConfigurations }}',
 '{{ TrafficDialPercentage }}',
 '{{ HealthCheckPort }}',
 '{{ HealthCheckProtocol }}',
 '{{ HealthCheckPath }}',
 '{{ HealthCheckIntervalSeconds }}',
 '{{ ThresholdCount }}',
 '{{ PortOverrides }}',
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
  - name: endpoint_group
    props:
      - name: ListenerArn
        value: '{{ ListenerArn }}'
      - name: EndpointGroupRegion
        value: '{{ EndpointGroupRegion }}'
      - name: EndpointConfigurations
        value:
          - EndpointId: '{{ EndpointId }}'
            AttachmentArn: '{{ AttachmentArn }}'
            Weight: '{{ Weight }}'
            ClientIPPreservationEnabled: '{{ ClientIPPreservationEnabled }}'
      - name: TrafficDialPercentage
        value: null
      - name: HealthCheckPort
        value: '{{ HealthCheckPort }}'
      - name: HealthCheckProtocol
        value: '{{ HealthCheckProtocol }}'
      - name: HealthCheckPath
        value: '{{ HealthCheckPath }}'
      - name: HealthCheckIntervalSeconds
        value: '{{ HealthCheckIntervalSeconds }}'
      - name: ThresholdCount
        value: '{{ ThresholdCount }}'
      - name: PortOverrides
        value:
          - ListenerPort: '{{ ListenerPort }}'
            EndpointPort: null

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.globalaccelerator.endpoint_groups
SET PatchDocument = string('{{ {
    "EndpointConfigurations": endpoint_configurations,
    "TrafficDialPercentage": traffic_dial_percentage,
    "HealthCheckPort": health_check_port,
    "HealthCheckProtocol": health_check_protocol,
    "HealthCheckPath": health_check_path,
    "HealthCheckIntervalSeconds": health_check_interval_seconds,
    "ThresholdCount": threshold_count,
    "PortOverrides": port_overrides
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<EndpointGroupArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.globalaccelerator.endpoint_groups
WHERE Identifier = '<EndpointGroupArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>endpoint_groups</code> resource, the following permissions are required:

### Create
```json
globalaccelerator:CreateEndpointGroup,
globalaccelerator:DescribeEndpointGroup,
globalaccelerator:DescribeAccelerator,
globalaccelerator:DescribeListener,
globalaccelerator:ListAccelerators,
globalaccelerator:ListListeners
```

### Read
```json
globalaccelerator:DescribeEndpointGroup
```

### Update
```json
globalaccelerator:UpdateEndpointGroup,
globalaccelerator:DescribeEndpointGroup,
globalaccelerator:DescribeListener,
globalaccelerator:DescribeAccelerator
```

### Delete
```json
globalaccelerator:DeleteEndpointGroup,
globalaccelerator:DescribeEndpointGroup,
globalaccelerator:DescribeAccelerator
```

### List
```json
globalaccelerator:ListEndpointGroups
```
