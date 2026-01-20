---
title: load_balancers
hide_title: false
hide_table_of_contents: false
keywords:
  - load_balancers
  - lightsail
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

Creates, updates, deletes or gets a <code>load_balancer</code> resource or lists <code>load_balancers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>load_balancers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Lightsail::LoadBalancer</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lightsail.load_balancers" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "load_balancer_name",
    "type": "string",
    "description": "The name of your load balancer."
  },
  {
    "name": "load_balancer_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "instance_port",
    "type": "integer",
    "description": "The instance port where you're creating your load balancer."
  },
  {
    "name": "ip_address_type",
    "type": "string",
    "description": "The IP address type for the load balancer. The possible values are ipv4 for IPv4 only, and dualstack for IPv4 and IPv6. The default value is dualstack."
  },
  {
    "name": "attached_instances",
    "type": "array",
    "description": "The names of the instances attached to the load balancer."
  },
  {
    "name": "health_check_path",
    "type": "string",
    "description": "The path you provided to perform the load balancer health check. If you didn't specify a health check path, Lightsail uses the root path of your website (e.g., \"/\")."
  },
  {
    "name": "session_stickiness_enabled",
    "type": "boolean",
    "description": "Configuration option to enable session stickiness."
  },
  {
    "name": "session_stickiness_lb_cookie_duration_seconds",
    "type": "string",
    "description": "Configuration option to adjust session stickiness cookie duration parameter."
  },
  {
    "name": "tls_policy_name",
    "type": "string",
    "description": "The name of the TLS policy to apply to the load balancer."
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancer.html"><code>AWS::Lightsail::LoadBalancer</code></a>.

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
    <td><CopyableCode code="LoadBalancerName, InstancePort, region" /></td>
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

Gets all properties from an individual <code>load_balancer</code>.
```sql
SELECT
region,
load_balancer_name,
load_balancer_arn,
instance_port,
ip_address_type,
attached_instances,
health_check_path,
session_stickiness_enabled,
session_stickiness_lb_cookie_duration_seconds,
tls_policy_name,
tags
FROM awscc.lightsail.load_balancers
WHERE region = 'us-east-1' AND data__Identifier = '<LoadBalancerName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>load_balancer</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.lightsail.load_balancers (
 LoadBalancerName,
 InstancePort,
 region
)
SELECT 
'{{ LoadBalancerName }}',
 '{{ InstancePort }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.lightsail.load_balancers (
 LoadBalancerName,
 InstancePort,
 IpAddressType,
 AttachedInstances,
 HealthCheckPath,
 SessionStickinessEnabled,
 SessionStickinessLBCookieDurationSeconds,
 TlsPolicyName,
 Tags,
 region
)
SELECT 
 '{{ LoadBalancerName }}',
 '{{ InstancePort }}',
 '{{ IpAddressType }}',
 '{{ AttachedInstances }}',
 '{{ HealthCheckPath }}',
 '{{ SessionStickinessEnabled }}',
 '{{ SessionStickinessLBCookieDurationSeconds }}',
 '{{ TlsPolicyName }}',
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
  - name: load_balancer
    props:
      - name: LoadBalancerName
        value: '{{ LoadBalancerName }}'
      - name: InstancePort
        value: '{{ InstancePort }}'
      - name: IpAddressType
        value: '{{ IpAddressType }}'
      - name: AttachedInstances
        value:
          - '{{ AttachedInstances[0] }}'
      - name: HealthCheckPath
        value: '{{ HealthCheckPath }}'
      - name: SessionStickinessEnabled
        value: '{{ SessionStickinessEnabled }}'
      - name: SessionStickinessLBCookieDurationSeconds
        value: '{{ SessionStickinessLBCookieDurationSeconds }}'
      - name: TlsPolicyName
        value: '{{ TlsPolicyName }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lightsail.load_balancers
WHERE data__Identifier = '<LoadBalancerName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>load_balancers</code> resource, the following permissions are required:

### Create
```json
lightsail:CreateLoadBalancer,
lightsail:GetLoadBalancer,
lightsail:GetLoadBalancers,
lightsail:GetInstance,
lightsail:AttachInstancesToLoadBalancer,
lightsail:DetachInstancesFromLoadBalancer,
lightsail:UpdateLoadBalancerAttribute,
lightsail:TagResource,
lightsail:UntagResource
```

### Read
```json
lightsail:GetLoadBalancer,
lightsail:GetLoadBalancers
```

### Update
```json
lightsail:GetLoadBalancer,
lightsail:GetLoadBalancers,
lightsail:GetInstance,
lightsail:AttachInstancesToLoadBalancer,
lightsail:DetachInstancesFromLoadBalancer,
lightsail:UpdateLoadBalancerAttribute,
lightsail:TagResource,
lightsail:UntagResource
```

### Delete
```json
lightsail:DeleteLoadBalancer,
lightsail:GetLoadBalancer,
lightsail:GetLoadBalancers
```

### List
```json
lightsail:GetLoadBalancers
```
