---
title: scheduling_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - scheduling_policies
  - batch
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

Creates, updates, deletes or gets a <code>scheduling_policy</code> resource or lists <code>scheduling_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>scheduling_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Batch::SchedulingPolicy</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.batch.scheduling_policies" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "Name of Scheduling Policy."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "ARN of the Scheduling Policy."
  },
  {
    "name": "fairshare_policy",
    "type": "object",
    "description": "Fair Share Policy for the Job Queue.",
    "children": [
      {
        "name": "share_decay_seconds",
        "type": "number",
        "description": ""
      },
      {
        "name": "compute_reservation",
        "type": "number",
        "description": ""
      },
      {
        "name": "share_distribution",
        "type": "array",
        "description": "List of Share Attributes",
        "children": [
          {
            "name": "share_identifier",
            "type": "string",
            "description": ""
          },
          {
            "name": "weight_factor",
            "type": "number",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A key-value pair to associate with a resource."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-schedulingpolicy.html"><code>AWS::Batch::SchedulingPolicy</code></a>.

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

Gets all properties from an individual <code>scheduling_policy</code>.
```sql
SELECT
region,
name,
arn,
fairshare_policy,
tags
FROM awscc.batch.scheduling_policies
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>scheduling_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.batch.scheduling_policies (
 Name,
 FairsharePolicy,
 Tags,
 region
)
SELECT 
'{{ Name }}',
 '{{ FairsharePolicy }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.batch.scheduling_policies (
 Name,
 FairsharePolicy,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ FairsharePolicy }}',
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
  - name: scheduling_policy
    props:
      - name: Name
        value: '{{ Name }}'
      - name: FairsharePolicy
        value:
          ShareDecaySeconds: null
          ComputeReservation: null
          ShareDistribution:
            - ShareIdentifier: '{{ ShareIdentifier }}'
              WeightFactor: null
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.batch.scheduling_policies
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>scheduling_policies</code> resource, the following permissions are required:

### Create
```json
Batch:CreateSchedulingPolicy,
Batch:TagResource
```

### Read
```json
Batch:DescribeSchedulingPolicies
```

### Update
```json
Batch:UpdateSchedulingPolicy,
Batch:TagResource,
Batch:UnTagResource
```

### Delete
```json
Batch:DescribeSchedulingPolicies,
Batch:DeleteSchedulingPolicy
```

### List
```json
Batch:ListSchedulingPolicies,
Batch:DescribeSchedulingPolicies
```
