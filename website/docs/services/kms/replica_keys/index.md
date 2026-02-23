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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "key_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html"><code>AWS::KMS::ReplicaKey</code></a>.

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
    <td><code>replica_keys</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="PrimaryKeyArn, KeyPolicy, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>replica_keys</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>replica_keys</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>replica_keys_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>replica_keys</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '{{ key_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>replica_keys</code> in a region.
```sql
SELECT
region,
key_id
FROM awscc.kms.replica_keys_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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
'{{ key_policy }}',
 '{{ primary_key_arn }}',
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
 '{{ description }}',
 '{{ pending_window_in_days }}',
 '{{ key_policy }}',
 '{{ primary_key_arn }}',
 '{{ enabled }}',
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
  - name: replica_key
    props:
      - name: description
        value: '{{ description }}'
      - name: pending_window_in_days
        value: '{{ pending_window_in_days }}'
      - name: key_policy
        value: {}
      - name: primary_key_arn
        value: '{{ primary_key_arn }}'
      - name: enabled
        value: '{{ enabled }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>replica_key</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.kms.replica_keys
SET PatchDocument = string('{{ {
    "Description": description,
    "PendingWindowInDays": pending_window_in_days,
    "KeyPolicy": key_policy,
    "Enabled": enabled,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ key_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.kms.replica_keys
WHERE Identifier = '{{ key_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>replica_keys</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
kms:DescribeKey,
kms:GetKeyPolicy,
kms:ListResourceTags
```

</TabItem>
<TabItem value="create">

```json
kms:ReplicateKey,
kms:CreateKey,
kms:DescribeKey,
kms:DisableKey,
kms:TagResource
```

</TabItem>
<TabItem value="update">

```json
kms:DescribeKey,
kms:DisableKey,
kms:EnableKey,
kms:PutKeyPolicy,
kms:TagResource,
kms:UntagResource,
kms:UpdateKeyDescription
```

</TabItem>
<TabItem value="list">

```json
kms:ListKeys,
kms:DescribeKey
```

</TabItem>
<TabItem value="delete">

```json
kms:DescribeKey,
kms:ScheduleKeyDeletion
```

</TabItem>
</Tabs>