---
title: certificate_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - certificate_providers
  - iot
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

Creates, updates, deletes or gets a <code>certificate_provider</code> resource or lists <code>certificate_providers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>certificate_providers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Use the AWS::IoT::CertificateProvider resource to declare an AWS IoT Certificate Provider.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iot.certificate_providers" /></td></tr>
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
    "name": "certificate_provider_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "lambda_function_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "account_default_for_operations",
    "type": "array",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
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
    "name": "certificate_provider_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificateprovider.html"><code>AWS::IoT::CertificateProvider</code></a>.

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
    <td><code>certificate_providers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="LambdaFunctionArn, AccountDefaultForOperations, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>certificate_providers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>certificate_providers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>certificate_providers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>certificate_providers</code></td>
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

Gets all properties from an individual <code>certificate_provider</code>.
```sql
SELECT
region,
certificate_provider_name,
lambda_function_arn,
account_default_for_operations,
tags,
arn
FROM awscc.iot.certificate_providers
WHERE region = 'us-east-1' AND data__Identifier = '<CertificateProviderName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>certificate_providers</code> in a region.
```sql
SELECT
region,
certificate_provider_name
FROM awscc.iot.certificate_providers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>certificate_provider</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iot.certificate_providers (
 LambdaFunctionArn,
 AccountDefaultForOperations,
 region
)
SELECT 
'{{ LambdaFunctionArn }}',
 '{{ AccountDefaultForOperations }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iot.certificate_providers (
 CertificateProviderName,
 LambdaFunctionArn,
 AccountDefaultForOperations,
 Tags,
 region
)
SELECT 
 '{{ CertificateProviderName }}',
 '{{ LambdaFunctionArn }}',
 '{{ AccountDefaultForOperations }}',
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
  - name: certificate_provider
    props:
      - name: CertificateProviderName
        value: '{{ CertificateProviderName }}'
      - name: LambdaFunctionArn
        value: '{{ LambdaFunctionArn }}'
      - name: AccountDefaultForOperations
        value:
          - '{{ AccountDefaultForOperations[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.iot.certificate_providers
SET data__PatchDocument = string('{{ {
    "LambdaFunctionArn": lambda_function_arn,
    "AccountDefaultForOperations": account_default_for_operations,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<CertificateProviderName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.certificate_providers
WHERE data__Identifier = '<CertificateProviderName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>certificate_providers</code> resource, the following permissions are required:

### Create
```json
iot:CreateCertificateProvider,
iot:DescribeCertificateProvider,
iot:TagResource,
iot:ListTagsForResource,
kms:Decrypt
```

### Read
```json
iot:DescribeCertificateProvider,
iot:ListTagsForResource,
kms:Decrypt
```

### Update
```json
iot:UpdateCertificateProvider,
iot:DescribeCertificateProvider,
iot:TagResource,
iot:UntagResource,
iot:ListTagsForResource,
kms:Decrypt
```

### Delete
```json
iot:DeleteCertificateProvider,
iot:DescribeCertificateProvider,
kms:Decrypt
```

### List
```json
iot:ListCertificateProviders
```
