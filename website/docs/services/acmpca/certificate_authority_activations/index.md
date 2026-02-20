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
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<CertificateAuthorityArn>';
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
'{{ CertificateAuthorityArn }}',
 '{{ Certificate }}',
'{{ region }}';
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
 '{{ CertificateAuthorityArn }}',
 '{{ Certificate }}',
 '{{ CertificateChain }}',
 '{{ Status }}',
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
  - name: certificate_authority_activation
    props:
      - name: CertificateAuthorityArn
        value: '{{ CertificateAuthorityArn }}'
      - name: Certificate
        value: '{{ Certificate }}'
      - name: CertificateChain
        value: '{{ CertificateChain }}'
      - name: Status
        value: '{{ Status }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.acmpca.certificate_authority_activations
SET data__PatchDocument = string('{{ {
    "Certificate": certificate,
    "CertificateChain": certificate_chain,
    "Status": status
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<CertificateAuthorityArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.acmpca.certificate_authority_activations
WHERE data__Identifier = '<CertificateAuthorityArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>certificate_authority_activations</code> resource, the following permissions are required:

### Create
```json
acm-pca:ImportCertificateAuthorityCertificate,
acm-pca:UpdateCertificateAuthority
```

### Read
```json
acm-pca:GetCertificateAuthorityCertificate,
acm-pca:DescribeCertificateAuthority
```

### Delete
```json
acm-pca:UpdateCertificateAuthority
```

### Update
```json
acm-pca:ImportCertificateAuthorityCertificate,
acm-pca:UpdateCertificateAuthority
```
