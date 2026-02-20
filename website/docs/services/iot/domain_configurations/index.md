---
title: domain_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_configurations
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

Creates, updates, deletes or gets a <code>domain_configuration</code> resource or lists <code>domain_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>domain_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Create and manage a Domain Configuration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iot.domain_configurations" /></td></tr>
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
    "name": "domain_configuration_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "authorizer_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "allow_authorizer_override",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "default_authorizer_name",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "domain_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "server_certificate_arns",
    "type": "array",
    "description": ""
  },
  {
    "name": "service_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "validation_certificate_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "domain_configuration_status",
    "type": "string",
    "description": ""
  },
  {
    "name": "domain_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "server_certificate_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "enable_oc_sp_check",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "ocsp_lambda_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "ocsp_authorized_responder_arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "server_certificates",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "server_certificate_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "server_certificate_status",
        "type": "string",
        "description": ""
      },
      {
        "name": "server_certificate_status_detail",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "tls_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "security_policy",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "authentication_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "application_protocol",
    "type": "string",
    "description": ""
  },
  {
    "name": "client_certificate_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "client_certificate_callback_arn",
        "type": "string",
        "description": ""
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "domain_configuration_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html"><code>AWS::IoT::DomainConfiguration</code></a>.

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
    <td><code>domain_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>domain_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>domain_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>domain_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>domain_configurations</code></td>
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

Gets all properties from an individual <code>domain_configuration</code>.
```sql
SELECT
region,
domain_configuration_name,
authorizer_config,
domain_name,
server_certificate_arns,
service_type,
validation_certificate_arn,
arn,
domain_configuration_status,
domain_type,
server_certificate_config,
server_certificates,
tls_config,
authentication_type,
application_protocol,
client_certificate_config,
tags
FROM awscc.iot.domain_configurations
WHERE region = 'us-east-1' AND data__Identifier = '<DomainConfigurationName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>domain_configurations</code> in a region.
```sql
SELECT
region,
domain_configuration_name
FROM awscc.iot.domain_configurations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>domain_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iot.domain_configurations (
 ,
 region
)
SELECT 
'{{  }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iot.domain_configurations (
 DomainConfigurationName,
 AuthorizerConfig,
 DomainName,
 ServerCertificateArns,
 ServiceType,
 ValidationCertificateArn,
 DomainConfigurationStatus,
 ServerCertificateConfig,
 TlsConfig,
 AuthenticationType,
 ApplicationProtocol,
 ClientCertificateConfig,
 Tags,
 region
)
SELECT 
 '{{ DomainConfigurationName }}',
 '{{ AuthorizerConfig }}',
 '{{ DomainName }}',
 '{{ ServerCertificateArns }}',
 '{{ ServiceType }}',
 '{{ ValidationCertificateArn }}',
 '{{ DomainConfigurationStatus }}',
 '{{ ServerCertificateConfig }}',
 '{{ TlsConfig }}',
 '{{ AuthenticationType }}',
 '{{ ApplicationProtocol }}',
 '{{ ClientCertificateConfig }}',
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
  - name: domain_configuration
    props:
      - name: DomainConfigurationName
        value: '{{ DomainConfigurationName }}'
      - name: AuthorizerConfig
        value:
          AllowAuthorizerOverride: '{{ AllowAuthorizerOverride }}'
          DefaultAuthorizerName: '{{ DefaultAuthorizerName }}'
      - name: DomainName
        value: '{{ DomainName }}'
      - name: ServerCertificateArns
        value:
          - '{{ ServerCertificateArns[0] }}'
      - name: ServiceType
        value: '{{ ServiceType }}'
      - name: ValidationCertificateArn
        value: '{{ ValidationCertificateArn }}'
      - name: DomainConfigurationStatus
        value: '{{ DomainConfigurationStatus }}'
      - name: ServerCertificateConfig
        value:
          EnableOCSPCheck: '{{ EnableOCSPCheck }}'
          OcspLambdaArn: '{{ OcspLambdaArn }}'
          OcspAuthorizedResponderArn: '{{ OcspAuthorizedResponderArn }}'
      - name: TlsConfig
        value:
          SecurityPolicy: '{{ SecurityPolicy }}'
      - name: AuthenticationType
        value: '{{ AuthenticationType }}'
      - name: ApplicationProtocol
        value: '{{ ApplicationProtocol }}'
      - name: ClientCertificateConfig
        value:
          ClientCertificateCallbackArn: '{{ ClientCertificateCallbackArn }}'
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
UPDATE awscc.iot.domain_configurations
SET data__PatchDocument = string('{{ {
    "AuthorizerConfig": authorizer_config,
    "DomainConfigurationStatus": domain_configuration_status,
    "ServerCertificateConfig": server_certificate_config,
    "TlsConfig": tls_config,
    "AuthenticationType": authentication_type,
    "ApplicationProtocol": application_protocol,
    "ClientCertificateConfig": client_certificate_config,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<DomainConfigurationName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.domain_configurations
WHERE data__Identifier = '<DomainConfigurationName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>domain_configurations</code> resource, the following permissions are required:

### Create
```json
iot:CreateDomainConfiguration,
iot:UpdateDomainConfiguration,
iot:DescribeDomainConfiguration,
iot:TagResource,
iot:ListTagsForResource,
acm:GetCertificate,
kms:Decrypt
```

### Read
```json
iot:DescribeDomainConfiguration,
iot:ListTagsForResource,
kms:Decrypt
```

### Update
```json
iot:UpdateDomainConfiguration,
iot:DescribeDomainConfiguration,
iot:ListTagsForResource,
iot:TagResource,
iot:UntagResource,
kms:Decrypt
```

### Delete
```json
iot:DescribeDomainConfiguration,
iot:DeleteDomainConfiguration,
iot:UpdateDomainConfiguration,
kms:Decrypt
```

### List
```json
iot:ListDomainConfigurations
```
