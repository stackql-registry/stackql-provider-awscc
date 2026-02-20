---
title: target_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - target_groups
  - elasticloadbalancingv2
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

Creates, updates, deletes or gets a <code>target_group</code> resource or lists <code>target_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>target_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::ElasticLoadBalancingV2::TargetGroup</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.elasticloadbalancingv2.target_groups" /></td></tr>
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
    "name": "ip_address_type",
    "type": "string",
    "description": "The type of IP address used for this target group. The possible values are ipv4 and ipv6."
  },
  {
    "name": "target_group_arn",
    "type": "string",
    "description": "The ARN of the Target Group"
  },
  {
    "name": "health_check_interval_seconds",
    "type": "integer",
    "description": "The approximate amount of time, in seconds, between health checks of an individual target."
  },
  {
    "name": "load_balancer_arns",
    "type": "array",
    "description": "The Amazon Resource Names (ARNs) of the load balancers that route traffic to this target group."
  },
  {
    "name": "matcher",
    "type": "object",
    "description": "&#91;HTTP/HTTPS health checks&#93; The HTTP or gRPC codes to use when checking for a successful response from a target.",
    "children": [
      {
        "name": "grpc_code",
        "type": "string",
        "description": "You can specify values between 0 and 99. You can specify multiple values, or a range of values. The default value is 12."
      },
      {
        "name": "http_code",
        "type": "string",
        "description": "For Application Load Balancers, you can specify values between 200 and 499, and the default value is 200. You can specify multiple values or a range of values."
      }
    ]
  },
  {
    "name": "health_check_path",
    "type": "string",
    "description": "&#91;HTTP/HTTPS health checks&#93; The destination for health checks on the targets. &#91;HTTP1 or HTTP2 protocol version&#93; The ping path. The default is /. &#91;GRPC protocol version&#93; The path of a custom health check method with the format /package.service/method. The default is /AWS.ALB/healthcheck."
  },
  {
    "name": "port",
    "type": "integer",
    "description": "The port on which the targets receive traffic. This port is used unless you specify a port override when registering the target. If the target is a Lambda function, this parameter does not apply. If the protocol is GENEVE, the supported port is 6081."
  },
  {
    "name": "targets",
    "type": "array",
    "description": "The targets.",
    "children": [
      {
        "name": "port",
        "type": "integer",
        "description": "The port on which the target is listening. If the target group protocol is GENEVE, the supported port is 6081. If the target type is alb, the targeted Application Load Balancer must have at least one listener whose port matches the target group port. Not used if the target is a Lambda function."
      },
      {
        "name": "availability_zone",
        "type": "string",
        "description": "An Availability Zone or all. This determines whether the target receives traffic from the load balancer nodes in the specified Availability Zone or from all enabled Availability Zones for the load balancer."
      },
      {
        "name": "id",
        "type": "string",
        "description": "The ID of the target. If the target type of the target group is instance, specify an instance ID. If the target type is ip, specify an IP address. If the target type is lambda, specify the ARN of the Lambda function. If the target type is alb, specify the ARN of the Application Load Balancer target."
      }
    ]
  },
  {
    "name": "health_check_enabled",
    "type": "boolean",
    "description": "Indicates whether health checks are enabled. If the target type is lambda, health checks are disabled by default but can be enabled. If the target type is instance, ip, or alb, health checks are always enabled and cannot be disabled."
  },
  {
    "name": "protocol_version",
    "type": "string",
    "description": "&#91;HTTP/HTTPS protocol&#93; The protocol version. The possible values are GRPC, HTTP1, and HTTP2."
  },
  {
    "name": "unhealthy_threshold_count",
    "type": "integer",
    "description": "The number of consecutive health check failures required before considering a target unhealthy."
  },
  {
    "name": "health_check_timeout_seconds",
    "type": "integer",
    "description": "The amount of time, in seconds, during which no response from a target means a failed health check."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the target group."
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": "The identifier of the virtual private cloud (VPC). If the target is a Lambda function, this parameter does not apply."
  },
  {
    "name": "target_group_full_name",
    "type": "string",
    "description": "The full name of the target group."
  },
  {
    "name": "healthy_threshold_count",
    "type": "integer",
    "description": "The number of consecutive health checks successes required before considering an unhealthy target healthy."
  },
  {
    "name": "health_check_protocol",
    "type": "string",
    "description": "The protocol the load balancer uses when performing health checks on targets."
  },
  {
    "name": "target_group_attributes",
    "type": "array",
    "description": "The attributes.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The name of the attribute."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The value of the attribute."
      }
    ]
  },
  {
    "name": "target_type",
    "type": "string",
    "description": "The type of target that you must specify when registering targets with this target group. You can't specify targets for a target group using more than one target type."
  },
  {
    "name": "health_check_port",
    "type": "string",
    "description": "The port the load balancer uses when performing health checks on targets."
  },
  {
    "name": "protocol",
    "type": "string",
    "description": "The protocol to use for routing traffic to the targets."
  },
  {
    "name": "target_group_name",
    "type": "string",
    "description": "The name of the target group."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
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
    "name": "target_group_arn",
    "type": "string",
    "description": "The ARN of the Target Group"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html"><code>AWS::ElasticLoadBalancingV2::TargetGroup</code></a>.

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
    <td><code>target_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>target_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>target_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>target_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>target_groups</code></td>
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

Gets all properties from an individual <code>target_group</code>.
```sql
SELECT
region,
ip_address_type,
target_group_arn,
health_check_interval_seconds,
load_balancer_arns,
matcher,
health_check_path,
port,
targets,
health_check_enabled,
protocol_version,
unhealthy_threshold_count,
health_check_timeout_seconds,
name,
vpc_id,
target_group_full_name,
healthy_threshold_count,
health_check_protocol,
target_group_attributes,
target_type,
health_check_port,
protocol,
target_group_name,
tags
FROM awscc.elasticloadbalancingv2.target_groups
WHERE region = 'us-east-1' AND Identifier = '<TargetGroupArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>target_groups</code> in a region.
```sql
SELECT
region,
target_group_arn
FROM awscc.elasticloadbalancingv2.target_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>target_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.elasticloadbalancingv2.target_groups (
 IpAddressType,
 HealthCheckIntervalSeconds,
 Matcher,
 HealthCheckPath,
 Port,
 Targets,
 HealthCheckEnabled,
 ProtocolVersion,
 UnhealthyThresholdCount,
 HealthCheckTimeoutSeconds,
 Name,
 VpcId,
 HealthyThresholdCount,
 HealthCheckProtocol,
 TargetGroupAttributes,
 TargetType,
 HealthCheckPort,
 Protocol,
 Tags,
 region
)
SELECT 
'{{ IpAddressType }}',
 '{{ HealthCheckIntervalSeconds }}',
 '{{ Matcher }}',
 '{{ HealthCheckPath }}',
 '{{ Port }}',
 '{{ Targets }}',
 '{{ HealthCheckEnabled }}',
 '{{ ProtocolVersion }}',
 '{{ UnhealthyThresholdCount }}',
 '{{ HealthCheckTimeoutSeconds }}',
 '{{ Name }}',
 '{{ VpcId }}',
 '{{ HealthyThresholdCount }}',
 '{{ HealthCheckProtocol }}',
 '{{ TargetGroupAttributes }}',
 '{{ TargetType }}',
 '{{ HealthCheckPort }}',
 '{{ Protocol }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.elasticloadbalancingv2.target_groups (
 IpAddressType,
 HealthCheckIntervalSeconds,
 Matcher,
 HealthCheckPath,
 Port,
 Targets,
 HealthCheckEnabled,
 ProtocolVersion,
 UnhealthyThresholdCount,
 HealthCheckTimeoutSeconds,
 Name,
 VpcId,
 HealthyThresholdCount,
 HealthCheckProtocol,
 TargetGroupAttributes,
 TargetType,
 HealthCheckPort,
 Protocol,
 Tags,
 region
)
SELECT 
 '{{ IpAddressType }}',
 '{{ HealthCheckIntervalSeconds }}',
 '{{ Matcher }}',
 '{{ HealthCheckPath }}',
 '{{ Port }}',
 '{{ Targets }}',
 '{{ HealthCheckEnabled }}',
 '{{ ProtocolVersion }}',
 '{{ UnhealthyThresholdCount }}',
 '{{ HealthCheckTimeoutSeconds }}',
 '{{ Name }}',
 '{{ VpcId }}',
 '{{ HealthyThresholdCount }}',
 '{{ HealthCheckProtocol }}',
 '{{ TargetGroupAttributes }}',
 '{{ TargetType }}',
 '{{ HealthCheckPort }}',
 '{{ Protocol }}',
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
  - name: target_group
    props:
      - name: IpAddressType
        value: '{{ IpAddressType }}'
      - name: HealthCheckIntervalSeconds
        value: '{{ HealthCheckIntervalSeconds }}'
      - name: Matcher
        value:
          GrpcCode: '{{ GrpcCode }}'
          HttpCode: '{{ HttpCode }}'
      - name: HealthCheckPath
        value: '{{ HealthCheckPath }}'
      - name: Port
        value: '{{ Port }}'
      - name: Targets
        value:
          - Port: '{{ Port }}'
            AvailabilityZone: '{{ AvailabilityZone }}'
            Id: '{{ Id }}'
      - name: HealthCheckEnabled
        value: '{{ HealthCheckEnabled }}'
      - name: ProtocolVersion
        value: '{{ ProtocolVersion }}'
      - name: UnhealthyThresholdCount
        value: '{{ UnhealthyThresholdCount }}'
      - name: HealthCheckTimeoutSeconds
        value: '{{ HealthCheckTimeoutSeconds }}'
      - name: Name
        value: '{{ Name }}'
      - name: VpcId
        value: '{{ VpcId }}'
      - name: HealthyThresholdCount
        value: '{{ HealthyThresholdCount }}'
      - name: HealthCheckProtocol
        value: '{{ HealthCheckProtocol }}'
      - name: TargetGroupAttributes
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: TargetType
        value: '{{ TargetType }}'
      - name: HealthCheckPort
        value: '{{ HealthCheckPort }}'
      - name: Protocol
        value: '{{ Protocol }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.elasticloadbalancingv2.target_groups
