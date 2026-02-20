---
title: resiliency_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - resiliency_policies
  - resiliencehub
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

Creates, updates, deletes or gets a <code>resiliency_policy</code> resource or lists <code>resiliency_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>resiliency_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type Definition for Resiliency Policy.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.resiliencehub.resiliency_policies" /></td></tr>
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
    "name": "policy_name",
    "type": "string",
    "description": "Name of Resiliency Policy."
  },
  {
    "name": "policy_description",
    "type": "string",
    "description": "Description of Resiliency Policy."
  },
  {
    "name": "data_location_constraint",
    "type": "string",
    "description": "Data Location Constraint of the Policy."
  },
  {
    "name": "tier",
    "type": "string",
    "description": "Resiliency Policy Tier."
  },
  {
    "name": "policy",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "az",
        "type": "object",
        "description": "Failure Policy.",
        "children": [
          {
            "name": "rto_in_secs",
            "type": "integer",
            "description": "RTO in seconds."
          },
          {
            "name": "rpo_in_secs",
            "type": "integer",
            "description": "RPO in seconds."
          }
        ]
      }
    ]
  },
  {
    "name": "policy_arn",
    "type": "string",
    "description": "Amazon Resource Name (ARN) of the Resiliency Policy."
  },
  {
    "name": "tags",
    "type": "object",
    "description": ""
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
    "name": "policy",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "az",
        "type": "object",
        "description": "Failure Policy.",
        "children": [
          {
            "name": "rto_in_secs",
            "type": "integer",
            "description": "RTO in seconds."
          },
          {
            "name": "rpo_in_secs",
            "type": "integer",
            "description": "RPO in seconds."
          }
        ]
      }
    ]
  },
  {
    "name": "policy_arn",
    "type": "string",
    "description": "Amazon Resource Name (ARN) of the Resiliency Policy."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html"><code>AWS::ResilienceHub::ResiliencyPolicy</code></a>.

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
    <td><code>resiliency_policies</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="PolicyName, Tier, Policy, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>resiliency_policies</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>resiliency_policies</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>resiliency_policies_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>resiliency_policies</code></td>
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

Gets all properties from an individual <code>resiliency_policy</code>.
```sql
SELECT
region,
policy_name,
policy_description,
data_location_constraint,
tier,
policy,
policy_arn,
tags
FROM awscc.resiliencehub.resiliency_policies
WHERE region = 'us-east-1' AND Identifier = '<PolicyArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>resiliency_policies</code> in a region.
```sql
SELECT
region,
policy_arn
FROM awscc.resiliencehub.resiliency_policies_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>resiliency_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.resiliencehub.resiliency_policies (
 PolicyName,
 Tier,
 Policy,
 region
)
SELECT 
'{{ PolicyName }}',
 '{{ Tier }}',
 '{{ Policy }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.resiliencehub.resiliency_policies (
 PolicyName,
 PolicyDescription,
 DataLocationConstraint,
 Tier,
 Policy,
 Tags,
 region
)
SELECT 
 '{{ PolicyName }}',
 '{{ PolicyDescription }}',
 '{{ DataLocationConstraint }}',
 '{{ Tier }}',
 '{{ Policy }}',
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
  - name: resiliency_policy
    props:
      - name: PolicyName
        value: '{{ PolicyName }}'
      - name: PolicyDescription
        value: '{{ PolicyDescription }}'
      - name: DataLocationConstraint
        value: '{{ DataLocationConstraint }}'
      - name: Tier
        value: '{{ Tier }}'
      - name: Policy
        value:
          AZ:
            RtoInSecs: '{{ RtoInSecs }}'
            RpoInSecs: '{{ RpoInSecs }}'
          Hardware: null
          Software: null
          Region: null
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.resiliencehub.resiliency_policies
SET PatchDocument = string('{{ {
    "PolicyName": policy_name,
    "PolicyDescription": policy_description,
    "DataLocationConstraint": data_location_constraint,
    "Tier": tier,
    "Policy": policy,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<PolicyArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.resiliencehub.resiliency_policies
WHERE Identifier = '<PolicyArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>resiliency_policies</code> resource, the following permissions are required:

### Create
```json
resiliencehub:CreateResiliencyPolicy,
resiliencehub:DescribeResiliencyPolicy,
resiliencehub:TagResource
```

### Update
```json
resiliencehub:DescribeResiliencyPolicy,
resiliencehub:UpdateResiliencyPolicy,
resiliencehub:TagResource,
resiliencehub:UntagResource,
resiliencehub:ListTagsForResource
```

### Read
```json
resiliencehub:DescribeResiliencyPolicy,
resiliencehub:ListTagsForResource
```

### Delete
```json
resiliencehub:DeleteResiliencyPolicy,
resiliencehub:UntagResource
```

### List
```json
resiliencehub:ListResiliencyPolicies
```
