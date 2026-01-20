---
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
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

Creates, updates, deletes or gets a <code>cluster</code> resource or lists <code>clusters</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>clusters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>AWS Route53 Recovery Control Cluster resource schema</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53recoverycontrol.clusters" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "Name of a Cluster. You can use any non-white space character in the name"
  },
  {
    "name": "cluster_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the cluster."
  },
  {
    "name": "status",
    "type": "string",
    "description": "Deployment status of a resource. Status can be one of the following: PENDING, DEPLOYED, PENDING&#95;DELETION."
  },
  {
    "name": "cluster_endpoints",
    "type": "array",
    "description": "Endpoints for the cluster.",
    "children": [
      {
        "name": "endpoint",
        "type": "string",
        "description": ""
      },
      {
        "name": "region",
        "type": "string",
        "description": ""
      }
    ]
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
    "name": "network_type",
    "type": "string",
    "description": "Cluster supports IPv4 endpoints and Dual-stack IPv4 and IPv6 endpoints. NetworkType can be IPV4 or DUALSTACK."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-cluster.html"><code>AWS::Route53RecoveryControl::Cluster</code></a>.

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
    <td><CopyableCode code="Name, region" /></td>
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

Gets all properties from an individual <code>cluster</code>.
```sql
SELECT
region,
name,
cluster_arn,
status,
cluster_endpoints,
tags,
network_type
FROM awscc.route53recoverycontrol.clusters
WHERE region = 'us-east-1' AND data__Identifier = '<ClusterArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>cluster</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.route53recoverycontrol.clusters (
 Name,
 region
)
SELECT 
'{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.route53recoverycontrol.clusters (
 Name,
 Tags,
 NetworkType,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Tags }}',
 '{{ NetworkType }}',
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
  - name: cluster
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: NetworkType
        value: '{{ NetworkType }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.route53recoverycontrol.clusters
WHERE data__Identifier = '<ClusterArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>clusters</code> resource, the following permissions are required:

### Create
```json
route53-recovery-control-config:CreateCluster,
route53-recovery-control-config:DescribeCluster,
route53-recovery-control-config:ListTagsForResource,
route53-recovery-control-config:TagResource
```

### Read
```json
route53-recovery-control-config:DescribeCluster,
route53-recovery-control-config:ListTagsForResource
```

### Delete
```json
route53-recovery-control-config:DescribeCluster,
route53-recovery-control-config:DeleteCluster
```

### Update
```json
route53-recovery-control-config:DescribeCluster,
route53-recovery-control-config:ListTagsForResource,
route53-recovery-control-config:UpdateCluster
```

### List
```json
route53-recovery-control-config:ListClusters
```
