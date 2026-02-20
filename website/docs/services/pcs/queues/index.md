---
title: queues
hide_title: false
hide_table_of_contents: false
keywords:
  - queues
  - pcs
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

Creates, updates, deletes or gets a <code>queue</code> resource or lists <code>queues</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>queues</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>AWS::PCS::Queue resource creates an AWS PCS queue.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.pcs.queues" /></td></tr>
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
    "description": "The unique Amazon Resource Name (ARN) of the queue."
  },
  {
    "name": "cluster_id",
    "type": "string",
    "description": "The ID of the cluster of the queue."
  },
  {
    "name": "compute_node_group_configurations",
    "type": "array",
    "description": "The list of compute node group configurations associated with the queue. Queues assign jobs to associated compute node groups.",
    "children": [
      {
        "name": "compute_node_group_id",
        "type": "string",
        "description": "The compute node group ID for the compute node group configuration."
      }
    ]
  },
  {
    "name": "error_info",
    "type": "array",
    "description": "The list of errors that occurred during queue provisioning.",
    "children": [
      {
        "name": "code",
        "type": "string",
        "description": "The short-form error code."
      },
      {
        "name": "message",
        "type": "string",
        "description": "The detailed error information."
      }
    ]
  },
  {
    "name": "id",
    "type": "string",
    "description": "The generated unique ID of the queue."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name that identifies the queue."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The provisioning status of the queue. The provisioning status doesn't indicate the overall health of the queue."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string."
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
    "description": "The unique Amazon Resource Name (ARN) of the queue."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-queue.html"><code>AWS::PCS::Queue</code></a>.

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
    <td><code>queues</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ClusterId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>queues</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>queues</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>queues_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>queues</code></td>
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

Gets all properties from an individual <code>queue</code>.
```sql
SELECT
region,
arn,
cluster_id,
compute_node_group_configurations,
error_info,
id,
name,
status,
tags
FROM awscc.pcs.queues
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>queues</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.pcs.queues_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>queue</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.pcs.queues (
 ClusterId,
 region
)
SELECT 
'{{ ClusterId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.pcs.queues (
 ClusterId,
 ComputeNodeGroupConfigurations,
 Name,
 Tags,
 region
)
SELECT 
 '{{ ClusterId }}',
 '{{ ComputeNodeGroupConfigurations }}',
 '{{ Name }}',
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
  - name: queue
    props:
      - name: ClusterId
        value: '{{ ClusterId }}'
      - name: ComputeNodeGroupConfigurations
        value:
          - ComputeNodeGroupId: '{{ ComputeNodeGroupId }}'
      - name: Name
        value: '{{ Name }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.pcs.queues
SET data__PatchDocument = string('{{ {
    "ComputeNodeGroupConfigurations": compute_node_group_configurations,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.pcs.queues
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>queues</code> resource, the following permissions are required:

### Create
```json
ec2:CreateNetworkInterface,
ec2:DescribeVpcs,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups,
ec2:GetSecurityGroupsForVpc,
iam:CreateServiceLinkedRole,
secretsmanager:CreateSecret,
secretsmanager:TagResource,
pcs:CreateQueue,
pcs:GetQueue,
pcs:ListTagsForResource,
pcs:TagResource
```

### Read
```json
pcs:GetQueue,
pcs:ListTagsForResource
```

### Update
```json
pcs:GetQueue,
pcs:UpdateQueue,
pcs:ListTagsForResource,
pcs:TagResource,
pcs:UntagResource
```

### Delete
```json
pcs:DeleteQueue,
pcs:GetQueue
```

### List
```json
pcs:ListClusters,
pcs:ListQueues
```
