---
title: vpc_origins
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_origins
  - cloudfront
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

Creates, updates, deletes or gets a <code>vpc_origin</code> resource or lists <code>vpc_origins</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vpc_origins</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An Amazon CloudFront VPC origin.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudfront.vpc_origins" /></td></tr>
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
    "description": ""
  },
  {
    "name": "created_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "last_modified_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A complex type that contains zero or more &#96;&#96;Tag&#96;&#96; elements.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A string that contains &#96;&#96;Tag&#96;&#96; key.<br />The string length should be between 1 and 128 characters. Valid characters include &#96;&#96;a-z&#96;&#96;, &#96;&#96;A-Z&#96;&#96;, &#96;&#96;0-9&#96;&#96;, space, and the special characters &#96;&#96;&#95; - . : / = + @&#96;&#96;."
      },
      {
        "name": "value",
        "type": "string",
        "description": "A string that contains an optional &#96;&#96;Tag&#96;&#96; value.<br />The string length should be between 0 and 256 characters. Valid characters include &#96;&#96;a-z&#96;&#96;, &#96;&#96;A-Z&#96;&#96;, &#96;&#96;0-9&#96;&#96;, space, and the special characters &#96;&#96;&#95; - . : / = + @&#96;&#96;."
      }
    ]
  },
  {
    "name": "vpc_origin_endpoint_config",
    "type": "object",
    "description": "The VPC origin endpoint configuration.",
    "children": [
      {
        "name": "arn",
        "type": "string",
        "description": "The ARN of the CloudFront VPC origin endpoint configuration."
      },
      {
        "name": "h_tt_pport",
        "type": "integer",
        "description": "The HTTP port for the CloudFront VPC origin endpoint configuration. The default value is &#96;&#96;80&#96;&#96;."
      },
      {
        "name": "h_tt_ps_port",
        "type": "integer",
        "description": "The HTTPS port of the CloudFront VPC origin endpoint configuration. The default value is &#96;&#96;443&#96;&#96;."
      },
      {
        "name": "name",
        "type": "string",
        "description": "The name of the CloudFront VPC origin endpoint configuration."
      },
      {
        "name": "origin_protocol_policy",
        "type": "string",
        "description": "The origin protocol policy for the CloudFront VPC origin endpoint configuration."
      },
      {
        "name": "origin_ss_lprotocols",
        "type": "array",
        "description": "Specifies the minimum SSL/TLS protocol that CloudFront uses when connecting to your origin over HTTPS. Valid values include &#96;&#96;SSLv3&#96;&#96;, &#96;&#96;TLSv1&#96;&#96;, &#96;&#96;TLSv1.1&#96;&#96;, and &#96;&#96;TLSv1.2&#96;&#96;.<br />For more information, see &#91;Minimum Origin SSL Protocol&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginSSLProtocols) in the &#42;Amazon CloudFront Developer Guide&#42;."
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-vpcorigin.html"><code>AWS::CloudFront::VpcOrigin</code></a>.

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
    <td><code>vpc_origins</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="VpcOriginEndpointConfig, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>vpc_origins</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>vpc_origins</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>vpc_origins_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>vpc_origins</code></td>
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

Gets all properties from an individual <code>vpc_origin</code>.
```sql
SELECT
region,
arn,
created_time,
id,
last_modified_time,
status,
tags,
vpc_origin_endpoint_config
FROM awscc.cloudfront.vpc_origins
WHERE data__Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>vpc_origins</code> in a region.
```sql
SELECT
region,
id
FROM awscc.cloudfront.vpc_origins_list_only
;
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>vpc_origin</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudfront.vpc_origins (
 VpcOriginEndpointConfig,
 region
)
SELECT 
'{{ VpcOriginEndpointConfig }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudfront.vpc_origins (
 Tags,
 VpcOriginEndpointConfig,
 region
)
SELECT 
 '{{ Tags }}',
 '{{ VpcOriginEndpointConfig }}',
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
  - name: vpc_origin
    props:
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: VpcOriginEndpointConfig
        value:
          Arn: '{{ Arn }}'
          HTTPPort: '{{ HTTPPort }}'
          HTTPSPort: '{{ HTTPSPort }}'
          Name: '{{ Name }}'
          OriginProtocolPolicy: '{{ OriginProtocolPolicy }}'
          OriginSSLProtocols:
            - '{{ OriginSSLProtocols[0] }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.cloudfront.vpc_origins
SET data__PatchDocument = string('{{ {
    "Tags": tags,
    "VpcOriginEndpointConfig": vpc_origin_endpoint_config
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudfront.vpc_origins
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>vpc_origins</code> resource, the following permissions are required:

### Create
```json
cloudfront:CreateVpcOrigin,
cloudfront:GetVpcOrigin,
cloudfront:TagResource,
ec2:DescribeInstances,
elasticloadbalancing:DescribeLoadBalancers,
ec2:DescribeInternetGateways,
iam:CreateServiceLinkedRole,
sts:AssumeRole
```

### Delete
```json
cloudfront:DeleteVpcOrigin,
cloudfront:GetVpcOrigin,
elasticloadbalancing:DescribeLoadBalancers,
ec2:DescribeInstances,
ec2:DescribeInternetGateways,
iam:CreateServiceLinkedRole,
sts:AssumeRole
```

### List
```json
cloudfront:ListVpcOrigins
```

### Read
```json
cloudfront:GetVpcOrigin,
cloudfront:ListTagsForResource
```

### Update
```json
cloudfront:UpdateVpcOrigin,
cloudfront:GetVpcOrigin,
cloudfront:TagResource,
ec2:DescribeInstances,
cloudfront:UntagResource,
cloudfront:ListTagsForResource,
elasticloadbalancing:DescribeLoadBalancers,
ec2:DescribeInternetGateways,
iam:CreateServiceLinkedRole,
sts:AssumeRole
```
