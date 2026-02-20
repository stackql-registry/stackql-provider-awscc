---
title: dataflow_endpoint_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - dataflow_endpoint_groups
  - groundstation
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

Creates, updates, deletes or gets a <code>dataflow_endpoint_group</code> resource or lists <code>dataflow_endpoint_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>dataflow_endpoint_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>AWS Ground Station DataflowEndpointGroup schema for CloudFormation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.groundstation.dataflow_endpoint_groups" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "endpoint_details",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "security_details",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "subnet_ids",
            "type": "array",
            "description": ""
          },
          {
            "name": "security_group_ids",
            "type": "array",
            "description": ""
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "endpoint",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": ""
          },
          {
            "name": "address",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "name",
                "type": "string",
                "description": ""
              },
              {
                "name": "port",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "mtu",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "aws_ground_station_agent_endpoint",
        "type": "object",
        "description": "Information about AwsGroundStationAgentEndpoint.",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": ""
          },
          {
            "name": "egress_address",
            "type": "object",
            "description": "Egress address of AgentEndpoint with an optional mtu.",
            "children": [
              {
                "name": "socket_address",
                "type": "object",
                "description": ""
              },
              {
                "name": "mtu",
                "type": "integer",
                "description": "Maximum transmission unit (MTU) size in bytes of a dataflow endpoint."
              }
            ]
          },
          {
            "name": "ingress_address",
            "type": "object",
            "description": "Ingress address of AgentEndpoint with a port range and an optional mtu.",
            "children": [
              {
                "name": "socket_address",
                "type": "object",
                "description": "A socket address with a port range."
              },
              {
                "name": "mtu",
                "type": "integer",
                "description": "Maximum transmission unit (MTU) size in bytes of a dataflow endpoint."
              }
            ]
          },
          {
            "name": "agent_status",
            "type": "string",
            "description": "The status of AgentEndpoint."
          },
          {
            "name": "audit_results",
            "type": "string",
            "description": "The results of the audit."
          }
        ]
      }
    ]
  },
  {
    "name": "contact_pre_pass_duration_seconds",
    "type": "integer",
    "description": "Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a PREPASS state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the PREPASS state."
  },
  {
    "name": "contact_post_pass_duration_seconds",
    "type": "integer",
    "description": "Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a POSTPASS state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the POSTPASS state."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html"><code>AWS::GroundStation::DataflowEndpointGroup</code></a>.

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
    <td><code>dataflow_endpoint_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="EndpointDetails, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>dataflow_endpoint_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>dataflow_endpoint_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>dataflow_endpoint_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>dataflow_endpoint_groups</code></td>
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

Gets all properties from an individual <code>dataflow_endpoint_group</code>.
```sql
SELECT
region,
id,
arn,
endpoint_details,
contact_pre_pass_duration_seconds,
contact_post_pass_duration_seconds,
tags
FROM awscc.groundstation.dataflow_endpoint_groups
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>dataflow_endpoint_groups</code> in a region.
```sql
SELECT
region,
id
FROM awscc.groundstation.dataflow_endpoint_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>dataflow_endpoint_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.groundstation.dataflow_endpoint_groups (
 EndpointDetails,
 region
)
SELECT 
'{{ EndpointDetails }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.groundstation.dataflow_endpoint_groups (
 EndpointDetails,
 ContactPrePassDurationSeconds,
 ContactPostPassDurationSeconds,
 Tags,
 region
)
SELECT 
 '{{ EndpointDetails }}',
 '{{ ContactPrePassDurationSeconds }}',
 '{{ ContactPostPassDurationSeconds }}',
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
  - name: dataflow_endpoint_group
    props:
      - name: EndpointDetails
        value:
          - SecurityDetails:
              SubnetIds:
                - '{{ SubnetIds[0] }}'
              SecurityGroupIds:
                - '{{ SecurityGroupIds[0] }}'
              RoleArn: '{{ RoleArn }}'
            Endpoint:
              Name: '{{ Name }}'
              Address:
                Name: '{{ Name }}'
                Port: '{{ Port }}'
              Mtu: '{{ Mtu }}'
            AwsGroundStationAgentEndpoint:
              Name: '{{ Name }}'
              EgressAddress:
                SocketAddress: null
                Mtu: '{{ Mtu }}'
              IngressAddress:
                SocketAddress:
                  Name: '{{ Name }}'
                  PortRange:
                    Minimum: '{{ Minimum }}'
                    Maximum: '{{ Maximum }}'
                Mtu: '{{ Mtu }}'
              AgentStatus: '{{ AgentStatus }}'
              AuditResults: '{{ AuditResults }}'
      - name: ContactPrePassDurationSeconds
        value: '{{ ContactPrePassDurationSeconds }}'
      - name: ContactPostPassDurationSeconds
        value: '{{ ContactPostPassDurationSeconds }}'
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
UPDATE awscc.groundstation.dataflow_endpoint_groups
SET data__PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.groundstation.dataflow_endpoint_groups
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>dataflow_endpoint_groups</code> resource, the following permissions are required:

### Create
```json
groundstation:CreateDataflowEndpointGroup,
groundstation:GetDataflowEndpointGroup,
groundstation:TagResource,
iam:PassRole,
ec2:describeAddresses,
ec2:describeNetworkInterfaces,
iam:createServiceLinkedRole
```

### Update
```json
groundstation:ListTagsForResource,
groundstation:TagResource,
groundstation:UntagResource
```

### Read
```json
groundstation:GetDataflowEndpointGroup,
groundstation:ListTagsForResource
```

### Delete
```json
groundstation:DeleteDataflowEndpointGroup,
groundstation:GetDataflowEndpointGroup
```

### List
```json
groundstation:ListDataflowEndpointGroups
```
