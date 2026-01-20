---
title: drt_accesses
hide_title: false
hide_table_of_contents: false
keywords:
  - drt_accesses
  - shield
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

Creates, updates, deletes or gets a <code>drt_access</code> resource or lists <code>drt_accesses</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>drt_accesses</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Config the role and list of Amazon S3 log buckets used by the Shield Response Team (SRT) to access your AWS account while assisting with attack mitigation.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.shield.drt_accesses" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "account_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "log_bucket_list",
    "type": "array",
    "description": "Authorizes the Shield Response Team (SRT) to access the specified Amazon S3 bucket containing log data such as Application Load Balancer access logs, CloudFront logs, or logs from third party sources. You can associate up to 10 Amazon S3 buckets with your subscription."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "Authorizes the Shield Response Team (SRT) using the specified role, to access your AWS account to assist with DDoS attack mitigation during potential attacks. This enables the SRT to inspect your AWS WAF configuration and create or update AWS WAF rules and web ACLs."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-drtaccess.html"><code>AWS::Shield::DRTAccess</code></a>.

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
    <td><CopyableCode code="RoleArn, region" /></td>
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

Gets all properties from an individual <code>drt_access</code>.
```sql
SELECT
region,
account_id,
log_bucket_list,
role_arn
FROM awscc.shield.drt_accesses
WHERE data__Identifier = '<AccountId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>drt_access</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.shield.drt_accesses (
 RoleArn,
 region
)
SELECT 
'{{ RoleArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.shield.drt_accesses (
 LogBucketList,
 RoleArn,
 region
)
SELECT 
 '{{ LogBucketList }}',
 '{{ RoleArn }}',
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
  - name: drt_access
    props:
      - name: LogBucketList
        value:
          - '{{ LogBucketList[0] }}'
      - name: RoleArn
        value: '{{ RoleArn }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.shield.drt_accesses
WHERE data__Identifier = '<AccountId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>drt_accesses</code> resource, the following permissions are required:

### Create
```json
shield:DescribeDRTAccess,
shield:AssociateDRTLogBucket,
shield:AssociateDRTRole,
iam:PassRole,
iam:GetRole,
iam:ListAttachedRolePolicies,
s3:GetBucketPolicy,
s3:PutBucketPolicy
```

### Delete
```json
shield:DescribeDRTAccess,
shield:DisassociateDRTLogBucket,
shield:DisassociateDRTRole,
iam:PassRole,
iam:GetRole,
iam:ListAttachedRolePolicies,
s3:GetBucketPolicy,
s3:PutBucketPolicy,
s3:DeleteBucketPolicy
```

### Read
```json
shield:DescribeDRTAccess
```

### Update
```json
shield:DescribeDRTAccess,
shield:AssociateDRTLogBucket,
shield:AssociateDRTRole,
shield:DisassociateDRTLogBucket,
shield:DisassociateDRTRole,
iam:PassRole,
iam:GetRole,
iam:ListAttachedRolePolicies,
s3:GetBucketPolicy,
s3:PutBucketPolicy,
s3:DeleteBucketPolicy
```

### List
```json
shield:DescribeDRTAccess
```
