---
title: traffic_mirror_filter_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - traffic_mirror_filter_rules
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
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>traffic_mirror_filter_rule</code> resource or lists <code>traffic_mirror_filter_rules</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>traffic_mirror_filter_rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for for AWS::EC2::TrafficMirrorFilterRule</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.traffic_mirror_filter_rules" /></td></tr>
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
    "name": "destination_port_range",
    "type": "object",
    "description": "The destination port range.",
    "children": [
      {
        "name": "from_port",
        "type": "integer",
        "description": "The first port in the Traffic Mirror port range."
      },
      {
        "name": "to_port",
        "type": "integer",
        "description": "The last port in the Traffic Mirror port range."
      }
    ]
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the Traffic Mirror Filter rule."
  },
  {
    "name": "rule_action",
    "type": "string",
    "description": "The action to take on the filtered traffic (accept/reject)."
  },
  {
    "name": "source_cidr_block",
    "type": "string",
    "description": "The source CIDR block to assign to the Traffic Mirror Filter rule."
  },
  {
    "name": "rule_number",
    "type": "integer",
    "description": "The number of the Traffic Mirror rule."
  },
  {
    "name": "destination_cidr_block",
    "type": "string",
    "description": "The destination CIDR block to assign to the Traffic Mirror rule."
  },
  {
    "name": "traffic_mirror_filter_rule_id",
    "type": "string",
    "description": "The ID of the Traffic Mirror Filter rule."
  },
  {
    "name": "traffic_mirror_filter_id",
    "type": "string",
    "description": "The ID of the filter that this rule is associated with."
  },
  {
    "name": "traffic_direction",
    "type": "string",
    "description": "The direction of traffic (ingress/egress)."
  },
  {
    "name": "protocol",
    "type": "integer",
    "description": "The number of protocol, for example 17 (UDP), to assign to the Traffic Mirror rule."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Any tags assigned to the Traffic Mirror Filter rule.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The tag key."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The tag value."
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
    "name": "traffic_mirror_filter_rule_id",
    "type": "string",
    "description": "The ID of the Traffic Mirror Filter rule."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilterrule.html"><code>AWS::EC2::TrafficMirrorFilterRule</code></a>.

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
    <td><code>traffic_mirror_filter_rules</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RuleAction, SourceCidrBlock, RuleNumber, DestinationCidrBlock, TrafficMirrorFilterId, TrafficDirection, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>traffic_mirror_filter_rules</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>traffic_mirror_filter_rules</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>traffic_mirror_filter_rules_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>traffic_mirror_filter_rules</code></td>
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

Gets all properties from an individual <code>traffic_mirror_filter_rule</code>.
```sql
SELECT
region,
destination_port_range,
description,
source_port_range,
rule_action,
source_cidr_block,
rule_number,
destination_cidr_block,
traffic_mirror_filter_rule_id,
traffic_mirror_filter_id,
traffic_direction,
protocol,
tags
FROM awscc.ec2.traffic_mirror_filter_rules
WHERE region = 'us-east-1' AND data__Identifier = '<TrafficMirrorFilterRuleId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>traffic_mirror_filter_rules</code> in a region.
```sql
SELECT
region,
traffic_mirror_filter_rule_id
FROM awscc.ec2.traffic_mirror_filter_rules_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>traffic_mirror_filter_rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.traffic_mirror_filter_rules (
 RuleAction,
 SourceCidrBlock,
 RuleNumber,
 DestinationCidrBlock,
 TrafficMirrorFilterId,
 TrafficDirection,
 region
)
SELECT 
'{{ RuleAction }}',
 '{{ SourceCidrBlock }}',
 '{{ RuleNumber }}',
 '{{ DestinationCidrBlock }}',
 '{{ TrafficMirrorFilterId }}',
 '{{ TrafficDirection }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.traffic_mirror_filter_rules (
 DestinationPortRange,
 Description,
 SourcePortRange,
 RuleAction,
 SourceCidrBlock,
 RuleNumber,
 DestinationCidrBlock,
 TrafficMirrorFilterId,
 TrafficDirection,
 Protocol,
 Tags,
 region
)
SELECT 
 '{{ DestinationPortRange }}',
 '{{ Description }}',
 '{{ SourcePortRange }}',
 '{{ RuleAction }}',
 '{{ SourceCidrBlock }}',
 '{{ RuleNumber }}',
 '{{ DestinationCidrBlock }}',
 '{{ TrafficMirrorFilterId }}',
 '{{ TrafficDirection }}',
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
  - name: traffic_mirror_filter_rule
    props:
      - name: DestinationPortRange
        value:
          FromPort: '{{ FromPort }}'
          ToPort: '{{ ToPort }}'
      - name: Description
        value: '{{ Description }}'
      - name: SourcePortRange
        value: null
      - name: RuleAction
        value: '{{ RuleAction }}'
      - name: SourceCidrBlock
        value: '{{ SourceCidrBlock }}'
      - name: RuleNumber
        value: '{{ RuleNumber }}'
      - name: DestinationCidrBlock
        value: '{{ DestinationCidrBlock }}'
      - name: TrafficMirrorFilterId
        value: '{{ TrafficMirrorFilterId }}'
      - name: TrafficDirection
        value: '{{ TrafficDirection }}'
      - name: Protocol
        value: '{{ Protocol }}'
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
UPDATE awscc.ec2.traffic_mirror_filter_rules
SET data__PatchDocument = string('{{ {
    "DestinationPortRange": destination_port_range,
    "Description": description,
    "SourcePortRange": source_port_range,
    "RuleAction": rule_action,
    "SourceCidrBlock": source_cidr_block,
    "RuleNumber": rule_number,
    "DestinationCidrBlock": destination_cidr_block,
    "TrafficDirection": traffic_direction,
    "Protocol": protocol,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<TrafficMirrorFilterRuleId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.traffic_mirror_filter_rules
WHERE data__Identifier = '<TrafficMirrorFilterRuleId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>traffic_mirror_filter_rules</code> resource, the following permissions are required:

### Create
```json
ec2:CreateTrafficMirrorFilterRule,
ec2:CreateTags,
ec2:DescribeTrafficMirrorFilterRules
```

### Read
```json
ec2:DescribeTrafficMirrorFilterRules
```

### Update
```json
ec2:ModifyTrafficMirrorFilterRule,
ec2:CreateTags,
ec2:DeleteTags
```

### Delete
```json
ec2:DeleteTrafficMirrorFilterRule
```

### List
```json
ec2:DescribeTrafficMirrorFilterRules
```
