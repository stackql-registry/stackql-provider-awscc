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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html"><code>AWS::DataSync::LocationSMB</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AgentArns, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

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
WHERE region = 'us-east-1' AND data__Identifier = '<LocationArn>';
```

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
'{{ AgentArns }}',
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
 '{{ AgentArns }}',
 '{{ Domain }}',
 '{{ MountOptions }}',
 '{{ Password }}',
 '{{ ServerHostname }}',
 '{{ Subdirectory }}',
 '{{ User }}',
 '{{ Tags }}',
 '{{ AuthenticationType }}',
 '{{ DnsIpAddresses }}',
 '{{ KerberosPrincipal }}',
 '{{ KerberosKeytab }}',
 '{{ KerberosKrb5Conf }}',
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
      - name: AgentArns
        value:
          - '{{ AgentArns[0] }}'
      - name: Domain
        value: '{{ Domain }}'
      - name: MountOptions
        value:
          Version: '{{ Version }}'
      - name: Password
        value: '{{ Password }}'
      - name: ServerHostname
        value: '{{ ServerHostname }}'
      - name: Subdirectory
        value: '{{ Subdirectory }}'
      - name: User
        value: '{{ User }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: AuthenticationType
        value: '{{ AuthenticationType }}'
      - name: DnsIpAddresses
        value:
          - '{{ DnsIpAddresses[0] }}'
      - name: KerberosPrincipal
        value: '{{ KerberosPrincipal }}'
      - name: KerberosKeytab
        value: '{{ KerberosKeytab }}'
      - name: KerberosKrb5Conf
        value: '{{ KerberosKrb5Conf }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datasync.location_smbs
WHERE data__Identifier = '<LocationArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>location_smbs</code> resource, the following permissions are required:

### Create
```json
datasync:CreateLocationSmb,
datasync:DescribeLocationSmb,
datasync:ListTagsForResource,
datasync:TagResource
```

### Read
```json
datasync:DescribeLocationSmb,
datasync:ListTagsForResource
```

### Update
```json
datasync:DescribeLocationSmb,
datasync:ListTagsForResource,
datasync:TagResource,
datasync:UntagResource,
datasync:UpdateLocationSmb
```

### Delete
```json
datasync:DeleteLocation
```

### List
```json
datasync:ListLocations
```
