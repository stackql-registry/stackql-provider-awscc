---
title: domain_names
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_names
  - apigateway
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
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGateway::DomainName&#96;&#96; resource specifies a custom domain name for your API in API Gateway.<br />You can use a custom domain name to provide a URL that's more intuitive and easier to recall. For more information about using custom domain names, see &#91;Set up Custom Domain Name for an API in API Gateway&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html) in the &#42;API Gateway Developer Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigateway.domain_names" /></td></tr>
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
    "name": "domain_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "domain_name_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "distribution_domain_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "distribution_hosted_zone_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "endpoint_configuration",
    "type": "object",
    "description": "The &#96;&#96;EndpointConfiguration&#96;&#96; property type specifies the endpoint types of a REST API.<br />&#96;&#96;EndpointConfiguration&#96;&#96; is a property of the &#91;AWS::ApiGateway::RestApi&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html) resource.",
    "children": [
      {
        "name": "ip_address_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "types",
        "type": "array",
        "description": ""
      },
      {
        "name": "vpc_endpoint_ids",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "mutual_tls_authentication",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "truststore_uri",
        "type": "string",
        "description": ""
      },
      {
        "name": "truststore_version",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "regional_domain_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "regional_hosted_zone_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "certificate_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "regional_certificate_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "ownership_verification_certificate_arn",
    "type": "string",
    "description": "The ARN of the public certificate issued by ACM to validate ownership of your custom domain. Only required when configuring mutual TLS and using an ACM imported or private CA certificate ARN as the RegionalCertificateArn."
  },
  {
    "name": "security_policy",
    "type": "string",
    "description": ""
  },
  {
    "name": "routing_mode",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
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
    "name": "domain_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainname.html"><code>AWS::ApiGateway::DomainName</code></a>.

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
    <td><CopyableCode code="region" /></td>
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
domain_name,
domain_name_arn,
distribution_domain_name,
distribution_hosted_zone_id,
endpoint_configuration,
mutual_tls_authentication,
regional_domain_name,
regional_hosted_zone_id,
certificate_arn,
regional_certificate_arn,
ownership_verification_certificate_arn,
security_policy,
routing_mode,
tags
FROM awscc.apigateway.domain_names
WHERE region = 'us-east-1' AND Identifier = '{{ domain_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>domain_names</code> in a region.
```sql
SELECT
region,
domain_name
FROM awscc.apigateway.domain_names_list_only
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
INSERT INTO awscc.apigateway.domain_names (
 DomainName,
 EndpointConfiguration,
 MutualTlsAuthentication,
 CertificateArn,
 RegionalCertificateArn,
 OwnershipVerificationCertificateArn,
 SecurityPolicy,
 RoutingMode,
 Tags,
 region
)
SELECT
'{{ domain_name }}',
 '{{ endpoint_configuration }}',
 '{{ mutual_tls_authentication }}',
 '{{ certificate_arn }}',
 '{{ regional_certificate_arn }}',
 '{{ ownership_verification_certificate_arn }}',
 '{{ security_policy }}',
 '{{ routing_mode }}',
 '{{ tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.apigateway.domain_names (
 DomainName,
 EndpointConfiguration,
 MutualTlsAuthentication,
 CertificateArn,
 RegionalCertificateArn,
 OwnershipVerificationCertificateArn,
 SecurityPolicy,
 RoutingMode,
 Tags,
 region
)
SELECT
 '{{ domain_name }}',
 '{{ endpoint_configuration }}',
 '{{ mutual_tls_authentication }}',
 '{{ certificate_arn }}',
 '{{ regional_certificate_arn }}',
 '{{ ownership_verification_certificate_arn }}',
 '{{ security_policy }}',
 '{{ routing_mode }}',
 '{{ tags }}',
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
      - name: domain_name
        value: '{{ domain_name }}'
      - name: endpoint_configuration
        value:
          ip_address_type: '{{ ip_address_type }}'
          types:
            - '{{ types[0] }}'
          vpc_endpoint_ids:
            - '{{ vpc_endpoint_ids[0] }}'
      - name: mutual_tls_authentication
        value:
          truststore_uri: '{{ truststore_uri }}'
          truststore_version: '{{ truststore_version }}'
      - name: certificate_arn
        value: '{{ certificate_arn }}'
      - name: regional_certificate_arn
        value: '{{ regional_certificate_arn }}'
      - name: ownership_verification_certificate_arn
        value: '{{ ownership_verification_certificate_arn }}'
      - name: security_policy
        value: '{{ security_policy }}'
      - name: routing_mode
        value: '{{ routing_mode }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>domain_name</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.apigateway.domain_names
SET PatchDocument = string('{{ {
    "EndpointConfiguration": endpoint_configuration,
    "MutualTlsAuthentication": mutual_tls_authentication,
    "CertificateArn": certificate_arn,
    "RegionalCertificateArn": regional_certificate_arn,
    "OwnershipVerificationCertificateArn": ownership_verification_certificate_arn,
    "SecurityPolicy": security_policy,
    "RoutingMode": routing_mode,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ domain_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigateway.domain_names
WHERE Identifier = '{{ domain_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>domain_names</code> resource, the following permissions are required:

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
apigateway:POST,
apigateway:PUT,
apigateway:GET
```

</TabItem>
<TabItem value="read">

```json
apigateway:GET
```

</TabItem>
<TabItem value="update">

```json
apigateway:GET,
apigateway:PUT,
apigateway:PATCH
```

</TabItem>
<TabItem value="delete">

```json
apigateway:GET,
apigateway:DELETE
```

</TabItem>
<TabItem value="list">

```json
apigateway:GET
```

</TabItem>
</Tabs>