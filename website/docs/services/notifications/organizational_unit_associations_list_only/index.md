---
title: organizational_unit_associations_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - organizational_unit_associations_list_only
  - notifications
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

Lists <code>organizational_unit_associations</code> in a region or regions, for all properties use <a href="/services/notifications/organizational_unit_associations/"><code>organizational_unit_associations</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>organizational_unit_associations_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Notifications::OrganizationalUnitAssociation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.notifications.organizational_unit_associations_list_only" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="notification_configuration_arn" /></td><td><code>string</code></td><td>ARN identifier of the NotificationConfiguration.<br />Example: arn:aws:notifications::123456789012:configuration/a01jes88qxwkbj05xv9c967pgm1</td></tr>
<tr><td><CopyableCode code="organizational_unit_id" /></td><td><code>string</code></td><td>The ID of the organizational unit.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

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
Lists all <code>organizational_unit_associations</code> in a region.
```sql
SELECT
region,
notification_configuration_arn,
organizational_unit_id
FROM awscc.notifications.organizational_unit_associations_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>organizational_unit_associations_list_only</code> resource, see <a href="/services/notifications/organizational_unit_associations/#permissions"><code>organizational_unit_associations</code></a>

