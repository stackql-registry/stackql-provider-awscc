---
title: routing_controls
hide_title: false
hide_table_of_contents: false
keywords:
  - routing_controls
  - route53recoverycontrol
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

Creates, updates, deletes or gets a <code>routing_control</code> resource or lists <code>routing_controls</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>routing_controls</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>AWS Route53 Recovery Control Routing Control resource schema .</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53recoverycontrol.routing_controls" /></td></tr>
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
    "name": "routing_control_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the routing control."
  },
  {
    "name": "control_panel_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the control panel."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the routing control. You can use any non-white space character in the name."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The deployment status of the routing control. Status can be one of the following: PENDING, DEPLOYED, PENDING&#95;DELETION."
  },
  {
    "name": "cluster_arn",
    "type": "string",
    "description": "Arn associated with Control Panel"
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
    "name": "routing_control_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the routing control."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-routingcontrol.html"><code>AWS::Route53RecoveryControl::RoutingControl</code></a>.

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
    <td><code>routing_controls</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>routing_controls</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>routing_controls</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>routing_controls_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>routing_controls</code></td>
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

Gets all properties from an individual <code>routing_control</code>.
```sql
SELECT
region,
routing_control_arn,
control_panel_arn,
name,
status,
cluster_arn
FROM awscc.route53recoverycontrol.routing_controls
WHERE region = 'us-east-1' AND Identifier = '{{ routing_control_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>routing_controls</code> in a region.
```sql
SELECT
region,
routing_control_arn
FROM awscc.route53recoverycontrol.routing_controls_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>routing_control</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.route53recoverycontrol.routing_controls (
 Name,
 region
)
SELECT
'{{ name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.route53recoverycontrol.routing_controls (
 ControlPanelArn,
 Name,
 ClusterArn,
 region
)
SELECT
 '{{ control_panel_arn }}',
 '{{ name }}',
 '{{ cluster_arn }}',
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
  - name: routing_control
    props:
      - name: control_panel_arn
        value: '{{ control_panel_arn }}'
      - name: name
        value: '{{ name }}'
      - name: cluster_arn
        value: '{{ cluster_arn }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>routing_control</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.route53recoverycontrol.routing_controls
SET PatchDocument = string('{{ {
    "Name": name
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ routing_control_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.route53recoverycontrol.routing_controls
WHERE Identifier = '{{ routing_control_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>routing_controls</code> resource, the following permissions are required:

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
route53-recovery-control-config:CreateRoutingControl,
route53-recovery-control-config:DescribeRoutingControl,
route53-recovery-control-config:DescribeControlPanel,
route53-recovery-control-config:DescribeCluster
```

</TabItem>
<TabItem value="read">

```json
route53-recovery-control-config:DescribeRoutingControl
```

</TabItem>
<TabItem value="update">

```json
route53-recovery-control-config:UpdateRoutingControl,
route53-recovery-control-config:DescribeRoutingControl,
route53-recovery-control-config:DescribeControlPanel
```

</TabItem>
<TabItem value="delete">

```json
route53-recovery-control-config:DescribeRoutingControl,
route53-recovery-control-config:DeleteRoutingControl
```

</TabItem>
<TabItem value="list">

```json
route53-recovery-control-config:ListRoutingControls
```

</TabItem>
</Tabs>