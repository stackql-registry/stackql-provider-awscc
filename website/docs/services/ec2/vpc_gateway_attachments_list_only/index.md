---
title: vpc_gateway_attachments_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_gateway_attachments_list_only
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

Lists <code>vpc_gateway_attachments</code> in a region or regions, for all properties use <a href="/services/ec2/vpc_gateway_attachments/"><code>vpc_gateway_attachments</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vpc_gateway_attachments_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EC2::VPCGatewayAttachment</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.vpc_gateway_attachments_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "attachment_type",
    "type": "string",
    "description": "Used to identify if this resource is an Internet Gateway or Vpn Gateway Attachment"
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": "The ID of the VPC."
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
Lists all <code>vpc_gateway_attachments</code> in a region.
```sql
SELECT
region,
attachment_type,
vpc_id
FROM awscc.ec2.vpc_gateway_attachments_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>vpc_gateway_attachments_list_only</code> resource, see <a href="/services/ec2/vpc_gateway_attachments/#permissions"><code>vpc_gateway_attachments</code></a>

