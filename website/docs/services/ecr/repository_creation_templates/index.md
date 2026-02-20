---
title: repository_creation_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - repository_creation_templates
  - ecr
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

Creates, updates, deletes or gets a <code>repository_creation_template</code> resource or lists <code>repository_creation_templates</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>repository_creation_templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The details of the repository creation template associated with the request.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ecr.repository_creation_templates" /></td></tr>
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
    "name": "prefix",
    "type": "string",
    "description": "The repository namespace prefix associated with the repository creation template."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description associated with the repository creation template."
  },
  {
    "name": "image_tag_mutability",
    "type": "string",
    "description": "The tag mutability setting for the repository. If this parameter is omitted, the default setting of &#96;&#96;MUTABLE&#96;&#96; will be used which will allow image tags to be overwritten. If &#96;&#96;IMMUTABLE&#96;&#96; is specified, all image tags within the repository will be immutable which will prevent them from being overwritten."
  },
  {
    "name": "image_tag_mutability_exclusion_filters",
    "type": "array",
    "description": "Defines the image tag mutability exclusion filters to apply when creating repositories from this template. These filters specify which image tags can override the repository's default image tag mutability setting.",
    "children": [
      {
        "name": "image_tag_mutability_exclusion_filter_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "image_tag_mutability_exclusion_filter_value",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "repository_policy",
    "type": "string",
    "description": "The repository policy to apply to repositories created using the template. A repository policy is a permissions policy associated with a repository to control access permissions."
  },
  {
    "name": "lifecycle_policy",
    "type": "string",
    "description": "The lifecycle policy to use for repositories created using the template."
  },
  {
    "name": "encryption_configuration",
    "type": "object",
    "description": "The encryption configuration associated with the repository creation template.",
    "children": [
      {
        "name": "encryption_type",
        "type": "string",
        "description": "The encryption type to use.<br />If you use the &#96;&#96;KMS&#96;&#96; encryption type, the contents of the repository will be encrypted using server-side encryption with KMSlong key stored in KMS. When you use KMS to encrypt your data, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you already created.<br />If you use the &#96;&#96;KMS&#95;DSSE&#96;&#96; encryption type, the contents of the repository will be encrypted with two layers of encryption using server-side encryption with the KMS Management Service key stored in KMS. Similar to the &#96;&#96;KMS&#96;&#96; encryption type, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you've already created. <br />If you use the &#96;&#96;AES256&#96;&#96; encryption type, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts the images in the repository using an AES256 encryption algorithm.<br />For more information, see &#91;Amazon ECR encryption at rest&#93;(https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html) in the &#42;Amazon Elastic Container Registry User Guide&#42;."
      },
      {
        "name": "kms_key",
        "type": "string",
        "description": "If you use the &#96;&#96;KMS&#96;&#96; encryption type, specify the KMS key to use for encryption. The alias, key ID, or full ARN of the KMS key can be specified. The key must exist in the same Region as the repository. If no key is specified, the default AWS managed KMS key for Amazon ECR will be used."
      }
    ]
  },
  {
    "name": "resource_tags",
    "type": "array",
    "description": "The metadata to apply to the repository to help you categorize and organize. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "One part of a key-value pair that make up a tag. A &#96;&#96;key&#96;&#96; is a general label that acts like a category for more specific tag values."
      },
      {
        "name": "value",
        "type": "string",
        "description": "A &#96;&#96;value&#96;&#96; acts as a descriptor within a tag category (key)."
      }
    ]
  },
  {
    "name": "applied_for",
    "type": "array",
    "description": "A list of enumerable Strings representing the repository creation scenarios that this template will apply towards. The two supported scenarios are PULL&#95;THROUGH&#95;CACHE and REPLICATION"
  },
  {
    "name": "custom_role_arn",
    "type": "string",
    "description": "The ARN of the role to be assumed by Amazon ECR. Amazon ECR will assume your supplied role when the customRoleArn is specified. When this field isn't specified, Amazon ECR will use the service-linked role for the repository creation template."
  },
  {
    "name": "created_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "updated_at",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "prefix",
    "type": "string",
    "description": "The repository namespace prefix associated with the repository creation template."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repositorycreationtemplate.html"><code>AWS::ECR::RepositoryCreationTemplate</code></a>.

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
    <td><code>repository_creation_templates</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Prefix, AppliedFor, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>repository_creation_templates</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>repository_creation_templates</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>repository_creation_templates_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>repository_creation_templates</code></td>
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

Gets all properties from an individual <code>repository_creation_template</code>.
```sql
SELECT
region,
prefix,
description,
image_tag_mutability,
image_tag_mutability_exclusion_filters,
repository_policy,
lifecycle_policy,
encryption_configuration,
resource_tags,
applied_for,
custom_role_arn,
created_at,
updated_at
FROM awscc.ecr.repository_creation_templates
WHERE region = 'us-east-1' AND Identifier = '<Prefix>';
```
</TabItem>
<TabItem value="list">

Lists all <code>repository_creation_templates</code> in a region.
```sql
SELECT
region,
prefix
FROM awscc.ecr.repository_creation_templates_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>repository_creation_template</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ecr.repository_creation_templates (
 Prefix,
 AppliedFor,
 region
)
SELECT 
'{{ Prefix }}',
 '{{ AppliedFor }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ecr.repository_creation_templates (
 Prefix,
 Description,
 ImageTagMutability,
 ImageTagMutabilityExclusionFilters,
 RepositoryPolicy,
 LifecyclePolicy,
 EncryptionConfiguration,
 ResourceTags,
 AppliedFor,
 CustomRoleArn,
 region
)
SELECT 
 '{{ Prefix }}',
 '{{ Description }}',
 '{{ ImageTagMutability }}',
 '{{ ImageTagMutabilityExclusionFilters }}',
 '{{ RepositoryPolicy }}',
 '{{ LifecyclePolicy }}',
 '{{ EncryptionConfiguration }}',
 '{{ ResourceTags }}',
 '{{ AppliedFor }}',
 '{{ CustomRoleArn }}',
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
  - name: repository_creation_template
    props:
      - name: Prefix
        value: '{{ Prefix }}'
      - name: Description
        value: '{{ Description }}'
      - name: ImageTagMutability
        value: '{{ ImageTagMutability }}'
      - name: ImageTagMutabilityExclusionFilters
        value:
          - ImageTagMutabilityExclusionFilterType: '{{ ImageTagMutabilityExclusionFilterType }}'
            ImageTagMutabilityExclusionFilterValue: '{{ ImageTagMutabilityExclusionFilterValue }}'
      - name: RepositoryPolicy
        value: '{{ RepositoryPolicy }}'
      - name: LifecyclePolicy
        value: '{{ LifecyclePolicy }}'
      - name: EncryptionConfiguration
        value:
          EncryptionType: '{{ EncryptionType }}'
          KmsKey: '{{ KmsKey }}'
      - name: ResourceTags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: AppliedFor
        value:
          - '{{ AppliedFor[0] }}'
      - name: CustomRoleArn
        value: '{{ CustomRoleArn }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ecr.repository_creation_templates
SET PatchDocument = string('{{ {
    "Description": description,
    "ImageTagMutability": image_tag_mutability,
    "ImageTagMutabilityExclusionFilters": image_tag_mutability_exclusion_filters,
    "RepositoryPolicy": repository_policy,
    "LifecyclePolicy": lifecycle_policy,
    "EncryptionConfiguration": encryption_configuration,
    "ResourceTags": resource_tags,
    "AppliedFor": applied_for,
    "CustomRoleArn": custom_role_arn
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Prefix>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ecr.repository_creation_templates
WHERE Identifier = '<Prefix>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>repository_creation_templates</code> resource, the following permissions are required:

### Create
```json
ecr:CreateRepositoryCreationTemplate,
ecr:PutLifecyclePolicy,
ecr:SetRepositoryPolicy,
ecr:CreateRepository,
iam:CreateServiceLinkedRole,
iam:PassRole
```

### Read
```json
ecr:DescribeRepositoryCreationTemplates
```

### Update
```json
ecr:DescribeRepositoryCreationTemplates,
ecr:UpdateRepositoryCreationTemplate,
ecr:PutLifecyclePolicy,
ecr:SetRepositoryPolicy,
ecr:CreateRepository,
iam:CreateServiceLinkedRole,
iam:PassRole
```

### Delete
```json
ecr:DeleteRepositoryCreationTemplate
```

### List
```json
ecr:DescribeRepositoryCreationTemplates
```
