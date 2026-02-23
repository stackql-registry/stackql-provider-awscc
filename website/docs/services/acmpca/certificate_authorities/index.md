---
title: certificate_authorities
hide_title: false
hide_table_of_contents: false
keywords:
  - certificate_authorities
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

Creates, updates, deletes or gets a <code>certificate_authority</code> resource or lists <code>certificate_authorities</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>certificate_authorities</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Private certificate authority.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.acmpca.certificate_authorities" /></td></tr>
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
    "description": "The Amazon Resource Name (ARN) of the certificate authority."
  },
  {
    "name": "type",
    "type": "string",
    "description": "The type of the certificate authority."
  },
  {
    "name": "key_algorithm",
    "type": "string",
    "description": "Public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate."
  },
  {
    "name": "signing_algorithm",
    "type": "string",
    "description": "Algorithm your CA uses to sign certificate requests."
  },
  {
    "name": "subject",
    "type": "object",
    "description": "Structure that contains X.500 distinguished name information for your CA.",
    "children": [
      {
        "name": "country",
        "type": "string",
        "description": ""
      },
      {
        "name": "organization",
        "type": "string",
        "description": ""
      },
      {
        "name": "organizational_unit",
        "type": "string",
        "description": ""
      },
      {
        "name": "distinguished_name_qualifier",
        "type": "string",
        "description": ""
      },
      {
        "name": "state",
        "type": "string",
        "description": ""
      },
      {
        "name": "common_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "serial_number",
        "type": "string",
        "description": ""
      },
      {
        "name": "locality",
        "type": "string",
        "description": ""
      },
      {
        "name": "title",
        "type": "string",
        "description": ""
      },
      {
        "name": "surname",
        "type": "string",
        "description": ""
      },
      {
        "name": "given_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "initials",
        "type": "string",
        "description": ""
      },
      {
        "name": "pseudonym",
        "type": "string",
        "description": ""
      },
      {
        "name": "generation_qualifier",
        "type": "string",
        "description": ""
      },
      {
        "name": "custom_attributes",
        "type": "array",
        "description": "Array of X.500 attribute type and value. CustomAttributes cannot be used along with pre-defined attributes.",
        "children": [
          {
            "name": "object_identifier",
            "type": "string",
            "description": "String that contains X.509 ObjectIdentifier information."
          },
          {
            "name": "value",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "revocation_configuration",
    "type": "object",
    "description": "Certificate revocation information used by the CreateCertificateAuthority and UpdateCertificateAuthority actions.",
    "children": [
      {
        "name": "crl_configuration",
        "type": "object",
        "description": "Your certificate authority can create and maintain a certificate revocation list (CRL). A CRL contains information about certificates that have been revoked.",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "expiration_in_days",
            "type": "integer",
            "description": ""
          },
          {
            "name": "custom_cname",
            "type": "string",
            "description": ""
          },
          {
            "name": "s3_bucket_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "s3_object_acl",
            "type": "string",
            "description": ""
          },
          {
            "name": "crl_distribution_point_extension_configuration",
            "type": "object",
            "description": "Configures the default behavior of the CRL Distribution Point extension for certificates issued by your certificate authority",
            "children": [
              {
                "name": "omit_extension",
                "type": "boolean",
                "description": ""
              }
            ]
          },
          {
            "name": "crl_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "custom_path",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "ocsp_configuration",
        "type": "object",
        "description": "Helps to configure online certificate status protocol (OCSP) responder for your certificate authority",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "ocsp_custom_cname",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
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
    "name": "certificate_signing_request",
    "type": "string",
    "description": "The base64 PEM-encoded certificate signing request (CSR) for your certificate authority certificate."
  },
  {
    "name": "csr_extensions",
    "type": "object",
    "description": "Structure that contains CSR pass through extension information used by the CreateCertificateAuthority action.",
    "children": [
      {
        "name": "key_usage",
        "type": "object",
        "description": "Structure that contains X.509 KeyUsage information.",
        "children": [
          {
            "name": "digital_signature",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "non_repudiation",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "key_encipherment",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "data_encipherment",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "key_agreement",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "key_cert_sign",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "c_rl_sign",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "encipher_only",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "decipher_only",
            "type": "boolean",
            "description": ""
          }
        ]
      },
      {
        "name": "subject_information_access",
        "type": "array",
        "description": "Array of X.509 AccessDescription.",
        "children": [
          {
            "name": "access_method",
            "type": "object",
            "description": "Structure that contains X.509 AccessMethod information. Assign one and ONLY one field.",
            "children": [
              {
                "name": "custom_object_identifier",
                "type": "string",
                "description": "String that contains X.509 ObjectIdentifier information."
              },
              {
                "name": "access_method_type",
                "type": "string",
                "description": "Pre-defined enum string for X.509 AccessMethod ObjectIdentifiers."
              }
            ]
          },
          {
            "name": "access_location",
            "type": "object",
            "description": "Structure that contains X.509 GeneralName information. Assign one and ONLY one field.",
            "children": [
              {
                "name": "other_name",
                "type": "object",
                "description": "Structure that contains X.509 OtherName information."
              },
              {
                "name": "rfc822_name",
                "type": "string",
                "description": "String that contains X.509 Rfc822Name information."
              },
              {
                "name": "dns_name",
                "type": "string",
                "description": "String that contains X.509 DnsName information."
              },
              {
                "name": "edi_party_name",
                "type": "object",
                "description": "Structure that contains X.509 EdiPartyName information."
              },
              {
                "name": "uniform_resource_identifier",
                "type": "string",
                "description": "String that contains X.509 UniformResourceIdentifier information."
              },
              {
                "name": "ip_address",
                "type": "string",
                "description": "String that contains X.509 IpAddress information."
              },
              {
                "name": "registered_id",
                "type": "string",
                "description": "String that contains X.509 ObjectIdentifier information."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "key_storage_security_standard",
    "type": "string",
    "description": "KeyStorageSecurityStadard defines a cryptographic key management compliance standard used for handling CA keys."
  },
  {
    "name": "usage_mode",
    "type": "string",
    "description": "Usage mode of the ceritificate authority."
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
    "description": "The Amazon Resource Name (ARN) of the certificate authority."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html"><code>AWS::ACMPCA::CertificateAuthority</code></a>.

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
    <td><code>certificate_authorities</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Type, KeyAlgorithm, SigningAlgorithm, Subject, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>certificate_authorities</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>certificate_authorities</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>certificate_authorities_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>certificate_authorities</code></td>
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

Gets all properties from an individual <code>certificate_authority</code>.
```sql
SELECT
region,
arn,
type,
key_algorithm,
signing_algorithm,
subject,
revocation_configuration,
tags,
certificate_signing_request,
csr_extensions,
key_storage_security_standard,
usage_mode
FROM awscc.acmpca.certificate_authorities
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>certificate_authorities</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.acmpca.certificate_authorities_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>certificate_authority</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.acmpca.certificate_authorities (
 Type,
 KeyAlgorithm,
 SigningAlgorithm,
 Subject,
 region
)
SELECT
'{{ type }}',
 '{{ key_algorithm }}',
 '{{ signing_algorithm }}',
 '{{ subject }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.acmpca.certificate_authorities (
 Type,
 KeyAlgorithm,
 SigningAlgorithm,
 Subject,
 RevocationConfiguration,
 Tags,
 CsrExtensions,
 KeyStorageSecurityStandard,
 UsageMode,
 region
)
SELECT
 '{{ type }}',
 '{{ key_algorithm }}',
 '{{ signing_algorithm }}',
 '{{ subject }}',
 '{{ revocation_configuration }}',
 '{{ tags }}',
 '{{ csr_extensions }}',
 '{{ key_storage_security_standard }}',
 '{{ usage_mode }}',
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
  - name: certificate_authority
    props:
      - name: type
        value: '{{ type }}'
      - name: key_algorithm
        value: '{{ key_algorithm }}'
      - name: signing_algorithm
        value: '{{ signing_algorithm }}'
      - name: subject
        value:
          country: '{{ country }}'
          organization: '{{ organization }}'
          organizational_unit: '{{ organizational_unit }}'
          distinguished_name_qualifier: '{{ distinguished_name_qualifier }}'
          state: '{{ state }}'
          common_name: '{{ common_name }}'
          serial_number: '{{ serial_number }}'
          locality: '{{ locality }}'
          title: '{{ title }}'
          surname: '{{ surname }}'
          given_name: '{{ given_name }}'
          initials: '{{ initials }}'
          pseudonym: '{{ pseudonym }}'
          generation_qualifier: '{{ generation_qualifier }}'
          custom_attributes:
            - object_identifier: '{{ object_identifier }}'
              value: '{{ value }}'
      - name: revocation_configuration
        value:
          crl_configuration:
            enabled: '{{ enabled }}'
            expiration_in_days: '{{ expiration_in_days }}'
            custom_cname: '{{ custom_cname }}'
            s3_bucket_name: '{{ s3_bucket_name }}'
            s3_object_acl: '{{ s3_object_acl }}'
            crl_distribution_point_extension_configuration:
              omit_extension: '{{ omit_extension }}'
            crl_type: '{{ crl_type }}'
            custom_path: '{{ custom_path }}'
          ocsp_configuration:
            enabled: '{{ enabled }}'
            ocsp_custom_cname: '{{ ocsp_custom_cname }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: csr_extensions
        value:
          key_usage:
            digital_signature: '{{ digital_signature }}'
            non_repudiation: '{{ non_repudiation }}'
            key_encipherment: '{{ key_encipherment }}'
            data_encipherment: '{{ data_encipherment }}'
            key_agreement: '{{ key_agreement }}'
            key_cert_sign: '{{ key_cert_sign }}'
            c_rl_sign: '{{ c_rl_sign }}'
            encipher_only: '{{ encipher_only }}'
            decipher_only: '{{ decipher_only }}'
          subject_information_access:
            - access_method:
                custom_object_identifier: null
                access_method_type: '{{ access_method_type }}'
              access_location:
                other_name:
                  type_id: null
                  value: '{{ value }}'
                rfc822_name: '{{ rfc822_name }}'
                dns_name: '{{ dns_name }}'
                directory_name: null
                edi_party_name:
                  party_name: '{{ party_name }}'
                  name_assigner: '{{ name_assigner }}'
                uniform_resource_identifier: '{{ uniform_resource_identifier }}'
                ip_address: '{{ ip_address }}'
                registered_id: null
      - name: key_storage_security_standard
        value: '{{ key_storage_security_standard }}'
      - name: usage_mode
        value: '{{ usage_mode }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>certificate_authority</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.acmpca.certificate_authorities
SET PatchDocument = string('{{ {
    "RevocationConfiguration": revocation_configuration,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.acmpca.certificate_authorities
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>certificate_authorities</code> resource, the following permissions are required:

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
acm-pca:CreateCertificateAuthority,
acm-pca:DescribeCertificateAuthority,
acm-pca:GetCertificateAuthorityCsr,
acm-pca:TagCertificateAuthority
```

</TabItem>
<TabItem value="read">

```json
acm-pca:DescribeCertificateAuthority,
acm-pca:GetCertificateAuthorityCsr,
acm-pca:ListTags
```

</TabItem>
<TabItem value="update">

```json
acm-pca:TagCertificateAuthority,
acm-pca:UntagCertificateAuthority,
acm-pca:UpdateCertificateAuthority
```

</TabItem>
<TabItem value="delete">

```json
acm-pca:DeleteCertificateAuthority,
acm-pca:DescribeCertificateAuthority
```

</TabItem>
<TabItem value="list">

```json
acm-pca:DescribeCertificateAuthority,
acm-pca:GetCertificateAuthorityCsr,
acm-pca:ListCertificateAuthorities,
acm-pca:ListTags
```

</TabItem>
</Tabs>