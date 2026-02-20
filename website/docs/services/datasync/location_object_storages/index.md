---
title: location_object_storages
hide_title: false
hide_table_of_contents: false
keywords:
  - location_object_storages
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

Creates, updates, deletes or gets a <code>location_object_storage</code> resource or lists <code>location_object_storages</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>location_object_storages</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::DataSync::LocationObjectStorage.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datasync.location_object_storages" /></td></tr>
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
    "name": "access_key",
    "type": "string",
    "description": "Optional. The access key is used if credentials are required to access the self-managed object storage server."
  },
  {
    "name": "agent_arns",
    "type": "array",
    "description": "Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can connect with your object storage system. If you are setting up an agentless cross-cloud transfer, you do not need to specify a value for this parameter."
  },
  {
    "name": "bucket_name",
    "type": "string",
    "description": "The name of the bucket on the self-managed object storage server."
  },
  {
    "name": "secret_key",
    "type": "string",
    "description": "Optional. The secret key is used if credentials are required to access the self-managed object storage server."
  },
  {
    "name": "server_certificate",
    "type": "string",
    "description": "X.509 PEM content containing a certificate authority or chain to trust."
  },
  {
    "name": "server_hostname",
    "type": "string",
    "description": "The name of the self-managed object storage server. This value is the IP address or Domain Name Service (DNS) name of the object storage server."
  },
  {
    "name": "server_port",
    "type": "integer",
    "description": "The port that your self-managed server accepts inbound network traffic on."
  },
  {
    "name": "server_protocol",
    "type": "string",
    "description": "The protocol that the object storage server uses to communicate."
  },
  {
    "name": "subdirectory",
    "type": "string",
    "description": "The subdirectory in the self-managed object storage server that is used to read data from."
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
    "description": "The Amazon Resource Name (ARN) of the location that is created."
  },
  {
    "name": "location_uri",
    "type": "string",
    "description": "The URL of the object storage location that was described."
  },
  {
    "name": "cmk_secret_config",
    "type": "object",
    "description": "Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.",
    "children": [
      {
        "name": "secret_arn",
        "type": "string",
        "description": "Specifies the ARN for an AWS Secrets Manager secret, managed by DataSync."
      },
      {
        "name": "kms_key_arn",
        "type": "string",
        "description": "Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn. DataSync provides this key to AWS Secrets Manager."
      }
    ]
  },
  {
    "name": "custom_secret_config",
    "type": "object",
    "description": "Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.",
    "children": [
      {
        "name": "secret_arn",
        "type": "string",
        "description": "Specifies the ARN for a customer created AWS Secrets Manager secret."
      },
      {
        "name": "secret_access_role_arn",
        "type": "string",
        "description": "Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn."
      }
    ]
  },
  {
    "name": "managed_secret_config",
    "type": "object",
    "description": "Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location. DataSync uses the default AWS-managed KMS key to encrypt this secret in AWS Secrets Manager.",
    "children": [
      {
        "name": "secret_arn",
        "type": "string",
        "description": "Specifies the ARN for an AWS Secrets Manager secret."
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
    "name": "location_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the location that is created."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html"><code>AWS::DataSync::LocationObjectStorage</code></a>.

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
    <td><code>location_object_storages</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>location_object_storages</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>location_object_storages</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>location_object_storages_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>location_object_storages</code></td>
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

Gets all properties from an individual <code>location_object_storage</code>.
```sql
SELECT
region,
access_key,
agent_arns,
bucket_name,
secret_key,
server_certificate,
server_hostname,
server_port,
server_protocol,
subdirectory,
tags,
location_arn,
location_uri,
cmk_secret_config,
custom_secret_config,
managed_secret_config
FROM awscc.datasync.location_object_storages
WHERE region = 'us-east-1' AND Identifier = '<LocationArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>location_object_storages</code> in a region.
```sql
SELECT
region,
location_arn
FROM awscc.datasync.location_object_storages_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>location_object_storage</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datasync.location_object_storages (
 AccessKey,
 AgentArns,
 BucketName,
 SecretKey,
 ServerCertificate,
 ServerHostname,
 ServerPort,
 ServerProtocol,
 Subdirectory,
 Tags,
 CmkSecretConfig,
 CustomSecretConfig,
 region
)
SELECT 
'{{ AccessKey }}',
 '{{ AgentArns }}',
 '{{ BucketName }}',
 '{{ SecretKey }}',
 '{{ ServerCertificate }}',
 '{{ ServerHostname }}',
 '{{ ServerPort }}',
 '{{ ServerProtocol }}',
 '{{ Subdirectory }}',
 '{{ Tags }}',
 '{{ CmkSecretConfig }}',
 '{{ CustomSecretConfig }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.datasync.location_object_storages (
 AccessKey,
 AgentArns,
 BucketName,
 SecretKey,
 ServerCertificate,
 ServerHostname,
 ServerPort,
 ServerProtocol,
 Subdirectory,
 Tags,
 CmkSecretConfig,
 CustomSecretConfig,
 region
)
SELECT 
 '{{ AccessKey }}',
 '{{ AgentArns }}',
 '{{ BucketName }}',
 '{{ SecretKey }}',
 '{{ ServerCertificate }}',
 '{{ ServerHostname }}',
 '{{ ServerPort }}',
 '{{ ServerProtocol }}',
 '{{ Subdirectory }}',
 '{{ Tags }}',
 '{{ CmkSecretConfig }}',
 '{{ CustomSecretConfig }}',
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
  - name: location_object_storage
    props:
      - name: AccessKey
        value: '{{ AccessKey }}'
      - name: AgentArns
        value:
          - '{{ AgentArns[0] }}'
      - name: BucketName
        value: '{{ BucketName }}'
      - name: SecretKey
        value: '{{ SecretKey }}'
      - name: ServerCertificate
        value: '{{ ServerCertificate }}'
      - name: ServerHostname
        value: '{{ ServerHostname }}'
      - name: ServerPort
        value: '{{ ServerPort }}'
      - name: ServerProtocol
        value: '{{ ServerProtocol }}'
      - name: Subdirectory
        value: '{{ Subdirectory }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: CmkSecretConfig
        value:
          SecretArn: '{{ SecretArn }}'
          KmsKeyArn: '{{ KmsKeyArn }}'
      - name: CustomSecretConfig
        value:
          SecretArn: '{{ SecretArn }}'
          SecretAccessRoleArn: '{{ SecretAccessRoleArn }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.datasync.location_object_storages
SET PatchDocument = string('{{ {
    "AccessKey": access_key,
    "AgentArns": agent_arns,
    "SecretKey": secret_key,
    "ServerCertificate": server_certificate,
    "ServerHostname": server_hostname,
    "ServerPort": server_port,
    "ServerProtocol": server_protocol,
    "Subdirectory": subdirectory,
    "Tags": tags,
    "CustomSecretConfig": custom_secret_config
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<LocationArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datasync.location_object_storages
WHERE Identifier = '<LocationArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>location_object_storages</code> resource, the following permissions are required:

### Create
```json
datasync:CreateLocationObjectStorage,
datasync:DescribeLocationObjectStorage,
datasync:ListTagsForResource,
datasync:TagResource,
secretsmanager:CreateSecret,
secretsmanager:PutSecretValue,
secretsmanager:DeleteSecret,
iam:CreateServiceLinkedRole,
iam:PassRole,
kms:Encrypt,
kms:Decrypt,
kms:GenerateDataKey
```

### Read
```json
datasync:DescribeLocationObjectStorage,
datasync:ListTagsForResource
```

### Update
```json
datasync:DescribeLocationObjectStorage,
datasync:ListTagsForResource,
datasync:TagResource,
datasync:UntagResource,
datasync:UpdateLocationObjectStorage,
secretsmanager:UpdateSecret,
secretsmanager:DeleteSecret,
secretsmanager:PutSecretValue,
secretsmanager:CreateSecret,
iam:CreateServiceLinkedRole,
iam:PassRole,
kms:Encrypt,
kms:Decrypt,
kms:GenerateDataKey
```

### Delete
```json
datasync:DeleteLocation,
secretsmanager:DeleteSecret
```

### List
```json
datasync:ListLocations
```
