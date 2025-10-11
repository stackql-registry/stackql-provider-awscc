---
title: traffic_mirror_targets
hide_title: false
hide_table_of_contents: false
keywords:
  - traffic_mirror_targets
  - ec2
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

Creates, updates, deletes or gets a <code>traffic_mirror_target</code> resource or lists <code>traffic_mirror_targets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>traffic_mirror_targets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The description of the Traffic Mirror target.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.traffic_mirror_targets" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="network_load_balancer_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the Network Load Balancer that is associated with the target.</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>The description of the Traffic Mirror target.</td></tr>
<tr><td><CopyableCode code="id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="network_interface_id" /></td><td><code>string</code></td><td>The network interface ID that is associated with the target.</td></tr>
<tr><td><CopyableCode code="gateway_load_balancer_endpoint_id" /></td><td><code>string</code></td><td>The ID of the Gateway Load Balancer endpoint.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>The tags to assign to the Traffic Mirror target.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrortarget.html"><code>AWS::EC2::TrafficMirrorTarget</code></a>.

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
    <td><CopyableCode code="region" /></td>
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
Gets all <code>traffic_mirror_targets</code> in a region.
```sql
SELECT
region,
network_load_balancer_arn,
description,
id,
network_interface_id,
gateway_load_balancer_endpoint_id,
tags
FROM awscc.ec2.traffic_mirror_targets
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>traffic_mirror_target</code>.
```sql
SELECT
region,
network_load_balancer_arn,
description,
id,
network_interface_id,
gateway_load_balancer_endpoint_id,
tags
FROM awscc.ec2.traffic_mirror_targets
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>traffic_mirror_target</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.traffic_mirror_targets (
 NetworkLoadBalancerArn,
 Description,
 NetworkInterfaceId,
 GatewayLoadBalancerEndpointId,
 Tags,
 region
)
SELECT 
'{{ NetworkLoadBalancerArn }}',
 '{{ Description }}',
 '{{ NetworkInterfaceId }}',
 '{{ GatewayLoadBalancerEndpointId }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.traffic_mirror_targets (
 NetworkLoadBalancerArn,
 Description,
 NetworkInterfaceId,
 GatewayLoadBalancerEndpointId,
 Tags,
 region
)
SELECT 
 '{{ NetworkLoadBalancerArn }}',
 '{{ Description }}',
 '{{ NetworkInterfaceId }}',
 '{{ GatewayLoadBalancerEndpointId }}',
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
  - name: traffic_mirror_target
    props:
      - name: NetworkLoadBalancerArn
        value: '{{ NetworkLoadBalancerArn }}'
      - name: Description
        value: '{{ Description }}'
      - name: NetworkInterfaceId
        value: '{{ NetworkInterfaceId }}'
      - name: GatewayLoadBalancerEndpointId
        value: '{{ GatewayLoadBalancerEndpointId }}'
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
DELETE FROM awscc.ec2.traffic_mirror_targets
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>traffic_mirror_targets</code> resource, the following permissions are required:

### Create
```json
ec2:CreateTrafficMirrorTarget,
ec2:CreateTags
```

### Read
```json
ec2:DescribeTrafficMirrorTargets,
ec2:DescribeTags
```

### Update
```json
ec2:DescribeTrafficMirrorTargets,
ec2:CreateTags,
ec2:DeleteTags,
ec2:DescribeTags
```

### Delete
```json
ec2:DeleteTrafficMirrorTarget,
ec2:DeleteTags
```

### List
```json
ec2:DescribeTrafficMirrorTargets,
ec2:DescribeTags
```
