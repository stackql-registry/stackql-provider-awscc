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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
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
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststore.html"><code>AWS::ElasticLoadBalancingV2::TrustStore</code></a>.

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
    <td><code>trust_stores</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>trust_stores</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>trust_stores</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>trust_stores_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>trust_stores</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '{{ trust_store_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>trust_stores</code> in a region.
```sql
SELECT
region,
trust_store_arn
FROM awscc.elasticloadbalancingv2.trust_stores_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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
'{{ name }}',
 '{{ ca_certificates_bundle_s3_bucket }}',
 '{{ ca_certificates_bundle_s3_key }}',
 '{{ ca_certificates_bundle_s3_object_version }}',
 '{{ tags }}',
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
 '{{ name }}',
 '{{ ca_certificates_bundle_s3_bucket }}',
 '{{ ca_certificates_bundle_s3_key }}',
 '{{ ca_certificates_bundle_s3_object_version }}',
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
  - name: trust_store
    props:
      - name: name
        value: '{{ name }}'
      - name: ca_certificates_bundle_s3_bucket
        value: '{{ ca_certificates_bundle_s3_bucket }}'
      - name: ca_certificates_bundle_s3_key
        value: '{{ ca_certificates_bundle_s3_key }}'
      - name: ca_certificates_bundle_s3_object_version
        value: '{{ ca_certificates_bundle_s3_object_version }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>trust_store</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.elasticloadbalancingv2.trust_stores
SET PatchDocument = string('{{ {
    "CaCertificatesBundleS3Bucket": ca_certificates_bundle_s3_bucket,
    "CaCertificatesBundleS3Key": ca_certificates_bundle_s3_key,
    "CaCertificatesBundleS3ObjectVersion": ca_certificates_bundle_s3_object_version,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ trust_store_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.elasticloadbalancingv2.trust_stores
WHERE Identifier = '{{ trust_store_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>trust_stores</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
elasticloadbalancing:CreateTrustStore,
elasticloadbalancing:DescribeTrustStores,
elasticloadbalancing:AddTags,
s3:GetObject,
s3:GetObjectVersion
```

</TabItem>
<TabItem value="delete">

```json
elasticloadbalancing:DescribeTrustStores,
elasticloadbalancing:DeleteTrustStore
```

</TabItem>
<TabItem value="list">

```json
elasticloadbalancing:DescribeTrustStores,
s3:GetObject,
s3:GetObjectVersion
```

</TabItem>
<TabItem value="read">

```json
elasticloadbalancing:DescribeTrustStores,
elasticloadbalancing:DescribeTags
```

</TabItem>
<TabItem value="update">

```json
elasticloadbalancing:ModifyTrustStore,
elasticloadbalancing:AddTags,
elasticloadbalancing:RemoveTags,
s3:GetObject,
s3:GetObjectVersion
```

</TabItem>
</Tabs>