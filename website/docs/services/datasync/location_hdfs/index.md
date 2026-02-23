---
title: location_hdfs
hide_title: false
hide_table_of_contents: false
keywords:
  - location_hdfs
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

Creates, updates, deletes or gets a <code>location_hdf</code> resource or lists <code>location_hdfs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>location_hdfs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::DataSync::LocationHDFS.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datasync.location_hdfs" /></td></tr>
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
    "name": "name_nodes",
    "type": "array",
    "description": "An array of Name Node(s) of the HDFS location.",
    "children": [
      {
        "name": "hostname",
        "type": "string",
        "description": "The DNS name or IP address of the Name Node in the customer's on premises HDFS cluster."
      },
      {
        "name": "port",
        "type": "integer",
        "description": "The port on which the Name Node is listening on for client requests."
      }
    ]
  },
  {
    "name": "block_size",
    "type": "integer",
    "description": "Size of chunks (blocks) in bytes that the data is divided into when stored in the HDFS cluster."
  },
  {
    "name": "replication_factor",
    "type": "integer",
    "description": "Number of copies of each block that exists inside the HDFS cluster."
  },
  {
    "name": "kms_key_provider_uri",
    "type": "string",
    "description": "The identifier for the Key Management Server where the encryption keys that encrypt data inside HDFS clusters are stored."
  },
  {
    "name": "qop_configuration",
    "type": "object",
    "description": "Configuration information for RPC Protection and Data Transfer Protection. These parameters can be set to AUTHENTICATION, INTEGRITY, or PRIVACY. The default value is PRIVACY.",
    "children": [
      {
        "name": "rpc_protection",
        "type": "string",
        "description": "Configuration for RPC Protection."
      },
      {
        "name": "data_transfer_protection",
        "type": "string",
        "description": "Configuration for Data Transfer Protection."
      }
    ]
  },
  {
    "name": "authentication_type",
    "type": "string",
    "description": "The authentication mode used to determine identity of user."
  },
  {
    "name": "simple_user",
    "type": "string",
    "description": "The user name that has read and write permissions on the specified HDFS cluster."
  },
  {
    "name": "kerberos_principal",
    "type": "string",
    "description": "The unique identity, or principal, to which Kerberos can assign tickets."
  },
  {
    "name": "kerberos_keytab",
    "type": "string",
    "description": "The Base64 string representation of the Keytab file."
  },
  {
    "name": "kerberos_krb5_conf",
    "type": "string",
    "description": "The string representation of the Krb5Conf file, or the presigned URL to access the Krb5.conf file within an S3 bucket."
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
    "name": "agent_arns",
    "type": "array",
    "description": "ARN(s) of the agent(s) to use for an HDFS location."
  },
  {
    "name": "subdirectory",
    "type": "string",
    "description": "The subdirectory in HDFS that is used to read data from the HDFS source location or write data to the HDFS destination."
  },
  {
    "name": "location_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the HDFS location."
  },
  {
    "name": "location_uri",
    "type": "string",
    "description": "The URL of the HDFS location that was described."
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
    "description": "The Amazon Resource Name (ARN) of the HDFS location."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationhdf.html"><code>AWS::DataSync::LocationHDFS</code></a>.

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
    <td><code>location_hdfs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="NameNodes, AuthenticationType, AgentArns, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>location_hdfs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>location_hdfs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>location_hdfs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>location_hdfs</code></td>
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

Gets all properties from an individual <code>location_hdf</code>.
```sql
SELECT
region,
name_nodes,
block_size,
replication_factor,
kms_key_provider_uri,
qop_configuration,
authentication_type,
simple_user,
kerberos_principal,
kerberos_keytab,
kerberos_krb5_conf,
tags,
agent_arns,
subdirectory,
location_arn,
location_uri
FROM awscc.datasync.location_hdfs
WHERE region = 'us-east-1' AND Identifier = '{{ location_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>location_hdfs</code> in a region.
```sql
SELECT
region,
location_arn
FROM awscc.datasync.location_hdfs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>location_hdf</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datasync.location_hdfs (
 NameNodes,
 AuthenticationType,
 AgentArns,
 region
)
SELECT
'{{ name_nodes }}',
 '{{ authentication_type }}',
 '{{ agent_arns }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.datasync.location_hdfs (
 NameNodes,
 BlockSize,
 ReplicationFactor,
 KmsKeyProviderUri,
 QopConfiguration,
 AuthenticationType,
 SimpleUser,
 KerberosPrincipal,
 KerberosKeytab,
 KerberosKrb5Conf,
 Tags,
 AgentArns,
 Subdirectory,
 region
)
SELECT
 '{{ name_nodes }}',
 '{{ block_size }}',
 '{{ replication_factor }}',
 '{{ kms_key_provider_uri }}',
 '{{ qop_configuration }}',
 '{{ authentication_type }}',
 '{{ simple_user }}',
 '{{ kerberos_principal }}',
 '{{ kerberos_keytab }}',
 '{{ kerberos_krb5_conf }}',
 '{{ tags }}',
 '{{ agent_arns }}',
 '{{ subdirectory }}',
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
  - name: location_hdf
    props:
      - name: name_nodes
        value:
          - hostname: '{{ hostname }}'
            port: '{{ port }}'
      - name: block_size
        value: '{{ block_size }}'
      - name: replication_factor
        value: '{{ replication_factor }}'
      - name: kms_key_provider_uri
        value: '{{ kms_key_provider_uri }}'
      - name: qop_configuration
        value:
          rpc_protection: '{{ rpc_protection }}'
          data_transfer_protection: '{{ data_transfer_protection }}'
      - name: authentication_type
        value: '{{ authentication_type }}'
      - name: simple_user
        value: '{{ simple_user }}'
      - name: kerberos_principal
        value: '{{ kerberos_principal }}'
      - name: kerberos_keytab
        value: '{{ kerberos_keytab }}'
      - name: kerberos_krb5_conf
        value: '{{ kerberos_krb5_conf }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: agent_arns
        value:
          - '{{ agent_arns[0] }}'
      - name: subdirectory
        value: '{{ subdirectory }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>location_hdf</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.datasync.location_hdfs
SET PatchDocument = string('{{ {
    "NameNodes": name_nodes,
    "BlockSize": block_size,
    "ReplicationFactor": replication_factor,
    "KmsKeyProviderUri": kms_key_provider_uri,
    "QopConfiguration": qop_configuration,
    "AuthenticationType": authentication_type,
    "SimpleUser": simple_user,
    "KerberosPrincipal": kerberos_principal,
    "KerberosKeytab": kerberos_keytab,
    "KerberosKrb5Conf": kerberos_krb5_conf,
    "Tags": tags,
    "AgentArns": agent_arns,
    "Subdirectory": subdirectory
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ location_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datasync.location_hdfs
WHERE Identifier = '{{ location_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>location_hdfs</code> resource, the following permissions are required:

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
datasync:CreateLocationHdfs,
datasync:DescribeLocationHdfs,
datasync:TagResource,
datasync:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
datasync:DescribeLocationHdfs,
datasync:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
datasync:UpdateLocationHdfs,
datasync:DescribeLocationHdfs,
datasync:ListTagsForResource,
datasync:TagResource,
datasync:UntagResource
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