SET PatchDocument = string('{{ {
    "HealthCheckIntervalSeconds": health_check_interval_seconds,
    "Matcher": matcher,
    "HealthCheckPath": health_check_path,
    "Targets": targets,
    "HealthCheckEnabled": health_check_enabled,
    "UnhealthyThresholdCount": unhealthy_threshold_count,
    "HealthCheckTimeoutSeconds": health_check_timeout_seconds,
    "HealthyThresholdCount": healthy_threshold_count,
    "HealthCheckProtocol": health_check_protocol,
    "TargetGroupAttributes": target_group_attributes,
    "HealthCheckPort": health_check_port,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<TargetGroupArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.elasticloadbalancingv2.target_groups
WHERE Identifier = '<TargetGroupArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>target_groups</code> resource, the following permissions are required:

### Read
```json
elasticloadbalancing:DescribeTargetGroups,
elasticloadbalancing:DescribeTargetGroupAttributes,
elasticloadbalancing:DescribeTargetHealth,
elasticloadbalancing:DescribeTags
```

### Create
```json
elasticloadbalancing:CreateTargetGroup,
elasticloadbalancing:DescribeTargetGroups,
elasticloadbalancing:RegisterTargets,
elasticloadbalancing:ModifyTargetGroupAttributes,
elasticloadbalancing:DescribeTargetHealth,
elasticloadbalancing:AddTags
```

### Update
```json
elasticloadbalancing:DescribeTargetGroups,
elasticloadbalancing:ModifyTargetGroup,
elasticloadbalancing:ModifyTargetGroupAttributes,
elasticloadbalancing:RegisterTargets,
elasticloadbalancing:DescribeTargetHealth,
elasticloadbalancing:DeregisterTargets,
elasticloadbalancing:AddTags,
elasticloadbalancing:RemoveTags
```

### List
```json
elasticloadbalancing:DescribeTargetGroups
```

### Delete
```json
elasticloadbalancing:DeleteTargetGroup,
elasticloadbalancing:DescribeTargetGroups
```
