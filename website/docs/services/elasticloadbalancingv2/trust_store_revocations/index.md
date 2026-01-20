---
title: trust_store_revocations
hide_title: false
hide_table_of_contents: false
keywords:
  - trust_store_revocations
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

Creates, updates, deletes or gets a <code>trust_store_revocation</code> resource or lists <code>trust_store_revocations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>trust_store_revocations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::ElasticLoadBalancingV2::TrustStoreRevocation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.elasticloadbalancingv2.trust_store_revocations" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "revocation_contents",
    "type": "array",
    "description": "The attributes required to create a trust store revocation.",
    "children": [
      {
        "name": "s3_bucket",
        "type": "string",
        "description": ""
      },
      {
        "name": "s3_key",
        "type": "string",
        "description": ""
      },
      {
        "name": "s3_object_version",
        "type": "string",
        "description": ""
      },
      {
        "name": "revocation_type",
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
    "name": "revocation_id",
    "type": "integer",
    "description": "The ID associated with the revocation."
  },
  {
    "name": "trust_store_revocations",
    "type": "array",
    "description": "The data associated with a trust store revocation",
    "children": [
      {
        "name": "revocation_contents",
        "type": "array",
        "description": "The attributes required to create a trust store revocation."
      },
      {
        "name": "trust_store_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the trust store."
      },
      {
        "name": "revocation_id",
        "type": "integer",
        "description": "The ID associated with the revocation."
      },
      {
        "name": "trust_store_revocations",
        "type": "array",
        "description": "The data associated with a trust store revocation"
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststorerevocation.html"><code>AWS::ElasticLoadBalancingV2::TrustStoreRevocation</code></a>.

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

Gets all properties from an individual <code>trust_store_revocation</code>.
```sql
SELECT
region,
revocation_contents,
trust_store_arn,
revocation_id,
trust_store_revocations
FROM awscc.elasticloadbalancingv2.trust_store_revocations
WHERE region = 'us-east-1' AND data__Identifier = '<RevocationId>|<TrustStoreArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>trust_store_revocation</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.elasticloadbalancingv2.trust_store_revocations (
 RevocationContents,
 TrustStoreArn,
 region
)
SELECT 
'{{ RevocationContents }}',
 '{{ TrustStoreArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.elasticloadbalancingv2.trust_store_revocations (
 RevocationContents,
 TrustStoreArn,
 region
)
SELECT 
 '{{ RevocationContents }}',
 '{{ TrustStoreArn }}',
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
  - name: trust_store_revocation
    props:
      - name: RevocationContents
        value:
          - S3Bucket: '{{ S3Bucket }}'
            S3Key: '{{ S3Key }}'
            S3ObjectVersion: '{{ S3ObjectVersion }}'
            RevocationType: '{{ RevocationType }}'
      - name: TrustStoreArn
        value: '{{ TrustStoreArn }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.elasticloadbalancingv2.trust_store_revocations
WHERE data__Identifier = '<RevocationId|TrustStoreArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>trust_store_revocations</code> resource, the following permissions are required:

### Create
```json
elasticloadbalancing:AddTrustStoreRevocations,
elasticloadbalancing:DescribeTrustStoreRevocations,
s3:GetObject,
s3:GetObjectVersion
```

### Delete
```json
elasticloadbalancing:DescribeTrustStoreRevocations,
elasticloadbalancing:RemoveTrustStoreRevocations
```

### List
```json
elasticloadbalancing:DescribeTrustStoreRevocations
```

### Read
```json
elasticloadbalancing:DescribeTrustStoreRevocations
```
