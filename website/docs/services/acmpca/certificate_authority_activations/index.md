---
title: certificate_authority_activations
hide_title: false
hide_table_of_contents: false
keywords:
  - certificate_authority_activations
  - acmpca
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>certificate_authority_activation</code> resource or lists <code>certificate_authority_activations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>certificate_authority_activations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Used to install the certificate authority certificate and update the certificate authority status.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.acmpca.certificate_authority_activations" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "certificate_authority_arn",
    "type": "string",
    "description": "Arn of the Certificate Authority."
  },
  {
    "name": "certificate",
    "type": "string",
    "description": "Certificate Authority certificate that will be installed in the Certificate Authority."
  },
  {
    "name": "certificate_chain",
    "type": "string",
    "description": "Certificate chain for the Certificate Authority certificate."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the Certificate Authority."
  },
  {
    "name": "complete_certificate_chain",
    "type": "string",
    "description": "The complete certificate chain, including the Certificate Authority certificate."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthorityactivation.html"><code>AWS::ACMPCA::CertificateAuthorityActivation</code></a>.

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
    <td><CopyableCode code="CertificateAuthorityArn, Certificate, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>certificate_authority_activation</code>.
```sql
SELECT
  region,
  certificate_authority_arn,
  certificate,
  certificate_chain,
  status,
  complete_certificate_chain
FROM awscc.acmpca.certificate_authority_activations
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ certificate_authority_arn }}';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>certificate_authority_activation</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.acmpca.certificate_authority_activations (
  CertificateAuthorityArn,
  Certificate,
  region
)
SELECT
  '{{ certificate_authority_arn }}',
  '{{ certificate }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.acmpca.certificate_authority_activations (
  CertificateAuthorityArn,
  Certificate,
  CertificateChain,
  Status,
  region
)
SELECT
  '{{ certificate_authority_arn }}',
  '{{ certificate }}',
  '{{ certificate_chain }}',
  '{{ status }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: certificate_authority_activation
    props:
      - name: certificate_authority_arn
        value: '{{ certificate_authority_arn }}'
      - name: certificate
        value: '{{ certificate }}'
      - name: certificate_chain
        value: '{{ certificate_chain }}'
      - name: status
        value: '{{ status }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>certificate_authority_activation</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.acmpca.certificate_authority_activations
SET PatchDocument = string('{{ {
    "Certificate": certificate,
    "CertificateChain": certificate_chain,
    "Status": status
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ certificate_authority_arn }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.acmpca.certificate_authority_activations
WHERE
  Identifier = '{{ certificate_authority_arn }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>certificate_authority_activations</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
acm-pca:ImportCertificateAuthorityCertificate,
acm-pca:UpdateCertificateAuthority
```

</TabItem>
<TabItem value="read">

```json
acm-pca:GetCertificateAuthorityCertificate,
acm-pca:DescribeCertificateAuthority
```

</TabItem>
<TabItem value="delete">

```json
acm-pca:UpdateCertificateAuthority
```

</TabItem>
<TabItem value="update">

```json
acm-pca:ImportCertificateAuthorityCertificate,
acm-pca:UpdateCertificateAuthority
```

</TabItem>
</Tabs>