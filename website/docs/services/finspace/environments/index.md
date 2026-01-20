---
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
  - finspace
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

Creates, updates, deletes or gets an <code>environment</code> resource or lists <code>environments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>environments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An example resource schema demonstrating some basic constructs and validation rules.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.finspace.environments" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "environment_id",
    "type": "string",
    "description": "Unique identifier for representing FinSpace Environment"
  },
  {
    "name": "name",
    "type": "string",
    "description": "Name of the Environment"
  },
  {
    "name": "aws_account_id",
    "type": "string",
    "description": "AWS account ID associated with the Environment"
  },
  {
    "name": "description",
    "type": "string",
    "description": "Description of the Environment"
  },
  {
    "name": "status",
    "type": "string",
    "description": "State of the Environment"
  },
  {
    "name": "environment_url",
    "type": "string",
    "description": "URL used to login to the Environment"
  },
  {
    "name": "environment_arn",
    "type": "string",
    "description": "ARN of the Environment"
  },
  {
    "name": "sage_maker_studio_domain_url",
    "type": "string",
    "description": "SageMaker Studio Domain URL associated with the Environment"
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "KMS key used to encrypt customer data within FinSpace Environment infrastructure"
  },
  {
    "name": "dedicated_service_account_id",
    "type": "string",
    "description": "ID for FinSpace created account used to store Environment artifacts"
  },
  {
    "name": "federation_mode",
    "type": "string",
    "description": "Federation mode used with the Environment"
  },
  {
    "name": "federation_parameters",
    "type": "object",
    "description": "Additional parameters to identify Federation mode",
    "children": [
      {
        "name": "saml_metadata_url",
        "type": "string",
        "description": "SAML metadata URL to link with the Environment"
      },
      {
        "name": "federation_provider_name",
        "type": "string",
        "description": "Federation provider name to link with the Environment"
      },
      {
        "name": "saml_metadata_document",
        "type": "string",
        "description": "SAML metadata document to link the federation provider to the Environment"
      },
      {
        "name": "application_call_back_url",
        "type": "string",
        "description": "SAML metadata URL to link with the Environment"
      },
      {
        "name": "federation_ur_n",
        "type": "string",
        "description": "SAML metadata URL to link with the Environment"
      },
      {
        "name": "attribute_map",
        "type": "array",
        "description": "Attribute map for SAML configuration",
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
      }
    ]
  },
  {
    "name": "superuser_parameters",
    "type": "object",
    "description": "Parameters of the first Superuser for the FinSpace Environment",
    "children": [
      {
        "name": "first_name",
        "type": "string",
        "description": "First name"
      },
      {
        "name": "last_name",
        "type": "string",
        "description": "Last name"
      },
      {
        "name": "email_address",
        "type": "string",
        "description": "Email address"
      }
    ]
  },
  {
    "name": "data_bundles",
    "type": "array",
    "description": "ARNs of FinSpace Data Bundles to install"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html"><code>AWS::FinSpace::Environment</code></a>.

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
    <td><CopyableCode code="Name, region" /></td>
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

Gets all properties from an individual <code>environment</code>.
```sql
SELECT
region,
environment_id,
name,
aws_account_id,
description,
status,
environment_url,
environment_arn,
sage_maker_studio_domain_url,
kms_key_id,
dedicated_service_account_id,
federation_mode,
federation_parameters,
superuser_parameters,
data_bundles,
tags
FROM awscc.finspace.environments
WHERE region = 'us-east-1' AND data__Identifier = '<EnvironmentId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>environment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.finspace.environments (
 Name,
 region
)
SELECT 
'{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.finspace.environments (
 Name,
 Description,
 KmsKeyId,
 FederationMode,
 FederationParameters,
 SuperuserParameters,
 DataBundles,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ KmsKeyId }}',
 '{{ FederationMode }}',
 '{{ FederationParameters }}',
 '{{ SuperuserParameters }}',
 '{{ DataBundles }}',
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
  - name: environment
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: KmsKeyId
        value: '{{ KmsKeyId }}'
      - name: FederationMode
        value: '{{ FederationMode }}'
      - name: FederationParameters
        value:
          SamlMetadataURL: '{{ SamlMetadataURL }}'
          FederationProviderName: '{{ FederationProviderName }}'
          SamlMetadataDocument: '{{ SamlMetadataDocument }}'
          ApplicationCallBackURL: '{{ ApplicationCallBackURL }}'
          FederationURN: '{{ FederationURN }}'
          AttributeMap:
            - Key: '{{ Key }}'
              Value: '{{ Value }}'
      - name: SuperuserParameters
        value:
          FirstName: '{{ FirstName }}'
          LastName: '{{ LastName }}'
          EmailAddress: '{{ EmailAddress }}'
      - name: DataBundles
        value:
          - '{{ DataBundles[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.finspace.environments
WHERE data__Identifier = '<EnvironmentId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>environments</code> resource, the following permissions are required:

### Create
```json
finspace:CreateEnvironment,
finspace:GetEnvironment,
finspace:ListEnvironments,
sts:AssumeRole
```

### Read
```json
finspace:GetEnvironment
```

### Update
```json
finspace:UpdateEnvironment
```

### Delete
```json
finspace:DeleteEnvironment,
finspace:GetEnvironment
```

### List
```json
finspace:ListEnvironments
```
