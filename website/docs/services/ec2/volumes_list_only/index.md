---
title: volumes_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - volumes_list_only
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

Lists <code>volumes</code> in a region or regions, for all properties use <a href="/services/ec2/volumes/"><code>volumes</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>volumes_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Specifies an Amazon Elastic Block Store (Amazon EBS) volume.<br />When you use CFNlong to update an Amazon EBS volume that modifies &#96;&#96;Iops&#96;&#96;, &#96;&#96;Size&#96;&#96;, or &#96;&#96;VolumeType&#96;&#96;, there is a cooldown period before another operation can occur. This can cause your stack to report being in &#96;&#96;UPDATE&#95;IN&#95;PROGRESS&#96;&#96; or &#96;&#96;UPDATE&#95;ROLLBACK&#95;IN&#95;PROGRESS&#96;&#96; for long periods of time.<br />Amazon EBS does not support sizing down an Amazon EBS volume. CFNlong does not attempt to modify an Amazon EBS volume to a smaller size on rollback.<br />Some common scenarios when you might encounter a cooldown period for Amazon EBS include:<br />+ You successfully update an Amazon EBS volume and the update succeeds. When you attempt another update within the cooldown window, that update will be subject to a cooldown period.<br />+ You successfully update an Amazon EBS volume and the update succeeds but another change in your &#96;&#96;update-stack&#96;&#96; call fails. The rollback will be subject to a cooldown period.<br /><br />For more information, see &#91;Requirements for EBS volume modifications&#93;(https://docs.aws.amazon.com/ebs/latest/userguide/modify-volume-requirements.html).<br />&#42;DeletionPolicy attribute&#42; <br />To control how CFNlong handles the volume when the stack is deleted, set a deletion policy for your volume. You can choose to retain the volume, to delete the volume, or to create a snapshot of the volume. For more information, see &#91;DeletionPolicy attribute&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html).<br />If you set a deletion policy that creates a snapshot, all tags on the volume are included in the snapshot.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.volumes_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "volume_id",
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
Lists all <code>volumes</code> in a region.
```sql
SELECT
region,
volume_id
FROM awscc.ec2.volumes_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>volumes_list_only</code> resource, see <a href="/services/ec2/volumes/#permissions"><code>volumes</code></a>

