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
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

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
    "name": "approval_strategy",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "mof_n",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "min_approvals_required",
            "type": "integer",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "approvers",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "primary_identity_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "primary_identity_source_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "approver_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "response_time",
        "type": "string",
        "description": ""
      },
      {
        "name": "primary_identity_status",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "policies",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "policy_arn",
        "type": "string",
        "description": ""
      }
    ]
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
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "version_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "update_session_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "number_of_approvers",
    "type": "integer",
    "description": ""
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "status_code",
    "type": "string",
    "description": ""
  },
  {
    "name": "status_message",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mpa-approvalteam.html"><code>AWS::MPA::ApprovalTeam</code></a>.

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
    <td><code>approval_teams</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ApprovalStrategy, Approvers, Policies, Name, Description, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>approval_teams</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>approval_teams</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>approval_teams_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>approval_teams</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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
</TabItem>
<TabItem value="list">

Lists all <code>approval_teams</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.mpa.approval_teams_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.mpa.approval_teams
SET data__PatchDocument = string('{{ {
    "ApprovalStrategy": approval_strategy,
    "Tags": tags,
    "Description": description
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Arn>';
```


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
