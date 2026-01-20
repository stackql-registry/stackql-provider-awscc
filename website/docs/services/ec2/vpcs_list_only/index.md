---
title: vpcs_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - vpcs_list_only
  - ec2
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

Lists <code>vpcs</code> in a region or regions, for all properties use <a href="/services/ec2/vpcs/"><code>vpcs</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vpcs_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Specifies a virtual private cloud (VPC).<br />To add an IPv6 CIDR block to the VPC, see &#91;AWS::EC2::VPCCidrBlock&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpccidrblock.html).<br />For more information, see &#91;Virtual private clouds (VPC)&#93;(https://docs.aws.amazon.com/vpc/latest/userguide/configure-your-vpc.html) in the &#42;Amazon VPC User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.vpcs_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "vpc_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples
Lists all <code>vpcs</code> in a region.
```sql
SELECT
region,
vpc_id
FROM awscc.ec2.vpcs_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>vpcs_list_only</code> resource, see <a href="/services/ec2/vpcs/#permissions"><code>vpcs</code></a>

