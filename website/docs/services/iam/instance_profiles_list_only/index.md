---
title: instance_profiles_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_profiles_list_only
  - iam
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

Lists <code>instance_profiles</code> in a region or regions, for all properties use <a href="/services/iam/instance_profiles/"><code>instance_profiles</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>instance_profiles_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates a new instance profile. For information about instance profiles, see &#91;Using instance profiles&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/id&#95;roles&#95;use&#95;switch-role-ec2&#95;instance-profiles.html).<br />For information about the number of instance profiles you can create, see &#91;object quotas&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/reference&#95;iam-quotas.html) in the &#42;User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iam.instance_profiles_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "instance_profile_name",
    "type": "string",
    "description": "The name of the instance profile to create.<br />This parameter allows (through its &#91;regex pattern&#93;(https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: &#95;+=,.@-"
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
Lists all <code>instance_profiles</code> in a region.
```sql
SELECT
region,
instance_profile_name
FROM awscc.iam.instance_profiles_list_only
;
```


## Permissions

For permissions required to operate on the <code>instance_profiles_list_only</code> resource, see <a href="/services/iam/instance_profiles/#permissions"><code>instance_profiles</code></a>

