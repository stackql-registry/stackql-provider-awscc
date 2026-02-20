---
title: account_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - account_policies
  - logs
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

Creates, updates, deletes or gets an <code>account_policy</code> resource or lists <code>account_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>account_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::Logs::AccountPolicy resource specifies a CloudWatch Logs AccountPolicy.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.logs.account_policies" /></td></tr>
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
    "name": "account_id",
    "type": "string",
    "description": "User account id"
  },
  {
    "name": "policy_name",
    "type": "string",
    "description": "The name of the account policy"
  },
  {
    "name": "policy_document",
    "type": "string",
    "description": "The body of the policy document you want to use for this topic.<br />You can only add one policy per PolicyType.<br />The policy must be in JSON string format.<br />Length Constraints: Maximum length of 30720"
  },
  {
    "name": "policy_type",
    "type": "string",
    "description": "Type of the policy."
  },
  {
    "name": "scope",
    "type": "string",
    "description": "Scope for policy application"
  },
  {
    "name": "selection_criteria",
    "type": "string",
    "description": "Log group selection criteria to apply policy only to a subset of log groups. SelectionCriteria string can be up to 25KB and cloudwatchlogs determines the length of selectionCriteria by using its UTF-8 bytes"
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
    "name": "account_id",
    "type": "string",
    "description": "User account id"
  },
  {
    "name": "policy_name",
    "type": "string",
    "description": "The name of the account policy"
  },
  {
    "name": "policy_type",
    "type": "string",
    "description": "Type of the policy."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-accountpolicy.html"><code>AWS::Logs::AccountPolicy</code></a>.

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
    <td><code>account_policies</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="PolicyName, PolicyType, PolicyDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>account_policies</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>account_policies</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>account_policies_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>account_policies</code></td>
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

Gets all properties from an individual <code>account_policy</code>.
```sql
SELECT
region,
account_id,
policy_name,
policy_document,
policy_type,
scope,
selection_criteria
FROM awscc.logs.account_policies
WHERE region = 'us-east-1' AND Identifier = '<AccountId>|<PolicyType>|<PolicyName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>account_policies</code> in a region.
```sql
SELECT
region,
account_id,
policy_type,
policy_name
FROM awscc.logs.account_policies_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>account_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.logs.account_policies (
 PolicyName,
 PolicyDocument,
 PolicyType,
 region
)
SELECT 
'{{ PolicyName }}',
 '{{ PolicyDocument }}',
 '{{ PolicyType }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.logs.account_policies (
 PolicyName,
 PolicyDocument,
 PolicyType,
 Scope,
 SelectionCriteria,
 region
)
SELECT 
 '{{ PolicyName }}',
 '{{ PolicyDocument }}',
 '{{ PolicyType }}',
 '{{ Scope }}',
 '{{ SelectionCriteria }}',
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
  - name: account_policy
    props:
      - name: PolicyName
        value: '{{ PolicyName }}'
      - name: PolicyDocument
        value: '{{ PolicyDocument }}'
      - name: PolicyType
        value: '{{ PolicyType }}'
      - name: Scope
        value: '{{ Scope }}'
      - name: SelectionCriteria
        value: '{{ SelectionCriteria }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>account_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.logs.account_policies
SET PatchDocument = string('{{ {
    "PolicyDocument": policy_document,
    "Scope": scope,
    "SelectionCriteria": selection_criteria
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<AccountId>|<PolicyType>|<PolicyName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.logs.account_policies
WHERE Identifier = '<AccountId|PolicyType|PolicyName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>account_policies</code> resource, the following permissions are required:

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
logs:PutAccountPolicy,
logs:PutIndexPolicy,
logs:PutDataProtectionPolicy,
logs:DescribeAccountPolicies,
logs:CreateLogDelivery,
s3:REST.PUT.OBJECT,
firehose:TagDeliveryStream,
logs:PutSubscriptionFilter,
logs:DeleteSubscriptionFilter,
logs:PutTransformer,
logs:PutMetricExtractionPolicy,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
logs:DescribeAccountPolicies,
logs:GetTransformer,
logs:GetMetricExtractionPolicy
```

</TabItem>
<TabItem value="update">

```json
logs:PutAccountPolicy,
logs:PutIndexPolicy,
logs:PutDataProtectionPolicy,
logs:DescribeAccountPolicies,
logs:DeleteAccountPolicy,
logs:DeleteIndexPolicy,
logs:DeleteDataProtectionPolicy,
logs:CreateLogDelivery,
logs:PutSubscriptionFilter,
logs:DeleteSubscriptionFilter,
logs:PutTransformer,
logs:DeleteTransformer,
logs:PutMetricExtractionPolicy,
logs:DeleteMetricExtractionPolicy,
s3:REST.PUT.OBJECT,
firehose:TagDeliveryStream,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
logs:DeleteAccountPolicy,
logs:DeleteIndexPolicy,
logs:DeleteDataProtectionPolicy,
logs:DescribeAccountPolicies,
logs:DeleteSubscriptionFilter,
logs:DeleteTransformer,
logs:DeleteMetricExtractionPolicy,
iam:PassRole
```

</TabItem>
<TabItem value="list">

```json
logs:DescribeAccountPolicies,
logs:GetTransformer,
logs:GetMetricExtractionPolicy
```

</TabItem>
</Tabs>