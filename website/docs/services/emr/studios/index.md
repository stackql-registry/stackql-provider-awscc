---
title: studios
hide_title: false
hide_table_of_contents: false
keywords:
  - studios
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

Creates, updates, deletes or gets a <code>studio</code> resource or lists <code>studios</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>studios</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::EMR::Studio</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.emr.studios" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the EMR Studio."
  },
  {
    "name": "auth_mode",
    "type": "string",
    "description": "Specifies whether the Studio authenticates users using single sign-on (SSO) or IAM. Amazon EMR Studio currently only supports SSO authentication."
  },
  {
    "name": "default_s3_location",
    "type": "string",
    "description": "The default Amazon S3 location to back up EMR Studio Workspaces and notebook files. A Studio user can select an alternative Amazon S3 location when creating a Workspace."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A detailed description of the Studio."
  },
  {
    "name": "engine_security_group_id",
    "type": "string",
    "description": "The ID of the Amazon EMR Studio Engine security group. The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by VpcId."
  },
  {
    "name": "name",
    "type": "string",
    "description": "A descriptive name for the Amazon EMR Studio."
  },
  {
    "name": "studio_id",
    "type": "string",
    "description": "The ID of the EMR Studio."
  },
  {
    "name": "subnet_ids",
    "type": "array",
    "description": "A list of up to 5 subnet IDs to associate with the Studio. The subnets must belong to the VPC specified by VpcId. Studio users can create a Workspace in any of the specified subnets."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of tags to associate with the Studio. Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters, and an optional value string with a maximum of 256 characters.",
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
    "name": "url",
    "type": "string",
    "description": "The unique Studio access URL."
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": "The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio."
  },
  {
    "name": "workspace_security_group_id",
    "type": "string",
    "description": "The ID of the Amazon EMR Studio Workspace security group. The Workspace security group allows outbound network traffic to resources in the Engine security group, and it must be in the same VPC specified by VpcId."
  },
  {
    "name": "idp_auth_url",
    "type": "string",
    "description": "Your identity provider's authentication endpoint. Amazon EMR Studio redirects federated users to this endpoint for authentication when logging in to a Studio with the Studio URL."
  },
  {
    "name": "idp_relay_state_parameter_name",
    "type": "string",
    "description": "The name of relay state parameter for external Identity Provider."
  },
  {
    "name": "trusted_identity_propagation_enabled",
    "type": "boolean",
    "description": "A Boolean indicating whether to enable Trusted identity propagation for the Studio. The default value is false."
  },
  {
    "name": "idc_user_assignment",
    "type": "string",
    "description": "Specifies whether IAM Identity Center user assignment is REQUIRED or OPTIONAL. If the value is set to REQUIRED, users must be explicitly assigned to the Studio application to access the Studio."
  },
  {
    "name": "idc_instance_arn",
    "type": "string",
    "description": "The ARN of the IAM Identity Center instance to create the Studio application."
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
    "name": "studio_id",
    "type": "string",
    "description": "The ID of the EMR Studio."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studio.html"><code>AWS::EMR::Studio</code></a>.

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
    <td><code>studios</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AuthMode, EngineSecurityGroupId, Name, ServiceRole, SubnetIds, VpcId, WorkspaceSecurityGroupId, DefaultS3Location, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>studios</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>studios</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>studios_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>studios</code></td>
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

Gets all properties from an individual <code>studio</code>.
```sql
SELECT
region,
arn,
auth_mode,
default_s3_location,
description,
engine_security_group_id,
name,
service_role,
studio_id,
subnet_ids,
tags,
url,
user_role,
vpc_id,
workspace_security_group_id,
idp_auth_url,
idp_relay_state_parameter_name,
trusted_identity_propagation_enabled,
idc_user_assignment,
idc_instance_arn,
encryption_key_arn
FROM awscc.emr.studios
WHERE region = 'us-east-1' AND Identifier = '{{ studio_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>studios</code> in a region.
```sql
SELECT
region,
studio_id
FROM awscc.emr.studios_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>studio</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.emr.studios (
 AuthMode,
 DefaultS3Location,
 EngineSecurityGroupId,
 Name,
 ServiceRole,
 SubnetIds,
 VpcId,
 WorkspaceSecurityGroupId,
 region
)
SELECT
'{{ auth_mode }}',
 '{{ default_s3_location }}',
 '{{ engine_security_group_id }}',
 '{{ name }}',
 '{{ service_role }}',
 '{{ subnet_ids }}',
 '{{ vpc_id }}',
 '{{ workspace_security_group_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.emr.studios (
 AuthMode,
 DefaultS3Location,
 Description,
 EngineSecurityGroupId,
 Name,
 ServiceRole,
 SubnetIds,
 Tags,
 UserRole,
 VpcId,
 WorkspaceSecurityGroupId,
 IdpAuthUrl,
 IdpRelayStateParameterName,
 TrustedIdentityPropagationEnabled,
 IdcUserAssignment,
 IdcInstanceArn,
 EncryptionKeyArn,
 region
)
SELECT
 '{{ auth_mode }}',
 '{{ default_s3_location }}',
 '{{ description }}',
 '{{ engine_security_group_id }}',
 '{{ name }}',
 '{{ service_role }}',
 '{{ subnet_ids }}',
 '{{ tags }}',
 '{{ user_role }}',
 '{{ vpc_id }}',
 '{{ workspace_security_group_id }}',
 '{{ idp_auth_url }}',
 '{{ idp_relay_state_parameter_name }}',
 '{{ trusted_identity_propagation_enabled }}',
 '{{ idc_user_assignment }}',
 '{{ idc_instance_arn }}',
 '{{ encryption_key_arn }}',
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
  - name: studio
    props:
      - name: auth_mode
        value: '{{ auth_mode }}'
      - name: default_s3_location
        value: '{{ default_s3_location }}'
      - name: description
        value: '{{ description }}'
      - name: engine_security_group_id
        value: '{{ engine_security_group_id }}'
      - name: name
        value: '{{ name }}'
      - name: service_role
        value: '{{ service_role }}'
      - name: subnet_ids
        value:
          - '{{ subnet_ids[0] }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: user_role
        value: null
      - name: vpc_id
        value: '{{ vpc_id }}'
      - name: workspace_security_group_id
        value: '{{ workspace_security_group_id }}'
      - name: idp_auth_url
        value: '{{ idp_auth_url }}'
      - name: idp_relay_state_parameter_name
        value: '{{ idp_relay_state_parameter_name }}'
      - name: trusted_identity_propagation_enabled
        value: '{{ trusted_identity_propagation_enabled }}'
      - name: idc_user_assignment
        value: '{{ idc_user_assignment }}'
      - name: idc_instance_arn
        value: '{{ idc_instance_arn }}'
      - name: encryption_key_arn
        value: null
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>studio</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.emr.studios
SET PatchDocument = string('{{ {
    "DefaultS3Location": default_s3_location,
    "Description": description,
    "Name": name,
    "SubnetIds": subnet_ids,
    "Tags": tags,
    "IdpAuthUrl": idp_auth_url,
    "IdpRelayStateParameterName": idp_relay_state_parameter_name
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ studio_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.emr.studios
WHERE Identifier = '{{ studio_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>studios</code> resource, the following permissions are required:

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
elasticmapreduce:CreateStudio,
elasticmapreduce:DescribeStudio,
elasticmapreduce:AddTags,
sso:CreateManagedApplicationInstance,
sso:DeleteManagedApplicationInstance,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
elasticmapreduce:DescribeStudio,
sso:GetManagedApplicationInstance
```

</TabItem>
<TabItem value="update">

```json
elasticmapreduce:UpdateStudio,
elasticmapreduce:DescribeStudio,
elasticmapreduce:AddTags,
elasticmapreduce:RemoveTags
```

</TabItem>
<TabItem value="delete">

```json
elasticmapreduce:DeleteStudio,
elasticmapreduce:DescribeStudio,
sso:DeleteManagedApplicationInstance
```

</TabItem>
<TabItem value="list">

```json
elasticmapreduce:ListStudios
```

</TabItem>
</Tabs>