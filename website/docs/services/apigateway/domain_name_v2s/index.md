---
title: domain_name_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_name_v2s
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

Creates, updates, deletes or gets a <code>domain_name_v2</code> resource or lists <code>domain_name_v2s</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>domain_name_v2s</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::ApiGateway::DomainNameV2.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigateway.domain_name_v2s" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "certificate_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "domain_name",
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
    "name": "security_policy",
    "type": "string",
    "description": ""
  },
  {
    "name": "policy",
    "type": "object",
    "description": ""
  },
  {
    "name": "domain_name_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "domain_name_arn",
    "type": "string",
    "description": "The amazon resource name (ARN) of the domain name resource."
  },
  {
    "name": "routing_mode",
    "type": "string",
    "description": "The valid routing modes are &#91;BASE&#95;PATH&#95;MAPPING&#95;ONLY&#93;, &#91;ROUTING&#95;RULE&#95;THEN&#95;BASE&#95;PATH&#95;MAPPING&#93; and &#91;ROUTING&#95;RULE&#95;ONLY&#93;. All other inputs are invalid."
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnamev2.html"><code>AWS::ApiGateway::DomainNameV2</code></a>.

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
    <td><CopyableCode code="region" /></td>
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
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>domain_name_v2</code>.
```sql
SELECT
region,
certificate_arn,
domain_name,
endpoint_configuration,
security_policy,
policy,
domain_name_id,
domain_name_arn,
routing_mode,
tags
FROM awscc.apigateway.domain_name_v2s
WHERE region = 'us-east-1' AND data__Identifier = '<DomainNameArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>domain_name_v2</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.apigateway.domain_name_v2s (
 CertificateArn,
 DomainName,
 EndpointConfiguration,
 SecurityPolicy,
 Policy,
 RoutingMode,
 Tags,
 region
)
SELECT 
'{{ CertificateArn }}',
 '{{ DomainName }}',
 '{{ EndpointConfiguration }}',
 '{{ SecurityPolicy }}',
 '{{ Policy }}',
 '{{ RoutingMode }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.apigateway.domain_name_v2s (
 CertificateArn,
 DomainName,
 EndpointConfiguration,
 SecurityPolicy,
 Policy,
 RoutingMode,
 Tags,
 region
)
SELECT 
 '{{ CertificateArn }}',
 '{{ DomainName }}',
 '{{ EndpointConfiguration }}',
 '{{ SecurityPolicy }}',
 '{{ Policy }}',
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
  - name: domain_name_v2
    props:
      - name: CertificateArn
        value: '{{ CertificateArn }}'
      - name: DomainName
        value: '{{ DomainName }}'
      - name: EndpointConfiguration
        value:
          IpAddressType: '{{ IpAddressType }}'
          Types:
            - '{{ Types[0] }}'
          VpcEndpointIds:
            - '{{ VpcEndpointIds[0] }}'
      - name: SecurityPolicy
        value: '{{ SecurityPolicy }}'
      - name: Policy
        value: {}
      - name: RoutingMode
        value: '{{ RoutingMode }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigateway.domain_name_v2s
WHERE data__Identifier = '<DomainNameArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>domain_name_v2s</code> resource, the following permissions are required:

### Create
```json
apigateway:POST,
apigateway:GET,
apigateway:UpdateDomainNamePolicy
```

### Read
```json
apigateway:GET
```

### Update
```json
apigateway:GET,
apigateway:PUT,
apigateway:PATCH,
apigateway:UpdateDomainNamePolicy
```

### Delete
```json
apigateway:DELETE,
apigateway:GET,
apigateway:UpdateDomainNamePolicy
```

### List
```json
apigateway:GET
```
