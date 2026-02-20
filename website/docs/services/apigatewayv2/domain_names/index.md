---
title: domain_names
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_names
  - apigatewayv2
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

Creates, updates, deletes or gets a <code>domain_name</code> resource or lists <code>domain_names</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>domain_names</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGatewayV2::DomainName&#96;&#96; resource specifies a custom domain name for your API in Amazon API Gateway (API Gateway). <br />You can use a custom domain name to provide a URL that's more intuitive and easier to recall. For more information about using custom domain names, see &#91;Set up Custom Domain Name for an API in API Gateway&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html) in the &#42;API Gateway Developer Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigatewayv2.domain_names" /></td></tr>
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
    "name": "mutual_tls_authentication",
    "type": "object",
    "description": "The mutual TLS authentication configuration for a custom domain name.",
    "children": [
      {
        "name": "truststore_version",
        "type": "string",
        "description": "The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket."
      },
      {
        "name": "truststore_uri",
        "type": "string",
        "description": "An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, &#96;&#96;s3://bucket-name/key-name&#96;&#96;. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object."
      }
    ]
  },
  {
    "name": "regional_hosted_zone_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "regional_domain_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "domain_name_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "domain_name",
    "type": "string",
    "description": "The custom domain name for your API in Amazon API Gateway. Uppercase letters and the underscore (&#96;&#96;&#95;&#96;&#96;) character are not supported."
  },
  {
    "name": "domain_name_configurations",
    "type": "array",
    "description": "The domain name configurations.",
    "children": [
      {
        "name": "ownership_verification_certificate_arn",
        "type": "string",
        "description": "The Amazon resource name (ARN) for the public certificate issued by ACMlong. This ARN is used to validate custom domain ownership. It's required only if you configure mutual TLS and use either an ACM-imported or a private CA certificate ARN as the regionalCertificateArn."
      },
      {
        "name": "endpoint_type",
        "type": "string",
        "description": "The endpoint type."
      },
      {
        "name": "certificate_name",
        "type": "string",
        "description": "The user-friendly name of the certificate that will be used by the edge-optimized endpoint for this domain name."
      },
      {
        "name": "security_policy",
        "type": "string",
        "description": "The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are &#96;&#96;TLS&#95;1&#95;0&#96;&#96; and &#96;&#96;TLS&#95;1&#95;2&#96;&#96;."
      },
      {
        "name": "certificate_arn",
        "type": "string",
        "description": "An AWS-managed certificate that will be used by the edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source."
      },
      {
        "name": "ip_address_type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "routing_mode",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "object",
    "description": "The collection of tags associated with a domain name."
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
    "name": "domain_name",
    "type": "string",
    "description": "The custom domain name for your API in Amazon API Gateway. Uppercase letters and the underscore (&#96;&#96;&#95;&#96;&#96;) character are not supported."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html"><code>AWS::ApiGatewayV2::DomainName</code></a>.

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
    <td><code>domain_names</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DomainName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>domain_names</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>domain_names</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>domain_names_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>domain_names</code></td>
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

Gets all properties from an individual <code>domain_name</code>.
```sql
SELECT
region,
mutual_tls_authentication,
regional_hosted_zone_id,
regional_domain_name,
domain_name_arn,
domain_name,
domain_name_configurations,
routing_mode,
tags
FROM awscc.apigatewayv2.domain_names
WHERE region = 'us-east-1' AND Identifier = '<DomainName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>domain_names</code> in a region.
```sql
SELECT
region,
domain_name
FROM awscc.apigatewayv2.domain_names_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>domain_name</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.apigatewayv2.domain_names (
 DomainName,
 region
)
SELECT 
'{{ DomainName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.apigatewayv2.domain_names (
 MutualTlsAuthentication,
 DomainName,
 DomainNameConfigurations,
 RoutingMode,
 Tags,
 region
)
SELECT 
 '{{ MutualTlsAuthentication }}',
 '{{ DomainName }}',
 '{{ DomainNameConfigurations }}',
 '{{ RoutingMode }}',
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
  - name: domain_name
    props:
      - name: MutualTlsAuthentication
        value:
          TruststoreVersion: '{{ TruststoreVersion }}'
          TruststoreUri: '{{ TruststoreUri }}'
      - name: DomainName
        value: '{{ DomainName }}'
      - name: DomainNameConfigurations
        value:
          - OwnershipVerificationCertificateArn: '{{ OwnershipVerificationCertificateArn }}'
            EndpointType: '{{ EndpointType }}'
            CertificateName: '{{ CertificateName }}'
            SecurityPolicy: '{{ SecurityPolicy }}'
            CertificateArn: '{{ CertificateArn }}'
            IpAddressType: '{{ IpAddressType }}'
      - name: RoutingMode
        value: '{{ RoutingMode }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.apigatewayv2.domain_names
SET PatchDocument = string('{{ {
    "MutualTlsAuthentication": mutual_tls_authentication,
    "DomainNameConfigurations": domain_name_configurations,
    "RoutingMode": routing_mode,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<DomainName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigatewayv2.domain_names
WHERE Identifier = '<DomainName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>domain_names</code> resource, the following permissions are required:

### Create
```json
apigateway:POST,
apigateway:GET,
apigateway:PUT
```

### Update
```json
apigateway:PATCH,
apigateway:GET,
apigateway:PUT
```

### Read
```json
apigateway:GET
```

### Delete
```json
apigateway:GET,
apigateway:DELETE
```

### List
```json
apigateway:GET
```
