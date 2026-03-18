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
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>traffic_mirror_filter_rules</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ traffic_mirror_filter_rule_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>traffic_mirror_filter_rules</code> in a region.
```sql
SELECT
  region,
  traffic_mirror_filter_rule_id
FROM awscc.ec2.traffic_mirror_filter_rules_list_only
WHERE
  region = '{{ region }}';
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
  '{{ rule_action }}',
  '{{ source_cidr_block }}',
  '{{ rule_number }}',
  '{{ destination_cidr_block }}',
  '{{ traffic_mirror_filter_id }}',
  '{{ traffic_direction }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
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
  '{{ destination_port_range }}',
  '{{ description }}',
  '{{ source_port_range }}',
  '{{ rule_action }}',
  '{{ source_cidr_block }}',
  '{{ rule_number }}',
  '{{ destination_cidr_block }}',
  '{{ traffic_mirror_filter_id }}',
  '{{ traffic_direction }}',
  '{{ protocol }}',
  '{{ tags }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
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
      - name: destination_port_range
        value:
          from_port: '{{ from_port }}'
          to_port: '{{ to_port }}'
      - name: description
        value: '{{ description }}'
      - name: source_port_range
        value: null
      - name: rule_action
        value: '{{ rule_action }}'
      - name: source_cidr_block
        value: '{{ source_cidr_block }}'
      - name: rule_number
        value: '{{ rule_number }}'
      - name: destination_cidr_block
        value: '{{ destination_cidr_block }}'
      - name: traffic_mirror_filter_id
        value: '{{ traffic_mirror_filter_id }}'
      - name: traffic_direction
        value: '{{ traffic_direction }}'
      - name: protocol
        value: '{{ protocol }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>traffic_mirror_filter_rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.traffic_mirror_filter_rules
SET PatchDocument = string('{{ {
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ traffic_mirror_filter_rule_id }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.traffic_mirror_filter_rules
WHERE
  Identifier = '{{ traffic_mirror_filter_rule_id }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>traffic_mirror_filter_rules</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
ec2:CreateTrafficMirrorFilterRule,
ec2:CreateTags,
ec2:DescribeTrafficMirrorFilterRules
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeTrafficMirrorFilterRules
```

</TabItem>
<TabItem value="update">

```json
ec2:ModifyTrafficMirrorFilterRule,
ec2:CreateTags,
ec2:DeleteTags
```

</TabItem>
<TabItem value="delete">

```json
ec2:DeleteTrafficMirrorFilterRule
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeTrafficMirrorFilterRules
```

</TabItem>
</Tabs>