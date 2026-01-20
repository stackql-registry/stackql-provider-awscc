---
title: vpcdhcp_options_associations_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - vpcdhcp_options_associations_list_only
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

Lists <code>vpcdhcp_options_associations</code> in a region or regions, for all properties use <a href="/services/ec2/vpcdhcp_options_associations/"><code>vpcdhcp_options_associations</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vpcdhcp_options_associations_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Associates a set of DHCP options with a VPC, or associates no DHCP options with the VPC.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.vpcdhcp_options_associations_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "dhcp_options_id",
    "type": "string",
    "description": "The ID of the DHCP options set, or default to associate no DHCP options with the VPC."
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
Lists all <code>vpcdhcp_options_associations</code> in a region.
```sql
SELECT
region,
dhcp_options_id,
vpc_id
FROM awscc.ec2.vpcdhcp_options_associations_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>vpcdhcp_options_associations_list_only</code> resource, see <a href="/services/ec2/vpcdhcp_options_associations/#permissions"><code>vpcdhcp_options_associations</code></a>

