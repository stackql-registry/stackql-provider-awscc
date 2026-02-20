---
title: conformance_packs
hide_title: false
hide_table_of_contents: false
keywords:
  - conformance_packs
  - config
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

Creates, updates, deletes or gets a <code>conformance_pack</code> resource or lists <code>conformance_packs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>conformance_packs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A conformance pack is a collection of AWS Config rules and remediation actions that can be easily deployed as a single entity in an account and a region or across an entire AWS Organization.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.config.conformance_packs" /></td></tr>
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
    "name": "conformance_pack_name",
    "type": "string",
    "description": "Name of the conformance pack which will be assigned as the unique identifier."
  },
  {
    "name": "delivery_s3_bucket",
    "type": "string",
    "description": "AWS Config stores intermediate files while processing conformance pack template."
  },
  {
    "name": "delivery_s3_key_prefix",
    "type": "string",
    "description": "The prefix for delivery S3 bucket."
  },
  {
    "name": "template_body",
    "type": "string",
    "description": "A string containing full conformance pack template body. You can only specify one of the template body or template S3Uri fields."
  },
  {
    "name": "template_s3_uri",
    "type": "string",
    "description": "Location of file containing the template body which points to the conformance pack template that is located in an Amazon S3 bucket. You can only specify one of the template body or template S3Uri fields."
  },
  {
    "name": "template_ssm_document_details",
    "type": "object",
    "description": "The TemplateSSMDocumentDetails object contains the name of the SSM document and the version of the SSM document.",
    "children": [
      {
        "name": "document_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "document_version",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "conformance_pack_input_parameters",
    "type": "array",
    "description": "A list of ConformancePackInputParameter objects.",
    "children": [
      {
        "name": "parameter_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "parameter_value",
        "type": "string",
        "description": ""
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
    "name": "conformance_pack_name",
    "type": "string",
    "description": "Name of the conformance pack which will be assigned as the unique identifier."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-conformancepack.html"><code>AWS::Config::ConformancePack</code></a>.

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
    <td><code>conformance_packs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ConformancePackName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>conformance_packs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>conformance_packs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>conformance_packs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>conformance_packs</code></td>
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

Gets all properties from an individual <code>conformance_pack</code>.
```sql
SELECT
region,
conformance_pack_name,
delivery_s3_bucket,
delivery_s3_key_prefix,
template_body,
template_s3_uri,
template_ssm_document_details,
conformance_pack_input_parameters
FROM awscc.config.conformance_packs
WHERE region = 'us-east-1' AND Identifier = '<ConformancePackName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>conformance_packs</code> in a region.
```sql
SELECT
region,
conformance_pack_name
FROM awscc.config.conformance_packs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>conformance_pack</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.config.conformance_packs (
 ConformancePackName,
 region
)
SELECT 
'{{ ConformancePackName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.config.conformance_packs (
 ConformancePackName,
 DeliveryS3Bucket,
 DeliveryS3KeyPrefix,
 TemplateBody,
 TemplateS3Uri,
 TemplateSSMDocumentDetails,
 ConformancePackInputParameters,
 region
)
SELECT 
 '{{ ConformancePackName }}',
 '{{ DeliveryS3Bucket }}',
 '{{ DeliveryS3KeyPrefix }}',
 '{{ TemplateBody }}',
 '{{ TemplateS3Uri }}',
 '{{ TemplateSSMDocumentDetails }}',
 '{{ ConformancePackInputParameters }}',
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
  - name: conformance_pack
    props:
      - name: ConformancePackName
        value: '{{ ConformancePackName }}'
      - name: DeliveryS3Bucket
        value: '{{ DeliveryS3Bucket }}'
      - name: DeliveryS3KeyPrefix
        value: '{{ DeliveryS3KeyPrefix }}'
      - name: TemplateBody
        value: '{{ TemplateBody }}'
      - name: TemplateS3Uri
        value: '{{ TemplateS3Uri }}'
      - name: TemplateSSMDocumentDetails
        value:
          DocumentName: '{{ DocumentName }}'
          DocumentVersion: '{{ DocumentVersion }}'
      - name: ConformancePackInputParameters
        value:
          - ParameterName: '{{ ParameterName }}'
            ParameterValue: '{{ ParameterValue }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>conformance_pack</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.config.conformance_packs
SET PatchDocument = string('{{ {
    "DeliveryS3Bucket": delivery_s3_bucket,
    "DeliveryS3KeyPrefix": delivery_s3_key_prefix,
    "TemplateBody": template_body,
    "TemplateS3Uri": template_s3_uri,
    "TemplateSSMDocumentDetails": template_ssm_document_details,
    "ConformancePackInputParameters": conformance_pack_input_parameters
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ConformancePackName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.config.conformance_packs
WHERE Identifier = '<ConformancePackName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>conformance_packs</code> resource, the following permissions are required:

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
config:PutConformancePack,
config:DescribeConformancePackStatus,
config:DescribeConformancePacks,
s3:GetObject,
s3:GetBucketAcl,
iam:CreateServiceLinkedRole,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
config:DescribeConformancePacks
```

</TabItem>
<TabItem value="update">

```json
config:PutConformancePack,
config:DescribeConformancePackStatus,
s3:GetObject,
s3:GetBucketAcl,
iam:CreateServiceLinkedRole,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
config:DeleteConformancePack,
config:DescribeConformancePackStatus
```

</TabItem>
<TabItem value="list">

```json
config:DescribeConformancePacks
```

</TabItem>
</Tabs>