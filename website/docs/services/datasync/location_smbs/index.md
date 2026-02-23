---
title: location_smbs
hide_title: false
hide_table_of_contents: false
keywords:
  - location_smbs
  - datasync
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

Creates, updates, deletes or gets a <code>location_smb</code> resource or lists <code>location_smbs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>location_smbs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::DataSync::LocationSMB.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datasync.location_smbs" /></td></tr>
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
    "name": "agent_arns",
    "type": "array",
    "description": "The Amazon Resource Names (ARNs) of agents to use for a Simple Message Block (SMB) location."
  },
  {
    "name": "domain",
    "type": "string",
    "description": "The name of the Windows domain that the SMB server belongs to."
  },
  {
    "name": "mount_options",
    "type": "object",
    "description": "The mount options used by DataSync to access the SMB server.",
    "children": [
      {
        "name": "version",
        "type": "string",
        "description": "The specific SMB version that you want DataSync to use to mount your SMB share."
      }
    ]
  },
  {
    "name": "password",
    "type": "string",
    "description": "The password of the user who can mount the share and has the permissions to access files and folders in the SMB share."
  },
  {
    "name": "server_hostname",
    "type": "string",
    "description": "The name of the SMB server. This value is the IP address or Domain Name Service (DNS) name of the SMB server."
  },
  {
    "name": "subdirectory",
    "type": "string",
    "description": "The subdirectory in the SMB file system that is used to read data from the SMB source location or write data to the SMB destination"
  },
  {
    "name": "user",
    "type": "string",
    "description": "The user who can mount the share, has the permissions to access files and folders in the SMB share."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key for an AWS resource tag."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for an AWS resource tag."
      }
    ]
  },
  {
    "name": "location_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the SMB location that is created."
  },
  {
    "name": "location_uri",
    "type": "string",
    "description": "The URL of the SMB location that was described."
  },
  {
    "name": "authentication_type",
    "type": "string",
    "description": "The authentication mode used to determine identity of user."
  },
  {
    "name": "dns_ip_addresses",
    "type": "array",
    "description": "Specifies the IPv4 addresses for the DNS servers that your SMB file server belongs to. This parameter applies only if AuthenticationType is set to KERBEROS. If you have multiple domains in your environment, configuring this parameter makes sure that DataSync connects to the right SMB file server."
  },
  {
    "name": "kerberos_principal",
    "type": "string",
    "description": "Specifies a service principal name (SPN), which is an identity in your Kerberos realm that has permission to access the files, folders, and file metadata in your SMB file server. SPNs are case sensitive and must include a prepended cifs/. For example, an SPN might look like cifs/kerberosuser@EXAMPLE.COM. Your task execution will fail if the SPN that you provide for this parameter doesn't match exactly what's in your keytab or krb5.conf files."
  },
  {
    "name": "kerberos_keytab",
    "type": "string",
    "description": "The Base64 string representation of the Keytab file. Specifies your Kerberos key table (keytab) file, which includes mappings between your service principal name (SPN) and encryption keys. To avoid task execution errors, make sure that the SPN in the keytab file matches exactly what you specify for KerberosPrincipal and in your krb5.conf file."
  },
  {
    "name": "kerberos_krb5_conf",
    "type": "string",
    "description": "The string representation of the Krb5Conf file, or the presigned URL to access the Krb5.conf file within an S3 bucket. Specifies a Kerberos configuration file (krb5.conf) that defines your Kerberos realm configuration. To avoid task execution errors, make sure that the service principal name (SPN) in the krb5.conf file matches exactly what you specify for KerberosPrincipal and in your keytab file."
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
    "name": "location_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the SMB location that is created."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html"><code>AWS::DataSync::LocationSMB</code></a>.

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
    <td><code>location_smbs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AgentArns, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>location_smbs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>location_smbs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>location_smbs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>location_smbs</code></td>
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

Gets all properties from an individual <code>location_smb</code>.
```sql
SELECT
region,
agent_arns,
domain,
mount_options,
password,
server_hostname,
subdirectory,
user,
tags,
location_arn,
location_uri,
authentication_type,
dns_ip_addresses,
kerberos_principal,
kerberos_keytab,
kerberos_krb5_conf
FROM awscc.datasync.location_smbs
WHERE region = 'us-east-1' AND Identifier = '{{ location_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>location_smbs</code> in a region.
```sql
SELECT
region,
location_arn
FROM awscc.datasync.location_smbs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>location_smb</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datasync.location_smbs (
 AgentArns,
 region
)
SELECT
'{{ agent_arns }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.datasync.location_smbs (
 AgentArns,
 Domain,
 MountOptions,
 Password,
 ServerHostname,
 Subdirectory,
 User,
 Tags,
 AuthenticationType,
 DnsIpAddresses,
 KerberosPrincipal,
 KerberosKeytab,
 KerberosKrb5Conf,
 region
)
SELECT
 '{{ agent_arns }}',
 '{{ domain }}',
 '{{ mount_options }}',
 '{{ password }}',
 '{{ server_hostname }}',
 '{{ subdirectory }}',
 '{{ user }}',
 '{{ tags }}',
 '{{ authentication_type }}',
 '{{ dns_ip_addresses }}',
 '{{ kerberos_principal }}',
 '{{ kerberos_keytab }}',
 '{{ kerberos_krb5_conf }}',
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
  - name: location_smb
    props:
      - name: agent_arns
        value:
          - '{{ agent_arns[0] }}'
      - name: domain
        value: '{{ domain }}'
      - name: mount_options
        value:
          version: '{{ version }}'
      - name: password
        value: '{{ password }}'
      - name: server_hostname
        value: '{{ server_hostname }}'
      - name: subdirectory
        value: '{{ subdirectory }}'
      - name: user
        value: '{{ user }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: authentication_type
        value: '{{ authentication_type }}'
      - name: dns_ip_addresses
        value:
          - '{{ dns_ip_addresses[0] }}'
      - name: kerberos_principal
        value: '{{ kerberos_principal }}'
      - name: kerberos_keytab
        value: '{{ kerberos_keytab }}'
      - name: kerberos_krb5_conf
        value: '{{ kerberos_krb5_conf }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>location_smb</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.datasync.location_smbs
SET PatchDocument = string('{{ {
    "AgentArns": agent_arns,
    "Domain": domain,
    "MountOptions": mount_options,
    "Password": password,
    "ServerHostname": server_hostname,
    "Subdirectory": subdirectory,
    "User": user,
    "Tags": tags,
    "AuthenticationType": authentication_type,
    "DnsIpAddresses": dns_ip_addresses,
    "KerberosPrincipal": kerberos_principal,
    "KerberosKeytab": kerberos_keytab,
    "KerberosKrb5Conf": kerberos_krb5_conf
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ location_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datasync.location_smbs
WHERE Identifier = '{{ location_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>location_smbs</code> resource, the following permissions are required:

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
datasync:CreateLocationSmb,
datasync:DescribeLocationSmb,
datasync:ListTagsForResource,
datasync:TagResource
```

</TabItem>
<TabItem value="read">

```json
datasync:DescribeLocationSmb,
datasync:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
datasync:DescribeLocationSmb,
datasync:ListTagsForResource,
datasync:TagResource,
datasync:UntagResource,
datasync:UpdateLocationSmb
```

</TabItem>
<TabItem value="delete">

```json
datasync:DeleteLocation
```

</TabItem>
<TabItem value="list">

```json
datasync:ListLocations
```

</TabItem>
</Tabs>