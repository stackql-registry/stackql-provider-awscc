---
title: organization_configurations_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_configurations_list_only
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

Lists <code>organization_configurations</code> in a region or regions, for all properties use <a href="/services/securityhub/organization_configurations/"><code>organization_configurations</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>organization_configurations_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::SecurityHub::OrganizationConfiguration resource represents the configuration of your organization in Security Hub. Only the Security Hub administrator account can create Organization Configuration resource in each region and can opt-in to Central Configuration only in the aggregation region of FindingAggregator.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.securityhub.organization_configurations_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "organization_configuration_identifier",
    "type": "string",
    "description": "The identifier of the OrganizationConfiguration being created and assigned as the unique identifier."
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
Lists all <code>organization_configurations</code> in a region.
```sql
SELECT
region,
organization_configuration_identifier
FROM awscc.securityhub.organization_configurations_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>organization_configurations_list_only</code> resource, see <a href="/services/securityhub/organization_configurations/#permissions"><code>organization_configurations</code></a>

