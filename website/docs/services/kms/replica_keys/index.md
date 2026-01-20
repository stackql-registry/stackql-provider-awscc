---
title: replica_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - replica_keys
  - kms
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

Creates, updates, deletes or gets a <code>replica_key</code> resource or lists <code>replica_keys</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>replica_keys</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::KMS::ReplicaKey resource specifies a multi-region replica AWS KMS key in AWS Key Management Service (AWS KMS).</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.kms.replica_keys" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "description",
    "type": "string",
    "description": "A description of the AWS KMS key. Use a description that helps you to distinguish this AWS KMS key from others in the account, such as its intended use."
  },
  {
    "name": "pending_window_in_days",
    "type": "integer",
    "description": "Specifies the number of days in the waiting period before AWS KMS deletes an AWS KMS key that has been removed from a CloudFormation stack. Enter a value between 7 and 30 days. The default value is 30 days."
  },
  {
    "name": "key_policy",
    "type": "object",
    "description": "The key policy that authorizes use of the AWS KMS key. The key policy must observe the following rules."
  },
  {
    "name": "primary_key_arn",
    "type": "string",
    "description": "Identifies the primary AWS KMS key to create a replica of. Specify the Amazon Resource Name (ARN) of the AWS KMS key. You cannot specify an alias or key ID. For help finding the ARN, see Finding the Key ID and ARN in the AWS Key Management Service Developer Guide."
  },
  {
    "name": "enabled",
    "type": "boolean",
    "description": "Specifies whether the AWS KMS key is enabled. Disabled AWS KMS keys cannot be used in cryptographic operations."
  },
  {
    "name": "key_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html"><code>AWS::KMS::ReplicaKey</code></a>.

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
    <td><CopyableCode code="PrimaryKeyArn, KeyPolicy, region" /></td>
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

Gets all properties from an individual <code>replica_key</code>.
```sql
SELECT
region,
description,
pending_window_in_days,
key_policy,
primary_key_arn,
enabled,
key_id,
arn,
tags
FROM awscc.kms.replica_keys
WHERE region = 'us-east-1' AND data__Identifier = '<KeyId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>replica_key</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.kms.replica_keys (
 KeyPolicy,
 PrimaryKeyArn,
 region
)
SELECT 
'{{ KeyPolicy }}',
 '{{ PrimaryKeyArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.kms.replica_keys (
 Description,
 PendingWindowInDays,
 KeyPolicy,
 PrimaryKeyArn,
 Enabled,
 Tags,
 region
)
SELECT 
 '{{ Description }}',
 '{{ PendingWindowInDays }}',
 '{{ KeyPolicy }}',
 '{{ PrimaryKeyArn }}',
 '{{ Enabled }}',
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
  - name: replica_key
    props:
      - name: Description
        value: '{{ Description }}'
      - name: PendingWindowInDays
        value: '{{ PendingWindowInDays }}'
      - name: KeyPolicy
        value: {}
      - name: PrimaryKeyArn
        value: '{{ PrimaryKeyArn }}'
      - name: Enabled
        value: '{{ Enabled }}'
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
DELETE FROM awscc.kms.replica_keys
WHERE data__Identifier = '<KeyId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>replica_keys</code> resource, the following permissions are required:

### Read
```json
kms:DescribeKey,
kms:GetKeyPolicy,
kms:ListResourceTags
```

### Create
```json
kms:ReplicateKey,
kms:CreateKey,
kms:DescribeKey,
kms:DisableKey,
kms:TagResource
```

### Update
```json
kms:DescribeKey,
kms:DisableKey,
kms:EnableKey,
kms:PutKeyPolicy,
kms:TagResource,
kms:UntagResource,
kms:UpdateKeyDescription
```

### List
```json
kms:ListKeys,
kms:DescribeKey
```

### Delete
```json
kms:DescribeKey,
kms:ScheduleKeyDeletion
```
