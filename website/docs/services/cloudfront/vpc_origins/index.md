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
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="created_time" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="last_modified_time" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>A complex type that contains zero or more <code>Tag</code> elements.</td></tr>
<tr><td><CopyableCode code="vpc_origin_endpoint_config" /></td><td><code>object</code></td><td>The VPC origin endpoint configuration.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-vpcorigin.html"><code>AWS::CloudFront::VpcOrigin</code></a>.

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
    <td><CopyableCode code="VpcOriginEndpointConfig, region" /></td>
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
Gets all <code>vpc_origins</code> in a region.
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
;
```
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
