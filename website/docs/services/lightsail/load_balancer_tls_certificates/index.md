---
title: load_balancer_tls_certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - load_balancer_tls_certificates
  - lightsail
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

Creates, updates, deletes or gets a <code>load_balancer_tls_certificate</code> resource or lists <code>load_balancer_tls_certificates</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>load_balancer_tls_certificates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Lightsail::LoadBalancerTlsCertificate</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lightsail.load_balancer_tls_certificates" /></td></tr>
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
    "name": "load_balancer_name",
    "type": "string",
    "description": "The name of your load balancer."
  },
  {
    "name": "certificate_name",
    "type": "string",
    "description": "The SSL/TLS certificate name."
  },
  {
    "name": "certificate_domain_name",
    "type": "string",
    "description": "The domain name (e.g., example.com ) for your SSL/TLS certificate."
  },
  {
    "name": "certificate_alternative_names",
    "type": "array",
    "description": "An array of strings listing alternative domains and subdomains for your SSL/TLS certificate."
  },
  {
    "name": "load_balancer_tls_certificate_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "is_attached",
    "type": "boolean",
    "description": "When true, the SSL/TLS certificate is attached to the Lightsail load balancer."
  },
  {
    "name": "https_redirection_enabled",
    "type": "boolean",
    "description": "A Boolean value that indicates whether HTTPS redirection is enabled for the load balancer."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The validation status of the SSL/TLS certificate."
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
    "name": "load_balancer_name",
    "type": "string",
    "description": "The name of your load balancer."
  },
  {
    "name": "certificate_name",
    "type": "string",
    "description": "The SSL/TLS certificate name."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancertlscertificate.html"><code>AWS::Lightsail::LoadBalancerTlsCertificate</code></a>.

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
    <td><code>load_balancer_tls_certificates</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="LoadBalancerName, CertificateName, CertificateDomainName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>load_balancer_tls_certificates</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>load_balancer_tls_certificates</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>load_balancer_tls_certificates_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>load_balancer_tls_certificates</code></td>
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

Gets all properties from an individual <code>load_balancer_tls_certificate</code>.
```sql
SELECT
region,
load_balancer_name,
certificate_name,
certificate_domain_name,
certificate_alternative_names,
load_balancer_tls_certificate_arn,
is_attached,
https_redirection_enabled,
status
FROM awscc.lightsail.load_balancer_tls_certificates
WHERE region = 'us-east-1' AND Identifier = '{{ certificate_name }}|{{ load_balancer_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>load_balancer_tls_certificates</code> in a region.
```sql
SELECT
region,
certificate_name,
load_balancer_name
FROM awscc.lightsail.load_balancer_tls_certificates_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>load_balancer_tls_certificate</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.lightsail.load_balancer_tls_certificates (
 LoadBalancerName,
 CertificateName,
 CertificateDomainName,
 region
)
SELECT
'{{ load_balancer_name }}',
 '{{ certificate_name }}',
 '{{ certificate_domain_name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.lightsail.load_balancer_tls_certificates (
 LoadBalancerName,
 CertificateName,
 CertificateDomainName,
 CertificateAlternativeNames,
 IsAttached,
 HttpsRedirectionEnabled,
 region
)
SELECT
 '{{ load_balancer_name }}',
 '{{ certificate_name }}',
 '{{ certificate_domain_name }}',
 '{{ certificate_alternative_names }}',
 '{{ is_attached }}',
 '{{ https_redirection_enabled }}',
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
  - name: load_balancer_tls_certificate
    props:
      - name: load_balancer_name
        value: '{{ load_balancer_name }}'
      - name: certificate_name
        value: '{{ certificate_name }}'
      - name: certificate_domain_name
        value: '{{ certificate_domain_name }}'
      - name: certificate_alternative_names
        value:
          - '{{ certificate_alternative_names[0] }}'
      - name: is_attached
        value: '{{ is_attached }}'
      - name: https_redirection_enabled
        value: '{{ https_redirection_enabled }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>load_balancer_tls_certificate</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.lightsail.load_balancer_tls_certificates
SET PatchDocument = string('{{ {
    "IsAttached": is_attached,
    "HttpsRedirectionEnabled": https_redirection_enabled
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ certificate_name }}|{{ load_balancer_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lightsail.load_balancer_tls_certificates
WHERE Identifier = '{{ certificate_name }}|{{ load_balancer_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>load_balancer_tls_certificates</code> resource, the following permissions are required:

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
lightsail:CreateLoadBalancerTlsCertificate,
lightsail:GetLoadBalancerTlsCertificates,
lightsail:GetLoadBalancer,
lightsail:AttachLoadBalancerTlsCertificate,
lightsail:UpdateLoadBalancerAttribute
```

</TabItem>
<TabItem value="read">

```json
lightsail:GetLoadBalancerTlsCertificates,
lightsail:GetLoadBalancer
```

</TabItem>
<TabItem value="update">

```json
lightsail:AttachLoadBalancerTlsCertificate,
lightsail:GetLoadBalancerTlsCertificates,
lightsail:GetLoadBalancer,
lightsail:UpdateLoadBalancerAttribute
```

</TabItem>
<TabItem value="delete">

```json
lightsail:DeleteLoadBalancerTlsCertificate,
lightsail:GetLoadBalancerTlsCertificates,
lightsail:GetLoadBalancer
```

</TabItem>
<TabItem value="list">

```json
lightsail:GetLoadBalancerTlsCertificates,
lightsail:GetLoadBalancer
```

</TabItem>
</Tabs>