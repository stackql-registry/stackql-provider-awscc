---
title: verified_access_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - verified_access_groups
  - ec2
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

Creates, updates, deletes or gets a <code>verified_access_group</code> resource or lists <code>verified_access_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>verified_access_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::EC2::VerifiedAccessGroup resource creates an AWS EC2 Verified Access Group.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.verified_access_groups" /></td></tr>
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
    "name": "verified_access_group_id",
    "type": "string",
    "description": "The ID of the AWS Verified Access group."
  },
  {
    "name": "verified_access_instance_id",
    "type": "string",
    "description": "The ID of the AWS Verified Access instance."
  },
  {
    "name": "verified_access_group_arn",
    "type": "string",
    "description": "The ARN of the Verified Access group."
  },
  {
    "name": "owner",
    "type": "string",
    "description": "The AWS account number that owns the group."
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "Time this Verified Access Group was created."
  },
  {
    "name": "last_updated_time",
    "type": "string",
    "description": "Time this Verified Access Group was last updated."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description for the AWS Verified Access group."
  },
  {
    "name": "policy_document",
    "type": "string",
    "description": "The AWS Verified Access policy document."
  },
  {
    "name": "policy_enabled",
    "type": "boolean",
    "description": "The status of the Verified Access policy."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The tag key."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The tag value."
      }
    ]
  },
  {
    "name": "sse_specification",
    "type": "object",
    "description": "The configuration options for customer provided KMS encryption.",
    "children": [
      {
        "name": "kms_key_arn",
        "type": "string",
        "description": "KMS Key Arn used to encrypt the group policy"
      },
      {
        "name": "customer_managed_key_enabled",
        "type": "boolean",
        "description": "Whether to encrypt the policy with the provided key or disable encryption"
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
    "name": "verified_access_group_id",
    "type": "string",
    "description": "The ID of the AWS Verified Access group."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessgroup.html"><code>AWS::EC2::VerifiedAccessGroup</code></a>.

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
    <td><code>verified_access_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="VerifiedAccessInstanceId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>verified_access_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>verified_access_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>verified_access_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>verified_access_groups</code></td>
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

Gets all properties from an individual <code>verified_access_group</code>.
```sql
SELECT
region,
verified_access_group_id,
verified_access_instance_id,
verified_access_group_arn,
owner,
creation_time,
last_updated_time,
description,
policy_document,
policy_enabled,
tags,
sse_specification
FROM awscc.ec2.verified_access_groups
WHERE region = 'us-east-1' AND Identifier = '{{ verified_access_group_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>verified_access_groups</code> in a region.
```sql
SELECT
region,
verified_access_group_id
FROM awscc.ec2.verified_access_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>verified_access_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.verified_access_groups (
 VerifiedAccessInstanceId,
 region
)
SELECT
'{{ verified_access_instance_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.verified_access_groups (
 VerifiedAccessInstanceId,
 Description,
 PolicyDocument,
 PolicyEnabled,
 Tags,
 SseSpecification,
 region
)
SELECT
 '{{ verified_access_instance_id }}',
 '{{ description }}',
 '{{ policy_document }}',
 '{{ policy_enabled }}',
 '{{ tags }}',
 '{{ sse_specification }}',
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
  - name: verified_access_group
    props:
      - name: verified_access_instance_id
        value: '{{ verified_access_instance_id }}'
      - name: description
        value: '{{ description }}'
      - name: policy_document
        value: '{{ policy_document }}'
      - name: policy_enabled
        value: '{{ policy_enabled }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: sse_specification
        value:
          kms_key_arn: '{{ kms_key_arn }}'
          customer_managed_key_enabled: '{{ customer_managed_key_enabled }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>verified_access_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.verified_access_groups
SET PatchDocument = string('{{ {
    "VerifiedAccessInstanceId": verified_access_instance_id,
    "Description": description,
    "PolicyDocument": policy_document,
    "PolicyEnabled": policy_enabled,
    "Tags": tags,
    "SseSpecification": sse_specification
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ verified_access_group_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.verified_access_groups
WHERE Identifier = '{{ verified_access_group_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>verified_access_groups</code> resource, the following permissions are required:

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
ec2:CreateVerifiedAccessGroup,
ec2:DescribeVerifiedAccessGroups,
ec2:GetVerifiedAccessGroupPolicy,
ec2:CreateTags,
ec2:DescribeTags,
kms:DescribeKey,
kms:RetireGrant,
kms:CreateGrant,
kms:GenerateDataKey,
kms:Decrypt
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeVerifiedAccessGroups,
ec2:GetVerifiedAccessGroupPolicy,
ec2:DescribeTags,
kms:DescribeKey,
kms:RetireGrant,
kms:CreateGrant,
kms:GenerateDataKey,
kms:Decrypt
```

</TabItem>
<TabItem value="update">

```json
ec2:ModifyVerifiedAccessGroup,
ec2:ModifyVerifiedAccessGroupPolicy,
ec2:DescribeVerifiedAccessGroups,
ec2:GetVerifiedAccessGroupPolicy,
ec2:DescribeTags,
ec2:DeleteTags,
ec2:CreateTags,
kms:DescribeKey,
kms:RetireGrant,
kms:CreateGrant,
kms:GenerateDataKey,
kms:Decrypt
```

</TabItem>
<TabItem value="delete">

```json
ec2:DeleteVerifiedAccessGroup,
ec2:DeleteTags,
ec2:DescribeVerifiedAccessGroups,
ec2:DescribeTags,
kms:DescribeKey,
kms:RetireGrant,
kms:CreateGrant,
kms:GenerateDataKey,
kms:Decrypt
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeVerifiedAccessGroups,
ec2:DescribeTags,
kms:DescribeKey,
kms:RetireGrant,
kms:CreateGrant,
kms:GenerateDataKey,
kms:Decrypt
```

</TabItem>
</Tabs>