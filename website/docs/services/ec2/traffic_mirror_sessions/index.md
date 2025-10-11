---
title: traffic_mirror_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - traffic_mirror_sessions
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

Creates, updates, deletes or gets a <code>traffic_mirror_session</code> resource or lists <code>traffic_mirror_sessions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>traffic_mirror_sessions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::EC2::TrafficMirrorSession</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.traffic_mirror_sessions" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="id" /></td><td><code>string</code></td><td>The ID of a Traffic Mirror session.</td></tr>
<tr><td><CopyableCode code="network_interface_id" /></td><td><code>string</code></td><td>The ID of the source network interface.</td></tr>
<tr><td><CopyableCode code="traffic_mirror_target_id" /></td><td><code>string</code></td><td>The ID of a Traffic Mirror target.</td></tr>
<tr><td><CopyableCode code="traffic_mirror_filter_id" /></td><td><code>string</code></td><td>The ID of a Traffic Mirror filter.</td></tr>
<tr><td><CopyableCode code="packet_length" /></td><td><code>integer</code></td><td>The number of bytes in each packet to mirror.</td></tr>
<tr><td><CopyableCode code="session_number" /></td><td><code>integer</code></td><td>The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.</td></tr>
<tr><td><CopyableCode code="virtual_network_id" /></td><td><code>integer</code></td><td>The VXLAN ID for the Traffic Mirror session.</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>The description of the Traffic Mirror session.</td></tr>
<tr><td><CopyableCode code="owner_id" /></td><td><code>string</code></td><td>The ID of the account that owns the Traffic Mirror session.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>The tags assigned to the Traffic Mirror session.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorsession.html"><code>AWS::EC2::TrafficMirrorSession</code></a>.

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
    <td><CopyableCode code="NetworkInterfaceId, TrafficMirrorFilterId, SessionNumber, TrafficMirrorTargetId, region" /></td>
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
Gets all <code>traffic_mirror_sessions</code> in a region.
```sql
SELECT
region,
id,
network_interface_id,
traffic_mirror_target_id,
traffic_mirror_filter_id,
packet_length,
session_number,
virtual_network_id,
description,
owner_id,
tags
FROM awscc.ec2.traffic_mirror_sessions
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>traffic_mirror_session</code>.
```sql
SELECT
region,
id,
network_interface_id,
traffic_mirror_target_id,
traffic_mirror_filter_id,
packet_length,
session_number,
virtual_network_id,
description,
owner_id,
tags
FROM awscc.ec2.traffic_mirror_sessions
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>traffic_mirror_session</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.traffic_mirror_sessions (
 NetworkInterfaceId,
 TrafficMirrorTargetId,
 TrafficMirrorFilterId,
 SessionNumber,
 region
)
SELECT 
'{{ NetworkInterfaceId }}',
 '{{ TrafficMirrorTargetId }}',
 '{{ TrafficMirrorFilterId }}',
 '{{ SessionNumber }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.traffic_mirror_sessions (
 NetworkInterfaceId,
 TrafficMirrorTargetId,
 TrafficMirrorFilterId,
 PacketLength,
 SessionNumber,
 VirtualNetworkId,
 Description,
 OwnerId,
 Tags,
 region
)
SELECT 
 '{{ NetworkInterfaceId }}',
 '{{ TrafficMirrorTargetId }}',
 '{{ TrafficMirrorFilterId }}',
 '{{ PacketLength }}',
 '{{ SessionNumber }}',
 '{{ VirtualNetworkId }}',
 '{{ Description }}',
 '{{ OwnerId }}',
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
  - name: traffic_mirror_session
    props:
      - name: NetworkInterfaceId
        value: '{{ NetworkInterfaceId }}'
      - name: TrafficMirrorTargetId
        value: '{{ TrafficMirrorTargetId }}'
      - name: TrafficMirrorFilterId
        value: '{{ TrafficMirrorFilterId }}'
      - name: PacketLength
        value: '{{ PacketLength }}'
      - name: SessionNumber
        value: '{{ SessionNumber }}'
      - name: VirtualNetworkId
        value: '{{ VirtualNetworkId }}'
      - name: Description
        value: '{{ Description }}'
      - name: OwnerId
        value: '{{ OwnerId }}'
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
DELETE FROM awscc.ec2.traffic_mirror_sessions
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>traffic_mirror_sessions</code> resource, the following permissions are required:

### Create
```json
ec2:CreateTrafficMirrorSession,
ec2:DescribeTrafficMirrorSessions,
ec2:CreateTags,
ec2:DescribeTags
```

### Read
```json
ec2:DescribeTrafficMirrorSessions,
ec2:DescribeTags
```

### Update
```json
ec2:ModifyTrafficMirrorSession,
ec2:CreateTags,
ec2:DeleteTags,
ec2:DescribeTrafficMirrorSessions,
ec2:DescribeTags
```

### Delete
```json
ec2:DeleteTrafficMirrorSession,
ec2:DeleteTags
```

### List
```json
ec2:DescribeTrafficMirrorSessions,
ec2:DescribeTags
```
