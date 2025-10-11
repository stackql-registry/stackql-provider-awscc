---
title: replication_configurations_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - replication_configurations_list_only
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

Lists <code>replication_configurations</code> in a region or regions, for all properties use <a href="/services/ecr/replication_configurations/"><code>replication_configurations</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>replication_configurations_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The <code>AWS::ECR::ReplicationConfiguration</code> resource creates or updates the replication configuration for a private registry. The first time a replication configuration is applied to a private registry, a service-linked IAM role is created in your account for the replication process. For more information, see &#91;Using Service-Linked Roles for Amazon ECR&#93;(https://docs.aws.amazon.com/AmazonECR/latest/userguide/using-service-linked-roles.html) in the ASTERIX;Amazon Elastic Container Registry User GuideASTERIX;.<br />When configuring cross-account replication, the destination account must grant the source account permission to replicate. This permission is controlled using a private registry permissions policy. For more information, see <code>AWS::ECR::RegistryPolicy</code>.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ecr.replication_configurations_list_only" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="registry_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

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
Lists all <code>replication_configurations</code> in a region.
```sql
SELECT
region,
registry_id
FROM awscc.ecr.replication_configurations_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>replication_configurations_list_only</code> resource, see <a href="/services/ecr/replication_configurations/#permissions"><code>replication_configurations</code></a>

