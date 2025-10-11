---
title: approval_teams
hide_title: false
hide_table_of_contents: false
keywords:
  - approval_teams
  - mpa
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

Creates, updates, deletes or gets an <code>approval_team</code> resource or lists <code>approval_teams</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>approval_teams</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::MPA::ApprovalTeam.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.mpa.approval_teams" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="approval_strategy" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="approvers" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="policies" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="version_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="update_session_arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="creation_time" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="last_update_time" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="number_of_approvers" /></td><td><code>integer</code></td><td></td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="status_code" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="status_message" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mpa-approvalteam.html"><code>AWS::MPA::ApprovalTeam</code></a>.

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
    <td><CopyableCode code="ApprovalStrategy, Approvers, Policies, Name, Description, region" /></td>
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
Gets all <code>approval_teams</code> in a region.
```sql
SELECT
region,
approval_strategy,
approvers,
tags,
policies,
name,
description,
arn,
version_id,
update_session_arn,
creation_time,
last_update_time,
number_of_approvers,
status,
status_code,
status_message
FROM awscc.mpa.approval_teams
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>approval_team</code>.
```sql
SELECT
region,
approval_strategy,
approvers,
tags,
policies,
name,
description,
arn,
version_id,
update_session_arn,
creation_time,
last_update_time,
number_of_approvers,
status,
status_code,
status_message
FROM awscc.mpa.approval_teams
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>approval_team</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.mpa.approval_teams (
 ApprovalStrategy,
 Approvers,
 Policies,
 Name,
 Description,
 region
)
SELECT 
'{{ ApprovalStrategy }}',
 '{{ Approvers }}',
 '{{ Policies }}',
 '{{ Name }}',
 '{{ Description }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.mpa.approval_teams (
 ApprovalStrategy,
 Approvers,
 Tags,
 Policies,
 Name,
 Description,
 region
)
SELECT 
 '{{ ApprovalStrategy }}',
 '{{ Approvers }}',
 '{{ Tags }}',
 '{{ Policies }}',
 '{{ Name }}',
 '{{ Description }}',
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
  - name: approval_team
    props:
      - name: ApprovalStrategy
        value:
          MofN:
            MinApprovalsRequired: '{{ MinApprovalsRequired }}'
      - name: Approvers
        value:
          - PrimaryIdentityId: '{{ PrimaryIdentityId }}'
            PrimaryIdentitySourceArn: '{{ PrimaryIdentitySourceArn }}'
            ApproverId: '{{ ApproverId }}'
            ResponseTime: '{{ ResponseTime }}'
            PrimaryIdentityStatus: '{{ PrimaryIdentityStatus }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Policies
        value:
          - null
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.mpa.approval_teams
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>approval_teams</code> resource, the following permissions are required:

### Create
```json
mpa:CreateApprovalTeam,
mpa:TagResource,
mpa:GetApprovalTeam,
mpa:ListTagsForResource
```

### Read
```json
mpa:GetApprovalTeam,
mpa:ListTagsForResource
```

### Update
```json
mpa:GetApprovalTeam,
mpa:UpdateApprovalTeam,
mpa:TagResource,
mpa:ListTagsForResource,
mpa:UntagResource
```

### Delete
```json
mpa:StartActiveApprovalTeamDeletion,
mpa:DeleteInactiveApprovalTeamVersion,
mpa:GetApprovalTeam,
mpa:UntagResource
```

### List
```json
mpa:ListApprovalTeams,
mpa:ListTagsForResource
```
