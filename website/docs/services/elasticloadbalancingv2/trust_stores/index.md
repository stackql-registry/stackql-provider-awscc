---
title: trust_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - trust_stores
  - elasticloadbalancingv2
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

Creates, updates, deletes or gets a <code>trust_store</code> resource or lists <code>trust_stores</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>trust_stores</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::ElasticLoadBalancingV2::TrustStore</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.elasticloadbalancingv2.trust_stores" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "The name of the trust store."
  },
  {
    "name": "ca_certificates_bundle_s3_bucket",
    "type": "string",
    "description": "The name of the S3 bucket to fetch the CA certificate bundle from."
  },
  {
    "name": "ca_certificates_bundle_s3_key",
    "type": "string",
    "description": "The name of the S3 object to fetch the CA certificate bundle from."
  },
  {
    "name": "ca_certificates_bundle_s3_object_version",
    "type": "string",
    "description": "The version of the S3 bucket that contains the CA certificate bundle."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the trust store, could be either of ACTIVE or CREATING."
  },
  {
    "name": "number_of_ca_certificates",
    "type": "integer",
    "description": "The number of certificates associated with the trust store."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags to assign to the trust store.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "trust_store_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the trust store."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststore.html"><code>AWS::ElasticLoadBalancingV2::TrustStore</code></a>.

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
    <td><CopyableCode code="region" /></td>
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

Gets all properties from an individual <code>trust_store</code>.
```sql
SELECT
region,
name,
ca_certificates_bundle_s3_bucket,
ca_certificates_bundle_s3_key,
ca_certificates_bundle_s3_object_version,
status,
number_of_ca_certificates,
tags,
trust_store_arn
FROM awscc.elasticloadbalancingv2.trust_stores
WHERE region = 'us-east-1' AND data__Identifier = '<TrustStoreArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>trust_store</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.elasticloadbalancingv2.trust_stores (
 Name,
 CaCertificatesBundleS3Bucket,
 CaCertificatesBundleS3Key,
 CaCertificatesBundleS3ObjectVersion,
 Tags,
 region
)
SELECT 
'{{ Name }}',
 '{{ CaCertificatesBundleS3Bucket }}',
 '{{ CaCertificatesBundleS3Key }}',
 '{{ CaCertificatesBundleS3ObjectVersion }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.elasticloadbalancingv2.trust_stores (
 Name,
 CaCertificatesBundleS3Bucket,
 CaCertificatesBundleS3Key,
 CaCertificatesBundleS3ObjectVersion,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ CaCertificatesBundleS3Bucket }}',
 '{{ CaCertificatesBundleS3Key }}',
 '{{ CaCertificatesBundleS3ObjectVersion }}',
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
  - name: trust_store
    props:
      - name: Name
        value: '{{ Name }}'
      - name: CaCertificatesBundleS3Bucket
        value: '{{ CaCertificatesBundleS3Bucket }}'
      - name: CaCertificatesBundleS3Key
        value: '{{ CaCertificatesBundleS3Key }}'
      - name: CaCertificatesBundleS3ObjectVersion
        value: '{{ CaCertificatesBundleS3ObjectVersion }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.elasticloadbalancingv2.trust_stores
WHERE data__Identifier = '<TrustStoreArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>trust_stores</code> resource, the following permissions are required:

### Create
```json
elasticloadbalancing:CreateTrustStore,
elasticloadbalancing:DescribeTrustStores,
elasticloadbalancing:AddTags,
s3:GetObject,
s3:GetObjectVersion
```

### Delete
```json
elasticloadbalancing:DescribeTrustStores,
elasticloadbalancing:DeleteTrustStore
```

### List
```json
elasticloadbalancing:DescribeTrustStores,
s3:GetObject,
s3:GetObjectVersion
```

### Read
```json
elasticloadbalancing:DescribeTrustStores,
elasticloadbalancing:DescribeTags
```

### Update
```json
elasticloadbalancing:ModifyTrustStore,
elasticloadbalancing:AddTags,
elasticloadbalancing:RemoveTags,
s3:GetObject,
s3:GetObjectVersion
```
