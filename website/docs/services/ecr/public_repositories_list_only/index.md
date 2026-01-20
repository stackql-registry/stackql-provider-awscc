---
title: public_repositories_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - public_repositories_list_only
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

Lists <code>public_repositories</code> in a region or regions, for all properties use <a href="/services/ecr/public_repositories/"><code>public_repositories</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>public_repositories_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ECR::PublicRepository&#96;&#96; resource specifies an Amazon Elastic Container Registry Public (Amazon ECR Public) repository, where users can push and pull Docker images, Open Container Initiative (OCI) images, and OCI compatible artifacts. For more information, see &#91;Amazon ECR public repositories&#93;(https://docs.aws.amazon.com/AmazonECR/latest/public/public-repositories.html) in the &#42;Amazon ECR Public User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ecr.public_repositories_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "repository_name",
    "type": "string",
    "description": "The name to use for the public repository. The repository name may be specified on its own (such as &#96;&#96;nginx-web-app&#96;&#96;) or it can be prepended with a namespace to group the repository into a category (such as &#96;&#96;project-a/nginx-web-app&#96;&#96;). If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the repository name. For more information, see &#91;Name Type&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).<br />If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name."
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
Lists all <code>public_repositories</code> in a region.
```sql
SELECT
region,
repository_name
FROM awscc.ecr.public_repositories_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>public_repositories_list_only</code> resource, see <a href="/services/ecr/public_repositories/#permissions"><code>public_repositories</code></a>

