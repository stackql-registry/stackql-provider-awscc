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
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="prefix" /></td><td><code>string</code></td><td>The repository namespace prefix associated with the repository creation template.</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>The description associated with the repository creation template.</td></tr>
<tr><td><CopyableCode code="image_tag_mutability" /></td><td><code>string</code></td><td>The tag mutability setting for the repository. If this parameter is omitted, the default setting of <code>MUTABLE</code> will be used which will allow image tags to be overwritten. If <code>IMMUTABLE</code> is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.</td></tr>
<tr><td><CopyableCode code="image_tag_mutability_exclusion_filters" /></td><td><code>array</code></td><td>Defines the image tag mutability exclusion filters to apply when creating repositories from this template. These filters specify which image tags can override the repository's default image tag mutability setting.</td></tr>
<tr><td><CopyableCode code="repository_policy" /></td><td><code>string</code></td><td>The repository policy to apply to repositories created using the template. A repository policy is a permissions policy associated with a repository to control access permissions.</td></tr>
<tr><td><CopyableCode code="lifecycle_policy" /></td><td><code>string</code></td><td>The lifecycle policy to use for repositories created using the template.</td></tr>
<tr><td><CopyableCode code="encryption_configuration" /></td><td><code>object</code></td><td>The encryption configuration associated with the repository creation template.</td></tr>
<tr><td><CopyableCode code="resource_tags" /></td><td><code>array</code></td><td>The metadata to apply to the repository to help you categorize and organize. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</td></tr>
<tr><td><CopyableCode code="applied_for" /></td><td><code>array</code></td><td>A list of enumerable Strings representing the repository creation scenarios that this template will apply towards. The two supported scenarios are PULL_THROUGH_CACHE and REPLICATION</td></tr>
<tr><td><CopyableCode code="custom_role_arn" /></td><td><code>string</code></td><td>The ARN of the role to be assumed by Amazon ECR. Amazon ECR will assume your supplied role when the customRoleArn is specified. When this field isn't specified, Amazon ECR will use the service-linked role for the repository creation template.</td></tr>
<tr><td><CopyableCode code="created_at" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="updated_at" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repositorycreationtemplate.html"><code>AWS::ECR::RepositoryCreationTemplate</code></a>.

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
    <td><CopyableCode code="Prefix, AppliedFor, region" /></td>
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
Gets all <code>repository_creation_templates</code> in a region.
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
WHERE region = 'us-east-1';
```
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
WHERE region = 'us-east-1' AND data__Identifier = '<Prefix>';
```

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

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ecr.repository_creation_templates
WHERE data__Identifier = '<Prefix>'
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
