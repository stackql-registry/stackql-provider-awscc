---
title: keyspaces
hide_title: false
hide_table_of_contents: false
keywords:
  - keyspaces
  - cassandra
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

Creates, updates, deletes or gets a <code>keyspace</code> resource or lists <code>keyspaces</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>keyspaces</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::Cassandra::Keyspace</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cassandra.keyspaces" /></td></tr>
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
    "name": "keyspace_name",
    "type": "string",
    "description": "Name for Cassandra keyspace"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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
    "name": "replication_specification",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "replication_strategy",
        "type": "string",
        "description": ""
      },
      {
        "name": "region_list",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "client_side_timestamps_enabled",
    "type": "boolean",
    "description": "Indicates whether client-side timestamps are enabled (true) or disabled (false) for all tables in the keyspace. To add a Region to a single-Region keyspace with at least one table, the value must be set to true. After you enabled client-side timestamps for a table, you can’t disable it again."
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
    "name": "keyspace_name",
    "type": "string",
    "description": "Name for Cassandra keyspace"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html"><code>AWS::Cassandra::Keyspace</code></a>.

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
    <td><code>keyspaces</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>keyspaces</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>keyspaces</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>keyspaces_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>keyspaces</code></td>
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

Gets all properties from an individual <code>keyspace</code>.
```sql
SELECT
region,
keyspace_name,
tags,
replication_specification,
client_side_timestamps_enabled
FROM awscc.cassandra.keyspaces
WHERE region = 'us-east-1' AND Identifier = '<KeyspaceName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>keyspaces</code> in a region.
```sql
SELECT
region,
keyspace_name
FROM awscc.cassandra.keyspaces_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>keyspace</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cassandra.keyspaces (
 ,
 region
)
SELECT 
'{{  }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cassandra.keyspaces (
 KeyspaceName,
 Tags,
 ReplicationSpecification,
 ClientSideTimestampsEnabled,
 region
)
SELECT 
 '{{ KeyspaceName }}',
 '{{ Tags }}',
 '{{ ReplicationSpecification }}',
 '{{ ClientSideTimestampsEnabled }}',
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
  - name: keyspace
    props:
      - name: KeyspaceName
        value: '{{ KeyspaceName }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: ReplicationSpecification
        value:
          ReplicationStrategy: '{{ ReplicationStrategy }}'
          RegionList:
            - '{{ RegionList[0] }}'
      - name: ClientSideTimestampsEnabled
        value: '{{ ClientSideTimestampsEnabled }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>keyspace</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cassandra.keyspaces
SET PatchDocument = string('{{ {
    "Tags": tags,
    "ReplicationSpecification": replication_specification,
    "ClientSideTimestampsEnabled": client_side_timestamps_enabled
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<KeyspaceName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cassandra.keyspaces
WHERE Identifier = '<KeyspaceName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>keyspaces</code> resource, the following permissions are required:

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
cassandra:Create,
cassandra:CreateMultiRegionResource,
cassandra:Select,
cassandra:SelectMultiRegionResource,
cassandra:TagResource,
cassandra:TagMultiRegionResource,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="read">

```json
cassandra:Select,
cassandra:SelectMultiRegionResource
```

</TabItem>
<TabItem value="update">

```json
cassandra:Alter,
cassandra:AlterMultiRegionResource,
cassandra:Modify,
cassandra:ModifyMultiRegionResource,
cassandra:Select,
cassandra:SelectMultiRegionResource,
cassandra:TagResource,
cassandra:TagMultiRegionResource,
cassandra:UntagResource,
cassandra:UntagMultiRegionResource,
application-autoscaling:RegisterScalableTarget,
application-autoscaling:DeregisterScalableTarget,
application-autoscaling:DescribeScalableTargets,
application-autoscaling:DescribeScalingPolicies,
application-autoscaling:PutScalingPolicy,
cloudwatch:DeleteAlarms,
cloudwatch:DescribeAlarms,
cloudwatch:PutMetricAlarm,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="delete">

```json
cassandra:Drop,
cassandra:DropMultiRegionResource,
cassandra:Select,
cassandra:SelectMultiRegionResource
```

</TabItem>
<TabItem value="list">

```json
cassandra:Select,
cassandra:SelectMultiRegionResource
```

</TabItem>
</Tabs>