---
title: control_panels
hide_title: false
hide_table_of_contents: false
keywords:
  - control_panels
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

Creates, updates, deletes or gets a <code>control_panel</code> resource or lists <code>control_panels</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>control_panels</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>AWS Route53 Recovery Control Control Panel resource schema .</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53recoverycontrol.control_panels" /></td></tr>
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
    "name": "cluster_arn",
    "type": "string",
    "description": "Cluster to associate with the Control Panel"
  },
  {
    "name": "control_panel_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the cluster."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the control panel. You can use any non-white space character in the name."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The deployment status of control panel. Status can be one of the following: PENDING, DEPLOYED, PENDING&#95;DELETION."
  },
  {
    "name": "default_control_panel",
    "type": "boolean",
    "description": "A flag that Amazon Route 53 Application Recovery Controller sets to true to designate the default control panel for a cluster. When you create a cluster, Amazon Route 53 Application Recovery Controller creates a control panel, and sets this flag for that control panel. If you create a control panel yourself, this flag is set to false."
  },
  {
    "name": "routing_control_count",
    "type": "integer",
    "description": "Count of associated routing controls"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A collection of tags associated with a resource",
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
    "name": "control_panel_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the cluster."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-controlpanel.html"><code>AWS::Route53RecoveryControl::ControlPanel</code></a>.

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
    <td><code>control_panels</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>control_panels</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>control_panels</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>control_panels_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>control_panels</code></td>
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

Gets all properties from an individual <code>control_panel</code>.
```sql
SELECT
region,
cluster_arn,
control_panel_arn,
name,
status,
default_control_panel,
routing_control_count,
tags
FROM awscc.route53recoverycontrol.control_panels
WHERE region = 'us-east-1' AND Identifier = '{{ control_panel_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>control_panels</code> in a region.
```sql
SELECT
region,
control_panel_arn
FROM awscc.route53recoverycontrol.control_panels_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>control_panel</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.route53recoverycontrol.control_panels (
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
INSERT INTO awscc.route53recoverycontrol.control_panels (
 ClusterArn,
 Name,
 Tags,
 region
)
SELECT
 '{{ cluster_arn }}',
 '{{ name }}',
 '{{ tags }}',
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
  - name: control_panel
    props:
      - name: cluster_arn
        value: '{{ cluster_arn }}'
      - name: name
        value: '{{ name }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>control_panel</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.route53recoverycontrol.control_panels
SET PatchDocument = string('{{ {
    "Name": name
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ control_panel_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.route53recoverycontrol.control_panels
WHERE Identifier = '{{ control_panel_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>control_panels</code> resource, the following permissions are required:

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
route53-recovery-control-config:CreateControlPanel,
route53-recovery-control-config:DescribeCluster,
route53-recovery-control-config:DescribeControlPanel,
route53-recovery-control-config:ListTagsForResource,
route53-recovery-control-config:TagResource
```

</TabItem>
<TabItem value="read">

```json
route53-recovery-control-config:DescribeControlPanel,
route53-recovery-control-config:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
route53-recovery-control-config:UpdateControlPanel,
route53-recovery-control-config:DescribeControlPanel,
route53-recovery-control-config:ListTagsForResource,
route53-recovery-control-config:TagResource,
route53-recovery-control-config:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
route53-recovery-control-config:DeleteControlPanel,
route53-recovery-control-config:DescribeControlPanel
```

</TabItem>
<TabItem value="list">

```json
route53-recovery-control-config:ListControlPanels
```

</TabItem>
</Tabs>