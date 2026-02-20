---
title: billing_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - billing_groups
  - billingconductor
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

Creates, updates, deletes or gets a <code>billing_group</code> resource or lists <code>billing_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>billing_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A billing group is a set of linked account which belong to the same end customer. It can be seen as a virtual consolidated billing family.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.billingconductor.billing_groups" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": "Billing Group ARN"
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "primary_account_id",
    "type": "string",
    "description": "This account will act as a virtual payer account of the billing group"
  },
  {
    "name": "computation_preference",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "pricing_plan_arn",
        "type": "string",
        "description": "ARN of the attached pricing plan"
      }
    ]
  },
  {
    "name": "account_grouping",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "linked_account_ids",
        "type": "array",
        "description": ""
      },
      {
        "name": "auto_associate",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "size",
    "type": "integer",
    "description": "Number of accounts in the billing group"
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "status_reason",
    "type": "string",
    "description": ""
  },
  {
    "name": "creation_time",
    "type": "integer",
    "description": "Creation timestamp in UNIX epoch time format"
  },
  {
    "name": "last_modified_time",
    "type": "integer",
    "description": "Latest modified timestamp in UNIX epoch time format"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
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
    "name": "arn",
    "type": "string",
    "description": "Billing Group ARN"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html"><code>AWS::BillingConductor::BillingGroup</code></a>.

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
    <td><code>billing_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, AccountGrouping, PrimaryAccountId, ComputationPreference, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>billing_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>billing_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>billing_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>billing_groups</code></td>
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

Gets all properties from an individual <code>billing_group</code>.
```sql
SELECT
region,
arn,
name,
description,
primary_account_id,
computation_preference,
account_grouping,
size,
status,
status_reason,
creation_time,
last_modified_time,
tags
FROM awscc.billingconductor.billing_groups
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>billing_groups</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.billingconductor.billing_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>billing_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.billingconductor.billing_groups (
 Name,
 PrimaryAccountId,
 ComputationPreference,
 AccountGrouping,
 region
)
SELECT 
'{{ Name }}',
 '{{ PrimaryAccountId }}',
 '{{ ComputationPreference }}',
 '{{ AccountGrouping }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.billingconductor.billing_groups (
 Name,
 Description,
 PrimaryAccountId,
 ComputationPreference,
 AccountGrouping,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ PrimaryAccountId }}',
 '{{ ComputationPreference }}',
 '{{ AccountGrouping }}',
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
  - name: billing_group
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: PrimaryAccountId
        value: '{{ PrimaryAccountId }}'
      - name: ComputationPreference
        value:
          PricingPlanArn: '{{ PricingPlanArn }}'
      - name: AccountGrouping
        value:
          LinkedAccountIds:
            - '{{ LinkedAccountIds[0] }}'
          AutoAssociate: '{{ AutoAssociate }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.billingconductor.billing_groups
SET PatchDocument = string('{{ {
    "Name": name,
    "Description": description,
    "ComputationPreference": computation_preference,
    "AccountGrouping": account_grouping,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.billingconductor.billing_groups
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>billing_groups</code> resource, the following permissions are required:

### Create
```json
billingconductor:CreateBillingGroup,
billingconductor:AssociateAccounts,
billingconductor:ListBillingGroups,
billingconductor:TagResource,
billingconductor:ListTagsForResource
```

### Read
```json
billingconductor:ListBillingGroups,
billingconductor:ListAccountAssociations,
organizations:ListAccounts,
billingconductor:ListTagsForResource
```

### List
```json
billingconductor:ListBillingGroups,
billingconductor:ListAccountAssociations,
organizations:ListAccounts,
billingconductor:ListTagsForResource
```

### Update
```json
billingconductor:UpdateBillingGroup,
billingconductor:ListAccountAssociations,
organizations:ListAccounts,
billingconductor:AssociateAccounts,
billingconductor:DisassociateAccounts,
billingconductor:ListBillingGroups,
billingconductor:TagResource,
billingconductor:UntagResource
```

### Delete
```json
billingconductor:DeleteBillingGroup,
billingconductor:ListBillingGroups,
billingconductor:UntagResource,
billingconductor:UpdateBillingGroup
```
