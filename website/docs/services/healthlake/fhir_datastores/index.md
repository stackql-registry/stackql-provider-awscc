---
title: fhir_datastores
hide_title: false
hide_table_of_contents: false
keywords:
  - fhir_datastores
  - healthlake
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

Creates, updates, deletes or gets a <code>fhir_datastore</code> resource or lists <code>fhir_datastores</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>fhir_datastores</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>HealthLake FHIR Datastore</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.healthlake.fhir_datastores" /></td></tr>
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
    "name": "created_at",
    "type": "object",
    "description": "The time that a Data Store was created.",
    "children": [
      {
        "name": "seconds",
        "type": "string",
        "description": "Seconds since epoch."
      },
      {
        "name": "nanos",
        "type": "integer",
        "description": "Nanoseconds."
      }
    ]
  },
  {
    "name": "datastore_arn",
    "type": "string",
    "description": "The Amazon Resource Name used in the creation of the Data Store."
  },
  {
    "name": "datastore_endpoint",
    "type": "string",
    "description": "The AWS endpoint for the Data Store. Each Data Store will have it's own endpoint with Data Store ID in the endpoint URL."
  },
  {
    "name": "datastore_id",
    "type": "string",
    "description": "The AWS-generated ID number for the Data Store."
  },
  {
    "name": "datastore_name",
    "type": "string",
    "description": "The user-generated name for the Data Store."
  },
  {
    "name": "datastore_status",
    "type": "string",
    "description": "The status of the Data Store. Possible statuses are 'CREATING', 'ACTIVE', 'DELETING', or 'DELETED'."
  },
  {
    "name": "datastore_type_version",
    "type": "string",
    "description": "The FHIR version. Only R4 version data is supported."
  },
  {
    "name": "preload_data_config",
    "type": "object",
    "description": "The preloaded data configuration for the Data Store. Only data preloaded from Synthea is supported.",
    "children": [
      {
        "name": "preload_data_type",
        "type": "string",
        "description": "The type of preloaded data. Only Synthea preloaded data is supported."
      }
    ]
  },
  {
    "name": "sse_configuration",
    "type": "object",
    "description": "The server-side encryption key configuration for a customer provided encryption key.",
    "children": [
      {
        "name": "kms_encryption_config",
        "type": "object",
        "description": "The customer-managed-key (CMK) used when creating a Data Store. If a customer owned key is not specified, an AWS owned key will be used for encryption.",
        "children": [
          {
            "name": "cmk_type",
            "type": "string",
            "description": "The type of customer-managed-key (CMK) used for encryption. The two types of supported CMKs are customer owned CMKs and AWS owned CMKs."
          },
          {
            "name": "kms_key_id",
            "type": "string",
            "description": "The KMS encryption key id/alias used to encrypt the Data Store contents at rest."
          }
        ]
      }
    ]
  },
  {
    "name": "identity_provider_configuration",
    "type": "object",
    "description": "The identity provider configuration for the datastore",
    "children": [
      {
        "name": "authorization_strategy",
        "type": "string",
        "description": "Type of Authorization Strategy. The two types of supported Authorization strategies are SMART&#95;ON&#95;FHIR&#95;V1 and AWS&#95;AUTH."
      },
      {
        "name": "fine_grained_authorization_enabled",
        "type": "boolean",
        "description": "Flag to indicate if fine-grained authorization will be enabled for the datastore"
      },
      {
        "name": "metadata",
        "type": "string",
        "description": "The JSON metadata elements for identity provider configuration."
      },
      {
        "name": "idp_lambda_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the Lambda function that will be used to decode the access token created by the authorization server."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key of the tag."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value of the tag."
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
    "name": "datastore_id",
    "type": "string",
    "description": "The AWS-generated ID number for the Data Store."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html"><code>AWS::HealthLake::FHIRDatastore</code></a>.

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
    <td><code>fhir_datastores</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DatastoreTypeVersion, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>fhir_datastores</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>fhir_datastores</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>fhir_datastores_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>fhir_datastores</code></td>
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

Gets all properties from an individual <code>fhir_datastore</code>.
```sql
SELECT
region,
created_at,
datastore_arn,
datastore_endpoint,
datastore_id,
datastore_name,
datastore_status,
datastore_type_version,
preload_data_config,
sse_configuration,
identity_provider_configuration,
tags
FROM awscc.healthlake.fhir_datastores
WHERE region = 'us-east-1' AND Identifier = '<DatastoreId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>fhir_datastores</code> in a region.
```sql
SELECT
region,
datastore_id
FROM awscc.healthlake.fhir_datastores_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>fhir_datastore</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.healthlake.fhir_datastores (
 DatastoreTypeVersion,
 region
)
SELECT 
'{{ DatastoreTypeVersion }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.healthlake.fhir_datastores (
 DatastoreName,
 DatastoreTypeVersion,
 PreloadDataConfig,
 SseConfiguration,
 IdentityProviderConfiguration,
 Tags,
 region
)
SELECT 
 '{{ DatastoreName }}',
 '{{ DatastoreTypeVersion }}',
 '{{ PreloadDataConfig }}',
 '{{ SseConfiguration }}',
 '{{ IdentityProviderConfiguration }}',
 '{{ Tags }}',
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
  - name: fhir_datastore
    props:
      - name: DatastoreName
        value: '{{ DatastoreName }}'
      - name: DatastoreTypeVersion
        value: '{{ DatastoreTypeVersion }}'
      - name: PreloadDataConfig
        value:
          PreloadDataType: '{{ PreloadDataType }}'
      - name: SseConfiguration
        value:
          KmsEncryptionConfig:
            CmkType: '{{ CmkType }}'
            KmsKeyId: '{{ KmsKeyId }}'
      - name: IdentityProviderConfiguration
        value:
          AuthorizationStrategy: '{{ AuthorizationStrategy }}'
          FineGrainedAuthorizationEnabled: '{{ FineGrainedAuthorizationEnabled }}'
          Metadata: '{{ Metadata }}'
          IdpLambdaArn: '{{ IdpLambdaArn }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>fhir_datastore</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.healthlake.fhir_datastores
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<DatastoreId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.healthlake.fhir_datastores
WHERE Identifier = '<DatastoreId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>fhir_datastores</code> resource, the following permissions are required:

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
healthlake:CreateFHIRDatastore,
healthlake:DescribeFHIRDatastore,
iam:PassRole,
kms:DescribeKey,
kms:CreateGrant,
kms:GenerateDataKey,
kms:Decrypt,
iam:GetRole,
iam:CreateServiceLinkedRole,
ram:GetResourceShareInvitations,
ram:AcceptResourceShareInvitation,
glue:CreateDatabase,
glue:DeleteDatabase,
lambda:InvokeFunction,
healthlake:TagResource,
healthlake:UntagResource,
healthlake:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
healthlake:DescribeFHIRDatastore,
healthlake:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
healthlake:TagResource,
healthlake:UntagResource,
healthlake:ListTagsForResource,
healthlake:DescribeFHIRDatastore,
iam:PassRole,
iam:GetRole,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="delete">

```json
healthlake:DeleteFHIRDatastore,
healthlake:DescribeFHIRDatastore,
iam:PassRole,
iam:GetRole,
iam:CreateServiceLinkedRole,
ram:GetResourceShareInvitations,
ram:AcceptResourceShareInvitation,
glue:CreateDatabase,
glue:DeleteDatabase
```

</TabItem>
<TabItem value="list">

```json
healthlake:ListFHIRDatastores
```

</TabItem>
</Tabs>