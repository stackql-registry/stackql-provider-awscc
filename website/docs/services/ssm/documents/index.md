---
title: documents
hide_title: false
hide_table_of_contents: false
keywords:
  - documents
  - ssm
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

Creates, updates, deletes or gets a <code>document</code> resource or lists <code>documents</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>documents</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::SSM::Document resource is an SSM document in AWS Systems Manager that defines the actions that Systems Manager performs, which can be used to set up and run commands on your instances.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ssm.documents" /></td></tr>
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
    "name": "content",
    "type": "object",
    "description": "The content for the Systems Manager document in JSON, YAML or String format."
  },
  {
    "name": "attachments",
    "type": "array",
    "description": "A list of key and value pairs that describe attachments to a version of a document.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key of a key-value pair that identifies the location of an attachment to a document."
      },
      {
        "name": "values",
        "type": "array",
        "description": "The value of a key-value pair that identifies the location of an attachment to a document. The format for Value depends on the type of key you specify."
      },
      {
        "name": "name",
        "type": "string",
        "description": "The name of the document attachment file."
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": "A name for the Systems Manager document."
  },
  {
    "name": "version_name",
    "type": "string",
    "description": "An optional field specifying the version of the artifact you are creating with the document. This value is unique across all versions of a document, and cannot be changed."
  },
  {
    "name": "document_type",
    "type": "string",
    "description": "The type of document to create."
  },
  {
    "name": "document_format",
    "type": "string",
    "description": "Specify the document format for the request. The document format can be either JSON or YAML. JSON is the default format."
  },
  {
    "name": "target_type",
    "type": "string",
    "description": "Specify a target type to define the kinds of resources the document can run on."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "requires",
    "type": "array",
    "description": "A list of SSM documents required by a document. For example, an ApplicationConfiguration document requires an ApplicationConfigurationSchema document.",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": "The name of the required SSM document. The name can be an Amazon Resource Name (ARN)."
      },
      {
        "name": "version",
        "type": "string",
        "description": "The document version required by the current document."
      }
    ]
  },
  {
    "name": "update_method",
    "type": "string",
    "description": "Update method - when set to 'Replace', the update will replace the existing document; when set to 'NewVersion', the update will create a new version."
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
    "name": "name",
    "type": "string",
    "description": "A name for the Systems Manager document."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html"><code>AWS::SSM::Document</code></a>.

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
    <td><code>documents</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Content, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>documents</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>documents</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>documents_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>documents</code></td>
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

Gets all properties from an individual <code>document</code>.
```sql
SELECT
region,
content,
attachments,
name,
version_name,
document_type,
document_format,
target_type,
tags,
requires,
update_method
FROM awscc.ssm.documents
WHERE region = 'us-east-1' AND Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>documents</code> in a region.
```sql
SELECT
region,
name
FROM awscc.ssm.documents_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>document</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ssm.documents (
 Content,
 region
)
SELECT 
'{{ Content }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ssm.documents (
 Content,
 Attachments,
 Name,
 VersionName,
 DocumentType,
 DocumentFormat,
 TargetType,
 Tags,
 Requires,
 UpdateMethod,
 region
)
SELECT 
 '{{ Content }}',
 '{{ Attachments }}',
 '{{ Name }}',
 '{{ VersionName }}',
 '{{ DocumentType }}',
 '{{ DocumentFormat }}',
 '{{ TargetType }}',
 '{{ Tags }}',
 '{{ Requires }}',
 '{{ UpdateMethod }}',
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
  - name: document
    props:
      - name: Content
        value: {}
      - name: Attachments
        value:
          - Key: '{{ Key }}'
            Values:
              - '{{ Values[0] }}'
            Name: '{{ Name }}'
      - name: Name
        value: '{{ Name }}'
      - name: VersionName
        value: '{{ VersionName }}'
      - name: DocumentType
        value: '{{ DocumentType }}'
      - name: DocumentFormat
        value: '{{ DocumentFormat }}'
      - name: TargetType
        value: '{{ TargetType }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Requires
        value:
          - Name: '{{ Name }}'
            Version: '{{ Version }}'
      - name: UpdateMethod
        value: '{{ UpdateMethod }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>document</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ssm.documents
SET PatchDocument = string('{{ {
    "Content": content,
    "Attachments": attachments,
    "VersionName": version_name,
    "DocumentFormat": document_format,
    "TargetType": target_type,
    "Tags": tags,
    "Requires": requires,
    "UpdateMethod": update_method
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ssm.documents
WHERE Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>documents</code> resource, the following permissions are required:

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
ssm:CreateDocument,
ssm:GetDocument,
ssm:AddTagsToResource,
ssm:ListTagsForResource,
s3:GetObject,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
ssm:DescribeDocument,
ssm:GetDocument,
ssm:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
ssm:UpdateDocument,
s3:GetObject,
ssm:AddTagsToResource,
ssm:RemoveTagsFromResource,
ssm:ListTagsForResource,
iam:PassRole,
ssm:UpdateDocumentDefaultVersion,
ssm:DescribeDocument
```

</TabItem>
<TabItem value="delete">

```json
ssm:DeleteDocument,
ssm:GetDocument
```

</TabItem>
<TabItem value="list">

```json
ssm:ListDocuments
```

</TabItem>
</Tabs>