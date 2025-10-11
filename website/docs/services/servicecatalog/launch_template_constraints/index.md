---
title: launch_template_constraints
hide_title: false
hide_table_of_contents: false
keywords:
  - launch_template_constraints
  - servicecatalog
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

Creates, updates, deletes or gets a <code>launch_template_constraint</code> resource or lists <code>launch_template_constraints</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>launch_template_constraints</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::ServiceCatalog::LaunchTemplateConstraint</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.servicecatalog.launch_template_constraints" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="accept_language" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="portfolio_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="product_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="rules" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchtemplateconstraint.html"><code>AWS::ServiceCatalog::LaunchTemplateConstraint</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
</tbody>
</table>






