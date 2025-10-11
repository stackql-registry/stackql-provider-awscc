---
title: limits
hide_title: false
hide_table_of_contents: false
keywords:
  - limits
  - deadline
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

Creates, updates, deletes or gets a <code>limit</code> resource or lists <code>limits</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>limits</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Deadline::Limit Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.deadline.limits" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="amount_requirement_name" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="current_count" /></td><td><code>integer</code></td><td></td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="display_name" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="farm_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="limit_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="max_count" /></td><td><code>integer</code></td><td></td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-limit.html"><code>AWS::Deadline::Limit</code></a>.

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
    <td><CopyableCode code="AmountRequirementName, DisplayName, MaxCount, FarmId, region" /></td>
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
Gets all <code>limits</code> in a region.
```sql
SELECT
region,
amount_requirement_name,
current_count,
description,
display_name,
farm_id,
limit_id,
max_count
FROM awscc.deadline.limits
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>limit</code>.
```sql
SELECT
region,
amount_requirement_name,
current_count,
description,
display_name,
farm_id,
limit_id,
max_count
FROM awscc.deadline.limits
WHERE region = 'us-east-1' AND data__Identifier = '<FarmId>|<LimitId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>limit</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.deadline.limits (
 AmountRequirementName,
 DisplayName,
 FarmId,
 MaxCount,
 region
)
SELECT 
'{{ AmountRequirementName }}',
 '{{ DisplayName }}',
 '{{ FarmId }}',
 '{{ MaxCount }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.deadline.limits (
 AmountRequirementName,
 Description,
 DisplayName,
 FarmId,
 MaxCount,
 region
)
SELECT 
 '{{ AmountRequirementName }}',
 '{{ Description }}',
 '{{ DisplayName }}',
 '{{ FarmId }}',
 '{{ MaxCount }}',
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
  - name: limit
    props:
      - name: AmountRequirementName
        value: '{{ AmountRequirementName }}'
      - name: Description
        value: '{{ Description }}'
      - name: DisplayName
        value: '{{ DisplayName }}'
      - name: FarmId
        value: '{{ FarmId }}'
      - name: MaxCount
        value: '{{ MaxCount }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.deadline.limits
WHERE data__Identifier = '<FarmId|LimitId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>limits</code> resource, the following permissions are required:

### Create
```json
deadline:CreateLimit,
deadline:GetLimit,
kms:Encrypt,
identitystore:ListGroupMembershipsForMember
```

### Read
```json
deadline:GetLimit,
kms:Decrypt,
identitystore:ListGroupMembershipsForMember
```

### Update
```json
deadline:UpdateLimit,
deadline:GetLimit,
kms:Encrypt,
identitystore:ListGroupMembershipsForMember
```

### Delete
```json
deadline:DeleteLimit,
deadline:GetLimit,
kms:Decrypt,
identitystore:ListGroupMembershipsForMember
```

### List
```json
deadline:ListLimits,
identitystore:ListGroupMembershipsForMember
```
