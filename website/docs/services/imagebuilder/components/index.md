---
title: components
hide_title: false
hide_table_of_contents: false
keywords:
  - components
  - imagebuilder
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

Creates, updates, deletes or gets a <code>component</code> resource or lists <code>components</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>components</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::ImageBuilder::Component</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.imagebuilder.components" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the component."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the component."
  },
  {
    "name": "version",
    "type": "string",
    "description": "The version of the component."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the component."
  },
  {
    "name": "change_description",
    "type": "string",
    "description": "The change description of the component."
  },
  {
    "name": "type",
    "type": "string",
    "description": "The type of the component denotes whether the component is used to build the image or only to test it."
  },
  {
    "name": "platform",
    "type": "string",
    "description": "The platform of the component."
  },
  {
    "name": "data",
    "type": "string",
    "description": "The data of the component."
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "The KMS key identifier used to encrypt the component."
  },
  {
    "name": "encrypted",
    "type": "boolean",
    "description": "The encryption status of the component."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "The tags associated with the component."
  },
  {
    "name": "uri",
    "type": "string",
    "description": "The uri of the component."
  },
  {
    "name": "supported_os_versions",
    "type": "array",
    "description": "The operating system (OS) version supported by the component."
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
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the component."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html"><code>AWS::ImageBuilder::Component</code></a>.

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
    <td><code>components</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, Platform, Version, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>components</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>components</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>components_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>components</code></td>
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

Gets all properties from an individual <code>component</code>.
```sql
SELECT
region,
arn,
name,
version,
description,
change_description,
type,
platform,
data,
kms_key_id,
encrypted,
tags,
uri,
supported_os_versions
FROM awscc.imagebuilder.components
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>components</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.imagebuilder.components_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>component</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.imagebuilder.components (
 Name,
 Version,
 Platform,
 region
)
SELECT 
'{{ Name }}',
 '{{ Version }}',
 '{{ Platform }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.imagebuilder.components (
 Name,
 Version,
 Description,
 ChangeDescription,
 Platform,
 Data,
 KmsKeyId,
 Tags,
 Uri,
 SupportedOsVersions,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Version }}',
 '{{ Description }}',
 '{{ ChangeDescription }}',
 '{{ Platform }}',
 '{{ Data }}',
 '{{ KmsKeyId }}',
 '{{ Tags }}',
 '{{ Uri }}',
 '{{ SupportedOsVersions }}',
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
  - name: component
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Version
        value: '{{ Version }}'
      - name: Description
        value: '{{ Description }}'
      - name: ChangeDescription
        value: '{{ ChangeDescription }}'
      - name: Platform
        value: '{{ Platform }}'
      - name: Data
        value: '{{ Data }}'
      - name: KmsKeyId
        value: '{{ KmsKeyId }}'
      - name: Tags
        value: {}
      - name: Uri
        value: '{{ Uri }}'
      - name: SupportedOsVersions
        value:
          - '{{ SupportedOsVersions[0] }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>component</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.imagebuilder.components
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.imagebuilder.components
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>components</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
iam:CreateServiceLinkedRole,
iam:GetRole,
kms:GenerateDataKey,
kms:GenerateDataKeyPair,
kms:GenerateDataKeyPairWithoutPlaintext,
kms:GenerateDataKeyWithoutPlaintext,
kms:Encrypt,
kms:Decrypt,
s3:GetObject,
s3:HeadBucket,
s3:GetBucketLocation,
imagebuilder:TagResource,
imagebuilder:GetComponent,
imagebuilder:CreateComponent
```

</TabItem>
<TabItem value="update">

```json
imagebuilder:TagResource,
imagebuilder:UntagResource
```

</TabItem>
<TabItem value="read">

```json
imagebuilder:GetComponent,
kms:Decrypt
```

</TabItem>
<TabItem value="delete">

```json
imagebuilder:GetComponent,
imagebuilder:UntagResource,
imagebuilder:DeleteComponent
```

</TabItem>
<TabItem value="list">

```json
imagebuilder:ListComponents,
imagebuilder:ListComponentBuildVersions
```

</TabItem>
</Tabs>