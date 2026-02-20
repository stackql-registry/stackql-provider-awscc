---
title: workspaces
hide_title: false
hide_table_of_contents: false
keywords:
  - workspaces
  - grafana
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

Creates, updates, deletes or gets a <code>workspace</code> resource or lists <code>workspaces</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>workspaces</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Grafana::Workspace Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.grafana.workspaces" /></td></tr>
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
    "name": "authentication_providers",
    "type": "array",
    "description": "List of authentication providers to enable."
  },
  {
    "name": "sso_client_id",
    "type": "string",
    "description": "The client ID of the AWS SSO Managed Application."
  },
  {
    "name": "saml_configuration",
    "type": "object",
    "description": "SAML configuration data associated with an AMG workspace.",
    "children": [
      {
        "name": "idp_metadata",
        "type": "object",
        "description": "IdP Metadata used to configure SAML authentication in Grafana.",
        "children": [
          {
            "name": "url",
            "type": "string",
            "description": "URL that vends the IdPs metadata."
          },
          {
            "name": "xml",
            "type": "string",
            "description": "XML blob of the IdPs metadata."
          }
        ]
      },
      {
        "name": "assertion_attributes",
        "type": "object",
        "description": "Maps Grafana friendly names to the IdPs SAML attributes.",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "Name of the attribute within the SAML assert to use as the users name in Grafana."
          },
          {
            "name": "login",
            "type": "string",
            "description": "Name of the attribute within the SAML assert to use as the users login handle in Grafana."
          },
          {
            "name": "email",
            "type": "string",
            "description": "Name of the attribute within the SAML assert to use as the users email in Grafana."
          },
          {
            "name": "groups",
            "type": "string",
            "description": "Name of the attribute within the SAML assert to use as the users groups in Grafana."
          },
          {
            "name": "role",
            "type": "string",
            "description": "Name of the attribute within the SAML assert to use as the users roles in Grafana."
          },
          {
            "name": "org",
            "type": "string",
            "description": "Name of the attribute within the SAML assert to use as the users organizations in Grafana."
          }
        ]
      },
      {
        "name": "role_values",
        "type": "object",
        "description": "Maps SAML roles to the Grafana Editor and Admin roles.",
        "children": [
          {
            "name": "editor",
            "type": "array",
            "description": "List of SAML roles which will be mapped into the Grafana Editor role."
          },
          {
            "name": "admin",
            "type": "array",
            "description": "List of SAML roles which will be mapped into the Grafana Admin role."
          }
        ]
      },
      {
        "name": "allowed_organizations",
        "type": "array",
        "description": "List of SAML organizations allowed to access Grafana."
      },
      {
        "name": "login_validity_duration",
        "type": "number",
        "description": "The maximum lifetime an authenticated user can be logged in (in minutes) before being required to re-authenticate."
      }
    ]
  },
  {
    "name": "network_access_control",
    "type": "object",
    "description": "The configuration settings for Network Access Control.",
    "children": [
      {
        "name": "prefix_list_ids",
        "type": "array",
        "description": "The list of prefix list IDs. A prefix list is a list of CIDR ranges of IP addresses. The IP addresses specified are allowed to access your workspace. If the list is not included in the configuration then no IP addresses will be allowed to access the workspace."
      },
      {
        "name": "vpce_ids",
        "type": "array",
        "description": "The list of Amazon VPC endpoint IDs for the workspace. If a NetworkAccessConfiguration is specified then only VPC endpoints specified here will be allowed to access the workspace."
      }
    ]
  },
  {
    "name": "vpc_configuration",
    "type": "object",
    "description": "The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.",
    "children": [
      {
        "name": "security_group_ids",
        "type": "array",
        "description": "The list of Amazon EC2 security group IDs attached to the Amazon VPC for your Grafana workspace to connect."
      },
      {
        "name": "subnet_ids",
        "type": "array",
        "description": "The list of Amazon EC2 subnet IDs created in the Amazon VPC for your Grafana workspace to connect."
      }
    ]
  },
  {
    "name": "saml_configuration_status",
    "type": "string",
    "description": "Valid SAML configuration statuses."
  },
  {
    "name": "client_token",
    "type": "string",
    "description": "A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request."
  },
  {
    "name": "status",
    "type": "string",
    "description": "These enums represent the status of a workspace."
  },
  {
    "name": "creation_timestamp",
    "type": "string",
    "description": "Timestamp when the workspace was created."
  },
  {
    "name": "modification_timestamp",
    "type": "string",
    "description": "Timestamp when the workspace was last modified"
  },
  {
    "name": "grafana_version",
    "type": "string",
    "description": "The version of Grafana to support in your workspace."
  },
  {
    "name": "endpoint",
    "type": "string",
    "description": "Endpoint for the Grafana workspace."
  },
  {
    "name": "account_access_type",
    "type": "string",
    "description": "These enums represent valid account access types. Specifically these enums determine whether the workspace can access AWS resources in the AWS account only, or whether it can also access resources in other accounts in the same organization. If the value CURRENT&#95;ACCOUNT is used, a workspace role ARN must be provided. If the value is ORGANIZATION, a list of organizational units must be provided."
  },
  {
    "name": "organization_role_name",
    "type": "string",
    "description": "The name of an IAM role that already exists to use with AWS Organizations to access AWS data sources and notification channels in other accounts in an organization."
  },
  {
    "name": "permission_type",
    "type": "string",
    "description": "These enums represent valid permission types to use when creating or configuring a Grafana workspace. The SERVICE&#95;MANAGED permission type means the Managed Grafana service will create a workspace IAM role on your behalf. The CUSTOMER&#95;MANAGED permission type means that the customer is expected to provide an IAM role that the Grafana workspace can use to query data sources."
  },
  {
    "name": "stack_set_name",
    "type": "string",
    "description": "The name of the AWS CloudFormation stack set to use to generate IAM roles to be used for this workspace."
  },
  {
    "name": "data_sources",
    "type": "array",
    "description": "List of data sources on the service managed IAM role."
  },
  {
    "name": "description",
    "type": "string",
    "description": "Description of a workspace."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The id that uniquely identifies a Grafana workspace."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The user friendly name of a workspace."
  },
  {
    "name": "notification_destinations",
    "type": "array",
    "description": "List of notification destinations on the customers service managed IAM role that the Grafana workspace can query."
  },
  {
    "name": "organizational_units",
    "type": "array",
    "description": "List of Organizational Units containing AWS accounts the Grafana workspace can pull data from."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "IAM Role that will be used to grant the Grafana workspace access to a customers AWS resources."
  },
  {
    "name": "plugin_admin_enabled",
    "type": "boolean",
    "description": "Allow workspace admins to install plugins"
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
    "name": "id",
    "type": "string",
    "description": "The id that uniquely identifies a Grafana workspace."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html"><code>AWS::Grafana::Workspace</code></a>.

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
    <td><code>workspaces</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AuthenticationProviders, PermissionType, AccountAccessType, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>workspaces</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>workspaces</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>workspaces_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>workspaces</code></td>
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

Gets all properties from an individual <code>workspace</code>.
```sql
SELECT
region,
authentication_providers,
sso_client_id,
saml_configuration,
network_access_control,
vpc_configuration,
saml_configuration_status,
client_token,
status,
creation_timestamp,
modification_timestamp,
grafana_version,
endpoint,
account_access_type,
organization_role_name,
permission_type,
stack_set_name,
data_sources,
description,
id,
name,
notification_destinations,
organizational_units,
role_arn,
plugin_admin_enabled
FROM awscc.grafana.workspaces
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>workspaces</code> in a region.
```sql
SELECT
region,
id
FROM awscc.grafana.workspaces_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>workspace</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.grafana.workspaces (
 AuthenticationProviders,
 AccountAccessType,
 PermissionType,
 region
)
SELECT 
'{{ AuthenticationProviders }}',
 '{{ AccountAccessType }}',
 '{{ PermissionType }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.grafana.workspaces (
 AuthenticationProviders,
 SamlConfiguration,
 NetworkAccessControl,
 VpcConfiguration,
 ClientToken,
 GrafanaVersion,
 AccountAccessType,
 OrganizationRoleName,
 PermissionType,
 StackSetName,
 DataSources,
 Description,
 Name,
 NotificationDestinations,
 OrganizationalUnits,
 RoleArn,
 PluginAdminEnabled,
 region
)
SELECT 
 '{{ AuthenticationProviders }}',
 '{{ SamlConfiguration }}',
 '{{ NetworkAccessControl }}',
 '{{ VpcConfiguration }}',
 '{{ ClientToken }}',
 '{{ GrafanaVersion }}',
 '{{ AccountAccessType }}',
 '{{ OrganizationRoleName }}',
 '{{ PermissionType }}',
 '{{ StackSetName }}',
 '{{ DataSources }}',
 '{{ Description }}',
 '{{ Name }}',
 '{{ NotificationDestinations }}',
 '{{ OrganizationalUnits }}',
 '{{ RoleArn }}',
 '{{ PluginAdminEnabled }}',
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
  - name: workspace
    props:
      - name: AuthenticationProviders
        value:
          - '{{ AuthenticationProviders[0] }}'
      - name: SamlConfiguration
        value:
          IdpMetadata:
            Url: '{{ Url }}'
            Xml: '{{ Xml }}'
          AssertionAttributes:
            Name: '{{ Name }}'
            Login: '{{ Login }}'
            Email: '{{ Email }}'
            Groups: '{{ Groups }}'
            Role: '{{ Role }}'
            Org: '{{ Org }}'
          RoleValues:
            Editor:
              - '{{ Editor[0] }}'
            Admin:
              - '{{ Admin[0] }}'
          AllowedOrganizations:
            - '{{ AllowedOrganizations[0] }}'
          LoginValidityDuration: null
      - name: NetworkAccessControl
        value:
          PrefixListIds:
            - '{{ PrefixListIds[0] }}'
          VpceIds:
            - '{{ VpceIds[0] }}'
      - name: VpcConfiguration
        value:
          SecurityGroupIds:
            - '{{ SecurityGroupIds[0] }}'
          SubnetIds:
            - '{{ SubnetIds[0] }}'
      - name: ClientToken
        value: '{{ ClientToken }}'
      - name: GrafanaVersion
        value: '{{ GrafanaVersion }}'
      - name: AccountAccessType
        value: '{{ AccountAccessType }}'
      - name: OrganizationRoleName
        value: '{{ OrganizationRoleName }}'
      - name: PermissionType
        value: '{{ PermissionType }}'
      - name: StackSetName
        value: '{{ StackSetName }}'
      - name: DataSources
        value:
          - '{{ DataSources[0] }}'
      - name: Description
        value: '{{ Description }}'
      - name: Name
        value: '{{ Name }}'
      - name: NotificationDestinations
        value:
          - '{{ NotificationDestinations[0] }}'
      - name: OrganizationalUnits
        value:
          - '{{ OrganizationalUnits[0] }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: PluginAdminEnabled
        value: '{{ PluginAdminEnabled }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.grafana.workspaces
