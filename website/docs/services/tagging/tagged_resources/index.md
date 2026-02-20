---
title: tagged_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - tagged_resources
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

Returns all the tagged or previously tagged resources that are located in the specified AWS Region for the account

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>tagged_resources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>tagged_resources</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.tagging.tagged_resources" /></td></tr>
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
    <td><CopyableCode code="get_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>







