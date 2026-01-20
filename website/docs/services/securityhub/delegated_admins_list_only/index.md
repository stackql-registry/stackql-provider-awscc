---
title: delegated_admins_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - delegated_admins_list_only
  - securityhub
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

Lists <code>delegated_admins</code> in a region or regions, for all properties use <a href="/services/securityhub/delegated_admins/"><code>delegated_admins</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>delegated_admins_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::SecurityHub::DelegatedAdmin&#96;&#96; resource designates the delegated ASHlong administrator account for an organization. You must enable the integration between ASH and AOlong before you can designate a delegated ASH administrator. Only the management account for an organization can designate the delegated ASH administrator account. For more information, see &#91;Designating the delegated administrator&#93;(https://docs.aws.amazon.com/securityhub/latest/userguide/designate-orgs-admin-account.html#designate-admin-instructions) in the &#42;User Guide&#42;.<br />To change the delegated administrator account, remove the current delegated administrator account, and then designate the new account.<br />To designate multiple delegated administrators in different organizations and AWS-Regions, we recommend using &#91;mappings&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/mappings-section-structure.html).<br />Tags aren't supported for this resource.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.securityhub.delegated_admins_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "delegated_admin_identifier",
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
Lists all <code>delegated_admins</code> in a region.
```sql
SELECT
region,
delegated_admin_identifier
FROM awscc.securityhub.delegated_admins_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>delegated_admins_list_only</code> resource, see <a href="/services/securityhub/delegated_admins/#permissions"><code>delegated_admins</code></a>

