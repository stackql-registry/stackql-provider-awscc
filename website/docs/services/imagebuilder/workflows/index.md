---
title: workflows
hide_title: false
hide_table_of_contents: false
keywords:
  - workflows
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

Creates, updates, deletes or gets a <code>workflow</code> resource or lists <code>workflows</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>workflows</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::ImageBuilder::Workflow</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.imagebuilder.workflows" /></td></tr>
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
    "description": "The Amazon Resource Name (ARN) of the workflow."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the workflow."
  },
  {
    "name": "version",
    "type": "string",
    "description": "The version of the workflow."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the workflow."
  },
  {
    "name": "change_description",
    "type": "string",
    "description": "The change description of the workflow."
  },
  {
    "name": "type",
    "type": "string",
    "description": "The type of the workflow denotes whether the workflow is used to build, test, or distribute."
  },
  {
    "name": "data",
    "type": "string",
    "description": "The data of the workflow."
  },
  {
    "name": "uri",
    "type": "string",
    "description": "The uri of the workflow."
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "The KMS key identifier used to encrypt the workflow."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "The tags associated with the workflow."
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
    "description": "The Amazon Resource Name (ARN) of the workflow."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-workflow.html"><code>AWS::ImageBuilder::Workflow</code></a>.

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
    <td><code>workflows</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, Type, Version, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>workflows</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>workflows</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>workflows_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>workflows</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>workflow</code>.
```sql
SELECT
region,
arn,
name,
version,
description,
change_description,
type,
data,
uri,
kms_key_id,
tags
FROM awscc.imagebuilder.workflows
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>workflows</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.imagebuilder.workflows_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>workflow</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.imagebuilder.workflows (
 Name,
 Version,
 Type,
 region
)
SELECT 
'{{ Name }}',
 '{{ Version }}',
 '{{ Type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.imagebuilder.workflows (
 Name,
 Version,
 Description,
 ChangeDescription,
 Type,
 Data,
 Uri,
 KmsKeyId,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Version }}',
 '{{ Description }}',
 '{{ ChangeDescription }}',
 '{{ Type }}',
 '{{ Data }}',
 '{{ Uri }}',
 '{{ KmsKeyId }}',
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
  - name: workflow
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Version
        value: '{{ Version }}'
      - name: Description
        value: '{{ Description }}'
      - name: ChangeDescription
        value: '{{ ChangeDescription }}'
      - name: Type
        value: '{{ Type }}'
      - name: Data
        value: '{{ Data }}'
      - name: Uri
        value: '{{ Uri }}'
      - name: KmsKeyId
        value: '{{ KmsKeyId }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.imagebuilder.workflows
SET data__PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.imagebuilder.workflows
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>workflows</code> resource, the following permissions are required:

### Create
```json
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
imagebuilder:GetWorkflow,
imagebuilder:CreateWorkflow
```

### Read
```json
imagebuilder:GetWorkflow,
kms:Decrypt
```

### Update
```json
imagebuilder:TagResource,
imagebuilder:UntagResource
```

### Delete
```json
imagebuilder:GetWorkflow,
imagebuilder:UntagResource,
imagebuilder:DeleteWorkflow
```

### List
```json
imagebuilder:ListWorkflows,
imagebuilder:ListWorkflowBuildVersions
```
