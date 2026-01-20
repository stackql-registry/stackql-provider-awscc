---
title: portfolio_shares
hide_title: false
hide_table_of_contents: false
keywords:
  - portfolio_shares
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

Creates, updates, deletes or gets a <code>portfolio_share</code> resource or lists <code>portfolio_shares</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>portfolio_shares</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::ServiceCatalog::PortfolioShare</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.servicecatalog.portfolio_shares" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "accept_language",
    "type": "string",
    "description": ""
  },
  {
    "name": "portfolio_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "account_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "share_tag_options",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioshare.html"><code>AWS::ServiceCatalog::PortfolioShare</code></a>.

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