SET data__PatchDocument = string('{{ {
    "AuthenticationProviders": authentication_providers,
    "SamlConfiguration": saml_configuration,
    "NetworkAccessControl": network_access_control,
    "VpcConfiguration": vpc_configuration,
    "GrafanaVersion": grafana_version,
    "AccountAccessType": account_access_type,
    "OrganizationRoleName": organization_role_name,
    "PermissionType": permission_type,
    "StackSetName": stack_set_name,
    "DataSources": data_sources,
    "Description": description,
    "Name": name,
    "NotificationDestinations": notification_destinations,
    "OrganizationalUnits": organizational_units,
    "RoleArn": role_arn,
    "PluginAdminEnabled": plugin_admin_enabled
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.grafana.workspaces
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>workspaces</code> resource, the following permissions are required:

### Create
```json
grafana:CreateWorkspace,
grafana:DescribeWorkspace,
grafana:DescribeWorkspaceAuthentication,
grafana:DescribeWorkspaceConfiguration,
grafana:UpdateWorkspaceAuthentication,
sso:DescribeRegisteredRegions,
sso:CreateManagedApplicationInstance,
organizations:DescribeOrganization,
sso:GetSharedSsoConfiguration,
iam:PassRole,
ec2:GetManagedPrefixListEntries,
ec2:DescribeSecurityGroups,
ec2:DescribeSubnets,
ec2:DescribeVpcs,
iam:CreateServiceLinkedRole,
sso:ListApplicationInstances,
sso:GetApplicationInstance
```

### Read
```json
grafana:DescribeWorkspace,
grafana:DescribeWorkspaceAuthentication,
grafana:DescribeWorkspaceConfiguration
```

### Update
```json
grafana:DescribeWorkspace,
grafana:DescribeWorkspaceAuthentication,
grafana:DescribeWorkspaceConfiguration,
grafana:UpdateWorkspace,
grafana:UpdateWorkspaceAuthentication,
grafana:UpdateWorkspaceConfiguration,
sso:DescribeRegisteredRegions,
sso:CreateManagedApplicationInstance,
ec2:GetManagedPrefixListEntries,
iam:PassRole,
ec2:DescribeSecurityGroups,
ec2:DescribeSubnets,
ec2:DescribeVpcs,
iam:CreateServiceLinkedRole,
sso:ListApplicationInstances,
sso:GetApplicationInstance
```

### Delete
```json
grafana:DeleteWorkspace,
grafana:DescribeWorkspace,
grafana:DescribeWorkspaceAuthentication,
grafana:DescribeWorkspaceConfiguration,
sso:DeleteManagedApplicationInstance,
sso:DescribeRegisteredRegions
```

### List
```json
grafana:ListWorkspaces,
grafana:DescribeWorkspaceAuthentication,
grafana:DescribeWorkspaceConfiguration
```
