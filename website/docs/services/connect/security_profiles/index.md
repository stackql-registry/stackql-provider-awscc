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
WHERE region = 'us-east-1' AND Identifier = '{{ security_profile_arn }}';
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
'{{ instance_arn }}',
 '{{ security_profile_name }}',
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
 '{{ allowed_access_control_tags }}',
 '{{ description }}',
 '{{ instance_arn }}',
 '{{ permissions }}',
 '{{ security_profile_name }}',
 '{{ tag_restricted_resources }}',
 '{{ hierarchy_restricted_resources }}',
 '{{ allowed_access_control_hierarchy_group_id }}',
 '{{ applications }}',
 '{{ tags }}',
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
      - name: allowed_access_control_tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: description
        value: '{{ description }}'
      - name: instance_arn
        value: '{{ instance_arn }}'
      - name: permissions
        value:
          - '{{ permissions[0] }}'
      - name: security_profile_name
        value: '{{ security_profile_name }}'
      - name: tag_restricted_resources
        value:
          - '{{ tag_restricted_resources[0] }}'
      - name: hierarchy_restricted_resources
        value:
          - null
      - name: allowed_access_control_hierarchy_group_id
        value: '{{ allowed_access_control_hierarchy_group_id }}'
      - name: applications
        value:
          - application_permissions:
              - '{{ application_permissions[0] }}'
            namespace: '{{ namespace }}'
      - name: tags
        value:
          - null
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>security_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
AND Identifier = '{{ security_profile_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connect.security_profiles
WHERE Identifier = '{{ security_profile_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>security_profiles</code> resource, the following permissions are required:

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
connect:CreateSecurityProfile,
connect:TagResource
```

</TabItem>
<TabItem value="read">

```json
connect:DescribeSecurityProfile,
connect:ListSecurityProfileApplications,
connect:ListSecurityProfilePermissions
```

</TabItem>
<TabItem value="update">

```json
connect:TagResource,
connect:UpdateSecurityProfile,
connect:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
connect:DeleteSecurityProfile,
connect:UntagResource
```

</TabItem>
<TabItem value="list">

```json
connect:ListSecurityProfiles
```

</TabItem>
</Tabs>