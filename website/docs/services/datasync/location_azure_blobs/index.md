---
title: location_azure_blobs
hide_title: false
hide_table_of_contents: false
keywords:
  - location_azure_blobs
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

Creates, updates, deletes or gets a <code>location_azure_blob</code> resource or lists <code>location_azure_blobs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>location_azure_blobs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::DataSync::LocationAzureBlob.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datasync.location_azure_blobs" /></td></tr>
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
    "description": "Specifies the Amazon Resource Name (ARN) of the DataSync agent that can connect with your Azure Blob Storage container. If you are setting up an agentless cross-cloud transfer, you do not need to specify a value for this parameter."
  },
  {
    "name": "azure_blob_authentication_type",
    "type": "string",
    "description": "The specific authentication type that you want DataSync to use to access your Azure Blob Container."
  },
  {
    "name": "azure_blob_sas_configuration",
    "type": "object",
    "description": "Specifies the shared access signature (SAS) that DataSync uses to access your Azure Blob Storage container.",
    "children": [
      {
        "name": "azure_blob_sas_token",
        "type": "string",
        "description": "Specifies the shared access signature (SAS) token, which indicates the permissions DataSync needs to access your Azure Blob Storage container."
      }
    ]
  },
  {
    "name": "azure_blob_container_url",
    "type": "string",
    "description": "The URL of the Azure Blob container that was described."
  },
  {
    "name": "azure_blob_type",
    "type": "string",
    "description": "Specifies a blob type for the objects you're transferring into your Azure Blob Storage container."
  },
  {
    "name": "azure_access_tier",
    "type": "string",
    "description": "Specifies an access tier for the objects you're transferring into your Azure Blob Storage container."
  },
  {
    "name": "subdirectory",
    "type": "string",
    "description": "The subdirectory in the Azure Blob Container that is used to read data from the Azure Blob Source Location."
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
    "description": "The Amazon Resource Name (ARN) of the Azure Blob Location that is created."
  },
  {
    "name": "location_uri",
    "type": "string",
    "description": "The URL of the Azure Blob Location that was described."
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
    "description": "The Amazon Resource Name (ARN) of the Azure Blob Location that is created."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html"><code>AWS::DataSync::LocationAzureBlob</code></a>.

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
    <td><code>location_azure_blobs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AzureBlobAuthenticationType, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>location_azure_blobs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>location_azure_blobs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>location_azure_blobs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>location_azure_blobs</code></td>
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

Gets all properties from an individual <code>location_azure_blob</code>.
```sql
SELECT
region,
agent_arns,
azure_blob_authentication_type,
azure_blob_sas_configuration,
azure_blob_container_url,
azure_blob_type,
azure_access_tier,
subdirectory,
tags,
location_arn,
location_uri,
cmk_secret_config,
custom_secret_config,
managed_secret_config
FROM awscc.datasync.location_azure_blobs
WHERE region = 'us-east-1' AND Identifier = '{{ location_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>location_azure_blobs</code> in a region.
```sql
SELECT
region,
location_arn
FROM awscc.datasync.location_azure_blobs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>location_azure_blob</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datasync.location_azure_blobs (
 AzureBlobAuthenticationType,
 region
)
SELECT
'{{ azure_blob_authentication_type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.datasync.location_azure_blobs (
 AgentArns,
 AzureBlobAuthenticationType,
 AzureBlobSasConfiguration,
 AzureBlobContainerUrl,
 AzureBlobType,
 AzureAccessTier,
 Subdirectory,
 Tags,
 CmkSecretConfig,
 CustomSecretConfig,
 region
)
SELECT
 '{{ agent_arns }}',
 '{{ azure_blob_authentication_type }}',
 '{{ azure_blob_sas_configuration }}',
 '{{ azure_blob_container_url }}',
 '{{ azure_blob_type }}',
 '{{ azure_access_tier }}',
 '{{ subdirectory }}',
 '{{ tags }}',
 '{{ cmk_secret_config }}',
 '{{ custom_secret_config }}',
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
  - name: location_azure_blob
    props:
      - name: agent_arns
        value:
          - '{{ agent_arns[0] }}'
      - name: azure_blob_authentication_type
        value: '{{ azure_blob_authentication_type }}'
      - name: azure_blob_sas_configuration
        value:
          azure_blob_sas_token: '{{ azure_blob_sas_token }}'
      - name: azure_blob_container_url
        value: '{{ azure_blob_container_url }}'
      - name: azure_blob_type
        value: '{{ azure_blob_type }}'
      - name: azure_access_tier
        value: '{{ azure_access_tier }}'
      - name: subdirectory
        value: '{{ subdirectory }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: cmk_secret_config
        value:
          secret_arn: '{{ secret_arn }}'
          kms_key_arn: '{{ kms_key_arn }}'
      - name: custom_secret_config
        value:
          secret_arn: '{{ secret_arn }}'
          secret_access_role_arn: '{{ secret_access_role_arn }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>location_azure_blob</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.datasync.location_azure_blobs
SET PatchDocument = string('{{ {
    "AgentArns": agent_arns,
    "AzureBlobAuthenticationType": azure_blob_authentication_type,
    "AzureBlobSasConfiguration": azure_blob_sas_configuration,
    "AzureBlobType": azure_blob_type,
    "AzureAccessTier": azure_access_tier,
    "Subdirectory": subdirectory,
    "Tags": tags,
    "CustomSecretConfig": custom_secret_config
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ location_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datasync.location_azure_blobs
WHERE Identifier = '{{ location_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>location_azure_blobs</code> resource, the following permissions are required:

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
datasync:CreateLocationAzureBlob,
datasync:DescribeLocationAzureBlob,
datasync:TagResource,
datasync:ListTagsForResource,
secretsmanager:CreateSecret,
secretsmanager:PutSecretValue,
secretsmanager:DeleteSecret,
iam:CreateServiceLinkedRole,
iam:PassRole,
kms:Encrypt,
kms:Decrypt,
kms:GenerateDataKey
```

</TabItem>
<TabItem value="read">

```json
datasync:DescribeLocationAzureBlob,
datasync:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
datasync:DescribeLocationAzureBlob,
datasync:ListTagsForResource,
datasync:TagResource,
datasync:UntagResource,
datasync:UpdateLocationAzureBlob,
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

</TabItem>
<TabItem value="delete">

```json
datasync:DeleteLocation,
secretsmanager:DeleteSecret
```

</TabItem>
<TabItem value="list">

```json
datasync:ListLocations
```

</TabItem>
</Tabs>