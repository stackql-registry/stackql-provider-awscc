---
title: eip_associations_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - eip_associations_list_only
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

Lists <code>eip_associations</code> in a region or regions, for all properties use <a href="/services/ec2/eip_associations/"><code>eip_associations</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>eip_associations_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Associates an Elastic IP address with an instance or a network interface. Before you can use an Elastic IP address, you must allocate it to your account. For more information about working with Elastic IP addresses, see &#91;Elastic IP address concepts and rules&#93;(https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#vpc-eip-overview).<br />You must specify &#96;&#96;AllocationId&#96;&#96; and either &#96;&#96;InstanceId&#96;&#96;, &#96;&#96;NetworkInterfaceId&#96;&#96;, or &#96;&#96;PrivateIpAddress&#96;&#96;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.eip_associations_list_only" /></td></tr>
</tbody>
</table>

## Fields
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
Lists all <code>eip_associations</code> in a region.
```sql
SELECT
region,
id
FROM awscc.ec2.eip_associations_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>eip_associations_list_only</code> resource, see <a href="/services/ec2/eip_associations/#permissions"><code>eip_associations</code></a>

