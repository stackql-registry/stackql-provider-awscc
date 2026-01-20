---
title: resource_update_constraints
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_update_constraints
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
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>resource_update_constraint</code> resource or lists <code>resource_update_constraints</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>resource_update_constraints</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::ServiceCatalog::ResourceUpdateConstraint</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.servicecatalog.resource_update_constraints" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "accept_language",
    "type": "string",
    "description": ""
  },
  {
    "name": "tag_update_on_provisioned_product",
    "type": "string",
    "description": ""
  },
  {
    "name": "portfolio_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "product_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-resourceupdateconstraint.html"><code>AWS::ServiceCatalog::ResourceUpdateConstraint</code></a>.

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






