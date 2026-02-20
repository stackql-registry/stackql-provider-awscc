---
title: profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - profiles
  - rolesanywhere
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

Creates, updates, deletes or gets a <code>profile</code> resource or lists <code>profiles</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::RolesAnywhere::Profile Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rolesanywhere.profiles" /></td></tr>
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
    "name": "duration_seconds",
    "type": "number",
    "description": ""
  },
  {
    "name": "enabled",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "managed_policy_arns",
    "type": "array",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "profile_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "profile_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "require_instance_properties",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "role_arns",
    "type": "array",
    "description": ""
  },
  {
    "name": "session_policy",
    "type": "string",
    "description": ""
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
    "name": "attribute_mappings",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "mapping_rules",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "specifier",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "certificate_field",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "accept_role_session_name",
    "type": "boolean",
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
    "name": "profile_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html"><code>AWS::RolesAnywhere::Profile</code></a>.

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
    <td><code>profiles</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, RoleArns, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>profiles</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>profiles</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>profiles_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>profiles</code></td>
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

Gets all properties from an individual <code>profile</code>.
```sql
SELECT
region,
duration_seconds,
enabled,
managed_policy_arns,
name,
profile_arn,
profile_id,
require_instance_properties,
role_arns,
session_policy,
tags,
attribute_mappings,
accept_role_session_name
FROM awscc.rolesanywhere.profiles
WHERE region = 'us-east-1' AND data__Identifier = '<ProfileId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>profiles</code> in a region.
```sql
SELECT
region,
profile_id
FROM awscc.rolesanywhere.profiles_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.rolesanywhere.profiles (
 Name,
 RoleArns,
 region
)
SELECT 
'{{ Name }}',
 '{{ RoleArns }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.rolesanywhere.profiles (
 DurationSeconds,
 Enabled,
 ManagedPolicyArns,
 Name,
 RequireInstanceProperties,
 RoleArns,
 SessionPolicy,
 Tags,
 AttributeMappings,
 AcceptRoleSessionName,
 region
)
SELECT 
 '{{ DurationSeconds }}',
 '{{ Enabled }}',
 '{{ ManagedPolicyArns }}',
 '{{ Name }}',
 '{{ RequireInstanceProperties }}',
 '{{ RoleArns }}',
 '{{ SessionPolicy }}',
 '{{ Tags }}',
 '{{ AttributeMappings }}',
 '{{ AcceptRoleSessionName }}',
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
  - name: profile
    props:
      - name: DurationSeconds
        value: null
      - name: Enabled
        value: '{{ Enabled }}'
      - name: ManagedPolicyArns
        value:
          - '{{ ManagedPolicyArns[0] }}'
      - name: Name
        value: '{{ Name }}'
      - name: RequireInstanceProperties
        value: '{{ RequireInstanceProperties }}'
      - name: RoleArns
        value:
          - '{{ RoleArns[0] }}'
      - name: SessionPolicy
        value: '{{ SessionPolicy }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: AttributeMappings
        value:
          - MappingRules:
              - Specifier: '{{ Specifier }}'
            CertificateField: '{{ CertificateField }}'
      - name: AcceptRoleSessionName
        value: '{{ AcceptRoleSessionName }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.rolesanywhere.profiles
SET data__PatchDocument = string('{{ {
    "DurationSeconds": duration_seconds,
    "Enabled": enabled,
    "ManagedPolicyArns": managed_policy_arns,
    "Name": name,
    "RoleArns": role_arns,
    "SessionPolicy": session_policy,
    "Tags": tags,
    "AttributeMappings": attribute_mappings,
    "AcceptRoleSessionName": accept_role_session_name
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ProfileId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.rolesanywhere.profiles
WHERE data__Identifier = '<ProfileId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>profiles</code> resource, the following permissions are required:

### Create
```json
iam:GetRole,
iam:GetPolicy,
iam:PassRole,
rolesanywhere:CreateProfile,
rolesanywhere:TagResource,
rolesanywhere:PutAttributeMapping,
rolesanywhere:DeleteAttributeMapping
```

### Read
```json
rolesanywhere:GetProfile,
rolesanywhere:ListTagsForResource
```

### Update
```json
iam:GetRole,
iam:GetPolicy,
iam:PassRole,
rolesanywhere:GetProfile,
rolesanywhere:UpdateProfile,
rolesanywhere:EnableProfile,
rolesanywhere:DisableProfile,
rolesanywhere:TagResource,
rolesanywhere:UntagResource,
rolesanywhere:ListTagsForResource,
rolesanywhere:PutAttributeMapping,
rolesanywhere:DeleteAttributeMapping
```

### Delete
```json
rolesanywhere:DeleteProfile
```

### List
```json
rolesanywhere:ListProfiles,
rolesanywhere:ListTagsForResource
```
