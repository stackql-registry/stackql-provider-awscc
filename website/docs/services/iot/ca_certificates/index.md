---
title: ca_certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - ca_certificates
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

Creates, updates, deletes or gets a <code>ca_certificate</code> resource or lists <code>ca_certificates</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>ca_certificates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Registers a CA Certificate in IoT.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iot.ca_certificates" /></td></tr>
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
    "name": "ca_certificate_pem",
    "type": "string",
    "description": ""
  },
  {
    "name": "verification_certificate_pem",
    "type": "string",
    "description": "The private key verification certificate."
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "certificate_mode",
    "type": "string",
    "description": ""
  },
  {
    "name": "auto_registration_status",
    "type": "string",
    "description": ""
  },
  {
    "name": "remove_auto_registration",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "registration_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "template_body",
        "type": "string",
        "description": ""
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "template_name",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html"><code>AWS::IoT::CACertificate</code></a>.

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
    <td><code>ca_certificates</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="CACertificatePem, Status, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>ca_certificates</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>ca_certificates</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>ca_certificates_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>ca_certificates</code></td>
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

Gets all properties from an individual <code>ca_certificate</code>.
```sql
SELECT
region,
ca_certificate_pem,
verification_certificate_pem,
status,
certificate_mode,
auto_registration_status,
remove_auto_registration,
registration_config,
id,
arn,
tags
FROM awscc.iot.ca_certificates
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>ca_certificates</code> in a region.
```sql
SELECT
region,
id
FROM awscc.iot.ca_certificates_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>ca_certificate</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iot.ca_certificates (
 CACertificatePem,
 Status,
 region
)
SELECT 
'{{ CACertificatePem }}',
 '{{ Status }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iot.ca_certificates (
 CACertificatePem,
 VerificationCertificatePem,
 Status,
 CertificateMode,
 AutoRegistrationStatus,
 RemoveAutoRegistration,
 RegistrationConfig,
 Tags,
 region
)
SELECT 
 '{{ CACertificatePem }}',
 '{{ VerificationCertificatePem }}',
 '{{ Status }}',
 '{{ CertificateMode }}',
 '{{ AutoRegistrationStatus }}',
 '{{ RemoveAutoRegistration }}',
 '{{ RegistrationConfig }}',
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
  - name: ca_certificate
    props:
      - name: CACertificatePem
        value: '{{ CACertificatePem }}'
      - name: VerificationCertificatePem
        value: '{{ VerificationCertificatePem }}'
      - name: Status
        value: '{{ Status }}'
      - name: CertificateMode
        value: '{{ CertificateMode }}'
      - name: AutoRegistrationStatus
        value: '{{ AutoRegistrationStatus }}'
      - name: RemoveAutoRegistration
        value: '{{ RemoveAutoRegistration }}'
      - name: RegistrationConfig
        value:
          TemplateBody: '{{ TemplateBody }}'
          RoleArn: '{{ RoleArn }}'
          TemplateName: '{{ TemplateName }}'
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
UPDATE awscc.iot.ca_certificates
SET data__PatchDocument = string('{{ {
    "Status": status,
    "AutoRegistrationStatus": auto_registration_status,
    "RemoveAutoRegistration": remove_auto_registration,
    "RegistrationConfig": registration_config,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.ca_certificates
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>ca_certificates</code> resource, the following permissions are required:

### Create
```json
iam:GetRole,
iam:PassRole,
iot:RegisterCACertificate,
iot:DescribeCACertificate,
iot:TagResource,
iot:ListTagsForResource,
kms:Decrypt
```

### Read
```json
iot:DescribeCACertificate,
iot:ListTagsForResource,
kms:Decrypt
```

### Update
```json
iam:GetRole,
iam:PassRole,
iot:UpdateCACertificate,
iot:DescribeCACertificate,
iot:TagResource,
iot:UntagResource,
iot:ListTagsForResource,
kms:Decrypt
```

### Delete
```json
iot:UpdateCACertificate,
iot:DeleteCACertificate,
iot:DescribeCACertificate,
kms:Decrypt
```

### List
```json
iot:ListCACertificates
```
