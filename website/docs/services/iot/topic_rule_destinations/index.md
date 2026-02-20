---
title: topic_rule_destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - topic_rule_destinations
  - iot
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

Creates, updates, deletes or gets a <code>topic_rule_destination</code> resource or lists <code>topic_rule_destinations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>topic_rule_destinations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::IoT::TopicRuleDestination</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iot.topic_rule_destinations" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": "Amazon Resource Name (ARN)."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the TopicRuleDestination."
  },
  {
    "name": "http_url_properties",
    "type": "object",
    "description": "HTTP URL destination properties.",
    "children": [
      {
        "name": "confirmation_url",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "status_reason",
    "type": "string",
    "description": "The reasoning for the current status of the TopicRuleDestination."
  },
  {
    "name": "vpc_properties",
    "type": "object",
    "description": "VPC destination properties.",
    "children": [
      {
        "name": "subnet_ids",
        "type": "array",
        "description": ""
      },
      {
        "name": "security_groups",
        "type": "array",
        "description": ""
      },
      {
        "name": "vpc_id",
        "type": "string",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": "Amazon Resource Name (ARN)."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html"><code>AWS::IoT::TopicRuleDestination</code></a>.

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
    <td><code>topic_rule_destinations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>topic_rule_destinations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>topic_rule_destinations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>topic_rule_destinations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>topic_rule_destinations</code></td>
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

Gets all properties from an individual <code>topic_rule_destination</code>.
```sql
SELECT
region,
arn,
status,
http_url_properties,
status_reason,
vpc_properties
FROM awscc.iot.topic_rule_destinations
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>topic_rule_destinations</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.iot.topic_rule_destinations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>topic_rule_destination</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iot.topic_rule_destinations (
 Status,
 HttpUrlProperties,
 VpcProperties,
 region
)
SELECT 
'{{ Status }}',
 '{{ HttpUrlProperties }}',
 '{{ VpcProperties }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iot.topic_rule_destinations (
 Status,
 HttpUrlProperties,
 VpcProperties,
 region
)
SELECT 
 '{{ Status }}',
 '{{ HttpUrlProperties }}',
 '{{ VpcProperties }}',
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
  - name: topic_rule_destination
    props:
      - name: Status
        value: '{{ Status }}'
      - name: HttpUrlProperties
        value:
          ConfirmationUrl: '{{ ConfirmationUrl }}'
      - name: VpcProperties
        value:
          SubnetIds:
            - '{{ SubnetIds[0] }}'
          SecurityGroups:
            - '{{ SecurityGroups[0] }}'
          VpcId: '{{ VpcId }}'
          RoleArn: '{{ RoleArn }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>topic_rule_destination</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iot.topic_rule_destinations
SET PatchDocument = string('{{ {
    "Status": status
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.topic_rule_destinations
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>topic_rule_destinations</code> resource, the following permissions are required:

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
iam:PassRole,
iot:CreateTopicRuleDestination,
iot:GetTopicRuleDestination,
iot:UpdateTopicRuleDestination
```

</TabItem>
<TabItem value="read">

```json
iot:GetTopicRuleDestination
```

</TabItem>
<TabItem value="update">

```json
iam:PassRole,
iot:GetTopicRuleDestination,
iot:UpdateTopicRuleDestination
```

</TabItem>
<TabItem value="delete">

```json
iot:GetTopicRuleDestination,
iot:DeleteTopicRuleDestination
```

</TabItem>
<TabItem value="list">

```json
iot:ListTopicRuleDestinations
```

</TabItem>
</Tabs>