---
title: launch_templates_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - launch_templates_list_only
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

Lists <code>launch_templates</code> in a region or regions, for all properties use <a href="/services/ec2/launch_templates/"><code>launch_templates</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>launch_templates_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Specifies the properties for creating a launch template.<br />The minimum required properties for specifying a launch template are as follows:<br />+ You must specify at least one property for the launch template data.<br />+ You can optionally specify a name for the launch template. If you do not specify a name, CFN creates a name for you.<br /><br />A launch template can contain some or all of the configuration information to launch an instance. When you launch an instance using a launch template, instance properties that are not specified in the launch template use default values, except the &#96;&#96;ImageId&#96;&#96; property, which has no default value. If you do not specify an AMI ID for the launch template &#96;&#96;ImageId&#96;&#96; property, you must specify an AMI ID for the instance &#96;&#96;ImageId&#96;&#96; property.<br />For more information, see &#91;Launch an instance from a launch template&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html) in the &#42;Amazon EC2 User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.launch_templates_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "launch_template_id",
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
Lists all <code>launch_templates</code> in a region.
```sql
SELECT
region,
launch_template_id
FROM awscc.ec2.launch_templates_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>launch_templates_list_only</code> resource, see <a href="/services/ec2/launch_templates/#permissions"><code>launch_templates</code></a>

