---
title: vpc_ingress_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_ingress_connections
  - apprunner
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

Creates, updates, deletes or gets a <code>vpc_ingress_connection</code> resource or lists <code>vpc_ingress_connections</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vpc_ingress_connections</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::AppRunner::VpcIngressConnection resource is an App Runner resource that specifies an App Runner VpcIngressConnection.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apprunner.vpc_ingress_connections" /></td></tr>
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
    "name": "vpc_ingress_connection_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the VpcIngressConnection."
  },
  {
    "name": "vpc_ingress_connection_name",
    "type": "string",
    "description": "The customer-provided Vpc Ingress Connection name."
  },
  {
    "name": "service_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the service."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The current status of the VpcIngressConnection."
  },
  {
    "name": "domain_name",
    "type": "string",
    "description": "The Domain name associated with the VPC Ingress Connection."
  },
  {
    "name": "ingress_vpc_configuration",
    "type": "object",
    "description": "The configuration of customer’s VPC and related VPC endpoint",
    "children": [
      {
        "name": "vpc_id",
        "type": "string",
        "description": "The ID of the VPC that the VPC endpoint is used in."
      },
      {
        "name": "vpc_endpoint_id",
        "type": "string",
        "description": "The ID of the VPC endpoint that your App Runner service connects to."
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
    "name": "vpc_ingress_connection_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the VpcIngressConnection."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcingressconnection.html"><code>AWS::AppRunner::VpcIngressConnection</code></a>.

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
    <td><code>vpc_ingress_connections</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ServiceArn, IngressVpcConfiguration, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>vpc_ingress_connections</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>vpc_ingress_connections</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>vpc_ingress_connections_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>vpc_ingress_connections</code></td>
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

Gets all properties from an individual <code>vpc_ingress_connection</code>.
```sql
SELECT
region,
vpc_ingress_connection_arn,
vpc_ingress_connection_name,
service_arn,
status,
domain_name,
ingress_vpc_configuration,
tags
FROM awscc.apprunner.vpc_ingress_connections
WHERE region = 'us-east-1' AND data__Identifier = '<VpcIngressConnectionArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>vpc_ingress_connections</code> in a region.
```sql
SELECT
region,
vpc_ingress_connection_arn
FROM awscc.apprunner.vpc_ingress_connections_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>vpc_ingress_connection</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.apprunner.vpc_ingress_connections (
 ServiceArn,
 IngressVpcConfiguration,
 region
)
SELECT 
'{{ ServiceArn }}',
 '{{ IngressVpcConfiguration }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.apprunner.vpc_ingress_connections (
 VpcIngressConnectionName,
 ServiceArn,
 IngressVpcConfiguration,
 Tags,
 region
)
SELECT 
 '{{ VpcIngressConnectionName }}',
 '{{ ServiceArn }}',
 '{{ IngressVpcConfiguration }}',
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
  - name: vpc_ingress_connection
    props:
      - name: VpcIngressConnectionName
        value: '{{ VpcIngressConnectionName }}'
      - name: ServiceArn
        value: '{{ ServiceArn }}'
      - name: IngressVpcConfiguration
        value:
          VpcId: '{{ VpcId }}'
          VpcEndpointId: '{{ VpcEndpointId }}'
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
UPDATE awscc.apprunner.vpc_ingress_connections
SET data__PatchDocument = string('{{ {
    "IngressVpcConfiguration": ingress_vpc_configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<VpcIngressConnectionArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apprunner.vpc_ingress_connections
WHERE data__Identifier = '<VpcIngressConnectionArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>vpc_ingress_connections</code> resource, the following permissions are required:

### Create
```json
apprunner:CreateVpcIngressConnection,
apprunner:DescribeVpcIngressConnection,
ec2:DescribeVpcs,
ec2:DescribeVpcEndpoints,
ec2:DescribeSubnets,
apprunner:TagResource
```

### Read
```json
apprunner:DescribeVpcIngressConnection
```

### Update
```json
apprunner:UpdateVpcIngressConnection
```

### Delete
```json
apprunner:DeleteVpcIngressConnection
```

### List
```json
apprunner:ListVpcIngressConnections
```
