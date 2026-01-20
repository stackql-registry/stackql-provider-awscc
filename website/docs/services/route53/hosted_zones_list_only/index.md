---
title: hosted_zones_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - hosted_zones_list_only
  - route53
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

Lists <code>hosted_zones</code> in a region or regions, for all properties use <a href="/services/route53/hosted_zones/"><code>hosted_zones</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>hosted_zones_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates a new public or private hosted zone. You create records in a public hosted zone to define how you want to route traffic on the internet for a domain, such as example.com, and its subdomains (apex.example.com, acme.example.com). You create records in a private hosted zone to define how you want to route traffic for a domain and its subdomains within one or more Amazon Virtual Private Clouds (Amazon VPCs). <br />You can't convert a public hosted zone to a private hosted zone or vice versa. Instead, you must create a new hosted zone with the same name and create new resource record sets.<br />For more information about charges for hosted zones, see &#91;Amazon Route 53 Pricing&#93;(https://docs.aws.amazon.com/route53/pricing/).<br />Note the following:<br />+ You can't create a hosted zone for a top-level domain (TLD) such as .com.<br />+ If your domain is registered with a registrar other than Route 53, you must update the name servers with your registrar to make Route 53 the DNS service for the domain. For more information, see &#91;Migrating DNS Service for an Existing Domain to Amazon Route 53&#93;(https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/MigratingDNS.html) in the &#42;Amazon Route 53 Developer Guide&#42;. <br /><br />When you submit a &#96;&#96;CreateHostedZone&#96;&#96; request, the initial status of the hosted zone is &#96;&#96;PENDING&#96;&#96;. For public hosted zones, this means that the NS and SOA records are not yet available on all Route 53 DNS servers. When the NS and SOA records are available, the status of the zone changes to &#96;&#96;INSYNC&#96;&#96;.<br />The &#96;&#96;CreateHostedZone&#96;&#96; request requires the caller to have an &#96;&#96;ec2:DescribeVpcs&#96;&#96; permission.<br />When creating private hosted zones, the Amazon VPC must belong to the same partition where the hosted zone is created. A partition is a group of AWS-Regions. Each AWS-account is scoped to one partition.<br />The following are the supported partitions:<br />+ &#96;&#96;aws&#96;&#96; - AWS-Regions<br />+ &#96;&#96;aws-cn&#96;&#96; - China Regions<br />+ &#96;&#96;aws-us-gov&#96;&#96; - govcloud-us-region<br /><br />For more information, see &#91;Access Management&#93;(https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the &#42;General Reference&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53.hosted_zones_list_only" /></td></tr>
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
Lists all <code>hosted_zones</code> in a region.
```sql
SELECT
region,
id
FROM awscc.route53.hosted_zones_list_only
;
```


## Permissions

For permissions required to operate on the <code>hosted_zones_list_only</code> resource, see <a href="/services/route53/hosted_zones/#permissions"><code>hosted_zones</code></a>

