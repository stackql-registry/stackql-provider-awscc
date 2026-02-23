---
title: connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - connectors
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

Creates, updates, deletes or gets a <code>connector</code> resource or lists <code>connectors</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>connectors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Transfer::Connector</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.transfer.connectors" /></td></tr>
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
    "name": "access_role",
    "type": "string",
    "description": "Specifies the access role for the connector."
  },
  {
    "name": "as2_config",
    "type": "object",
    "description": "Configuration for an AS2 connector.",
    "children": [
      {
        "name": "local_profile_id",
        "type": "string",
        "description": "A unique identifier for the local profile."
      },
      {
        "name": "partner_profile_id",
        "type": "string",
        "description": "A unique identifier for the partner profile."
      },
      {
        "name": "message_subject",
        "type": "string",
        "description": "The message subject for this AS2 connector configuration."
      },
      {
        "name": "compression",
        "type": "string",
        "description": "Compression setting for this AS2 connector configuration."
      },
      {
        "name": "encryption_algorithm",
        "type": "string",
        "description": "Encryption algorithm for this AS2 connector configuration."
      },
      {
        "name": "signing_algorithm",
        "type": "string",
        "description": "Signing algorithm for this AS2 connector configuration."
      },
      {
        "name": "mdn_signing_algorithm",
        "type": "string",
        "description": "MDN Signing algorithm for this AS2 connector configuration."
      },
      {
        "name": "mdn_response",
        "type": "string",
        "description": "MDN Response setting for this AS2 connector configuration."
      },
      {
        "name": "basic_auth_secret_id",
        "type": "string",
        "description": "ARN or name of the secret in AWS Secrets Manager which contains the credentials for Basic authentication. If empty, Basic authentication is disabled for the AS2 connector"
      },
      {
        "name": "preserve_content_type",
        "type": "string",
        "description": "Specifies whether to use the AWS S3 object content-type as the content-type for the AS2 message."
      }
    ]
  },
  {
    "name": "sftp_config",
    "type": "object",
    "description": "Configuration for an SFTP connector.",
    "children": [
      {
        "name": "user_secret_id",
        "type": "string",
        "description": "ARN or name of the secret in AWS Secrets Manager which contains the SFTP user's private keys or passwords."
      },
      {
        "name": "trusted_host_keys",
        "type": "array",
        "description": "List of public host keys, for the external server to which you are connecting."
      },
      {
        "name": "max_concurrent_connections",
        "type": "integer",
        "description": "Specifies the number of active connections that your connector can establish with the remote server at the same time."
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "Specifies the unique Amazon Resource Name (ARN) for the connector."
  },
  {
    "name": "connector_id",
    "type": "string",
    "description": "A unique identifier for the connector."
  },
  {
    "name": "logging_role",
    "type": "string",
    "description": "Specifies the logging role for the connector."
  },
  {
    "name": "service_managed_egress_ip_addresses",
    "type": "array",
    "description": "The list of egress IP addresses of this connector. These IP addresses are assigned automatically when you create the connector."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Key-value pairs that can be used to group and search for connectors. Tags are metadata attached to connectors for any purpose.",
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
    "name": "url",
    "type": "string",
    "description": "URL for Connector"
  },
  {
    "name": "security_policy_name",
    "type": "string",
    "description": "Security policy for SFTP Connector"
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
    "name": "connector_id",
    "type": "string",
    "description": "A unique identifier for the connector."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html"><code>AWS::Transfer::Connector</code></a>.

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
    <td><code>connectors</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AccessRole, Url, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>connectors</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>connectors</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>connectors_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>connectors</code></td>
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

Gets all properties from an individual <code>connector</code>.
```sql
SELECT
region,
access_role,
as2_config,
sftp_config,
arn,
connector_id,
logging_role,
service_managed_egress_ip_addresses,
tags,
url,
security_policy_name
FROM awscc.transfer.connectors
WHERE region = 'us-east-1' AND Identifier = '{{ connector_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>connectors</code> in a region.
```sql
SELECT
region,
connector_id
FROM awscc.transfer.connectors_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>connector</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.transfer.connectors (
 AccessRole,
 Url,
 region
)
SELECT
'{{ access_role }}',
 '{{ url }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.transfer.connectors (
 AccessRole,
 As2Config,
 SftpConfig,
 LoggingRole,
 Tags,
 Url,
 SecurityPolicyName,
 region
)
SELECT
 '{{ access_role }}',
 '{{ as2_config }}',
 '{{ sftp_config }}',
 '{{ logging_role }}',
 '{{ tags }}',
 '{{ url }}',
 '{{ security_policy_name }}',
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
  - name: connector
    props:
      - name: access_role
        value: '{{ access_role }}'
      - name: as2_config
        value:
          local_profile_id: '{{ local_profile_id }}'
          partner_profile_id: '{{ partner_profile_id }}'
          message_subject: '{{ message_subject }}'
          compression: '{{ compression }}'
          encryption_algorithm: '{{ encryption_algorithm }}'
          signing_algorithm: '{{ signing_algorithm }}'
          mdn_signing_algorithm: '{{ mdn_signing_algorithm }}'
          mdn_response: '{{ mdn_response }}'
          basic_auth_secret_id: '{{ basic_auth_secret_id }}'
          preserve_content_type: '{{ preserve_content_type }}'
      - name: sftp_config
        value:
          user_secret_id: '{{ user_secret_id }}'
          trusted_host_keys:
            - '{{ trusted_host_keys[0] }}'
          max_concurrent_connections: '{{ max_concurrent_connections }}'
      - name: logging_role
        value: '{{ logging_role }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: url
        value: '{{ url }}'
      - name: security_policy_name
        value: '{{ security_policy_name }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>connector</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.transfer.connectors
SET PatchDocument = string('{{ {
    "AccessRole": access_role,
    "As2Config": as2_config,
    "SftpConfig": sftp_config,
    "LoggingRole": logging_role,
    "Tags": tags,
    "Url": url,
    "SecurityPolicyName": security_policy_name
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ connector_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.transfer.connectors
WHERE Identifier = '{{ connector_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>connectors</code> resource, the following permissions are required:

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
transfer:CreateConnector,
transfer:TagResource,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
transfer:DescribeConnector
```

</TabItem>
<TabItem value="update">

```json
transfer:UpdateConnector,
transfer:UnTagResource,
transfer:TagResource,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
transfer:DeleteConnector
```

</TabItem>
<TabItem value="list">

```json
transfer:ListConnectors
```

</TabItem>
</Tabs>