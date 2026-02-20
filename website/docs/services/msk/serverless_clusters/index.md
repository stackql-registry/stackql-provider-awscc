---
title: serverless_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - serverless_clusters
  - msk
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

Creates, updates, deletes or gets a <code>serverless_cluster</code> resource or lists <code>serverless_clusters</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>serverless_clusters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::MSK::ServerlessCluster</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.msk.serverless_clusters" /></td></tr>
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
    "description": ""
  },
  {
    "name": "cluster_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "vpc_configs",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "security_groups",
        "type": "array",
        "description": ""
      },
      {
        "name": "subnet_ids",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "client_authentication",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "sasl",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "iam",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "enabled",
                "type": "boolean",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A key-value pair to associate with a resource."
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
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html"><code>AWS::MSK::ServerlessCluster</code></a>.

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
    <td><code>serverless_clusters</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ClusterName, VpcConfigs, ClientAuthentication, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>serverless_clusters</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>serverless_clusters_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>serverless_clusters</code></td>
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

Gets all properties from an individual <code>serverless_cluster</code>.
```sql
SELECT
region,
arn,
cluster_name,
vpc_configs,
client_authentication,
tags
FROM awscc.msk.serverless_clusters
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>serverless_clusters</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.msk.serverless_clusters_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>serverless_cluster</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.msk.serverless_clusters (
 ClusterName,
 VpcConfigs,
 ClientAuthentication,
 region
)
SELECT 
'{{ ClusterName }}',
 '{{ VpcConfigs }}',
 '{{ ClientAuthentication }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.msk.serverless_clusters (
 ClusterName,
 VpcConfigs,
 ClientAuthentication,
 Tags,
 region
)
SELECT 
 '{{ ClusterName }}',
 '{{ VpcConfigs }}',
 '{{ ClientAuthentication }}',
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
  - name: serverless_cluster
    props:
      - name: ClusterName
        value: '{{ ClusterName }}'
      - name: VpcConfigs
        value:
          - SecurityGroups:
              - '{{ SecurityGroups[0] }}'
            SubnetIds:
              - '{{ SubnetIds[0] }}'
      - name: ClientAuthentication
        value:
          Sasl:
            Iam:
              Enabled: '{{ Enabled }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.msk.serverless_clusters
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>serverless_clusters</code> resource, the following permissions are required:

### Create
```json
kafka:CreateClusterV2,
kafka:TagResource,
kafka:DescribeClusterV2,
ec2:CreateVpcEndpoint,
ec2:CreateTags,
ec2:DescribeVpcAttribute,
ec2:DescribeSubnets,
ec2:DescribeVpcEndpoints,
ec2:DescribeVpcs,
ec2:DescribeSecurityGroups
```

### Read
```json
kafka:DescribeClusterV2
```

### Delete
```json
kafka:DeleteCluster,
kafka:DescribeClusterV2,
ec2:DeleteVpcEndpoints
```

### List
```json
kafka:ListClustersV2
```
