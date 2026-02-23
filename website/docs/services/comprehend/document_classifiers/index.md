---
title: document_classifiers
hide_title: false
hide_table_of_contents: false
keywords:
  - document_classifiers
  - comprehend
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

Creates, updates, deletes or gets a <code>document_classifier</code> resource or lists <code>document_classifiers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>document_classifiers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Document Classifier enables training document classifier models.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.comprehend.document_classifiers" /></td></tr>
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
    "name": "data_access_role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "input_data_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "augmented_manifests",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "attribute_names",
            "type": "array",
            "description": ""
          },
          {
            "name": "s3_uri",
            "type": "string",
            "description": ""
          },
          {
            "name": "split",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "data_format",
        "type": "string",
        "description": ""
      },
      {
        "name": "label_delimiter",
        "type": "string",
        "description": ""
      },
      {
        "name": "document_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "documents",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "s3_uri",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "document_reader_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "document_read_action",
            "type": "string",
            "description": ""
          },
          {
            "name": "document_read_mode",
            "type": "string",
            "description": ""
          },
          {
            "name": "feature_types",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "s3_uri",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "output_data_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "kms_key_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "s3_uri",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "language_code",
    "type": "string",
    "description": ""
  },
  {
    "name": "model_kms_key_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "model_policy",
    "type": "string",
    "description": ""
  },
  {
    "name": "document_classifier_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "mode",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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
    "name": "version_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "vpc_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "security_group_ids",
        "type": "array",
        "description": ""
      },
      {
        "name": "subnets",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "arn",
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
    "name": "arn",
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
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html"><code>AWS::Comprehend::DocumentClassifier</code></a>.

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
    <td><code>document_classifiers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DocumentClassifierName, DataAccessRoleArn, InputDataConfig, LanguageCode, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>document_classifiers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>document_classifiers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>document_classifiers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>document_classifiers</code></td>
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

Gets all properties from an individual <code>document_classifier</code>.
```sql
SELECT
region,
data_access_role_arn,
input_data_config,
output_data_config,
language_code,
model_kms_key_id,
model_policy,
document_classifier_name,
mode,
tags,
version_name,
volume_kms_key_id,
vpc_config,
arn
FROM awscc.comprehend.document_classifiers
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>document_classifiers</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.comprehend.document_classifiers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>document_classifier</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.comprehend.document_classifiers (
 DataAccessRoleArn,
 InputDataConfig,
 LanguageCode,
 DocumentClassifierName,
 region
)
SELECT
'{{ data_access_role_arn }}',
 '{{ input_data_config }}',
 '{{ language_code }}',
 '{{ document_classifier_name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.comprehend.document_classifiers (
 DataAccessRoleArn,
 InputDataConfig,
 OutputDataConfig,
 LanguageCode,
 ModelKmsKeyId,
 ModelPolicy,
 DocumentClassifierName,
 Mode,
 Tags,
 VersionName,
 VolumeKmsKeyId,
 VpcConfig,
 region
)
SELECT
 '{{ data_access_role_arn }}',
 '{{ input_data_config }}',
 '{{ output_data_config }}',
 '{{ language_code }}',
 '{{ model_kms_key_id }}',
 '{{ model_policy }}',
 '{{ document_classifier_name }}',
 '{{ mode }}',
 '{{ tags }}',
 '{{ version_name }}',
 '{{ volume_kms_key_id }}',
 '{{ vpc_config }}',
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
  - name: document_classifier
    props:
      - name: data_access_role_arn
        value: '{{ data_access_role_arn }}'
      - name: input_data_config
        value:
          augmented_manifests:
            - attribute_names:
                - '{{ attribute_names[0] }}'
              s3_uri: '{{ s3_uri }}'
              split: '{{ split }}'
          data_format: '{{ data_format }}'
          label_delimiter: '{{ label_delimiter }}'
          document_type: '{{ document_type }}'
          documents:
            s3_uri: null
            test_s3_uri: null
          document_reader_config:
            document_read_action: '{{ document_read_action }}'
            document_read_mode: '{{ document_read_mode }}'
            feature_types:
              - '{{ feature_types[0] }}'
          s3_uri: null
          test_s3_uri: null
      - name: output_data_config
        value:
          kms_key_id: '{{ kms_key_id }}'
          s3_uri: null
      - name: language_code
        value: '{{ language_code }}'
      - name: model_kms_key_id
        value: null
      - name: model_policy
        value: '{{ model_policy }}'
      - name: document_classifier_name
        value: '{{ document_classifier_name }}'
      - name: mode
        value: '{{ mode }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: version_name
        value: '{{ version_name }}'
      - name: volume_kms_key_id
        value: null
      - name: vpc_config
        value:
          security_group_ids:
            - '{{ security_group_ids[0] }}'
          subnets:
            - '{{ subnets[0] }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>document_classifier</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.comprehend.document_classifiers
SET PatchDocument = string('{{ {
    "ModelPolicy": model_policy,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.comprehend.document_classifiers
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>document_classifiers</code> resource, the following permissions are required:

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
iam:PassRole,
comprehend:CreateDocumentClassifier,
comprehend:DescribeDocumentClassifier,
comprehend:DescribeResourcePolicy,
comprehend:ListTagsForResource,
textract:DetectDocumentText
```

</TabItem>
<TabItem value="read">

```json
comprehend:DescribeDocumentClassifier,
comprehend:DescribeResourcePolicy,
comprehend:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
iam:PassRole,
comprehend:PutResourcePolicy,
comprehend:DeleteResourcePolicy,
comprehend:DescribeResourcePolicy,
comprehend:DescribeDocumentClassifier,
comprehend:ListTagsForResource,
comprehend:TagResource,
comprehend:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
comprehend:DescribeDocumentClassifier,
comprehend:DeleteDocumentClassifier
```

</TabItem>
<TabItem value="list">

```json
comprehend:ListDocumentClassifiers
```

</TabItem>
</Tabs>