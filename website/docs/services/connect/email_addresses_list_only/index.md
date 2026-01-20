---
title: email_addresses_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - email_addresses_list_only
  - connect
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

Lists <code>email_addresses</code> in a region or regions, for all properties use <a href="/services/connect/email_addresses/"><code>email_addresses</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>email_addresses_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Connect::EmailAddress</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.email_addresses_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "email_address_arn",
    "type": "string",
    "description": "The identifier of the email address."
  },
  {
    "name": "email_address",
    "type": "string",
    "description": "Email address to be created for this instance"
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
Lists all <code>email_addresses</code> in a region.
```sql
SELECT
region,
email_address_arn
FROM awscc.connect.email_addresses_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>email_addresses_list_only</code> resource, see <a href="/services/connect/email_addresses/#permissions"><code>email_addresses</code></a>

