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
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

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
<SchemaTable fields={[
  {
    "name": "deletion_protection_enabled",
    "type": "boolean",
    "description": "Whether deletion protection is enabled in this cluster."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "resource_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the cluster."
  },
  {
    "name": "identifier",
    "type": "string",
    "description": "The ID of the created cluster."
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "The time of when the cluster was created in ISO-8601 format."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the cluster."
  },
  {
    "name": "vpc_endpoint_service_name",
    "type": "string",
    "description": "The VPC endpoint service name."
  },
  {
    "name": "multi_region_properties",
    "type": "object",
    "description": "The Multi-region properties associated to this cluster.",
    "children": [
      {
        "name": "witness_region",
        "type": "string",
        "description": "The witness region in a multi-region cluster."
      },
      {
        "name": "clusters",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "kms_encryption_key",
    "type": "string",
    "description": "The KMS key that encrypts data on the cluster."
  },
  {
    "name": "encryption_details",
    "type": "object",
    "description": "The encryption configuration details for the cluster.",
    "children": [
      {
        "name": "encryption_status",
        "type": "string",
        "description": "The status of encryption for the cluster."
      },
      {
        "name": "encryption_type",
        "type": "string",
        "description": "The type of encryption that protects data in the cluster."
      },
      {
        "name": "kms_key_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the KMS key that encrypts data in the cluster."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

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
