---
title: deployments_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments_list_only
  - appconfig
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

Lists <code>deployments</code> in a region or regions, for all properties use <a href="/services/appconfig/deployments/"><code>deployments</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>deployments_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::AppConfig::Deployment</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.appconfig.deployments_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "environment_id",
    "type": "string",
    "description": "The environment ID."
  },
  {
    "name": "deployment_number",
    "type": "string",
    "description": "The sequence number of the deployment."
  },
  {
    "name": "application_id",
    "type": "string",
    "description": "The application ID."
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
Lists all <code>deployments</code> in a region.
```sql
SELECT
region,
application_id,
environment_id,
deployment_number
FROM awscc.appconfig.deployments_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>deployments_list_only</code> resource, see <a href="/services/appconfig/deployments/#permissions"><code>deployments</code></a>

