---
title: security_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - security_profiles
  - connect
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

Creates, updates, deletes or gets a <code>security_profile</code> resource or lists <code>security_profiles</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>security_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Connect::SecurityProfile</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.security_profiles" /></td></tr>
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
    "name": "allowed_access_control_tags",
    "type": "array",
    "description": "The list of tags that a security profile uses to restrict access to resources in Amazon Connect.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters"
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. . You can specify a value that is maximum of 256 Unicode characters"
      }
    ]
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the security profile."
  },
  {
    "name": "instance_arn",
    "type": "string",
    "description": "The identifier of the Amazon Connect instance."
  },
  {
    "name": "permissions",
    "type": "array",
    "description": "Permissions assigned to the security profile."
  },
  {
    "name": "security_profile_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the security profile."
  },
  {
    "name": "security_profile_name",
    "type": "string",
    "description": "The name of the security profile."
  },
  {
    "name": "tag_restricted_resources",
    "type": "array",
    "description": "The list of resources that a security profile applies tag restrictions to in Amazon Connect."
  },
  {
    "name": "hierarchy_restricted_resources",
    "type": "array",
    "description": "The list of resources that a security profile applies hierarchy restrictions to in Amazon Connect."
  },
  {
    "name": "allowed_access_control_hierarchy_group_id",
    "type": "string",
    "description": "The identifier of the hierarchy group that a security profile uses to restrict access to resources in Amazon Connect."
  },
  {
    "name": "applications",
    "type": "array",
    "description": "A list of third-party applications that the security profile will give access to.",
    "children": [
      {
        "name": "application_permissions",
        "type": "array",
        "description": "The permissions that the agent is granted on the application"
      },
      {
        "name": "namespace",
        "type": "string",
        "description": "Namespace of the application that you want to give access to."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags used to organize, track, or control access for this resource."
  },
  {
    "name": "last_modified_region",
    "type": "string",
    "description": "The AWS Region where this resource was last modified."
  },
  {
    "name": "last_modified_time",
    "type": "number",
    "description": "The timestamp when this resource was last modified."
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
    "name": "security_profile_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the security profile."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securityprofile.html"><code>AWS::Connect::SecurityProfile</code></a>.

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
    <td><code>security_profiles</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="InstanceArn, SecurityProfileName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>security_profiles</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>security_profiles</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>security_profiles_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>security_profiles</code></td>
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

Gets all properties from an individual <code>security_profile</code>.
```sql
SELECT
region,
allowed_access_control_tags,
description,
instance_arn,
permissions,
security_profile_arn,
security_profile_name,
tag_restricted_resources,
hierarchy_restricted_resources,
allowed_access_control_hierarchy_group_id,
applications,
tags,
last_modified_region,
last_modified_time
FROM awscc.connect.security_profiles
WHERE region = 'us-east-1' AND Identifier = '<SecurityProfileArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>security_profiles</code> in a region.
```sql
SELECT
region,
security_profile_arn
FROM awscc.connect.security_profiles_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>security_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.connect.security_profiles (
 InstanceArn,
 SecurityProfileName,
 region
)
SELECT 
'{{ InstanceArn }}',
 '{{ SecurityProfileName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.connect.security_profiles (
 AllowedAccessControlTags,
 Description,
 InstanceArn,
 Permissions,
 SecurityProfileName,
 TagRestrictedResources,
 HierarchyRestrictedResources,
 AllowedAccessControlHierarchyGroupId,
 Applications,
 Tags,
 region
)
SELECT 
 '{{ AllowedAccessControlTags }}',
 '{{ Description }}',
 '{{ InstanceArn }}',
 '{{ Permissions }}',
 '{{ SecurityProfileName }}',
 '{{ TagRestrictedResources }}',
 '{{ HierarchyRestrictedResources }}',
 '{{ AllowedAccessControlHierarchyGroupId }}',
 '{{ Applications }}',
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
  - name: security_profile
    props:
      - name: AllowedAccessControlTags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Description
        value: '{{ Description }}'
      - name: InstanceArn
        value: '{{ InstanceArn }}'
      - name: Permissions
        value:
          - '{{ Permissions[0] }}'
      - name: SecurityProfileName
        value: '{{ SecurityProfileName }}'
      - name: TagRestrictedResources
        value:
          - '{{ TagRestrictedResources[0] }}'
      - name: HierarchyRestrictedResources
        value:
          - null
      - name: AllowedAccessControlHierarchyGroupId
        value: '{{ AllowedAccessControlHierarchyGroupId }}'
      - name: Applications
        value:
          - ApplicationPermissions:
              - '{{ ApplicationPermissions[0] }}'
            Namespace: '{{ Namespace }}'
      - name: Tags
        value:
          - null

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.connect.security_profiles
SET PatchDocument = string('{{ {
    "AllowedAccessControlTags": allowed_access_control_tags,
    "Description": description,
    "Permissions": permissions,
    "TagRestrictedResources": tag_restricted_resources,
    "HierarchyRestrictedResources": hierarchy_restricted_resources,
    "AllowedAccessControlHierarchyGroupId": allowed_access_control_hierarchy_group_id,
    "Applications": applications,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<SecurityProfileArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connect.security_profiles
WHERE Identifier = '<SecurityProfileArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>security_profiles</code> resource, the following permissions are required:

### Create
```json
connect:CreateSecurityProfile,
connect:TagResource
```

### Read
```json
connect:DescribeSecurityProfile,
connect:ListSecurityProfileApplications,
connect:ListSecurityProfilePermissions
```

### Update
```json
connect:TagResource,
connect:UpdateSecurityProfile,
connect:UntagResource
```

### Delete
```json
connect:DeleteSecurityProfile,
connect:UntagResource
```

### List
```json
connect:ListSecurityProfiles
```
