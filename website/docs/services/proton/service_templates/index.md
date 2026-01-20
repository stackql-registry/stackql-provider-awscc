---
title: service_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - service_templates
  - proton
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

Creates, updates, deletes or gets a <code>service_template</code> resource or lists <code>service_templates</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>service_templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Proton::ServiceTemplate Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.proton.service_templates" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": "<p>The Amazon Resource Name (ARN) of the service template.</p>"
  },
  {
    "name": "description",
    "type": "string",
    "description": "<p>A description of the service template.</p>"
  },
  {
    "name": "display_name",
    "type": "string",
    "description": "<p>The name of the service template as displayed in the developer interface.</p>"
  },
  {
    "name": "encryption_key",
    "type": "string",
    "description": "<p>A customer provided encryption key that's used to encrypt data.</p>"
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "pipeline_provisioning",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "<p>An optional list of metadata items that you can associate with the Proton service template. A tag is a key-value pair.</p><br /><p>For more information, see <a href=\"https://docs.aws.amazon.com/proton/latest/userguide/resources.html\">Proton resources and tagging</a> in the<br /><i>Proton User Guide</i>.</p>",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "<p>The key of the resource tag.</p>"
      },
      {
        "name": "value",
        "type": "string",
        "description": "<p>The value of the resource tag.</p>"
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-servicetemplate.html"><code>AWS::Proton::ServiceTemplate</code></a>.

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
    <td><CopyableCode code="region" /></td>
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

Gets all properties from an individual <code>service_template</code>.
```sql
SELECT
region,
arn,
description,
display_name,
encryption_key,
name,
pipeline_provisioning,
tags
FROM awscc.proton.service_templates
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>service_template</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.proton.service_templates (
 Description,
 DisplayName,
 EncryptionKey,
 Name,
 PipelineProvisioning,
 Tags,
 region
)
SELECT 
'{{ Description }}',
 '{{ DisplayName }}',
 '{{ EncryptionKey }}',
 '{{ Name }}',
 '{{ PipelineProvisioning }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.proton.service_templates (
 Description,
 DisplayName,
 EncryptionKey,
 Name,
 PipelineProvisioning,
 Tags,
 region
)
SELECT 
 '{{ Description }}',
 '{{ DisplayName }}',
 '{{ EncryptionKey }}',
 '{{ Name }}',
 '{{ PipelineProvisioning }}',
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
  - name: service_template
    props:
      - name: Description
        value: '{{ Description }}'
      - name: DisplayName
        value: '{{ DisplayName }}'
      - name: EncryptionKey
        value: '{{ EncryptionKey }}'
      - name: Name
        value: '{{ Name }}'
      - name: PipelineProvisioning
        value: '{{ PipelineProvisioning }}'
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
DELETE FROM awscc.proton.service_templates
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>service_templates</code> resource, the following permissions are required:

### Create
```json
proton:CreateServiceTemplate,
proton:TagResource,
proton:GetServiceTemplate,
kms:CancelKeyDeletion,
kms:CreateAlias,
kms:CreateCustomKeyStore,
kms:CreateGrant,
kms:CreateKey,
kms:DeleteAlias,
kms:DeleteCustomKeyStore,
kms:DeleteImportedKeyMaterial,
kms:DescribeCustomKeyStores,
kms:DescribeKey,
kms:DisableKey,
kms:DisableKeyRotation,
kms:EnableKey,
kms:EnableKeyRotation,
kms:GenerateDataKey,
kms:GetKeyPolicy,
kms:GetKeyRotationStatus,
kms:GetParametersForImport,
kms:GetPublicKey,
kms:ListAliases,
kms:ListGrants,
kms:ListKeyPolicies,
kms:ListKeyRotations,
kms:ListKeys,
kms:ListResourceTags,
kms:ListRetirableGrants,
kms:PutKeyPolicy,
kms:RevokeGrant,
kms:ScheduleKeyDeletion,
kms:TagResource,
kms:UntagResource,
kms:UpdateAlias,
kms:UpdateCustomKeyStore,
kms:UpdateKeyDescription,
kms:UpdatePrimaryRegion
```

### Read
```json
proton:GetServiceTemplate,
proton:ListTagsForResource,
kms:CancelKeyDeletion,
kms:CreateAlias,
kms:CreateCustomKeyStore,
kms:CreateGrant,
kms:CreateKey,
kms:DeleteAlias,
kms:DeleteCustomKeyStore,
kms:DeleteImportedKeyMaterial,
kms:DescribeCustomKeyStores,
kms:DescribeKey,
kms:DisableKey,
kms:DisableKeyRotation,
kms:EnableKey,
kms:EnableKeyRotation,
kms:GenerateDataKey,
kms:GetKeyPolicy,
kms:GetKeyRotationStatus,
kms:GetParametersForImport,
kms:GetPublicKey,
kms:ListAliases,
kms:ListGrants,
kms:ListKeyPolicies,
kms:ListKeyRotations,
kms:ListKeys,
kms:ListResourceTags,
kms:ListRetirableGrants,
kms:PutKeyPolicy,
kms:RevokeGrant,
kms:ScheduleKeyDeletion,
kms:TagResource,
kms:UntagResource,
kms:UpdateAlias,
kms:UpdateCustomKeyStore,
kms:UpdateKeyDescription,
kms:UpdatePrimaryRegion
```

### Update
```json
proton:GetServiceTemplate,
proton:CreateServiceTemplate,
proton:ListTagsForResource,
proton:TagResource,
proton:UntagResource,
proton:UpdateServiceTemplate,
kms:CancelKeyDeletion,
kms:CreateAlias,
kms:CreateCustomKeyStore,
kms:CreateGrant,
kms:CreateKey,
kms:DeleteAlias,
kms:DeleteCustomKeyStore,
kms:DeleteImportedKeyMaterial,
kms:DescribeCustomKeyStores,
kms:DescribeKey,
kms:DisableKey,
kms:DisableKeyRotation,
kms:EnableKey,
kms:EnableKeyRotation,
kms:GenerateDataKey,
kms:GetKeyPolicy,
kms:GetKeyRotationStatus,
kms:GetParametersForImport,
kms:GetPublicKey,
kms:ListAliases,
kms:ListGrants,
kms:ListKeyPolicies,
kms:ListKeyRotations,
kms:ListKeys,
kms:ListResourceTags,
kms:ListRetirableGrants,
kms:PutKeyPolicy,
kms:RevokeGrant,
kms:ScheduleKeyDeletion,
kms:TagResource,
kms:UntagResource,
kms:UpdateAlias,
kms:UpdateCustomKeyStore,
kms:UpdateKeyDescription,
kms:UpdatePrimaryRegion
```

### Delete
```json
proton:DeleteServiceTemplate,
proton:UntagResource,
proton:GetServiceTemplate,
kms:CancelKeyDeletion,
kms:CreateAlias,
kms:CreateCustomKeyStore,
kms:CreateGrant,
kms:CreateKey,
kms:DeleteAlias,
kms:DeleteCustomKeyStore,
kms:DeleteImportedKeyMaterial,
kms:DescribeCustomKeyStores,
kms:DescribeKey,
kms:DisableKey,
kms:DisableKeyRotation,
kms:EnableKey,
kms:EnableKeyRotation,
kms:GenerateDataKey,
kms:GetKeyPolicy,
kms:GetKeyRotationStatus,
kms:GetParametersForImport,
kms:GetPublicKey,
kms:ListAliases,
kms:ListGrants,
kms:ListKeyPolicies,
kms:ListKeyRotations,
kms:ListKeys,
kms:ListResourceTags,
kms:ListRetirableGrants,
kms:PutKeyPolicy,
kms:RevokeGrant,
kms:ScheduleKeyDeletion,
kms:TagResource,
kms:UntagResource,
kms:UpdateAlias,
kms:UpdateCustomKeyStore,
kms:UpdateKeyDescription,
kms:UpdatePrimaryRegion
```

### List
```json
proton:ListServiceTemplates,
proton:ListTagsForResource
```
