---
title: load_balancer_tls_certificates_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - load_balancer_tls_certificates_list_only
  - lightsail
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

Lists <code>load_balancer_tls_certificates</code> in a region or regions, for all properties use <a href="/services/lightsail/load_balancer_tls_certificates/"><code>load_balancer_tls_certificates</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>load_balancer_tls_certificates_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Lightsail::LoadBalancerTlsCertificate</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lightsail.load_balancer_tls_certificates_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "load_balancer_name",
    "type": "string",
    "description": "The name of your load balancer."
  },
  {
    "name": "certificate_name",
    "type": "string",
    "description": "The SSL/TLS certificate name."
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
Lists all <code>load_balancer_tls_certificates</code> in a region.
```sql
SELECT
region,
certificate_name,
load_balancer_name
FROM awscc.lightsail.load_balancer_tls_certificates_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>load_balancer_tls_certificates_list_only</code> resource, see <a href="/services/lightsail/load_balancer_tls_certificates/#permissions"><code>load_balancer_tls_certificates</code></a>

