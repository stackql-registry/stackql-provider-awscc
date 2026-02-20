---
title: global_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - global_clusters
  - rds
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

Creates, updates, deletes or gets a <code>global_cluster</code> resource or lists <code>global_clusters</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>global_clusters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::RDS::GlobalCluster</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rds.global_clusters" /></td></tr>
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
    "name": "engine",
    "type": "string",
    "description": "The name of the database engine to be used for this DB cluster. Valid Values: aurora (for MySQL 5.6-compatible Aurora), aurora-mysql (for MySQL 5.7-compatible Aurora).<br />If you specify the SourceDBClusterIdentifier property, don't specify this property. The value is inherited from the cluster."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with &#96;&#96;aws:&#96;&#96; or &#96;&#96;rds:&#96;&#96;. The string can only contain only the set of Unicode letters, digits, white-space, '&#95;', '.', ':', '/', '=', '+', '-', '@' (Java regex: \"^(&#91;\\\\p&#123;L&#125;\\\\p&#123;Z&#125;\\\\p&#123;N&#125;&#95;.:/=+\\\\-@&#93;&#42;)$\")."
      },
      {
        "name": "value",
        "type": "string",
        "description": "A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with &#96;&#96;aws:&#96;&#96; or &#96;&#96;rds:&#96;&#96;. The string can only contain only the set of Unicode letters, digits, white-space, '&#95;', '.', ':', '/', '=', '+', '-', '@' (Java regex: \"^(&#91;\\\\p&#123;L&#125;\\\\p&#123;Z&#125;\\\\p&#123;N&#125;&#95;.:/=+\\\\-@&#93;&#42;)$\")."
      }
    ]
  },
  {
    "name": "engine_lifecycle_support",
    "type": "string",
    "description": "The life cycle type of the global cluster. You can use this setting to enroll your global cluster into Amazon RDS Extended Support."
  },
  {
    "name": "engine_version",
    "type": "string",
    "description": "The version number of the database engine to use. If you specify the SourceDBClusterIdentifier property, don't specify this property. The value is inherited from the cluster."
  },
  {
    "name": "deletion_protection",
    "type": "boolean",
    "description": "The deletion protection setting for the new global database. The global database can't be deleted when deletion protection is enabled."
  },
  {
    "name": "global_cluster_identifier",
    "type": "string",
    "description": "The cluster identifier of the new global database cluster. This parameter is stored as a lowercase string."
  },
  {
    "name": "source_db_cluster_identifier",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) to use as the primary cluster of the global database. This parameter is optional. This parameter is stored as a lowercase string."
  },
  {
    "name": "storage_encrypted",
    "type": "boolean",
    "description": "The storage encryption setting for the new global database cluster.<br />If you specify the SourceDBClusterIdentifier property, don't specify this property. The value is inherited from the cluster."
  },
  {
    "name": "global_endpoint",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "address",
        "type": "string",
        "description": "The writer endpoint for the global database cluster. This endpoint always points to the writer DB instance in the current primary cluster."
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
    "name": "global_cluster_identifier",
    "type": "string",
    "description": "The cluster identifier of the new global database cluster. This parameter is stored as a lowercase string."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html"><code>AWS::RDS::GlobalCluster</code></a>.

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
    <td><code>global_clusters</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>global_clusters</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>global_clusters</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>global_clusters_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>global_clusters</code></td>
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

Gets all properties from an individual <code>global_cluster</code>.
```sql
SELECT
region,
engine,
tags,
engine_lifecycle_support,
engine_version,
deletion_protection,
global_cluster_identifier,
source_db_cluster_identifier,
storage_encrypted,
global_endpoint
FROM awscc.rds.global_clusters
WHERE region = 'us-east-1' AND data__Identifier = '<GlobalClusterIdentifier>';
```
</TabItem>
<TabItem value="list">

Lists all <code>global_clusters</code> in a region.
```sql
SELECT
region,
global_cluster_identifier
FROM awscc.rds.global_clusters_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>global_cluster</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.rds.global_clusters (
 Engine,
 Tags,
 EngineLifecycleSupport,
 EngineVersion,
 DeletionProtection,
 GlobalClusterIdentifier,
 SourceDBClusterIdentifier,
 StorageEncrypted,
 region
)
SELECT 
'{{ Engine }}',
 '{{ Tags }}',
 '{{ EngineLifecycleSupport }}',
 '{{ EngineVersion }}',
 '{{ DeletionProtection }}',
 '{{ GlobalClusterIdentifier }}',
 '{{ SourceDBClusterIdentifier }}',
 '{{ StorageEncrypted }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.rds.global_clusters (
 Engine,
 Tags,
 EngineLifecycleSupport,
 EngineVersion,
 DeletionProtection,
 GlobalClusterIdentifier,
 SourceDBClusterIdentifier,
 StorageEncrypted,
 region
)
SELECT 
 '{{ Engine }}',
 '{{ Tags }}',
 '{{ EngineLifecycleSupport }}',
 '{{ EngineVersion }}',
 '{{ DeletionProtection }}',
 '{{ GlobalClusterIdentifier }}',
 '{{ SourceDBClusterIdentifier }}',
 '{{ StorageEncrypted }}',
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
  - name: global_cluster
    props:
      - name: Engine
        value: '{{ Engine }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: EngineLifecycleSupport
        value: '{{ EngineLifecycleSupport }}'
      - name: EngineVersion
        value: '{{ EngineVersion }}'
      - name: DeletionProtection
        value: '{{ DeletionProtection }}'
      - name: GlobalClusterIdentifier
        value: '{{ GlobalClusterIdentifier }}'
      - name: SourceDBClusterIdentifier
        value: '{{ SourceDBClusterIdentifier }}'
      - name: StorageEncrypted
        value: '{{ StorageEncrypted }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.rds.global_clusters
SET data__PatchDocument = string('{{ {
    "Tags": tags,
    "EngineLifecycleSupport": engine_lifecycle_support,
    "EngineVersion": engine_version,
    "DeletionProtection": deletion_protection
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<GlobalClusterIdentifier>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.rds.global_clusters
WHERE data__Identifier = '<GlobalClusterIdentifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>global_clusters</code> resource, the following permissions are required:

### Create
```json
rds:CreateGlobalCluster,
rds:DescribeDBClusters,
rds:DescribeGlobalClusters
```

### Read
```json
rds:DescribeGlobalClusters
```

### Update
```json
rds:ModifyGlobalCluster,
rds:DescribeGlobalClusters,
rds:AddTagsToResource,
rds:RemoveTagsFromResource
```

### Delete
```json
rds:DescribeGlobalClusters,
rds:DeleteGlobalCluster,
rds:RemoveFromGlobalCluster,
rds:DescribeDBClusters
```

### List
```json
rds:DescribeGlobalClusters
```
