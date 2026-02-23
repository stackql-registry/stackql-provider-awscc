---
title: certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - certificates
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

Creates, updates, deletes or gets a <code>certificate</code> resource or lists <code>certificates</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>certificates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ACMPCA::Certificate&#96;&#96; resource is used to issue a certificate using your private certificate authority. For more information, see the &#91;IssueCertificate&#93;(https://docs.aws.amazon.com/privateca/latest/APIReference/API&#95;IssueCertificate.html) action.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.acmpca.certificates" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "api_passthrough",
    "type": "object",
    "description": "Specifies X.509 certificate information to be included in the issued certificate. An &#96;&#96;APIPassthrough&#96;&#96; or &#96;&#96;APICSRPassthrough&#96;&#96; template variant must be selected, or else this parameter is ignored.",
    "children": [
      {
        "name": "extensions",
        "type": "object",
        "description": "Specifies X.509 extension information for a certificate.",
        "children": [
          {
            "name": "certificate_policies",
            "type": "array",
            "description": "Contains a sequence of one or more policy information terms, each of which consists of an object identifier (OID) and optional qualifiers. For more information, see NIST's definition of &#91;Object Identifier (OID)&#93;(https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object&#95;Identifier).<br />In an end-entity certificate, these terms indicate the policy under which the certificate was issued and the purposes for which it may be used. In a CA certificate, these terms limit the set of policies for certification paths that include this certificate.",
            "children": [
              {
                "name": "cert_policy_id",
                "type": "string",
                "description": "Specifies the object identifier (OID) of the certificate policy under which the certificate was issued. For more information, see NIST's definition of &#91;Object Identifier (OID)&#93;(https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object&#95;Identifier)."
              },
              {
                "name": "policy_qualifiers",
                "type": "array",
                "description": "Modifies the given &#96;&#96;CertPolicyId&#96;&#96; with a qualifier. AWS Private CA supports the certification practice statement (CPS) qualifier."
              }
            ]
          },
          {
            "name": "extended_key_usage",
            "type": "array",
            "description": "Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the &#96;&#96;KeyUsage&#96;&#96; extension.",
            "children": [
              {
                "name": "extended_key_usage_type",
                "type": "string",
                "description": "Specifies a standard &#96;&#96;ExtendedKeyUsage&#96;&#96; as defined as in &#91;RFC 5280&#93;(https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12)."
              },
              {
                "name": "extended_key_usage_object_identifier",
                "type": "string",
                "description": "Specifies a custom &#96;&#96;ExtendedKeyUsage&#96;&#96; with an object identifier (OID)."
              }
            ]
          },
          {
            "name": "key_usage",
            "type": "object",
            "description": "Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.",
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
            "name": "subject_alternative_names",
            "type": "array",
            "description": "The subject alternative name extension allows identities to be bound to the subject of the certificate. These identities may be included in addition to or in place of the identity in the subject field of the certificate.",
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
                "name": "directory_name",
                "type": "object",
                "description": "Structure that contains X.500 distinguished name information for your CA."
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
          },
          {
            "name": "custom_extensions",
            "type": "array",
            "description": "Contains a sequence of one or more X.509 extensions, each of which consists of an object identifier (OID), a base64-encoded value, and the critical flag. For more information, see the &#91;Global OID reference database.&#93;(https://docs.aws.amazon.com/https://oidref.com/2.5.29)",
            "children": [
              {
                "name": "critical",
                "type": "boolean",
                "description": "Specifies the critical flag of the X.509 extension."
              },
              {
                "name": "object_identifier",
                "type": "string",
                "description": "Specifies the object identifier (OID) of the X.509 extension. For more information, see the &#91;Global OID reference database.&#93;(https://docs.aws.amazon.com/https://oidref.com/2.5.29)"
              },
              {
                "name": "value",
                "type": "string",
                "description": "Specifies the base64-encoded value of the X.509 extension."
              }
            ]
          }
        ]
      },
      {
        "name": "subject",
        "type": "object",
        "description": "Contains information about the certificate subject. The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.",
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
      }
    ]
  },
  {
    "name": "certificate_authority_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the private CA issues the certificate."
  },
  {
    "name": "certificate_signing_request",
    "type": "string",
    "description": "The certificate signing request (CSR) for the certificate."
  },
  {
    "name": "signing_algorithm",
    "type": "string",
    "description": "The name of the algorithm that will be used to sign the certificate to be issued. <br />This parameter should not be confused with the &#96;&#96;SigningAlgorithm&#96;&#96; parameter used to sign a CSR in the &#96;&#96;CreateCertificateAuthority&#96;&#96; action.<br />The specified signing algorithm family (RSA or ECDSA) must match the algorithm family of the CA's secret key."
  },
  {
    "name": "validity",
    "type": "object",
    "description": "The period of time during which the certificate will be valid.",
    "children": [
      {
        "name": "value",
        "type": "number",
        "description": "A long integer interpreted according to the value of &#96;&#96;Type&#96;&#96;, below."
      },
      {
        "name": "type",
        "type": "string",
        "description": "Specifies whether the &#96;&#96;Value&#96;&#96; parameter represents days, months, or years."
      }
    ]
  },
  {
    "name": "certificate",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html"><code>AWS::ACMPCA::Certificate</code></a>.

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
    <td><CopyableCode code="CertificateAuthorityArn, CertificateSigningRequest, SigningAlgorithm, Validity, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>certificate</code>.
```sql
SELECT
region,
api_passthrough,
certificate_authority_arn,
certificate_signing_request,
signing_algorithm,
template_arn,
validity,
validity_not_before,
certificate,
arn
FROM awscc.acmpca.certificates
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}|{{ certificate_authority_arn }}';
```

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
INSERT INTO awscc.acmpca.certificates (
 CertificateAuthorityArn,
 CertificateSigningRequest,
 SigningAlgorithm,
 Validity,
 region
)
SELECT
'{{ certificate_authority_arn }}',
 '{{ certificate_signing_request }}',
 '{{ signing_algorithm }}',
 '{{ validity }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.acmpca.certificates (
 ApiPassthrough,
 CertificateAuthorityArn,
 CertificateSigningRequest,
 SigningAlgorithm,
 TemplateArn,
 Validity,
 ValidityNotBefore,
 region
)
SELECT
 '{{ api_passthrough }}',
 '{{ certificate_authority_arn }}',
 '{{ certificate_signing_request }}',
 '{{ signing_algorithm }}',
 '{{ template_arn }}',
 '{{ validity }}',
 '{{ validity_not_before }}',
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
      - name: api_passthrough
        value:
          extensions:
            certificate_policies:
              - cert_policy_id: '{{ cert_policy_id }}'
                policy_qualifiers:
                  - policy_qualifier_id: '{{ policy_qualifier_id }}'
                    qualifier:
                      cps_uri: '{{ cps_uri }}'
            extended_key_usage:
              - extended_key_usage_type: '{{ extended_key_usage_type }}'
                extended_key_usage_object_identifier: null
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
            subject_alternative_names:
              - other_name:
                  type_id: null
                  value: '{{ value }}'
                rfc822_name: '{{ rfc822_name }}'
                dns_name: '{{ dns_name }}'
                directory_name:
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
                    - object_identifier: null
                      value: '{{ value }}'
                edi_party_name:
                  party_name: '{{ party_name }}'
                  name_assigner: '{{ name_assigner }}'
                uniform_resource_identifier: '{{ uniform_resource_identifier }}'
                ip_address: '{{ ip_address }}'
                registered_id: null
            custom_extensions:
              - critical: '{{ critical }}'
                object_identifier: null
                value: '{{ value }}'
          subject: null
      - name: certificate_authority_arn
        value: '{{ certificate_authority_arn }}'
      - name: certificate_signing_request
        value: '{{ certificate_signing_request }}'
      - name: signing_algorithm
        value: '{{ signing_algorithm }}'
      - name: template_arn
        value: null
      - name: validity
        value:
          value: null
          type: '{{ type }}'
      - name: validity_not_before
        value: null
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.acmpca.certificates
WHERE Identifier = '{{ arn }}|{{ certificate_authority_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>certificates</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="create">

```json
acm-pca:IssueCertificate,
acm-pca:GetCertificate
```

</TabItem>
<TabItem value="read">

```json
acm-pca:GetCertificate
```

</TabItem>
<TabItem value="delete">

```json
acm-pca:GetCertificate
```

</TabItem>
</Tabs>