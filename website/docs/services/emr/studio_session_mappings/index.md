---
title: studio_session_mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - studio_session_mappings
  - emr
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

Creates, updates, deletes or gets a <code>studio_session_mapping</code> resource or lists <code>studio_session_mappings</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>studio_session_mappings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An example resource schema demonstrating some basic constructs and validation rules.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.emr.studio_session_mappings" /></td></tr>
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
    "name": "identity_name",
    "type": "string",
    "description": "The name of the user or group. For more information, see UserName and DisplayName in the AWS SSO Identity Store API Reference. Either IdentityName or IdentityId must be specified."
  },
  {
    "name": "identity_type",
    "type": "string",
    "description": "Specifies whether the identity to map to the Studio is a user or a group."
  },
  {
    "name": "session_policy_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the session policy that will be applied to the user or group. Session policies refine Studio user permissions without the need to use multiple IAM user roles."
  },
  {
    "name": "studio_id",
    "type": "string",
    "description": "The ID of the Amazon EMR Studio to which the user or group will be mapped."
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
    "name": "identity_name",
    "type": "string",
    "description": "The name of the user or group. For more information, see UserName and DisplayName in the AWS SSO Identity Store API Reference. Either IdentityName or IdentityId must be specified."
  },
  {
    "name": "identity_type",
    "type": "string",
    "description": "Specifies whether the identity to map to the Studio is a user or a group."
  },
  {
    "name": "studio_id",
    "type": "string",
    "description": "The ID of the Amazon EMR Studio to which the user or group will be mapped."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studiosessionmapping.html"><code>AWS::EMR::StudioSessionMapping</code></a>.

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
    <td><code>studio_session_mappings</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="StudioId, IdentityName, IdentityType, SessionPolicyArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>studio_session_mappings</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>studio_session_mappings</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>studio_session_mappings_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>studio_session_mappings</code></td>
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

Gets all properties from an individual <code>studio_session_mapping</code>.
```sql
SELECT
region,
identity_name,
identity_type,
session_policy_arn,
studio_id
FROM awscc.emr.studio_session_mappings
WHERE region = 'us-east-1' AND Identifier = '<StudioId>|<IdentityType>|<IdentityName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>studio_session_mappings</code> in a region.
```sql
SELECT
region,
studio_id,
identity_type,
identity_name
FROM awscc.emr.studio_session_mappings_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>studio_session_mapping</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.emr.studio_session_mappings (
 IdentityName,
 IdentityType,
 SessionPolicyArn,
 StudioId,
 region
)
SELECT 
'{{ IdentityName }}',
 '{{ IdentityType }}',
 '{{ SessionPolicyArn }}',
 '{{ StudioId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.emr.studio_session_mappings (
 IdentityName,
 IdentityType,
 SessionPolicyArn,
 StudioId,
 region
)
SELECT 
 '{{ IdentityName }}',
 '{{ IdentityType }}',
 '{{ SessionPolicyArn }}',
 '{{ StudioId }}',
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
  - name: studio_session_mapping
    props:
      - name: IdentityName
        value: '{{ IdentityName }}'
      - name: IdentityType
        value: '{{ IdentityType }}'
      - name: SessionPolicyArn
        value: '{{ SessionPolicyArn }}'
      - name: StudioId
        value: '{{ StudioId }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.emr.studio_session_mappings
SET PatchDocument = string('{{ {
    "SessionPolicyArn": session_policy_arn
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<StudioId>|<IdentityType>|<IdentityName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.emr.studio_session_mappings
WHERE Identifier = '<StudioId|IdentityType|IdentityName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>studio_session_mappings</code> resource, the following permissions are required:

### Create
```json
elasticmapreduce:CreateStudioSessionMapping,
sso-directory:SearchUsers,
sso-directory:SearchGroups,
sso-directory:DescribeUser,
sso-directory:DescribeGroup,
sso:GetManagedApplicationInstance,
sso:ListDirectoryAssociations,
sso:GetProfile,
sso:ListProfiles,
sso:AssociateProfile,
sso:CreateApplication,
sso:PutApplicationAuthenticationMethod,
sso:PutApplicationGrant,
sso:PutApplicationAccessScope,
sso:PutApplicationAssignmentConfiguration,
sso:DescribeApplication,
sso:DeleteApplication,
sso:DeleteApplicationAuthenticationMethod,
sso:DeleteApplicationAccessScope,
sso:DeleteApplicationGrant,
sso:ListInstances,
sso-directory:CreateUser,
sso-directory:CreateGroup,
sso:CreateApplicationAssignment,
sso:DescribeInstance,
sso:DeleteApplicationAssignment,
sso:ListApplicationAssignments
```

### Read
```json
elasticmapreduce:GetStudioSessionMapping,
sso-directory:SearchUsers,
sso-directory:SearchGroups,
sso-directory:DescribeUser,
sso-directory:DescribeGroup,
sso:GetManagedApplicationInstance,
sso:DescribeInstance
```

### Update
```json
elasticmapreduce:GetStudioSessionMapping,
elasticmapreduce:UpdateStudioSessionMapping,
sso-directory:SearchUsers,
sso-directory:SearchGroups,
sso-directory:DescribeUser,
sso-directory:DescribeGroup,
sso:GetManagedApplicationInstance,
sso:DescribeInstance
```

### Delete
```json
elasticmapreduce:GetStudioSessionMapping,
elasticmapreduce:DeleteStudioSessionMapping,
sso-directory:SearchUsers,
sso-directory:SearchGroups,
sso-directory:DescribeUser,
sso-directory:DescribeGroup,
sso:GetManagedApplicationInstance,
sso:DescribeInstance,
sso:ListDirectoryAssociations,
sso:GetProfile,
sso:ListProfiles,
sso:DisassociateProfile
```

### List
```json
elasticmapreduce:ListStudioSessionMappings
```
