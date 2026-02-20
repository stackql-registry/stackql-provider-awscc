---
title: compliance_summary
hide_title: false
hide_table_of_contents: false
keywords:
  - compliance_summary
  - tagging
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

Returns a table that shows counts of resources that are noncompliant with their tag policies

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>compliance_summary</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>compliance_summary</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.tagging.compliance_summary" /></td></tr>
</tbody>
</table>

## Fields
<code>SELECT</code> operation not supported for this resource.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="get_compliance_summary" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>







