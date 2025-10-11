---
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - dsql
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

Creates, updates, deletes or gets a <code>cluster</code> resource or lists <code>clusters</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>clusters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::DSQL::Cluster</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.dsql.clusters" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="deletion_protection_enabled" /></td><td><code>boolean</code></td><td>Whether deletion protection is enabled in this cluster.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="resource_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) for the cluster.</td></tr>
<tr><td><CopyableCode code="identifier" /></td><td><code>string</code></td><td>The ID of the created cluster.</td></tr>
<tr><td><CopyableCode code="creation_time" /></td><td><code>string</code></td><td>The time of when the cluster was created in ISO-8601 format.</td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td>The status of the cluster.</td></tr>
<tr><td><CopyableCode code="vpc_endpoint_service_name" /></td><td><code>string</code></td><td>The VPC endpoint service name.</td></tr>
<tr><td><CopyableCode code="multi_region_properties" /></td><td><code>object</code></td><td>The Multi-region properties associated to this cluster.</td></tr>
<tr><td><CopyableCode code="kms_encryption_key" /></td><td><code>string</code></td><td>The KMS key that encrypts data on the cluster.</td></tr>
<tr><td><CopyableCode code="encryption_details" /></td><td><code>object</code></td><td>The encryption configuration details for the cluster.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dsql-cluster.html"><code>AWS::DSQL::Cluster</code></a>.

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
    <td><CopyableCode code=", region" /></td>
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
Gets all <code>clusters</code> in a region.
```sql
SELECT
region,
deletion_protection_enabled,
tags,
resource_arn,
identifier,
creation_time,
status,
vpc_endpoint_service_name,
multi_region_properties,
kms_encryption_key,
encryption_details
FROM awscc.dsql.clusters
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>cluster</code>.
```sql
SELECT
region,
deletion_protection_enabled,
tags,
resource_arn,
identifier,
creation_time,
status,
vpc_endpoint_service_name,
multi_region_properties,
kms_encryption_key,
encryption_details
FROM awscc.dsql.clusters
WHERE region = 'us-east-1' AND data__Identifier = '<Identifier>';
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
INSERT INTO awscc.dsql.clusters (
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
INSERT INTO awscc.dsql.clusters (
 DeletionProtectionEnabled,
 Tags,
 MultiRegionProperties,
 KmsEncryptionKey,
 region
)
SELECT 
 '{{ DeletionProtectionEnabled }}',
 '{{ Tags }}',
 '{{ MultiRegionProperties }}',
 '{{ KmsEncryptionKey }}',
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
      - name: DeletionProtectionEnabled
        value: '{{ DeletionProtectionEnabled }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: MultiRegionProperties
        value:
          WitnessRegion: '{{ WitnessRegion }}'
          Clusters:
            - '{{ Clusters[0] }}'
      - name: KmsEncryptionKey
        value: '{{ KmsEncryptionKey }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.dsql.clusters
WHERE data__Identifier = '<Identifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>clusters</code> resource, the following permissions are required:

### Create
```json
dsql:CreateCluster,
dsql:UpdateCluster,
dsql:GetCluster,
dsql:TagResource,
dsql:GetVpcEndpointServiceName,
dsql:ListTagsForResource,
iam:CreateServiceLinkedRole,
dsql:PutMultiRegionProperties,
dsql:AddPeerCluster,
dsql:PutWitnessRegion,
kms:Decrypt,
kms:Encrypt,
kms:GenerateDataKey,
kms:DescribeKey
```

### Read
```json
dsql:GetCluster,
dsql:GetVpcEndpointServiceName,
dsql:ListTagsForResource,
tag:GetTagKeys,
tag:GetTagValues
```

### Update
```json
dsql:UpdateCluster,
dsql:GetCluster,
dsql:UntagResource,
dsql:TagResource,
dsql:GetVpcEndpointServiceName,
dsql:ListTagsForResource,
dsql:PutMultiRegionProperties,
dsql:PutWitnessRegion,
dsql:AddPeerCluster,
dsql:RemovePeerCluster,
kms:Decrypt,
kms:Encrypt,
kms:GenerateDataKey,
kms:DescribeKey
```

### Delete
```json
dsql:DeleteCluster,
dsql:GetCluster,
dsql:ListTagsForResource
```

### List
```json
dsql:ListClusters,
dsql:ListTagsForResource,
tag:GetTagKeys,
tag:GetTagValues
```
