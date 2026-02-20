---
title: configuration_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_profiles
  - appconfig
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

Creates, updates, deletes or gets a <code>configuration_profile</code> resource or lists <code>configuration_profiles</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>configuration_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An example resource schema demonstrating some basic constructs and validation rules.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.appconfig.configuration_profiles" /></td></tr>
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
    "name": "configuration_profile_id",
    "type": "string",
    "description": "The configuration profile ID"
  },
  {
    "name": "location_uri",
    "type": "string",
    "description": "A URI to locate the configuration. You can specify the AWS AppConfig hosted configuration store, Systems Manager (SSM) document, an SSM Parameter Store parameter, or an Amazon S3 object."
  },
  {
    "name": "type",
    "type": "string",
    "description": "The type of configurations contained in the profile. When calling this API, enter one of the following values for Type: AWS.AppConfig.FeatureFlags, AWS.Freeform"
  },
  {
    "name": "kms_key_identifier",
    "type": "string",
    "description": "The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description of the configuration profile."
  },
  {
    "name": "kms_key_arn",
    "type": "string",
    "description": "The Amazon Resource Name of the AWS Key Management Service key to encrypt new configuration data versions in the AWS AppConfig hosted configuration store. This attribute is only used for hosted configuration types. To encrypt data managed in other configuration stores, see the documentation for how to specify an AWS KMS key for that particular service."
  },
  {
    "name": "validators",
    "type": "array",
    "description": "A list of methods for validating the configuration.",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": "AWS AppConfig supports validators of type JSON&#95;SCHEMA and LAMBDA."
      },
      {
        "name": "content",
        "type": "string",
        "description": "Either the JSON Schema content or the Amazon Resource Name (ARN) of an Lambda function."
      }
    ]
  },
  {
    "name": "retrieval_role_arn",
    "type": "string",
    "description": "The ARN of an IAM role with permission to access the configuration at the specified LocationUri."
  },
  {
    "name": "deletion_protection_check",
    "type": "string",
    "description": "On resource deletion this controls whether the Deletion Protection check should be applied, bypassed, or (the default) whether the behavior should be controlled by the account-level Deletion Protection setting. See https://docs.aws.amazon.com/appconfig/latest/userguide/deletion-protection.html"
  },
  {
    "name": "application_id",
    "type": "string",
    "description": "The application ID."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Metadata to assign to the configuration profile. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The tag value can be up to 256 characters."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The key-value string map. The tag key can be up to 128 characters and must not start with aws:."
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": "A name for the configuration profile."
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
    "name": "configuration_profile_id",
    "type": "string",
    "description": "The configuration profile ID"
  },
  {
    "name": "application_id",
    "type": "string",
    "description": "The application ID."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html"><code>AWS::AppConfig::ConfigurationProfile</code></a>.

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
    <td><code>configuration_profiles</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="LocationUri, ApplicationId, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>configuration_profiles</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>configuration_profiles</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>configuration_profiles_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>configuration_profiles</code></td>
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

Gets all properties from an individual <code>configuration_profile</code>.
```sql
SELECT
region,
configuration_profile_id,
location_uri,
type,
kms_key_identifier,
description,
kms_key_arn,
validators,
retrieval_role_arn,
deletion_protection_check,
application_id,
tags,
name
FROM awscc.appconfig.configuration_profiles
WHERE region = 'us-east-1' AND Identifier = '<ApplicationId>|<ConfigurationProfileId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>configuration_profiles</code> in a region.
```sql
SELECT
region,
application_id,
configuration_profile_id
FROM awscc.appconfig.configuration_profiles_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>configuration_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.appconfig.configuration_profiles (
 LocationUri,
 ApplicationId,
 Name,
 region
)
SELECT 
'{{ LocationUri }}',
 '{{ ApplicationId }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.appconfig.configuration_profiles (
 LocationUri,
 Type,
 KmsKeyIdentifier,
 Description,
 Validators,
 RetrievalRoleArn,
 DeletionProtectionCheck,
 ApplicationId,
 Tags,
 Name,
 region
)
SELECT 
 '{{ LocationUri }}',
 '{{ Type }}',
 '{{ KmsKeyIdentifier }}',
 '{{ Description }}',
 '{{ Validators }}',
 '{{ RetrievalRoleArn }}',
 '{{ DeletionProtectionCheck }}',
 '{{ ApplicationId }}',
 '{{ Tags }}',
 '{{ Name }}',
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
  - name: configuration_profile
    props:
      - name: LocationUri
        value: '{{ LocationUri }}'
      - name: Type
        value: '{{ Type }}'
      - name: KmsKeyIdentifier
        value: '{{ KmsKeyIdentifier }}'
      - name: Description
        value: '{{ Description }}'
      - name: Validators
        value:
          - Type: '{{ Type }}'
            Content: '{{ Content }}'
      - name: RetrievalRoleArn
        value: '{{ RetrievalRoleArn }}'
      - name: DeletionProtectionCheck
        value: '{{ DeletionProtectionCheck }}'
      - name: ApplicationId
        value: '{{ ApplicationId }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: Name
        value: '{{ Name }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>configuration_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.appconfig.configuration_profiles
SET PatchDocument = string('{{ {
    "KmsKeyIdentifier": kms_key_identifier,
    "Description": description,
    "Validators": validators,
    "RetrievalRoleArn": retrieval_role_arn,
    "DeletionProtectionCheck": deletion_protection_check,
    "Tags": tags,
    "Name": name
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ApplicationId>|<ConfigurationProfileId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.appconfig.configuration_profiles
WHERE Identifier = '<ApplicationId|ConfigurationProfileId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>configuration_profiles</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
appconfig:GetConfigurationProfile,
appconfig:ListTagsForResource
```

</TabItem>
<TabItem value="create">

```json
appconfig:CreateConfigurationProfile,
appconfig:GetConfigurationProfile,
appconfig:TagResource,
appconfig:ListTagsForResource,
iam:PassRole
```

</TabItem>
<TabItem value="update">

```json
appconfig:UpdateConfigurationProfile,
appconfig:TagResource,
appconfig:UntagResource,
iam:PassRole
```

</TabItem>
<TabItem value="list">

```json
appconfig:ListConfigurationProfiles
```

</TabItem>
<TabItem value="delete">

```json
appconfig:DeleteConfigurationProfile
```

</TabItem>
</Tabs>