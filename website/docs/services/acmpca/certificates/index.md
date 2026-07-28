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

import CodeBlock from '@theme/CodeBlock';
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
<tr><td><b>Description</b></td><td>The <code>AWS::ACMPCA::Certificate</code> resource is used to issue a certificate using your private certificate authority. For more information, see the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> action.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.acmpca.certificates" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "api_passthrough",
    "type": "object",
    "description": "Specifies X.509 certificate information to be included in the issued certificate. An <code>APIPassthrough</code> or <code>APICSRPassthrough</code> template variant must be selected, or else this parameter is ignored.",
    "children": [
      {
        "name": "extensions",
        "type": "object",
        "description": "Specifies X.509 extension information for a certificate.",
        "children": [
          {
            "name": "certificate_policies",
            "type": "array",
            "description": "<details><summary>Contains a sequence of one or more policy information terms, each of which consists of an object identifier (OID) and optional qualifiers. For more information, see NIST's definition of <a href=\"https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier\">Object Identifier (OID)</a>.</summary>In an end-entity certificate, these terms indicate the policy under which the certificate was issued and the purposes for which it may be used. In a CA certificate, these terms limit the set of policies for certification paths that include this certificate.</details>",
            "children": [
              {
                "name": "cert_policy_id",
                "type": "string",
                "description": "Specifies the object identifier (OID) of the certificate policy under which the certificate was issued. For more information, see NIST's definition of <a href=\"https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier\">Object Identifier (OID)</a>."
              },
              {
                "name": "policy_qualifiers",
                "type": "array",
                "description": "Modifies the given <code>CertPolicyId</code> with a qualifier. AWS Private CA supports the certification practice statement (CPS) qualifier."
              }
            ]
          },
          {
            "name": "extended_key_usage",
            "type": "array",
            "description": "Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the <code>KeyUsage</code> extension.",
            "children": [
              {
                "name": "extended_key_usage_type",
                "type": "string",
                "description": "Specifies a standard <code>ExtendedKeyUsage</code> as defined as in <a href=\"https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12\">RFC 5280</a>."
              },
              {
                "name": "extended_key_usage_object_identifier",
                "type": "string",
                "description": "Specifies a custom <code>ExtendedKeyUsage</code> with an object identifier (OID)."
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
                "description": "Key can be used for digital signing."
              },
              {
                "name": "non_repudiation",
                "type": "boolean",
                "description": "Key can be used for non-repudiation."
              },
              {
                "name": "key_encipherment",
                "type": "boolean",
                "description": "Key can be used to encipher data."
              },
              {
                "name": "data_encipherment",
                "type": "boolean",
                "description": "Key can be used to decipher data."
              },
              {
                "name": "key_agreement",
                "type": "boolean",
                "description": "Key can be used in a key-agreement protocol."
              },
              {
                "name": "key_cert_sign",
                "type": "boolean",
                "description": "Key can be used to sign certificates."
              },
              {
                "name": "c_rl_sign",
                "type": "boolean",
                "description": "Key can be used to sign CRLs."
              },
              {
                "name": "encipher_only",
                "type": "boolean",
                "description": "Key can be used only to encipher data."
              },
              {
                "name": "decipher_only",
                "type": "boolean",
                "description": "Key can be used only to decipher data."
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
                "description": "Represents <code>GeneralName</code> using an <code>OtherName</code> object."
              },
              {
                "name": "rfc822_name",
                "type": "string",
                "description": "Represents <code>GeneralName</code> as an <a href=\"https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc822\">RFC 822</a> email address."
              },
              {
                "name": "dns_name",
                "type": "string",
                "description": "Represents <code>GeneralName</code> as a DNS name."
              },
              {
                "name": "directory_name",
                "type": "object",
                "description": "Contains information about the certificate subject. The certificate can be one issued by your private certificate authority (CA) or it can be your private CA certificate. The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate. The DN must be unique for each entity, but your private CA can issue more than one certificate with the same DN to the same entity."
              },
              {
                "name": "edi_party_name",
                "type": "object",
                "description": "Represents <code>GeneralName</code> as an <code>EdiPartyName</code> object."
              },
              {
                "name": "uniform_resource_identifier",
                "type": "string",
                "description": "Represents <code>GeneralName</code> as a URI."
              },
              {
                "name": "ip_address",
                "type": "string",
                "description": "Represents <code>GeneralName</code> as an IPv4 or IPv6 address."
              },
              {
                "name": "registered_id",
                "type": "string",
                "description": "Represents <code>GeneralName</code> as an object identifier (OID)."
              }
            ]
          },
          {
            "name": "custom_extensions",
            "type": "array",
            "description": "Contains a sequence of one or more X.509 extensions, each of which consists of an object identifier (OID), a base64-encoded value, and the critical flag. For more information, see the <a href=\"https://docs.aws.amazon.com/https://oidref.com/2.5.29\">Global OID reference database.</a>",
            "children": [
              {
                "name": "critical",
                "type": "boolean",
                "description": "Specifies the critical flag of the X.509 extension."
              },
              {
                "name": "object_identifier",
                "type": "string",
                "description": "Specifies the object identifier (OID) of the X.509 extension. For more information, see the <a href=\"https://docs.aws.amazon.com/https://oidref.com/2.5.29\">Global OID reference database.</a>"
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
            "description": "Two-digit code that specifies the country in which the certificate subject located."
          },
          {
            "name": "organization",
            "type": "string",
            "description": "Legal name of the organization with which the certificate subject is affiliated."
          },
          {
            "name": "organizational_unit",
            "type": "string",
            "description": "A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated."
          },
          {
            "name": "distinguished_name_qualifier",
            "type": "string",
            "description": "Disambiguating information for the certificate subject."
          },
          {
            "name": "state",
            "type": "string",
            "description": "State in which the subject of the certificate is located."
          },
          {
            "name": "common_name",
            "type": "string",
            "description": "<details><summary>For CA and end-entity certificates in a private PKI, the common name (CN) can be any string within the length limit.</summary>Note: In publicly trusted certificates, the common name must be a fully qualified domain name (FQDN) associated with the certificate subject.</details>"
          },
          {
            "name": "serial_number",
            "type": "string",
            "description": "The certificate serial number."
          },
          {
            "name": "locality",
            "type": "string",
            "description": "The locality (such as a city or town) in which the certificate subject is located."
          },
          {
            "name": "title",
            "type": "string",
            "description": "A title such as Mr. or Ms., which is pre-pended to the name to refer formally to the certificate subject."
          },
          {
            "name": "surname",
            "type": "string",
            "description": "Family name. In the US and the UK, for example, the surname of an individual is ordered last. In Asian cultures the surname is typically ordered first."
          },
          {
            "name": "given_name",
            "type": "string",
            "description": "First name."
          },
          {
            "name": "initials",
            "type": "string",
            "description": "Concatenation that typically contains the first letter of the <i>GivenName</i>, the first letter of the middle name if one exists, and the first letter of the <i>Surname</i>."
          },
          {
            "name": "pseudonym",
            "type": "string",
            "description": "Typically a shortened version of a longer <i>GivenName</i>. For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza."
          },
          {
            "name": "generation_qualifier",
            "type": "string",
            "description": "Typically a qualifier appended to the name of an individual. Examples include Jr. for junior, Sr. for senior, and III for third."
          },
          {
            "name": "custom_attributes",
            "type": "array",
            "description": "<details><summary>Contains a sequence of one or more X.500 relative distinguished names (RDNs), each of which consists of an object identifier (OID) and a value. For more information, see NIST’s definition of <a href=\"https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier\">Object Identifier (OID)</a>.</summary>Custom attributes cannot be used in combination with standard attributes.</details>",
            "children": [
              {
                "name": "object_identifier",
                "type": "string",
                "description": "Specifies the object identifier (OID) of the attribute type of the relative distinguished name (RDN)."
              },
              {
                "name": "value",
                "type": "string",
                "description": "Specifies the attribute value of relative distinguished name (RDN)."
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
    "description": "<details><summary>The name of the algorithm that will be used to sign the certificate to be issued.</summary>This parameter should not be confused with the <code>SigningAlgorithm</code> parameter used to sign a CSR in the <code>CreateCertificateAuthority</code> action.<br />The specified signing algorithm family (RSA or ECDSA) must match the algorithm family of the CA's secret key.</details>"
  },
  {
    "name": "validity",
    "type": "object",
    "description": "The period of time during which the certificate will be valid.",
    "children": [
      {
        "name": "value",
        "type": "number",
        "description": "A long integer interpreted according to the value of <code>Type</code>, below."
      },
      {
        "name": "type",
        "type": "string",
        "description": "Specifies whether the <code>Value</code> parameter represents days, months, or years."
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ arn }}|{{ certificate_authority_arn }}';
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
        value: null`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.acmpca.certificates
WHERE
  Identifier = '{{ arn }}|{{ certificate_authority_arn }}' AND
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