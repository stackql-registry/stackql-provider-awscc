---
title: project_memberships
hide_title: false
hide_table_of_contents: false
keywords:
  - project_memberships
  - datazone
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

Creates, updates, deletes or gets a <code>project_membership</code> resource or lists <code>project_memberships</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>project_memberships</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::DataZone::ProjectMembership Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datazone.project_memberships" /></td></tr>
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
    "name": "project_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "designation",
    "type": "string",
    "description": ""
  },
  {
    "name": "member",
    "type": "object",
    "description": ""
  },
  {
    "name": "domain_identifier",
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
    "name": "project_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "member",
    "type": "object",
    "description": ""
  },
  {
    "name": "domain_identifier",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectmembership.html"><code>AWS::DataZone::ProjectMembership</code></a>.

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
    <td><code>project_memberships</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Designation, DomainIdentifier, ProjectIdentifier, Member, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>project_memberships</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>project_memberships</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>project_memberships_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>project_memberships</code></td>
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

Gets all properties from an individual <code>project_membership</code>.
```sql
SELECT
region,
project_identifier,
designation,
member,
domain_identifier
FROM awscc.datazone.project_memberships
WHERE region = 'us-east-1' AND Identifier = '<DomainIdentifier>|<MemberIdentifier>|<MemberIdentifierType>|<ProjectIdentifier>';
```
</TabItem>
<TabItem value="list">

Lists all <code>project_memberships</code> in a region.
```sql
SELECT
region,
domain_identifier,
member_identifier,
member_identifier_type,
project_identifier
FROM awscc.datazone.project_memberships_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>project_membership</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datazone.project_memberships (
 ProjectIdentifier,
 Designation,
 Member,
 DomainIdentifier,
 region
)
SELECT 
'{{ ProjectIdentifier }}',
 '{{ Designation }}',
 '{{ Member }}',
 '{{ DomainIdentifier }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.datazone.project_memberships (
 ProjectIdentifier,
 Designation,
 Member,
 DomainIdentifier,
 region
)
SELECT 
 '{{ ProjectIdentifier }}',
 '{{ Designation }}',
 '{{ Member }}',
 '{{ DomainIdentifier }}',
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
  - name: project_membership
    props:
      - name: ProjectIdentifier
        value: '{{ ProjectIdentifier }}'
      - name: Designation
        value: '{{ Designation }}'
      - name: Member
        value: null
      - name: DomainIdentifier
        value: '{{ DomainIdentifier }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.datazone.project_memberships
SET PatchDocument = string('{{ {
    "Designation": designation
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<DomainIdentifier>|<MemberIdentifier>|<MemberIdentifierType>|<ProjectIdentifier>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datazone.project_memberships
WHERE Identifier = '<DomainIdentifier|MemberIdentifier|MemberIdentifierType|ProjectIdentifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>project_memberships</code> resource, the following permissions are required:

### Read
```json
datazone:ListProjectMemberships
```

### Create
```json
datazone:CreateProjectMembership,
datazone:ListProjectMemberships,
iam:GetRole,
datazone:GetGroupProfile,
datazone:GetUserProfile
```

### Update
```json
datazone:CreateProjectMembership,
datazone:DeleteProjectMembership
```

### List
```json
datazone:ListProjectMemberships
```

### Delete
```json
datazone:DeleteProjectMembership
```
