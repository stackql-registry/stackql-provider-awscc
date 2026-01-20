---
title: registry_policies_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - registry_policies_list_only
  - ecr
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

Lists <code>registry_policies</code> in a region or regions, for all properties use <a href="/services/ecr/registry_policies/"><code>registry_policies</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>registry_policies_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ECR::RegistryPolicy&#96;&#96; resource creates or updates the permissions policy for a private registry.<br />A private registry policy is used to specify permissions for another AWS-account and is used when configuring cross-account replication. For more information, see &#91;Registry permissions&#93;(https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html) in the &#42;Amazon Elastic Container Registry User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ecr.registry_policies_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "registry_id",
    "type": "string",
    "description": "The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed."
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
Lists all <code>registry_policies</code> in a region.
```sql
SELECT
region,
registry_id
FROM awscc.ecr.registry_policies_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>registry_policies_list_only</code> resource, see <a href="/services/ecr/registry_policies/#permissions"><code>registry_policies</code></a>

