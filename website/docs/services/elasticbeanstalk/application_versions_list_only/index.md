---
title: application_versions_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - application_versions_list_only
  - elasticbeanstalk
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

Lists <code>application_versions</code> in a region or regions, for all properties use <a href="/services/elasticbeanstalk/application_versions/"><code>application_versions</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>application_versions_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::ElasticBeanstalk::ApplicationVersion</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.elasticbeanstalk.application_versions_list_only" /></td></tr>
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
    "name": "application_name",
    "type": "string",
    "description": "The name of the Elastic Beanstalk application that is associated with this application version."
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
Lists all <code>application_versions</code> in a region.
```sql
SELECT
region,
application_name,
id
FROM awscc.elasticbeanstalk.application_versions_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>application_versions_list_only</code> resource, see <a href="/services/elasticbeanstalk/application_versions/#permissions"><code>application_versions</code></a>

