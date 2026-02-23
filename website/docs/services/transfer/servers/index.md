---
title: servers
hide_title: false
hide_table_of_contents: false
keywords:
  - servers
  - transfer
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

Creates, updates, deletes or gets a <code>server</code> resource or lists <code>servers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>servers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Transfer::Server Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.transfer.servers" /></td></tr>
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
    "description": ""
  },
  {
    "name": "as2_service_managed_egress_ip_addresses",
    "type": "array",
    "description": "The list of egress IP addresses of this server. These IP addresses are only relevant for servers that use the AS2 protocol. They are used for sending asynchronous MDNs. These IP addresses are assigned automatically when you create an AS2 server. Additionally, if you update an existing server and add the AS2 protocol, static IP addresses are assigned as well."
  },
  {
    "name": "certificate",
    "type": "string",
    "description": ""
  },
  {
    "name": "domain",
    "type": "string",
    "description": ""
  },
  {
    "name": "endpoint_details",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "address_allocation_ids",
        "type": "array",
        "description": ""
      },
      {
        "name": "subnet_ids",
        "type": "array",
        "description": ""
      },
      {
        "name": "vpc_endpoint_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "vpc_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "security_group_ids",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "endpoint_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "identity_provider_details",
    "type": "object",
    "description": "You can provide a structure that contains the details for the identity provider to use with your web app.",
    "children": [
      {
        "name": "application_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "instance_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) for the IAM Identity Center used for the web app."
      },
      {
        "name": "role",
        "type": "string",
        "description": "The IAM role in IAM Identity Center used for the web app."
      }
    ]
  },
  {
    "name": "identity_provider_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "ip_address_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "logging_role",
    "type": "string",
    "description": ""
  },
  {
    "name": "post_authentication_login_banner",
    "type": "string",
    "description": ""
  },
  {
    "name": "pre_authentication_login_banner",
    "type": "string",
    "description": ""
  },
  {
    "name": "protocol_details",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "passive_ip",
        "type": "string",
        "description": ""
      },
      {
        "name": "tls_session_resumption_mode",
        "type": "string",
        "description": ""
      },
      {
        "name": "set_stat_option",
        "type": "string",
        "description": ""
      },
      {
        "name": "as2_transports",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "protocols",
    "type": "array",
    "description": ""
  },
  {
    "name": "s3_storage_options",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "directory_listing_optimization",
        "type": "string",
        "description": "Indicates whether optimization to directory listing on S3 servers is used. Disabled by default for compatibility."
      }
    ]
  },
  {
    "name": "security_policy_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "server_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "state",
    "type": "string",
    "description": ""
  },
  {
    "name": "structured_log_destinations",
    "type": "array",
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
        "description": "The name assigned to the tag that you create."
      },
      {
        "name": "value",
        "type": "string",
        "description": "Contains one or more values that you assigned to the key name you create."
      }
    ]
  },
  {
    "name": "workflow_details",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "on_upload",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "workflow_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "execution_role",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "on_partial_upload",
        "type": "array",
        "description": ""
      }
    ]
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html"><code>AWS::Transfer::Server</code></a>.

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
    <td><code>servers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>servers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>servers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>servers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>servers</code></td>
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

