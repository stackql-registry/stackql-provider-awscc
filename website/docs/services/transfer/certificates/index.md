---
title: certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - certificates
  - transfer
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

Creates, updates, deletes or gets a <code>certificate</code> resource or lists <code>certificates</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>certificates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Transfer::Certificate</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.transfer.certificates" /></td></tr>
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
    "name": "usage",
    "type": "string",
    "description": "Specifies the usage type for the certificate."
  },
  {
    "name": "certificate",
    "type": "string",
    "description": "Specifies the certificate body to be imported."
  },
  {
    "name": "certificate_chain",
    "type": "string",
    "description": "Specifies the certificate chain to be imported."
  },
  {
    "name": "private_key",
    "type": "string",
    "description": "Specifies the private key for the certificate."
  },
  {
    "name": "active_date",
    "type": "string",
    "description": "Specifies the active date for the certificate."
  },
  {
    "name": "inactive_date",
    "type": "string",
    "description": "Specifies the inactive date for the certificate."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A textual description for the certificate."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Key-value pairs that can be used to group and search for certificates. Tags are metadata attached to certificates for any purpose.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The name assigned to the tag that you create."
      },
      {
        "name": "value",
        "type": "string",
        "description": "Contains one or more values that you assigned to the key name you create."
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "Specifies the unique Amazon Resource Name (ARN) for the agreement."
  },
  {
    "name": "certificate_id",
    "type": "string",
    "description": "A unique identifier for the certificate."
  },
  {
    "name": "status",
    "type": "string",
    "description": "A status description for the certificate."
  },
  {
    "name": "type",
    "type": "string",
    "description": "Describing the type of certificate. With or without a private key."
  },
  {
    "name": "serial",
    "type": "string",
    "description": "Specifies Certificate's serial."
  },
  {
    "name": "not_before_date",
    "type": "string",
    "description": "Specifies the not before date for the certificate."
  },
  {
    "name": "not_after_date",
    "type": "string",
    "description": "Specifies the not after date for the certificate."
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
    "name": "certificate",
    "type": "string",
    "description": "Specifies the certificate body to be imported."
  },
  {
    "name": "certificate_id",
    "type": "string",
    "description": "A unique identifier for the certificate."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html"><code>AWS::Transfer::Certificate</code></a>.

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
    <td><code>certificates</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Certificate, Usage, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>certificates</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>certificates</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>certificates_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>certificates</code></td>
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

Gets all properties from an individual <code>certificate</code>.
```sql
SELECT
region,
usage,
certificate,
certificate_chain,
private_key,
active_date,
inactive_date,
description,
tags,
arn,
certificate_id,
status,
type,
serial,
not_before_date,
not_after_date
FROM awscc.transfer.certificates
WHERE region = 'us-east-1' AND Identifier = '<CertificateId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>certificates</code> in a region.
```sql
SELECT
region,
certificate_id
FROM awscc.transfer.certificates_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>certificate</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.transfer.certificates (
 Usage,
 Certificate,
 region
)
SELECT 
'{{ Usage }}',
 '{{ Certificate }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.transfer.certificates (
 Usage,
 Certificate,
 CertificateChain,
 PrivateKey,
 ActiveDate,
 InactiveDate,
 Description,
 Tags,
 region
)
SELECT 
 '{{ Usage }}',
 '{{ Certificate }}',
 '{{ CertificateChain }}',
 '{{ PrivateKey }}',
 '{{ ActiveDate }}',
 '{{ InactiveDate }}',
 '{{ Description }}',
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
  - name: certificate
    props:
      - name: Usage
        value: '{{ Usage }}'
      - name: Certificate
        value: '{{ Certificate }}'
      - name: CertificateChain
        value: '{{ CertificateChain }}'
      - name: PrivateKey
        value: '{{ PrivateKey }}'
      - name: ActiveDate
        value: '{{ ActiveDate }}'
      - name: InactiveDate
        value: '{{ InactiveDate }}'
      - name: Description
        value: '{{ Description }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>certificate</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.transfer.certificates
SET PatchDocument = string('{{ {
    "Usage": usage,
    "ActiveDate": active_date,
    "InactiveDate": inactive_date,
    "Description": description,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<CertificateId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.transfer.certificates
WHERE Identifier = '<CertificateId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>certificates</code> resource, the following permissions are required:

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
transfer:ImportCertificate,
transfer:TagResource
```

</TabItem>
<TabItem value="read">

```json
transfer:DescribeCertificate
```

</TabItem>
<TabItem value="update">

```json
transfer:UpdateCertificate,
transfer:UnTagResource,
transfer:TagResource
```

</TabItem>
<TabItem value="delete">

```json
transfer:DeleteCertificate
```

</TabItem>
<TabItem value="list">

```json
transfer:ListCertificates
```

</TabItem>
</Tabs>