Gets all properties from an individual <code>server</code>.
```sql
SELECT
region,
arn,
as2_service_managed_egress_ip_addresses,
certificate,
domain,
endpoint_details,
endpoint_type,
identity_provider_details,
identity_provider_type,
ip_address_type,
logging_role,
post_authentication_login_banner,
pre_authentication_login_banner,
protocol_details,
protocols,
s3_storage_options,
security_policy_name,
server_id,
state,
structured_log_destinations,
tags,
workflow_details
FROM awscc.transfer.servers
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>servers</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.transfer.servers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>server</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.transfer.servers (
 Certificate,
 Domain,
 EndpointDetails,
 EndpointType,
 IdentityProviderDetails,
 IdentityProviderType,
 IpAddressType,
 LoggingRole,
 PostAuthenticationLoginBanner,
 PreAuthenticationLoginBanner,
 ProtocolDetails,
 Protocols,
 S3StorageOptions,
 SecurityPolicyName,
 StructuredLogDestinations,
 Tags,
 WorkflowDetails,
 region
)
SELECT
'{{ certificate }}',
 '{{ domain }}',
 '{{ endpoint_details }}',
 '{{ endpoint_type }}',
 '{{ identity_provider_details }}',
 '{{ identity_provider_type }}',
 '{{ ip_address_type }}',
 '{{ logging_role }}',
 '{{ post_authentication_login_banner }}',
 '{{ pre_authentication_login_banner }}',
 '{{ protocol_details }}',
 '{{ protocols }}',
 '{{ s3_storage_options }}',
 '{{ security_policy_name }}',
 '{{ structured_log_destinations }}',
 '{{ tags }}',
 '{{ workflow_details }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.transfer.servers (
 Certificate,
 Domain,
 EndpointDetails,
 EndpointType,
 IdentityProviderDetails,
 IdentityProviderType,
 IpAddressType,
 LoggingRole,
 PostAuthenticationLoginBanner,
 PreAuthenticationLoginBanner,
 ProtocolDetails,
 Protocols,
 S3StorageOptions,
 SecurityPolicyName,
 StructuredLogDestinations,
 Tags,
 WorkflowDetails,
 region
)
SELECT
 '{{ certificate }}',
 '{{ domain }}',
 '{{ endpoint_details }}',
 '{{ endpoint_type }}',
 '{{ identity_provider_details }}',
 '{{ identity_provider_type }}',
 '{{ ip_address_type }}',
 '{{ logging_role }}',
 '{{ post_authentication_login_banner }}',
 '{{ pre_authentication_login_banner }}',
 '{{ protocol_details }}',
 '{{ protocols }}',
 '{{ s3_storage_options }}',
 '{{ security_policy_name }}',
 '{{ structured_log_destinations }}',
 '{{ tags }}',
 '{{ workflow_details }}',
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
  - name: server
    props:
      - name: certificate
        value: '{{ certificate }}'
      - name: domain
        value: '{{ domain }}'
      - name: endpoint_details
        value:
          address_allocation_ids:
            - '{{ address_allocation_ids[0] }}'
          subnet_ids:
            - '{{ subnet_ids[0] }}'
          vpc_endpoint_id: '{{ vpc_endpoint_id }}'
          vpc_id: '{{ vpc_id }}'
          security_group_ids:
            - '{{ security_group_ids[0] }}'
      - name: endpoint_type
        value: '{{ endpoint_type }}'
      - name: identity_provider_details
        value:
          application_arn: '{{ application_arn }}'
          instance_arn: '{{ instance_arn }}'
          role: '{{ role }}'
      - name: identity_provider_type
        value: '{{ identity_provider_type }}'
      - name: ip_address_type
        value: '{{ ip_address_type }}'
      - name: logging_role
        value: '{{ logging_role }}'
      - name: post_authentication_login_banner
        value: '{{ post_authentication_login_banner }}'
      - name: pre_authentication_login_banner
        value: '{{ pre_authentication_login_banner }}'
      - name: protocol_details
        value:
          passive_ip: '{{ passive_ip }}'
          tls_session_resumption_mode: '{{ tls_session_resumption_mode }}'
          set_stat_option: '{{ set_stat_option }}'
          as2_transports:
            - '{{ as2_transports[0] }}'
      - name: protocols
        value:
          - '{{ protocols[0] }}'
      - name: s3_storage_options
        value:
          directory_listing_optimization: '{{ directory_listing_optimization }}'
      - name: security_policy_name
        value: '{{ security_policy_name }}'
      - name: structured_log_destinations
        value:
          - '{{ structured_log_destinations[0] }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: workflow_details
        value:
          on_upload:
            - workflow_id: '{{ workflow_id }}'
              execution_role: '{{ execution_role }}'
          on_partial_upload:
            - null
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>server</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.transfer.servers
SET PatchDocument = string('{{ {
    "Certificate": certificate,
    "EndpointDetails": endpoint_details,
    "EndpointType": endpoint_type,
    "IdentityProviderDetails": identity_provider_details,
    "IpAddressType": ip_address_type,
    "LoggingRole": logging_role,
    "PostAuthenticationLoginBanner": post_authentication_login_banner,
    "PreAuthenticationLoginBanner": pre_authentication_login_banner,
    "ProtocolDetails": protocol_details,
    "Protocols": protocols,
    "S3StorageOptions": s3_storage_options,
    "SecurityPolicyName": security_policy_name,
    "StructuredLogDestinations": structured_log_destinations,
    "Tags": tags,
    "WorkflowDetails": workflow_details
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.transfer.servers
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>servers</code> resource, the following permissions are required:

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
apigateway:GET,
ds:AuthorizeApplication,
ds:DescribeDirectories,
ec2:AssociateAddress,
ec2:CreateVpcEndpoint,
ec2:DescribeAddresses,
ec2:DescribeNetworkInterfaces,
ec2:DescribeVpcEndpoints,
iam:PassRole,
logs:CreateLogDelivery,
logs:DeleteLogDelivery,
logs:DescribeLogGroups,
logs:DescribeResourcePolicies,
logs:GetLogDelivery,
logs:ListLogDeliveries,
logs:PutResourcePolicy,
logs:UpdateLogDelivery,
transfer:CreateServer,
transfer:DescribeServer,
transfer:StartServer,
transfer:StopServer,
transfer:TagResource,
transfer:UpdateServer
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeVpcEndpoints,
transfer:DescribeServer
```

</TabItem>
<TabItem value="update">

```json
apigateway:GET,
ec2:AssociateAddress,
ec2:CreateVpcEndpoint,
ec2:DeleteVpcEndpoints,
ec2:DescribeAddresses,
ec2:DescribeNetworkInterfaces,
ec2:DescribeVpcEndpoints,
ec2:DisassociateAddress,
ec2:ModifyVpcEndpoint,
iam:PassRole,
logs:CreateLogDelivery,
logs:DeleteLogDelivery,
logs:DescribeLogGroups,
logs:DescribeResourcePolicies,
logs:GetLogDelivery,
logs:ListLogDeliveries,
logs:PutResourcePolicy,
logs:UpdateLogDelivery,
transfer:DescribeServer,
transfer:StartServer,
transfer:StopServer,
transfer:TagResource,
transfer:UnTagResource,
transfer:UpdateServer
```

</TabItem>
<TabItem value="delete">

```json
ds:DescribeDirectories,
ds:UnauthorizeApplication,
ec2:DeleteVpcEndpoints,
ec2:DescribeAddresses,
ec2:DescribeNetworkInterfaces,
ec2:DescribeVpcEndpoints,
ec2:DisassociateAddress,
logs:DeleteLogDelivery,
logs:GetLogDelivery,
logs:ListLogDeliveries,
transfer:DeleteServer
```

</TabItem>
<TabItem value="list">

```json
transfer:ListServers
```

</TabItem>
</Tabs>